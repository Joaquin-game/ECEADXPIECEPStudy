#!/usr/bin/env node
// Lightweight bank and linked-pair smoke test. It exercises the real generated factories without a DOM.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const localScripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(p => !/^https?:/.test(p));
// The final setup script calls init() and therefore needs a browser DOM; all the generator and engine modules are tested here.
const source = ['globalThis.window = globalThis;\n', ...localScripts.filter(p => p !== 'js/ui/setup.js').map(p => `\n/* ${p} */\n${fs.readFileSync(path.join(root, p), 'utf8')}\n`)].join('\n') + String.raw`
const assert = (condition, message) => { if (!condition) throw new Error(message); };
// Deterministic localStorage mock for testing per-generator enable/disable persistence.
const __storage = new Map();
globalThis.localStorage = { getItem(key) { return __storage.has(key) ? __storage.get(key) : null; }, setItem(key, value) { __storage.set(key, String(value)); } };
const report = {categories:CATS.length, numeric:BUILTIN.length, identification:IDENTIFICATION_GENERATORS.length, trueFalse:TRUEFALSE_GENERATORS.length, pairVariants:PAIR_GENERATORS.length, categoryCounts:NUMERIC_REGISTRY_COUNTS};
assert(report.categories===20, 'Expected 20 categories');
assert(report.numeric===CAT_IDS.reduce((sum, category) => sum + NUMERIC_GENERATOR_REGISTRY[category].length, 0), 'Numeric total does not match the canonical registries');
assert(report.identification===800, 'Expected 800 identification entries');
assert(report.trueFalse===800, 'Expected 800 true/false entries');
assert(report.pairVariants===570, 'Expected 570 linked variants');
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
  assert(eligibleBuiltinSingles([target.category], false).some(row=>row.spec.id===target.id), 'Enabled generator should be eligible');
  assert(setNumericGeneratorEnabled(target.id, false), 'Disabling a generator should persist');
  assert(__storage.get(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY).includes(numericGeneratorPreferenceKey(target)), 'Preference should be stored by stable category/recipe key, not only order-based ID');
  assert(!isNumericGeneratorEnabled(target), 'Disabled generator should be marked disabled');
  assert(!eligibleBuiltinSingles([target.category], false).some(row=>row.spec.id===target.id), 'Disabled generator should be omitted from test selection');
  assert(setNumericGeneratorEnabled(target.id, true), 'Re-enabling a generator should persist');
  assert(isNumericGeneratorEnabled(target), 'Re-enabled generator should be marked enabled');
  assert(eligibleBuiltinSingles([target.category], false).some(row=>row.spec.id===target.id), 'Re-enabled generator should return to test selection');
} catch (e) { failures.push('Generator enable/disable preference: '+e.message); }
let pairSamples=0;
for (const pair of PAIR_GENERATORS) {
  try {
    const qs=makePairModule(pair, ['mc','fib']);
    assert(qs.length===2, pair.id+' should have two steps');
    assert(Number.isFinite(qs[0].answer) && Number.isFinite(qs[1].answer), pair.id+' non-finite answer');
    const followed=qs[1].dependencyFactory(qs[0].answer+1);
    assert(Number.isFinite(followed.answer), pair.id+' invalid follow-through');
    pairSamples++;
  } catch (e) { failures.push(pair.id+': '+e.message); }
}
const conceptSamples = [...IDENTIFICATION_GENERATORS,...TRUEFALSE_GENERATORS];
for (const g of conceptSamples) { try { const q=g.make(); assert(q.prompt && q.explanation, g.id+' missing concept text'); } catch(e) { failures.push(g.id+': '+e.message); } }
// For each collapsed family, force its first random draw (the variant selector) to 0 and 1,
// while holding later random draws constant. The outputs must actually distinguish the tasks.
const originalMathRandom = Math.random;
const forceVariantSample = (entry, variant) => {
  let firstDraw = true;
  Math.random = () => { if (firstDraw) { firstDraw = false; return variant ? 0.999999 : 0; } return 0.37; };
  try { return entry.make(); } finally { Math.random = originalMathRandom; }
};
let variantFamiliesChecked = 0;
for (const category of CAT_IDS) for (const entry of NUMERIC_GENERATOR_REGISTRY[category].filter(e => /-family-\d+$/.test(e.generatorFamily))) {
  try {
    const v0 = forceVariantSample(entry, 0), v1 = forceVariantSample(entry, 1);
    assert(v0.prompt !== v1.prompt || Number(v0.answer) !== Number(v1.answer) || v0.explanation !== v1.explanation,
      entry.id+' does not distinguish its two task variants');
    variantFamiliesChecked++;
  } catch (e) { failures.push(entry.id+': '+e.message); }
}
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
  ['controls',2,1,4*Math.sqrt(1-Math.pow(0.15+0.37*0.65,2)),'controls damped natural frequency'],
  ['controls',2,0,Math.sqrt(1-Math.pow(0.15+0.37*0.65,2)),'controls normalized damped frequency'],
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
try { validateSpec(EXAMPLE_CHAIN); } catch(e) { failures.push('Example chain validation: '+e.message); }
const sig = prompt => String(prompt||'').replace(/\d+(?:\.\d+)?/g,'#').replace(/\s+/g,' ').trim();
const promptBlueprintCounts = Object.fromEntries(CAT_IDS.map(category => [category, new Set(NUMERIC_GENERATOR_REGISTRY[category].map(entry => { try { return sig(entry.make().prompt); } catch { return 'ERROR:'+entry.id; } })).size]));
for (const category of CAT_IDS) assert(promptBlueprintCounts[category] >= Math.ceil(NUMERIC_GENERATOR_REGISTRY[category].length * 0.8), category+' has too few distinct normalized prompt structures');
report.promptBlueprintCounts=promptBlueprintCounts;
report.numericSamples=numericSamples; report.multipleChoiceSamples=multipleChoiceSamples; report.pairSamples=pairSamples; report.variantFamiliesChecked=variantFamiliesChecked; report.failures=failures;
console.log(JSON.stringify(report,null,2));
if (failures.length) process.exitCode=1;
`;
vm.runInThisContext(source, {filename: 'ece-math-lab-smoke-test.js'});
