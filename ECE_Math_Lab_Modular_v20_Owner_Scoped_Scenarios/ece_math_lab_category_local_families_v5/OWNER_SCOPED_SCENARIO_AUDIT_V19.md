# ECE Math Lab — Owner-Scoped Scenario and DTO Audit (v19)

## Purpose

v19 makes the category-local ownership rule explicit and removes the remaining answer-based dependency path from the built-in registry tree engine. Tree questions communicate through an owner-scoped `dataTransferObject`.

## Authoring rule

All scenario-specific material belongs in `js/question-bank/categories/<category>.js`:

- setup prompt and title;
- numerical givens;
- variable symbols and quantities;
- units;
- formulas and worked explanations;
- `transferData` dictionaries;
- SVG source and SVG alt text;
- tree registration and recipe keys.

`js/question-bank/shared-helpers.js` is category-neutral. It contains no setup factories, compound/scenario registration, tree prompts, scenario SVGs, or category transfer maps.

## DTO shape

A generated question publishes only its own low-level dictionary:

```js
q.transferData = {
  V_s: { value: 12, unit: 'V' },
  R_L: { value: 10, unit: 'Ω' }
};
```

The engine stores it under the question's stable recipe key:

```js
{
  'electronics-load-root-v18': {
    V_s: { value: 12, unit: 'V' },
    R_L: { value: 10, unit: 'Ω' }
  },
  'electronics-load-a-v18': {
    I_L: { value: 1.2, unit: 'A' }
  }
}
```

A descendant receives the entire object. It reads the original quantity from the owner that introduced it:

```js
const root = dataTransferObject['electronics-load-root-v18'];
const V_s = Number(root.V_s?.value);
```

A descendant publishes newly calculated information under its own owner key. This permits a later descendant to combine quantities from several ancestors or siblings without flattening them into one ambiguous dictionary.

## Removed patterns

### `x_prev`

No built-in category generator uses `x_prev`. A quantity keeps the symbol assigned by the question that introduced it. A new symbol is introduced only when the original symbol would be ambiguous in the new calculation.

### Hidden parent-answer transfer

The canonical registry tree no longer injects `parentAnswer`, `parentAnswerExact`, `_dependencyValue`, or a duplicate `parentContext` into category question factories. The owner-scoped DTO is the data-transfer mechanism.

### Compound helper ownership

There is no `attachCompoundScenario` implementation. Scenario setup factories and their children live beside their registration in the category module. Scenario factory names now use `ScenarioSetup`, `ScenarioA`, `ScenarioB`, `ScenarioBA`, and `ScenarioBB` to make their role readable without implying that the framework is limited to one particular tree shape.

## Content audit examples

- **Electronics:** the root establishes `V_s`, `R_L`, and `t`; the current calculation publishes `I_L`, `P_L`, and `E_L`; the nested duty-cycle setup contributes `D` and `P_max`; the final calculation combines the nested setup with the earlier calculated `P_L`.
- **Pre-calculus:** the root establishes raw code `C`, calibration scale `m`, offset `b`, and reference `r_ref`; the first child publishes `u`; the nested display setup contributes `g` and `d_0`; its child publishes `d`; the final child compares `d` with the original `r_ref` without restating the root givens.
- **Calculus:** the root establishes `c`, `T`, and `m`; one branch publishes travel distance `s`, another publishes terminal speed `v_T`; the leaves derive kinetic energy and average speed from those published quantities.
- **Electromagnetism:** the root establishes `q`, `r_1`, `r_2`, `k_e`, and `q_t`; descendants calculate potential, field strength, force, and potential energy while retaining the original physical symbols.
- **Signals:** the root establishes `V_rms`, `f`, and `R`; descendants publish peak voltage and average power, then use those results for peak current and energy per cycle.
- **Z-transform:** the root establishes `A`, `r`, `z_1`, and `z_2`; descendants publish `X_z1` and `X_z2`, then derive their ratio and sum.

The remaining category scenarios follow the same ownership rule: the setup supplies the situation and givens, answerable nodes calculate new information, and later nodes consume owner-scoped results rather than asking for the same quantity again.

## Debugging

Practice mode includes **Inspect question data**, off by default. It shows:

1. the constructed question's identifiers and classification;
2. generated question attributes;
3. the exact owner-keyed `receivedDataTransferObject` snapshot supplied to the factory;
4. the question's own published transfer dictionary.

**Show tree structure debug** remains separate and off by default. Learner-facing presentation does not expose parent/child implementation terminology.

## Validation

v19 validation passes:

- 20 category-local registries;
- 800 identification generators;
- 800 true/false generators;
- 1,048 numeric registry entries;
- 22 setup nodes;
- 20 built-in setup-rooted trees;
- 400 randomized tree stress builds;
- 420 collapsed numeric families;
- 200 seed-derived family variants;
- 3,880 numerical samples;
- 3,880 multiple-choice constructions;
- 1,600 non-numeric samples;
- extension API checks;
- category-local architecture checks;
- UI layout checks;
- JavaScript syntax checks.

`index2.html` is absent from the package.
