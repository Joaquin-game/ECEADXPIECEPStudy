# Category-local numeric and concept registries — v10

## What changed

### Concepts are owned by their category

Each of the 20 category modules now contains exactly 40 authored terminology/definition cards in a local `<CATEGORY>_CONCEPT_CARDS` array. The module passes that array to `registerConceptGeneratorsForCategory(NAMESPACE_<CATEGORY>, <CATEGORY>_CONCEPT_CARDS)`. Identification and true/false question entries are still created through the unified question registry, but their source content is colocated with the matching subject.

`js/concept-bank/catalog.js` has been deleted and its `<script>` tag removed from the active root `index.html`. No runtime `CONCEPTS` global is required.

### Numeric seed recipes use the family model

Every core-seed template has become an individually named function and a direct registry entry. For example, a former advanced core seed is now `makeAdvancedFamily21()` and its row is a normal `numericEntry('advanced', ..., 'advanced-family-21', () => makeAdvancedFamily21())` call.

The former index-driven supplement, extra-seed, and topic-seed functions have been split into individual recipe functions. These have family-variant names such as `makeProbabilityFamily26VariantA(title)` and are selected by the generic family maker `makeProbabilityFamily26(title)`. No seed recipe is dispatched through `maker(index)` anymore.

All 200 seed-derived family makers are listed directly in the category's `NUMERIC_GENERATOR_REGISTRY` array by ordinary `numericEntry(...)` calls. The former `numericFamilyEntries(...)` and `coreSeedEntries(...)` builders, all seed name arrays, and all core seed arrays are removed. This makes the numeric entries structurally uniform with the base expansion families.

### Numbering and saved preferences

- Core-seed-only categories use family keys 21–40.
- Categories containing both supplements and extra recipes use 21–30 and 31–40.
- `electronics`, `geas`, `precalc`, and `probability` have 25 base expansion families, so their 10 additional family makers use 26–35.
- Disabled generator preferences written under legacy seed keys are mapped to the equivalent `category::category-family-NN` key. Re-enabling a mapped family also clears its old key so an earlier stored exclusion cannot keep it disabled.

## What did not change

The system still has 20 categories, 970 numeric registry entries, 800 identification entries, 800 true/false entries, and 60 compound roots with 60 child nodes (2,690 unified nodes). Numeric question format, identification/true-false classification, repeatability rules, arbitrary-depth tree construction, precision formatting, and same-topic parent/child context remain intact.

## Validation performed

- JavaScript syntax checks for source, locales and scripts.
- All 50 script/style paths in `index.html` verified; no catalog path remains.
- Standard bank test: 3,880 numeric samples, 3,880 multiple-choice builds, all 420 base expansion variants, all 200 seed-derived variants, 1,600 identification/true-false samples, 60 compound trees; zero failures.
- Stress test: 97,000 numeric samples and 97,000 multiple-choice builds; zero failures.
- Extension API test: arbitrary branching accepted; cross-category child attachment, children under non-repeatable parents, and registrations after finalization rejected.
