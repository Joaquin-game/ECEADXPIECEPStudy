/* Repeatability-aware question-tree selection and owner-scoped question data transfer.
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

function cloneTransferObject(value){
  if(value===undefined||value===null)return {};
  try{return JSON.parse(JSON.stringify(value));}catch{return {serializationError:'Transfer data was not JSON serializable.'};}
}
function normalizeTransferData(source,ownerKey){
  if(source===undefined||source===null)return {};
  if(typeof source!=='object'||Array.isArray(source))throw new Error(`Transfer data for ${ownerKey} must be an object keyed by quantity symbol.`);
  const output={};
  for(const [symbol,quantity] of Object.entries(source)){
    if(!symbol.trim())throw new Error(`Transfer data for ${ownerKey} contains an empty symbol.`);
    // Primitive values are the preferred form when descendants only need the value.
    // Keep an explicit {value, unit} record when unit metadata is genuinely part of the transfer contract.
    if(quantity&&typeof quantity==='object'&&!Array.isArray(quantity)&&Object.prototype.hasOwnProperty.call(quantity,'value')){
      if(quantity.unit!==undefined&&typeof quantity.unit!=='string')throw new Error(`Transfer data unit ${ownerKey}.${symbol} must be a string.`);
      output[symbol]={...quantity};
    }else{
      output[symbol]=quantity;
    }
  }
  return output;
}
function registryQuestionContext(sharedData,parentQuestion=null,path=[]){
  if(!sharedData.dataTransferObject||typeof sharedData.dataTransferObject!=='object')sharedData.dataTransferObject=Object.create(null);
  const dataTransferObject=sharedData.dataTransferObject;
  return {data:sharedData,sharedData,dataTransferObject,
    receivedDataTransferObject:cloneTransferObject(dataTransferObject),
    parentQuestion,parentNodeId:parentQuestion?.questionNodeId||null,path:path.slice()};
}
function instantiateRegistryQuestion(spec,selectedFormats=['mc','fib'],sharedData={},parentQuestion=null,path=[]){
  const context=registryQuestionContext(sharedData,parentQuestion,path);
  const q=spec.make(context);
  q.sharedData=sharedData;
  q.dataTransferObject=context.dataTransferObject;
  q.receivedDataTransferObject=cloneTransferObject(context.receivedDataTransferObject);
  q.questionClass=spec.questionClass||q.questionClass||'numeric';
  q.repeatable=spec.repeatable!==false;
  q.questionNodeId=spec.id;
  q.questionParentId=spec.parentId||null;
  q.questionChildren=(spec.treeChildren||[]).slice();
  if(parentQuestion){
    q.parentQuestionId=parentQuestion.questionNodeId||parentQuestion.generatorId||null;
  }
  const ownerKey=spec.recipeKey||spec.id;
  q.transferData=normalizeTransferData(q.transferData,ownerKey);
  // Each generator publishes its own symbol dictionary under its recipe key; names are never aliased.
  context.dataTransferObject[ownerKey]=cloneTransferObject(q.transferData);
  // Keep an explicit post-construction snapshot for developer inspection. The input DTO remains
  // the exact snapshot captured before this node publishes its own dictionary.
  q.dataTransferObjectAfterConstruction=cloneTransferObject(context.dataTransferObject);
    sharedData[ownerKey]={questionId:spec.id,category:spec.category,questionClass:q.questionClass,
    answer:q.isSetupQuestion?undefined:(q.answerExact??q.answerText??q.answer),answerText:q.answerText,truthValue:q.truthValue,
    transferData:cloneTransferObject(q.transferData)};
  if(spec.questionClass==='numeric')normalizeTestMode(q,selectedFormats.filter(f=>f==='mc'||f==='fib').length?selectedFormats.filter(f=>f==='mc'||f==='fib'):['fib'],spec.choiceConcepts);
  else if(spec.questionClass==='setup'){
    q.isSetupQuestion=true;q.countsAsQuestion=false;q.type='setup';q.choices=null;
    for(const illustration of q.illustrations||[]){
      if((illustration.type==='svg'||illustration.svg||illustration.markup)&&!String(illustration.alt||'').trim())throw new Error(`Setup SVG in ${spec.id} must include alt text.`);
    }
    // Setup descriptors are context-only and never expose answer keys or scoring properties.
    delete q.answer;delete q.answerExact;delete q.answerText;delete q.answerSpec;delete q.answerLatex;delete q.tolerance;
    delete q.explanation;delete q.choices;
  }
  else if(spec.questionClass==='identification'){
    q.semanticType='id';
    if(selectedFormats.includes('id')&&selectedFormats.includes('mc')&&Math.random()<0.5){q.type='mc';q.identificationOptions=true;q.choices=buildChoices(q,spec.choiceConcepts||[])}
    else{q.type='id';q.choices=null;}
  }else if(spec.questionClass==='truefalse'){
    q.type='tf';q.choices=q.choices||[{value:1,correct:!!q.truthValue,label:'True'},{value:0,correct:!q.truthValue,label:'False'}];
  }
  q.selectedGeneratorFormats=(spec.formats||[]).slice();
  q.questionAttributeSnapshot=Object.fromEntries(Object.entries(q).filter(([key,value])=>key!=='sharedData'&&key!=='dataTransferObject'&&key!=='questionAttributeSnapshot'&&typeof value!=='function').map(([key,value])=>[key,cloneTransferObject(value)]));
  return q;
}

/* Assign presentation-only numbering after the answerable test set is final. Setup nodes have no
   question number; each setup instead carries a compact range/list of its answerable descendants. */
function finalizeTreePresentation(currentQuestions,setupInstances){
  const compress=numbers=>{
    const sorted=[...new Set(numbers)].sort((a,b)=>a-b);if(!sorted.length)return '';
    const chunks=[];let start=sorted[0],last=start;
    for(const n of sorted.slice(1)){if(n===last+1){last=n;continue}chunks.push(start===last?`${start}`:`${start}–${last}`);start=last=n}
    chunks.push(start===last?`${start}`:`${start}–${last}`);return chunks.join(', ');
  };
  currentQuestions.forEach((q,i)=>{q.index=i;q.displayQuestionNumber=i+1;});
  const setupLabelForIndex=index=>{
    let n=index+1,label='';while(n>0){n--;label=String.fromCharCode(65+(n%26))+label;n=Math.floor(n/26)}return `Setup ${label}`;
  };
  setupInstances.forEach((setup,index)=>{setup.setupLabel=setupLabelForIndex(index)});
  const isWithin=(q,ancestor)=>{let node=q._treeParentQuestion;const visited=new Set();while(node&&!visited.has(node)){if(node===ancestor)return true;visited.add(node);node=node._treeParentQuestion}return false};
  for(const setup of setupInstances){
    const numbers=currentQuestions.filter(q=>isWithin(q,setup)).map(q=>q.displayQuestionNumber).sort((a,b)=>a-b);
    setup.setupAppliedQuestionNumbers=numbers;setup.setupRangeLabel=compress(numbers);
  }
  for(const q of currentQuestions){
    const parent=q._treeParentQuestion;
    if(!parent){q.parentReference=null;continue}
    if(parent.isSetupQuestion){q.parentReference={kind:'setup',label:parent.setupLabel||'setup',range:parent.setupRangeLabel||'',title:parent.title||'Setup'};}
    else {q.parentReference={kind:'question',number:parent.displayQuestionNumber||((currentQuestions.indexOf(parent))+1),title:parent.title||'Question'};}
  }
  return {currentQuestions,setupInstances};
}
