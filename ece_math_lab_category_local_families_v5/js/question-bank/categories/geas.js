/* geas: seed entries, explicit expansion families, and category-specific additions. */

function makeGeasExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const F=ri(20,120),d=ri(2,15),ans=v?F/d:F*d;return qNum(G,title,v?`A force \\(${F}\\,N\\) acts over an area \\(${d}\\,m^2\\). Find pressure.`:`A technician pushes a cart with force \\(${F}\\,N\\) through \\(${d}\\,m\\) in the force direction. Find work.`,ans,v?`\\(P=F/A=${nfmt(ans)}\\,Pa\\).`:`\\(W=Fd=${ans}\\,J\\).`)
  }
}
function makeGeasExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,40),vol=ri(1,12),ans=v?m/vol:vol/m;return qNum(G,title,v?`A sample of mass \\(${m}\\,kg\\) occupies \\(${vol}\\,m^3\\). Find density.`:`For the same sample, find specific volume \\(V/m\\).`,ans,v?`\\(\\rho=m/V=${nfmt(ans)}\\,kg/m^3\\).`:`\\(v_s=V/m=${nfmt(ans)}\\,m^3/kg\\).`)
  }
}
function makeGeasExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const m=ri(1,8),c=ri(300,1200),dt=ri(5,45),ans=v?m*c*dt/1000:m*c*dt;return qNum(G,title,v?`A \\(${m}\\,kg\\) sample with specific heat \\(${c}\\,J/(kg\\,K)\\) warms by \\(${dt}\\,K\\). Find heat in kJ.`:`For the same sample, find heat transferred in J.`,ans,v?`\\(Q=mc\\Delta T/1000=${nfmt(ans)}\\,kJ\\).`:`\\(Q=mc\\Delta T=${nfmt(ans)}\\,J\\).`)
  }
}
function makeGeasExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const n=ri(1,4),R=ri(280,360),V=rand(.01,.04),ans=v?n*8.314*R/1000/V:n*8.314*R/V;return qNum(G,title,v?`An ideal gas has \\(n=${n}\\,mol\\), \\(T=${R}\\,K\\), and \\(V=${nfmt(V)}\\,m^3\\). Find pressure in kPa.`:`For the same gas, find pressure in Pa.`,ans,v?`\\(P=nRT/V=${nfmt(ans)}\\,kPa\\).`:`\\(P=nRT/V=${nfmt(ans)}\\,Pa\\).`)
  }
}
function makeGeasExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,30),vel=ri(2,18),ans=v?.5*m*vel*vel:m*vel;return qNum(G,title,v?`A cart of mass \\(${m}\\,kg\\) travels at \\(${vel}\\,m/s\\). Find kinetic energy.`:`For the same cart, find momentum magnitude.`,ans,v?`\\(K=mv^2/2=${ans}\\,J\\).`:`\\(p=mv=${ans}\\,kg\\,m/s\\).`)
  }
}
function makeGeasExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,25),h=ri(2,20),g=9.81,ans=v?m*g:m*g*h;return qNum(G,title,v?`A mass \\(${m}\\,kg\\) is near Earth's surface. Find its weight using \\(g=9.81\\,m/s^2\\).`:`Raise a mass \\(${m}\\,kg\\) through height \\(${h}\\,m\\). Find gravitational potential-energy increase.`,ans,v?`\\(W=mg=${nfmt(ans)}\\,N\\).`:`\\(\\Delta U=mgh=${nfmt(ans)}\\,J\\).`)
  }
}
function makeGeasExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(850,1200),g=9.81,h=ri(1,15),ans=v?rho*g*h:h*rho*g/1000;return qNum(G,title,v?`Fluid density \\(${rho}\\,kg/m^3\\) at depth \\(${h}\\,m\\): find gauge pressure in Pa.`:`For the same fluid depth, find gauge pressure in kPa.`,ans,v?`\\(p=\\rho gh=${nfmt(ans)}\\,Pa\\).`:`\\(p/1000=${nfmt(ans)}\\,kPa\\).`)
  }
}
function makeGeasExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const rho=1000,g=9.81,Q=rand(.002,.02),h=ri(5,35),eta=rand(.5,.9),ans=v?rho*g*Q*h:rho*g*Q*h/eta;return qNum(G,title,v?`A pump lifts water at flow rate \\(${nfmt(Q)}\\,m^3/s\\) through \\(${h}\\,m\\). Find ideal hydraulic power.`:`The pump operates at efficiency \\(${nfmt(eta*100)}\\%\\). Find required input power for the same flow and head.`,ans,v?`\\(P_h=\\rho gQh=${nfmt(ans)}\\,W\\).`:`\\(P_{in}=P_h/\\eta=${nfmt(ans)}\\,W\\).`)
  }
}
function makeGeasExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const useful=ri(100,900),input=ri(useful+100,1500),ans=v?useful/input*100:input-useful;return qNum(G,title,v?`A device receives \\(${input}\\,W\\) and delivers \\(${useful}\\,W\\) useful power. Find efficiency percent.`:`For the same device, find power loss.`,ans,v?`\\(\\eta=100P_{out}/P_{in}=${nfmt(ans)}\\%\\).`:`\\(P_{loss}=P_{in}-P_{out}=${ans}\\,W\\).`,'number')
  }
}
function makeGeasExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const k=ri(100,800),x=ri(2,15),ans=v?.5*k*x*x:k*x;return qNum(G,title,v?`A spring with stiffness \\(${k}\\,N/m\\) is stretched \\(${x/100}\\,m\\). Find stored energy in joules.`:`Find spring force magnitude at extension \\(${x/100}\\,m\\).`,ans,v?`\\(U=kx^2/2=${nfmt(ans)}\\,J\\).`:`\\(F=kx=${nfmt(ans)}\\,N\\).`)
  }
}
function makeGeasExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(2,15),alpha=pick([1.1e-5,1.7e-5,2.4e-5]),dt=ri(20,100),ans=v?L0*alpha*dt:L0*(1+alpha*dt);return qNum(G,title,v?`A \\(${L0}\\,m\\) metal bar with \\(\\alpha=${alpha}\\,K^{-1}\\) warms by \\(${dt}\\,K\\). Find expansion in metres.`:`For the same bar, find final length in metres.`,ans,v?`\\(\\Delta L=L\\alpha\\Delta T=${nfmt(ans)}\\,m\\).`:`\\(L_f=L(1+\\alpha\\Delta T)=${nfmt(ans)}\\,m\\).`)
  }
}
function makeGeasExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const F=ri(100,1200),A0=ri(10,80)*1e-4,ans=v?F/A0/1e6:F/A0;return qNum(G,title,v?`A specimen carries \\(${F}\\,N\\) over \\(${nfmt(A0)}\\,m^2\\). Find stress in MPa.`:`For the same specimen, find stress in Pa.`,ans,v?`\\(\\sigma=F/A/10^6=${nfmt(ans)}\\,MPa\\).`:`\\(\\sigma=F/A=${nfmt(ans)}\\,Pa\\).`)
  }
}
function makeGeasExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const dL=rand(.001,.008),L0=ri(1,6),dt=ri(20,90),ans=v?dL/(L0*dt):dL/L0;return qNum(G,title,v?`A \\(${L0}\\,m\\) rod expands \\(${nfmt(dL)}\\,m\\) after a \\(${dt}\\,K\\) increase. Find expansion coefficient.`:`For the same rod, find engineering strain.`,ans,v?`\\(\\alpha=\\Delta L/(L\\Delta T)=${nfmt(ans)}\\,K^{-1}\\).`:`\\(\\epsilon=\\Delta L/L=${nfmt(ans)}\\).`)
  }
}
function makeGeasExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,20),vel=ri(3,15),dt=rand(.2,2),ans=v?m*vel/dt:m*vel;return qNum(G,title,v?`A \\(${m}\\,kg\\) cart at \\(${vel}\\,m/s\\) stops in \\(${nfmt(dt)}\\,s\\). Find average braking force magnitude.`:`Find momentum immediately before braking for the same cart.`,ans,v?`\\(F_{avg}=\\Delta p/\\Delta t=mv/t=${nfmt(ans)}\\,N\\).`:`\\(p=mv=${ans}\\,kg\\,m/s\\).`)
  }
}
function makeGeasExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const F=ri(20,150),dt=rand(.1,1.5),ans=v?F*dt:F/dt;return qNum(G,title,v?`A net force of \\(${F}\\,N\\) acts for \\(${nfmt(dt)}\\,s\\). Find impulse.`:`For the same force and time, find average rate of impulse delivery \\(J/\\Delta t\\).`,ans,v?`\\(J=F\\Delta t=${nfmt(ans)}\\,N\\,s\\).`:`\\(J/\\Delta t=${nfmt(ans)}\\,N\\).`)
  }
}
function makeGeasExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const F=ri(20,180),r=rand(.2,1.4),theta=pick([Math.PI/6,Math.PI/4,Math.PI/3]),ans=v?F*r*Math.sin(theta):F*r;return qNum(G,title,v?`A force \\(${F}\\,N\\) acts at radius \\(${nfmt(r)}\\,m\\) at angle \\(${nfmt(theta)}\\,rad\\). Find torque magnitude.`:`Find torque if the force is perpendicular at the same radius.`,ans,v?`\\(\\tau=rF\\sin\\theta=${nfmt(ans)}\\,N\\,m\\).`:`\\(\\tau=rF=${nfmt(ans)}\\,N\\,m\\).`)
  }
}
function makeGeasExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const rpm=ri(300,1800),ans=v?rpm*2*Math.PI/60:rpm/60;return qNum(G,title,v?`A motor shaft rotates at \\(${rpm}\\,rpm\\). Convert to angular velocity in rad/s.`:`For the same shaft speed, find rotations per second.`,ans,v?`\\(\\omega=2\\pi(rpm)/60=${nfmt(ans)}\\,rad/s\\).`:`\\(f=rpm/60=${nfmt(ans)}\\,Hz\\).`)
  }
}
function makeGeasExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,15),v0=ri(3,16),r=ri(2,12),ans=v?v0*v0/r:m*v0*v0/r;return qNum(G,title,v?`An object moves at \\(${v0}\\,m/s\\) along a circle of radius \\(${r}\\,m\\). Find centripetal acceleration.`:`An object of mass \\(${m}\\,kg\\) moves at \\(${v0}\\,m/s\\) along radius \\(${r}\\,m\\). Find centripetal force.`,ans,v?`\\(a_c=v^2/r=${nfmt(ans)}\\,m/s^2\\).`:`\\(F_c=mv^2/r=${nfmt(ans)}\\,N\\).`)
  }
}
function makeGeasExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const rho=1000,V0=rand(.002,.02),ans=v?rho*9.81*V0:rho*V0;return qNum(G,title,v?`A fully submerged object displaces \\(${nfmt(V0)}\\,m^3\\) of water. Find buoyant force.`:`For the same displacement, find displaced water mass.`,ans,v?`\\(F_B=\\rho gV=${nfmt(ans)}\\,N\\).`:`\\(m=\\rho V=${nfmt(ans)}\\,kg\\).`)
  }
}
function makeGeasExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const mu=rand(.15,.8),N0=ri(100,800),ans=v?mu*N0:mu;return qNum(G,title,v?`A surface has friction coefficient \\(\\mu=${nfmt(mu)}\\) and normal force \\(${N0}\\,N\\). Find maximum static friction.`:`Given maximum friction \\(F=\\mu N\\), with \\(F=${nfmt(mu*N0)}\\,N\\), \\(N=${N0}\\,N\\), find \\(\\mu\\).`,ans,v?`\\(F_{max}=\\mu N=${nfmt(ans)}\\,N\\).`:`\\(\\mu=F/N=${nfmt(ans)}\\).`)
  }
}
function makeGeasExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(1,8)*1e-7,L0=ri(2,20),A0=ri(2,10)*1e-6,ans=v?rho*L0/A0:A0/(rho*L0);return qNum(G,title,v?`A wire has resistivity \\(\\rho=${nfmt(rho)}\\,\\Omega m\\), length \\(${L0}\\,m\\), cross-section \\(${nfmt(A0)}\\,m^2\\). Find resistance.`:`For the same wire, find conductance \\(1/R\\).`,ans,v?`\\(R=\\rho L/A=${nfmt(ans)}\\,\\Omega\\).`:`\\(G=1/R=${nfmt(ans)}\\,S\\).`)
  }
}
function makeGeasExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const rho=ri(900,1200),vel=rand(.2,3),D0=ri(1,8)*.01,mu=pick([.001,.002,.003,.004]),ans=v?rho*vel*D0/mu:mu/rho;return qNum(G,title,v?`Water-like fluid has \(\rho=${rho}\,kg/m^3\), speed \(${nfmt(vel)}\,m/s\), pipe diameter \(${D0}\,m\), and dynamic viscosity \(${mu}\,Pa\,s\). Find the Reynolds number.`:`A water-like fluid has density \(\rho=${rho}\,kg/m^3\) and dynamic viscosity \(\mu=${mu}\,Pa\,s\). Find its kinematic viscosity \(\nu\) in \(m^2/s\).`,ans,v?`\(Re=\rho vD/\mu=${nfmt(ans)}\).`:`Kinematic viscosity is \(\nu=\mu/\rho=${mu}/${rho}=${nfmt(ans)}\,m^2/s\).`)
  }
}
function makeGeasExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const V0=ri(5,24),I0=ri(1,8),ans=v?V0*I0:V0/I0;return qNum(G,title,v?`A device runs at \\(${V0}\\,V\\) and \\(${I0}\\,A\\). Find electrical power.`:`For the same device, find resistance.`,ans,v?`\\(P=VI=${ans}\\,W\\).`:`\\(R=V/I=${nfmt(ans)}\\,\\Omega\\).`)
  }
}
function makeGeasExpansionFamily24(title){
  const v=ri(0,1)===1;
  {
      const m1=ri(1,8),m2=ri(1,8),t1=ri(60,90),t2=ri(10,25),ans=v?(m1*t1+m2*t2)/(m1+m2):m1*(t1-t2);return qNum(G,title,v?`Equal-specific-heat samples \\(${m1}\\,kg\\) at \\(${t1}°C\\) and \\(${m2}\\,kg\\) at \\(${t2}°C\\) are mixed without heat loss. Find equilibrium temperature.`:`For the hot sample alone, compute the temperature-weighted mass difference \\(m_1(T_1-T_2)\\).`,ans,v?`Energy balance gives \\(T_f=(m_1T_1+m_2T_2)/(m_1+m_2)=${nfmt(ans)}°C\\).`:`\\(m_1(T_1-T_2)=${nfmt(ans)}\\,kg\\,°C\\).`)
  }
}
function makeGeasExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const effort=ri(40,240),load=ri(200,1200),ans=v?load/effort:effort/load;return qNum(G,title,v?`A machine lifts load \\(${load}\\,N\\) with effort \\(${effort}\\,N\\). Find mechanical advantage.`:`For the same machine, find effort-to-load ratio.`,ans,v?`\\(MA=Load/Effort=${nfmt(ans)}\\).`:`\\(E/L=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const GEAS_EXTRA_NAMES = ["Work-energy calculation", "Force and area pressure", "Density calculation", "Efficiency calculation", "Heat transfer", "Ideal-gas relation", "Kinetic energy", "Hydraulic power", "Hooke-law extension", "Mechanical advantage"];

function makeGeasTopicSeed(index){
  const family=index%10, variant=Math.floor(index/10)+1;
  const title=`${GEAS_EXTRA_NAMES[family]} · version ${variant}`;
      if(family===0){const F=ri(10,80),d=ri(2,12),ans=F*d;return qNum(G,title,`A technician pushes a cart with constant force \\(F=${F}\\,N\\) over \\(d=${d}\\,m\\) in the force direction. Find work \\(W\\).`,ans,`\\(W=Fd=${F}(${d})=${ans}\\,J\\).`)}
    if(family===1){const F=ri(100,900),A0=ri(2,12),ans=F/A0;return qNum(G,title,`A piston applies force \\(F=${F}\\,N\\) over area \\(A=${A0}\\,m^2\\). Find pressure in Pa.`,ans,`\\(P=F/A=${F}/${A0}=${nfmt(ans)}\\,Pa\\).`)}
    if(family===2){const m=ri(5,90),vol=ri(1,12),ans=m/vol;return qNum(G,title,`A sample has mass \\(m=${m}\\,kg\\) and volume \\(V=${vol}\\,m^3\\). Find its density.`,ans,`\\(\\rho=m/V=${m}/${vol}=${nfmt(ans)}\\,kg/m^3\\).`)}
    if(family===3){const useful=ri(2,8)*100, supplied=useful+ri(100,600),ans=100*useful/supplied;return qNum(G,title,`A machine produces useful output \\(${useful}\\,J\\) from supplied energy \\(${supplied}\\,J\\). Find efficiency.`,ans,`\\(\\eta=100E_{out}/E_{in}=100(${useful})/${supplied}=${nfmt(ans)}\\%\\).`,'percent')}
    if(family===4){const m=ri(1,8),c=ri(400,900),dt=ri(5,40),ans=m*c*dt;return qNum(G,title,`A material of mass \\(${m}\\,kg\\) and specific heat \\(${c}\\,J/(kg\\cdot K)\\) warms by \\(${dt}\\,K\\). Find heat absorbed.`,ans,`\\(Q=mc\\Delta T=${m}(${c})(${dt})=${ans}\\,J\\).`)}
    if(family===5){const mol=ri(1,4),temp=ri(260,400),vol=ri(2,9),ans=mol*8.314*temp/vol;return qNum(G,title,`An ideal gas has \\(n=${mol}\\,mol\\), \\(T=${temp}\\,K\\), and \\(V=${vol}\\,m^3\\). Using \\(R=8.314\\,J/(mol\\cdot K)\\), find pressure in Pa.`,ans,`\\(PV=nRT\\), hence \\(P=nRT/V=${mol}(8.314)(${temp})/${vol}=${nfmt(ans)}\\,Pa\\).`)}
    if(family===6){const m=ri(2,20),v=ri(3,16),ans=.5*m*v*v;return qNum(G,title,`A moving body has mass \\(${m}\\,kg\\) and speed \\(${v}\\,m/s\\). Find translational kinetic energy.`,ans,`\\(K=\\frac12mv^2=\\frac12(${m})(${v})^2=${nfmt(ans)}\\,J\\).`)}
    if(family===7){const flow=ri(1,8)/100,head=ri(3,25),ans=1000*9.81*flow*head;return qNum(G,title,`A water pump moves \\(Q=${nfmt(flow)}\\,m^3/s\\) through a head of \\(${head}\\,m\\). Estimate ideal hydraulic power using \\(\\rho=1000\\,kg/m^3\\) and \\(g=9.81\\,m/s^2\\).`,ans,`\\(P=\\rho gQh=1000(9.81)(${nfmt(flow)})(${head})=${nfmt(ans)}\\,W\\).`)}
    if(family===8){const F=ri(20,150),k=ri(10,60),ans=F/k;return qNum(G,title,`A spring has stiffness \\(k=${k}\\,N/m\\) and is loaded by \\(F=${F}\\,N\\). Find extension in metres assuming a linear spring.`,ans,`Hooke's law gives \\(x=F/k=${F}/${k}=${nfmt(ans)}\\,m\\).`)}
    const load=ri(200,1200),effort=ri(50,300),ans=load/effort;return qNum(G,title,`A simple machine raises a \\(${load}\\,N\\) load with effort \\(${effort}\\,N\\). Find its ideal mechanical advantage.`,ans,`\\(IMA=Load/Effort=${load}/${effort}=${nfmt(ans)}\\).`);
}


NUMERIC_GENERATOR_REGISTRY.geas = [...numericSeedEntries(G, GEAS_EXTRA_NAMES, 'Core', 'topic-seed', makeGeasTopicSeed),
    numericEntry('geas',"Work-energy calculation · family 01 (randomized variant)","geas-family-01",()=>makeGeasExpansionFamily01("Work-energy calculation · family 01 (randomized variant)")),
    numericEntry('geas',"Pressure from force and area · family 02 (randomized variant)","geas-family-02",()=>makeGeasExpansionFamily02("Pressure from force and area · family 02 (randomized variant)")),
    numericEntry('geas',"Material density · family 03 (randomized variant)","geas-family-03",()=>makeGeasExpansionFamily03("Material density · family 03 (randomized variant)")),
    numericEntry('geas',"Machine efficiency · family 04 (randomized variant)","geas-family-04",()=>makeGeasExpansionFamily04("Machine efficiency · family 04 (randomized variant)")),
    numericEntry('geas',"Sensible heat transfer · family 05 (randomized variant)","geas-family-05",()=>makeGeasExpansionFamily05("Sensible heat transfer · family 05 (randomized variant)")),
    numericEntry('geas',"Ideal-gas pressure · family 06 (randomized variant)","geas-family-06",()=>makeGeasExpansionFamily06("Ideal-gas pressure · family 06 (randomized variant)")),
    numericEntry('geas',"Kinetic energy · family 07 (randomized variant)","geas-family-07",()=>makeGeasExpansionFamily07("Kinetic energy · family 07 (randomized variant)")),
    numericEntry('geas',"Hydraulic power · family 08 (randomized variant)","geas-family-08",()=>makeGeasExpansionFamily08("Hydraulic power · family 08 (randomized variant)")),
    numericEntry('geas',"Spring extension · family 09 (randomized variant)","geas-family-09",()=>makeGeasExpansionFamily09("Spring extension · family 09 (randomized variant)")),
    numericEntry('geas',"Mechanical advantage · family 10 (randomized variant)","geas-family-10",()=>makeGeasExpansionFamily10("Mechanical advantage · family 10 (randomized variant)")),
    numericEntry('geas',"Power from flow and head · family 11 (randomized variant)","geas-family-11",()=>makeGeasExpansionFamily11("Power from flow and head · family 11 (randomized variant)")),
    numericEntry('geas',"Linear thermal expansion · family 12 (randomized variant)","geas-family-12",()=>makeGeasExpansionFamily12("Linear thermal expansion · family 12 (randomized variant)")),
    numericEntry('geas',"Momentum from mass and velocity · family 13 (randomized variant)","geas-family-13",()=>makeGeasExpansionFamily13("Momentum from mass and velocity · family 13 (randomized variant)")),
    numericEntry('geas',"Buoyant force · family 14 (randomized variant)","geas-family-14",()=>makeGeasExpansionFamily14("Buoyant force · family 14 (randomized variant)")),
    numericEntry('geas',"Parallel force components · family 15 (randomized variant)","geas-family-15",()=>makeGeasExpansionFamily15("Parallel force components · family 15 (randomized variant)")),
    numericEntry('geas',"Thermal expansion length · family 16 (randomized variant)","geas-family-16",()=>makeGeasExpansionFamily16("Thermal expansion length · family 16 (randomized variant)")),
    numericEntry('geas',"Efficiency with losses · family 17 (randomized variant)","geas-family-17",()=>makeGeasExpansionFamily17("Efficiency with losses · family 17 (randomized variant)")),
    numericEntry('geas',"Impulse and momentum · family 18 (randomized variant)","geas-family-18",()=>makeGeasExpansionFamily18("Impulse and momentum · family 18 (randomized variant)")),
    numericEntry('geas',"Ohm-equivalent energy transfer · family 19 (randomized variant)","geas-family-19",()=>makeGeasExpansionFamily19("Ohm-equivalent energy transfer · family 19 (randomized variant)")),
    numericEntry('geas',"Simple harmonic energy · family 20 (randomized variant)","geas-family-20",()=>makeGeasExpansionFamily20("Simple harmonic energy · family 20 (randomized variant)")),
    numericEntry('geas',"Hydrostatic pressure with depth · family 21 (randomized variant)","geas-family-21",()=>makeGeasExpansionFamily21("Hydrostatic pressure with depth · family 21 (randomized variant)")),
    numericEntry('geas',"Normal stress from axial load · family 22 (randomized variant)","geas-family-22",()=>makeGeasExpansionFamily22("Normal stress from axial load · family 22 (randomized variant)")),
    numericEntry('geas',"Gear ratio and output speed · family 23 (randomized variant)","geas-family-23",()=>makeGeasExpansionFamily23("Gear ratio and output speed · family 23 (randomized variant)")),
    numericEntry('geas',"Series thermal resistance · family 24 (randomized variant)","geas-family-24",()=>makeGeasExpansionFamily24("Series thermal resistance · family 24 (randomized variant)")),
    numericEntry('geas',"Bernoulli pressure-speed conversion · family 25 (randomized variant)","geas-family-25",()=>makeGeasExpansionFamily25("Bernoulli pressure-speed conversion · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(G,'Normal stress from axial load','geas-normal-stress-force-area',()=>{
  const F=ri(5,40),area=rand(.01,.08),ans=F/(1000*area);
  return qNum(G,'Normal stress from axial load',`A rod carries an axial force of \(${F}\\,kN\) over cross-sectional area \(A=${nfmt(area)}\\,m^2\). Find normal stress in MPa.`,ans,`\(\\sigma=F/A\). Converting kN/m² to MPa gives \(\\sigma=${F}/(1000\\times${nfmt(area)})=${nfmt(ans)}\\,MPa\).`)
});
appendNumericRecipe(G,'Field scenario · Hydraulic power of a water pump','scenario-geas-hydraulic-pump-power',()=>{
  const flow=ri(2,20)/1000,head=ri(4,30),eta=pick([.55,.65,.72,.8]),rho=1000,g=9.81,hydraulic=rho*g*flow*head,ans=hydraulic/eta;
  return qNum(G,'Field scenario · Hydraulic power of a water pump',`A field engineer specifies a pump moving water at \(Q=${nfmt(flow)}\,m^3/s\) against head \(h=${head}\,m\). If pump efficiency is \(\eta=${eta}\), estimate the required input power using \(P_{in}=\rho gQh/\eta\), with \(\rho=1000\,kg/m^3\), \(g=9.81\,m/s^2\).`,ans,`Hydraulic output is \(P_h=\rho gQh=1000(9.81)(${nfmt(flow)})(${head})=${nfmt(hydraulic)}\,W\). The required input is \(P_{in}=P_h/\eta=${nfmt(hydraulic)}/${eta}=${nfmt(ans)}\,W\).`);
});
appendNumericRecipe(G,'Applied · Heat required to warm a test component','scenario-geas-component-heating',()=>{
  const m=ri(1,12)/10,cp=ri(350,900),dt=ri(10,70),ans=m*cp*dt;
  return qNum(G,'Applied · Heat required to warm a test component',`A component of mass \(m=${nfmt(m)}\,kg\) and specific heat \(c_p=${cp}\,J/(kg\cdot K)\) warms by \(\Delta T=${dt}\,K\). Neglecting losses, calculate heat input \(Q=mc_p\Delta T\).`,ans,`\(Q=mc_p\Delta T=${nfmt(m)}(${cp})(${dt})=${nfmt(ans)}\,J\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('geas','Additional · Specific gravity from sample density','geas-topup-01',()=>{
  const rho=ri(650,1400),ans=rho/1000;
  return qNum(G,'Specific gravity from sample density',`A liquid sample has density \(${rho}\,kg/m^3\). Using water density \(1000\,kg/m^3\), find its specific gravity.`,ans,`Specific gravity is the density ratio: \(SG=${rho}/1000=${nfmt(ans)}\), dimensionless.`);
});
appendNumericRecipe('geas','Additional · Hydraulic pressure from force and piston area','geas-topup-02',()=>{
  const F=ri(100,4000),Acm=ri(2,50),ans=F/(Acm/10000);
  return qNum(G,'Hydraulic pressure from force and piston area',`A hydraulic piston carries force \(${F}\,N\) over area \(${Acm}\,cm^2\). Find pressure in Pa.`,ans,`Convert area: \(A=${Acm}\times10^{-4}\,m^2\). Then \(p=F/A=${F}/(${Acm}\times10^{-4})=${nfmt(ans)}\,Pa\).`);
});
appendNumericRecipe('geas','Additional · Mechanical power from force and speed','geas-topup-03',()=>{
  const F=ri(20,800),v=rand(.5,8),ans=F*v;
  return qNum(G,'Mechanical power from force and speed',`A motor moves a load with force \(${F}\,N\) at constant speed \(${nfmt(v)}\,m/s\). Find mechanical power in watts.`,ans,`When force and velocity are parallel, \(P=Fv=${F}(${nfmt(v)})=${nfmt(ans)}\,W\).`);
});
appendNumericRecipe('geas','Additional · Device efficiency from input and output power','geas-topup-04',()=>{
  const input=ri(300,2500),output=ri(100,input-1),ans=100*output/input;
  return qNum(G,'Device efficiency from input and output power',`A device receives \(${input}\,W\) and delivers useful output \(${output}\,W\). Find efficiency in percent.`,ans,`\(\eta=100P_{out}/P_{in}=100(${output})/${input}=${nfmt(ans)}\%\).`,'percent');
});
appendNumericRecipe('geas','Additional · Torque from a perpendicular force','geas-topup-05',()=>{
  const F=ri(10,300),r=rand(.1,2),ans=F*r;
  return qNum(G,'Torque from a perpendicular force',`A perpendicular force \(${F}\,N\) acts \(${nfmt(r)}\,m\) from a pivot. Find torque magnitude.`,ans,`For a perpendicular force, \(\tau=rF=${nfmt(r)}(${F})=${nfmt(ans)}\,N\,m\).`);
});
appendNumericRecipe('geas','Additional · Centripetal acceleration','geas-topup-06',()=>{
  const v=ri(2,30),r=ri(2,25),ans=v*v/r;
  return qNum(G,'Centripetal acceleration',`A test mass moves in a circle of radius \(${r}\,m\) at speed \(${v}\,m/s\). Find centripetal acceleration.`,ans,`\(a_c=v^2/r=${v}^2/${r}=${nfmt(ans)}\,m/s^2\).`);
});
appendNumericRecipe('geas','Additional · Linear thermal expansion','geas-topup-07',()=>{
  const L=ri(1,12),alpha=pick([1.1e-5,1.7e-5,2.3e-5]),dT=ri(20,120),ans=L*alpha*dT;
  return qNum(G,'Linear thermal expansion',`A \(${L}\,m\) bar has expansion coefficient \(\alpha=${alpha}\,K^{-1}\). If temperature rises by \(${dT}\,K\), find \(\Delta L\) in metres.`,ans,`\(\Delta L=\alpha L\Delta T=${alpha}(${L})(${dT})=${nfmt(ans)}\,m\).`);
});
appendNumericRecipe('geas','Additional · Elastic potential energy in a spring','geas-topup-08',()=>{
  const k=ri(100,1200),x=rand(.01,.15),ans=.5*k*x*x;
  return qNum(G,'Elastic potential energy in a spring',`A spring has stiffness \(k=${k}\,N/m\) and extension \(x=${nfmt(x)}\,m\). Find stored elastic potential energy.`,ans,`\(U=\frac12kx^2=0.5(${k})(${nfmt(x)})^2=${nfmt(ans)}\,J\).`);
});
appendNumericRecipe('geas','Additional · Normal stress from axial loading','geas-topup-09',()=>{
  const F=ri(800,12000),Amm=ri(20,150),ans=F/(Amm*1e-6)/1e6;
  return qNum(G,'Normal stress from axial loading',`A specimen carries axial force \(${F}\,N\) on cross-sectional area \(${Amm}\,mm^2\). Find normal stress in MPa.`,ans,`\(\sigma=F/A=${F}/(${Amm}\times10^{-6})\,Pa=${nfmt(ans)}\,MPa\).`);
});
appendNumericRecipe('geas','Additional · Reynolds number for pipe flow','geas-topup-10',()=>{
  const rho=ri(850,1200),v=rand(.1,2),D=rand(.01,.08),mu=rand(.0008,.003),ans=rho*v*D/mu;
  return qNum(G,'Reynolds number for pipe flow',`A fluid has density \(\rho=${rho}\,kg/m^3\), mean speed \(v=${nfmt(v)}\,m/s\), pipe diameter \(D=${nfmt(D)}\,m\), and dynamic viscosity \(\mu=${nfmt(mu)}\,Pa\,s\). Find Reynolds number.`,ans,`\(Re=\rho vD/\mu=${rho}(${nfmt(v)})(${nfmt(D)})/${nfmt(mu)}=${nfmt(ans)}\), dimensionless.`);
});
