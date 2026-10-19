/* electronics: seed entries, explicit expansion families, and category-specific additions. */

function makeElectronicsExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const V0=ri(5,24),R=ri(2,18),ans=v?V0/R:V0;return qNum(EC,title,v?`A resistor \\(${R}\\,\\Omega\\) is connected across \\(${V0}\\,V\\). Find current.`:`For the same resistor, find voltage if current is specified as \\(${nfmt(V0/R)}\\,A\\).`,ans,v?`\\(I=V/R=${nfmt(ans)}\\,A\\).`:`\\(V=IR=${ans}\\,V\\).`)
  }
}
function makeElectronicsExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const Vin=ri(5,24),R1=ri(1,8),R2=ri(2,10),ans=v?Vin/(R1+R2):Vin*R2/(R1+R2);return qNum(EC,title,v?`A divider has \\(R_1=${R1}\\,k\\Omega\\), \\(R_2=${R2}\\,k\\Omega\\), input \\(${Vin}\\,V\\). Find current in mA.`:`For the same unloaded divider, find output voltage across \\(R_2\\).`,ans,v?`\\(I=V_{in}/(R_1+R_2)=${nfmt(ans)}\\,mA\\).`:`\\(V_o=V_{in}R_2/(R_1+R_2)=${nfmt(ans)}\\,V\\).`)
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
      const R=ri(1,10)*1000,C0=ri(1,10)*1e-6,tau=R*C0,ans=v?1/(2*Math.PI*tau):tau;return qNum(EC,title,v?`An RC low-pass filter has \\(R=${R}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,F\\). Find cutoff frequency.`:`Find the time constant for the same RC circuit.`,ans,v?`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,Hz\\).`:`\\(\\tau=RC=${nfmt(ans)}\\,s\\).`)
  }
}
function makeElectronicsExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(1,10)*.01,R=ri(2,18),freq=ri(1,10),ans=v?L0/R:2*Math.PI*freq*L0;return qNum(EC,title,v?`An RL circuit has \\(L=${nfmt(L0)}\\,H\\), \\(R=${R}\\,\\Omega\\). Find time constant.`:`An inductor \\(L=${nfmt(L0)}\\,H\\) is driven at \\(f=${freq}\\,Hz\\). Find inductive reactance.`,ans,v?`\\(\\tau=L/R=${nfmt(ans)}\\,s\\).`:`\\(X_L=2\\pi fL=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const Vs=ri(5,24),Vf=pick([1.8,2,2.2,3.2]),R=ri(220,1000),ans=v?(Vs-Vf)/R*1000:R;return qNum(EC,title,v?`An LED with forward drop \\(${Vf}\\,V\\) is driven from \\(${Vs}\\,V\\) through \\(${R}\\,\\Omega\\). Find current in mA.`:`For the same supply and LED drop, find resistor voltage.`,ans,v?`\\(I=(V_s-V_f)/R=${nfmt(ans)}\\,mA\\).`:`\\(V_R=V_s-V_f=${nfmt(ans)}\\,V\\).`)
  }
}
function makeElectronicsExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const Rf=ri(10,50),Rin=ri(2,10),Vin=rand(.1,1.5),gain=1+Rf/Rin,ans=v?gain*Vin:gain;return qNum(EC,title,v?`An ideal non-inverting op-amp has \\(R_f=${Rf}\\,k\\Omega\\), \\(R_g=${Rin}\\,k\\Omega\\), and input \\(${nfmt(Vin)}\\,V\\). Find output voltage.`:`For the same amplifier, find closed-loop voltage gain.`,ans,v?`\\(V_o=(1+R_f/R_g)V_i=${nfmt(ans)}\\,V\\).`:`\\(A_v=1+R_f/R_g=${nfmt(ans)}\\).`)
  }
}
function makeElectronicsExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(2,100)*1e-6,V0=ri(5,24),ans=v?C0*V0:.5*C0*V0*V0;return qNum(EC,title,v?`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu F\\) is charged to \\(${V0}\\,V\\). Find charge.`:`For the same capacitor, find stored energy.`,ans,v?`\\(Q=CV=${nfmt(ans)}\\,C\\).`:`\\(U=CV^2/2=${nfmt(ans)}\\,J\\).`)
  }
}
function makeElectronicsExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(1,30)*1e-3,I0=ri(1,8),ans=v?.5*L0*I0*I0:L0*I0;return qNum(EC,title,v?`An inductor \\(${nfmt(L0*1000)}\\,mH\\) carries \\(${I0}\\,A\\). Find stored energy.`:`For the same inductor, find flux linkage \\(LI\\).`,ans,v?`\\(U=LI^2/2=${nfmt(ans)}\\,J\\).`:`\\(LI=${nfmt(ans)}\\,Wb\\,turns\\).`)
  }
}
function makeElectronicsExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const beta=ri(50,250),Ib=rand(.02,.25),ans=v?beta*Ib:beta;return qNum(EC,title,v?`A BJT has current gain \\(\\beta=${beta}\\) and base current \\(${nfmt(Ib)}\\,mA\\). Find collector current in mA.`:`For the same transistor, find current gain if \\(I_C=${nfmt(beta*Ib)}\\,mA\\) and \\(I_B=${nfmt(Ib)}\\,mA\\).`,ans,v?`\\(I_C=\\beta I_B=${nfmt(ans)}\\,mA\\).`:`\\(\\beta=I_C/I_B=${nfmt(ans)}\\).`)
  }
}
function makeElectronicsExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const Vs=ri(5,24),Vd=pick([.65,.7,.75]),R=ri(220,1200),ans=v?(Vs-Vd)/R*1000:Vs-Vd;return qNum(EC,title,v?`A silicon diode with drop \\(${Vd}\\,V\\) is fed through \\(${R}\\,\\Omega\\) from \\(${Vs}\\,V\\). Find current in mA.`:`For the same circuit, find voltage across the resistor.`,ans,v?`\\(I=(V_s-V_D)/R=${nfmt(ans)}\\,mA\\).`:`\\(V_R=V_s-V_D=${nfmt(ans)}\\,V\\).`)
  }
}
function makeElectronicsExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(1,20)*1e-3,C0=ri(1,20)*1e-6,ans=v?1/Math.sqrt(L0*C0):1/(2*Math.PI*Math.sqrt(L0*C0));return qNum(EC,title,v?`An ideal LC tank has \\(L=${nfmt(L0)}\\,H\\), \\(C=${nfmt(C0)}\\,F\\). Find resonant angular frequency.`:`For the same tank, find resonant frequency in Hz.`,ans,v?`\\(\\omega_0=1/\\sqrt{LC}=${nfmt(ans)}\\,rad/s\\).`:`\\(f_0=1/(2\\pi\\sqrt{LC})=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeElectronicsExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(1,50)*1e-6,f=ri(100,5000),ans=v?1/(2*Math.PI*f*C0):2*Math.PI*f*C0;return qNum(EC,title,v?`A capacitor \\(${nfmt(C0)}\\,F\\) operates at \\(${f}\\,Hz\\). Find capacitive reactance.`:`For the same capacitor and frequency, find susceptance magnitude.`,ans,v?`\\(X_C=1/(2\\pi fC)=${nfmt(ans)}\\,\\Omega\\).`:`\\(|B_C|=2\\pi fC=${nfmt(ans)}\\,S\\).`)
  }
}
function makeElectronicsExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const R=ri(2,30),X=ri(2,40),ans=v?Math.atan(X/R):Math.hypot(R,X);return qNum(EC,title,v?`A series RL circuit has \\(R=${R}\\,\\Omega\\), \\(X_L=${X}\\,\\Omega\\). Find impedance phase angle in radians.`:`For the same circuit, find impedance magnitude.`,ans,v?`\\(\\phi=\\tan^{-1}(X_L/R)=${nfmt(ans)}\\,rad\\).`:`\\(|Z|=\\sqrt{R^2+X_L^2}=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeElectronicsExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const R=ri(5,50),X=ri(3,40),ans=v?R/Math.hypot(R,X):Math.atan(X/R);return qNum(EC,title,v?`A series RL circuit has \\(R=${R}\\,\\Omega\\), \\(X_L=${X}\\,\\Omega\\). Find power factor.`:`For the same circuit, find phase angle in radians.`,ans,v?`\\(PF=R/|Z|=${nfmt(ans)}\\).`:`\\(\\phi=\\tan^{-1}(X_L/R)=${nfmt(ans)}\\,rad\\).`)
  }
}
function makeElectronicsExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const Vm=ri(5,24),ans=v?Vm/Math.PI:Vm/Math.sqrt(2);return qNum(EC,title,v?`An ideal half-wave rectifier has sinusoidal peak input \\(${Vm}\\,V\\). Find average output voltage.`:`Find RMS voltage of a sinusoid with peak \\(${Vm}\\,V\\).`,ans,v?`\\(V_{avg}=V_m/\\pi=${nfmt(ans)}\\,V\\).`:`\\(V_{rms}=V_m/\\sqrt2=${nfmt(ans)}\\,V\\).`)
  }
}
function makeElectronicsExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const V=ri(5,24),I=ri(1,8),pf=pick([.6,.7,.8,.9]),ans=v?V*I*pf:V*I;return qNum(EC,title,v?`An AC load has \\(V=${V}\\,V\\), \\(I=${I}\\,A\\), power factor \\(${pf}\\). Find real power.`:`For the same load, find apparent power.`,ans,v?`\\(P=VI\\cos\\phi=${nfmt(ans)}\\,W\\).`:`\\(S=VI=${ans}\\,VA\\).`)
  }
}
function makeElectronicsExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const gain=pick([2,4,5,10]),ans=v?20*Math.log10(gain):gain;return qNum(EC,title,v?`An amplifier voltage gain is \\(A_v=${gain}\\). Find gain in decibels.`:`An amplifier voltage gain is \\(A_v=${gain}\\). Find linear magnitude.`,ans,v?`\\(G_{dB}=20\\log_{10}A_v=${nfmt(ans)}\\,dB\\).`:`Linear gain is \\(${ans}\\).`)
  }
}
function makeElectronicsExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const V=ri(5,24),R=ri(1,8)*1000,beta=ri(50,200),Vbe=.7,ans=v?(V-Vbe)/R*1e6:((V-Vbe)/R*1e6)*beta;return qNum(EC,title,v?`A BJT base is driven from \\(${V}\\,V\\) through \\(${R/1000}\\,k\\Omega\\), with \\(V_{BE}=0.7\\,V\\). Find base current in \\(\\mu A\\).`:`With current gain \\(\\beta=${beta}\\), find collector current in \\(\\mu A\\) assuming active region.`,ans,v?`\\(I_B=(V-V_{BE})/R=${nfmt(ans)}\\,\\mu A\\).`:`\\(I_C=\\beta I_B=${nfmt(ans)}\\,\\mu A\\).`)
  }
}
function makeElectronicsExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const R=ri(1,10)*1000,C0=ri(1,8)*1e-6,f=ri(50,1500),ans=v?1/Math.sqrt(1+(2*Math.PI*f*R*C0)**2):1/(2*Math.PI*R*C0);return qNum(EC,title,v?`An RC low-pass has \\(R=${R}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,F\\), and frequency \\(${f}\\,Hz\\). Find normalized magnitude \\(|H(j\\omega)|\\).`:`For the same RC filter, find its cutoff frequency.`,ans,v?`\\(|H|=1/\\sqrt{1+(2\\pi fRC)^2}=${nfmt(ans)}\\).`:`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeElectronicsExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const R1=ri(2,10),R2=ri(2,10),V1=ri(1,5),V2=ri(1,5),ans=v?-(V1+V2):-(R2/R1);return qNum(EC,title,v?`An ideal inverting summing amplifier has equal input resistors and inputs \\(${V1}\\,V\\), \\(${V2}\\,V\\). Find output voltage.`:`An inverting amplifier has \\(R_f=${R2}\\,k\\Omega\\), \\(R_{in}=${R1}\\,k\\Omega\\). Find voltage gain.`,ans,v?`\\(V_o=-(V_1+V_2)=${nfmt(ans)}\\,V\\).`:`\\(A_v=-R_f/R_{in}=${nfmt(ans)}\\).`)
  }
}
function makeElectronicsExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const Vin=ri(5,24),R1=ri(1,8),R2=ri(2,10),ans=v?Vin*R2/(R1+R2):Vin/(R1+R2);return qNum(EC,title,v?`An unloaded divider has \\(V_{in}=${Vin}\\,V\\), \\(R_1=${R1}\\,k\\Omega\\), \\(R_2=${R2}\\,k\\Omega\\). Find output voltage.`:`For the same divider, find current in mA.`,ans,v?`\\(V_o=V_{in}R_2/(R_1+R_2)=${nfmt(ans)}\\,V\\).`:`\\(I=V_{in}/(R_1+R_2)=${nfmt(ans)}\\,mA\\).`)
  }
}
function makeElectronicsExpansionFamily24(title){
  const v=ri(0,1)===1;
  {
      const R=ri(2,20),C0=ri(2,80)*1e-6,f=ri(100,2000),ans=v?2*Math.PI*f*R*C0:1/(2*Math.PI*R*C0);return qNum(EC,title,v?`An RC network has \\(R=${R}\\,k\\Omega\\), \\(C=${nfmt(C0*1e6)}\\,\\mu F\\), at \\(f=${f}\\,Hz\\). Find dimensionless \\(\\omega RC\\) using resistance in kΩ and capacitance in μF.`:`For a single-pole RC circuit with \\(R=${R*1000}\\,\\Omega\\), \\(C=${nfmt(C0)}\\,F\\), find cutoff frequency.`,ans,v?`Convert to SI: \\(\\omega RC=2\\pi f(${R*1000})(${nfmt(C0)})=${nfmt(ans)}\\).`:`\\(f_c=1/(2\\pi RC)=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeElectronicsExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const Vm=ri(5,36),ans=v?Vm/Math.sqrt(2):Vm/Math.PI;return qNum(EC,title,v?`A sinusoidal source has peak voltage \\(${Vm}\\,V\\). Find RMS voltage.`:`An ideal half-wave rectifier has input peak \\(${Vm}\\,V\\). Find average output voltage.`,ans,v?`\\(V_{rms}=V_m/\\sqrt2=${nfmt(ans)}\\,V\\).`:`\\(V_{avg}=V_m/\\pi=${nfmt(ans)}\\,V\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const ELECTRONICS_EXTRA_NAMES = ["Ohm-law current", "Voltage divider", "Series resistance", "Parallel resistance", "RC time constant", "Diode-resistor current", "Op-amp gain", "Capacitor energy", "Inductive reactance", "Transistor gain"];

function makeElectronicsTopicSeed(index){
  const family=index%10, variant=Math.floor(index/10)+1;
  const title=`${ELECTRONICS_EXTRA_NAMES[family]} · version ${variant}`;
      if(family===0){const V0=ri(5,24),R=ri(1,12),ans=V0/R;return qNum(EC,title,`A resistor \\(R=${R}\\,\\Omega\\) is connected across \\(V=${V0}\\,V\\). Find current in amperes.`,ans,`Ohm's law gives \\(I=V/R=${V0}/${R}=${nfmt(ans)}\\,A\\).`)}
    if(family===1){const Vin=ri(5,24),R1=ri(1,10),R2=ri(1,10),ans=Vin*R2/(R1+R2);return attachDiagram(qNum(EC,title,`A voltage divider has \\(V_{in}=${Vin}\\,V\\), \\(R_1=${R1}\\,k\\Omega\\), and \\(R_2=${R2}\\,k\\Omega\\), with output across \\(R_2\\). Find \\(V_{out}\\).`,ans,`\\(V_{out}=V_{in}R_2/(R_1+R_2)=${Vin}(${R2})/(${R1}+${R2})=${nfmt(ans)}\\,V\\).`),'circuit','A source Vin feeds two series resistors R1 and R2 to ground; Vout is measured across the lower resistor R2.')}
    if(family===2){const a=ri(2,22),b=ri(2,22),c=ri(2,22),ans=a+b+c;return qNum(EC,title,`Three resistors \\(${a}\\,\\Omega\\), \\(${b}\\,\\Omega\\), and \\(${c}\\,\\Omega\\) are in series. Find equivalent resistance.`,ans,`\\(R_{eq}=R_1+R_2+R_3=${a}+${b}+${c}=${ans}\\,\\Omega\\).`)}
    if(family===3){const a=ri(2,20),b=ri(2,20),ans=a*b/(a+b);return qNum(EC,title,`Two resistors \\(R_1=${a}\\,\\Omega\\) and \\(R_2=${b}\\,\\Omega\\) are in parallel. Find equivalent resistance.`,ans,`\\(R_{eq}=R_1R_2/(R_1+R_2)=${a}(${b})/(${a}+${b})=${nfmt(ans)}\\,\\Omega\\).`)}
    if(family===4){const R=ri(2,100),C0=ri(2,80),ans=R*C0;return qNum(EC,title,`An RC circuit has \\(R=${R}\\,k\\Omega\\) and \\(C=${C0}\\,\\mu F\\). Find \\(\\tau=RC\\) in milliseconds.`,ans,`\\(k\\Omega\\cdot\\mu F=ms\\), so \\(\\tau=${R}(${C0})=${ans}\\,ms\\).`)}
    if(family===5){const Vs=ri(4,15),R=ri(1,10),ans=(Vs-.7)/R;return attachDiagram(qNum(EC,title,`A silicon diode with forward drop \\(0.7\\,V\\) is in series with \\(R=${R}\\,k\\Omega\\) and a \\(${Vs}\\,V\\) supply. Using the constant-drop model, find current in mA.`,ans,`\\(I=(V_s-V_D)/R=(${Vs}-0.7)/${R}=${nfmt(ans)}\\,mA\\), since \\(V/k\\Omega=mA\\).`),'circuit','A DC source Vs feeds a forward-biased diode and series resistor R to ground; the diode drop is modeled as 0.7 V.')}
    if(family===6){const Rf=ri(2,40),Rg=ri(2,20),Vin=ri(1,5),gain=1+Rf/Rg,ans=gain*Vin;return qNum(EC,title,`A non-inverting op-amp has \\(R_f=${Rf}\\,k\\Omega\\), \\(R_g=${Rg}\\,k\\Omega\\), and input \\(V_{in}=${Vin}\\,V\\). Find ideal output voltage.`,ans,`\\(A_v=1+R_f/R_g=1+${Rf}/${Rg}=${nfmt(gain)}\\); \\(V_o=A_vV_{in}=${nfmt(ans)}\\,V\\).`)}
    if(family===7){const C0=ri(2,100),V0=ri(2,24),ans=.5*C0*V0*V0;return qNum(EC,title,`A capacitor \\(C=${C0}\\,\\mu F\\) is charged to \\(V=${V0}\\,V\\). Find stored energy in microjoules.`,ans,`\\(U=\\frac12CV^2=\\frac12(${C0})(${V0})^2=${nfmt(ans)}\\,\\mu J\\).`)}
    if(family===8){const f=ri(100,5000),L0=ri(1,90),ans=2*Math.PI*f*L0/1000;return qNum(EC,title,`An inductor is \\(L=${L0}\\,mH\\) at frequency \\(f=${f}\\,Hz\\). Find inductive reactance.`,ans,`\\(X_L=2\\pi fL=2\\pi(${f})(${L0}/1000)=${nfmt(ans)}\\,\\Omega\\).`)}
    const Ic=ri(2,30),Ib=ri(10,100),ans=1000*Ic/Ib;return qNum(EC,title,`A BJT has collector current \\(I_C=${Ic}\\,mA\\) and base current \\(I_B=${Ib}\\,\\mu A\\). Find current gain \\(\\beta=I_C/I_B\\).`,ans,`Convert \\(I_B=${Ib}\\,\\mu A=0.001(${Ib})\\,mA\\). Thus \\(\\beta=1000(${Ic})/${Ib}=${nfmt(ans)}\\).`);
}


NUMERIC_GENERATOR_REGISTRY.electronics = [...numericSeedEntries(EC, ELECTRONICS_EXTRA_NAMES, 'Core', 'topic-seed', makeElectronicsTopicSeed),
    numericEntry('electronics',"Ohm-law current · family 01 (randomized variant)","electronics-family-01",()=>makeElectronicsExpansionFamily01("Ohm-law current · family 01 (randomized variant)")),
    numericEntry('electronics',"Voltage-divider output · family 02 (randomized variant)","electronics-family-02",()=>makeElectronicsExpansionFamily02("Voltage-divider output · family 02 (randomized variant)")),
    numericEntry('electronics',"Series resistance · family 03 (randomized variant)","electronics-family-03",()=>makeElectronicsExpansionFamily03("Series resistance · family 03 (randomized variant)")),
    numericEntry('electronics',"Parallel resistance · family 04 (randomized variant)","electronics-family-04",()=>makeElectronicsExpansionFamily04("Parallel resistance · family 04 (randomized variant)")),
    numericEntry('electronics',"RC time constant · family 05 (randomized variant)","electronics-family-05",()=>makeElectronicsExpansionFamily05("RC time constant · family 05 (randomized variant)")),
    numericEntry('electronics',"Diode-resistor current · family 06 (randomized variant)","electronics-family-06",()=>makeElectronicsExpansionFamily06("Diode-resistor current · family 06 (randomized variant)")),
    numericEntry('electronics',"Non-inverting amplifier gain · family 07 (randomized variant)","electronics-family-07",()=>makeElectronicsExpansionFamily07("Non-inverting amplifier gain · family 07 (randomized variant)")),
    numericEntry('electronics',"Capacitor energy · family 08 (randomized variant)","electronics-family-08",()=>makeElectronicsExpansionFamily08("Capacitor energy · family 08 (randomized variant)")),
    numericEntry('electronics',"Inductive reactance · family 09 (randomized variant)","electronics-family-09",()=>makeElectronicsExpansionFamily09("Inductive reactance · family 09 (randomized variant)")),
    numericEntry('electronics',"Transistor current gain · family 10 (randomized variant)","electronics-family-10",()=>makeElectronicsExpansionFamily10("Transistor current gain · family 10 (randomized variant)")),
    numericEntry('electronics',"RC cutoff frequency · family 11 (randomized variant)","electronics-family-11",()=>makeElectronicsExpansionFamily11("RC cutoff frequency · family 11 (randomized variant)")),
    numericEntry('electronics',"Inverting amplifier gain · family 12 (randomized variant)","electronics-family-12",()=>makeElectronicsExpansionFamily12("Inverting amplifier gain · family 12 (randomized variant)")),
    numericEntry('electronics',"Divider current · family 13 (randomized variant)","electronics-family-13",()=>makeElectronicsExpansionFamily13("Divider current · family 13 (randomized variant)")),
    numericEntry('electronics',"Dimensionless RC frequency · family 14 (randomized variant)","electronics-family-14",()=>makeElectronicsExpansionFamily14("Dimensionless RC frequency · family 14 (randomized variant)")),
    numericEntry('electronics',"Rectifier average voltage · family 15 (randomized variant)","electronics-family-15",()=>makeElectronicsExpansionFamily15("Rectifier average voltage · family 15 (randomized variant)")),
    numericEntry('electronics',"Half-wave output RMS · family 16 (randomized variant)","electronics-family-16",()=>makeElectronicsExpansionFamily16("Half-wave output RMS · family 16 (randomized variant)")),
    numericEntry('electronics',"BJT base current · family 17 (randomized variant)","electronics-family-17",()=>makeElectronicsExpansionFamily17("BJT base current · family 17 (randomized variant)")),
    numericEntry('electronics',"Capacitor charge · family 18 (randomized variant)","electronics-family-18",()=>makeElectronicsExpansionFamily18("Capacitor charge · family 18 (randomized variant)")),
    numericEntry('electronics',"Resistor power · family 19 (randomized variant)","electronics-family-19",()=>makeElectronicsExpansionFamily19("Resistor power · family 19 (randomized variant)")),
    numericEntry('electronics',"Voltage gain in decibels · family 20 (randomized variant)","electronics-family-20",()=>makeElectronicsExpansionFamily20("Voltage gain in decibels · family 20 (randomized variant)")),
    numericEntry('electronics',"Low-pass frequency response · family 21 (randomized variant)","electronics-family-21",()=>makeElectronicsExpansionFamily21("Low-pass frequency response · family 21 (randomized variant)")),
    numericEntry('electronics',"Inverting summer output · family 22 (randomized variant)","electronics-family-22",()=>makeElectronicsExpansionFamily22("Inverting summer output · family 22 (randomized variant)")),
    numericEntry('electronics',"Divider Thevenin current · family 23 (randomized variant)","electronics-family-23",()=>makeElectronicsExpansionFamily23("Divider Thevenin current · family 23 (randomized variant)")),
    numericEntry('electronics',"RC cutoff calculation · family 24 (randomized variant)","electronics-family-24",()=>makeElectronicsExpansionFamily24("RC cutoff calculation · family 24 (randomized variant)")),
    numericEntry('electronics',"Rectifier RMS value · family 25 (randomized variant)","electronics-family-25",()=>makeElectronicsExpansionFamily25("Rectifier RMS value · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(EC,'Field scenario · Sensor voltage divider output','scenario-electronics-voltage-divider-diagram',()=>{
  const Vin=ri(5,24),R1=ri(1,10),R2=ri(1,10),ans=Vin*R2/(R1+R2);
  const q=qNum(EC,'Field scenario · Sensor voltage divider output',`A sensor interface uses a divider with \(V_{in}=${Vin}\,V\), upper resistor \(R_1=${R1}\,k\Omega\), and lower resistor \(R_2=${R2}\,k\Omega\). The output is measured across \(R_2\). Find \(V_{out}\).`,ans,`\(V_{out}=V_{in}\frac{R_2}{R_1+R_2}=${Vin}\frac{${R2}}{${R1}+${R2}}=${nfmt(ans)}\,V\).`);
  return attachDiagram(q,'circuit','The input source Vin connects to R1 then to the output node; R2 connects from the output node to ground. Vout is measured across R2.');
});
appendNumericRecipe(EC,'Applied · Forward-biased diode current','scenario-electronics-diode-current',()=>{
  const Vs=ri(4,15),R=ri(1,10),Vd=.7,ans=(Vs-Vd)/R;
  const q=qNum(EC,'Applied · Forward-biased diode current',`A silicon indicator diode with constant forward drop \(V_D=0.7\,V\) is driven from a \(${Vs}\,V\) DC supply through \(R=${R}\,k\Omega\). Under the constant-drop model, find current in mA.`,ans,`By KVL, \(I=(V_s-V_D)/R=(${Vs}-0.7)/${R}=${nfmt(ans)}\,mA\), since volts divided by kΩ gives mA.`);
  return attachDiagram(q,'diodeCircuit','A DC supply Vs drives a series resistor R and a forward-biased silicon diode to the return node; the diode drop is modeled as 0.7 V.');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('electronics','Additional · Current from Ohm law','electronics-topup-01',()=>{
  const V=ri(3,24),R=ri(1,12),ans=V/R;
  return qNum(EC,'Current from Ohm law',`A resistor \(${R}\,k\Omega\) has \(${V}\,V\) across it. Find current in mA.`,ans,`By Ohm's law, \(I=V/R=${V}/${R}=${nfmt(ans)}\,mA\), since V/kΩ = mA.`);
});
appendNumericRecipe('electronics','Additional · Equivalent resistance of series resistors','electronics-topup-02',()=>{
  const r1=ri(1,12),r2=ri(1,12),r3=ri(1,12),ans=r1+r2+r3;
  return qNum(EC,'Equivalent resistance of series resistors',`Three resistors of \(${r1}\,k\Omega\), \(${r2}\,k\Omega\), and \(${r3}\,k\Omega\) are in series. Find equivalent resistance in kΩ.`,ans,`Series resistances add: \(R_{eq}=${r1}+${r2}+${r3}=${ans}\,k\Omega\).`);
});
appendNumericRecipe('electronics','Additional · Equivalent resistance of two parallel resistors','electronics-topup-03',()=>{
  const r1=ri(1,12),r2=ri(1,12),ans=r1*r2/(r1+r2);
  return qNum(EC,'Equivalent resistance of two parallel resistors',`Two resistors \(${r1}\,k\Omega\) and \(${r2}\,k\Omega\) are connected in parallel. Find equivalent resistance in kΩ.`,ans,`\(R_{eq}=R_1R_2/(R_1+R_2)=${r1}(${r2})/(${r1}+${r2})=${nfmt(ans)}\,k\Omega\).`);
});
appendNumericRecipe('electronics','Additional · RC time constant','electronics-topup-04',()=>{
  const R=ri(2,100),C=ri(1,80),ans=R*C/1000;
  return qNum(EC,'RC time constant',`An RC circuit has \(R=${R}\,k\Omega\) and \(C=${C}\,\mu F\). Find time constant in seconds.`,ans,`\(\tau=RC=(${R}\times10^3)(${C}\times10^{-6})=${nfmt(ans)}\,s\).`);
});
appendNumericRecipe('electronics','Additional · Inductive reactance','electronics-topup-05',()=>{
  const f=ri(50,2000),Lmh=ri(1,40),ans=2*Math.PI*f*(Lmh/1000);
  return qNum(EC,'Inductive reactance',`An inductor of \(${Lmh}\,mH\) operates at \(${f}\,Hz\). Find inductive reactance.`,ans,`\(X_L=2\pi fL=2\pi(${f})(${Lmh}/1000)=${nfmt(ans)}\,\Omega\).`);
});
appendNumericRecipe('electronics','Additional · Capacitive reactance','electronics-topup-06',()=>{
  const f=ri(100,2000),Cmicro=ri(1,50),ans=1/(2*Math.PI*f*Cmicro*1e-6);
  return qNum(EC,'Capacitive reactance',`A capacitor of \(${Cmicro}\,\mu F\) operates at \(${f}\,Hz\). Find capacitive reactance in ohms.`,ans,`\(X_C=1/(2\pi fC)=1/[2\pi(${f})(${Cmicro}\times10^{-6})]=${nfmt(ans)}\,\Omega\).`);
});
appendNumericRecipe('electronics','Additional · Voltage gain expressed in decibels','electronics-topup-07',()=>{
  const vin=pick([.1,.2,.5,1,2]),gain=pick([.25,.5,2,4,10]),ans=20*Math.log10(gain);
  return qNum(EC,'Voltage gain expressed in decibels',`An amplifier has voltage gain \(A_v=${nfmt(gain)}\) and input \(${nfmt(vin)}\,V\). Find voltage gain in dB.`,ans,`For voltage gain, \(G_{dB}=20\log_{10}|A_v|=20\log_{10}(${nfmt(gain)})=${nfmt(ans)}\,dB\).`);
});
appendNumericRecipe('electronics','Additional · Voltage gain from input and output amplitudes','electronics-topup-08',()=>{
  const vin=pick([.1,.2,.5,1,2]),gain=pick([2,3,4,5,8]),vout=vin*gain,ans=vout/vin;
  return qNum(EC,'Voltage gain from input and output amplitudes',`An amplifier changes an input amplitude of \(${nfmt(vin)}\,V\) to output amplitude \(${nfmt(vout)}\,V\). Find voltage gain.`,ans,`\(A_v=V_{out}/V_{in}=${nfmt(vout)}/${nfmt(vin)}=${nfmt(ans)}\).`);
});
appendNumericRecipe('electronics','Additional · BJT collector current from current gain','electronics-topup-09',()=>{
  const beta=ri(40,180),Ib=rand(10,100),ans=beta*Ib/1000;
  return qNum(EC,'BJT collector current from current gain',`A BJT has current gain \(\beta=${beta}\) and base current \(I_B=${nfmt(Ib)}\,\mu A\). Estimate collector current in mA using \(I_C=\beta I_B\).`,ans,`\(I_C=${beta}(${nfmt(Ib)}\,\mu A)=${nfmt(ans)}\,mA\).`);
});
appendNumericRecipe('electronics','Additional · Charge on a capacitor','electronics-topup-10',()=>{
  const C=ri(2,100),V=ri(2,24),ans=C*V;
  return qNum(EC,'Charge on a capacitor',`A capacitor of \(${C}\,\mu F\) is charged to \(${V}\,V\). Find charge in \(\mu C\).`,ans,`\(Q=CV=${C}\,\mu F\times${V}\,V=${ans}\,\mu C\).`);
});
appendNumericRecipe('electronics','Additional · Ideal transformer output voltage','electronics-topup-11',()=>{
  const vp=ri(110,240),np=ri(200,1200),ns=ri(100,1800),ans=vp*ns/np;
  return qNum(EC,'Ideal transformer output voltage',`An ideal transformer has primary voltage \(V_p=${vp}\,V\), primary turns \(N_p=${np}\), and secondary turns \(N_s=${ns}\). Find secondary voltage.`,ans,`\(V_s/V_p=N_s/N_p\), so \(V_s=${vp}(${ns}/${np})=${nfmt(ans)}\,V\).`);
});
