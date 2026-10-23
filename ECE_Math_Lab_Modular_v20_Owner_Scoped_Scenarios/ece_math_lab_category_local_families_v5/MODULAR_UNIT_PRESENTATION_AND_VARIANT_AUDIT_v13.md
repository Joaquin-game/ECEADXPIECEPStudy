# Modular v13 — unit presentation and numerical-variant audit

## Scope

This change applies to the **modular source project only**. The standalone HTML was intentionally left untouched so it can be updated separately after the modular version is reviewed.

## Unit presentation

- `numericDisplayWithUnit()` now replaces the whole TeX closing token `\\)` before inserting `\\,`, avoiding a duplicated backslash or visible comma in answer choices. The exact regression expected is `\\(12.5\\,\\mathrm{V}\\)`.
- Compound inverse units use fraction notation by default: `m/s` renders as `\\frac{\\mathrm{m}}{\\mathrm{s}}`, and `m^2/s` as `\\frac{\\mathrm{m}^{2}}{\\mathrm{s}}`.
- The accessibility preference can switch inverse dimensions to exponents. Negative exponents now render with explicit parentheses, e.g. `\\mathrm{m}\\,\\mathrm{s}^{\\left(-1\\right)}`.
- `normalizeUnitLatexMarkup()` correctly recognizes compound unit tokens like `m/s`, `m^2/s`, and `N/C`; slash handling in the generated regular expression no longer prevents matching.

## Diagram asset path

`js/core/runtime.js` now owns two editable constants:

```js
const ECE_MATH_LAB_MODULE_BASE_PATH = 'ece_math_lab_category_local_families_v5';
const ECE_MATH_LAB_ASSET_BASE_PATH = `${ECE_MATH_LAB_MODULE_BASE_PATH}/res`;
```

`js/ui/question-renderer.js` builds its diagram path from `ECE_MATH_LAB_ASSET_BASE_PATH`, rather than repeating the module folder name. If the modular source folder is renamed, change the base-path constant in `runtime.js` once.

## Formula, unit, and prompt corrections

- **`electronics-family-07`:** variant A asks for LED current and returns milliamperes using `I=(V_s−V_f)/R`; variant B asks for voltage across the resistor and returns volts using `V_R=V_s−V_f`. They no longer borrow the other variant's formula or answer unit. Both state the supply voltage and LED forward drop, and use the shared resistor datum where needed.
- **`related-family-11`:** square-area rate now uses `dA/dt=2s(ds/dt)` and `m^2/s`; its other variant asks for square area and returns `m^2`.
- **`related-family-12`:** spherical surface-area rate uses `dA/dt=8πr(dr/dt)` and `cm^2/s`; volume rate uses `dV/dt=4πr^2(dr/dt)` and `cm^3/s`.
- **`em-family-07`:** force on a finite wire uses `F=BIℓ` in newtons; force per unit length uses `F/ℓ=BI` in newtons per metre.
- **`laplace-family-16`:** both variants restate the normalized signal, its numerical amplitude and decay rate (including inverse-second units), and the evaluation interval. Variant A asks for the dimensionless signal value; variant B asks for accumulated area in seconds.
- **`convolution-family-12`:** the kernel-value variant is dimensionless; the convolution-contribution variant restates both decay rates and time, uses the difference-of-rates denominator, and returns seconds.
- **`electronics-family-20`:** both variants state the base supply, base resistance and base-emitter drop. The collector-current variant additionally states `β` and the forward-active assumption, and computes `I_C=βI_B`.
- **`geas-family-24`:** the mixing variant explicitly states both masses and temperatures plus equal-specific-heat/no-heat-loss assumptions. The alternate mass-temperature product variant states its own needed mass/temperature inputs and labels its non-energy unit as `kg·Δ°C`.
- **`probability-family-18`:** both variants state `p` and `n`; the answer formulas distinguish at-least-one success from zero successes.
- **`signals-family-06`:** the degree variant now gives the principal phase angle modulo `360°`, avoiding values above a full cycle. The cycle variant continues to report total delay in cycles. This also fixes a potentially misleading title left from an older recipe.

Earlier variant-specific unit/givens fixes remain active, including the additional related-rate, Fourier, controls, signals, Z-transform, calculus, differential-equation, GEAS and electronics family prompts.

## Registry readability

Several bank-inspector titles were inherited from older recipes and no longer described either or both variants. They have been renamed without changing stable recipe keys, including:

- Laplace families 06, 09, 13 and 16;
- Z-transform family 12 and Fourier family 07;
- Signals families 01, 06, 08, 10, 12 and 18;
- Advanced mathematics family 06;
- GEAS families 09, 10, 12–15 and 17–20.

The titles now describe the two related quantities or operations represented by each family rather than one obsolete variant alone.

## Verification

The modular test suite passed after these edits:

- 20 categories; 970 numeric generators; 800 identification; 800 true/false; 2,690 unified registry nodes.
- 3,880 standard numeric samples and 3,880 multiple-choice builds; all 420 expansion-family variants and 200 seed-derived variants checked.
- 60 compound roots and 60 children validated.
- Extension API, category-local architecture, full-width Bank Inspector layout, and JavaScript syntax checks passed.
- Stress run: **97,000 numeric samples and 97,000 multiple-choice builds**, zero reported failures.
- Automated source audit found five remaining “unprovided variable” flags. Manual review identified these as false positives: the quadratic roots can be solved from the displayed equation; economics' `ans` is derived from displayed principal/future value/time or the supplied interest rate; the charge conversion derives microcoulombs from the displayed coulomb value; and the precalculus `y` is solved from the displayed linear equation and given `x`. The targeted tests cover the actual variant dependencies described above.
