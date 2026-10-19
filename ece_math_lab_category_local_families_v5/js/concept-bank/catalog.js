/* Concept definitions for identification and true/false questions; merges the original and expanded concept lists. */

/* ===== Identification and true/false concept bank ===== */
const CONCEPTS={
laplace:[
['Laplace transform','The integral mapping a time function f(t) to F(s) by weighting it with an exponential kernel over t from zero to infinity.'],
['Inverse Laplace transform','The operation that recovers a time-domain function from its transform F(s).'],
['Linearity property','The transform of a weighted sum equals the same weighted sum of the individual transforms.'],
['First shifting theorem','Multiplication of a time function by an exponential shifts its transform along the s variable.'],
['Time-delay property','A delay of a causal signal by a seconds introduces a factor exp(-as) in its Laplace transform.'],
['Derivative property','The transform of f prime includes sF(s) and subtracts the initial value f(0+).'],
['Integration property','The transform of the accumulated integral of f(t) equals F(s) divided by s.'],
['Initial-value theorem','Under suitable conditions, the initial value is obtained from the limit of sF(s) as s tends to infinity.'],
['Final-value theorem','Under suitable pole conditions, the steady final value is obtained from the limit of sF(s) as s tends to zero.'],
['Convolution theorem','The Laplace transform of the time convolution of two functions is the product of their transforms.'],
['Unit-step function','A signal that switches from zero to one at a specified time.'],
['Dirac delta','An ideal impulse with unit area concentrated at one instant.'],
['Pole','A value of the complex variable where a rational transform becomes unbounded after simplification.'],
['Partial-fraction decomposition','Rewriting a rational function as a sum of simpler rational terms.'],
['Unilateral Laplace transform','The one-sided transform used especially for initial-value problems beginning at time zero.'],
['Transfer function','For zero initial conditions, the ratio of a system output transform to its input transform.'],
['Exponential order','A growth condition in which a function is bounded in magnitude by a constant times an exponential.'],
['Second-derivative property','The transform of f double-prime is s squared F(s) minus s f(0+) and minus f prime(0+).'],
['Initial conditions','Values of a function and possibly its derivatives at the starting time used when solving a differential equation.'],
['Region of convergence','The set of complex s values for which the Laplace-transform integral converges.']
],
ztrans:[
['Z-transform','The sum that maps a discrete sequence x[n] to X(z) using powers of z to the negative n.'],
['Inverse Z-transform','The operation that recovers the discrete sequence from X(z).'],
['Region of convergence','The set of complex z values for which the Z-transform series converges.'],
['Causal sequence','A sequence that is zero for all negative indices.'],
['BIBO stability','The property that every bounded input produces a bounded output; for a discrete LTI system its impulse response is absolutely summable.'],
['Time-delay property','Delaying a sequence by k samples multiplies its transform by z to the negative k, with appropriate sequence assumptions.'],
['Unit impulse sequence','The sequence equal to one at index zero and zero at all other indices.'],
['Unit-step sequence','The sequence equal to one for nonnegative indices and zero for negative indices.'],
['Z-transform convolution property','Convolution of two sequences transforms into the product of their Z-transforms.'],
['Pole','A value of z at which a system transform or transfer function becomes unbounded.'],
['Zero','A value of z at which a transform numerator makes the transfer function equal to zero.'],
['Difference equation','A relation connecting sequence values at different integer indices.'],
['Initial-value theorem','For an appropriate causal sequence, x[0] can be found from the limit of X(z) as z tends to infinity.'],
['Final-value theorem','Under suitable pole conditions, the sequence limit can be found using the limit of (1-z^-1)X(z) as z tends to one.'],
['Geometric-sequence transform','The transform pair for a^n u[n] is z divided by z minus a, for the corresponding region of convergence.'],
['Finite-duration sequence','A sequence that is nonzero at only finitely many indices.'],
['One-sided Z-transform','A transform sum taken over nonnegative sequence indices, often useful for initial conditions.'],
['System transfer function','The ratio Y(z)/X(z) for a discrete system with zero initial conditions.'],
['Discrete-time stability condition','For a causal rational LTI system, all poles must lie strictly inside the unit circle for BIBO stability.'],
['Pole expansion method','A way to invert a rational Z-transform by expressing it through simpler pole terms.']
],
fourier:[
['Fourier transform','A representation that expresses a signal in terms of its continuous frequency content.'],
['Inverse Fourier transform','The operation that reconstructs the time signal from its frequency-domain representation.'],
['Fourier series','A representation of a periodic signal as a sum of harmonically related sinusoids or complex exponentials.'],
['Fundamental period','The smallest positive time shift after which a nonconstant periodic signal repeats.'],
['Fundamental angular frequency','For a periodic signal with period T, the angular frequency equal to two pi divided by T.'],
['Harmonic','A sinusoidal component whose frequency is an integer multiple of the fundamental frequency.'],
['DC component','The constant or zero-frequency component of a signal.'],
['Magnitude spectrum','The magnitude of a signal transform as a function of frequency.'],
['Phase spectrum','The phase angle of a complex Fourier transform as a function of frequency.'],
['Parseval theorem','A relation equating signal energy in time to appropriately normalized energy in the frequency domain.'],
['Energy spectral density','The squared magnitude of the Fourier transform of an energy signal.'],
['Bandwidth','A measure of the frequency span occupied or required by a signal.'],
['Even-signal symmetry','A signal is even when its value at negative time equals its value at positive time.'],
['Odd-signal symmetry','A signal is odd when its value at negative time is the negative of its value at positive time.'],
['Time-shifting property','A time delay changes Fourier-transform phase by a frequency-dependent factor but does not change magnitude.'],
['Frequency-shifting property','Multiplication by a complex exponential shifts the Fourier spectrum in frequency.'],
['Convolution theorem','Time-domain convolution corresponds to multiplication of Fourier transforms.'],
['Orthogonality of harmonics','Over a full period, distinct integer harmonics have zero inner product under the usual Fourier-series integral.'],
['Gibbs phenomenon','The persistent overshoot near a jump when a discontinuous function is approximated by partial Fourier sums.'],
['Sampling theorem','A bandlimited signal can be ideally reconstructed when uniformly sampled above twice its highest frequency.']
],
convolution:[
['Discrete convolution','The sum over index k of one sequence times a shifted version of another sequence.'],
['Continuous convolution','The integral over tau of x(tau) multiplied by h(t-tau).'],
['Impulse response','The output of a system when its input is a unit impulse and the initial state is zero.'],
['LTI input-output relation','For a linear time-invariant system, output equals input convolved with the impulse response.'],
['Commutative property','Convolution gives the same result when the two operands are exchanged.'],
['Associative property','The grouping of three convolved signals does not change the result.'],
['Distributive property','Convolving one signal with a sum equals the sum of the separate convolutions.'],
['Impulse identity','Convolution with a unit impulse leaves a signal unchanged.'],
['Finite sequence output length','For two nonzero finite sequences of lengths N and M, their linear convolution has length N+M-1.'],
['Causal convolution','For causal input and impulse response, the convolution integral or sum uses only present and past values.'],
['Overlap interval','The range of integration where both shifted functions are simultaneously nonzero during continuous convolution.'],
['Moving-average filter','A finite impulse response filter that averages a fixed number of neighboring samples.'],
['Convolution kernel','The function or sequence used to weight and shift a signal during convolution.'],
['Impulse-response representation','A continuous-time LTI system can be represented by its impulse response and convolution.'],
['Convolution theorem for Laplace transforms','The Laplace transform of a convolution is the product of the two Laplace transforms.'],
['Cross-correlation','A measure of similarity between signals as one signal is shifted relative to another; it is not generally the same as convolution.'],
['Circular convolution','Convolution of finite-length sequences with periodic indexing.'],
['Linear convolution','The ordinary convolution in which sequences are not wrapped around periodically.'],
['Convolution of unit impulses','Convolving two shifted unit impulses produces a unit impulse shifted by the sum of their shifts.'],
['Support of continuous convolution','For compactly supported signals, the possible support interval of their convolution is formed by adding their support intervals.']
],
controls:[
['Transfer function','For zero initial conditions, the ratio of output to input in the transform domain.'],
['Open-loop system','A system whose control action does not use a measured output fed back to the input.'],
['Closed-loop system','A system that uses feedback from its output to determine control action.'],
['Negative feedback','Feedback that subtracts a scaled measured output from the reference signal.'],
['Pole','A root of the transfer-function denominator after common factors are cancelled.'],
['Zero','A root of the transfer-function numerator after common factors are cancelled.'],
['DC gain','The steady gain obtained by evaluating a stable transfer function at zero frequency or s equal to zero.'],
['Time constant','For a first-order response, the time scale at which an exponential transient falls to 1/e of its initial value.'],
['First-order system','A system whose transfer-function denominator is first degree in s.'],
['Second-order system','A system whose characteristic denominator is second degree in s.'],
['Undamped natural frequency','The oscillation frequency parameter of a standard second-order system before damping effects.'],
['Damping ratio','A dimensionless measure of damping relative to critical damping in a second-order model.'],
['Underdamped response','A second-order response with damping ratio between zero and one that oscillates while decaying.'],
['Critically damped response','A second-order response with damping ratio equal to one, at the boundary between oscillatory and nonoscillatory cases.'],
['Overdamped response','A second-order response with damping ratio greater than one and two distinct real poles in the standard model.'],
['Two-percent settling time approximation','For an underdamped standard second-order system, a common approximation is four divided by damping ratio times natural frequency.'],
['Percent overshoot','The peak amount above the final value, expressed as a percentage of the response change.'],
['Steady-state error','The difference between reference and output after transients have died out, when a steady state exists.'],
['Root locus','A plot showing how closed-loop poles move as a scalar gain varies.'],
['BIBO stability','The property that every bounded input results in a bounded output.']
],
signals:[
['Analog signal','A signal whose amplitude can vary continuously over a range of values.'],
['Digital signal','A signal represented using discrete amplitude levels, commonly encoded as numbers.'],
['Continuous-time signal','A signal defined at every time instant in a continuous interval.'],
['Discrete-time signal','A sequence defined only at integer sample indices.'],
['Periodic signal','A signal that repeats after a fixed positive period.'],
['Aperiodic signal','A signal that has no positive period over which it repeats exactly.'],
['Energy signal','A signal with finite total energy and typically zero long-term average power.'],
['Power signal','A signal with finite nonzero average power and typically infinite total energy.'],
['Even signal','A signal satisfying x(-t)=x(t), or the corresponding index relation for sequences.'],
['Odd signal','A signal satisfying x(-t)=-x(t), or the corresponding index relation for sequences.'],
['Sampling','The process of taking signal values at discrete time instants.'],
['Sampling frequency','The number of samples taken per second, measured in hertz.'],
['Nyquist rate','Twice the highest frequency present in an ideally bandlimited signal.'],
['Aliasing','The overlap of spectral replicas that makes different continuous frequencies indistinguishable after undersampling.'],
['Quantization','Mapping sample amplitudes to a finite set of representable levels.'],
['Quantization error','The difference between a sample value and its quantized representation.'],
['PCM bit rate','For uncompressed pulse-code modulation, the sample rate multiplied by bits per sample and channel count.'],
['Amplitude modulation','A modulation method in which the carrier amplitude varies with the message signal.'],
['Frequency modulation','A modulation method in which instantaneous carrier frequency varies with the message signal.'],
['Signal-to-noise ratio','The ratio of signal power to noise power, often expressed in decibels.']
],
complexcalc:[
['Analytic function','A complex function that is complex-differentiable throughout a neighborhood of each point in its domain.'],
['Cauchy–Riemann equations','The relations u_x=v_y and u_y=-v_x that are necessary for complex differentiability under suitable smoothness conditions.'],
['Complex derivative','The limit of the complex difference quotient as the complex increment approaches zero, independent of direction.'],
['Contour integral','An integral of a complex function along an oriented curve in the complex plane.'],
['Cauchy integral theorem','For an analytic function on a suitable simply connected region, the integral around a closed contour is zero.'],
['Cauchy integral formula','A formula expressing an analytic function value inside a contour through a boundary integral.'],
['Singularity','A point where a complex function fails to be analytic.'],
['Pole','An isolated singularity at which the function grows like a finite inverse power of the distance to the point.'],
['Residue','The coefficient of the inverse-first-power term in a Laurent expansion about an isolated singularity.'],
['Laurent series','A complex power series that can contain both positive and negative integer powers around an annulus.'],
['Taylor series','A power series in nonnegative powers about a point, representing an analytic function within its convergence region.'],
['Harmonic function','A twice-differentiable real function whose Laplacian is zero.'],
['Complex conjugate','The complex number formed by changing the sign of the imaginary part.'],
['Modulus','The nonnegative distance of a complex number from the origin.'],
['Argument','An angle that represents the direction of a nonzero complex number from the positive real axis.'],
['Branch cut','A curve or set removed from a domain to define a single-valued branch of a multivalued complex function.'],
['Simply connected domain','A domain in which every closed curve can be continuously contracted to a point without leaving the domain.'],
['Conformal mapping','An analytic mapping with nonzero derivative that locally preserves angles and their orientation.'],
['Laplace equation','The partial differential equation stating that the Laplacian of a function is zero.'],
['Residue theorem','A theorem evaluating certain closed contour integrals as two pi i times the sum of enclosed residues.']
],
ode:[
['Ordinary differential equation','An equation involving an unknown function of one independent variable and its ordinary derivatives.'],
['Order of an ODE','The highest derivative order appearing in the differential equation.'],
['Linear differential equation','An equation in which the unknown function and its derivatives appear linearly, with coefficients depending on the independent variable.'],
['Homogeneous linear equation','A linear differential equation whose forcing term is identically zero.'],
['Nonhomogeneous equation','A differential equation with a nonzero forcing term.'],
['Initial-value problem','A differential equation together with conditions specifying the solution and needed derivatives at one initial point.'],
['Boundary-value problem','A differential equation with conditions imposed at boundary points of the domain.'],
['General solution','A family of solutions containing arbitrary constants, typically before applying conditions.'],
['Particular solution','A specific solution obtained by fixing constants or by matching a forcing term.'],
['Characteristic equation','The algebraic equation used to find exponential modes of a constant-coefficient linear homogeneous ODE.'],
['Equilibrium solution','A constant solution at which the derivative or state change is zero.'],
['Integrating factor','A multiplier used to turn a first-order linear ODE into an exact derivative.'],
['Separation of variables','A method that rearranges an ODE so each variable and its differential appear on separate sides.'],
['Forward Euler method','A first-order numerical method using the current slope to estimate the next solution value.'],
['Runge–Kutta method','A family of numerical ODE methods combining several slope evaluations per step.'],
['Laplace-transform method','A technique that transforms a linear initial-value ODE into an algebraic equation in s.'],
['Superposition principle','For a linear equation, a sum of solutions to corresponding inputs gives the solution to their summed input.'],
['Stiff equation','An ODE for which explicit numerical methods may require very small steps for stability.'],
['Phase portrait','A plot of solution trajectories in state space rather than against time.'],
['Equilibrium stability','A description of whether nearby trajectories remain near an equilibrium or move away from it.']
],
vector:[
['Scalar field','A function assigning one scalar value to each point in a region.'],
['Vector field','A function assigning a vector to each point in a region.'],
['Gradient','A vector of partial derivatives pointing in the direction of greatest local increase of a scalar field.'],
['Directional derivative','The rate of change of a scalar field in a specified unit direction.'],
['Divergence','A scalar differential operator measuring local outward flux density of a vector field.'],
['Curl','A vector differential operator measuring local rotation of a vector field.'],
['Conservative field','A vector field expressible as the gradient of a potential function on the region.'],
['Potential function','A scalar function whose gradient equals a given conservative vector field.'],
['Line integral','An integral accumulated along a curve, possibly weighting a scalar field or a vector field along the path.'],
['Surface integral','An integral over a surface, often involving a scalar density or a vector flux.'],
['Flux','The amount of a vector field crossing an oriented surface, measured through its normal component.'],
['Green theorem','A theorem relating a planar closed-curve line integral to a double integral over the enclosed region.'],
['Stokes theorem','A theorem relating the circulation around a boundary curve to the surface integral of curl.'],
['Divergence theorem','A theorem relating outward flux across a closed surface to the volume integral of divergence.'],
['Unit normal vector','A vector of length one perpendicular to a surface or curve at a specified point.'],
['Irrotational field','A vector field whose curl is zero throughout the region.'],
['Solenoidal field','A vector field whose divergence is zero throughout the region.'],
['Jacobian matrix','The matrix of first-order partial derivatives of a vector-valued function.'],
['Laplacian','The scalar differential operator formed by the divergence of a gradient.'],
['Path independence','The property that a line integral of a conservative field depends only on endpoints, not on the path.']
],
calculus:[
['Derivative','The limit of the difference quotient that measures instantaneous rate of change.'],
['Differential','A linearized infinitesimal change represented by a derivative times an input increment.'],
['Definite integral','The signed accumulation of a function over a specified interval.'],
['Indefinite integral','A family of antiderivatives differing by an arbitrary constant.'],
['Fundamental theorem of calculus','The theorem connecting differentiation and integration and evaluating suitable definite integrals through antiderivatives.'],
['Chain rule','The rule for differentiating a composition by multiplying the outer derivative by the inner derivative.'],
['Product rule','The derivative of a product is the first factor times the derivative of the second plus the second times the derivative of the first.'],
['Quotient rule','The derivative of a quotient uses denominator times numerator derivative minus numerator times denominator derivative, divided by denominator squared.'],
['Integration by parts','The integration rule based on the derivative of a product, commonly written integral u dv equals uv minus integral v du.'],
['Substitution rule','A method of integration that replaces a composite expression with a new variable and its differential.'],
['Improper integral','An integral with an infinite interval or an unbounded integrand, defined using a limit.'],
['Critical point','A point in a function domain where the derivative is zero or fails to exist, as applicable.'],
['Local extremum','A local maximum or minimum relative to nearby domain points.'],
['Mean value theorem','A theorem guaranteeing a point whose derivative equals the average slope across an interval under its hypotheses.'],
['Taylor polynomial','A polynomial approximation built from derivatives at an expansion point.'],
['Convergence of an improper integral','The property that the limit defining an improper integral exists and is finite.'],
['Partial derivative','The derivative with respect to one variable while the other independent variables are held fixed.'],
['Total differential','The first-order linear approximation to the change of a multivariable function.'],
['Limit','The value a function approaches as its input approaches a specified point.'],
['Integration constant','The arbitrary constant added to an indefinite antiderivative.']
],
related:[
['Related-rates problem','A problem that links rates of change of several quantities through a common equation.'],
['Chain rule','The rule that differentiates a dependent quantity by multiplying derivatives along the dependency chain.'],
['Implicit differentiation','Differentiation of an equation relating variables without first solving explicitly for one variable.'],
['Geometric constraint','An equation connecting dimensions in a geometric configuration, such as lengths in a right triangle.'],
['Sphere-volume relation','The volume of a sphere depends on radius as four-thirds pi times the radius cubed.'],
['Sphere-surface-area relation','The surface area of a sphere equals four pi times radius squared.'],
['Circle-area relation','The area of a circle is pi times radius squared.'],
['Ladder constraint','For a ladder against a wall, the squared horizontal and vertical distances sum to the fixed squared ladder length.'],
['Shadow geometry','A similar-triangle relation used to connect the heights and lengths of an object and its shadow.'],
['Cone-volume relation','The volume of a cone is one-third of its base area times its height.'],
['Cylinder-volume relation','The volume of a circular cylinder is pi times radius squared times height.'],
['Angular velocity','The time derivative of angular position, usually measured in radians per second.'],
['Radial velocity','The time derivative of radial distance from a chosen origin.'],
['Instantaneous velocity','The time derivative of position.'],
['Acceleration','The time derivative of velocity, or second derivative of position.'],
['Sign convention','A consistent choice of positive direction used to interpret rates and avoid sign errors.'],
['Dimensional consistency','The requirement that terms added in an equation have matching physical units.'],
['Differentiate the constraint','The step of taking a time derivative of a relation after all quantities are treated as time-dependent.'],
['Sensitivity','The rate at which an output changes with respect to a parameter or input.'],
['Rate at an instant','The derivative evaluated at the specific time or configuration described in the problem.']
],
relativity:[
['Lorentz factor','The factor gamma equal to one divided by the square root of one minus beta squared.'],
['Proper time','The time interval measured by a clock at rest relative to the two events being timed.'],
['Time dilation','The result that a moving clock interval is longer than the corresponding proper time interval.'],
['Proper length','The length measured in the rest frame of the object.'],
['Length contraction','The result that an object moving relative to an observer is measured shorter along its motion.'],
['Rest frame','A reference frame in which the object under consideration is at rest.'],
['Spacetime interval','A Lorentz-invariant combination of temporal and spatial separations between events.'],
['Rest energy','The energy of an object in its rest frame, equal to rest mass times c squared.'],
['Relativistic total energy','The energy of a particle including rest energy and kinetic energy.'],
['Relativistic momentum','Momentum equal to gamma times rest mass times velocity.'],
['Relativistic velocity addition','The rule for combining collinear velocities while keeping the result below the speed of light.'],
['Relativity of simultaneity','The principle that spatially separated events simultaneous in one inertial frame need not be simultaneous in another.'],
['Light cone','The set of spacetime event directions reachable by light from an event or able to send light to it.'],
['Four-vector','A quantity with components that transform under Lorentz transformations as a spacetime vector.'],
['Mass-energy equivalence','The relationship between rest mass and rest energy given by E equals mc squared.'],
['Lorentz transformation','The coordinate transformation between inertial frames in special relativity.'],
['Relativistic kinetic energy','The total relativistic energy minus rest energy.'],
['Beta parameter','The dimensionless speed ratio v divided by c.'],
['Subluminal speed','A speed strictly less than the speed of light in vacuum.'],
['Invariant quantity','A quantity whose value is unchanged under Lorentz transformations.']
],
advanced:[
['Eigenvalue','A scalar lambda for which a nonzero vector satisfies Av equals lambda v.'],
['Eigenvector','A nonzero vector whose direction is preserved by a linear transformation, up to scaling.'],
['Determinant','A scalar associated with a square matrix that indicates invertibility when it is nonzero.'],
['Matrix rank','The dimension of the column space, equal to the number of linearly independent columns.'],
['Nullspace','The set of vectors mapped to zero by a matrix.'],
['Basis','A linearly independent set of vectors that spans a vector space.'],
['Orthogonality','The property that two vectors have zero inner product.'],
['Diagonalization','Representing a diagonalizable matrix as P D P inverse using its eigenvectors and eigenvalues.'],
['Taylor series','A power series whose coefficients are determined by derivatives at a center point.'],
['Bessel function','A solution of Bessel’s differential equation that arises in problems with cylindrical symmetry.'],
['Matrix exponential','The matrix-valued power series used to solve linear constant-coefficient systems.'],
['Condition number','A measure of how sensitive a problem’s solution is to small perturbations in its data.'],
['Newton method','An iterative root-finding method that uses the function value and derivative to update an estimate.'],
['Characteristic polynomial','The polynomial det(A-lambda I), whose roots are the eigenvalues of a square matrix.'],
['Orthonormal basis','A basis whose vectors are mutually orthogonal and each have unit length.'],
['Singular value','A nonnegative square root of an eigenvalue of A transpose A, or A conjugate-transpose A.'],
['Convergence','The property that a sequence or iterative process approaches a well-defined limit.'],
['Numerical stability','The property that small computational or data perturbations do not grow uncontrollably in a numerical method.'],
['Fourier coefficient','A coefficient giving the weight of a particular harmonic in a Fourier series.'],
['Separation of variables','A method that seeks product-form solutions by separating independent variables in a differential equation.']
],
em:[
['Coulomb law','The electrostatic force between point charges varies with their charge product and inversely with the square of their separation.'],
['Electric field','Force per unit positive test charge at a point.'],
['Electric potential','Electric potential energy per unit charge, defined up to a reference constant.'],
['Gauss law','The net electric flux through a closed surface equals enclosed charge divided by permittivity.'],
['Permittivity','A material parameter relating electric displacement to electric field in a linear medium.'],
['Capacitance','The ratio of stored charge magnitude to the voltage between conductors.'],
['Dielectric','An insulating material that can polarize in an applied electric field.'],
['Current density','Electric current per unit cross-sectional area, represented locally as a vector.'],
['Ampere–Maxwell law','The circulation of magnetic field is related to conduction current and changing electric displacement.'],
['Biot–Savart law','A law giving the magnetic field contribution from a steady current element.'],
['Magnetic flux','The surface integral of magnetic field through an oriented surface.'],
['Faraday law','A changing magnetic flux induces an electromotive force around a circuit.'],
['Lenz law','The induced effect opposes the change in magnetic flux that produces it.'],
['Inductance','A circuit property relating magnetic flux linkage to current under a linear model.'],
['Displacement current','The term associated with a changing electric displacement field in the Ampere–Maxwell law.'],
['Maxwell equations','The set of field equations describing electric and magnetic fields and their sources.'],
['Poynting vector','A vector giving electromagnetic energy-flux density and direction of energy transport.'],
['Boundary conditions','Relations specifying how field components behave across an interface between materials.'],
['Wave impedance','The ratio of electric-field magnitude to magnetic-field magnitude for a traveling electromagnetic wave.'],
['Polarization','The orientation and time behavior of the electric-field vector of an electromagnetic wave.']
],
econ:[
['Present worth','The value today of a future cash flow discounted at a specified interest rate.'],
['Future worth','The accumulated value of a present amount at a future date using a specified interest rate.'],
['Annuity','A sequence of equal cash flows occurring at regular intervals.'],
['Ordinary annuity','An annuity whose payments occur at the end of each period.'],
['Annuity due','An annuity whose payments occur at the beginning of each period.'],
['Nominal interest rate','The stated annual interest rate before adjusting for compounding frequency.'],
['Effective annual rate','The actual annual growth rate after accounting for compounding within the year.'],
['Compounding','The process in which earned interest is added to principal and subsequently earns interest.'],
['Discount rate','The rate used to convert future cash flows into present values.'],
['Net present value','The sum of discounted project cash flows including the initial investment with its sign.'],
['Internal rate of return','The discount rate at which a project’s net present value equals zero.'],
['MARR','The minimum attractive rate of return used as a benchmark for evaluating investments.'],
['Simple payback period','The time needed for cumulative cash savings to recover an initial investment, ignoring specified effects unless included.'],
['Depreciation','The accounting allocation of an asset’s depreciable cost over its useful life.'],
['Salvage value','The estimated value recovered from an asset at the end of its service life.'],
['Opportunity cost','The value of the best alternative forgone when a choice is made.'],
['Sunk cost','A past cost that cannot be recovered and should not affect a forward-looking choice by itself.'],
['Capital recovery','The equivalent periodic amount associated with recovering capital and interest over a time horizon.'],
['Inflation','A sustained increase in the general price level that reduces purchasing power.'],
['Sensitivity analysis','A method that examines how project outcomes change when assumptions or input parameters vary.']
],
data:[
['Arithmetic mean','The sum of observations divided by the number of observations.'],
['Median','The middle ordered observation, or the mean of the two middle values for an even-sized sample.'],
['Mode','The value or category occurring most frequently in a dataset.'],
['Range','The maximum observation minus the minimum observation.'],
['Population variance','The average squared deviation from the population mean, using population size as denominator.'],
['Sample variance','An estimate of population variance commonly formed by dividing squared deviations by n minus one.'],
['Standard deviation','The nonnegative square root of variance, measured in the same units as the data.'],
['Standard error','The standard deviation of a statistic’s sampling distribution; for the sample mean under usual assumptions it is s divided by square root of n.'],
['Z-score','The number of standard deviations an observation lies above or below a reference mean.'],
['Covariance','A measure of joint variation between two variables.'],
['Correlation coefficient','A normalized measure of the strength and direction of linear association between variables.'],
['Regression','A method for modeling the relationship between a response and one or more predictors.'],
['Residual','The observed response minus its model-predicted response.'],
['Confidence interval','An interval procedure designed to cover a fixed parameter at a stated long-run confidence level.'],
['P-value','Under a specified null hypothesis, the probability of a result at least as extreme as the observed one.'],
['Hypothesis test','A procedure for using sample evidence to assess a stated null hypothesis against an alternative.'],
['Outlier','An observation unusually distant from the pattern of the rest of the data.'],
['Coefficient of variation','The standard deviation divided by the mean, often expressed as a percentage when the mean is positive and meaningful.'],
['Normal distribution','A continuous distribution with a bell-shaped density determined by mean and variance.'],
['Central limit theorem','Under suitable assumptions, the standardized sum or mean of many independent observations approaches a normal distribution.']
]
};
/* ===== Expanded identification and true/false concept catalog =====
   Each category has 40 unique concept cards. Identification and true/false pools are sampled
   without replacement within an individual test; their generators are deliberately separate
   from the continuously randomized numeric-question bank. */
const EXTRA_CONCEPTS={
  "laplace": [
    [
      "Second shifting theorem",
      "Multiplying a transform by exp(-as) corresponds, under standard causality conditions, to delaying a time function by a seconds."
    ],
    [
      "Frequency shifting",
      "Multiplication of f(t) by exp(at) shifts F(s) to F(s-a) within the corresponding convergence region."
    ],
    [
      "Time scaling",
      "For a positive scale factor a, scaling the time argument changes the transform argument and contributes a factor 1/a."
    ],
    [
      "Transform of a constant",
      "The unilateral Laplace transform of the constant 1 is 1/s for Re(s) greater than zero."
    ],
    [
      "Transform of a ramp",
      "The unilateral Laplace transform of t is 1/s squared for Re(s) greater than zero."
    ],
    [
      "Repeated pole",
      "A pole of multiplicity m in a rational transform commonly produces a time-domain term involving t to the power m minus one times an exponential."
    ],
    [
      "Simple-pole residue",
      "For a simple pole, the residue is the limit of (s-s0)F(s) as s approaches the pole s0."
    ],
    [
      "Laplace-domain algebra",
      "Differentiation and integration in time can be converted to algebraic operations in s, while initial conditions appear explicitly."
    ],
    [
      "Zero-state response",
      "The output caused by an input with all initial stored-energy conditions set to zero."
    ],
    [
      "Zero-input response",
      "The response caused by nonzero initial conditions when the external input is zero."
    ],
    [
      "Transient response",
      "The part of a response that decays or changes before the long-term behavior is reached."
    ],
    [
      "Steady-state response",
      "The part of a response that remains after transients have decayed, when such a limit exists."
    ],
    [
      "Poles and stability",
      "For a continuous-time rational LTI system, poles strictly in the open left half-plane imply asymptotic internal stability under standard assumptions."
    ],
    [
      "Improper rational transform",
      "A rational function whose numerator degree is at least its denominator degree; polynomial division may be needed before partial fractions."
    ],
    [
      "Completing the square",
      "Rewriting a quadratic denominator as a shifted squared term plus a constant to match standard sine or cosine transform pairs."
    ],
    [
      "Unit-ramp input",
      "A causal input equal to t for nonnegative time and zero before the origin."
    ],
    [
      "Impulse response",
      "The output of an LTI system when the input is a unit impulse; it characterizes the system with zero initial conditions."
    ],
    [
      "Transfer-function pole",
      "A root of the simplified denominator of a system transfer function."
    ],
    [
      "Causality in unilateral transforms",
      "The one-sided transform naturally uses the time interval from zero onward, matching many initial-value models."
    ],
    [
      "Initial-value consistency",
      "The limit theorem for f(0+) requires the relevant limit to exist and the transform to satisfy suitable regularity conditions."
    ]
  ],
  "ztrans": [
    [
      "Left-sided sequence",
      "A sequence that is zero for sufficiently large positive indices and may have values at negative indices."
    ],
    [
      "Bilateral Z-transform",
      "The sum over all integer indices x[n]z to the negative n, with convergence described by a region of convergence."
    ],
    [
      "Unilateral Z-transform",
      "The one-sided transform summed over n from zero onward, often used for difference equations with initial conditions."
    ],
    [
      "Advance property",
      "Advancing a sequence shifts its index in a manner that introduces powers of z and possible boundary terms."
    ],
    [
      "Initial-rest difference equation",
      "A discrete-time model solved with all past-state or initial-condition terms set to zero."
    ],
    [
      "Discrete-time pole",
      "A root of the denominator of a simplified rational transfer function in z."
    ],
    [
      "Discrete-time stability",
      "For a causal rational LTI system, all poles strictly inside the unit circle imply BIBO stability."
    ],
    [
      "Unit circle",
      "The locus in the z-plane where the magnitude of z equals one; it is central to frequency response."
    ],
    [
      "Frequency response on the unit circle",
      "The transfer function evaluated at z equal to exp(j omega), where the evaluation is valid."
    ],
    [
      "Geometric-series convergence",
      "The series sum of r to the n converges for magnitude of r less than one."
    ],
    [
      "Finite-duration sequence",
      "A discrete-time sequence that is nonzero at only a finite number of indices."
    ],
    [
      "Sequence support",
      "The set of indices where a sequence is nonzero."
    ],
    [
      "Difference operator",
      "An operator such as x[n]-x[n-1] that expresses discrete change between samples."
    ],
    [
      "First difference",
      "The sequence x[n]-x[n-1], often used to approximate a derivative or detect transitions."
    ],
    [
      "Causal transfer function",
      "A transfer function whose corresponding impulse response is zero for negative time indices."
    ],
    [
      "Pole-zero cancellation",
      "Algebraic cancellation between a numerator zero and denominator pole; hidden internal modes may still matter physically."
    ],
    [
      "Steady-state sinusoidal response",
      "The long-term response of a stable linear system to a sinusoidal input at a fixed frequency."
    ],
    [
      "Discrete impulse response",
      "The output sequence produced by a unit impulse at index zero."
    ],
    [
      "Right-sided sequence",
      "A sequence whose nonzero values begin at some index and extend toward positive indices."
    ],
    [
      "Time reversal",
      "A sequence transformation that replaces x[n] with x[-n], generally reflecting its Z-transform region of convergence."
    ]
  ],
  "fourier": [
    [
      "Angular frequency",
      "Frequency measured in radians per second, related to ordinary frequency by omega equals 2 pi f."
    ],
    [
      "Fundamental period",
      "The smallest positive period of a nonconstant periodic signal."
    ],
    [
      "Harmonic",
      "A sinusoidal component whose frequency is an integer multiple of a fundamental frequency."
    ],
    [
      "Fourier series",
      "A representation of a periodic signal as a weighted sum of harmonically related complex exponentials or sines and cosines."
    ],
    [
      "Fourier transform pair",
      "A convention-specific mapping between a time-domain function and its frequency-domain spectrum."
    ],
    [
      "Frequency translation",
      "Multiplying a signal by a complex exponential shifts its Fourier spectrum in frequency."
    ],
    [
      "Time scaling property",
      "Compressing a signal in time expands its spectrum in frequency and changes the amplitude scaling according to the transform convention."
    ],
    [
      "Parseval relation",
      "An identity relating signal energy in time to integrated spectral energy, with constants depending on convention."
    ],
    [
      "Even signal",
      "A signal satisfying x(-t)=x(t); its Fourier transform has a corresponding symmetry."
    ],
    [
      "Odd signal",
      "A signal satisfying x(-t)=-x(t); its Fourier transform has a corresponding symmetry."
    ],
    [
      "Conjugate symmetry",
      "The Fourier transform of a real-valued signal satisfies X(-omega)=conjugate(X(omega))."
    ],
    [
      "Bandwidth",
      "A measure of the frequency range occupied or passed by a signal or system, defined according to context."
    ],
    [
      "Ideal low-pass filter",
      "An idealized system that passes frequencies below a cutoff and rejects frequencies above it."
    ],
    [
      "Spectral leakage",
      "Spreading of energy across frequency bins when a finite observation window does not align with signal periodicity."
    ],
    [
      "Window function",
      "A finite-duration weighting function used to reduce leakage or shape a spectral estimate."
    ],
    [
      "Impulse-train sampling",
      "Multiplication by a periodic train of impulses, which produces periodic spectral replicas under standard Fourier conventions."
    ],
    [
      "Modulation theorem",
      "A property describing how multiplication or mixing in one domain shifts or combines spectra in the other domain."
    ],
    [
      "Correlation spectrum",
      "The Fourier-transform relationship between autocorrelation and power spectral density under suitable assumptions."
    ],
    [
      "Power spectral density",
      "A frequency-domain description of how the average power of a stationary process is distributed by frequency."
    ],
    [
      "Fourier transform of a Gaussian",
      "Under common conventions, a Gaussian transforms to another Gaussian, with reciprocal width scaling."
    ]
  ],
  "convolution": [
    [
      "Impulse response superposition",
      "An LTI output can be formed by integrating or summing shifted impulse responses weighted by the input."
    ],
    [
      "Commutativity of convolution",
      "Swapping the two operands leaves convolution unchanged when the operations are defined."
    ],
    [
      "Associativity of convolution",
      "Grouping three convolved signals in either order gives the same result under usual conditions."
    ],
    [
      "Distributivity of convolution",
      "Convolution distributes over addition of signals."
    ],
    [
      "Convolution support length",
      "For finite sequences of lengths M and N, the full linear convolution has length M+N-1 when both are nonempty."
    ],
    [
      "Circular convolution",
      "A periodic convolution in which indexing wraps around a fixed sequence length."
    ],
    [
      "Linear convolution",
      "The ordinary convolution without wrap-around, representing the output of an LTI system for finite sequences."
    ],
    [
      "Overlap interval",
      "The range of shifts where two finite-duration functions overlap and contribute to the convolution integral."
    ],
    [
      "Convolution with an impulse",
      "Convolution with a shifted Dirac delta reproduces a shifted copy of the other signal."
    ],
    [
      "Convolution with a unit step",
      "Convolution with a causal unit step yields a cumulative integral or sum under standard definitions."
    ],
    [
      "Moving-average filter",
      "A discrete filter that averages a finite set of neighboring samples, implementable by convolution."
    ],
    [
      "Convolution kernel",
      "The function or sequence used to combine local contributions in a convolution operation."
    ],
    [
      "Causal LTI convolution",
      "For causal input and impulse response, the continuous-time integral can be taken from zero to t."
    ],
    [
      "Output length in 2D convolution",
      "The output dimensions depend on input size, kernel size, padding, and stride."
    ],
    [
      "Convolution theorem for Fourier transforms",
      "Convolution in time corresponds to multiplication in frequency, with normalization dependent on convention."
    ],
    [
      "Correlation versus convolution",
      "Correlation measures similarity across shifts; convolution includes a reversal of one operand under common definitions."
    ],
    [
      "Impulse-response identification",
      "Estimating a system impulse response helps predict outputs for arbitrary inputs through convolution."
    ],
    [
      "Finite impulse response filter",
      "A discrete-time filter with a finite-length impulse response."
    ],
    [
      "Convolution sum",
      "The discrete-time sum y[n]=sum over k of x[k]h[n-k] defining an LTI output."
    ],
    [
      "Convolution integral",
      "The continuous-time integral y(t)=integral x(tau)h(t-tau) d tau defining an LTI output."
    ]
  ],
  "controls": [
    [
      "Open-loop control",
      "A control arrangement that does not use measured output feedback to adjust its input."
    ],
    [
      "Closed-loop control",
      "A control arrangement that compares output with a reference and feeds back the error."
    ],
    [
      "Reference input",
      "The desired value or trajectory that a control system should track."
    ],
    [
      "Tracking error",
      "The difference between the reference and the measured output under a stated sign convention."
    ],
    [
      "Controller",
      "A component or algorithm that maps error and other signals into a control action."
    ],
    [
      "Plant",
      "The physical process or system being controlled."
    ],
    [
      "Sensor",
      "A device that measures a physical quantity and converts it into a usable signal."
    ],
    [
      "Actuator",
      "A device that converts a control signal into a physical action on the plant."
    ],
    [
      "Proportional controller",
      "A controller whose output is proportional to the current error."
    ],
    [
      "Integral control action",
      "A control term proportional to the time integral of error, which can remove steady-state error for suitable systems."
    ],
    [
      "Derivative control action",
      "A control term proportional to the rate of change of error, often providing anticipatory damping but amplifying high-frequency noise."
    ],
    [
      "Settling time",
      "The time required for a response to enter and remain within a specified band around its final value."
    ],
    [
      "Rise time",
      "A measure of how long a response takes to move between specified fractions of its final value."
    ],
    [
      "Percent overshoot",
      "The peak response excursion above the final value expressed as a percentage of the response change."
    ],
    [
      "Damping ratio",
      "A dimensionless parameter describing damping in a standard second-order system."
    ],
    [
      "Natural frequency",
      "A characteristic frequency of an undamped or reference second-order system."
    ],
    [
      "Gain margin",
      "A stability margin describing how much loop gain can increase before a specified frequency-domain instability condition."
    ],
    [
      "Phase margin",
      "A stability margin based on the phase angle relative to -180 degrees at the gain crossover frequency."
    ],
    [
      "Steady-state error constant",
      "A low-frequency loop quantity used to characterize tracking error for standard input types."
    ],
    [
      "Root locus",
      "A plot of how closed-loop poles move as a scalar feedback gain varies."
    ]
  ],
  "signals": [
    [
      "Amplitude",
      "The magnitude of a signal value or of a periodic waveform’s peak, according to context."
    ],
    [
      "Peak-to-peak value",
      "The difference between the maximum and minimum values of a waveform."
    ],
    [
      "RMS value",
      "The square root of the time average of the squared signal, associated with equivalent heating for a resistor."
    ],
    [
      "Duty cycle",
      "The fraction of a period that a periodic switching signal spends in its active state."
    ],
    [
      "Pulse width",
      "The duration of a pulse measured between defined transition points."
    ],
    [
      "Sampling rate",
      "The number of samples acquired per second."
    ],
    [
      "Nyquist frequency",
      "Half the sampling rate; the highest frequency uniquely represented under ideal band-limited sampling assumptions."
    ],
    [
      "Aliasing",
      "The ambiguity created when sampling makes distinct continuous-time frequencies appear as the same discrete-time frequency."
    ],
    [
      "Quantization error",
      "The difference between a sampled value and its mapped discrete amplitude level."
    ],
    [
      "Signal-to-noise ratio",
      "The ratio of signal power to noise power, often expressed in decibels."
    ],
    [
      "Decibel",
      "A logarithmic unit for ratios; power ratios use ten times log base ten, while amplitude ratios use twenty times log base ten under equal impedance or comparable conditions."
    ],
    [
      "Phase difference",
      "The angular displacement between two sinusoidal signals of the same frequency."
    ],
    [
      "Beat frequency",
      "The absolute difference between two nearby sinusoidal frequencies that combine to produce a slowly varying envelope."
    ],
    [
      "Envelope",
      "A curve describing the slowly varying amplitude contour of a modulated or combined waveform."
    ],
    [
      "Amplitude modulation",
      "A modulation method in which a carrier amplitude varies with a message signal."
    ],
    [
      "Frequency modulation",
      "A modulation method in which instantaneous carrier frequency varies with the message signal."
    ],
    [
      "Impulse signal",
      "An idealized signal concentrated at an instant and used to characterize linear systems."
    ],
    [
      "Energy signal",
      "A signal with finite total energy and typically zero average power over an infinite horizon."
    ],
    [
      "Power signal",
      "A signal with finite nonzero average power over time but generally infinite total energy."
    ],
    [
      "Deterministic signal",
      "A signal whose values are fully described by a known rule rather than modeled as random outcomes."
    ]
  ],
  "complexcalc": [
    [
      "Analytic function",
      "A complex function that is complex differentiable in a neighborhood of each point of its domain."
    ],
    [
      "Holomorphic function",
      "A function complex differentiable at every point of an open set."
    ],
    [
      "Cauchy–Riemann equations",
      "The partial-derivative relations u_x=v_y and u_y=-v_x required for differentiability when the partials are suitably regular."
    ],
    [
      "Harmonic function",
      "A twice-differentiable real function satisfying Laplace’s equation u_xx+u_yy=0."
    ],
    [
      "Complex conjugate",
      "The number obtained by reversing the sign of the imaginary component of a complex number."
    ],
    [
      "Principal argument",
      "A chosen representative of a complex number’s angle, commonly restricted to a specified interval such as (-pi,pi]."
    ],
    [
      "Euler formula",
      "The identity exp(i theta)=cos(theta)+i sin(theta)."
    ],
    [
      "Complex logarithm",
      "A multivalued logarithm whose values depend on the argument branch; a principal branch selects one value."
    ],
    [
      "Residue",
      "The coefficient of (z-z0)^(-1) in a Laurent expansion around an isolated singularity z0."
    ],
    [
      "Laurent series",
      "A series expansion that can include both positive and negative integer powers around an isolated singularity."
    ],
    [
      "Simple pole",
      "An isolated pole of order one."
    ],
    [
      "Essential singularity",
      "An isolated singularity whose Laurent series has infinitely many negative-power terms."
    ],
    [
      "Removable singularity",
      "An isolated singularity at which a function can be defined anew to become analytic."
    ],
    [
      "Contour integral",
      "A line integral of a complex function along an oriented curve in the complex plane."
    ],
    [
      "Cauchy integral theorem",
      "For an analytic function on a suitable simply connected region, the integral around a closed contour is zero."
    ],
    [
      "Cauchy integral formula",
      "A formula recovering the value of an analytic function inside a contour from its values on the contour."
    ],
    [
      "Residue theorem",
      "A contour integral around isolated singularities equals 2 pi i times the sum of enclosed residues under standard conditions."
    ],
    [
      "Branch cut",
      "A curve removed from a domain to make a multivalued function such as a logarithm single-valued on the remaining domain."
    ],
    [
      "Complex derivative",
      "The limit of a complex difference quotient that must be independent of the direction of approach."
    ],
    [
      "Conformal map",
      "An analytic map with nonzero derivative that locally preserves angles and orientation."
    ]
  ],
  "ode": [
    [
      "Separable differential equation",
      "A first-order equation whose variables can be rearranged so that all y terms and dy occur on one side and all x terms and dx on the other."
    ],
    [
      "Exact differential equation",
      "An equation M(x,y)dx+N(x,y)dy=0 that has a potential function whose total differential equals the left side."
    ],
    [
      "Exactness test",
      "For continuously differentiable M and N on a suitable region, the condition M_y=N_x is a common test for exactness."
    ],
    [
      "Integrating factor",
      "A nonzero multiplier that converts a differential equation into a more easily solved or exact form."
    ],
    [
      "Bernoulli equation",
      "A first-order nonlinear ODE y′+P(x)y=Q(x)y^n that can be linearized with a power substitution when n differs from zero and one."
    ],
    [
      "Homogeneous first-order ODE",
      "A first-order equation often expressible as y′=F(y/x), solvable using y=vx under appropriate conditions."
    ],
    [
      "Undetermined coefficients",
      "A method for finding a particular solution of a linear constant-coefficient ODE using a trial form based on the forcing function."
    ],
    [
      "Variation of parameters",
      "A method for constructing a particular solution of a linear ODE by allowing coefficients of homogeneous solutions to vary."
    ],
    [
      "Characteristic polynomial",
      "The polynomial obtained by substituting y=exp(rt) into a constant-coefficient homogeneous linear ODE."
    ],
    [
      "Repeated characteristic root",
      "A root with multiplicity greater than one that requires additional independent solutions multiplied by powers of t."
    ],
    [
      "Complex characteristic roots",
      "A conjugate pair alpha plus or minus beta i producing real homogeneous terms exp(alpha t) times sine and cosine of beta t."
    ],
    [
      "Wronskian",
      "A determinant built from functions and derivatives used to test linear independence under suitable conditions."
    ],
    [
      "Particular solution",
      "One solution of a nonhomogeneous equation that accounts for its forcing term."
    ],
    [
      "General solution",
      "A family containing all solutions in the domain, usually combining the homogeneous solution and a particular solution."
    ],
    [
      "Initial-value problem",
      "A differential equation together with solution values or derivative values at a specified point."
    ],
    [
      "Boundary-value problem",
      "A differential equation whose constraints are imposed at boundaries or multiple locations."
    ],
    [
      "Equilibrium solution",
      "A constant solution of an autonomous differential equation."
    ],
    [
      "Stiff differential equation",
      "An ODE whose numerical solution may require very small explicit time steps because of widely separated dynamical scales."
    ],
    [
      "Euler method",
      "A first-order numerical method using y at the current point and the local slope to estimate the next value."
    ],
    [
      "Runge–Kutta method",
      "A family of numerical integration schemes using multiple slope evaluations per step to improve accuracy."
    ]
  ],
  "vector": [
    [
      "Scalar field",
      "A function assigning a scalar value to each point in a region of space."
    ],
    [
      "Vector field",
      "A function assigning a vector to each point in a region of space."
    ],
    [
      "Gradient",
      "The vector of partial derivatives of a scalar field, pointing in the direction of steepest local increase."
    ],
    [
      "Divergence",
      "A scalar differential operator measuring local source strength or net outward flow per unit volume."
    ],
    [
      "Curl",
      "A vector differential operator describing local circulation of a vector field."
    ],
    [
      "Directional derivative",
      "The rate of change of a scalar field in a specified unit direction."
    ],
    [
      "Conservative vector field",
      "A field expressible as the gradient of a potential on the domain, with path-independent line integrals there."
    ],
    [
      "Potential function",
      "A scalar function whose gradient equals a given conservative vector field."
    ],
    [
      "Flux integral",
      "An integral of the normal component of a vector field through an oriented surface."
    ],
    [
      "Line integral",
      "An integral accumulated along a curve, using either a scalar weight or a vector field dotted with a path differential."
    ],
    [
      "Surface integral",
      "An integral over a two-dimensional surface, often used to calculate mass, area-weighted quantities, or flux."
    ],
    [
      "Volume integral",
      "An integral over a three-dimensional region."
    ],
    [
      "Divergence theorem",
      "The outward flux across a closed surface equals the volume integral of divergence inside, under suitable regularity."
    ],
    [
      "Stokes theorem",
      "The circulation around a closed boundary curve equals the flux of curl through an oriented spanning surface."
    ],
    [
      "Green theorem",
      "A planar circulation or flux line integral can be related to a double integral over the enclosed region."
    ],
    [
      "Laplacian",
      "The divergence of the gradient; in Cartesian coordinates it is the sum of second partial derivatives."
    ],
    [
      "Jacobian matrix",
      "The matrix of first partial derivatives of a vector-valued map."
    ],
    [
      "Coordinate transformation",
      "A change of variables that maps points between coordinate descriptions, with appropriate scaling factors in integrals."
    ],
    [
      "Unit normal vector",
      "A vector of magnitude one perpendicular to a surface at a regular point."
    ],
    [
      "Triple product",
      "A scalar or vector expression combining three vectors, commonly used for volume and cross-product identities."
    ]
  ],
  "calculus": [
    [
      "Product rule",
      "The derivative of a product fg equals f prime times g plus f times g prime."
    ],
    [
      "Quotient rule",
      "The derivative of f/g equals (f prime g minus f g prime) divided by g squared when g is nonzero."
    ],
    [
      "Chain rule",
      "The derivative of a composition accounts for the derivative of the outer function multiplied by the derivative of the inner function."
    ],
    [
      "Integration by parts",
      "The identity integral u dv = uv - integral v du, used to integrate products."
    ],
    [
      "U-substitution",
      "A change of variable that simplifies an integral by replacing a composite inner expression with a new variable."
    ],
    [
      "Partial-fraction integration",
      "Decomposing a rational function into simpler fractions before integrating."
    ],
    [
      "Trigonometric substitution",
      "A substitution using trigonometric identities to simplify radicals such as sqrt(a squared minus x squared)."
    ],
    [
      "Fundamental theorem of calculus",
      "A result connecting differentiation and integration and evaluating definite integrals through antiderivatives."
    ],
    [
      "Improper integral",
      "An integral with an infinite interval or an unbounded integrand, defined through a limit when it converges."
    ],
    [
      "Convergence of an integral",
      "The property that an improper integral approaches a finite limit."
    ],
    [
      "Critical point",
      "A point in the domain where the derivative is zero or does not exist, often considered when finding extrema."
    ],
    [
      "Local maximum",
      "A function value at least as large as neighboring values within some domain neighborhood."
    ],
    [
      "Local minimum",
      "A function value at most as large as neighboring values within some domain neighborhood."
    ],
    [
      "Second derivative test",
      "A test using the second derivative at a critical point to classify a local extremum when conditions apply."
    ],
    [
      "Taylor polynomial",
      "A polynomial built from function derivatives at a point to approximate a sufficiently smooth function nearby."
    ],
    [
      "Maclaurin series",
      "A Taylor series centered at zero."
    ],
    [
      "L’Hôpital rule",
      "A limit-evaluation method for appropriate indeterminate forms such as 0/0 or infinity/infinity."
    ],
    [
      "Mean value theorem",
      "A theorem ensuring a derivative equals the average rate of change somewhere in an interval under continuity and differentiability assumptions."
    ],
    [
      "Parametric derivative",
      "For x(t), y(t) with x prime nonzero, dy/dx equals y prime divided by x prime."
    ],
    [
      "Arc length",
      "The length of a curve, calculated using an integral of the speed of its parameterization or a derivative-based formula."
    ]
  ],
  "related": [
    [
      "Related-rates method",
      "Differentiate an equation connecting changing quantities with respect to time and substitute known values afterward."
    ],
    [
      "Implicit differentiation",
      "Differentiating an equation involving dependent and independent variables without first solving explicitly for the dependent variable."
    ],
    [
      "Radius rate",
      "The time derivative of a circle or sphere radius."
    ],
    [
      "Area growth rate",
      "The time derivative of area, such as dA/dt for a changing circle."
    ],
    [
      "Volume growth rate",
      "The time derivative of a volume, such as dV/dt for an expanding sphere."
    ],
    [
      "Ladder problem",
      "A geometric related-rates model for a rigid ladder sliding against a wall."
    ],
    [
      "Shadow-length model",
      "A similar-triangle relationship used to connect positions and rates of a moving object and its shadow."
    ],
    [
      "Cone filling model",
      "A fluid-volume problem that links water height and surface radius through similar triangles."
    ],
    [
      "Sign convention in rates",
      "A consistent choice of positive direction that determines whether a quantity is increasing or decreasing."
    ],
    [
      "Instantaneous rate",
      "The derivative of a quantity with respect to time at a particular instant."
    ],
    [
      "Chain rule in time",
      "For a composite quantity Q(x(t)), its time rate is dQ/dt=(dQ/dx)(dx/dt)."
    ],
    [
      "Pythagorean constraint",
      "A geometric relation such as x squared plus y squared equals a constant squared for a right triangle."
    ],
    [
      "Similar triangles",
      "Triangles with equal corresponding angles and proportional side lengths."
    ],
    [
      "Moving-point distance",
      "Distance between objects can be modeled as a function of their time-varying coordinates."
    ],
    [
      "Separation rate",
      "The derivative of the distance between two moving objects."
    ],
    [
      "Angle rate",
      "The time derivative of an angle, often related to tangent or trigonometric geometry."
    ],
    [
      "Lateral area rate",
      "The derivative of a surface-area expression for a changing solid."
    ],
    [
      "Constraint equation",
      "An equation that restricts multiple changing variables to move consistently with a fixed geometric or physical relation."
    ],
    [
      "Evaluate-after-differentiating rule",
      "In related-rates work, differentiate the symbolic constraint first, then insert the instantaneous geometric values."
    ],
    [
      "Dimensional check for rates",
      "A units check ensuring a calculated derivative has units of the quantity per unit time."
    ]
  ],
  "relativity": [
    [
      "Speed of light in vacuum",
      "The invariant vacuum light speed c, approximately 3.00 times 10 to the 8 meters per second."
    ],
    [
      "Lorentz factor",
      "The factor gamma=1/sqrt(1-v squared/c squared) for relative speed magnitude below c."
    ],
    [
      "Proper time",
      "The time interval measured by a clock at rest in the frame where the two events occur at the same place."
    ],
    [
      "Proper length",
      "The length measured in the rest frame of the object."
    ],
    [
      "Time dilation",
      "The longer coordinate-time interval between events for a clock moving relative to an observer, compared with its proper time."
    ],
    [
      "Length contraction",
      "The reduction of measured length along the direction of relative motion compared with the object’s proper length."
    ],
    [
      "Relativistic momentum",
      "Momentum p=gamma mv for a particle of rest mass m and speed v."
    ],
    [
      "Rest energy",
      "The energy E0=mc squared associated with a particle’s rest mass."
    ],
    [
      "Total relativistic energy",
      "For a massive particle E=gamma mc squared."
    ],
    [
      "Energy-momentum relation",
      "The invariant relation E squared equals p squared c squared plus m squared c to the fourth."
    ],
    [
      "Relativity of simultaneity",
      "Events simultaneous in one inertial frame need not be simultaneous in another frame in relative motion."
    ],
    [
      "Inertial frame",
      "A reference frame in which a force-free body moves at constant velocity."
    ],
    [
      "Lorentz transformation",
      "The coordinate transformation relating space and time between inertial frames in special relativity."
    ],
    [
      "Velocity addition",
      "The relativistic formula for combining velocities so the result remains below c for subluminal inputs."
    ],
    [
      "Time-like interval",
      "A spacetime interval for which the temporal separation dominates the spatial separation when using the usual Minkowski convention."
    ],
    [
      "Light-like interval",
      "A spacetime interval with zero invariant interval, characteristic of light in vacuum."
    ],
    [
      "Space-like interval",
      "A spacetime interval for which spatial separation dominates temporal separation under the usual Minkowski convention."
    ],
    [
      "Rest mass",
      "The invariant mass measured in the particle’s rest frame."
    ],
    [
      "Relativistic kinetic energy",
      "The energy difference K=(gamma-1)mc squared between total energy and rest energy."
    ],
    [
      "Invariant interval",
      "A spacetime quantity unchanged by Lorentz transformations."
    ]
  ],
  "advanced": [
    [
      "Eigenvalue",
      "A scalar lambda for which a nonzero vector v satisfies Av=lambda v."
    ],
    [
      "Eigenvector",
      "A nonzero vector whose direction is preserved by a linear transformation, scaled by an eigenvalue."
    ],
    [
      "Diagonalization",
      "Representing a diagonalizable matrix as a similarity transform of a diagonal matrix."
    ],
    [
      "Determinant",
      "A scalar associated with a square matrix that indicates invertibility when nonzero."
    ],
    [
      "Matrix rank",
      "The dimension of the column space or row space of a matrix."
    ],
    [
      "Orthogonal vectors",
      "Vectors with zero inner product under the standard real Euclidean inner product."
    ],
    [
      "Orthonormal basis",
      "A basis whose vectors are mutually orthogonal and each have unit norm."
    ],
    [
      "Fourier series coefficient",
      "A coefficient quantifying the amplitude and phase of a harmonic component in a periodic representation."
    ],
    [
      "Taylor expansion",
      "A local polynomial series formed from derivatives evaluated at a center point."
    ],
    [
      "Numerical conditioning",
      "A measure of how much input perturbations can affect a mathematical problem’s output."
    ],
    [
      "Truncation error",
      "The error caused by replacing an exact mathematical process with a finite approximation."
    ],
    [
      "Round-off error",
      "Error caused by finite-precision representation and arithmetic."
    ],
    [
      "Newton–Raphson method",
      "An iterative root-finding method updating x by subtracting f(x)/f prime(x) when the derivative is suitable."
    ],
    [
      "Bisection method",
      "A bracketing root-finding method that repeatedly halves an interval with opposite-sign endpoint values."
    ],
    [
      "Numerical quadrature",
      "A numerical approximation to a definite integral using weighted function samples."
    ],
    [
      "Condition number",
      "A measure, often relative, of how sensitive a problem is to small input changes."
    ],
    [
      "Singular matrix",
      "A square matrix with zero determinant and no inverse."
    ],
    [
      "Least-squares solution",
      "A solution minimizing the squared norm of a residual, often used for overdetermined linear systems."
    ],
    [
      "Complex eigenpair",
      "An eigenvalue and eigenvector that may be complex even for real matrices."
    ],
    [
      "Boundary condition",
      "A constraint imposed at a boundary in a differential equation or field problem."
    ]
  ],
  "em": [
    [
      "Magnetic dipole moment",
      "A vector characterizing the strength and orientation of a magnetic dipole; for a planar current loop its magnitude is current times area."
    ],
    [
      "Torque on a magnetic dipole",
      "The torque on a magnetic moment m in field B is m cross B."
    ],
    [
      "Magnetic potential energy",
      "For a magnetic dipole in a uniform field, U=-m dot B."
    ],
    [
      "Motional electromotive force",
      "An induced voltage caused by conductor motion through a magnetic field, often written as a line integral of (v cross B) dot dl."
    ],
    [
      "Faraday law",
      "The induced electromotive force around a closed path equals the negative time rate of change of magnetic flux through it."
    ],
    [
      "Lenz law",
      "The direction of induced current opposes the change in magnetic flux that produces it."
    ],
    [
      "Magnetic flux",
      "The surface integral of magnetic flux density B dotted with the oriented area element."
    ],
    [
      "Biot–Savart law",
      "A relation used to calculate a magnetic field contribution from a current element."
    ],
    [
      "Ampere–Maxwell law",
      "The circulation of B relates to conduction current and displacement current, with constants set by the unit system."
    ],
    [
      "Lorentz force",
      "The force on charge q moving with velocity v in electric field E and magnetic field B is q(E+v cross B)."
    ],
    [
      "Right-hand rule",
      "A directional rule for cross products and fields around a current."
    ],
    [
      "Magnetic energy density",
      "In a linear medium, magnetic energy density is commonly B squared divided by twice the permeability."
    ],
    [
      "Inductance",
      "A parameter relating flux linkage and current for a linear inductor."
    ],
    [
      "Self-induced voltage",
      "The voltage associated with changing current through an inductor, with sign set by the passive convention and Lenz law."
    ],
    [
      "Mutual inductance",
      "A parameter describing how current change in one circuit induces voltage in another coupled circuit."
    ],
    [
      "Boundary condition for B",
      "The normal component of magnetic flux density is continuous across an interface in the absence of magnetic monopoles."
    ],
    [
      "Divergence-free magnetic field",
      "Magnetic flux density satisfies div B=0, expressing absence of magnetic monopoles in classical electromagnetism."
    ],
    [
      "Poynting vector",
      "A vector describing electromagnetic energy flux density, equal to E cross H in common macroscopic notation."
    ],
    [
      "Skin effect",
      "The tendency of alternating current to concentrate near a conductor surface at higher frequencies."
    ],
    [
      "Magnetic dipole far field",
      "At distances large compared with dipole size, a localized current distribution can be approximated by a dipole field."
    ]
  ],
  "econ": [
    [
      "Present worth",
      "The value today of future cash flows discounted to a common reference time."
    ],
    [
      "Future worth",
      "The value of a present amount or earlier cash flow compounded forward to a later time."
    ],
    [
      "Effective annual rate",
      "The annualized compound rate that reflects within-year compounding."
    ],
    [
      "Nominal interest rate",
      "An annual quoted rate that does not by itself account for compounding frequency."
    ],
    [
      "Uniform-series present worth",
      "The present value of equal end-of-period payments discounted at a fixed rate."
    ],
    [
      "Capital recovery factor",
      "A factor converting a present amount into equal annual payments over a specified term and interest rate."
    ],
    [
      "Sinking fund factor",
      "A factor converting a present target or principal amount into equal periodic deposits needed to reach a future value."
    ],
    [
      "Net present value",
      "The sum of discounted project cash inflows and outflows using a specified discount rate."
    ],
    [
      "Internal rate of return",
      "The discount rate at which a project’s net present value equals zero, subject to cash-flow caveats."
    ],
    [
      "Payback period",
      "The time required for cumulative project cash inflows to recover the initial investment, under a stated convention."
    ],
    [
      "Straight-line depreciation",
      "A method allocating depreciable cost evenly over the asset’s useful life."
    ],
    [
      "Book value",
      "The asset’s recorded value after accumulated depreciation under the chosen accounting method."
    ],
    [
      "Salvage value",
      "The estimated value of an asset at the end of its service life."
    ],
    [
      "Depreciable basis",
      "The portion of asset cost treated as depreciable, commonly cost minus salvage value."
    ],
    [
      "Break-even quantity",
      "The output level at which total revenue equals total cost under the assumed model."
    ],
    [
      "Contribution margin",
      "Selling price per unit minus variable cost per unit."
    ],
    [
      "Benefit-cost ratio",
      "A ratio comparing discounted benefits with discounted costs under a stated convention."
    ],
    [
      "Opportunity cost",
      "The value of the best alternative forgone when a choice is made."
    ],
    [
      "Inflation adjustment",
      "A conversion between nominal and real monetary amounts using a price index or inflation rate."
    ],
    [
      "Economic life",
      "The service period that minimizes equivalent annual cost or otherwise optimizes an economic criterion."
    ]
  ],
  "data": [
    [
      "Null hypothesis",
      "A default statistical statement evaluated against sample evidence."
    ],
    [
      "Alternative hypothesis",
      "The statement considered when evidence is inconsistent with the null hypothesis."
    ],
    [
      "Test statistic",
      "A computed quantity whose sampling distribution is known or approximated under the null hypothesis."
    ],
    [
      "Degrees of freedom",
      "A count of independent information pieces available after constraints or parameters are estimated."
    ],
    [
      "One-sample t statistic",
      "A statistic comparing a sample mean with a hypothesized population mean when population standard deviation is unknown."
    ],
    [
      "Welch two-sample t statistic",
      "A statistic comparing two independent means without assuming equal population variances."
    ],
    [
      "Pooled-variance t test",
      "A two-sample t procedure that assumes equal population variances and estimates a common variance."
    ],
    [
      "Chi-square goodness-of-fit test",
      "A test comparing observed categorical counts with expected counts from a specified probability model."
    ],
    [
      "Chi-square independence test",
      "A test assessing association between two categorical variables using a contingency table."
    ],
    [
      "Analysis of variance",
      "A framework comparing group means using between-group and within-group variability."
    ],
    [
      "F statistic",
      "A ratio of mean squares often used in ANOVA and variance-related tests."
    ],
    [
      "Welch degrees of freedom",
      "An approximation for the degrees of freedom of the unequal-variance two-sample t statistic."
    ],
    [
      "Type I error",
      "Rejecting a true null hypothesis."
    ],
    [
      "Type II error",
      "Failing to reject a false null hypothesis."
    ],
    [
      "Statistical power",
      "The probability of rejecting the null hypothesis under a specified alternative."
    ],
    [
      "Confidence level",
      "The long-run coverage rate targeted by a confidence interval procedure under its assumptions."
    ],
    [
      "Paired observations",
      "Measurements naturally matched in pairs, often analyzed through within-pair differences."
    ],
    [
      "Sampling bias",
      "A systematic tendency for the collected sample to differ from the target population."
    ],
    [
      "Outlier resistance",
      "The degree to which a statistic is insensitive to unusually extreme observations."
    ],
    [
      "Effect size",
      "A measure of the magnitude of a difference or association, distinct from statistical significance."
    ]
  ],
  "geas": [
    [
      "Newton’s first law",
      "A body remains at rest or in uniform straight-line motion unless acted on by a net external force."
    ],
    [
      "Newton’s second law",
      "The net force equals the time rate of change of momentum and reduces to F=ma for constant mass."
    ],
    [
      "Newton’s third law",
      "Interaction forces between two bodies are equal in magnitude and opposite in direction."
    ],
    [
      "Work",
      "For a constant force parallel to displacement, work equals force times displacement."
    ],
    [
      "Kinetic energy",
      "The energy associated with translational motion is one half mass times speed squared."
    ],
    [
      "Gravitational potential energy",
      "Near Earth’s surface, the change in gravitational potential energy is approximately m g times the change in height."
    ],
    [
      "Linear momentum",
      "The product of mass and velocity for a particle at nonrelativistic speeds."
    ],
    [
      "Impulse",
      "The time integral of net force equals the change in momentum."
    ],
    [
      "Conservation of energy",
      "Total energy of an isolated system remains constant when all relevant forms are included."
    ],
    [
      "Conservation of momentum",
      "Total momentum is conserved in an isolated system with zero net external impulse."
    ],
    [
      "Static equilibrium",
      "A rigid body is in static equilibrium when net force and net torque are both zero."
    ],
    [
      "Moment of a force",
      "The torque of a force about a point is the cross product of position vector and force."
    ],
    [
      "Pressure",
      "Normal force per unit area."
    ],
    [
      "Density",
      "Mass per unit volume."
    ],
    [
      "Continuity equation",
      "Mass conservation for fluid flow; for steady incompressible flow in a pipe, area times average speed is constant."
    ],
    [
      "Bernoulli principle",
      "For steady incompressible inviscid flow along a streamline, pressure, kinetic, and gravitational potential terms sum to a constant."
    ],
    [
      "Buoyant force",
      "The upward force on an immersed body equals the weight of displaced fluid under Archimedes’ principle."
    ],
    [
      "Specific heat capacity",
      "Energy required per unit mass to raise temperature by one degree under a stated process."
    ],
    [
      "First law of thermodynamics",
      "A conservation statement relating change in internal energy to heat added and work done, with sign convention stated."
    ],
    [
      "Ideal gas law",
      "The relation pV=nRT for an ideal gas at equilibrium."
    ],
    [
      "Thermal efficiency",
      "Useful output energy or work divided by energy input for a thermal process."
    ],
    [
      "Ohm’s law",
      "For an ohmic element at fixed conditions, voltage equals current times resistance."
    ],
    [
      "Kirchhoff current law",
      "The algebraic sum of currents entering a node is zero under a consistent sign convention."
    ],
    [
      "Kirchhoff voltage law",
      "The algebraic sum of voltages around a closed lumped-circuit loop is zero."
    ],
    [
      "Dimensional homogeneity",
      "Every term added in a physical equation must have compatible dimensions."
    ],
    [
      "SI base unit",
      "A unit for one of the seven SI base quantities."
    ],
    [
      "Vector resolution",
      "Expressing a vector as components along chosen coordinate axes."
    ],
    [
      "Projectile motion",
      "Ideal motion under uniform gravity with no air resistance, separable into horizontal and vertical components."
    ],
    [
      "Centripetal acceleration",
      "The inward acceleration of circular motion has magnitude speed squared divided by radius."
    ],
    [
      "Coefficient of friction",
      "A dimensionless ratio relating limiting frictional force to normal force in a simple friction model."
    ],
    [
      "Hooke’s law",
      "For a linear spring within its elastic range, force is proportional to displacement from equilibrium."
    ],
    [
      "Young’s modulus",
      "The ratio of normal stress to normal strain in the linear-elastic regime."
    ],
    [
      "Shear stress",
      "Tangential force per unit area."
    ],
    [
      "Strain",
      "A dimensionless measure of deformation, such as change in length divided by original length."
    ],
    [
      "Reynolds number",
      "A dimensionless ratio of inertial to viscous effects in fluid flow."
    ],
    [
      "Laminar flow",
      "A flow regime characterized by smooth ordered fluid motion rather than turbulent fluctuations."
    ],
    [
      "Heat conduction",
      "Transfer of thermal energy through a material due to a temperature gradient."
    ],
    [
      "Thermal expansion",
      "Change in dimensions or volume with temperature under specified constraints."
    ],
    [
      "pH",
      "The negative base-ten logarithm of hydrogen-ion activity, approximated by concentration in dilute solutions."
    ],
    [
      "Half-life",
      "The time required for a decaying quantity to fall to one half of its initial value under exponential decay."
    ]
  ],
  "electronics": [
    [
      "P-N junction",
      "An interface between p-type and n-type semiconductor regions that forms a depletion region."
    ],
    [
      "Forward bias",
      "A diode bias that reduces the junction barrier and permits substantial current in the forward direction."
    ],
    [
      "Reverse bias",
      "A diode bias that widens the junction barrier and suppresses ordinary current until breakdown or leakage."
    ],
    [
      "Depletion region",
      "The semiconductor junction region depleted of mobile carriers and containing fixed ionized dopants."
    ],
    [
      "Diode rectification",
      "Using a diode’s asymmetric conduction to convert alternating input into unidirectional output."
    ],
    [
      "Half-wave rectifier",
      "A rectifier that passes one polarity half-cycle and blocks the other in an idealized model."
    ],
    [
      "Full-wave rectifier",
      "A circuit that converts both half-cycles of an alternating input into the same output polarity."
    ],
    [
      "Zener breakdown",
      "A reverse-bias breakdown mechanism used in a suitable diode for voltage regulation."
    ],
    [
      "BJT",
      "A bipolar junction transistor in which both electron and hole transport contribute to operation."
    ],
    [
      "MOSFET",
      "A field-effect transistor whose channel conductivity is controlled by an insulated gate electric field."
    ],
    [
      "Common-emitter amplifier",
      "A BJT amplifier configuration with input at base and output at collector, often providing voltage gain and phase inversion."
    ],
    [
      "Common-source amplifier",
      "A MOSFET amplifier configuration that commonly provides voltage gain and phase inversion."
    ],
    [
      "Transistor cutoff",
      "An operating condition in which transistor conduction is approximately off under the chosen model."
    ],
    [
      "Transistor saturation",
      "For a BJT switch, the condition where both junctions are forward biased and collector current is no longer set by beta times base current."
    ],
    [
      "Operating point",
      "The DC bias point about which a circuit’s small-signal behavior is analyzed."
    ],
    [
      "Small-signal model",
      "A linearized local model of a nonlinear device around its operating point."
    ],
    [
      "Virtual short",
      "In an ideal op-amp with negative feedback operating linearly, its input terminals are at nearly equal voltages."
    ],
    [
      "Virtual ground",
      "A node held near ground potential by feedback, despite not being directly connected to ground."
    ],
    [
      "Inverting amplifier",
      "An op-amp circuit with gain -Rf/Rin under the ideal model and valid negative feedback."
    ],
    [
      "Noninverting amplifier",
      "An op-amp circuit with closed-loop gain 1+Rf/Rg under the ideal model."
    ],
    [
      "Voltage follower",
      "A unity-gain buffer configuration connecting output to the inverting input and signal to the noninverting input."
    ],
    [
      "Input impedance",
      "The ratio of input voltage to input current under a specified operating condition."
    ],
    [
      "Output impedance",
      "The effective small-signal impedance seen looking back into a circuit output."
    ],
    [
      "RC time constant",
      "The product of resistance and capacitance that sets an exponential response timescale in a first-order RC circuit."
    ],
    [
      "RL time constant",
      "The ratio of inductance to resistance for a first-order RL circuit with the stated topology."
    ],
    [
      "Capacitor impedance",
      "For sinusoidal steady state, an ideal capacitor has impedance 1/(j omega C)."
    ],
    [
      "Inductor impedance",
      "For sinusoidal steady state, an ideal inductor has impedance j omega L."
    ],
    [
      "Thevenin equivalent",
      "A linear two-terminal network represented by a voltage source in series with an equivalent resistance or impedance."
    ],
    [
      "Norton equivalent",
      "A linear two-terminal network represented by a current source in parallel with an equivalent resistance or impedance."
    ],
    [
      "Superposition theorem",
      "In a linear circuit with independent sources, each response can be computed from one independent source at a time and summed."
    ],
    [
      "Maximum power transfer",
      "For a resistive source/load model, maximum load power occurs when load resistance equals source resistance."
    ],
    [
      "Kirchhoff node analysis",
      "A circuit method that solves node voltages using current balance equations."
    ],
    [
      "Mesh analysis",
      "A circuit method that solves loop currents using voltage equations."
    ],
    [
      "Ripple voltage",
      "The residual periodic variation in a rectifier or power-supply output after filtering."
    ],
    [
      "Low-pass filter",
      "A circuit that passes low frequencies with less attenuation than high frequencies."
    ],
    [
      "High-pass filter",
      "A circuit that passes higher frequencies and attenuates low-frequency components."
    ],
    [
      "Resonant frequency",
      "For an ideal LC resonator, the angular frequency is 1/sqrt(LC)."
    ],
    [
      "Quality factor",
      "A dimensionless measure of resonator selectivity or energy stored relative to energy dissipated per cycle."
    ],
    [
      "Common-mode rejection ratio",
      "The ratio of differential-mode gain to common-mode gain, usually stated in decibels."
    ],
    [
      "Slew rate",
      "The maximum rate of change of an op-amp output voltage."
    ]
  ],
  "precalc": [
    [
      "Difference of squares",
      "The identity a squared minus b squared equals (a-b)(a+b)."
    ],
    [
      "Perfect-square trinomial",
      "A trinomial that factors as (a+b) squared or (a-b) squared."
    ],
    [
      "Quadratic formula",
      "For ax squared plus bx plus c equals zero, roots are (-b plus or minus sqrt(b squared minus 4ac))/(2a)."
    ],
    [
      "Discriminant",
      "The quadratic expression b squared minus 4ac that classifies real roots for real coefficients."
    ],
    [
      "Vieta sum relation",
      "For ax squared plus bx plus c, the sum of roots is -b/a."
    ],
    [
      "Vieta product relation",
      "For ax squared plus bx plus c, the product of roots is c/a."
    ],
    [
      "Rational expression",
      "A quotient of polynomials with a nonzero denominator."
    ],
    [
      "Partial fractions",
      "Representing a proper rational function as a sum of simpler rational terms based on denominator factors."
    ],
    [
      "Proper rational function",
      "A rational function whose numerator degree is less than the denominator degree."
    ],
    [
      "Polynomial long division",
      "An algebraic procedure to divide polynomials and separate polynomial and proper-rational parts."
    ],
    [
      "Slope-intercept form",
      "The line equation y=mx+b, where m is slope and b is vertical intercept."
    ],
    [
      "Point-slope form",
      "The line equation y-y1=m(x-x1) through a point with a specified slope."
    ],
    [
      "Distance formula",
      "The Euclidean distance between two points in the plane is sqrt((x2-x1)^2+(y2-y1)^2)."
    ],
    [
      "Midpoint formula",
      "The midpoint of two coordinate points has the average of their x-coordinates and the average of their y-coordinates."
    ],
    [
      "Circle equation",
      "A circle centered at (h,k) with radius r satisfies (x-h)^2+(y-k)^2=r^2."
    ],
    [
      "Parabola",
      "A conic whose points are equidistant from a focus and a directrix."
    ],
    [
      "Ellipse",
      "The locus of points for which the sum of distances to two foci is constant."
    ],
    [
      "Hyperbola",
      "The locus of points for which the absolute difference of distances to two foci is constant."
    ],
    [
      "Exponential equation",
      "An equation in which the unknown appears in an exponent."
    ],
    [
      "Logarithm inverse property",
      "For a positive base b not equal to one, log_b(b^x)=x."
    ],
    [
      "Change-of-base formula",
      "log_b(a)=ln(a)/ln(b) when the logarithms are defined."
    ],
    [
      "Domain of a rational function",
      "All real inputs for which its denominator is nonzero."
    ],
    [
      "Even function",
      "A function satisfying f(-x)=f(x) on a symmetric domain."
    ],
    [
      "Odd function",
      "A function satisfying f(-x)=-f(x) on a symmetric domain."
    ],
    [
      "Composition of functions",
      "The function (f composed with g)(x)=f(g(x)), where the required inputs lie in the domains."
    ],
    [
      "Inverse function",
      "A function that reverses the mapping of a one-to-one function on its range."
    ],
    [
      "Unit-circle definition",
      "The sine and cosine of an angle are the y- and x-coordinates of its unit-circle point."
    ],
    [
      "Reference angle",
      "The acute angle between an angle’s terminal side and the x-axis, used to determine trigonometric magnitudes."
    ],
    [
      "Sine rule",
      "In a triangle, a/sin A=b/sin B=c/sin C."
    ],
    [
      "Cosine rule",
      "In a triangle, c squared equals a squared plus b squared minus 2ab cos C."
    ],
    [
      "Arithmetic sequence",
      "A sequence with a constant difference between consecutive terms."
    ],
    [
      "Geometric sequence",
      "A sequence with a constant ratio between consecutive terms when defined."
    ],
    [
      "Arithmetic-series sum",
      "The sum of n arithmetic terms equals n/2 times the sum of first and last terms."
    ],
    [
      "Geometric-series sum",
      "For r not equal to one, the first n terms sum to a(1-r^n)/(1-r)."
    ],
    [
      "Absolute value equation",
      "An equation involving |x| that can be solved by considering sign-consistent cases."
    ],
    [
      "Linear system determinant",
      "For a 2 by 2 coefficient matrix, a nonzero determinant means a unique solution exists."
    ],
    [
      "Cramer’s rule",
      "A determinant ratio method for solving a square linear system when its coefficient determinant is nonzero."
    ],
    [
      "Rationalizing a denominator",
      "Multiplying numerator and denominator by a suitable conjugate or radical factor to remove a radical from the denominator."
    ],
    [
      "Asymptote",
      "A line that a graph approaches under a limiting process, such as a vertical, horizontal, or oblique asymptote."
    ],
    [
      "Completing the square",
      "Rewriting a quadratic expression as a squared binomial plus or minus a constant."
    ]
  ],
  "probability": [
    [
      "Sample space",
      "The set of all possible outcomes of a random experiment."
    ],
    [
      "Event",
      "A subset of the sample space."
    ],
    [
      "Complement rule",
      "The probability of the complement of A is 1-P(A)."
    ],
    [
      "Addition rule",
      "P(A union B)=P(A)+P(B)-P(A intersection B)."
    ],
    [
      "Multiplication rule",
      "P(A intersection B)=P(A)P(B given A), when the conditional probability is defined."
    ],
    [
      "Independent events",
      "Events A and B are independent when P(A intersection B)=P(A)P(B)."
    ],
    [
      "Mutually exclusive events",
      "Events that cannot occur together, so their intersection is empty."
    ],
    [
      "Conditional probability",
      "P(A given B)=P(A intersection B)/P(B) when P(B)>0."
    ],
    [
      "Bayes theorem",
      "P(A given B)=P(B given A)P(A)/P(B), where P(B)>0."
    ],
    [
      "Permutation",
      "An ordered selection; the number of arrangements of r distinct items from n is n!/(n-r)!."
    ],
    [
      "Combination",
      "An unordered selection; the number of r-item subsets from n distinct items is n!/(r!(n-r)!)."
    ],
    [
      "Factorial",
      "For a positive integer n, n! is the product from 1 through n, with 0! defined as one."
    ],
    [
      "Binomial experiment",
      "A fixed number of independent trials, each with the same success probability and two outcomes."
    ],
    [
      "Binomial distribution",
      "The distribution of the number of successes in a binomial experiment."
    ],
    [
      "Geometric distribution",
      "A distribution modeling the trial count until the first success in independent trials with constant success probability."
    ],
    [
      "Expected value",
      "The probability-weighted average of a random variable’s possible values when the expectation exists."
    ],
    [
      "Variance of a random variable",
      "The expected squared deviation from its mean."
    ],
    [
      "Standard deviation of a random variable",
      "The square root of its variance."
    ],
    [
      "Discrete random variable",
      "A random variable whose possible values form a finite or countable set."
    ],
    [
      "Continuous random variable",
      "A random variable described by a density over continuous values, so point probabilities are zero under an ordinary continuous distribution."
    ],
    [
      "Probability mass function",
      "A function giving P(X=x) for each value of a discrete random variable."
    ],
    [
      "Probability density function",
      "A nonnegative function whose integral over a set gives the probability that a continuous variable lies in that set."
    ],
    [
      "Cumulative distribution function",
      "F(x)=P(X less than or equal to x)."
    ],
    [
      "Uniform distribution",
      "A distribution assigning equal probability to each outcome in a finite discrete case, or constant density over an interval in a continuous case."
    ],
    [
      "Normal distribution",
      "A continuous distribution parameterized by mean and variance with a symmetric bell-shaped density."
    ],
    [
      "Binomial coefficient",
      "The number n choose r, counting r-element subsets of an n-element set."
    ],
    [
      "Pigeonhole principle",
      "If more objects than boxes are distributed among boxes, at least one box contains at least two objects."
    ],
    [
      "Inclusion-exclusion principle",
      "A counting identity that subtracts overlaps when combining sets, and extends to more sets."
    ],
    [
      "Multiplication principle of counting",
      "If successive choices have m1,m2,... possibilities, the total number of ordered choice sequences is the product of these counts."
    ],
    [
      "Circular permutation",
      "An arrangement around a circle where rotations are treated as equivalent, giving (n-1)! arrangements of n distinct objects."
    ],
    [
      "With replacement sampling",
      "A procedure returning each sampled item before the next draw, so draws can remain independent under a fixed distribution."
    ],
    [
      "Without replacement sampling",
      "A procedure that removes sampled items, changing later probabilities and generally producing dependent draws."
    ],
    [
      "Hypergeometric distribution",
      "A distribution for the number of successes in draws without replacement from a finite population."
    ],
    [
      "Law of total probability",
      "A partition of the sample space allows P(B) to be written as the sum of P(B given A_i)P(A_i)."
    ],
    [
      "Odds",
      "The ratio of event probability to non-event probability, P(A)/(1-P(A))."
    ],
    [
      "Odds ratio",
      "The ratio of two odds, often used to compare event likelihood between groups."
    ],
    [
      "Expected value of a binomial variable",
      "For X binomial with n trials and probability p, E[X]=np."
    ],
    [
      "Variance of a binomial variable",
      "For X binomial with n trials and probability p, Var(X)=np(1-p)."
    ],
    [
      "Markov inequality",
      "For a nonnegative random variable X and a>0, P(X greater than or equal to a) is at most E[X]/a."
    ],
    [
      "Chebyshev inequality",
      "For a variable with finite mean and variance, P(|X-mu| greater than or equal to k sigma) is at most 1/k squared for k>0."
    ]
  ]
};
for(const cat of CATS){
  if(!Array.isArray(CONCEPTS[cat.id]))CONCEPTS[cat.id]=[];
  const addition=EXTRA_CONCEPTS[cat.id]||[];
  const expected=cat.id==='geas'||cat.id==='electronics'||cat.id==='precalc'||cat.id==='probability'?40:20;
  if(addition.length!==expected)throw Error(`Category ${cat.id} has ${addition.length} extra concepts; expected ${expected}.`);
  const usedLabels=new Set(CONCEPTS[cat.id].map(item=>item[0]));
  const distinctAddition=addition.map(([term,definition])=>{let label=term;if(usedLabels.has(label))label=`${term} — extended concept`;let suffix=2;while(usedLabels.has(label))label=`${term} — extended concept ${suffix++}`;usedLabels.add(label);return [label,definition];});
  CONCEPTS[cat.id].push(...distinctAddition);
}
