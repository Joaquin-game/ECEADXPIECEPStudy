/* electronics: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_ELECTRONICS = 'electronics';
const EC = NAMESPACE_ELECTRONICS;
function makeElectronicsExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const V0=ri(5,24),R=ri(2,18),I0=roundSigNumber(V0/R,3),ans=v?V0/R:I0*R;return qNum(EC,title,v?`A resistor \\(${R}\\,\\Omega\\) is connected across \\(${V0}\\,\\mathrm{V}\\). Find current \\(I\\) in amperes (A).`:`A resistor has \\(R=${R}\\,\\Omega\\) and carries current \\(I=${nfmt(I0)}\\,\\mathrm{A}\\). Find the voltage across it.`,ans,v?`\\(I=V/R=${nfmt(ans)}\\,\\mathrm{A}\\).`:`\\(V=IR=${ans}\\,\\mathrm{V}\\).`)
  }
}
function makeElectronicsExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const Vin=ri(5,24),R1=ri(1,8),R2=ri(2,10),ans=v?Vin/(R1+R2):Vin*R2/(R1+R2);return qNum(EC,title,v?`A divider has \\(R_1=${R1}\\,k\\Omega\\), \\(R_2=${R2}\\,k\\Omega\\), input \\(${Vin}\\,\\mathrm{V}\\). Find current in mA.`:`An unloaded divider has input voltage \\(V_{in}=${Vin}\\,\\mathrm{V}\\), resistor \\(R_1=${R1}\\,k\\Omega\\), and resistor \\(R_2=${R2}\\,k\\Omega\\). Find output voltage across \\(R_2\\).`,ans,v?`\\(I=V_{in}/(R_1+R_2)=${nfmt(ans)}\\,\\mathrm{mA}\\).`:`\\(V_o=V_{in}R_2/(R_1+R_2)=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}
function makeElectronicsExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(2,15),r2=ri(2,15),ans=v?r1*r2/(r1+r2):r1+r2;return qNum(EC,title,v?`Find equivalent resistance of \\(${r1}\\,\\Omega\\) and \\(${r2}\\,\\Omega\\) in parallel.`:`Find equivalent resistance of \\(${r1}\\,\\Omega\\) and \\(${r2}\\,\\Omega\\) in series.`,ans,v?`\\(R_p=R_1R_2/(R_1+R_2)=${nfmt(ans)}\\,\\Omega\\).`:`\\(R_s=R_1+R_2=${ans}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(2,20),r2=ri(2,20),r3=ri(2,20),ans=v?1/(1/r1+1/r2+1/r3):r1+r2+r3;return qNum(EC,title,v?`Three resistors \\(${r1},${r2},${r3}\\,\\Omega\\) are in parallel. Find equivalent resistance.`:`Three resistors \\(${r1},${r2},${r3}\\,\\Omega\\) are in series. Find equivalent resistance.`,ans,v?`\\(R^{-1}=1/R_1+1/R_2+1/R_3\\), so \\(R=${nfmt(ans)}\\,\\Omega\\).`:`\\(R=R_1+R_2+R_3=${ans}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const R=ri(1,10)*1000,C0=ri(1,10)*1e-6,tau=R*C0,ans=v?1/(2*Math.PI*tau):tau;return qNum(EC,title,v?`An RC low-pass filter has \\(R=${R}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,\\mathrm{F}\\). Find cutoff frequency.`:`An RC circuit has resistance \\(R=${R}\\,\\Omega\\) and capacitance \\(C=${nfmt(C0)}\\,\\mathrm{F}\\). Find its time constant.`,ans,v?`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,\\mathrm{Hz}\\).`:`\\(\\tau=RC=${nfmt(ans)}\\,\\mathrm{s}\\).`)
  }
}
function makeElectronicsExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(1,10)*.01,R=ri(2,18),freq=ri(1,10),ans=v?L0/R:2*Math.PI*freq*L0;return qNum(EC,title,v?`An RL circuit has \\(L=${nfmt(L0)}\\,H\\), \\(R=${R}\\,\\Omega\\). Find time constant.`:`An inductor \\(L=${nfmt(L0)}\\,H\\) is driven at \\(f=${freq}\\,\\mathrm{Hz}\\). Find inductive reactance.`,ans,v?`\\(\\tau=L/R=${nfmt(ans)}\\,\\mathrm{s}\\).`:`\\(X_L=2\\pi fL=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily07(title){
  const v=ri(0,1)===1;
  const Vs=ri(5,24),Vf=pick([1.8,2,2.2,3.2]),R=ri(220,1000);
  const currentMilliamp=(Vs-Vf)/R*1000;
  const answer=v?currentMilliamp:Vs-Vf;
  const prompt=v
    ? `An LED has forward voltage drop \\(${Vf}\\,\\mathrm{V}\\) and is powered by a \\(${Vs}\\,\\mathrm{V}\\) supply through a \\(${R}\\,\\Omega\\) resistor. Find LED current in milliamperes.`
    : `An LED has forward voltage drop \\(V_f=${Vf}\\,\\mathrm{V}\\) and is powered by a supply \\(V_s=${Vs}\\,\\mathrm{V}\\). Find the voltage across the series resistor.`;
  const explanation=v
    ? `Ohm's law gives \\(I=(V_s-V_f)/R=(${Vs}-${Vf})/${R}=${nfmt(answer)}\\,\\mathrm{mA}\\).`
    : `The resistor voltage is \\(V_R=V_s-V_f=${Vs}-${Vf}=${nfmt(answer)}\\,\\mathrm{V}\\).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'mA':'V'});
}
function makeElectronicsExpansionFamily08(title){
  const v=ri(0,1)===1;
  const feedback=ri(10,50),ground=ri(2,10),input=rand(.1,1.5),gain=1+feedback/ground,answer=v?gain*input:gain;
  const prompt=v?`An ideal non-inverting op-amp has \\(R_f=${feedback}\\,\\mathrm{k}\\Omega\\), \\(R_g=${ground}\\,\\mathrm{k}\\Omega\\), and input \\(V_i=${nfmt(input)}\\,\\mathrm{V}\\). Find output voltage.`:`An ideal non-inverting op-amp has feedback resistor \\(R_f=${feedback}\\,\\mathrm{k}\\Omega\\) and ground resistor \\(R_g=${ground}\\,\\mathrm{k}\\Omega\\). Find the closed-loop voltage gain.`;
  const explanation=v?`\\(V_o=(1+R_f/R_g)V_i=${nfmt(answer)}\\,\\mathrm{V}\\).`:`\\(A_v=1+R_f/R_g=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'V':''});
}
function makeElectronicsExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(2,100)*1e-6,V0=ri(5,24),ans=v?C0*V0:.5*C0*V0*V0;return qNum(EC,title,v?`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\) is charged to \\(${V0}\\,\\mathrm{V}\\). Find charge.`:`A capacitor of \\(C=${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\) is charged to \\(V=${V0}\\,\\mathrm{V}\\). Find stored energy.`,ans,v?`\\(Q=CV=${nfmt(ans)}\\,\\mathrm{C}\\).`:`\\(U=CV^2/2=${nfmt(ans)}\\,\\mathrm{J}\\).`)
  }
}
function makeElectronicsExpansionFamily10(title){
  const v=ri(0,1)===1;
  const inductance=ri(1,30)*1e-3,current=ri(1,8);
  const answer=v?0.5*inductance*current*current:inductance*current;
  const prompt=v
    ? `An inductor has inductance \\(L=${nfmt(inductance*1000)}\\,\\mathrm{mH}\\) and carries current \\(I=${current}\\,\\mathrm{A}\\). Find stored magnetic energy.`
    : `An inductor has inductance \\(L=${nfmt(inductance*1000)}\\,\\mathrm{mH}\\) and carries current \\(I=${current}\\,\\mathrm{A}\\). Find its flux linkage \\(LI\\).`;
  const explanation=v
    ? `Stored energy is \\(U=LI^2/2=${nfmt(answer)}\\,\\mathrm{J}\\).`
    : `Flux linkage is \\(LI=${nfmt(answer)}\\,\\mathrm{Wb}\\cdot\\mathrm{turn}\\).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'J':'Wb*turn'});
}
function makeElectronicsExpansionFamily11(title){
  const v=ri(0,1)===1;
  const beta=ri(50,250),baseCurrent=rand(.02,.25),collectorGiven=roundSigNumber(beta*baseCurrent,3),answer=v?beta*baseCurrent:collectorGiven/baseCurrent;
  const prompt=v?`A BJT has current gain \\(\\beta=${beta}\\) and base current \\(I_B=${nfmt(baseCurrent)}\\,\\mathrm{mA}\\). Find collector current in milliamperes.`:`A BJT has collector current \\(I_C=${nfmt(collectorGiven)}\\,\\mathrm{mA}\\) and base current \\(I_B=${nfmt(baseCurrent)}\\,\\mathrm{mA}\\). Find current gain \\(\\beta=I_C/I_B\\).`;
  const explanation=v?`\\(I_C=\\beta I_B=${nfmt(answer)}\\,\\mathrm{mA}\\).`:`\\(\\beta=I_C/I_B=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'mA':''});
}
function makeElectronicsExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const Vs=ri(5,24),Vd=pick([.65,.7,.75]),R=ri(220,1200),ans=v?(Vs-Vd)/R*1000:Vs-Vd;return qNum(EC,title,v?`A silicon diode with drop \\(${Vd}\\,\\mathrm{V}\\) is fed through \\(${R}\\,\\Omega\\) from \\(${Vs}\\,\\mathrm{V}\\). Find current in mA.`:`A silicon diode has forward drop \\(V_D=${Vd}\\,\\mathrm{V}\\) and is connected through resistor \\(R=${R}\\,\\Omega\\) to supply \\(V_s=${Vs}\\,\\mathrm{V}\\). Find resistor voltage.`,ans,v?`\\(I=(V_s-V_D)/R=${nfmt(ans)}\\,\\mathrm{mA}\\).`:`\\(V_R=V_s-V_D=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}
function makeElectronicsExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(1,20)*1e-3,C0=ri(1,20)*1e-6,ans=v?1/Math.sqrt(L0*C0):1/(2*Math.PI*Math.sqrt(L0*C0));return qNum(EC,title,v?`An ideal LC tank has \\(L=${nfmt(L0)}\\,H\\), \\(C=${nfmt(C0)}\\,\\mathrm{F}\\). Find resonant angular frequency.`:`An ideal LC tank has inductance \\(L=${nfmt(L0*1000)}\\,\\mathrm{m}H\\) and capacitance \\(C=${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\). Find resonant frequency in hertz.`,ans,v?`\\(\\omega_0=1/\\sqrt{LC}=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(f_0=1/(2\\pi\\sqrt{LC})=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeElectronicsExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(1,50)*1e-6,f=ri(100,5000),ans=v?1/(2*Math.PI*f*C0):2*Math.PI*f*C0;return qNum(EC,title,v?`A capacitor \\(${nfmt(C0)}\\,\\mathrm{F}\\) operates at \\(${f}\\,\\mathrm{Hz}\\). Find capacitive reactance.`:`A capacitor of \\(C=${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\) operates at frequency \\(f=${f}\\,\\mathrm{Hz}\\). Find susceptance magnitude.`,ans,v?`\\(X_C=1/(2\\pi fC)=${nfmt(ans)}\\,\\Omega\\).`:`\\(|B_C|=2\\pi fC=${nfmt(ans)}\\,S\\).`)
  }
}
function makeElectronicsExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const R=ri(2,30),X=ri(2,40),ans=v?Math.atan(X/R):Math.hypot(R,X);return qNum(EC,title,v?`A series RL circuit has \\(R=${R}\\,\\Omega\\), \\(X_L=${X}\\,\\Omega\\). Find impedance phase angle in radians.`:`A series RL circuit has resistance \\(R=${R}\\,\\Omega\\) and inductive reactance \\(X_L=${X}\\,\\Omega\\). Find impedance magnitude.`,ans,v?`\\(\\phi=\\tan^{-1}(X_L/R)=${nfmt(ans)}\\,\\mathrm{rad}\\).`:`\\(|Z|=\\sqrt{R^2+X_L^2}=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const R=ri(5,50),X=ri(3,40),ans=v?R/Math.hypot(R,X):Math.atan(X/R);return qNum(EC,title,v?`A series RL circuit has \\(R=${R}\\,\\Omega\\), \\(X_L=${X}\\,\\Omega\\). Find power factor.`:`A series RL circuit has resistance \\(R=${R}\\,\\Omega\\) and inductive reactance \\(X_L=${X}\\,\\Omega\\). Find phase angle in radians.`,ans,v?`\\(PF=R/|Z|=${nfmt(ans)}\\).`:`\\(\\phi=\\tan^{-1}(X_L/R)=${nfmt(ans)}\\,\\mathrm{rad}\\).`)
  }
}
function makeElectronicsExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const Vm=ri(5,24),ans=v?Vm/Math.PI:Vm/Math.sqrt(2);return qNum(EC,title,v?`An ideal half-wave rectifier has sinusoidal peak input \\(${Vm}\\,\\mathrm{V}\\). Find average output voltage.`:`Find RMS voltage of a sinusoid with peak \\(${Vm}\\,\\mathrm{V}\\).`,ans,v?`\\(V_{avg}=V_m/\\pi=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(V_{rms}=V_m/\\sqrt2=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}
function makeElectronicsExpansionFamily18(title){
  const v=ri(0,1)===1;
  const voltage=ri(5,24),current=ri(1,8),powerFactor=pick([.6,.7,.8,.9]);
  const answer=v?voltage*current*powerFactor:voltage*current;
  const prompt=v
    ? `An AC load has RMS voltage \\(V=${voltage}\\,\\mathrm{V}\\), RMS current \\(I=${current}\\,\\mathrm{A}\\), and power factor \\(PF=${powerFactor}\\). Find real power.`
    : `An AC load has RMS voltage \\(V=${voltage}\\,\\mathrm{V}\\), RMS current \\(I=${current}\\,\\mathrm{A}\\), and power factor \\(PF=${powerFactor}\\). Find apparent power.`;
  const explanation=v
    ? `Real power is \\(P=VI(PF)=${nfmt(answer)}\\,\\mathrm{W}\\).`
    : `Apparent power is \\(S=VI=${nfmt(answer)}\\,\\mathrm{V}\\cdot\\mathrm{A}\\).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'W':'V*A'});
}
function makeElectronicsExpansionFamily19(title){
  const v=ri(0,1)===1;
  const gain=pick([2,4,5,10]),answer=v?20*Math.log10(gain):gain;
  const prompt=v?`An amplifier has linear voltage-gain magnitude \\(A_v=${gain}\\). Find its gain in decibels.`:`An amplifier has linear voltage-gain magnitude \\(A_v=${gain}\\). Find the linear gain magnitude.`;
  const explanation=v?`\\(G_{dB}=20\\log_{10}(A_v)=${nfmt(answer)}\\,\\mathrm{dB}\\).`:`The linear voltage gain is \\(A_v=${nfmt(answer)}\\) (dimensionless).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:v?'dB':''});
}
function makeElectronicsExpansionFamily20(title){
  const v=ri(0,1)===1;
  const supplyVoltage=ri(5,24),baseResistance=ri(1,8)*1000,beta=ri(50,200),baseEmitterDrop=.7;
  const baseCurrentMicroamp=(supplyVoltage-baseEmitterDrop)/baseResistance*1e6;
  const answer=v?baseCurrentMicroamp:baseCurrentMicroamp*beta;
  const circuitGiven=`A BJT base circuit uses supply \\(V=${supplyVoltage}\\,\\mathrm{V}\\), base resistor \\(R_B=${baseResistance/1000}\\,\\mathrm{k}\\Omega\\), and base-emitter drop \\(V_{BE}=0.7\\,\\mathrm{V}\\).`;
  const prompt=v
    ? `${circuitGiven} Find base current in microamperes.`
    : `${circuitGiven} The transistor has current gain \\(\\beta=${beta}\\) and is in its forward-active region. Find collector current in microamperes.`;
  const explanation=v
    ? `\\(I_B=(V-V_{BE})/R_B=${nfmt(answer)}\\,\\mu\\mathrm{A}\\).`
    : `First, \\(I_B=(V-V_{BE})/R_B=${nfmt(baseCurrentMicroamp)}\\,\\mu\\mathrm{A}\\). Then \\(I_C=\\beta I_B=${nfmt(answer)}\\,\\mu\\mathrm{A}\\).`;
  return qNum(EC,title,prompt,answer,explanation,'number',{quantUnit:'µA'});
}
function makeElectronicsExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const R=ri(1,10)*1000,C0=ri(1,8)*1e-6,f=ri(50,1500),ans=v?1/Math.sqrt(1+(2*Math.PI*f*R*C0)**2):1/(2*Math.PI*R*C0);return qNum(EC,title,v?`An RC low-pass has \\(R=${R}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,\\mathrm{F}\\), and frequency \\(${f}\\,\\mathrm{Hz}\\). Find normalized magnitude \\(|H(j\\omega)|\\).`:`An RC low-pass filter has resistance \\(R=${R/1000}\\,k\\Omega\\) and capacitance \\(C=${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\). Find its cutoff frequency.`,ans,v?`\\(|H|=1/\\sqrt{1+(2\\pi fRC)^2}=${nfmt(ans)}\\).`:`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeElectronicsExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const R1=ri(2,10),R2=ri(2,10),V1=ri(1,5),V2=ri(1,5),ans=v?-(V1+V2):-(R2/R1);return qNum(EC,title,v?`An ideal inverting summing amplifier has equal input resistors and inputs \\(${V1}\\,\\mathrm{V}\\), \\(${V2}\\,\\mathrm{V}\\). Find output voltage.`:`An inverting amplifier has \\(R_f=${R2}\\,k\\Omega\\), \\(R_{in}=${R1}\\,k\\Omega\\). Find voltage gain.`,ans,v?`\\(V_o=-(V_1+V_2)=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(A_v=-R_f/R_{in}=${nfmt(ans)}\\).`)
  }
}
function makeElectronicsExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const Vin=ri(5,24),R1=ri(1,8),R2=ri(2,10),ans=v?Vin*R2/(R1+R2):Vin/(R1+R2);return qNum(EC,title,v?`An unloaded divider has \\(V_{in}=${Vin}\\,\\mathrm{V}\\), \\(R_1=${R1}\\,k\\Omega\\), \\(R_2=${R2}\\,k\\Omega\\). Find output voltage.`:`An unloaded divider has input voltage \\(V_{in}=${Vin}\\,\\mathrm{V}\\), \\(R_1=${R1}\\,k\\Omega\\), and \\(R_2=${R2}\\,k\\Omega\\). Find input current in mA.`,ans,v?`\\(V_o=V_{in}R_2/(R_1+R_2)=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(I=V_{in}/(R_1+R_2)=${nfmt(ans)}\\,\\mathrm{mA}\\).`)
  }
}
function makeElectronicsExpansionFamily24(title){
  const v=ri(0,1)===1;
  {
      const R=ri(2,20),C0=ri(2,80)*1e-6,f=ri(100,2000),ans=v?2*Math.PI*f*R*C0:1/(2*Math.PI*R*C0);return qNum(EC,title,v?`An RC network has \\(R=${R}\\,k\\Omega\\), \\(C=${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\), at \\(f=${f}\\,\\mathrm{Hz}\\). Find dimensionless \\(\\omega RC\\) using resistance in kΩ and capacitance in μF.`:`For a single-pole RC circuit with \\(R=${R*1000}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,\\mathrm{F}\\), find cutoff frequency.`,ans,v?`Convert to SI: \\(\\omega RC=2\\pi f(${R*1000})(${nfmt(C0)})=${nfmt(ans)}\\).`:`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeElectronicsExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const Vm=ri(5,36),ans=v?Vm/Math.sqrt(2):Vm/Math.PI;return qNum(EC,title,v?`A sinusoidal source has peak voltage \\(${Vm}\\,\\mathrm{V}\\). Find RMS voltage.`:`An ideal half-wave rectifier has input peak \\(${Vm}\\,\\mathrm{V}\\). Find average output voltage.`,ans,v?`\\(V_{rms}=V_m/\\sqrt2=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(V_{avg}=V_m/\\pi=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */


/* Individual family variant implementations; no indexed dispatch remains. */
function makeElectronicsFamily26VariantA(title){
  const variant=1;
  {
    const V0=ri(5,24),R=ri(1,12),ans=V0/R;
    return qNum(EC,title,`A resistor \\(R=${R}\\,\\Omega\\) is connected across \\(V=${V0}\\,\\mathrm{V}\\). Find current in amperes.`,ans,`Ohm's law gives \\(I=V/R=${V0}/${R}=${nfmt(ans)}\\,\\mathrm{A}\\).`)
  }
}
function makeElectronicsFamily27VariantA(title){
  const variant=1;
  {
    const Vin=ri(5,24),R1=ri(1,10),R2=ri(1,10),ans=Vin*R2/(R1+R2);
    return attachDiagram(qNum(EC,title,`A voltage divider has \\(V_{in}=${Vin}\\,\\mathrm{V}\\), \\(R_1=${R1}\\,k\\Omega\\), and \\(R_2=${R2}\\,k\\Omega\\), with output across \\(R_2\\). Find \\(V_{out}\\).`,ans,`\\(V_{out}=V_{in}R_2/(R_1+R_2)=${Vin}(${R2})/(${R1}+${R2})=${nfmt(ans)}\\,\\mathrm{V}\\).`),'circuit','A source Vin feeds two series resistors R1 and R2 to ground; Vout is measured across the lower resistor R2.')
  }
}
function makeElectronicsFamily28VariantA(title){
  const variant=1;
  {
    const a=ri(2,22),b=ri(2,22),c=ri(2,22),ans=a+b+c;
    return qNum(EC,title,`Three resistors \\(${a}\\,\\Omega\\), \\(${b}\\,\\Omega\\), and \\(${c}\\,\\Omega\\) are in series. Find equivalent resistance.`,ans,`\\(R_{eq}=R_1+R_2+R_3=${a}+${b}+${c}=${ans}\\,\\Omega\\).`)
  }
}
function makeElectronicsFamily29VariantA(title){
  const variant=1;
  {
    const a=ri(2,20),b=ri(2,20),ans=a*b/(a+b);
    return qNum(EC,title,`Two resistors \\(R_1=${a}\\,\\Omega\\) and \\(R_2=${b}\\,\\Omega\\) are in parallel. Find equivalent resistance.`,ans,`\\(R_{eq}=R_1R_2/(R_1+R_2)=${a}(${b})/(${a}+${b})=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsFamily30VariantA(title){
  const variant=1;
  {
    const R=ri(2,100),C0=ri(2,80),ans=R*C0;
    return qNum(EC,title,`An RC circuit has \\(R=${R}\\,k\\Omega\\) and \\(C=${C0}\\,\\mu\\mathrm{F}\\). Find \\(\\tau=RC\\) in milliseconds.`,ans,`\\(k\\Omega\\cdot\\mu\\mathrm{F}=ms\\), so \\(\\tau=${R}(${C0})=${ans}\\,\\mathrm{ms}\\).`)
  }
}
function makeElectronicsFamily31VariantA(title){
  const variant=1;
  {
    const Vs=ri(4,15),R=ri(1,10),ans=(Vs-.7)/R;
    return attachDiagram(qNum(EC,title,`A silicon diode with forward drop \\(0.7\\,\\mathrm{V}\\) is in series with \\(R=${R}\\,k\\Omega\\) and a \\(${Vs}\\,\\mathrm{V}\\) supply. Using the constant-drop model, find current in mA.`,ans,`\\(I=(V_s-V_D)/R=(${Vs}-0.7)/${R}=${nfmt(ans)}\\,\\mathrm{mA}\\), since \\(V/k\\Omega=mA\\).`),'circuit','A DC source Vs feeds a forward-biased diode and series resistor R to ground; the diode drop is modeled as 0.7 V.')
  }
}
function makeElectronicsFamily32VariantA(title){
  const variant=1;
  {
    const Rf=ri(2,40),Rg=ri(2,20),Vin=ri(1,5),gain=1+Rf/Rg,ans=gain*Vin;
    return qNum(EC,title,`A non-inverting op-amp has \\(R_f=${Rf}\\,k\\Omega\\), \\(R_g=${Rg}\\,k\\Omega\\), and input \\(V_{in}=${Vin}\\,\\mathrm{V}\\). Find ideal output voltage.`,ans,`\\(A_v=1+R_f/R_g=1+${Rf}/${Rg}=${nfmt(gain)}\\); \\(V_o=A_vV_{in}=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}
function makeElectronicsFamily33VariantA(title){
  const variant=1;
  {
    const C0=ri(2,100),V0=ri(2,24),ans=.5*C0*V0*V0;
    return qNum(EC,title,`A capacitor \\(C=${C0}\\,\\mu\\mathrm{F}\\) is charged to \\(V=${V0}\\,\\mathrm{V}\\). Find stored energy in microjoules.`,ans,`\\(U=\\frac12CV^2=\\frac12(${C0})(${V0})^2=${nfmt(ans)}\\,\\mu\\mathrm{J}\\).`)
  }
}
function makeElectronicsFamily34VariantA(title){
  const variant=1;
  {
    const f=ri(100,5000),L0=ri(1,90),ans=2*Math.PI*f*L0/1000;
    return qNum(EC,title,`An inductor is \\(L=${L0}\\,\\mathrm{m}H\\) at frequency \\(f=${f}\\,\\mathrm{Hz}\\). Find inductive reactance.`,ans,`\\(X_L=2\\pi fL=2\\pi(${f})(${L0}/1000)=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsFamily35VariantA(title){
  const variant=1;
  {
    const Ic=ri(2,30),Ib=ri(10,100),ans=1000*Ic/Ib;
    return qNum(EC,title,`A BJT has collector current \\(I_C=${Ic}\\,\\mathrm{mA}\\) and base current \\(I_B=${Ib}\\,\\mu\\mathrm{A}\\). Find current gain \\(\\beta=I_C/I_B\\).`,ans,`Convert \\(I_B=${Ib}\\,\\mu\\mathrm{A}=0.001(${Ib})\\,\\mathrm{mA}\\). Thus \\(\\beta=1000(${Ic})/${Ib}=${nfmt(ans)}\\).`);
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily26VariantA(title):makeElectronicsExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily27VariantA(title):makeElectronicsExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily28VariantA(title):makeElectronicsExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily29VariantA(title):makeElectronicsExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily30VariantA(title):makeElectronicsExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily31VariantA(title):makeElectronicsExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily32VariantA(title):makeElectronicsExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily33VariantA(title):makeElectronicsExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily34VariantA(title):makeElectronicsExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeElectronicsFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeElectronicsFamily35VariantA(title):makeElectronicsExpansionFamily10(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.electronics = [numericEntry('electronics',"Ohm-law current · family 26 (randomized variant)","electronics-family-26",()=>makeElectronicsFamily26("Ohm-law current · family 26 (randomized variant)")),
    numericEntry('electronics',"Voltage divider · family 27 (randomized variant)","electronics-family-27",()=>makeElectronicsFamily27("Voltage divider · family 27 (randomized variant)")),
    numericEntry('electronics',"Series resistance · family 28 (randomized variant)","electronics-family-28",()=>makeElectronicsFamily28("Series resistance · family 28 (randomized variant)")),
    numericEntry('electronics',"Parallel resistance · family 29 (randomized variant)","electronics-family-29",()=>makeElectronicsFamily29("Parallel resistance · family 29 (randomized variant)")),
    numericEntry('electronics',"RC time constant · family 30 (randomized variant)","electronics-family-30",()=>makeElectronicsFamily30("RC time constant · family 30 (randomized variant)")),
    numericEntry('electronics',"Diode-resistor current · family 31 (randomized variant)","electronics-family-31",()=>makeElectronicsFamily31("Diode-resistor current · family 31 (randomized variant)")),
    numericEntry('electronics',"Op-amp gain · family 32 (randomized variant)","electronics-family-32",()=>makeElectronicsFamily32("Op-amp gain · family 32 (randomized variant)")),
    numericEntry('electronics',"Capacitor energy · family 33 (randomized variant)","electronics-family-33",()=>makeElectronicsFamily33("Capacitor energy · family 33 (randomized variant)")),
    numericEntry('electronics',"Inductive reactance · family 34 (randomized variant)","electronics-family-34",()=>makeElectronicsFamily34("Inductive reactance · family 34 (randomized variant)")),
    numericEntry('electronics',"Transistor gain · family 35 (randomized variant)","electronics-family-35",()=>makeElectronicsFamily35("Transistor gain · family 35 (randomized variant)")),
    numericEntry('electronics',"Ohm law voltage and current · family 01 (randomized variant)","electronics-family-01",()=>makeElectronicsExpansionFamily01("Ohm law voltage and current · family 01 (randomized variant)")),
    numericEntry('electronics',"Voltage-divider output and current · family 02 (randomized variant)","electronics-family-02",()=>makeElectronicsExpansionFamily02("Voltage-divider output and current · family 02 (randomized variant)")),
    numericEntry('electronics',"Series and parallel resistance · family 03 (randomized variant)","electronics-family-03",()=>makeElectronicsExpansionFamily03("Series and parallel resistance · family 03 (randomized variant)")),
    numericEntry('electronics',"Three-resistor equivalent resistance · family 04 (randomized variant)","electronics-family-04",()=>makeElectronicsExpansionFamily04("Three-resistor equivalent resistance · family 04 (randomized variant)")),
    numericEntry('electronics',"RC time constant and cutoff frequency · family 05 (randomized variant)","electronics-family-05",()=>makeElectronicsExpansionFamily05("RC time constant and cutoff frequency · family 05 (randomized variant)")),
    numericEntry('electronics',"Inductive reactance and RL time constant · family 06 (randomized variant)","electronics-family-06",()=>makeElectronicsExpansionFamily06("Inductive reactance and RL time constant · family 06 (randomized variant)")),
    numericEntry('electronics',"LED series-resistor voltage and current · family 07 (randomized variant)","electronics-family-07",()=>makeElectronicsExpansionFamily07("LED series-resistor voltage and current · family 07 (randomized variant)")),
    numericEntry('electronics',"Non-inverting amplifier gain and output · family 08 (randomized variant)","electronics-family-08",()=>makeElectronicsExpansionFamily08("Non-inverting amplifier gain and output · family 08 (randomized variant)")),
    numericEntry('electronics',"Capacitor charge and stored energy · family 09 (randomized variant)","electronics-family-09",()=>makeElectronicsExpansionFamily09("Capacitor charge and stored energy · family 09 (randomized variant)")),
    numericEntry('electronics',"Inductor flux linkage and energy · family 10 (randomized variant)","electronics-family-10",()=>makeElectronicsExpansionFamily10("Inductor flux linkage and energy · family 10 (randomized variant)")),
    numericEntry('electronics',"BJT current gain and collector current · family 11 (randomized variant)","electronics-family-11",()=>makeElectronicsExpansionFamily11("BJT current gain and collector current · family 11 (randomized variant)")),
    numericEntry('electronics',"Diode-resistor current and voltage · family 12 (randomized variant)","electronics-family-12",()=>makeElectronicsExpansionFamily12("Diode-resistor current and voltage · family 12 (randomized variant)")),
    numericEntry('electronics',"LC resonant frequency and angular frequency · family 13 (randomized variant)","electronics-family-13",()=>makeElectronicsExpansionFamily13("LC resonant frequency and angular frequency · family 13 (randomized variant)")),
    numericEntry('electronics',"Capacitor susceptance and reactance · family 14 (randomized variant)","electronics-family-14",()=>makeElectronicsExpansionFamily14("Capacitor susceptance and reactance · family 14 (randomized variant)")),
    numericEntry('electronics',"Series RL impedance and phase angle · family 15 (randomized variant)","electronics-family-15",()=>makeElectronicsExpansionFamily15("Series RL impedance and phase angle · family 15 (randomized variant)")),
    numericEntry('electronics',"RL phase angle and power factor · family 16 (randomized variant)","electronics-family-16",()=>makeElectronicsExpansionFamily16("RL phase angle and power factor · family 16 (randomized variant)")),
    numericEntry('electronics',"Sinusoidal RMS and half-wave average voltage · family 17 (randomized variant)","electronics-family-17",()=>makeElectronicsExpansionFamily17("Sinusoidal RMS and half-wave average voltage · family 17 (randomized variant)")),
    numericEntry('electronics',"AC apparent and real power · family 18 (randomized variant)","electronics-family-18",()=>makeElectronicsExpansionFamily18("AC apparent and real power · family 18 (randomized variant)")),
    numericEntry('electronics',"Amplifier linear gain and decibel gain · family 19 (randomized variant)","electronics-family-19",()=>makeElectronicsExpansionFamily19("Amplifier linear gain and decibel gain · family 19 (randomized variant)")),
    numericEntry('electronics',"BJT collector and base current · family 20 (randomized variant)","electronics-family-20",()=>makeElectronicsExpansionFamily20("BJT collector and base current · family 20 (randomized variant)")),
    numericEntry('electronics',"RC low-pass cutoff and normalized response · family 21 (randomized variant)","electronics-family-21",()=>makeElectronicsExpansionFamily21("RC low-pass cutoff and normalized response · family 21 (randomized variant)")),
    numericEntry('electronics',"Inverting amplifier gain and summing output · family 22 (randomized variant)","electronics-family-22",()=>makeElectronicsExpansionFamily22("Inverting amplifier gain and summing output · family 22 (randomized variant)")),
    numericEntry('electronics',"Voltage-divider output and input current · family 23 (randomized variant)","electronics-family-23",()=>makeElectronicsExpansionFamily23("Voltage-divider output and input current · family 23 (randomized variant)")),
    numericEntry('electronics',"RC cutoff and dimensionless frequency · family 24 (randomized variant)","electronics-family-24",()=>makeElectronicsExpansionFamily24("RC cutoff and dimensionless frequency · family 24 (randomized variant)")),
    numericEntry('electronics',"Half-wave rectifier average and sinusoidal RMS voltage · family 25 (randomized variant)","electronics-family-25",()=>makeElectronicsExpansionFamily25("Half-wave rectifier average and sinusoidal RMS voltage · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(EC,'Field scenario · Sensor voltage divider output','scenario-electronics-voltage-divider-diagram',()=>{
  const Vin=ri(5,24),R1=ri(1,10),R2=ri(1,10),ans=Vin*R2/(R1+R2);
  const q=qNum(EC,'Field scenario · Sensor voltage divider output',`A sensor interface uses a divider with \\(V_{in}=${Vin}\\,\\mathrm{V}\\), upper resistor \\(R_1=${R1}\\,k\\Omega\\), and lower resistor \\(R_2=${R2}\\,k\\Omega\\). The output is measured across \\(R_2\\). Find \\(V_{out}\\).`,ans,`\\(V_{out}=V_{in}\\frac{R_2}{R_1+R_2}=${Vin}\\frac{${R2}}{${R1}+${R2}}=${nfmt(ans)}\\,\\mathrm{V}\\).`);
  return attachDiagram(q,'circuit','The input source Vin connects to R1 then to the output node; R2 connects from the output node to ground. Vout is measured across R2.');
});
appendNumericRecipe(EC,'Applied · Forward-biased diode current','scenario-electronics-diode-current',()=>{
  const Vs=ri(4,15),R=ri(1,10),Vd=.7,ans=(Vs-Vd)/R;
  const q=qNum(EC,'Applied · Forward-biased diode current',`A silicon indicator diode with constant forward drop \\(V_D=0.7\\,\\mathrm{V}\\) is driven from a \\(${Vs}\\,\\mathrm{V}\\) DC supply through \\(R=${R}\\,k\\Omega\\). Under the constant-drop model, find current in mA.`,ans,`By KVL, \\(I=(V_s-V_D)/R=(${Vs}-0.7)/${R}=${nfmt(ans)}\\,\\mathrm{mA}\\), since volts divided by kΩ gives mA.`);
  return attachDiagram(q,'diodeCircuit','A DC supply Vs drives a series resistor R and a forward-biased silicon diode to the return node; the diode drop is modeled as 0.7 V.');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('electronics','Additional · Current from Ohm law','electronics-topup-01',()=>{
  const V=ri(3,24),R=ri(1,12),ans=V/R;
  return qNum(EC,'Current from Ohm law',`A resistor \\(${R}\\,\\mathrm{k}\\Omega\\) has \\(${V}\\,\\mathrm{V}\\) across it. Find current in milliamperes (mA).`,ans,`By Ohm's law, \\(I=V/R=${V}/${R}=${nfmt(ans)}\\,\\mathrm{mA}\\), since V/kΩ = mA.`,'number',{quantUnit:'mA'});
});
appendNumericRecipe('electronics','Additional · Equivalent resistance of series resistors','electronics-topup-02',()=>{
  const r1=ri(1,12),r2=ri(1,12),r3=ri(1,12),ans=r1+r2+r3;
  return qNum(EC,'Equivalent resistance of series resistors',`Three resistors of \\(${r1}\\,k\\Omega\\), \\(${r2}\\,k\\Omega\\), and \\(${r3}\\,k\\Omega\\) are in series. Find equivalent resistance in kΩ.`,ans,`Series resistances add: \\(R_{eq}=${r1}+${r2}+${r3}=${ans}\\,k\\Omega\\).`);
});
appendNumericRecipe('electronics','Additional · Equivalent resistance of two parallel resistors','electronics-topup-03',()=>{
  const r1=ri(1,12),r2=ri(1,12),ans=r1*r2/(r1+r2);
  return qNum(EC,'Equivalent resistance of two parallel resistors',`Two resistors \\(${r1}\\,k\\Omega\\) and \\(${r2}\\,k\\Omega\\) are connected in parallel. Find equivalent resistance in kΩ.`,ans,`\\(R_{eq}=R_1R_2/(R_1+R_2)=${r1}(${r2})/(${r1}+${r2})=${nfmt(ans)}\\,k\\Omega\\).`);
});
appendNumericRecipe('electronics','Additional · RC time constant','electronics-topup-04',()=>{
  const R=ri(2,100),C=ri(1,80),ans=R*C/1000;
  return qNum(EC,'RC time constant',`An RC circuit has \\(R=${R}\\,k\\Omega\\) and \\(C=${C}\\,\\mu\\mathrm{F}\\). Find time constant in seconds.`,ans,`\\(\\tau=RC=(${R}\\times10^3)(${C}\\times10^{-6})=${nfmt(ans)}\\,\\mathrm{s}\\).`);
});
appendNumericRecipe('electronics','Additional · Inductive reactance','electronics-topup-05',()=>{
  const f=ri(50,2000),Lmh=ri(1,40),ans=2*Math.PI*f*(Lmh/1000);
  return qNum(EC,'Inductive reactance',`An inductor of \\(${Lmh}\\,\\mathrm{m}H\\) operates at \\(${f}\\,\\mathrm{Hz}\\). Find inductive reactance.`,ans,`\\(X_L=2\\pi fL=2\\pi(${f})(${Lmh}/1000)=${nfmt(ans)}\\,\\Omega\\).`);
});
appendNumericRecipe('electronics','Additional · Capacitive reactance','electronics-topup-06',()=>{
  const f=ri(100,2000),Cmicro=ri(1,50),ans=1/(2*Math.PI*f*Cmicro*1e-6);
  return qNum(EC,'Capacitive reactance',`A capacitor of \\(${Cmicro}\\,\\mu\\mathrm{F}\\) operates at \\(${f}\\,\\mathrm{Hz}\\). Find capacitive reactance in ohms.`,ans,`\\(X_C=1/(2\\pi fC)=1/[2\\pi(${f})(${Cmicro}\\times10^{-6})]=${nfmt(ans)}\\,\\Omega\\).`);
});
appendNumericRecipe('electronics','Additional · Voltage gain expressed in decibels','electronics-topup-07',()=>{
  const vin=pick([.1,.2,.5,1,2]),gain=pick([.25,.5,2,4,10]),ans=20*Math.log10(gain);
  return qNum(EC,'Voltage gain expressed in decibels',`An amplifier has voltage gain \\(A_v=${nfmt(gain)}\\) and input \\(${nfmt(vin)}\\,\\mathrm{V}\\). Find voltage gain in dB.`,ans,`For voltage gain, \\(G_{dB}=20\\log_{10}|A_v|=20\\log_{10}(${nfmt(gain)})=${nfmt(ans)}\\,\\mathrm{dB}\\).`);
});
appendNumericRecipe('electronics','Additional · Voltage gain from input and output amplitudes','electronics-topup-08',()=>{
  const vin=pick([.1,.2,.5,1,2]),gain=pick([2,3,4,5,8]),vout=vin*gain,ans=vout/vin;
  return qNum(EC,'Voltage gain from input and output amplitudes',`An amplifier changes an input amplitude of \\(${nfmt(vin)}\\,\\mathrm{V}\\) to output amplitude \\(${nfmt(vout)}\\,\\mathrm{V}\\). Find voltage gain.`,ans,`\\(A_v=V_{out}/V_{in}=${nfmt(vout)}/${nfmt(vin)}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('electronics','Additional · BJT collector current from current gain','electronics-topup-09',()=>{
  const beta=ri(40,180),Ib=rand(10,100),ans=beta*Ib/1000;
  return qNum(EC,'BJT collector current from current gain',`A BJT has current gain \\(\\beta=${beta}\\) and base current \\(I_B=${nfmt(Ib)}\\,\\mu\\mathrm{A}\\). Estimate collector current in mA using \\(I_C=\\beta I_B\\).`,ans,`\\(I_C=${beta}(${nfmt(Ib)}\\,\\mu\\mathrm{A})=${nfmt(ans)}\\,\\mathrm{mA}\\).`);
});
appendNumericRecipe('electronics','Additional · Charge on a capacitor','electronics-topup-10',()=>{
  const C=ri(2,100),V=ri(2,24),ans=C*V;
  return qNum(EC,'Charge on a capacitor',`A capacitor of \\(${C}\\,\\mu\\mathrm{F}\\) is charged to \\(${V}\\,\\mathrm{V}\\). Find charge in \\(\\mu\\mathrm{C}\\).`,ans,`\\(Q=CV=${C}\\,\\mu\\mathrm{F}\\times${V}\\,\\mathrm{V}=${ans}\\,\\mu\\mathrm{C}\\).`);
});
appendNumericRecipe('electronics','Additional · Ideal transformer output voltage','electronics-topup-11',()=>{
  const vp=ri(110,240),np=ri(200,1200),ns=ri(100,1800),ans=vp*ns/np;
  return qNum(EC,'Ideal transformer output voltage',`An ideal transformer has primary voltage \\(V_p=${vp}\\,\\mathrm{V}\\), primary turns \\(N_p=${np}\\), and secondary turns \\(N_s=${ns}\\). Find secondary voltage.`,ans,`\\(V_s/V_p=N_s/N_p\\), so \\(V_s=${vp}(${ns}/${np})=${nfmt(ans)}\\,\\mathrm{V}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeElectronicsScenarioSetup(){const V=pick([12,15,18,20,24]),R=pick([4,6,8,10]),t=60;return {category:NAMESPACE_ELECTRONICS,title:'DC sensor-module load test',prompt:String.raw`A regulated DC supply drives an ideal resistive load in a sensor module. The supply voltage is \(V_s=${V}\,\mathrm{V}\), the load resistance is \(R_L=${R}\,\Omega\), and the powered test lasts \(t=${t}\,\mathrm{s}\). Assume constant voltage and resistance during the test.`,transferData:{V_s: V,R_L: R,t: t},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 118"><circle cx="44" cy="56" r="21" fill="none" stroke="currentColor" stroke-width="1.7"/><text x="44" y="60" text-anchor="middle" fill="currentColor" font-size="12">Vₛ</text><path d="M44 35 V22 H112 M44 77 V94 H258 V78 M258 22 H112" stroke="currentColor" stroke-width="1.5" fill="none"/><path d="M112 22 l7 -7 l7 14 l7 -14 l7 14 l7 -7 H195" stroke="currentColor" stroke-width="1.5" fill="none"/><rect x="226" y="22" width="64" height="56" rx="5" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="258" y="46" text-anchor="middle" fill="currentColor" font-size="12">Rₗ</text><text x="258" y="62" text-anchor="middle" fill="currentColor" font-size="11">load</text></svg>`,alt:'A DC supply is connected in a closed circuit to a resistive sensor-module load.'}],custom:false};}
function makeElectronicsScenarioA(dto={}){const d=dto?.['electronics-load-root-v18']||{};const V=Number(d.V_s),R=Number(d.R_L),ans=V/R;const q=qNum(EC,'Load current',String.raw`Calculate the load current \(I_L\) using Ohm's law.`,ans,String.raw`\(I_L=V_s/R_L=${V}/${R}=${nfmt(ans)}\,\mathrm{A}\).`,'number',{quantUnit:'A'});q.transferData={I_L: ans};return q;}

function makeElectronicsScenarioBSetup(){
  const D=pick([0.25,0.4,0.5,0.6]),P_max=pick([100,120,150]);
  return {category:NAMESPACE_ELECTRONICS,title:'Duty-cycle and rating conditions',prompt:String.raw`During an intermittent operating cycle, the load is energized for a fraction \(D=${D}\) of each cycle. Its continuous power rating is \(P_{max}=${P_max}\,\mathrm{W}\). Assume the off-state power is zero; combine these limits with the source and load data established by the main scenario.`,transferData:{D: D,P_max: P_max},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 95"><path d="M18 70 H302 M18 70 V16" stroke="currentColor" stroke-width="1.4" fill="none"/><rect x="26" y="24" width="53" height="46" fill="#2d83c5" opacity=".85"/><rect x="79" y="24" width="106" height="46" fill="currentColor" opacity=".12"/><rect x="185" y="24" width="53" height="46" fill="#2d83c5" opacity=".85"/><rect x="238" y="24" width="57" height="46" fill="currentColor" opacity=".12"/><text x="52" y="18" text-anchor="middle" fill="currentColor" font-size="11">ON</text><text x="132" y="18" text-anchor="middle" fill="currentColor" font-size="11">OFF</text><text x="210" y="18" text-anchor="middle" fill="currentColor" font-size="11">ON</text><text x="262" y="18" text-anchor="middle" fill="currentColor" font-size="11">OFF</text><text x="240" y="88" fill="currentColor" font-size="11">cycle time</text></svg>`,alt:'The operating cycle alternates energized and off intervals; the duty fraction is the energized portion of one cycle.'}],custom:false};
}
function makeElectronicsScenarioBA(dto={}){
  const root=dto['electronics-load-root-v18']||{};
  const Vs=Number(root.V_s),RL=Number(root.R_L),t=Number(root.t),PL=Vs*Vs/RL,energy=PL*t;
  const q=qNum(EC,'Energy used during the powered test',String.raw`Calculate the electrical energy \(E_L\) dissipated during the powered test.`,energy,String.raw`The operating power is \(P_L=V_s^2/R_L=${Vs}^2/${RL}=${nfmt(PL)}\,\mathrm{W}\). Over duration \(t=${t}\,\mathrm{s}\), \(E_L=P_Lt=${nfmt(PL)}(${t})=${nfmt(energy)}\,\mathrm{J}\).`,'number',{quantUnit:'J'});
  q.transferData={E_L: energy,P_L: PL};return q;
}

function makeElectronicsScenarioBB(dto={}){
  const duty=dto['electronics-load-b-v18']||{},load=dto['electronics-load-ba-v18']||{};
  const D=Number(duty.D),Pmax=Number(duty.P_max),PL=Number(load.P_L),ans=D*PL;
  const passes=ans<=Pmax;
  const q=qNum(EC,'Duty-cycle average power check',String.raw`Use the operating power \(P_L\) published by the preceding calculation and duty fraction \(D\) to determine the time-averaged power \(P_{avg}\). Then check it against the continuous rating.`,ans,String.raw`With zero off-state power, \(P_{avg}=DP_L=${D}(${nfmt(PL)})=${nfmt(ans)}\,\mathrm{W}\). Since \(P_{avg}=${nfmt(ans)}\,\mathrm{W}\) ${passes?'does not exceed':'exceeds'} the continuous rating \(P_{max}=${Pmax}\,\mathrm{W}\), the average-power check ${passes?'passes':'fails'}.`,'number',{quantUnit:'W'});
  q.transferData={P_avg: ans,withinRating: passes?1:0};return q;
}
function registerElectronicsScenarioTree(){
  const rootKey='electronics-load-root-v18',aKey='electronics-load-a-v18',bKey='electronics-load-b-v18',baKey='electronics-load-ba-v18',bbKey='electronics-load-bb-v18';
  setupRecipe(NAMESPACE_ELECTRONICS,'Electronics · Sensor load tree',rootKey,makeElectronicsScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_ELECTRONICS,'Electronics · First calculation',aKey,makeElectronicsScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  setupRecipe(NAMESPACE_ELECTRONICS,'Electronics · Thermal duty-cycle setup',bKey,makeElectronicsScenarioBSetup,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey]});
  appendNumericRecipe(NAMESPACE_ELECTRONICS,'Electronics · Follow-up A',baKey,makeElectronicsScenarioBA,3,{parentRecipeKey:bKey,treeChildrenRecipeKeys:[bbKey]});
  appendNumericRecipe(NAMESPACE_ELECTRONICS,'Electronics · Follow-up B',bbKey,makeElectronicsScenarioBB,3,{parentRecipeKey:baKey});
}
registerElectronicsScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const ELECTRONICS_CONCEPT_CARDS = [
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
  ];
registerConceptGeneratorsForCategory(NAMESPACE_ELECTRONICS, ELECTRONICS_CONCEPT_CARDS);
