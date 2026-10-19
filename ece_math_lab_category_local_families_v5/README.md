# ECE Math Lab — category-local numeric generators (v5)

This package keeps the ECE Math Lab interface and existing test workflows while completing the seed-factory migration. Category-specific numerical recipes now live beside their topic registry; category-neutral helpers have a dedicated shared module. v5 also adds an in-test recipe-name debug switch and per-generator enable/disable controls in the numerical bank viewer. The site still uses **classic scripts loaded in order**, not ES modules, so `index.html` can be opened directly in a modern browser without a bundler or local server. Top-level helpers share a global lexical environment; avoid redeclaring top-level `const`/`let` names across scripts.

## Run it

Open `index.html` in a modern browser. MathJax equation rendering and PNG screenshot export use CDN libraries and therefore need internet access; printing to PDF is the offline fallback.

## What changed in v5

- The old `js/question-bank/seed-factories.js` module and its category-dispatch functions have been removed from the loaded source tree. A deterministic v4-to-v5 sample parity comparison matched all 970 registry titles and their generated prompts, answers, and explanations when both builds used the same fixed random draw. Core seed tables, supplement/extra seed factories, topic-specific additions, and registered scenario recipes now live in the appropriate `js/question-bank/categories/<topic>.js` file.
- Seed recipes enter `NUMERIC_GENERATOR_REGISTRY` as individual numeric entries, with a distinct title, category-local recipe key, bank ID, answer generator, and difficulty. Topic-local factories still use an index where several recipes share an algorithmic family, but there is no shared `switch(category)` choosing a topic's question.
- Category-neutral utilities—including equation-question wrapping, combination/factorial calculations, and diagram attachment—live in `js/question-bank/shared-helpers.js`. `registry-core.js` now contains metadata and registry mechanics only.
- The numerical registry has 970 entries across 20 categories, with at least 48 per category. `complexcalc` has 52 and `calculus` has 54; the other categories have 48 each. The 420 collapsed expansion families remain category-local.
- The test screen has an optional **Show recipe names** checkbox. When enabled, each registered numeric question displays its recipe title and key for debugging; leaving it unchecked keeps the test layout clean.
- The question bank viewer has a **Use** checkbox on every numerical entry. Disabled entries remain visible to inspect and audit, are remembered in local storage by category/recipe key (rather than their order-dependent bank ID), and are excluded from new numerical single-question draws and as numerical parents for custom linked questions. Re-enable them in the same viewer.
- Code review corrected several formula/prompt mismatches in the earlier expansion migration: normalized damping ratio, Z-transform step sample, charge conversion to microcoulombs, and two logarithmic integrals. Deterministic assertions for both family variants remain in the smoke test.

The former `registerCoreSeedTemplates(...)` data block was not a source for the final registry's effective numerical pool, so the migration did not introduce its unused legacy entries. The currently registered data-analysis seed recipes remain present as category-local generators.

See `NUMERIC_EXPANSION_FAMILY_MAP.md` for the 420 expansion-family map, `DEVELOPER_GUIDE.md` for maintenance and UI preferences, and `SEED_FACTORY_MIGRATION_PLAN.md` for the completed migration record and its trade-offs.

## Structure

- `locales/en.js`: category labels, icons, descriptions, and small UI strings.
- `css/style.css`: styling and responsive layout.
- `js/core/runtime.js`: shared runtime utilities, formatting, parser, and app state.
- `js/question-bank/shared-helpers.js`: shared topic IDs and category-neutral math/display helpers used by topic registries.
- `js/question-bank/registry-core.js`: registry primitives, metadata wrappers, recipe append helper, and per-generator enable preferences.
- `js/question-bank/categories/<topic>.js`: category-local core seed tables, seed/supplement factories, scenarios, expansion families, direct registry rows, and category-specific additions.
- `js/question-bank/finalize-registry.js`: enforces the minimum of 48 numeric entries per category, verifies uniqueness, assigns IDs/difficulty, and builds the sampling pool.
- `js/concept-bank/*`: concept catalog and identification/true-false generators.
- `js/linked/*`: linked question pairs and their dependency-aware builder; 570 linked variants remain registered.
- `js/custom/*`: custom-generator storage, validation, expression evaluation, and custom linked chains.
- `js/question-engine/*`: mode normalization, filtering, and test construction.
- `js/ui/*`: controls, question rendering, results, custom builder, bank explorer, and startup wiring.
- `scripts/check-bank.cjs`: Node-based registry, numeric answer, metadata, preference-toggle, concept, and linked-pair smoke test.

## Script order

The exact order is in `index.html`: locale → runtime → shared helpers → registry primitives → the 20 category modules → registry finalizer → concepts → linked pairs → custom-generator system → question engine → UI and startup. Preserve this order unless you update and retest the dependencies.

## Test the source

Run the syntax check and bank smoke test from the project directory:

```sh
find js locales -name '*.js' -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
```

The smoke test samples every numerical generator four times, normalizes each sample to multiple choice and checks its answer key, verifies recipe metadata and enable/disable behavior, deterministically forces both branches of all 420 collapsed expansion families, exercises all 570 linked variants including follow-through dependencies, and checks concept entries. It is a fast regression test, not proof of every mathematical formula or a substitute for checking the rendered UI in a browser.
