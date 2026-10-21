/* relativity: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_RELATIVITY = 'relativity';
const SR = NAMESPACE_RELATIVITY;
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



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */




/* Individual family variant implementations; no indexed dispatch remains. */
function makeRelativityFamily21VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    return qNum(SR,title,`An object moves at \\(v=${beta}c\\). Find the Lorentz factor \\(\\gamma\\).`,gamma,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${beta}^2}=${nfmt(gamma)}\\).`)
  }
}
function makeRelativityFamily22VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    let proper=rand(1,10),ans=proper*gamma;
    return qNum(SR,title,`The proper time interval is \\(\\Delta\\tau=${nfmt(proper)}\\,s\\) for an object moving at \\(v=${beta}c\\). Find observed time dilation.`,ans,`\\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(gamma)}(${nfmt(proper)})=${nfmt(ans)}\\,s\\).`)
  }
}
function makeRelativityFamily23VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    let length=rand(1,30),ans=length/gamma;
    return qNum(SR,title,`A rod has rest length \\(L_0=${nfmt(length)}\\,m\\) and moves at \\(v=${beta}c\\). Find its length in the lab frame.`,ans,`\\(L=L_0/\\gamma=${nfmt(length)}/${nfmt(gamma)}=${nfmt(ans)}\\,m\\).`)
  }
}
function makeRelativityFamily24VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    let mass=rand(1,10),ans=gamma*mass;
    return qNum(SR,title,`A particle has rest mass \\(m_0=${nfmt(mass)}\\,kg\\) and speed \\(v=${beta}c\\). Find \\(E/c^2\\) in kg.`,ans,`\\(E=\\gamma m_0c^2\\), therefore \\(E/c^2=\\gamma m_0=${nfmt(ans)}\\,kg\\).`)
  }
}
function makeRelativityFamily25VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    return qNum(SR,title,`At speed \\(v=${beta}c\\), find kinetic energy as a fraction of rest energy: \\(K/(m_0c^2)\\).`,gamma-1,`\\(K=(\\gamma-1)m_0c^2\\), so the ratio is \\(${nfmt(gamma-1)}\\).`)
  }
}
function makeRelativityFamily26VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    return qNum(SR,title,`At speed \\(v=${beta}c\\), find dimensionless momentum \\(p/(m_0c)=\\beta\\gamma\\).`,beta*gamma,`\\(p=\\gamma m_0v\\Rightarrow p/(m_0c)=\\beta\\gamma=${nfmt(beta*gamma)}\\).`)
  }
}
function makeRelativityFamily27VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    let b2=pick([.1,.2,.3,.4,.5]);
    let ans=(beta+b2)/(1+beta*b2);
    return qNum(SR,title,`Two collinear speeds are \\(u=${beta}c\\) and \\(v=${b2}c\\) in successive inertial frames. Find the combined speed as a fraction of c.`,ans,`\\(w/c=(\\beta_u+\\beta_v)/(1+\\beta_u\\beta_v)=${nfmt(ans)}\\).`)
  }
}
function makeRelativityFamily28VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    return qNum(SR,title,`At speed \\(v=${beta}c\\), find total energy in units of rest energy: \\(E/(m_0c^2)\\).`,gamma,`\\(E=\\gamma m_0c^2\\), so \\(E/(m_0c^2)=\\gamma=${nfmt(gamma)}\\).`)
  }
}
function makeRelativityFamily29VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    let life=rand(.1,8),ans=life*gamma;
    return qNum(SR,title,`A particle's proper lifetime is \\(${nfmt(life)}\\,\\mu s\\) and its speed is \\(v=${beta}c\\). Find lab-frame lifetime.`,ans,`\\(\\tau=\\gamma\\tau_0=${nfmt(gamma)}(${nfmt(life)})=${nfmt(ans)}\\,\\mu s\\).`)
  }
}
function makeRelativityFamily30VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const beta=pick([.1,.2,.3,.4,.5,.6,.7,.8]);
  const gamma=1/Math.sqrt(1-beta*beta);
  {
    {let gam=pick([1.25,1.3333333333,1.6666666667,2,2.5]),ans=Math.sqrt(1-1/(gam*gam));return qNum(SR,title,`An object has Lorentz factor \\(\\gamma=${nfmt(gam)}\\). Find its speed as a fraction of c.`,ans,`From \\(\\gamma=1/\\sqrt{1-\\beta^2}\\), \\(\\beta=\\sqrt{1-1/\\gamma^2}=${nfmt(ans)}\\).`)}
  }
}


/* Individual family variant implementations; no indexed dispatch remains. */
function makeRelativityFamily31VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.7,.8]),ans=1/Math.sqrt(1-beta*beta);
    return qNum(SR,title,`An object moves at \\(v=${beta}c\\). Find the Lorentz factor \\(\\gamma\\).`,ans,`\\(\\gamma=1/\\sqrt{1-v^2/c^2}=1/\\sqrt{1-${beta}^2}=${nfmt(ans)}\\).`)
  }
}
function makeRelativityFamily32VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.8]),tau=ri(2,20),ans=tau/Math.sqrt(1-beta*beta);
    return qNum(SR,title,`A proper time is \\(\\Delta\\tau=${tau}\\,s\\) for speed \\(v=${beta}c\\). Find dilated time.`,ans,`\\(\\Delta t=\\gamma\\Delta\\tau=${nfmt(1/Math.sqrt(1-beta*beta))}(${tau})=${nfmt(ans)}\\,s\\).`)
  }
}
function makeRelativityFamily33VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.8]),L0=ri(2,20),ans=L0*Math.sqrt(1-beta*beta);
    return qNum(SR,title,`A rod has proper length \\(L_0=${L0}\\,m\\) and moves at \\(v=${beta}c\\). Find its measured length.`,ans,`\\(L=L_0\\sqrt{1-v^2/c^2}=${L0}\\sqrt{1-${beta}^2}=${nfmt(ans)}\\,m\\).`)
  }
}
function makeRelativityFamily34VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let m=rand(.5,5),beta=pick([.3,.4,.5,.6,.8]),ans=m/Math.sqrt(1-beta*beta);
    return qNum(SR,title,`A particle has rest mass \\(m_0=${nfmt(m)}\\,kg\\) and speed \\(v=${beta}c\\). Find \\(E/c^2\\).`,ans,`\\(E/c^2=\\gamma m_0=${nfmt(ans)}\\,kg\\).`)
  }
}
function makeRelativityFamily35VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.8]),ans=1/Math.sqrt(1-beta*beta)-1;
    return qNum(SR,title,`For speed \\(v=${beta}c\\), find normalized kinetic energy \\(K/(m_0c^2)\\).`,ans,`\\(K/(m_0c^2)=\\gamma-1=${nfmt(ans)}\\).`)
  }
}
function makeRelativityFamily36VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.8]),ans=beta/Math.sqrt(1-beta*beta);
    return qNum(SR,title,`For speed \\(v=${beta}c\\), find normalized momentum \\(p/(m_0c)\\).`,ans,`\\(p/(m_0c)=\\gamma\\beta=${nfmt(ans)}\\).`)
  }
}
function makeRelativityFamily37VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let u=pick([.2,.3,.4]),v=pick([.2,.3,.4]),ans=(u+v)/(1+u*v);
    return qNum(SR,title,`Two collinear velocities are \\(u=${u}c\\) and \\(v=${v}c\\) in the same direction. Find the relativistic combined velocity as a fraction of c.`,ans,`\\(w/c=(u/c+v/c)/(1+uv/c^2)=(${u}+${v})/(1+${u*v})=${nfmt(ans)}\\).`)
  }
}
function makeRelativityFamily38VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let m=rand(.5,8);
    return qNum(SR,title,`A body has rest mass \\(m_0=${nfmt(m)}\\,kg\\). Find rest energy expressed as \\(E_0/c^2\\).`,m,`\\(E_0=m_0c^2\\), hence \\(E_0/c^2=m_0=${nfmt(m)}\\,kg\\).`)
  }
}
function makeRelativityFamily39VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let beta=pick([.3,.4,.5,.6,.8]),life=ri(2,20),ans=life/Math.sqrt(1-beta*beta);
    return qNum(SR,title,`An unstable particle has proper lifetime \\(\\tau_0=${life}\\,\\mu s\\) and speed \\(v=${beta}c\\). Find observed lifetime.`,ans,`\\(\\tau=\\gamma\\tau_0=${nfmt(ans)}\\,\\mu s\\).`)
  }
}
function makeRelativityFamily40VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let gamma=pick([1.25,1.4,1.67,2,2.5]),ans=Math.sqrt(1-1/(gamma*gamma));
    return qNum(SR,title,`An object has Lorentz factor \\(\\gamma=${gamma}\\). Find its speed as a fraction of c.`,ans,`\\(v/c=\\sqrt{1-1/\\gamma^2}=\\sqrt{1-1/${gamma*gamma}}=${nfmt(ans)}\\).`)
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily21(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily21VariantA(title):makeRelativityExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily22(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily22VariantA(title):makeRelativityExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily23(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily23VariantA(title):makeRelativityExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily24(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily24VariantA(title):makeRelativityExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily25(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily25VariantA(title):makeRelativityExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily26VariantA(title):makeRelativityExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily27VariantA(title):makeRelativityExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily28VariantA(title):makeRelativityExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily29VariantA(title):makeRelativityExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily30VariantA(title):makeRelativityExpansionFamily10(title);q.title=title;return q;}
/* Family 31: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily31VariantA(title):makeRelativityExpansionFamily11(title);q.title=title;return q;}
/* Family 32: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily32VariantA(title):makeRelativityExpansionFamily12(title);q.title=title;return q;}
/* Family 33: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily33VariantA(title):makeRelativityExpansionFamily13(title);q.title=title;return q;}
/* Family 34: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily34VariantA(title):makeRelativityExpansionFamily14(title);q.title=title;return q;}
/* Family 35: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily35VariantA(title):makeRelativityExpansionFamily15(title);q.title=title;return q;}
/* Family 36: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily36(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily36VariantA(title):makeRelativityExpansionFamily16(title);q.title=title;return q;}
/* Family 37: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily37(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily37VariantA(title):makeRelativityExpansionFamily17(title);q.title=title;return q;}
/* Family 38: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily38(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily38VariantA(title):makeRelativityExpansionFamily18(title);q.title=title;return q;}
/* Family 39: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily39(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily39VariantA(title):makeRelativityExpansionFamily19(title);q.title=title;return q;}
/* Family 40: a named seed recipe and its paired randomized expansion variant. */
function makeRelativityFamily40(title){const useSeed=ri(0,1)===1;const q=useSeed?makeRelativityFamily40VariantA(title):makeRelativityExpansionFamily20(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.relativity = [numericEntry('relativity',"Lorentz factor · family 21 (randomized variant)",'relativity-family-21',()=>makeRelativityFamily21("Lorentz factor · family 21 (randomized variant)")),
    numericEntry('relativity',"Time dilation · family 22 (randomized variant)",'relativity-family-22',()=>makeRelativityFamily22("Time dilation · family 22 (randomized variant)")),
    numericEntry('relativity',"Length contraction · family 23 (randomized variant)",'relativity-family-23',()=>makeRelativityFamily23("Length contraction · family 23 (randomized variant)")),
    numericEntry('relativity',"Relativistic energy mass-equivalent · family 24 (randomized variant)",'relativity-family-24',()=>makeRelativityFamily24("Relativistic energy mass-equivalent · family 24 (randomized variant)")),
    numericEntry('relativity',"Kinetic-energy ratio · family 25 (randomized variant)",'relativity-family-25',()=>makeRelativityFamily25("Kinetic-energy ratio · family 25 (randomized variant)")),
    numericEntry('relativity',"Dimensionless momentum · family 26 (randomized variant)",'relativity-family-26',()=>makeRelativityFamily26("Dimensionless momentum · family 26 (randomized variant)")),
    numericEntry('relativity',"Relativistic velocity addition · family 27 (randomized variant)",'relativity-family-27',()=>makeRelativityFamily27("Relativistic velocity addition · family 27 (randomized variant)")),
    numericEntry('relativity',"Energy in rest-mass units · family 28 (randomized variant)",'relativity-family-28',()=>makeRelativityFamily28("Energy in rest-mass units · family 28 (randomized variant)")),
    numericEntry('relativity',"Lifetime dilation · family 29 (randomized variant)",'relativity-family-29',()=>makeRelativityFamily29("Lifetime dilation · family 29 (randomized variant)")),
    numericEntry('relativity',"Speed from Lorentz factor · family 30 (randomized variant)",'relativity-family-30',()=>makeRelativityFamily30("Speed from Lorentz factor · family 30 (randomized variant)")),
    numericEntry('relativity',"Lorentz factor · family 31 (randomized variant)",'relativity-family-31',()=>makeRelativityFamily31("Lorentz factor · family 31 (randomized variant)")),
    numericEntry('relativity',"Time dilation · family 32 (randomized variant)",'relativity-family-32',()=>makeRelativityFamily32("Time dilation · family 32 (randomized variant)")),
    numericEntry('relativity',"Length contraction · family 33 (randomized variant)",'relativity-family-33',()=>makeRelativityFamily33("Length contraction · family 33 (randomized variant)")),
    numericEntry('relativity',"Mass-equivalent energy · family 34 (randomized variant)",'relativity-family-34',()=>makeRelativityFamily34("Mass-equivalent energy · family 34 (randomized variant)")),
    numericEntry('relativity',"Normalized kinetic energy · family 35 (randomized variant)",'relativity-family-35',()=>makeRelativityFamily35("Normalized kinetic energy · family 35 (randomized variant)")),
    numericEntry('relativity',"Normalized momentum · family 36 (randomized variant)",'relativity-family-36',()=>makeRelativityFamily36("Normalized momentum · family 36 (randomized variant)")),
    numericEntry('relativity',"Velocity addition · family 37 (randomized variant)",'relativity-family-37',()=>makeRelativityFamily37("Velocity addition · family 37 (randomized variant)")),
    numericEntry('relativity',"Rest energy equivalence · family 38 (randomized variant)",'relativity-family-38',()=>makeRelativityFamily38("Rest energy equivalence · family 38 (randomized variant)")),
    numericEntry('relativity',"Dilated lifetime · family 39 (randomized variant)",'relativity-family-39',()=>makeRelativityFamily39("Dilated lifetime · family 39 (randomized variant)")),
    numericEntry('relativity',"Speed from Lorentz factor · family 40 (randomized variant)",'relativity-family-40',()=>makeRelativityFamily40("Speed from Lorentz factor · family 40 (randomized variant)")),
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

/* Category-local compound question generators. Their tree edges are registered below, so this
   file owns both the content and the relationship. These are ordinary numeric repeatable nodes. */
function makeRelativityCompoundRoot(variant=1){
  const base=ri(2,9);
  const x=variant===1?base:variant===2?base+2:2*base;
  return qNum(SR,'Relativity compound root',`A particle has rest mass \\(m_0=0.8(${x})\\,kg\\) and moves at \\(v=0.6c\\). Find \\(E/c^2\\).`,x,`At \\(v=0.6c\\), \\(\\gamma=1.25\\). Therefore \\(E/c^2=\\gamma m_0=1.25(0.8${x})=${x}\\,kg\\).`)
}
function makeRelativityCompoundChild(parentValue,variant=1){
  const x=Number(parentValue);
  if(!Number.isFinite(x))throw new Error('Compound child requires its parent numeric answer.');
  const declaration='Let \\(x_{\\mathrm{prev}}\\) denote the numerical answer from the parent question.';
  const ans=1.25*x;return qNum(SR,'Linked relativistic energy',`${declaration} A particle has rest mass \\(m_0=x_{\\mathrm{prev}}\\,kg\\) and speed \\(v=0.6c\\). Find \\(E/c^2\\).`,ans,`At \\(v=0.6c\\), \\(\\gamma=1.25\\), so \\(E/c^2=\\gamma m_0=1.25x_{\\mathrm{prev}}=${nfmt(ans)}\\,kg\\).`)
}
function registerRelativityCompoundTreeNodes(){
  for(let variant=1;variant<=3;variant++){
    const suffix=String(variant).padStart(2,'0');
    const rootKey=`relativity-tree-root-${suffix}`,childKey=`relativity-tree-child-${suffix}`;
    registerQuestionGenerator({id:rootKey,category:NAMESPACE_RELATIVITY,title:`Relativity · Compound root ${suffix}`,recipeKey:rootKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'root',treeChildrenRecipeKeys:[childKey],
      make:()=>makeRelativityCompoundRoot(variant)});
    registerQuestionGenerator({id:childKey,category:NAMESPACE_RELATIVITY,title:`Relativity · Dependent node ${suffix}`,recipeKey:childKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'child',parentRecipeKey:rootKey,
      make:(context={})=>{
        let previous=context.parentAnswer??context.sharedData?.[rootKey]?.answer;
        if(previous===undefined||previous===null){const seed=makeRelativityCompoundRoot(variant);previous=seed.answerExact??seed.answer;}
        return makeRelativityCompoundChild(previous,variant);
      }});
  }
}
registerRelativityCompoundTreeNodes();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const RELATIVITY_CONCEPT_CARDS = [
    [
      "Lorentz factor",
      "The factor gamma equal to one divided by the square root of one minus beta squared."
    ],
    [
      "Proper time",
      "The time interval measured by a clock at rest relative to the two events being timed."
    ],
    [
      "Time dilation",
      "The result that a moving clock interval is longer than the corresponding proper time interval."
    ],
    [
      "Proper length",
      "The length measured in the rest frame of the object."
    ],
    [
      "Length contraction",
      "The result that an object moving relative to an observer is measured shorter along its motion."
    ],
    [
      "Rest frame",
      "A reference frame in which the object under consideration is at rest."
    ],
    [
      "Spacetime interval",
      "A Lorentz-invariant combination of temporal and spatial separations between events."
    ],
    [
      "Rest energy",
      "The energy of an object in its rest frame, equal to rest mass times c squared."
    ],
    [
      "Relativistic total energy",
      "The energy of a particle including rest energy and kinetic energy."
    ],
    [
      "Relativistic momentum",
      "Momentum equal to gamma times rest mass times velocity."
    ],
    [
      "Relativistic velocity addition",
      "The rule for combining collinear velocities while keeping the result below the speed of light."
    ],
    [
      "Relativity of simultaneity",
      "The principle that spatially separated events simultaneous in one inertial frame need not be simultaneous in another."
    ],
    [
      "Light cone",
      "The set of spacetime event directions reachable by light from an event or able to send light to it."
    ],
    [
      "Four-vector",
      "A quantity with components that transform under Lorentz transformations as a spacetime vector."
    ],
    [
      "Mass-energy equivalence",
      "The relationship between rest mass and rest energy given by E equals mc squared."
    ],
    [
      "Lorentz transformation",
      "The coordinate transformation between inertial frames in special relativity."
    ],
    [
      "Relativistic kinetic energy",
      "The total relativistic energy minus rest energy."
    ],
    [
      "Beta parameter",
      "The dimensionless speed ratio v divided by c."
    ],
    [
      "Subluminal speed",
      "A speed strictly less than the speed of light in vacuum."
    ],
    [
      "Invariant quantity",
      "A quantity whose value is unchanged under Lorentz transformations."
    ],
    [
      "Speed of light in vacuum",
      "The invariant vacuum light speed c, approximately 3.00 times 10 to the 8 meters per second."
    ],
    [
      "Lorentz factor — extended concept",
      "The factor gamma=1/sqrt(1-v squared/c squared) for relative speed magnitude below c."
    ],
    [
      "Proper time — extended concept",
      "The time interval measured by a clock at rest in the frame where the two events occur at the same place."
    ],
    [
      "Proper length — extended concept",
      "The length measured in the rest frame of the object."
    ],
    [
      "Time dilation — extended concept",
      "The longer coordinate-time interval between events for a clock moving relative to an observer, compared with its proper time."
    ],
    [
      "Length contraction — extended concept",
      "The reduction of measured length along the direction of relative motion compared with the object’s proper length."
    ],
    [
      "Relativistic momentum — extended concept",
      "Momentum p=gamma mv for a particle of rest mass m and speed v."
    ],
    [
      "Rest energy — extended concept",
      "The energy E0=mc squared associated with a particle’s rest mass."
    ],
    [
      "Total relativistic energy",
      "For a massive particle E=gamma mc squared."
    ],
    [
      "Energy-momentum relation",
      "The invariant relation E squared equals p squared c squared plus m squared c to the fourth."
    ],
    [
      "Relativity of simultaneity — extended concept",
      "Events simultaneous in one inertial frame need not be simultaneous in another frame in relative motion."
    ],
    [
      "Inertial frame",
      "A reference frame in which a force-free body moves at constant velocity."
    ],
    [
      "Lorentz transformation — extended concept",
      "The coordinate transformation relating space and time between inertial frames in special relativity."
    ],
    [
      "Velocity addition",
      "The relativistic formula for combining velocities so the result remains below c for subluminal inputs."
    ],
    [
      "Time-like interval",
      "A spacetime interval for which the temporal separation dominates the spatial separation when using the usual Minkowski convention."
    ],
    [
      "Light-like interval",
      "A spacetime interval with zero invariant interval, characteristic of light in vacuum."
    ],
    [
      "Space-like interval",
      "A spacetime interval for which spatial separation dominates temporal separation under the usual Minkowski convention."
    ],
    [
      "Rest mass",
      "The invariant mass measured in the particle’s rest frame."
    ],
    [
      "Relativistic kinetic energy — extended concept",
      "The energy difference K=(gamma-1)mc squared between total energy and rest energy."
    ],
    [
      "Invariant interval",
      "A spacetime quantity unchanged by Lorentz transformations."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_RELATIVITY, RELATIVITY_CONCEPT_CARDS);
