/* laplace: seed entries, explicit expansion families, and category-specific additions. */

function makeLaplaceExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const p=ri(1,4),q=p+ri(2,5),x=rand(.2,1.6),z=ri(2,8),ans=v?1/((z+p)*(z+q)):(Math.exp(-p*x)-Math.exp(-q*x))/(q-p);return qNum(L,title,v?`Evaluate \\(F(${z})\\) for \\(F(s)=1/[(s+${p})(s+${q})]\\).`:`Find \\(f(${nfmt(x)})\\) if \\(F(s)=1/[(s+${p})(s+${q})]\\).`,ans,v?`Substitute \\(s=${z}\\): \\(F=${nfmt(ans)}\\).`:`Partial fractions give \\(f(t)=(e^{-${p}t}-e^{-${q}t})/(${q}-${p})\\), so \\(f(${nfmt(x)})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const d=ri(1,4),x=rand(.3,1.8),z=ri(2,7),ans=v?1/(z+d)**4:x**3*Math.exp(-d*x)/6;return qNum(L,title,v?`Evaluate \\(1/(${z}+${d})^4\\), the transform value for \\(t^3e^{-${d}t}/3!\\).`:`Find \\(f(${nfmt(x)})\\) for \\(F(s)=1/(s+${d})^4\\).`,ans,v?`\\(\\mathcal L\\{t^3e^{-dt}/3!\\}=1/(s+d)^4\\); at \\(s=${z}\\), the value is \\(${nfmt(ans)}\\).`:`\\(\\mathcal L^{-1}\\{1/(s+d)^4\\}=t^3e^{-dt}/3!\\), so \\(f(${nfmt(x)})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const delay=ri(1,4),end=delay+ri(1,4),z=ri(2,7),ans=v?end-delay:(Math.exp(-delay*z)-Math.exp(-end*z))/z;return qNum(L,title,v?`A pulse is nonzero from \\(t=${delay}\\) to \\(t=${end}\\). Find its duration.`:`For \\(f(t)=u(t-${delay})-u(t-${end})\\), evaluate \\(F(${z})\\).`,ans,v?`Duration \\(=${end}-${delay}=${nfmt(ans)}\\).`:`\\(F(s)=(e^{-${delay}s}-e^{-${end}s})/s\\), hence \\(F(${z})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const amp=ri(2,9),dur=ri(1,5),z=ri(2,8),ans=v?amp*dur:amp*(1-Math.exp(-z*dur))/z;return qNum(L,title,v?`A rectangular signal has height \\(${amp}\\) and duration \\(${dur}\\). Find its total area.`:`For \\(f(t)=${amp}[u(t)-u(t-${dur})]\\), evaluate \\(F(${z})\\).`,ans,v?`Area \\(=A T=${amp}(${dur})=${nfmt(ans)}\\).`:`\\(F(s)=A(1-e^{-sT})/s\\), giving \\(F(${z})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const d=ri(1,4),ww=ri(2,6),x=rand(.2,1.6),z=ri(2,7),ans=v?Math.exp(-d*x)*Math.cos(ww*x):(z+d)/((z+d)**2+ww*ww);return qNum(L,title,v?`Find \\(f(${nfmt(x)})\\) for \\(F(s)=(s+${d})/[(s+${d})^2+${ww*ww}]\\).`:`Evaluate the Laplace transform of \\(e^{-${d}t}\\cos(${ww}t)\\) at \\(s=${z}\\).`,ans,v?`The inverse pair is \\(e^{-dt}\\cos(\\omega t)\\), giving \\(${nfmt(ans)}\\).`:`\\(F(s)=(s+d)/[(s+d)^2+\\omega^2]\\), so \\(F(${z})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const on=ri(1,3),period=on+ri(2,5),z=ri(2,7),ans=v?on/period:(1-Math.exp(-z*on))/(z*(1-Math.exp(-z*period)));return qNum(L,title,v?`A periodic pulse is on for \\(${on}\\,s\\) in every \\(${period}\\,s\\) period. Find duty cycle as a decimal.`:`A unit-amplitude periodic pulse is on for \\(${on}\\,s\\) every \\(${period}\\,s\\). Evaluate its Laplace transform at \\(s=${z}\\).`,ans,v?`Duty cycle \\(=t_{on}/T=${on}/${period}=${nfmt(ans)}\\).`:`\\(F(s)=(1-e^{-s t_{on}})/[s(1-e^{-sT})]\\), giving \\(${nfmt(ans)}\\).`,'number')
  }
}
function makeLaplaceExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(2,5),k=ri(3,12),y0=ri(0,5),x=rand(.3,2),ans=v?k-aa*(y0*Math.exp(-aa*x)+(k/aa)*(1-Math.exp(-aa*x))):(k/aa)+(y0-k/aa)*Math.exp(-aa*x);return qNum(L,title,v?`For \\(y'+${aa}y=${k}\\), \\(y(0)=${y0}\\), find the derivative \\(y'(${nfmt(x)})\\).`:`For \\(y'+${aa}y=${k}\\), \\(y(0)=${y0}\\), find \\(y(${nfmt(x)})\\).`,ans,v?`Using \\(y'=k-ay\\), \\(y'(${nfmt(x)})=${nfmt(ans)}\\).`:`The response is \\(y(t)=k/a+(y_0-k/a)e^{-at}\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const ww=ri(2,6),k=ri(2,9),x=rand(.2,1.5),ans=v?k/ww*Math.sin(ww*x):k/(ww*ww)*(1-Math.cos(ww*x));return qNum(L,title,v?`Solve \\(y''+${ww*ww}y=${k}\\), with zero initial conditions. Find \\(y'(${nfmt(x)})\\).`:`Solve \\(y''+${ww*ww}y=${k}\\), with zero initial conditions. Find \\(y(${nfmt(x)})\\).`,ans,v?`\\(y'(t)=k\\sin(\\omega t)/\\omega\\), so \\(y'(${nfmt(x)})=${nfmt(ans)}\\).`:`\\(y(t)=k(1-\\cos\\omega t)/\\omega^2\\), so \\(y(${nfmt(x)})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const gain=ri(2,10),pole=ri(1,5),freq=ri(1,7),mag=gain/Math.hypot(pole,freq),ans=v?Math.atan(freq/pole):mag;return qNum(L,title,v?`For \\(G(s)=${gain}/(s+${pole})\\), find the magnitude of phase lag at \\(\\omega=${freq}\\,rad/s\\) in radians.`:`For \\(G(s)=${gain}/(s+${pole})\\), find \\(|G(j\\omega)|\\) at \\(\\omega=${freq}\\,rad/s\\).`,ans,v?`The phase is \\(-\\tan^{-1}(\\omega/a)\\); its lag magnitude is \\(${nfmt(ans)}\\,rad\\).`:`\\(|G(j\\omega)|=K/\\sqrt{a^2+\\omega^2}=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const delay=ri(1,4),x=delay+rand(.3,2),z=ri(2,8),ans=v?x-delay:Math.exp(-delay*z)*(1/z**2+delay/z);return qNum(L,title,v?`For a delayed ramp \\(u(t-${delay})(t-${delay})\\), evaluate its shifted ramp at \\(t=${nfmt(x)}\\).`:`Evaluate \\(\\mathcal L\\{u(t-${delay})t\\}\\) at \\(s=${z}\\).`,ans,v?`The active ramp is \\(t-a=${nfmt(x)}-${delay}=${nfmt(ans)}\\).`:`\\(F(s)=e^{-as}(1/s^2+a/s)\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,8),d=ri(1,4),z=ri(2,7),ans=v?A0/d:A0/(z+d);return qNum(L,title,v?`An exponential response has initial amplitude \\(${A0}\\) and decay rate \\(${d}\\). Find its initial time-area scale \\(A/a\\).`:`For \\(f(t)=${A0}e^{-${d}t}\\), evaluate \\(F(${z})\\).`,ans,v?`\\(\\int_0^\\infty A e^{-at}dt=A/a=${A0}/${d}=${nfmt(ans)}\\).`:`\\(F(s)=A/(s+a)=${A0}/(${z}+${d})=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=aa+ri(1,4),x=rand(.3,1.7),ans=v?(-aa*Math.exp(-aa*x)+bb*Math.exp(-bb*x))/(bb-aa):(Math.exp(-aa*x)-Math.exp(-bb*x))/(bb-aa);return qNum(L,title,v?`For the impulse response \\(h(t)=(e^{-${aa}t}-e^{-${bb}t})/(${bb-aa})\\), find \\(h'(${nfmt(x)})\\).`:`For \\(h(t)=(e^{-${aa}t}-e^{-${bb}t})/(${bb-aa})\\), find \\(h(${nfmt(x)})\\).`,ans,v?`Differentiate: \\(h'=(-ae^{-at}+be^{-bt})/(b-a)=${nfmt(ans)}\\).`:`Substitute \\(t=${nfmt(x)}\\): \\(h=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(2,9),tau=rand(.5,3),x=rand(.2,2),frac=1-Math.exp(-x/tau),ans=v?tau:-tau*Math.log(1-frac);return qNum(L,title,v?`A first-order step reaches fraction \\(${nfmt(frac)}\\) at time \\(t=${nfmt(x)}\\,s\\). Find the time constant.`:`A first-order system has time constant \\(\\tau=${nfmt(tau)}\\,s\\). At \\(t=${nfmt(x)}\\), find the fraction of final value reached.`,ans,v?`\\(\\tau=-t/\\ln(1-f)=-${nfmt(x)}/\\ln(1-${nfmt(frac)})=${nfmt(ans)}\\,s\\).`:`\\(f(t)=1-e^{-t/\\tau}=1-e^{-${nfmt(x)}/${nfmt(tau)}}=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const f0=ri(1,6),aa=ri(1,4),z=ri(3,9),ans=v?f0:(z*f0)/(z+aa)-f0;return qNum(L,title,v?`Given \\(F(s)=${f0}/(s+${aa})\\), use the initial-value theorem to find \\(f(0^+)\\).`:`For \\(F(s)=${f0}/(s+${aa})\\), compute \\(sF(s)-f(0^+)\\) at \\(s=${z}\\), given \\(f(0^+)=${f0}\\).`,ans,v?`\\(\\lim_{s\\to\\infty}sF(s)=${f0}\\).`:`\\(${z}(${f0}/(${z}+${aa}))-${f0}=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const ww=ri(2,6),z=ri(2,8),ans=v?2*ww*z/(z*z+ww*ww)**2:ww/(z*z+ww*ww);return qNum(L,title,v?`Evaluate \\(\\mathcal L\\{t\\sin(${ww}t)\\}\\) at \\(s=${z}\\).`:`Evaluate \\(\\mathcal L\\{\\sin(${ww}t)\\}\\) at \\(s=${z}\\).`,ans,v?`\\(\\mathcal L\\{t\\sin\\omega t\\}=2\\omega s/(s^2+\\omega^2)^2\\), giving \\(${nfmt(ans)}\\).`:`\\(\\mathcal L\\{\\sin\\omega t\\}=\\omega/(s^2+\\omega^2)=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const K=ri(2,9),aa=ri(1,4),t0=rand(.2,1.5),ans=v?K*Math.exp(-aa*t0):K/aa*(1-Math.exp(-aa*t0));return qNum(L,title,v?`For an exponential input \\(Ke^{-${aa}t}\\), find its instantaneous value at \\(t=${nfmt(t0)}\\).`:`For \\(f(t)=${K}e^{-${aa}t}\\), find accumulated area \\(\\int_0^{${nfmt(t0)}} f(t)dt\\).`,ans,v?`\\(f(t)=Ke^{-at}=${nfmt(ans)}\\).`:`\\(\\int_0^T Ke^{-at}dt=K(1-e^{-aT})/a=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),t0=rand(.2,1.5),ans=v?Math.exp(-aa*t0)*(1-aa*t0):t0*Math.exp(-aa*t0);return qNum(L,title,v?`For \\(f(t)=te^{-${aa}t}\\), find \\(f'(${nfmt(t0)})\\).`:`For \\(f(t)=te^{-${aa}t}\\), find \\(f(${nfmt(t0)})\\).`,ans,v?`Product rule gives \\(f'=e^{-at}(1-at)=${nfmt(ans)}\\).`:`\\(f(t)=t e^{-at}=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),c1=ri(1,5),c2=ri(1,5),t0=rand(.2,1.5),ans=v?(c2-aa*(c1+c2*t0))*Math.exp(-aa*t0):(c1+c2*t0)*Math.exp(-aa*t0);return qNum(L,title,v?`For repeated-root homogeneous solution \\(y=(C_1+C_2t)e^{-${aa}t}\\), find \\(y'(${nfmt(t0)})\\) for \\(C_1=${c1},C_2=${c2}\\).`:`For \\(y=(C_1+C_2t)e^{-${aa}t}\\), find \\(y(${nfmt(t0)})\\) for \\(C_1=${c1},C_2=${c2}\\).`,ans,v?`\\(y'=[C_2-a(C_1+C_2t)]e^{-at}=${nfmt(ans)}\\).`:`Substitution gives \\(y=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const K=ri(2,12),a0=ri(1,5),y0=ri(1,6),ans=v?K-a0*y0:K/a0;return qNum(L,title,v?`For \\(y'+${a0}y=${K}\\) with \\(y(0)=${y0}\\), find initial slope \\(y'(0)\\).`:`For \\(y'+${a0}y=${K}\\), find the steady-state solution value.`,ans,v?`At \\(t=0\\), \\(y'(0)=K-ay_0=${K}-${a0}(${y0})=${nfmt(ans)}\\).`:`At steady state \\(y'=0\\), so \\(y=K/a=${nfmt(ans)}\\).`)
  }
}
function makeLaplaceExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=aa+ri(1,4),x=rand(.3,1.8),ans=v?Math.exp(-aa*x)-Math.exp(-bb*x):(Math.exp(-aa*x)-Math.exp(-bb*x))/(bb-aa);return qNum(L,title,v?`For \\(h(t)=(e^{-${aa}t}-e^{-${bb}t})/(${bb-aa})\\), find the numerator at \\(t=${nfmt(x)}\\).`:`For \\(h(t)=(e^{-${aa}t}-e^{-${bb}t})/(${bb-aa})\\), find \\(h(${nfmt(x)})\\).`,ans,v?`The numerator is \\(e^{-at}-e^{-bt}=${nfmt(ans)}\\).`:`Divide the numerator by \\(${bb-aa}\\): \\(h=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const LAP_CORE_SEEDS = [
['Exponential transform at a point',()=>{let k=ri(2,8),a=ri(1,5),s=ri(2,7);return qNum(L,'Exponential transform',`For \\(f(t)=${k}e^{-${a}t}\\), evaluate \\(F(s)=\\mathcal L\\{f(t)\\}\\) at \\(s=${s}\\).`,k/(s+a),`Since \\(\\mathcal L\\{Ke^{-at}\\}=K/(s+a)\\), substitute \\(s=${s}\\): \\(${k}/(${s}+${a})=${nfmt(k/(s+a))}\\).`) }],
['Power of time transform',()=>{let n=ri(1,4),s=ri(2,6),ans=factorial(n)/Math.pow(s,n+1);return qNum(L,'Power of time transform',`Evaluate \\(\\mathcal L\\{t^{${n}}\\}\\) at \\(s=${s}\\).`,ans,`Use \\(\\mathcal L\\{t^n\\}=n!/s^{n+1}\\). Here \\(${n}!/${s}^{${n+1}}=${nfmt(ans)}\\).`)}],
['Sine transform',()=>{let w=ri(2,9),s=ri(2,8),ans=w/(s*s+w*w);return qNum(L,'Sine transform',`For \\(f(t)=\\sin(${w}t)\\), find \\(F(${s})\\).`,ans,`\\(\\mathcal L\\{\\sin(\\omega t)\\}=\\omega/(s^2+\\omega^2)\\); hence \\(${w}/(${s}^2+${w}^2)=${nfmt(ans)}\\).`)}],
['Cosine transform',()=>{let w=ri(2,8),s=ri(2,8),ans=s/(s*s+w*w);return qNum(L,'Cosine transform',`For \\(f(t)=\\cos(${w}t)\\), evaluate \\(F(s)\\) at \\(s=${s}\\).`,ans,`\\(\\mathcal L\\{\\cos(\\omega t)\\}=s/(s^2+\\omega^2)\\), so the value is \\(${nfmt(ans)}\\).`)}],
['Damped sine transform',()=>{let w=ri(2,7),b=ri(1,3),s=ri(b+2,b+6),ans=w/((s-b)**2+w*w);return qNum(L,'Damped sine transform',`For \\(f(t)=e^{${b}t}\\sin(${w}t)\\), find \\(F(${s})\\).`,ans,`\\(F(s)=\\omega/((s-b)^2+\\omega^2)\\). Substitute the given constants to obtain \\(${nfmt(ans)}\\).`)}],
['Transform of t times an exponential',()=>{let a=ri(1,5),s=ri(2,7),ans=1/Math.pow(s+a,2);return qNum(L,'Transform of t times an exponential',`Evaluate \\(\\mathcal L\\{te^{-${a}t}\\}\\) at \\(s=${s}\\).`,ans,`\\(\\mathcal L\\{te^{-at}\\}=1/(s+a)^2\\), giving \\(${nfmt(ans)}\\).`)}],
['Transform of t squared times an exponential',()=>{let a=ri(1,4),s=ri(2,6),ans=2/Math.pow(s+a,3);return qNum(L,'Transform of t squared times an exponential',`Find \\(\\mathcal L\\{t^2e^{-${a}t}\\}\\) at \\(s=${s}\\).`,ans,`Use \\(\\mathcal L\\{t^2e^{-at}\\}=2/(s+a)^3\\).`)}],
['Delayed unit-step transform',()=>{let a=ri(1,5),s=ri(2,6),ans=Math.exp(-a*s)/s;return qNum(L,'Delayed unit-step transform',`Evaluate \\(\\mathcal L\\{u(t-${a})\\}\\) at \\(s=${s}\\).`,ans,`\\(\\mathcal L\\{u(t-a)\\}=e^{-as}/s\\). Substitute the given values.`)}],
['Inverse transform of a simple pole',()=>{let a=ri(1,5),t=ri(1,4),ans=Math.exp(-a*t);return qNum(L,'Inverse transform of a simple pole',`If \\(F(s)=1/(s+${a})\\), evaluate \\(f(${t})=\\mathcal L^{-1}\\{F(s)\\}\\) at \\(t=${t}\\).`,ans,`\\(\\mathcal L^{-1}\\{1/(s+a)\\}=e^{-at}\\), so \\(f(${t})=e^{-${a}(${t})}=${nfmt(ans)}\\).`)}],
['Inverse transform of a repeated pole',()=>{let n=ri(2,5),t=ri(1,4),ans=Math.pow(t,n-1)/factorial(n-1);return qNum(L,'Inverse transform of a repeated pole',`Evaluate \\(\\mathcal L^{-1}\\{1/s^{${n}}\\}\\) at \\(t=${t}\\).`,ans,`\\(\\mathcal L^{-1}\\{1/s^n\\}=t^{n-1}/(n-1)!\\).`)}],
['Inverse sine transform',()=>{let w=ri(2,9),t=rand(.15,1.1),ans=Math.sin(w*t);return qNum(L,'Inverse sine transform',`Given \\(F(s)=${w}/(s^2+${w*w})\\), evaluate \\(f(t)=\\mathcal L^{-1}\\{F(s)\\}\\) at \\(t=${nfmt(t)}\\).`,ans,`\\(f(t)=\\sin(${w}t)\\); substituting \\(t=${nfmt(t)}\\) gives \\(${nfmt(ans)}\\).`)}],
['Inverse cosine transform',()=>{let w=ri(2,8),t=rand(.15,1.1),ans=Math.cos(w*t);return qNum(L,'Inverse cosine transform',`If \\(F(s)=s/(s^2+${w*w})\\), find \\(f(${nfmt(t)})\\).`,ans,`\\(\\mathcal L^{-1}\\{s/(s^2+\\omega^2)\\}=\\cos(\\omega t)\\).`)}],
['Derivative property',()=>{let k=ri(2,8),a=ri(1,5),s=ri(2,7),ans=s*k/(s+a)-k;return qNum(L,'Derivative property',`A function has \\(F(s)=${k}/(s+${a})\\) and \\(f(0)=${k}\\). Evaluate \\(\\mathcal L\\{f'\\}(s)\\) at \\(s=${s}\\) using the derivative property.`,ans,`\\(\\mathcal L\\{f'\\}=sF(s)-f(0)\\). Thus \\(${s}\\cdot${k}/(${s}+${a})-${k}=${nfmt(ans)}\\).`)}],
['Integral property',()=>{let k=ri(2,8),a=ri(1,5),s=ri(2,7),ans=k/(s*(s+a));return qNum(L,'Integral property',`If \\(F(s)=${k}/(s+${a})\\), evaluate the transform of \\(\\int_0^t f(\\tau)\\,d\\tau\\) at \\(s=${s}\\).`,ans,`The transform is \\(F(s)/s\\), so the value is \\(${k}/(${s}(${s}+${a}))=${nfmt(ans)}\\).`)}],
['Initial value theorem',()=>{let k=ri(2,9),a=ri(1,6),ans=k;return qNum(L,'Initial value theorem',`For \\(F(s)=${k}/(s+${a})\\), use the initial value theorem to find \\(f(0^+)\\).`,ans,`\\(f(0^+)=\\lim_{s\\to\\infty}sF(s)=\\lim s${k}/(s+${a})=${k}\\).`)}],
['Final value theorem',()=>{let k=ri(2,12),a=ri(1,6),ans=k/a;return qNum(L,'Final value theorem',`Given \\(F(s)=${k}/(s(s+${a}))\\), find the final value \\(f(\\infty)\\).`,ans,`\\(f(\\infty)=\\lim_{s\\to0}sF(s)=${k}/${a}=${nfmt(ans)}\\), assuming the final-value theorem conditions hold.`)}],
['Exponential-weighted power transform',()=>{let n=ri(1,3),a=ri(1,4),s=ri(2,7),ans=factorial(n)/Math.pow(s+a,n+1);return qNum(L,'Exponential-weighted power transform',`Evaluate \\(\\mathcal L\\{t^{${n}}e^{-${a}t}\\}\\) at \\(s=${s}\\).`,ans,`By the frequency-shift property, the result is \\(${n}!/(${s}+${a})^{${n+1}}=${nfmt(ans)}\\).`)}],
['Inverse partial-fraction transform',()=>{let a=ri(1,3),b=ri(4,7),k=ri(2,8),t=rand(.15,.9),ans=k*(Math.exp(-a*t)-Math.exp(-b*t))/(b-a);return qNum(L,'Inverse partial-fraction transform',`For \\(F(s)=${k}/((s+${a})(s+${b}))\\), evaluate \\(f(${nfmt(t)})=\\mathcal L^{-1}\\{F(s)\\}\\).`,ans,`Partial fractions give \\(f(t)=${k}\\frac{e^{-${a}t}-e^{-${b}t}}{${b}-${a}}\\).`)}],
['Product of simple transforms',()=>{let k=ri(2,7),m=ri(1,5),a=ri(1,4),b=ri(2,5),s=ri(3,8),ans=(k/(s+a))*(m/(s+b));return qNum(L,'Product of simple transforms',`Evaluate \\(F_1(s)F_2(s)\\) at \\(s=${s}\\), where \\(F_1=${k}/(s+${a})\\) and \\(F_2=${m}/(s+${b})\\).`,ans,`Substitute \\(s=${s}\\) into each factor and multiply: \\(${nfmt(ans)}\\).`)}],
['Transform-domain solution of a first-order ODE',()=>{let a=ri(1,5),y0=ri(1,6),k=ri(2,8),s=ri(2,7),ans=(s*y0+k)/(s*(s+a));return qNum(L,'Transform-domain ODE solution',`For \\(y'+${a}y=${k},\\ y(0)=${y0}\\), evaluate \\(Y(s)\\) at \\(s=${s}\\).`,ans,`Taking the Laplace transform gives \\(Y(s)=(sy(0)+${k})/[s(s+${a})]\\). Substitute \\(s=${s}\\).`)}]
];

NUMERIC_GENERATOR_REGISTRY.laplace = [...coreSeedEntries(L, LAP_CORE_SEEDS),
    numericEntry('laplace',"Exponential shift rule · family 01 (randomized variant)","laplace-family-01",()=>makeLaplaceExpansionFamily01("Exponential shift rule · family 01 (randomized variant)")),
    numericEntry('laplace',"Power-function transform · family 02 (randomized variant)","laplace-family-02",()=>makeLaplaceExpansionFamily02("Power-function transform · family 02 (randomized variant)")),
    numericEntry('laplace',"Sine transform evaluation · family 03 (randomized variant)","laplace-family-03",()=>makeLaplaceExpansionFamily03("Sine transform evaluation · family 03 (randomized variant)")),
    numericEntry('laplace',"Cosine transform evaluation · family 04 (randomized variant)","laplace-family-04",()=>makeLaplaceExpansionFamily04("Cosine transform evaluation · family 04 (randomized variant)")),
    numericEntry('laplace',"Frequency-shifted sine · family 05 (randomized variant)","laplace-family-05",()=>makeLaplaceExpansionFamily05("Frequency-shifted sine · family 05 (randomized variant)")),
    numericEntry('laplace',"Time-multiplication property · family 06 (randomized variant)","laplace-family-06",()=>makeLaplaceExpansionFamily06("Time-multiplication property · family 06 (randomized variant)")),
    numericEntry('laplace',"Final-value theorem · family 07 (randomized variant)","laplace-family-07",()=>makeLaplaceExpansionFamily07("Final-value theorem · family 07 (randomized variant)")),
    numericEntry('laplace',"Initial-value theorem · family 08 (randomized variant)","laplace-family-08",()=>makeLaplaceExpansionFamily08("Initial-value theorem · family 08 (randomized variant)")),
    numericEntry('laplace',"Inverse simple-pole transform · family 09 (randomized variant)","laplace-family-09",()=>makeLaplaceExpansionFamily09("Inverse simple-pole transform · family 09 (randomized variant)")),
    numericEntry('laplace',"Inverse transform of a ramp term · family 10 (randomized variant)","laplace-family-10",()=>makeLaplaceExpansionFamily10("Inverse transform of a ramp term · family 10 (randomized variant)")),
    numericEntry('laplace',"Partial-fraction inverse pair · family 11 (randomized variant)","laplace-family-11",()=>makeLaplaceExpansionFamily11("Partial-fraction inverse pair · family 11 (randomized variant)")),
    numericEntry('laplace',"Repeated-pole inverse pair · family 12 (randomized variant)","laplace-family-12",()=>makeLaplaceExpansionFamily12("Repeated-pole inverse pair · family 12 (randomized variant)")),
    numericEntry('laplace',"Delayed pulse transform · family 13 (randomized variant)","laplace-family-13",()=>makeLaplaceExpansionFamily13("Delayed pulse transform · family 13 (randomized variant)")),
    numericEntry('laplace',"Step response of a first-order ODE · family 14 (randomized variant)","laplace-family-14",()=>makeLaplaceExpansionFamily14("Step response of a first-order ODE · family 14 (randomized variant)")),
    numericEntry('laplace',"Sinusoidal time multiplication · family 15 (randomized variant)","laplace-family-15",()=>makeLaplaceExpansionFamily15("Sinusoidal time multiplication · family 15 (randomized variant)")),
    numericEntry('laplace',"Damped oscillation response · family 16 (randomized variant)","laplace-family-16",()=>makeLaplaceExpansionFamily16("Damped oscillation response · family 16 (randomized variant)")),
    numericEntry('laplace',"Derivative transform property · family 17 (randomized variant)","laplace-family-17",()=>makeLaplaceExpansionFamily17("Derivative transform property · family 17 (randomized variant)")),
    numericEntry('laplace',"Accumulation transform property · family 18 (randomized variant)","laplace-family-18",()=>makeLaplaceExpansionFamily18("Accumulation transform property · family 18 (randomized variant)")),
    numericEntry('laplace',"Periodic pulse train · family 19 (randomized variant)","laplace-family-19",()=>makeLaplaceExpansionFamily19("Periodic pulse train · family 19 (randomized variant)")),
    numericEntry('laplace',"Equation-selection transform pair · family 20 (randomized variant)","laplace-family-20",()=>makeLaplaceExpansionFamily20("Equation-selection transform pair · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(L,'Causal convolution of a ramp and an exponential','laplace-causal-ramp-exponential-convolution',()=>{
  const a=ri(1,5),T=rand(.2,1.6),ans=T/a-1/(a*a)+Math.exp(-a*T)/(a*a);
  return qNum(L,'Causal convolution of a ramp and an exponential',`Using the convolution integral, evaluate \\((t*u(t))* (e^{-${a}t}u(t))\\) at \\(t=${nfmt(T)}\\). In the integral, \\(x_{\\mathrm{prev}}\\) is not used; evaluate \\(\\int_0^T\\tau e^{-a(T-\\tau)}d\\tau\\).`,ans,`\\(\\int_0^T\\tau e^{-a(T-\\tau)}d\\tau=T/a-1/a^2+e^{-aT}/a^2\\). Substituting \\(T=${nfmt(T)}\\), \\(a=${a}\\) gives \\(${nfmt(ans)}\\).`)
});
appendNumericRecipe(L,'Applied · RC sensor step response','scenario-laplace-rc-sensor-step',()=>{
  const Rk=ri(2,10),Cmicro=ri(10,100),tauMs=Rk*Cmicro,multiple=pick([.5,1,1.5,2]),tMs=tauMs*multiple,ans=1-Math.exp(-tMs/tauMs);
  const q=qNum(L,'Applied · RC sensor step response',`A water-level sensor uses an RC low-pass stage with \\(R=${Rk}\\,k\\Omega\\) and \\(C=${Cmicro}\\,\\mu F\\). A unit step is applied. Find the normalized output \\(v_C(t)/V_{in}=1-e^{-t/\\tau}\\) at \\(t=${nfmt(tMs)}\\,ms\\).`,ans,`The time constant is \\(\\tau=RC=(${Rk}\\,k\\Omega)(${Cmicro}\\,\\mu F)=${nfmt(tauMs)}\\,ms\\). Thus \\(v_C/V_{in}=1-e^{-t/\\tau}=1-e^{-${nfmt(tMs)}/${nfmt(tauMs)}}=${nfmt(ans)}\\).`);
  return attachDiagram(q,'rcTransient','An input source drives a resistor R in series with a capacitor C to ground. The output voltage is measured across the capacitor; the RC time constant is tau = RC.');
});
appendNumericRecipe(L,'Applied · Laplace step response of a sensor module','scenario-laplace-step-sensor-module',()=>{
  const amplitude=pick([2,3,5,8]),K=pick([.5,.75,1,1.25]),a=ri(2,6),t=pick([.25,.5,.75,1,1.5]),ans=amplitude*K*(1-Math.exp(-a*t));
  return qNum(L,'Applied · Laplace step response of a sensor module',`A calibrated sensor has transfer function \\(G(s)=\\frac{Ka}{s+a}\\), where \\(K=${K}\\), \\(a=${a}\\,s^{-1}\\). Its input is a step of amplitude \\(${amplitude}\\). Using the Laplace step response, find \\(y(${t}\\,s)\\).`,ans,`For \\(U(s)=${amplitude}/s\\), \\(Y(s)=\\frac{Ka}{s+a}\\frac{${amplitude}}s\\), so \\(y(t)=${amplitude}K(1-e^{-at})\\). At \\(t=${t}\\), \\(y=${amplitude}(${K})(1-e^{-${a}(${t})})=${nfmt(ans)}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('laplace','Additional · Impulse response value for a first-order pole','laplace-topup-01',()=>{
  const K=ri(2,8),a=ri(1,5),t=rand(.2,1.8),ans=K*Math.exp(-a*t);
  return qNum(L,'Impulse response value for a first-order pole',`For \\(H(s)=K/(s+a)\\) with \\(K=${K}\\) and \\(a=${a}\\), find the impulse response \\(h(${nfmt(t)})\\).`,ans,`\\(h(t)=Ke^{-at}u(t)\\), so \\(h(${nfmt(t)})=${K}e^{-${a}(${nfmt(t)})}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('laplace','Additional · Delayed exponential transform value','laplace-topup-02',()=>{
  const K=ri(2,7),a=ri(1,4),d=ri(1,4),s=ri(2,8),ans=K*Math.exp(-s*d)/(s+a);
  return qNum(L,'Delayed exponential transform value',`For \\(f(t)=${K}e^{-${a}(t-${d})}u(t-${d})\\), evaluate \\(F(${s})\\).`,ans,`The delay contributes \\(e^{-ds}\\), so \\(F(s)=Ke^{-ds}/(s+a)\\). At \\(s=${s}\\), \\(F=${nfmt(ans)}\\).`);
});
appendNumericRecipe('laplace','Additional · Unit-ramp transform at a frequency','laplace-topup-03',()=>{
  const s=ri(2,9),ans=1/(s*s);
  return qNum(L,'Unit-ramp transform at a frequency',`Evaluate \\(\\mathcal L\\{tu(t)\\}\\) at \\(s=${s}\\).`,ans,`\\(\\mathcal L\\{t u(t)\\}=1/s^2\\), hence \\(F(${s})=1/${s}^2=${nfmt(ans)}\\).`);
});
appendNumericRecipe('laplace','Additional · Accumulated first-order step response','laplace-topup-04',()=>{
  const K=ri(2,8),tau=ri(1,5),T=rand(.3,2.4),ans=K*(T-tau*(1-Math.exp(-T/tau)));
  return qNum(L,'Accumulated first-order step response',`A first-order unit-step response is \\(y(t)=${K}(1-e^{-t/${tau}})\\). Find the accumulated output \\(\\int_0^{${nfmt(T)}}y(t)\\,dt\\).`,ans,`Integrating gives \\(K[T-\\tau(1-e^{-T/\\tau})]\\). Substitution yields \\(${nfmt(ans)}\\).`);
});
appendNumericRecipe('laplace','Additional · Cascade transfer-function value','laplace-topup-05',()=>{
  const K1=ri(1,5),K2=ri(2,6),a=ri(1,4),b=ri(2,6),s=ri(3,9),ans=K1*K2/((s+a)*(s+b));
  return qNum(L,'Cascade transfer-function value',`Two cascaded stages have \\(H_1(s)=${K1}/(s+${a})\\) and \\(H_2(s)=${K2}/(s+${b})\\). Find the overall gain magnitude \\(H_1(${s})H_2(${s})\\).`,ans,`For cascaded systems, \\(H=H_1H_2=K_1K_2/[(s+a)(s+b)]\\). At \\(s=${s}\\), the result is \\(${nfmt(ans)}\\).`);
});
