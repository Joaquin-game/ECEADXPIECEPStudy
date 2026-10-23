# Owner-scoped Tree Data — v19

## Purpose

Version 18 makes scenario data transfer explicit and reviewable while keeping every scenario in its category module. A category can define multiple independent trees. No scenario-specific prompt, symbol/value, formula, SVG, or tree registration belongs in `js/question-bank/shared-helpers.js`.

## Transfer shape

Each question publishes a dictionary of its own named symbols and quantities under its registered `recipeKey`:

```js
q.transferData = {
  V_s: { value: 12, unit: 'V' },
  R_L: { value: 10, unit: 'Ω' }
};
```

The engine stores each dictionary under its owner key in a high-level object:

```js
{
  'sensor-load-root-v19': {
    V_s: { value: 12, unit: 'V' },
    R_L: { value: 10, unit: 'Ω' }
  },
  'sensor-load-current-v19': {
    I_L: { value: 1.2, unit: 'A' }
  }
}
```

All descendant setup and numeric generators receive the full owner-keyed DTO. A generator should access the source owner directly, for example `dto['sensor-load-root-v19'].V_s.value`, and should preserve `V_s` in its prompt and derivation unless the same symbol would be ambiguous in the new calculation. Do not create flattened aliases such as `x_prev`, and do not reintroduce information already stated by a setup unless that information is intentionally renamed to disambiguate it.

A child may use quantities from any owner included in its incoming DTO: its direct parent, earlier ancestors, or prior calculated nodes whose data was already published at construction time. Every computed quantity that should be available later is published in the child question's own `q.transferData` dictionary.

## Keep all category content local

The category file owns the setup and child factories, registered tree keys/edges, all prompts, variable/quantity dictionaries, formula calculations, worked explanations, SVG strings, and image alt text. Keep the factory close to the registration calls. The registry API should supply validation and tree metadata only; it should not accept lambdas that construct category-specific prompt text or transform category variables.

A setup factory returns a context-only descriptor directly:

- `prompt`: learner-facing situation and its givens;
- `transferData`: every symbol/quantity the setup shares;
- `illustrations`: any number of SVG or image illustrations, each with meaningful alt text.

A setup has no answer or grading data and does not count as an answerable question. A child factory receives the whole DTO as its argument and can declare additional givens and calculated quantities of its own.

## Test/debug inspector

In Practice, enable **Inspect question data** to inspect a constructed question. The details panel displays its question identifiers/classification, its generated properties, the `receivedDataTransferObject` snapshot used when it was constructed, and the dictionary it publishes under its own key. The toggle is unchecked by default. **Show tree structure debug** is a separate toggle for structural diagnostics and also defaults off. Debug labels and DTO content are not part of the ordinary learner-facing prompt.

## Content quality rules

1. State every symbol and relevant unit clearly in the setup where the value is introduced.
2. Preserve parent/ancestor symbols when using transferred quantities; avoid a generic “previous result” variable.
3. Do not re-state givens in every child prompt, and never ask a descendant to calculate a quantity already supplied by an ancestor or already asked and answered earlier in its own branch.
4. Use parent-child edges that match calculation dependency: if a question needs a computed intermediate, the node that publishes that intermediate should be an ancestor.
5. Add new physical or mathematical givens when they deepen the scenario, and publish resulting values so later questions can use them.
6. Explanations and numeric answers must use the same values as the prompts and preserve units and symbol meanings.
7. Any inline SVG should clarify the described setup and include descriptive alt text.

## Verification

From this directory, run:

```sh
find js locales scripts -type f \( -name '*.js' -o -name '*.cjs' \) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
node scripts/check-category-local-architecture.cjs
node scripts/check-ui-layout.cjs
```

The current suite exercises all 20 category trees, 3,880 numeric samples and 3,880 multiple-choice builds, 400 randomized tree builds, transfer-owner schemas, selected formula/content regressions, architecture boundaries, extension registration, and responsive UI layout. Automated tests do not replace a full browser-based visual review.
