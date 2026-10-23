/* Difficulty-range slider, custom-mode helper labels, event wiring and application startup. */

function difficultyName(level){return ({1:'Foundation',2:'Basic',3:'Intermediate',4:'Advanced',5:'Olympiad challenge'})[level]||'Level';}
function syncDifficultyRange(changed){
  let min=Number($('difficultyMinSlider').value),max=Number($('difficultyMaxSlider').value);
  if(min>max){if(changed==='min')min=max;else max=min;}
  $('difficultyMinSlider').value=String(min);$('difficultyMaxSlider').value=String(max);
  $('difficultyMin').value=String(min);$('difficultyMax').value=String(max);
  $('difficultyMinLabel').textContent=`Level ${min} · ${difficultyName(min)}`;
  $('difficultyMaxLabel').textContent=`Level ${max} · ${difficultyName(max)}`;
  const left=((min-1)/4)*100,right=((max-1)/4)*100;
  $('difficultyRangeFill').style.left=`${left}%`;$('difficultyRangeFill').style.width=`${right-left}%`;
  if(min===max&&changed==='min'){$('difficultyMinSlider').style.zIndex=5;$('difficultyMaxSlider').style.zIndex=4;}else if(min===max&&changed==='max'){$('difficultyMaxSlider').style.zIndex=5;$('difficultyMinSlider').style.zIndex=4;}else{$('difficultyMinSlider').style.zIndex=3;$('difficultyMaxSlider').style.zIndex=4;}
}
function updateTemplateModeHelp(){const mode=$('templateMode').value,isId=mode==='id',isTf=mode==='tf',isSetup=mode==='setup';$('templateAnswerLabel').textContent=isId?'Correct identification answer':isTf?'Correct truth value / expression':isSetup?'Answer (not used by setup questions)':'Correct-answer expression';$('templateAnswerHelp').textContent=isId?'Enter the canonical term or concept name. Add accepted synonyms in the field below.':isTf?'Enter true or false, or a numeric expression (positive = True; zero or negative = False).':isSetup?'Setup questions are answerless. Put shared quantities in the Published transfer data field below.':'Supported operators: + - * / ^, parentheses and sqrt, abs, sin, cos, tan, exp, log, ln. No JavaScript execution is used.';$('templateAliasesField').classList.toggle('hidden',!isId);$('templateDepends').disabled=isId||isTf||isSetup;if(isId||isTf||isSetup)$('templateDepends').checked=false;$('templateDistractors').disabled=isId||isSetup;}
function init(){
  drawCategories();
  $('bankStats').textContent=`${QUESTION_REGISTRY.length} registered question nodes`; 
  document.querySelector('.hero-aside span').textContent=`${CATS.length} categories · ${QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.treeChildren.length).length} compound-tree roots`; 
  initNumericalBankExplorer();
  document.querySelector('.stats-line').textContent='Each category owns numeric, identification, true/false, and compound-tree nodes. Numeric generators are repeatable; identification and true/false nodes are singular.';
  syncDifficultyRange('init');$('difficultyMinSlider').addEventListener('input',()=>syncDifficultyRange('min'));$('difficultyMaxSlider').addEventListener('input',()=>syncDifficultyRange('max'));
  const inverseUnitToggle=$('inverseUnitExponentAccessibility');
  const slashUnitToggle=$('singleDenominatorSlashNotation');
  if(slashUnitToggle){slashUnitToggle.checked=quantUnitSingleDenominatorSlashEnabled();slashUnitToggle.addEventListener('change',()=>{setQuantUnitSingleDenominatorSlashEnabled(slashUnitToggle.checked);if(!$('quizPanel').classList.contains('hidden')){if(graded)showResultsOverview();else renderQuestions();if(stepChecked){const q=currentQuestions[activeQuestionIndex],answer=answerForDisplay(q);const feedback=$('stepFeedback');if(!feedback.classList.contains('hidden')){const match=feedback.innerHTML.match(/<p class="feedback-answer">.*?<\/p>/);if(match)feedback.innerHTML=feedback.innerHTML.replace(match[0],`<p class="feedback-answer">Correct answer: ${answer}</p>`);renderMath(feedback)}}}showToast(slashUnitToggle.checked?'Single denominator units will use slash notation.':'Single denominator units will use fraction bars.')})}
  if(inverseUnitToggle){inverseUnitToggle.checked=quantUnitInverseExponentModeEnabled();inverseUnitToggle.addEventListener('change',()=>{setQuantUnitInverseExponentMode(inverseUnitToggle.checked);if(! $('quizPanel').classList.contains('hidden')){if(graded)showResultsOverview();else renderQuestions();if(stepChecked){const q=currentQuestions[activeQuestionIndex],answer=answerForDisplay(q);const feedback=$('stepFeedback');if(!feedback.classList.contains('hidden')){const match=feedback.innerHTML.match(/<p class=\"feedback-answer\">.*?<\/p>/);if(match)feedback.innerHTML=feedback.innerHTML.replace(match[0],`<p class=\"feedback-answer\">Correct answer: ${answer}</p>`);renderMath(feedback)}}}showToast(inverseUnitToggle.checked?'Inverse units will use exponent notation.':'Inverse units will use fractions.')})}
  updateTemplateModeHelp();$('templateMode').addEventListener('change',updateTemplateModeHelp);
  document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>setTab(btn.dataset.tab)));
  document.querySelectorAll('[data-subtab]').forEach(btn=>btn.addEventListener('click',()=>setSubTab(btn.dataset.subtab)));
  $('selectAllBtn').addEventListener('click',()=>document.querySelectorAll('input[name="category"]').forEach(x=>x.checked=true));
  $('selectNoneBtn').addEventListener('click',()=>document.querySelectorAll('input[name="category"]').forEach(x=>x.checked=false));
  $('startQuizBtn').addEventListener('click',makeQuiz);$('restartBtn').addEventListener('click',showSetup);$('newQuizBtn').addEventListener('click',showSetup);$('quizForm').addEventListener('submit',handleQuizSubmit);$('quizForm').addEventListener('keydown',handleQuizEnter);
  $('questionList').addEventListener('input',e=>{const card=e.target.closest('[data-qidx]');if(card)storeVisibleResponse(Number(card.dataset.qidx))});
  $('showRecipeDebug')?.addEventListener('change',()=>{document.querySelectorAll('.question-card[data-qidx]').forEach(card=>storeVisibleResponse(Number(card.dataset.qidx)));renderQuestions()});
  $('showQuestionDataDebug')?.addEventListener('change',()=>{document.querySelectorAll('.question-card[data-qidx]').forEach(card=>storeVisibleResponse(Number(card.dataset.qidx)));if(graded)showResultsOverview();else renderQuestions()});
  $('showTreeDebug')?.addEventListener('change',()=>{document.querySelectorAll('.question-card[data-qidx]').forEach(card=>storeVisibleResponse(Number(card.dataset.qidx)));if(graded)showResultsOverview();else renderQuestions()});
  $('questionList').addEventListener('change',e=>{const card=e.target.closest('[data-qidx]');if(card){const i=Number(card.dataset.qidx);storeVisibleResponse(i);if(quizFlow==='all')refreshDependencyChain(i+1)}});
  $('questionList').addEventListener('click',e=>{const tab=e.target.closest('[data-inspector-tab]');if(!tab)return;const box=tab.closest('[data-inspector=\"question\"]');if(!box)return;const name=tab.dataset.inspectorTab;box.querySelectorAll('[data-inspector-tab]').forEach(btn=>{const active=btn===tab;btn.classList.toggle('active',active);btn.setAttribute('aria-selected',String(active))});box.querySelectorAll('[data-inspector-panel]').forEach(panel=>panel.classList.toggle('active',panel.dataset.inspectorPanel===name));});
  $('screenshotBtn').addEventListener('click',downloadScreenshot);$('printBtn').addEventListener('click',()=>window.print());$('retakeSameBtn')?.addEventListener('click',retakeSameSet);$('previewTemplateBtn').addEventListener('click',previewVisualTemplate);$('saveTemplateBtn').addEventListener('click',saveVisualTemplate);
  $('loadExampleBtn').addEventListener('click',()=>{$('codeEditor').value=JSON.stringify(EXAMPLE_CHAIN,null,2);$('codeMessage').textContent='Example two-step chain loaded. Edit and click Validate & save JSON.'});
  $('validateCodeBtn').addEventListener('click',validateAndSaveCode);$('downloadCodeBtn').addEventListener('click',downloadJson);$('importCodeBtn').addEventListener('click',()=>$('importFile').click());
  $('importFile').addEventListener('change',e=>{if(e.target.files?.[0])importJsonFile(e.target.files[0]);e.target.value=''});
  $('templateList').addEventListener('click',e=>{const del=e.target.closest('[data-delete-template]');const edit=e.target.closest('[data-edit-template]');if(del){try{setTemplates(getTemplates().filter(x=>x.id!==del.dataset.deleteTemplate));renderTemplateList();showToast('Generator deleted.')}catch(err){showToast(err.message)}}if(edit){const t=getTemplates().find(x=>x.id===edit.dataset.editTemplate);if(t){$('codeEditor').value=JSON.stringify(t,null,2);setTab('builderPage');setSubTab('codeSubpage');$('codeMessage').textContent=`Loaded "${t.title}" into the JSON editor. Validate & save to apply edits.`}}});
  if(window.MathJax)window.MathJax.startup?.promise?.then(updateMathStatus).catch(()=>{});setTimeout(updateMathStatus,1200);window.addEventListener('load',updateMathStatus);
}
init();
