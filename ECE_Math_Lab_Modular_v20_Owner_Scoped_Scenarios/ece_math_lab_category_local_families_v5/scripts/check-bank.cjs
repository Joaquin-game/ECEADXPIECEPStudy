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
const answerableTreeEntries=QUESTION_REGISTRY.filter(e=>e.questionClass==='numeric'&&e.parentId).length;
const standaloneNumericEntries=Object.values(NUMERIC_GENERATOR_REGISTRY).flat().filter(e=>!e.parentRecipeKey).length;
assert(report.numeric===standaloneNumericEntries+answerableTreeEntries, 'Numeric total must include standalone numeric generators plus numeric tree descendants');
assert(report.unifiedRegistry===report.numeric+report.identification+report.trueFalse+QUESTION_REGISTRY.filter(e=>e.questionClass==='setup').length, 'Unified registry total must include numeric, setup, identification, and true/false entries');
assert(QUESTION_REGISTRY_FINALIZED===true, 'The shared registry should be finalized before UI startup.');
assert(QUESTION_REGISTRY.filter(e=>e.parentId).length>0, 'Expected dependent nodes in the question-tree registry');
const registeredTreeRoots=QUESTION_REGISTRY.filter(e=>!e.parentId&&e.treeChildren.length);
assert(CAT_IDS.every(category=>registeredTreeRoots.some(e=>e.category===category)), 'Every category should provide at least one tree root; additional roots in a category are supported');
assert(answerableTreeEntries>0, 'Expected answerable numeric descendants in setup-rooted trees');
assert(QUESTION_REGISTRY.filter(e=>e.questionClass==='setup').length>=registeredTreeRoots.length, 'Each tree should include its setup root; nested setups are also supported');
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
assert(numericDisplayWithUnit('12.5','number',{notation:'plain'},'\\mathrm{V}').includes('\\mathrm{V}'), 'Unit-aware numeric display should append the answer unit');
const unitChoiceLatex=numericDisplayWithUnit('12.5','number',{notation:'plain'},'V');
assert(unitChoiceLatex==="\\(12.5\\,\\mathrm{V}\\)", 'Answer-choice units should use a LaTeX thin space, not a visible comma separator');
const normalizedUnitLatex=normalizeUnitLatexMarkup("rate=2\\,m/s");
assert(normalizedUnitLatex.includes("2\\,\\mathrm{m}/\\mathrm{s}"), 'Prompt unit normalization must preserve the escaped LaTeX thin-space and render a single denominator unit with a slash');
setQuantUnitInverseExponentMode(true);
const normalizedInverseUnitLatex=normalizeUnitLatexMarkup("rate=2\\,m/s");
assert(normalizedInverseUnitLatex.includes("2\\,\\mathrm{m}\\,\\mathrm{s}^{\\left(-1\\right)}"), 'Prompt normalization should honor the accessibility preference for parenthesized inverse exponents');
setQuantUnitInverseExponentMode(false);
setQuantUnitSingleDenominatorSlashEnabled(true);
assert(formatQuantUnitLatex('m/s',{inverseAsExponent:false})==="\\mathrm{m}/\\mathrm{s}", 'One denominator unit should use slash notation by default');
assert(formatQuantUnitLatex('m^2/s',{inverseAsExponent:false})==="\\mathrm{m}^{2}/\\mathrm{s}", 'A powered numerator with one denominator unit should use slash notation');
assert(formatQuantUnitLatex('m/s^2',{inverseAsExponent:false})==="\\mathrm{m}/\\mathrm{s}^{2}", 'A powered denominator counts as one base unit for slash notation');
assert(formatQuantUnitLatex('m/s*A',{inverseAsExponent:false})==="\\frac{\\mathrm{m}}{\\mathrm{s}\\,\\mathrm{A}}", 'Two base units in the denominator should retain fraction-bar notation');
setQuantUnitSingleDenominatorSlashEnabled(false);
assert(formatQuantUnitLatex('m/s',{inverseAsExponent:false})==="\\frac{\\mathrm{m}}{\\mathrm{s}}", 'The slash preference can be disabled to restore a fraction bar');
setQuantUnitSingleDenominatorSlashEnabled(true);
assert(formatQuantUnitLatex('m/s',{inverseAsExponent:true})==="\\mathrm{m}\\,\\mathrm{s}^{\\left(-1\\right)}", 'Accessible inverse-exponent notation should enclose negative exponents in parentheses');
setQuantUnitInverseExponentMode(false);
assert(!quantUnitInverseExponentModeEnabled() && formatQuantUnitLatex('m/s')==="\\mathrm{m}/\\mathrm{s}", 'Slash notation should be used when inverse-exponent accessibility is disabled and slash preference is enabled');
setQuantUnitInverseExponentMode(true);
assert(quantUnitInverseExponentModeEnabled() && formatQuantUnitLatex('m/s').endsWith("\\mathrm{s}^{\\left(-1\\right)}"), 'Inverse-exponent accessibility setting should switch the output to a parenthesized exponent');
setQuantUnitInverseExponentMode(false);
assert(convertQuantValue('32','degC','K').eq('305.15'), 'Absolute Celsius temperatures should convert to Kelvin with offset');
assert(convertQuantValue('273.15','K','degC').eq('0'), 'Kelvin should convert back to Celsius with offset');
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
// Validate generated matrix/array TeX, not just the source spelling.
function assertMatrixLatex(text,label){
  text=String(text||'');
  assert(!/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/.test(text),label+' contains a control character, likely from an unescaped LaTeX command');
  const beginTokens=text.match(/\\begin\{(?:[A-Za-z]*matrix|array)\}/g)||[];
  const endTokens=text.match(/\\end\{(?:[A-Za-z]*matrix|array)\}/g)||[];
  const matches=[...text.matchAll(/\\begin\{([A-Za-z]*matrix|array)\}([\s\S]*?)\\end\{\1\}/g)];
  assert(beginTokens.length===endTokens.length&&matches.length===beginTokens.length,label+' has an unmatched matrix/array environment');
  for(const match of matches){
    const env=match[1],body=match[2],rows=body.split('\\\\');
    assert(rows.length>=2,label+' '+env+' must contain explicit escaped row separators');
    const ampersands=rows.map(row=>(row.match(/&/g)||[]).length);
    assert(ampersands.every(n=>n===ampersands[0]),label+' '+env+' rows have inconsistent column counts');
  }
}
for (const category of CAT_IDS) {
  const entries = NUMERIC_GENERATOR_REGISTRY[category];
  assert(entries.length>=48, category+' should have at least 48 numeric generators');
  for (const entry of entries.filter(row=>!row.parentRecipeKey)) {
    for (let k=0;k<4;k++) {
      try {
        const q=entry.make();
        assert(Number.isFinite(Number(q.answer)), entry.id+' non-finite answer');
        assert(q.questionClass==='numeric' && q.answerSpec?.kind==='numeric' && typeof q.answerExact==='string', entry.id+' missing numeric answer specification');
        assert(q.prompt && q.explanation, entry.id+' missing prompt/explanation');
        assertMatrixLatex(q.prompt+'\n'+q.explanation,entry.id);
        assert(q.generatorId===entry.id, entry.id+' missing generator ID metadata');
        assert(q.recipeName===entry.title, entry.id+' missing debug recipe name');
        assert(q.recipeKey===entry.recipeKey, entry.id+' missing debug recipe key');
        numericSamples++;
        const mc=normalizeTestMode({...q}, ['mc']);
        assert(mc.type==='mc', entry.id+' did not normalize to MC');
        const choices=buildChoices(mc);
        assert(choices.length===4 && choices.filter(c=>c.correct).length===1, entry.id+' answer-key error');
        if(q.answerUnit)assert(choices.every(c=>c.unit===q.answerUnit), entry.id+' choices must carry the answer unit');
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
    assert(qs.filter(q=>!q.isSetupQuestion).every(q=>Number.isFinite(Number(q.answer))), root.id+' answerable tree nodes contain a non-finite answer');
    assert(qs.filter(q=>q.isSetupQuestion).every(q=>q.countsAsQuestion===false&&q.answer===undefined&&q.transferData&&typeof q.transferData==='object'),root.id+' setup node must be answerless and publish owner-scoped transfer data');
    assert(qs.slice(1).every(q=>q.receivedDataTransferObject&&typeof q.receivedDataTransferObject==='object'),root.id+' descendants must retain the exact transfer DTO received at construction');
    assert(qs.slice(1).every(q=>Object.keys(q.receivedDataTransferObject).every(ownerKey=>!!QUESTION_REGISTRY_BY_RECIPE[ownerKey])),root.id+' DTO top-level keys must be registered question owners, not flat aliases');
    assert(qs.every(q=>q.dataTransferObjectAfterConstruction&&typeof q.dataTransferObjectAfterConstruction==='object'),root.id+' nodes must retain a post-construction owner-scoped DTO snapshot');
    assert(qs.every(q=>Object.prototype.hasOwnProperty.call(q.dataTransferObject||{},q.recipeKey)),root.id+' transfer owner key must match the node recipe key');
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
  assert(mcOnly.filter(row=>row.spec.questionClass!=='setup').length===0,'Identification and T/F entries should not leak into MC-only selection');
  const topLevelPool=eligibleQuestionRegistry(['em'],['fib'],false);
  const compoundRootEntry=topLevelPool.find(row=>row.kind==='registry'&&row.spec.treeChildren?.length);
  assert(compoundRootEntry,'compound root should also be eligible as a top-level question');
  const rootAskedAlone=makeSingleFromEntry(compoundRootEntry,['em'],['fib']);
  assert(rootAskedAlone.length===0,'a setup node should not enter the single-question pool without a dependent answerable child');
  for(const g of QUESTION_REGISTRY.filter(entry=>entry.questionClass==='truefalse')){
    const q=g.make();assert(q.truthValue===true&&q.answer===1,g.id+' T/F generator should make the statement true');
    assert(q.choices.some(choice=>choice.label==='True'&&choice.correct),g.id+' True must be keyed correct');
    assert(q.choices.some(choice=>choice.label==='False'&&!choice.correct),g.id+' False must be selectable but wrong');
    assert(q.explanation.startsWith('True.'),g.id+' explanation should confirm true statement');
  }
} catch(e) { failures.push('Unified question registry: '+e.message); }
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
  for(const rootSpec of QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.treeChildren.length)){const nodes=makeRegistryTreeModule(rootSpec,['fib'],{expand:'all',maxDepth:12,maxNodes:80});const root=nodes[0];for(const child of nodes.slice(1)){assert(child.category===root.category,rootSpec.id+' must stay within one topic');assert(root.sharedData===child.sharedData,rootSpec.id+' descendants must share data');assert(child.parentQuestionId,rootSpec.id+' descendants must identify their parent');assert(child.receivedDataTransferObject&&typeof child.receivedDataTransferObject==='object',rootSpec.id+' descendants must receive the owner-scoped data-transfer object');if(!child.isSetupQuestion)assert(Number.isFinite(Number(child.answer)),rootSpec.id+' answerable descendants need numeric answer data');else assert(child.transferData&&child.answer===undefined,rootSpec.id+' setup descendants must be answerless and publish a transfer dictionary');}}
} catch(e) { failures.push('Question tree context sharing: '+e.message); }
try {
  const originalRegisterQuestionGenerator=registerQuestionGenerator;
  let syntheticSetupConfig=null;
  try {
    registerQuestionGenerator=config=>(syntheticSetupConfig=config);
    setupRecipe('laplace','Synthetic content-only setup','synthetic-content-only-setup',()=>({
      prompt:'A sensor uses a resistor and capacitor in series.',
      transferData:{R:{value:10,unit:'Ω'},C:{value:4.7,unit:'µF'},f:{value:1000,unit:'Hz'},V:{value:5,unit:'V'}},
      illustrations:[{type:'svg',svg:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>',alt:'A simple schematic placeholder representing the setup.'}]
    }),3,{treeChildrenRecipeKeys:['synthetic-context-child']});
  } finally { registerQuestionGenerator=originalRegisterQuestionGenerator; }
  assert(syntheticSetupConfig&&syntheticSetupConfig.questionClass==='setup','setupRecipe should register a distinct setup class');
  const setupFactory=syntheticSetupConfig.make;
  syntheticSetupConfig.id='synthetic-content-only-setup';
  syntheticSetupConfig.make=context=>stampQuestionFromEntry(syntheticSetupConfig,setupFactory(context||{}));
  const syntheticSetup=instantiateRegistryQuestion(syntheticSetupConfig,['fib'],Object.create(null));
  assert(syntheticSetup.isSetupQuestion&&syntheticSetup.countsAsQuestion===false&&syntheticSetup.answer===undefined,'A setup without a reference number must remain answerless and excluded from question counts');
  assert(syntheticSetup.transferData.R.value===10&&syntheticSetup.transferData.C.value===4.7&&syntheticSetup.transferData.f.value===1000&&syntheticSetup.transferData.V.value===5,'A setup should preserve explicit unit-bearing transfer records');
  assert(syntheticSetup.illustrations.length===1&&syntheticSetup.illustrations[0].alt,'Setup illustrations should support arbitrary SVG counts with required alt text');
  const primitiveOwner={}; const primitiveSetup=instantiateRegistryQuestion({...syntheticSetupConfig,recipeKey:'synthetic-primitive-setup',id:'synthetic-primitive-setup',make:()=>({prompt:'Primitive transfer setup',transferData:{V_s:12,R_L:6},illustrations:[]})},['fib'],primitiveOwner); assert(primitiveSetup.transferData.V_s===12&&primitiveSetup.transferData.R_L===6,'Primitive transfer values should remain directly accessible');
  const childContext=registryQuestionContext(syntheticSetup.sharedData,syntheticSetup,['synthetic-content-only-setup','child']);
  assert(childContext.receivedDataTransferObject['synthetic-content-only-setup'].R.value===10,'A descendant must receive all values grouped under the setup owner key');
  assert(childContext.parentAnswer===undefined,'Answerless setup parents must not masquerade as numeric parent answers');
} catch(e) { failures.push('Answerless setup question contract: '+e.message); }
try {
  const setupRoot={isSetupQuestion:true,questionNodeId:'presentation-setup-root',title:'Root setup',_treeParentQuestion:null};
  const setupNested={isSetupQuestion:true,questionNodeId:'presentation-setup-nested',title:'Nested setup',_treeParentQuestion:setupRoot};
  const directChild={questionNodeId:'presentation-q1',title:'Direct child',_treeParentQuestion:setupRoot};
  const nestedChild={questionNodeId:'presentation-q2',title:'Nested direct child',_treeParentQuestion:setupNested};
  const nestedSibling={questionNodeId:'presentation-q3',title:'Nested sibling',_treeParentQuestion:setupNested};
  const finalChild={questionNodeId:'presentation-q4',title:'Child of Question 3',_treeParentQuestion:nestedSibling};
  const presentationQuestions=[directChild,nestedChild,nestedSibling,finalChild];
  finalizeTreePresentation(presentationQuestions,[setupRoot,setupNested]);
  assert(presentationQuestions.map(q=>q.displayQuestionNumber).join(',')==='1,2,3,4','Answerable questions should receive consecutive presentation numbers');
  assert(setupRoot.setupLabel==='Setup A'&&setupNested.setupLabel==='Setup B','Setup nodes should receive unambiguous labels');
  assert(setupRoot.setupRangeLabel==='1–4'&&setupRoot.setupAppliedQuestionNumbers.length===4,'Root setup range should include every direct and indirect answerable descendant');
  assert(setupNested.setupRangeLabel==='2–4'&&setupNested.setupAppliedQuestionNumbers.length===3,'Nested setup range should include its full answerable descendant subtree');
  assert(directChild.parentReference.kind==='setup'&&directChild.parentReference.range==='1–4','A setup child should reference its setup label and applicable question range');
  assert(nestedChild.parentReference.kind==='setup'&&nestedChild.parentReference.range==='2–4','A nested setup child should reference the nearer setup node');
  assert(finalChild.parentReference.kind==='question'&&finalChild.parentReference.number===3,'A direct child of an answerable node should cite the parent question number');
} catch(e) { failures.push('Question numbering and setup ranges: '+e.message); }
let treeStressBuilds=0;
try {
  const roots=QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.treeChildren.length>0);
  assert(roots.length>=CAT_IDS.length&&CAT_IDS.every(category=>roots.some(root=>root.category===category)),'Every category should have at least one compound tree root, and categories may own multiple roots');
  for(const root of roots){
    const module=makeRegistryTreeModule(root,['fib'],{expand:'all'});
    assert(module.length>=2,root.recipeKey+' tree should materialize its root and at least one descendant');
    assert(root.questionClass==='setup'&&root.treeChildren.length>=1,root.recipeKey+' root must be a setup node with at least one branch');
    assert(module[0].isSetupQuestion&&module[0].countsAsQuestion===false&&module[0].answer===undefined,root.category+' root setup must not expect or store an answer');
    const answerable=module.filter(node=>!node.isSetupQuestion);
    assert(answerable.every(node=>node.questionClass==='numeric'&&QUESTION_REGISTRY_BY_ID[node.questionNodeId]&&NUMERIC_GENERATOR_REGISTRY[root.category].includes(QUESTION_REGISTRY_BY_ID[node.questionNodeId])),root.category+' answerable descendants must be direct numeric registry entries');
    assert(module.filter(node=>node.isSetupQuestion).length>=1,root.category+' should contain its root setup; nested setups are permitted');
    assert(module.filter(node=>node.isSetupQuestion).every(node=>(node.illustrations||[]).every(item=>item.alt&&((item.type!=='svg'&&!item.svg&&!item.markup)||String(item.svg||item.markup).startsWith('<svg')))),root.category+' setup illustrations should have accessible alt text and valid SVG content');
    assert(module.filter(node=>!node.isSetupQuestion).every(node=>Object.keys(node.receivedDataTransferObject||{}).includes(root.recipeKey)),root.category+' answerable descendants should receive root setup data under its owner key');
    assert(module.filter(node=>!node.isSetupQuestion).every(node=>Object.values(node.receivedDataTransferObject).some(owner=>owner&&typeof owner==='object'&&Object.keys(owner).length>0)),root.category+' descendants should receive non-empty owner-scoped quantity dictionaries');
    assert(module.filter(node=>!node.isSetupQuestion).every(node=>Object.values(node.receivedDataTransferObject||{}).every(owner=>owner&&typeof owner==='object')),root.category+' received data should remain owner-scoped dictionaries');
    const scenarioPrompts=module.map(node=>String(node.isSetupQuestion?(node.setupPrompt||node.prompt||''):(node.prompt||'')));
    assert(module.filter(node=>node.isSetupQuestion).every(node=>String(node.setupPrompt||node.prompt||'').length>100),root.category+' setup brief should explain a useful, coherent situation');
    assert(scenarioPrompts.every(prompt=>!/(?:parent|child)\s+(?:question|node)/i.test(prompt)),root.category+' learner-facing content should not expose structural parent/child terminology');
    const directSetupQuestions=module.filter(node=>!node.isSetupQuestion&&node._treeParentQuestion?.isSetupQuestion);
    assert(directSetupQuestions.every(node=>!/(?:numerical value from the preceding calculation|developer concern)/i.test(String(node.prompt||''))),root.category+' direct setup follow-ups should use scenario-specific wording');
    assert(module.filter(node=>node.parentQuestionId).length===module.length-1,root.recipeKey+' tree should retain one valid parent link for every descendant');
    for(let sampleIndex=0;sampleIndex<20;sampleIndex++){
      const sampled=makeRegistryTreeModule(root,['fib'],{expand:'all'});
      assert(sampled.length===module.length,root.recipeKey+' randomized sample should preserve the registered tree size');
      for(const node of sampled){
        if(node.isSetupQuestion)assert(node.answer===undefined&&node.countsAsQuestion===false&&node.transferData&&typeof node.transferData==='object',root.category+' setup must never carry an answer or count and must publish its own data');
        else assert(Number.isFinite(Number(node.answerExact??node.answer)),root.category+' answerable node '+node.title+' must generate a finite answer');
      }
      treeStressBuilds++;
    }
  }
  // Critical regression: instantiate every built-in tree node with only its ancestors in the DTO.
  // This models a random branch/path where no sibling nodes have been generated.
  let ancestorOnlyNodeBuilds=0;
  const treeDescendants=new Set();
  const collectTreeNodes=node=>{
    for(const childId of node.treeChildren||[]){
      const child=QUESTION_REGISTRY_BY_ID[childId];
      if(!child)continue;
      treeDescendants.add(child.id);collectTreeNodes(child);
    }
  };
  for(const root of QUESTION_REGISTRY.filter(entry=>!entry.parentId&&entry.questionClass==='setup'&&entry.treeChildren.length))collectTreeNodes(root);
  for(const targetId of treeDescendants){
    const target=QUESTION_REGISTRY_BY_ID[targetId],chain=[];let cursor=target;const visited=new Set();
    while(cursor){assert(!visited.has(cursor.id),'Tree ancestry must be acyclic at '+cursor.id);visited.add(cursor.id);chain.unshift(cursor);cursor=cursor.parentId?QUESTION_REGISTRY_BY_ID[cursor.parentId]:null;}
    assert(chain.length>1&&chain[0].questionClass==='setup',target.recipeKey+' must have a setup-rooted ancestor chain');
    assert(chain.every(node=>node.category===target.category),target.recipeKey+' ancestry must stay in its category');
    const shared={dataTransferObject:Object.create(null)};let parentQuestion=null;const path=[];
    for(let level=0;level<chain.length;level++){
      const spec=chain[level];
      const incomingKeys=Object.keys(shared.dataTransferObject);
      const expectedOwnerKeys=chain.slice(0,level).map(owner=>owner.recipeKey||owner.id);
      assert(incomingKeys.length===expectedOwnerKeys.length&&expectedOwnerKeys.every(key=>incomingKeys.includes(key)),spec.recipeKey+' should receive only already-constructed ancestors; siblings must be absent');
      const q=instantiateRegistryQuestion(spec,['fib'],shared,parentQuestion,path.concat(spec.id));
      assert(q.receivedDataTransferObject&&typeof q.receivedDataTransferObject==='object',spec.recipeKey+' must capture the received owner DTO');
      assert(Object.keys(q.receivedDataTransferObject).length===expectedOwnerKeys.length&&expectedOwnerKeys.every(key=>Object.prototype.hasOwnProperty.call(q.receivedDataTransferObject,key)),spec.recipeKey+' DTO must contain exactly its ancestor owners');
      assert(q.prompt&&String(q.prompt).trim(),spec.recipeKey+' must generate a nonempty prompt on an ancestor-only path');
      if(spec.questionClass==='setup'){
        assert(q.isSetupQuestion&&q.answer===undefined&&q.transferData&&typeof q.transferData==='object',spec.recipeKey+' setup must publish data without an answer');
      }else{
        assert(Number.isFinite(Number(q.answerExact??q.answer)),spec.recipeKey+' must generate a finite answer when siblings are absent');
        assert(q.transferData&&typeof q.transferData==='object',spec.recipeKey+' must publish its own data');
      }
      parentQuestion=q;path.push(spec.id);ancestorOnlyNodeBuilds++;
    }
  }
  report.ancestorOnlyNodeBuilds=ancestorOnlyNodeBuilds;

  // Identification-choice regression: three incorrect terms must come from the correct category pool.
  let identificationChoiceBuilds=0;
  const bannedIdOptions=new Set(['all of these','none of these','insufficient information'].map(normalizeTextAnswer));
  const originalRandomForIdentification=Math.random;
  try {
    // Force the registry-backed identification path to choose MC so the actual call site is tested.
    Math.random=()=>0;
    for(const spec of QUESTION_REGISTRY.filter(entry=>entry.questionClass==='identification')){
      try{
        const shared={dataTransferObject:Object.create(null)};
        const q=instantiateRegistryQuestion(spec,['id','mc'],shared);
        assert(q.type==='mc'&&q.identificationOptions,spec.recipeKey+' should construct identification choices through the registry path');
        const choices=q.choices||[];
        assert(choices.length===4&&choices.filter(choice=>choice.correct).length===1,spec.recipeKey+' identification choices must have exactly one answer and four options');
        const correct=choices.find(choice=>choice.correct);
        assert(normalizeTextAnswer(correct.label)===normalizeTextAnswer(q.answerText),spec.recipeKey+' correct option must be the concept answer');
        const pool=new Set((spec.choiceConcepts||[]).map(concept=>normalizeTextAnswer(concept[0])));
        const wrong=choices.filter(choice=>!choice.correct);
        assert(wrong.length===3,spec.recipeKey+' must have exactly three incorrect choices');
        assert(wrong.every(choice=>pool.has(normalizeTextAnswer(choice.label))&&!bannedIdOptions.has(normalizeTextAnswer(choice.label))),spec.recipeKey+' wrong choices must be category concepts, not generic sentinel options');
        assert(new Set(choices.map(choice=>normalizeTextAnswer(choice.label))).size===4,spec.recipeKey+' identification choices must be distinct');
        identificationChoiceBuilds++;
      }catch(e){failures.push(spec.id+' identification choice build: '+e.message)}
    }
  } finally { Math.random=originalRandomForIdentification; }
  report.identificationChoiceBuilds=identificationChoiceBuilds;
  // Targeted audits use each category's registered tree and its owner-scoped transfer snapshots.
  const near=(actual,expected,label)=>assert(Number.isFinite(Number(actual))&&Math.abs(Number(actual)-Number(expected))<=1e-9*Math.max(1,Math.abs(Number(expected))),label+'; expected '+expected+', received '+actual);
  const moduleFor=key=>{const root=QUESTION_REGISTRY_BY_RECIPE[key];assert(root,'Missing tree recipe '+key);return makeRegistryTreeModule(root,['fib'],{expand:'all'});};
  const byKey=(module,key)=>module.find(q=>q.recipeKey===key);
  {
    const m=moduleFor('laplace-response-root-v18'),root=byKey(m,'laplace-response-root-v18'),a=byKey(m,'laplace-response-a-v18'),b=byKey(m,'laplace-response-b-v18'),ba=byKey(m,'laplace-response-ba-v18');
    const d=root.transferData,F2=Number(d.A)/(Number(d.s2)+Number(d.b));
    near(b.answer,F2,'Laplace second sample must use the setup-owned A, b, and s₂');
    near(ba.answer,Number(b.answer)/Number(a.answer),'Laplace ratio must combine the two recorded transform results');
    assert(Object.keys(ba.receivedDataTransferObject).includes('laplace-response-a-v18')&&Object.keys(ba.receivedDataTransferObject).includes('laplace-response-b-v18'),'Leaf must receive data from both previous result owners');
  }
  {
    const m=moduleFor('ztrans-impulse-root-v18'),root=byKey(m,'ztrans-impulse-root-v18'),a=byKey(m,'ztrans-impulse-a-v18'),b=byKey(m,'ztrans-impulse-b-v18'),ba=byKey(m,'ztrans-impulse-ba-v18');
    const d=root.transferData;near(a.answer,Number(d.A)/(1-Number(d.r)/Number(d.z1)),'Z-transform at z₁ should use the root’s original A and r symbols');
    near(b.answer,Number(d.A)/(1-Number(d.r)/Number(d.z2)),'Z-transform at z₂ should use the root’s original A and r symbols');
    near(ba.answer,Number(b.answer)/Number(a.answer),'Z-transform leaf should compare the values at the stated test points');
  }
  {
    const m=moduleFor('fourier-pulse-root-v18'),root=byKey(m,'fourier-pulse-root-v18'),a=byKey(m,'fourier-pulse-a-v18'),b=byKey(m,'fourier-pulse-b-v18'),ba=byKey(m,'fourier-pulse-ba-v18');
    const d=root.transferData,alpha=Number(d.alpha),A=Number(d.A),omega=Number(d.omega_test);
    near(a.answer,2*A/alpha,'Fourier DC sample must be 2A/alpha');
    near(b.answer,2*A*alpha/(alpha*alpha+omega*omega),'Fourier nonzero-frequency sample must follow the symmetric exponential transform');
    near(ba.answer,Number(b.answer)/Number(a.answer),'Fourier follow-up ratio must use recorded sample results');
    assert(String(b.prompt||'').includes('\\omega_{\\mathrm{test}}')&&String(ba.prompt||'').includes('\\omega_{\\mathrm{test}}'),'Fourier questions should preserve the scenario’s named test-frequency symbol');
  }
  {
    const m=moduleFor('related-reservoir-root-v18'),root=byKey(m,'related-reservoir-root-v18'),b=byKey(m,'related-reservoir-b-v18'),ba=byKey(m,'related-reservoir-ba-v18');
    const d=root.transferData,rt=Number(d.r0)+Number(d.v)*Number(d.t);
    near(b.answer,rt,'Reservoir end radius must apply the stated constant rate for the full interval');
    near(ba.answer,Math.PI*(rt*rt-Number(d.r0)**2),'Reservoir area increase must use the setup radius and computed end radius');
    assert((ba.answerUnit||ba.quantUnit?.canonical)==='m^2','Area answer unit must use the parser-supported square-metre notation');
  }
  {
    const m=moduleFor('electronics-load-root-v18'),root=byKey(m,'electronics-load-root-v18'),loadPower=byKey(m,'electronics-load-ba-v18'),average=byKey(m,'electronics-load-bb-v18');
    const d=root.transferData,branch=byKey(m,'electronics-load-b-v18'),PL=Number(d.V_s)**2/Number(d.R_L),energy=PL*Number(d.t),expected=Number(branch.transferData.D)*PL;
    near(loadPower.answer,energy,'Powered-test energy must equal operating power times the stated duration');
    near(loadPower.transferData.P_L,PL,'The energy question must preserve the distinct operating-power datum P_L');
    near(average.answer,expected,'Duty-cycle average power must equal D times operating power');
    assert(Object.keys(average.receivedDataTransferObject).includes('electronics-load-root-v18')&&Object.keys(average.receivedDataTransferObject).includes('electronics-load-ba-v18'),'Average-power question must receive both scenario data and computed load power');
  }
  {
    const m=moduleFor('vector-airflow-root-v18'),rotationRatio=byKey(m,'vector-airflow-ba-v18');
    assert(rotationRatio.title==='Rotation-to-expansion ratio'&&String(rotationRatio.prompt).includes('\\nabla\\times\\mathbf F')&&String(rotationRatio.prompt).includes('\\nabla\\cdot\\mathbf F'),'Vector follow-up should combine curl magnitude and divergence instead of repeating a curl component already shown in the previous explanation');
    near(rotationRatio.answer,Number(byKey(m,'vector-airflow-b-v18').transferData.curlMagnitude)/Number(byKey(m,'vector-airflow-a-v18').transferData.divF),'Vector rotation-to-expansion ratio must use both recorded results');
  }
  {
    const m=moduleFor('precalc-probe-root-v18'),root=byKey(m,'precalc-probe-root-v18'),first=byKey(m,'precalc-probe-a-v18'),displaySetup=byKey(m,'precalc-probe-b-v18'),display=byKey(m,'precalc-probe-ba-v18'),error=byKey(m,'precalc-probe-bb-v18');
    const d=root.transferData,u=(Number(d.C)-Number(d.b))/Number(d.m),disp=Number(displaySetup.transferData.g)*u+Number(displaySetup.transferData.d0);
    near(first.answer,u,'Factory calibration must be computed from the root’s C, b, and m');near(display.answer,disp,'Display conversion must use the first-stage value and display setup');
    assert(Object.keys(error.receivedDataTransferObject).includes('precalc-probe-root-v18')&&Object.keys(error.receivedDataTransferObject).includes('precalc-probe-b-v18')&&Object.keys(error.receivedDataTransferObject).includes('precalc-probe-ba-v18'),'Calibration-error follow-up must receive the full scenario DTO');
  }
  {
    const m=moduleFor('data-audit-root-v18'),root=byKey(m,'data-audit-root-v18'),mean0=byKey(m,'data-audit-a-v18'),mean1=byKey(m,'data-audit-b-v18'),shift=byKey(m,'data-audit-ba-v18');
    const baseline=Number(root.transferData.m);
    near(mean0.answer,baseline,'Initial sensor batch mean must equal m');near(mean1.answer,baseline+2,'Repeat sensor batch mean must equal m+2');near(shift.answer,2,'Sensor batch mean shift must be two mV');
  }
  // Default expansion has no hidden 16-node or 8-level truncation.
  const longTree=[];
  for(let i=0;i<24;i++)longTree.push({id:'unbounded-tree-'+i,category:'laplace',title:'Unbounded node '+i,recipeKey:'unbounded-tree-'+i,questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:i?'unbounded-tree-'+(i-1):null,treeChildren:i<23?['unbounded-tree-'+(i+1)]:[],make:context=>{const dto=context.dataTransferObject||{};const prevKey='unbounded-tree-'+(i-1);const base=i?Number(dto?.[prevKey]?.value||0):0;const value=base+1;const q=qNum('laplace','Unbounded node','Advance the running calibration count by one.',value,'Add one to the preceding owner value.');q.transferData={value};return q;}});
  const longModule=makeRegistryTreeModule(longTree[0],['fib'],{expand:'all',registry:longTree});
  assert(longModule.length===24,'Tree module builder should not impose fixed default node or depth caps');
} catch(e) { failures.push('Five-node category trees and unbounded module builder: '+e.message); }
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
    {id:'synthetic-root',category:'laplace',title:'Synthetic root',recipeKey:'synthetic-root',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:null,treeChildren:['synthetic-child-a','synthetic-child-b'],make:()=>{const q=qNum('laplace','Synthetic root','Record the initial calibration index.',2,'The initial index is 2.');q.transferData={x:2};return q;}},
    {id:'synthetic-child-a',category:'laplace',title:'Synthetic child A',recipeKey:'synthetic-child-a',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-root',treeChildren:['synthetic-grandchild'],make:context=>{const dto=context.dataTransferObject||{};const base=Number(dto['synthetic-root']?.x);const value=base+3;const q=qNum('laplace','Synthetic child A','Increase the calibration index by three.',value,'Add three to the root owner value.');q.transferData={y:value};return q;}},
    {id:'synthetic-child-b',category:'laplace',title:'Synthetic child B',recipeKey:'synthetic-child-b',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-root',treeChildren:[],make:context=>{const dto=context.dataTransferObject||{};const base=Number(dto['synthetic-root']?.x);const value=base*4;const q=qNum('laplace','Synthetic child B','Scale the calibration index by four.',value,'Multiply the root owner value by four.');q.transferData={z:value};return q;}},
    {id:'synthetic-grandchild',category:'laplace',title:'Synthetic grandchild',recipeKey:'synthetic-grandchild',questionClass:'numeric',formats:['mc','fib'],repeatable:true,parentId:'synthetic-child-a',treeChildren:[],make:context=>{const dto=context.dataTransferObject||{};const base=Number(dto['synthetic-child-a']?.y);const value=base*2;const q=qNum('laplace','Synthetic grandchild','Double the intermediate calibration index.',value,'Multiply the child owner value by two.');q.transferData={w:value};return q;}}
  ];
  const branch=makeRegistryTreeModule(synthetic[0],['fib'],{expand:'all',maxDepth:8,maxNodes:20,registry:synthetic});
  assert(branch.length===4,'generic module builder should include root, both siblings, and a grandchild');
  assert(branch.map(q=>q.questionNodeId).join(',')==='synthetic-root,synthetic-child-a,synthetic-grandchild,synthetic-child-b','generic tree should preserve depth-first tree order');
  assert(branch[0].treeDepth===0&&branch[1].treeDepth===1&&branch[2].treeDepth===2&&branch[3].treeDepth===1,'generic tree should preserve arbitrary node depths');
  assert(branch[1].parentQuestionId==='synthetic-root'&&branch[2].parentQuestionId==='synthetic-child-a'&&branch[3].parentQuestionId==='synthetic-root','each child should reference its actual direct parent');
  assert(branch.every(q=>q.sharedData===branch[0].sharedData),'all nodes in an arbitrary tree should share one context object');
  assert(branch[1].answer===5&&branch[2].answer===10&&branch[3].answer===8,'dependent answers should consume owner-scoped DTO values');
  assert(branch[1].receivedDataTransferObject['synthetic-root'].x===2,'child A should receive the root owner dictionary');
  assert(branch[2].receivedDataTransferObject['synthetic-child-a'].y===5,'grandchild should receive the intermediate owner dictionary');
  assert(branch[3].receivedDataTransferObject['synthetic-root'].x===2,'sibling B should receive the root owner dictionary');
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
// Explicitly exercise matrix generators, including an older scenario factory that is not itself a registry row.
try {
  const calibrationEntry=NUMERIC_GENERATOR_REGISTRY.advanced.find(entry=>entry.generatorFamily==='scenario-advanced-calibration-matrix');
  const determinantEntry=NUMERIC_GENERATOR_REGISTRY.advanced.find(entry=>entry.generatorFamily==='advanced-topup-01');
  assert(calibrationEntry&&determinantEntry,'Expected the applied calibration and determinant matrix generators');
  assertMatrixLatex(calibrationEntry.make().prompt,'Advanced sensor calibration matrix');
  assertMatrixLatex(determinantEntry.make().prompt,'Advanced determinant matrix');
  const tableQuestion=makeDataScenario(4);
  assertMatrixLatex(tableQuestion.prompt,'Data analysis 3-by-2 matrix table');
  const body=tableQuestion.prompt.match(/\\begin\{pmatrix\}([\s\S]*?)\\end\{pmatrix\}/)?.[1]||'';
  assert(body.split('\\\\').length===3,'Data analysis 3-by-2 table must render three separate rows');
} catch(e) { failures.push('Matrix LaTeX regression: '+e.message); }
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
// Targeted branch regressions for unit-carrying variants and previously mismatched formulas.
try {
  // With later random draws fixed at 0.37: Vs=12 V, Vf=2 V, R=508 ohm.
  const ledCurrent=forceFamilyVariant(findFamily('electronics',7),1);
  assert(ledCurrent.answerUnit==='mA', 'Electronics family 07 variant A must return milliamperes');
  assert(closeTo(ledCurrent.answer,10000/508), 'Electronics family 07 variant A must calculate (Vs−Vf)/R in mA');
  assert(ledCurrent.prompt.includes('forward voltage drop')&&ledCurrent.prompt.includes('12')&&ledCurrent.prompt.includes('508'), 'Electronics family 07 variant A must state supply, LED drop, and resistor value');
  const ledVoltage=forceFamilyVariant(findFamily('electronics',7),0);
  assert(ledVoltage.answerUnit==='V' && closeTo(ledVoltage.answer,10), 'Electronics family 07 variant B must calculate the resistor voltage drop Vs−Vf');
  assert(ledVoltage.explanation.includes('V_R=V_s-V_f'), 'Electronics family 07 variant B explanation must use the voltage-drop formula');

  // Related-rates family 11 differentiates square area: dA/dt = 2s ds/dt.
  const squareRate=forceFamilyVariant(findFamily('related',11),1);
  assert(quantUnitEquivalent(squareRate.quantUnit,'m^2/s') && closeTo(squareRate.answer,2*4*.359), 'Related-rates family 11 variant A must use 2s ds/dt with area/time units');
  assert(squareRate.explanation.includes('dA/dt=2s'), 'Related-rates family 11 variant A explanation must state the derivative formula');
  const squareArea=forceFamilyVariant(findFamily('related',11),0);
  assert(quantUnitEquivalent(squareArea.quantUnit,'m^2') && closeTo(squareArea.answer,16), 'Related-rates family 11 variant B must return square area, not a rate');

  // EM family 07 has physically distinct outputs and matching units in each variant.
  const wireForce=forceFamilyVariant(findFamily('em',7),1);
  assert(quantUnitEquivalent(wireForce.quantUnit,'N') && closeTo(wireForce.answer,.507*3*.4), 'EM family 07 variant A must return F=BIℓ in newtons');
  const forcePerLength=forceFamilyVariant(findFamily('em',7),0);
  assert(quantUnitEquivalent(forcePerLength.quantUnit,'N/m') && closeTo(forcePerLength.answer,.507*3), 'EM family 07 variant B must return force per length BI in N/m');

  // Laplace family 16 must state the numerical amplitude/rate and distinguish instantaneous
  // dimensionless output from accumulated area in seconds.
  const laplaceInstant=forceFamilyVariant(findFamily('laplace',16),1);
  assert(laplaceInstant.prompt.includes('f(t)=4e') && laplaceInstant.prompt.includes('decay rate') && laplaceInstant.prompt.includes('mathrm{s}^{-1}'), 'Laplace family 16 variant A must state K and the decay rate with units');
  assert(laplaceInstant.quantUnit.dimensionKey==='1', 'Laplace family 16 instantaneous normalized signal is dimensionless');
  const laplaceArea=forceFamilyVariant(findFamily('laplace',16),0);
  assert(laplaceArea.answerUnit==='s' && laplaceArea.prompt.includes('normalized exponential signal') && laplaceArea.prompt.includes('f(t)') && laplaceArea.prompt.includes('mathrm{s}^{-1}'), 'Laplace family 16 variant B must restate amplitude, decay rate, and time units');

  // Unit-bearing variants must answer the exact quantity asked, not reuse the other branch's formula or unit.
  const convolutionValue=forceFamilyVariant(findFamily('convolution',12),1);
  const convolutionArea=forceFamilyVariant(findFamily('convolution',12),0);
  assert(convolutionValue.prompt.includes('a=2') && convolutionValue.prompt.includes('t=0.792') && quantUnitEquivalent(convolutionValue.quantUnit,''), 'Convolution family 12 variant A must give the rate/time and return the dimensionless kernel value');
  assert(convolutionArea.prompt.includes('a=2') && convolutionArea.prompt.includes('b=4') && convolutionArea.prompt.includes('t=0.792') && quantUnitEquivalent(convolutionArea.quantUnit,'s'), 'Convolution family 12 variant B must state both decay rates/time and return the time-valued contribution');
  assert(closeTo(convolutionArea.answer,Math.exp(-2*.792)*(1-Math.exp(-2*.792))/2), 'Convolution family 12 variant B must use its stated difference-of-rates denominator');
  const bjtBase=forceFamilyVariant(findFamily('electronics',20),1);
  const bjtCollector=forceFamilyVariant(findFamily('electronics',20),0);
  assert(bjtBase.prompt.includes('base resistor') && bjtBase.prompt.includes('base-emitter drop') && bjtBase.answerUnit==='µA', 'Electronics family 20 variant A must state base-circuit givens and answer in microamperes');
  assert(bjtCollector.prompt.includes('current gain') && bjtCollector.prompt.includes('forward-active region') && closeTo(bjtCollector.answer,bjtBase.answer*105), 'Electronics family 20 variant B must restate beta/operating region and compute collector current from beta times base current');
  const mixtureTemp=forceFamilyVariant(findFamily('geas',24),1);
  const thermalIndex=forceFamilyVariant(findFamily('geas',24),0);
  assert(mixtureTemp.prompt.includes('hot sample mass') && mixtureTemp.prompt.includes('cold sample mass') && mixtureTemp.prompt.includes('hot sample') && mixtureTemp.prompt.includes('cold sample') && mixtureTemp.prompt.includes('equal specific heat') && mixtureTemp.prompt.includes('without heat loss'), 'GEAS family 24 variant A must give both sample masses, both temperatures, and equal-specific-heat/no-heat-loss assumptions');
  assert(thermalIndex.prompt.includes('hot temperature') && thermalIndex.prompt.includes('comparison temperature') && quantUnitEquivalent(thermalIndex.quantUnit,'kg*deltaC'), 'GEAS family 24 variant B must state the inputs for m(T1−T2) and use kg·Δ°C');
  const atLeastOne=forceFamilyVariant(findFamily('probability',18),1);
  const zeroSuccesses=forceFamilyVariant(findFamily('probability',18),0);
  assert(atLeastOne.prompt.includes('probability') && atLeastOne.prompt.includes('p=0.2') && closeTo(atLeastOne.answer,1-Math.pow(1-.2,5)), 'Probability family 18 variant A must state p and use the complement formula for at least one success');
  assert(zeroSuccesses.prompt.includes('probability') && zeroSuccesses.prompt.includes('zero successes') && closeTo(zeroSuccesses.answer,Math.pow(1-.2,5)) && quantUnitEquivalent(zeroSuccesses.quantUnit,''), 'Probability family 18 variant B must use the same stated p,n and return the probability of zero successes');
  const relatedSphereAreaRate=forceFamilyVariant(findFamily('related',12),1);
  const relatedSphereVolumeRate=forceFamilyVariant(findFamily('related',12),0);
  assert(quantUnitEquivalent(relatedSphereAreaRate.quantUnit,'cm^2/s') && closeTo(relatedSphereAreaRate.answer,8*Math.PI*4*.322), 'Related family 12 variant A must use dA/dt=8πr dr/dt and area/time units');
  assert(quantUnitEquivalent(relatedSphereVolumeRate.quantUnit,'cm^3/s') && closeTo(relatedSphereVolumeRate.answer,4*Math.PI*4*4*.322), 'Related family 12 variant B must use dV/dt=4πr² dr/dt and volume/time units');

  const advancedQuadratic=forceFamilyVariant(findFamily('advanced',7),1);
  assert(advancedQuadratic.recipeName.includes('Quadratic roots and discriminant'), 'Advanced family 07 registry title must describe its quadratic-root/discriminant tasks');

  // Signals family 06 uses a principal phase angle in [0,360), rather than an unwrapped angle.
  const phaseDegrees=forceFamilyVariant(findFamily('signals',6),1);
  const phaseCycles=forceFamilyVariant(findFamily('signals',6),0);
  const expectedCycles=803*.00433;
  assert(phaseDegrees.prompt.includes('modulo') && phaseDegrees.prompt.includes('360'), 'Signals family 06 degree variant must state that phase is reduced modulo 360 degrees');
  assert(quantUnitEquivalent(phaseDegrees.quantUnit,'deg') && phaseDegrees.answer>=0 && phaseDegrees.answer<360 && closeTo(phaseDegrees.answer,360*(expectedCycles-Math.floor(expectedCycles))), 'Signals family 06 degree variant must return principal phase in degrees');
  assert(closeTo(phaseCycles.answer,expectedCycles) && quantUnitEquivalent(phaseCycles.quantUnit,''), 'Signals family 06 cycle variant must return the total delay in cycles as dimensionless');
  assert(phaseDegrees.explanation.includes('frac') && phaseDegrees.explanation.includes('complete cycles'), 'Signals family 06 explanation must explain removal of complete cycles');

  // Registry titles should describe the actual paired tasks, not a legacy seed label.
  for (const [category,number,phrase] of [
    ['laplace',6,'Periodic pulse duty cycle'],['laplace',9,'frequency-response phase'],['laplace',13,'step-response time constant'],['laplace',16,'Exponential signal value'],
    ['ztrans',12,'Frequency-response phase'],['fourier',7,'Fundamental and harmonic'],['signals',1,'Signal period and Nyquist'],['signals',6,'Phase delay in degrees'],['signals',8,'Signal-to-noise level'],['signals',10,'Sinusoidal average power'],['signals',12,'PCM bit rate'],['signals',18,'Amplitude ratio and frequency'],
    ['advanced',6,'Complex number argument'],['geas',9,'Power efficiency'],['geas',10,'Spring energy'],['geas',12,'Stress in MPa'],['geas',13,'Thermal expansion coefficient'],['geas',14,'Braking force'],['geas',15,'Impulse and average force'],['geas',17,'Rotational speed conversions'],['geas',18,'Centripetal acceleration'],['geas',19,'Buoyant force'],['geas',20,'Static friction']
  ]) assert(findFamily(category,number).title.includes(phrase), category+' family '+String(number).padStart(2,'0')+' title should describe its generated variants');
} catch(e) { failures.push('Unit/variant correctness regressions: '+e.message); }
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
  currentQuestions=[{type:'fib',answerExact:'1.2e-6',tolerance:'1e-12'}];savedResponses={0:{kind:'text',value:'1.2×10⁻⁶'}};
  assert(answerIsCorrect(currentQuestions[0],0), 'The grader should accept superscript engineering/scientific input by numeric value');
  savedResponses[0]={kind:'text',value:'0'};
  assert(!answerIsCorrect(currentQuestions[0],0), 'The grader must reject zero for a small nonzero answer');
  currentQuestions=[{type:'fib',answerExact:'1.25e-5',tolerance:'1e-10',expectedNotation:'scientific'}];savedResponses={0:{kind:'text',value:'12.5e-6'}};
  assert(!answerIsCorrect(currentQuestions[0],0), 'An explicitly requested scientific format should reject a non-normalized mantissa');
  savedResponses[0]={kind:'text',value:'1.25e-5'};
  assert(answerIsCorrect(currentQuestions[0],0), 'An explicitly requested scientific format should accept normalized e-notation');
  currentQuestions=[{type:'fib',answerExact:'1.25e-5',tolerance:'1e-10',expectedNotation:'engineering'}];savedResponses={0:{kind:'text',value:'12.5e-6'}};
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
report.numericSamples=numericSamples; report.multipleChoiceSamples=multipleChoiceSamples; report.treeSamples=treeSamples; report.treeStressBuilds=treeStressBuilds; report.ancestorOnlyNodeBuilds=report.ancestorOnlyNodeBuilds||0; report.identificationChoiceBuilds=report.identificationChoiceBuilds||0; report.setupNodes=QUESTION_REGISTRY.filter(e=>e.questionClass==='setup').length; report.variantFamiliesChecked=variantFamiliesChecked; report.seedFamilyVariantsChecked=seedFamilyVariantsChecked; report.nonNumericSamples=conceptSamples.length; report.treeRoots=QUESTION_REGISTRY.filter(e=>!e.parentId&&e.treeChildren.length).length; report.treeChildren=QUESTION_REGISTRY.filter(e=>e.parentId).length; report.failures=failures;
console.log(JSON.stringify(report,null,2));
if (failures.length) process.exitCode=1;
`;
vm.runInThisContext(source, {filename: 'ece-math-lab-smoke-test.js'});
