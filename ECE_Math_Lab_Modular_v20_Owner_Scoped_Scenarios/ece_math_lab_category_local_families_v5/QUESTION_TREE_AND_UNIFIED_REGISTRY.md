# Category-Local Question Trees and Owner-Scoped Registry (v19)

## Current structure

`QUESTION_REGISTRY` is the canonical cross-class registry. `CATEGORY_QUESTION_REGISTRIES[category]` is the category-local view used by the bank inspector. `NUMERIC_GENERATOR_REGISTRY` / `BUILTIN` provide the numeric-only view. The current content has 1,048 numeric entries (970 standalone plus 78 answerable tree descendants), 22 setup nodes, 800 identification entries, and 800 true/false entries, for 2,670 registered entries total. These counts describe the current bank, not a limit on the framework.

The built-in content currently provides one setup-rooted scenario per category. Multiple tree roots in the same category are supported: every setup, branch and leaf is registered with a unique recipe key, `parentRecipeKey` and `treeChildrenRecipeKeys`. Trees must stay within one category and remain acyclic, but the engine does not assume one tree per category, a fixed branch width, or a fixed depth.

## Category-local ownership

All scenario-specific code belongs in `js/question-bank/categories/<category>.js`: setup generators, numeric child generators, prompt and explanation text, quantity symbols, data values, formula calculations, owner transfer dictionaries, and illustrations including inline SVG markup and alt text. Keep each category's tree registration next to those functions. `js/question-bank/shared-helpers.js` contains only generic category-neutral functions; it must not own scenario content or compound-tree construction logic.

`setupRecipe(category, title, recipeKey, makeSetupQuestion, difficulty, treeOptions)` registers an answerless context node. The function `makeSetupQuestion()` owns the entire returned descriptor, including its `prompt`, `transferData`, and `illustrations`. SVG entries need meaningful alt text. A setup node never receives an answer field, answer input, grading slot, score contribution, or answerable-question count increment.

Register answerable descendants with `appendNumericRecipe()` or `registerQuestionChild()`. The category-owned factory for a descendant accepts the complete DTO as its argument. Do not move its scenario-dependent formula or prompt into a helper file. Multiple separate trees can be registered in a single category module using independent keys.

## Owner-scoped data-transfer object (DTO)

Every question may publish a low-level `transferData` dictionary. Symbols are keys; each value is a quantity record with `value` and `unit` fields:

```js
transferData: {
  V_s: { value: 12, unit: 'V' },
  R_L: { value: 10, unit: 'Ω' },
  t: { value: 60, unit: 's' }
}
```

The engine publishes that dictionary under the owning question's recipe key in the high-level DTO:

```js
{
  'electronics-load-root-v19': {
    V_s: { value: 12, unit: 'V' },
    R_L: { value: 10, unit: 'Ω' },
    t: { value: 60, unit: 's' }
  },
  'electronics-load-a-v19': {
    I_L: { value: 1.2, unit: 'A' }
  }
}
```

A descendant can use the entire object: `dto['electronics-load-root-v19'].V_s.value`. Its generator should preserve the owner's original variable symbol unless it needs a distinct symbol to avoid ambiguity in the new calculation. Do not flatten quantities into global aliases. If a question computes a new result, it publishes that result under its own recipe key so later descendants can build on it.

A descendant's `receivedDataTransferObject` is a serialized snapshot of the complete owner-keyed DTO that existed at the time its generator was called. It does not change as later questions are built. The developer inspector shows the generated question properties, received DTO snapshot, and that question's published `transferData` under its owner key.

## Example: define data and prompt in the same category-local generator

```js
function makeSensorLoadSetup() {
  const V_s = 12;
  const R_L = 10;
  return {
    prompt: String.raw`A sensor load is connected to a regulated source with \(V_s=${V_s}\,\mathrm{V}\) and resistance \(R_L=${R_L}\,\Omega\).`,
    transferData: {
      V_s: { value: V_s, unit: 'V' },
      R_L: { value: R_L, unit: 'Ω' }
    },
    illustrations: [{
      type: 'svg',
      svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 10"><path d="M1 5 H19" stroke="currentColor"/></svg>',
      alt: 'A line representing the electrical connection from the source to the sensor load.'
    }]
  };
}

function makeSensorLoadCurrent(dto = {}) {
  const setup = dto['sensor-load-root-v19'];
  const V_s = Number(setup.V_s.value);
  const R_L = Number(setup.R_L.value);
  const I_L = V_s / R_L;
  const q = qNum(CATEGORY, 'Load current', String.raw`Find the load current \(I_L\).`, I_L,
    String.raw`\(I_L=V_s/R_L=${V_s}/${R_L}=${I_L}\,\mathrm{A}\).`,
    'number', { quantUnit: 'A' });
  q.transferData = { I_L: { value: I_L, unit: 'A' } };
  return q;
}

setupRecipe(CATEGORY, 'Sensor load setup', 'sensor-load-root-v19', makeSensorLoadSetup, 3,
  { treeChildrenRecipeKeys: ['sensor-load-current-v19'] });
appendNumericRecipe(CATEGORY, 'Sensor load current', 'sensor-load-current-v19', makeSensorLoadCurrent, 3,
  { parentRecipeKey: 'sensor-load-root-v19' });
```

Use the actual category constant, unique keys and scenario quantities when adding real generators. The example above illustrates the interface; it is not itself a registered bank entry. For a nested setup, its category-local factory also receives the entire owner-scoped DTO from prior nodes.

## Construction, presentation, and debugging

`makeRegistryTreeModule(rootSpec, formats, options)` recursively expands a tree for `expand: 'all'`, selects a path for `expand: 'path'`, or probabilistically expands a path for `expand: 'random'`. With no explicit `maxNodes`/`maxDepth`, a finite registered tree is not silently truncated. The caller may set caps for previews or constrained workflows. The test builder ensures a selected setup leads to at least one answerable descendant.

Answerable question numbers are assigned after the final test is assembled and appear before each prompt. Setup cards display the range of answerable descendants to which they apply. Learner-facing wording does not expose tree implementation terms by default. The **Show tree structure debug** checkbox is off by default. The **Inspect question data** checkbox is also off by default; when enabled, a question's collapsible panel includes its generated attributes, exact received DTO snapshot, and own published dictionary.

## Validation

The scripts in `scripts/` cover all current category trees, numeric and multiple-choice sampling, random expansion, setup answer/count rules, owner-keyed DTO schema, important formula results, arbitrary-depth tree expansion, registration constraints, category-local architecture, unit formatting and UI layout. Run `node scripts/check-bank.cjs`, `node scripts/check-extension-api.cjs`, `node scripts/check-category-local-architecture.cjs`, and `node scripts/check-ui-layout.cjs`, alongside project-wide `node --check` calls. Automated checks do not replace a full manual browser review.


Implementation contract: see [Owner-scoped Tree Data v19](OWNER_SCOPED_TREE_DTO_V19.md).
