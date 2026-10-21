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
function questionDiagramMarkup(q,i){
  if(!q.diagramKind)return '';
  const alt=q.diagramAlt||'Illustrative engineering diagram; read the text prompt for exact values.';
  const file=QUESTION_DIAGRAM_FILES[q.diagramKind];
  if(!file)return `<figure class="question-diagram"><p class="text-fallback">${htmlEscape(alt)}</p><figcaption>Diagram description (text alternative): ${htmlEscape(alt)}</figcaption></figure>`;
  return `<figure class="question-diagram"><img class="diagram-artwork" src="ece_math_lab_category_local_families_v5/res/diagrams/${file}" alt="${htmlEscape(alt)}" loading="lazy"><figcaption>Diagram description (text alternative): ${htmlEscape(alt)}</figcaption></figure>`;
}
function questionContent(q,i){
  const linked=q.treeGroupId?`<span class="chip teal">TREE LEVEL ${(q.treeDepth||0)+1}</span>`:'';
  const custom=q.custom?'<span class="chip orange">CUSTOM</span>':'';
  const type=q.type==='mc'?'MULTIPLE CHOICE':q.type==='fib'?'FILL IN THE BLANK':q.type==='id'?'IDENTIFICATION':'TRUE / FALSE';
  let answerHtml='';
  if(q.type==='mc'||q.type==='tf')answerHtml=`<div class="choices">${q.choices.map((c,j)=>{const plainId=!!q.identificationOptions;const label=c.label?htmlEscape(c.label):valueDisplay(c.value,q.format,numericDisplayOptions(q));return `<label class="choice"><input type="radio" name="q-${i}" value="${j}" ${savedResponses[i]?.kind==='choice'&&Number(savedResponses[i].choiceIndex)===j?'checked':''}><span class="${plainId?'choice-text no-math':'choice-math'}">${q.type==='tf'?'':String.fromCharCode(65+j)+'. '}${label}</span></label>`}).join('')}</div>`;
  else if(q.type==='id')answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input" type="text" autocomplete="off" placeholder="Identify the term or concept" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use the standard mathematical or engineering term. Accepted synonyms may also be recognized.</div></div>`;
  else answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input" type="text" inputmode="decimal" autocomplete="off" placeholder="Enter a numerical answer" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use a decimal, scientific notation (e.g. 3.2e-6), engineering notation (e.g. 3.2×10⁻⁶), or an arithmetic expression. Currency symbols and common units are optional.</div></div>`;
  const diagram=questionDiagramMarkup(q,i);
  const previousNote=(q.treeDepth||0)>0?'<div class="link-note">Dependency context: any parent value used by this question is defined in its prompt.</div>':'';
  const debug=$('showRecipeDebug')?.checked&&q.recipeName?`<small class=\"recipe-debug\">RECIPE · ${htmlEscape(q.recipeName)} <span>${htmlEscape(q.recipeKey||q.generatorId||'')}</span></small>`:'';
  return `<article class="question-card" data-qidx="${i}"><div class="question-meta"><div class="meta-left"><span class="chip blue">${htmlEscape(shortCat(q.category))}</span>${linked}${custom}</div><span class="qnum">QUESTION ${i+1} / ${currentQuestions.length} · ${type}</span></div>${previousNote}${debug}<div class="prompt">${htmlEscape(q.prompt)}</div>${diagram}${answerHtml}</article>`;
}
function renderQuestions(){
  const questions=quizFlow==='one'?[currentQuestions[activeQuestionIndex]]:currentQuestions;
  const offset=quizFlow==='one'?activeQuestionIndex:0;
  $('questionList').innerHTML=questions.map((q,i)=>questionContent(q,offset+i)).join('');
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
function responseDecimal(index){const q=currentQuestions[index];if(!q)return null;const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return null;const item=q.choices[Number(state.choiceIndex)];if(!item)return null;try{return PrecisionDecimal.from(item.value)}catch{return null}}if(q.type==='id')return null;return parseUserDecimal(state?.value||'');}
function refreshDependencyChain(startIndex=0){
  if(graded)return;
  for(let i=Math.max(0,startIndex);i<currentQuestions.length;i++){
    const q=currentQuestions[i];if(!Number.isInteger(q.dependsOnIndex)||typeof q.dependencyFactory!=='function')continue;
    const parent=currentQuestions[q.dependsOnIndex];let valDecimal=responseDecimal(q.dependsOnIndex);if(!valDecimal)valDecimal=PrecisionDecimal.from(parent.answerExact??parent.answer);
    const val=q.custom?valDecimal:valDecimal.toNumber();
    try{if(q._lastDepValueExact!==undefined&&PrecisionDecimal.from(q._lastDepValueExact).eq(valDecimal))continue;if(q._lastDepValueExact===undefined&&Number.isFinite(q._lastDepValue)&&Math.abs(q._lastDepValue-valDecimal.toNumber())<1e-9)continue}catch{}
    const base=q.dependencyFactory(val);q.prompt=base.prompt;q.answer=base.answer;q.answerExact=base.answerExact??String(base.answer);q.answerSpec=base.answerSpec||q.answerSpec;q.explanation=base.explanation;q.tolerance=base.tolerance;q.toleranceExact=base.toleranceExact??String(base.tolerance);q.format=base.format||q.format;q.distractorValues=base.distractorValues||q.distractorValues;q._lastDepValue=valDecimal.toNumber();q._lastDepValueExact=valDecimal.toString();q.choices=q.type==='mc'?buildChoices(q):null;delete savedResponses[i];
    const card=document.querySelector(`.question-card[data-qidx="${i}"]`);if(card){card.innerHTML=questionContent(q,i).replace(/^<article[^>]*>|<\/article>$/g,'');card.dataset.qidx=String(i);renderMath(card)}
  }
}
function rawResponse(index){const q=currentQuestions[index],state=visibleResponseState(index)||savedResponses[index];if(!q)return '';if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return '';const choice=q.choices[Number(state.choiceIndex)];return choice?(choice.label||valueText(choice.value,q.format)):''}return String(state?.value||'').trim()}
function normalizeTextAnswer(value){return String(value??'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ')}
/* Grade each answer type: choice keys, accepted identification aliases, or numeric tolerance. */
function answerIsCorrect(q,index){const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return false;const chosen=q.choices[Number(state.choiceIndex)];return !!chosen&&chosen.correct}if(q.type==='id'){const submitted=normalizeTextAnswer(state?.value||'');if(!submitted)return false;return [q.answerText,...(q.acceptedAnswers||[])].some(a=>normalizeTextAnswer(a)===submitted)}const raw=state?.value||'',val=parseUserDecimal(raw);if(!val)return false;const requiredNotation=q.expectedNotation&& !['any','auto'].includes(String(q.expectedNotation).toLowerCase())?q.expectedNotation:null;if(requiredNotation&&!numericNotationMatches(raw,requiredNotation))return false;return withinNumericTolerance(q.answerExact??q.answer,val,PrecisionDecimal.from(q.toleranceExact??q.tolerance??'1e-12'))}
function answerForDisplay(q){return q.answerText?htmlEscape(q.answerText):(q.answerLatex||valueDisplay(q.answerExact??q.answer,q.format,numericDisplayOptions(q)));}
