# Developer guide: maintaining the ECE Math Lab question bank (v10)

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

`finalize-registry.js` checks that each category has at least `MIN_NUMERIC_GENERATORS_PER_CATEGORY` (currently 48) entries, enforces unique titles and recipe keys, assigns IDs/difficulty values, and constructs `BUILTIN`, the compatibility view for the 970 ordinary numerical question generators. `QUESTION_REGISTRY` is the canonical cross-class registry.

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

The 48-entry count is a **minimum**, not a target that must be met exactly. Current counts are 48 in 18 categories, 52 in `complexcalc`, and 54 in `calculus`.

## 5. Enable/disable individual question generators

The bank viewer lists all canonical entries in the selected category, including numeric, identification, true/false, compound-root, and dependent-child nodes. The **Use** checkbox on each row stores disabled category/recipe keys in browser local storage under `eceMathLab.disabledQuestionGenerators.v2` and mirrors older numerical preferences to `eceMathLab.disabledNumericGenerators.v1`. This stable key survives registry row insertions better than the order-dependent display ID; the reader also tolerates legacy ID-only values. Disabled entries stay in the registry and remain visible to the bank audit but are filtered out of new built-in numerical single-question draws and potential numerical parent questions used by custom dependent questions. They are not deleted from the bank, and re-enabling the checkbox makes them eligible again.

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

The Node smoke test checks 970 numerical entries (four samples each), decimal answer metadata, notation/tolerance behavior, finite answers, MC normalization, and stable recipe metadata. The single `QUESTION_REGISTRY` contains 2,690 nodes: 970 numeric generators, 800 identification generators, 800 true/false generators, and 120 compound-tree nodes (60 roots + 60 children). Tests confirm ID and T/F recipes are non-repeatable and singular, every current T/F statement is keyed True with False selectable but wrong, both variants of all 420 expansion families and 200 seed/supplement/extra family wrappers work, all 60 built-in trees share data correctly, a synthetic branched tree materializes with siblings and a grandchild, and selector history/count rules hold. `node scripts/check-extension-api.cjs` separately verifies the one-file extension API, nested children, cross-category rejection, non-repeatable-parent rejection, and registration closure.

A browser-based UI automation attempt was blocked by the environment's browser-navigation policy, so a full visual end-to-end check was not completed. For manual QA, use the bank viewer to disable one entry and verify it no longer appears in new numeric draws, re-enable it, start a quiz and toggle **Show recipe names**, and verify answers are retained when toggling while in one-question-at-a-time mode.

## 10. Historical expansion-family correctness notes

The migration review repaired these specific answer mismatches: controls Family 02 returns the normalized damped-frequency ratio for its normalized variant; Z-transform Family 07 returns the constant unit-step sample rather than a ramp-scaled value; electromagnetism Family 14 converts charge to microcoulombs without multiplying by voltage; and calculus Families 04 and 06 use the correct logarithmic ratio for both integral forms. `scripts/check-bank.cjs` has deterministic assertions for the affected branches.

## 11. Competition notation and prompt completeness audit (v7)

Use `rand(a,b)` for randomized decimal givens: it interpolates with `PrecisionDecimal` and rounds to 3 significant digits before returning a `Number` to an existing topic formula. `pick()` similarly rounds numeric choices. Keep integer givens as integers. For calculated values that are then given to the student and used in a reverse-calculation variant, round the displayed intermediate first and use that same rounded value in the answer formula; do not merely format the unrounded value at the prompt boundary.

`nfmt()` displays 4 significant digits by default. `numericDisplayOptions(q)` chooses one notation from the correct answer's magnitude, and `question-renderer.js` applies it consistently to the answer key and numerical multiple-choice options. Engineering notation is used at decimal exponents ≤ −3 or ≥ 6; a question-specific `expectedNotation` can override the default. Whole-dollar currency tokens omit unnecessary `.00`; non-integer currency results retain cents.

The v7 review made every variant independently state its givens. In particular, it repaired prompt omissions in EM Family 14 and economics Families 07, 13, 14, 15, 17, and 18, clarified a circle equation with negative coordinates, corrected mixed currency/ratio/percent display in economics variants, and updated inaccurate controls/electronics/economics recipe names. The family map derives its display labels from the active registry rows. The smoke test includes focused checks for those repaired prompts and formats.

Precision reminder: do not claim arbitrary precision for every built-in equation merely because `qNum()` stores `answerExact`. Many existing built-in formula bodies still use native JavaScript `Number` and `Math`. If changing one of those formulas to use the decimal evaluator, add mathematical regression tests for operator precedence, unit conversions, and any transcendental approximation.



## Unified registry and arbitrary question trees (v9)

`QUESTION_REGISTRY` is the canonical flat lookup/index. `CATEGORY_QUESTION_REGISTRIES[category]` is the category-local view used by the bank viewer. `NUMERIC_GENERATOR_REGISTRY` and `BUILTIN` remain numeric-only compatibility views for the 970 ordinary numeric generators. Each entry has a category, stable recipe key, question class, supported response formats, repeatability, parent ID, child IDs, and a `make(context)` factory.

The registry is not specialized to pairs. Any repeatable numeric node may have zero or more children; any child may have its own children. Each tree is single-category, must be acyclic, and cannot have a non-repeatable parent. Non-repeatable nodes (identification and T/F currently) must be singular. `makeRegistryTreeModule()` recursively materializes the same tree for `expand: 'all'`, one random path for `expand: 'path'`, or a probabilistically expanded path for `expand: 'random'`. Its `registry` option also supports isolated synthetic fixtures for tests.

`QuestionTreeSelector` separates `history`, monotonic `visitCounts`, and `lastParentVisitCount`. Leaving a branch or returning to the root clears applicable descendant history but does not reset counts. A previously used non-repeatable child becomes selectable only when its repeatable parent has a greater visit count than at the child's last selection. A non-repeatable root cannot repeat because it has no repeatable parent to unlock it.

The test builder can select a top-level generator, descend to a child, move to a sibling, or return to a new root. `generatorPool` chooses all top-level roots, roots plus tree traversal, or compound-tree roots only. Each instantiated branch shares a `data` object; each node publishes its result by recipe key and the direct child receives `parentQuestion`/`parentAnswer` context.

Seed supplement, extra-seed, and topic-seed families are individual repeatable numeric registry rows. Identification nodes are singular and non-repeatable. Current T/F nodes are also singular and non-repeatable; each statement uses its own concept's definition and is always keyed True, while False remains an available wrong response. This is a temporary policy to remove the earlier wording cue while randomized false statements are deferred.

The old central linked-pair dispatcher is removed. Compound root and child recipes are category-local, and UI/results call these ordinary tree nodes. The floating bank visualizer shows roots, children, siblings, and descendants from the selected node, with a clickable SVG focus.

## Extending the registry with a new script

Include a new category-specific script in root `index.html` after the built-in topic modules and before `js/question-bank/finalize-registry.js`. Each script must use unique top-level names, including a category-specific `NAMESPACE_...` constant. `appendNumericRecipe()` adds a repeatable standalone numeric generator to an existing category. `registerQuestionGenerator()` adds any top-level numeric, identification, or T/F node. `registerQuestionChild(parentRecipeKey, config)` safely attaches a child to an existing repeatable parent and fills the reciprocal parent/child metadata; because the child can then become a parent, arbitrary depths can be built without editing the shared engine. Registration is deliberately closed once the finalizer runs. See `README.md` for runnable extension examples.
