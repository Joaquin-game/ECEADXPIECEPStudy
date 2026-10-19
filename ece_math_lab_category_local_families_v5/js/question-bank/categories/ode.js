/* ode: seed entries, explicit expansion families, and category-specific additions. */

function makeOdeExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const k=ri(1,4),y0=ri(1,5),x=rand(.2,1.4),ans=v?y0*Math.exp(-k*x):Math.log(2)/k;return qNum(D,title,v?`Solve separable ODE \\(y'=-${k}y\\), \\(y(0)=${y0}\\). Find \\(y(${nfmt(x)})\\).`:`For \\(y'=-${k}y\\), find the half-life.` ,ans,v?`\\(y=y_0e^{-kt}\\), so \\(y(${nfmt(x)})=${nfmt(ans)}\\).`:`Set \\(e^{-kt}=1/2\\), giving \\(t_{1/2}=\\ln2/k=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const n=ri(1,3),y0=ri(1,4),x=rand(.2,1.2),ans=v?y0*Math.exp(x):n;return qNum(D,title,v?`Solve \\(y'=y\\), \\(y(0)=${y0}\\). Find \\(y(${nfmt(x)})\\).`:`For the ODE \\(y'=n y\\) with coefficient \\(n=${n}\\), enter the growth-rate coefficient.`,ans,v?`\\(y(t)=y_0e^t\\), so \\(y=${nfmt(ans)}\\).`:`The exponential growth coefficient is \\(${ans}\\).`)
  }
}
function makeOdeExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=ri(1,6),ans=v?bb/(aa+1):bb/aa;return qNum(D,title,v?`For \\(y'+${aa+1}y=${bb}\\), find equilibrium value.`:`For \\(y'+${aa}y=${bb}\\), find the steady-state value.`,ans,v?`Set \\(y'=0\\), giving \\(y^*=b/(a+1)=${nfmt(ans)}\\).`:`\\(y^*=b/a=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const y=ri(1,5),x=ri(1,5),h=rand(.05,.3),slope=x-y,ans=v?y+h*slope:slope;return qNum(D,title,v?`One Euler step for \\(y'=x-y\\), starting \\(x=${x},y=${y}\\) with step \\(h=${nfmt(h)}\\). Find next y.`:`For \\(y'=x-y\\) at \\(x=${x},y=${y}\\), find the local slope.` ,ans,v?`\\(y_{n+1}=y_n+h(x-y)=${nfmt(ans)}\\).`:`\\(y'=x-y=${ans}\\).`)
  }
}
function makeOdeExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const ww=ri(3,6),z=ri(1,Math.min(ww-1,3)),ans=v?Math.sqrt(ww*ww-z*z):2*z;return qNum(D,title,v?`The characteristic roots are \\(-${z}\\pm i\\sqrt{${ww*ww-z*z}}\\), corresponding to \\(\\omega_n=${ww}\\). Find damped angular frequency.`:`For complex roots \\(-${z}\\pm i\\omega_d\\), find twice the real decay-rate magnitude.`,ans,v?`\\(\\omega_d=\\sqrt{\\omega_n^2-\\zeta^2}=${nfmt(ans)}\\).`:`\\(2|\\operatorname{Re}r|=2(${z})=${ans}\\).`)
  }
}
function makeOdeExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,5),ans=v?b0/2:b0/a0;return qNum(D,title,v?`For \\(y''+${2*a0}y'+${a0*a0}y=${b0}e^{-${a0}t}\\), the forcing is resonant with a repeated characteristic root. Find the coefficient \\(b/2\\) in the particular solution \\(y_p=(b/2)t^2e^{-at}\\).`:`For a first-order equilibrium equation \\(y'+${a0}y=${b0}\\), find its steady state.`,ans,v?`The resonant particular coefficient scale is \\(b/(2a)=${nfmt(ans)}\\).`:`\\(y^*=b/a=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),x=rand(.2,1.3),ans=v?Math.exp(-a0*x)*(1-a0*x):Math.exp(-a0*x);return qNum(D,title,v?`For homogeneous solution \\(y=xe^{-${a0}x}\\), find derivative at \\(x=${nfmt(x)}\\).`:`For homogeneous solution \\(y=e^{-${a0}x}\\), find value at \\(x=${nfmt(x)}\\).`,ans,v?`\\(y'=e^{-ax}(1-ax)=${nfmt(ans)}\\).`:`\\(y=e^{-ax}=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?b0/a0:(a0+b0);return qNum(D,title,v?`For constant forcing \\(y'+${a0}y=${b0}\\), find equilibrium solution value.`:`For two positive coefficients \\(a=${a0}\\), \\(b=${b0}\\), find their sum in the characteristic/forcing coefficient.` ,ans,v?`\\(y^*=b/a=${nfmt(ans)}\\).`:`\\(a+b=${ans}\\).`)
  }
}
function makeOdeExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,5),x=rand(.2,1.5),ans=v?b0/a0*(1-Math.exp(-a0*x)):b0*Math.exp(-a0*x);return qNum(D,title,v?`For \\(y'+${a0}y=${b0}\\) with zero initial value, find \\(y(${nfmt(x)})\\).`:`For forcing \\(b e^{-at}\\) with \\(a=${a0}, b=${b0}\\), find forcing value at \\(t=${nfmt(x)}\\).`,ans,v?`\\(y=(b/a)(1-e^{-at})=${nfmt(ans)}\\).`:`\\(f(t)=be^{-at}=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=v?2*a0: a0*a0;return qNum(D,title,v?`The characteristic polynomial is \\((r+${a0})^2=0\\). What is the repeated root multiplicity?`:`The characteristic polynomial is \\((r+${a0})^2=0\\). Find its repeated root value squared.`,ans,v?`There is one distinct root with multiplicity \\(2\\).`:`Root is \\(r=-${a0}\\), squared value \\(${ans}\\).`)
  }
}
function makeOdeExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=ri(1,5),x=rand(.2,1.5),ans=v?bb/aa*(1-Math.exp(-aa*x)):bb/aa;return qNum(D,title,v?`For \\(y'+${aa}y=${bb}\\) and \\(y(0)=0\\), find step response at \\(t=${nfmt(x)}\\).`:`For \\(y'+${aa}y=${bb}\\), find the steady-state particular solution.`,ans,v?`\\(y=(b/a)(1-e^{-at})=${nfmt(ans)}\\).`:`\\(y_p=b/a=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(1,4),r2=ri(1,5),ans=v?r1*r2:-(r1+r2);return qNum(D,title,v?`Characteristic roots are \\(-${r1}\\) and \\(-${r2}\\). Find their product.`:`Characteristic roots are \\(-${r1}\\) and \\(-${r2}\\). Find their sum.`,ans,v?`Product \\(=(-r_1)(-r_2)=${ans}\\).`:`Sum \\(=-r_1-r_2=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const alpha=ri(1,4),beta=ri(2,7),ans=v?Math.sqrt(alpha*alpha+beta*beta):Math.atan2(beta,alpha);return qNum(D,title,v?`Complex characteristic roots have real part magnitude \\(${alpha}\\) and imaginary part \\(${beta}\\). Find root magnitude.`:`For roots \\(-${alpha}\\pm i${beta}\\), find the argument magnitude of \\(\\alpha+i\\beta\\).`,ans,v?`\\(|r|=\\sqrt{\\alpha^2+\\beta^2}=${nfmt(ans)}\\).`:`\\(\\arg=\\tan^{-1}(\\beta/\\alpha)=${nfmt(ans)}\\,rad\\).`)
  }
}
function makeOdeExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=v?b0/(a0*a0):b0/a0;return qNum(D,title,v?`For \\(y''+${a0*a0}y=${b0}\\), find the constant particular solution.`:`For the first-order equation \\(y'+${a0}y=${b0}\\), find the steady-state value.`,ans,v?`A constant \\(y_p\\) gives \\(${a0*a0}y_p=${b0}\\), so \\(y_p=${nfmt(ans)}\\).`:`\\(y^*=b/a=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),x=rand(.2,1.5),ans=v?x*Math.exp(-a0*x):Math.exp(-a0*x);return qNum(D,title,v?`A repeated-root solution contains \\(xe^{-${a0}x}\\). Evaluate it at \\(x=${nfmt(x)}\\).`:`A homogeneous mode is \\(e^{-${a0}x}\\). Evaluate it at \\(x=${nfmt(x)}\\).`,ans,v?`\\(xe^{-ax}=${nfmt(ans)}\\).`:`\\(e^{-ax}=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,5),ans=v?b0/(a0+1):b0;return qNum(D,title,v?`For a stable first-order plant \\(y'+${a0+1}y=${b0}\\), find equilibrium \\(b/(a+1)\\).`:`For \\(y''+y=${b0}\\) with constant forcing, find a constant particular solution.`,ans,v?`\\(y^*=b/(a+1)=${nfmt(ans)}\\).`:`\\(y_p=b=${nfmt(ans)}\\) because coefficient of y is 1.`)
  }
}
function makeOdeExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=ri(1,4),x=rand(.3,1.5),ans=v?Math.exp(-aa*x)*Math.cos(bb*x):Math.exp(-aa*x)*Math.sin(bb*x);return qNum(D,title,v?`Evaluate decaying oscillation \\(e^{-${aa}t}\\cos(${bb}t)\\) at \\(t=${nfmt(x)}\\).`:`Evaluate decaying oscillation \\(e^{-${aa}t}\\sin(${bb}t)\\) at \\(t=${nfmt(x)}\\).`,ans,v?`Direct substitution gives \\(${nfmt(ans)}\\).`:`Direct substitution gives \\(${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const y0=ri(2,8),h=rand(.05,.25),der=ri(-4,5),ans=v?y0+h*der:der;return qNum(D,title,v?`Euler method starts with \\(y_0=${y0}\\), slope \\(y'_0=${der}\\), step \\(h=${nfmt(h)}\\). Find \\(y_1\\).`:`An ODE solution has initial value \\(y(0)=${y0}\\) and initial slope \\(y'(0)=${der}\\). Find the slope.`,ans,v?`\\(y_1=y_0+hy'_0=${nfmt(ans)}\\).`:`The slope is \\(${der}\\).`)
  }
}
function makeOdeExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=ri(1,4),ans=v?bb/aa:bb/(aa+1);return qNum(D,title,v?`A separable ODE has equilibrium relation \\(${aa}y=${bb}\\). Find equilibrium y.`:`For an equilibrium equation \\((a+1)y=b\\) with \\(a=${aa},b=${bb}\\), find y.`,ans,v?`\\(y=b/a=${nfmt(ans)}\\).`:`\\(y=b/(a+1)=${nfmt(ans)}\\).`)
  }
}
function makeOdeExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=ri(2,6),ans=v?bb/aa:Math.sqrt(aa);return qNum(D,title,v?`A constant particular solution satisfies \\(${aa}y_p=${bb}\\). Find \\(y_p\\).`:`For the unforced oscillator \\(y''+${aa}y=0\\), find natural angular frequency.`,ans,v?`\\(y_p=b/a=${nfmt(ans)}\\).`:`\\(\\omega_n=\\sqrt a=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const ODE_CORE_SEEDS = [
['Initial slope from a first-order ODE',()=>{let a=ri(1,7),b=ri(2,15),y0=ri(1,8),ans=b-a*y0;return qNum(D,'Initial slope',`A function satisfies \\(y'+${a}y=${b}\\) and \\(y(0)=${y0}\\). Find \\(y'(0)\\).`,ans,`At \\(t=0\\), \\(y'(0)=${b}-${a}(${y0})=${ans}\\).`)}],
['Equilibrium of a first-order ODE',()=>{let a=ri(1,8),b=ri(2,20),ans=b/a;return qNum(D,'Equilibrium value',`For \\(y'+${a}y=${b}\\), find the steady-state equilibrium \\(y_{eq}\\).`,ans,`At equilibrium, \\(y'=0\\), so \\(y_{eq}=${b}/${a}=${nfmt(ans)}\\).`)}],
['Exponential natural response',()=>{let y0=ri(2,15),a=ri(1,5),t=rand(.2,2.5),ans=y0*Math.exp(-a*t);return qNum(D,'Natural response',`Solve \\(y'+${a}y=0\\), \\(y(0)=${y0}\\), then evaluate \\(y(${nfmt(t)})\\).`,ans,`\\(y(t)=y_0e^{-at}=${y0}e^{-${a}(${nfmt(t)})}=${nfmt(ans)}\\).`)}],
['First-order constant-input response',()=>{let a=ri(1,5),b=ri(2,12),y0=ri(0,6),t=rand(.2,2),ans=b/a+(y0-b/a)*Math.exp(-a*t);return qNum(D,'Constant-input response',`For \\(y'+${a}y=${b}\\), \\(y(0)=${y0}\\), calculate \\(y(${nfmt(t)})\\).`,ans,`\\(y(t)=b/a+(y_0-b/a)e^{-at}\\); substitute the supplied constants.`)}],
['Time constant of a first-order equation',()=>{let a=ri(1,9),ans=1/a;return qNum(D,'ODE time constant',`For the homogeneous ODE \\(y'+${a}y=0\\), find its exponential time constant.`,ans,`The response is \\(e^{-at}=e^{-t/\\tau}\\), so \\(\\tau=1/${a}=${nfmt(ans)}\\).`)}],
['Characteristic root',()=>{let r=ri(-8,-1);return qNum(D,'Characteristic root',`For the ODE \\(y'-(${r})y=0\\), find the characteristic root.`,r,`Assume \\(y=e^{rt}\\), giving characteristic equation \\(r-${r}=0\\). The root is \\(${r}\\).`)}],
['Larger root of a second-order ODE',()=>{let r1=-ri(2,8),r2=-ri(1,7);if(r1===r2)r2-=2;let a=-(r1+r2),b=r1*r2,ans=Math.max(r1,r2);return qNum(D,'Second-order characteristic root',`For \\(y''+${a}y'+${b}y=0\\), find the larger characteristic root.`,ans,`The characteristic polynomial factors as \\((r-${r1})(r-${r2})=0\\); the larger root is \\(${ans}\\).`)}],
['Half-life of exponential decay',()=>{let k=rand(.15,1.5),ans=Math.log(2)/k;return qNum(D,'Half-life',`A quantity decays as \\(x(t)=x_0e^{-${nfmt(k)}t}\\). Find its half-life.`,ans,`Set \\(x/x_0=1/2\\): \\(t_{1/2}=\\ln2/k=${nfmt(ans)}\\).`)}],
['Exponential growth',()=>{let y0=ri(2,8),k=rand(.1,.7),t=rand(.5,2.2),ans=y0*Math.exp(k*t);return qNum(D,'Exponential growth',`Solve \\(y'= ${nfmt(k)}y\\), \\(y(0)=${y0}\\), then find \\(y(${nfmt(t)})\\).`,ans,`\\(y(t)=y_0e^{kt}=${y0}e^{${nfmt(k)}(${nfmt(t)})}=${nfmt(ans)}\\).`)}],
['One Euler-method step',()=>{let y0=ri(1,8),t0=ri(0,4),h=rand(.1,.5),a=ri(1,4),b=ri(1,8),f=a*t0+b*y0,ans=y0+h*f;return qNum(D,'Euler step',`For \\(y'= ${a}t+${b}y\\), starting at \\(t_0=${t0}, y_0=${y0}\\), use one Euler step with \\(h=${nfmt(h)}\\) to estimate the next y-value.`,ans,`\\(y_1=y_0+h f(t_0,y_0)=${y0}+${nfmt(h)}[${a}(${t0})+${b}(${y0})]=${nfmt(ans)}\\).`)}],
['Linear growth ODE',()=>{let a=ri(1,8),y0=ri(-3,8),t=rand(.5,4),ans=y0+a*t;return qNum(D,'Linear growth solution',`Solve \\(y'=${a}\\), \\(y(0)=${y0}\\), then find \\(y(${nfmt(t)})\\).`,ans,`Integrate to obtain \\(y(t)=y_0+${a}t\\), giving \\(${nfmt(ans)}\\).`)}],
['Cooling by Newton law',()=>{let ta=ri(15,30),t0=ri(60,100),k=rand(.05,.3),t=rand(1,8),ans=ta+(t0-ta)*Math.exp(-k*t);return qNum(D,'Newton cooling',`An object cools toward \\(T_a=${ta}^\\circ C\\) from \\(T_0=${t0}^\\circ C\\), with \\(k=${nfmt(k)}\\,min^{-1}\\). Find \\(T(${nfmt(t)})\\).`,ans,`\\(T(t)=T_a+(T_0-T_a)e^{-kt}=${nfmt(ans)}^\\circ C\\).`,'number')}],
['RC capacitor charging',()=>{let v=ri(5,24),r=ri(1,9),c=ri(1,9),t=rand(.2,4),tau=r*c,ans=v*(1-Math.exp(-t/tau));return qNum(D,'RC charging response',`An RC circuit has \\(V=${v}\\,V\\), \\(R=${r}\\,k\\Omega\\), \\(C=${c}\\,mF\\), giving \\(\\tau=RC=${tau}\\,s\\). Find capacitor voltage at \\(t=${nfmt(t)}\\,s\\).`,ans,`\\(v_C(t)=V(1-e^{-t/\\tau})=${nfmt(ans)}\\,V\\).`)}],
['RL current rise',()=>{let v=ri(5,24),r=ri(2,12),l=ri(1,8),t=rand(.1,2),tau=l/r,ans=v/r*(1-Math.exp(-t/tau));return qNum(D,'RL current rise',`An RL circuit has \\(V=${v}\\,V\\), \\(R=${r}\\,\\Omega\\), \\(L=${l}\\,H\\). Find current at \\(t=${nfmt(t)}\\,s\\) after a DC step.`,ans,`\\(i(t)=\\frac VR(1-e^{-tR/L})=${nfmt(ans)}\\,A\\).`)}],
['Critical damping coefficient',()=>{let m=ri(1,8),k=ri(10,100),ans=2*Math.sqrt(m*k);return qNum(D,'Critical damping',`A mass-spring system has \\(m=${m}\\,kg\\) and \\(k=${k}\\,N/m\\). Find critical damping coefficient \\(c_c=2\\sqrt{mk}\\).`,ans,`\\(c_c=2\\sqrt{${m}\\cdot${k}}=${nfmt(ans)}\\,N\\cdot s/m\\).`)}],
['Natural frequency of a mass-spring system',()=>{let m=rand(.5,8),k=ri(15,200),ans=Math.sqrt(k/m);return qNum(D,'Mass-spring natural frequency',`For mass \\(m=${nfmt(m)}\\,kg\\) and spring constant \\(k=${k}\\,N/m\\), find \\(\\omega_n=\\sqrt{k/m}\\).`,ans,`\\(\\omega_n=\\sqrt{${k}/${nfmt(m)}}=${nfmt(ans)}\\,rad/s\\).`)}],
['Equilibrium under constant forcing',()=>{let a=ri(1,8),u=ri(2,20),ans=u/a;return qNum(D,'Forced equilibrium',`For \\(y'+${a}y=${u}\\), find equilibrium response to the constant forcing.`,ans,`At equilibrium, \\(0+${a}y_{eq}=${u}\\), giving \\(y_{eq}=${nfmt(ans)}\\).`)}],
['Residual derivative estimate',()=>{let t=rand(.5,3),a=ri(1,5),b=ri(1,8),y=rand(1,6),ans=a*t+b*y;return qNum(D,'Derivative evaluation',`At \\(t=${nfmt(t)}\\) and \\(y=${nfmt(y)}\\), the ODE is \\(y'=${a}t+${b}y\\). Find the instantaneous slope.`,ans,`\\(y'=${a}(${nfmt(t)})+${b}(${nfmt(y)})=${nfmt(ans)}\\).`)}],
['Particular solution for a constant forcing',()=>{let b=ri(1,8),u=ri(2,20),ans=u/b;return qNum(D,'Constant particular solution',`For \\(y''+3y'+${b}y=${u}\\), find a constant particular solution \\(y_p\\).`,ans,`For a constant particular solution, derivatives vanish, so \\(${b}y_p=${u}\\) and \\(y_p=${nfmt(ans)}\\).`)}],
['Time to reach a fraction of a first-order step',()=>{let tau=rand(.5,4),fraction=rand(.2,.85),ans=-tau*Math.log(1-fraction);return qNum(D,'First-order response time',`A normalized first-order step response is \\(y(t)=1-e^{-t/${nfmt(tau)}}\\). Find time when output reaches \\(${nfmt(fraction*100)}\\%\\) of its final value.`,ans,`Solve \\(${nfmt(fraction)}=1-e^{-t/\\tau}\\), giving \\(t=-\\tau\\ln(1-${nfmt(fraction)})=${nfmt(ans)}\\,s\\).`)}]
];

NUMERIC_GENERATOR_REGISTRY.ode = [...coreSeedEntries(D, ODE_CORE_SEEDS),
    numericEntry('ode',"First-order homogeneous solution · family 01 (randomized variant)","ode-family-01",()=>makeOdeExpansionFamily01("First-order homogeneous solution · family 01 (randomized variant)")),
    numericEntry('ode',"Exponential-growth response · family 02 (randomized variant)","ode-family-02",()=>makeOdeExpansionFamily02("Exponential-growth response · family 02 (randomized variant)")),
    numericEntry('ode',"Constant-input equilibrium · family 03 (randomized variant)","ode-family-03",()=>makeOdeExpansionFamily03("Constant-input equilibrium · family 03 (randomized variant)")),
    numericEntry('ode',"One Euler method step · family 04 (randomized variant)","ode-family-04",()=>makeOdeExpansionFamily04("One Euler method step · family 04 (randomized variant)")),
    numericEntry('ode',"Complex characteristic roots · family 05 (randomized variant)","ode-family-05",()=>makeOdeExpansionFamily05("Complex characteristic roots · family 05 (randomized variant)")),
    numericEntry('ode',"Resonant repeated-root forcing · family 06 (randomized variant)","ode-family-06",()=>makeOdeExpansionFamily06("Resonant repeated-root forcing · family 06 (randomized variant)")),
    numericEntry('ode',"Repeated-root homogeneous mode · family 07 (randomized variant)","ode-family-07",()=>makeOdeExpansionFamily07("Repeated-root homogeneous mode · family 07 (randomized variant)")),
    numericEntry('ode',"Constant-force equilibrium · family 08 (randomized variant)","ode-family-08",()=>makeOdeExpansionFamily08("Constant-force equilibrium · family 08 (randomized variant)")),
    numericEntry('ode',"Forced first-order solution · family 09 (randomized variant)","ode-family-09",()=>makeOdeExpansionFamily09("Forced first-order solution · family 09 (randomized variant)")),
    numericEntry('ode',"Characteristic root multiplicity · family 10 (randomized variant)","ode-family-10",()=>makeOdeExpansionFamily10("Characteristic root multiplicity · family 10 (randomized variant)")),
    numericEntry('ode',"Step response value · family 11 (randomized variant)","ode-family-11",()=>makeOdeExpansionFamily11("Step response value · family 11 (randomized variant)")),
    numericEntry('ode',"Sum and product of characteristic roots · family 12 (randomized variant)","ode-family-12",()=>makeOdeExpansionFamily12("Sum and product of characteristic roots · family 12 (randomized variant)")),
    numericEntry('ode',"Complex root magnitude · family 13 (randomized variant)","ode-family-13",()=>makeOdeExpansionFamily13("Complex root magnitude · family 13 (randomized variant)")),
    numericEntry('ode',"Constant particular solution · family 14 (randomized variant)","ode-family-14",()=>makeOdeExpansionFamily14("Constant particular solution · family 14 (randomized variant)")),
    numericEntry('ode',"Repeated-root response at time · family 15 (randomized variant)","ode-family-15",()=>makeOdeExpansionFamily15("Repeated-root response at time · family 15 (randomized variant)")),
    numericEntry('ode',"Equilibrium under linear feedback · family 16 (randomized variant)","ode-family-16",()=>makeOdeExpansionFamily16("Equilibrium under linear feedback · family 16 (randomized variant)")),
    numericEntry('ode',"Damped sinusoidal solution · family 17 (randomized variant)","ode-family-17",()=>makeOdeExpansionFamily17("Damped sinusoidal solution · family 17 (randomized variant)")),
    numericEntry('ode',"Euler update from initial slope · family 18 (randomized variant)","ode-family-18",()=>makeOdeExpansionFamily18("Euler update from initial slope · family 18 (randomized variant)")),
    numericEntry('ode',"Separable equation equilibrium · family 19 (randomized variant)","ode-family-19",()=>makeOdeExpansionFamily19("Separable equation equilibrium · family 19 (randomized variant)")),
    numericEntry('ode',"Natural frequency from oscillator · family 20 (randomized variant)","ode-family-20",()=>makeOdeExpansionFamily20("Natural frequency from oscillator · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(D,'Field scenario · Thermal probe cooling model','scenario-ode-thermal-probe-cooling',()=>{
  const Tamb=pick([20,22,25]),T0=pick([70,80,90]),k=pick([.1,.2,.25,.3]),t=pick([2,3,4,5]),ans=Tamb+(T0-Tamb)*Math.exp(-k*t);
  return qNum(D,'Field scenario · Thermal probe cooling model',`A thermal probe follows Newton cooling, \(\frac{dT}{dt}=-k(T-T_a)\), with ambient temperature \(T_a=${Tamb}^\circ C\), initial temperature \(T(0)=${T0}^\circ C\), and \(k=${k}\,min^{-1}\). Find \(T(${t}\,min)\).`,ans,`The solution is \(T(t)=T_a+(T_0-T_a)e^{-kt}\). Thus \(T(${t})=${Tamb}+(${T0}-${Tamb})e^{-${k}(${t})}=${nfmt(ans)}^\circ C\).`);
});
appendNumericRecipe(D,'Applied · Damped vibration frequency from complex roots','scenario-ode-damped-vibration-roots',()=>{
  const zeta=pick([.2,.3,.4,.6]),wn=ri(4,12),wd=wn*Math.sqrt(1-zeta*zeta);
  return qNum(D,'Applied · Damped vibration frequency from complex roots',`A vibration-isolation platform has characteristic roots \(s=-\zeta\omega_n\pm j\omega_d\), with damping ratio \(\zeta=${zeta}\) and natural frequency \(\omega_n=${wn}\,rad/s\). Find \(\omega_d\).`,wd,`For an underdamped second-order system, \(\omega_d=\omega_n\sqrt{1-\zeta^2}=${wn}\sqrt{1-${zeta}^2}=${nfmt(wd)}\,rad/s\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('ode','Additional · Half-life of exponential decay','ode-topup-01',()=>{
  const k=rand(.2,2),ans=Math.LN2/k;
  return qNum(D,'Half-life of exponential decay',`A quantity follows \(y(t)=y_0e^{-kt}\) with decay constant \(k=${nfmt(k)}\,s^{-1}\). Find its half-life.`,ans,`Set \(y/y_0=1/2\): \(t_{1/2}=\ln2/k=${nfmt(ans)}\,s\).`);
});
appendNumericRecipe('ode','Additional · One-step Euler approximation','ode-topup-02',()=>{
  const x0=ri(1,5),y0=ri(1,8),h=pick([.1,.2,.25,.5]),a=ri(1,4),ans=y0+h*(x0+a*y0);
  return qNum(D,'One-step Euler approximation',`For \(y'=x+${a}y\), start at \(x_0=${x0}\), \(y_0=${y0}\), and take one Euler step of size \(h=${nfmt(h)}\). Find \(y_1\).`,ans,`Euler's method gives \(y_1=y_0+h f(x_0,y_0)=${y0}+${nfmt(h)}(${x0}+${a}(${y0}))=${nfmt(ans)}\).`);
});
appendNumericRecipe('ode','Additional · Equilibrium solution of a first-order model','ode-topup-03',()=>{
  const input=ri(2,20),loss=ri(1,5),ans=input/loss;
  return qNum(D,'Equilibrium solution of a first-order model',`A state obeys \(y'=${input}-${loss}y\). Find its constant equilibrium value.`,ans,`At equilibrium, \(y'=0\), so \(${input}-${loss}y^*=0\) and \(y^*=${input}/${loss}=${nfmt(ans)}\).`);
});
appendNumericRecipe('ode','Additional · Instantaneous logistic growth rate','ode-topup-04',()=>{
  const r=rand(.2,1),K=ri(80,300),P=ri(10,K-10),ans=r*P*(1-P/K);
  return qNum(D,'Instantaneous logistic growth rate',`A population follows \(P'=rP(1-P/K)\) with \(r=${nfmt(r)}\), carrying capacity \(K=${K}\), and current population \(P=${P}\). Find \(P'\).`,ans,`Substitute: \(P'=${nfmt(r)}(${P})(1-${P}/${K})=${nfmt(ans)}\) population units per time.`);
});
appendNumericRecipe('ode','Additional · Damped natural frequency','ode-topup-05',()=>{
  const zeta=pick([.1,.2,.3,.4,.5,.6]),wn=ri(5,20),ans=wn*Math.sqrt(1-zeta*zeta);
  return qNum(D,'Damped natural frequency',`A second-order ODE has natural frequency \(\omega_n=${wn}\,rad/s\) and damping ratio \(\zeta=${nfmt(zeta)}\). Find \(\omega_d\).`,ans,`\(\omega_d=\omega_n\sqrt{1-\zeta^2}=${wn}\sqrt{1-${nfmt(zeta*zeta)}}=${nfmt(ans)}\,rad/s\).`);
});
appendNumericRecipe('ode','Additional · Undamped oscillator displacement','ode-topup-06',()=>{
  const wn=ri(1,8),y0=ri(-4,6),v0=ri(-5,7),t=rand(.2,2),ans=y0*Math.cos(wn*t)+(v0/wn)*Math.sin(wn*t);
  return qNum(D,'Undamped oscillator displacement',`Solve \(y''+${wn*wn}y=0\) with \(y(0)=${y0}\) and \(y'(0)=${v0}\). Find \(y(${nfmt(t)})\).`,ans,`The solution is \(y(t)=y_0\cos(\omega_nt)+(v_0/\omega_n)\sin(\omega_nt)\). Substitution gives \(${nfmt(ans)}\).`);
});
