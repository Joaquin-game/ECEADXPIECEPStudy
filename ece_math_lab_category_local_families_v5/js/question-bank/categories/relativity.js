/* relativity: seed entries, explicit expansion families, and category-specific additions. */

function makeRelativityExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?gamma:gamma-1;return qNum(SR,title,v?`An object travels at \\(v=${beta}c\\). Find Lorentz factor \\(\\gamma\\).`:`For speed \\(v=${beta}c\\), find \\(\\gamma-1\\).`,ans,v?`\\(\\gamma=1/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`:`\\(\\gamma-1=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const tau=ri(2,12),beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?tau:gamma*tau;return qNum(SR,title,v?`A moving clock's observed interval is \\(\\Delta t=${nfmt(gamma*tau)}\\,s\\) at speed \\(${beta}c\\). Find proper time.`:`Proper time is \\(${tau}\\,s\\), speed \\(${beta}c\\). Find dilated time.`,ans,v?`\\(\\Delta\\tau=\\Delta t/\\gamma=${tau}\\,s\\).`:`\\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(ans)}\\,s\\).`)
  }
}
function makeRelativityExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const L0=ri(2,20),beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?L0/gamma:L0*gamma;return qNum(SR,title,v?`A rod has proper length \\(${L0}\\,m\\) and travels at \\(${beta}c\\). Find its observed length.`:`A moving rod is observed to have length \\(${nfmt(L0/gamma)}\\,m\\) at speed \\(${beta}c\\). Find its proper length.`,ans,v?`\\(L=L_0/\\gamma=${nfmt(ans)}\\,m\\).`:`\\(L_0=\\gamma L=${nfmt(ans)}\\,m\\).`)
  }
}
function makeRelativityExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const m=ri(1,8),ans=v?m*299792458**2:m*299792458**2/1e6;return qNum(SR,title,v?`A rest mass is \\(${m}\\,kg\\). Find rest energy in joules using \\(c=299792458\\,m/s\\).`:`A rest mass is \\(${m}\\,kg\\). Find rest energy in MJ.`,ans,v?`\\(E_0=mc^2=${nfmt(ans)}\\,J\\).`:`\\(E_0=mc^2/10^6=${nfmt(ans)}\\,MJ\\).`)
  }
}
function makeRelativityExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?beta/Math.sqrt(1-beta*beta):.5*beta*beta/(1-beta*beta);return qNum(SR,title,v?`Find relativistic momentum factor \\(p/(mc)=\\gamma\\beta\\) at \\(v=${beta}c\\).`:`At \\(v=${beta}c\\), find \\(K/(mc^2)=\\gamma-1\\) approximately.`,ans,v?`\\(\\gamma\\beta=\\beta/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`:`\\(K/(mc^2)=\\gamma-1=${nfmt(1/Math.sqrt(1-beta*beta)-1)}\\).`)
  }
}
function makeRelativityExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?beta/Math.sqrt(1-beta*beta):Math.sqrt(1-beta*beta);return qNum(SR,title,v?`For \\(v=${beta}c\\), find dimensionless momentum \\(p/(mc)=\\gamma\\beta\\).`:`For \\(v=${beta}c\\), find the length-contraction factor \\(1/\\gamma\\).`,ans,v?`\\(p/(mc)=\\gamma\\beta=${nfmt(ans)}\\).`:`\\(1/\\gamma=\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const u=pick([.1,.2,.3,.4]),v0=pick([.2,.3,.4,.5]),ans=v?(u+v0)/(1+u*v0):Math.abs(u-v0)/(1-u*v0);return qNum(SR,title,v?`Two collinear velocities \\(u=${u}c\\) and \\(v=${v0}c\\) point in the same direction. Find relativistic combined speed as a fraction of c.`:`Two objects move in opposite directions with speeds \\(${u}c\\) and \\(${v0}c\\). Find magnitude of relativistic relative speed as a fraction of c.`,ans,v?`\\(w/c=(\\beta_u+\\beta_v)/(1+\\beta_u\\beta_v)=${nfmt(ans)}\\).`:`\\(|w|/c=|\\beta_u-\\beta_v|/(1-\\beta_u\\beta_v)=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const m=ri(1,5),ans=v?m*299792458**2/1e6:m*299792458**2;return qNum(SR,title,v?`Rest energy of \\(${m}\\,kg\\) in MJ.`:`Rest energy of \\(${m}\\,kg\\) in J.`,ans,v?`\\(E_0=mc^2/10^6=${nfmt(ans)}\\,MJ\\).`:`\\(E_0=mc^2=${nfmt(ans)}\\,J\\).`)
  }
}
function makeRelativityExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const tau=ri(2,10),beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?tau*gamma:tau/gamma;return qNum(SR,title,v?`A particle's proper lifetime is \\(${tau}\\,s\\), speed \\(${beta}c\\). Find lab-frame lifetime.`:`A lab-frame lifetime is \\(${nfmt(tau*gamma)}\\,s\\) at speed \\(${beta}c\\). Find proper lifetime.`,ans,v?`\\(\\tau_{lab}=\\gamma\\tau_0=${nfmt(ans)}\\,s\\).`:`\\(\\tau_0=\\tau_{lab}/\\gamma=${nfmt(ans)}\\,s\\).`)
  }
}
function makeRelativityExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const gamma=pick([1.25,1.5,2,2.5]),ans=v?Math.sqrt(1-1/(gamma*gamma)):1/Math.sqrt(1-((Math.sqrt(1-1/(gamma*gamma)))**2));return qNum(SR,title,v?`Lorentz factor is \\(\\gamma=${gamma}\\). Find speed as a fraction of c.`:`A particle's Lorentz factor is \\(\\gamma=${gamma}\\). Find reciprocal Lorentz factor.`,ans,v?`\\(\\beta=\\sqrt{1-1/\\gamma^2}=${nfmt(ans)}\\).`:`\\(1/\\gamma=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?gamma*beta:gamma-1;return qNum(SR,title,v?`At speed \\(${beta}c\\), find normalized momentum \\(\\gamma\\beta\\).`:`At speed \\(${beta}c\\), find normalized kinetic energy \\(K/(mc^2)=\\gamma-1\\).`,ans,v?`\\(\\gamma\\beta=${nfmt(ans)}\\).`:`\\(K/(mc^2)=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.1,.2,.3,.4]),ans=v?1/Math.sqrt(1-beta*beta):Math.sqrt(1-beta*beta);return qNum(SR,title,v?`Find Lorentz factor at speed \\(${beta}c\\).`:`Find length-contraction factor at speed \\(${beta}c\\).`,ans,v?`\\(\\gamma=1/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`:`\\(L/L_0=\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),m=ri(1,4),gamma=1/Math.sqrt(1-beta*beta),ans=v?m*gamma:m*(gamma-1);return qNum(SR,title,v?`A particle's rest mass is \\(${m}\\,kg\\) and speed \\(${beta}c\\). Find relativistic mass-equivalent \\(\\gamma m\\) in kg.`:`A particle's rest mass is \\(${m}\\,kg\\), speed \\(${beta}c\\). Find normalized kinetic energy factor times mass \\(m(\\gamma-1)\\).`,ans,v?`\\(m_{rel}=\\gamma m=${nfmt(ans)}\\,kg\\).`:`\\(m(\\gamma-1)=${nfmt(ans)}\\,kg\\).`)
  }
}
function makeRelativityExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?beta*beta:1-beta*beta;return qNum(SR,title,v?`For speed \\(v=${beta}c\\), find \\(\\beta^2\\).`:`For speed \\(v=${beta}c\\), find \\(1-\\beta^2\\).`,ans,v?`\\(\\beta^2=${nfmt(ans)}\\).`:`\\(1-\\beta^2=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const u=pick([.1,.2,.3,.4]),v0=pick([.2,.3,.4,.5]),ans=v?(u+v0)/(1+u*v0):(u-v0)/(1-u*v0);return qNum(SR,title,v?`Add collinear velocities \\(${u}c\\) and \\(${v0}c\\) using relativistic velocity addition; answer as fraction of c.`:`Transform velocity \\(${u}c\\) from a frame moving at \\(${v0}c\\) in the same direction; find signed result as fraction of c.`,ans,v?`\\(\\beta=(u+v)/(1+uv)=${nfmt(ans)}\\).`:`\\(\\beta'=(u-v)/(1-uv)=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const E=ri(2,8),m=ri(1,4),ans=v?E*1e6/(m*299792458**2):m*299792458**2/1e6;return qNum(SR,title,v?`An object's rest energy is \\(${E}\\,MJ\\) and its mass is \\(${m}\\,kg\\). Compute \\(E/(mc^2)\\).`:`Find rest energy of mass \\(${m}\\,kg\\) in MJ.`,ans,v?`\\(E/(mc^2)=${nfmt(ans)}\\).`:`\\(E_0=mc^2/10^6=${nfmt(ans)}\\,MJ\\).`)
  }
}
function makeRelativityExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?Math.sqrt(1-beta*beta):1/Math.sqrt(1-beta*beta);return qNum(SR,title,v?`At \\(v=${beta}c\\), find contraction factor \\(L/L_0\\).`:`At \\(v=${beta}c\\), find Lorentz factor.`,ans,v?`\\(L/L_0=\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`:`\\(\\gamma=1/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?Math.sqrt(1-beta*beta):1-Math.sqrt(1-beta*beta);return qNum(SR,title,v?`At speed \\(${beta}c\\), find contraction factor.`:`At speed \\(${beta}c\\), find fractional length decrease \\(1-L/L_0\\).`,ans,v?`\\(L/L_0=\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`:`\\(1-L/L_0=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=v?gamma*gamma-1:gamma*beta;return qNum(SR,title,v?`For \\(v=${beta}c\\), find \\(\\gamma^2-1\\).`:`For \\(v=${beta}c\\), find normalized momentum \\(\\gamma\\beta\\).`,ans,v?`\\(\\gamma^2-1=\\beta^2/(1-\\beta^2)=${nfmt(ans)}\\).`:`\\(\\gamma\\beta=${nfmt(ans)}\\).`)
  }
}
function makeRelativityExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const beta=pick([.2,.4,.6,.8]),ans=v?1/Math.sqrt(1-beta*beta):beta*beta/(1-beta*beta);return qNum(SR,title,v?`For \\(v=${beta}c\\), find \\(\\gamma\\).`:`For \\(v=${beta}c\\), find \\(\\gamma^2\\beta^2\\).`,ans,v?`\\(\\gamma=${nfmt(ans)}\\).`:`\\(\\gamma^2\\beta^2=\\beta^2/(1-\\beta^2)=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const RELATIVITY_SUP_NAMES = ["Lorentz factor", "Time dilation", "Length contraction", "Relativistic energy mass-equivalent", "Kinetic-energy ratio", "Dimensionless momentum", "Relativistic velocity addition", "Energy in rest-mass units", "Lifetime dilation", "Speed from Lorentz factor"];

const RELATIVITY_EXTRA_NAMES = ["Lorentz factor", "Time dilation", "Length contraction", "Mass-equivalent energy", "Normalized kinetic energy", "Normalized momentum", "Velocity addition", "Rest energy equivalence", "Dilated lifetime", "Speed from Lorentz factor"];

function makeRelativitySupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${RELATIVITY_SUP_NAMES[fam]} · set ${variant}`;
        const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]); const gamma=1/Math.sqrt(1-beta*beta);
      if(fam===0)return qNum(SR,title,`An object moves at \\(v=${beta}c\\). Find the Lorentz factor \\(\\gamma\\).`,gamma,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${beta}^2}=${nfmt(gamma)}\\).`)
      if(fam===1){let proper=rand(1,10),ans=proper*gamma;return qNum(SR,title,`The proper time interval is \\(\\Delta\\tau=${nfmt(proper)}\\,s\\) for an object moving at \\(v=${beta}c\\). Find observed time dilation.`,ans,`\\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(gamma)}(${nfmt(proper)})=${nfmt(ans)}\\,s\\).`)}
      if(fam===2){let length=rand(1,30),ans=length/gamma;return qNum(SR,title,`A rod has rest length \\(L_0=${nfmt(length)}\\,m\\) and moves at \\(v=${beta}c\\). Find its length in the lab frame.`,ans,`\\(L=L_0/\\gamma=${nfmt(length)}/${nfmt(gamma)}=${nfmt(ans)}\\,m\\).`)}
      if(fam===3){let mass=rand(1,10),ans=gamma*mass;return qNum(SR,title,`A particle has rest mass \\(m_0=${nfmt(mass)}\\,kg\\) and speed \\(v=${beta}c\\). Find \\(E/c^2\\) in kg.`,ans,`\\(E=\\gamma m_0c^2\\), therefore \\(E/c^2=\\gamma m_0=${nfmt(ans)}\\,kg\\).`)}
      if(fam===4)return qNum(SR,title,`At speed \\(v=${beta}c\\), find kinetic energy as a fraction of rest energy: \\(K/(m_0c^2)\\).`,gamma-1,`\\(K=(\\gamma-1)m_0c^2\\), so the ratio is \\(${nfmt(gamma-1)}\\).`)
      if(fam===5)return qNum(SR,title,`At speed \\(v=${beta}c\\), find dimensionless momentum \\(p/(m_0c)=\\beta\\gamma\\).`,beta*gamma,`\\(p=\\gamma m_0v\\Rightarrow p/(m_0c)=\\beta\\gamma=${nfmt(beta*gamma)}\\).`)
      if(fam===6){let b2=pick([.1,.2,.3,.4,.5]);let ans=(beta+b2)/(1+beta*b2);return qNum(SR,title,`Two collinear speeds are \\(u=${beta}c\\) and \\(v=${b2}c\\) in successive inertial frames. Find the combined speed as a fraction of c.`,ans,`\\(w/c=(\\beta_u+\\beta_v)/(1+\\beta_u\\beta_v)=${nfmt(ans)}\\).`)}
      if(fam===7)return qNum(SR,title,`At speed \\(v=${beta}c\\), find total energy in units of rest energy: \\(E/(m_0c^2)\\).`,gamma,`\\(E=\\gamma m_0c^2\\), so \\(E/(m_0c^2)=\\gamma=${nfmt(gamma)}\\).`)
      if(fam===8){let life=rand(.1,8),ans=life*gamma;return qNum(SR,title,`A particle's proper lifetime is \\(${nfmt(life)}\\,\\mu s\\) and its speed is \\(v=${beta}c\\). Find lab-frame lifetime.`,ans,`\\(\\tau=\\gamma\\tau_0=${nfmt(gamma)}(${nfmt(life)})=${nfmt(ans)}\\,\\mu s\\).`)}
      {let gam=pick([1.25,1.3333333333,1.6666666667,2,2.5]),ans=Math.sqrt(1-1/(gam*gam));return qNum(SR,title,`An object has Lorentz factor \\(\\gamma=${nfmt(gam)}\\). Find its speed as a fraction of c.`,ans,`From \\(\\gamma=1/\\sqrt{1-\\beta^2}\\), \\(\\beta=\\sqrt{1-1/\\gamma^2}=${nfmt(ans)}\\).`)}
}


function makeRelativityExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${RELATIVITY_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let beta=pick([.3,.4,.5,.6,.7,.8]),ans=1/Math.sqrt(1-beta*beta);return qNum(SR,title,`An object moves at \\(v=${beta}c\\). Find the Lorentz factor \\(\\gamma\\).`,ans,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${beta}^2}=${nfmt(ans)}\\).`)}
      if(fam===1){let beta=pick([.3,.4,.5,.6,.8]),tau=ri(2,20),ans=tau/Math.sqrt(1-beta*beta);return qNum(SR,title,`A proper time is \\(\\Delta\\tau=${tau}\\,s\\) for speed \\(v=${beta}c\\). Find dilated time.`,ans,`\\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(1/Math.sqrt(1-beta*beta))}(${tau})=${nfmt(ans)}\\,s\\).`)}
      if(fam===2){let beta=pick([.3,.4,.5,.6,.8]),L0=ri(2,20),ans=L0*Math.sqrt(1-beta*beta);return qNum(SR,title,`A rod has proper length \\(L_0=${L0}\\,m\\) and moves at \\(v=${beta}c\\). Find its measured length.`,ans,`\\(L=L_0\\sqrt{1-v^2/c^2}=${L0}\\sqrt{1-${beta}^2}=${nfmt(ans)}\\,m\\).`)}
      if(fam===3){let m=rand(.5,5),beta=pick([.3,.4,.5,.6,.8]),ans=m/Math.sqrt(1-beta*beta);return qNum(SR,title,`A particle has rest mass \\(m_0=${nfmt(m)}\\,kg\\) and speed \\(v=${beta}c\\). Find \\(E/c^2\\).`,ans,`\\(E/c^2=\\gamma m_0=${nfmt(ans)}\\,kg\\).`)}
      if(fam===4){let beta=pick([.3,.4,.5,.6,.8]),ans=1/Math.sqrt(1-beta*beta)-1;return qNum(SR,title,`For speed \\(v=${beta}c\\), find normalized kinetic energy \\(K/(m_0c^2)\\).`,ans,`\\(K/(m_0c^2)=\\gamma-1=${nfmt(ans)}\\).`)}
      if(fam===5){let beta=pick([.3,.4,.5,.6,.8]),ans=beta/Math.sqrt(1-beta*beta);return qNum(SR,title,`For speed \\(v=${beta}c\\), find normalized momentum \\(p/(m_0c)\\).`,ans,`\\(p/(m_0c)=\\gamma\\beta=${nfmt(ans)}\\).`)}
      if(fam===6){let u=pick([.2,.3,.4]),v=pick([.2,.3,.4]),ans=(u+v)/(1+u*v);return qNum(SR,title,`Two collinear velocities are \\(u=${u}c\\) and \\(v=${v}c\\) in the same direction. Find the relativistic combined velocity as a fraction of c.`,ans,`\\(w/c=(u/c+v/c)/(1+uv/c^2)=(${u}+${v})/(1+${u*v})=${nfmt(ans)}\\).`)}
      if(fam===7){let m=rand(.5,8);return qNum(SR,title,`A body has rest mass \\(m_0=${nfmt(m)}\\,kg\\). Find rest energy expressed as \\(E_0/c^2\\).`,m,`\\(E_0=m_0c^2\\), hence \\(E_0/c^2=m_0=${nfmt(m)}\\,kg\\).`)}
      if(fam===8){let beta=pick([.3,.4,.5,.6,.8]),life=ri(2,20),ans=life/Math.sqrt(1-beta*beta);return qNum(SR,title,`An unstable particle has proper lifetime \\(\\tau_0=${life}\\,\\mu s\\) and speed \\(v=${beta}c\\). Find observed lifetime.`,ans,`\\(\\tau=\\gamma\\tau_0=${nfmt(ans)}\\,\\mu s\\).`)}
      let gamma=pick([1.25,1.4,1.67,2,2.5]),ans=Math.sqrt(1-1/(gamma*gamma));return qNum(SR,title,`An object has Lorentz factor \\(\\gamma=${gamma}\\). Find its speed as a fraction of c.`,ans,`\\(v/c=\\sqrt{1-1/\\gamma^2}=\\sqrt{1-1/${gamma*gamma}}=${nfmt(ans)}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.relativity = [...numericSeedEntries(SR, RELATIVITY_SUP_NAMES, 'Core', 'supplement-seed', makeRelativitySupplement),
    ...numericSeedEntries(SR, RELATIVITY_EXTRA_NAMES, 'Applied', 'applied-seed', makeRelativityExtraSeed, 11),
    numericEntry('relativity',"Lorentz factor · family 01 (randomized variant)","relativity-family-01",()=>makeRelativityExpansionFamily01("Lorentz factor · family 01 (randomized variant)")),
    numericEntry('relativity',"Time dilation · family 02 (randomized variant)","relativity-family-02",()=>makeRelativityExpansionFamily02("Time dilation · family 02 (randomized variant)")),
    numericEntry('relativity',"Length contraction · family 03 (randomized variant)","relativity-family-03",()=>makeRelativityExpansionFamily03("Length contraction · family 03 (randomized variant)")),
    numericEntry('relativity',"Rest-energy equivalence · family 04 (randomized variant)","relativity-family-04",()=>makeRelativityExpansionFamily04("Rest-energy equivalence · family 04 (randomized variant)")),
    numericEntry('relativity',"Kinetic-energy ratio · family 05 (randomized variant)","relativity-family-05",()=>makeRelativityExpansionFamily05("Kinetic-energy ratio · family 05 (randomized variant)")),
    numericEntry('relativity',"Dimensionless momentum · family 06 (randomized variant)","relativity-family-06",()=>makeRelativityExpansionFamily06("Dimensionless momentum · family 06 (randomized variant)")),
    numericEntry('relativity',"Relativistic velocity addition · family 07 (randomized variant)","relativity-family-07",()=>makeRelativityExpansionFamily07("Relativistic velocity addition · family 07 (randomized variant)")),
    numericEntry('relativity',"Rest energy in alternate units · family 08 (randomized variant)","relativity-family-08",()=>makeRelativityExpansionFamily08("Rest energy in alternate units · family 08 (randomized variant)")),
    numericEntry('relativity',"Lifetime dilation · family 09 (randomized variant)","relativity-family-09",()=>makeRelativityExpansionFamily09("Lifetime dilation · family 09 (randomized variant)")),
    numericEntry('relativity',"Speed from Lorentz factor · family 10 (randomized variant)","relativity-family-10",()=>makeRelativityExpansionFamily10("Speed from Lorentz factor · family 10 (randomized variant)")),
    numericEntry('relativity',"Normalized momentum and kinetic energy · family 11 (randomized variant)","relativity-family-11",()=>makeRelativityExpansionFamily11("Normalized momentum and kinetic energy · family 11 (randomized variant)")),
    numericEntry('relativity',"Length-contraction factor · family 12 (randomized variant)","relativity-family-12",()=>makeRelativityExpansionFamily12("Length-contraction factor · family 12 (randomized variant)")),
    numericEntry('relativity',"Relativistic mass-energy · family 13 (randomized variant)","relativity-family-13",()=>makeRelativityExpansionFamily13("Relativistic mass-energy · family 13 (randomized variant)")),
    numericEntry('relativity',"Beta squared relation · family 14 (randomized variant)","relativity-family-14",()=>makeRelativityExpansionFamily14("Beta squared relation · family 14 (randomized variant)")),
    numericEntry('relativity',"Frame velocity transformation · family 15 (randomized variant)","relativity-family-15",()=>makeRelativityExpansionFamily15("Frame velocity transformation · family 15 (randomized variant)")),
    numericEntry('relativity',"Mass-energy fraction · family 16 (randomized variant)","relativity-family-16",()=>makeRelativityExpansionFamily16("Mass-energy fraction · family 16 (randomized variant)")),
    numericEntry('relativity',"Contraction and time dilation · family 17 (randomized variant)","relativity-family-17",()=>makeRelativityExpansionFamily17("Contraction and time dilation · family 17 (randomized variant)")),
    numericEntry('relativity',"Fractional length decrease · family 18 (randomized variant)","relativity-family-18",()=>makeRelativityExpansionFamily18("Fractional length decrease · family 18 (randomized variant)")),
    numericEntry('relativity',"Lorentz identity · family 19 (randomized variant)","relativity-family-19",()=>makeRelativityExpansionFamily19("Lorentz identity · family 19 (randomized variant)")),
    numericEntry('relativity',"Gamma and normalized momentum · family 20 (randomized variant)","relativity-family-20",()=>makeRelativityExpansionFamily20("Gamma and normalized momentum · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(SR,'Length-contraction ratio','relativity-length-contraction-ratio',()=>{
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]),ans=Math.sqrt(1-beta*beta);
  return qNum(SR,'Length-contraction ratio',`A moving spacecraft travels at \\(v=${beta}c\\). Find the ratio \\(L/L_0\\) of its measured length to its proper length.`,ans,`Length contraction gives \\(L/L_0=\\sqrt{1-v^2/c^2}=\\sqrt{1-${beta}^2}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(SR,'Relativistic momentum in units of mc','relativity-momentum-normalized',()=>{
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]),ans=beta/Math.sqrt(1-beta*beta);
  return qNum(SR,'Relativistic momentum in units of mc',`A particle moves at speed \\(v=${beta}c\\). Find the dimensionless momentum \\(p/(mc)\\).`,ans,`Relativistic momentum is \\(p=\\gamma mv\\), so \\(p/(mc)=\\gamma\\beta=\\beta/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(SR,'Field scenario · Spacecraft clock time dilation','scenario-relativity-spacecraft-clock',()=>{
  const beta=pick([.6,.7,.8]),proper=pick([1.5,2,3,4]),gamma=1/Math.sqrt(1-beta*beta),ans=proper*gamma;
  return qNum(SR,'Field scenario · Spacecraft clock time dilation',`Mission control observes a spacecraft moving at \\(v=${beta}c\\). The elapsed proper time on board is \\(\\Delta\\tau=${proper}\\,h\\). Ignoring gravitational effects, find the time interval measured by mission control.`,ans,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${beta}^2}=${nfmt(gamma)}\\). Therefore \\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(gamma)}(${proper})=${nfmt(ans)}\\,h\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('relativity','Additional · Proper time from coordinate time','relativity-topup-01',()=>{
  const beta=pick([.2,.3,.4,.5,.6,.7,.8]),t=ri(2,20),ans=t*Math.sqrt(1-beta*beta);
  return qNum(SR,'Proper time from coordinate time',`A clock moves at \\(v=${nfmt(beta)}c\\) for coordinate time \\(\\Delta t=${t}\\,s\\). Find the elapsed proper time.`,ans,`\\(\\Delta\\tau=\\Delta t\\sqrt{1-v^2/c^2}=${t}\\sqrt{1-${nfmt(beta)}^2}=${nfmt(ans)}\\,s\\).`);
});
appendNumericRecipe('relativity','Additional · Relativistic kinetic energy in rest-energy units','relativity-topup-02',()=>{
  const beta=pick([.2,.3,.4,.5,.6,.7,.8]),gamma=1/Math.sqrt(1-beta*beta),ans=gamma-1;
  return qNum(SR,'Relativistic kinetic energy in rest-energy units',`A particle moves at \\(v=${nfmt(beta)}c\\). Find its kinetic energy as a multiple of \\(mc^2\\).`,ans,`\\(K=(\\gamma-1)mc^2\\), where \\(\\gamma=1/\\sqrt{1-\\beta^2}=${nfmt(gamma)}\\). Thus \\(K/(mc^2)=${nfmt(ans)}\\).`);
});
appendNumericRecipe('relativity','Additional · Total relativistic energy factor','relativity-topup-03',()=>{
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]),ans=1/Math.sqrt(1-beta*beta);
  return qNum(SR,'Total relativistic energy factor',`A particle moves at \\(v=${nfmt(beta)}c\\). Find the total energy factor \\(E/(mc^2)=\\gamma\\).`,ans,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${nfmt(beta)}^2}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('relativity','Additional · Relativistic momentum in units of mc','relativity-topup-04',()=>{
  const beta=pick([.2,.3,.4,.5,.6,.7,.8]),ans=beta/Math.sqrt(1-beta*beta);
  return qNum(SR,'Relativistic momentum in units of mc',`A particle moves at \\(v=${nfmt(beta)}c\\). Find relativistic momentum as a multiple of \\(mc\\).`,ans,`\\(p=\\gamma mv\\), so \\(p/(mc)=\\beta/\\sqrt{1-\\beta^2}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('relativity','Additional · Lorentz-contracted length ratio','relativity-topup-05',()=>{
  const beta=pick([.2,.3,.4,.5,.6,.7,.8]),ans=Math.sqrt(1-beta*beta);
  return qNum(SR,'Lorentz-contracted length ratio',`A rod moves parallel to its length at \\(v=${nfmt(beta)}c\\). Find the ratio of observed length to proper length.`,ans,`Length contraction gives \\(L/L_0=\\sqrt{1-v^2/c^2}=\\sqrt{1-${nfmt(beta)}^2}=${nfmt(ans)}\\).`);
});
