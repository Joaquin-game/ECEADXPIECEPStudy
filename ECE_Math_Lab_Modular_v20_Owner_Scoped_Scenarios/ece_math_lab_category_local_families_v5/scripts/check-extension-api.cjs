#!/usr/bin/env node
// Isolated contract test for adding registry nodes from an extra category script.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const corePath = path.join(__dirname, '..', 'js', 'question-bank', 'registry-core.js');
const sandbox = vm.createContext({});
vm.runInContext(fs.readFileSync(corePath, 'utf8'), sandbox, { filename: corePath });
const result = vm.runInContext(`(() => {
  const base = { category: 'laplace', questionClass: 'numeric', formats: ['mc', 'fib'], repeatable: true, make: () => ({}) };
  const root = registerQuestionGenerator({ ...base, title: 'Extension root', recipeKey: 'extension-test-root' });
  const child = registerQuestionChild(root.recipeKey, { ...base, title: 'Extension child', recipeKey: 'extension-test-child' });
  const grandchild = registerQuestionChild(child.recipeKey, { ...base, title: 'Extension grandchild', recipeKey: 'extension-test-grandchild' });
  if (root.treeChildrenRecipeKeys.join(',') !== child.recipeKey) throw new Error('root child edge was not written');
  if (child.parentRecipeKey !== root.recipeKey || child.treeChildrenRecipeKeys.join(',') !== grandchild.recipeKey) throw new Error('nested child edge was not written');
  if (grandchild.parentRecipeKey !== child.recipeKey) throw new Error('grandchild parent key was not written');
  let crossedCategoryRejected = false;
  try { registerQuestionChild(root.recipeKey, { ...base, category: 'em', title: 'Wrong topic', recipeKey: 'extension-test-cross-category' }); }
  catch (e) { crossedCategoryRejected = /cannot cross categories/.test(e.message); }
  if (!crossedCategoryRejected) throw new Error('cross-category child should be rejected');
  const oneOff = registerQuestionGenerator({ category: 'laplace', title: 'Singular ID', recipeKey: 'extension-test-singular', questionClass: 'identification', formats: ['id'], repeatable: false, make: () => ({}) });
  let nonRepeatableParentRejected = false;
  try { registerQuestionChild(oneOff.recipeKey, { ...base, title: 'Illegal child', recipeKey: 'extension-test-illegal-child' }); }
  catch (e) { nonRepeatableParentRejected = /Non-repeatable question/.test(e.message); }
  if (!nonRepeatableParentRejected) throw new Error('non-repeatable parent should be rejected');
  QUESTION_REGISTRY_FINALIZED = true;
  let lateRegistrationRejected = false;
  try { registerQuestionGenerator({ ...base, title: 'Too late', recipeKey: 'extension-test-too-late' }); }
  catch (e) { lateRegistrationRejected = /before finalize-registry/.test(e.message); }
  if (!lateRegistrationRejected) throw new Error('late registration should be rejected');
  return { registeredNodes: 4, treeDepth: 2, crossCategoryRejected: crossedCategoryRejected, nonRepeatableParentRejected, lateRegistrationRejected };
})()`, sandbox);
assert.deepEqual(JSON.parse(JSON.stringify(result)), {
  registeredNodes: 4,
  treeDepth: 2,
  crossCategoryRejected: true,
  nonRepeatableParentRejected: true,
  lateRegistrationRejected: true,
});
console.log(JSON.stringify({ extensionApi: result, failures: [] }, null, 2));
