/* convolution: seed entries, explicit expansion families, and category-specific additions. */

function makeConvolutionExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const x=[ri(1,5),ri(1,5),ri(1,5)],h=[ri(1,5),ri(1,5),ri(1,5)],n=ri(0,4),ans=v?x.reduce((u,val,i)=>u+val*(h[n-i]||0),0):x.reduce((u,val)=>u+val,0)*h.reduce((u,val)=>u+val,0);return qNum(CV,title,v?`Find discrete convolution \\(y[${n}]\\) for \\(x=[${x}]\\), \\(h=[${h}]\\), treating outside samples as zero.`:`For sequences \\(x=[${x}]\\) and \\(h=[${h}]\\), find the total-sum identity \\(\\sum y[n]=(\\sum x)(\\sum h)\\).`,ans,v?`\\(y[${n}]=\\sum_k x[k]h[${n}-k]=${ans}\\).`:`\\(\\sum y=(\\sum x)(\\sum h)=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=aa+ri(1,4),x=rand(.3,2),ans=v?Math.exp(-aa*x)-Math.exp(-bb*x):(Math.exp(-aa*x)-Math.exp(-bb*x))/(bb-aa);return qNum(CV,title,v?`For \\(e^{-${aa}t}*e^{-${bb}t}\\), find the numerator at \\(t=${nfmt(x)}\\).`:`For causal exponentials \\(e^{-${aa}t}\\) and \\(e^{-${bb}t}\\), find convolution at \\(t=${nfmt(x)}\\).`,ans,v?`Numerator \\(=e^{-at}-e^{-bt}=${nfmt(ans)}\\).`:`\\((e^{-at}-e^{-bt})/(b-a)=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),x=rand(.2,2),ans=v?x*Math.exp(-aa*x):(1-Math.exp(-aa*x))/aa;return qNum(CV,title,v?`Find \\(t e^{-at}\\) at \\(t=${nfmt(x)}\\), \\(a=${aa}\\), the ramp-weighted exponential kernel.`:`Evaluate \\(\\int_0^t e^{-a\\tau}d\\tau\\) at \\(t=${nfmt(x)}\\), \\(a=${aa}\\).`,ans,v?`\\(t e^{-at}=${nfmt(ans)}\\).`:`\\((1-e^{-at})/a=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,5),T0=ri(1,5),x=rand(.2,2*T0),overlap=Math.max(0,Math.min(x,T0)-Math.max(0,x-T0)),ans=v?overlap*A0*A0:overlap*A0;return qNum(CV,title,v?`Two unit-width-shape rectangular pulses each of height \\(${A0}\\) are shifted by \\(t=${nfmt(x)}\\), width \\(${T0}\\). Find overlap product area.`:`Two rectangular pulses of height \\(${A0}\\), width \\(${T0}\\), are separated by shift \\(t=${nfmt(x)}\\). Find overlap area weighted by one amplitude.`,ans,v?`Overlap length \\(=${nfmt(overlap)}\\); product area \\(=A^2L=${nfmt(ans)}\\).`:`Overlap length \\(=${nfmt(overlap)}\\), so weighted overlap \\(=AL=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,5),n=ri(2,8),ans=v?A0*n*(n+1)/2:A0*n;return qNum(CV,title,v?`A discrete ramp \\(x[k]=${A0}k\\) is summed from \\(k=1\\) to \\(${n}\\). Find the cumulative output.`:`A constant sequence has amplitude \\(${A0}\\) for \\(${n}\\) samples. Find its sum.`,ans,v?`\\(\\sum_{k=1}^N Ak=A N(N+1)/2=${ans}\\).`:`\\(S=AN=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=aa+ri(1,4),x=rand(.3,1.8),ans=v?Math.exp(-aa*x)/(bb-aa):(Math.exp(-aa*x)-Math.exp(-bb*x))/(bb-aa);return qNum(CV,title,v?`For causal exponentials with rates \\(${aa}\\) and \\(${bb}\\), evaluate the first exponential contribution \\(e^{-at}/(b-a)\\) at \\(t=${nfmt(x)}\\).`:`Find the convolution of \\(e^{-${aa}t}u(t)\\) and \\(e^{-${bb}t}u(t)\\) at \\(t=${nfmt(x)}\\).`,ans,v?`\\(e^{-at}/(b-a)=${nfmt(ans)}\\).`:`\\(y(t)=(e^{-at}-e^{-bt})/(b-a)=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const x=[ri(1,5),ri(1,5),ri(1,5),ri(1,5)],n=ri(0,3),ans=v?x.slice(0,n+1).reduce((u,vv)=>u+vv,0):x.length+x.length-1;return qNum(CV,title,v?`For finite sequence \\(x=[${x}]\\), find partial sum through index \\(${n}\\).`:`A finite sequence of length ${x.length} is convolved with another sequence of length ${x.length}. Find output length.`,ans,v?`Partial sum \\(=${ans}\\).`:`Output length is \\(N_x+N_h-1=${x.length}+${x.length}-1=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,6),T0=ri(1,6),ans=v?A0*T0/2:A0*T0;return qNum(CV,title,v?`A triangular pulse of peak \\(${A0}\\) and base width \\(${T0}\\) is convolved with a unit impulse. Find pulse area, preserved by the impulse.`:`A rectangle has height \\(${A0}\\) and width \\(${T0}\\). Find its area.`,ans,v?`Impulse convolution preserves the signal; triangle area \\(=AT/2=${nfmt(ans)}\\).`:`Rectangle area \\(=AT=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const x=[ri(1,5),ri(1,5),ri(1,5)],h=[ri(1,5),ri(1,5)],n=ri(0,3),ans=v?x.reduce((u,val,i)=>u+val*(h[n-i]||0),0):x.length+h.length-1;return qNum(CV,title,v?`Find \\(y[${n}]\\) for \\(x=[${x}]\\) convolved with \\(h=[${h}]\\).`:`A sequence of length \\(${x.length}\\) is convolved with a sequence of length \\(${h.length}\\). Find output length.`,ans,v?`\\(y[${n}]=\\sum_kx[k]h[${n}-k]=${ans}\\).`:`\\(N_y=N_x+N_h-1=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),x=rand(.2,1.6),ans=v?Math.exp(-a0*x)*Math.exp(-b0*x):Math.exp(-(a0+b0)*x);return qNum(CV,title,v?`At \\(t=${nfmt(x)}\\), multiply exponential factors \\(e^{-${a0}t}\\) and \\(e^{-${b0}t}\\).`:`Evaluate the product-response envelope \\(e^{-(${a0}+${b0})t}\\) at \\(t=${nfmt(x)}\\).`,ans,v?`Product \\(=e^{-at}e^{-bt}=${nfmt(ans)}\\).`:`\\(e^{-(a+b)t}=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(3,8),ans=v?N0*(N0-1)/2:N0*(N0+1)/2;return qNum(CV,title,v?`For a causal length-\\(${N0}\\) sequence, how many strictly off-diagonal sample pairs contribute to a triangular convolution support?`:`A causal sequence has \\(${N0}\\) samples. How many pairs are present in a full symmetric triangular count \\(N(N+1)/2\\)?`,ans,v?`\\(N(N-1)/2=${ans}\\) off-diagonal pairs.`:`\\(N(N+1)/2=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,4),bb=aa+ri(1,4),x=rand(.2,1.8),ans=v?Math.exp(-aa*x):Math.exp(-aa*x)*(1-Math.exp(-(bb-aa)*x))/(bb-aa);return qNum(CV,title,v?`For exponential kernel \\(e^{-${aa}t}\\), evaluate its value at \\(t=${nfmt(x)}\\).`:`For two decays with rates \\(${aa}\\) and \\(${bb}\\), evaluate contribution \\(e^{-at}(1-e^{-(b-a)t})/(b-a)\\).`,ans,v?`\\(e^{-at}=${nfmt(ans)}\\).`:`Substitution gives \\(${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const p0=ri(1,4),q0=ri(1,4),ans=v?p0*q0:p0+q0;return qNum(CV,title,v?`The total sums of two discrete sequences are \\(${p0}\\) and \\(${q0}\\). Find the total sum of their convolution.`:`Two sequence totals are \\(${p0}\\) and \\(${q0}\\). Find their combined total if the signals are simply added.`,ans,v?`\\(\\sum_n(x*h)[n]=(\\sum x)(\\sum h)=${ans}\\).`:`\\(S=${p0}+${q0}=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const aa=ri(1,5),bb=ri(1,5),x=rand(.2,1.5),ans=v?(1-Math.exp(-aa*x))/aa:(1-Math.exp(-aa*x))*(1-Math.exp(-bb*x))/(aa*bb);return qNum(CV,title,v?`Evaluate step-exponential convolution \\(\\int_0^t e^{-a\\tau}d\\tau\\) at \\(t=${nfmt(x)}\\), \\(a=${aa}\\).`:`For two independent exponential cumulative factors with rates \\(${aa}\\), \\(${bb}\\), find the product of their integrated values at \\(t=${nfmt(x)}\\).`,ans,v?`\\((1-e^{-at})/a=${nfmt(ans)}\\).`:`\\([1-e^{-at}][1-e^{-bt}]/(ab)=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const m=ri(2,7),n=ri(2,7),ans=v?m*n:m+n-1;return qNum(CV,title,v?`Two sequences have lengths \\(${m}\\) and \\(${n}\\). Find the number of input sample pairs.`:`Two finite sequences have lengths \\(${m}\\) and \\(${n}\\). Find full convolution output length.`,ans,v?`There are \\(N_xN_h=${m}(${n})=${ans}\\) pair products.`:`\\(N_y=N_x+N_h-1=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,5),n=ri(2,6),ans=v?A0*n:A0*n*n;return qNum(CV,title,v?`A constant response \\(${A0}\\) is accumulated over \\(${n}\\) samples. Find the sum.`:`For an \\(${n}\\)-sample output whose entries each equal \\(${A0*n}\\), find total sum.`,ans,v?`\\(S=AN=${ans}\\).`:`\\(S=N(AN)=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),x=rand(.2,1.4),ans=v?Math.exp(-a0*x)*x:Math.exp(-a0*x);return qNum(CV,title,v?`For a ramp-exponential kernel \\(te^{-${a0}t}\\), evaluate at \\(t=${nfmt(x)}\\).`:`For exponential kernel \\(e^{-${a0}t}\\), evaluate at \\(t=${nfmt(x)}\\).`,ans,v?`\\(te^{-at}=${nfmt(ans)}\\).`:`\\(e^{-at}=${nfmt(ans)}\\).`)
  }
}
function makeConvolutionExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1,5),B0=ri(1,5),ans=v?A0*B0:A0+B0;return qNum(CV,title,v?`In transform space, two convolution factors have constant values \\(${A0}\\) and \\(${B0}\\). Find their product.`:`Two parallel signal contributions have values \\(${A0}\\) and \\(${B0}\\). Find their sum.`,ans,v?`Convolution theorem product \\(=${A0}(${B0})=${ans}\\).`:`Sum \\(=${A0}+${B0}=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const n=ri(3,8),p=ri(1,4),q=ri(1,4),ans=v?n*p*q:n*p;return qNum(CV,title,v?`A finite sequence contains \\(${n}\\) samples with constant value \\(${p}\\); convolving with a constant \\(${q}\\) impulse response, find total output sum.`:`A length-\\(${n}\\) sequence has each sample \\(${p}\\). Find its total sum.`,ans,v?`\\(\\sum y=(np)q=${ans}\\).`:`\\(S=Np=${ans}\\).`)
  }
}
function makeConvolutionExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),x=rand(.2,1.5),ans=v?Math.exp(-a0*x)*Math.exp(-b0*x):(Math.exp(-a0*x)-Math.exp(-b0*x))/(b0-a0||1);return qNum(CV,title,v?`Evaluate product \\(e^{-${a0}t}e^{-${b0}t}\\) at \\(t=${nfmt(x)}\\).`:`Evaluate two-exponential convolution at \\(t=${nfmt(x)}\\) for rates \\(${a0}\\) and \\(${b0===a0?b0+1:b0}\\).`,ans,v?`Product \\(=e^{-(a+b)t}=${nfmt(ans)}\\).`:`For distinct rates, \\(y=(e^{-at}-e^{-bt})/(b-a)=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const CONVOLUTION_SUP_NAMES = ["Two-tap discrete convolution", "Geometric-sequence convolution", "Exponential with unit step", "Step with step", "Ramp with unit step", "Two exponential responses", "Impulse identity", "First discrete convolution sample", "Three-tap moving average", "Convolution at a selected index"];

const CONVOLUTION_EXTRA_NAMES = ["Discrete output at index one", "Discrete output at index two", "Exponential-step convolution", "Step-step convolution", "Ramp-step convolution", "Shifted impulse sample", "Finite output length", "Rectangular-pulse overlap", "Convolution theorem equation", "Convolution first sample"];

function makeConvolutionSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${CONVOLUTION_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let aa=ri(1,8),ans=3*aa+2;return qNum(CV,title,`Let \\(a[n]=[${aa},1]\\), \\(b[n]=[1,3]\\), with indices starting at zero. Find \\(y[1]\\) for \\(y=a*b\\).`,ans,`\\(y[1]=a[0]b[1]+a[1]b[0]=${aa}(3)+1=${ans}\\).`)}
      if(fam===1){let aa=ri(1,3),bb=aa+1,nn=ri(1,3),ans=0;for(let j=0;j<=nn;j++)ans+=aa**j*bb**(nn-j);return qNum(CV,title,`For \\(a[n]=(${aa})^n u[n]\\) and \\(b[n]=(${bb})^n u[n]\\), find the discrete convolution \\(y[${nn}]\\).`,ans,`\\(y[n]=\\sum_{k=0}^{n}a^k b^{n-k}\\); summing at \\(n=${nn}\\) gives \\(${ans}\\).`)}
      if(fam===2){let aa=ri(1,4),tt=ri(1,4),ans=(1-Math.exp(-aa*tt))/aa;return qNum(CV,title,`Find \\(y(${tt})=(e^{-${aa}t}u(t))*u(t)\\) using continuous-time convolution.`,ans,`\\(y(t)=\\int_0^t e^{-${aa}\\tau}d\\tau=(1-e^{-${aa}t})/${aa}=${nfmt(ans)}\\).`)}
      if(fam===3){let tt=ri(1,6);return qNum(CV,title,`Find \\(y(${tt})=(u*u)(${tt})\\) for continuous-time unit steps.`,tt,`\\(y(t)=\\int_0^t1\\,d\\tau=t\\), so \\(y(${tt})=${tt}\\).`)}
      if(fam===4){let tt=ri(1,6),ans=tt*tt/2;return qNum(CV,title,`Find \\(y(${tt})=(t u(t))*u(t)\\).`,ans,`\\(y(t)=\\int_0^t\\tau d\\tau=t^2/2\\), so \\(${tt}^2/2=${nfmt(ans)}\\).`)}
      if(fam===5){let aa=ri(1,4),bb=aa+ri(1,3),tt=ri(1,3),ans=(Math.exp(-aa*tt)-Math.exp(-bb*tt))/(bb-aa);return qNum(CV,title,`Find the convolution of \\(e^{-${aa}t}u(t)\\) and \\(e^{-${bb}t}u(t)\\) at \\(t=${tt}\\).`,ans,`\\(y(t)=\\frac{e^{-at}-e^{-bt}}{b-a}\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===6){let aa=ri(1,8);return qNum(CV,title,`If \\(x[n]=${aa}\\) at the considered sample, find \\((x*\\delta)[n]\\).`,aa,`The impulse is the identity under convolution: \\(x*\\delta=x\\).`)}
      if(fam===7){let aa=ri(1,9),bb=ri(1,9);return qNum(CV,title,`Let \\(a[0]=${aa}\\), \\(b[0]=${bb}\\). Find \\(y[0]\\) for \\(y=a*b\\).`,aa*bb,`\\(y[0]=a[0]b[0]=${aa}(${bb})=${aa*bb}\\).`)}
      if(fam===8){let arr=Array.from({length:3},()=>ri(1,10)),ans=arr.reduce((u,v)=>u+v,0)/3;return qNum(CV,title,`Apply the three-point averaging kernel \\([1/3,1/3,1/3]\\) to \\([${arr.join(',')} ]\\) at the sample where all three values overlap. Find the output.`,ans,`\\(y=(${arr.join('+')})/3=${nfmt(ans)}\\).`)}
      {let aa=ri(1,8),bb=ri(1,8),nn=ri(1,4);return qNum(CV,title,`Let \\(a[n]=[${aa},${bb}]\\), \\(b[n]=[2,1]\\), indices start at zero. Find \\(y[1]\\).`,aa+2*bb,`\\(y[1]=a[0]b[1]+a[1]b[0]=${aa}+2(${bb})=${aa+2*bb}\\).`)}
}


function makeConvolutionExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${CONVOLUTION_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let a0=ri(1,8),a1=ri(1,8),b0=ri(1,5),b1=ri(1,5),ans=a0*b1+a1*b0;return qNum(CV,title,`Let \\(a[0]=${a0},a[1]=${a1}\\) and \\(b[0]=${b0},b[1]=${b1}\\), starting at index zero. Find \\(y[1]\\) for \\(y=a*b\\).`,ans,`\\(y[1]=a[0]b[1]+a[1]b[0]=${a0}(${b1})+${a1}(${b0})=${ans}\\).`)}
      if(fam===1){let a0=ri(1,6),a1=ri(1,6),a2=ri(1,6),b0=ri(1,5),b1=ri(1,5),ans=a1*b1+a2*b0;return qNum(CV,title,`For \\(a=[${a0},${a1},${a2}]\\) and \\(b=[${b0},${b1}]\\), both starting at index zero, find \\(y[2]\\).`,ans,`\\(y[2]=a[1]b[1]+a[2]b[0]=${a1}(${b1})+${a2}(${b0})=${ans}\\).`)}
      if(fam===2){let aa=a,t=ri(1,4),ans=(1-Math.exp(-aa*t))/aa;return qNum(CV,title,`Evaluate \\((e^{-${aa}t}u(t))*u(t)\\) at \\(t=${t}\\).`,ans,`\\(y(t)=\\int_0^t e^{-a\\tau}d\\tau=(1-e^{-at})/a=${nfmt(ans)}\\).`)}
      if(fam===3){let t=ri(1,5);return qNum(CV,title,`For continuous-time unit steps, find \\((u*u)(${t})\\).`,t,`\\((u*u)(t)=\\int_0^t1\\,d\\tau=t\\), so the answer is \\(${t}\\).`)}
      if(fam===4){let t=ri(1,5),ans=t*t/2;return qNum(CV,title,`Find \\(((t u(t))*u(t))\\) at \\(t=${t}\\).`,ans,`\\(y(t)=\\int_0^t\\tau\\,d\\tau=t^2/2=${nfmt(ans)}\\).`)}
      if(fam===5){let m=ri(1,5),base=ri(2,8),ans=base;return qNum(CV,title,`If \\(x[n]=[${base},${base+1},${base+2},\\ldots]\\) in the shown range and the other sequence is \\(\\delta[n-${m}]\\), identify the sample \\((x*\\delta[n-${m}])[${m}]\\).`,ans,`Convolution with a delayed impulse shifts a sequence: \\((x*\\delta[n-m])[n]=x[n-m]\\). At \\(n=m\\), this is \\(x[0]=${base}\\).`)}
      if(fam===6){let n=ri(2,8),m=ri(2,7),ans=n+m-1;return qNum(CV,title,`Two finite sequences have lengths \\(N=${n}\\) and \\(M=${m}\\). Find the length of their linear convolution.`,ans,`The output length is \\(N+M-1=${n}+${m}-1=${ans}\\).`)}
      if(fam===7){let T=ri(2,6),t=ri(1,T-1);return qNum(CV,title,`Two unit rectangular pulses are each one on \\([0,${T}]\\). Find their continuous convolution at \\(t=${t}\\).`,t,`For \\(0\\le t\\le T\\), the overlap length is \\(t\\), so the convolution is \\(${t}\\).`)}
      if(fam===8)return equationQ(CV,title,'For signals with Laplace transforms X(s) and H(s), which relation describes the transform of their convolution?','\\mathcal L\\{x*h\\}=X(s)H(s)',['\\mathcal L\\{x*h\\}=X(s)+H(s)','\\mathcal L\\{x*h\\}=X(s)/H(s)','\\mathcal L\\{x*h\\}=X(s-H(s))'],'The convolution theorem states that convolution in time corresponds to multiplication in the transform domain.')
      let aa=ri(1,9),bb=ri(1,9);return qNum(CV,title,`Let \\(a[0]=${aa}\\) and \\(b[0]=${bb}\\). Find the first output sample \\(y[0]\\) for \\(y=a*b\\).`,aa*bb,`\\(y[0]=a[0]b[0]=${aa}(${bb})=${aa*bb}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.convolution = [...numericSeedEntries(CV, CONVOLUTION_SUP_NAMES, 'Core', 'supplement-seed', makeConvolutionSupplement),
    ...numericSeedEntries(CV, CONVOLUTION_EXTRA_NAMES, 'Applied', 'applied-seed', makeConvolutionExtraSeed, 11),
    numericEntry('convolution',"Two-tap discrete convolution · family 01 (randomized variant)","convolution-family-01",()=>makeConvolutionExpansionFamily01("Two-tap discrete convolution · family 01 (randomized variant)")),
    numericEntry('convolution',"Geometric-sequence convolution · family 02 (randomized variant)","convolution-family-02",()=>makeConvolutionExpansionFamily02("Geometric-sequence convolution · family 02 (randomized variant)")),
    numericEntry('convolution',"Exponential with unit step · family 03 (randomized variant)","convolution-family-03",()=>makeConvolutionExpansionFamily03("Exponential with unit step · family 03 (randomized variant)")),
    numericEntry('convolution',"Step with step · family 04 (randomized variant)","convolution-family-04",()=>makeConvolutionExpansionFamily04("Step with step · family 04 (randomized variant)")),
    numericEntry('convolution',"Ramp with unit step · family 05 (randomized variant)","convolution-family-05",()=>makeConvolutionExpansionFamily05("Ramp with unit step · family 05 (randomized variant)")),
    numericEntry('convolution',"Two exponential responses · family 06 (randomized variant)","convolution-family-06",()=>makeConvolutionExpansionFamily06("Two exponential responses · family 06 (randomized variant)")),
    numericEntry('convolution',"Impulse identity · family 07 (randomized variant)","convolution-family-07",()=>makeConvolutionExpansionFamily07("Impulse identity · family 07 (randomized variant)")),
    numericEntry('convolution',"First discrete convolution sample · family 08 (randomized variant)","convolution-family-08",()=>makeConvolutionExpansionFamily08("First discrete convolution sample · family 08 (randomized variant)")),
    numericEntry('convolution',"Three-tap moving average · family 09 (randomized variant)","convolution-family-09",()=>makeConvolutionExpansionFamily09("Three-tap moving average · family 09 (randomized variant)")),
    numericEntry('convolution',"Convolution at selected index · family 10 (randomized variant)","convolution-family-10",()=>makeConvolutionExpansionFamily10("Convolution at selected index · family 10 (randomized variant)")),
    numericEntry('convolution',"Output length · family 11 (randomized variant)","convolution-family-11",()=>makeConvolutionExpansionFamily11("Output length · family 11 (randomized variant)")),
    numericEntry('convolution',"Overlap of finite sequences · family 12 (randomized variant)","convolution-family-12",()=>makeConvolutionExpansionFamily12("Overlap of finite sequences · family 12 (randomized variant)")),
    numericEntry('convolution',"Sum property of convolution · family 13 (randomized variant)","convolution-family-13",()=>makeConvolutionExpansionFamily13("Sum property of convolution · family 13 (randomized variant)")),
    numericEntry('convolution',"Impulse response evaluation · family 14 (randomized variant)","convolution-family-14",()=>makeConvolutionExpansionFamily14("Impulse response evaluation · family 14 (randomized variant)")),
    numericEntry('convolution',"Length of full convolution · family 15 (randomized variant)","convolution-family-15",()=>makeConvolutionExpansionFamily15("Length of full convolution · family 15 (randomized variant)")),
    numericEntry('convolution',"Cumulative ramp output · family 16 (randomized variant)","convolution-family-16",()=>makeConvolutionExpansionFamily16("Cumulative ramp output · family 16 (randomized variant)")),
    numericEntry('convolution',"Convolution scaling property · family 17 (randomized variant)","convolution-family-17",()=>makeConvolutionExpansionFamily17("Convolution scaling property · family 17 (randomized variant)")),
    numericEntry('convolution',"Convolution theorem relation · family 18 (randomized variant)","convolution-family-18",()=>makeConvolutionExpansionFamily18("Convolution theorem relation · family 18 (randomized variant)")),
    numericEntry('convolution',"Piecewise overlap integral · family 19 (randomized variant)","convolution-family-19",()=>makeConvolutionExpansionFamily19("Piecewise overlap integral · family 19 (randomized variant)")),
    numericEntry('convolution',"Correlation and convolution relation · family 20 (randomized variant)","convolution-family-20",()=>makeConvolutionExpansionFamily20("Correlation and convolution relation · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(CV,'Discrete convolution at index two','convolution-discrete-coefficient-index-two',()=>{
  const x=[ri(1,5),ri(1,5),ri(1,5)],h=[ri(1,5),ri(1,5),ri(1,5)],ans=x[0]*h[2]+x[1]*h[1]+x[2]*h[0];
  return qNum(CV,'Discrete convolution at index two',`Let \(x[n]=[${x.join(', ')}]\) and \(h[n]=[${h.join(', ')}]\), indexed from \(n=0\). Find \(y[2]\) for \(y[n]=x[n]*h[n]\).`,ans,`\(y[2]=x[0]h[2]+x[1]h[1]+x[2]h[0]=${x[0]}(${h[2]})+${x[1]}(${h[1]})+${x[2]}(${h[0]})=${ans}\).`)
});
appendNumericRecipe(CV,'Applied · FIR filtering of sensor samples','scenario-convolution-sensor-fir',()=>{
  const x=Array.from({length:5},()=>ri(1,9)),h=[1,2,1],ans=x[2]*h[0]+x[1]*h[1]+x[0]*h[2];
  const q=qNum(CV,'Applied · FIR filtering of sensor samples',`A three-tap noise filter has impulse response \(h[n]=[1,2,1]\), indexed from zero. For recent sensor samples \(x[0]=${x[0]}, x[1]=${x[1]}, x[2]=${x[2]}\), compute the convolution output \(y[2]\).`,ans,`\(y[2]=x[0]h[2]+x[1]h[1]+x[2]h[0]=${x[0]}(1)+${x[1]}(2)+${x[2]}(1)=${ans}\).`);
  return attachDiagram(q,'filterFlow','Sensor samples enter a finite-impulse-response filter with taps 1, 2, 1; the output is the discrete convolution sum.');
});
appendNumericRecipe(CV,'Applied · Continuous step input through an exponential system','scenario-convolution-step-exponential',()=>{
  const A0=ri(2,8),a=ri(1,5),t=pick([.25,.5,1,1.5]),ans=A0*(1-Math.exp(-a*t))/a;
  return qNum(CV,'Applied · Continuous step input through an exponential system',`A continuous sensor model has unit-step input amplitude \(${A0}\) and impulse response \(h(t)=e^{-${a}t}u(t)\). Compute the convolution output at \(t=${t}\): \(y(t)=\int_0^t ${A0}e^{-${a}(t-\tau)}d\tau\).`,ans,`Integrating gives \(y(t)=\frac{${A0}}{${a}}(1-e^{-${a}t})\). At \(t=${t}\), \(y=${nfmt(ans)}\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('convolution','Additional · Continuous-time ramp-ramp convolution','convolution-topup-01',()=>{
  const T=rand(.5,3),ans=T**3/6;
  return qNum(CV,'Continuous-time ramp-ramp convolution',`For causal unit ramps \(r(t)=tu(t)\), evaluate \((r*r)(${nfmt(T)})\).`,ans,`\((r*r)(t)=\int_0^t \tau(t-\tau)\,d\tau=t^3/6\). At \(t=${nfmt(T)}\), the value is \(${nfmt(ans)}\).`);
});
appendNumericRecipe('convolution','Additional · Discrete convolution of two short sequences','convolution-topup-02',()=>{
  const a0=ri(1,5),a1=ri(1,5),a2=ri(0,4),b0=ri(1,4),b1=ri(1,4),b2=ri(0,3),n=ri(1,3);const aa=[a0,a1,a2],bb=[b0,b1,b2];let ans=0;for(let k=0;k<aa.length;k++){const j=n-k;if(j>=0&&j<bb.length)ans+=aa[k]*bb[j]}
  return qNum(CV,'Discrete convolution of two short sequences',`Let \(a=[${a0},${a1},${a2}]\) and \(b=[${b0},${b1},${b2}]\), with indices starting at zero. Find \(y[${n}]\) for \(y=a*b\).`,ans,`Use \(y[n]=\sum_k a[k]b[n-k]\). The valid products for \(n=${n}\) sum to \(${ans}\).`);
});
appendNumericRecipe('convolution','Additional · Exponential input through a first-order integrator','convolution-topup-03',()=>{
  const a=ri(1,5),T=rand(.5,3),ans=(1-Math.exp(-a*T))/a;
  return qNum(CV,'Exponential input through a first-order integrator',`Evaluate \((e^{-${a}t}u(t)*u(t))\) at \(t=${nfmt(T)}\).`,ans,`The convolution is \(\int_0^T e^{-a\tau}\,d\tau=(1-e^{-aT})/a\), which gives \(${nfmt(ans)}\).`);
});
appendNumericRecipe('convolution','Additional · Moving-average FIR output','convolution-topup-04',()=>{
  const x0=ri(-5,10),x1=ri(-5,10),x2=ri(-5,10),ans=(x0+x1+x2)/3;
  return qNum(CV,'Moving-average FIR output',`A length-three moving-average filter outputs \(y[n]=(x[n]+x[n-1]+x[n-2])/3\). If the samples are \(${x0}\), \(${x1}\), and \(${x2}\), find the output.`,ans,`\(y=(${x0}+${x1}+${x2})/3=${nfmt(ans)}\).`);
});
appendNumericRecipe('convolution','Additional · Convolution of a unit step and a finite pulse','convolution-topup-05',()=>{
  const A=ri(1,6),T=ri(1,5),t=ri(1,T+5),ans=A*Math.min(t,T);
  return qNum(CV,'Convolution of a unit step and a finite pulse',`Let \(x(t)=A\) for \(0\le t\le ${T}\) and zero otherwise, with \(A=${A}\). Find \((u*x)(${t})\).`,ans,`The accumulated pulse area up to time \(t\) is \(A\min(t,T)=${A}\min(${t},${T})=${nfmt(ans)}\).`);
});
