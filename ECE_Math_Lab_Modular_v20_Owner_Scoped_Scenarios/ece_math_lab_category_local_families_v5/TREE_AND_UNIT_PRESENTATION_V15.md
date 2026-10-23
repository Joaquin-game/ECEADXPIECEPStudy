# Modular v15 — five-node numeric trees and adjustable unit notation

## Scope

This revision is modular-first. It changes the modular project sources and package; the standalone single-file HTML has not been rebuilt in this revision.

## Numeric tree model

Each of the 20 categories registers exactly one compound tree of five nodes directly in `NUMERIC_GENERATOR_REGISTRY` through `appendNumericRecipe()` / `numericEntry()`:

```text
Root
├── Branch A
└── Branch B
    ├── Leaf BA
    └── Leaf BB
```

The tree is one compound question structure per category, not five separate tree variants. The 100 tree nodes are ordinary numeric registry entries: 20 roots and 80 parent-linked descendants. They count toward the numeric bank and inherit the normal numeric answer formats, preferences, metadata, and grading path. The older extra tree variants 2 and 3 are no longer registered.

`numericEntry()` now accepts tree metadata as its optional final argument, and `appendNumericRecipe()` passes that through. Declare a node's parent with `parentRecipeKey`; declare a node's children with `treeChildrenRecipeKeys`. The finalizer resolves recipe keys to canonical IDs and validates reciprocal edges, same-category ownership, repeatability, unique keys, and acyclicity.

The construction is not limited to five nodes. `makeRegistryTreeModule()` walks registered child edges recursively and supports any finite node count, branching factor, or depth. If callers need a constrained preview, they can explicitly supply `maxNodes` or `maxDepth`; omitted limits no longer impose the former 16-node / 8-level cutoffs.

The built-in trees use topic-specific problems with dependent values grounded in the previous node's answer. In particular, the probability tree keeps probability quantities dimensionless and uses the correct independent-trial expressions rather than treating a probability as an event count.

## Unit notation preference

For a compound unit with exactly one distinct denominator term, the renderer now defaults to slash notation:

- `m/s` → `\\mathrm{m}/\\mathrm{s}`
- `m^2/s` → `\\mathrm{m}^{2}/\\mathrm{s}`
- `m/s^2` → `\\mathrm{m}/\\mathrm{s}^{2}`
- `m/(s·A)` represented in the parser's syntax as `m/s*A` → `\\frac{\\mathrm{m}}{\\mathrm{s}\\,\\mathrm{A}}`

The new Practice setting **Use a slash for one denominator unit** controls this preference. It defaults to on, persists under `eceMathLab.units.singleDenominatorSlash`, and when switched off restores fraction-bar notation even for one denominator term. The separate inverse-exponent accessibility preference remains independent and takes precedence when enabled.

## Registry and regression counts

| Item | Expected |
|---|---:|
| Categories | 20 |
| Standalone numeric entries | 970 |
| Direct numeric tree entries | 100 |
| Numeric entries total | 1,070 |
| Identification entries | 800 |
| True/false entries | 800 |
| Unified registry total | 2,670 |
| Five-node tree roots | 20 |
| Parent-linked tree descendants | 80 |

## Validation

The following passed on the modular source:

- `node --check` for JavaScript files in `js`, `locales`, and `scripts`.
- `node scripts/check-bank.cjs`: 4,280 numeric samples, 4,280 multiple-choice builds, 420 expansion-family variants, 200 seed-derived family variants, 1,600 identification/true-false samples, 20 five-node trees, and zero failures.
- `node scripts/check-extension-api.cjs`: nested tree API, cross-category rejection, non-repeatable-parent rejection, and registration closure.
- `node scripts/check-category-local-architecture.cjs`: 20 direct numeric registries, 800 local concept cards, zero failures.
- `node scripts/check-ui-layout.cjs`: inspector layout and responsive filters passed.
- Unit notation assertions for one denominator unit, powered denominator, multiple denominator terms, slash preference on/off, and inverse-exponent mode.
- A synthetic 24-node chain expands fully with no implicit node/depth truncation.

These are code-level and generated-question checks, not a substitute for visually exercising every topic in a browser. The manual browser visual check remains outstanding.
