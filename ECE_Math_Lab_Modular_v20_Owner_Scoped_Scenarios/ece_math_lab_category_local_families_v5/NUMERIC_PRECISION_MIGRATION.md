# Numeric precision and diagram asset migration

This note describes the precision changes layered onto the modular ECE Math Lab project after the category-local v5 refactor.

## What was wrong

- The old `roundN` display helper rounded ordinary numerical answers to four decimal places. Values smaller than `0.00005` could therefore be rendered as `0`, even when the expected answer was nonzero.
- The prior default absolute tolerance had a minimum around `0.012`, which was too permissive for tiny answers and could accept `0` as correct for a small nonzero target.
- Multiple-choice distractors used a fixed minimum step and rounded to a fixed number of decimal places, so options for small results were not meaningfully scaled.
- Diagram SVG markup was embedded in the renderer, making diagram edits harder to isolate from question UI code.

## Precision layer

`js/core/decimal-precision.js` is a self-contained, project-local decimal arithmetic module using JavaScript `BigInt`; it does not import or fetch a third-party package. It is designed so that the modular app can continue to run as classic scripts without a package manager or bundler.

Supported paths include:

- Base-10 exact addition, subtraction, and multiplication for decimal strings.
- Division rounded to 40 significant digits; exact integer powers; Newton-method square roots.
- Decimal, `e`/`E` notation, TeX forms such as `\times 10^{n}`, multiplication-sign notation such as `×10⁻⁶`, and common SI-prefix forms such as `4.7 μF` or `2.2 kΩ`.
- Scientific or engineering output, selected automatically for very small/large values. The ordinary numeric answer/choice display defaults to four significant digits; generator metadata can set `significantDigits`, `decimalPlaces`, `tolerance`, `toleranceExact`, `absoluteTolerance`, or `relativeTolerance`.
- A value-based answer check: values are compared numerically, so scientific and engineering representations are interchangeable by default. If a generator sets `expectedNotation` to `scientific`, `engineering`, or `decimal`, that notation is checked as an explicit requirement.
- Answer metadata (`answerKind` and `answerSpec`) for numeric, identification/text, and true/false/boolean question kinds, to support a more general question framework.

### Competition prompt and answer formatting (v7)

Randomized decimal givens produced by `rand()` are rounded to three significant digits by `PrecisionDecimal` **before being returned to the category formula**. Numeric choices selected by `pick()` are also rounded to three significant digits. This keeps values easier to enter on a calculator while remaining within the requested 1–4 significant-digit range. Integer givens remain integers. Where a calculated intermediate is supplied as a given to a reverse variant, the rounded displayed value is also the value used by that reverse calculation; targeted cases include feedback gain, settling time, percent overshoot, motional emf, a first-order step fraction, ladder height, transistor current, and Poynting magnitude.

`nfmt()` defaults to four significant digits. Small/large non-currency values use engineering notation at decimal exponents **≤ −3 or ≥ 6**. The key and all numeric answer choices use the same notation selected from the correct answer's magnitude, unless `expectedNotation` explicitly requires `scientific`, `engineering`, or `decimal`. Currency formatting omits `.00` from whole-dollar values, keeps cents for non-integer financial amounts, and uses compact engineering notation for tiny monetary values.

The prompt audit also fixed variants that lacked inputs when selected independently: electromagnetism Family 14 and economics Families 07, 13, 14, 15, 17, and 18, plus clarified negative coordinate signs in precalculus Family 06. Mixed-format economics families now format dollar amounts, ratios, quantities, and percentages according to the task for the selected variant. Recipe labels in controls, electronics, and economics were revised to describe the actual question, and the family map now reflects the labels used by the current registry.

### Operator semantics

The restricted `evalDecimalExpr()` expression reader handles `+`, `-`, `*`, `/`, `^`, parentheses, unary signs, and the listed mathematical functions. It maps expressions to the decimal implementation rather than running arbitrary JavaScript. `*`, `/`, and `^` mean multiplication, division, and mathematical exponentiation; precedence is tested (including `-2^2` and powers of negative exponents). TeX `\times`, `\cdot`, `×`, and `÷` are normalized by the reader.

### Important precision boundary

The central answer pipeline, custom-generator expressions, display, parsing, tolerance comparisons, and multiple-choice distractors now use `PrecisionDecimal` values. However, the existing built-in category recipes still calculate most randomized formulas with JavaScript `Number` and `Math` before they call `qNum()`. Those calculations normally retain double-precision accuracy, and removing display rounding fixes the reported zero-display problem, but the decimal layer cannot recover digits already lost inside a native-`Number` formula. The `sin`, `cos`, `log`, `exp`, and related transcendental functions in the restricted evaluator also use the platform `Math` implementation before converting back to a decimal value. Full arbitrary-precision internal arithmetic for every built-in recipe would require formula-by-formula migration with dedicated regressions; a blind token rewrite would risk changing formula precedence, string concatenation, and `Math.*` semantics, so it was not applied automatically.

## Tolerance policy

- Explicit `absoluteTolerance`, `toleranceExact`, or `tolerance` takes precedence.
- When `decimalPlaces` is specified, the fallback tolerance is half a unit in the final decimal place.
- When `significantDigits` is specified, the fallback tolerance is half of one unit in the last requested significant digit.
- By default, a nonzero target gets a 0.5% relative tolerance. Exact zero uses an absolute `1e-12` tolerance.

For example, for a target of `1e-15`, default tolerance is `5e-18`; the answer `0` does not pass. The policy is intentionally unlike the old fixed `0.012` floor.

## Helpers removed or replaced

- Removed `roundN`, the four-decimal numeric formatter. No current code references remain.
- Removed `parseUserNumber`, which parsed an answer to a JavaScript `Number`; numeric grading now uses `parseUserDecimal` directly.
- Removed `evalExpr`, the number-returning expression wrapper. Custom templates call `evalDecimalExpr` directly for answers and distractors.
- Removed `responseValue`, the unused Number-only response reader. The active dependency flow uses `responseDecimal` and preserves exact decimal strings for custom linked follow-through.
- Replaced the large inline SVG-generation code in `question-renderer.js` with `QUESTION_DIAGRAM_FILES` and a small `<img>` renderer. Removed the now-obsolete inline-SVG-only CSS selectors.
- Kept `nfmt`, `nfmtPlain`, `valueDisplay`, `valueText`, and `grouped` because the renderer, explanation generator, choice labels, or currency display still uses them.

## Standalone SVG files

The 18 source SVG assets now live in `res/diagrams/`: `anovaPlot.svg`, `circuit.svg`, `coneTank.svg`, `dataCompare.svg`, `diodeCircuit.svg`, `feedback.svg`, `filterFlow.svg`, `ladder.svg`, `magnetic.svg`, `motionalEmf.svg`, `motorTorque.svg`, `phasor.svg`, `rcTransient.svg`, `relatedCircle.svg`, `relatedSphere.svg`, `sampleWave.svg`, `spectrum.svg`, and `vector3d.svg`. The code maps each diagram kind to one filename; edit the SVG itself in an SVG-capable editor without changing the UI code, unless a new diagram kind or filename is introduced.

## Regression coverage

`scripts/check-bank.cjs` now asserts high-precision addition/division/integer powers, tiny answer formatting and tolerance, `e`/TeX/superscript scientific parsing, SI prefixes, notation checks, configurable tolerances, and numeric answer metadata. It continues testing all 970 numeric entries, all 420 two-variant expansion families, all 60 same-topic compound trees, the ID/TF bank, and generator enable/disable behavior.
