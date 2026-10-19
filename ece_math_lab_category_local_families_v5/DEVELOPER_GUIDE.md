# Developer guide: maintaining the ECE Math Lab question bank

## 1. Numeric registry model

Every category is defined in `js/question-bank/categories/<category>.js`. Core seed templates, topic-specific seed factories, supplementary recipes, and expansion families are registered in the same file as their implementations. A representative expansion entry looks like this:

```js
numericEntry(
  'laplace',
  'Exponential shift rule · family 01 (randomized variant)',
  'laplace-family-01',
  () => makeLaplaceExpansionFamily01('Exponential shift rule · family 01 (randomized variant)')
)
```

`numericEntry(...)` attaches category, title, difficulty, ID, and debug recipe metadata around a numeric-question factory. A factory should return a question from `qNum(...)` with a prompt, finite numeric answer, and explanation based on the same sampled values. The `recipeName` is the display title and `recipeKey` is its stable descriptive key; both are available to the in-test debug toggle.

`finalize-registry.js` checks that each category has at least `MIN_NUMERIC_GENERATORS_PER_CATEGORY` (currently 48) entries, enforces unique titles and recipe keys, assigns IDs/difficulty values, and constructs `BUILTIN`, the canonical numerical question pool.

## 2. Randomized expansion families

All **420 expansion families** live in their category modules. Each family has a name such as `makeLaplaceExpansionFamily01(title)`, followed by an explicit registry row. Within the function, `const v = ri(0,1) === 1` randomly selects one of the two task variants each time the registry entry runs. The registry stores one entry per family, not one per variant. Generic unused random draws from the prior shared dispatcher were removed so each family samples only parameters it actually uses.

Use `NUMERIC_EXPANSION_FAMILY_MAP.md` to locate a family. Keep expansion implementation and registration next to each other; do not restore the old `makeExpansionQuestion`, `makeExpansionOther`, or `makeExpansionBasicOther` switches.

## 3. Seed-factory migration and category ownership

The old `js/question-bank/seed-factories.js` is removed. Its runtime-relevant responsibilities now have explicit homes:

- Shared category IDs and neutral utilities (`equationQ`, `combination`, `factorial`, `attachDiagram`) live in `js/question-bank/shared-helpers.js`.
- Core hand-authored seed arrays live in the categories which register them. The generic `coreSeedEntries(category, templates)` helper in `registry-core.js` only wraps metadata and does not select a recipe based on category.
- Supplemental and extra seed algorithms live beside their `*_SUP_NAMES` / `*_EXTRA_NAMES` lists within the appropriate topic module. Each registry row is a separate numerical generator; an indexed local factory may handle a family of same-topic parameterized recipes.
- Topic seed factories formerly behind `makeNewTopicQuestion(...)` have been split into local `makeGeasTopicSeed`, `makeElectronicsTopicSeed`, `makePrecalcTopicSeed`, and `makeProbabilityTopicSeed` functions.
- Scenario implementations formerly behind `makeScenarioSupplement(...)` are local to their categories. Each scenario has its own registry row and title.
- `registry-core.js` contains neutral registry helpers and preference storage—not mathematical category dispatch.

The old `registerCoreSeedTemplates(...)` data block did not feed the numerical pool assembled by the final registry, so it was not copied as dead data. The effective registered data-analysis recipes remain in `categories/data.js`. This avoids increasing the bank with entries that had not been available to quiz selection.

The former category-switch factory dispatch has been removed. To add a new numerical recipe, edit the relevant category module, define or reuse a category-local factory, and register it with `numericEntry(...)` or `appendNumericRecipe(...)`. Use `coreSeedEntries(...)` and `numericSeedEntries(...)` only for neutral metadata wrapping; the latter does not contain category-specific question math.

## 4. Add a numerical generator

1. Open the appropriate `js/question-bank/categories/<topic>.js` file.
2. Add a topic-local factory or a concise `makeQuestion` callback beside the registry row.
3. Register it exactly once in `NUMERIC_GENERATOR_REGISTRY.<topic>` or call `appendNumericRecipe(category, title, recipeKey, factory[, difficulty])` after the initial array assignment.
4. Use a unique title and recipe key within the category. Registry IDs are assigned by category-array order, so inserting/removing/reordering rows can shift later IDs. Keep recipe keys descriptive and update diagnostics if a family is removed.
5. Keep sampled values consistent across prompt, formula, answer, explanation, units, and answer format. Constrain impossible values at sampling time.
6. Run syntax checks and `node scripts/check-bank.cjs`. The registry smoke test verifies finite numeric answers, prompts/explanations, recipe metadata, multiple-choice normalization, random family variants, enable/disable filtering, concepts, and linked pairs.

The 48-entry count is a **minimum**, not a target that must be met exactly. Current counts are 48 in 18 categories, 52 in `complexcalc`, and 54 in `calculus`.

## 5. Enable/disable individual numerical generators

The bank viewer lists the canonical numerical entries in the selected category. The **Use** checkbox on each row stores disabled category/recipe keys in browser local storage under `eceMathLab.disabledNumericGenerators.v1`. This stable key survives registry row insertions better than the order-dependent display ID; the reader also tolerates legacy ID-only values. Disabled entries stay in the registry and remain visible to the bank audit but are filtered out of new built-in numerical single-question draws and potential numerical parent questions used by custom linked questions. They are not deleted from the bank, and re-enabling the checkbox makes them eligible again.

The browser preference is local to the current browser profile; it is not exported with a custom question template or synchronized between devices. `isNumericGeneratorEnabled(spec)` and `setNumericGeneratorEnabled(id, enabled)` are the common API used by the inspector and question selection.

## 6. Show recipe names during tests

The **Show recipe names** checkbox in the test header adds a compact debug line to generated questions with `recipeName` and `recipeKey`. It is intentionally off by default and is only a display option; it does not alter sampling. `numericEntry(...)` attaches recipe metadata when the question is created. The toggle re-renders displayed question cards while preserving saved responses, including when taking the test one question at a time.

## 7. Shared helpers and classic-script ordering

The app uses classic scripts, not ES modules. `shared-helpers.js` loads before category modules and `finalize-registry.js` runs only after every category registry is declared. Keep shared code only when the behavior is genuinely topic-neutral and used by multiple categories. Keep a formula or scenario in its category when it is conceptually separable there. Avoid duplicate top-level `const`/`let` names across scripts; category-specific functions should have unique category-prefixed names.

## 8. Verification status and limitations

The Node smoke test checks 970 numerical entries (four samples each), verifies finite answers and nonempty prompts/explanations, checks one-correct-answer multiple-choice normalization, verifies generator ID/title/recipe metadata, tests per-generator preference storage and selection filtering, forces both task variants for all 420 collapsed expansion families, exercises all 570 linked variants and their follow-through dependencies, and samples concept entries. A deterministic v4-to-v5 sample parity comparison also matched all 970 titles and their generated prompt/answer/explanation outputs under the same fixed random draw, including the migrated seed and scenario entries. Additional validation also stress-sampled every numeric entry 100 times (97,000 numeric samples and 97,000 multiple-choice samples) with zero failures. The test script verifies syntax/runtime behavior, not the mathematical truth of every formula or the final visual layout.

A browser-based UI automation attempt was blocked by the environment's browser-navigation policy, so a full visual end-to-end check was not completed. For manual QA, use the bank viewer to disable one entry and verify it no longer appears in new numeric draws, re-enable it, start a quiz and toggle **Show recipe names**, and verify answers are retained when toggling while in one-question-at-a-time mode.

## 9. Historical expansion-family correctness notes

The migration review repaired these specific answer mismatches: controls Family 02 returns the normalized damped-frequency ratio for its normalized variant; Z-transform Family 07 returns the constant unit-step sample rather than a ramp-scaled value; electromagnetism Family 14 converts charge to microcoulombs without multiplying by voltage; and calculus Families 04 and 06 use the correct logarithmic ratio for both integral forms. `scripts/check-bank.cjs` has deterministic assertions for the affected branches.
