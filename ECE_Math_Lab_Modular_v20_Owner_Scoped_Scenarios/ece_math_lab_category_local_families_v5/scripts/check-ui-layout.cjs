#!/usr/bin/env node
// Static regression for the Practice page and full-width bank-inspector placement.
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const appRoot = path.resolve(__dirname, '..');
const projectRoot = path.resolve(appRoot, '..');
const html = fs.readFileSync(path.join(projectRoot, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(appRoot, 'css', 'style.css'), 'utf8');
const count = (text, pattern) => [...text.matchAll(pattern)].length;
assert.equal(count(html, /id="bankExplorer"/g), 1, 'bankExplorer DOM ID must occur exactly once');
assert.equal(count(html, /id="bankInspectorSection"/g), 1, 'bank inspector section ID must occur exactly once');
const setupStart = html.indexOf('id="setupPanel"');
const quizStart = html.indexOf('id="quizPanel"');
const inspectorStart = html.indexOf('id="bankInspectorSection"');
const practiceEnd = html.indexOf('</main>\n\n  <main id="builderPage"');
assert(setupStart >= 0 && quizStart > setupStart, 'setup and quiz panels must exist in order');
assert(inspectorStart > quizStart && inspectorStart < practiceEnd, 'bank inspector must sit below quiz content within the Practice page');
const setupRegion = html.slice(setupStart, quizStart);
assert(!setupRegion.includes('id="bankExplorer"'), 'bank inspector must not remain nested in setup panel');
const inspectorRegion = html.slice(inspectorStart, practiceEnd);
for (const id of ['debugAllQuestions', 'retakeSameBtn', 'newQuizBtn']) assert(html.includes(`id="${id}"`), `required test-flow control ${id} must exist`);
for (const id of ['bankExplorerCategory', 'bankExplorerClass', 'auditBankBtn', 'bankExplorerSummary', 'bankExplorerList']) {
  assert(inspectorRegion.includes(`id="${id}"`), `bank inspector control ${id} must remain inside its section`);
}
assert(css.includes('.bank-inspector-section{width:100%;margin-top:18px;'), 'bank inspector must have a full-width standalone layout');
assert(css.includes('@media(max-width:700px){.bank-explorer-controls{grid-template-columns:minmax(0,1fr) minmax(0,1fr);'), 'bank filters must reflow on narrower screens');
const runtime = fs.readFileSync(path.join(appRoot, 'js', 'core', 'runtime.js'), 'utf8');
const renderer = fs.readFileSync(path.join(appRoot, 'js', 'ui', 'question-renderer.js'), 'utf8');
assert(runtime.includes("const ECE_MATH_LAB_MODULE_BASE_PATH='ece_math_lab_category_local_families_v5';"), 'module folder path must be defined once as an editable constant');
assert(runtime.includes('const ECE_MATH_LAB_ASSET_BASE_PATH=`${ECE_MATH_LAB_MODULE_BASE_PATH}/res`;'), 'asset path must be derived from the editable module path constant');
assert(renderer.includes('if(file)src=`${ECE_MATH_LAB_ASSET_BASE_PATH}/diagrams/${file}`;'), 'diagram markup must use the shared asset path constant for illustration descriptors');
assert(!renderer.includes('ece_math_lab_category_local_families_v5'), 'diagram renderer must not hard-code the module folder name');
assert(renderer.includes('<strong class="question-number-inline">${questionNumber}.</strong> ${htmlEscape(q.prompt)}'), 'the question number must precede the prompt content');
assert(renderer.includes("Applies to question${q.setupAppliedQuestionNumbers?.length===1?'':'s'} ${q.setupRangeLabel}"), 'setup cards must display the full descendant question range');
assert(renderer.includes('Uses the result from Question ${ref.number}'), 'direct follow-up questions must cite the preceding question number without structural jargon');
assert(renderer.includes("$('showTreeDebug')?.checked&&q.treeRootId"), 'tree structure labels must be behind the default-off debug toggle');
assert(html.includes('id="showTreeDebug" type="checkbox"'), 'tree debug toggle must exist and be unchecked by default');
assert(html.includes('id="showQuestionDataDebug" type="checkbox"'), 'question data debug toggle must exist and be unchecked by default');
assert(renderer.includes('function questionDataDebugMarkup(q)'), 'question renderer must expose question property/data-transfer debugging');
assert(renderer.includes('Answer in \\\\(${expectedLatex}\\\\)'), 'fill-in-the-blank unit preference must retain MathJax inline-math delimiters in the rendered hint');
assert(renderer.includes('receivedDataTransferObject:received'), 'debug view must show the exact owner-scoped DTO received by a child');
assert(renderer.includes('data-inspector-tab=\"properties\"'), 'debug inspector must expose a properties tab');
assert(renderer.includes('data-inspector-tab=\"transfer\"'), 'debug inspector must expose a data-transfer tab');
assert(renderer.includes('data-inspector-tab=\"json\"'), 'debug inspector must expose a full-JSON tab');
assert(renderer.includes('publishedOwnerData:{[ownerKey]:published}'), 'debug view must show the data published by the inspected question');
assert(css.includes('.question-data-debug{'), 'question data debug details need a styled collapsible container');
assert(!html.includes('Child questions share context with their parent'), 'learner-facing test setup must avoid parent/child terminology');
console.log(JSON.stringify({layout:'PASS', inspectorPosition:'after quiz panel, inside Practice page', fullWidth:true, filtersResponsive:true}, null, 2));
