#!/usr/bin/env node
// Unified registry and question-tree smoke test. Exercises real factories without a DOM.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const appRoot = path.resolve(__dirname, '..');
// The modular app is hosted by the project-root index.html; keep the test runnable from its nested package folder.
const pagePath = fs.existsSync(path.join(appRoot, 'index.html')) ? path.join(appRoot, 'index.html') : path.resolve(appRoot, '..', 'index.html');
const pageBase = path.dirname(pagePath);
const html = fs.readFileSync(pagePath, 'utf8');
const localScripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(p => !/^https?:/.test(p));
// The final setup script calls init() and therefore needs a browser DOM; all the generator and engine modules are tested here.
const source = ['globalThis.window = globalThis;\n', ...localScripts.filter(p => !p.endsWith('/js/ui/setup.js') && p !== 'js/ui/setup.js').map(p => `\n/* ${p} */\n${fs.readFileSync(path.join(pageBase, p), 'utf8')}\n`)].join('\n') + String.raw`
const assert = (condition, message) => { if (!condition) throw new Error(message); };
// Deterministic localStorage mock for testing per-generator enable/disable persistence.
const __storage = new Map();
globalThis.localStorage = { getItem(key) { return __storage.has(key) ? __storage.get(key) : null; }, setItem(key, value) { __storage.set(key, String(value)); } };
const report = {categories:CATS.length, numeric:BUILTIN.length, identification:QUESTION_REGISTRY.filter(e=>e.questionClass==='identification').length, trueFalse:QUESTION_REGISTRY.filter(e=>e.questionClass==='truefalse').length, categoryRegistryCount:Object.keys(CATEGORY_QUESTION_REGISTRIES).length, unifiedRegistry:QUESTION_REGISTRY.length, categoryCounts:NUMERIC_REGISTRY_COUNTS};
assert(report.categories===20, 'Expected 20 categories');
assert(report.numeric===CAT_IDS.reduce((sum, category) => sum + NUMERIC_GENERATOR_REGISTRY[category].length, 0), 'Numeric total does not match the canonical registries');
assert(report.identification===800, 'Expected 800 identification entries');
assert(report.trueFalse===800, 'Expected 800 true/false entries');
assert(report.categoryRegistryCount===20, 'Every category should own a registry view');
assert(report.unifiedRegistry===2690, 'Expected one unified registry containing numeric, concept, and tree-node entries');
assert(QUESTION_REGISTRY_FINALIZED===true, 'The shared registry should be finalized before UI startup.');
assert(QUESTION_REGISTRY.filter(e=>e.parentId).length===60, 'Expected one dependent node for each same-topic tree');
assert(QUESTION_REGISTRY.filter(e=>e.treeChildren.length).length===60, 'Expected 60 compound root nodes');
assert(QUESTION_REGISTRY.every(e=>e.repeatable || e.treeChildren.length===0), 'Non-repeatable questions must always be singular');
assert(QUESTION_REGISTRY.every(e=>!e.parentId||QUESTION_REGISTRY_BY_ID[e.parentId]?.category===e.category), 'Every tree parent-child edge must stay within one category');
assert(CAT_IDS.every(category=>CATEGORY_QUESTION_REGISTRIES[category]?.length===QUESTION_REGISTRY.filter(e=>e.category===category).length), 'Category registry must contain every generator owned by that category');
// Precision, notation parsing, and tolerance regressions: scientific/engineering forms compare by value.
assert(evalDecimalExpr('0.1+0.2').toString()==='0.3', 'Decimal addition should not inherit binary floating-point drift');
assert(evalDecimalExpr('1/3').toString().startsWith('0.333333333333333333333333333333'), 'Decimal division should retain high precision');
assert(evalDecimalExpr('2^100').toPlainString()==='1267650600228229401496703205376', 'Integer powers should remain exact');
for (const spelling of ['1e-12','1.0E−12','1.0 × 10^-12','1.0\\times10^{-12}','1.0×10⁻¹²']) {
  const parsed=parseUserDecimal(spelling);
  assert(parsed && parsed.eq('1e-12'), 'Scientific notation parser mismatch for '+spelling);
}
for (const [spelling,expected] of [['4.7 μF','4.7e-6'],['3.3mV','3.3e-3'],['3.3MV','3.3e6'],['2.2 kΩ','2200']]) {
  const parsed=parseUserDecimal(spelling);
  assert(parsed && parsed.eq(expected), 'Engineering prefix parser mismatch for '+spelling);
}
assert(formatNumberLatex('1e-12')!=='0', 'Tiny nonzero values must not display as zero');
assert(suggestedNumericNotation('1e-6')==='engineering', 'Small values should default to engineering notation');
assert(suggestedNumericNotation('1234567')==='engineering', 'Large values should default to engineering notation');
assert(suggestedNumericNotation('12.34')==='plain', 'Ordinary-size values should default to decimal notation');
assert(nfmt('0.0000042').includes('\\times10^{-6}'), 'Given values should use engineering notation when very small');
const notationOptions=numericDisplayOptions({answerExact:'1e-6',answerSpec:{kind:'numeric',notation:'any',significantDigits:4}});
assert(notationOptions.notation==='engineering', 'Answer and choice display should share answer-magnitude-based engineering notation');
assert(valueDisplay('1e-6','number',notationOptions).includes('\\times10^{-6}'), 'Answer and choice formatter should preserve small values in engineering notation');
assert(formatNumberLatex('1e-8',{decimalPlaces:3})!=='0.000', 'Auto notation must avoid rounding a tiny value to zero when decimal places are configured');
assert(formatNumberLatex('1.2345',{decimalPlaces:3})==='1.235', 'Requested decimal-place formatting should be rounded to that place');
assert(withinNumericTolerance('1e-15','0',numericTolerance('1e-15'))===false, 'Zero must not pass for a tiny nonzero answer');
assert(withinNumericTolerance('1e-12','1.004e-12',numericTolerance('1e-12'))===true, 'Relative tolerance should accept small rounding differences');
assert(numericNotationMatches('1.25e-6','scientific'), 'Scientific e-notation should be recognized');
assert(numericNotationMatches('12.5e-6','engineering'), 'Engineering notation should accept mantissas below 1000 and exponents divisible by 3');
assert(!numericNotationMatches('12.5e-6','scientific'), 'Strict scientific notation should reject a mantissa outside [1,10)');
assert(numericNotationMatches('4.7 μF','engineering'), 'SI-prefixed values should count as engineering notation');
assert(!numericNotationMatches('1.2e-6','decimal'), 'Strict decimal notation should reject exponent notation');
assert(numericTolerance('1.234',{significantDigits:3}).eq('0.005'), 'Significant-digit tolerance should be half an ULP');
assert(numericTolerance('1.234',{decimalPlaces:3}).eq('0.0005'), 'Decimal-place tolerance should be half a unit in the final place');
const exactQuestion=qNum('laplace','Precision regression','Evaluate the expression.',evalDecimalExpr('1/3'),'Use decimal division.','number',{significantDigits:20});
assert(exactQuestion.answerSpec.kind==='numeric' && exactQuestion.answerExact.startsWith('0.33333333333333333333'), 'Numeric questions should expose a high-precision answer specification');
assert(dataMean([1,2,3])===2, 'Data mean helper should calculate the arithmetic mean');
assert(Math.abs(dataVariance([1,2,3], true)-1)<1e-12, 'Data sample variance helper should use n-1');
assert(Math.abs(dataVariance([1,2,3], false)-2/3)<1e-12, 'Data population variance helper should use n');
let numericSamples=0, multipleChoiceSamples=0, failures=[];
for (const category of CAT_IDS) {
  const entries = NUMERIC_GENERATOR_REGISTRY[category];
  assert(entries.length>=48, category+' should have at least 48 numeric generators');
  for (const entry of entries) {
    for (let k=0;k<4;k++) {
      try {
        const q=entry.make();
        assert(Number.isFinite(Number(q.answer)), entry.id+' non-finite answer');
        assert(q.answerKind==='numeric' && q.answerSpec?.kind==='numeric' && typeof q.answerExact==='string', entry.id+' missing numeric answer specification');
        assert(q.prompt && q.explanation, entry.id+' missing prompt/explanation');
        assert(q.generatorId===entry.id, entry.id+' missing generator ID metadata');
        assert(q.recipeName===entry.title, entry.id+' missing debug recipe name');
        assert(q.recipeKey===entry.recipeKey, entry.id+' missing debug recipe key');
        numericSamples++;
        const mc=normalizeTestMode({...q}, ['mc']);
        assert(mc.type==='mc', entry.id+' did not normalize to MC');
        const choices=buildChoices(mc);
        assert(choices.length===4 && choices.filter(c=>c.correct).length===1, entry.id+' answer-key error');
        multipleChoiceSamples++;
      } catch (e) { failures.push(entry.id+': '+e.message); }
    }
  }
}
// Generator exclusions must persist and affect numerical single-question eligibility.
try {
  const target = BUILTIN[0];
  assert(isNumericGeneratorEnabled(target), 'Generators should be enabled by default');
  assert(eligibleQuestionRegistry([target.category], ['mc','fib'], false).some(row=>row.spec.id===target.id), 'Enabled generator should be eligible');
  assert(setNumericGeneratorEnabled(target.id, false), 'Disabling a generator should persist');
  assert(__storage.get(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY).includes(numericGeneratorPreferenceKey(target)), 'Preference should be stored by stable category/recipe key, not only order-based ID');
  assert(!isNumericGeneratorEnabled(target), 'Disabled generator should be marked disabled');
  assert(!eligibleQuestionRegistry([target.category], ['mc','fib'], false).some(row=>row.spec.id===target.id), 'Disabled generator should be omitted from test selection');
  assert(setNumericGeneratorEnabled(target.id, true), 'Re-enabling a generator should persist');
  assert(isNumericGeneratorEnabled(target), 'Re-enabled generator should be marked enabled');
  assert(eligibleQuestionRegistry([target.category], ['mc','fib'], false).some(row=>row.spec.id===target.id), 'Re-enabled generator should return to test selection');
} catch (e) { failures.push('Generator enable/disable preference: '+e.message); }
// Legacy seed-key preferences must continue to disable the corresponding normalized family keys.
try {
  const oldNumeric=__storage.get(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY),oldQuestion=__storage.get(DISABLED_QUESTION_GENERATORS_STORAGE_KEY);
  __storage.set(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY,JSON.stringify(['probability::probability-topic-seed-01','advanced::advanced-seed-01']));
  __storage.set(DISABLED_QUESTION_GENERATORS_STORAGE_KEY,'[]');
  const migrated=disabledQuestionGeneratorKeys();
  assert(migrated.has('probability::probability-family-26'),'Old topic-seed preference should map to probability family 26');
  assert(migrated.has('advanced::advanced-family-21'),'Old core-seed preference should map to advanced family 21');
  const target=NUMERIC_GENERATOR_REGISTRY.probability.find(entry=>entry.generatorFamily==='probability-family-26');
  assert(target&&!isQuestionGeneratorEnabled(target),'Legacy preference should disable the new family entry');
  assert(setQuestionGeneratorEnabled(target,true),'Re-enabling a migrated family should succeed');
  const remaining=JSON.parse(__storage.get(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY)||'[]');
  assert(!remaining.includes('probability::probability-topic-seed-01'),'Re-enable should clear the old topic-seed preference');
  if(oldNumeric===undefined)__storage.delete(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY);else __storage.set(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY,oldNumeric);
  if(oldQuestion===undefined)__storage.delete(DISABLED_QUESTION_GENERATORS_STORAGE_KEY);else __storage.set(DISABLED_QUESTION_GENERATORS_STORAGE_KEY,oldQuestion);
} catch(e) { failures.push('Legacy generator preference migration: '+e.message); }
let treeSamples=0;
for (const root of QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.treeChildren.length)) {
  try {
    const qs=makeRegistryTreeModule(root, ['fib'], {expand:'all',maxNodes:80,maxDepth:12});
    assert(qs.length>=2, root.id+' compound tree should contain a root and at least one descendant');
    assert(qs[0].questionNodeId===root.id, root.id+' module should begin with the requested root');
    assert(qs.every(q=>Number.isFinite(Number(q.answer))), root.id+' tree contains a non-finite answer');
    assert(qs.slice(1).every(q=>q.sharedData===qs[0].sharedData), root.id+' tree descendants must share a common data object');
    assert(qs.slice(1).every(q=>q.parentQuestionId), root.id+' descendants must carry parent IDs');
    treeSamples++;
  } catch (e) { failures.push(root.id+': '+e.message); }
}
const conceptSamples = QUESTION_REGISTRY.filter(g=>g.questionClass==='identification'||g.questionClass==='truefalse');
for (const g of conceptSamples) { try { const q=g.make(); assert(q.prompt && q.explanation, g.id+' missing concept text'); assert(g.repeatable===false&&g.treeChildren.length===0, g.id+' must be non-repeatable and singular'); if(g.questionClass==='identification'){assert(q.type==='id'&&q.answerSpec?.kind==='text',g.id+' should expose a text identification answer specification');assert((q.acceptedAnswers||[]).includes(q.answerText),g.id+' canonical identification answer should be accepted')} if(g.questionClass==='truefalse'){assert(q.type==='tf'&&q.answerSpec?.kind==='boolean',g.id+' should expose a boolean answer specification');assert(q.truthValue===true&&q.answer===1&&q.answerText==='True',g.id+' should currently be a true assertion');assert(q.choices?.some(c=>c.label==='True'&&c.correct)&&q.choices?.some(c=>c.label==='False'&&!c.correct),g.id+' should offer False only as an incorrect answer');assert(!/does not describe/i.test(q.prompt),g.id+' should not reveal answer through old negation wording')} } catch(e) { failures.push(g.id+': '+e.message); } }
try {
  const idPool=eligibleQuestionRegistry(['em'],['id'],false).filter(row=>row.spec.questionClass==='identification');
  const tfPool=eligibleQuestionRegistry(['em'],['tf'],false).filter(row=>row.spec.questionClass==='truefalse');
  const mcOnly=eligibleQuestionRegistry(['em'],['mc'],false).filter(row=>row.spec.questionClass!=='numeric');
  assert(idPool.length===40,'Each topic should provide 40 identification entries in the unified selector');
  assert(tfPool.length===40,'Each topic should provide 40 true/false entries in the unified selector');
  assert(mcOnly.length===0,'Identification and T/F entries should not leak into MC-only selection');
  const topLevelPool=eligibleQuestionRegistry(['em'],['fib'],false);
  const compoundRootEntry=topLevelPool.find(row=>row.kind==='registry'&&row.spec.treeChildren?.length);
  assert(compoundRootEntry,'compound root should also be eligible as a top-level question');
  const rootAskedAlone=makeSingleFromEntry(compoundRootEntry,['em'],['fib']);
  assert(rootAskedAlone.length===1&&!rootAskedAlone[0].linkGroup&&rootAskedAlone[0].questionChildren.length>=1,'a compound root can be asked alone without automatically appending descendants');
  for(const g of QUESTION_REGISTRY.filter(entry=>entry.questionClass==='truefalse')){
    const q=g.make();assert(q.truthValue===true&&q.answer===1,g.id+' T/F generator should make the statement true');
    assert(q.choices.some(choice=>choice.label==='True'&&choice.correct),g.id+' True must be keyed correct');
    assert(q.choices.some(choice=>choice.label==='False'&&!choice.correct),g.id+' False must be selectable but wrong');
    assert(q.explanation.startsWith('True.'),g.id+' explanation should confirm true statement');
  }
} catch(e) { failures.push('Unified classification registry: '+e.message); }
// Tree-history regressions: going up clears descendant history, but does not erase visit counts.
try {
  const parent={id:'tree-parent',recipeKey:'tree-parent',parentId:null,repeatable:true,treeChildren:['tree-child']};
  const child={id:'tree-child',recipeKey:'tree-child',parentId:'tree-parent',repeatable:false,treeChildren:[]};
  const selector=new QuestionTreeSelector([parent,child]);
  assert(selector.chooseRoot([parent])===parent,'tree root should be selectable');
  assert(selector.chooseChild(parent,[child])===child,'unasked non-repeatable child should be selectable beneath its parent');
  assert(selector.count(parent)===1&&selector.count(child)===1,'tree visit counts should be recorded');
  selector.backtrackOneLevel();
  assert(selector.count(parent)===1&&selector.count(child)===1,'backtracking must not erase visit counts');
  assert(!selector.canSelect(child,parent),'cleared child history alone must not allow a non-repeatable child before its parent repeats');
  assert(selector.chooseRoot([parent])===parent&&selector.count(parent)===2,'repeatable parent should be selectable again');
  assert(selector.canSelect(child,parent),'non-repeatable child should be eligible once its repeatable parent has repeated');
  assert(selector.chooseChild(parent,[child])===child&&selector.count(child)===2,'child should be repeatable through the repeated-parent rule');
  const oneOff={id:'one-off',recipeKey:'one-off',parentId:null,repeatable:false,treeChildren:[]};
  const singles=new QuestionTreeSelector([oneOff]);
  assert(singles.chooseRoot([oneOff])===oneOff,'singular top-level question should be selectable once');
  singles.moveToTopLevel();assert(singles.chooseRoot([oneOff])===null,'non-repeatable top-level question must not repeat');
} catch(e) { failures.push('Question tree history: '+e.message); }
try {
  for(const rootSpec of QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.treeChildren.length)){const nodes=makeRegistryTreeModule(rootSpec,['fib'],{expand:'all',maxDepth:12,maxNodes:80});const root=nodes[0];for(const child of nodes.slice(1)){assert(child.category===root.category,rootSpec.id+' must stay within one topic');assert(root.sharedData===child.sharedData,rootSpec.id+' descendants must share data');assert(child.parentQuestionId,rootSpec.id+' descendants must identify their parent');assert(Number.isFinite(Number(child.answer)),rootSpec.id+' descendants need numeric answer data');}}
} catch(e) { failures.push('Question tree context sharing: '+e.message); }
try {
  for(const category of CAT_IDS){
    const local=CATEGORY_QUESTION_REGISTRIES[category];
    assert(local.every(node=>node.category===category),category+' local registry contains foreign category nodes');
    assert(local.some(node=>node.questionClass==='identification'),category+' missing local identification generators');
    assert(local.some(node=>node.questionClass==='truefalse'),category+' missing local true/false generators');
    assert(local.some(node=>node.questionClass==='numeric'&&node.repeatable),category+' missing repeatable numeric generator');
    assert(local.some(node=>!node.parentId&&node.treeChildren.length>0),category+' missing a locally-owned tree root');
    assert(local.some(node=>node.parentId),category+' missing a locally-owned tree child');
  }
  const root=QUESTION_REGISTRY.find(node=>!node.parentId&&node.treeChildren.length);
  const tree=makeRegistryTreeModule(root,['fib'],{expand:'all',maxDepth:8,maxNodes:100});
  assert(tree[0].treeDepth===0&&tree.slice(1).some(node=>node.treeDepth>0),'module builder should materialize a tree at multiple levels');
  assert(new Set(tree.map(node=>node.sharedData)).size===1,'every generated node in the compound tree should share the root context object');
} catch(e) { failures.push('Category registries/module builder: '+e.message); }
// Prove the module builder handles more than the current two-node built-in trees: one root,
// two siblings, and a grandchild under only one sibling, all sharing a common context object.
try {
  const synthetic = [
    {id:'synthetic-root',category:'laplace',title:'Synthetic root',recipeKey:'synthetic-root',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:null,treeChildren:['synthetic-child-a','synthetic-child-b'],make:()=>qNum('laplace','Synthetic root','Find x when x=2.',2,'x is 2.')},
    {id:'synthetic-child-a',category:'laplace',title:'Synthetic child A',recipeKey:'synthetic-child-a',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-root',treeChildren:['synthetic-grandchild'],make:ctx=>qNum('laplace','Synthetic child A','Use parent answer '+ctx.parentAnswer+'; add 3.',Number(ctx.parentAnswer)+3,'Add three to the parent result.')},
    {id:'synthetic-child-b',category:'laplace',title:'Synthetic child B',recipeKey:'synthetic-child-b',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-root',treeChildren:[],make:ctx=>qNum('laplace','Synthetic child B','Use parent answer '+ctx.parentAnswer+'; multiply by 4.',Number(ctx.parentAnswer)*4,'Multiply the parent result by four.')},
    {id:'synthetic-grandchild',category:'laplace',title:'Synthetic grandchild',recipeKey:'synthetic-grandchild',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-child-a',treeChildren:[],make:ctx=>qNum('laplace','Synthetic grandchild','Use parent answer '+ctx.parentAnswer+'; multiply by 2.',Number(ctx.parentAnswer)*2,'Multiply the parent result by two.')}
  ];
  const branch=makeRegistryTreeModule(synthetic[0],['fib'],{expand:'all',maxDepth:8,maxNodes:20,registry:synthetic});
  assert(branch.length===4,'generic module builder should include root, both siblings, and a grandchild');
  assert(branch.map(q=>q.questionNodeId).join(',')==='synthetic-root,synthetic-child-a,synthetic-grandchild,synthetic-child-b','generic tree should preserve depth-first tree order');
  assert(branch[0].treeDepth===0&&branch[1].treeDepth===1&&branch[2].treeDepth===2&&branch[3].treeDepth===1,'generic tree should preserve arbitrary node depths');
  assert(branch[1].parentQuestionId==='synthetic-root'&&branch[2].parentQuestionId==='synthetic-child-a'&&branch[3].parentQuestionId==='synthetic-root','each child should reference its actual direct parent');
  assert(branch.every(q=>q.sharedData===branch[0].sharedData),'all nodes in an arbitrary tree should share one context object');
  assert(branch[1].answer===5&&branch[2].answer===10&&branch[3].answer===8,'dependent answers should consume their direct parent answer');
} catch(e) { failures.push('Arbitrary branching tree module: '+e.message); }
// For each collapsed family, force its first random draw (the variant selector) to 0 and 1,
// while holding later random draws constant. The outputs must actually distinguish the tasks.
const originalMathRandom = Math.random;
const forceVariantSample = (entry, variant) => {
  let firstDraw = true;
  Math.random = () => { if (firstDraw) { firstDraw = false; return variant ? 0.999999 : 0; } return 0.37; };
  try { return entry.make(); } finally { Math.random = originalMathRandom; }
};
let variantFamiliesChecked = 0;
const EXPANSION_FAMILY_MAX={electronics:25,geas:25,precalc:25,probability:25};
for (const category of CAT_IDS) for (const entry of NUMERIC_GENERATOR_REGISTRY[category].filter(e=>{const m=String(e.generatorFamily).match(/-family-(\d+)$/);return !!m&&Number(m[1])<=(EXPANSION_FAMILY_MAX[category]||20)})) {
  try {
    const v0 = forceVariantSample(entry, 0), v1 = forceVariantSample(entry, 1);
    assert(v0.prompt !== v1.prompt || Number(v0.answer) !== Number(v1.answer) || v0.explanation !== v1.explanation,
      entry.id+' does not distinguish its two task variants');
    variantFamiliesChecked++;
  } catch (e) { failures.push(entry.id+': '+e.message); }
}
assert(variantFamiliesChecked===420,'Expected all 420 original expansion families to be checked');
// Supplement, extra, and topic seed entries were promoted to their own two-variant family rows.
let seedFamilyVariantsChecked=0;
const SEED_FAMILY_RANGES={calculus:[21,40],complexcalc:[21,40],convolution:[21,40],data:[21,40],fourier:[21,40],related:[21,40],relativity:[21,40],ztrans:[21,40],electronics:[26,35],geas:[26,35],precalc:[26,35],probability:[26,35]};
for(const category of CAT_IDS)for(const entry of NUMERIC_GENERATOR_REGISTRY[category].filter(e=>{const range=SEED_FAMILY_RANGES[category];const m=String(e.generatorFamily).match(/-family-(\d+)$/);return !!range&&!!m&&Number(m[1])>=range[0]&&Number(m[1])<=range[1]})){
  try{
    const v0=forceVariantSample(entry,0),v1=forceVariantSample(entry,1);
    assert(v0.prompt!==v1.prompt||Number(v0.answer)!==Number(v1.answer)||v0.explanation!==v1.explanation,entry.id+' seed family does not distinguish its two variants');
    seedFamilyVariantsChecked++;
  }catch(e){failures.push(entry.id+': '+e.message)}
}
assert(seedFamilyVariantsChecked===200,'Expected all 200 supplement/extra/topic seed family wrappers to be checked');
// Targeted regression cases for formula mismatches found during the family-local refactor.
const forceFamilyVariant = (entry, variant) => {
  const savedRandom = Math.random;
  let firstDraw = true;
  Math.random = () => { if (firstDraw) { firstDraw = false; return variant ? 0.999999 : 0; } return 0.37; };
  try { return entry.make(); } finally { Math.random = savedRandom; }
};
const findFamily = (category, number) => {
  const key = category + '-family-' + String(number).padStart(2, '0');
  const entry = NUMERIC_GENERATOR_REGISTRY[category].find(candidate => candidate.generatorFamily === key);
  if (!entry) throw new Error('Missing targeted regression family ' + key);
  return entry;
};
const closeTo = (actual, expected, tolerance=1e-10) => Math.abs(Number(actual)-expected) <= tolerance;
for (const [category, familyNumber, variant, expected, label] of [
  ['controls',2,1,4*Math.sqrt(1-Math.pow(0.391,2)),'controls damped natural frequency'],
  ['controls',2,0,Math.sqrt(1-Math.pow(0.391,2)),'controls normalized damped frequency'],
  ['ztrans',7,1,4,'Z-transform unit-step sample'],
  ['ztrans',7,0,4*4*5/2,'Z-transform ramp prefix sum'],
  ['em',14,0,4,'charge conversion to microcoulombs'],
  ['em',14,1,4e-6*18,'electrostatic energy from qV'],
  ['calculus',4,1,Math.log(2),'calculus logarithmic integral variant A'],
  ['calculus',4,0,Math.log(2),'calculus logarithmic integral variant B'],
  ['calculus',6,1,Math.log(2),'calculus logarithmic integral family 06 variant A'],
  ['calculus',6,0,Math.log(2),'calculus logarithmic integral family 06 variant B']
]) {
  try {
    const q=forceFamilyVariant(findFamily(category,familyNumber),variant);
    assert(closeTo(q.answer,expected),label + ': expected ' + expected + ', got ' + q.answer);
  } catch(e) { failures.push('Formula regression (' + label + '): ' + e.message); }
}
// An ANOVA edge case: a deterministic all-equal sample must be repaired before division by zero.
try {
  const savedRandom=Math.random;Math.random=()=>0;
  let q;try{q=findFamily('data',11).make()}finally{Math.random=savedRandom}
  assert(Number.isFinite(Number(q.answer)),'Data family 11 must not return Infinity/NaN when generated groups initially have zero within-group variance');
  assert(!/NaN|Infinity/.test(q.prompt+' '+q.explanation),'Data family 11 must keep the prompt and explanation finite');
} catch(e) { failures.push('ANOVA zero-variance edge case: '+e.message); }
// Competition-display and family-completeness regressions added after the prompt audit.
try {
  assert(roundSigNumber(0.3905,3)===0.391, 'Decimal significant-digit rounding should use decimal, not binary, halfway handling');
  const savedRandomForTie=Math.random;Math.random=()=>0.5;let midpoint;try{midpoint=rand(0.390,0.391)}finally{Math.random=savedRandomForTie}
  assert(midpoint===0.391, 'Random decimal givens should be rounded before formula use with decimal-safe tie handling');
  assert(!moneyToken(25000).includes('.00') && moneyToken(25000).includes('25{,}000'), 'Whole-dollar monetary values should not gain redundant trailing cents');
  const promptCases = [
    ['em',14,0,['Express the charge in microcoulombs','q=']],
    ['econ',7,0,['in its first year','percentage of investment']],
    ['econ',13,0,['Nominal return','inflation','approximation']],
    ['econ',14,0,['production volume','estimate total cost']],
    ['econ',15,0,['revenue','operating costs','Find operating profit']],
    ['econ',17,0,['Equipment A costs','useful life','Ignoring interest']],
    ['econ',18,0,['A loan of','years at','Find the equal annual payment']],
  ];
  for(const [category,family,variant,parts] of promptCases){const q=forceFamilyVariant(findFamily(category,family),variant);for(const part of parts)assert(q.prompt.includes(part),category+' family '+family+' variant '+variant+' is missing prompt detail: '+part)}
  const formats=[
    ['econ',7,0,'percent'],['econ',7,1,'number'],
    ['econ',9,0,'number'],['econ',9,1,'currency'],
    ['econ',14,0,'currency'],['econ',14,1,'number'],
    ['econ',15,0,'currency'],['econ',15,1,'percent']
  ];
  for(const [category,family,variant,format] of formats){const q=forceFamilyVariant(findFamily(category,family),variant);assert(q.format===format,category+' family '+family+' variant '+variant+' should format as '+format+', got '+q.format)}
  for(const variant of [0,1]){const q=forceFamilyVariant(findFamily('em',16),variant);assert(q.prompt.includes('area')&&q.prompt.includes('field'), 'EM family 16 variants must each restate loop area and field');if(variant===1)assert(q.prompt.includes('current'), 'EM family 16 torque variant must state current')}
  const em14=forceFamilyVariant(findFamily('em',14),0);assert(closeTo(em14.answer,4), 'EM charge-unit conversion should return the stated charge in microcoulombs');
  const precalc06=forceFamilyVariant(findFamily('precalc',6),0);assert(!precalc06.prompt.includes('x--')&&!precalc06.prompt.includes('y--'), 'Negative circle-center coordinates should be parenthesized unambiguously');
} catch(e) { failures.push('Competition display/prompt-completeness regression: '+e.message); }
// Exercise the actual grader: notation is interchangeable by default but can be required explicitly.
try {
  globalThis.document={querySelector(){return null;},getElementById(){return null;}};
  currentQuestions=[{type:'fib',answerExact:'1.2e-6',toleranceExact:'1e-12'}];savedResponses={0:{kind:'text',value:'1.2×10⁻⁶'}};
  assert(answerIsCorrect(currentQuestions[0],0), 'The grader should accept superscript engineering/scientific input by numeric value');
  savedResponses[0]={kind:'text',value:'0'};
  assert(!answerIsCorrect(currentQuestions[0],0), 'The grader must reject zero for a small nonzero answer');
  currentQuestions=[{type:'fib',answerExact:'1.25e-5',toleranceExact:'1e-10',expectedNotation:'scientific'}];savedResponses={0:{kind:'text',value:'12.5e-6'}};
  assert(!answerIsCorrect(currentQuestions[0],0), 'An explicitly requested scientific format should reject a non-normalized mantissa');
  savedResponses[0]={kind:'text',value:'1.25e-5'};
  assert(answerIsCorrect(currentQuestions[0],0), 'An explicitly requested scientific format should accept normalized e-notation');
  currentQuestions=[{type:'fib',answerExact:'1.25e-5',toleranceExact:'1e-10',expectedNotation:'engineering'}];savedResponses={0:{kind:'text',value:'12.5e-6'}};
  assert(answerIsCorrect(currentQuestions[0],0), 'An explicitly requested engineering format should accept a multiple-of-three exponent');
  savedResponses[0]={kind:'text',value:'1.25e-5'};
  assert(!answerIsCorrect(currentQuestions[0],0), 'An explicitly requested engineering format should reject an exponent not divisible by three');
} catch (e) { failures.push('Numeric answer grading: '+e.message); }
try {
  validateSpec({title:'Precision options validation',category:'signals',mode:'fib',prompt:'Find the value.',answer:'1e-12',expectedNotation:'scientific',absoluteTolerance:'1e-15',relativeTolerance:'0.001',significantDigits:7});
  let invalidNotation=false;try{validateSpec({title:'Invalid precision settings',category:'signals',mode:'fib',prompt:'Find the value.',answer:'1',expectedNotation:'engineering-ish'})}catch{invalidNotation=true}
  assert(invalidNotation,'Custom spec validation should reject unsupported notation modes');
} catch(e) { failures.push('Precision spec validation: '+e.message); }
try { validateSpec(EXAMPLE_CHAIN); } catch(e) { failures.push('Example chain validation: '+e.message); }
const sig = prompt => String(prompt||'').replace(/\d+(?:\.\d+)?/g,'#').replace(/\s+/g,' ').trim();
const promptBlueprintCounts = Object.fromEntries(CAT_IDS.map(category => [category, new Set(NUMERIC_GENERATOR_REGISTRY[category].map(entry => { try { return sig(entry.make().prompt); } catch { return 'ERROR:'+entry.id; } })).size]));
for (const category of CAT_IDS) assert(promptBlueprintCounts[category] >= Math.ceil(NUMERIC_GENERATOR_REGISTRY[category].length * 0.7), category+' has too few distinct normalized prompt structures');
report.promptBlueprintCounts=promptBlueprintCounts;
report.numericSamples=numericSamples; report.multipleChoiceSamples=multipleChoiceSamples; report.treeSamples=treeSamples; report.variantFamiliesChecked=variantFamiliesChecked; report.seedFamilyVariantsChecked=seedFamilyVariantsChecked; report.nonNumericSamples=conceptSamples.length; report.treeRoots=QUESTION_REGISTRY.filter(e=>e.treeChildren.length).length; report.treeChildren=QUESTION_REGISTRY.filter(e=>e.parentId).length; report.failures=failures;
console.log(JSON.stringify(report,null,2));
if (failures.length) process.exitCode=1;
`;
vm.runInThisContext(source, {filename: 'ece-math-lab-smoke-test.js'});
