/* Repeatability-aware question-tree selection and shared branch context.
   The registry stores edges by generator ID. Selection history can be cleared while visit counts
   remain monotonic, allowing a non-repeatable descendant to recur only under a repeated
   repeatable ancestor. */
class QuestionTreeSelector {
  constructor(registry=QUESTION_REGISTRY){
    this.registry=registry;
    this.byId=new Map(registry.map(node=>[node.id,node]));
    this.history=new Set();
    this.visitCounts=new Map();
    this.lastParentVisitCount=new Map();
    this.currentPath=[];
  }
  count(nodeOrId){const id=typeof nodeOrId==='string'?nodeOrId:nodeOrId?.id;return this.visitCounts.get(id)||0;}
  descendants(nodeOrId){
    const node=typeof nodeOrId==='string'?this.byId.get(nodeOrId):nodeOrId;
    if(!node)return [];
    const result=[],seen=new Set();
    const walk=current=>{for(const childId of current.treeChildren||[]){if(seen.has(childId))continue;seen.add(childId);const child=this.byId.get(childId);if(child){result.push(child);walk(child)}}};
    walk(node);return result;
  }
  clearDescendantHistory(nodeOrId){
    const node=typeof nodeOrId==='string'?this.byId.get(nodeOrId):nodeOrId;
    if(!node)return;
    for(const child of this.descendants(node))this.history.delete(child.id);
    // Intentionally retain visitCounts and lastParentVisitCount.
  }
  canSelect(node,parent=null){
    if(!node)return false;
    if(node.repeatable!==false)return true;
    const hadSelection=this.history.has(node.id)||this.lastParentVisitCount.has(node.id);
    if(!hadSelection)return true;
    const actualParent=parent||(node.parentId?this.byId.get(node.parentId):null);
    if(!actualParent||actualParent.repeatable===false)return false;
    const lastParentCount=this.lastParentVisitCount.get(node.id);
    if(lastParentCount===undefined)return !this.history.has(node.id);
    return this.count(actualParent)>lastParentCount;
  }
  record(node,parent=null){
    if(!this.canSelect(node,parent))return false;
    const previous=this.count(node),next=previous+1;
    this.visitCounts.set(node.id,next);
    // Revisiting a repeatable node reopens its branch history without erasing any counts.
    if(node.repeatable!==false&&previous>0){this.history.delete(node.id);this.clearDescendantHistory(node);}
    this.history.add(node.id);
    if(node.repeatable===false&&parent&&parent.repeatable!==false){
      this.lastParentVisitCount.set(node.id,this.count(parent));
    }
    return true;
  }
  chooseRoot(candidates){
    const available=(candidates||[]).filter(node=>!node.parentId&&this.canSelect(node));
    if(!available.length)return null;
    // Returning to the top-level pool clears history below the former root, but preserves counts.
    if(this.currentPath.length){const formerRoot=this.byId.get(this.currentPath[0]);if(formerRoot){this.clearDescendantHistory(formerRoot);if(formerRoot.repeatable!==false)this.history.delete(formerRoot.id)}}
    this.currentPath=[];
    const node=pick(available);
    if(!this.record(node,null))return null;
    this.currentPath=[node.id];
    return node;
  }
  chooseChild(parent,candidates=null){
    if(!parent||parent.repeatable===false)return null;
    const childSpecs=(candidates||((parent.treeChildren||[]).map(id=>this.byId.get(id)))).filter(Boolean);
    const available=childSpecs.filter(node=>node.parentId===parent.id&&this.canSelect(node,parent));
    if(!available.length)return null;
    const child=pick(available);
    if(!this.record(child,parent))return null;
    if(!this.currentPath.includes(parent.id))this.currentPath=[parent.id];
    this.currentPath=this.currentPath.slice(0,this.currentPath.indexOf(parent.id)+1);
    this.currentPath.push(child.id);
    return child;
  }
  backtrackOneLevel(){
    if(this.currentPath.length<2)return this.currentPath.length?this.byId.get(this.currentPath[0]):null;
    const childId=this.currentPath.pop(),child=this.byId.get(childId);
    if(child)this.clearDescendantHistory(child);
    if(child)this.history.delete(child.id);
    return this.byId.get(this.currentPath[this.currentPath.length-1])||null;
  }
  moveToTopLevel(){
    if(this.currentPath.length){const root=this.byId.get(this.currentPath[0]);if(root){this.clearDescendantHistory(root);if(root.repeatable!==false)this.history.delete(root.id)}}
    this.currentPath=[];
  }
}

function registryQuestionContext(sharedData,parentQuestion=null,path=[]){
  const parentAnswer=parentQuestion?(parentQuestion.answerExact??parentQuestion.answerText??parentQuestion.answer):undefined;
  return {data:sharedData,sharedData,parentQuestion,parentAnswer,parentNodeId:parentQuestion?.questionNodeId||null,path:path.slice()};
}
function instantiateRegistryQuestion(spec,selectedFormats=['mc','fib'],sharedData={},parentQuestion=null,path=[]){
  const context=registryQuestionContext(sharedData,parentQuestion,path);
  const q=spec.make(context);
  q.sharedData=sharedData;
  q.questionClass=spec.questionClass||q.questionClass||'numeric';
  q.classification=spec.classification||q.questionClass;
  q.repeatable=spec.repeatable!==false;
  q.questionNodeId=spec.id;
  q.questionParentId=spec.parentId||null;
  q.questionChildren=(spec.treeChildren||[]).slice();
  if(parentQuestion){
    q.parentQuestionId=parentQuestion.questionNodeId||parentQuestion.generatorId||null;
    q.parentAnswerExact=parentQuestion.answerExact??String(parentQuestion.answerText??parentQuestion.answer??'');
    q.parentContext=sharedData;
  }
  // Each node publishes its result into the same data object for child recipes to consume.
  sharedData[spec.recipeKey||spec.id]={questionId:spec.id,category:spec.category,classification:q.classification,
    answer:q.answerExact??q.answerText??q.answer,answerText:q.answerText,truthValue:q.truthValue};
  if(spec.questionClass==='numeric')normalizeTestMode(q,selectedFormats.filter(f=>f==='mc'||f==='fib').length?selectedFormats.filter(f=>f==='mc'||f==='fib'):['fib']);
  else if(spec.questionClass==='identification'){
    q.semanticType='id';
    if(selectedFormats.includes('id')&&selectedFormats.includes('mc')&&Math.random()<0.5){q.type='mc';q.identificationOptions=true;q.choices=buildChoices(q)}
    else{q.type='id';q.choices=null;}
  }else if(spec.questionClass==='truefalse'){
    q.type='tf';q.choices=q.choices||[{value:1,correct:!!q.truthValue,label:'True'},{value:0,correct:!q.truthValue,label:'False'}];
  }
  q.selectedGeneratorFormats=(spec.formats||[]).slice();
  return q;
}
