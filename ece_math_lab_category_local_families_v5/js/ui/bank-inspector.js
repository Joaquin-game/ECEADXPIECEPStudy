/* Inspects the exact registry consumed by test selection and runs randomized bank integrity checks. */

/* ===== Built-in numerical-bank explorer and live integrity audit =====
   Lists the actual canonical registry that makeQuiz() samples from. The audit verifies the
   category count, unique titles/recipe keys/factory closures, and produces multiple instances
   from every entry to catch missing prompts, explanations, or non-finite numeric answer keys. */
function promptBlueprintSignature(prompt){
  // Normalize sampled numeric constants so different parameter values of the same task
  // do not masquerade as distinct generator structures.
  return String(prompt||'').replace(/\d+(?:\.\d+)?/g,'#').replace(/\s+/g,' ').trim();
}
function renderNumericBankExplorer(){
  const select=$('bankExplorerCategory');if(!select)return;
  const category=select.value||CAT_IDS[0],entries=NUMERIC_GENERATOR_REGISTRY[category]||[];
  const cat=CATS.find(c=>c.id===category);
  const uniqueTitles=new Set(entries.map(e=>e.title)).size;
  const uniqueRecipeKeys=new Set(entries.map(e=>e.generatorFamily)).size;
  const uniqueFactories=new Set(entries.map(e=>e.make)).size;
  const sampledBlueprints=new Set(entries.map(e=>{try{return promptBlueprintSignature(e.make().prompt)}catch{return `ERROR:${e.id}`}})).size;
  const enabledCount=entries.filter(isNumericGeneratorEnabled).length;
  $('bankExplorerSummary').textContent=`${cat?cat.name:category}: ${entries.length} entries · ${enabledCount} enabled for new tests · ${uniqueTitles} titles · ${uniqueRecipeKeys} recipe keys · ${uniqueFactories} factories · ${sampledBlueprints}/${entries.length} distinct sampled prompt structures (numeric constants normalized).`;
  $('bankExplorerList').innerHTML=entries.map((e,i)=>{const enabled=isNumericGeneratorEnabled(e);return `<li><div><strong>${String(i+1).padStart(2,'0')}. ${htmlEscape(e.title)}</strong><small>ID: ${htmlEscape(e.id||`${category}-${String(i+1).padStart(2,'0')}`)} · Recipe: ${htmlEscape(e.recipeKey||e.generatorFamily||'unlabeled')} · Difficulty ${e.difficulty||difficultyForIndex(i)}</small></div><label class="bank-enable-toggle" title="Disabled generators are excluded from new single-question draws"><input type="checkbox" data-generator-enable="${htmlEscape(e.id)}" aria-label="Enable ${htmlEscape(e.title)}" ${enabled?'checked':''}><span>Use</span></label><span class="bank-level">LEVEL ${e.difficulty||difficultyForIndex(i)}</span></li>`}).join('');
}
function runNumericalBankAudit(){
  const records=[];let totalErrors=0,totalSamples=0;
  for(const category of CAT_IDS){
    const entries=NUMERIC_GENERATOR_REGISTRY[category]||[],errors=[],sampleBlueprints=[];
    if(entries.length<MIN_NUMERIC_GENERATORS_PER_CATEGORY)errors.push(`expected at least ${MIN_NUMERIC_GENERATORS_PER_CATEGORY} entries, found ${entries.length}`);
    for(const [label,values] of [['IDs',entries.map(e=>e.id)],['titles',entries.map(e=>e.title)],['recipe keys',entries.map(e=>e.generatorFamily)],['factory closures',entries.map(e=>e.make)]] ){
      if(new Set(values).size!==entries.length)errors.push(`duplicate ${label}`);
    }
    for(const entry of entries){
      for(let trial=0;trial<2;trial++){
        try{
          const q=entry.make();totalSamples++;
          if(!q||typeof q.prompt!=='string'||!q.prompt.trim())throw new Error('missing prompt');
          if(typeof q.explanation!=='string'||!q.explanation.trim())throw new Error('missing explanation');
          if(q.answer===undefined||q.answer===null||!Number.isFinite(Number(q.answer)))throw new Error('answer key is not finite numeric data');
          if(trial===0)sampleBlueprints.push(promptBlueprintSignature(q.prompt));
        }catch(err){errors.push(`${entry.id||entry.title}: ${err.message}`)}
      }
    }
    const blueprintCount=new Set(sampleBlueprints).size;
    if(blueprintCount<Math.ceil(entries.length*0.8))errors.push(`only ${blueprintCount}/${entries.length} distinct sampled prompt structures after numeric constants are normalized (expected at least 80%)`);
    totalErrors+=errors.length;records.push({category,count:entries.length,blueprints:blueprintCount,errors});
  }
  const allEntries=CAT_IDS.flatMap(c=>NUMERIC_GENERATOR_REGISTRY[c]||[]);
  if(new Set(allEntries.map(e=>e.id)).size!==allEntries.length){totalErrors++;records.push({category:'ALL',count:allEntries.length,errors:['duplicate final generator IDs']})}
  if(CAT_IDS.some(c=>(NUMERIC_GENERATOR_REGISTRY[c]||[]).length<MIN_NUMERIC_GENERATORS_PER_CATEGORY)||BUILTIN.length!==allEntries.length){totalErrors++;records.push({category:'ALL',count:BUILTIN.length,errors:['quiz sampling pool is not identical to canonical registry or a category is below the minimum']})}
  const pass=totalErrors===0;
  $('bankExplorerSummary').textContent=pass
    ?`PASS — ${records.length} categories, ${allEntries.length} registered numerical entries (minimum ${MIN_NUMERIC_GENERATORS_PER_CATEGORY} per category). ${totalSamples} generated samples checked; titles, recipe keys, IDs, factories, and numeric answers passed.`
    :`CHECK NEEDED — ${totalErrors} issue(s) found. ${records.filter(r=>r.errors.length).map(r=>r.category+': '+r.errors.join('; ')).join(' | ')}`;
  $('bankExplorerSummary').style.color=pass?'var(--green)':'var(--red)';
  $('bankExplorerSummary').style.background=pass?'var(--greenbg)':'var(--redbg)';
}
function initNumericalBankExplorer(){
  const select=$('bankExplorerCategory');if(!select)return;
  select.innerHTML=CATS.map(c=>`<option value="${htmlEscape(c.id)}">${htmlEscape(c.name)}</option>`).join('');
  select.value=CAT_IDS[0];select.addEventListener('change',renderNumericBankExplorer);
  $('auditBankBtn').addEventListener('click',runNumericalBankAudit);
  $('bankExplorerList').addEventListener('change',event=>{const input=event.target.closest('input[data-generator-enable]');if(!input)return;const saved=setNumericGeneratorEnabled(input.dataset.generatorEnable,input.checked);renderNumericBankExplorer();if(!saved)$('bankExplorerSummary').textContent+=' Preferences could not be saved in this browser session.';});
  renderNumericBankExplorer();
}

/* ===== Dual-thumb difficulty range control =====
   The visible pair of range inputs updates the hidden numeric values already read by makeQuiz().
   The handles are constrained so minimum difficulty can never exceed maximum difficulty. */
