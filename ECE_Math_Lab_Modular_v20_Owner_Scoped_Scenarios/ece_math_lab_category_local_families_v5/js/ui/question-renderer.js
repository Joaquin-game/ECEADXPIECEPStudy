/* Renders question cards and external SVG diagram assets; updates descendants when a parent answer changes. */

/* Render one question and its optional accessible SVG illustration. */
/* ===== Question renderer =====
   Draws text, identification options, MathJax-ready choices, and separate SVG illustration assets. */
/* Diagrams are separate, editor-friendly SVG assets under res/diagrams/. */
const QUESTION_DIAGRAM_FILES={
  feedback:'feedback.svg',ladder:'ladder.svg',relatedSphere:'relatedSphere.svg',coneTank:'coneTank.svg',relatedCircle:'relatedCircle.svg',
  magnetic:'magnetic.svg',circuit:'circuit.svg',diodeCircuit:'diodeCircuit.svg',rcTransient:'rcTransient.svg',motionalEmf:'motionalEmf.svg',
  motorTorque:'motorTorque.svg',vector3d:'vector3d.svg',phasor:'phasor.svg',spectrum:'spectrum.svg',filterFlow:'filterFlow.svg',
  sampleWave:'sampleWave.svg',dataCompare:'dataCompare.svg',anovaPlot:'anovaPlot.svg'
};
function sanitizeInlineQuestionSvg(source){
  let svg=String(source||'').trim();
  if(!/^<svg\b/i.test(svg))return '';
  return svg
    .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi,'')
    .replace(/<foreignObject\b[^>]*>[\s\S]*?<\/foreignObject\s*>/gi,'')
    .replace(/\s+on[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi,'')
    .replace(/\s+(?:href|xlink:href)\s*=\s*("\s*(?:javascript:|https?:|\/\/)[^"]*"|'\s*(?:javascript:|https?:|\/\/)[^']*')/gi,'')
    .replace(/url\(\s*(['"]?)(?:https?:|javascript:|\/\/)[^)]*\)/gi,'none')
    .replace(/<\?xml[^>]*\?>/gi,'');
}
function oneIllustrationMarkup(item,i,j){
  if(!item||typeof item!=='object')return '';
  const alt=String(item.alt||item.description||'Illustration; see the question text for exact values.');
  const safeAlt=htmlEscape(alt);
  const type=String(item.type||'').toLowerCase();
  if(type==='svg'||item.svg||item.markup){
    const markup=sanitizeInlineQuestionSvg(item.svg||item.markup);
    if(!markup)return `<figure class="question-diagram"><p class="text-fallback">${safeAlt}</p><figcaption>${safeAlt}</figcaption></figure>`;
    return `<figure class="question-diagram question-svg"><div class="illustration-svg" role="img" aria-label="${safeAlt}">${markup}</div><figcaption>${safeAlt}</figcaption></figure>`;
  }
  let src=String(item.src||'');
  let is_file = false;
  if(type==='diagram'||item.diagramKind){
    const file=QUESTION_DIAGRAM_FILES[item.diagramKind||item.kind];
    if(file) {is_file = true; src=`${ECE_MATH_LAB_ASSET_BASE_PATH}/diagrams/${file}`;}
  }
  if(src&&(is_file||/^(?:https?:|data:image\/|blob:|\/|\.\.?\/)/i.test(src)))return `<figure class="question-diagram"><img class="diagram-artwork" src="${htmlEscape(src)}" alt="${safeAlt}" loading="lazy"><figcaption>${safeAlt}</figcaption></figure>`;
  return `<figure class="question-diagram"><p class="text-fallback">${safeAlt}</p><figcaption>${safeAlt} source ${src}</figcaption></figure>`;
}
function questionDiagramMarkup(q,i){
  const items=Array.isArray(q.illustrations)?q.illustrations.slice():[];
  if(!items.length&&q.diagramKind)items.push({type:'diagram',diagramKind:q.diagramKind,alt:q.diagramAlt||'Illustrative engineering diagram; read the text prompt for exact values.'});
  return items.map((item,j)=>oneIllustrationMarkup(item,i,j)).join('');
}
function questionSetupAncestors(q){
  const chain=[];let parent=q?._treeParentQuestion;const visited=new Set();
  while(parent&&!visited.has(parent)){visited.add(parent);if(parent.isSetupQuestion)chain.push(parent);parent=parent._treeParentQuestion||null;}
  return chain.reverse();
}
function inspectorValue(value){
  if(value===undefined)return '<span class="inspector-muted">undefined</span>';
  if(value===null)return '<span class="inspector-muted">null</span>';
  if(typeof value==='boolean')return value?'Yes':'No';
  if(typeof value==='object'){
    try{return `<code>${htmlEscape(JSON.stringify(value))}</code>`}catch{return '<span class="inspector-muted">[unserializable]</span>'}
  }
  return htmlEscape(String(value));
}
function inspectorTable(rows){
  return `<div class="inspector-table">${rows.map(([key,value])=>`<div class="inspector-row"><span>${htmlEscape(key)}</span><strong>${inspectorValue(value)}</strong></div>`).join('')}</div>`;
}
function questionDataDebugMarkup(q){
  if(!$('showQuestionDataDebug')?.checked)return '';
  const ownerKey=q.recipeKey||q.generatorId||q.questionNodeId||'unknown-owner';
  const skip=new Set([
    'sharedData','dataTransferObject','receivedDataTransferObject','dataTransferObjectAfterConstruction','transferData',
    'questionAttributeSnapshot','_treeParentQuestion','prompt','choices','illustrations','explanation','answer','answerExact',
    'answerText','answerLatex','answerSpec','distractorValues','acceptedAnswers','displayQuestionNumber','setupAppliedQuestionNumbers',
    'setupRangeLabel','index','questionNodeId','questionParentId','parentQuestionId','parentReference','parentQuestionNote'
  ]);
  const propertyRows=[];
  for(const key of Object.keys(q||{}).sort()){
    if(skip.has(key)||key==='type'||key==='format')continue;
    const value=q[key];
    if(typeof value==='function')continue;
    if(key==='parentQuestion'||key==='parentNode'){
      propertyRows.push([key,value?`${value.title||'Untitled'} (${value.questionNodeId||value.recipeKey||'unknown'})`:'None']);
    }else propertyRows.push([key,value]);
  }
  const received=q.receivedDataTransferObject&&typeof q.receivedDataTransferObject==='object'?q.receivedDataTransferObject:{};
  const published=q.transferData&&typeof q.transferData==='object'?q.transferData:{};
  const after=q.dataTransferObjectAfterConstruction&&typeof q.dataTransferObjectAfterConstruction==='object'?q.dataTransferObjectAfterConstruction:{};
  const payload={
    question:{questionNodeId:q.questionNodeId||null,recipeKey:q.recipeKey||null,title:q.title||null,questionClass:q.questionClass||null},
    properties:propertyRows.reduce((obj,[key,value])=>(obj[key]=value,obj),{}),
    receivedDataTransferObject:received,
    publishedOwnerData:{[ownerKey]:published},
    dataTransferObjectAfterConstruction:after
  };
  let json;
  try{json=JSON.stringify(payload,(key,value)=>typeof value==='bigint'?String(value):value,2)}catch(error){json=JSON.stringify({error:`Unable to serialize question debug properties: ${error.message}`},null,2)}
  const propertyHtml=inspectorTable(propertyRows.length?propertyRows:[['Status','No additional non-transfer developer properties']]);
  const transferSections=[
    ['Received DTO',received],
    ['Published owner data', {[ownerKey]:published}],
    ['DTO after construction',after]
  ].map(([title,data])=>`<section class="inspector-transfer-section"><h4>${title}</h4><pre>${htmlEscape(JSON.stringify(data,(key,value)=>typeof value==='bigint'?String(value):value,2))}</pre></section>`).join('');
  return `<details class="question-data-debug" data-inspector="question"><summary>Developer inspection</summary><div class="inspector-tabs" role="tablist" aria-label="Question developer inspection"><button type="button" class="inspector-tab active" data-inspector-tab="properties" role="tab" aria-selected="true">Properties</button><button type="button" class="inspector-tab" data-inspector-tab="transfer" role="tab" aria-selected="false">Data transfer</button><button type="button" class="inspector-tab" data-inspector-tab="json" role="tab" aria-selected="false">Full JSON</button></div><div class="inspector-panel active" data-inspector-panel="properties"><p class="inspector-description">Developer metadata for this generated node. Learner-facing prompt, choices, numbering, and illustrations are intentionally omitted.</p>${propertyHtml}</div><div class="inspector-panel" data-inspector-panel="transfer"><p class="inspector-description">Owner-scoped data received before construction, published by this node, and available after construction.</p>${transferSections}</div><div class="inspector-panel" data-inspector-panel="json"><pre class="inspector-json">${htmlEscape(json)}</pre></div></details>`;
}

function setupContent(q){
  const applies=q.setupRangeLabel?`Applies to question${q.setupAppliedQuestionNumbers?.length===1?'':'s'} ${q.setupRangeLabel}`:'Setup context';
  const illustrations=questionDiagramMarkup(q,`setup-${q.setupDisplayInstanceId||q.questionNodeId}`);
  const dataDebug=questionDataDebugMarkup(q);
  return `<section class="setup-card" data-setup-id="${htmlEscape(q.setupDisplayInstanceId||q.questionNodeId||'setup')}"><div class="setup-header"><span class="chip teal">${htmlEscape(q.setupLabel||'SETUP')}</span><strong>${htmlEscape(q.title||'Problem setup')}</strong></div><div class="prompt setup-prompt"><strong class="setup-range-inline">${htmlEscape(applies)}:</strong> ${htmlEscape(q.prompt||'Use the shared data below in the related questions.')}</div>${illustrations?`<div class="setup-illustrations">${illustrations}</div>`:''}${dataDebug}</section>`;
}
function parentQuestionNote(q){
  const ref=q.parentReference;
  if(ref?.kind==='setup'){
    const range=ref.range?` (applies to Questions ${ref.range})`:'';
    return `<div class="link-note">Context: use ${htmlEscape(ref.label)}${htmlEscape(range)} as the shared setup for this question.</div>`;
  }
  if(ref?.kind==='question')return `<div class="link-note">Uses the result from Question ${ref.number} in this calculation.</div>`;
  if((q.treeDepth||0)>0)return '<div class="link-note">Follow-up calculation: any earlier result needed is identified in the prompt.</div>';
  return '';
}

function questionContent(q,i){
  const linked=$('showTreeDebug')?.checked&&q.treeRootId?`<span class="chip teal">TREE LEVEL ${(q.treeDepth||0)+1}</span>`:'';
  const custom=q.custom?'<span class="chip orange">CUSTOM</span>':'';
  const type=q.type==='mc'?'MULTIPLE CHOICE':q.type==='fib'?'FILL IN THE BLANK':q.type==='id'?'IDENTIFICATION':'TRUE / FALSE';
  let answerHtml='';
  if(q.type==='mc'||q.type==='tf')answerHtml=`<div class="choices">${q.choices.map((c,j)=>{const plainId=!!q.identificationOptions;const label=c.label?htmlEscape(c.label):numericDisplayWithUnit(c.value,q.format,numericDisplayOptions(q),q.quantUnit||c.unit||q.answerUnit||'');return `<label class="choice"><input type="radio" name="q-${i}" value="${j}" ${savedResponses[i]?.kind==='choice'&&Number(savedResponses[i].choiceIndex)===j?'checked':''}><span class="${plainId?'choice-text no-math':'choice-math'}">${q.type==='tf'?'':String.fromCharCode(65+j)+'. '}${label}</span></label>`}).join('')}</div>`;
  else if(q.type==='id')answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input" type="text" autocomplete="off" placeholder="Identify the term or concept" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use the standard mathematical or engineering term. Accepted synonyms may also be recognized.</div></div>`;
  else {const expectedUnit=q.quantUnit||q.answerUnit||'';const expectedLatex=expectedUnit?formatQuantUnitLatex(expectedUnit):'';const unitHint=expectedLatex?`Answer in \\(${expectedLatex}\\)${q.unitMode==='strict'?' exactly.':' (equivalent SI prefixes are accepted and converted.)'}`:'Units are not required for this question.';answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input numeric-answer-input" type="text" inputmode="text" enterkeyhint="done" autocomplete="off" spellcheck="false" placeholder="Enter a numerical answer${expectedLatex?' with units':''}" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use decimal, scientific notation (e.g. 3.2e-6), engineering notation (e.g. 3.2×10⁻⁶), or an arithmetic expression. ${unitHint}</div></div>`;}
  const diagram=questionDiagramMarkup(q,i);
  const previousNote=parentQuestionNote(q);
  const dataDebug=questionDataDebugMarkup(q);
  const debug=$('showRecipeDebug')?.checked&&q.recipeName?`<small class=\"recipe-debug\">RECIPE · ${htmlEscape(q.recipeName)} <span>${htmlEscape(q.recipeKey||q.generatorId||'')}</span></small>`:'';
  const questionNumber=q.displayQuestionNumber||i+1;
  return `<article class="question-card" data-qidx="${i}"><div class="question-meta"><div class="meta-left"><span class="chip blue">${htmlEscape(shortCat(q.category))}</span>${linked}${custom}</div><span class="qnum">QUESTION ${questionNumber} / ${currentQuestions.length} · ${type}</span></div>${previousNote}${debug}${dataDebug}<div class="prompt"><strong class="question-number-inline">${questionNumber}.</strong> ${htmlEscape(q.prompt)}</div>${diagram}${answerHtml}</article>`;
}
function renderQuestions(){
  const questions=quizFlow==='one'?[currentQuestions[activeQuestionIndex]]:currentQuestions;
  const offset=quizFlow==='one'?activeQuestionIndex:0;const shownSetups=new Set();const blocks=[];
  questions.forEach((q,i)=>{
    for(const setup of questionSetupAncestors(q)){
      const key=setup.setupDisplayInstanceId||setup.questionNodeId;
      if(quizFlow==='one'||!shownSetups.has(key))blocks.push(setupContent(setup));
      shownSetups.add(key);
    }
    blocks.push(questionContent(q,offset+i));
  });
  $('questionList').innerHTML=blocks.join('');
  if(quizFlow==='one'){
    $('stepFeedback').classList.add('hidden');$('stepFeedback').classList.remove('incorrect');
    $('submitQuizBtn').textContent=stepChecked?(activeQuestionIndex===currentQuestions.length-1?'View results →':'Next question →'):'Check answer';
    $('quizHint').textContent=`Question ${activeQuestionIndex+1} of ${currentQuestions.length}. Check your answer to reveal the solution before continuing.`;
  }else{
    $('stepFeedback').classList.add('hidden');$('submitQuizBtn').textContent='Submit answers';$('quizHint').textContent='Submit the full set to see your score, answer key, and worked solutions.';
  }
  renderMath($('questionList'));
}

function visibleResponseState(index){const q=currentQuestions[index];if(!q)return null;if(q.type==='mc'||q.type==='tf'){const input=document.querySelector(`input[name="q-${index}"]:checked`);if(!input)return null;const choiceIndex=Number(input.value),item=q.choices[choiceIndex];return item?{kind:'choice',choiceIndex,value:item.value,label:item.label||valueText(item.value,q.format)}:null;}const input=$(`fill-${index}`);if(input)return {kind:'text',value:input.value};return savedResponses[index]||null;}
function storeVisibleResponse(index){const state=visibleResponseState(index);if(state)savedResponses[index]=state;else delete savedResponses[index];return state;}
function responseDecimal(index){const q=currentQuestions[index];if(!q)return null;const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return null;const item=q.choices[Number(state.choiceIndex)];if(!item)return null;try{return PrecisionDecimal.from(item.value)}catch{return null}}if(q.type==='id')return null;const raw=state?.value||'';if(q.quantUnit||q.answerUnit){const parsed=parseQuantityAnswer(raw);if(!parsed)return null;try{const expected=typeof (q.quantUnit||q.answerUnit)==='string'?parseQuantUnit(q.quantUnit||q.answerUnit):(q.quantUnit||q.answerUnit);return q.unitMode==='strict'?parsed.value:convertQuantValue(parsed.value,parsed.unit,expected)}catch{return null}}return parseUserDecimal(raw);}
function refreshDependencyChain(startIndex=0){
  if(graded)return;
  for(let i=Math.max(0,startIndex);i<currentQuestions.length;i++){
    const q=currentQuestions[i];if(!Number.isInteger(q.dependsOnIndex)||typeof q.dependencyFactory!=='function')continue;
    const parent=currentQuestions[q.dependsOnIndex];let valDecimal=responseDecimal(q.dependsOnIndex);if(!valDecimal)valDecimal=PrecisionDecimal.from(parent.answerExact??parent.answer);
    const val=q.custom?valDecimal:valDecimal.toNumber();
    try{if(q._lastDepValueExact!==undefined&&PrecisionDecimal.from(q._lastDepValueExact).eq(valDecimal))continue;if(q._lastDepValueExact===undefined&&Number.isFinite(q._lastDepValue)&&Math.abs(q._lastDepValue-valDecimal.toNumber())<1e-9)continue}catch{}
    const base=q.dependencyFactory(val);q.prompt=base.prompt;q.answer=base.answer;q.answerExact=base.answerExact??String(base.answer);q.answerSpec=base.answerSpec||q.answerSpec;q.explanation=base.explanation;q.tolerance=base.tolerance;q.format=base.format||q.format;q.quantUnit=base.quantUnit||q.quantUnit;q.answerUnit=base.answerUnit||q.answerUnit;q.unitMode=base.unitMode||q.unitMode||'lenient';q.distractorValues=base.distractorValues||q.distractorValues;q._lastDepValue=valDecimal.toNumber();q._lastDepValueExact=valDecimal.toString();q.choices=q.type==='mc'?buildChoices(q):null;delete savedResponses[i];
    const card=document.querySelector(`.question-card[data-qidx="${i}"]`);if(card){card.innerHTML=questionContent(q,i).replace(/^<article[^>]*>|<\/article>$/g,'');card.dataset.qidx=String(i);renderMath(card)}
  }
}
function rawResponse(index){const q=currentQuestions[index],state=visibleResponseState(index)||savedResponses[index];if(!q)return '';if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return '';const choice=q.choices[Number(state.choiceIndex)];return choice?(choice.label||valueText(choice.value,q.format)):''}return String(state?.value||'').trim()}
function normalizeTextAnswer(value){return String(value??'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ')}
/* Grade each answer type: choice keys, accepted identification aliases, or numeric tolerance. */
function answerIsCorrect(q,index){const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return false;const chosen=q.choices[Number(state.choiceIndex)];return !!chosen&&chosen.correct}if(q.type==='id'){const submitted=normalizeTextAnswer(state?.value||'');if(!submitted)return false;return [q.answerText,...(q.acceptedAnswers||[])].some(a=>normalizeTextAnswer(a)===submitted)}const raw=state?.value||'';let val;if(q.quantUnit||q.answerUnit){const parsed=parseQuantityAnswer(raw);if(!parsed)return false;const expected=q.quantUnit||q.answerUnit;try{const expectedUnit=typeof expected==='string'?parseQuantUnit(expected):expected;if(q.unitMode==='strict'){if(!quantUnitEquivalent(parsed.unit,expectedUnit,{ignorePrefixes:false}))return false;val=parsed.value}else{if(!quantUnitEquivalent(parsed.unit,expectedUnit,{ignorePrefixes:true}))return false;val=convertQuantValue(parsed.value,parsed.unit,expectedUnit)}}catch{return false}}else{val=parseUserDecimal(raw);if(!val)return false}const requiredNotation=q.expectedNotation&& !['any','auto'].includes(String(q.expectedNotation).toLowerCase())?q.expectedNotation:null;if(requiredNotation&&!numericNotationMatches(raw,requiredNotation))return false;return withinNumericTolerance(q.answerExact??q.answer,val,PrecisionDecimal.from(q.tolerance??'1e-12'))}
function answerForDisplay(q){return q.answerText?htmlEscape(q.answerText):(q.answerLatex||numericDisplayWithUnit(q.answerExact??q.answer,q.format,numericDisplayOptions(q),q.quantUnit||q.answerUnit||''));}
