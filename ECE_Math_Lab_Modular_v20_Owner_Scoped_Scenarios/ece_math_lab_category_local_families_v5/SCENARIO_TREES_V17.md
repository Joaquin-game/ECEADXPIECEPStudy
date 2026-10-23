# Context-rich practice-test scenario trees — v17

## Purpose

Version 17 turns the setup-question/tree capability into practice-test-style scenarios. Each category's tree starts with a narrative setup, gives the relevant symbols and quantities, and then asks connected questions about different aspects of the situation. The text is written for learners; it does not call questions “parents” or “children.” The **Show tree structure debug** control is available to developers and is unchecked by default.

## Structure and counting

Every one of the 20 categories has one scenario with five structural nodes. Eighteen have one setup and four answerable numeric questions. The Electronics and Pre-calculus scenarios add a nested setup, so each has two setup nodes and three answerable numeric questions. Across the bank, the scenario trees contain 100 nodes: 22 answerless setup nodes and 78 numeric question nodes.

Setup nodes do not receive answer fields, consume a question slot, or contribute to the score. Their ranges include all answerable questions below them. Each answerable question is numbered in the order used by the assembled test. A direct question under an answerable question cites that question's number; questions directly based on a setup refer to that setup and its applicable question range.

## Included scenarios

| Category | Scenario and question progression |
|---|---|
| Advanced mathematics | Water-treatment sensors share a dimensionless calibration gain; linked matrix determinants and a trace cross-check the sensor map. |
| Calculus | A robotic slider's ramp and quadratic response are assessed using a definite integral, a derivative, and two follow-up calculations. |
| Complex calculus | An RF probe checks real and imaginary derivative components for quadratic and cubic complex response models. |
| Control systems | A variable-speed pump is commissioned using forward/feedback gains and a first-order transfer-function model at specified test frequencies. |
| Convolution | A water-quality logger sends a two-sample burst through a two-tap digital filter; the output samples and their sum are reconstructed. |
| Data analysis | An environmental monitor's reference channel, repeat batch, and four-reading batch are compared using means and medians. |
| Engineering economics | A regional water utility compares two-year compound interest with a three-year simple-interest reserve account. |
| Electronics | A DC bench test uses an ideal four-ohm load, with a nested power-meter reading supporting current and voltage checks. |
| Electromagnetism | A field probe surveys a point charge at 2 m, 3 m, 6 m, and 9 m; questions compare potential and field strength. |
| Fourier analysis | A monitoring node transmits the symmetric pulse \(x(t)=Ae^{-2|t|}\), and the receiver checks \(X(0)\), \(X(1)\), \(X(2)\), and \(X(3)\). |
| GEAS fundamentals | A warehouse hoist's logged work, two-metre displacement, and timing data support force, average-power, work, and time calculations. |
| Laplace transforms | Two causal exponential channels from a controller transient are evaluated at \(s=0,2,3,4\,\mathrm{s}^{-1}\). |
| Differential equations | A thermal sensor's forced first-order slope is compared with natural exponential cooling and its later response. |
| Pre-calculus | A field instrument applies \(3u+2=x\) followed by \(g(t)=2t+1\); the nested setup supplies the recorded display result for the final checks. |
| Probability | An optical quality-control monitor has ten equally likely outcomes; independent trials lead to joint, complementary, and repeated-event probabilities. |
| Related rates | A ground robot's circular scan boundary expands at a known radial rate; area and circumference rates are compared at radii 1 m, 2 m, and 3 m. |
| Relativity | An accelerator particle travels at \(0.6c\); questions compare rest, kinetic-energy-equivalent, and total-energy-equivalent mass. |
| Signals | An AC inverter's clean sinusoidal RMS voltage is used to obtain peak, peak-to-peak, and recovered amplitudes. |
| Vector calculus | A linearized airflow field is checked using divergence, with updated auxiliary slopes and two follow-up vector fields. |
| Z-transforms | Firmware validation compares a geometric impulse-response tail and a delayed impulse at \(z=2\) and \(z=3\). |

## Inherited context and illustrations

Setup data is carried as named `setupVariables` and `setupQuantities`, then merged into descendant context (with namespaced entries retained for nested setups). This is additive: a nested setup contributes new measurements without erasing the root scenario's context. Derived answers that should be calculated by a descendant are not added as known setup quantities; for example, the hoist setup shares work and displacement, not a precomputed force.

Every built-in setup has an inline SVG illustration and descriptive `alt` text. The setup API continues to support any number of illustrations, including SVGs with individual alt text, as well as content-only setups that do not have an answer.

## Selected formula checks

- Fourier follow-up: if \(p=X(2)\) for \(x(t)=Ae^{-2|t|}\), then \(A=2p\) and \(X(3)=8p/13\).
- Related rates: if \(p=dC/dt\) at \(r=1\,\mathrm{m}\), then \(dr/dt=p/(2\pi)\), so \(dA/dt=3p\) at \(r=3\,\mathrm{m}\).
- Electrostatics: if \(p=V(3\,\mathrm{m})\), then \(V(9\,\mathrm{m})=p/3\) and \(E(9\,\mathrm{m})=p/27\).
- Z-transform: for \(x[n]=p(\delta[n]+\delta[n-1])\), \(X(3)=p(1+1/3)=4p/3\).
- Data batches: the median of \([p-1,p+1,p+3]\) is \(p+1\); the mean of \([p-2,p,p+4]\) is \(p+2/3\).
- Laplace fast channel: for \(f_2(t)=Ae^{-2t}u(t)\), \(F_2(3)=A/5\).

## Verification

The final modular source passed JavaScript syntax checks and the following test scripts:

- `scripts/check-bank.cjs`: 4,192 numeric samples, 4,192 multiple-choice builds, 400 five-node randomized tree builds, inherited-context and answerless-setup checks, numbering/setup-range checks, and targeted formula assertions; zero failures.
- `scripts/check-extension-api.cjs`: passed; cross-category, non-repeatable-parent, and late-registration protections remain active.
- `scripts/check-category-local-architecture.cjs`: passed; all 20 category-local registries and 800 concept cards remain intact.
- `scripts/check-ui-layout.cjs`: passed; the inspector remains full-width and responsive.
- JavaScript syntax check across `js`, `locales`, and `scripts`: passed.

Registry totals remain 1,048 numeric entries (970 standalone numeric generators plus 78 answerable tree entries), 22 setup nodes, 800 identification entries, and 800 true/false entries: 2,670 unified registry entries overall.

**Scope:** this is the modular v17 release. The standalone HTML has not been rebuilt as part of this change. The obsolete `index2.html` snapshot has been removed.
