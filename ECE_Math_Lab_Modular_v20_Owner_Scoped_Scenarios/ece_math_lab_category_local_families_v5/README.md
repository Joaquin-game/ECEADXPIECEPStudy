# ECE Math Lab — Modular Owner-Scoped Question Trees (v20.1)

Open the project-root `index.html` in a modern browser. Scripts are loaded in classic-script order; the existing source folder name `ece_math_lab_category_local_families_v5/` is retained for stable relative paths. `index2.html` is not part of this project.

## Registry overview

The current registry contains 2,670 entries: 1,048 numeric entries (970 standalone plus 78 numeric descendants in the built-in trees), 22 answerless setup nodes, 800 identification entries, and 800 true/false entries. There is currently one five-node setup-rooted scenario in each of the 20 categories; **this is content, not a framework limit**. A category can register any number of separate trees, and each tree can have any finite number of nodes, branches, and levels.

## Authoring principle: keep question content category-local

Question-specific content belongs in its category module, `js/question-bank/categories/<category>.js`. The category file owns its setup/number generator functions, prompt strings, variable symbols, physical quantities, worked solutions, `transferData`, and inline SVG illustrations. `js/question-bank/shared-helpers.js` is limited to category-neutral helpers; do not put scenario prompts, tree-specific formulas, variables, or illustrations there.

Register a setup node with `setupRecipe(...)` and an answerable node with `appendNumericRecipe(...)`. Keep both the generator and its registration adjacent in the category file. Use the `treeChildrenRecipeKeys` and `parentRecipeKey` options to describe the tree. Recipe keys must be unique within the registry, and every edge must stay within one category.

## Owner-scoped data-transfer objects

Every question publishes a low-level dictionary under its own recipe key. **Primitive values are preferred** when descendants only need the value:

```js
transferData: {
  V_s: 12,
  R_L: 10,
  t: 60
}
```

If a downstream question genuinely needs the unit metadata, preserve the explicit quantity record instead:

```js
transferData: {
  I_L: { value: 1.2, unit: 'A' }
}
```

The high-level `dataTransferObject` remains owner-keyed:

```js
{
  'electronics-load-root-v20': {
    V_s: 12,
    R_L: 10,
    t: 60
  },
  'electronics-load-a-v20': {
    I_L: 1.2
  }
}
```

A dependent numeric or setup generator receives this whole object as its argument. Read the original symbol from the owner that defines it, for example `dto['electronics-load-root-v20'].V_s`, and preserve that symbol in the prompt and worked solution. Do not flatten owner dictionaries into aliases or create synthetic previous-value symbols. If a question computes a new quantity, publish it under that question's own recipe key so downstream questions may use it.

A setup generator should directly return a descriptor with its prompt, all given quantities in `transferData`, and any illustrations it owns. It has no answer, no answer input, and does not count toward scoring or the answerable-question count. Every inline SVG must include meaningful alt text. Illustrations and question-specific data should not be routed through callback properties on `setupRecipe`; keep them in the category-local setup generator.

Example structure:

```js
function makeExampleSetup() {
  const V = 12;
  return {
    prompt: String.raw`A test source provides \(V_s=${V}\,\mathrm{V}\) to the sensor load.`,
    transferData: { V_s: V },
    illustrations: [{ type: 'svg', svg: '<svg ...></svg>', alt: 'A source connected to a sensor load.' }]
  };
}

function makeExampleCurrent(dto = {}) {
  const source = dto['example-source-v19'] || {};
  const V_s = Number(source.V_s);
  const I_L = V_s / 10;
  const q = qNum(CATEGORY, 'Load current', String.raw`Find \(I_L\) using Ohm's law.`, I_L,
    String.raw`\(I_L=V_s/R_L=${V_s}/10=${I_L}\,\mathrm{A}\).`, 'number', { quantUnit: 'A' });
  q.transferData = { I_L };
  return q;
}

const ROOT_KEY = 'example-source-v19';
const CURRENT_KEY = 'example-current-v19';
setupRecipe(CATEGORY, 'Example · Sensor supply', ROOT_KEY, makeExampleSetup, 3,
  { treeChildrenRecipeKeys: [CURRENT_KEY] });
appendNumericRecipe(CATEGORY, 'Example · Load current', CURRENT_KEY, makeExampleCurrent, 3,
  { parentRecipeKey: ROOT_KEY });
```

Use actual project symbols and quantities rather than the placeholders above. Each category may own multiple setup-rooted trees by declaring additional unique recipe keys.

## Presentation and debugging

Setup nodes are visible as context cards and show which answerable question numbers they apply to. Question numbers are assigned after the test is built, and every answerable prompt begins with its question number. The learner-facing UI avoids structural terminology by default. Turn on **Show tree structure debug** to inspect the topology; turn on **Inspect question data** to view the selected question's properties, the exact owner-scoped DTO snapshot it received, and the data it published under its own owner key. Both controls are off by default.

## Validation

From this directory, run:

```sh
find js locales scripts -type f \( -name '*.js' -o -name '*.cjs' \) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
node scripts/check-category-local-architecture.cjs
node scripts/check-ui-layout.cjs
```

The suite checks numerical samples and multiple-choice builds, every registered tree, randomized tree construction, setup-answer/count rules, owner-scoped DTO schemas, SVG alt text, selected formula regressions, registry architecture, UI layout, unit notation, numeric precision, and matrix LaTeX. Passing automated checks does not replace a complete browser-based visual review.

See [OWNER_SCOPED_TREE_DTO_V19.md](OWNER_SCOPED_TREE_DTO_V19.md) for the implementation contract and [DEVELOPER_GUIDE.md](DEVELOPER_GUIDE.md) for broader authoring and registry guidance.

## v19 category-local scenario ownership

Tree-question content is owned entirely by the category module. A setup generator directly declares its prompt, `transferData`, quantities, variables, and illustrations in `js/question-bank/categories/<category>.js`; registration helpers only validate and register the descriptor and tree edges. `shared-helpers.js` contains only topic-neutral utilities.

Every registry factory receives the complete owner-scoped `dataTransferObject`. Its shape is:

```js
{
  'owner-question-key': {
    V_s: { value: 12, unit: 'V' },
    R_L: { value: 10, unit: 'Ω' }
  },
  'child-question-key': {
    I_L: { value: 1.2, unit: 'A' }
  }
}
```

A descendant reads the original symbol from its owner (`dto['owner-question-key'].V_s.value`) and keeps that symbol in its prompt unless it would be ambiguous. Do not flatten dictionaries and do not invent `x_prev` or other generic previous-value aliases. A descendant may publish new quantities in its own owner dictionary for later nodes. The question-data debug inspector shows the received DTO snapshot, generated properties, and published owner data.

## v20 scenario ownership and DTO rules

All tree-specific prompts, quantities, formulas, transfer dictionaries, SVG markup, and alt text belong in their category module. `shared-helpers.js` is category-neutral and contains no compound-scenario logic. Each node receives the owner-keyed `dataTransferObject`, publishes its own `transferData` dictionary under its recipe key, and never uses `x_prev` or another generic previous-value alias. The Practice inspector can show the received DTO, the node's own published data, and the post-construction DTO.

## v20.1 dependency and choice regressions

The category-local scenario trees are registered so every quantity owner required by a follow-up lies on that question’s ancestor path. The standard path is setup → Calculation A → Calculation B → two follow-ups; Electronics and Pre-calculus retain a nested setup along the same dependency path. `scripts/check-bank.cjs` reconstructs every registered tree node from ancestors only, deliberately omitting sibling owners, and validates the resulting DTO and answer.

Identification multiple-choice builds one correct term and exactly three distinct wrong concepts from the same category’s concept pool. The generic “All of these,” “None of these,” and “Insufficient information” options are excluded. The fill-in-the-blank unit hint preserves both MathJax inline delimiters in its JavaScript template literal.

Run `node scripts/check-bank.cjs`, `node scripts/check-extension-api.cjs`, `node scripts/check-category-local-architecture.cjs`, and `node scripts/check-ui-layout.cjs` from the module directory. Full details are in `ece_math_lab_category_local_families_v5/SIBLING_DTO_REGRESSION_FIX_V20.md`.
