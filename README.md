# ECE Math Lab — Modular Question Trees v11

Open `index.html` to run the modular ECE Math Lab in a browser. `index2.html` is the older monolithic snapshot kept for reference; it is not the active source.

The modular application currently registers 2,690 question nodes across 20 categories: 970 numeric generators, 800 identification generators, 800 true/false generators, and 60 built-in compound trees (60 roots and 60 children). Tree structure is generic: a repeatable node may have multiple children, and children may themselves branch. Each category owns its generator implementations in `ece_math_lab_category_local_families_v5/js/question-bank/categories/`.

## Key architecture carried forward from v10

- Current T/F policy: statements are all keyed True; False is available as an incorrect response. False-statement authoring is intentionally deferred.
- Core seed, supplement, extra, topic-seed, and expansion recipes now use the same category-local numeric family interface and direct `numericEntry(...)` registry rows.
- Each category owns its 40 identification/true-false concept cards; `catalog.js` is removed.
- Legacy question-disable preferences are mapped to normalized `category-family-NN` keys.
- Identification and true/false entries are singular and non-repeatable.
- Tree selection maintains history separately from visit counts and supports roots, child descent, and sibling traversal.
- The bank explorer has per-node enable/disable controls and a hideable SVG tree visualizer.
- New extension scripts can register nodes before `finalize-registry.js`; `registerQuestionChild()` supports arbitrary-depth same-category trees.
- All 18 question diagram SVGs remain separate editable files.

## Run tests

From `ece_math_lab_category_local_families_v5/`:

```sh
find js locales scripts \( -name '*.js' -o -name '*.cjs' \) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
node scripts/check-category-local-architecture.cjs
node scripts/check-ui-layout.cjs
```

See `ece_math_lab_category_local_families_v5/CATEGORY_LOCAL_GENERATOR_REGISTRY_V10.md` and `ece_math_lab_category_local_families_v5/README.md`, `QUESTION_TREE_AND_UNIFIED_REGISTRY.md`, and `DEVELOPER_GUIDE.md` for architecture, extension examples, and verification details.

## Layout update in v11

The question-bank inspector is now a separate, full-width section below the Practice content. Its category/class filters, generator enable switches, registry audit, and tree visualizer integrations are unchanged; the controls reflow for tablet and mobile widths.
