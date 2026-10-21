/* Scores the test, supports immediate per-question feedback, renders the overview and exports a PNG. */

function showResultsOverview(){
  if(!currentResults.length)return;const score=currentResults.filter(r=>r.correct).length,percent=score/currentResults.length*100;
  $('resultScore').textContent=`${score} / ${currentResults.length}`;$('resultPercent').textContent=`${Math.round(percent)}%`;$('resultHeading').textContent=percent===100?'Perfect score!':percent>=70?'Good work — review the details':'Practice makes progress';$('resultMessage').textContent=percent===100?'Excellent. Keep the momentum going.':percent>=70?'Review the missed answers and solutions below to sharpen your technique.':'Study the worked solutions below, then generate a fresh randomized set.';
  $('reviewList').innerHTML=currentResults.map((r,i)=>{const q=r.q,status=r.correct?'CORRECT':'REVIEW';const correctDisplay=answerForDisplay(q);const user=r.response?htmlEscape(r.response):'<em>No answer</em>';const linked=q.treeGroupId?`<span class="chip teal">TREE LEVEL ${(q.treeDepth||0)+1}</span>`:'';const diagram=q.diagramKind?questionDiagramMarkup(q,`review-${i}`):'';return `<article class="review-item ${r.correct?'correct':'incorrect'}"><div class="question-meta"><div class="meta-left"><span class="chip blue">${htmlEscape(shortCat(q.category))}</span>${linked}<span class="chip gray">LEVEL ${q.difficulty||3}</span>${q.custom?'<span class="chip orange">CUSTOM</span>':''}</div><span class="review-state">${status}</span></div><div class="prompt"><strong>${i+1}.</strong> ${htmlEscape(q.prompt)}</div>${diagram}<div class="review-answer"><div class="answer-box"><strong>Your answer</strong>${user}</div><div class="answer-box"><strong>Answer key / follow-through result</strong>${correctDisplay}</div></div><div class="explanation"><strong>Solution:</strong> ${htmlEscape(q.explanation||'Apply the relevant definition and simplify carefully.')}</div></article>`}).join('');
  $('quizForm').classList.add('hidden');$('resultsPanel').classList.remove('hidden');renderMath($('resultsPanel'));window.scrollTo({top:$('resultsPanel').getBoundingClientRect().top+window.scrollY-10,behavior:'smooth'});
}
function gradeQuiz(event){event.preventDefault();if(graded)return;refreshDependencyChain(0);graded=true;currentResults=currentQuestions.map((q,i)=>({q,index:i,response:rawResponse(i),correct:answerIsCorrect(q,i)}));showResultsOverview();}
function checkCurrentAnswer(){
  const i=activeQuestionIndex,q=currentQuestions[i];storeVisibleResponse(i);const correct=answerIsCorrect(q,i);currentResults[i]={q,index:i,response:rawResponse(i),correct};stepChecked=true;
  const answer=answerForDisplay(q),explanation=htmlEscape(q.explanation||'Apply the relevant definition and simplify carefully.');
  $('stepFeedback').classList.remove('hidden');$('stepFeedback').classList.toggle('incorrect',!correct);
  $('stepFeedback').innerHTML=`<h3>${correct?'Correct — well done.':'Not quite — review the solution.'}</h3><p class="feedback-answer">Correct answer: ${answer}</p><p><strong>Solution:</strong> ${explanation}</p>`;
  const card=$('questionList').querySelector('.question-card');if(card)card.querySelectorAll('input').forEach(input=>input.disabled=true);
  $('submitQuizBtn').textContent=i===currentQuestions.length-1?'View results →':'Next question →';$('quizHint').textContent='Answer revealed. Read the solution, then continue when ready.';renderMath($('stepFeedback'));
}
function advanceOneQuestion(){
  if(activeQuestionIndex>=currentQuestions.length-1){graded=true;showResultsOverview();return;}
  activeQuestionIndex++;stepChecked=false;refreshDependencyChain(activeQuestionIndex);renderQuestions();window.scrollTo({top:$('quizPanel').getBoundingClientRect().top+window.scrollY-15,behavior:'smooth'});
}
function handleQuizSubmit(event){if(quizFlow==='one'){event.preventDefault();if(graded)return;if(!stepChecked)checkCurrentAnswer();else advanceOneQuestion();}else gradeQuiz(event);}
function showSetup(){ $('quizPanel').classList.add('hidden');$('setupPanel').classList.remove('hidden');$('resultsPanel').classList.add('hidden');window.scrollTo({top:0,behavior:'smooth'}); }
/* Export the completed results overview to PNG; printing is the no-library fallback. */
/* ===== Results screenshot export =====
   Uses the rendered review panel and a browser canvas helper when available; print remains the fallback. */
async function downloadScreenshot(){if(!graded)return;try{await (window.MathJax?.typesetPromise?.([$('resultsPanel')])||Promise.resolve());if(typeof window.html2canvas!=='function'){showToast('Screenshot library did not load. Use Print / Save PDF instead.');return}const canvas=await window.html2canvas($('resultsPanel'),{backgroundColor:'#ffffff',scale:2,useCORS:true,logging:false,windowWidth:Math.max(document.documentElement.clientWidth,1100)});const link=document.createElement('a');link.download=`ece-math-lab-results-${new Date().toISOString().slice(0,10)}.png`;link.href=canvas.toDataURL('image/png');link.click();showToast('Results screenshot saved.')}catch(e){console.error(e);showToast('Could not create screenshot. Use Print / Save PDF instead.')}}
