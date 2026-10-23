/* controls: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_CONTROLS = 'controls';
const C = NAMESPACE_CONTROLS;
function makeControlsExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const K=ri(2,12),H=rand(.2,2),cl=K/(1+K*H),clGiven=roundSigNumber(cl,4),ans=v?clGiven/(1-clGiven*H):cl;return qNum(C,title,v?`A unity-feedback system has closed-loop gain \\(K/(1+KH)=${nfmt(clGiven)}\\) and \\(H=${nfmt(H)}\\). Solve for forward gain \\(K\\).`:`For forward gain \\(K=${K}\\) and feedback \\(H=${nfmt(H)}\\), find closed-loop gain.`,ans,v?`\\(K=G/(1-GH)=${nfmt(ans)}\\), where \\(G=${nfmt(clGiven)}\\).`:`\\(G_{cl}=K/(1+KH)=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily02(title){
  const v=ri(0,1)===1;
  const naturalFrequency=ri(2,8),damping=rand(.15,.8),answer=v?naturalFrequency*Math.sqrt(1-damping*damping):Math.sqrt(1-damping*damping);
  const prompt=v?`A second-order system has natural frequency \\(\\omega_n=${naturalFrequency}\\,\\mathrm{rad}/\\mathrm{s}\\) and damping ratio \\(\\zeta=${nfmt(damping)}\\). Find its damped natural frequency.`:`A second-order system has natural frequency \\(\\omega_n=${naturalFrequency}\\,\\mathrm{rad}/\\mathrm{s}\\) and damping ratio \\(\\zeta=${nfmt(damping)}\\). Find the normalized damped frequency \\(\\omega_d/\\omega_n=\\sqrt{1-\\zeta^2}\\).`;
  const explanation=v?`\\(\\omega_d=\\omega_n\\sqrt{1-\\zeta^2}=${nfmt(answer)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(\\omega_d/\\omega_n=\\sqrt{1-\\zeta^2}=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'rad/s':''});
}
function makeControlsExpansionFamily03(title){
  const v=ri(0,1)===1;
  const zeta=rand(.2,.8),naturalFrequency=ri(2,9),settlingTime=4/(zeta*naturalFrequency),settlingGiven=roundSigNumber(settlingTime,4);
  const answer=v?4/(settlingGiven*naturalFrequency):settlingTime;
  const prompt=v?`A second-order system has natural frequency \\(\\omega_n=${naturalFrequency}\\,\\mathrm{rad}/\\mathrm{s}\\) and 2% settling time \\(T_s=${nfmt(settlingGiven)}\\,\\mathrm{s}\\). Estimate damping ratio \\(\\zeta\\).`:`A second-order system has damping ratio \\(\\zeta=${nfmt(zeta)}\\) and natural frequency \\(\\omega_n=${naturalFrequency}\\,\\mathrm{rad}/\\mathrm{s}\\). Estimate 2% settling time using \\(T_s\\approx4/(\\zeta\\omega_n)\\).`;
  const explanation=v?`\\(\\zeta\\approx4/(T_s\\omega_n)=${nfmt(answer)}\\) (dimensionless).`:`\\(T_s\\approx4/(${nfmt(zeta)}\\cdot${naturalFrequency})=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'':'s'});
}
function makeControlsExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const zeta=rand(.15,.75),po=100*Math.exp(-zeta*Math.PI/Math.sqrt(1-zeta*zeta)),ans=v?po:Math.sqrt(1-zeta*zeta);return qNum(C,title,v?`A standard underdamped second-order system has \\(\\zeta=${nfmt(zeta)}\\). Estimate percent overshoot.`:`For \\(\\zeta=${nfmt(zeta)}\\), calculate normalized damped frequency \\(\\omega_d/\\omega_n\\).`,ans,v?`\\(%OS=100e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}=${nfmt(ans)}\\%\\).`:`\\(\\omega_d/\\omega_n=\\sqrt{1-\\zeta^2}=${nfmt(ans)}\\).` ,v?'percent':'number')
  }
}
function makeControlsExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const tau=rand(.2,3),t0=rand(.5,5),ans=v?Math.exp(-t0/tau):1-Math.exp(-t0/tau);return qNum(C,title,v?`A first-order system has time constant \\(\\tau=${nfmt(tau)}\\,\\mathrm{s}\\). Find fraction of initial error remaining after \\(t=${nfmt(t0)}\\,\\mathrm{s}\\).`:`A first-order system has time constant \\(\\tau=${nfmt(tau)}\\,\\mathrm{s}\\). Find fraction of final step reached after \\(t=${nfmt(t0)}\\,\\mathrm{s}\\).`,ans,v?`Error fraction \\(e^{-t/\\tau}=${nfmt(ans)}\\).`:`Response fraction \\(1-e^{-t/\\tau}=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const K1=rand(.5,4),K2=rand(.5,4),K3=rand(.5,4),ans=v?K1*K2*K3:K1+K2+K3;return qNum(C,title,v?`Three cascaded blocks have DC gains \\(${nfmt(K1)},${nfmt(K2)},${nfmt(K3)}\\). Find total cascade gain.`:`Three parallel branches have gains \\(${nfmt(K1)},${nfmt(K2)},${nfmt(K3)}\\). Find total gain.`,ans,v?`Cascade transfer functions multiply: \\(K=K_1K_2K_3=${nfmt(ans)}\\).`:`Parallel gains add: \\(K=K_1+K_2+K_3=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),K0=ri(2,10),ans=v?K0/(1+a0*b0):K0/(1+a0);return qNum(C,title,v?`A feedback system has forward gain \\(K=${K0}\\), sensor gain \\(H=${a0*b0}\\). Find the closed-loop gain.`:`A forward gain \\(K=${K0}\\) is attenuated by factor \\(1+${a0}\\). Find \\(K/(1+a)\\).`,ans,v?`\\(G_{cl}=K/(1+KH)=${nfmt(ans)}\\) for the stated loop-product factor.`:`\\(K/(1+a)=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const wn=ri(2,8),zeta=rand(.2,.8),tp=Math.PI/(wn*Math.sqrt(1-zeta*zeta)),ans=v?tp:Math.PI/wn;return qNum(C,title,v?`For \\(\\omega_n=${wn}\\), \\(\\zeta=${nfmt(zeta)}\\), find peak time \\(T_p=\\pi/\\omega_d\\).`:`For an undamped oscillator with \\(\\omega_n=${wn}\\), find half natural period \\(\\pi/\\omega_n\\).`,ans,v?`\\(T_p=\\pi/[\\omega_n\\sqrt{1-\\zeta^2}] =${nfmt(ans)}\\,\\mathrm{s}\\).`:`\\(\\pi/\\omega_n=${nfmt(ans)}\\,\\mathrm{s}\\).`)
  }
}
function makeControlsExpansionFamily09(title){
  const v=ri(0,1)===1;
  const resistanceKOhm=ri(2,20),capacitanceMicroF=ri(2,80),timeConstantSeconds=resistanceKOhm*capacitanceMicroF/1000,answer=v?1000*timeConstantSeconds/resistanceKOhm:timeConstantSeconds;
  const prompt=v?`An RC plant has resistance \\(R=${resistanceKOhm}\\,\\mathrm{k}\\Omega\\) and time constant \\(\\tau=${nfmt(timeConstantSeconds)}\\,\\mathrm{s}\\). Recover capacitance in microfarads.`:`An RC plant has resistance \\(R=${resistanceKOhm}\\,\\mathrm{k}\\Omega\\) and capacitance \\(C=${capacitanceMicroF}\\,\\mu\\mathrm{F}\\). Find its time constant in seconds.`;
  const explanation=v?`Using \\(C=\\tau/R\\) with SI scale factors gives \\(C=${nfmt(answer)}\\,\\mu\\mathrm{F}\\).`:`\\(\\tau=RC=(${resistanceKOhm}\\,\\mathrm{k}\\Omega)(${capacitanceMicroF}\\,\\mu\\mathrm{F})=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'µF':'s'});
}
function makeControlsExpansionFamily10(title){
  const v=ri(0,1)===1;
  const gain=ri(2,10),pole=ri(1,5),frequency=ri(1,7),answer=v?Math.atan(frequency/pole):gain/Math.hypot(pole,frequency);
  const prompt=v?`For \\(G(s)=K/(s+a)\\), with \\(K=${gain}\\), \\(a=${pole}\\,\\mathrm{s}^{-1}\\), find the magnitude of phase lag at \\(\\omega=${frequency}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`For \\(G(s)=K/(s+a)\\), with \\(K=${gain}\\), \\(a=${pole}\\,\\mathrm{s}^{-1}\\), find \\(|G(j\\omega)|\\) at \\(\\omega=${frequency}\\,\\mathrm{rad}/\\mathrm{s}\\).`;
  const explanation=v?`\\(|\\phi|=\\tan^{-1}(\\omega/a)=${nfmt(answer)}\\,\\mathrm{rad}\\).`:`\\(|G(j\\omega)|=K/\\sqrt{a^2+\\omega^2}=${nfmt(answer)}\\,\\mathrm{s}\\) for this unnormalized transfer-function form.`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'rad':'s'});
}
function makeControlsExpansionFamily11(title){
  const v=ri(0,1)===1;
  const naturalFrequency=ri(2,8),damping=rand(.15,.7),answer=v?100*Math.exp(-damping*Math.PI/Math.sqrt(1-damping*damping)):4/(damping*naturalFrequency);
  const prompt=v?`A second-order plant has damping ratio \\(\\zeta=${nfmt(damping)}\\). Estimate percent overshoot.`:`A second-order plant has damping ratio \\(\\zeta=${nfmt(damping)}\\) and natural frequency \\(\\omega_n=${naturalFrequency}\\,\\mathrm{rad}/\\mathrm{s}\\). Estimate 2% settling time.`;
  const explanation=v?`\\(\\%OS=100e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}=${nfmt(answer)}\\%\\).`:`\\(T_s\\approx4/(\\zeta\\omega_n)=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(C,title,prompt,answer,explanation,v?'percent':'number',{quantUnit:v?'':'s'});
}
function makeControlsExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const p1=ri(1,4),p2=ri(2,6),ans=v?p1*p2:p1+p2;return qNum(C,title,v?`A two-pole characteristic polynomial is \\((s+${p1})(s+${p2})\\). Find the constant coefficient.`:`Expand \\((s+${p1})(s+${p2})\\) and find the coefficient of \\(s\\).`,ans,v?`Constant coefficient is \\(p_1p_2=${ans}\\).`:`The \\(s\\) coefficient is \\(p_1+p_2=${ans}\\).`)
  }
}
function makeControlsExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const zeta=rand(.1,.75),os=100*Math.exp(-zeta*Math.PI/Math.sqrt(1-zeta*zeta)),osGiven=roundSigNumber(os,4),ln=Math.log(osGiven/100),ans=v?(-ln/Math.sqrt(Math.PI*Math.PI+ln*ln)):os;return qNum(C,title,v?`A measured second-order overshoot is \\(${nfmt(osGiven)}\\%\\). Estimate damping ratio.`:`A standard second-order system has damping ratio \\(\\zeta=${nfmt(zeta)}\\). Find percent overshoot.`,ans,v?`\\(\\zeta=-\\ln(OS)/\\sqrt{\\pi^2+\\ln^2(OS)}=${nfmt(ans)}\\).`:`\\(%OS=100e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}=${nfmt(ans)}\\%\\).`,v?'number':'percent')
  }
}
function makeControlsExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const Kp=ri(2,10),Kv=ri(2,8),ans=v?1/Kv:1/(1+Kp);return qNum(C,title,v?`A type-1 system has velocity error constant \\(K_v=${Kv}\\). Find ramp steady-state error for unit slope.`:`A type-0 system has position error constant \\(K_p=${Kp}\\). Find step error for a unit step.`,ans,v?`\\(e_{ss}=1/K_v=${nfmt(ans)}\\).`:`\\(e_{ss}=1/(1+K_p)=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const K=ri(1,8),a0=ri(1,5),b0=ri(1,5),ans=v?K/(a0*b0):K/(a0+b0);return qNum(C,title,v?`For a plant with two real poles at \\(-${a0}\\) and \\(-${b0}\\) and numerator gain \\(${K}\\), find DC gain.`:`For positive pole magnitudes \\(${a0}\\), \\(${b0}\\), estimate reciprocal sum time-scale \\(1/(a+b)\\) times gain \\(${K}\\).`,ans,v?`\\(G(0)=K/(ab)=${nfmt(ans)}\\).`:`\\(K/(a+b)=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const K=rand(.5,4),H=rand(.1,1.2),ans=v?K*H:K/(1+K*H);return qNum(C,title,v?`Forward gain is \\(K=${nfmt(K)}\\), feedback \\(H=${nfmt(H)}\\). Find loop gain \\(KH\\).`:`For forward gain \\(K=${nfmt(K)}\\) and feedback \\(H=${nfmt(H)}\\), find negative-feedback closed-loop gain.`,ans,v?`Loop gain \\(KH=${nfmt(ans)}\\).`:`\\(K/(1+KH)=${nfmt(ans)}\\).`)
  }
}
function makeControlsExpansionFamily17(title){
  const v=ri(0,1)===1;
  const resistanceKOhm=ri(2,20),capacitanceMicroF=ri(2,60),timeConstantSeconds=resistanceKOhm*capacitanceMicroF/1000,answer=v?1/(resistanceKOhm*capacitanceMicroF):timeConstantSeconds;
  const prompt=v?`An RC low-pass has \\(R=${resistanceKOhm}\\,\\mathrm{k}\\Omega\\) and \\(C=${capacitanceMicroF}\\,\\mu\\mathrm{F}\\). Find the cutoff angular frequency in radians per millisecond using \\(\\omega_c=1/\\tau\\).`:`An RC low-pass has \\(R=${resistanceKOhm}\\,\\mathrm{k}\\Omega\\) and \\(C=${capacitanceMicroF}\\,\\mu\\mathrm{F}\\). Find the time constant in seconds.`;
  const explanation=v?`The time constant is \\(\\tau=${resistanceKOhm}\\times${capacitanceMicroF}=${resistanceKOhm*capacitanceMicroF}\\,\\mathrm{ms}\\). Thus \\(\\omega_c=1/\\tau=${nfmt(answer)}\\,\\mathrm{rad}/\\mathrm{ms}\\).`:`\\(\\tau=RC=${nfmt(answer)}\\,\\mathrm{s}\\).`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'rad/ms':'s'});
}
function makeControlsExpansionFamily18(title){
  const v=ri(0,1)===1;
  const pole=ri(1,5),initialAmplitude=ri(2,12),time=rand(.2,2),answer=v?initialAmplitude*Math.exp(-pole*time):initialAmplitude/pole*(1-Math.exp(-pole*time));
  const prompt=v?`A first-order natural response is \\(e(t)=K e^{-at}\\), with initial amplitude \\(K=${initialAmplitude}\\) and decay rate \\(a=${pole}\\,\\mathrm{s}^{-1}\\). Find the remaining error at \\(t=${nfmt(time)}\\,\\mathrm{s}\\).`:`A first-order response is \\(e(t)=K e^{-at}\\), with \\(K=${initialAmplitude}\\), \\(a=${pole}\\,\\mathrm{s}^{-1}\\), and time \\(t=${nfmt(time)}\\,\\mathrm{s}\\). Find accumulated response area \\(\\int_0^t e(\\tau)\\,d\\tau\\).`;
  const explanation=v?`\\(e(t)=Ke^{-at}=${nfmt(answer)}\\) (same normalized amplitude unit as \\(K\\)).`:`\\(\\int_0^t Ke^{-a\\tau}d\\tau=K(1-e^{-at})/a=${nfmt(answer)}\\,\\mathrm{s}\\) for a normalized response.`;
  return qNum(C,title,prompt,answer,explanation,'number',{quantUnit:v?'':'s'});
}
function makeControlsExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const K=ri(2,10),w0=ri(1,6),ans=v?K/w0:20*Math.log10(K);return qNum(C,title,v?`A proportional controller gain is \\(K=${K}\\) and a reference scale is \\(\\omega=${w0}\\). Find normalized ratio \\(K/\\omega\\).`:`A controller has amplitude gain \\(K=${K}\\). Express its gain in dB.`,ans,v?`\\(K/\\omega=${nfmt(ans)}\\).`:`\\(G_{dB}=20\\log_{10}K=${nfmt(ans)}\\,\\mathrm{dB}\\).`)
  }
}
function makeControlsExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const K=ri(2,10),H=rand(.1,.8),ans=v?H*K/(1+H*K):K/(1+H*K);return qNum(C,title,v?`For negative feedback with \\(K=${K}\\), \\(H=${nfmt(H)}\\), find feedback contribution \\(HK/(1+HK)\\).`:`For negative feedback with \\(K=${K}\\), \\(H=${nfmt(H)}\\), find closed-loop gain \\(K/(1+HK)\\).`,ans,v?`\\(HK/(1+HK)=${nfmt(ans)}\\).`:`\\(K/(1+HK)=${nfmt(ans)}\\).`)
  }
}



/* Additional numbered numeric families, registered alongside the other families below. */
/* Category-local named numeric families 21–40 (formerly core seed templates). */
function makeControlsFamily21(){
  let k=ri(2,12),tau=ri(1,6);
  return qNum(C,'DC gain',`For \\(G(s)=${k}/(${tau}s+1)\\), find the DC gain \\(G(0)\\).`,k,`Set \\(s=0\\): \\(G(0)=${k}\\).`)
}

function makeControlsFamily22(){
  let tau=ri(1,9);
  return qNum(C,'Time constant',`A first-order system is \\(G(s)=3/(${tau}s+1)\\). Find its time constant \\(\\mathrm{s}\\).`,tau,`The standard form is \\(K/(\\tau s+1)\\); therefore \\(\\tau=${tau}\\,\\mathrm{s}\\).`)
}

function makeControlsFamily23(){
  let tau=ri(1,8),ans=-1/tau;
  return qNum(C,'Pole of a first-order system',`Find the pole of \\(G(s)=1/(${tau}s+1)\\).`,ans,`Set the denominator to zero: \\(${tau}s+1=0\\), so \\(s=-1/${tau}=${nfmt(ans)}\\).`)
}

function makeControlsFamily24(){
  let a=ri(1,7),t=rand(.2,1.5),ans=Math.exp(-a*t);
  return qNum(C,'Exponential decay',`A normalized natural response is \\(y(t)=e^{-${a}t}\\). Find \\(y(${nfmt(t)})\\).`,ans,`Evaluate the exponential: \\(e^{-${a}(${nfmt(t)})}=${nfmt(ans)}\\).`)
}

function makeControlsFamily25(){
  let k=ri(2,11),tau=ri(1,5);
  return qNum(C,'Steady-state unit-step response',`For \\(G(s)=${k}/(${tau}s+1)\\), what is the steady-state output to a unit-step input?`,k,`The final-value theorem gives the DC gain, \\(G(0)=${k}\\).`)
}

function makeControlsFamily26(){
  let k=ri(2,8),tau=ri(1,5),t=rand(.3,2.5),ans=k*(1-Math.exp(-t/tau));
  return qNum(C,'First-order step response',`For a unit-step response \\(y(t)=${k}(1-e^{-t/${tau}})\\), find \\(y(${nfmt(t)})\\).`,ans,`Substitute time into the response formula: \\(${nfmt(k*(1-Math.exp(-t/tau)))}\\).`)
}

function makeControlsFamily27(){
  let wn=ri(5,15),z=rand(.15,.75),ans=wn*Math.sqrt(1-z*z);
  return qNum(C,'Damped natural frequency',`A second-order system has \\(\\omega_n=${wn}\\,\\mathrm{rad}/\\mathrm{s}\\) and \\(\\zeta=${nfmt(z)}\\). Find \\(\\omega_d\\).`,ans,`\\(\\omega_d=\\omega_n\\sqrt{1-\\zeta^2}=${wn}\\sqrt{1-${nfmt(z*z)}}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
}

function makeControlsFamily28(){
  let z=rand(.2,.8),wn=ri(3,12),ans=4/(z*wn);
  return qNum(C,'Settling time',`Estimate the 2% settling time for \\(\\zeta=${nfmt(z)}\\) and \\(\\omega_n=${wn}\\,\\mathrm{rad}/\\mathrm{s}\\) using \\(t_s\\approx4/(\\zeta\\omega_n)\\).`,ans,`Substitute the parameters into \\(4/(\\zeta\\omega_n)\\): \\(${nfmt(ans)}\\,\\mathrm{s}\\).`)
}

function makeControlsFamily29(){
  let z=rand(.2,.7),ans=100*Math.exp(-z*Math.PI/Math.sqrt(1-z*z));
  return qNum(C,'Percent overshoot',`For a standard underdamped system with \\(\\zeta=${nfmt(z)}\\), calculate percent overshoot using \\(100e^{-\\zeta\\pi/\\sqrt{1-\\zeta^2}}\\).`,ans,`Evaluate the supplied expression at \\(\\zeta=${nfmt(z)}\\): \\(${nfmt(ans)}\\%\\).`,'percent')
}

function makeControlsFamily30(){
  let k=ri(2,10),h=rand(.1,.7),ans=k/(1+k*h);
  return qNum(C,'Closed-loop gain',`A negative-feedback system has forward gain \\(K=${k}\\) and feedback \\(H=${nfmt(h)}\\). Find \\(K/(1+KH)\\).`,ans,`\\(K_{cl}=K/(1+KH)=${k}/(1+${k}\\cdot${nfmt(h)})=${nfmt(ans)}\\).`)
}

function makeControlsFamily31(){
  let k=ri(1,15),ans=k/(1+k);
  return qNum(C,'Unity-feedback gain',`A system has open-loop DC gain \\(K=${k}\\) and unity negative feedback. Find the closed-loop DC gain.`,ans,`\\(K_{cl}=K/(1+K)=${k}/${1+k}=${nfmt(ans)}\\).`)
}

function makeControlsFamily32(){
  let k=ri(2,10),tau=rand(.2,1.2),w=ri(1,10),ans=k/Math.sqrt(1+(w*tau)**2);
  return qNum(C,'Frequency-response magnitude',`For \\(G(s)=${k}/(${nfmt(tau)}s+1)\\), find \\(\\lvert G(j\\omega)\\rvert\\) at \\(\\omega=${w}\\,\\mathrm{rad}/\\mathrm{s}\\).`,ans,`\\(\\lvert G(j\\omega)\\rvert=K/\\sqrt{1+(\\omega\\tau)^2}=${nfmt(ans)}\\).`)
}

function makeControlsFamily33(){
  let tau=rand(.2,1.3),w=ri(1,9),ans=-Math.atan(w*tau)*180/Math.PI;
  return qNum(C,'Frequency-response phase',`For \\(G(s)=1/(${nfmt(tau)}s+1)\\), find the phase angle at \\(\\omega=${w}\\,\\mathrm{rad}/\\mathrm{s}\\) in degrees.`,ans,`\\(\\phi=-\\tan^{-1}(\\omega\\tau)=-\\tan^{-1}(${w}\\cdot${nfmt(tau)})=${nfmt(ans)}^\\circ\\).`,'degrees')
}

function makeControlsFamily34(){
  let tau=rand(.2,2.5),ans=1/tau;
  return qNum(C,'First-order bandwidth',`For a first-order low-pass system with \\(\\tau=${nfmt(tau)}\\,\\mathrm{s}\\), estimate its 3-dB bandwidth in rad/s using \\(\\omega_b=1/\\tau\\).`,ans,`\\(\\omega_b=1/${nfmt(tau)}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
}

function makeControlsFamily35(){
  let wn=ri(8,18),wd=ri(3,wn-2),ans=Math.sqrt(1-(wd/wn)**2);
  return qNum(C,'Damping ratio from frequencies',`A second-order system has \\(\\omega_n=${wn}\\) and \\(\\omega_d=${wd}\\). Find \\(\\zeta\\).`,ans,`\\(\\zeta=\\sqrt{1-(\\omega_d/\\omega_n)^2}=\\sqrt{1-(${wd}/${wn})^2}=${nfmt(ans)}\\).`)
}

function makeControlsFamily36(){
  let z=rand(.1,.6),ans=1/(2*z);
  return qNum(C,'Quality factor',`A second-order resonant system has damping ratio \\(\\zeta=${nfmt(z)}\\). Estimate \\(Q=1/(2\\zeta)\\).`,ans,`\\(Q=1/(2\\cdot${nfmt(z)})=${nfmt(ans)}\\).`)
}

function makeControlsFamily37(){
  let k=ri(20,150),m=ri(1,12),ans=Math.sqrt(k/m);
  return qNum(C,'Undamped natural frequency',`A mass-spring system has \\(k=${k}\\,\\mathrm{N}/\\mathrm{m}\\) and \\(m=${m}\\,\\mathrm{kg}\\). Find \\(\\omega_n=\\sqrt{k/m}\\).`,ans,`\\(\\omega_n=\\sqrt{${k}/${m}}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`)
}

function makeControlsFamily38(){
  let k=ri(1,15),ans=1/(1+k);
  return qNum(C,'Steady-state error',`For a unity-feedback type-0 system with position constant \\(K_p=${k}\\), find unit-step steady-state error \\(e_{ss}=1/(1+K_p)\\).`,ans,`\\(e_{ss}=1/(1+${k})=${nfmt(ans)}\\).`)
}

function makeControlsFamily39(){
  let k=ri(20,120),m=rand(.5,5),ans=2*Math.sqrt(k*m);
  return qNum(C,'Critical damping coefficient',`A mechanical system has spring constant \\(k=${k}\\,\\mathrm{N}/\\mathrm{m}\\) and mass \\(m=${nfmt(m)}\\,\\mathrm{kg}\\). Find \\(c_c=2\\sqrt{km}\\).`,ans,`\\(c_c=2\\sqrt{${k}\\cdot${nfmt(m)}}=${nfmt(ans)}\\,\\mathrm{N}\\cdot s/m\\).`)
}

function makeControlsFamily40(){
  let a=ri(1,6),k=ri(1,9),ans=-(a+k);
  return qNum(C,'Closed-loop pole',`For \\(G(s)=K/(s+a)\\) with \\(K=${k}\\), \\(a=${a}\\), under unity negative feedback, find the closed-loop pole.`,ans,`The characteristic equation is \\(s+a+K=0\\), so \\(s=-(${a}+${k})=${ans}\\).`)
}

function makeControlsScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
  const G0=ri(2,12),H=ri(1,7)/10,ans=G0/(1+G0*H);const q=qNum(C,`Field case: feedback gain ${variant}`,`${person} models a sensor using negative feedback. The forward gain is \\(G=${G0}\\) and feedback gain is \\(H=${nfmt(H)}\\). Find closed-loop gain.`,ans,`\\(T=G/(1+GH)=${G0}/(1+${G0}(${nfmt(H)}))=${nfmt(ans)}\\).`);return attachDiagram(q,'feedback','Reference input enters a summing junction, passes through G(s), produces output y, and feeds back through H(s) to the negative input.')
}


NUMERIC_GENERATOR_REGISTRY.controls = [numericEntry('controls',"DC gain of a first-order system · family 21 (randomized variant)",'controls-family-21',()=>makeControlsFamily21()),
    numericEntry('controls',"Time constant · family 22 (randomized variant)",'controls-family-22',()=>makeControlsFamily22()),
    numericEntry('controls',"Pole of a first-order system · family 23 (randomized variant)",'controls-family-23',()=>makeControlsFamily23()),
    numericEntry('controls',"Exponential decay rate · family 24 (randomized variant)",'controls-family-24',()=>makeControlsFamily24()),
    numericEntry('controls',"Steady-state response to a unit step · family 25 (randomized variant)",'controls-family-25',()=>makeControlsFamily25()),
    numericEntry('controls',"First-order step response · family 26 (randomized variant)",'controls-family-26',()=>makeControlsFamily26()),
    numericEntry('controls',"Damped natural frequency · family 27 (randomized variant)",'controls-family-27',()=>makeControlsFamily27()),
    numericEntry('controls',"Two-percent settling time · family 28 (randomized variant)",'controls-family-28',()=>makeControlsFamily28()),
    numericEntry('controls',"Percent overshoot · family 29 (randomized variant)",'controls-family-29',()=>makeControlsFamily29()),
    numericEntry('controls',"Closed-loop gain · family 30 (randomized variant)",'controls-family-30',()=>makeControlsFamily30()),
    numericEntry('controls',"Closed-loop gain with unity feedback · family 31 (randomized variant)",'controls-family-31',()=>makeControlsFamily31()),
    numericEntry('controls',"First-order frequency-response magnitude · family 32 (randomized variant)",'controls-family-32',()=>makeControlsFamily32()),
    numericEntry('controls',"First-order phase angle · family 33 (randomized variant)",'controls-family-33',()=>makeControlsFamily33()),
    numericEntry('controls',"First-order bandwidth · family 34 (randomized variant)",'controls-family-34',()=>makeControlsFamily34()),
    numericEntry('controls',"Damping ratio from frequencies · family 35 (randomized variant)",'controls-family-35',()=>makeControlsFamily35()),
    numericEntry('controls',"Quality factor · family 36 (randomized variant)",'controls-family-36',()=>makeControlsFamily36()),
    numericEntry('controls',"Undamped natural frequency · family 37 (randomized variant)",'controls-family-37',()=>makeControlsFamily37()),
    numericEntry('controls',"Steady-state error for type-0 system · family 38 (randomized variant)",'controls-family-38',()=>makeControlsFamily38()),
    numericEntry('controls',"Critical damping coefficient · family 39 (randomized variant)",'controls-family-39',()=>makeControlsFamily39()),
    numericEntry('controls',"Closed-loop pole · family 40 (randomized variant)",'controls-family-40',()=>makeControlsFamily40()),
    numericEntry('controls',"Closed-loop gain and forward gain · family 01 (randomized variant)","controls-family-01",()=>makeControlsExpansionFamily01("Closed-loop gain and forward gain · family 01 (randomized variant)")),
    numericEntry('controls',"Damped natural frequency and normalization · family 02 (randomized variant)","controls-family-02",()=>makeControlsExpansionFamily02("Damped natural frequency and normalization · family 02 (randomized variant)")),
    numericEntry('controls',"Settling time and damping ratio · family 03 (randomized variant)","controls-family-03",()=>makeControlsExpansionFamily03("Settling time and damping ratio · family 03 (randomized variant)")),
    numericEntry('controls',"Overshoot and normalized damped frequency · family 04 (randomized variant)","controls-family-04",()=>makeControlsExpansionFamily04("Overshoot and normalized damped frequency · family 04 (randomized variant)")),
    numericEntry('controls',"First-order step and error response · family 05 (randomized variant)","controls-family-05",()=>makeControlsExpansionFamily05("First-order step and error response · family 05 (randomized variant)")),
    numericEntry('controls',"Parallel and cascade gain combination · family 06 (randomized variant)","controls-family-06",()=>makeControlsExpansionFamily06("Parallel and cascade gain combination · family 06 (randomized variant)")),
    numericEntry('controls',"Feedback gain calculation · family 07 (randomized variant)","controls-family-07",()=>makeControlsExpansionFamily07("Feedback gain calculation · family 07 (randomized variant)")),
    numericEntry('controls',"Oscillator period and peak time · family 08 (randomized variant)","controls-family-08",()=>makeControlsExpansionFamily08("Oscillator period and peak time · family 08 (randomized variant)")),
    numericEntry('controls',"RC time constant and capacitance · family 09 (randomized variant)","controls-family-09",()=>makeControlsExpansionFamily09("RC time constant and capacitance · family 09 (randomized variant)")),
    numericEntry('controls',"First-order frequency response · family 10 (randomized variant)","controls-family-10",()=>makeControlsExpansionFamily10("First-order frequency response · family 10 (randomized variant)")),
    numericEntry('controls',"Second-order settling time and overshoot · family 11 (randomized variant)","controls-family-11",()=>makeControlsExpansionFamily11("Second-order settling time and overshoot · family 11 (randomized variant)")),
    numericEntry('controls',"Two-pole polynomial coefficients · family 12 (randomized variant)","controls-family-12",()=>makeControlsExpansionFamily12("Two-pole polynomial coefficients · family 12 (randomized variant)")),
    numericEntry('controls',"Percent overshoot and damping ratio · family 13 (randomized variant)","controls-family-13",()=>makeControlsExpansionFamily13("Percent overshoot and damping ratio · family 13 (randomized variant)")),
    numericEntry('controls',"Steady-state error constants · family 14 (randomized variant)","controls-family-14",()=>makeControlsExpansionFamily14("Steady-state error constants · family 14 (randomized variant)")),
    numericEntry('controls',"Pole gain and time-scale calculation · family 15 (randomized variant)","controls-family-15",()=>makeControlsExpansionFamily15("Pole gain and time-scale calculation · family 15 (randomized variant)")),
    numericEntry('controls',"Loop gain and feedback · family 16 (randomized variant)","controls-family-16",()=>makeControlsExpansionFamily16("Loop gain and feedback · family 16 (randomized variant)")),
    numericEntry('controls',"RC time constant and cutoff frequency · family 17 (randomized variant)","controls-family-17",()=>makeControlsExpansionFamily17("RC time constant and cutoff frequency · family 17 (randomized variant)")),
    numericEntry('controls',"First-order exponential response and area · family 18 (randomized variant)","controls-family-18",()=>makeControlsExpansionFamily18("First-order exponential response and area · family 18 (randomized variant)")),
    numericEntry('controls',"Controller gain conversion · family 19 (randomized variant)","controls-family-19",()=>makeControlsExpansionFamily19("Controller gain conversion · family 19 (randomized variant)")),
    numericEntry('controls',"Closed-loop gain and feedback contribution · family 20 (randomized variant)","controls-family-20",()=>makeControlsExpansionFamily20("Closed-loop gain and feedback contribution · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(C,'Field scenario · Negative-feedback level sensor','scenario-controls-water-level-feedback',()=>makeControlsScenario(0));
appendNumericRecipe(C,'Applied · Closed-loop dosing-system output','scenario-controls-dosing-loop-output',()=>{
  const G0=ri(2,10),H=pick([.1,.2,.25,.4]),r0=ri(2,12),gain=G0/(1+G0*H),ans=gain*r0;
  const q=qNum(C,'Applied · Closed-loop dosing-system output',`A dosing pump controller is approximated by static forward gain \\(G(0)=${G0}\\), feedback gain \\(H(0)=${H}\\), and step reference \\(r_0=${r0}\\,\\mathrm{V}\\). Find the steady-state output \\(y_\\infty\\).`,ans,`For negative feedback, \\(T(0)=G/(1+GH)=${G0}/(1+${G0}(${H}))=${nfmt(gain)}\\). Thus \\(y_\\infty=T(0)r_0=${nfmt(gain)}(${r0})=${nfmt(ans)}\\,\\mathrm{V}\\).`);
  return attachDiagram(q,'feedback','A reference enters a summing junction, the forward controller/plant block G(s) drives the output, and H(s) feeds the output back to the negative input.');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('controls','Additional · Closed-loop output for a proportional controller','controls-topup-01',()=>{
  const Kp=ri(1,12),K=ri(1,8),r=ri(1,5),ans=Kp*K/(1+Kp*K)*r;
  return qNum(C,'Closed-loop output for a proportional controller',`A unity-feedback plant has static gain \\(K=${K}\\) and proportional gain \\(K_p=${Kp}\\). For a reference \\(r=${r}\\), find the steady-state output.`,ans,`The closed-loop gain is \\(K_pK/(1+K_pK)=${Kp}(${K})/[1+${Kp}(${K})]\\). Multiplying by the reference gives \\(${nfmt(ans)}\\).`);
});
appendNumericRecipe('controls','Additional · Damping ratio from percent overshoot','controls-topup-02',()=>{
  const os=pick([5,10,15,20,25,30]),ln=Math.log(os/100),ans=-ln/Math.sqrt(Math.PI*Math.PI+ln*ln);
  return qNum(C,'Damping ratio from percent overshoot',`A standard underdamped second-order response has percent overshoot \\(M_p=${os}\\%\\). Estimate its damping ratio from \\(\\zeta=-\\ln(M_p/100)/\\sqrt{\\pi^2+\\ln^2(M_p/100)}\\).`,ans,`With \\(r=${os/100}\\), \\(\\zeta=-\\ln r/\\sqrt{\\pi^2+\\ln^2r}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('controls','Additional · Peak time from damped natural frequency','controls-topup-03',()=>{
  const zeta=pick([.2,.3,.4,.5,.6]),wn=ri(4,14),wd=wn*Math.sqrt(1-zeta*zeta),ans=Math.PI/wd;
  return qNum(C,'Peak time from damped natural frequency',`A second-order system has \\(\\zeta=${nfmt(zeta)}\\) and \\(\\omega_n=${wn}\\,\\mathrm{rad}/\\mathrm{s}\\). Estimate its first peak time.`,ans,`\\(\\omega_d=\\omega_n\\sqrt{1-\\zeta^2}=${nfmt(wd)}\\). Thus \\(t_p=\\pi/\\omega_d=${nfmt(ans)}\\,\\mathrm{s}\\).`);
});
appendNumericRecipe('controls','Additional · Ramp steady-state error from velocity constant','controls-topup-04',()=>{
  const Kv=rand(1.5,12),slope=ri(1,5),ans=slope/Kv;
  return qNum(C,'Ramp steady-state error from velocity constant',`A type-1 unity-feedback system has velocity constant \\(K_v=${nfmt(Kv)}\\). For a ramp input of slope \\(${slope}\\), estimate steady-state error \\(e_{ss}=slope/K_v\\).`,ans,`\\(e_{ss}=${slope}/${nfmt(Kv)}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('controls','Additional · First-order phase lag at crossover','controls-topup-05',()=>{
  const pole=ri(2,10),w=ri(1,12),ans=-Math.atan(w/pole)*180/Math.PI;
  return qNum(C,'First-order phase lag at crossover',`For \\(G(s)=1/(s+${pole})\\), find phase angle in degrees at \\(\\omega=${w}\\,\\mathrm{rad}/\\mathrm{s}\\).`,ans,`The phase is \\(-\\tan^{-1}(\\omega/a)=-\\tan^{-1}(${w}/${pole})=${nfmt(ans)}^\\circ\\).`,'degrees');
});
appendNumericRecipe('controls','Additional · Damping coefficient for a mass-spring system','controls-topup-06',()=>{
  const m=ri(1,8),k=ri(20,150),zeta=pick([.2,.3,.4,.5,.6,.7]),ans=2*zeta*Math.sqrt(k*m);
  return qNum(C,'Damping coefficient for a mass-spring system',`A mass-spring-damper has mass \\(m=${m}\\,\\mathrm{kg}\\), stiffness \\(k=${k}\\,\\mathrm{N}/\\mathrm{m}\\), and damping ratio \\(\\zeta=${nfmt(zeta)}\\). Find damping coefficient \\(c=2\\zeta\\sqrt{km}\\).`,ans,`\\(c=2(${nfmt(zeta)})\\sqrt{${k}(${m})}=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{s}/m\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeControlsScenarioSetup(){const K=ri(4,9),tau=.5,H=.5;return {category:NAMESPACE_CONTROLS,title:'Variable-speed pump feedback bench test',prompt:String.raw`A variable-speed pump uses the first-order plant \(G(s)=K/(\tau s+1)\) with proportional sensor feedback \(H\). The identified forward gain is \(K=${K}\), the time constant is \(\tau=${tau}\,\mathrm{s}\), and the feedback gain is \(H=${H}\). Use the dynamic diagnostic point \(s_d=2\,\mathrm{s^{-1}}\) and the negative-feedback convention throughout.`,transferData:{K: K,tau: tau,H: H,s_d: 2},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 125"><rect x="18" y="28" width="94" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="65" y="53" text-anchor="middle" fill="currentColor" font-size="13">G(s)</text><rect x="235" y="28" width="96" height="42" rx="6" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="283" y="53" text-anchor="middle" fill="currentColor" font-size="13">output</text><path d="M112 49 H235 M227 43 L235 49 L227 55 M283 70 V99 H66 V70 M58 78 L66 70 L74 78" stroke="currentColor" stroke-width="1.5" fill="none"/><text x="166" y="92" fill="currentColor" font-size="12">H</text></svg>`,alt:'A closed-loop block diagram shows plant G(s), the pump output, and negative feedback through gain H.'}],custom:false};}
function makeControlsScenarioA(dto={}){const d=dto?.['controls-pump-root-v18']||{};const K=Number(d.K),H=Number(d.H),ans=K/(1+K*H);const q=qNum(C,'Closed-loop DC gain',String.raw`Determine the closed-loop DC gain \(T(0)\) of the pump system.`,ans,String.raw`\(T(0)=\frac{G(0)}{1+G(0)H}=\frac{K}{1+KH}=\frac{${K}}{1+${K}(${H})}=${nfmt(ans)}\).`);q.transferData={T0: ans};return q;}
function makeControlsScenarioB(dto={}){const d=dto?.['controls-pump-root-v18']||{};const K=Number(d.K),tau=Number(d.tau),sd=Number(d.s_d),ans=K/(tau*sd+1);const q=qNum(C,'Forward-path gain at the diagnostic point',String.raw`Evaluate the plant gain \(G(s_d)\) at the diagnostic point.`,ans,String.raw`\(G(s_d)=\frac{K}{\tau s_d+1}=\frac{${K}}{${tau}(${sd})+1}=${nfmt(ans)}\).`);q.transferData={G_sd: ans};return q;}

function makeControlsScenarioBA(dto={}){const dt=dto||{};const G=Number(dt['controls-pump-b-v18']?.G_sd),H=Number(dt['controls-pump-root-v18']?.H),ans=G/(1+G*H);const q=qNum(C,'Closed-loop response at the diagnostic point',String.raw`Find the closed-loop transfer value \(T(s_d)\) using the recorded plant gain.`,ans,String.raw`\(T(s_d)=\frac{G(s_d)}{1+G(s_d)H}=\frac{${nfmt(G)}}{1+${nfmt(G)}(${H})}=${nfmt(ans)}\).`);q.transferData={T_sd: ans};return q;}

function makeControlsScenarioBB(dto={}){const dt=dto||{};const G=Number(dt['controls-pump-b-v18']?.G_sd),H=Number(dt['controls-pump-root-v18']?.H),ans=1/(1+G*H);const q=qNum(C,'Sensitivity at the diagnostic point',String.raw`Using the recorded plant gain \(G(s_d)\) and the feedback gain \(H\), calculate the closed-loop sensitivity \(S(s_d)=1/[1+G(s_d)H]\).`,ans,String.raw`\(S(s_d)=\frac{1}{1+G(s_d)H}=\frac{1}{1+${nfmt(G)}(${H})}=${nfmt(ans)}\).`);q.transferData={S_sd: ans};return q;}

function registerControlsScenarioTree(){
  const rootKey='controls-pump-root-v18',aKey='controls-pump-a-v18',bKey='controls-pump-b-v18',baKey='controls-pump-ba-v18',bbKey='controls-pump-bb-v18';
  setupRecipe(NAMESPACE_CONTROLS,'Control systems · Pump feedback tree',rootKey,makeControlsScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_CONTROLS,'Controls · Calculation A',aKey,makeControlsScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_CONTROLS,'Controls · Calculation B',bKey,makeControlsScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_CONTROLS,'Controls · Follow-up A',baKey,makeControlsScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_CONTROLS,'Controls · Follow-up B',bbKey,makeControlsScenarioBB,3,{parentRecipeKey:bKey});
}
registerControlsScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const CONTROLS_CONCEPT_CARDS = [
    [
      "Transfer function",
      "For zero initial conditions, the ratio of output to input in the transform domain."
    ],
    [
      "Open-loop system",
      "A system whose control action does not use a measured output fed back to the input."
    ],
    [
      "Closed-loop system",
      "A system that uses feedback from its output to determine control action."
    ],
    [
      "Negative feedback",
      "Feedback that subtracts a scaled measured output from the reference signal."
    ],
    [
      "Pole",
      "A root of the transfer-function denominator after common factors are cancelled."
    ],
    [
      "Zero",
      "A root of the transfer-function numerator after common factors are cancelled."
    ],
    [
      "DC gain",
      "The steady gain obtained by evaluating a stable transfer function at zero frequency or s equal to zero."
    ],
    [
      "Time constant",
      "For a first-order response, the time scale at which an exponential transient falls to 1/e of its initial value."
    ],
    [
      "First-order system",
      "A system whose transfer-function denominator is first degree in s."
    ],
    [
      "Second-order system",
      "A system whose characteristic denominator is second degree in s."
    ],
    [
      "Undamped natural frequency",
      "The oscillation frequency parameter of a standard second-order system before damping effects."
    ],
    [
      "Damping ratio",
      "A dimensionless measure of damping relative to critical damping in a second-order model."
    ],
    [
      "Underdamped response",
      "A second-order response with damping ratio between zero and one that oscillates while decaying."
    ],
    [
      "Critically damped response",
      "A second-order response with damping ratio equal to one, at the boundary between oscillatory and nonoscillatory cases."
    ],
    [
      "Overdamped response",
      "A second-order response with damping ratio greater than one and two distinct real poles in the standard model."
    ],
    [
      "Two-percent settling time approximation",
      "For an underdamped standard second-order system, a common approximation is four divided by damping ratio times natural frequency."
    ],
    [
      "Percent overshoot",
      "The peak amount above the final value, expressed as a percentage of the response change."
    ],
    [
      "Steady-state error",
      "The difference between reference and output after transients have died out, when a steady state exists."
    ],
    [
      "Root locus",
      "A plot showing how closed-loop poles move as a scalar gain varies."
    ],
    [
      "BIBO stability",
      "The property that every bounded input results in a bounded output."
    ],
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
      "Percent overshoot — extended concept",
      "The peak response excursion above the final value expressed as a percentage of the response change."
    ],
    [
      "Damping ratio — extended concept",
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
      "Root locus — extended concept",
      "A plot of how closed-loop poles move as a scalar feedback gain varies."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_CONTROLS, CONTROLS_CONCEPT_CARDS);
