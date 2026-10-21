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
for (const id of ['bankExplorerCategory', 'bankExplorerClass', 'auditBankBtn', 'bankExplorerSummary', 'bankExplorerList']) {
  assert(inspectorRegion.includes(`id="${id}"`), `bank inspector control ${id} must remain inside its section`);
}
assert(css.includes('.bank-inspector-section{width:100%;margin-top:18px;'), 'bank inspector must have a full-width standalone layout');
assert(css.includes('@media(max-width:700px){.bank-explorer-controls{grid-template-columns:minmax(0,1fr) minmax(0,1fr);'), 'bank filters must reflow on narrower screens');
console.log(JSON.stringify({layout:'PASS', inspectorPosition:'after quiz panel, inside Practice page', fullWidth:true, filtersResponsive:true}, null, 2));
