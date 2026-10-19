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
function updateTemplateModeHelp(){const mode=$('templateMode').value,isId=mode==='id',isTf=mode==='tf';$('templateAnswerLabel').textContent=isId?'Correct identification answer':isTf?'Correct truth value / expression':'Correct-answer expression';$('templateAnswerHelp').textContent=isId?'Enter the canonical term or concept name. Add accepted synonyms in the field below.':isTf?'Enter true or false, or a numeric expression (positive = True; zero or negative = False).': 'Supported operators: + - * / ^, parentheses and sqrt, abs, sin, cos, tan, exp, log, ln. No JavaScript execution is used.';$('templateAliasesField').classList.toggle('hidden',!isId);$('templateDepends').disabled=isId||isTf;if(isId||isTf)$('templateDepends').checked=false;$('templateDistractors').disabled=isId;}
function init(){
  drawCategories();
  $('bankStats').textContent=`${BUILTIN.length+IDENTIFICATION_GENERATORS.length+TRUEFALSE_GENERATORS.length} question generators`;
  document.querySelector('.hero-aside span').textContent=`${CATS.length} categories · ${PAIR_GENERATORS.length} linked-pair variants`;
  initNumericalBankExplorer();
  document.querySelector('.stats-line').textContent='Each topic has at least 48 numerical generators, 40 identification generators, and 40 true/false generators. Every topic pair has three linked-question variants.';
  syncDifficultyRange('init');$('difficultyMinSlider').addEventListener('input',()=>syncDifficultyRange('min'));$('difficultyMaxSlider').addEventListener('input',()=>syncDifficultyRange('max'));
  updateTemplateModeHelp();$('templateMode').addEventListener('change',updateTemplateModeHelp);
  document.querySelectorAll('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>setTab(btn.dataset.tab)));
  document.querySelectorAll('[data-subtab]').forEach(btn=>btn.addEventListener('click',()=>setSubTab(btn.dataset.subtab)));
  $('selectAllBtn').addEventListener('click',()=>document.querySelectorAll('input[name="category"]').forEach(x=>x.checked=true));
  $('selectNoneBtn').addEventListener('click',()=>document.querySelectorAll('input[name="category"]').forEach(x=>x.checked=false));
  $('startQuizBtn').addEventListener('click',makeQuiz);$('restartBtn').addEventListener('click',showSetup);$('newQuizBtn').addEventListener('click',showSetup);$('quizForm').addEventListener('submit',handleQuizSubmit);
  $('questionList').addEventListener('input',e=>{const card=e.target.closest('[data-qidx]');if(card)storeVisibleResponse(Number(card.dataset.qidx))});
  $('showRecipeDebug')?.addEventListener('change',()=>{document.querySelectorAll('.question-card[data-qidx]').forEach(card=>storeVisibleResponse(Number(card.dataset.qidx)));renderQuestions()});
  $('questionList').addEventListener('change',e=>{const card=e.target.closest('[data-qidx]');if(card){const i=Number(card.dataset.qidx);storeVisibleResponse(i);if(quizFlow==='all')refreshDependencyChain(i+1)}});
  $('screenshotBtn').addEventListener('click',downloadScreenshot);$('printBtn').addEventListener('click',()=>window.print());$('previewTemplateBtn').addEventListener('click',previewVisualTemplate);$('saveTemplateBtn').addEventListener('click',saveVisualTemplate);
  $('loadExampleBtn').addEventListener('click',()=>{$('codeEditor').value=JSON.stringify(EXAMPLE_CHAIN,null,2);$('codeMessage').textContent='Example two-step chain loaded. Edit and click Validate & save JSON.'});
  $('validateCodeBtn').addEventListener('click',validateAndSaveCode);$('downloadCodeBtn').addEventListener('click',downloadJson);$('importCodeBtn').addEventListener('click',()=>$('importFile').click());
  $('importFile').addEventListener('change',e=>{if(e.target.files?.[0])importJsonFile(e.target.files[0]);e.target.value=''});
  $('templateList').addEventListener('click',e=>{const del=e.target.closest('[data-delete-template]');const edit=e.target.closest('[data-edit-template]');if(del){try{setTemplates(getTemplates().filter(x=>x.id!==del.dataset.deleteTemplate));renderTemplateList();showToast('Generator deleted.')}catch(err){showToast(err.message)}}if(edit){const t=getTemplates().find(x=>x.id===edit.dataset.editTemplate);if(t){$('codeEditor').value=JSON.stringify(t,null,2);setTab('builderPage');setSubTab('codeSubpage');$('codeMessage').textContent=`Loaded "${t.title}" into the JSON editor. Validate & save to apply edits.`}}});
  if(window.MathJax)window.MathJax.startup?.promise?.then(updateMathStatus).catch(()=>{});setTimeout(updateMathStatus,1200);window.addEventListener('load',updateMathStatus);
}
init();
