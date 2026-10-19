# Seed-factory migration — completion record and trade-offs

## Status

**Completed in v5.** The migration procedure below was the design plan for moving seed creation out of `js/question-bank/seed-factories.js`. The shared seed module has now been removed; its runtime-relevant category-specific recipes are registered from the corresponding `js/question-bank/categories/<topic>.js` files. `registry-core.js` no longer selects question logic by category.

## What was migrated

- **Category IDs and neutral helpers:** moved to `js/question-bank/shared-helpers.js`. This module holds topic IDs and shared `equationQ`, `combination`, `factorial`, and `attachDiagram` utilities.
- **Core seed tables:** moved into category files where they are registered and wrapped with `coreSeedEntries(...)`, a metadata-only helper in `registry-core.js`.
- **Supplement and extra-seed algorithms:** split across category modules. The `*_SUP_NAMES` and `*_EXTRA_NAMES` catalogs sit next to their local `make<Category>Supplement(index)` / `make<Category>ExtraSeed(index)` implementations. Each row registers as its own numerical generator.
- **Topic seed algorithms:** former `makeNewTopicQuestion(...)` branches are now distinct category-local functions for GEAS, electronics, precalculus, and probability.
- **Scenarios:** scenario implementations used by the effective registry are now category-local and each scenario has an explicit numeric registry row.
- **Registry mechanics:** `registry-core.js` now holds generic numeric entry wrappers, category-neutral array-to-entry helpers, `appendNumericRecipe(...)`, and persisted numerical-generator enable/disable settings. It no longer contains `MANUAL_NUMERIC_SEEDS`, `seedEntries(category)`, `MANUAL_SEED_CATEGORIES`, or the category-switch question dispatchers.
- **UI diagnostics:** the in-test **Show recipe names** checkbox displays a generator's title and recipe key. The bank viewer lists an enabled/disabled **Use** checkbox for every numeric entry. Disabled entries stay visible for inspection but do not enter new numeric single-question draws; they can be re-enabled without editing source code.

The legacy `registerCoreSeedTemplates(...)` block associated with data analysis did not feed the final numerical pool assembled by the prior registry. It was therefore treated as dead, unused legacy data rather than copied into the live bank; the effective registered data-analysis recipes were preserved in `categories/data.js`.

## Verification results

- All JavaScript files pass `node --check`.
- All local script and style references in `index.html` resolve; `seed-factories.js` is no longer referenced or present.
- `node scripts/check-bank.cjs` passes: 20 categories, 970 numerical entries, 800 identification entries, 800 true/false entries, and 570 linked-pair variants; 3,880 numerical samples and 3,880 normalized multiple-choice samples; 420 expansion families force-tested across both variants; 570 linked-pair samples; zero failures.
- A deterministic v4-to-v5 parity comparison matched all 970 registry titles and their generated prompts, answers, and explanations under an identical fixed random draw; no recipe output mismatches were found.
- A separate stress run sampled each numeric entry 100 times, checking 97,000 numerical outputs and 97,000 multiple-choice instances with zero failures.
- Tests additionally check recipe metadata, local storage toggles, and that disabled numeric entries are excluded from numerical single-question selection.
- Full browser UI automation was not completed because the environment blocked local-site browser navigation. The checkbox UI should therefore receive a final manual visual check in a normal browser, including the single-question flow where a debug-toggle re-render must retain the current answer.

## Original staged migration procedure

1. Freeze the prior package as a rollback point and record registry counts and test results.
2. Inventory each core-seed block, supplement name catalog, topic branch, scenario branch, diagram path, and helper call site.
3. Move category-neutral helpers into an explicit shared module; keep category-only formulas and scenarios with their topic.
4. Move each topic's core/supplement/scenario logic into the relevant category module and register it there.
5. Remove category-dispatch logic from registry code after all runtime callers have been moved.
6. Preserve titles, categories, formulas, parameter constraints, formats, diagrams, and logical registry order unless documenting a specific correctness repair.
7. Update `index.html` script order and search for stale names and references.
8. Run syntax checks, registry/multiple-choice checks, deterministic formula assertions, linked-pair tests, and UI checks.
9. Delete the old shared module only after source searches and tests confirm it is no longer used.

## Advantages

- **Discoverability:** a topic's core seeds, additional seeds, scenarios, expansion families, and extras are reviewable in one place.
- **Smaller conceptual surface:** category formula changes no longer require navigating a multi-topic dispatcher.
- **Lower cross-topic change risk:** editing a category recipe is less likely to affect another topic's branch.
- **Better ownership and tests:** topic-local recipes and registry rows can be targeted directly by review and test tooling.
- **Cleaner shared layer:** only truly neutral helpers remain shared, while registry metadata helpers do not choose category math.

## Trade-offs and risks

- **More long category files:** grouping question code by topic can make some topic modules longer, but keeps implementation near the registry row and its names.
- **Classic-script constraints:** shared helpers must load before categories and category functions must avoid duplicate top-level lexical names.
- **Helper-scope risk:** moving a helper can reveal a hidden dependency or function-scope issue, so call sites and local variables need targeted checks.
- **Random output sequences can differ:** factory decomposition changes the order in which random values are drawn. The goal is to preserve formulas, allowed parameters, and question semantics, not the old accidental random transcript.
- **Wide review surface:** core seeds, supplementary recipes, and scenarios cover many concepts; changes should be reviewed category by category when possible.

## Future maintenance rules

- Keep category-specific question formulas and scenario content inside their category module.
- Put shared helpers in `shared-helpers.js` only when they serve multiple categories and have a stable category-neutral purpose.
- Use `numericEntry(...)` or `appendNumericRecipe(...)` so every recipe is inspectable and individually enableable from the bank viewer.
- Keep each recipe's display title and category-local recipe key unique within the category. Registry IDs are assigned by category order and can shift when entries are inserted or removed; use recipe keys for descriptive debugging, not as array indices.
