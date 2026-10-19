/* Pure test-pool filtering and selection helpers. These do not assemble the full quiz until makeQuiz is called. */

function linkDependencies(module,startIndex){module.forEach((q,local)=>{q.globalIndex=startIndex+local;if(Number.isInteger(q.dependsOnLocalIndex))q.dependsOnIndex=startIndex+q.dependsOnLocalIndex;});}

function selectedCategories(){return Array.from(document.querySelectorAll('input[name="category"]:checked')).map(n=>n.value)}

function eligibleBuiltinSingles(cats,customs){const list=BUILTIN.filter(s=>cats.includes(s.category)&&isNumericGeneratorEnabled(s)).map(spec=>({kind:'builtin',spec}));if(customs)for(const t of getTemplates())if(!t.dependsOnPrevious&&!Array.isArray(t.steps)&&!['id','tf'].includes(t.mode)&&cats.includes(t.category))list.push({kind:'custom',template:t});return list}

function eligibleAuxSingles(cats,type,customs){const bank=type==='id'?IDENTIFICATION_GENERATORS:TRUEFALSE_GENERATORS;const list=bank.filter(s=>cats.includes(s.category)).map(spec=>({kind:'aux',spec}));if(customs)for(const t of getTemplates())if(!t.dependsOnPrevious&&!Array.isArray(t.steps)&&t.mode===type&&cats.includes(t.category))list.push({kind:'customAux',template:t});return list}

function eligiblePairModules(cats,customs,allowLongChains=false){const list=PAIR_GENERATORS.filter(p=>p.categories.every(c=>cats.includes(c))).map(pair=>({kind:'pair',pair}));if(customs)for(const t of getTemplates()){if(t.dependsOnPrevious&&cats.includes(t.category)&&cats.some(c=>c!==t.category))list.push({kind:'customDep',template:t});else if(Array.isArray(t.steps)&&t.steps.length===2&&t.steps.every(s=>cats.includes(s.category)))list.push({kind:'customChain',template:t});else if(allowLongChains&&Array.isArray(t.steps)&&t.steps.length>2&&t.steps.every(s=>cats.includes(s.category)))list.push({kind:'customChain',template:t});}return list}

function selectedFormats(){return Array.from(document.querySelectorAll('input[name="answerFormat"]:checked')).map(n=>n.value)}

function currentTestFlow(){return document.querySelector('input[name="testFlow"]:checked')?.value||'all'}

function isUniqueSpecialEntry(entry){return entry&&['aux','customAux'].includes(entry.kind)}

function specialEntryKey(entry){return entry.kind==='aux'?entry.spec.id:`custom-${entry.template.id}-${entry.template.mode}`}

function makeSingleFromEntry(entry,cats,formats){
  if(entry.kind==='builtin'){const q=builtinSingle(entry.spec,formats);return q?[q]:null}
  if(entry.kind==='custom')return customModule(entry.template,cats,formats);
  if(entry.kind==='aux'){const q=entry.spec.make();q.difficulty=entry.spec.difficulty||3;return [q];}
  if(entry.kind==='customAux')return customModule(entry.template,cats,formats);
  if(entry.kind==='pair')return makePairModule(entry.pair,formats);
  return customModule(entry.template,cats,formats);
}
