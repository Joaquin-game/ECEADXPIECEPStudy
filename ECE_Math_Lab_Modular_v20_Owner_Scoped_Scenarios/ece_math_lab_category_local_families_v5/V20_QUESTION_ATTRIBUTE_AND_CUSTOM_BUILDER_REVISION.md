# v20 Question Attribute, Identification, and Custom Builder Revision

## Identification MC fix

Identification multiple-choice distractors now receive their concept pool explicitly from the category-local concept array. `format-normalization.js` no longer reads a global `CONCEPTS` object. Each category's `registerConceptGeneratorsForCategory()` supplies its own concept cards to the identification registry entries.

## Canonical question attributes

- `recipeName` is the canonical human-readable generator/recipe name. `generatorTitle` was removed.
- `recipeKey` is the canonical machine key for the generator and the owner scope of published transfer data. `dataTransferOwnerKey` was removed.
- `treeRootId` is the canonical tree-instance/group identifier. `treeGroupId` was removed. Compound-tree instances receive a unique `treeRootId`; descendants inherit it.
- `tolerance` is the sole tolerance property. The exact decimal text is stored in `tolerance` so high-precision tolerances are not lost. `toleranceExact` was removed.
- `questionClass` is the canonical question classification. `answerKind` was removed; numeric/text/boolean answer metadata remains in `answerSpec` where appropriate.

## Transfer data

Tree transfer dictionaries remain owner-scoped:

```js
{
  "electronics-load-root-v18": {
    "V_s": 12,
    "R_L": 10
  }
}
```

Primitive values are preferred when descendants only need a value. A `{ value, unit }` record remains valid when unit metadata is part of the transfer contract.

## Custom question builder

The visual builder now exposes the current developer-facing question properties relevant to custom generators:

- difficulty
- repeatability
- recipe key
- parent recipe key
- child recipe keys
- published transfer data
- illustrations, including required SVG alt text
- setup/context-only question mode
- existing numeric, identification, and true/false settings

The JSON editor accepts the same declarative fields. Setup generators are answerless and do not count toward a question total.

## Setup presentation

The applicable answerable-question range is now placed at the beginning of the setup question's visible prompt rather than being presented only as secondary metadata.
