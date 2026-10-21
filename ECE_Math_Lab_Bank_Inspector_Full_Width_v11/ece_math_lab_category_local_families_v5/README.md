# ECE Math Lab — category-local question trees (v10)

This modular version unifies numeric, identification, and true/false generators in one registry, with separate presentation formats for multiple choice, fill-in-the-blank, identification, and true/false. Any repeatable numeric node may own any number of children, which may themselves branch to further descendants. The test selector can start at a top-level node, descend to a child, move to a sibling, or return to the top-level pool. Current built-in trees are examples of this generic structure—not a special “pair” type.

The application uses classic scripts loaded in order, not ES modules. Open the root `index.html` in a modern browser. The existing folder name `ece_math_lab_category_local_families_v5/` is retained for stable asset paths. `index2.html` is the older pre-modular snapshot and is not the active source of truth. Top-level script bindings share a global lexical environment, so every new top-level `const`/`let` name must be unique.

## Current registry

| Registered nodes | Count | Repeatability | Use |
|---|---:|---|---|
| Ordinary numeric generators | 970 | Repeatable | Standalone top-level questions |
| Identification generators | 800 | Non-repeatable | Singular term/definition questions |
| True/false generators | 800 | Non-repeatable | Singular factual assertions; currently all answer True |
| Built-in compound roots | 60 | Repeatable | Can be asked alone or traversed into a child |
| Built-in compound children | 60 | Repeatable | Same-topic dependent questions |
| **Total** | **2,690** | — | Unified registry across 20 categories |

There are 420 base expansion families and 200 additional named family variants derived from earlier seed/supplement/extra recipes. They are ordinary repeatable numeric generators with generic family keys and direct rows in each category registry. The old combinatorial cross-category link table is not loaded or used. Existing compound tree recipes live in their matching category modules.

## Key features

- **Unified registry:** `QUESTION_REGISTRY` is the canonical global lookup. `CATEGORY_QUESTION_REGISTRIES[category]` provides the same category-owned view used by the bank explorer. The legacy `NUMERIC_GENERATOR_REGISTRY`/`BUILTIN` remain numeric-only audit views for the 970 ordinary numeric generators.
- **Repeatability-aware history:** counts never reset; branch history may be cleared on backtracking. A previously used non-repeatable child may recur only after its repeatable parent has been visited again. Non-repeatable nodes must remain singular and cannot own children.
- **Shared branch data:** each constructed tree module gives all nodes one `sharedData` object. Child recipes receive `parentQuestion`, `parentAnswer`, `parentNodeId`, and traversal `path`; each node publishes its answer into shared data using its stable recipe key.
- **Current T/F behavior:** each true/false question is a positive assertion about one concept and that concept's own definition. True is the key; False is still selectable and is graded wrong. This is an intentional temporary policy; randomized false-statement authoring is deferred.
- **Answer formats remain distinct:** numeric nodes can be presented as MC or fill-in-the-blank; ID nodes use identification (and may be presented as MC if both ID and MC are enabled); T/F nodes use true/false. Authored `questionClass` and displayed response format are separate properties.
- **Bank controls and visualizer:** each registered node has an enable/disable checkbox persisted by category/recipe key. The **Tree** action opens a floating, hideable SVG map of the selected node and its whole connected tree. Clicking a node changes focus.
- **Debug recipe switch:** tests can display stable recipe name/key for troubleshooting.
- **Precision-friendly presentation:** randomized decimal givens are rounded before being used; answer keys and numerical choices use shared decimal/engineering notation rules. See `NUMERIC_PRECISION_MIGRATION.md` and `COMPETITION_FORMAT_AND_FAMILY_AUDIT.md`.
- **Editable diagrams:** 18 SVG diagrams live separately in `res/diagrams/` and can be edited as standalone vector files.

## Project map

See `CATEGORY_LOCAL_GENERATOR_REGISTRY_V10.md` for the v10 category-local registry migration and the differences from v9.

- `index.html`: active page and explicit classic-script load order.
- `js/core/decimal-precision.js`: decimal parsing/arithmetic, notation parsing, tolerance, and restricted expression evaluation.
- `js/core/runtime.js`: number display, question metadata, common runtime state, and answer construction.
- `js/question-bank/shared-helpers.js`: topic-neutral math/display helpers only.
- `js/question-bank/registry-core.js`: numeric entries, general question registration, extension helpers, preference state, and metadata.
- `js/question-bank/categories/<topic>.js`: category namespace, regular and seed-origin family variant implementations, direct numeric registry rows, local concept cards, and category-owned tree recipes.
- `js/question-bank/finalize-registry.js`: resolves edges, assigns IDs, enforces same-category and repeatability invariants, checks for cycles, and closes the registration phase.
- `js/question-bank/categories/<topic>.js`: also owns that topic's 40 concept cards for identification and true/false generation. There is no global concept catalog.
- `js/question-engine/question-tree.js`: traversal history and count rules.
- `js/question-engine/module-builder.js`: generic recursive tree materialization (`all`, `path`, or `random` expansion).
- `js/question-engine/selection.js`, `test-builder.js`: eligibility, category/class filtering, and randomized test flow.
- `js/custom/`: custom question storage, validation, formula handling, and user-authored sequences.
- `js/ui/bank-inspector.js`: category registry view, enable/disable controls, audits, and floating SVG tree visualizer.
- `res/diagrams/*.svg`: independent diagrams used by question rendering.
- `scripts/check-bank.cjs`: code-level registry, generator, answer-format, history, and tree-structure regression suite.

## Extend an existing category with one extra JavaScript file

Place the new `<script src="...">` in the root `index.html` **after the standard category scripts and before** `js/question-bank/finalize-registry.js`. Registration is closed after finalization. Use a unique `NAMESPACE_...` constant in every new file to avoid classic-script name collisions. The category namespace string must match a registered category such as `laplace` or `em`.

For a standalone numeric generator or family, append a numeric entry:

```js
const NAMESPACE_LAPLACE_EXTENSION = 'laplace';
appendNumericRecipe(
  NAMESPACE_LAPLACE_EXTENSION,
  'Laplace extension · Example generator',
  'laplace-extension-example',
  () => qNum(NAMESPACE_LAPLACE_EXTENSION, 'Example generator',
    'Evaluate the given expression: 3 + 4.', 7, 'Add 3 and 4.')
);
```

For a new compound tree, register a repeatable numeric root, then attach children with `registerQuestionChild()`. Children can also be parents, so this API supports arbitrary depth. Every node in a tree must belong to the same category, parent nodes must be repeatable, and recipe keys must be unique:

```js
const NAMESPACE_LAPLACE_EXTENSION_TREE = 'laplace';
registerQuestionGenerator({
  category: NAMESPACE_LAPLACE_EXTENSION_TREE,
  title: 'Extension root', recipeKey: 'laplace-extension-root',
  questionClass: 'numeric', formats: ['mc', 'fib'], repeatable: true,
  make: () => qNum(NAMESPACE_LAPLACE_EXTENSION_TREE, 'Extension root',
    'Let x = 2. Find x.', 2, 'The given value is 2.')
});
registerQuestionChild('laplace-extension-root', {
  category: NAMESPACE_LAPLACE_EXTENSION_TREE,
  title: 'Extension child', recipeKey: 'laplace-extension-child',
  questionClass: 'numeric', formats: ['mc', 'fib'], repeatable: true,
  make: context => qNum(NAMESPACE_LAPLACE_EXTENSION_TREE, 'Extension child',
    'Triple the parent answer.', Number(context.parentAnswer) * 3,
    'Multiply the previous node answer by 3.')
});
```

For identification or true/false, call `registerQuestionGenerator()` with `questionClass: 'identification'` or `'truefalse'`, `repeatable: false`, supported formats `['id']` or `['tf']`, and a complete `make()` factory. Such nodes must be singular. To add a brand-new category rather than extend an existing one, also update locale/category metadata, the category list, numerical registry, concept data, and required scripts; adding a script alone only suffices for extending an existing category.

## Run checks

From `ece_math_lab_category_local_families_v5/`:

```sh
find js locales scripts \( -name '*.js' -o -name '*.cjs' \) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
node scripts/check-category-local-architecture.cjs
node scripts/check-ui-layout.cjs
```

The check verifies all 2,690 registry nodes, 970 numerical generators, 800 ID generators, 800 true/false generators, all 420 expansion-family variants, all 200 seed/supplement/extra family variants, 60 built-in trees, selector history/count semantics, a synthetic root-with-two-siblings-and-grandchild tree, format normalization, precision regressions, and generator preferences. These code-level tests do not prove every mathematical formula or replace a manual visual check in a browser.

## Related documentation

- `QUESTION_TREE_AND_UNIFIED_REGISTRY.md`: registry and tree architecture.
- `DEVELOPER_GUIDE.md`: maintenance details and compatibility constraints.
- `NUMERIC_EXPANSION_FAMILY_MAP.md`: the 420 expansion family map.
- `NUMERIC_PRECISION_MIGRATION.md`: decimal arithmetic boundary and notation behavior.
- `COMPETITION_FORMAT_AND_FAMILY_AUDIT.md`: givens/notation audit and verified sample fixes.
- `SEED_FACTORY_MIGRATION_PLAN.md`: historical seed-factory migration record.

## Layout update (v11)

The question-bank inspector is now a separate, full-width section below the Practice content. Its category/class filters, generator enable switches, registry audit, and tree visualizer integrations are unchanged; the controls reflow for tablet and mobile widths.
