# ECE Math Lab — Category-Local Scenario and DTO Audit (v20)

## Scope

v20 tightens the owner-scoped tree authoring contract and audits the existing contextual trees. Scenario-specific code remains entirely inside each category module. `shared-helpers.js` contains no compound-scenario/setup content.

## Category-local ownership

Every setup generator owns, in one function, its prompt, givens, variable symbols, transfer dictionary, illustrations, SVG source, and alt text. The tree registration immediately below the generator only supplies generic graph metadata (`parentRecipeKey` and `treeChildrenRecipeKeys`). No category-specific prompt/quantity transformation is delegated to a shared helper.

Each numeric tree generator likewise lives beside its registration and receives the complete owner-keyed DTO as its first argument.

## Owner-scoped DTO

Each node publishes one low-level dictionary under its own recipe key. Primitive values are preferred when descendants only need the value:

```js
q.transferData = {
  V_s: 12,
  R_L: 10
};
```

An explicit `{ value, unit }` record remains supported when unit metadata is needed by a descendant or otherwise belongs to the transfer contract.

The constructed tree accumulates these dictionaries in the high-level DTO. A descendant reads the original symbol from the owner that introduced it. There is no flattened alias and no generic previous-answer symbol. A derived quantity receives its own symbol only when it represents a genuinely new quantity, or when a symbol collision would otherwise make the prompt ambiguous. Child generators should read primitive values directly (`dto[ownerKey].V_s`) rather than through `.value` when no unit record is required.

The inspector exposes three useful layers: the exact DTO received before construction, the node's own published dictionary, and the post-construction DTO after the node has published its values.

## Content rules applied to the scenario audit

1. A setup may publish any number of quantities; the registry does not restrict it to one value.
2. Setup quantities are declared directly in the setup factory.
3. Child prompts do not restate setup givens unless a symbol is intentionally renamed to avoid ambiguity.
4. A child does not ask for a quantity that was already supplied or already calculated.
5. A child may add new givens or derive a new quantity and publish it for later descendants.
6. Original physical symbols are preserved through the tree; `x_prev` is not used by built-in category generators.
7. Multiple independent tree roots remain supported within one category.
8. Learner-facing text does not expose implementation terms such as parent/child node; structural labels remain debug-only.

## Reviewed examples

- **Advanced mathematics:** the setup owns the calibration matrix coefficients; one branch derives its determinant and another its trace; later nodes combine those derived values.
- **Calculus:** the setup owns `c`, `T`, and `m`; one branch publishes travel distance, another terminal speed, and the leaves derive kinetic energy and average speed without asking for the original givens again.
- **Electronics:** the root owns `V_s`, `R_L`, and `t`; the load calculation publishes `I_L` and `P_L`; a nested setup introduces duty fraction `D` and rating `P_max`; the final calculation combines `D`, `P_L`, and `P_max`.
- **Pre-calculus:** the root owns `C`, `m`, `b`, and `r_ref`; the first calculation publishes `u`; the nested display setup owns `g` and `d_0`; its descendant publishes `d`; the final calculation compares `d` with the already-given `r_ref` without restating the root data.
- **Signals:** the root owns `V_rms`, `f`, and `R`; descendants derive peak voltage, average power, peak current, and one-cycle energy.
- **Z-transform:** the root owns `A`, `r`, `z_1`, and `z_2`; two branches evaluate the transform at the stated points, and later nodes use those two owner-scoped results.

## Validation expectation

Run the source checks from the project directory:

```sh
find js locales scripts -type f \( -name '*.js' -o -name '*.cjs' \) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
node scripts/check-category-local-architecture.cjs
node scripts/check-ui-layout.cjs
```

The v20 audit additionally checks that no active category or shared helper contains `x_prev` or `attachCompoundScenario`, every setup has category-local transfer data, and the inspector exposes the received and post-construction DTO snapshots.


## Follow-up regression: sibling owner dependencies

The first-generation v20 tree edges placed both initial calculations below the same setup. Some later generators read data published by both siblings, which only worked when a full tree was generated in traversal order. To enforce this audit's rule that all used data already belongs to the constructed ancestor path, category-local registrations were reordered so Calculation A precedes Calculation B, which precedes the two follow-ups; the two nested-setup scenarios place their nested setup after Calculation A as well. No transfer data was moved to a global helper. `scripts/check-bank.cjs` now builds every registered tree node using ancestors only and verifies that the received DTO contains no sibling owners. See `SIBLING_DTO_REGRESSION_FIX_V20.md`.
