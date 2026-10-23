/* Selection helpers over one category-local registry. Every selection class remains explicit. */
function linkDependencies(module,startIndex){module.forEach((q,local)=>{q.globalIndex=startIndex+local;if(Number.isInteger(q.dependsOnLocalIndex))q.dependsOnIndex=startIndex+q.dependsOnLocalIndex;});}
function selectedCategories(){return Array.from(document.querySelectorAll('input[name="category"]:checked')).map(n=>n.value)}
function selectedFormats(){return Array.from(document.querySelectorAll('input[name="answerFormat"]:checked')).map(n=>n.value)}
function currentTestFlow(){return document.querySelector('input[name="testFlow"]:checked')?.value||'all'}
function isRegistryClassCompatible(spec,formats){
  // Setup nodes are rendered as contextual material and do not require an answer format.
  if(spec.questionClass==='setup')return true;
  if(spec.questionClass==='numeric')return formats.some(f=>f==='mc'||f==='fib');
  if(spec.questionClass==='identification')return formats.includes('id');
  if(spec.questionClass==='truefalse')return formats.includes('tf');
  return false;
}
function isEntryWithinDifficulty(spec,minDifficulty,maxDifficulty){return (spec.difficulty||3)>=minDifficulty&&(spec.difficulty||3)<=maxDifficulty}
function registryHasCompatibleQuestionBelow(spec,cats,formats,minDifficulty=1,maxDifficulty=5,seen=new Set()){
  if(!spec||seen.has(spec.id))return false;seen.add(spec.id);
  for(const id of spec.treeChildren||[]){
    const child=QUESTION_REGISTRY_BY_ID[id];
    if(!child||!cats.includes(child.category)||!isQuestionGeneratorEnabled(child)||!isEntryWithinDifficulty(child,minDifficulty,maxDifficulty))continue;
    if(child.questionClass==='setup') { if(registryHasCompatibleQuestionBelow(child,cats,formats,minDifficulty,maxDifficulty,new Set(seen)))return true; }
    else if(isRegistryClassCompatible(child,formats))return true;
  }
  return false;
}
function eligibleQuestionRegistry(cats,formats,customs,minDifficulty=1,maxDifficulty=5){
  const builtin=QUESTION_REGISTRY.filter(spec=>!spec.parentId&&cats.includes(spec.category)&&isQuestionGeneratorEnabled(spec)&&isRegistryClassCompatible(spec,formats)&&isEntryWithinDifficulty(spec,minDifficulty,maxDifficulty)&&(spec.questionClass!=='setup'||registryHasCompatibleQuestionBelow(spec,cats,formats,minDifficulty,maxDifficulty))).map(spec=>({kind:'registry',spec}));
  if(customs){
    for(const template of getTemplates()){
      if(template.dependsOnPrevious||Array.isArray(template.steps)||Array.isArray(template.nodes)||!cats.includes(template.category))continue;
      const mode=template.mode||'mixed';
      if(['id','tf'].includes(mode)){if(formats.includes(mode)){const spec={id:`custom-${template.id}`,category:template.category,title:template.title,recipeKey:`custom-${template.id}`,questionClass:mode==='id'?'identification':'truefalse',repeatable:false,difficulty:template.difficulty||3,parentId:null,treeChildren:[]};builtin.push({kind:'custom',template,spec})}}
      else if(formats.some(f=>f==='mc'||f==='fib')){const spec={id:`custom-${template.id}`,category:template.category,title:template.title,recipeKey:`custom-${template.id}`,questionClass:'numeric',repeatable:true,difficulty:template.difficulty||3,parentId:null,treeChildren:[]};builtin.push({kind:'custom',template,spec})}
    }
  }
  return builtin;
}
function eligibleTreeRoots(cats,formats,minDifficulty=1,maxDifficulty=5){
  return QUESTION_REGISTRY.filter(spec=>!spec.parentId&&(spec.treeChildren||[]).length&&registryHasCompatibleQuestionBelow(spec,cats,formats,minDifficulty,maxDifficulty)&&cats.includes(spec.category)&&isQuestionGeneratorEnabled(spec)&&isRegistryClassCompatible(spec,formats)&&isEntryWithinDifficulty(spec,minDifficulty,maxDifficulty));
}
function eligibleTreeChildren(parent,cats,formats,minDifficulty=1,maxDifficulty=5){
  if(!parent||parent.repeatable===false)return [];
  return (parent.treeChildren||[]).map(id=>QUESTION_REGISTRY_BY_ID[id]).filter(child=>child&&child.parentId===parent.id&&cats.includes(child.category)&&isQuestionGeneratorEnabled(child)&&isRegistryClassCompatible(child,formats)&&isEntryWithinDifficulty(child,minDifficulty,maxDifficulty)&&(child.questionClass!=='setup'||registryHasCompatibleQuestionBelow(child,cats,formats,minDifficulty,maxDifficulty)));
}
function makeSingleFromEntry(entry,cats,formats){
  if(entry.kind==='registry'&&entry.spec.questionClass==='setup')return [];
  if(entry.kind==='registry')return [instantiateRegistryTreeNode(entry.spec,formats,null,[entry.spec.id])];
  if(entry.kind==='custom')return customModule(entry.template,cats,formats);
  return [];
}
