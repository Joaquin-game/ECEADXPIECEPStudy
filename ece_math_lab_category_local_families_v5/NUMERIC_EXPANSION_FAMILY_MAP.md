# Numeric expansion family map

This map is generated from the explicit family registry rows in `js/question-bank/categories/*.js`. Each factory and its `numericEntry(...)` row are in the same category file. Family numbers are one-based and match the function suffix (`Family01`, `Family02`, etc.). The factory randomly selects one of the two task variants each time it is called.

## Registry-count summary

| Category | File | Expansion families | Total registered numeric generators |
|---|---|---:|---:|
| `laplace` | `js/question-bank/categories/laplace.js` | 20 | 48 |
| `ztrans` | `js/question-bank/categories/ztrans.js` | 20 | 48 |
| `fourier` | `js/question-bank/categories/fourier.js` | 20 | 48 |
| `convolution` | `js/question-bank/categories/convolution.js` | 20 | 48 |
| `controls` | `js/question-bank/categories/controls.js` | 20 | 48 |
| `signals` | `js/question-bank/categories/signals.js` | 20 | 48 |
| `complexcalc` | `js/question-bank/categories/complexcalc.js` | 20 | 52 |
| `ode` | `js/question-bank/categories/ode.js` | 20 | 48 |
| `vector` | `js/question-bank/categories/vector.js` | 20 | 48 |
| `calculus` | `js/question-bank/categories/calculus.js` | 20 | 54 |
| `related` | `js/question-bank/categories/related.js` | 20 | 48 |
| `relativity` | `js/question-bank/categories/relativity.js` | 20 | 48 |
| `advanced` | `js/question-bank/categories/advanced.js` | 20 | 48 |
| `em` | `js/question-bank/categories/em.js` | 20 | 48 |
| `econ` | `js/question-bank/categories/econ.js` | 20 | 48 |
| `data` | `js/question-bank/categories/data.js` | 20 | 48 |
| `geas` | `js/question-bank/categories/geas.js` | 25 | 48 |
| `electronics` | `js/question-bank/categories/electronics.js` | 25 | 48 |
| `precalc` | `js/question-bank/categories/precalc.js` | 25 | 48 |
| `probability` | `js/question-bank/categories/probability.js` | 25 | 48 |

**Totals:** 420 expansion families, 970 numerical registry entries, 20 categories, and at least 48 numeric generators in each category.

## Family implementations by category

### `laplace` — `js/question-bank/categories/laplace.js` (20 families)
- **Family 01:** Exponential shift rule — `LaplaceExpansionFamily01`
- **Family 02:** Power-function transform — `LaplaceExpansionFamily02`
- **Family 03:** Sine transform evaluation — `LaplaceExpansionFamily03`
- **Family 04:** Cosine transform evaluation — `LaplaceExpansionFamily04`
- **Family 05:** Frequency-shifted sine — `LaplaceExpansionFamily05`
- **Family 06:** Time-multiplication property — `LaplaceExpansionFamily06`
- **Family 07:** Final-value theorem — `LaplaceExpansionFamily07`
- **Family 08:** Initial-value theorem — `LaplaceExpansionFamily08`
- **Family 09:** Inverse simple-pole transform — `LaplaceExpansionFamily09`
- **Family 10:** Inverse transform of a ramp term — `LaplaceExpansionFamily10`
- **Family 11:** Partial-fraction inverse pair — `LaplaceExpansionFamily11`
- **Family 12:** Repeated-pole inverse pair — `LaplaceExpansionFamily12`
- **Family 13:** Delayed pulse transform — `LaplaceExpansionFamily13`
- **Family 14:** Step response of a first-order ODE — `LaplaceExpansionFamily14`
- **Family 15:** Sinusoidal time multiplication — `LaplaceExpansionFamily15`
- **Family 16:** Damped oscillation response — `LaplaceExpansionFamily16`
- **Family 17:** Derivative transform property — `LaplaceExpansionFamily17`
- **Family 18:** Accumulation transform property — `LaplaceExpansionFamily18`
- **Family 19:** Periodic pulse train — `LaplaceExpansionFamily19`
- **Family 20:** Equation-selection transform pair — `LaplaceExpansionFamily20`

### `ztrans` — `js/question-bank/categories/ztrans.js` (20 families)
- **Family 01:** Causal exponential sequence — `ZtransExpansionFamily01`
- **Family 02:** Delayed unit-step transform — `ZtransExpansionFamily02`
- **Family 03:** Delayed impulse transform — `ZtransExpansionFamily03`
- **Family 04:** Weighted exponential sequence — `ZtransExpansionFamily04`
- **Family 05:** Finite-sequence transform — `ZtransExpansionFamily05`
- **Family 06:** Difference-equation transfer function — `ZtransExpansionFamily06`
- **Family 07:** Inverse transform sample — `ZtransExpansionFamily07`
- **Family 08:** Time-shift property — `ZtransExpansionFamily08`
- **Family 09:** Step-sequence transform — `ZtransExpansionFamily09`
- **Family 10:** Pole and decay analysis — `ZtransExpansionFamily10`
- **Family 11:** Second difference — `ZtransExpansionFamily11`
- **Family 12:** Impulse response sample — `ZtransExpansionFamily12`
- **Family 13:** Steady-state step response — `ZtransExpansionFamily13`
- **Family 14:** Geometric tail sum — `ZtransExpansionFamily14`
- **Family 15:** Sequence norm — `ZtransExpansionFamily15`
- **Family 16:** Initial-value recurrence — `ZtransExpansionFamily16`
- **Family 17:** Difference equation value — `ZtransExpansionFamily17`
- **Family 18:** Finite sequence energy — `ZtransExpansionFamily18`
- **Family 19:** Geometric sequence sum — `ZtransExpansionFamily19`
- **Family 20:** Stability and region of convergence — `ZtransExpansionFamily20`

### `fourier` — `js/question-bank/categories/fourier.js` (20 families)
- **Family 01:** Two-sided exponential transform — `FourierExpansionFamily01`
- **Family 02:** One-sided exponential spectrum — `FourierExpansionFamily02`
- **Family 03:** Rectangular-pulse transform — `FourierExpansionFamily03`
- **Family 04:** Frequency-period conversion — `FourierExpansionFamily04`
- **Family 05:** Rectangular-pulse energy — `FourierExpansionFamily05`
- **Family 06:** Sinusoidal average power — `FourierExpansionFamily06`
- **Family 07:** Fundamental angular frequency — `FourierExpansionFamily07`
- **Family 08:** DC Fourier coefficient — `FourierExpansionFamily08`
- **Family 09:** Power ratio in decibels — `FourierExpansionFamily09`
- **Family 10:** Spectrum magnitude — `FourierExpansionFamily10`
- **Family 11:** FM bandwidth — `FourierExpansionFamily11`
- **Family 12:** Fourier-series harmonic — `FourierExpansionFamily12`
- **Family 13:** Rectangular-pulse first zero — `FourierExpansionFamily13`
- **Family 14:** Energy spectral relation — `FourierExpansionFamily14`
- **Family 15:** Sinusoidal RMS quantity — `FourierExpansionFamily15`
- **Family 16:** Frequency-scaling property — `FourierExpansionFamily16`
- **Family 17:** Derivative amplitude spectrum — `FourierExpansionFamily17`
- **Family 18:** Time-delay phase shift — `FourierExpansionFamily18`
- **Family 19:** Gaussian spectrum value — `FourierExpansionFamily19`
- **Family 20:** Parseval energy comparison — `FourierExpansionFamily20`

### `convolution` — `js/question-bank/categories/convolution.js` (20 families)
- **Family 01:** Two-tap discrete convolution — `ConvolutionExpansionFamily01`
- **Family 02:** Geometric-sequence convolution — `ConvolutionExpansionFamily02`
- **Family 03:** Exponential with unit step — `ConvolutionExpansionFamily03`
- **Family 04:** Step with step — `ConvolutionExpansionFamily04`
- **Family 05:** Ramp with unit step — `ConvolutionExpansionFamily05`
- **Family 06:** Two exponential responses — `ConvolutionExpansionFamily06`
- **Family 07:** Impulse identity — `ConvolutionExpansionFamily07`
- **Family 08:** First discrete convolution sample — `ConvolutionExpansionFamily08`
- **Family 09:** Three-tap moving average — `ConvolutionExpansionFamily09`
- **Family 10:** Convolution at selected index — `ConvolutionExpansionFamily10`
- **Family 11:** Output length — `ConvolutionExpansionFamily11`
- **Family 12:** Overlap of finite sequences — `ConvolutionExpansionFamily12`
- **Family 13:** Sum property of convolution — `ConvolutionExpansionFamily13`
- **Family 14:** Impulse response evaluation — `ConvolutionExpansionFamily14`
- **Family 15:** Length of full convolution — `ConvolutionExpansionFamily15`
- **Family 16:** Cumulative ramp output — `ConvolutionExpansionFamily16`
- **Family 17:** Convolution scaling property — `ConvolutionExpansionFamily17`
- **Family 18:** Convolution theorem relation — `ConvolutionExpansionFamily18`
- **Family 19:** Piecewise overlap integral — `ConvolutionExpansionFamily19`
- **Family 20:** Correlation and convolution relation — `ConvolutionExpansionFamily20`

### `controls` — `js/question-bank/categories/controls.js` (20 families)
- **Family 01:** DC gain from transfer function — `ControlsExpansionFamily01`
- **Family 02:** Pole of a first-order system — `ControlsExpansionFamily02`
- **Family 03:** Time constant from denominator — `ControlsExpansionFamily03`
- **Family 04:** Two-percent settling time — `ControlsExpansionFamily04`
- **Family 05:** Rise-time approximation — `ControlsExpansionFamily05`
- **Family 06:** Closed-loop feedback gain — `ControlsExpansionFamily06`
- **Family 07:** Steady-state unit-step error — `ControlsExpansionFamily07`
- **Family 08:** Undamped natural frequency — `ControlsExpansionFamily08`
- **Family 09:** Damping ratio — `ControlsExpansionFamily09`
- **Family 10:** Percent overshoot — `ControlsExpansionFamily10`
- **Family 11:** Pole location stability — `ControlsExpansionFamily11`
- **Family 12:** First-order step response — `ControlsExpansionFamily12`
- **Family 13:** Rise-time from time constant — `ControlsExpansionFamily13`
- **Family 14:** Natural and damped frequencies — `ControlsExpansionFamily14`
- **Family 15:** DC gain from pole-zero model — `ControlsExpansionFamily15`
- **Family 16:** Loop gain and feedback — `ControlsExpansionFamily16`
- **Family 17:** Settling error fraction — `ControlsExpansionFamily17`
- **Family 18:** Closed-loop transfer equation — `ControlsExpansionFamily18`
- **Family 19:** Block diagram reduction — `ControlsExpansionFamily19`
- **Family 20:** Second-order overshoot — `ControlsExpansionFamily20`

### `signals` — `js/question-bank/categories/signals.js` (20 families)
- **Family 01:** Frequency from period — `SignalsExpansionFamily01`
- **Family 02:** Angular frequency conversion — `SignalsExpansionFamily02`
- **Family 03:** Sinusoidal RMS amplitude — `SignalsExpansionFamily03`
- **Family 04:** Mean absolute sinusoid — `SignalsExpansionFamily04`
- **Family 05:** Nyquist sampling rate — `SignalsExpansionFamily05`
- **Family 06:** Quantization levels — `SignalsExpansionFamily06`
- **Family 07:** PCM bit rate — `SignalsExpansionFamily07`
- **Family 08:** Voltage gain in decibels — `SignalsExpansionFamily08`
- **Family 09:** Phase from time shift — `SignalsExpansionFamily09`
- **Family 10:** Energy of a decaying signal — `SignalsExpansionFamily10`
- **Family 11:** Mixer sideband frequency — `SignalsExpansionFamily11`
- **Family 12:** PCM quantization code count — `SignalsExpansionFamily12`
- **Family 13:** Voltage ratio and dB — `SignalsExpansionFamily13`
- **Family 14:** Signal slope scale — `SignalsExpansionFamily14`
- **Family 15:** Pulse duty cycle — `SignalsExpansionFamily15`
- **Family 16:** Derivative amplitude — `SignalsExpansionFamily16`
- **Family 17:** Exponentially decaying signal energy — `SignalsExpansionFamily17`
- **Family 18:** Amplitude ratio — `SignalsExpansionFamily18`
- **Family 19:** Sampling interval and record duration — `SignalsExpansionFamily19`
- **Family 20:** Orthogonal signal RMS combination — `SignalsExpansionFamily20`

### `complexcalc` — `js/question-bank/categories/complexcalc.js` (20 families)
- **Family 01:** Real part of a complex product — `ComplexcalcExpansionFamily01`
- **Family 02:** Complex quotient component — `ComplexcalcExpansionFamily02`
- **Family 03:** Complex modulus and argument — `ComplexcalcExpansionFamily03`
- **Family 04:** Modulus of complex roots — `ComplexcalcExpansionFamily04`
- **Family 05:** Polar-form magnitude — `ComplexcalcExpansionFamily05`
- **Family 06:** Cauchy–Riemann conditions — `ComplexcalcExpansionFamily06`
- **Family 07:** Complex power derivative — `ComplexcalcExpansionFamily07`
- **Family 08:** Straight-path contour integral — `ComplexcalcExpansionFamily08`
- **Family 09:** Conjugate product — `ComplexcalcExpansionFamily09`
- **Family 10:** Residue at a simple pole — `ComplexcalcExpansionFamily10`
- **Family 11:** Complex exponential magnitude — `ComplexcalcExpansionFamily11`
- **Family 12:** Real and imaginary components — `ComplexcalcExpansionFamily12`
- **Family 13:** Complex derivative component — `ComplexcalcExpansionFamily13`
- **Family 14:** Argument of a quotient — `ComplexcalcExpansionFamily14`
- **Family 15:** Squared modulus — `ComplexcalcExpansionFamily15`
- **Family 16:** Argument in radians — `ComplexcalcExpansionFamily16`
- **Family 17:** Holomorphic function derivative — `ComplexcalcExpansionFamily17`
- **Family 18:** Complex number powers — `ComplexcalcExpansionFamily18`
- **Family 19:** Real part of z squared — `ComplexcalcExpansionFamily19`
- **Family 20:** Imaginary part of z squared — `ComplexcalcExpansionFamily20`

### `ode` — `js/question-bank/categories/ode.js` (20 families)
- **Family 01:** First-order homogeneous solution — `OdeExpansionFamily01`
- **Family 02:** Exponential-growth response — `OdeExpansionFamily02`
- **Family 03:** Constant-input equilibrium — `OdeExpansionFamily03`
- **Family 04:** One Euler method step — `OdeExpansionFamily04`
- **Family 05:** Complex characteristic roots — `OdeExpansionFamily05`
- **Family 06:** Resonant repeated-root forcing — `OdeExpansionFamily06`
- **Family 07:** Repeated-root homogeneous mode — `OdeExpansionFamily07`
- **Family 08:** Constant-force equilibrium — `OdeExpansionFamily08`
- **Family 09:** Forced first-order solution — `OdeExpansionFamily09`
- **Family 10:** Characteristic root multiplicity — `OdeExpansionFamily10`
- **Family 11:** Step response value — `OdeExpansionFamily11`
- **Family 12:** Sum and product of characteristic roots — `OdeExpansionFamily12`
- **Family 13:** Complex root magnitude — `OdeExpansionFamily13`
- **Family 14:** Constant particular solution — `OdeExpansionFamily14`
- **Family 15:** Repeated-root response at time — `OdeExpansionFamily15`
- **Family 16:** Equilibrium under linear feedback — `OdeExpansionFamily16`
- **Family 17:** Damped sinusoidal solution — `OdeExpansionFamily17`
- **Family 18:** Euler update from initial slope — `OdeExpansionFamily18`
- **Family 19:** Separable equation equilibrium — `OdeExpansionFamily19`
- **Family 20:** Natural frequency from oscillator — `OdeExpansionFamily20`

### `vector` — `js/question-bank/categories/vector.js` (20 families)
- **Family 01:** Gradient component — `VectorExpansionFamily01`
- **Family 02:** Linear-field divergence — `VectorExpansionFamily02`
- **Family 03:** Curl component — `VectorExpansionFamily03`
- **Family 04:** Dot product and determinant — `VectorExpansionFamily04`
- **Family 05:** Vector magnitude — `VectorExpansionFamily05`
- **Family 06:** Cross-product component — `VectorExpansionFamily06`
- **Family 07:** Directional derivative — `VectorExpansionFamily07`
- **Family 08:** Constant-field line integral — `VectorExpansionFamily08`
- **Family 09:** Surface area factor — `VectorExpansionFamily09`
- **Family 10:** Divergence-theorem flux — `VectorExpansionFamily10`
- **Family 11:** Curl component — `VectorExpansionFamily11`
- **Family 12:** Line integral contribution — `VectorExpansionFamily12`
- **Family 13:** Laplacian of scalar potential — `VectorExpansionFamily13`
- **Family 14:** Parallelepiped volume — `VectorExpansionFamily14`
- **Family 15:** Curl of a linear field — `VectorExpansionFamily15`
- **Family 16:** Vector-field work — `VectorExpansionFamily16`
- **Family 17:** Divergence versus Laplacian — `VectorExpansionFamily17`
- **Family 18:** Resultant magnitude — `VectorExpansionFamily18`
- **Family 19:** Vector-field component value — `VectorExpansionFamily19`
- **Family 20:** Euclidean and L1 norms — `VectorExpansionFamily20`

### `calculus` — `js/question-bank/categories/calculus.js` (20 families)
- **Family 01:** Power rule derivative — `CalculusExpansionFamily01`
- **Family 02:** Chain rule evaluation — `CalculusExpansionFamily02`
- **Family 03:** Power-rule definite integral — `CalculusExpansionFamily03`
- **Family 04:** Integration by parts with exponential — `CalculusExpansionFamily04`
- **Family 05:** Integration by parts with trigonometric function — `CalculusExpansionFamily05`
- **Family 06:** Fundamental theorem integral — `CalculusExpansionFamily06`
- **Family 07:** Logarithmic derivative — `CalculusExpansionFamily07`
- **Family 08:** Partial fraction coefficient — `CalculusExpansionFamily08`
- **Family 09:** Gamma integral and power integral — `CalculusExpansionFamily09`
- **Family 10:** Integration-by-parts boundary term — `CalculusExpansionFamily10`
- **Family 11:** Trigonometric substitution angle — `CalculusExpansionFamily11`
- **Family 12:** Rational ratio integral — `CalculusExpansionFamily12`
- **Family 13:** Exponential definite integral — `CalculusExpansionFamily13`
- **Family 14:** Logarithmic definite integral — `CalculusExpansionFamily14`
- **Family 15:** Derivative of logarithm — `CalculusExpansionFamily15`
- **Family 16:** Integration-by-parts product term — `CalculusExpansionFamily16`
- **Family 17:** Trigonometric substitution radical — `CalculusExpansionFamily17`
- **Family 18:** Logarithmic area and reciprocal — `CalculusExpansionFamily18`
- **Family 19:** U-substitution integral — `CalculusExpansionFamily19`
- **Family 20:** Power integral and derivative — `CalculusExpansionFamily20`

### `related` — `js/question-bank/categories/related.js` (20 families)
- **Family 01:** Circle-area related rate — `RelatedExpansionFamily01`
- **Family 02:** Sphere-volume related rate — `RelatedExpansionFamily02`
- **Family 03:** Cone-volume related rate — `RelatedExpansionFamily03`
- **Family 04:** Ladder related rate — `RelatedExpansionFamily04`
- **Family 05:** Distance and range rate — `RelatedExpansionFamily05`
- **Family 06:** Shadow-length related rate — `RelatedExpansionFamily06`
- **Family 07:** Circumference rate — `RelatedExpansionFamily07`
- **Family 08:** Cube-volume related rate — `RelatedExpansionFamily08`
- **Family 09:** Electrical power rate — `RelatedExpansionFamily09`
- **Family 10:** Angular-position rate — `RelatedExpansionFamily10`
- **Family 11:** Square-area rate — `RelatedExpansionFamily11`
- **Family 12:** Sphere surface-area rate — `RelatedExpansionFamily12`
- **Family 13:** Disk area and circumference rate — `RelatedExpansionFamily13`
- **Family 14:** Radar range rate — `RelatedExpansionFamily14`
- **Family 15:** Charge-voltage product rate — `RelatedExpansionFamily15`
- **Family 16:** Ladder speed magnitude — `RelatedExpansionFamily16`
- **Family 17:** Cylinder lateral area — `RelatedExpansionFamily17`
- **Family 18:** Sphere surface-area rate — `RelatedExpansionFamily18`
- **Family 19:** Square face-area rate — `RelatedExpansionFamily19`
- **Family 20:** Rectangle and square area rate — `RelatedExpansionFamily20`

### `relativity` — `js/question-bank/categories/relativity.js` (20 families)
- **Family 01:** Lorentz factor — `RelativityExpansionFamily01`
- **Family 02:** Time dilation — `RelativityExpansionFamily02`
- **Family 03:** Length contraction — `RelativityExpansionFamily03`
- **Family 04:** Rest-energy equivalence — `RelativityExpansionFamily04`
- **Family 05:** Kinetic-energy ratio — `RelativityExpansionFamily05`
- **Family 06:** Dimensionless momentum — `RelativityExpansionFamily06`
- **Family 07:** Relativistic velocity addition — `RelativityExpansionFamily07`
- **Family 08:** Rest energy in alternate units — `RelativityExpansionFamily08`
- **Family 09:** Lifetime dilation — `RelativityExpansionFamily09`
- **Family 10:** Speed from Lorentz factor — `RelativityExpansionFamily10`
- **Family 11:** Normalized momentum and kinetic energy — `RelativityExpansionFamily11`
- **Family 12:** Length-contraction factor — `RelativityExpansionFamily12`
- **Family 13:** Relativistic mass-energy — `RelativityExpansionFamily13`
- **Family 14:** Beta squared relation — `RelativityExpansionFamily14`
- **Family 15:** Frame velocity transformation — `RelativityExpansionFamily15`
- **Family 16:** Mass-energy fraction — `RelativityExpansionFamily16`
- **Family 17:** Contraction and time dilation — `RelativityExpansionFamily17`
- **Family 18:** Fractional length decrease — `RelativityExpansionFamily18`
- **Family 19:** Lorentz identity — `RelativityExpansionFamily19`
- **Family 20:** Gamma and normalized momentum — `RelativityExpansionFamily20`

### `advanced` — `js/question-bank/categories/advanced.js` (20 families)
- **Family 01:** Two-by-two determinant — `AdvancedExpansionFamily01`
- **Family 02:** Complex magnitude — `AdvancedExpansionFamily02`
- **Family 03:** Finite geometric series — `AdvancedExpansionFamily03`
- **Family 04:** Diagonal eigenvalue — `AdvancedExpansionFamily04`
- **Family 05:** Complex product real part — `AdvancedExpansionFamily05`
- **Family 06:** Linear system by Cramer rule — `AdvancedExpansionFamily06`
- **Family 07:** Second-order Taylor approximation — `AdvancedExpansionFamily07`
- **Family 08:** Newton square-root iteration — `AdvancedExpansionFamily08`
- **Family 09:** Positive quadratic root — `AdvancedExpansionFamily09`
- **Family 10:** Power of a diagonal matrix — `AdvancedExpansionFamily10`
- **Family 11:** Matrix trace and determinant — `AdvancedExpansionFamily11`
- **Family 12:** Vector norm — `AdvancedExpansionFamily12`
- **Family 13:** Geometric series tail — `AdvancedExpansionFamily13`
- **Family 14:** Euler numerical step — `AdvancedExpansionFamily14`
- **Family 15:** Characteristic polynomial — `AdvancedExpansionFamily15`
- **Family 16:** Matrix product diagonal — `AdvancedExpansionFamily16`
- **Family 17:** Complex quotient — `AdvancedExpansionFamily17`
- **Family 18:** Taylor error term — `AdvancedExpansionFamily18`
- **Family 19:** Linear recurrence — `AdvancedExpansionFamily19`
- **Family 20:** Eigenvalue ratio — `AdvancedExpansionFamily20`

### `em` — `js/question-bank/categories/em.js` (20 families)
- **Family 01:** Coulomb force magnitude — `EmExpansionFamily01`
- **Family 02:** Point-charge electric field — `EmExpansionFamily02`
- **Family 03:** Point-charge potential — `EmExpansionFamily03`
- **Family 04:** Electric force from field — `EmExpansionFamily04`
- **Family 05:** Capacitor charge — `EmExpansionFamily05`
- **Family 06:** Stored capacitor energy — `EmExpansionFamily06`
- **Family 07:** Magnetic force magnitude — `EmExpansionFamily07`
- **Family 08:** Magnetic flux — `EmExpansionFamily08`
- **Family 09:** Faraday induced emf — `EmExpansionFamily09`
- **Family 10:** Relative capacitance — `EmExpansionFamily10`
- **Family 11:** Magnetic dipole moment — `EmExpansionFamily11`
- **Family 12:** Torque on a current loop — `EmExpansionFamily12`
- **Family 13:** Magnetic energy density — `EmExpansionFamily13`
- **Family 14:** Motional electromotive force — `EmExpansionFamily14`
- **Family 15:** Three-dimensional magnetic force — `EmExpansionFamily15`
- **Family 16:** Field of a long wire — `EmExpansionFamily16`
- **Family 17:** Magnetic flux linkage — `EmExpansionFamily17`
- **Family 18:** RL stored magnetic energy — `EmExpansionFamily18`
- **Family 19:** Lorentz force vector magnitude — `EmExpansionFamily19`
- **Family 20:** Magnetic dipole potential energy — `EmExpansionFamily20`

### `econ` — `js/question-bank/categories/econ.js` (20 families)
- **Family 01:** Compound future worth — `EconExpansionFamily01`
- **Family 02:** Discounted present worth — `EconExpansionFamily02`
- **Family 03:** Simple interest — `EconExpansionFamily03`
- **Family 04:** Present worth of annuity — `EconExpansionFamily04`
- **Family 05:** Future worth of annuity — `EconExpansionFamily05`
- **Family 06:** Effective annual interest rate — `EconExpansionFamily06`
- **Family 07:** Straight-line depreciation — `EconExpansionFamily07`
- **Family 08:** Book value after depreciation — `EconExpansionFamily08`
- **Family 09:** Net present value — `EconExpansionFamily09`
- **Family 10:** Simple payback period — `EconExpansionFamily10`
- **Family 11:** Realistic project cash-flow NPV — `EconExpansionFamily11`
- **Family 12:** Annual worth comparison — `EconExpansionFamily12`
- **Family 13:** Capital recovery factor — `EconExpansionFamily13`
- **Family 14:** Benefit-cost ratio — `EconExpansionFamily14`
- **Family 15:** Inflation-adjusted rate — `EconExpansionFamily15`
- **Family 16:** Replacement decision — `EconExpansionFamily16`
- **Family 17:** Depreciation tax shield — `EconExpansionFamily17`
- **Family 18:** Break-even quantity — `EconExpansionFamily18`
- **Family 19:** Return on investment — `EconExpansionFamily19`
- **Family 20:** Equivalent annual cost — `EconExpansionFamily20`

### `data` — `js/question-bank/categories/data.js` (20 families)
- **Family 01:** Arithmetic mean — `DataExpansionFamily01`
- **Family 02:** Median of observations — `DataExpansionFamily02`
- **Family 03:** Population variance — `DataExpansionFamily03`
- **Family 04:** Population standard deviation — `DataExpansionFamily04`
- **Family 05:** Z-score — `DataExpansionFamily05`
- **Family 06:** Coefficient of variation — `DataExpansionFamily06`
- **Family 07:** Standard error of mean — `DataExpansionFamily07`
- **Family 08:** Absolute percentage error — `DataExpansionFamily08`
- **Family 09:** Weighted mean — `DataExpansionFamily09`
- **Family 10:** Pearson correlation — `DataExpansionFamily10`
- **Family 11:** One-sample t statistic — `DataExpansionFamily11`
- **Family 12:** Welch two-sample t statistic — `DataExpansionFamily12`
- **Family 13:** Pooled two-sample variance — `DataExpansionFamily13`
- **Family 14:** Chi-square goodness-of-fit — `DataExpansionFamily14`
- **Family 15:** Chi-square independence test — `DataExpansionFamily15`
- **Family 16:** One-way ANOVA F statistic — `DataExpansionFamily16`
- **Family 17:** Confidence-interval margin — `DataExpansionFamily17`
- **Family 18:** Data range and quartiles — `DataExpansionFamily18`
- **Family 19:** Regression slope — `DataExpansionFamily19`
- **Family 20:** Cohen effect size — `DataExpansionFamily20`

### `geas` — `js/question-bank/categories/geas.js` (25 families)
- **Family 01:** Work-energy calculation — `GeasExpansionFamily01`
- **Family 02:** Pressure from force and area — `GeasExpansionFamily02`
- **Family 03:** Material density — `GeasExpansionFamily03`
- **Family 04:** Machine efficiency — `GeasExpansionFamily04`
- **Family 05:** Sensible heat transfer — `GeasExpansionFamily05`
- **Family 06:** Ideal-gas pressure — `GeasExpansionFamily06`
- **Family 07:** Kinetic energy — `GeasExpansionFamily07`
- **Family 08:** Hydraulic power — `GeasExpansionFamily08`
- **Family 09:** Spring extension — `GeasExpansionFamily09`
- **Family 10:** Mechanical advantage — `GeasExpansionFamily10`
- **Family 11:** Power from flow and head — `GeasExpansionFamily11`
- **Family 12:** Linear thermal expansion — `GeasExpansionFamily12`
- **Family 13:** Momentum from mass and velocity — `GeasExpansionFamily13`
- **Family 14:** Buoyant force — `GeasExpansionFamily14`
- **Family 15:** Parallel force components — `GeasExpansionFamily15`
- **Family 16:** Thermal expansion length — `GeasExpansionFamily16`
- **Family 17:** Efficiency with losses — `GeasExpansionFamily17`
- **Family 18:** Impulse and momentum — `GeasExpansionFamily18`
- **Family 19:** Ohm-equivalent energy transfer — `GeasExpansionFamily19`
- **Family 20:** Simple harmonic energy — `GeasExpansionFamily20`
- **Family 21:** Hydrostatic pressure with depth — `GeasExpansionFamily21`
- **Family 22:** Normal stress from axial load — `GeasExpansionFamily22`
- **Family 23:** Gear ratio and output speed — `GeasExpansionFamily23`
- **Family 24:** Series thermal resistance — `GeasExpansionFamily24`
- **Family 25:** Bernoulli pressure-speed conversion — `GeasExpansionFamily25`

### `electronics` — `js/question-bank/categories/electronics.js` (25 families)
- **Family 01:** Ohm-law current — `ElectronicsExpansionFamily01`
- **Family 02:** Voltage-divider output — `ElectronicsExpansionFamily02`
- **Family 03:** Series resistance — `ElectronicsExpansionFamily03`
- **Family 04:** Parallel resistance — `ElectronicsExpansionFamily04`
- **Family 05:** RC time constant — `ElectronicsExpansionFamily05`
- **Family 06:** Diode-resistor current — `ElectronicsExpansionFamily06`
- **Family 07:** Non-inverting amplifier gain — `ElectronicsExpansionFamily07`
- **Family 08:** Capacitor energy — `ElectronicsExpansionFamily08`
- **Family 09:** Inductive reactance — `ElectronicsExpansionFamily09`
- **Family 10:** Transistor current gain — `ElectronicsExpansionFamily10`
- **Family 11:** RC cutoff frequency — `ElectronicsExpansionFamily11`
- **Family 12:** Inverting amplifier gain — `ElectronicsExpansionFamily12`
- **Family 13:** Divider current — `ElectronicsExpansionFamily13`
- **Family 14:** Dimensionless RC frequency — `ElectronicsExpansionFamily14`
- **Family 15:** Rectifier average voltage — `ElectronicsExpansionFamily15`
- **Family 16:** Half-wave output RMS — `ElectronicsExpansionFamily16`
- **Family 17:** BJT base current — `ElectronicsExpansionFamily17`
- **Family 18:** Capacitor charge — `ElectronicsExpansionFamily18`
- **Family 19:** Resistor power — `ElectronicsExpansionFamily19`
- **Family 20:** Voltage gain in decibels — `ElectronicsExpansionFamily20`
- **Family 21:** Low-pass frequency response — `ElectronicsExpansionFamily21`
- **Family 22:** Inverting summer output — `ElectronicsExpansionFamily22`
- **Family 23:** Divider Thevenin current — `ElectronicsExpansionFamily23`
- **Family 24:** RC cutoff calculation — `ElectronicsExpansionFamily24`
- **Family 25:** Rectifier RMS value — `ElectronicsExpansionFamily25`

### `precalc` — `js/question-bank/categories/precalc.js` (25 families)
- **Family 01:** Factoring and roots — `PrecalcExpansionFamily01`
- **Family 02:** Partial-fraction coefficient — `PrecalcExpansionFamily02`
- **Family 03:** Two-variable linear system — `PrecalcExpansionFamily03`
- **Family 04:** Line slope and intercept — `PrecalcExpansionFamily04`
- **Family 05:** Point distance and midpoint — `PrecalcExpansionFamily05`
- **Family 06:** Circle standard form — `PrecalcExpansionFamily06`
- **Family 07:** Exact trigonometric value — `PrecalcExpansionFamily07`
- **Family 08:** Logarithm equation — `PrecalcExpansionFamily08`
- **Family 09:** Rational expression evaluation — `PrecalcExpansionFamily09`
- **Family 10:** Vieta root relation — `PrecalcExpansionFamily10`
- **Family 11:** Polynomial evaluation — `PrecalcExpansionFamily11`
- **Family 12:** Quadratic derivative — `PrecalcExpansionFamily12`
- **Family 13:** Circle area and circumference — `PrecalcExpansionFamily13`
- **Family 14:** Sphere radial factors — `PrecalcExpansionFamily14`
- **Family 15:** Arithmetic sequence term — `PrecalcExpansionFamily15`
- **Family 16:** Geometric series sum — `PrecalcExpansionFamily16`
- **Family 17:** Quadratic vertex and discriminant — `PrecalcExpansionFamily17`
- **Family 18:** Point-line distance — `PrecalcExpansionFamily18`
- **Family 19:** Complex modulus and argument — `PrecalcExpansionFamily19`
- **Family 20:** Two-by-two determinant — `PrecalcExpansionFamily20`
- **Family 21:** Solve a linear equation — `PrecalcExpansionFamily21`
- **Family 22:** Absolute value solutions — `PrecalcExpansionFamily22`
- **Family 23:** Exponent laws — `PrecalcExpansionFamily23`
- **Family 24:** Rational root and factor — `PrecalcExpansionFamily24`
- **Family 25:** Analytic geometry midpoint — `PrecalcExpansionFamily25`

### `probability` — `js/question-bank/categories/probability.js` (25 families)
- **Family 01:** Combination count — `ProbabilityExpansionFamily01`
- **Family 02:** Permutation count — `ProbabilityExpansionFamily02`
- **Family 03:** Binomial probability — `ProbabilityExpansionFamily03`
- **Family 04:** Complement probability — `ProbabilityExpansionFamily04`
- **Family 05:** Expected value — `ProbabilityExpansionFamily05`
- **Family 06:** Conditional probability — `ProbabilityExpansionFamily06`
- **Family 07:** Bayes theorem — `ProbabilityExpansionFamily07`
- **Family 08:** Geometric distribution — `ProbabilityExpansionFamily08`
- **Family 09:** Odds to probability — `ProbabilityExpansionFamily09`
- **Family 10:** Hypergeometric sampling — `ProbabilityExpansionFamily10`
- **Family 11:** Independent events union — `ProbabilityExpansionFamily11`
- **Family 12:** Mutually exclusive events — `ProbabilityExpansionFamily12`
- **Family 13:** Combination probability — `ProbabilityExpansionFamily13`
- **Family 14:** Geometric exact waiting time — `ProbabilityExpansionFamily14`
- **Family 15:** Binomial variance and standard deviation — `ProbabilityExpansionFamily15`
- **Family 16:** Permutation and combination — `ProbabilityExpansionFamily16`
- **Family 17:** At-least-one event — `ProbabilityExpansionFamily17`
- **Family 18:** Sampling without replacement — `ProbabilityExpansionFamily18`
- **Family 19:** Expected net outcome — `ProbabilityExpansionFamily19`
- **Family 20:** Multiset arrangements — `ProbabilityExpansionFamily20`
- **Family 21:** Binomial variance model — `ProbabilityExpansionFamily21`
- **Family 22:** Complement of joint event — `ProbabilityExpansionFamily22`
- **Family 23:** Binomial coefficient — `ProbabilityExpansionFamily23`
- **Family 24:** Urn color probability — `ProbabilityExpansionFamily24`
- **Family 25:** Two-stage outcome count — `ProbabilityExpansionFamily25`

## Other category-local numeric recipes

Each category file may also contain explicit `appendNumericRecipe(...)` calls following the main registry array. These cover retained category-specific refinements and the extra independent topic-level generators used to meet the 48-entry minimum. Their insertion points and `recipeKey` values are searchable directly in the named category file; entries with `Additional ·` in the registered title are supplemental topic-level factories, not aliases of existing families.

## Refactor notes

The category-local conversion also removed one unused six-value random scaffold from each of the 420 family functions. This does not change the intended formula or variant distribution; it stops consuming unrelated random draws before the parameters used by a variant. During review, branch-answer mismatches were corrected in controls Family 02, Z-transform Family 07, electromagnetism Family 14, and calculus Families 04 and 06. See `DEVELOPER_GUIDE.md` for the specific issues.
