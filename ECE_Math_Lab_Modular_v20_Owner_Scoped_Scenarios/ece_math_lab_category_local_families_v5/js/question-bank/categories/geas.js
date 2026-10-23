/* geas: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_GEAS = 'geas';
const G = NAMESPACE_GEAS;
function makeGeasExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const F=ri(20,120),d=ri(2,15),ans=v?F/d:F*d;return qNum(G,title,v?`A force \\(${F}\\,\\mathrm{N}\\) acts over an area \\(${d}\\,\\mathrm{m}^2\\). Find pressure.`:`A technician pushes a cart with force \\(${F}\\,\\mathrm{N}\\) through \\(${d}\\,\\mathrm{m}\\) in the force direction. Find work.`,ans,v?`\\(P=F/A=${nfmt(ans)}\\,\\mathrm{Pa}\\).`:`\\(W=Fd=${ans}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,40),vol=ri(1,12),ans=v?m/vol:vol/m;return qNum(G,title,v?`A sample of mass \\(${m}\\,\\mathrm{kg}\\) occupies \\(${vol}\\,\\mathrm{m}^3\\). Find density.`:`A sample has mass \\(m=${m}\\,\\mathrm{kg}\\) and volume \\(V=${vol}\\,\\mathrm{m}^3\\). Find specific volume \\(V/m\\).`,ans,v?`\\(\\rho=m/V=${nfmt(ans)}\\,\\mathrm{kg}/\\mathrm{m}^3\\).`:`\\(v_s=V/m=${nfmt(ans)}\\,\\mathrm{m}^3/kg\\).`)
  }
}
function makeGeasExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const m=ri(1,8),c=ri(300,1200),dt=ri(5,45),ans=v?m*c*dt/1000:m*c*dt;return qNum(G,title,v?`A \\(${m}\\,\\mathrm{kg}\\) sample with specific heat \\(${c}\\,\\mathrm{J}/(kg\\,\\mathrm{K})\\) warms by \\(${dt}\\,\\mathrm{K}\\). Find heat in kJ.`:`A sample has mass \\(m=${m}\\,\\mathrm{kg}\\), specific heat \\(c=${c}\\,\\mathrm{J}/(kg\\,\\mathrm{K})\\), and temperature rise \\(\\Delta T=${dt}\\,\\mathrm{K}\\). Find heat transferred in joules.`,ans,v?`\\(Q=mc\\Delta T/1000=${nfmt(ans)}\\,kJ\\).`:`\\(Q=mc\\Delta T=${nfmt(ans)}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const n=ri(1,4),R=ri(280,360),V=rand(.01,.04),ans=v?n*8.314*R/1000/V:n*8.314*R/V;return qNum(G,title,v?`An ideal gas has \\(n=${n}\\,\\mathrm{m}ol\\), \\(T=${R}\\,\\mathrm{K}\\), and \\(V=${nfmt(V)}\\,\\mathrm{m}^3\\). Find pressure in kPa.`:`An ideal gas has amount \\(n=${n}\\,\\mathrm{m}ol\\), temperature \\(T=${R}\\,\\mathrm{K}\\), and volume \\(V=${nfmt(V)}\\,\\mathrm{m}^3\\). Find pressure in pascals using \\(R_g=8.314\\,\\mathrm{J}/(mol\\,\\mathrm{K})\\).`,ans,v?`\\(P=nRT/V=${nfmt(ans)}\\,kPa\\).`:`\\(P=nRT/V=${nfmt(ans)}\\,\\mathrm{Pa}\\).`)
  }
}
function makeGeasExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,30),vel=ri(2,18),ans=v?.5*m*vel*vel:m*vel;return qNum(G,title,v?`A cart of mass \\(${m}\\,\\mathrm{kg}\\) travels at \\(${vel}\\,\\mathrm{m}/\\mathrm{s}\\). Find kinetic energy.`:`A cart of mass \\(m=${m}\\,\\mathrm{kg}\\) moves at \\(v=${vel}\\,\\mathrm{m}/\\mathrm{s}\\). Find its momentum magnitude.`,ans,v?`\\(K=mv^2/2=${ans}\\,\\mathrm{J}\\).`:`\\(p=mv=${ans}\\,\\mathrm{kg}\\,\\mathrm{m}/\\mathrm{s}\\).`)
  }
}
function makeGeasExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,25),h=ri(2,20),g=9.81,ans=v?m*g:m*g*h;return qNum(G,title,v?`A mass \\(${m}\\,\\mathrm{kg}\\) is near Earth's surface. Find its weight using \\(g=9.81\\,\\mathrm{m}/\\mathrm{s}^2\\).`:`Raise a mass \\(${m}\\,\\mathrm{kg}\\) through height \\(${h}\\,\\mathrm{m}\\). Find gravitational potential-energy increase.`,ans,v?`\\(W=mg=${nfmt(ans)}\\,\\mathrm{N}\\).`:`\\(\\Delta U=mgh=${nfmt(ans)}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(850,1200),g=9.81,h=ri(1,15),ans=v?rho*g*h:h*rho*g/1000;return qNum(G,title,v?`Fluid density \\(${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\) at depth \\(${h}\\,\\mathrm{m}\\): find gauge pressure in Pa.`:`A fluid of density \\(\\rho=${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\) has depth \\(h=${h}\\,\\mathrm{m}\\). Find gauge pressure in kilopascals using \\(g=9.81\\,\\mathrm{m}/\\mathrm{s}^2\\).`,ans,v?`\\(p=\\rho gh=${nfmt(ans)}\\,\\mathrm{Pa}\\).`:`\\(p/1000=${nfmt(ans)}\\,kPa\\).`)
  }
}
function makeGeasExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const rho=1000,g=9.81,Q=rand(.002,.02),h=ri(5,35),eta=rand(.5,.9),ans=v?rho*g*Q*h:rho*g*Q*h/eta;return qNum(G,title,v?`A pump lifts water at flow rate \\(${nfmt(Q)}\\,\\mathrm{m}^3/\\mathrm{s}\\) through \\(${h}\\,\\mathrm{m}\\). Find ideal hydraulic power.`:`A pump lifts water at flow rate \\(${nfmt(Q)}\\,\\mathrm{m}^3/\\mathrm{s}\\) through head \\(${h}\\,\\mathrm{m}\\), with efficiency \\(\\eta=${nfmt(eta*100)}\\%\\). Using \\(\\rho=1000\\,\\mathrm{kg}/\\mathrm{m}^3\\) and \\(g=9.81\\,\\mathrm{m}/\\mathrm{s}^2\\), find input power.`,ans,v?`\\(P_h=\\rho gQh=${nfmt(ans)}\\,\\mathrm{W}\\).`:`\\(P_{in}=P_h/\\eta=${nfmt(ans)}\\,\\mathrm{W}\\).`)
  }
}
function makeGeasExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const useful=ri(100,900),input=ri(useful+100,1500),ans=v?useful/input*100:input-useful;return qNum(G,title,v?`A device receives \\(${input}\\,\\mathrm{W}\\) and delivers \\(${useful}\\,\\mathrm{W}\\) useful power. Find efficiency percent.`:`A device receives input power \\(P_{in}=${input}\\,\\mathrm{W}\\) and delivers useful output power \\(P_{out}=${useful}\\,\\mathrm{W}\\). Find power loss.`,ans,v?`\\(\\eta=100P_{out}/P_{in}=${nfmt(ans)}\\%\\).`:`\\(P_{loss}=P_{in}-P_{out}=${ans}\\,\\mathrm{W}\\).`,'number')
  }
}
function makeGeasExpansionFamily10(title){
  const v=ri(0,1)===1;
  const stiffness=ri(100,800),extensionCm=ri(2,15),extensionM=extensionCm/100;
  const answer=v?.5*stiffness*extensionM*extensionM:stiffness*extensionM;
  const prompt=v
    ? `A spring has stiffness \\(k=${stiffness}\\,\\mathrm{N}/\\mathrm{m}\\) and is stretched by \\(x=${nfmt(extensionM)}\\,\\mathrm{m}\\). Find stored elastic energy.`
    : `A spring has stiffness \\(k=${stiffness}\\,\\mathrm{N}/\\mathrm{m}\\) and extension \\(x=${nfmt(extensionM)}\\,\\mathrm{m}\\). Find the magnitude of the spring force.`;
  const explanation=v
    ? `\\(U=\\frac12kx^2=\\frac12(${stiffness})(${nfmt(extensionM)})^2=${nfmt(answer)}\\,\\mathrm{J}\\).`
    : `Hooke's law gives \\(F=kx=(${stiffness})(${nfmt(extensionM)})=${nfmt(answer)}\\,\\mathrm{N}\\).`;
  return qNum(G,title,prompt,answer,explanation,'number',{quantUnit:v?'J':'N'});
}
function makeGeasExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(2,15),alpha=pick([1.1e-5,1.7e-5,2.4e-5]),dt=ri(20,100),ans=v?L0*alpha*dt:L0*(1+alpha*dt);return qNum(G,title,v?`A \\(${L0}\\,\\mathrm{m}\\) metal bar with \\(\\alpha=${alpha}\\,\\mathrm{K}^{-1}\\) warms by \\(${dt}\\,\\mathrm{K}\\). Find expansion in metres.`:`A metal bar has initial length \\(L_0=${L0}\\,\\mathrm{m}\\), expansion coefficient \\(\\alpha=${alpha}\\,\\mathrm{K}^{-1}\\), and temperature increase \\(\\Delta T=${dt}\\,\\mathrm{K}\\). Find final length.`,ans,v?`\\(\\Delta L=L\\alpha\\Delta T=${nfmt(ans)}\\,\\mathrm{m}\\).`:`\\(L_f=L(1+\\alpha\\Delta T)=${nfmt(ans)}\\,\\mathrm{m}\\).`)
  }
}
function makeGeasExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const F=ri(100,1200),A0=ri(10,80)*1e-4,ans=v?F/A0/1e6:F/A0;return qNum(G,title,v?`A specimen carries \\(${F}\\,\\mathrm{N}\\) over \\(${nfmt(A0)}\\,\\mathrm{m}^2\\). Find stress in MPa.`:`A specimen carries force \\(F=${F}\\,\\mathrm{N}\\) over area \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\). Find stress in pascals.`,ans,v?`\\(\\sigma=F/A/10^6=${nfmt(ans)}\\,MPa\\).`:`\\(\\sigma=F/A=${nfmt(ans)}\\,\\mathrm{Pa}\\).`)
  }
}
function makeGeasExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const dL=rand(.001,.008),L0=ri(1,6),dt=ri(20,90),ans=v?dL/(L0*dt):dL/L0;return qNum(G,title,v?`A \\(${L0}\\,\\mathrm{m}\\) rod expands \\(${nfmt(dL)}\\,\\mathrm{m}\\) after a \\(${dt}\\,\\mathrm{K}\\) increase. Find expansion coefficient.`:`A rod of initial length \\(L_0=${L0}\\,\\mathrm{m}\\) expands by \\(\\Delta L=${nfmt(dL)}\\,\\mathrm{m}\\) when temperature rises by \\(${dt}\\,\\mathrm{K}\\). Find engineering strain.`,ans,v?`\\(\\alpha=\\Delta L/(L\\Delta T)=${nfmt(ans)}\\,\\mathrm{K}^{-1}\\).`:`\\(\\epsilon=\\Delta L/L=${nfmt(ans)}\\).`)
  }
}
function makeGeasExpansionFamily14(title){
  const v=ri(0,1)===1;
  const mass=ri(5,20),initialSpeed=ri(2,10),stopTime=rand(.3,2),answer=v?mass*initialSpeed/stopTime:mass*initialSpeed;
  const prompt=v?`A \\(${mass}\\,\\mathrm{kg}\\) cart moving at \\(v=${initialSpeed}\\,\\mathrm{m}/\\mathrm{s}\\) stops uniformly in \\(\\Delta t=${nfmt(stopTime)}\\,\\mathrm{s}\\). Find the magnitude of average braking force.`:`A cart has mass \\(m=${mass}\\,\\mathrm{kg}\\) and speed \\(v=${initialSpeed}\\,\\mathrm{m}/\\mathrm{s}\\) immediately before braking. Find its momentum magnitude.`;
  const explanation=v?`Average force magnitude is \\(F=\\Delta p/\\Delta t=mv/\\Delta t=${nfmt(answer)}\\,\\mathrm{N}\\).`:`\\(p=mv=${nfmt(answer)}\\,\\mathrm{kg}\\cdot\\mathrm{m}/\\mathrm{s}\\).`;
  return qNum(G,title,prompt,answer,explanation,'number',{quantUnit:v?'N':'kg*m/s'});
}
function makeGeasExpansionFamily15(title){
  const v=ri(0,1)===1;
  const force=ri(40,240),duration=rand(.1,.9),answer=v?force*duration:force;
  const prompt=v?`A constant net force \\(F=${force}\\,\\mathrm{N}\\) acts for \\(\\Delta t=${nfmt(duration)}\\,\\mathrm{s}\\). Find the impulse.`:`A constant net force \\(F=${force}\\,\\mathrm{N}\\) acts for \\(\\Delta t=${nfmt(duration)}\\,\\mathrm{s}\\). Find the average impulse-delivery rate \\(J/\\Delta t\\).`;
  const explanation=v?`\\(J=F\\Delta t=${nfmt(answer)}\\,\\mathrm{N}\\cdot\\mathrm{s}\\).`:`Since \\(J=F\\Delta t\\), the rate is \\(J/\\Delta t=F=${nfmt(answer)}\\,\\mathrm{N}\\).`;
  return qNum(G,title,prompt,answer,explanation,'number',{quantUnit:v?'N*s':'N'});
}
function makeGeasExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const F=ri(20,180),r=rand(.2,1.4),theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?F*r*Math.sin(theta):F*r;return qNum(G,title,v?`A force \\(${F}\\,\\mathrm{N}\\) acts at radius \\(${nfmt(r)}\\,\\mathrm{m}\\) at angle \\(${nfmt(theta)}\\,\\mathrm{rad}\\). Find torque magnitude.`:`A force \\(F=${F}\\,\\mathrm{N}\\) acts perpendicularly at lever arm \\(r=${nfmt(r)}\\,\\mathrm{m}\\). Find torque magnitude.`,ans,v?`\\(\\tau=rF\\sin\\theta=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}\\).`:`\\(\\tau=rF=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}\\).`)
  }
}
function makeGeasExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const rpm=ri(300,1800),ans=v?rpm*2*Math.PI/60:rpm/60;return qNum(G,title,v?`A motor shaft rotates at \\(${rpm}\\,rpm\\). Convert to angular velocity in rad/s.`:`A motor shaft rotates at \\(${rpm}\\,rpm\\). Find rotations per second.`,ans,v?`\\(\\omega=2\\pi(rpm)/60=${nfmt(ans)}\\,\\mathrm{rad}/\\mathrm{s}\\).`:`\\(f=rpm/60=${nfmt(ans)}\\,\\mathrm{Hz}\\).`)
  }
}
function makeGeasExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,15),v0=ri(3,16),r=ri(2,12),ans=v?v0*v0/r:m*v0*v0/r;return qNum(G,title,v?`An object moves at \\(${v0}\\,\\mathrm{m}/\\mathrm{s}\\) along a circle of radius \\(${r}\\,\\mathrm{m}\\). Find centripetal acceleration.`:`An object of mass \\(${m}\\,\\mathrm{kg}\\) moves at \\(${v0}\\,\\mathrm{m}/\\mathrm{s}\\) along radius \\(${r}\\,\\mathrm{m}\\). Find centripetal force.`,ans,v?`\\(a_c=v^2/r=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}^2\\).`:`\\(F_c=mv^2/r=${nfmt(ans)}\\,\\mathrm{N}\\).`)
  }
}
function makeGeasExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const rho=1000,V0=rand(.002,.02),ans=v?rho*9.81*V0:rho*V0;return qNum(G,title,v?`A fully submerged object displaces \\(${nfmt(V0)}\\,\\mathrm{m}^3\\) of water. Find buoyant force.`:`An object displaces \\(V=${nfmt(V0)}\\,\\mathrm{m}^3\\) of water. Using water density \\(\\rho=1000\\,\\mathrm{kg}/\\mathrm{m}^3\\), find the displaced water mass.`,ans,v?`\\(F_B=\\rho gV=${nfmt(ans)}\\,\\mathrm{N}\\).`:`\\(m=\\rho V=${nfmt(ans)}\\,\\mathrm{kg}\\).`)
  }
}
function makeGeasExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const mu=rand(.15,.8),N0=ri(100,800),ans=v?mu*N0:mu;return qNum(G,title,v?`A surface has friction coefficient \\(\\mu=${nfmt(mu)}\\) and normal force \\(${N0}\\,\\mathrm{N}\\). Find maximum static friction.`:`Given maximum friction \\(F=\\mu\\mathrm{N}\\), with \\(F=${nfmt(mu*N0)}\\,\\mathrm{N}\\), \\(N=${N0}\\,\\mathrm{N}\\), find \\(\\mu\\).`,ans,v?`\\(F_{max}=\\mu\\mathrm{N}=${nfmt(ans)}\\,\\mathrm{N}\\).`:`\\(\\mu=F/N=${nfmt(ans)}\\).`)
  }
}
function makeGeasExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(1,8)*1e-7,L0=ri(2,20),A0=ri(2,10)*1e-6,ans=v?rho*L0/A0:A0/(rho*L0);return qNum(G,title,v?`A wire has resistivity \\(\\rho=${nfmt(rho)}\\,\\Omega m\\), length \\(${L0}\\,\\mathrm{m}\\), cross-section \\(${nfmt(A0)}\\,\\mathrm{m}^2\\). Find resistance.`:`A wire has resistivity \\(\\rho=${nfmt(rho)}\\,\\Omega m\\), length \\(L=${L0}\\,\\mathrm{m}\\), and cross-sectional area \\(A=${nfmt(A0)}\\,\\mathrm{m}^2\\). Find conductance \\(1/R\\).`,ans,v?`\\(R=\\rho L/A=${nfmt(ans)}\\,\\Omega\\).`:`\\(G=1/R=${nfmt(ans)}\\,S\\).`)
  }
}
function makeGeasExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(900,1200),vel=rand(.2,3),D0=ri(1,8)*.01,mu=pick([.001,.002,.003,.004]),ans=v?rho*vel*D0/mu:mu/rho;return qNum(G,title,v?`Water-like fluid has \\(\\rho=${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\), speed \\(${nfmt(vel)}\\,\\mathrm{m}/\\mathrm{s}\\), pipe diameter \\(${D0}\\,\\mathrm{m}\\), and dynamic viscosity \\(${mu}\\,\\mathrm{Pa}\\,\\mathrm{s}\\). Find the Reynolds number.`:`A water-like fluid has density \\(\\rho=${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\) and dynamic viscosity \\(\\mu=${mu}\\,\\mathrm{Pa}\\,\\mathrm{s}\\). Find its kinematic viscosity \\(\\nu\\) in \\(m^2/s\\).`,ans,v?`\\(Re=\\rho vD/\\mu=${nfmt(ans)}\\).`:`Kinematic viscosity is \\(\\nu=\\mu/\\rho=${mu}/${rho}=${nfmt(ans)}\\,\\mathrm{m}^2/\\mathrm{s}\\).`)
  }
}
function makeGeasExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const V0=ri(5,24),I0=ri(1,8),ans=v?V0*I0:V0/I0;return qNum(G,title,v?`A device runs at \\(${V0}\\,\\mathrm{V}\\) and \\(${I0}\\,\\mathrm{A}\\). Find electrical power.`:`A device operates at voltage \\(V=${V0}\\,\\mathrm{V}\\) and current \\(I=${I0}\\,\\mathrm{A}\\). Find resistance.`,ans,v?`\\(P=VI=${ans}\\,\\mathrm{W}\\).`:`\\(R=V/I=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeGeasExpansionFamily24(title){
  const v=ri(0,1)===1;
  const hotMass=ri(1,8),coldMass=ri(1,8),hotTemp=ri(60,90),coldTemp=ri(10,25);
  const answer=v?(hotMass*hotTemp+coldMass*coldTemp)/(hotMass+coldMass):hotMass*(hotTemp-coldTemp);
  const prompt=v
    ? `Two water-like samples with equal specific heat are mixed without heat loss: hot sample mass \\(m_1=${hotMass}\\,\\mathrm{kg}\\) at \\(T_1=${hotTemp}^\\circ\\mathrm{C}\\), and cold sample mass \\(m_2=${coldMass}\\,\\mathrm{kg}\\) at \\(T_2=${coldTemp}^\\circ\\mathrm{C}\\). Find equilibrium temperature.`
    : `For the hot sample alone, mass \\(m_1=${hotMass}\\,\\mathrm{kg}\\), hot temperature \\(T_1=${hotTemp}^\\circ\\mathrm{C}\\), and comparison temperature \\(T_2=${coldTemp}^\\circ\\mathrm{C}\\), calculate \\(m_1(T_1-T_2)\\).`;
  const explanation=v
    ? `Equal specific heats and energy balance give \\(T_f=(m_1T_1+m_2T_2)/(m_1+m_2)=${nfmt(answer)}^\\circ\\mathrm{C}\\).`
    : `\\(m_1(T_1-T_2)=(${hotMass})(${hotTemp}-${coldTemp})=${nfmt(answer)}\\,\\mathrm{kg}\\cdot\\Delta^\\circ\\mathrm{C}\\).`;
  return qNum(G,title,prompt,answer,explanation,'number',{quantUnit:v?'degC':'kg*deltaC'});
}
function makeGeasExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const effort=ri(40,240),load=ri(200,1200),ans=v?load/effort:effort/load;return qNum(G,title,v?`A machine lifts load \\(${load}\\,\\mathrm{N}\\) with effort \\(${effort}\\,\\mathrm{N}\\). Find mechanical advantage.`:`A machine lifts load \\(L=${load}\\,\\mathrm{N}\\) using effort \\(E=${effort}\\,\\mathrm{N}\\). Find the effort-to-load ratio.`,ans,v?`\\(MA=Load/Effort=${nfmt(ans)}\\).`:`\\(E/L=${nfmt(ans)}\\).`)
  }
}



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */


/* Individual family variant implementations; no indexed dispatch remains. */
function makeGeasFamily26VariantA(title){
  const variant=1;
  {
    const F=ri(10,80),d=ri(2,12),ans=F*d;
    return qNum(G,title,`A technician pushes a cart with constant force \\(F=${F}\\,\\mathrm{N}\\) over \\(d=${d}\\,\\mathrm{m}\\) in the force direction. Find work \\(W\\).`,ans,`\\(W=Fd=${F}(${d})=${ans}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasFamily27VariantA(title){
  const variant=1;
  {
    const F=ri(100,900),A0=ri(2,12),ans=F/A0;
    return qNum(G,title,`A piston applies force \\(F=${F}\\,\\mathrm{N}\\) over area \\(A=${A0}\\,\\mathrm{m}^2\\). Find pressure in Pa.`,ans,`\\(P=F/A=${F}/${A0}=${nfmt(ans)}\\,\\mathrm{Pa}\\).`)
  }
}
function makeGeasFamily28VariantA(title){
  const variant=1;
  {
    const m=ri(5,90),vol=ri(1,12),ans=m/vol;
    return qNum(G,title,`A sample has mass \\(m=${m}\\,\\mathrm{kg}\\) and volume \\(V=${vol}\\,\\mathrm{m}^3\\). Find its density.`,ans,`\\(\\rho=m/V=${m}/${vol}=${nfmt(ans)}\\,\\mathrm{kg}/\\mathrm{m}^3\\).`)
  }
}
function makeGeasFamily29VariantA(title){
  const variant=1;
  {
    const useful=ri(2,8)*100, supplied=useful+ri(100,600),ans=100*useful/supplied;
    return qNum(G,title,`A machine produces useful output \\(${useful}\\,\\mathrm{J}\\) from supplied energy \\(${supplied}\\,\\mathrm{J}\\). Find efficiency.`,ans,`\\(\\eta=100E_{out}/E_{in}=100(${useful})/${supplied}=${nfmt(ans)}\\%\\).`,'percent')
  }
}
function makeGeasFamily30VariantA(title){
  const variant=1;
  {
    const m=ri(1,8),c=ri(400,900),dt=ri(5,40),ans=m*c*dt;
    return qNum(G,title,`A material of mass \\(${m}\\,\\mathrm{kg}\\) and specific heat \\(${c}\\,\\mathrm{J}/(kg\\cdot K)\\) warms by \\(${dt}\\,\\mathrm{K}\\). Find heat absorbed.`,ans,`\\(Q=mc\\Delta T=${m}(${c})(${dt})=${ans}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasFamily31VariantA(title){
  const variant=1;
  {
    const mol=ri(1,4),temp=ri(260,400),vol=ri(2,9),ans=mol*8.314*temp/vol;
    return qNum(G,title,`An ideal gas has \\(n=${mol}\\,\\mathrm{m}ol\\), \\(T=${temp}\\,\\mathrm{K}\\), and \\(V=${vol}\\,\\mathrm{m}^3\\). Using \\(R=8.314\\,\\mathrm{J}/(mol\\cdot K)\\), find pressure in Pa.`,ans,`\\(PV=nRT\\), hence \\(P=nRT/V=${mol}(8.314)(${temp})/${vol}=${nfmt(ans)}\\,\\mathrm{Pa}\\).`)
  }
}
function makeGeasFamily32VariantA(title){
  const variant=1;
  {
    const m=ri(2,20),v=ri(3,16),ans=.5*m*v*v;
    return qNum(G,title,`A moving body has mass \\(${m}\\,\\mathrm{kg}\\) and speed \\(${v}\\,\\mathrm{m}/\\mathrm{s}\\). Find translational kinetic energy.`,ans,`\\(K=\\frac12mv^2=\\frac12(${m})(${v})^2=${nfmt(ans)}\\,\\mathrm{J}\\).`)
  }
}
function makeGeasFamily33VariantA(title){
  const variant=1;
  {
    const flow=ri(1,8)/100,head=ri(3,25),ans=1000*9.81*flow*head;
    return qNum(G,title,`A water pump moves \\(Q=${nfmt(flow)}\\,\\mathrm{m}^3/\\mathrm{s}\\) through a head of \\(${head}\\,\\mathrm{m}\\). Estimate ideal hydraulic power using \\(\\rho=1000\\,\\mathrm{kg}/\\mathrm{m}^3\\) and \\(g=9.81\\,\\mathrm{m}/\\mathrm{s}^2\\).`,ans,`\\(P=\\rho gQh=1000(9.81)(${nfmt(flow)})(${head})=${nfmt(ans)}\\,\\mathrm{W}\\).`)
  }
}
function makeGeasFamily34VariantA(title){
  const variant=1;
  {
    const F=ri(20,150),k=ri(10,60),ans=F/k;
    return qNum(G,title,`A spring has stiffness \\(k=${k}\\,\\mathrm{N}/\\mathrm{m}\\) and is loaded by \\(F=${F}\\,\\mathrm{N}\\). Find extension in metres assuming a linear spring.`,ans,`Hooke's law gives \\(x=F/k=${F}/${k}=${nfmt(ans)}\\,\\mathrm{m}\\).`)
  }
}
function makeGeasFamily35VariantA(title){
  const variant=1;
  {
    const load=ri(200,1200),effort=ri(50,300),ans=load/effort;
    return qNum(G,title,`A simple machine raises a \\(${load}\\,\\mathrm{N}\\) load with effort \\(${effort}\\,\\mathrm{N}\\). Find its ideal mechanical advantage.`,ans,`\\(IMA=Load/Effort=${load}/${effort}=${nfmt(ans)}\\).`);
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily26VariantA(title):makeGeasExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily27VariantA(title):makeGeasExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily28VariantA(title):makeGeasExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily29VariantA(title):makeGeasExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily30VariantA(title):makeGeasExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily31VariantA(title):makeGeasExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily32VariantA(title):makeGeasExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily33VariantA(title):makeGeasExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily34VariantA(title):makeGeasExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeGeasFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeGeasFamily35VariantA(title):makeGeasExpansionFamily10(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.geas = [numericEntry('geas',"Work-energy calculation · family 26 (randomized variant)","geas-family-26",()=>makeGeasFamily26("Work-energy calculation · family 26 (randomized variant)")),
    numericEntry('geas',"Force and area pressure · family 27 (randomized variant)","geas-family-27",()=>makeGeasFamily27("Force and area pressure · family 27 (randomized variant)")),
    numericEntry('geas',"Density calculation · family 28 (randomized variant)","geas-family-28",()=>makeGeasFamily28("Density calculation · family 28 (randomized variant)")),
    numericEntry('geas',"Efficiency calculation · family 29 (randomized variant)","geas-family-29",()=>makeGeasFamily29("Efficiency calculation · family 29 (randomized variant)")),
    numericEntry('geas',"Heat transfer · family 30 (randomized variant)","geas-family-30",()=>makeGeasFamily30("Heat transfer · family 30 (randomized variant)")),
    numericEntry('geas',"Ideal-gas relation · family 31 (randomized variant)","geas-family-31",()=>makeGeasFamily31("Ideal-gas relation · family 31 (randomized variant)")),
    numericEntry('geas',"Kinetic energy · family 32 (randomized variant)","geas-family-32",()=>makeGeasFamily32("Kinetic energy · family 32 (randomized variant)")),
    numericEntry('geas',"Hydraulic power · family 33 (randomized variant)","geas-family-33",()=>makeGeasFamily33("Hydraulic power · family 33 (randomized variant)")),
    numericEntry('geas',"Hooke-law extension · family 34 (randomized variant)","geas-family-34",()=>makeGeasFamily34("Hooke-law extension · family 34 (randomized variant)")),
    numericEntry('geas',"Spring energy and spring force · family 35 (randomized variant)","geas-family-35",()=>makeGeasFamily35("Spring energy and spring force · family 35 (randomized variant)")),
    numericEntry('geas',"Work-energy calculation · family 01 (randomized variant)","geas-family-01",()=>makeGeasExpansionFamily01("Work-energy calculation · family 01 (randomized variant)")),
    numericEntry('geas',"Pressure from force and area · family 02 (randomized variant)","geas-family-02",()=>makeGeasExpansionFamily02("Pressure from force and area · family 02 (randomized variant)")),
    numericEntry('geas',"Material density · family 03 (randomized variant)","geas-family-03",()=>makeGeasExpansionFamily03("Material density · family 03 (randomized variant)")),
    numericEntry('geas',"Machine efficiency · family 04 (randomized variant)","geas-family-04",()=>makeGeasExpansionFamily04("Machine efficiency · family 04 (randomized variant)")),
    numericEntry('geas',"Sensible heat transfer · family 05 (randomized variant)","geas-family-05",()=>makeGeasExpansionFamily05("Sensible heat transfer · family 05 (randomized variant)")),
    numericEntry('geas',"Ideal-gas pressure · family 06 (randomized variant)","geas-family-06",()=>makeGeasExpansionFamily06("Ideal-gas pressure · family 06 (randomized variant)")),
    numericEntry('geas',"Kinetic energy · family 07 (randomized variant)","geas-family-07",()=>makeGeasExpansionFamily07("Kinetic energy · family 07 (randomized variant)")),
    numericEntry('geas',"Hydraulic power · family 08 (randomized variant)","geas-family-08",()=>makeGeasExpansionFamily08("Hydraulic power · family 08 (randomized variant)")),
    numericEntry('geas',"Power efficiency and power loss · family 09 (randomized variant)","geas-family-09",()=>makeGeasExpansionFamily09("Power efficiency and power loss · family 09 (randomized variant)")),
    numericEntry('geas',"Spring energy and spring force · family 10 (randomized variant)","geas-family-10",()=>makeGeasExpansionFamily10("Spring energy and spring force · family 10 (randomized variant)")),
    numericEntry('geas',"Power from flow and head · family 11 (randomized variant)","geas-family-11",()=>makeGeasExpansionFamily11("Power from flow and head · family 11 (randomized variant)")),
    numericEntry('geas',"Stress in MPa and Pa · family 12 (randomized variant)","geas-family-12",()=>makeGeasExpansionFamily12("Stress in MPa and Pa · family 12 (randomized variant)")),
    numericEntry('geas',"Thermal expansion coefficient and strain · family 13 (randomized variant)","geas-family-13",()=>makeGeasExpansionFamily13("Thermal expansion coefficient and strain · family 13 (randomized variant)")),
    numericEntry('geas',"Braking force and momentum · family 14 (randomized variant)","geas-family-14",()=>makeGeasExpansionFamily14("Braking force and momentum · family 14 (randomized variant)")),
    numericEntry('geas',"Impulse and average force · family 15 (randomized variant)","geas-family-15",()=>makeGeasExpansionFamily15("Impulse and average force · family 15 (randomized variant)")),
    numericEntry('geas',"Thermal expansion length · family 16 (randomized variant)","geas-family-16",()=>makeGeasExpansionFamily16("Thermal expansion length · family 16 (randomized variant)")),
    numericEntry('geas',"Rotational speed conversions · family 17 (randomized variant)","geas-family-17",()=>makeGeasExpansionFamily17("Rotational speed conversions · family 17 (randomized variant)")),
    numericEntry('geas',"Centripetal acceleration and force · family 18 (randomized variant)","geas-family-18",()=>makeGeasExpansionFamily18("Centripetal acceleration and force · family 18 (randomized variant)")),
    numericEntry('geas',"Buoyant force and displaced water mass · family 19 (randomized variant)","geas-family-19",()=>makeGeasExpansionFamily19("Buoyant force and displaced water mass · family 19 (randomized variant)")),
    numericEntry('geas',"Static friction and coefficient · family 20 (randomized variant)","geas-family-20",()=>makeGeasExpansionFamily20("Static friction and coefficient · family 20 (randomized variant)")),
    numericEntry('geas',"Hydrostatic pressure with depth · family 21 (randomized variant)","geas-family-21",()=>makeGeasExpansionFamily21("Hydrostatic pressure with depth · family 21 (randomized variant)")),
    numericEntry('geas',"Normal stress from axial load · family 22 (randomized variant)","geas-family-22",()=>makeGeasExpansionFamily22("Normal stress from axial load · family 22 (randomized variant)")),
    numericEntry('geas',"Gear ratio and output speed · family 23 (randomized variant)","geas-family-23",()=>makeGeasExpansionFamily23("Gear ratio and output speed · family 23 (randomized variant)")),
    numericEntry('geas',"Series thermal resistance · family 24 (randomized variant)","geas-family-24",()=>makeGeasExpansionFamily24("Series thermal resistance · family 24 (randomized variant)")),
    numericEntry('geas',"Bernoulli pressure-speed conversion · family 25 (randomized variant)","geas-family-25",()=>makeGeasExpansionFamily25("Bernoulli pressure-speed conversion · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(G,'Normal stress from axial load','geas-normal-stress-force-area',()=>{
  const F=ri(5,40),area=rand(.01,.08),ans=F/(1000*area);
  return qNum(G,'Normal stress from axial load',`A rod carries an axial force of \\(${F}\\,kN\\) over cross-sectional area \\(A=${nfmt(area)}\\,\\mathrm{m}^2\\). Find normal stress in MPa.`,ans,`\\(\\sigma=F/A\\). Converting kN/m² to MPa gives \\(\\sigma=${F}/(1000\\times${nfmt(area)})=${nfmt(ans)}\\,MPa\\).`)
});
appendNumericRecipe(G,'Field scenario · Hydraulic power of a water pump','scenario-geas-hydraulic-pump-power',()=>{
  const flow=ri(2,20)/1000,head=ri(4,30),eta=pick([.55,.65,.72,.8]),rho=1000,g=9.81,hydraulic=rho*g*flow*head,ans=hydraulic/eta;
  return qNum(G,'Field scenario · Hydraulic power of a water pump',`A field engineer specifies a pump moving water at \\(Q=${nfmt(flow)}\\,\\mathrm{m}^3/\\mathrm{s}\\) against head \\(h=${head}\\,\\mathrm{m}\\). If pump efficiency is \\(\\eta=${eta}\\), estimate the required input power using \\(P_{in}=\\rho gQh/\\eta\\), with \\(\\rho=1000\\,\\mathrm{kg}/\\mathrm{m}^3\\), \\(g=9.81\\,\\mathrm{m}/\\mathrm{s}^2\\).`,ans,`Hydraulic output is \\(P_h=\\rho gQh=1000(9.81)(${nfmt(flow)})(${head})=${nfmt(hydraulic)}\\,\\mathrm{W}\\). The required input is \\(P_{in}=P_h/\\eta=${nfmt(hydraulic)}/${eta}=${nfmt(ans)}\\,\\mathrm{W}\\).`);
});
appendNumericRecipe(G,'Applied · Heat required to warm a test component','scenario-geas-component-heating',()=>{
  const m=ri(1,12)/10,cp=ri(350,900),dt=ri(10,70),ans=m*cp*dt;
  return qNum(G,'Applied · Heat required to warm a test component',`A component of mass \\(m=${nfmt(m)}\\,\\mathrm{kg}\\) and specific heat \\(c_p=${cp}\\,\\mathrm{J}/(kg\\cdot K)\\) warms by \\(\\Delta T=${dt}\\,\\mathrm{K}\\). Neglecting losses, calculate heat input \\(Q=mc_p\\Delta T\\).`,ans,`\\(Q=mc_p\\Delta T=${nfmt(m)}(${cp})(${dt})=${nfmt(ans)}\\,\\mathrm{J}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('geas','Additional · Specific gravity from sample density','geas-topup-01',()=>{
  const rho=ri(650,1400),ans=rho/1000;
  return qNum(G,'Specific gravity from sample density',`A liquid sample has density \\(${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\). Using water density \\(1000\\,\\mathrm{kg}/\\mathrm{m}^3\\), find its specific gravity.`,ans,`Specific gravity is the density ratio: \\(SG=${rho}/1000=${nfmt(ans)}\\), dimensionless.`);
});
appendNumericRecipe('geas','Additional · Hydraulic pressure from force and piston area','geas-topup-02',()=>{
  const F=ri(100,4000),Acm=ri(2,50),ans=F/(Acm/10000);
  return qNum(G,'Hydraulic pressure from force and piston area',`A hydraulic piston carries force \\(${F}\\,\\mathrm{N}\\) over area \\(${Acm}\\,\\mathrm{cm}^2\\). Find pressure in Pa.`,ans,`Convert area: \\(A=${Acm}\\times10^{-4}\\,\\mathrm{m}^2\\). Then \\(p=F/A=${F}/(${Acm}\\times10^{-4})=${nfmt(ans)}\\,\\mathrm{Pa}\\).`);
});
appendNumericRecipe('geas','Additional · Mechanical power from force and speed','geas-topup-03',()=>{
  const F=ri(20,800),v=rand(.5,8),ans=F*v;
  return qNum(G,'Mechanical power from force and speed',`A motor moves a load with force \\(${F}\\,\\mathrm{N}\\) at constant speed \\(${nfmt(v)}\\,\\mathrm{m}/\\mathrm{s}\\). Find mechanical power in watts.`,ans,`When force and velocity are parallel, \\(P=Fv=${F}(${nfmt(v)})=${nfmt(ans)}\\,\\mathrm{W}\\).`);
});
appendNumericRecipe('geas','Additional · Device efficiency from input and output power','geas-topup-04',()=>{
  const input=ri(300,2500),output=ri(100,input-1),ans=100*output/input;
  return qNum(G,'Device efficiency from input and output power',`A device receives \\(${input}\\,\\mathrm{W}\\) and delivers useful output \\(${output}\\,\\mathrm{W}\\). Find efficiency in percent.`,ans,`\\(\\eta=100P_{out}/P_{in}=100(${output})/${input}=${nfmt(ans)}\\%\\).`,'percent');
});
appendNumericRecipe('geas','Additional · Torque from a perpendicular force','geas-topup-05',()=>{
  const F=ri(10,300),r=rand(.1,2),ans=F*r;
  return qNum(G,'Torque from a perpendicular force',`A perpendicular force \\(${F}\\,\\mathrm{N}\\) acts \\(${nfmt(r)}\\,\\mathrm{m}\\) from a pivot. Find torque magnitude.`,ans,`For a perpendicular force, \\(\\tau=rF=${nfmt(r)}(${F})=${nfmt(ans)}\\,\\mathrm{N}\\,\\mathrm{m}\\).`);
});
appendNumericRecipe('geas','Additional · Centripetal acceleration','geas-topup-06',()=>{
  const v=ri(2,30),r=ri(2,25),ans=v*v/r;
  return qNum(G,'Centripetal acceleration',`A test mass moves in a circle of radius \\(${r}\\,\\mathrm{m}\\) at speed \\(${v}\\,\\mathrm{m}/\\mathrm{s}\\). Find centripetal acceleration.`,ans,`\\(a_c=v^2/r=${v}^2/${r}=${nfmt(ans)}\\,\\mathrm{m}/\\mathrm{s}^2\\).`);
});
appendNumericRecipe('geas','Additional · Linear thermal expansion','geas-topup-07',()=>{
  const L=ri(1,12),alpha=pick([1.1e-5,1.7e-5,2.3e-5]),dT=ri(20,120),ans=L*alpha*dT;
  return qNum(G,'Linear thermal expansion',`A \\(${L}\\,\\mathrm{m}\\) bar has expansion coefficient \\(\\alpha=${alpha}\\,\\mathrm{K}^{-1}\\). If temperature rises by \\(${dT}\\,\\mathrm{K}\\), find \\(\\Delta L\\) in metres.`,ans,`\\(\\Delta L=\\alpha L\\Delta T=${alpha}(${L})(${dT})=${nfmt(ans)}\\,\\mathrm{m}\\).`);
});
appendNumericRecipe('geas','Additional · Elastic potential energy in a spring','geas-topup-08',()=>{
  const k=ri(100,1200),x=rand(.01,.15),ans=.5*k*x*x;
  return qNum(G,'Elastic potential energy in a spring',`A spring has stiffness \\(k=${k}\\,\\mathrm{N}/\\mathrm{m}\\) and extension \\(x=${nfmt(x)}\\,\\mathrm{m}\\). Find stored elastic potential energy.`,ans,`\\(U=\\frac12kx^2=0.5(${k})(${nfmt(x)})^2=${nfmt(ans)}\\,\\mathrm{J}\\).`);
});
appendNumericRecipe('geas','Additional · Normal stress from axial loading','geas-topup-09',()=>{
  const F=ri(800,12000),Amm=ri(20,150),ans=F/(Amm*1e-6)/1e6;
  return qNum(G,'Normal stress from axial loading',`A specimen carries axial force \\(${F}\\,\\mathrm{N}\\) on cross-sectional area \\(${Amm}\\,\\mathrm{m}m^2\\). Find normal stress in MPa.`,ans,`\\(\\sigma=F/A=${F}/(${Amm}\\times10^{-6})\\,\\mathrm{Pa}=${nfmt(ans)}\\,MPa\\).`);
});
appendNumericRecipe('geas','Additional · Reynolds number for pipe flow','geas-topup-10',()=>{
  const rho=ri(850,1200),v=rand(.1,2),D=rand(.01,.08),mu=rand(.0008,.003),ans=rho*v*D/mu;
  return qNum(G,'Reynolds number for pipe flow',`A fluid has density \\(\\rho=${rho}\\,\\mathrm{kg}/\\mathrm{m}^3\\), mean speed \\(v=${nfmt(v)}\\,\\mathrm{m}/\\mathrm{s}\\), pipe diameter \\(D=${nfmt(D)}\\,\\mathrm{m}\\), and dynamic viscosity \\(\\mu=${nfmt(mu)}\\,\\mathrm{Pa}\\,\\mathrm{s}\\). Find Reynolds number.`,ans,`\\(Re=\\rho vD/\\mu=${rho}(${nfmt(v)})(${nfmt(D)})/${nfmt(mu)}=${nfmt(ans)}\\), dimensionless.`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeGeasScenarioSetup(){const F=ri(500,1000),m=ri(10,30),fr=pick([40,60,80]),h=4;return {category:NAMESPACE_GEAS,title:'Warehouse hoist safety trial',prompt:String.raw`A warehouse hoist raises a load from rest through vertical distance \(h=${h}\,\mathrm{m}\). Its upward drive force is \(F=${F}\,\mathrm{N}\), the combined moving mass is \(m=${m}\,\mathrm{kg}\), and the opposing friction force is \(F_f=${fr}\,\mathrm{N}\). Gravity acts downward with \(g=9.81\,\mathrm{m/s^2}\), so the net upward force is \(F-F_f-mg\). Assume constant forces over the lift.`,transferData:{F: F,m: m,F_f: fr,h: h},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 125"><path d="M35 18 H205 V32 M120 18 V40" stroke="currentColor" stroke-width="2" fill="none"/><path d="M112 40 H128 V54 H112 Z" fill="none" stroke="currentColor" stroke-width="1.5"/><rect x="83" y="54" width="74" height="42" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="120" y="78" text-anchor="middle" fill="currentColor" font-size="12">load</text><path d="M179 90 V50 M172 57 L179 50 L186 57" stroke="#2d83c5" stroke-width="2" fill="none"/><text x="195" y="69" fill="currentColor" font-size="12">F</text><text x="220" y="80" fill="currentColor" font-size="12">h = 4 m</text></svg>`,alt:'A hoist lifts a load vertically through height h while the drive force acts upward and friction opposes the motion.'}],custom:false};}
function makeGeasScenarioA(dto={}){const d=dto?.['geas-hoist-root-v18']||{};const F=Number(d.F),h=Number(d.h),ans=F*h;const q=qNum(G,'Work supplied by the hoist',String.raw`Calculate the work \(W_F\) done by the drive force over the lift.`,ans,String.raw`\(W_F=Fh=${F}(${h})=${nfmt(ans)}\,\mathrm{J}\).`,'number',{quantUnit:'J'});q.transferData={W_F: ans};return q;}
function makeGeasScenarioB(dto={}){const d=dto?.['geas-hoist-root-v18']||{};const F=Number(d.F),fr=Number(d.F_f),m=Number(d.m),g=9.81,ans=(F-fr-m*g)/m;const q=qNum(G,'Net upward acceleration',String.raw`Determine the load's upward acceleration \(a\) from the net vertical force.`,ans,String.raw`Taking upward as positive, \(a=(F-F_f-mg)/m=(${F}-${fr}-${m}(9.81))/${m}=${nfmt(ans)}\,\mathrm{m/s^2}\).`,'number',{quantUnit:'m/s^2'});q.transferData={a: ans};return q;}

function makeGeasScenarioBA(dto={}){const dt=dto||{};const a=Number(dt['geas-hoist-b-v18']?.a),h=Number(dt['geas-hoist-root-v18']?.h),ans=Math.sqrt(2*a*h);const q=qNum(G,'Speed at the top of the lift',String.raw`Assuming the load starts from rest, find its speed \(v\) after rising the full height.`,ans,String.raw`\(v^2=2ah\), hence \(v=\sqrt{2(${nfmt(a)})(${h})}=${nfmt(ans)}\,\mathrm{m/s}\).`,'number',{quantUnit:'m/s'});q.transferData={v: ans};return q;}
function makeGeasScenarioBB(dto={}){const dt=dto||{};const a=Number(dt['geas-hoist-b-v18']?.a),h=Number(dt['geas-hoist-root-v18']?.h),ans=Math.sqrt(2*h/a);const q=qNum(G,'Time to complete the lift',String.raw`Find the time \(t_h\) needed to rise the full height from rest at constant acceleration.`,ans,String.raw`\(h=\frac12at_h^2\), so \(t_h=\sqrt{2h/a}=\sqrt{2(${h})/${nfmt(a)}}=${nfmt(ans)}\,\mathrm{s}\).`,'number',{quantUnit:'s'});q.transferData={t_h: ans};return q;}
function registerGeasScenarioTree(){
  const rootKey='geas-hoist-root-v18',aKey='geas-hoist-a-v18',bKey='geas-hoist-b-v18',baKey='geas-hoist-ba-v18',bbKey='geas-hoist-bb-v18';
  setupRecipe(NAMESPACE_GEAS,'GEAS · Warehouse hoist tree',rootKey,makeGeasScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_GEAS,'Geas · Calculation A',aKey,makeGeasScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_GEAS,'Geas · Calculation B',bKey,makeGeasScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_GEAS,'Geas · Follow-up A',baKey,makeGeasScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_GEAS,'Geas · Follow-up B',bbKey,makeGeasScenarioBB,3,{parentRecipeKey:bKey});
}
registerGeasScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const GEAS_CONCEPT_CARDS = [
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
  ];
registerConceptGeneratorsForCategory(NAMESPACE_GEAS, GEAS_CONCEPT_CARDS);
