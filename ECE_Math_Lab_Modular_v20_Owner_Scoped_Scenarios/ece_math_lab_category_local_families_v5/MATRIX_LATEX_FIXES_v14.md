# Matrix LaTeX fixes — modular v14

## What was malformed

Several matrix strings emitted a single backslash between rows where LaTeX needs the `\\` row terminator. The source is a JavaScript template string, so the two output backslashes must be represented by four backslashes in the JavaScript source.

Corrected cases:

- **Advanced two-sensor calibration matrix:** both the coefficient matrix and right-hand-side column vector now use correctly escaped row terminators; the gain/offset vector does as well.
- **Advanced 2×2 determinant:** the second row is separated by the proper escaped terminator.
- **Data-analysis 3×2 chi-square table:** the row joiner now produces two literal backslashes between rows. The previous one-backslash string was not a valid matrix row separator.

The other matrix uses in `precalc.js`, `vector.js`, the 2×2 chi-square families, and the advanced-math registry were inspected. Their row separators already emitted valid TeX and were left unchanged.

## Regression coverage

`node scripts/check-bank.cjs` now validates every sampled numerical prompt and explanation that includes a matrix/array environment. It rejects control characters caused by unescaped commands, unmatched `\\begin`/`\\end` pairs, missing multi-row separators, and inconsistent column counts. It explicitly tests the calibration and determinant matrix registry entries and the generated 3×2 data-analysis table, including the exact three-row count.

Validation passed:

- Standard bank check: 3,880 numeric samples and 3,880 multiple-choice builds; zero failures.
- Stress bank check: 97,000 numeric samples and 97,000 multiple-choice builds; zero failures.
- All 420 expansion-family and 200 seed-family variants checked.
- Extension API, category-local architecture, and Bank Inspector layout regression tests passed.
- All JavaScript files passed `node --check`.

## Standalone

`ECE_Math_Lab_Standalone_v14_Matrix_LaTeX_Fixes.html` was rebuilt from the corrected modular entry point, inlining the corrected category modules, styles, MathJax, html2canvas, icons, and all 18 SVG diagrams. It contains the same matrix fixes and test-verified generator source. No end-to-end visual browser run was available during this build, so matrix rendering should still be visually spot-checked in Chrome.
