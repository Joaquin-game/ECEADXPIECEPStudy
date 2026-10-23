/* advanced: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_ADVANCED = 'advanced';
const A = NAMESPACE_ADVANCED;
function makeAdvancedExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),b=ri(1,6),c=ri(1,6),d=pick([1,2,3,4,5,6].filter(value=>a*value!==b*c)),det=a*d-b*c;const r1=ri(1,9),r2=ri(1,9);const ans=v?((r1*d-b*r2)/det):det;return qNum(A,title,v?`Solve for \\(x\\) by Cramer's rule: \\(${a}x+${b}y=${r1}\\), \\(${c}x+${d}y=${r2}\\).`:`Find determinant of \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\).`,ans,v?`\\(x=\\Delta_x/\\Delta=(${r1}(${d})-${b}(${r2}))/(${det})=${nfmt(ans)}\\).`:`\\(\\Delta=ad-bc=${a}(${d})-${b}(${c})=${det}\\).`)
  }
}
function makeAdvancedExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const r=pick([.2,.3,.4,.6]),n=ri(3,9);const ans=v?Math.pow(r,n):(1-Math.pow(r,n+1))/(1-r);return qNum(A,title,v?`For a geometric sequence with ratio \\(r=${r}\\), find term \\(a_{${n}}/a_0\\).`:`Find \\(1+${r}+${r}^2+\\cdots+${r}^{${n}}\\).`,ans,v?`\\(a_n/a_0=r^n=${nfmt(ans)}\\).`:`\\(S=(1-r^{n+1})/(1-r)=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const l1=ri(-5,8),l2=ri(-5,8);const ans=v?l1+l2:Math.max(l1,l2);return qNum(A,title,v?`A diagonal matrix has eigenvalues \\(${l1}\\) and \\(${l2}\\). Find its trace.`:`A diagonal matrix has eigenvalues \\(${l1}\\) and \\(${l2}\\). Find its largest eigenvalue.`,ans,v?`The trace is the sum of diagonal entries: \\(${l1}+(${l2})=${ans}\\).`:`For a diagonal matrix, eigenvalues are its diagonal entries; maximum is \\(${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const x=ri(2,10),g0=ri(1,5),next=.5*(g0+x/g0),ans=v?Math.abs(next-Math.sqrt(x)):next;return qNum(A,title,v?`Newton's method estimates \\(\\sqrt{${x}}\\) from \\(g_0=${g0}\\). Find the absolute error after one iteration.`:`Use one Newton iteration \\(g_1=(g_0+x/g_0)/2\\) for \\(\\sqrt{${x}}\\), starting at \\(g_0=${g0}\\). Find \\(g_1\\).`,ans,v?`\\(g_1=${nfmt(next)}\\), so error \\(|g_1-\\sqrt{x}|=${nfmt(ans)}\\).`:`\\(g_1=(${g0}+${x}/${g0})/2=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const x=rand(.1,.8),ans=v?1+x+x*x/2:1+x+x*x/2+x*x*x/6;return qNum(A,title,v?`Use the second-order Taylor polynomial of \\(e^x\\) at zero to approximate \\(e^{${nfmt(x)}}\\).`:`Use the third-order Maclaurin polynomial to approximate \\(e^{${nfmt(x)}}\\).`,ans,v?`\\(1+x+x^2/2=${nfmt(ans)}\\).`:`\\(1+x+x^2/2+x^3/6=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily06(title){
  const v=ri(0,1)===1;
  const real=ri(1,6),imag=ri(1,6),answer=v?Math.atan2(imag,real):Math.hypot(real,imag);
  const prompt=v?`For the complex number \\(z=${real}+${imag}i\\), find its principal argument in radians.`:`For the complex number \\(z=${real}+${imag}i\\), find its modulus \\(|z|\\).`;
  const explanation=v?`\\(\\arg z=\\tan^{-1}(${imag}/${real})=${nfmt(answer)}\\,\\mathrm{rad}\\).`:`\\(|z|=\\sqrt{${real}^2+${imag}^2}=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(A,title,prompt,answer,explanation,'number',{quantUnit:v?'rad':''});
}
function makeAdvancedExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(-5,5),r2=ri(-5,5),aa=1,bb=-(r1+r2),cc=r1*r2,disc=bb*bb-4*cc,ans=v?Math.max(r1,r2):disc;return qNum(A,title,v?`Find the larger root of \\(x^2${bb>=0?'+':''}${bb}x${cc>=0?'+':''}${cc}=0\\), whose roots are real.`:`Find the discriminant of \\(x^2${bb>=0?'+':''}${bb}x${cc>=0?'+':''}${cc}=0\\).`,ans,v?`The roots are \\(${r1}\\) and \\(${r2}\\); the larger is \\(${ans}\\).`:`\\(D=b^2-4ac=${bb}^2-4(${cc})=${disc}\\).`)
  }
}
function makeAdvancedExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const d=ri(2,5),n=ri(2,6),ans=v?d**n:d**(n-1);return qNum(A,title,v?`For diagonal matrix \\(D=\\operatorname{diag}(${d},${d+1})\\), find the first diagonal entry of \\(D^{${n}}\\).`:`For diagonal matrix \\(D=\\operatorname{diag}(${d},${d+1})\\), find the first diagonal entry of \\(D^{${n-1}}\\).`,ans,v?`Powers of a diagonal matrix act entrywise: \\(${d}^{${n}}=${ans}\\).`:`\\(${d}^{${n-1}}=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const y=rand(1,6),h=rand(.05,.2),f=x=>x*x+2*x,ans=v?f(y+h):y+h*(2*y+2);return qNum(A,title,v?`For \\(y'=2x+2\\) at \\(x=${nfmt(y)}\\), estimate one Euler step with \\(h=${nfmt(h)}\\) from value \\(y=${nfmt(y*y+2*y)}\\). Find the updated value.`:`For ODE \\(y'=2x+2\\), \\(y(x)=x^2+2x\\), evaluate the exact solution at \\(x=${nfmt(y+h)}\\).`,ans,v?`Euler step: \\(y_{new}=y+h(2x+2)=${nfmt(ans)}\\).`:`Exact value \\(x^2+2x=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(1,5),r2=ri(1,5),x=ri(1,7),ans=v?(x-r1)*(x-r2):x*x-(r1+r2)*x+r1*r2;return qNum(A,title,v?`A characteristic polynomial has roots \\(${r1}\\) and \\(${r2}\\). Evaluate factored polynomial at \\(x=${x}\\).`:`Expand \\((x-${r1})(x-${r2})\\) and evaluate at \\(x=${x}\\).`,ans,v?`\\(p(${x})=(${x}-${r1})(${x}-${r2})=${ans}\\).`:`\\(p(x)=x^2-(${r1+r2})x+${r1*r2}\\), hence \\(p(${x})=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const x=rand(.1,.7),ans=v?x-x**3/6:Math.sin(x);return qNum(A,title,v?`Approximate \\(\\sin(${nfmt(x)})\\) with the third-order Maclaurin polynomial.`:`Evaluate \\(\\sin(${nfmt(x)})\\) numerically (radians).`,ans,v?`\\(\\sin x\\approx x-x^3/6=${nfmt(ans)}\\).`:`\\(\\sin(${nfmt(x)})=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const n=ri(3,8),r=ri(1,n-1),ans=v?factorial(n):combination(n,r);return qNum(A,title,v?`Evaluate \\(${n}!\\).`:`How many ways can \\(${r}\\) objects be selected from \\(${n}\\) distinct objects?`,ans,v?`\\(${n}!=${ans}\\).`:`\\(\\binom{${n}}{${r}}=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const x0=ri(1,5),x1=x0+ri(1,5),y0=ri(1,9),y1=ri(1,9),x=rand(x0,x1),ans=v?y0+(y1-y0)*(x-x0)/(x1-x0):(y1-y0)/(x1-x0);return qNum(A,title,v?`Linearly interpolate between \\((${x0},${y0})\\) and \\((${x1},${y1})\\) at \\(x=${nfmt(x)}\\).`:`Find slope through \\((${x0},${y0})\\) and \\((${x1},${y1})\\).`,ans,v?`\\(y=y_0+(y_1-y_0)(x-x_0)/(x_1-x_0)=${nfmt(ans)}\\).`:`\\(m=(${y1}-${y0})/(${x1}-${x0})=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const x0=ri(2,8),a0=ri(1,5),f=x=>x*x-a0,ans=v?x0-(x0*x0-a0)/(2*x0):Math.sqrt(a0);return qNum(A,title,v?`Make one Newton–Raphson step for \\(f(x)=x^2-${a0}\\) starting at \\(x_0=${x0}\\).`:`Find the positive exact root of \\(x^2=${a0}\\).`,ans,v?`\\(x_1=x_0-f(x_0)/f'(x_0)=${nfmt(ans)}\\).`:`\\(x=\\sqrt{${a0}}=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const a=ri(2,8),b=ri(1,5),ans=v?Math.max(a,b)/Math.min(a,b):a*b;return qNum(A,title,v?`For diagonal matrix \\(\\operatorname{diag}(${a},${b})\\), compute the 2-norm condition number.`:`For diagonal matrix \\(\\operatorname{diag}(${a},${b})\\), find its determinant.`,ans,v?`\\(\\kappa_2=\\max(a,b)/\\min(a,b)=${nfmt(ans)}\\).`:`\\(\\det D=ab=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(1,5),x=ri(1,4),y=ri(1,4),ans=v?2*b*y:a;return qNum(A,title,v?`For \\(f(x,y)=${a}x+${b}y^2\\), evaluate \\(\\partial f/\\partial y\\) at \\(y=${y}\\).`:`For \\(f(x,y)=${a}x+${b}y^2\\), evaluate \\(\\partial f/\\partial x\\).`,ans,v?`\\(f_y=2by=${nfmt(ans)}\\).`:`\\(f_x=${a}\\).`)
  }
}
function makeAdvancedExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(1,5),x1=ri(1,4),x2=ri(2,6),y1=ri(1,4),y2=ri(2,6),ans=v?a*(x2-x1)*(y2-y1):a*(x2*x2-x1*x1)*(y2-y1)/2;return qNum(A,title,v?`Evaluate \\(\\int_{${x1}}^{${x2}}\\int_{${y1}}^{${y2}} ${a}\\,dy\\,dx\\).`:`Evaluate \\(\\int_{${x1}}^{${x2}}\\int_{${y1}}^{${y2}} ${a}x\\,dy\\,dx\\).`,ans,v?`Constant integrand gives \\(a\\Delta x\\Delta y=${nfmt(ans)}\\).`:`Integrate \\(${a}x\\) over the rectangle: \\(a(x_2^2-x_1^2)(y_2-y_1)/2=${nfmt(ans)}\\).`)
  }
}
function makeAdvancedExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),b=ri(1,6),x=ri(1,6),ans=v?x*x-(a+b)*x+a*b:(x-a)*(x-b);return qNum(A,title,v?`Evaluate characteristic polynomial \\(x^2-${a+b}x+${a*b}\\) at \\(x=${x}\\).`:`Evaluate factored polynomial \\((x-${a})(x-${b})\\) at \\(x=${x}\\).`,ans,v?`\\(p(${x})=${ans}\\).`:`\\(p(${x})=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a=ri(2,7),n=ri(2,5),ans=v?Math.pow(a,n):Math.pow(a,n-1);return qNum(A,title,v?`A diagonal operator has eigenvalue \\(${a}\\). Find eigenvalue of its \\(${n}\\)-th power.`:`A diagonal operator has eigenvalue \\(${a}\\). Find eigenvalue of its \\(${n-1}\\)-th power.`,ans,v?`Eigenvalues are powered: \\(${a}^{${n}}=${ans}\\).`:`\\(${a}^{${n-1}}=${ans}\\).`)
  }
}
function makeAdvancedExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(2,7),x=ri(1,5),ans=v?a*x+b:a*x;return qNum(A,title,v?`For affine map \\(f(x)=${a}x+${b}\\), evaluate \\(f(${x})\\).`:`For linear map \\(f(x)=${a}x\\), evaluate \\(f(${x})\\).`,ans,v?`\\(${a}(${x})+${b}=${ans}\\).`:`\\(${a}(${x})=${ans}\\).`)
  }
}



/* Additional numbered numeric families, registered alongside the other families below. */
/* Category-local named numeric families 21–40 (formerly core seed templates). */
function makeAdvancedFamily21(){
  let a=ri(1,9),b=ri(1,9),c=ri(1,9),d=ri(1,9),ans=a*d-b*c;
  return qNum(A,'Matrix determinant',`Find the determinant of \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\).`,ans,`\\(\\det=ad-bc=${a}(${d})-${b}(${c})=${ans}\\).`)
}

function makeAdvancedFamily22(){
  let x=ri(-4,8),y=ri(-4,8),a=ri(1,5),b=ri(1,5),c=ri(1,5),d=ri(1,5);
  if(a*d-b*c===0)d+=1;
  let p=a*x+b*y,q=c*x+d*y;
  return qNum(A,'Linear system',`The system \\(${a}x+${b}y=${p}\\), \\(${c}x+${d}y=${q}\\) has solution \\((x,y)\\). Find x.`,x,`Substitution or elimination gives \\(x=${x}\\), \\(y=${y}\\).`)
}

function makeAdvancedFamily23(){
  let a=ri(-9,9)||2,b=ri(1,9),ans=Math.hypot(a,b);
  return qNum(A,'Complex magnitude',`Find \\(\\lvert z\\rvert\\) for \\(z=${a}+j${b}\\).`,ans,`\\(\\lvert z\\rvert=\\sqrt{${a}^2+${b}^2}=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily24(){
  let a=ri(1,9),b=ri(1,9),ans=Math.atan2(b,a)*180/Math.PI;
  return qNum(A,'Complex argument',`Find the principal argument of \\(z=${a}+j${b}\\) in degrees.`,ans,`\\(\\arg z=\\tan^{-1}(${b}/${a})=${nfmt(ans)}^\\circ\\).`,'degrees')
}

function makeAdvancedFamily25(){
  let r=ri(2,12),theta=ri(10,80),ans=r*Math.cos(theta*Math.PI/180);
  return qNum(A,'Polar to rectangular conversion',`A complex number has polar form \\(z=${r}\\angle ${theta}^\\circ\\). Find its real component.`,ans,`\\(\\Re(z)=r\\cos\\theta=${r}\\cos(${theta}^\\circ)=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily26(){
  let a=ri(-9,12),b=ri(-9,12);
  return qNum(A,'Diagonal matrix eigenvalue',`For \\(A=\\begin{pmatrix}${a}&0\\\\0&${b}\\end{pmatrix}\\), what is the larger eigenvalue?`,Math.max(a,b),`For a diagonal matrix, the eigenvalues are its diagonal entries; the larger is \\(${Math.max(a,b)}\\).`)
}

function makeAdvancedFamily27(){
  let a=ri(-6,10),b=ri(-6,10),c=ri(-6,10);
  return qNum(A,'Matrix trace',`Find the trace of \\(A=\\begin{pmatrix}${a}&2&1\\\\0&${b}&3\\\\1&0&${c}\\end{pmatrix}\\).`,a+b+c,`The trace is the sum of diagonal entries: \\(${a}+${b}+${c}=${a+b+c}\\).`)
}

function makeAdvancedFamily28(){
  let a=ri(2,14);
  return qNum(A,'Sinusoidal RMS component',`A Fourier series has fundamental term \\(x_1(t)=${a}\\sin(\\omega_0t)\\). Find the RMS value of this term.`,a/Math.sqrt(2),`A sine term with peak coefficient A has RMS \\(A/\\sqrt2=${nfmt(a/Math.sqrt(2))}\\).`)
}

function makeAdvancedFamily29(){
  let a=ri(1,8),n=ri(2,5),theta=rand(.1,1.2),ans=a*Math.cos(n*theta);
  return qNum(A,'Fourier harmonic',`Evaluate the harmonic term \\(${a}\\cos(${n}\\theta)\\) at \\(\\theta=${nfmt(theta)}\\,\\mathrm{rad}\\).`,ans,`Substitute the angle: \\(${a}\\cos(${n}\\cdot${nfmt(theta)})=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily30(){
  let a=ri(1,6),b=ri(1,6),h=ri(1,4),ans=a*h**3/3+b*h**2/2;
  return qNum(A,'Simpson-rule integral',`For \\(f(x)=${a}x^2+${b}x\\), evaluate \\(\\int_0^{${h}} f(x)\\,dx\\).`,ans,`Simpson's rule is exact for quadratics; integrate to obtain \\(${a}(${h}^3)/3+${b}(${h}^2)/2=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily31(){
  let m=ri(1,9),c=ri(1,8),h=ri(1,5),ans=m*h*h/2+c*h;
  return qNum(A,'Trapezoidal integral',`For \\(f(x)=${m}x+${c}\\), use one trapezoid on \\([0,${h}]\\) to estimate the integral.`,ans,`A trapezoidal rule is exact for a linear function: \\(h[f(0)+f(h)]/2=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily32(){
  let x=rand(1,4),c=ri(2,30),ans=x-(x*x-c)/(2*x);
  return qNum(A,'Newton iteration',`Use one Newton iteration for \\(f(x)=x^2-${c}\\), starting at \\(x_0=${nfmt(x)}\\). Find \\(x_1\\).`,ans,`\\(x_1=x_0-f(x_0)/f'(x_0)=${nfmt(x)}-(${nfmt(x*x-c)})/${nfmt(2*x)}=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily33(){
  let x=rand(.1,.8),ans=1+x+x*x/2;
  return qNum(A,'Taylor approximation of exponential',`Use the second-order Maclaurin polynomial \\(e^x\\approx1+x+x^2/2\\) to estimate \\(e^{${nfmt(x)}}\\).`,ans,`\\(1+${nfmt(x)}+${nfmt(x*x)}/2=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily34(){
  let x=rand(.1,.9),ans=x-x**3/6;
  return qNum(A,'Taylor approximation of sine',`Use \\(\\sin x\\approx x-x^3/6\\) to estimate \\(\\sin(${nfmt(x)})\\) (radians).`,ans,`\\(${nfmt(x)}-(${nfmt(x)}^3)/6\\approx${nfmt(ans)}\\).`)
}

function makeAdvancedFamily35(){
  let x=ri(60,150),mu=ri(70,120),sd=ri(5,20),ans=(x-mu)/sd;
  return qNum(A,'Normal z-score',`A normal distribution has mean \\(\\mu=${mu}\\) and standard deviation \\(\\sigma=${sd}\\). Find the z-score for \\(x=${x}\\).`,ans,`\\(z=(x-\\mu)/\\sigma=(${x}-${mu})/${sd}=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily36(){
  let n=ri(10,60),p=rand(.1,.8),ans=n*p;
  return qNum(A,'Binomial expected value',`A binomial variable has \\(n=${n}\\) trials and success probability \\(p=${nfmt(p)}\\). Find its expected value.`,ans,`\\(E[X]=np=${n}(${nfmt(p)})=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily37(){
  let l=rand(.3,4),ans=Math.exp(-l);
  return qNum(A,'Poisson zero-event probability',`A Poisson process has mean count \\(\\lambda=${nfmt(l)}\\) per interval. Find \\(P(X=0)\\).`,ans,`\\(P(X=0)=e^{-\\lambda}=e^{-${nfmt(l)}}=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily38(){
  let x0=ri(1,5),x1=x0+ri(2,6),y0=ri(2,12),y1=ri(12,25),x=rand(x0,x1),ans=y0+(y1-y0)*(x-x0)/(x1-x0);
  return qNum(A,'Linear interpolation',`Interpolate linearly between \\((x_0,y_0)=(${x0},${y0})\\) and \\((x_1,y_1)=(${x1},${y1})\\) at \\(x=${nfmt(x)}\\).`,ans,`\\(y=y_0+(y_1-y_0)(x-x_0)/(x_1-x_0)=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily39(){
  let n=ri(2,30),x=rand(n/2+1,n+2),ans=(x+n/x)/2;
  return qNum(A,'Square-root Newton iteration',`Use one Newton step for \\(f(x)=x^2-${n}\\) from \\(x_0=${nfmt(x)}\\). Find \\(x_1\\).`,ans,`\\(x_1=\\frac12(x_0+${n}/x_0)=\\frac12(${nfmt(x)}+${n}/${nfmt(x)})=${nfmt(ans)}\\).`)
}

function makeAdvancedFamily40(){
  let a=ri(1,8),b=ri(1,8),c=ri(1,8),d=ri(1,8),ans=a*c-b*d;
  return qNum(A,'Complex multiplication',`Find the real part of \\((${a}+j${b})(${c}+j${d})\\).`,ans,`The real part is \\(ac-bd=${a}(${c})-${b}(${d})=${ans}\\).`)
}

NUMERIC_GENERATOR_REGISTRY.advanced = [numericEntry('advanced',"2×2 matrix determinant · family 21 (randomized variant)",'advanced-family-21',()=>makeAdvancedFamily21()),
    numericEntry('advanced',"Solve a 2×2 linear system · family 22 (randomized variant)",'advanced-family-22',()=>makeAdvancedFamily22()),
    numericEntry('advanced',"Complex magnitude · family 23 (randomized variant)",'advanced-family-23',()=>makeAdvancedFamily23()),
    numericEntry('advanced',"Complex argument · family 24 (randomized variant)",'advanced-family-24',()=>makeAdvancedFamily24()),
    numericEntry('advanced',"Real component from polar form · family 25 (randomized variant)",'advanced-family-25',()=>makeAdvancedFamily25()),
    numericEntry('advanced',"Eigenvalue of diagonal matrix · family 26 (randomized variant)",'advanced-family-26',()=>makeAdvancedFamily26()),
    numericEntry('advanced',"Trace of a matrix · family 27 (randomized variant)",'advanced-family-27',()=>makeAdvancedFamily27()),
    numericEntry('advanced',"Fourier-series fundamental RMS · family 28 (randomized variant)",'advanced-family-28',()=>makeAdvancedFamily28()),
    numericEntry('advanced',"Evaluate a Fourier harmonic · family 29 (randomized variant)",'advanced-family-29',()=>makeAdvancedFamily29()),
    numericEntry('advanced',"Simpson-rule integral of a quadratic · family 30 (randomized variant)",'advanced-family-30',()=>makeAdvancedFamily30()),
    numericEntry('advanced',"Trapezoidal rule for a linear function · family 31 (randomized variant)",'advanced-family-31',()=>makeAdvancedFamily31()),
    numericEntry('advanced',"Newton iteration · family 32 (randomized variant)",'advanced-family-32',()=>makeAdvancedFamily32()),
    numericEntry('advanced',"Taylor approximation of exponential · family 33 (randomized variant)",'advanced-family-33',()=>makeAdvancedFamily33()),
    numericEntry('advanced',"Taylor approximation of sine · family 34 (randomized variant)",'advanced-family-34',()=>makeAdvancedFamily34()),
    numericEntry('advanced',"Normal z-score · family 35 (randomized variant)",'advanced-family-35',()=>makeAdvancedFamily35()),
    numericEntry('advanced',"Binomial expected value · family 36 (randomized variant)",'advanced-family-36',()=>makeAdvancedFamily36()),
    numericEntry('advanced',"Poisson probability of zero events · family 37 (randomized variant)",'advanced-family-37',()=>makeAdvancedFamily37()),
    numericEntry('advanced',"Linear interpolation · family 38 (randomized variant)",'advanced-family-38',()=>makeAdvancedFamily38()),
    numericEntry('advanced',"Newton root iteration for square root · family 39 (randomized variant)",'advanced-family-39',()=>makeAdvancedFamily39()),
    numericEntry('advanced',"Real part of complex multiplication · family 40 (randomized variant)",'advanced-family-40',()=>makeAdvancedFamily40()),
    numericEntry('advanced',"Two-by-two determinant · family 01 (randomized variant)","advanced-family-01",()=>makeAdvancedExpansionFamily01("Two-by-two determinant · family 01 (randomized variant)")),
    numericEntry('advanced',"Complex magnitude · family 02 (randomized variant)","advanced-family-02",()=>makeAdvancedExpansionFamily02("Complex magnitude · family 02 (randomized variant)")),
    numericEntry('advanced',"Finite geometric series · family 03 (randomized variant)","advanced-family-03",()=>makeAdvancedExpansionFamily03("Finite geometric series · family 03 (randomized variant)")),
    numericEntry('advanced',"Diagonal eigenvalue · family 04 (randomized variant)","advanced-family-04",()=>makeAdvancedExpansionFamily04("Diagonal eigenvalue · family 04 (randomized variant)")),
    numericEntry('advanced',"Complex product real part · family 05 (randomized variant)","advanced-family-05",()=>makeAdvancedExpansionFamily05("Complex product real part · family 05 (randomized variant)")),
    numericEntry('advanced',"Complex number argument and modulus · family 06 (randomized variant)","advanced-family-06",()=>makeAdvancedExpansionFamily06("Complex number argument and modulus · family 06 (randomized variant)")),
    numericEntry('advanced',"Quadratic roots and discriminant · family 07 (randomized variant)","advanced-family-07",()=>makeAdvancedExpansionFamily07("Quadratic roots and discriminant · family 07 (randomized variant)")),
    numericEntry('advanced',"Newton square-root iteration · family 08 (randomized variant)","advanced-family-08",()=>makeAdvancedExpansionFamily08("Newton square-root iteration · family 08 (randomized variant)")),
    numericEntry('advanced',"Positive quadratic root · family 09 (randomized variant)","advanced-family-09",()=>makeAdvancedExpansionFamily09("Positive quadratic root · family 09 (randomized variant)")),
    numericEntry('advanced',"Power of a diagonal matrix · family 10 (randomized variant)","advanced-family-10",()=>makeAdvancedExpansionFamily10("Power of a diagonal matrix · family 10 (randomized variant)")),
    numericEntry('advanced',"Matrix trace and determinant · family 11 (randomized variant)","advanced-family-11",()=>makeAdvancedExpansionFamily11("Matrix trace and determinant · family 11 (randomized variant)")),
    numericEntry('advanced',"Vector norm · family 12 (randomized variant)","advanced-family-12",()=>makeAdvancedExpansionFamily12("Vector norm · family 12 (randomized variant)")),
    numericEntry('advanced',"Geometric series tail · family 13 (randomized variant)","advanced-family-13",()=>makeAdvancedExpansionFamily13("Geometric series tail · family 13 (randomized variant)")),
    numericEntry('advanced',"Euler numerical step · family 14 (randomized variant)","advanced-family-14",()=>makeAdvancedExpansionFamily14("Euler numerical step · family 14 (randomized variant)")),
    numericEntry('advanced',"Characteristic polynomial · family 15 (randomized variant)","advanced-family-15",()=>makeAdvancedExpansionFamily15("Characteristic polynomial · family 15 (randomized variant)")),
    numericEntry('advanced',"Matrix product diagonal · family 16 (randomized variant)","advanced-family-16",()=>makeAdvancedExpansionFamily16("Matrix product diagonal · family 16 (randomized variant)")),
    numericEntry('advanced',"Complex quotient · family 17 (randomized variant)","advanced-family-17",()=>makeAdvancedExpansionFamily17("Complex quotient · family 17 (randomized variant)")),
    numericEntry('advanced',"Taylor error term · family 18 (randomized variant)","advanced-family-18",()=>makeAdvancedExpansionFamily18("Taylor error term · family 18 (randomized variant)")),
    numericEntry('advanced',"Linear recurrence · family 19 (randomized variant)","advanced-family-19",()=>makeAdvancedExpansionFamily19("Linear recurrence · family 19 (randomized variant)")),
    numericEntry('advanced',"Eigenvalue ratio · family 20 (randomized variant)","advanced-family-20",()=>makeAdvancedExpansionFamily20("Eigenvalue ratio · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(A,'Newton iteration for a square root','advanced-newton-square-root-iteration',()=>{
  const N0=ri(2,30),x0=ri(1,10),ans=.5*(x0+N0/x0);
  return qNum(A,'Newton iteration for a square root',`Use one Newton iteration to approximate \\(\\sqrt{${N0}}\\), starting from \\(x_0=${x0}\\), with \\(x_1=\\frac12(x_0+N_0/x_0)\\). Find \\(x_1\\).`,ans,`Substitute into the Newton update: \\(x_1=\\frac12(${x0}+${N0}/${x0})=${nfmt(ans)}\\).`)
});
appendNumericRecipe(A,'Third term of a first-order recurrence','advanced-first-order-recurrence',()=>{
  const a0=ri(1,8),ans=8*a0+7;
  return qNum(A,'Third term of a first-order recurrence',`A sequence satisfies \\(a_n=2a_{n-1}+1\\) with \\(a_0=${a0}\\). Find \\(a_3\\).`,ans,`\\(a_1=2(${a0})+1=${2*a0+1}\\), \\(a_2=2(${2*a0+1})+1=${4*a0+3}\\), and \\(a_3=2(${4*a0+3})+1=${ans}\\).`)
});
appendNumericRecipe(A,'Applied · Two-sensor calibration matrix','scenario-advanced-calibration-matrix',()=>{
  const a=ri(2,6),b=ri(1,4),c=ri(1,4);let d=ri(3,8),det=a*d-b*c;while(Math.abs(det)<2){d++;det=a*d-b*c}
  const m=ri(1,5),offset=ri(-2,5),u=a*m+b*offset,v=c*m+d*offset,ans=(u*d-b*v)/det;
  return qNum(A,'Applied · Two-sensor calibration matrix',`Two sensor channels obey \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\begin{pmatrix}g\\\\o\\end{pmatrix}=\\begin{pmatrix}${u}\\\\${v}\\end{pmatrix}\\), where \\(g\\) is gain and \\(o\\) is offset. Find the gain \\(g\\) using the supplied calibration measurements.`,ans,`By Cramer's rule, \\(g=\\frac{${u}(${d})-${b}(${v})}{${a}(${d})-${b}(${c})}=\\frac{${u*d-b*v}}{${det}}=${nfmt(ans)}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('advanced','Additional · Determinant of a two-by-two matrix','advanced-topup-01',()=>{
  const a=ri(-6,8),b=ri(-6,8),c=ri(-6,8),d=ri(-6,8),ans=a*d-b*c;
  return qNum(A,'Determinant of a two-by-two matrix',`Find the determinant of \\(M=\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\).`,ans,`For a \\(2\\times2\\) matrix, \\(\\det M=ad-bc=${a}(${d})-${b}(${c})=${ans}\\).`);
});
appendNumericRecipe('advanced','Additional · Binomial coefficient evaluation','advanced-topup-02',()=>{
  const n=ri(5,12),r=ri(1,n-1);let ans=1;for(let i=1;i<=r;i++)ans=ans*(n-r+i)/i;
  return qNum(A,'Binomial coefficient evaluation',`Evaluate the binomial coefficient \\(\\binom{${n}}{${r}}\\).`,ans,`\\(\\binom nr=n!/[r!(n-r)!]=${ans}\\).`);
});
appendNumericRecipe('advanced','Additional · Finite geometric-series sum','advanced-topup-03',()=>{
  const a=ri(1,5),ratio=pick([.2,.25,.4,.5,.6]),n=ri(3,8),ans=a*(1-ratio**n)/(1-ratio);
  return qNum(A,'Finite geometric-series sum',`Find the sum of the first \\(${n}\\) terms of a geometric sequence with first term \\(${a}\\) and ratio \\(${nfmt(ratio)}\\).`,ans,`\\(S_n=a(1-r^n)/(1-r)=${a}[1-${nfmt(ratio)}^{${n}}]/[1-${nfmt(ratio)}]=${nfmt(ans)}\\).`);
});
appendNumericRecipe('advanced','Additional · One Newton step for a cube root','advanced-topup-04',()=>{
  const N=ri(2,80),x0=ri(1,8),ans=(2*x0+N/(x0*x0))/3;
  return qNum(A,'One Newton step for a cube root',`Use one Newton iteration to approximate \\(\\sqrt[3]{${N}}\\), starting from \\(x_0=${x0}\\), with \\(x_1=(2x_0+N/x_0^2)/3\\). Find \\(x_1\\).`,ans,`Substitute: \\(x_1=[2(${x0})+${N}/${x0}^2]/3=${nfmt(ans)}\\).`);
});
appendNumericRecipe('advanced','Additional · Taylor polynomial for cosine','advanced-topup-05',()=>{
  const x=rand(.1,1.1),ans=1-x*x/2+x**4/24;
  return qNum(A,'Taylor polynomial for cosine',`Use the fourth-degree Maclaurin polynomial to approximate \\(\\cos(${nfmt(x)})\\): \\(1-x^2/2+x^4/24\\).`,ans,`Substitute \\(x=${nfmt(x)}\\): \\(1-x^2/2+x^4/24=${nfmt(ans)}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeAdvancedScenarioSetup(){
  const g=ri(4,8);
  return {category:NAMESPACE_ADVANCED,title:'Water-treatment sensor calibration map',
    prompt:String.raw`A treatment plant combines two sensor readings through the dimensionless calibration matrix \(M=\begin{pmatrix}g&2\\1&3\end{pmatrix}\), where the measured gain is \(g=${g}\). The coefficients describe how the two sensor channels affect the pump controller. The controller will be enabled only after its matrix diagnostics are checked.`,
    transferData:{g: g,a_12: 2,a_21: 1,a_22: 3},
    illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 130"><rect x="12" y="15" width="316" height="100" rx="10" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M34 42 V88 M34 42 H43 M34 88 H43 M148 42 V88 M139 42 H148 M139 88 H148" fill="none" stroke="currentColor" stroke-width="2"/><g fill="currentColor" font-size="17" text-anchor="middle"><text x="64" y="60">${g}</text><text x="113" y="60">2</text><text x="64" y="82">1</text><text x="113" y="82">3</text></g><text x="180" y="55" fill="currentColor" font-size="13">sensor channel 1</text><text x="180" y="78" fill="currentColor" font-size="13">sensor channel 2</text></svg>`,alt:'A two-by-two calibration matrix shows the four stated sensor-channel coefficients and the two sensor channels it maps.'}],custom:false};
}
function makeAdvancedScenarioA(dto={}){
  const d=dto?.['advanced-calibration-root-v18']||{};const g=Number(d.g);
  const ans=3*g-2;const q=qNum(A,'Calibration-map determinant',String.raw`Find the determinant \(\Delta=\det(M)\) of the calibration matrix given in the scenario.`,ans,String.raw`\(\Delta=g(3)-(2)(1)=3g-2=3(${g})-2=${ans}\).`);
  q.transferData={Delta: ans};return q;
}
function makeAdvancedScenarioB(dto={}){
  const d=dto?.['advanced-calibration-root-v18']||{};const g=Number(d.g);
  const ans=g+3;const q=qNum(A,'Calibration-map trace',String.raw`Find the trace \(\tau\) of the calibration matrix given in the scenario.`,ans,String.raw`The trace is the sum of the diagonal terms: \(\tau=g+3=${g}+3=${ans}\).`);
  q.transferData={tau: ans};return q;
}
function makeAdvancedScenarioBA(dto={}){
  const dt=dto||{};const Delta=Number(dt['advanced-calibration-a-v18']?.Delta),tau=Number(dt['advanced-calibration-b-v18']?.tau);
  const ans=tau*tau-4*Delta;const q=qNum(A,'Eigenvalue discriminant',String.raw`Use the determinant \(\Delta\) and trace \(\tau\) obtained in the calibration checks to calculate the characteristic discriminant \(D=\tau^2-4\Delta\).`,ans,String.raw`\(D=${tau}^2-4(${Delta})=${ans}\).`);
  q.transferData={D: ans};return q;
}
function makeAdvancedScenarioBB(dto={}){
  const dt=dto||{};const Delta=Number(dt['advanced-calibration-a-v18']?.Delta),tau=Number(dt['advanced-calibration-b-v18']?.tau);
  const ans=1-tau+Delta;const q=qNum(A,'Characteristic-polynomial check at one',String.raw`Evaluate the calibration matrix's characteristic polynomial \(p(\lambda)=\lambda^2-\tau\lambda+\Delta\) at \(\lambda=1\).`,ans,String.raw`\(p(1)=1-\tau+\Delta=1-${tau}+${Delta}=${ans}\).`);
  q.transferData={pAtOne: ans};return q;
}
function registerAdvancedScenarioTree(){
  const rootKey='advanced-calibration-root-v18',aKey='advanced-calibration-a-v18',bKey='advanced-calibration-b-v18',baKey='advanced-calibration-ba-v18',bbKey='advanced-calibration-bb-v18';
  setupRecipe(NAMESPACE_ADVANCED,'Advanced math · Water-treatment calibration tree',rootKey,makeAdvancedScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_ADVANCED,'Advanced · Calculation A',aKey,makeAdvancedScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_ADVANCED,'Advanced · Calculation B',bKey,makeAdvancedScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_ADVANCED,'Advanced · Follow-up A',baKey,makeAdvancedScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_ADVANCED,'Advanced · Follow-up B',bbKey,makeAdvancedScenarioBB,3,{parentRecipeKey:bKey});
}
registerAdvancedScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const ADVANCED_CONCEPT_CARDS = [
    [
      "Eigenvalue",
      "A scalar lambda for which a nonzero vector satisfies Av equals lambda v."
    ],
    [
      "Eigenvector",
      "A nonzero vector whose direction is preserved by a linear transformation, up to scaling."
    ],
    [
      "Determinant",
      "A scalar associated with a square matrix that indicates invertibility when it is nonzero."
    ],
    [
      "Matrix rank",
      "The dimension of the column space, equal to the number of linearly independent columns."
    ],
    [
      "Nullspace",
      "The set of vectors mapped to zero by a matrix."
    ],
    [
      "Basis",
      "A linearly independent set of vectors that spans a vector space."
    ],
    [
      "Orthogonality",
      "The property that two vectors have zero inner product."
    ],
    [
      "Diagonalization",
      "Representing a diagonalizable matrix as P D P inverse using its eigenvectors and eigenvalues."
    ],
    [
      "Taylor series",
      "A power series whose coefficients are determined by derivatives at a center point."
    ],
    [
      "Bessel function",
      "A solution of Bessel’s differential equation that arises in problems with cylindrical symmetry."
    ],
    [
      "Matrix exponential",
      "The matrix-valued power series used to solve linear constant-coefficient systems."
    ],
    [
      "Condition number",
      "A measure of how sensitive a problem’s solution is to small perturbations in its data."
    ],
    [
      "Newton method",
      "An iterative root-finding method that uses the function value and derivative to update an estimate."
    ],
    [
      "Characteristic polynomial",
      "The polynomial det(A-lambda I), whose roots are the eigenvalues of a square matrix."
    ],
    [
      "Orthonormal basis",
      "A basis whose vectors are mutually orthogonal and each have unit length."
    ],
    [
      "Singular value",
      "A nonnegative square root of an eigenvalue of A transpose A, or A conjugate-transpose A."
    ],
    [
      "Convergence",
      "The property that a sequence or iterative process approaches a well-defined limit."
    ],
    [
      "Numerical stability",
      "The property that small computational or data perturbations do not grow uncontrollably in a numerical method."
    ],
    [
      "Fourier coefficient",
      "A coefficient giving the weight of a particular harmonic in a Fourier series."
    ],
    [
      "Separation of variables",
      "A method that seeks product-form solutions by separating independent variables in a differential equation."
    ],
    [
      "Eigenvalue — extended concept",
      "A scalar lambda for which a nonzero vector v satisfies Av=lambda v."
    ],
    [
      "Eigenvector — extended concept",
      "A nonzero vector whose direction is preserved by a linear transformation, scaled by an eigenvalue."
    ],
    [
      "Diagonalization — extended concept",
      "Representing a diagonalizable matrix as a similarity transform of a diagonal matrix."
    ],
    [
      "Determinant — extended concept",
      "A scalar associated with a square matrix that indicates invertibility when nonzero."
    ],
    [
      "Matrix rank — extended concept",
      "The dimension of the column space or row space of a matrix."
    ],
    [
      "Orthogonal vectors",
      "Vectors with zero inner product under the standard real Euclidean inner product."
    ],
    [
      "Orthonormal basis — extended concept",
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
      "Condition number — extended concept",
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
  ];
registerConceptGeneratorsForCategory(NAMESPACE_ADVANCED, ADVANCED_CONCEPT_CARDS);
