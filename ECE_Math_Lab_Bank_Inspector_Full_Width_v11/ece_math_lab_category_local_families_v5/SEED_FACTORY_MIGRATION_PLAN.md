# Seed and concept registry migration — v10 completion record

**Status: completed in v10.** The earlier staged plan has now been carried through and generalized: seed-derived question recipes use the same category-local family interface as expansion recipes, concept data is topic-local, and the shared catalog/array-dispatch helpers are no longer used.

## Final architecture

- Each category module holds its own namespace, numeric maker functions, direct numeric registry rows, 40 concept cards, identification/true-false registration, and category-owned tree nodes.
- Every core seed row is an ordinary named function (e.g. `makeAdvancedFamily21()`) plus a direct `numericEntry(...)` row.
- Former supplement/extra/topic seed index dispatchers were decomposed into individual named `VariantA` recipe functions used by generic numbered family makers. No family calls a maker by index.
- All registry entries use stable descriptive `category-family-NN` keys. Legacy disable preferences are mapped to the new keys.
- Removed: `js/concept-bank/catalog.js`, `coreSeedEntries(...)`, `numericFamilyEntries(...)`, `*_CORE_SEEDS`, `*_SUP_NAMES`, `*_EXTRA_NAMES`, and index-based seed-maker functions.

## System differences from v9

1. **Concept ownership:** concept cards are declared in their topic module (40 per category), not read from a global object. The global catalog script is deleted and removed from `index.html`.
2. **Seed-maker API:** no seed maker accepts `index`. Every former branch is now an individually named function. Generic family makers select a local named variant and another same-topic question implementation.
3. **Numeric registry layout:** all rows, including core seed and seed-derived families, appear as direct `numericEntry(...)` entries in `NUMERIC_GENERATOR_REGISTRY.<category>`. There is no spread builder deriving registry rows from name arrays.
4. **Recipe identity:** families use the same `category-family-NN` key convention and generic display labels. Existing stored exclusions are translated to the new family keys.
5. **Family numbering:** core-seed-only categories use families 21–40; categories containing supplements and extras use 21–30 and 31–40; `electronics`, `geas`, `precalc`, and `probability` already had expansion families 21–25, so seed-derived families use 26–35.

## Verification

- 20 categories; 970 numeric, 800 identification, 800 true/false generators; 60 compound roots and 60 children.
- Standard smoke test: 3,880 numeric samples and 3,880 multiple-choice builds; 420 base expansion variants and 200 seed-derived variants checked; zero failures.
- Stress test: 97,000 numeric samples and 97,000 multiple-choice builds; zero failures.
- Extension API: arbitrary tree test passed; cross-category edges, children under non-repeatable parents, and late registrations rejected.
- Catalog load/reference and indexed seed-multiplexer searches are clean.

## Maintenance rules

Keep formulas and concept cards in the category that owns the topic. Use `numericEntry(...)` for each registry row and a unique `NAMESPACE_<CATEGORY>` constant in new classic scripts. Keep `registry-core.js` and `shared-helpers.js` topic-neutral. Load extension scripts before `finalize-registry.js`.
