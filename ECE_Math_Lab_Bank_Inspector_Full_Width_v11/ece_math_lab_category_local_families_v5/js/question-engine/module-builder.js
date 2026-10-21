/* Generic question-tree module builder. A compound tree may have any branching factor or depth.
   This file knows only registry edges; topic-specific questions stay in category modules. */
function markQuestionTreeModule(module,title='Compound question tree'){
  const treeId=`tree-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`;
  const byId=new Map();
  module.forEach((q,index)=>{
    q.treeGroupId=treeId;q.treeTitle=title;q.treeSequence=index+1;q.treeNodeCount=module.length;
    if(q.parentQuestionId&&byId.has(q.parentQuestionId))q.treeDepth=(byId.get(q.parentQuestionId).treeDepth||0)+1;
    else q.treeDepth=q.treeDepth||0;
    byId.set(q.questionNodeId||q.generatorId,q);
  });
  return module;
}
function instantiateRegistryTreeNode(spec,globalMode,parentQuestion=null,path=[]){
  const sharedData=parentQuestion?.sharedData||Object.create(null);
  const q=instantiateRegistryQuestion(spec,globalMode,sharedData,parentQuestion,path.concat(spec.id));
  q.treeRootId=parentQuestion?.treeRootId||spec.id;
  q.treeDepth=parentQuestion?(parentQuestion.treeDepth||0)+1:0;
  if(parentQuestion){
    const parentAnswer=parentQuestion.answerExact??parentQuestion.answerText??parentQuestion.answer;
    q.dependencyFactory=value=>{
      const alternateParent={...parentQuestion,answer:value,answerExact:String(value),answerText:String(value),questionNodeId:parentQuestion.questionNodeId||parentQuestion.generatorId};
      return instantiateRegistryQuestion(spec,globalMode,sharedData,alternateParent,path.concat(spec.id));
    };
    q._dependencyValue=parentAnswer;q._lastDepValue=parentAnswer;
    q._lastDepValueExact=String(parentQuestion.answerExact??parentAnswer);
  }
  return q;
}
/* Materialize any registered tree. expand='all' includes siblings and descendants; 'path' chooses
   one random child at each level; 'random' probabilistically expands with all child relationships
   still represented by ordinary parent IDs on the returned module. */
function makeRegistryTreeModule(rootSpec,globalMode=['mc','fib'],options={}){
  if(!rootSpec||rootSpec.parentId)throw new Error('A tree module must start at a top-level registry node.');
  const registry=Array.isArray(options.registry)?options.registry:QUESTION_REGISTRY;
  const registryById=new Map(registry.map(entry=>[entry.id,entry]));
  if(!registryById.has(rootSpec.id))throw new Error(`Tree root ${rootSpec.id} is not present in the selected registry.`);
  const maxNodes=Number.isInteger(options.maxNodes)&&options.maxNodes>0?options.maxNodes:16;
  const maxDepth=Number.isInteger(options.maxDepth)&&options.maxDepth>=0?options.maxDepth:8;
  const expand=options.expand||'all',module=[],instances=new Map(),indices=new Map(),groupTitle=options.title||rootSpec.title;
  const walk=(spec,parentQuestion,path,depth)=>{
    if(module.length>=maxNodes||depth>maxDepth)return null;
    const q=instantiateRegistryTreeNode(spec,globalMode,parentQuestion,path);
    const parentIndex=parentQuestion?indices.get(parentQuestion):undefined;
    if(Number.isInteger(parentIndex))q.dependsOnLocalIndex=parentIndex;
    q.treeDepth=depth;q.treeRootId=parentQuestion?.treeRootId||spec.id;
    indices.set(q,module.length);instances.set(spec.id,q);module.push(q);
    let children=(spec.treeChildren||[]).map(id=>registryById.get(id)).filter(child=>child&&isQuestionGeneratorEnabled(child)&&isRegistryClassCompatible(child,globalMode));
    if(!children.length||depth>=maxDepth||module.length>=maxNodes)return q;
    if(expand==='path')children=[pick(children)];
    else if(expand==='random'){
      if(Math.random()>.62)return q;
      children=[pick(children)];
    }
    for(const child of children){if(module.length>=maxNodes)break;walk(child,q,path.concat(spec.id),depth+1)}
    return q;
  };
  walk(rootSpec,null,[],0);
  module.forEach((q,index)=>{q.moduleLocalIndex=index});
  return markQuestionTreeModule(module,groupTitle);
}
