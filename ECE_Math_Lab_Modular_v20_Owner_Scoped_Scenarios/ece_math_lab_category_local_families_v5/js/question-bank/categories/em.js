/* em: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_EM = 'em';
const E = NAMESPACE_EM;
function makeEmExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const q1=ri(2,8)*1e-6,q2=ri(2,8)*1e-6,r=ri(2,9)*.01,ans=v?8.9875517923e9*q1*q2/(r*r):8.9875517923e9*q1/r**2;return qNum(E,title,v?`Two charges \\(${nfmt(q1*1e6)}\\,\\mu\\mathrm{C}\\) and \\(${nfmt(q2*1e6)}\\,\\mu\\mathrm{C}\\) are separated by \\(${nfmt(r)}\\,\\mathrm{m}\\). Find Coulomb-force magnitude.`:`A point charge \\(${nfmt(q1*1e6)}\\,\\mu\\mathrm{C}\\) is \\(${nfmt(r)}\\,\\mathrm{m}\\) from a field point. Find electric-field magnitude.`,ans,v?`\\(F=k|q_1q_2|/r^2=${nfmt(ans)}\\,\\mathrm{N}\\).`:`\\(E=k|q|/r^2=${nfmt(ans)}\\,\\mathrm{N}/\\mathrm{C}\\).`)
  }
}
function makeEmExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,9)*1e-6,r=ri(2,8)*.1,ans=v?8.9875517923e9*q/r:8.9875517923e9*q/(r*r);return qNum(E,title,v?`Find electric potential at \\(r=${nfmt(r)}\\,\\mathrm{m}\\) from a point charge \\(${nfmt(q*1e6)}\\,\\mu\\mathrm{C}\\).`:`A point charge \\(q=${nfmt(q*1e6)}\\,\\mu\\mathrm{C}\\) is at distance \\(r=${nfmt(r)}\\,\\mathrm{m}\\). Find electric-field magnitude.`,ans,v?`\\(V=kq/r=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(E=kq/r^2=${nfmt(ans)}\\,\\mathrm{N}/\\mathrm{C}\\).`)
  }
}
function makeEmExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const E0=ri(20,120),A0=ri(2,10)*.01,theta=pick([0,Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?E0*A0*Math.cos(theta):E0*A0;return qNum(E,title,v?`A uniform field \\(${E0}\\,\\mathrm{N}/\\mathrm{C}\\) crosses area \\(${nfmt(A0)}\\,\\mathrm{m}^2\\) at angle \\(${nfmt(theta)}\\,\\mathrm{rad}\\) to the area normal. Find electric flux.`:`Find flux when field \\(${E0}\\,\\mathrm{N}/\\mathrm{C}\\) is normal to area \\(${nfmt(A0)}\\,\\mathrm{m}^2\\).`,ans,v?`\\(\\Phi_E=EA\\cos\\theta=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}^2/C\\).`:`\\(\\Phi_E=EA=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}^2/C\\).`)
  }
}
function makeEmExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const eps=8.8541878128e-12,A0=ri(2,8)*.01,d=ri(1,5)*.001,V0=ri(5,24),C0=eps*A0/d,ans=v?C0*V0:C0;return qNum(E,title,v?`A vacuum parallel-plate capacitor has \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\), \\(d=${nfmt(d)}\\,\\mathrm{m}\\), and voltage \\(${V0}\\,\\mathrm{V}\\). Find charge.`:`A vacuum parallel-plate capacitor has \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\) and plate gap \\(${nfmt(d)}\\,\\mathrm{m}\\). Find capacitance.`,ans,v?`\\(C=\\epsilon_0A/d\\); \\(Q=CV=${nfmt(ans)}\\,\\mathrm{C}\\).`:`\\(C=\\epsilon_0A/d=${nfmt(ans)}\\,\\mathrm{F}\\).`)
  }
}
function makeEmExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(2,80)*1e-6,V0=ri(5,24),ans=v?.5*C0*V0*V0:C0*V0;return qNum(E,title,v?`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\) is charged to \\(${V0}\\,\\mathrm{V}\\). Find stored energy.`:`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu\\mathrm{F}\\) is charged to \\(${V0}\\,\\mathrm{V}\\). Find charge.`,ans,v?`\\(U=CV^2/2=${nfmt(ans)}\\,\\mathrm{J}\\).`:`\\(Q=CV=${nfmt(ans)}\\,\\mathrm{C}\\).`)
  }
}
function makeEmExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,8)*.01,q=ri(2,8)*1e-6,B0=rand(.1,.8),vel=ri(2,10)*1e4,ans=v?m*vel/(Math.abs(q)*B0):Math.abs(q)*vel*B0;return qNum(E,title,v?`A charged particle of mass \\(${nfmt(m)}\\,\\mathrm{kg}\\) moves perpendicular to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) at speed \\(${nfmt(vel)}\\,\\mathrm{m}/\\mathrm{s}\\). Its charge magnitude is \\(${nfmt(q)}\\,\\mathrm{C}\\). Find orbit radius.`:`A charge \\(${nfmt(q)}\\,\\mathrm{C}\\) moves perpendicular to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) at speed \\(${nfmt(vel)}\\,\\mathrm{m}/\\mathrm{s}\\). Find magnetic-force magnitude.`,ans,v?`\\(r=mv/(|q|B)=${nfmt(ans)}\\,\\mathrm{m}\\).`:`\\(F=|q|vB=${nfmt(ans)}\\,\\mathrm{N}\\).`)
  }
}
function makeEmExpansionFamily07(title){
  const v=ri(0,1)===1;
  const B0=rand(.1,1.2),I=ri(1,8),ell=ri(2,9)*.1;
  const answer=v?B0*I*ell:B0*I;
  const prompt=v
    ? `A straight wire of length \\(${nfmt(ell)}\\,\\mathrm{m}\\) carries current \\(${I}\\,\\mathrm{A}\\) perpendicular to a uniform magnetic field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find the magnetic force on the wire.`
    : `A long straight wire carries current \\(${I}\\,\\mathrm{A}\\) perpendicular to a uniform magnetic field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find the magnetic force per unit length.`;
  const explanation=v
    ? `Using \\(F=BI\\ell\\), \\(F=${nfmt(B0)}(${I})(${nfmt(ell)})=${nfmt(answer)}\\,\\mathrm{N}\\).`
    : `Using \\(F/\\ell=BI\\), the force per unit length is \\(${nfmt(B0)}(${I})=${nfmt(answer)}\\,\\mathrm{N}/\\mathrm{m}\\).`;
  return qNum(E,title,prompt,answer,explanation,'number',{quantUnit:v?'N':'N/m'});
}
function makeEmExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const B0=rand(.1,.9),ell=ri(2,10)*.1,vel=ri(2,9),emf=B0*ell*vel,emfGiven=roundSigNumber(emf,4),ans=v?emfGiven/(B0*ell):emf;return qNum(E,title,v?`A rod of length \\(${ell}\\,\\mathrm{m}\\) moves perpendicular to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). What speed is required to produce \\(${nfmt(emfGiven)}\\,\\mathrm{V}\\) motional emf?`:`A rod of length \\(${ell}\\,\\mathrm{m}\\) moves at \\(${vel}\\,\\mathrm{m}/\\mathrm{s}\\) perpendicular to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find motional emf.`,ans,v?`\\(v=\\mathcal E/(B\\ell)=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}\\).`:`\\(\\mathcal E=B\\ell v=${nfmt(ans)}\\,\\mathrm{V}\\).`)
  }
}
function makeEmExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const mu=ri(2,9)*.01,B0=rand(.1,.9),theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?mu*B0:mu*B0*Math.sin(theta);return qNum(E,title,v?`A magnetic dipole moment \\(\\mu=${nfmt(mu)}\\,\\mathrm{A}\\,\\mathrm{m}^2\\) is parallel to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find interaction energy magnitude.`:`A dipole \\(\\mu=${nfmt(mu)}\\,\\mathrm{A}\\,\\mathrm{m}^2\\) makes angle \\(${nfmt(theta)}\\,\\mathrm{rad}\\) with \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find torque magnitude.`,ans,v?`\\(|U|=\\mu B=${nfmt(ans)}\\,\\mathrm{J}\\).`:`\\(\\tau=\\mu B\\sin\\theta=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}\\).`)
  }
}
function makeEmExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(2,20)*.01,I0=ri(1,8),ans=v?.5*L0*I0*I0:L0*I0;return qNum(E,title,v?`An inductor \\(L=${nfmt(L0)}\\,H\\) carries \\(${I0}\\,\\mathrm{A}\\). Find magnetic energy.`:`An inductor \\(L=${nfmt(L0)}\\,H\\) carries \\(${I0}\\,\\mathrm{A}\\). Find flux linkage \\(LI\\).`,ans,v?`\\(U=LI^2/2=${nfmt(ans)}\\,\\mathrm{J}\\).`:`\\(LI=${nfmt(ans)}\\,\\mathrm{Wb}\\,turns\\).`)
  }
}
function makeEmExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(300,1200),ell=ri(10,40)*.01,I0=rand(.2,2),mu0=4*Math.PI*1e-7,ans=v?mu0*N0/ell:mu0*N0*I0/ell;return qNum(E,title,v?`A solenoid has \\(${N0}\\) turns over length \\(${ell}\\,\\mathrm{m}\\). Find \\(B/I\\).`:`A solenoid has \\(${N0}\\) turns over length \\(${ell}\\,\\mathrm{m}\\) and carries \\(${nfmt(I0)}\\,\\mathrm{A}\\). Find interior field.`,ans,v?`\\(B/I=\\mu_0N/\\ell=${nfmt(ans)}\\,\\mathrm{T}/A\\).`:`\\(B=\\mu_0NI/\\ell=${nfmt(ans)}\\,\\mathrm{T}\\).`)
  }
}
function makeEmExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(50,500),A0=ri(2,10)*1e-3,db=rand(.01,.2),dt=rand(.02,.2),ans=v?N0*A0*db/dt:N0*A0*db;return qNum(E,title,v?`A \\(${N0}\\)-turn coil of area \\(${nfmt(A0)}\\,\\mathrm{m}^2\\) has flux density changing by \\(${nfmt(db)}\\,\\mathrm{T}\\) in \\(${nfmt(dt)}\\,\\mathrm{s}\\). Find induced emf magnitude.`:`A \\(${N0}\\)-turn coil of area \\(${nfmt(A0)}\\,\\mathrm{m}^2\\) experiences a perpendicular field change \\(${nfmt(db)}\\,\\mathrm{T}\\). Find flux-linkage change.`,ans,v?`\\(|\\mathcal E|=NA\\Delta B/\\Delta t=${nfmt(ans)}\\,\\mathrm{V}\\).`:`\\(\\Delta(N\\Phi)=NA\\Delta B=${nfmt(ans)}\\,\\mathrm{Wb}\\,turns\\).`)
  }
}
function makeEmExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const e=pick([2,3,4,5]),eps=8.8541878128e-12,A0=ri(2,8)*1e-3,d=ri(1,4)*1e-3,V0=ri(5,20),C0=e*eps*A0/d,ans=v?.5*C0*V0*V0:C0*V0;return qNum(E,title,v?`A dielectric capacitor with relative permittivity \\(${e}\\), area \\(${nfmt(A0)}\\,\\mathrm{m}^2\\), gap \\(${nfmt(d)}\\,\\mathrm{m}\\), and voltage \\(${V0}\\,\\mathrm{V}\\) stores how much energy?`:`A dielectric capacitor has relative permittivity \\(\\epsilon_r=${e}\\), area \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\), gap \\(d=${nfmt(d)}\\,\\mathrm{m}\\), and voltage \\(V=${V0}\\,\\mathrm{V}\\). Find charge at \\(${V0}\\,\\mathrm{V}\\).`,ans,v?`\\(C=\\epsilon_r\\epsilon_0A/d\\), \\(U=CV^2/2=${nfmt(ans)}\\,\\mathrm{J}\\).`:`\\(Q=CV=${nfmt(ans)}\\,\\mathrm{C}\\).`)
  }
}
function makeEmExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const qMicro=ri(2,9),q=PrecisionDecimal.from(String(qMicro)).times('1e-6'),V0=ri(5,40),ans=v?q.times(String(V0)).toNumber():qMicro;return qNum(E,title,v?`A charge \\(${qMicro}\\,\\mu\\mathrm{C}\\) moves through potential difference \\(${V0}\\,\\mathrm{V}\\). Find energy change magnitude.`:`A charge is given by \\(q=${nfmt(q)}\\,\\mathrm{C}\\). Express the charge in microcoulombs \\(\\mu\\mathrm{C}\\).`,ans,v?`\\(\\Delta U=q\\Delta V=${nfmt(ans)}\\,\\mathrm{J}\\).`:`\\(q=${nfmt(ans)}\\,\\mu\\mathrm{C}\\).`)
  }
}
function makeEmExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const c1=ri(2,10)*1e-6,c2=ri(2,10)*1e-6,ans=v?c1+c2:(c1*c2)/(c1+c2);return qNum(E,title,v?`Capacitors \\(${nfmt(c1*1e6)}\\,\\mu\\mathrm{F}\\) and \\(${nfmt(c2*1e6)}\\,\\mu\\mathrm{F}\\) are in parallel. Find equivalent capacitance.`:`Capacitors \\(C_1=${nfmt(c1*1e6)}\\,\\mu\\mathrm{F}\\) and \\(C_2=${nfmt(c2*1e6)}\\,\\mu\\mathrm{F}\\) are connected in series. Find equivalent capacitance.`,ans,v?`\\(C_{eq}=C_1+C_2=${nfmt(ans*1e6)}\\,\\mu\\mathrm{F}\\).`:`\\(C_{eq}=C_1C_2/(C_1+C_2)=${nfmt(ans*1e6)}\\,\\mu\\mathrm{F}\\).`)
  }
}
function makeEmExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const B0=rand(.1,.9),A0=ri(2,9)*.01,theta=pick([0,Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?B0*A0*Math.sin(theta):B0*A0*Math.cos(theta);return qNum(E,title,v?`A loop of area \\(${A0}\\,\\mathrm{m}^2\\) in \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) has angle \\(${nfmt(theta)}\\) between its normal and field. Find torque for current \\(I=1\\,\\mathrm{A}\\).`:`A loop has area \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\) in a field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). The angle between its normal and the field is \\(\\theta=${nfmt(theta)}\\,\\mathrm{rad}\\). Find magnetic flux.`,ans,v?`\\(\\tau=IAB\\sin\\theta=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}\\).`:`\\(\\Phi=BA\\cos\\theta=${nfmt(ans)}\\,\\mathrm{Wb}\\).`)
  }
}
function makeEmExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const E0=ri(10,100),H0=rand(.1,2),S0=roundSigNumber(E0*H0,3),ans=v?S0/E0:E0*H0;return qNum(E,title,v?`An electromagnetic wave has field magnitudes \\(E=${E0}\\,\\mathrm{V}/m\\) and \\(S=${nfmt(S0)}\\,\\mathrm{W}/m^2\\). Estimate magnetic-field intensity \\(H=S/E\\).`:`An electromagnetic wave has \\(E=${E0}\\,\\mathrm{V}/m\\), \\(H=${nfmt(H0)}\\,\\mathrm{A}/m\\). Find magnitude of Poynting vector \\(S=EH\\).`,ans,v?`\\(H=S/E=${nfmt(ans)}\\,\\mathrm{A}/m\\).`:`\\(S=EH=${nfmt(ans)}\\,\\mathrm{W}/m^2\\).`)
  }
}
function makeEmExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const mu0=4*Math.PI*1e-7,I1=ri(2,12),I2=ri(2,12),d=ri(2,10)*.01,ans=v?mu0*I1*I2/(2*Math.PI*d):mu0*I1*I2/(2*Math.PI);return qNum(E,title,v?`Parallel wires carry \\(${I1}\\,\\mathrm{A}\\) and \\(${I2}\\,\\mathrm{A}\\), separated by \\(${d}\\,\\mathrm{m}\\). Find force per unit length.`:`Two parallel wires carry currents \\(I_1=${I1}\\,\\mathrm{A}\\) and \\(I_2=${I2}\\,\\mathrm{A}\\), separated by \\(d=${d}\\,\\mathrm{m}\\). Find the coefficient \\(K\\) in \\(F/\\ell=K/d\\).`,ans,v?`\\(F/\\ell=\\mu_0I_1I_2/(2\\pi d)=${nfmt(ans)}\\,\\mathrm{N}/\\mathrm{m}\\).`:`\\(\\mu_0I_1I_2/(2\\pi)=${nfmt(ans)}\\,\\mathrm{N}\\).`)
  }
}
function makeEmExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,9)*1e-6,B0=rand(.1,.8),m=ri(2,8)*1e-3,ans=v?Math.abs(q)*B0/m:Math.abs(q)*B0/(2*Math.PI*m);return qNum(E,title,v?`A particle has \\(|q|=${nfmt(q)}\\,\\mathrm{C}\\), mass \\(${nfmt(m)}\\,\\mathrm{kg}\\), and is in \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find cyclotron angular frequency.`:`A particle has charge magnitude \\(|q|=${nfmt(q)}\\,\\mathrm{C}\\), mass \\(${nfmt(m)}\\,\\mathrm{kg}\\), and is in magnetic field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find its cyclotron frequency in Hz.`,ans,v?`\\(\\omega_c=|q|B/m=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(f_c=|q|B/(2\\pi m)=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeEmExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const R=ri(1,5),I=ri(1,6),V0=ri(3,24),ans=v?I*R:V0/R;return qNum(E,title,v?`A Hall sensor has output resistor \\(R=${R}\\,\\Omega\\) and current \\(${I}\\,\\mathrm{A}\\). Find the resistor voltage.`:`A circuit has \\(V=${V0}\\,\\mathrm{V}\\) across \\(R=${R}\\,\\Omega\\). Find current.`,ans,v?`\\(V=IR=${ans}\\,\\mathrm{V}\\).`:`\\(I=V/R=${nfmt(ans)}\\,\\mathrm{A}\\).`)
  }
}



/* Additional numbered numeric families, registered alongside the other families below. */
/* Category-local named numeric families 21–40 (formerly core seed templates). */
function makeEmFamily21(){
  let q1=ri(1,8),q2=ri(1,8),r=ri(1,5),ans=.009*q1*q2/(r*r);
  return qNum(E,'Coulomb force',`Charges \\(q_1=${q1}\\,\\mu\\mathrm{C}\\), \\(q_2=${q2}\\,\\mu\\mathrm{C}\\) are separated by \\(r=${r}\\,\\mathrm{m}\\). Find force magnitude in newtons using \\(k=9\\times10^9\\).`,ans,`\\(F=k|q_1q_2|/r^2=0.009(${q1})(${q2})/${r}^2=${nfmt(ans)}\\,\\mathrm{N}\\).`)
}

function makeEmFamily22(){
  let q=ri(1,12),r=ri(1,6),ans=9*q/(r*r);
  return qNum(E,'Point-charge electric field',`A point charge is \\(q=${q}\\,\\mathrm{nC}\\). Find electric-field magnitude at \\(r=${r}\\,\\mathrm{m}\\) using \\(k=9\\times10^9\\).`,ans,`\\(E=k|q|/r^2=9(${q})/${r}^2=${nfmt(ans)}\\,\\mathrm{N}/\\mathrm{C}\\).`)
}

function makeEmFamily23(){
  let q=ri(1,15),r=ri(1,8),ans=9*q/r;
  return qNum(E,'Point-charge potential',`A point charge is \\(q=${q}\\,\\mathrm{nC}\\). Find electric potential at \\(r=${r}\\,\\mathrm{m}\\).`,ans,`\\(V=kq/r=9(${q})/${r}=${nfmt(ans)}\\,\\mathrm{V}\\).`)
}

function makeEmFamily24(){
  let q=ri(1,15),field=ri(100,2000),ans=q*field*1e-6;
  return qNum(E,'Electric force',`A charge of \\(q=${q}\\,\\mu\\mathrm{C}\\) is in a uniform field \\(E=${field}\\,\\mathrm{N}/\\mathrm{C}\\). Find force magnitude in newtons.`,ans,`\\(F=|q|E=${q}\\times10^{-6}(${field})=${nfmt(ans)}\\,\\mathrm{N}\\).`)
}

function makeEmFamily25(){
  let q=ri(2,60),v=ri(2,24),ans=q/v;
  return qNum(E,'Capacitance',`A capacitor stores \\(Q=${q}\\,\\mu\\mathrm{C}\\) at \\(V=${v}\\,\\mathrm{V}\\). Find capacitance in \\(\\mu\\mathrm{F}\\).`,ans,`\\(C=Q/V=${q}/${v}=${nfmt(ans)}\\,\\mu\\mathrm{F}\\).`)
}

function makeEmFamily26(){
  let area=rand(.1,1.2),d=rand(.001,.01),ans=8.854*area/d;
  return qNum(E,'Parallel-plate capacitance',`Air-filled parallel plates have area \\(A=${nfmt(area)}\\,\\mathrm{m}^2\\) and gap \\(d=${nfmt(d)}\\,\\mathrm{m}\\). Estimate capacitance in pF using \\(\\epsilon_0=8.854\\,pF/m\\).`,ans,`\\(C=\\epsilon_0A/d=8.854(${nfmt(area)})/${nfmt(d)}=${nfmt(ans)}\\,pF\\).`)
}

function makeEmFamily27(){
  let c=ri(2,80),v=ri(2,30),ans=.5*c*v*v;
  return qNum(E,'Capacitor energy',`A \\(C=${c}\\,\\mu\\mathrm{F}\\) capacitor is charged to \\(V=${v}\\,\\mathrm{V}\\). Find stored energy in \\(\\mu\\mathrm{J}\\).`,ans,`\\(W=\\frac12CV^2=0.5(${c})(${v}^2)=${nfmt(ans)}\\,\\mu\\mathrm{J}\\).`)
}

function makeEmFamily28(){
  let i=ri(1,20),r=rand(.02,.2),ans=.2*i/r;
  return qNum(E,'Long-wire magnetic field',`A long straight wire carries \\(I=${i}\\,\\mathrm{A}\\). Find magnetic field at \\(r=${nfmt(r)}\\,\\mathrm{m}\\) in \\(\\mu\\mathrm{T}\\), using \\(B=\\mu_0I/(2\\pi r)\\).`,ans,`In microtesla, \\(B=0.2I/r=0.2(${i})/${nfmt(r)}=${nfmt(ans)}\\,\\mu\\mathrm{T}\\).`)
}

function makeEmFamily29(){
  let q=ri(1,8),v=ri(2,20),b=ri(1,9),theta=ri(20,90),ans=q*v*b*Math.sin(theta*Math.PI/180);
  return qNum(E,'Magnetic force on charge',`A charge \\(q=${q}\\,\\mu\\mathrm{C}\\) moves at \\(v=${v}\\,\\mathrm{m}/\\mathrm{s}\\) in \\(B=${b}\\,\\mathrm{m}T\\) at angle \\(\\theta=${theta}^\\circ\\). Find force in nN.`,ans,`\\(F=qvB\\sin\\theta=${q}(${v})(${b})\\sin(${theta}^\\circ)=${nfmt(ans)}\\,nN\\).`)
}

function makeEmFamily30(){
  let b=ri(1,15),i=ri(1,12),l=rand(.2,3),ans=b*i*l;
  return qNum(E,'Magnetic force on wire',`A wire of length \\(L=${nfmt(l)}\\,\\mathrm{m}\\) carries \\(I=${i}\\,\\mathrm{A}\\) perpendicular to \\(B=${b}\\,\\mathrm{m}T\\). Find force in mN.`,ans,`\\(F=BIL=${b}(${i})(${nfmt(l)})=${nfmt(ans)}\\,\\mathrm{m}N\\).`)
}

function makeEmFamily31(){
  let b=ri(1,20),area=rand(.1,2),theta=ri(0,80),ans=b*area*Math.cos(theta*Math.PI/180);
  return qNum(E,'Magnetic flux',`A uniform field \\(B=${b}\\,\\mathrm{m}T\\) passes through area \\(A=${nfmt(area)}\\,\\mathrm{m}^2\\); the angle with the surface normal is \\(\\theta=${theta}^\\circ\\). Find flux in mWb.`,ans,`\\(\\Phi=BA\\cos\\theta=${b}(${nfmt(area)})\\cos(${theta}^\\circ)=${nfmt(ans)}\\,\\mathrm{m}Wb\\).`)
}

function makeEmFamily32(){
  let n=ri(10,300),dphi=rand(.1,8),dt=rand(.02,.5),ans=n*dphi/dt;
  return qNum(E,'Faraday induced emf',`A coil has \\(N=${n}\\) turns and flux changes by \\(\\Delta\\Phi=${nfmt(dphi)}\\,\\mathrm{m}Wb\\) in \\(\\Delta t=${nfmt(dt)}\\,\\mathrm{s}\\). Find induced emf magnitude in mV.`,ans,`\\(|\\mathcal E|=N\\Delta\\Phi/\\Delta t=${n}(${nfmt(dphi)})/${nfmt(dt)}=${nfmt(ans)}\\,\\mathrm{m}V\\).`)
}

function makeEmFamily33(){
  let r=ri(10,100),xl=ri(5,90),ans=Math.hypot(r,xl);
  return qNum(E,'Series RL impedance',`A series RL circuit has \\(R=${r}\\,\\Omega\\) and inductive reactance \\(X_L=${xl}\\,\\Omega\\). Find impedance magnitude.`,ans,`\\(|Z|=\\sqrt{R^2+X_L^2}=\\sqrt{${r}^2+${xl}^2}=${nfmt(ans)}\\,\\Omega\\).`)
}

function makeEmFamily34(){
  let l=ri(1,20),c=ri(1,30),ans=1/(2*Math.PI*Math.sqrt(l*c));
  return qNum(E,'LC resonance',`An LC circuit has \\(L=${l}\\,\\mu\\mathrm{H}\\) and \\(C=${c}\\,\\mu\\mathrm{F}\\). Find resonant frequency in MHz.`,ans,`\\(f_0=1/(2\\pi\\sqrt{LC})=${nfmt(ans)}\\,MHz\\) for L in µH and C in µF.`)
}

function makeEmFamily35(){
  let f=ri(20,900),ans=300/f;
  return qNum(E,'RF wavelength',`An EM wave has frequency \\(f=${f}\\,MHz\\). Find its free-space wavelength in meters.`,ans,`\\(\\lambda=c/f=300/${f}=${nfmt(ans)}\\,\\mathrm{m}\\).`)
}

function makeEmFamily36(){
  let e=ri(10,100),ans=e*e/377;
  return qNum(E,'Plane-wave power density',`A free-space EM wave has RMS electric field \\(E=${e}\\,\\mathrm{V}/m\\). Estimate average power density using intrinsic impedance \\(\\eta_0=377\\,\\Omega\\).`,ans,`\\(S=E^2/\\eta_0=${e}^2/377=${nfmt(ans)}\\,\\mathrm{W}/m^2\\).`)
}

function makeEmFamily37(){
  let c=ri(2,80),c0=ri(1,c),ans=c/c0;
  return qNum(E,'Relative permittivity',`A dielectric capacitor has capacitance \\(C=${c}\\,pF\\) versus air capacitance \\(C_0=${c0}\\,pF\\). Estimate relative permittivity.`,ans,`\\(\\epsilon_r=C/C_0=${c}/${c0}=${nfmt(ans)}\\).`)
}

function makeEmFamily38(){
  let c1=ri(2,30),c2=ri(2,30),c3=ri(2,30),ans=1/(1/c1+1/c2+1/c3);
  return qNum(E,'Series capacitors',`Three capacitors \\(${c1}\\,\\mu\\mathrm{F}\\), \\(${c2}\\,\\mu\\mathrm{F}\\), and \\(${c3}\\,\\mu\\mathrm{F}\\) are connected in series. Find equivalent capacitance in µF.`,ans,`\\(1/C_{eq}=1/${c1}+1/${c2}+1/${c3}\\), so \\(C_{eq}=${nfmt(ans)}\\,\\mu\\mathrm{F}\\).`)
}

function makeEmFamily39(){
  let r=ri(10,100),x=ri(5,100),ans=r/Math.hypot(r,x);
  return qNum(E,'Series RL power factor',`A series RL load has \\(R=${r}\\,\\Omega\\), \\(X_L=${x}\\,\\Omega\\). Find power factor \\(R/|Z|\\).`,ans,`\\(pf=R/\\sqrt{R^2+X_L^2}=${nfmt(ans)}\\).`)
}

function makeEmFamily40(){
  let q=ri(1,20),ans=q/8.854;
  return qNum(E,'Gauss law electric flux',`A closed surface encloses charge \\(q=${q}\\,\\mathrm{nC}\\). Find electric flux \\(\\Phi_E=q/\\epsilon_0\\) in \\(10^3 N\\cdot m^2/C\\), using \\(\\epsilon_0=8.854\\times10^{-12}\\,\\mathrm{F}/m\\).`,ans,`\\(\\Phi_E=q/\\epsilon_0=${q}\\times10^{-9}/(8.854\\times10^{-12})=${nfmt(ans)}\\times10^3\\,\\mathrm{N}\\cdot m^2/C\\).`)
}

function makeEmScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      if(fam===0){const turns=ri(50,300),current=ri(1,8),area=ri(2,30)/10000,ans=turns*current*area;return attachDiagram(qNum(E,`Magnetic dipole moment ${variant}`,`A ${turns}-turn coil carries \\(I=${current}\\,\\mathrm{A}\\) and encloses area \\(A=${nfmt(area)}\\,\\mathrm{m}^2\\). Find magnetic dipole moment magnitude \\(m=NIA\\).`,ans,`\\(m=NIA=${turns}(${current})(${nfmt(area)})=${nfmt(ans)}\\,\\mathrm{A}\\cdot m^2\\).`),'magnetic','A multi-turn planar current loop creates a magnetic dipole moment normal to the loop; the diagram marks current I and moment vector m.')}
    if(fam===1){const moment=ri(2,20)/10,B0=ri(2,15)/10,angle=pick([30,45,60,90]),ans=moment*B0*Math.sin(angle*Math.PI/180);return attachDiagram(qNum(E,`Dipole torque ${variant}`,`A magnetic dipole has moment \\(m=${nfmt(moment)}\\,\\mathrm{A}\\cdot m^2\\) in field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) at angle \\(\\theta=${angle}^\\circ\\). Find torque magnitude.`,ans,`\\(\\tau=mB\\sin\\theta=${nfmt(moment)}(${nfmt(B0)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,\\mathrm{N}\\cdot m\\).`),'magnetic','Magnetic moment vector m makes angle theta with magnetic field vector B; torque is perpendicular to both.')}
    if(fam===2){const L0=ri(10,120)/1000,I0=ri(1,8),ans=.5*L0*I0*I0;return qNum(E,`Magnetic energy ${variant}`,`An inductor of \\(L=${nfmt(L0)}\\,H\\) carries \\(I=${I0}\\,\\mathrm{A}\\). Find stored magnetic energy.`,ans,`\\(U_B=\\frac12LI^2=\\frac12(${nfmt(L0)})(${I0})^2=${nfmt(ans)}\\,\\mathrm{J}\\).`)}
    if(fam===3){const B0=ri(2,15)/1000,length=ri(5,50)/100,vel=ri(1,25),ans=B0*length*vel;return qNum(E,`Motional emf ${variant}`,`A conducting rod of length \\(\\ell=${nfmt(length)}\\,\\mathrm{m}\\) moves at \\(v=${vel}\\,\\mathrm{m}/\\mathrm{s}\\) perpendicular to \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find motional emf magnitude.`,ans,`\\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(length)})(${vel})=${nfmt(ans)}\\,\\mathrm{V}\\).`)}
    if(fam===4){const q0=ri(1,8),vx=ri(1,8),vy=ri(1,8),vz=ri(1,8),bx=ri(1,6),by=ri(1,6),bz=ri(1,6),fz=q0*(vx*by-vy*bx);return attachDiagram(qNum(E,`Three-dimensional Lorentz force ${variant}`,`A particle has charge \\(q=${q0}\\,\\mu\\mathrm{C}\\), velocity \\(\\mathbf v=\\langle${vx},${vy},${vz}\\rangle\\,\\mathrm{m}/\\mathrm{s}\\), and magnetic field \\(\\mathbf B=\\langle${bx},${by},${bz}\\rangle\\,\\mathrm{m}T\\). Find the \\(z\\)-component of \\(\\mathbf F=q(\\mathbf v\\times\\mathbf B)\\) in nN.`,fz,`\\(F_z=q(v_xB_y-v_yB_x)=${q0}(${vx}(${by})-${vy}(${bx}))=${fz}\\,nN\\). Here \\(\\mu\\mathrm{C}\\cdot m/s\\cdot mT\\) gives nN.`),'magnetic','Three-dimensional axes x, y, z show velocity vector v and magnetic-field vector B. The Lorentz force follows q times the cross product v × B.')}
    if(fam===5){const turns=ri(40,200),change=ri(2,20)/1000,dt=ri(5,40)/100,ans=turns*change/dt;return qNum(E,`Faraday induction ${variant}`,`Flux through each turn of a \\(${turns}\\)-turn coil changes by \\(${nfmt(change)}\\,\\mathrm{Wb}\\) in \\(${nfmt(dt)}\\,\\mathrm{s}\\). Find average induced emf magnitude.`,ans,`\\(|\\mathcal E|=N|\\Delta\\Phi|/\\Delta t=${turns}(${nfmt(change)})/${nfmt(dt)}=${nfmt(ans)}\\,\\mathrm{V}\\).`)}
    if(fam===6){const B0=ri(2,12)/10,I0=ri(1,8),ell=ri(5,40)/100,angle=pick([30,45,60,90]),ans=B0*I0*ell*Math.sin(angle*Math.PI/180);return attachDiagram(qNum(E,`Motor-wire torque force ${variant}`,`A wire segment of length \\(\\ell=${nfmt(ell)}\\,\\mathrm{m}\\) carries \\(I=${I0}\\,\\mathrm{A}\\) in a field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) at angle \\(${angle}^\\circ\\). Find magnetic force magnitude.`,ans,`\\(F=B I\\ell\\sin\\theta=${nfmt(B0)}(${I0})(${nfmt(ell)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,\\mathrm{N}\\).`),'magnetic','A current-carrying wire crosses a magnetic field; force direction is determined by I cross B and magnitude by B I length sin(theta).')}
    if(fam===7){const B0=ri(2,15)/1000,A0=ri(5,90)/10000,angle=pick([0,30,45,60,90]),ans=B0*A0*Math.cos(angle*Math.PI/180);return qNum(E,`Magnetic flux in 3D ${variant}`,`A flat loop of area \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\) is in field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). The angle between \\(\\mathbf B\\) and the surface normal is \\(${angle}^\\circ\\). Find flux.`,ans,`\\(\\Phi_B=BA\\cos\\theta=${nfmt(B0)}(${nfmt(A0)})\\cos(${angle}^\\circ)=${nfmt(ans)}\\,\\mathrm{Wb}\\).`)}
    if(fam===8){const mu0=4*Math.PI*1e-7,B0=ri(1,8)/1000,ans=B0*B0/(2*mu0);return qNum(E,`Magnetic energy density ${variant}`,`Find magnetic energy density for field magnitude \\(B=${nfmt(B0)}\\,\\mathrm{T}\\) using \\(u=B^2/(2\\mu_0)\\), where \\(\\mu_0=4\\pi\\times10^{-7}\\,H/m\\).`,ans,`\\(u=${nfmt(B0)}^2/(2(4\\pi\\times10^{-7}))=${nfmt(ans)}\\,\\mathrm{J}/m^3\\).`)}
    const N0=ri(30,150),B0=ri(1,9)/100,area=ri(3,25)/10000,vel=ri(2,15),length=ri(2,20)/100,ans=B0*length*vel;return qNum(E,`Induction in a moving conductor ${variant}`,`A rod of length \\(${nfmt(length)}\\,\\mathrm{m}\\) moves at \\(${vel}\\,\\mathrm{m}/\\mathrm{s}\\) perpendicular to a \\(${nfmt(B0)}\\,\\mathrm{T}\\) magnetic field. Find induced emf.`,ans,`\\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(length)})(${vel})=${nfmt(ans)}\\,\\mathrm{V}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.em = [numericEntry('em',"Coulomb force · family 21 (randomized variant)",'em-family-21',()=>makeEmFamily21()),
    numericEntry('em',"Electric field from a point charge · family 22 (randomized variant)",'em-family-22',()=>makeEmFamily22()),
    numericEntry('em',"Electric potential from a point charge · family 23 (randomized variant)",'em-family-23',()=>makeEmFamily23()),
    numericEntry('em',"Force on a charge in an electric field · family 24 (randomized variant)",'em-family-24',()=>makeEmFamily24()),
    numericEntry('em',"Capacitance from charge and voltage · family 25 (randomized variant)",'em-family-25',()=>makeEmFamily25()),
    numericEntry('em',"Parallel-plate capacitance · family 26 (randomized variant)",'em-family-26',()=>makeEmFamily26()),
    numericEntry('em',"Energy stored in a capacitor · family 27 (randomized variant)",'em-family-27',()=>makeEmFamily27()),
    numericEntry('em',"Magnetic field around a long wire · family 28 (randomized variant)",'em-family-28',()=>makeEmFamily28()),
    numericEntry('em',"Magnetic force on a moving charge · family 29 (randomized variant)",'em-family-29',()=>makeEmFamily29()),
    numericEntry('em',"Force on a current-carrying wire · family 30 (randomized variant)",'em-family-30',()=>makeEmFamily30()),
    numericEntry('em',"Magnetic flux · family 31 (randomized variant)",'em-family-31',()=>makeEmFamily31()),
    numericEntry('em',"Faraday induced emf · family 32 (randomized variant)",'em-family-32',()=>makeEmFamily32()),
    numericEntry('em',"Series RL impedance · family 33 (randomized variant)",'em-family-33',()=>makeEmFamily33()),
    numericEntry('em',"LC resonant frequency · family 34 (randomized variant)",'em-family-34',()=>makeEmFamily34()),
    numericEntry('em',"Wavelength of an RF wave · family 35 (randomized variant)",'em-family-35',()=>makeEmFamily35()),
    numericEntry('em',"Plane-wave power density · family 36 (randomized variant)",'em-family-36',()=>makeEmFamily36()),
    numericEntry('em',"Relative permittivity from capacitance · family 37 (randomized variant)",'em-family-37',()=>makeEmFamily37()),
    numericEntry('em',"Series capacitor equivalent · family 38 (randomized variant)",'em-family-38',()=>makeEmFamily38()),
    numericEntry('em',"Power factor of a series RL circuit · family 39 (randomized variant)",'em-family-39',()=>makeEmFamily39()),
    numericEntry('em',"Electric flux by Gauss law · family 40 (randomized variant)",'em-family-40',()=>makeEmFamily40()),
    numericEntry('em',"Point-charge force and field · family 01 (randomized variant)","em-family-01",()=>makeEmExpansionFamily01("Point-charge force and field · family 01 (randomized variant)")),
    numericEntry('em',"Point-charge potential and field · family 02 (randomized variant)","em-family-02",()=>makeEmExpansionFamily02("Point-charge potential and field · family 02 (randomized variant)")),
    numericEntry('em',"Electric flux through an area · family 03 (randomized variant)","em-family-03",()=>makeEmExpansionFamily03("Electric flux through an area · family 03 (randomized variant)")),
    numericEntry('em',"Parallel-plate capacitance and charge · family 04 (randomized variant)","em-family-04",()=>makeEmExpansionFamily04("Parallel-plate capacitance and charge · family 04 (randomized variant)")),
    numericEntry('em',"Capacitor energy and charge · family 05 (randomized variant)","em-family-05",()=>makeEmExpansionFamily05("Capacitor energy and charge · family 05 (randomized variant)")),
    numericEntry('em',"Charged-particle motion in a magnetic field · family 06 (randomized variant)","em-family-06",()=>makeEmExpansionFamily06("Charged-particle motion in a magnetic field · family 06 (randomized variant)")),
    numericEntry('em',"Force on a current-carrying wire · family 07 (randomized variant)","em-family-07",()=>makeEmExpansionFamily07("Force on a current-carrying wire · family 07 (randomized variant)")),
    numericEntry('em',"Motional emf and speed · family 08 (randomized variant)","em-family-08",()=>makeEmExpansionFamily08("Motional emf and speed · family 08 (randomized variant)")),
    numericEntry('em',"Magnetic dipole energy and torque · family 09 (randomized variant)","em-family-09",()=>makeEmExpansionFamily09("Magnetic dipole energy and torque · family 09 (randomized variant)")),
    numericEntry('em',"Inductor energy and flux linkage · family 10 (randomized variant)","em-family-10",()=>makeEmExpansionFamily10("Inductor energy and flux linkage · family 10 (randomized variant)")),
    numericEntry('em',"Solenoid magnetic field · family 11 (randomized variant)","em-family-11",()=>makeEmExpansionFamily11("Solenoid magnetic field · family 11 (randomized variant)")),
    numericEntry('em',"Induced emf and flux-linkage change · family 12 (randomized variant)","em-family-12",()=>makeEmExpansionFamily12("Induced emf and flux-linkage change · family 12 (randomized variant)")),
    numericEntry('em',"Dielectric capacitor energy and charge · family 13 (randomized variant)","em-family-13",()=>makeEmExpansionFamily13("Dielectric capacitor energy and charge · family 13 (randomized variant)")),
    numericEntry('em',"Charge energy and unit conversion · family 14 (randomized variant)","em-family-14",()=>makeEmExpansionFamily14("Charge energy and unit conversion · family 14 (randomized variant)")),
    numericEntry('em',"Series and parallel equivalent capacitance · family 15 (randomized variant)","em-family-15",()=>makeEmExpansionFamily15("Series and parallel equivalent capacitance · family 15 (randomized variant)")),
    numericEntry('em',"Current-loop torque and magnetic flux · family 16 (randomized variant)","em-family-16",()=>makeEmExpansionFamily16("Current-loop torque and magnetic flux · family 16 (randomized variant)")),
    numericEntry('em',"Poynting vector and field intensity · family 17 (randomized variant)","em-family-17",()=>makeEmExpansionFamily17("Poynting vector and field intensity · family 17 (randomized variant)")),
    numericEntry('em',"Parallel-wire force coefficient · family 18 (randomized variant)","em-family-18",()=>makeEmExpansionFamily18("Parallel-wire force coefficient · family 18 (randomized variant)")),
    numericEntry('em',"Cyclotron angular and ordinary frequency · family 19 (randomized variant)","em-family-19",()=>makeEmExpansionFamily19("Cyclotron angular and ordinary frequency · family 19 (randomized variant)")),
    numericEntry('em',"Ohm law voltage and current · family 20 (randomized variant)","em-family-20",()=>makeEmExpansionFamily20("Ohm law voltage and current · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(E,'Field scenario · Magnetic dipole in a coil','scenario-em-magnetic-dipole-coil',()=>makeEmScenario(0));
appendNumericRecipe(E,'Field scenario · Motional emf in a generator rail','scenario-em-motional-emf-rail',()=>{
  const B0=ri(2,9)/1000,ell=ri(10,60)/100,v=ri(1,15),ans=B0*ell*v;
  const q=qNum(E,'Field scenario · Motional emf in a generator rail',`A portable generator has a conducting rod of length \\(\\ell=${nfmt(ell)}\\,\\mathrm{m}\\) sliding at \\(v=${v}\\,\\mathrm{m}/\\mathrm{s}\\) perpendicular to a uniform magnetic field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). Find the motional emf magnitude.`,ans,`For perpendicular motion, \\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(ell)})(${v})=${nfmt(ans)}\\,\\mathrm{V}\\).`);
  return attachDiagram(q,'motionalEmf','A conducting rod of length ell slides to the right on two conducting rails through a uniform magnetic field directed into the page; the induced motional emf is B ell v.');
});
appendNumericRecipe(E,'Field scenario · Torque on a motor coil','scenario-em-motor-coil-torque',()=>{
  const N0=ri(30,180),I0=ri(1,6),area=ri(5,30)/10000,B0=ri(2,8)/10,angle=pick([30,45,60,90]),mu=N0*I0*area,ans=mu*B0*Math.sin(angle*Math.PI/180);
  const q=qNum(E,'Field scenario · Torque on a motor coil',`A motor coil has \\(N=${N0}\\) turns, current \\(I=${I0}\\,\\mathrm{A}\\), area per turn \\(A=${nfmt(area)}\\,\\mathrm{m}^2\\), and field \\(B=${nfmt(B0)}\\,\\mathrm{T}\\). The angle between its magnetic moment and the field is \\(\\theta=${angle}^\\circ\\). Find torque magnitude.`,ans,`\\(\\mu=NIA=${N0}(${I0})(${nfmt(area)})=${nfmt(mu)}\\,\\mathrm{A}\\cdot m^2\\). Then \\(\\tau=\\mu B\\sin\\theta=${nfmt(mu)}(${nfmt(B0)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,\\mathrm{N}\\cdot m\\).`);
  return attachDiagram(q,'motorTorque','A multi-turn motor coil has magnetic moment mu at angle theta to field B; torque magnitude is mu B sin(theta).');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('em','Additional · Magnetic force on a moving charge','em-topup-01',()=>{
  const q=ri(1,8),v=ri(2,15),B=rand(.1,1.5),ans=q*v*B;
  return qNum(E,'Magnetic force on a moving charge',`A charge of \\(${q}\\,\\mu\\mathrm{C}\\) moves at \\(${v}\\times10^3\\,\\mathrm{m}/\\mathrm{s}\\) perpendicular to a \\(${nfmt(B)}\\,\\mathrm{T}\\) magnetic field. Find force magnitude in mN.`,ans,`Using the stated scaled units, \\(F=|q|vB=${q}(${v})(${nfmt(B)})=${nfmt(ans)}\\,\\mathrm{m}N\\).`);
});
appendNumericRecipe('em','Additional · Electric field from force on a test charge','em-topup-02',()=>{
  const F=ri(2,30),q=ri(1,8),ans=F/q;
  return qNum(E,'Electric field from force on a test charge',`A test charge of \\(${q}\\,\\mu\\mathrm{C}\\) experiences an electric force of \\(${F}\\,\\mu\\mathrm{N}\\). Find the electric field magnitude in N/C.`,ans,`\\(E=F/q=${F}\\,\\mu\\mathrm{N}/${q}\\,\\mu\\mathrm{C}=${nfmt(ans)}\\,\\mathrm{N}/\\mathrm{C}\\).`);
});
appendNumericRecipe('em','Additional · Energy stored by a capacitor','em-topup-03',()=>{
  const Cmicro=ri(2,30),V=ri(2,25),ans=.5*Cmicro*V*V;
  return qNum(E,'Energy stored by a capacitor',`A capacitor has \\(C=${Cmicro}\\,\\mu\\mathrm{F}\\) and voltage \\(V=${V}\\,\\mathrm{V}\\). Find its stored energy in \\(\\mu\\mathrm{J}\\).`,ans,`\\(U=CV^2/2=${Cmicro}(${V})^2/2=${ans}\\,\\mu\\mathrm{J}\\).`);
});
appendNumericRecipe('em','Additional · Induced emf from changing magnetic flux','em-topup-04',()=>{
  const N=ri(20,300),delta=rand(.001,.05),dt=rand(.01,.3),ans=N*delta/dt;
  return qNum(E,'Induced emf from changing magnetic flux',`A coil has \\(${N}\\) turns. Flux per turn changes by \\(${nfmt(delta)}\\,\\mathrm{Wb}\\) in \\(${nfmt(dt)}\\,\\mathrm{s}\\). Find the induced emf magnitude.`,ans,`Faraday's law gives \\(|\\mathcal E|=N|\\Delta\\Phi|/\\Delta t=${N}(${nfmt(delta)})/${nfmt(dt)}=${nfmt(ans)}\\,\\mathrm{V}\\).`);
});
appendNumericRecipe('em','Additional · Electric potential energy of two charges','em-topup-05',()=>{
  const q1=ri(1,8),q2=ri(1,8),r=ri(2,10),ans=9*q1*q2/r;
  return qNum(E,'Electric potential energy of two charges',`Two positive charges \\(${q1}\\,\\mu\\mathrm{C}\\) and \\(${q2}\\,\\mu\\mathrm{C}\\) are separated by \\(${r}\\,\\mathrm{m}\\). Using the corresponding scaled Coulomb constant, find potential energy in mJ.`,ans,`\\(U=kq_1q_2/r\\). With microcoulombs and the requested scale, \\(U=9(${q1})(${q2})/${r}=${nfmt(ans)}\\,\\mathrm{m}J\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeEmScenarioSetup(){const q=ri(3,9),r1=2,r2=6,qt=2;return {category:NAMESPACE_EM,title:'Point-charge field survey',prompt:String.raw`A field probe surveys the electric field of an isolated positive point charge \(q=${q}\,\mathrm{nC}\) in air, modeled as free space. Two measurement stations are at distances \(r_1=${r1}\,\mathrm{m}\) and \(r_2=${r2}\,\mathrm{m}\). Use Coulomb's constant \(k_e=9.0\times10^9\,\mathrm{N\,m^2/C^2}\) and a small positive test charge \(q_t=${qt}\,\mathrm{nC}\). Assume the probe does not disturb the field.`,transferData:{q: q,r1: r1,r2: r2,k_e: 9e9,q_t: qt},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 120"><circle cx="75" cy="60" r="18" fill="none" stroke="currentColor" stroke-width="1.7"/><text x="75" y="64" text-anchor="middle" fill="currentColor" font-size="12">+q</text><circle cx="75" cy="60" r="34" fill="none" stroke="#2d83c5" stroke-width="1.4"/><circle cx="75" cy="60" r="52" fill="none" stroke="#2d83c5" stroke-width="1.4" stroke-dasharray="4 4"/><path d="M94 42 L119 23 M111 23 H119 V31" stroke="currentColor" stroke-width="1.4" fill="none"/><circle cx="230" cy="60" r="7" fill="#df9a30"/><text x="250" y="64" fill="currentColor" font-size="12">probe</text><text x="150" y="99" fill="currentColor" font-size="12">r₁, r₂</text></svg>`,alt:'A positive point charge is surrounded by radial equipotential-like rings, with measurement stations at distances r₁ and r₂.'}],custom:false};}
function makeEmScenarioA(dto={}){const d=dto?.['em-field-root-v18']||{};const q=Number(d.q),r=Number(d.r1),ans=9*q/r;const item=qNum(E,'Potential at the nearer station',String.raw`Find the electric potential \(V_1\) at the nearer station.`,ans,String.raw`\(V_1=k_eq/r_1=(9\times10^9)(q\times10^{-9})/r_1=9(${q})/${r}=${nfmt(ans)}\,\mathrm{V}\).`,'number',{quantUnit:'V'});item.transferData={V1: ans};return item;}
function makeEmScenarioB(dto={}){const d=dto?.['em-field-root-v18']||{};const q=Number(d.q),r=Number(d.r2),ans=9*q/(r*r);const item=qNum(E,'Field strength at the farther station',String.raw`Find the electric-field magnitude \(E_2\) at the farther station.`,ans,String.raw`\(E_2=k_eq/r_2^2=9q/r_2^2=9(${q})/${r}^2=${nfmt(ans)}\,\mathrm{N/C}\).`,'number',{quantUnit:'N/C'});item.transferData={E2: ans};return item;}
function makeEmScenarioBA(dto={}){const dt=dto||{};const E2=Number(dt['em-field-b-v18']?.E2),qt=Number(dt['em-field-root-v18']?.q_t),ans=qt*E2;const item=qNum(E,'Force on the test charge',String.raw`Calculate the force magnitude \(F_t\) acting on the small test charge at the farther station, in nanonewtons (nN).`,ans,String.raw`\(F_t=q_tE_2\). With \(q_t=${qt}\,\mathrm{nC}\), the numerical force in nN is \(${qt}(${nfmt(E2)})=${nfmt(ans)}\,\mathrm{nN}\).`,'number',{quantUnit:'nN'});item.transferData={F_t: ans};return item;}
function makeEmScenarioBB(dto={}){const dt=dto||{};const E2=Number(dt['em-field-b-v18']?.E2),r=Number(dt['em-field-root-v18']?.r2),qt=Number(dt['em-field-root-v18']?.q_t),V2=E2*r,ans=qt*V2;const item=qNum(E,'Potential energy of the test charge',String.raw`Find the electric potential energy \(U_t\) of the test charge at the farther station, in nanojoules (nJ).`,ans,String.raw`\(V_2=E_2r_2=${nfmt(E2)}(${r})=${nfmt(V2)}\,\mathrm{V}\). Thus \(U_t=q_tV_2=${qt}(${nfmt(V2)})=${nfmt(ans)}\,\mathrm{nJ}\).`,'number',{quantUnit:'nJ'});item.transferData={U_t: ans};return item;}
function registerEmScenarioTree(){
  const rootKey='em-field-root-v18',aKey='em-field-a-v18',bKey='em-field-b-v18',baKey='em-field-ba-v18',bbKey='em-field-bb-v18';
  setupRecipe(NAMESPACE_EM,'Electromagnetism · Point-charge survey tree',rootKey,makeEmScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_EM,'Em · Calculation A',aKey,makeEmScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_EM,'Em · Calculation B',bKey,makeEmScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_EM,'Em · Follow-up A',baKey,makeEmScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_EM,'Em · Follow-up B',bbKey,makeEmScenarioBB,3,{parentRecipeKey:bKey});
}
registerEmScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const EM_CONCEPT_CARDS = [
    [
      "Coulomb law",
      "The electrostatic force between point charges varies with their charge product and inversely with the square of their separation."
    ],
    [
      "Electric field",
      "Force per unit positive test charge at a point."
    ],
    [
      "Electric potential",
      "Electric potential energy per unit charge, defined up to a reference constant."
    ],
    [
      "Gauss law",
      "The net electric flux through a closed surface equals enclosed charge divided by permittivity."
    ],
    [
      "Permittivity",
      "A material parameter relating electric displacement to electric field in a linear medium."
    ],
    [
      "Capacitance",
      "The ratio of stored charge magnitude to the voltage between conductors."
    ],
    [
      "Dielectric",
      "An insulating material that can polarize in an applied electric field."
    ],
    [
      "Current density",
      "Electric current per unit cross-sectional area, represented locally as a vector."
    ],
    [
      "Ampere–Maxwell law",
      "The circulation of magnetic field is related to conduction current and changing electric displacement."
    ],
    [
      "Biot–Savart law",
      "A law giving the magnetic field contribution from a steady current element."
    ],
    [
      "Magnetic flux",
      "The surface integral of magnetic field through an oriented surface."
    ],
    [
      "Faraday law",
      "A changing magnetic flux induces an electromotive force around a circuit."
    ],
    [
      "Lenz law",
      "The induced effect opposes the change in magnetic flux that produces it."
    ],
    [
      "Inductance",
      "A circuit property relating magnetic flux linkage to current under a linear model."
    ],
    [
      "Displacement current",
      "The term associated with a changing electric displacement field in the Ampere–Maxwell law."
    ],
    [
      "Maxwell equations",
      "The set of field equations describing electric and magnetic fields and their sources."
    ],
    [
      "Poynting vector",
      "A vector giving electromagnetic energy-flux density and direction of energy transport."
    ],
    [
      "Boundary conditions",
      "Relations specifying how field components behave across an interface between materials."
    ],
    [
      "Wave impedance",
      "The ratio of electric-field magnitude to magnetic-field magnitude for a traveling electromagnetic wave."
    ],
    [
      "Polarization",
      "The orientation and time behavior of the electric-field vector of an electromagnetic wave."
    ],
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
      "Faraday law — extended concept",
      "The induced electromotive force around a closed path equals the negative time rate of change of magnetic flux through it."
    ],
    [
      "Lenz law — extended concept",
      "The direction of induced current opposes the change in magnetic flux that produces it."
    ],
    [
      "Magnetic flux — extended concept",
      "The surface integral of magnetic flux density B dotted with the oriented area element."
    ],
    [
      "Biot–Savart law — extended concept",
      "A relation used to calculate a magnetic field contribution from a current element."
    ],
    [
      "Ampere–Maxwell law — extended concept",
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
      "Inductance — extended concept",
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
      "Poynting vector — extended concept",
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
  ];
registerConceptGeneratorsForCategory(NAMESPACE_EM, EM_CONCEPT_CARDS);
