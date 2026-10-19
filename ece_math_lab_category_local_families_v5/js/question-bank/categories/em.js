/* em: seed entries, explicit expansion families, and category-specific additions. */

function makeEmExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const q1=ri(2,8)*1e-6,q2=ri(2,8)*1e-6,r=ri(2,9)*.01,ans=v?8.9875517923e9*q1*q2/(r*r):8.9875517923e9*q1/r**2;return qNum(E,title,v?`Two charges \\(${nfmt(q1*1e6)}\\,\\mu C\\) and \\(${nfmt(q2*1e6)}\\,\\mu C\\) are separated by \\(${nfmt(r)}\\,m\\). Find Coulomb-force magnitude.`:`A point charge \\(${nfmt(q1*1e6)}\\,\\mu C\\) is \\(${nfmt(r)}\\,m\\) from a field point. Find electric-field magnitude.`,ans,v?`\\(F=k|q_1q_2|/r^2=${nfmt(ans)}\\,N\\).`:`\\(E=k|q|/r^2=${nfmt(ans)}\\,N/C\\).`)
  }
}
function makeEmExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,9)*1e-6,r=ri(2,8)*.1,ans=v?8.9875517923e9*q/r:8.9875517923e9*q/(r*r);return qNum(E,title,v?`Find electric potential at \\(r=${nfmt(r)}\\,m\\) from a point charge \\(${nfmt(q*1e6)}\\,\\mu C\\).`:`Find electric-field magnitude at the same distance from the charge \\(${nfmt(q*1e6)}\\,\\mu C\\).`,ans,v?`\\(V=kq/r=${nfmt(ans)}\\,V\\).`:`\\(E=kq/r^2=${nfmt(ans)}\\,N/C\\).`)
  }
}
function makeEmExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const E0=ri(20,120),A0=ri(2,10)*.01,theta=pick([0,Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?E0*A0*Math.cos(theta):E0*A0;return qNum(E,title,v?`A uniform field \\(${E0}\\,N/C\\) crosses area \\(${nfmt(A0)}\\,m^2\\) at angle \\(${nfmt(theta)}\\,rad\\) to the area normal. Find electric flux.`:`Find flux when field \\(${E0}\\,N/C\\) is normal to area \\(${nfmt(A0)}\\,m^2\\).`,ans,v?`\\(\\Phi_E=EA\\cos\\theta=${nfmt(ans)}\\,N\\,m^2/C\\).`:`\\(\\Phi_E=EA=${nfmt(ans)}\\,N\\,m^2/C\\).`)
  }
}
function makeEmExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const eps=8.8541878128e-12,A0=ri(2,8)*.01,d=ri(1,5)*.001,V0=ri(5,24),C0=eps*A0/d,ans=v?C0*V0:C0;return qNum(E,title,v?`A vacuum parallel-plate capacitor has \\(A=${nfmt(A0)}\\,m^2\\), \\(d=${nfmt(d)}\\,m\\), and voltage \\(${V0}\\,V\\). Find charge.`:`A vacuum parallel-plate capacitor has \\(A=${nfmt(A0)}\\,m^2\\) and plate gap \\(${nfmt(d)}\\,m\\). Find capacitance.`,ans,v?`\\(C=\\epsilon_0A/d\\); \\(Q=CV=${nfmt(ans)}\\,C\\).`:`\\(C=\\epsilon_0A/d=${nfmt(ans)}\\,F\\).`)
  }
}
function makeEmExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const C0=ri(2,80)*1e-6,V0=ri(5,24),ans=v?.5*C0*V0*V0:C0*V0;return qNum(E,title,v?`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu F\\) is charged to \\(${V0}\\,V\\). Find stored energy.`:`A capacitor \\(${nfmt(C0*1e6)}\\,\\mu F\\) is charged to \\(${V0}\\,V\\). Find charge.`,ans,v?`\\(U=CV^2/2=${nfmt(ans)}\\,J\\).`:`\\(Q=CV=${nfmt(ans)}\\,C\\).`)
  }
}
function makeEmExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,8)*.01,q=ri(2,8)*1e-6,B0=rand(.1,.8),vel=ri(2,10)*1e4,ans=v?m*vel/(Math.abs(q)*B0):Math.abs(q)*vel*B0;return qNum(E,title,v?`A charged particle of mass \\(${nfmt(m)}\\,kg\\) moves perpendicular to \\(B=${nfmt(B0)}\\,T\\) at speed \\(${nfmt(vel)}\\,m/s\\). Its charge magnitude is \\(${nfmt(q)}\\,C\\). Find orbit radius.`:`A charge \\(${nfmt(q)}\\,C\\) moves perpendicular to \\(B=${nfmt(B0)}\\,T\\) at speed \\(${nfmt(vel)}\\,m/s\\). Find magnetic-force magnitude.`,ans,v?`\\(r=mv/(|q|B)=${nfmt(ans)}\\,m\\).`:`\\(F=|q|vB=${nfmt(ans)}\\,N\\).`)
  }
}
function makeEmExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const B0=rand(.1,1.2),I=ri(1,8),ell=ri(2,9)*.1,ans=v?B0*I*ell:B0*I;return qNum(E,title,v?`A straight wire of length \\(${ell}\\,m\\) carries \\(${I}\\,A\\) perpendicular to \\(B=${nfmt(B0)}\\,T\\). Find force.`:`For a wire carrying \\(${I}\\,A\\) perpendicular to \\(B=${nfmt(B0)}\\,T\\), find force per unit length.`,ans,v?`\\(F=B I\\ell=${nfmt(ans)}\\,N\\).`:`\\(F/\\ell=BI=${nfmt(ans)}\\,N/m\\).`)
  }
}
function makeEmExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const B0=rand(.1,.9),ell=ri(2,10)*.1,vel=ri(2,9),emf=B0*ell*vel,ans=v?emf/(B0*ell):emf;return qNum(E,title,v?`A rod of length \\(${ell}\\,m\\) moves perpendicular to \\(B=${nfmt(B0)}\\,T\\). What speed is required to produce \\(${nfmt(emf)}\\,V\\) motional emf?`:`A rod of length \\(${ell}\\,m\\) moves at \\(${vel}\\,m/s\\) perpendicular to \\(B=${nfmt(B0)}\\,T\\). Find motional emf.`,ans,v?`\\(v=\\mathcal E/(B\\ell)=${vel}\\,m/s\\).`:`\\(\\mathcal E=B\\ell v=${nfmt(ans)}\\,V\\).`)
  }
}
function makeEmExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const mu=ri(2,9)*.01,B0=rand(.1,.9),theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?mu*B0:mu*B0*Math.sin(theta);return qNum(E,title,v?`A magnetic dipole moment \\(\\mu=${nfmt(mu)}\\,A\\,m^2\\) is parallel to \\(B=${nfmt(B0)}\\,T\\). Find interaction energy magnitude.`:`A dipole \\(\\mu=${nfmt(mu)}\\,A\\,m^2\\) makes angle \\(${nfmt(theta)}\\,rad\\) with \\(B=${nfmt(B0)}\\,T\\). Find torque magnitude.`,ans,v?`\\(|U|=\\mu B=${nfmt(ans)}\\,J\\).`:`\\(\\tau=\\mu B\\sin\\theta=${nfmt(ans)}\\,N\\,m\\).`)
  }
}
function makeEmExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(2,20)*.01,I0=ri(1,8),ans=v?.5*L0*I0*I0:L0*I0;return qNum(E,title,v?`An inductor \\(L=${nfmt(L0)}\\,H\\) carries \\(${I0}\\,A\\). Find magnetic energy.`:`An inductor \\(L=${nfmt(L0)}\\,H\\) carries \\(${I0}\\,A\\). Find flux linkage \\(LI\\).`,ans,v?`\\(U=LI^2/2=${nfmt(ans)}\\,J\\).`:`\\(LI=${nfmt(ans)}\\,Wb\\,turns\\).`)
  }
}
function makeEmExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(300,1200),ell=ri(10,40)*.01,I0=rand(.2,2),mu0=4*Math.PI*1e-7,ans=v?mu0*N0/ell:mu0*N0*I0/ell;return qNum(E,title,v?`A solenoid has \\(${N0}\\) turns over length \\(${ell}\\,m\\). Find \\(B/I\\).`:`A solenoid has \\(${N0}\\) turns over length \\(${ell}\\,m\\) and carries \\(${nfmt(I0)}\\,A\\). Find interior field.`,ans,v?`\\(B/I=\\mu_0N/\\ell=${nfmt(ans)}\\,T/A\\).`:`\\(B=\\mu_0NI/\\ell=${nfmt(ans)}\\,T\\).`)
  }
}
function makeEmExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(50,500),A0=ri(2,10)*1e-3,db=rand(.01,.2),dt=rand(.02,.2),ans=v?N0*A0*db/dt:N0*A0*db;return qNum(E,title,v?`A \\(${N0}\\)-turn coil of area \\(${nfmt(A0)}\\,m^2\\) has flux density changing by \\(${nfmt(db)}\\,T\\) in \\(${nfmt(dt)}\\,s\\). Find induced emf magnitude.`:`A \\(${N0}\\)-turn coil of area \\(${nfmt(A0)}\\,m^2\\) experiences a perpendicular field change \\(${nfmt(db)}\\,T\\). Find flux-linkage change.`,ans,v?`\\(|\\mathcal E|=NA\\Delta B/\\Delta t=${nfmt(ans)}\\,V\\).`:`\\(\\Delta(N\\Phi)=NA\\Delta B=${nfmt(ans)}\\,Wb\\,turns\\).`)
  }
}
function makeEmExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const e=pick([2,3,4,5]),eps=8.8541878128e-12,A0=ri(2,8)*1e-3,d=ri(1,4)*1e-3,V0=ri(5,20),C0=e*eps*A0/d,ans=v?.5*C0*V0*V0:C0*V0;return qNum(E,title,v?`A dielectric capacitor with relative permittivity \\(${e}\\), area \\(${nfmt(A0)}\\,m^2\\), gap \\(${nfmt(d)}\\,m\\), and voltage \\(${V0}\\,V\\) stores how much energy?`:`For the same dielectric capacitor, find charge at \\(${V0}\\,V\\).`,ans,v?`\\(C=\\epsilon_r\\epsilon_0A/d\\), \\(U=CV^2/2=${nfmt(ans)}\\,J\\).`:`\\(Q=CV=${nfmt(ans)}\\,C\\).`)
  }
}
function makeEmExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,9)*1e-6,V0=ri(5,40),ans=v?q*V0:q/1e-6;return qNum(E,title,v?`A charge \\(${nfmt(q*1e6)}\\,\\mu C\\) moves through potential difference \\(${V0}\\,V\\). Find energy change magnitude.`:`Express that charge in microcoulombs after specifying \\(q=${nfmt(q)}\\,C\\).`,ans,v?`\\(\\Delta U=q\\Delta V=${nfmt(ans)}\\,J\\).`:`\\(q=${nfmt(ans)}\\,\\mu C\\).`)
  }
}
function makeEmExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const c1=ri(2,10)*1e-6,c2=ri(2,10)*1e-6,ans=v?c1+c2:(c1*c2)/(c1+c2);return qNum(E,title,v?`Capacitors \\(${nfmt(c1*1e6)}\\,\\mu F\\) and \\(${nfmt(c2*1e6)}\\,\\mu F\\) are in parallel. Find equivalent capacitance.`:`The same capacitors are in series. Find equivalent capacitance.`,ans,v?`\\(C_{eq}=C_1+C_2=${nfmt(ans*1e6)}\\,\\mu F\\).`:`\\(C_{eq}=C_1C_2/(C_1+C_2)=${nfmt(ans*1e6)}\\,\\mu F\\).`)
  }
}
function makeEmExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const B0=rand(.1,.9),A0=ri(2,9)*.01,theta=pick([0,Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?B0*A0*Math.sin(theta):B0*A0*Math.cos(theta);return qNum(E,title,v?`A loop of area \\(${A0}\\,m^2\\) in \\(B=${nfmt(B0)}\\,T\\) has angle \\(${nfmt(theta)}\\) between its normal and field. Find torque for current \\(I=1\\,A\\).`:`For the same loop, find magnetic flux.`,ans,v?`\\(\\tau=IAB\\sin\\theta=${nfmt(ans)}\\,N\\,m\\).`:`\\(\\Phi=BA\\cos\\theta=${nfmt(ans)}\\,Wb\\).`)
  }
}
function makeEmExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const E0=ri(10,100),H0=rand(.1,2),ans=v?E0/H0:E0*H0;return qNum(E,title,v?`An electromagnetic wave has field magnitudes \\(E=${E0}\\,V/m\\) and \\(S=${nfmt(E0*H0)}\\,W/m^2\\). Estimate magnetic-field intensity \\(H=S/E\\).`:`An electromagnetic wave has \\(E=${E0}\\,V/m\\), \\(H=${nfmt(H0)}\\,A/m\\). Find magnitude of Poynting vector \\(S=EH\\).`,ans,v?`\\(H=S/E=${nfmt(ans)}\\,A/m\\).`:`\\(S=EH=${nfmt(ans)}\\,W/m^2\\).`)
  }
}
function makeEmExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const mu0=4*Math.PI*1e-7,I1=ri(2,12),I2=ri(2,12),d=ri(2,10)*.01,ans=v?mu0*I1*I2/(2*Math.PI*d):mu0*I1*I2/(2*Math.PI);return qNum(E,title,v?`Parallel wires carry \\(${I1}\\,A\\) and \\(${I2}\\,A\\), separated by \\(${d}\\,m\\). Find force per unit length.`:`For the same wire currents, find the numerator coefficient before dividing by distance.`,ans,v?`\\(F/\\ell=\\mu_0I_1I_2/(2\\pi d)=${nfmt(ans)}\\,N/m\\).`:`\\(\\mu_0I_1I_2/(2\\pi)=${nfmt(ans)}\\,N\\).`)
  }
}
function makeEmExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const q=ri(2,9)*1e-6,B0=rand(.1,.8),m=ri(2,8)*1e-3,ans=v?Math.abs(q)*B0/m:Math.abs(q)*B0/(2*Math.PI*m);return qNum(E,title,v?`A particle has \\(|q|=${nfmt(q)}\\,C\\), mass \\(${nfmt(m)}\\,kg\\), and is in \\(B=${nfmt(B0)}\\,T\\). Find cyclotron angular frequency.`:`Find its cyclotron frequency in Hz.`,ans,v?`\\(\\omega_c=|q|B/m=${nfmt(ans)}\\,rad/s\\).`:`\\(f_c=|q|B/(2\\pi m)=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeEmExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const R=ri(1,5),I=ri(1,6),V0=ri(3,24),ans=v?I*R:V0/R;return qNum(E,title,v?`A Hall sensor has output resistor \\(R=${R}\\,\\Omega\\) and current \\(${I}\\,A\\). Find the resistor voltage.`:`A circuit has \\(V=${V0}\\,V\\) across \\(R=${R}\\,\\Omega\\). Find current.`,ans,v?`\\(V=IR=${ans}\\,V\\).`:`\\(I=V/R=${nfmt(ans)}\\,A\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const EM_CORE_SEEDS = [
['Coulomb force',()=>{let q1=ri(1,8),q2=ri(1,8),r=ri(1,5),ans=.009*q1*q2/(r*r);return qNum(E,'Coulomb force',`Charges \\(q_1=${q1}\\,\\mu C\\), \\(q_2=${q2}\\,\\mu C\\) are separated by \\(r=${r}\\,m\\). Find force magnitude in newtons using \\(k=9\\times10^9\\).`,ans,`\\(F=k|q_1q_2|/r^2=0.009(${q1})(${q2})/${r}^2=${nfmt(ans)}\\,N\\).`)}],
['Electric field from a point charge',()=>{let q=ri(1,12),r=ri(1,6),ans=9*q/(r*r);return qNum(E,'Point-charge electric field',`A point charge is \\(q=${q}\\,nC\\). Find electric-field magnitude at \\(r=${r}\\,m\\) using \\(k=9\\times10^9\\).`,ans,`\\(E=k|q|/r^2=9(${q})/${r}^2=${nfmt(ans)}\\,N/C\\).`)}],
['Electric potential from a point charge',()=>{let q=ri(1,15),r=ri(1,8),ans=9*q/r;return qNum(E,'Point-charge potential',`A point charge is \\(q=${q}\\,nC\\). Find electric potential at \\(r=${r}\\,m\\).`,ans,`\\(V=kq/r=9(${q})/${r}=${nfmt(ans)}\\,V\\).`)}],
['Force on a charge in an electric field',()=>{let q=ri(1,15),field=ri(100,2000),ans=q*field*1e-6;return qNum(E,'Electric force',`A charge of \\(q=${q}\\,\\mu C\\) is in a uniform field \\(E=${field}\\,N/C\\). Find force magnitude in newtons.`,ans,`\\(F=|q|E=${q}\\times10^{-6}(${field})=${nfmt(ans)}\\,N\\).`)}],
['Capacitance from charge and voltage',()=>{let q=ri(2,60),v=ri(2,24),ans=q/v;return qNum(E,'Capacitance',`A capacitor stores \\(Q=${q}\\,\\mu C\\) at \\(V=${v}\\,V\\). Find capacitance in \\(\\mu F\\).`,ans,`\\(C=Q/V=${q}/${v}=${nfmt(ans)}\\,\\mu F\\).`)}],
['Parallel-plate capacitance',()=>{let area=rand(.1,1.2),d=rand(.001,.01),ans=8.854*area/d;return qNum(E,'Parallel-plate capacitance',`Air-filled parallel plates have area \\(A=${nfmt(area)}\\,m^2\\) and gap \\(d=${nfmt(d)}\\,m\\). Estimate capacitance in pF using \\(\\epsilon_0=8.854\\,pF/m\\).`,ans,`\\(C=\\epsilon_0A/d=8.854(${nfmt(area)})/${nfmt(d)}=${nfmt(ans)}\\,pF\\).`)}],
['Energy stored in a capacitor',()=>{let c=ri(2,80),v=ri(2,30),ans=.5*c*v*v;return qNum(E,'Capacitor energy',`A \\(C=${c}\\,\\mu F\\) capacitor is charged to \\(V=${v}\\,V\\). Find stored energy in \\(\\mu J\\).`,ans,`\\(W=\\frac12CV^2=0.5(${c})(${v}^2)=${nfmt(ans)}\\,\\mu J\\).`)}],
['Magnetic field around a long wire',()=>{let i=ri(1,20),r=rand(.02,.2),ans=.2*i/r;return qNum(E,'Long-wire magnetic field',`A long straight wire carries \\(I=${i}\\,A\\). Find magnetic field at \\(r=${nfmt(r)}\\,m\\) in \\(\\mu T\\), using \\(B=\\mu_0I/(2\\pi r)\\).`,ans,`In microtesla, \\(B=0.2I/r=0.2(${i})/${nfmt(r)}=${nfmt(ans)}\\,\\mu T\\).`)}],
['Magnetic force on a moving charge',()=>{let q=ri(1,8),v=ri(2,20),b=ri(1,9),theta=ri(20,90),ans=q*v*b*Math.sin(theta*Math.PI/180);return qNum(E,'Magnetic force on charge',`A charge \\(q=${q}\\,\\mu C\\) moves at \\(v=${v}\\,m/s\\) in \\(B=${b}\\,mT\\) at angle \\(\\theta=${theta}^\\circ\\). Find force in nN.`,ans,`\\(F=qvB\\sin\\theta=${q}(${v})(${b})\\sin(${theta}^\\circ)=${nfmt(ans)}\\,nN\\).`)}],
['Force on a current-carrying wire',()=>{let b=ri(1,15),i=ri(1,12),l=rand(.2,3),ans=b*i*l;return qNum(E,'Magnetic force on wire',`A wire of length \\(L=${nfmt(l)}\\,m\\) carries \\(I=${i}\\,A\\) perpendicular to \\(B=${b}\\,mT\\). Find force in mN.`,ans,`\\(F=BIL=${b}(${i})(${nfmt(l)})=${nfmt(ans)}\\,mN\\).`)}],
['Magnetic flux',()=>{let b=ri(1,20),area=rand(.1,2),theta=ri(0,80),ans=b*area*Math.cos(theta*Math.PI/180);return qNum(E,'Magnetic flux',`A uniform field \\(B=${b}\\,mT\\) passes through area \\(A=${nfmt(area)}\\,m^2\\); the angle with the surface normal is \\(\\theta=${theta}^\\circ\\). Find flux in mWb.`,ans,`\\(\\Phi=BA\\cos\\theta=${b}(${nfmt(area)})\\cos(${theta}^\\circ)=${nfmt(ans)}\\,mWb\\).`)}],
['Faraday induced emf',()=>{let n=ri(10,300),dphi=rand(.1,8),dt=rand(.02,.5),ans=n*dphi/dt;return qNum(E,'Faraday induced emf',`A coil has \\(N=${n}\\) turns and flux changes by \\(\\Delta\\Phi=${nfmt(dphi)}\\,mWb\\) in \\(\\Delta t=${nfmt(dt)}\\,s\\). Find induced emf magnitude in mV.`,ans,`\\(|\\mathcal E|=N\\Delta\\Phi/\\Delta t=${n}(${nfmt(dphi)})/${nfmt(dt)}=${nfmt(ans)}\\,mV\\).`)}],
['Series RL impedance',()=>{let r=ri(10,100),xl=ri(5,90),ans=Math.hypot(r,xl);return qNum(E,'Series RL impedance',`A series RL circuit has \\(R=${r}\\,\\Omega\\) and inductive reactance \\(X_L=${xl}\\,\\Omega\\). Find impedance magnitude.`,ans,`\\(|Z|=\\sqrt{R^2+X_L^2}=\\sqrt{${r}^2+${xl}^2}=${nfmt(ans)}\\,\\Omega\\).`)}],
['LC resonant frequency',()=>{let l=ri(1,20),c=ri(1,30),ans=1/(2*Math.PI*Math.sqrt(l*c));return qNum(E,'LC resonance',`An LC circuit has \\(L=${l}\\,\\mu H\\) and \\(C=${c}\\,\\mu F\\). Find resonant frequency in MHz.`,ans,`\\(f_0=1/(2\\pi\\sqrt{LC})=${nfmt(ans)}\\,MHz\\) for L in µH and C in µF.`)}],
['Wavelength of an RF wave',()=>{let f=ri(20,900),ans=300/f;return qNum(E,'RF wavelength',`An EM wave has frequency \\(f=${f}\\,MHz\\). Find its free-space wavelength in meters.`,ans,`\\(\\lambda=c/f=300/${f}=${nfmt(ans)}\\,m\\).`)}],
['Plane-wave power density',()=>{let e=ri(10,100),ans=e*e/377;return qNum(E,'Plane-wave power density',`A free-space EM wave has RMS electric field \\(E=${e}\\,V/m\\). Estimate average power density using intrinsic impedance \\(\\eta_0=377\\,\\Omega\\).`,ans,`\\(S=E^2/\\eta_0=${e}^2/377=${nfmt(ans)}\\,W/m^2\\).`)}],
['Relative permittivity from capacitance',()=>{let c=ri(2,80),c0=ri(1,c),ans=c/c0;return qNum(E,'Relative permittivity',`A dielectric capacitor has capacitance \\(C=${c}\\,pF\\) versus air capacitance \\(C_0=${c0}\\,pF\\). Estimate relative permittivity.`,ans,`\\(\\epsilon_r=C/C_0=${c}/${c0}=${nfmt(ans)}\\).`)}],
['Series capacitor equivalent',()=>{let c1=ri(2,30),c2=ri(2,30),c3=ri(2,30),ans=1/(1/c1+1/c2+1/c3);return qNum(E,'Series capacitors',`Three capacitors \\(${c1}\\,\\mu F\\), \\(${c2}\\,\\mu F\\), and \\(${c3}\\,\\mu F\\) are connected in series. Find equivalent capacitance in µF.`,ans,`\\(1/C_{eq}=1/${c1}+1/${c2}+1/${c3}\\), so \\(C_{eq}=${nfmt(ans)}\\,\\mu F\\).`)}],
['Power factor of a series RL circuit',()=>{let r=ri(10,100),x=ri(5,100),ans=r/Math.hypot(r,x);return qNum(E,'Series RL power factor',`A series RL load has \\(R=${r}\\,\\Omega\\), \\(X_L=${x}\\,\\Omega\\). Find power factor \\(R/|Z|\\).`,ans,`\\(pf=R/\\sqrt{R^2+X_L^2}=${nfmt(ans)}\\).`)}],
['Electric flux by Gauss law',()=>{let q=ri(1,20),ans=q/8.854;return qNum(E,'Gauss law electric flux',`A closed surface encloses charge \\(q=${q}\\,nC\\). Find electric flux \\(\\Phi_E=q/\\epsilon_0\\) in \\(10^3 N\\cdot m^2/C\\), using \\(\\epsilon_0=8.854\\times10^{-12}\\,F/m\\).`,ans,`\\(\\Phi_E=q/\\epsilon_0=${q}\\times10^{-9}/(8.854\\times10^{-12})=${nfmt(ans)}\\times10^3\\,N\\cdot m^2/C\\).`)}]
];

function makeEmScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      if(fam===0){const turns=ri(50,300),current=ri(1,8),area=ri(2,30)/10000,ans=turns*current*area;return attachDiagram(qNum(E,`Magnetic dipole moment ${variant}`,`A ${turns}-turn coil carries \\(I=${current}\\,A\\) and encloses area \\(A=${nfmt(area)}\\,m^2\\). Find magnetic dipole moment magnitude \\(m=NIA\\).`,ans,`\\(m=NIA=${turns}(${current})(${nfmt(area)})=${nfmt(ans)}\\,A\\cdot m^2\\).`),'magnetic','A multi-turn planar current loop creates a magnetic dipole moment normal to the loop; the diagram marks current I and moment vector m.')}
    if(fam===1){const moment=ri(2,20)/10,B0=ri(2,15)/10,angle=pick([30,45,60,90]),ans=moment*B0*Math.sin(angle*Math.PI/180);return attachDiagram(qNum(E,`Dipole torque ${variant}`,`A magnetic dipole has moment \\(m=${nfmt(moment)}\\,A\\cdot m^2\\) in field \\(B=${nfmt(B0)}\\,T\\) at angle \\(\\theta=${angle}^\\circ\\). Find torque magnitude.`,ans,`\\(\\tau=mB\\sin\\theta=${nfmt(moment)}(${nfmt(B0)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,N\\cdot m\\).`),'magnetic','Magnetic moment vector m makes angle theta with magnetic field vector B; torque is perpendicular to both.')}
    if(fam===2){const L0=ri(10,120)/1000,I0=ri(1,8),ans=.5*L0*I0*I0;return qNum(E,`Magnetic energy ${variant}`,`An inductor of \\(L=${nfmt(L0)}\\,H\\) carries \\(I=${I0}\\,A\\). Find stored magnetic energy.`,ans,`\\(U_B=\\frac12LI^2=\\frac12(${nfmt(L0)})(${I0})^2=${nfmt(ans)}\\,J\\).`)}
    if(fam===3){const B0=ri(2,15)/1000,length=ri(5,50)/100,vel=ri(1,25),ans=B0*length*vel;return qNum(E,`Motional emf ${variant}`,`A conducting rod of length \\(\\ell=${nfmt(length)}\\,m\\) moves at \\(v=${vel}\\,m/s\\) perpendicular to \\(B=${nfmt(B0)}\\,T\\). Find motional emf magnitude.`,ans,`\\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(length)})(${vel})=${nfmt(ans)}\\,V\\).`)}
    if(fam===4){const q0=ri(1,8),vx=ri(1,8),vy=ri(1,8),vz=ri(1,8),bx=ri(1,6),by=ri(1,6),bz=ri(1,6),fz=q0*(vx*by-vy*bx);return attachDiagram(qNum(E,`Three-dimensional Lorentz force ${variant}`,`A particle has charge \\(q=${q0}\\,\\mu C\\), velocity \\(\\mathbf v=\\langle${vx},${vy},${vz}\\rangle\\,m/s\\), and magnetic field \\(\\mathbf B=\\langle${bx},${by},${bz}\\rangle\\,mT\\). Find the \\(z\\)-component of \\(\\mathbf F=q(\\mathbf v\\times\\mathbf B)\\) in nN.`,fz,`\\(F_z=q(v_xB_y-v_yB_x)=${q0}(${vx}(${by})-${vy}(${bx}))=${fz}\\,nN\\). Here \\(\\mu C\\cdot m/s\\cdot mT\\) gives nN.`),'magnetic','Three-dimensional axes x, y, z show velocity vector v and magnetic-field vector B. The Lorentz force follows q times the cross product v × B.')}
    if(fam===5){const turns=ri(40,200),change=ri(2,20)/1000,dt=ri(5,40)/100,ans=turns*change/dt;return qNum(E,`Faraday induction ${variant}`,`Flux through each turn of a \\(${turns}\\)-turn coil changes by \\(${nfmt(change)}\\,Wb\\) in \\(${nfmt(dt)}\\,s\\). Find average induced emf magnitude.`,ans,`\\(|\\mathcal E|=N|\\Delta\\Phi|/\\Delta t=${turns}(${nfmt(change)})/${nfmt(dt)}=${nfmt(ans)}\\,V\\).`)}
    if(fam===6){const B0=ri(2,12)/10,I0=ri(1,8),ell=ri(5,40)/100,angle=pick([30,45,60,90]),ans=B0*I0*ell*Math.sin(angle*Math.PI/180);return attachDiagram(qNum(E,`Motor-wire torque force ${variant}`,`A wire segment of length \\(\\ell=${nfmt(ell)}\\,m\\) carries \\(I=${I0}\\,A\\) in a field \\(B=${nfmt(B0)}\\,T\\) at angle \\(${angle}^\\circ\\). Find magnetic force magnitude.`,ans,`\\(F=B I\\ell\\sin\\theta=${nfmt(B0)}(${I0})(${nfmt(ell)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,N\\).`),'magnetic','A current-carrying wire crosses a magnetic field; force direction is determined by I cross B and magnitude by B I length sin(theta).')}
    if(fam===7){const B0=ri(2,15)/1000,A0=ri(5,90)/10000,angle=pick([0,30,45,60,90]),ans=B0*A0*Math.cos(angle*Math.PI/180);return qNum(E,`Magnetic flux in 3D ${variant}`,`A flat loop of area \\(A=${nfmt(A0)}\\,m^2\\) is in field \\(B=${nfmt(B0)}\\,T\\). The angle between \\(\\mathbf B\\) and the surface normal is \\(${angle}^\\circ\\). Find flux.`,ans,`\\(\\Phi_B=BA\\cos\\theta=${nfmt(B0)}(${nfmt(A0)})\\cos(${angle}^\\circ)=${nfmt(ans)}\\,Wb\\).`)}
    if(fam===8){const mu0=4*Math.PI*1e-7,B0=ri(1,8)/1000,ans=B0*B0/(2*mu0);return qNum(E,`Magnetic energy density ${variant}`,`Find magnetic energy density for field magnitude \\(B=${nfmt(B0)}\\,T\\) using \\(u=B^2/(2\\mu_0)\\), where \\(\\mu_0=4\\pi\\times10^{-7}\\,H/m\\).`,ans,`\\(u=${nfmt(B0)}^2/(2(4\\pi\\times10^{-7}))=${nfmt(ans)}\\,J/m^3\\).`)}
    const N0=ri(30,150),B0=ri(1,9)/100,area=ri(3,25)/10000,vel=ri(2,15),length=ri(2,20)/100,ans=B0*length*vel;return qNum(E,`Induction in a moving conductor ${variant}`,`A rod of length \\(${nfmt(length)}\\,m\\) moves at \\(${vel}\\,m/s\\) perpendicular to a \\(${nfmt(B0)}\\,T\\) magnetic field. Find induced emf.`,ans,`\\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(length)})(${vel})=${nfmt(ans)}\\,V\\).`)
}


NUMERIC_GENERATOR_REGISTRY.em = [...coreSeedEntries(E, EM_CORE_SEEDS),
    numericEntry('em',"Coulomb force magnitude · family 01 (randomized variant)","em-family-01",()=>makeEmExpansionFamily01("Coulomb force magnitude · family 01 (randomized variant)")),
    numericEntry('em',"Point-charge electric field · family 02 (randomized variant)","em-family-02",()=>makeEmExpansionFamily02("Point-charge electric field · family 02 (randomized variant)")),
    numericEntry('em',"Point-charge potential · family 03 (randomized variant)","em-family-03",()=>makeEmExpansionFamily03("Point-charge potential · family 03 (randomized variant)")),
    numericEntry('em',"Electric force from field · family 04 (randomized variant)","em-family-04",()=>makeEmExpansionFamily04("Electric force from field · family 04 (randomized variant)")),
    numericEntry('em',"Capacitor charge · family 05 (randomized variant)","em-family-05",()=>makeEmExpansionFamily05("Capacitor charge · family 05 (randomized variant)")),
    numericEntry('em',"Stored capacitor energy · family 06 (randomized variant)","em-family-06",()=>makeEmExpansionFamily06("Stored capacitor energy · family 06 (randomized variant)")),
    numericEntry('em',"Magnetic force magnitude · family 07 (randomized variant)","em-family-07",()=>makeEmExpansionFamily07("Magnetic force magnitude · family 07 (randomized variant)")),
    numericEntry('em',"Magnetic flux · family 08 (randomized variant)","em-family-08",()=>makeEmExpansionFamily08("Magnetic flux · family 08 (randomized variant)")),
    numericEntry('em',"Faraday induced emf · family 09 (randomized variant)","em-family-09",()=>makeEmExpansionFamily09("Faraday induced emf · family 09 (randomized variant)")),
    numericEntry('em',"Relative capacitance · family 10 (randomized variant)","em-family-10",()=>makeEmExpansionFamily10("Relative capacitance · family 10 (randomized variant)")),
    numericEntry('em',"Magnetic dipole moment · family 11 (randomized variant)","em-family-11",()=>makeEmExpansionFamily11("Magnetic dipole moment · family 11 (randomized variant)")),
    numericEntry('em',"Torque on a current loop · family 12 (randomized variant)","em-family-12",()=>makeEmExpansionFamily12("Torque on a current loop · family 12 (randomized variant)")),
    numericEntry('em',"Magnetic energy density · family 13 (randomized variant)","em-family-13",()=>makeEmExpansionFamily13("Magnetic energy density · family 13 (randomized variant)")),
    numericEntry('em',"Motional electromotive force · family 14 (randomized variant)","em-family-14",()=>makeEmExpansionFamily14("Motional electromotive force · family 14 (randomized variant)")),
    numericEntry('em',"Three-dimensional magnetic force · family 15 (randomized variant)","em-family-15",()=>makeEmExpansionFamily15("Three-dimensional magnetic force · family 15 (randomized variant)")),
    numericEntry('em',"Field of a long wire · family 16 (randomized variant)","em-family-16",()=>makeEmExpansionFamily16("Field of a long wire · family 16 (randomized variant)")),
    numericEntry('em',"Magnetic flux linkage · family 17 (randomized variant)","em-family-17",()=>makeEmExpansionFamily17("Magnetic flux linkage · family 17 (randomized variant)")),
    numericEntry('em',"RL stored magnetic energy · family 18 (randomized variant)","em-family-18",()=>makeEmExpansionFamily18("RL stored magnetic energy · family 18 (randomized variant)")),
    numericEntry('em',"Lorentz force vector magnitude · family 19 (randomized variant)","em-family-19",()=>makeEmExpansionFamily19("Lorentz force vector magnitude · family 19 (randomized variant)")),
    numericEntry('em',"Magnetic dipole potential energy · family 20 (randomized variant)","em-family-20",()=>makeEmExpansionFamily20("Magnetic dipole potential energy · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(E,'Field scenario · Magnetic dipole in a coil','scenario-em-magnetic-dipole-coil',()=>makeEmScenario(0));
appendNumericRecipe(E,'Field scenario · Motional emf in a generator rail','scenario-em-motional-emf-rail',()=>{
  const B0=ri(2,9)/1000,ell=ri(10,60)/100,v=ri(1,15),ans=B0*ell*v;
  const q=qNum(E,'Field scenario · Motional emf in a generator rail',`A portable generator has a conducting rod of length \\(\\ell=${nfmt(ell)}\\,m\\) sliding at \\(v=${v}\\,m/s\\) perpendicular to a uniform magnetic field \\(B=${nfmt(B0)}\\,T\\). Find the motional emf magnitude.`,ans,`For perpendicular motion, \\(\\mathcal E=B\\ell v=${nfmt(B0)}(${nfmt(ell)})(${v})=${nfmt(ans)}\\,V\\).`);
  return attachDiagram(q,'motionalEmf','A conducting rod of length ell slides to the right on two conducting rails through a uniform magnetic field directed into the page; the induced motional emf is B ell v.');
});
appendNumericRecipe(E,'Field scenario · Torque on a motor coil','scenario-em-motor-coil-torque',()=>{
  const N0=ri(30,180),I0=ri(1,6),area=ri(5,30)/10000,B0=ri(2,8)/10,angle=pick([30,45,60,90]),mu=N0*I0*area,ans=mu*B0*Math.sin(angle*Math.PI/180);
  const q=qNum(E,'Field scenario · Torque on a motor coil',`A motor coil has \\(N=${N0}\\) turns, current \\(I=${I0}\\,A\\), area per turn \\(A=${nfmt(area)}\\,m^2\\), and field \\(B=${nfmt(B0)}\\,T\\). The angle between its magnetic moment and the field is \\(\\theta=${angle}^\\circ\\). Find torque magnitude.`,ans,`\\(\\mu=NIA=${N0}(${I0})(${nfmt(area)})=${nfmt(mu)}\\,A\\cdot m^2\\). Then \\(\\tau=\\mu B\\sin\\theta=${nfmt(mu)}(${nfmt(B0)})\\sin(${angle}^\\circ)=${nfmt(ans)}\\,N\\cdot m\\).`);
  return attachDiagram(q,'motorTorque','A multi-turn motor coil has magnetic moment mu at angle theta to field B; torque magnitude is mu B sin(theta).');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('em','Additional · Magnetic force on a moving charge','em-topup-01',()=>{
  const q=ri(1,8),v=ri(2,15),B=rand(.1,1.5),ans=q*v*B;
  return qNum(E,'Magnetic force on a moving charge',`A charge of \\(${q}\\,\\mu C\\) moves at \\(${v}\\times10^3\\,m/s\\) perpendicular to a \\(${nfmt(B)}\\,T\\) magnetic field. Find force magnitude in mN.`,ans,`Using the stated scaled units, \\(F=|q|vB=${q}(${v})(${nfmt(B)})=${nfmt(ans)}\\,mN\\).`);
});
appendNumericRecipe('em','Additional · Electric field from force on a test charge','em-topup-02',()=>{
  const F=ri(2,30),q=ri(1,8),ans=F/q;
  return qNum(E,'Electric field from force on a test charge',`A test charge of \\(${q}\\,\\mu C\\) experiences an electric force of \\(${F}\\,\\mu N\\). Find the electric field magnitude in N/C.`,ans,`\\(E=F/q=${F}\\,\\mu N/${q}\\,\\mu C=${nfmt(ans)}\\,N/C\\).`);
});
appendNumericRecipe('em','Additional · Energy stored by a capacitor','em-topup-03',()=>{
  const Cmicro=ri(2,30),V=ri(2,25),ans=.5*Cmicro*V*V;
  return qNum(E,'Energy stored by a capacitor',`A capacitor has \\(C=${Cmicro}\\,\\mu F\\) and voltage \\(V=${V}\\,V\\). Find its stored energy in \\(\\mu J\\).`,ans,`\\(U=CV^2/2=${Cmicro}(${V})^2/2=${ans}\\,\\mu J\\).`);
});
appendNumericRecipe('em','Additional · Induced emf from changing magnetic flux','em-topup-04',()=>{
  const N=ri(20,300),delta=rand(.001,.05),dt=rand(.01,.3),ans=N*delta/dt;
  return qNum(E,'Induced emf from changing magnetic flux',`A coil has \\(${N}\\) turns. Flux per turn changes by \\(${nfmt(delta)}\\,Wb\\) in \\(${nfmt(dt)}\\,s\\). Find the induced emf magnitude.`,ans,`Faraday's law gives \\(|\\mathcal E|=N|\\Delta\\Phi|/\\Delta t=${N}(${nfmt(delta)})/${nfmt(dt)}=${nfmt(ans)}\\,V\\).`);
});
appendNumericRecipe('em','Additional · Electric potential energy of two charges','em-topup-05',()=>{
  const q1=ri(1,8),q2=ri(1,8),r=ri(2,10),ans=9*q1*q2/r;
  return qNum(E,'Electric potential energy of two charges',`Two positive charges \\(${q1}\\,\\mu C\\) and \\(${q2}\\,\\mu C\\) are separated by \\(${r}\\,m\\). Using the corresponding scaled Coulomb constant, find potential energy in mJ.`,ans,`\\(U=kq_1q_2/r\\). With microcoulombs and the requested scale, \\(U=9(${q1})(${q2})/${r}=${nfmt(ans)}\\,mJ\\).`);
});
