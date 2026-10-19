/* ztrans: seed entries, explicit expansion families, and category-specific additions. */

function makeZtransExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const r=pick([.25,.4,.5,.6]),n=ri(3,8),ans=v?Math.pow(r,n):((1-Math.pow(r,n+1))/(1-r));return qNum(Z,title,v?`For \\(x[n]=(${r})^n\\), find \\(x[${n}]\\).`:`Find \\(\\sum_{n=0}^{${n}}(${r})^n\\).`,ans,v?`\\(x[${n}]=r^{${n}}=${nfmt(ans)}\\).`:`Geometric sum \\((1-r^{N+1})/(1-r)=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const aa=pick([.2,.3,.4,.6]),n=ri(2,7),z=ri(3,9),ans=v?n*Math.pow(aa,n):aa*z/((z-aa)**2);return qNum(Z,title,v?`For \\(x[n]=n(${aa})^n\\), find \\(x[${n}]\\).`:`Evaluate \\(X(z)=az/(z-a)^2\\) for \\(a=${aa}\\) at \\(z=${z}\\).`,ans,v?`\\(x[${n}]=${n}(${aa})^{${n}}=${nfmt(ans)}\\).`:`\\(X(${z})=${aa}(${z})/(${z}-${aa})^2=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const y0=ri(1,5),b0=ri(2,4),n=ri(2,6),ans=v?y0*Math.pow(b0,n):y0*(Math.pow(b0,n+1)-1)/(b0-1);return qNum(Z,title,v?`A sequence obeys \\(y[n]=(${b0})^n y[0]\\), with \\(y[0]=${y0}\\). Find \\(y[${n}]\\).`:`A sequence is \\(y[n]=${y0}(${b0})^n\\). Find the sum from \\(n=0\\) through \\(${n}\\).`,ans,v?`\\(y[${n}]=${y0}(${b0})^{${n}}=${nfmt(ans)}\\).`:`\\(S=${y0}[(${b0})^{${n+1}}-1]/(${b0}-1)=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),b0=ri(1,5),n=ri(2,6),ans=v?b0/(1+aa):b0*(1-Math.pow(-aa,n+1))/(1+aa);return qNum(Z,title,v?`For the recurrence \\(y[n]+${aa}y[n-1]=${b0}\\delta[n]\\), find the impulse coefficient magnitude ratio \\(b/(1+a)\\).`:`For a finite geometric response with ratio \\(-${aa}\\), initial coefficient \\(${b0}\\), and \\(${n+1}\\) terms, evaluate the algebraic sum.`,ans,v?`\\(b/(1+a)=${b0}/(1+${aa})=${nfmt(ans)}\\).`:`\\(S=b[1-(-a)^{N+1}]/(1+a)=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const a0=pick([0.4,0.8,1.2,1.5]),b0=ri(1,7),ans=v?Math.abs(a0)<1?1:0:b0/(1+a0);return qNum(Z,title,v?`A causal sequence has a pole at \\(z=${a0}\\). For a causal rational system, enter 1 if it is BIBO-stable and 0 otherwise.`:`A first-order difference system has input gain \\(b=${b0}\\) and feedback coefficient \\(a=${a0}\\). Find \\(b/(1+a)\\).`,ans,v?`A causal pole must satisfy \\(|z_p|<1\\); result is ${ans}.`:`\\(b/(1+a)=${b0}/(1+${a0})=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const n=ri(3,8),a0=ri(1,5),ans=v?n+1:(a0**2);return qNum(Z,title,v?`A finite impulse response has samples \\(x[0]\\) through \\(x[${n}]\\). How many samples are present?`:`An exponential sequence has pole magnitude \\(|a|=${a0}\\). Find \\(|a|^2\\).`,ans,v?`There are \\(N+1=${n}+1=${ans}\\) samples.`:`\\(|a|^2=${a0}^2=${ans}\\).`)
  }
}
function makeZtransExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const x0=ri(2,9),n=ri(2,7),ans=v?x0:x0*n*(n+1)/2;return qNum(Z,title,v?`For a unit-step input scaled by \\(${x0}\\), find the sample at index \\(${n}\\).`:`For a ramp sequence \\(x[n]=${x0}n\\), sum samples from zero through \\(${n}\\).`,ans,v?`The constant step level is \\(${x0}\\), so the sample is \\(${ans}\\).`:`\\(\\sum_{k=0}^N x_0 k=x_0N(N+1)/2=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const d=ri(1,4),n=ri(d+1,9),a0=pick([.25,.5,.75]),ans=v?Math.pow(a0,n-d):Math.pow(a0,d);return qNum(Z,title,v?`A delayed exponential is \\(x[n]=a^{n-${d}}u[n-${d}]\\) with \\(a=${a0}\\). Find \\(x[${n}]\\).`:`For delay \\(${d}\\), find the factor \\(a^{${d}}\\) for \\(a=${a0}\\).`,ans,v?`Since \\(${n}\\ge${d}\\), \\(x[${n}]=a^{${n}-${d}}=${nfmt(ans)}\\).`:`\\(a^d=${a0}^{${d}}=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const x=[ri(1,5),ri(1,5),ri(1,5)],h=[ri(1,5),ri(1,5)],n=ri(0,3),ans=v?x.reduce((u,val,i)=>u+val*(h[n-i]||0),0):x.reduce((u,val,i)=>u+val,0)+h.reduce((u,val)=>u+val,0);return qNum(Z,title,v?`Find discrete convolution output \\(y[${n}]\\) for \\(x=[${x}]\\) and \\(h=[${h}]\\), treating out-of-range samples as zero.`:`For sequences \\(x=[${x}]\\), \\(h=[${h}]\\), find the sum of all listed samples across both sequences.`,ans,v?`\\(y[n]=\\sum_k x[k]h[n-k]\\); at index ${n}, the sum is ${ans}.`:`The total is \\(${x.join('+')}+${h.join('+')}=${ans}\\).`)
  }
}
function makeZtransExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const omega=pick([Math.PI/6,Math.PI/4,Math.PI/3]),n=ri(1,8),ans=v?Math.cos(omega*n):2*Math.PI/omega;return qNum(Z,title,v?`For \\(x[n]=\\cos(\\omega n)\\), with \\(\\omega=${nfmt(omega)}\\), find \\(x[${n}]\\).`:`A discrete sinusoid has angular frequency \\(\\omega=${nfmt(omega)}\\) rad/sample. Find its continuous-equivalent period \\(2\\pi/\\omega\\).`,ans,v?`\\(x[${n}]=\\cos(\\omega ${n})=${nfmt(ans)}\\).`:`\\(T=2\\pi/\\omega=${nfmt(ans)}\\) samples.`)
  }
}
function makeZtransExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const aa=pick([.25,.4,.6]),z=ri(3,8),ans=v?aa/(z-aa)**2: z/(z-aa);return qNum(Z,title,v?`Evaluate \\(a/(z-a)^2\\) at \\(a=${aa}\\), \\(z=${z}\\).`:`Evaluate \\(X(z)=z/(z-a)\\) for \\(a=${aa}\\), \\(z=${z}\\).`,ans,v?`\\(a/(z-a)^2=${nfmt(ans)}\\).`:`\\(z/(z-a)=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const b0=ri(1,5),a0=ri(1,5),omega=pick([Math.PI/4,Math.PI/3]),num=b0,den=Math.sqrt(1+a0*a0-2*a0*Math.cos(omega)),ans=v?Math.atan2(a0*Math.sin(omega),1-a0*Math.cos(omega)):num/den;return qNum(Z,title,v?`For \\(H(e^{j\\omega})=b/(1-ae^{-j\\omega})\\), with \\(a=${a0}\\), find phase-lag magnitude at \\(\\omega=${nfmt(omega)}\\).`:`For \\(H(e^{j\\omega})=b/(1-ae^{-j\\omega})\\), \\(a=${a0},b=${b0}\\), find magnitude at \\(\\omega=${nfmt(omega)}\\).`,ans,v?`The phase-lag magnitude is \\(\\tan^{-1}\\!\\frac{a\\sin\\omega}{1-a\\cos\\omega}=${nfmt(ans)}\\,rad\\).`:`\\(|H|=b/\\sqrt{1+a^2-2a\\cos\\omega}=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const b0=ri(1,8),a0=pick([.2,.4,.6]),ans=v?b0/(1-a0):b0;return qNum(Z,title,v?`A stable first-order system has step input 1, \\(b=${b0}\\), \\(a=${a0}\\). Find steady-state output.`:`For impulse response \\(h[0]=${b0}\\), find the initial output sample.`,ans,v?`\\(y[\\infty]=b/(1-a)=${b0}/(1-${a0})=${nfmt(ans)}\\).`:`The initial impulse-response value is \\(h[0]=${ans}\\).`)
  }
}
function makeZtransExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),z=ri(5,10),ans=v?1/(z+a0):z/(z+a0);return qNum(Z,title,v?`For \\(X(z)=1/(z+${a0})\\), evaluate \\(X(${z})\\).`:`For \\(X(z)=z/(z+${a0})\\), evaluate \\(X(${z})\\).`,ans,v?`\\(X=${nfmt(ans)}\\).`:`\\(X=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const x0=ri(1,5),x1=ri(1,5),x2=ri(1,5),ans=v?x0-2*x1+x2:x0-x1;return qNum(Z,title,v?`For samples \\(x[0]=${x0},x[1]=${x1},x[2]=${x2}\\), find the second difference \\(x[2]-2x[1]+x[0]\\).`:`For samples \\(x[0]=${x0}\\), \\(x[1]=${x1}\\), find first backward difference \\(x[0]-x[1]\\).`,ans,v?`\\(\\Delta^2x=${x2}-2(${x1})+${x0}=${ans}\\).`:`\\(\\Delta x=${x0}-${x1}=${ans}\\).`)
  }
}
function makeZtransExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a0=pick([.25,.5,.75]),n=ri(2,8),ans=v?Math.pow(a0,2*n):Math.pow(a0,n);return qNum(Z,title,v?`For \\(x[n]=a^n\\), \\(a=${a0}\\), find the squared magnitude of sample \\(x[${n}]\\).`:`For \\(x[n]=a^n\\), \\(a=${a0}\\), find \\(x[${n}]\\).`,ans,v?`\\(|x[${n}]|^2=a^{2n}=${nfmt(ans)}\\).`:`\\(x[${n}]=a^n=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),y0=ri(1,5),ans=v?b0*y0:b0*y0;return qNum(Z,title,v?`For a one-step recursion \\(y[n]+${a0}y[n-1]=${b0}x[n]\\), with \\(x[0]=${y0}\\), find \\(y[0]\\) assuming zero prehistory.`:`For \\(y[0]=${b0}x[0]\\) and \\(x[0]=${y0}\\), find initial output.`,ans,v?`At zero prehistory, \\(y[0]=b x[0]=${b0}(${y0})=${ans}\\); the extra recurrence factor is not used at n=0.`:`\\(y[0]=${b0}(${y0})=${ans}\\).`)
  }
}
function makeZtransExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const n=ri(3,8),a0=pick([.2,.4,.6]),ans=v?Math.pow(a0,n+1)/(1-a0): (1-Math.pow(a0,n+1))/(1-a0);return qNum(Z,title,v?`Find the remaining tail sum \\(\\sum_{k=${n+1}}^\\infty (${a0})^k\\).`:`Find \\(\\sum_{k=0}^{${n}} (${a0})^k\\).`,ans,v?`Tail sum \\(=a^{N+1}/(1-a)=${nfmt(ans)}\\).`:`Finite geometric sum \\((1-a^{N+1})/(1-a)=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a0=pick([.3,.5,.7]),x0=ri(2,8),n=ri(1,6),ans=v?x0*Math.pow(a0,n+1)/(1-a0):x0*Math.pow(a0,n);return qNum(Z,title,v?`For \\(x[n]=${x0}(${a0})^n\\), find the tail sum beginning at index \\(${n+1}\\).`:`For \\(x[n]=${x0}(${a0})^n\\), find sample \\(x[${n}]\\).`,ans,v?`\\(\\sum_{k=n+1}^\\infty x[k]=x_0a^{n+1}/(1-a)=${nfmt(ans)}\\).`:`\\(x[${n}]=${x0}(${a0})^{${n}}=${nfmt(ans)}\\).`)
  }
}
function makeZtransExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a0=pick([.2,.4,.6]),b0=ri(1,5),ans=v?b0/(1-a0):b0/(1+a0);return qNum(Z,title,v?`For stable recursion \\(y[n]=${a0}y[n-1]+${b0}\\), find steady-state output.`:`For alternating recurrence \\(y[n]=-(${a0})y[n-1]+${b0}\\), find constant equilibrium value.`,ans,v?`At equilibrium \\(y=ay+b\\), so \\(y=b/(1-a)=${nfmt(ans)}\\).`:`Solve \\(y=-ay+b\\), giving \\(y=b/(1+a)=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const Z_SUP_NAMES = ["Causal exponential sequence", "Delayed unit-step transform", "Delayed impulse transform", "Weighted exponential sequence", "Finite-sequence transform", "Difference-equation transfer function", "Inverse transform sequence value", "Time-shift property", "Step-sequence transform", "Pole and decay analysis"];

const Z_EXTRA_NAMES = ["Causal geometric sequence", "Delayed impulse spectrum", "Unit-step transform", "Finite sequence spectrum", "First-order difference response", "Inverse geometric sequence", "Impulse delay rule", "Pole-stability condition", "Difference-equation transfer", "Z-transform pair equation"];

function makeZSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${Z_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let aa=ri(1,3),zz=aa+ri(3,7),ans=zz/(zz-aa);return qNum(Z,title,`For \\(x[n]=(${aa})^n u[n]\\), evaluate \\(X(z)\\) at \\(z=${zz}\\).`,ans,`\\(X(z)=z/(z-a)\\), so \\(${zz}/(${zz}-${aa})=${nfmt(ans)}\\).`)}
      if(fam===1){let m=ri(1,4),zz=ri(3,8),ans=zz**(-m)/(1-1/zz);return qNum(Z,title,`For \\(x[n]=u[n-${m}]\\), evaluate its Z-transform at \\(z=${zz}\\).`,ans,`\\(X(z)=z^{-${m}}/(1-z^{-1})\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===2){let m=ri(1,5),zz=ri(3,8),ans=zz**(-m);return qNum(Z,title,`Find \\(\\mathcal Z\\{\\delta[n-${m}]\\}\\) at \\(z=${zz}\\).`,ans,`\\(\\mathcal Z\\{\\delta[n-m]\\}=z^{-m}\\), hence \\(${zz}^{-${m}}=${nfmt(ans)}\\).`)}
      if(fam===3){let aa=ri(1,3),zz=aa+ri(3,7),ans=aa*zz/(zz-aa)**2;return qNum(Z,title,`For \\(x[n]=n(${aa})^n u[n]\\), evaluate \\(X(${zz})\\).`,ans,`\\(\\mathcal Z\\{na^n u[n]\\}=az/(z-a)^2\\), so the value is \\(${nfmt(ans)}\\).`)}
      if(fam===4){let x0=ri(1,8),x1=ri(1,8),x2=ri(0,6),zz=ri(2,7),ans=x0+x1/zz+x2/(zz*zz);return qNum(Z,title,`For the finite sequence \\(x[0]=${x0},x[1]=${x1},x[2]=${x2}\\) and zero elsewhere, find \\(X(${zz})\\).`,ans,`\\(X(z)=x[0]+x[1]z^{-1}+x[2]z^{-2}\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===5){let aa=rand(.1,.6),zz=ri(3,8),ans=1/(1-aa/zz);return qNum(Z,title,`For \\(y[n]-(${nfmt(aa)})y[n-1]=x[n]\\) with zero initial conditions, evaluate \\(H(z)=Y/X\\) at \\(z=${zz}\\).`,ans,`\\(H(z)=1/(1-az^{-1})\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===6){let aa=ri(1,4),nn=ri(0,5),ans=aa**nn;return qNum(Z,title,`If \\(X(z)=z/(z-${aa})\\) is the Z-transform of \\(x[n]\\), find \\(x[${nn}]\\).`,ans,`The inverse pair is \\(z/(z-a)\\leftrightarrow a^n u[n]\\), so \\(x[${nn}]=${aa}^{${nn}}=${ans}\\).`)}
      if(fam===7){let m=ri(1,4),zz=ri(3,8),ans=1/(zz**m);return qNum(Z,title,`A sequence is delayed by \\(${m}\\) samples. Find the multiplier \\(z^{-m}\\) at \\(z=${zz}\\).`,ans,`A delay of \\(m\\) samples multiplies the transform by \\(z^{-m}\\); here it is \\(${nfmt(ans)}\\).`)}
      if(fam===8){let zz=ri(3,8),ans=zz/(zz-1);return qNum(Z,title,`Evaluate the Z-transform of the unit step \\(u[n]\\) at \\(z=${zz}\\).`,ans,`\\(\\mathcal Z\\{u[n]\\}=z/(z-1)\\), so \\(${nfmt(ans)}\\).`)}
      {let aa=ri(1,4);return qNum(Z,title,`A causal sequence has a single pole at \\(z=${aa}\\). Find the pole magnitude.`,Math.abs(aa),`The pole is located at \\(z=${aa}\\), so its magnitude is \\(${Math.abs(aa)}\\).`)}
}


function makeZExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${Z_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let aa=ri(1,3),zz=aa+ri(2,6),ans=zz/(zz-aa);return qNum(Z,title,`For \\(x[n]=(${aa})^n u[n]\\), find \\(X(z)\\) at \\(z=${zz}\\).`,ans,`\\(X(z)=z/(z-a)\\) for \\(|z|>|a|\\); here \\(${zz}/(${zz}-${aa})=${nfmt(ans)}\\).`)}
      if(fam===1){let m=ri(1,5),zz=ri(2,6),ans=zz**(-m);return qNum(Z,title,`Find \\(\\mathcal Z\\{\\delta[n-${m}]\\}\\) at \\(z=${zz}\\).`,ans,`\\(\\mathcal Z\\{\\delta[n-m]\\}=z^{-m}\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===2){let zz=ri(2,7),ans=zz/(zz-1);return qNum(Z,title,`Evaluate the Z-transform of \\(u[n]\\) at \\(z=${zz}\\).`,ans,`\\(\\mathcal Z\\{u[n]\\}=z/(z-1)\\), so \\(${zz}/(${zz}-1)=${nfmt(ans)}\\).`)}
      if(fam===3){let aa=ri(1,4),nn=ri(2,5),zz=aa+ri(3,7),ans=0;for(let j=0;j<=nn;j++)ans+=(aa/zz)**j;return qNum(Z,title,`For finite sequence \\(x[n]=(${aa})^n\\) for \\(0\\le n\\le${nn}\\), evaluate \\(X(${zz})=\\sum_{n=0}^{${nn}}x[n]z^{-n}\\).`,ans,`Sum \\(\\sum_{n=0}^{${nn}}(${aa}/${zz})^n\\) to obtain \\(${nfmt(ans)}\\).`)}
      if(fam===4){let aa=ri(1,4),zz=aa+ri(2,6),ans=zz/(zz-aa);return qNum(Z,title,`A causal system obeys \\(y[n]-${aa}y[n-1]=x[n]\\) with zero initial conditions. Find \\(H(z)\\) at \\(z=${zz}\\).`,ans,`\\(H(z)=1/(1-${aa}z^{-1})=z/(z-${aa})\\), so \\(H(${zz})=${nfmt(ans)}\\).`)}
      if(fam===5){let aa=ri(1,4),nn=ri(1,5),ans=aa**nn;return qNum(Z,title,`For \\(X(z)=z/(z-${aa})\\) with the causal ROC, find \\(x[${nn}]\\).`,ans,`The inverse pair is \\(z/(z-a)\\leftrightarrow a^n u[n]\\); hence \\(x[${nn}]=${aa}^{${nn}}=${ans}\\).`)}
      if(fam===6){let zz=ri(2,7),ans=1/zz;return qNum(Z,title,`Evaluate \\(\\mathcal Z\\{\\delta[n-1]\\}\\) at \\(z=${zz}\\).`,ans,`\\(\\mathcal Z\\{\\delta[n-1]\\}=z^{-1}\\), so the value is \\(${nfmt(ans)}\\).`)}
      if(fam===7)return equationQ(Z,title,'For a causal first-order discrete-time system with pole \\(z=a\\), which condition gives BIBO stability?','|a|<1',['|a|>1','a=1 only','|a|=2'],'A causal rational discrete-time system is BIBO stable when all poles lie strictly inside the unit circle.')
      if(fam===8){let aa=ri(1,3),zz=aa+ri(2,6),ans=1/(1-aa/zz);return qNum(Z,title,`For \\(y[n]-${aa}y[n-1]=x[n]\\), evaluate \\(H(z)=1/(1-${aa}z^{-1})\\) at \\(z=${zz}\\).`,ans,`Substitute \\(z=${zz}\\): \\(H=1/(1-${aa}/${zz})=${nfmt(ans)}\\).`)}
      return equationQ(Z,title,'Which is the Z-transform of the causal exponential sequence \\(a^n u[n]\\)?','\\frac{z}{z-a},\\quad |z|>|a|',['\\frac{z}{z+a}','\\frac{1}{z-a}','z-a'],'The geometric series yields \\(\\mathcal Z\\{a^n u[n]\\}=z/(z-a)\\), with ROC outside the pole.');
}


NUMERIC_GENERATOR_REGISTRY.ztrans = [...numericSeedEntries(Z, Z_SUP_NAMES, 'Core', 'supplement-seed', makeZSupplement),
    ...numericSeedEntries(Z, Z_EXTRA_NAMES, 'Applied', 'applied-seed', makeZExtraSeed, 11),
    numericEntry('ztrans',"Causal exponential sequence · family 01 (randomized variant)","ztrans-family-01",()=>makeZtransExpansionFamily01("Causal exponential sequence · family 01 (randomized variant)")),
    numericEntry('ztrans',"Delayed unit-step transform · family 02 (randomized variant)","ztrans-family-02",()=>makeZtransExpansionFamily02("Delayed unit-step transform · family 02 (randomized variant)")),
    numericEntry('ztrans',"Delayed impulse transform · family 03 (randomized variant)","ztrans-family-03",()=>makeZtransExpansionFamily03("Delayed impulse transform · family 03 (randomized variant)")),
    numericEntry('ztrans',"Weighted exponential sequence · family 04 (randomized variant)","ztrans-family-04",()=>makeZtransExpansionFamily04("Weighted exponential sequence · family 04 (randomized variant)")),
    numericEntry('ztrans',"Finite-sequence transform · family 05 (randomized variant)","ztrans-family-05",()=>makeZtransExpansionFamily05("Finite-sequence transform · family 05 (randomized variant)")),
    numericEntry('ztrans',"Difference-equation transfer function · family 06 (randomized variant)","ztrans-family-06",()=>makeZtransExpansionFamily06("Difference-equation transfer function · family 06 (randomized variant)")),
    numericEntry('ztrans',"Inverse transform sample · family 07 (randomized variant)","ztrans-family-07",()=>makeZtransExpansionFamily07("Inverse transform sample · family 07 (randomized variant)")),
    numericEntry('ztrans',"Time-shift property · family 08 (randomized variant)","ztrans-family-08",()=>makeZtransExpansionFamily08("Time-shift property · family 08 (randomized variant)")),
    numericEntry('ztrans',"Step-sequence transform · family 09 (randomized variant)","ztrans-family-09",()=>makeZtransExpansionFamily09("Step-sequence transform · family 09 (randomized variant)")),
    numericEntry('ztrans',"Pole and decay analysis · family 10 (randomized variant)","ztrans-family-10",()=>makeZtransExpansionFamily10("Pole and decay analysis · family 10 (randomized variant)")),
    numericEntry('ztrans',"Second difference · family 11 (randomized variant)","ztrans-family-11",()=>makeZtransExpansionFamily11("Second difference · family 11 (randomized variant)")),
    numericEntry('ztrans',"Impulse response sample · family 12 (randomized variant)","ztrans-family-12",()=>makeZtransExpansionFamily12("Impulse response sample · family 12 (randomized variant)")),
    numericEntry('ztrans',"Steady-state step response · family 13 (randomized variant)","ztrans-family-13",()=>makeZtransExpansionFamily13("Steady-state step response · family 13 (randomized variant)")),
    numericEntry('ztrans',"Geometric tail sum · family 14 (randomized variant)","ztrans-family-14",()=>makeZtransExpansionFamily14("Geometric tail sum · family 14 (randomized variant)")),
    numericEntry('ztrans',"Sequence norm · family 15 (randomized variant)","ztrans-family-15",()=>makeZtransExpansionFamily15("Sequence norm · family 15 (randomized variant)")),
    numericEntry('ztrans',"Initial-value recurrence · family 16 (randomized variant)","ztrans-family-16",()=>makeZtransExpansionFamily16("Initial-value recurrence · family 16 (randomized variant)")),
    numericEntry('ztrans',"Difference equation value · family 17 (randomized variant)","ztrans-family-17",()=>makeZtransExpansionFamily17("Difference equation value · family 17 (randomized variant)")),
    numericEntry('ztrans',"Finite sequence energy · family 18 (randomized variant)","ztrans-family-18",()=>makeZtransExpansionFamily18("Finite sequence energy · family 18 (randomized variant)")),
    numericEntry('ztrans',"Geometric sequence sum · family 19 (randomized variant)","ztrans-family-19",()=>makeZtransExpansionFamily19("Geometric sequence sum · family 19 (randomized variant)")),
    numericEntry('ztrans',"Stability and region of convergence · family 20 (randomized variant)","ztrans-family-20",()=>makeZtransExpansionFamily20("Stability and region of convergence · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe('ztrans','Finite-length rectangular sequence Z-transform','ztrans-finite-rectangular-sequence',()=>{
  const N=ri(3,8),z=ri(2,6),ans=(1-Math.pow(z,-N))/(1-1/z);
  return qNum('ztrans','Finite-length rectangular sequence Z-transform',`A sequence is \(x[n]=1\) for \(0\\le n\\le ${N-1}\), and zero otherwise. Evaluate \(X(z)=\\sum_{n=0}^{${N-1}}z^{-n}\) at \(z=${z}\).`,ans,`This is a finite geometric series: \(X(z)=(1-z^{-${N}})/(1-z^{-1})\). At \(z=${z}\), \(X=${nfmt(ans)}\).`)
});
appendNumericRecipe(Z,'Applied · Firmware smoothing recurrence','scenario-z-firmware-smoothing',()=>{
  const alpha=pick([.25,.5,.75]),x=Array.from({length:4},()=>ri(1,12)),y=[x[0]];
  for(let n=1;n<4;n++)y[n]=alpha*y[n-1]+(1-alpha)*x[n];
  const ans=y[3];
  return qNum(Z,'Applied · Firmware smoothing recurrence',`A microcontroller smooths a noisy sensor stream using \(y[n]=\alpha y[n-1]+(1-\alpha)x[n]\), with \(\alpha=${alpha}\) and initial value \(y[0]=x[0]=${x[0]}\). The next three inputs are \(x[1]=${x[1]}\), \(x[2]=${x[2]}\), and \(x[3]=${x[3]}\). Find \(y[3]\).`,ans,`Recursively, \(y[1]=${nfmt(y[1])}\), \(y[2]=${nfmt(y[2])}\), and \(y[3]=${alpha}(${nfmt(y[2])})+(1-${alpha})(${x[3]})=${nfmt(ans)}\).`);
});
appendNumericRecipe(Z,'Applied · Three-tap firmware filter','scenario-z-three-tap-fir',()=>{
  const x=Array.from({length:5},()=>ri(0,12)),n=3,ans=(x[n]+2*x[n-1]+x[n-2])/4;
  const q=qNum(Z,'Applied · Three-tap firmware filter',`A firmware filter uses \(y[n]=\frac14x[n]+\frac12x[n-1]+\frac14x[n-2]\). Its measured input buffer, indexed from \(n=0\), is \([${x.join(', ')}]\). Find \(y[3]\).`,ans,`\(y[3]=\frac14x[3]+\frac12x[2]+\frac14x[1]=\frac14(${x[3]})+\frac12(${x[2]})+\frac14(${x[1]})=${nfmt(ans)}\).`);
  return attachDiagram(q,'filterFlow','A discrete input sequence passes through a three-tap FIR digital filter h[n] and produces the smoothed output sequence y[n].');
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('ztrans','Additional · Finite geometric sequence transform','ztrans-topup-01',()=>{
  const a=ri(1,4),z=ri(6,12),N=ri(3,7);let ans=0;for(let n=0;n<N;n++)ans+=a**n/z**n;
  return qNum(Z,'Finite geometric sequence transform',`A sequence is \(x[n]=${a}^n\) for \(0\le n<${N}\), and zero otherwise. Evaluate \(X(z)\) at \(z=${z}\).`,ans,`The finite Z-transform is \(X(z)=\sum_{n=0}^{${N-1}}(${a}/z)^n\). Evaluating the finite sum gives \(${nfmt(ans)}\).`);
});
appendNumericRecipe('ztrans','Additional · First-order pole-zero transfer value','ztrans-topup-02',()=>{
  const a=ri(1,3),b=ri(1,4),z=ri(7,12),ans=(z-b)/(z-a);
  return qNum(Z,'First-order pole-zero transfer value',`A discrete-time system has \(H(z)=(z-${b})/(z-${a})\). Evaluate \(H(${z})\).`,ans,`Substitute \(z=${z}\): \(H=(${z}-${b})/(${z}-${a})=${nfmt(ans)}\).`);
});
appendNumericRecipe('ztrans','Additional · Inverse Z-transform of a scaled exponential','ztrans-topup-03',()=>{
  const A=ri(2,7),a=ri(1,4),n=ri(0,6),ans=A*a**n;
  return qNum(Z,'Inverse Z-transform of a scaled exponential',`If \(X(z)=${A}z/(z-${a})\) is causal, find \(x[${n}]\).`,ans,`The pair is \(z/(z-a)\leftrightarrow a^n u[n]\), so \(x[n]=${A}(${a})^n\); at \(n=${n}\), \(x=${ans}\).`);
});
appendNumericRecipe('ztrans','Additional · Steady-state solution of a recurrence','ztrans-topup-04',()=>{
  const r=pick([.2,.3,.4,.5,.6,.7]),u=ri(2,8),ans=u/(1-r);
  return qNum(Z,'Steady-state solution of a recurrence',`A stable recurrence is \(y[n]=${nfmt(r)}y[n-1]+${u}\). Find its constant steady-state value.`,ans,`At steady state, \(y[n]=y[n-1]=y_\infty\). Thus \(y_\infty=${nfmt(r)}y_\infty+${u}\), so \(y_\infty=${u}/(1-${nfmt(r)})=${nfmt(ans)}\).`);
});
appendNumericRecipe('ztrans','Additional · Three-tap FIR response at a sample frequency','ztrans-topup-05',()=>{
  const z=ri(3,8),b0=pick([.2,.3,.5,1]),b1=pick([.1,.25,.4]),b2=pick([.1,.2,.3]),ans=b0+b1/z+b2/(z*z);
  return qNum(Z,'Three-tap FIR response at a sample frequency',`A three-tap filter has \(H(z)=${nfmt(b0)}+${nfmt(b1)}z^{-1}+${nfmt(b2)}z^{-2}\). Find \(H(${z})\).`,ans,`Substitute \(z=${z}\): \(H=${nfmt(b0)}+${nfmt(b1)}/${z}+${nfmt(b2)}/${z}^2=${nfmt(ans)}\).`);
});
