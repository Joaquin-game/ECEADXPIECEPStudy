# v20 sibling-data dependency and identification-choice fix

## What caused the failures

Several compound scenarios registered the first calculations `A` and `B` as siblings under the setup. A later calculation (usually `BA` or `BB`) read data published by both `A` and `B`. During full-tree expansion, the builder happened to instantiate `A` before `B` and its descendants, so the DTO happened to contain both owners. But the test selector is allowed to descend a path without instantiating unrelated siblings. In that case, the referenced owner's dictionary was missing, leading to `undefined`, `NaN`, or a generator error.

## Graph correction in category-local files

The 18 standard five-node trees now register as:

```text
setup root
└── Calculation A
    └── Calculation B
        ├── Follow-up A
        └── Follow-up B
```

Electronics and Pre-calculus preserve their nested setup, but that setup now follows Calculation A so every calculation depending on A receives its published owner data before it is constructed:

```text
setup root
└── Calculation A
    └── nested setup
        └── Follow-up A
            └── Follow-up B
```

These are registration/edge changes in each category file. Existing calculation formulas and each node's own `transferData` remain category-local and are not duplicated into a global helper. This makes data producer nodes ancestors of all consumers that need their data. Child DTOs now remain valid even if any non-ancestor sibling is absent.

## Regression test for the actual failure mode

`scripts/check-bank.cjs` now constructs every registered tree node by walking only its true ancestor chain. For each construction it asserts that the received DTO contains exactly the previously constructed ancestor owners—no sibling owner keys—and that the setup or numeric generator produces a valid descriptor/finite answer. This test is intentionally separate from full-tree expansion, because full-tree expansion can hide the ordering bug.

Latest check totals:

- 20 category tree roots and 80 descendants audited.
- 262 ancestor-only node construction steps completed successfully (shared prefixes are deliberately rebuilt for each target path).
- 3,880 numeric answer samples and 3,880 numeric multiple-choice constructions passed.
- 800 identification multiple-choice constructions passed.
- 400 full-tree stress builds passed.
- Zero failures in the bank suite.

## Identification multiple-choice distractors

`buildChoices()` now picks exactly three distinct wrong terms from the generator's category-owned concept pool, excluding the correct term. It never inserts `All of these`, `None of these`, or `Insufficient information`. A category pool that cannot provide three unique distractors produces an explicit developer error rather than silently substituting generic options. The registry-backed identification path now passes `spec.choiceConcepts` to `buildChoices()` as the numeric normalization path already did.

## Fill-in-the-blank unit preference

The `unitHint` template literal now escapes both `\(` and `\)` at the JavaScript source level, so the DOM receives true MathJax inline delimiters around the formatted unit instead of plain text. `check-ui-layout.cjs` asserts that the delimiters remain escaped in source, and the renderer continues to call `renderMath()` after rendering the question list.

## Files touched

- `js/question-bank/categories/*.js` — owner-scoped tree edge registrations only.
- `js/question-engine/format-normalization.js` — distractor construction.
- `js/question-engine/question-tree.js` — pass category-local concept cards into identification MC construction.
- `js/ui/question-renderer.js` — escaped inline-math delimiters for unit hints.
- `scripts/check-bank.cjs` — ancestor-only DTO and identification-choice regressions.
- `scripts/check-ui-layout.cjs` — unit-hint delimiter assertion.
