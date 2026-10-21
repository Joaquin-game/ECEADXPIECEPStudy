/* Assemble a quiz by walking the category-local question tree. At each step the selector may
   choose another top-level root, descend to a child, or move sideways to a sibling. */
function makeQuiz(){
  const cats=selectedCategories(),count=Number($('questionCount').value),formats=selectedFormats(),pool=$('generatorPool').value,customs=$('includeCustom').checked;
  const minDifficulty=Number($('difficultyMin').value),maxDifficulty=Number($('difficultyMax').value);
  if(minDifficulty>maxDifficulty){$('setupMessage').textContent='The minimum difficulty cannot exceed the maximum difficulty.';return}
  if(!cats.length){$('setupMessage').textContent='Select at least one category before generating a test.';return}
  if(!formats.length){$('setupMessage').textContent='Select at least one answer format.';return}

  const allRoots=eligibleQuestionRegistry(cats,formats,customs,minDifficulty,maxDifficulty);
  const treeRootIds=new Set(eligibleTreeRoots(cats,formats,minDifficulty,maxDifficulty).map(spec=>spec.id));
  const customTreeEntries=[];
  if(customs&&pool!=='single')for(const template of getTemplates()){
    if(template.dependsOnPrevious&&cats.includes(template.category)&&(BUILTIN.some(spec=>spec.category===template.category&&isQuestionGeneratorEnabled(spec)))){
      customTreeEntries.push({kind:'customTree',template,spec:{id:`custom-tree-${template.id}`,category:template.category,title:template.title,recipeKey:`custom-tree-${template.id}`,questionClass:'numeric',repeatable:true,difficulty:template.difficulty||3,parentId:null,treeChildren:[]}});
    }else if(Array.isArray(template.steps)&&template.steps.length>=2&&template.steps.every(step=>cats.includes(step.category))&&template.steps.every(step=>!['id','tf'].includes(step.mode))){
      customTreeEntries.push({kind:'customTree',template,spec:{id:`custom-tree-${template.id}`,category:template.steps[0].category,title:template.title,recipeKey:`custom-tree-${template.id}`,questionClass:'numeric',repeatable:true,difficulty:template.difficulty||3,parentId:null,treeChildren:[]}});
    }
  }
  let rootPool;
  if(pool==='single')rootPool=allRoots;
  else if(pool==='trees')rootPool=allRoots.filter(e=>e.kind==='registry'&&treeRootIds.has(e.spec.id)).concat(customTreeEntries);
  else rootPool=allRoots.concat(customTreeEntries);
  if(!rootPool.length){$('setupMessage').textContent=pool==='trees'?'No enabled compound question trees match the selected categories, formats, and difficulty.':'No compatible generators found. Select another answer format or category.';return}

  currentQuestions=[];currentResults=[];savedResponses={};graded=false;quizMode=formats.slice();quizFlow=currentTestFlow();activeQuestionIndex=0;stepChecked=false;
  const selector=new QuestionTreeSelector(QUESTION_REGISTRY),instancesById=new Map(),questionIndices=new WeakMap();
  const seenCustom=new Set();let lastSpec=null,lastQuestion=null,loops=0;const safetyLimit=Math.max(6000,count*150);
  const withinDifficulty=spec=>isEntryWithinDifficulty(spec,minDifficulty,maxDifficulty);
  const compatible=spec=>cats.includes(spec.category)&&isQuestionGeneratorEnabled(spec)&&isRegistryClassCompatible(spec,formats)&&withinDifficulty(spec);
  const canSelectRoot=entry=>selector.canSelect(entry.spec,null)&& (entry.kind!=='custom'||entry.spec.repeatable!==false||!seenCustom.has(entry.spec.id));
  const availableRoots=()=>rootPool.filter(entry=>canSelectRoot(entry));
  const availableChildren=parentSpec=>eligibleTreeChildren(parentSpec,cats,formats,minDifficulty,maxDifficulty).filter(child=>selector.canSelect(child,parentSpec)&&!!lastQuestion&&lastQuestion.questionNodeId===parentSpec.id);
  const availableSiblings=currentSpec=>{
    if(!currentSpec?.parentId)return [];
    const parent=QUESTION_REGISTRY_BY_ID[currentSpec.parentId];
    const activeParent=lastQuestion?._treeParentQuestion;
    if(!parent||!activeParent||activeParent.questionNodeId!==parent.id)return [];
    return eligibleTreeChildren(parent,cats,formats,minDifficulty,maxDifficulty).filter(child=>child.id!==currentSpec.id&&selector.canSelect(child,parent));
  };
  function pushQuestion(q,spec,parentQuestion=null){
    if(!q)return false;
    const index=currentQuestions.length;
    q.questionNodeId=spec?.id||q.questionNodeId||q.generatorId;
    q.questionParentId=spec?.parentId||null;
    q.repeatable=spec?.repeatable!==false;
    q.treeDepth=parentQuestion?(parentQuestion.treeDepth||0)+1:0;
    if(parentQuestion){
      q.dependsOnIndex=questionIndices.get(parentQuestion);
      q.treeRootId=parentQuestion.treeRootId||parentQuestion.questionNodeId;
      q.treeGroupId=parentQuestion.treeGroupId||`tree-${q.treeRootId}-${questionIndices.get(parentQuestion)}`;
      q.treeTitle=parentQuestion.treeTitle||'Compound question tree';
    }else{
      q.treeRootId=q.questionNodeId;
      q.treeGroupId=(spec?.treeChildren||[]).length?`tree-${q.questionNodeId}-${index}`:null;
      q.treeTitle=spec?.title||q.title||'Question';
    }
    q.treeSequence=index+1;
    currentQuestions.push(q);questionIndices.set(q,index);
    if(spec&&spec.kind!=='custom')instancesById.set(spec.id,q);
    q._treeParentQuestion=parentQuestion; q._treeParentSpecId=spec?.parentId||null;
    if(spec?.parentId)q.questionParentId=spec.parentId;
    return true;
  }
  function selectRoot(entry,remain){
    if(!entry)return false;
    if(entry.kind==='customTree'){
      const module=customModule(entry.template,cats,formats);
      if(!module||!module.length||module.length>remain)return false;
      if(!selector.chooseRoot([entry.spec]))return false;
      seenCustom.add(entry.spec.id);linkDependencies(module,currentQuestions.length);markQuestionTreeModule(module,entry.template.title);
      module.forEach((q,i)=>{q.questionNodeId=q.questionNodeId||q.generatorId||`${entry.spec.id}-${i+1}`;q.repeatable=true;q.treeRootId=entry.spec.id;q.treeDepth=i;});
      currentQuestions.push(...module);module.forEach((q,i)=>questionIndices.set(q,currentQuestions.length-module.length+i));
      lastSpec=null;lastQuestion=module[module.length-1];return true;
    }
    const root=selector.chooseRoot([entry.spec]);if(!root)return false;
    if(entry.kind==='registry'){
      const q=instantiateRegistryTreeNode(entry.spec,formats,null,[entry.spec.id]);
      pushQuestion(q,entry.spec,null);lastSpec=entry.spec;lastQuestion=q;return true;
    }
    const module=makeSingleFromEntry(entry,cats,formats);if(!module?.length)return false;
    seenCustom.add(entry.spec.id);
    const q=module[0];pushQuestion(q,entry.spec,null);lastSpec=entry.spec;lastQuestion=q;return true;
  }
  function selectChild(childSpec,parentSpec,parentQuestion){
    if(!parentSpec||!parentQuestion||!selector.chooseChild(parentSpec,[childSpec]))return false;
    const q=instantiateRegistryTreeNode(childSpec,formats,parentQuestion,[...(selector.currentPath||[])]);
    pushQuestion(q,childSpec,parentQuestion);lastSpec=childSpec;lastQuestion=q;return true;
  }
  function selectSibling(siblingSpec,currentSpec){
    const currentQuestion=lastQuestion;
    const parentSpec=currentSpec?.parentId?QUESTION_REGISTRY_BY_ID[currentSpec.parentId]:null;
    const parentQuestion=currentQuestion?._treeParentQuestion || (parentSpec?instancesById.get(parentSpec.id):null);
    if(!parentSpec||!parentQuestion)return false;
    selector.backtrackOneLevel();
    if(!selector.chooseChild(parentSpec,[siblingSpec]))return false;
    const q=instantiateRegistryTreeNode(siblingSpec,formats,parentQuestion,[...(selector.currentPath||[])]);
    pushQuestion(q,siblingSpec,parentQuestion);lastSpec=siblingSpec;lastQuestion=q;return true;
  }

  while(currentQuestions.length<count&&loops++<safetyLimit){
    const remain=count-currentQuestions.length,roots=availableRoots();
    if(!roots.length)break;
    if(pool==='single'||!lastSpec){
      const chosen=pick(roots);if(!selectRoot(chosen,remain)){
        const fallback=roots.filter(e=>e.kind!=='customTree');if(!fallback.length)break;if(!selectRoot(pick(fallback),remain))break;
      }
      continue;
    }
    const children=pool==='single'?[]:availableChildren(lastSpec);
    const siblings=pool==='single'?[]:availableSiblings(lastSpec);
    const actions=[];
    if(roots.length)actions.push({kind:'root',weight:pool==='trees'?.18:.50,items:roots});
    if(children.length)actions.push({kind:'child',weight:pool==='trees'?.55:.33,items:children});
    if(siblings.length)actions.push({kind:'sibling',weight:pool==='trees'?.27:.17,items:siblings});
    if(!actions.length){const fallback=pick(roots);if(!selectRoot(fallback,remain))break;continue}
    const total=actions.reduce((n,a)=>n+a.weight,0),roll=Math.random()*total;let acc=0,action=actions[actions.length-1];
    for(const a of actions){acc+=a.weight;if(roll<=acc){action=a;break}}
    let ok=false;
    if(action.kind==='root')ok=selectRoot(pick(action.items),remain);
    else if(action.kind==='child'){
      const parentQuestion=lastQuestion;ok=selectChild(pick(action.items),lastSpec,parentQuestion);
    }else ok=selectSibling(pick(action.items),lastSpec);
    if(!ok){const fallback=roots.find(e=>e.kind!=='customTree')||roots[0];if(!selectRoot(fallback,remain))break}
  }
  if(currentQuestions.length>count)currentQuestions=currentQuestions.slice(0,count);
  if(!currentQuestions.length){$('setupMessage').textContent='Could not assemble a test from those settings. Select more categories or formats.';return}
  currentQuestions.forEach((q,i)=>{q.index=i;if(q.dependsOnIndex!==undefined&&(q.dependsOnIndex>=currentQuestions.length||q.dependsOnIndex<0)){delete q.dependsOnIndex;delete q.dependencyFactory}});
  $('setupPanel').classList.add('hidden');$('quizPanel').classList.remove('hidden');$('quizForm').classList.remove('hidden');$('resultsPanel').classList.add('hidden');$('stepFeedback').classList.add('hidden');$('quizTitle').textContent=quizFlow==='one'?'Practice test · one question at a time':'Practice test';$('quizSubtitle').textContent=` · ${currentQuestions.length} questions · ${new Set(currentQuestions.map(q=>q.category)).size} topics`;
  $('quizHint').textContent=quizFlow==='one'?'Answer each question, check it to reveal the solution, then continue.':'Answer the full set; answers and explanations appear after submission.';$('submitQuizBtn').disabled=false;$('submitQuizBtn').textContent=quizFlow==='one'?'Check answer':'Submit answers';
  renderQuestions();window.scrollTo({top:$('quizPanel').getBoundingClientRect().top+window.scrollY-15,behavior:'smooth'});
  const includedModes=formats.map(f=>({mc:'multiple choice',fib:'fill-in-the-blank',id:'identification',tf:'true/false'}[f])).join(', ');
  $('setupMessage').textContent=`Generated ${currentQuestions.length} questions from ${cats.length} selected categories (${includedModes}) using the question-tree registry. Numeric recipes are repeatable; identification and true/false entries are non-repeatable and singular.`;
}
