/* Renders question cards and SVG diagrams; stores responses and refreshes linked descendants when a parent answer changes. */

/* Render one question and its optional accessible SVG diagram. */
/* ===== Question renderer =====
   Draws text, proper non-math identification options, MathJax-ready choices, and optional inline SVG diagrams. */
function questionDiagramMarkup(q,i){
  if(!q.diagramKind)return '';
  const alt=q.diagramAlt||'Illustrative engineering diagram; read the text prompt for exact values.';
  const fig=(svg)=>`<figure class="question-diagram">${svg}<figcaption>Diagram description (text alternative): ${htmlEscape(alt)}</figcaption></figure>`;
  if(q.diagramKind==='feedback'){
    const svg=`<svg viewBox="0 0 640 160" role="img" aria-label="${htmlEscape(alt)}" xmlns="http://www.w3.org/2000/svg"><defs><marker id="feedback-arrow-${i}" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 Z" fill="#59718f"/></marker></defs><path class="wire" marker-end="url(#feedback-arrow-${i})" d="M18 75 H105"/><circle class="sum" cx="125" cy="75" r="20"/><text x="119" y="69">+</text><text x="120" y="91">−</text><path class="wire" marker-end="url(#feedback-arrow-${i})" d="M145 75 H205"/><rect class="block" x="205" y="48" width="105" height="54" rx="7"/><text x="257" y="79" text-anchor="middle">G(s)</text><path class="wire" marker-end="url(#feedback-arrow-${i})" d="M310 75 H394"/><circle cx="400" cy="75" r="3" fill="#59718f"/><text x="25" y="62">r(t)</text><text x="345" y="62">y(t)</text><path class="wire" d="M400 75 V136 H350"/><rect class="block" x="270" y="118" width="80" height="36" rx="6"/><text x="310" y="140" text-anchor="middle">H(s)</text><path class="wire" marker-end="url(#feedback-arrow-${i})" d="M270 136 H125 V95"/></svg>`;
    return fig(svg);
  }
  if(['relatedCircle','relatedSphere','ladder','coneTank'].includes(q.diagramKind)){
    let svg='';
    if(q.diagramKind==='ladder')svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M55 18 V145 H365"/><path class="wire" d="M55 35 L285 145"/><text x="150" y="78">ladder L</text><text x="190" y="164">x</text><text x="35" y="85">y</text><text x="65" y="158">wall</text></svg>`;
    else if(q.diagramKind==='relatedSphere')svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><circle cx="200" cy="88" r="58" fill="#edf3ff" stroke="#6d88b1" stroke-width="2"/><ellipse cx="200" cy="88" rx="58" ry="19" fill="none" stroke="#6d88b1" stroke-width="1.5" stroke-dasharray="4 3"/><ellipse cx="200" cy="88" rx="22" ry="58" fill="none" stroke="#6d88b1" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="200" cy="88" r="3" fill="#2858bc"/><path class="wire" d="M200 88 L246 52"/><path class="wire" d="M246 52 l-10 3 m10 -3 l-2 10"/><text x="215" y="65">r</text><text x="200" y="166" text-anchor="middle">sphere: V = 4πr³/3</text></svg>`;
    else if(q.diagramKind==='coneTank')svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M95 35 Q210 14 325 35 L210 155 Z"/><path class="wire" d="M131 64 Q210 76 289 64"/><path class="wire" d="M210 64 V135"/><path class="wire" d="M210 135 l-5 -9 m5 9 l5 -9"/><path class="wire" d="M210 64 H273"/><text x="282" y="67">r</text><text x="222" y="105">h</text><text x="210" y="173" text-anchor="middle">conical tank: V = πr²h/3</text></svg>`;
    else svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><circle cx="200" cy="88" r="57" fill="#edf3ff" stroke="#6d88b1" stroke-width="2"/><circle cx="200" cy="88" r="3" fill="#2858bc"/><path class="wire" d="M200 88 L246 52"/><path class="wire" d="M246 52 l-10 3 m10 -3 l-2 10"/><text x="215" y="65">r</text><text x="200" y="166" text-anchor="middle">circle: A = πr²</text></svg>`;
    return fig(svg);
  }
  if(q.diagramKind==='magnetic'){
    const svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M45 125 H365 M80 150 V20"/><path class="wire" d="M45 125 L115 55"/><path class="wire" d="M115 55 l-12 2 m12 -2 l-2 12"/><path class="wire" d="M80 80 H300"/><path class="wire" d="M300 80 l-12 -5 m12 5 l-12 5"/><circle cx="180" cy="110" r="27" fill="#edf3ff" stroke="#6d88b1" stroke-width="2"/><path class="wire" d="M180 110 V64"/><path class="wire" d="M180 64 l-5 11 m5 -11 l5 11"/><text x="310" y="70">B</text><text x="190" y="58">m</text><text x="370" y="143">x</text><text x="62" y="18">z</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='circuit'){
    const svg=`<svg viewBox="0 0 480 155" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M42 75 H110 M122 75 H220 M260 75 H350 V125 H42 V75"/><circle cx="42" cy="75" r="3" fill="#59718f"/><path class="wire" d="M110 58 V92 M122 58 V92"/><text x="98" y="48">Vin</text><rect class="block" x="220" y="58" width="40" height="34" rx="4"/><text x="240" y="49" text-anchor="middle">R1</text><rect class="block" x="330" y="58" width="40" height="34" rx="4"/><text x="350" y="49" text-anchor="middle">R2</text><path class="wire" d="M350 92 V125"/><text x="270" y="115">Vout</text><text x="180" y="145" text-anchor="middle">ground / return path</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='diodeCircuit'){
    const svg=`<svg viewBox="0 0 480 160" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M35 67 H82 M102 67 H145 M190 67 H245 M295 67 H395 V125 H35 V67"/><circle cx="35" cy="67" r="3" fill="#59718f"/><path class="wire" d="M82 51 V83 M94 51 V83"/><text x="60" y="43">Vs</text><rect class="block" x="145" y="50" width="45" height="34" rx="4"/><text x="168" y="42" text-anchor="middle">R</text><path d="M245 45 L245 89 L284 67 Z" fill="#edf3ff" stroke="#59718f" stroke-width="2"/><path class="wire" d="M287 45 V89 M287 67 H295"/><text x="265" y="110" text-anchor="middle">D</text><text x="215" y="147" text-anchor="middle">series circuit</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='rcTransient'){
    const svg=`<svg viewBox="0 0 480 160" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M35 65 H100 M120 65 H190 V38 H260 M260 38 V58 M247 58 H273 M247 70 H273 M260 70 V122 H35 V65"/><path class="wire" d="M100 47 V83 M112 47 V83"/><text x="75" y="38">Vin</text><rect class="block" x="140" y="49" width="50" height="32" rx="4"/><text x="165" y="42" text-anchor="middle">R</text><text x="280" y="68">C</text><text x="284" y="93">Vc(t)</text><text x="210" y="145" text-anchor="middle">output measured across capacitor</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='motionalEmf'){
    const svg=`<svg viewBox="0 0 480 170" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M45 45 H420 M45 125 H420"/><path class="wire" d="M235 45 V125"/><path class="wire" d="M235 45 l-6 12 m6 -12 l6 12"/><path class="wire" d="M250 85 H330 M330 85 l-12 -6 m12 6 l-12 6"/><text x="270" y="75">v</text><text x="245" y="145">rod, length ℓ</text><g fill="#6d88b1"><circle cx="90" cy="75" r="5"/><circle cx="145" cy="95" r="5"/><circle cx="185" cy="72" r="5"/><circle cx="300" cy="50" r="5"/><circle cx="355" cy="105" r="5"/><circle cx="390" cy="73" r="5"/></g><g fill="#243650" font-size="12"><text x="80" y="60">× B into page</text></g></svg>`;return fig(svg);
  }
  if(q.diagramKind==='motorTorque'){
    const svg=`<svg viewBox="0 0 460 180" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M38 88 H415"/><path class="wire" d="M415 88 l-12 -6 m12 6 l-12 6"/><text x="382" y="76">B</text><rect x="160" y="45" width="125" height="85" rx="7" fill="#edf3ff" stroke="#6d88b1" stroke-width="2"/><path class="wire" d="M222 90 V18 M222 18 l-6 10 m6 -10 l6 10"/><text x="232" y="28">μ</text><path class="wire" d="M222 90 L279 42"/><text x="271" y="37">θ</text><text x="222" y="157" text-anchor="middle">coil area A, N turns</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='vector3d'){
    const svg=`<svg viewBox="0 0 420 180" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M75 145 H365 M75 145 V18 M75 145 L25 95"/><path class="wire" d="M365 145 l-12 -6 m12 6 l-12 6 M75 18 l-6 12 m6 -12 l6 12 M25 95 l12 3 m-12 -3 l3 12"/><text x="372" y="150">x</text><text x="62" y="16">z</text><text x="16" y="88">y</text><path d="M75 145 L270 55" stroke="#2858bc" stroke-width="3" fill="none"/><path d="M270 55 l-14 1 m14 -1 l-5 12" stroke="#2858bc" stroke-width="3" fill="none"/><text x="245" y="45" fill="#2858bc">F / Δr</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='phasor'){
    const svg=`<svg viewBox="0 0 420 160" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M42 122 H370 M65 140 V15"/><path class="wire" d="M370 122 l-12 -6 m12 6 l-12 6 M65 15 l-6 12 m6 -12 l6 12"/><path d="M65 122 L280 42" stroke="#2858bc" stroke-width="3" fill="none"/><path d="M280 42 l-14 1 m14 -1 l-6 12" stroke="#2858bc" stroke-width="3" fill="none"/><path class="wire" stroke-dasharray="4 4" d="M280 42 V122 H65"/><text x="375" y="126">Re</text><text x="72" y="18">Im</text><text x="165" y="72">Z = R + jX</text><text x="170" y="141">R</text><text x="292" y="84">X</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='spectrum'){
    const svg=`<svg viewBox="0 0 420 160" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M35 130 H395 M45 140 V15"/><path class="wire" d="M395 130 l-12 -6 m12 6 l-12 6 M45 15 l-6 12 m6 -12 l6 12"/><path d="M95 130 V43 M205 130 V72 M315 130 V95" stroke="#2858bc" stroke-width="4"/><text x="79" y="30">A1</text><text x="189" y="58">A2</text><text x="299" y="81">A3</text><text x="385" y="147">f</text><text x="54" y="18">amplitude</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='filterFlow'){
    const svg=`<svg viewBox="0 0 460 140" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M18 70 H105 M205 70 H295 M385 70 H440"/><path class="wire" d="M105 70 l-10 -6 m10 6 l-10 6 M295 70 l-10 -6 m10 6 l-10 6 M440 70 l-10 -6 m10 6 l-10 6"/><rect class="block" x="105" y="42" width="100" height="56" rx="7"/><rect class="block" x="295" y="42" width="90" height="56" rx="7"/><text x="55" y="59">x[n]</text><text x="155" y="75" text-anchor="middle">filter h[n]</text><text x="340" y="75" text-anchor="middle">Σ h[k]x[n-k]</text><text x="400" y="59">y[n]</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='sampleWave'){
    const svg=`<svg viewBox="0 0 440 150" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M25 75 H420 M35 135 V12"/><path d="M35 75 C60 12 85 12 110 75 S160 138 185 75 S235 12 260 75 S310 138 335 75 S385 12 410 75" stroke="#6d88b1" stroke-width="2" fill="none"/><g fill="#2858bc">${[50,95,140,185,230,275,320,365,410].map((x,k)=>`<circle cx="${x}" cy="${[34,42,75,108,116,108,75,42,75][k]}" r="4"/>`).join('')}</g><text x="330" y="20">sample markers</text><text x="405" y="94">t</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='dataCompare'){
    const svg=`<svg viewBox="0 0 440 145" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M35 120 H415"/><text x="55" y="20">Lot A</text><text x="55" y="78">Lot B</text><path class="wire" d="M125 38 H370 M125 96 H370" stroke-dasharray="4 4"/><g fill="#2858bc"><circle cx="155" cy="38" r="5"/><circle cx="190" cy="38" r="5"/><circle cx="212" cy="38" r="5"/><circle cx="240" cy="38" r="5"/><circle cx="280" cy="38" r="5"/></g><g fill="#087e8b"><circle cx="210" cy="96" r="5"/><circle cx="252" cy="96" r="5"/><circle cx="288" cy="96" r="5"/><circle cx="310" cy="96" r="5"/><circle cx="345" cy="96" r="5"/></g><text x="170" y="136">measurement value →</text></svg>`;return fig(svg);
  }
  if(q.diagramKind==='anovaPlot'){
    const svg=`<svg viewBox="0 0 440 160" role="img" aria-label="${htmlEscape(alt)}"><path class="wire" d="M35 135 H415 M45 145 V12"/><rect x="80" y="65" width="60" height="70" rx="5" fill="#dbe7ff" stroke="#6d88b1"/><rect x="185" y="43" width="60" height="92" rx="5" fill="#d9f2ef" stroke="#087e8b"/><rect x="290" y="22" width="60" height="113" rx="5" fill="#fce9cf" stroke="#a65b10"/><text x="110" y="151" text-anchor="middle">Group A</text><text x="215" y="151" text-anchor="middle">Group B</text><text x="320" y="151" text-anchor="middle">Group C/D</text></svg>`;return fig(svg);
  }
  return `<figure class="question-diagram"><p class="text-fallback">${htmlEscape(alt)}</p><figcaption>Diagram description (text alternative): ${htmlEscape(alt)}</figcaption></figure>`;
}

function questionContent(q,i){
  const linked=q.linkGroup?`<span class="chip teal">LINKED STEP ${q.linkStep}/${q.linkTotal}</span>`:'';
  const custom=q.custom?'<span class="chip orange">CUSTOM</span>':'';
  const type=q.type==='mc'?'MULTIPLE CHOICE':q.type==='fib'?'FILL IN THE BLANK':q.type==='id'?'IDENTIFICATION':'TRUE / FALSE';
  let answerHtml='';
  if(q.type==='mc'||q.type==='tf')answerHtml=`<div class="choices">${q.choices.map((c,j)=>{const plainId=!!q.identificationOptions;const label=c.label?htmlEscape(c.label):valueDisplay(c.value,q.format);return `<label class="choice"><input type="radio" name="q-${i}" value="${j}" ${savedResponses[i]?.kind==='choice'&&Number(savedResponses[i].choiceIndex)===j?'checked':''}><span class="${plainId?'choice-text no-math':'choice-math'}">${q.type==='tf'?'':String.fromCharCode(65+j)+'. '}${label}</span></label>`}).join('')}</div>`;
  else if(q.type==='id')answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input" type="text" autocomplete="off" placeholder="Identify the term or concept" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use the standard mathematical or engineering term. Accepted synonyms may also be recognized.</div></div>`;
  else answerHtml=`<div class="field" style="margin:0"><input id="fill-${i}" class="answer-input" type="text" inputmode="decimal" autocomplete="off" placeholder="Enter a numerical answer" value="${htmlEscape(savedResponses[i]?.kind==='text'?savedResponses[i].value:'')}"><div class="input-hint">Use a decimal, scientific notation, or arithmetic expression. Currency symbols and common units are optional.</div></div>`;
  const diagram=questionDiagramMarkup(q,i);
  const previousNote=q.linkStep>1?'<div class="link-note">Notation: \\(x_{\\mathrm{prev}}\\) is explicitly defined as the numerical answer from the immediately preceding linked step.</div>':'';
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
function responseValue(index){const q=currentQuestions[index];if(!q)return NaN;const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return NaN;const item=q.choices[Number(state.choiceIndex)];return item?Number(item.value):NaN}if(q.type==='id')return NaN;return parseUserNumber(state?.value||'');}
function refreshDependencyChain(startIndex=0){
  if(graded)return;
  for(let i=Math.max(0,startIndex);i<currentQuestions.length;i++){
    const q=currentQuestions[i];if(!Number.isInteger(q.dependsOnIndex)||typeof q.dependencyFactory!=='function')continue;
    const parent=currentQuestions[q.dependsOnIndex];let val=responseValue(q.dependsOnIndex);if(!Number.isFinite(val))val=parent.answer;
    if(Number.isFinite(q._lastDepValue)&&Math.abs(q._lastDepValue-val)<1e-9)continue;
    const base=q.dependencyFactory(val);q.prompt=base.prompt;q.answer=base.answer;q.explanation=base.explanation;q.tolerance=base.tolerance;q.format=base.format||q.format;q.distractorValues=base.distractorValues||q.distractorValues;q._lastDepValue=val;q.choices=q.type==='mc'?buildChoices(q):null;delete savedResponses[i];
    const card=document.querySelector(`.question-card[data-qidx="${i}"]`);if(card){card.innerHTML=questionContent(q,i).replace(/^<article[^>]*>|<\/article>$/g,'');card.dataset.qidx=String(i);renderMath(card)}
  }
}
function rawResponse(index){const q=currentQuestions[index],state=visibleResponseState(index)||savedResponses[index];if(!q)return '';if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return '';const choice=q.choices[Number(state.choiceIndex)];return choice?(choice.label||valueText(choice.value,q.format)):''}return String(state?.value||'').trim()}
function normalizeTextAnswer(value){return String(value??'').normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim().replace(/\s+/g,' ')}
/* Grade each answer type: choice keys, accepted identification aliases, or numeric tolerance. */
function answerIsCorrect(q,index){const state=visibleResponseState(index)||savedResponses[index];if(q.type==='mc'||q.type==='tf'){if(!state||state.kind!=='choice')return false;const chosen=q.choices[Number(state.choiceIndex)];return !!chosen&&chosen.correct}if(q.type==='id'){const submitted=normalizeTextAnswer(state?.value||'');if(!submitted)return false;return [q.answerText,...(q.acceptedAnswers||[])].some(a=>normalizeTextAnswer(a)===submitted)}const val=parseUserNumber(state?.value||'');return Number.isFinite(val)&&Math.abs(val-q.answer)<=q.tolerance}
function answerForDisplay(q){return q.answerText?htmlEscape(q.answerText):(q.answerLatex||valueDisplay(q.answer,q.format));}
