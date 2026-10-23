
### v20 repeatability and owner-scoped transfer values

Numeric registration defaults to `repeatable: true`, and `numericEntry(...)` also accepts `treeOptions.repeatable: false` when a numeric tree node is deliberately singular. Use non-repeatable only when the node introduces no new reusable data and only asks for an answer. A node that publishes a new derived quantity remains repeatable because that quantity can feed later descendants.

Tree `transferData` is owner-scoped. When a descendant only needs a value, publish it directly:

```js
q.transferData = { I_L: current };
```

If the unit itself must be consumed or preserved as part of the transfer contract, use the explicit form:

```js
q.transferData = { I_L: { value: current, unit: 'A' } };
```

Descendants receive the entire `dataTransferObject` and read the original symbol from its owner key. There is no generic previous-answer alias.

# Developer guide: maintaining the ECE Math Lab question bank (v19)

## 1. Numeric registry model

Every category is defined in `js/question-bank/categories/<category>.js`. Core seeds, former topic seeds, supplements, extras, and expansion families are category-local named family implementations registered in the same file as their implementations. All numeric entries use the same `numericEntry(...)` pattern. A representative expansion entry looks like this:

```js
numericEntry(
  'laplace',
  'Exponential shift rule · family 01 (randomized variant)',
  'laplace-family-01',
  () => makeLaplaceExpansionFamily01('Exponential shift rule · family 01 (randomized variant)')
)
```

`numericEntry(...)` attaches category, title, difficulty, ID, and debug recipe metadata around a numeric-question factory. A factory should return a question from `qNum(...)` with a prompt, finite numeric answer, and explanation based on the same sampled values. The `recipeName` is the display title and `recipeKey` is its stable descriptive key; both are available to the in-test debug toggle.

`finalize-registry.js` checks that each category has at least `MIN_NUMERIC_GENERATORS_PER_CATEGORY` (currently 48) entries, enforces unique titles and recipe keys, assigns IDs/difficulty values, and constructs `BUILTIN`, the numeric-only view for all 1,048 numeric entries (970 standalone generators plus 78 answerable numeric tree nodes). `QUESTION_REGISTRY` is the canonical cross-class registry.

## 2. Randomized expansion families

All **420 expansion families** live in their category modules. Each family has a name such as `makeLaplaceExpansionFamily01(title)`, followed by an explicit registry row. Within the function, `const v = ri(0,1) === 1` randomly selects one of the two task variants each time the registry entry runs. The registry stores one entry per family, not one per variant. Generic unused random draws from the prior shared dispatcher were removed so each family samples only parameters it actually uses.

Use `NUMERIC_EXPANSION_FAMILY_MAP.md` to locate a family. Keep expansion implementation and registration next to each other; do not restore the old `makeExpansionQuestion`, `makeExpansionOther`, or `makeExpansionBasicOther` switches.

## 3. Category-local family and concept ownership

The old seed-factory and concept-catalog dispatch patterns are no longer used. Each topic owns its concepts and question recipes in `js/question-bank/categories/<topic>.js`:

- **Concept cards:** every category declares a local `<CATEGORY>_CONCEPT_CARDS` constant containing its 40 term/definition cards, then calls `registerConceptGeneratorsForCategory(NAMESPACE_<CATEGORY>, <CATEGORY>_CONCEPT_CARDS)`. The global `CONCEPTS` object and `js/concept-bank/catalog.js` are removed.
- **Individual family variants:** former index-driven seed functions have been split into named functions such as `makeProbabilityFamily26VariantA(title)`. Each function implements one recipe; there is no `makeProbabilityTopicSeed(index)` dispatcher or parallel seed-name array.
- **Single numeric family interface:** the registry entry calls the generic numbered family maker, e.g. `makeProbabilityFamily26(title)`, which chooses between two category-local question implementations. The `VariantA` implementation is adjacent to the other numeric family functions.
- **Core seed recipes:** former `*_CORE_SEEDS` tables are now ordinary named functions such as `makeAdvancedFamily21()` plus direct registry rows. These use the same `category-family-NN` recipe-key convention as all numeric generators.
- **Registry rows:** category arrays list every numeric entry explicitly with `numericEntry(...)`. `numericFamilyEntries(...)`, `coreSeedEntries(...)`, and seed-name arrays such as `*_SUP_NAMES` and `*_EXTRA_NAMES` are deleted.
- **Shared helpers:** `shared-helpers.js` and `registry-core.js` contain cross-topic math, display, registration, and preference functions only. Topic definitions and formulas stay in their category module.

The 420 base expansion families and 200 additional family makers derived from former seed/supplement/extra recipes are all ordinary repeatable numeric entries. Legacy generator-disable preferences are translated to the equivalent canonical family keys so old browser settings continue to apply.

The effective data-analysis recipes remain those that were part of the old registered numerical pool; unused legacy data blocks were not added to the live bank.

## 4. Add a numerical generator

1. Open the appropriate `js/question-bank/categories/<topic>.js` file.
2. Add a topic-local factory or a concise `makeQuestion` callback beside the registry row.
3. Register it exactly once in `NUMERIC_GENERATOR_REGISTRY.<topic>` or call `appendNumericRecipe(category, title, recipeKey, factory[, difficulty])` after the initial array assignment.
4. Use a unique title and recipe key within the category. Registry IDs are assigned by category-array order, so inserting/removing/reordering rows can shift later IDs. Keep recipe keys descriptive and update diagnostics if a family is removed.
5. Keep sampled values consistent across prompt, formula, answer, explanation, units, and answer format. Constrain impossible values at sampling time.
6. Run syntax checks and `node scripts/check-bank.cjs`. The smoke test validates the unified registry, numerical answers and MC normalization, concept answer metadata and T/F polarity, repeatability/tree-history behavior, per-generator enable/disable filtering, all expansion variants, and same-topic compound trees.

The 48-entry count is a **minimum**, not a target that must be met exactly. The current per-category numeric counts include five compound-tree entries in every category.

## 5. Enable/disable individual question generators

The bank viewer lists all canonical entries in the selected category, including standalone numeric entries, numeric compound-tree nodes, identification, and true/false nodes. The **Use** checkbox on each row stores disabled category/recipe keys in browser local storage under `eceMathLab.disabledQuestionGenerators.v2` and mirrors older numerical preferences to `eceMathLab.disabledNumericGenerators.v1`. This stable key survives registry row insertions better than the order-dependent display ID; the reader also tolerates legacy ID-only values. Disabled entries stay in the registry and remain visible to the bank audit but are filtered out of new built-in numerical single-question draws and potential numerical parent questions used by custom dependent questions. They are not deleted from the bank, and re-enabling the checkbox makes them eligible again.

The browser preference is local to the current browser profile; it is not exported with a custom question template or synchronized between devices. `isQuestionGeneratorEnabled(spec)` and `setQuestionGeneratorEnabled(id, enabled)` are the canonical APIs; `isNumericGeneratorEnabled(...)` and `setNumericGeneratorEnabled(...)` remain aliases for numeric-only callers.

## 6. Show recipe names during tests

The **Show recipe names** checkbox in the test header adds a compact debug line to generated questions with `recipeName` and `recipeKey`. It is intentionally off by default and is only a display option; it does not alter sampling. `numericEntry(...)` attaches recipe metadata when the question is created. The toggle re-renders displayed question cards while preserving saved responses, including when taking the test one question at a time.

## 7. Shared helpers and classic-script ordering (v10)

The app uses classic scripts, not ES modules. `shared-helpers.js` loads before category modules and `finalize-registry.js` runs only after every category registry is declared. Keep shared code only when the behavior is genuinely topic-neutral and used by multiple categories. Keep a formula or scenario in its category when it is conceptually separable there. Avoid duplicate top-level `const`/`let` names across scripts; category-specific functions should have unique category-prefixed names.

## 8. Numeric answer metadata and precision

Every `qNum(...)` question is normalized into `answerExact`, `toleranceExact`, `answerKind: "numeric"`, and an `answerSpec` containing the numeric value, tolerance, notation policy, and formatting precision. Numeric grading parses the raw input with `parseUserDecimal()` and compares decimal values using `withinNumericTolerance()` instead of converting the submitted answer to a JavaScript `Number`. Thus `2.4e-6`, `2.4 × 10^-6`, and `2.4×10⁻⁶` are equivalent by default. To require a notation explicitly, a factory can set `expectedNotation: "scientific"`, `"engineering"`, or `"decimal"`.

The project-local `js/core/decimal-precision.js` uses `BigInt` for base-10 addition, subtraction, multiplication, precise decimal parsing/formatting, integer powers, and division rounded to 40 significant digits. `evalDecimalExpr()` is the restricted evaluator for custom question formulas; it accepts `+`, `-`, `*`, `/`, `^`, parentheses, unary signs, and supported function names without JavaScript `eval()`. Existing built-in category recipes still perform most internal calculations with `Number` and `Math` before their answer enters `qNum()`, so do not assume that digits lost inside native floating-point operations can be recovered at the boundary. The precise boundary fixes the fixed-place rounding loss and tiny-answer tolerance issue; full formula-by-formula arbitrary-precision migration would need independent mathematical regression checks.

See `NUMERIC_PRECISION_MIGRATION.md` for the tolerance policy, operator semantics, limitations, and the retired helpers.

## 9. Verification status and limitations

The Node smoke test samples all 1,048 numeric entries, decimal answer metadata, notation/tolerance behavior, finite answers, MC normalization, and stable recipe metadata. The current `QUESTION_REGISTRY` contains 2,670 nodes: 1,048 numeric generators (970 standalone plus 78 tree descendants), 22 setup generators, 800 identification generators, and 800 true/false generators. Tests confirm both variants of all 420 expansion families and 200 seed/supplement/extra family wrappers work, all currently registered tree roots materialize with owner-scoped data, a synthetic 24-node chain expands without default depth/node caps, and selector history/count rules hold. `node scripts/check-extension-api.cjs` separately verifies the one-file extension API, nested children, cross-category rejection, non-repeatable-parent rejection, and registration closure.

The code-level validation scripts pass. A full browser-based visual end-to-end check has not been completed for this revision. For manual QA, use the bank viewer to disable one entry and verify it no longer appears in new numeric draws, re-enable it, start a quiz and toggle **Show recipe names**, and verify answers are retained when toggling while in one-question-at-a-time mode.

## 10. Historical expansion-family correctness notes

The migration review repaired these specific answer mismatches: controls Family 02 returns the normalized damped-frequency ratio for its normalized variant; Z-transform Family 07 returns the constant unit-step sample rather than a ramp-scaled value; electromagnetism Family 14 converts charge to microcoulombs without multiplying by voltage; and calculus Families 04 and 06 use the correct logarithmic ratio for both integral forms. `scripts/check-bank.cjs` has deterministic assertions for the affected branches.

## 11. Competition notation and prompt completeness audit (v7)

Use `rand(a,b)` for randomized decimal givens: it interpolates with `PrecisionDecimal` and rounds to 3 significant digits before returning a `Number` to an existing topic formula. `pick()` similarly rounds numeric choices. Keep integer givens as integers. For calculated values that are then given to the student and used in a reverse-calculation variant, round the displayed intermediate first and use that same rounded value in the answer formula; do not merely format the unrounded value at the prompt boundary.

`nfmt()` displays 4 significant digits by default. `numericDisplayOptions(q)` chooses one notation from the correct answer's magnitude, and `question-renderer.js` applies it consistently to the answer key and numerical multiple-choice options. Engineering notation is used at decimal exponents ≤ −3 or ≥ 6; a question-specific `expectedNotation` can override the default. Whole-dollar currency tokens omit unnecessary `.00`; non-integer currency results retain cents.

The v7 review made every variant independently state its givens. In particular, it repaired prompt omissions in EM Family 14 and economics Families 07, 13, 14, 15, 17, and 18, clarified a circle equation with negative coordinates, corrected mixed currency/ratio/percent display in economics variants, and updated inaccurate controls/electronics/economics recipe names. The family map derives its display labels from the active registry rows. The smoke test includes focused checks for those repaired prompts and formats.

Precision reminder: do not claim arbitrary precision for every built-in equation merely because `qNum()` stores `answerExact`. Many existing built-in formula bodies still use native JavaScript `Number` and `Math`. If changing one of those formulas to use the decimal evaluator, add mathematical regression tests for operator precedence, unit conversions, and any transcendental approximation.



## Unified registry and arbitrary question trees (v19)

`QUESTION_REGISTRY` is the canonical registry. `CATEGORY_QUESTION_REGISTRIES[category]` is the category-local bank view; `NUMERIC_GENERATOR_REGISTRY` and `BUILTIN` are the numeric-only view. The current bank contains 1,048 numeric entries, 22 setup nodes, 800 identification entries, and 800 true/false entries. These are current content counts, not limits. The registry supports multiple independent trees in the same category, and trees may have any finite number of nodes, branches, and levels. Every edge must remain within one category, every recipe key must be unique, and the graph must be acyclic.

### Category-local ownership is mandatory

Keep scenario-specific prompts, values, variables, formulas, worked solutions, transfer dictionaries, and SVG source in `js/question-bank/categories/<category>.js`. Define each setup or numeric generator there and register it nearby in the same file. `js/question-bank/shared-helpers.js` is only for generic category-neutral utilities; it must not host compound-scenario configuration, setup prompts, scenario illustrations, or category-specific calculations. Do not route category content through callback-valued properties in a shared scenario helper.

### Owner-scoped data-transfer object

A question publishes a flat dictionary of its own symbols and quantities via `q.transferData`. Use a primitive value when descendants only need the value; retain `{ value, unit }` only when unit metadata is part of the transfer contract:

```js
transferData: {
  V_s: { value: 12, unit: 'V' },
  R_L: { value: 10, unit: 'Ω' }
}
```

The engine stores this as `dataTransferObject[recipeKey]`. Thus the high-level DTO groups each low-level dictionary under the key of the question that owns it:

```js
{
  'sensor-load-root': {
    V_s: { value: 12, unit: 'V' },
    R_L: { value: 10, unit: 'Ω' }
  },
  'sensor-load-current': {
    I_L: { value: 1.2, unit: 'A' }
  }
}
```

A dependent `appendNumericRecipe()` generator receives the **whole DTO** as its first argument. Read a quantity through its owner and preserve its original symbol, e.g. `dto['sensor-load-root'].V_s`. Do not flatten values into a shared dictionary or synthesize generic aliases. Every derived question should publish its own `q.transferData` under its own recipe key. This allows a later descendant to receive the givens from every ancestor and any earlier results already built into the path/object.

`q.receivedDataTransferObject` is a deep snapshot of the exact owner-keyed DTO supplied to the generator when that question was constructed. The developer-facing **Inspect question data** toggle shows this snapshot alongside the question's generated properties and its own published dictionary. The toggle is unchecked by default. The separate **Show tree structure debug** toggle also defaults off.

### Declare and register setup-rooted trees in the category file

A setup generator returns the complete context-only descriptor directly. It owns the prompt, every quantity, and every illustration, including alt text for each inline SVG. It must not return an answer, and it never counts as an answerable question. `setupRecipe()` only validates and registers the descriptor plus its tree metadata.

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
      alt: 'A simple connection line representing the source and load circuit.'
    }]
  };
}

function makeSensorLoadCurrent(dto = {}) {
  const setup = dto['sensor-load-root-v19'];
  const V_s = Number(setup.V_s);
  const R_L = Number(setup.R_L);
  const I_L = V_s / R_L;
  const q = qNum(CATEGORY, 'Load current', String.raw`Find the load current \(I_L\).`, I_L,
    String.raw`\(I_L=V_s/R_L=${V_s}/${R_L}=${I_L}\,\mathrm{A}\).`,
    'number', { quantUnit: 'A' });
  q.transferData = { I_L };
  return q;
}

setupRecipe(CATEGORY, 'Sensor load setup', 'sensor-load-root-v19', makeSensorLoadSetup, 3,
  { treeChildrenRecipeKeys: ['sensor-load-current-v19'] });
appendNumericRecipe(CATEGORY, 'Sensor load current', 'sensor-load-current-v19', makeSensorLoadCurrent, 3,
  { parentRecipeKey: 'sensor-load-root-v19' });
```

This example illustrates the shape, not an additional built-in entry. Use unique keys appropriate to the category. For a nested setup, the setup factory also receives the full DTO from its ancestors. Each category may define multiple root setup factories, each with its own independent recipe keys.

### Tree materialization, dependencies, and testing

`makeRegistryTreeModule(rootSpec, formats, options)` recursively materializes descendants for `expand: 'all'`, a path for `expand: 'path'`, or probabilistic selection for `expand: 'random'`. Omitted `maxNodes`/`maxDepth` do not truncate a finite registered tree; explicit caps are available to previews and constrained callers. Setup nodes do not take an answer, count toward the requested question total, or enter grading indices. When a setup is selected, the test builder includes an answerable descendant. Numbering is assigned only after the answerable test is built; setup cards show their descendant question range.

The current trees have story-driven prompts and category-owned inline SVGs. Prefer quantities that build a coherent calculation chain; do not re-state root givens in every child prompt, do not ask for a value already supplied by an earlier node, and keep the same physical symbol when using a transferred quantity. When a derived quantity needs a new symbol, record the reason for its distinction in the prompt. Child generators may consume the full DTO, but should only read values relevant to the calculation.

From the category-local source directory, run `node scripts/check-bank.cjs`, `node scripts/check-extension-api.cjs`, `node scripts/check-category-local-architecture.cjs`, and `node scripts/check-ui-layout.cjs`, plus `node --check` across project JS/CJS files. Tests validate numeric samples, exact DTO owner scopes, all registered trees, formula invariants, tree expansion, registry architecture and the default-off debug toggle. Code-level checks do not replace a browser visual review.

### Giving a numeric generator an answer unit

For a generator whose result has a physical unit, pass unit metadata as the final `qNum()` extras object:

```js
return qNum(CAT, 'Rate example', prompt, answer, explanation, 'number', {
  quantUnit: 'm/s',
  unitMode: 'lenient'
});
```

`quantUnit` may be a simple unit (`V`), powered unit (`m^2`), inverse unit (`s^-1`), or compound unit (`m/s`, `N/C`, `kg/m^3`). `unitMode: 'strict'` requires the same unit structure and prefix; `lenient` accepts dimensionally equivalent units and converts the submitted number. The system also infers a final answer unit from the worked explanation when a generator has not explicitly supplied one, but explicit `quantUnit` is preferred when the intended competition unit is important or the result could reasonably be expressed in more than one equivalent unit.


For the definitive category-local owner-scoped transfer contract and debugging behavior, see [OWNER_SCOPED_TREE_DTO_V19.md](OWNER_SCOPED_TREE_DTO_V19.md).


### v19 scenario authoring

Keep every scenario-specific detail in the category file: setup prompt, numerical givens, symbols, units, formulas, transfer dictionary, SVG markup, and alt text. A setup factory should be a plain function returning its complete descriptor; it should not delegate category data through callback-valued options.

Use the whole DTO in every descendant factory:

```js
function makeChild(dataTransferObject = {}) {
  const root = dataTransferObject['my-root-key'] || {};
  const V_s = Number(root.V_s);
  // ...
}
```

Publish derived information under the child's own recipe key. Never create a generic `x_prev` alias. This permits siblings and deeper descendants to consume multiple quantities from any already-constructed owner without losing the physical meaning of the original symbols.

Enable **Inspect question data** while practicing to see the exact owner-keyed DTO received by a generated question, its generated properties, and its own published transfer dictionary.
