/* Assembles the requested quiz by sampling either single questions or two-question linked modules. */

function makeQuiz(){
  const cats=selectedCategories(),count=Number($('questionCount').value),formats=selectedFormats(),pool=$('generatorPool').value,customs=$('includeCustom').checked;
  const minDifficulty=Number($('difficultyMin').value),maxDifficulty=Number($('difficultyMax').value);
  if(minDifficulty>maxDifficulty){$('setupMessage').textContent='The minimum difficulty cannot exceed the maximum difficulty.';return}
  if(!cats.length){$('setupMessage').textContent='Select at least one category before generating a test.';return}
  if(!formats.length){$('setupMessage').textContent='Select at least one answer format.';return}
  const numericFormats=formats.filter(f=>f==='mc'||f==='fib');
  const specialFormats=formats.filter(f=>f==='id'||f==='tf');
  if(pool==='pairs'&&(!numericFormats.length||specialFormats.length)){$('setupMessage').textContent='Linked-pairs-only tests use multiple-choice and/or fill-in-the-blank numeric questions. To include identification or true/false, choose Topic + linked pairs.';return}
  let singlePool=(pool!=='pairs'&&numericFormats.length)?eligibleBuiltinSingles(cats,customs).filter(e=>e.kind!=='builtin'||(e.spec.difficulty>=minDifficulty&&e.spec.difficulty<=maxDifficulty)):[];
  if(formats.includes('id'))singlePool.push(...eligibleAuxSingles(cats,'id',customs).filter(e=>e.kind!=='aux'||(e.spec.difficulty>=minDifficulty&&e.spec.difficulty<=maxDifficulty)));
  if(formats.includes('tf'))singlePool.push(...eligibleAuxSingles(cats,'tf',customs).filter(e=>e.kind!=='aux'||(e.spec.difficulty>=minDifficulty&&e.spec.difficulty<=maxDifficulty)));
  let pairPool=(numericFormats.length&&pool!=='single')?eligiblePairModules(cats,customs,pool==='both').filter(e=>e.kind!=='pair'||(e.pair.difficulty>=minDifficulty&&e.pair.difficulty<=maxDifficulty)):[ ];
  if(pool==='pairs'&&!pairPool.length){$('setupMessage').textContent='Linked pairs need at least two selected categories (and compatible custom generators).';return}
  if(pool==='pairs'&&count%2!==0){$('setupMessage').textContent='Linked-pairs-only tests need an even question count. Choose an even question count or switch to Topic + linked pairs.';return}
  if(!singlePool.length&&!pairPool.length){$('setupMessage').textContent='No compatible generators found. Select another answer format or category.';return}
  currentQuestions=[];currentResults=[];savedResponses={};graded=false;quizMode=formats.slice();quizFlow=currentTestFlow();activeQuestionIndex=0;stepChecked=false;
  const usedSpecialIds=new Set(),safetyLimit=4000;let loops=0;
  const availableSingles=()=>singlePool.filter(entry=>!isUniqueSpecialEntry(entry)||!usedSpecialIds.has(specialEntryKey(entry)));
  const takeSingle=()=>{const poolNow=availableSingles();if(!poolNow.length)return null;const entry=pick(poolNow);if(isUniqueSpecialEntry(entry))usedSpecialIds.add(specialEntryKey(entry));return entry};
  while(currentQuestions.length<count&&loops++<safetyLimit){
    const remain=count-currentQuestions.length,available=availableSingles();
    let usePair=pairPool.length>0&&(pool==='pairs'||(pool==='both'&&Math.random()<.48));if(remain===1)usePair=false;
    let module=null;
    if(usePair){
      const entry=pick(pairPool);module=entry.kind==='pair'?makePairModule(entry.pair,formats):customModule(entry.template,cats,formats);
      if(!module||module.length>remain){const replacement=takeSingle();if(replacement)module=makeSingleFromEntry(replacement,cats,formats);else continue;}
    }else{
      let entry=takeSingle();
      if(!entry){if(pairPool.length&&remain>=2){const pair=pick(pairPool);module=pair.kind==='pair'?makePairModule(pair.pair,formats):customModule(pair.template,cats,formats)}else break;}
      else module=makeSingleFromEntry(entry,cats,formats);
      if(module&&module.length>remain){
        if(remain===1){const fallback=takeSingle();module=fallback?makeSingleFromEntry(fallback,cats,formats):null}
        else module=null;
      }
    }
    if(!module||!module.length)continue;
    if(module.some(q=>!q))continue;
    linkDependencies(module,currentQuestions.length);currentQuestions.push(...module);
  }
  if(currentQuestions.length>count)currentQuestions=currentQuestions.slice(0,count);
  if(!currentQuestions.length){$('setupMessage').textContent='Could not assemble a test from those settings. Select more categories or formats.';return}
  currentQuestions.forEach((q,i)=>{q.index=i;if(q.dependsOnIndex!==undefined&&q.dependsOnIndex>=currentQuestions.length){delete q.dependsOnIndex;delete q.dependencyFactory}});
  $('setupPanel').classList.add('hidden');$('quizPanel').classList.remove('hidden');$('quizForm').classList.remove('hidden');$('resultsPanel').classList.add('hidden');$('stepFeedback').classList.add('hidden');$('quizTitle').textContent=quizFlow==='one'?'Practice test · one question at a time':'Practice test';$('quizSubtitle').textContent=` · ${currentQuestions.length} questions · ${new Set(currentQuestions.map(q=>q.category)).size} topics`;
  $('quizHint').textContent=quizFlow==='one'?'Answer each question, check it to reveal the solution, then continue.':'Answer the full set; answers and explanations appear after submission.';$('submitQuizBtn').disabled=false;$('submitQuizBtn').textContent=quizFlow==='one'?'Check answer':'Submit answers';
  renderQuestions();window.scrollTo({top:$('quizPanel').getBoundingClientRect().top+window.scrollY-15,behavior:'smooth'});
  const includedModes=formats.map(f=>({mc:'multiple choice',fib:'fill-in-the-blank',id:'identification',tf:'true/false'}[f])).join(', ');
  $('setupMessage').textContent=`Generated ${currentQuestions.length} questions from ${cats.length} selected categories (${includedModes}). Identification and true/false generators are not repeated within a single test.`;
}
