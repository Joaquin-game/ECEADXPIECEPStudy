/* calculus: seed entries, explicit expansion families, and category-specific additions. */

function makeCalculusExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const n=ri(2,6),x=ri(1,4),ans=v?n*x**(n-1):x**n;return qNum(CAL,title,v?`Find derivative of \\(f(x)=x^{${n}}\\) at \\(x=${x}\\).`:`Find \\(f(${x})\\) for \\(f(x)=x^{${n}}\\).`,ans,v?`\\(f'(x)=nx^{n-1}\\), so \\(f'(${x})=${ans}\\).`:`\\(f(${x})=${ans}\\).`)
  }
}
function makeCalculusExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),x=ri(1,4),ans=v?2*a0*x: a0*x*x;return qNum(CAL,title,v?`For \\(f(x)=${a0}x^2\\), find \\(f'(${x})\\).`:`For \\(f(x)=${a0}x^2\\), find \\(f(${x})\\).`,ans,v?`\\(f'=2ax=${ans}\\).`:`\\(f=ax^2=${ans}\\).`)
  }
}
function makeCalculusExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const u0=ri(1,5),x=ri(1,4),ans=v?Math.cos(x):Math.sin(x);return qNum(CAL,title,v?`Find derivative of \\(\\sin x\\) at \\(x=${x}\\) radians.`:`Find \\(\\sin(${x})\\) numerically in radians.`,ans,v?`\\(d(\\sin x)/dx=\\cos x=${nfmt(ans)}\\).`:`\\(\\sin(${x})=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=Math.log((a0+b0)/a0);return qNum(CAL,title,v?`Evaluate \\(\\int_{${a0}}^{${b0+a0}}\\frac{1}{x}dx\\).`:`Evaluate \\(\\int_0^{${b0}}\\frac{1}{x+${a0}}dx\\).`,ans,v?`\\(\\int_a^{a+b}dx/x=\\ln((a+b)/a)=${nfmt(ans)}\\).`:`\\(\\ln(a+b)-\\ln(a)=\\ln((a+b)/a)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),x=ri(1,4),ans=v?Math.log(x+1):Math.log(x*x+1)/2;return qNum(CAL,title,v?`Use substitution \\(u=x+1\\) to evaluate \\(\\int_0^x1/(t+1)dt\\) at \\(x=${x}\\).`:`Evaluate \\(\\int_0^{${x}}\\frac{t}{t^2+1}dt\\).`,ans,v?`\\(\\ln(x+1)=${nfmt(ans)}\\).`:`Let \\(u=t^2+1\\), so result is \\(\\frac12\\ln(x^2+1)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=Math.log((a0+b0)/a0);return qNum(CAL,title,v?`Evaluate \\(\\int_{${a0}}^{${a0+b0}}\\frac{1}{x}dx\\).`:`Evaluate \\(\\int_0^{${b0}}\\frac{1}{x+${a0}}dx\\).`,ans,v?`\\(\\ln((a+b)/a)=${nfmt(ans)}\\).`:`\\(\\ln(a+b)-\\ln a=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),x=ri(1,4),ans=v?Math.atan(x/a0):Math.sqrt(a0*a0+x*x);return qNum(CAL,title,v?`Using trig substitution, evaluate \\(\\int_0^{${x}}\\frac{a}{a^2+t^2}dt\\) for \\(a=${a0}\\).`:`For \\(a=${a0},x=${x}\\), find \\(\\sqrt{a^2+x^2}\\), the hypotenuse in a trig-substitution triangle.`,ans,v?`\\(\\int a/(a^2+t^2)dt=\\tan^{-1}(t/a)\\), giving \\(${nfmt(ans)}\\).`:`\\(\\sqrt{a^2+x^2}=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=a0+ri(1,4),ans=v?-1/(b0-a0):1/(b0-a0);return qNum(CAL,title,v?`Decompose \(\frac{1}{(x+${a0})(x+${b0})}\) into partial fractions. Find the coefficient of \(1/(x+${b0})\).`:`Decompose \(\frac{1}{(x+${a0})(x+${b0})}\) into partial fractions. Find the coefficient of \(1/(x+${a0})\).`,ans,v?`\(\frac1{(x+a)(x+b)}=\frac{1}{b-a}\left(\frac1{x+a}-\frac1{x+b}\right)\); the coefficient of \(1/(x+b)\) is \(-1/(${b0}-${a0})=${nfmt(ans)}\).`:`\(\frac1{(x+a)(x+b)}=\frac{1}{b-a}\left(\frac1{x+a}-\frac1{x+b}\right)\); the coefficient of \(1/(x+a)\) is \(1/(${b0}-${a0})=${nfmt(ans)}\).`)
  }
}
function makeCalculusExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const n=ri(2,5),ans=v?factorial(n):1/(n+1);return qNum(CAL,title,v?`Evaluate \\(\\int_0^\\infty x^{${n}}e^{-x}dx\\).`:`Evaluate \\(\\int_0^1 x^{${n}}dx\\).`,ans,v?`Gamma integral gives \\(\\Gamma(n+1)=n!=${ans}\\).`:`\\([x^{n+1}/(n+1)]_0^1=1/(${n+1})=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?a0*a0*b0:a0+b0;return qNum(CAL,title,v?`For integration by parts with \\(u=x\\) and \\(dv=${b0}dx\\), find \\(uv\\) at \\(x=${a0}\\).`:`For integration by parts, \\(u=${a0}\\) and \\(dv=${b0}dx\\). Find \\(u+v'\\) as a simple coefficient sum.`,ans,v?`Here \\(v=${b0}x\\), so \\(uv=${a0}(${b0})(${a0})=${nfmt(ans)}\\) at x=a.`:`\\(u+v'=${a0}+${b0}=${ans}\\).`)
  }
}
function makeCalculusExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.atan(b0/a0):Math.sqrt(a0*a0+b0*b0);return qNum(CAL,title,v?`For \\(\\sqrt{x^2+a^2}\\) with \\(x=${b0}, a=${a0}\\), find substitution angle \\(\\theta=\\tan^{-1}(x/a)\\).`:`For trig substitution \\(x=a\\tan\\theta\\) with \\(a=${a0},x=${b0}\\), find \\(\\sqrt{x^2+a^2}\\).`,ans,v?`\\(\\theta=\\tan^{-1}(x/a)=${nfmt(ans)}\\,rad\\).`:`\\(\\sqrt{x^2+a^2}=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?b0/(a0+b0):a0/(a0+b0);return qNum(CAL,title,v?`A triangle has sides \\(${a0}\\) and \\(${b0}\\). Find ratio \\(b/(a+b)\\).`:`A triangle has sides \\(${a0}\\) and \\(${b0}\\). Find ratio \\(a/(a+b)\\).`,ans,v?`\\(b/(a+b)=${nfmt(ans)}\\).`:`\\(a/(a+b)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const x=ri(1,4),ans=v?Math.exp(x)-1:1-Math.exp(-x);return qNum(CAL,title,v?`Evaluate \(\int_0^{${x}} e^t\,dt\).`:`Evaluate \(\int_0^{${x}} e^{-t}\,dt\).`,ans,v?`\([e^t]_0^x=e^x-1=${nfmt(ans)}\).`:`\([-e^{-t}]_0^x=1-e^{-x}=${nfmt(ans)}\).`)
  }
}
function makeCalculusExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),x=ri(1,5),ans=v?Math.log(x+1):Math.log(x*x+1)/2;return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${x}}\\frac{1}{t+1}dt\\).`:`Evaluate \\(\\int_0^{${x}}\\frac{t}{t^2+1}dt\\).`,ans,v?`\\(\\ln(x+1)=${nfmt(ans)}\\).`:`\\(\\frac12\\ln(1+x^2)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const x=ri(1,5),ans=v?Math.log(x+1):1/(x+1);return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${x}}\\frac{1}{t+1}dt\\).`:`Find derivative of \\(\\ln(x+1)\\) at \\(x=${x}\\).`,ans,v?`Antiderivative \\(\\ln(t+1)\\) gives \\(${nfmt(ans)}\\).`:`\\(d\\ln(x+1)/dx=1/(x+1)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?b0*a0*a0:a0+b0;return qNum(CAL,title,v?`For \\(u=${a0}\\), \\(dv=${b0}dx\\), evaluate \\(uv\\) at \\(x=${a0}\\).`:`Find sum of constants \\(${a0}+${b0}\\) in an integration-by-parts setup.`,ans,v?`\\(v=${b0}x\\), so \\(uv=${nfmt(ans)}\\).`:`Sum is \\(${ans}\\).`)
  }
}
function makeCalculusExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.sqrt(a0*a0+b0*b0):Math.atan2(b0,a0);return qNum(CAL,title,v?`For \\(a=${a0}\\) and \\(x=${b0}\\), find \\(\\sqrt{a^2+x^2}\\).`:`Find the trig-substitution angle \\(\\theta=\\tan^{-1}(x/a)\\) for \\(a=${a0},x=${b0}\\).`,ans,v?`\\(\\sqrt{a^2+x^2}=${nfmt(ans)}\\).`:`\\(\\theta=${nfmt(ans)}\\,rad\\).`)
  }
}
function makeCalculusExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.log((a0+b0)/a0):1/(a0+b0);return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${b0}}\\frac{1}{x+${a0}}dx\\).`:`For denominator \\(x+${a0}+${b0}\\), find reciprocal at \\(x=0\\).`,ans,v?`\\(\\ln(a+b)-\\ln(a)=${nfmt(ans)}\\).`:`\\(1/(a+b)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),x=ri(1,5),ans=v?Math.log(x+1):Math.log(x*x+1)/2;return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${x}}\\frac{1}{t+1}dt\\).`:`Evaluate \\(\\int_0^{${x}}\\frac{t}{t^2+1}dt\\).`,ans,v?`Result \\(=\\ln(1+x)=${nfmt(ans)}\\).`:`Result \\(=\\frac12\\ln(1+x^2)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(2,6),x=ri(1,4),ans=v?Math.pow(x,a0+1)/(a0+1):Math.pow(x,a0);return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${x}} t^{${a0}}dt\\).`:`Evaluate \\(x^{${a0}}\\) at \\(x=${x}\\).`,ans,v?`\\(x^{n+1}/(n+1)=${nfmt(ans)}\\).`:`\\(x^n=${ans}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const CALCULUS_SUP_NAMES = ["Power rule derivative", "Chain rule evaluation", "Power-rule definite integral", "Integration by parts exponential integral", "Integration by parts trigonometric integral", "Trigonometric derivative", "Definite sine integral", "Average value of a power", "Mean-value-theorem point", "Integration-by-parts identity"];

const CALCULUS_EXTRA_NAMES = ["Power-rule derivative", "Chain-rule derivative", "Power integral", "Integration by parts with exponential", "Integration by parts with decay", "Fundamental-theorem integral", "Logarithm derivative", "Integration-by-parts identity", "Removable-limit evaluation", "Definite sine integral"];

function makeCalculusSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${CALCULUS_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let n=ri(2,6),xx=ri(1,4),ans=n*xx**(n-1);return qNum(CAL,title,`Find \\(d(x^{${n}})/dx\\) at \\(x=${xx}\\).`,ans,`\\(\\frac{d}{dx}x^n=nx^{n-1}\\), hence \\(${n}(${xx})^{${n-1}}=${ans}\\).`)}
      if(fam===1){let aa=ri(1,4),bb=ri(1,4),xx=ri(1,3),n=ri(2,4),ans=n*aa*(aa*xx+bb)**(n-1);return qNum(CAL,title,`Differentiate \\(f(x)=(${aa}x+${bb})^{${n}}\\). Find \\(f'(${xx})\\).`,ans,`Chain rule: \\(f'=n(${aa}x+${bb})^{n-1}(${aa})\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===2){let n=ri(1,5),bb=ri(2,6),ans=bb**(n+1)/(n+1);return qNum(CAL,title,`Evaluate \\(\\int_0^{${bb}}x^{${n}}\\,dx\\).`,ans,`\\(\\int x^n dx=x^{n+1}/(n+1)\\); the definite value is \\(${nfmt(ans)}\\).`)}
      if(fam===3){let aa=ri(1,4),ans=((aa-1)*Math.exp(aa)+1)/(aa*aa);return qNum(CAL,title,`Evaluate \\(\\int_0^1 xe^{${aa}x}\\,dx\\) using integration by parts.`,ans,`Let \\(u=x, dv=e^{${aa}x}dx\\). Then \\(\\int xe^{ax}dx=e^{ax}(x/a-1/a^2)\\); evaluating from 0 to 1 gives \\(${nfmt(ans)}\\).`)}
      if(fam===4){let kk=ri(1,5),ans=(Math.PI/2-1)/(kk*kk);return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/(2${kk})}x\\cos(${kk}x)\\,dx\\) by integration by parts.`,ans,`Take \\(u=x, dv=\\cos(${kk}x)dx\\). The antiderivative is \\(x\\sin(${kk}x)/${kk}+\\cos(${kk}x)/${kk*kk}\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===5){let aa=ri(1,8),xx=rand(.2,1.6),ans=aa*Math.cos(aa*xx);return qNum(CAL,title,`Find \\(d(\\sin(${aa}x))/dx\\) at \\(x=${nfmt(xx)}\\).`,ans,`\\(d(\\sin(ax))/dx=a\\cos(ax)\\), giving \\(${nfmt(ans)}\\).`)}
      if(fam===6){let aa=ri(1,6),ans=2/aa;return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/${aa}}\\sin(${aa}x)\\,dx\\).`,ans,`An antiderivative is \\(-\\cos(${aa}x)/${aa}\\); the definite result is \\(${nfmt(ans)}\\).`)}
      if(fam===7){let n=ri(1,5),bb=ri(2,8),ans=bb**n/(n+1);return qNum(CAL,title,`Find the average value of \\(f(x)=x^{${n}}\\) on \\([0,${bb}]\\).`,ans,`\\(f_{avg}=\\frac1b\\int_0^b x^n dx=b^n/(n+1)=${nfmt(ans)}\\).`)}
      if(fam===8){let aa=ri(-3,3),bb=aa+ri(1,6),ans=(aa+bb)/2;return qNum(CAL,title,`For \\(f(x)=x^2\\) on \\([${aa},${bb}]\\), find the point c satisfying the Mean Value Theorem.`,ans,`\\(f'(c)=2c=(b^2-a^2)/(b-a)=a+b\\), so \\(c=(a+b)/2=${nfmt(ans)}\\).`)}
      return equationQ(CAL,title,'Which is the integration-by-parts identity?','\\int u\\,dv=uv-\\int v\\,du',['\\int u\\,dv=uv+\\int v\\,du','\\int u\\,dv=v\\,du-u\\,dv','\\int u\\,dv=u+v+C'],'Integration by parts follows from the product rule: \\(d(uv)=u\\,dv+v\\,du\\), hence \\(\\int u\\,dv=uv-\\int v\\,du\\).');
}


function makeCalculusExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${CALCULUS_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let n=ri(2,6),xx=ri(1,4),ans=n*xx**(n-1);return qNum(CAL,title,`Find \\(d(x^{${n}})/dx\\) at \\(x=${xx}\\).`,ans,`\\(d(x^n)/dx=nx^{n-1}\\), hence \\(${ans}\\).`)}
      if(fam===1){let aa=ri(1,4),bb=ri(1,4),xx=ri(1,3),n=ri(2,4),ans=n*aa*(aa*xx+bb)**(n-1);return qNum(CAL,title,`Differentiate \\(f(x)=(${aa}x+${bb})^{${n}}\\) and find \\(f'(${xx})\\).`,ans,`By the chain rule, \\(f'=n(${aa}x+${bb})^{n-1}(${aa})=${ans}\\) at the given point.`)}
      if(fam===2){let n=ri(1,5),bb=ri(2,6),ans=bb**(n+1)/(n+1);return qNum(CAL,title,`Evaluate \\(\\int_0^{${bb}}x^{${n}}dx\\).`,ans,`\\(\\int x^n dx=x^{n+1}/(n+1)\\), so the definite integral is \\(${nfmt(ans)}\\).`)}
      if(fam===3){let aa=a,t=ri(1,3),ans=((aa*t-1)*Math.exp(aa*t)+1)/(aa*aa);return qNum(CAL,title,`Evaluate \\(\\int_0^{${t}}xe^{${aa}x}dx\\) using integration by parts.`,ans,`Take \\(u=x\\), \\(dv=e^{ax}dx\\). Then the integral is \\([e^{ax}(x/a-1/a^2)]_0^{${t}}=${nfmt(ans)}\\).`)}
      if(fam===4){let aa=a,t=ri(1,4),ans=(1-(1+aa*t)*Math.exp(-aa*t))/(aa*aa);return qNum(CAL,title,`Use integration by parts to evaluate \\(\\int_0^{${t}}xe^{-${aa}x}dx\\).`,ans,`\\(\\int_0^T xe^{-ax}dx=[1-(1+aT)e^{-aT}]/a^2=${nfmt(ans)}\\).`)}
      if(fam===5){let n=ri(1,5),t=ri(1,4),ans=t**(n+1);return qNum(CAL,title,`Evaluate \\(\\int_0^{${t}}(${n+1})x^{${n}}dx\\).`,ans,`An antiderivative is \\(x^{${n+1}}\\); the definite value is \\(${t}^{${n+1}}=${ans}\\).`)}
      if(fam===6){let xx=ri(1,8);return qNum(CAL,title,`Find \\(d(\\ln x)/dx\\) at \\(x=${xx}\\).`,1/xx,`\\(d(\\ln x)/dx=1/x\\), so the value is \\(1/${xx}=${nfmt(1/xx)}\\).`)}
      if(fam===7)return equationQ(CAL,title,'Which is the correct integration-by-parts formula?','\\int u\\,dv=uv-\\int v\\,du',['\\int u\\,dv=uv+\\int v\\,du','\\int u\\,dv=u+v+C','\\int u\\,dv=v\\,du-uv'],'Integration by parts follows from the product rule: \\(d(uv)=u\\,dv+v\\,du\\).')
      if(fam===8){let aa=ri(1,7);return qNum(CAL,title,`Evaluate \\(\\lim_{x\\to${aa}}(x^2-${aa*aa})/(x-${aa})\\).`,2*aa,`Factor the numerator as \\((x-${aa})(x+${aa})\\); the limit is \\(2${aa}=${2*aa}\\).`)}
      let nn=ri(1,5);return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/${nn}}\\sin(${nn}x)dx\\).`,2/nn,`\\([-\\cos(${nn}x)/${nn}]_0^{\\pi/${nn}}=2/${nn}=${nfmt(2/nn)}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.calculus = [...numericSeedEntries(CAL, CALCULUS_SUP_NAMES, 'Core', 'supplement-seed', makeCalculusSupplement),
    ...numericSeedEntries(CAL, CALCULUS_EXTRA_NAMES, 'Applied', 'applied-seed', makeCalculusExtraSeed, 11),
    numericEntry('calculus',"Power rule derivative · family 01 (randomized variant)","calculus-family-01",()=>makeCalculusExpansionFamily01("Power rule derivative · family 01 (randomized variant)")),
    numericEntry('calculus',"Chain rule evaluation · family 02 (randomized variant)","calculus-family-02",()=>makeCalculusExpansionFamily02("Chain rule evaluation · family 02 (randomized variant)")),
    numericEntry('calculus',"Power-rule definite integral · family 03 (randomized variant)","calculus-family-03",()=>makeCalculusExpansionFamily03("Power-rule definite integral · family 03 (randomized variant)")),
    numericEntry('calculus',"Integration by parts with exponential · family 04 (randomized variant)","calculus-family-04",()=>makeCalculusExpansionFamily04("Integration by parts with exponential · family 04 (randomized variant)")),
    numericEntry('calculus',"Integration by parts with trigonometric function · family 05 (randomized variant)","calculus-family-05",()=>makeCalculusExpansionFamily05("Integration by parts with trigonometric function · family 05 (randomized variant)")),
    numericEntry('calculus',"Fundamental theorem integral · family 06 (randomized variant)","calculus-family-06",()=>makeCalculusExpansionFamily06("Fundamental theorem integral · family 06 (randomized variant)")),
    numericEntry('calculus',"Logarithmic derivative · family 07 (randomized variant)","calculus-family-07",()=>makeCalculusExpansionFamily07("Logarithmic derivative · family 07 (randomized variant)")),
    numericEntry('calculus',"Partial fraction coefficient · family 08 (randomized variant)","calculus-family-08",()=>makeCalculusExpansionFamily08("Partial fraction coefficient · family 08 (randomized variant)")),
    numericEntry('calculus',"Gamma integral and power integral · family 09 (randomized variant)","calculus-family-09",()=>makeCalculusExpansionFamily09("Gamma integral and power integral · family 09 (randomized variant)")),
    numericEntry('calculus',"Integration-by-parts boundary term · family 10 (randomized variant)","calculus-family-10",()=>makeCalculusExpansionFamily10("Integration-by-parts boundary term · family 10 (randomized variant)")),
    numericEntry('calculus',"Trigonometric substitution angle · family 11 (randomized variant)","calculus-family-11",()=>makeCalculusExpansionFamily11("Trigonometric substitution angle · family 11 (randomized variant)")),
    numericEntry('calculus',"Rational ratio integral · family 12 (randomized variant)","calculus-family-12",()=>makeCalculusExpansionFamily12("Rational ratio integral · family 12 (randomized variant)")),
    numericEntry('calculus',"Exponential definite integral · family 13 (randomized variant)","calculus-family-13",()=>makeCalculusExpansionFamily13("Exponential definite integral · family 13 (randomized variant)")),
    numericEntry('calculus',"Logarithmic definite integral · family 14 (randomized variant)","calculus-family-14",()=>makeCalculusExpansionFamily14("Logarithmic definite integral · family 14 (randomized variant)")),
    numericEntry('calculus',"Derivative of logarithm · family 15 (randomized variant)","calculus-family-15",()=>makeCalculusExpansionFamily15("Derivative of logarithm · family 15 (randomized variant)")),
    numericEntry('calculus',"Integration-by-parts product term · family 16 (randomized variant)","calculus-family-16",()=>makeCalculusExpansionFamily16("Integration-by-parts product term · family 16 (randomized variant)")),
    numericEntry('calculus',"Trigonometric substitution radical · family 17 (randomized variant)","calculus-family-17",()=>makeCalculusExpansionFamily17("Trigonometric substitution radical · family 17 (randomized variant)")),
    numericEntry('calculus',"Logarithmic area and reciprocal · family 18 (randomized variant)","calculus-family-18",()=>makeCalculusExpansionFamily18("Logarithmic area and reciprocal · family 18 (randomized variant)")),
    numericEntry('calculus',"U-substitution integral · family 19 (randomized variant)","calculus-family-19",()=>makeCalculusExpansionFamily19("U-substitution integral · family 19 (randomized variant)")),
    numericEntry('calculus',"Power integral and derivative · family 20 (randomized variant)","calculus-family-20",()=>makeCalculusExpansionFamily20("Power integral and derivative · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(CAL,'Derivative of a logarithmic composition','calculus-log-chain-rule',()=>{
  const a=ri(1,5),b=ri(2,8),x=ri(1,4),ans=a/(a*x+b);
  return qNum(CAL,'Derivative of a logarithmic composition',`For \(f(x)=\\ln(${a}x+${b})\), evaluate \(f'(${x})\).`,ans,`By the chain rule, \(f'(x)=${a}/(${a}x+${b})\). At \(x=${x}\), the value is \(${a}/(${a*x+b})=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Integration by parts with x sine','calculus-parts-x-sine',()=>{
  const k=ri(1,5),ans=-Math.cos(k)/k+Math.sin(k)/(k*k);
  return qNum(CAL,'Integration by parts with x sine',`Evaluate \(\\int_0^1 x\\sin(${k}x)\\,dx\) using integration by parts.`,ans,`Let \(u=x\), \(dv=\\sin(${k}x)dx\); then \(v=-\\cos(${k}x)/${k}\). The antiderivative is \(-x\\cos(${k}x)/${k}+\\sin(${k}x)/${k*k}\), giving \(${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Trigonometric substitution for a semicircle area','calculus-trig-sub-semicircle',()=>{
  const a=ri(2,8),ans=Math.PI*a*a/4;
  return qNum(CAL,'Trigonometric substitution for a semicircle area',`Evaluate \(\\int_0^{${a}}\\sqrt{${a*a}-x^2}\\,dx\) using a trigonometric substitution.`,ans,`Set \(x=${a}\\sin\\theta\). The integral becomes the area of a quarter-circle of radius ${a}, namely \(\\pi a^2/4=\\pi(${a*a})/4=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Definite polynomial integral by the fundamental theorem','calculus-ftc-polynomial-integral',()=>{
  const a=ri(1,4),b=ri(0,6),T=ri(1,4),ans=a*T**3/3+b*T*T/2;
  return qNum(CAL,'Definite polynomial integral by the fundamental theorem',`Evaluate \(\\int_0^{${T}}(${a}x^2+${b}x)\\,dx\).`,ans,`An antiderivative is \(${a}x^3/3+${b}x^2/2\). Evaluating at 0 and ${T} gives \(${a}(${T}^3)/3+${b}(${T}^2)/2=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'U-substitution for an exponential composite','calculus-u-sub-exp-square',()=>{
  const a=ri(1,3),ans=Math.exp(a*a)-1;
  return qNum(CAL,'U-substitution for an exponential composite',`Evaluate \(\\int_0^{${a}}2x e^{x^2}\\,dx\) using \(u=x^2\).`,ans,`Let \(u=x^2\), so \(du=2x\\,dx\). The integral is \(\\int_0^{${a*a}}e^u du=e^{${a*a}}-1=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Partial fractions with a linear numerator','calculus-partial-fractions-linear-numerator',()=>{
  const a=ri(1,4),b=a+ri(2,5),m=ri(1,4),n=ri(6,15),ans=(n-m*a)/(b-a);
  return qNum(CAL,'Partial fractions with a linear numerator',`In \(\\frac{${m}x+${n}}{(x+${a})(x+${b})}=\\frac{A}{x+${a}}+\\frac{B}{x+${b}}\), find \(A\).`,ans,`Set \(x=-${a}\): \(A=(${n}-${m}(${a}))/(${b}-${a})=${n-m*a}/${b-a}=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Definite integral of exponential decay','calculus-exponential-decay-integral',()=>{
  const k=ri(1,5),T=rand(.3,2.2),ans=(1-Math.exp(-k*T))/k;
  return qNum(CAL,'Definite integral of exponential decay',`Evaluate the accumulated decay \(\\int_0^{${nfmt(T)}}e^{-${k}x}\\,dx\).`,ans,`An antiderivative is \(-e^{-${k}x}/${k}\), so the definite integral is \((1-e^{-${k}(${nfmt(T)})})/${k}=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'U-substitution with a radical integrand','calculus-u-sub-radical',()=>{
  const a=ri(1,5),c=ri(1,4),ans=(Math.pow(a*a+c*c,1.5)-c**3)/3;
  return qNum(CAL,'U-substitution with a radical integrand',`Evaluate \(\\int_0^{${a}}x\\sqrt{x^2+${c*c}}\\,dx\).`,ans,`Use \(u=x^2+${c*c}\), \(du=2x\\,dx\). The result is \(\\frac13[(${a*a+c*c})^{3/2}-(${c*c})^{3/2}]=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'U-substitution for a rational integral','calculus-u-sub-rational-integral',()=>{
  const a=ri(1,5),c=ri(1,6),ans=Math.log((a*a+c)/c);
  return qNum(CAL,'U-substitution for a rational integral',`Evaluate \(\\int_0^{${a}}\\frac{2x}{x^2+${c}}\\,dx\) using \(u=x^2+${c}\).`,ans,`Since \(du=2x\\,dx\), the result is \(\\ln(x^2+${c})\\big|_0^{${a}}=\\ln((${a*a+c})/${c})=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'U-substitution with a cubic inner function','calculus-u-sub-cubic-radical',()=>{
  const a=ri(1,4),c=ri(1,5),ans=(2/9)*(Math.pow(a**3+c,1.5)-Math.pow(c,1.5));
  return qNum(CAL,'U-substitution with a cubic inner function',`Evaluate \(\\int_0^{${a}}x^2\\sqrt{x^3+${c}}\\,dx\).`,ans,`Let \(u=x^3+${c}\), so \(du=3x^2\\,dx\). Integrating \(u^{1/2}/3\) gives \(\\frac29[(${a**3+c})^{3/2}-${c}^{3/2}]=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'U-substitution for a cosine of a square','calculus-u-sub-cos-square',()=>{
  const k=ri(1,6),ans=Math.sin(k)/(2*k);
  return qNum(CAL,'U-substitution for a cosine of a square',`Evaluate \(\\int_0^1x\\cos(${k}x^2)\\,dx\) using \(u=x^2\).`,ans,`Let \(u=x^2\), so \(x\\,dx=du/2\). The integral is \(\\frac12\\int_0^1\\cos(${k}u)du=\\sin(${k})/(2${k})=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Arctangent definite integral','calculus-arctangent-integral',()=>{
  const a=ri(1,6),b=ri(1,5),ans=Math.atan(a/b)/b;
  return qNum(CAL,'Arctangent definite integral',`Evaluate \(\\int_0^{${a}}\\frac{1}{x^2+${b*b}}\\,dx\).`,ans,`Use \(\\int dx/(x^2+b^2)=\\frac1b\\arctan(x/b)\). The value is \(\\arctan(${a}/${b})/${b}=${nfmt(ans)}\).`)
});
appendNumericRecipe(CAL,'Applied · Integrated sensor envelope by parts','scenario-calculus-envelope-integration-by-parts',()=>{
  const k=ri(1,5),T0=pick([.5,1,1.5,2]),ans=(1-(1+k*T0)*Math.exp(-k*T0))/(k*k);
  return qNum(CAL,'Applied · Integrated sensor envelope by parts',`A signal processor accumulates an envelope proportional to \(t e^{-kt}\). Evaluate \(\int_0^{${T0}}t e^{-${k}t}\,dt\) using integration by parts.`,ans,`Let \(u=t\), \(dv=e^{-${k}t}dt\), so \(du=dt\), \(v=-e^{-${k}t}/${k}\). Therefore the integral is \([-(t e^{-${k}t})/${k}-e^{-${k}t}/${k^2}]_0^{${T0}}=[1-(1+${k}(${T0}))e^{-${k}(${T0})}]/${k}^2=${nfmt(ans)}\).`);
});
appendNumericRecipe(CAL,'Applied · Accumulated sensor response by substitution','scenario-calculus-accumulation-substitution',()=>{
  const b=ri(1,5),c=ri(1,8),ans=(Math.pow(b*b+c,1.5)-Math.pow(c,1.5))/3;
  return qNum(CAL,'Applied · Accumulated sensor response by substitution',`A calibration model requires the integral \(\int_0^{${b}}x\sqrt{x^2+${c}}\,dx\). Evaluate it using \(u=x^2+${c}\).`,ans,`Let \(u=x^2+${c}\), then \(du=2x\,dx\). The integral equals \(\frac13[(x^2+${c})^{3/2}]_0^{${b}}=\frac{(${b*b+c})^{3/2}-${c}^{3/2}}3=${nfmt(ans)}\).`);
});
