# ECE Math Lab v20 — Owner-Scoped Tree Revision

## Implemented changes

### 1. Explicit repeatability at registration
`numericEntry(...)` now reads `treeOptions.repeatable`. Numeric entries remain repeatable by default, while a category author can explicitly register a singular numeric node with `{ repeatable: false }` inside its tree options. The generic `registerQuestionGenerator(...)` already accepts `repeatable`; setup registration now follows the same option shape. Built-in numeric tree nodes remain repeatable because they publish derived information for descendants.

### 2. Primitive owner-scoped transfer values
The built-in contextual trees were audited. Their descendants never consumed the units stored in transferred records; they only consumed the numeric values. Their owner dictionaries therefore now use primitive values directly, e.g. `dataTransferObject[rootKey].V_s`. The explicit `{ value, unit }` form remains supported by the engine for cases where a unit is actually part of the transfer contract.

This removes the unnecessary `.value` access from built-in scenario code without removing unit-aware transfer capability.

### 3. No redundant question classification
`questionClass` is now the single canonical registry/question attribute. The duplicate `classification` property was removed from registry entries, instantiated questions, shared tree records, and debug snapshots.

### 4. Developer inspector
The in-test **Inspect question data** tool now opens as a three-tab developer inspector:

- **Properties** — concise generator metadata and structural properties, excluding learner-facing prompt/choices/numbering/illustrations and transfer data.
- **Data transfer** — received DTO, published owner data, and the post-construction DTO.
- **Full JSON** — the complete serialized developer payload.

The feature remains controlled by the existing checkbox and is off by default.

### 5. Category ownership preserved
No scenario content was moved into `shared-helpers.js`. All setup prompts, variables, quantities, transfer dictionaries, formulas, SVGs, and category-specific logic remain in their corresponding category modules.

## Validation

The following checks pass after the revision:

```text
node --check across js/locales/scripts: PASS
check-bank.cjs: PASS
check-extension-api.cjs: PASS
check-category-local-architecture.cjs: PASS
check-ui-layout.cjs: PASS
```

The bank check exercised 3,880 numeric samples, 3,880 multiple-choice samples, 400 tree stress builds, 1,600 identification/true-false samples, 420 variant families, and 200 seed-family variants.
