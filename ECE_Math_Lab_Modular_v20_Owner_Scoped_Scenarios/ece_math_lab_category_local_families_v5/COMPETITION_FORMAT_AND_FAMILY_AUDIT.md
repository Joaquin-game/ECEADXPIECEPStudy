# Competition Format and Family Audit (precision policy retained through v9)

## Goals

This update makes the question bank easier to use under calculator-based competition conditions: numerical givens are short enough to enter, the answer key and answer choices use a consistent notation, and a randomly selected variant supplies every value needed to solve it independently.

## Givens and significant digits

- `rand(a, b)` uses the project-local `PrecisionDecimal` helper for interpolation and rounds decimal givens to **3 significant digits before returning them to the question formula**. This avoids treating a formatted value as though the unrounded source had been stated to the student.
- `pick()` applies the same 3-significant-digit rule to a selected numeric option. Integer generation (`ri()`) remains integral.
- Values derived from a calculation and then stated as a given in a reverse-calculation variant are rounded first; the inverse answer uses that same rounded value. The audited cases include closed-loop gain, settling time, percent overshoot, motional emf, first-order step fraction, ladder height, transistor current, and Poynting magnitude.
- Numeric display defaults to **4 significant digits**. The answer key and numerical multiple-choice options select the same notation from the magnitude of the correct answer. Engineering notation is chosen when the decimal exponent is at or below −3 or at or above 6; otherwise ordinary decimal notation is preferred. A spec can explicitly request `scientific`, `engineering`, or `decimal` format.
- Whole-dollar currency values omit redundant `.00`; non-integer financial amounts retain cents. Small nonzero money amounts can be shown in compact engineering notation.

## Independently solvable variants reviewed

All variants are generated independently, so language like “for the same circuit” cannot rely on seeing another variant first. The following incomplete or ambiguous prompts were revised:

- **Electromagnetism Family 14:** explicitly asks the student to express the stated charge in microcoulombs; its conversion uses the integer microcoulomb amount directly, avoiding a binary-floating-point artifact. The energy variant retains its voltage and asks for the energy.
- **Engineering Economics Family 07:** states the investment and first-year savings in the percent-savings variant.
- **Engineering Economics Family 13:** states the nominal return and inflation rate and labels the real-return calculation as an approximation.
- **Engineering Economics Family 14:** explicitly states production volume and asks for total cost in the cost variant; result formats distinguish currency from break-even units.
- **Engineering Economics Family 15:** includes revenue and operating cost before asking for operating profit; the other variant is formatted as a percentage margin.
- **Engineering Economics Family 17:** states equipment cost and useful life and clarifies the annualized-cost assumption; the alternative capital-recovery calculation supplies its own interest and salvage conditions.
- **Engineering Economics Family 18:** states loan principal, rate, and term before asking for the equal annual payment.
- **Precalculus Family 06:** negative circle-center coordinates are parenthesized so `x-(-a)` is not displayed as an ambiguous `x--a`.
- **Electromagnetism Family 16:** each loop-related variant restates the area and magnetic field; the torque variant states the current as well.

The audit also checked earlier warnings about variants whose wording included “same,” “that,” or similar references. The remaining cases were verified as self-contained because they repeat the needed values in the selected prompt. In particular, the Fourier, signals, relativity, data-analysis, and probability warnings do not rely on another unseen variant.

## Other correctness and presentation fixes

- Reverse-calculation variants use rounded displayed intermediates as their inputs (including the controls, motional-emf, first-order-response, related-rates, electronics, and electromagnetic cases named above).
- Mixed-format economics variants now show percentages, quantities, ratios, currency, and break-even counts in the format relevant to that task.
- The generated future amount in Economics Family 20 is rounded to four significant digits before the growth/time equation uses it.
- Recipe titles for controls, ECE electronics, and engineering economics were corrected where the old title described a different concept than the generated question. `NUMERIC_EXPANSION_FAMILY_MAP.md` now follows the active registry labels.
- LaTeX thin-space sequences in category prompt strings were escaped properly so units render with the intended spacing.
- `scripts/check-bank.cjs` now includes focused tests for decimal-safe rounding, prompt completeness, format selection, and the reviewed variants.

## Validation

The v7 precision layer carried forward into v8; the v8 tree/unified-registry checks passed:

- JavaScript syntax checks for all files under `js/`, `locales/`, and `scripts/`.
- Root entry-point check: **49/49** local script and stylesheet references resolved; the 18 standalone SVGs were also XML-validated.
- Standalone SVG XML validation: **18/18** diagram SVG files valid.
- Standard v8 question-bank check: **20** categories, **970** ordinary numeric generators, **800** identification generators, **800** true/false generators, **60** same-topic compound trees / **120** tree nodes, **3,880** numeric samples, **3,880** multiple-choice builds, **420** collapsed family variants checked, **1,600** nonnumeric samples checked, **0** failures.
- Higher-volume v8 stress run: **97,000** numeric samples and **97,000** multiple-choice builds, all **420** family variants and **60** same-topic tree variants checked, **1,600** nonnumeric samples checked, **0** failures.
- ZIP archive integrity checked after packaging.

## Precision boundary

The project-local `PrecisionDecimal` helper remains in use. Randomized givens, displayed answers, notation parsing, configured tolerances, and selected calculations use it, but many existing topic-specific formulas still perform calculations with native JavaScript `Number` and `Math`. This package does **not** claim every built-in formula is arbitrary precision. Each formula should be migrated separately with tests for precedence, units, inverse variants, and transcendental approximation rather than blindly replacing operators across category code.


## v9 Question-tree and T/F policy addendum

The current registry makes each true/false prompt a positive assertion about one concept and that same concept's definition. **All currently generated T/F statements are keyed True**; `False` remains a selectable response and is graded wrong. This is explicitly a temporary policy, not a claim that the current T/F exam has balanced factual polarity. The former “describes” versus “does not describe” wording split and cross-concept definition combination have been removed.

Compound questions are modeled as generic nodes, not as a special linked-pair classification. The 60 built-in roots and 60 children live in topic registry files, and the generic module builder has a separate test fixture for a root with two siblings and one deeper descendant. New category-local scripts may register nodes before the registry finalizer; `registerQuestionChild()` attaches arbitrary-depth same-category children to repeatable parents.

The v9 code-level validation reports 2,690 unified nodes, 970 numeric generators, 800 identification generators, 800 true/false generators, 420 expansion-family variant checks, 200 seed/supplement/extra family variant checks, and 60 built-in tree samples with zero bank-test failures. The synthetic branching test checks tree depth, siblings, direct parent IDs, computed dependency answers, and shared data. Browser visual automation remains a separate manual QA task.


## v10 category-local registry migration

- Removed `js/concept-bank/catalog.js` from the active source tree and from `index.html`. Each of the 20 topic modules now declares its own 40 concept cards and registers identification/true-false generators from that local array. The total remains 800 concept cards.
- Split every indexed supplement, extra-seed, and topic-seed dispatcher into individual named recipe functions. These implementations use family-variant names (for example, `makeProbabilityFamily26VariantA(title)`) instead of being called through `makeProbabilityTopicSeed(index)`.
- Converted all 160 core seed-template rows into named family functions 21–40, and converted all 200 seed-derived family wrappers to generic numbered family makers. Registry rows use direct `numericEntry(...)` calls; `numericFamilyEntries(...)`, `coreSeedEntries(...)`, seed name arrays, and index-based seed dispatchers are gone.
- Normalized registry keys to `category-family-NN`. Old browser preferences stored under legacy seed keys are translated to the corresponding current family key. Re-enabling a generator also clears any legacy exclusion that maps to it.
- Categories with base expansion families 21–25 (`electronics`, `geas`, `precalc`, `probability`) use family numbers 26–35 for their 10 seed-derived family makers. Categories with supplement and extra recipes use 21–30 and 31–40; core-seed-only categories use 21–40 for their standalone recipes.
- Verification: syntax tests, bank smoke tests, extension API tests, and a 100-sample-per-generator stress test passed. The final run checked 97,000 numerical samples and 97,000 multiple-choice builds, 420 base expansion-family variants, 200 seed-derived family variants, 800 identification generators, 800 true/false generators, and all 60 compound trees with zero failures.
