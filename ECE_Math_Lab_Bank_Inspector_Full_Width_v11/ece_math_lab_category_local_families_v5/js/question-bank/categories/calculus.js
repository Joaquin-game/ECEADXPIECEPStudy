/* calculus: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_CALCULUS = 'calculus';
const CAL = NAMESPACE_CALCULUS;
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
      const a0=ri(1,4),b0=a0+ri(1,4),ans=v?-1/(b0-a0):1/(b0-a0);return qNum(CAL,title,v?`Decompose \\(\\frac{1}{(x+${a0})(x+${b0})}\\) into partial fractions. Find the coefficient of \\(1/(x+${b0})\\).`:`Decompose \\(\\frac{1}{(x+${a0})(x+${b0})}\\) into partial fractions. Find the coefficient of \\(1/(x+${a0})\\).`,ans,v?`\\(\\frac1{(x+a)(x+b)}=\\frac{1}{b-a}\\left(\\frac1{x+a}-\\frac1{x+b}\\right)\\); the coefficient of \\(1/(x+b)\\) is \\(-1/(${b0}-${a0})=${nfmt(ans)}\\).`:`\\(\\frac1{(x+a)(x+b)}=\\frac{1}{b-a}\\left(\\frac1{x+a}-\\frac1{x+b}\\right)\\); the coefficient of \\(1/(x+a)\\) is \\(1/(${b0}-${a0})=${nfmt(ans)}\\).`)
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
      const x=ri(1,4),ans=v?Math.exp(x)-1:1-Math.exp(-x);return qNum(CAL,title,v?`Evaluate \\(\\int_0^{${x}} e^t\\,dt\\).`:`Evaluate \\(\\int_0^{${x}} e^{-t}\\,dt\\).`,ans,v?`\\([e^t]_0^x=e^x-1=${nfmt(ans)}\\).`:`\\([-e^{-t}]_0^x=1-e^{-x}=${nfmt(ans)}\\).`)
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



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */




/* Individual family variant implementations; no indexed dispatch remains. */
function makeCalculusFamily21VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let n=ri(2,6),xx=ri(1,4),ans=n*xx**(n-1);
    return qNum(CAL,title,`Find \\(d(x^{${n}})/dx\\) at \\(x=${xx}\\).`,ans,`\\(\\frac{d}{dx}x^n=nx^{n-1}\\), hence \\(${n}(${xx})^{${n-1}}=${ans}\\).`)
  }
}
function makeCalculusFamily22VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,4),bb=ri(1,4),xx=ri(1,3),n=ri(2,4),ans=n*aa*(aa*xx+bb)**(n-1);
    return qNum(CAL,title,`Differentiate \\(f(x)=(${aa}x+${bb})^{${n}}\\). Find \\(f'(${xx})\\).`,ans,`Chain rule: \\(f'=n(${aa}x+${bb})^{n-1}(${aa})\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily23VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let n=ri(1,5),bb=ri(2,6),ans=bb**(n+1)/(n+1);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{${bb}}x^{${n}}\\,dx\\).`,ans,`\\(\\int x^n dx=x^{n+1}/(n+1)\\); the definite value is \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily24VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,4),ans=((aa-1)*Math.exp(aa)+1)/(aa*aa);
    return qNum(CAL,title,`Evaluate \\(\\int_0^1 xe^{${aa}x}\\,dx\\) using integration by parts.`,ans,`Let \\(u=x, dv=e^{${aa}x}dx\\). Then \\(\\int xe^{ax}dx=e^{ax}(x/a-1/a^2)\\); evaluating from 0 to 1 gives \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily25VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let kk=ri(1,5),ans=(Math.PI/2-1)/(kk*kk);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/(2${kk})}x\\cos(${kk}x)\\,dx\\) by integration by parts.`,ans,`Take \\(u=x, dv=\\cos(${kk}x)dx\\). The antiderivative is \\(x\\sin(${kk}x)/${kk}+\\cos(${kk}x)/${kk*kk}\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily26VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,8),xx=rand(.2,1.6),ans=aa*Math.cos(aa*xx);
    return qNum(CAL,title,`Find \\(d(\\sin(${aa}x))/dx\\) at \\(x=${nfmt(xx)}\\).`,ans,`\\(d(\\sin(ax))/dx=a\\cos(ax)\\), giving \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily27VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(1,6),ans=2/aa;
    return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/${aa}}\\sin(${aa}x)\\,dx\\).`,ans,`An antiderivative is \\(-\\cos(${aa}x)/${aa}\\); the definite result is \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily28VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let n=ri(1,5),bb=ri(2,8),ans=bb**n/(n+1);
    return qNum(CAL,title,`Find the average value of \\(f(x)=x^{${n}}\\) on \\([0,${bb}]\\).`,ans,`\\(f_{avg}=\\frac1b\\int_0^b x^n dx=b^n/(n+1)=${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily29VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    let aa=ri(-3,3),bb=aa+ri(1,6),ans=(aa+bb)/2;
    return qNum(CAL,title,`For \\(f(x)=x^2\\) on \\([${aa},${bb}]\\), find the point c satisfying the Mean Value Theorem.`,ans,`\\(f'(c)=2c=(b^2-a^2)/(b-a)=a+b\\), so \\(c=(a+b)/2=${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily30VariantA(title){
  const variant=1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  {
    return equationQ(CAL,title,'Which is the integration-by-parts identity?','\\int u\\,dv=uv-\\int v\\,du',['\\int u\\,dv=uv+\\int v\\,du','\\int u\\,dv=v\\,du-u\\,dv','\\int u\\,dv=u+v+C'],'Integration by parts follows from the product rule: \\(d(uv)=u\\,dv+v\\,du\\), hence \\(\\int u\\,dv=uv-\\int v\\,du\\).');
  }
}


/* Individual family variant implementations; no indexed dispatch remains. */
function makeCalculusFamily31VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let n=ri(2,6),xx=ri(1,4),ans=n*xx**(n-1);
    return qNum(CAL,title,`Find \\(d(x^{${n}})/dx\\) at \\(x=${xx}\\).`,ans,`\\(d(x^n)/dx=nx^{n-1}\\), hence \\(${ans}\\).`)
  }
}
function makeCalculusFamily32VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=ri(1,4),bb=ri(1,4),xx=ri(1,3),n=ri(2,4),ans=n*aa*(aa*xx+bb)**(n-1);
    return qNum(CAL,title,`Differentiate \\(f(x)=(${aa}x+${bb})^{${n}}\\) and find \\(f'(${xx})\\).`,ans,`By the chain rule, \\(f'=n(${aa}x+${bb})^{n-1}(${aa})=${ans}\\) at the given point.`)
  }
}
function makeCalculusFamily33VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let n=ri(1,5),bb=ri(2,6),ans=bb**(n+1)/(n+1);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{${bb}}x^{${n}}dx\\).`,ans,`\\(\\int x^n dx=x^{n+1}/(n+1)\\), so the definite integral is \\(${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily34VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=a,t=ri(1,3),ans=((aa*t-1)*Math.exp(aa*t)+1)/(aa*aa);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{${t}}xe^{${aa}x}dx\\) using integration by parts.`,ans,`Take \\(u=x\\), \\(dv=e^{ax}dx\\). Then the integral is \\([e^{ax}(x/a-1/a^2)]_0^{${t}}=${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily35VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=a,t=ri(1,4),ans=(1-(1+aa*t)*Math.exp(-aa*t))/(aa*aa);
    return qNum(CAL,title,`Use integration by parts to evaluate \\(\\int_0^{${t}}xe^{-${aa}x}dx\\).`,ans,`\\(\\int_0^T xe^{-ax}dx=[1-(1+aT)e^{-aT}]/a^2=${nfmt(ans)}\\).`)
  }
}
function makeCalculusFamily36VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let n=ri(1,5),t=ri(1,4),ans=t**(n+1);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{${t}}(${n+1})x^{${n}}dx\\).`,ans,`An antiderivative is \\(x^{${n+1}}\\); the definite value is \\(${t}^{${n+1}}=${ans}\\).`)
  }
}
function makeCalculusFamily37VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let xx=ri(1,8);
    return qNum(CAL,title,`Find \\(d(\\ln x)/dx\\) at \\(x=${xx}\\).`,1/xx,`\\(d(\\ln x)/dx=1/x\\), so the value is \\(1/${xx}=${nfmt(1/xx)}\\).`)
  }
}
function makeCalculusFamily38VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    return equationQ(CAL,title,'Which is the correct integration-by-parts formula?','\\int u\\,dv=uv-\\int v\\,du',['\\int u\\,dv=uv+\\int v\\,du','\\int u\\,dv=u+v+C','\\int u\\,dv=v\\,du-uv'],'Integration by parts follows from the product rule: \\(d(uv)=u\\,dv+v\\,du\\).')
  }
}
function makeCalculusFamily39VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let aa=ri(1,7);
    return qNum(CAL,title,`Evaluate \\(\\lim_{x\\to${aa}}(x^2-${aa*aa})/(x-${aa})\\).`,2*aa,`Factor the numerator as \\((x-${aa})(x+${aa})\\); the limit is \\(2${aa}=${2*aa}\\).`)
  }
}
function makeCalculusFamily40VariantA(title){
  const variant=1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  {
    let nn=ri(1,5);
    return qNum(CAL,title,`Evaluate \\(\\int_0^{\\pi/${nn}}\\sin(${nn}x)dx\\).`,2/nn,`\\([-\\cos(${nn}x)/${nn}]_0^{\\pi/${nn}}=2/${nn}=${nfmt(2/nn)}\\).`)
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily21(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily21VariantA(title):makeCalculusExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily22(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily22VariantA(title):makeCalculusExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily23(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily23VariantA(title):makeCalculusExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily24(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily24VariantA(title):makeCalculusExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily25(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily25VariantA(title):makeCalculusExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily26VariantA(title):makeCalculusExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily27VariantA(title):makeCalculusExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily28VariantA(title):makeCalculusExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily29VariantA(title):makeCalculusExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily30VariantA(title):makeCalculusExpansionFamily10(title);q.title=title;return q;}
/* Family 31: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily31VariantA(title):makeCalculusExpansionFamily11(title);q.title=title;return q;}
/* Family 32: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily32VariantA(title):makeCalculusExpansionFamily12(title);q.title=title;return q;}
/* Family 33: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily33VariantA(title):makeCalculusExpansionFamily13(title);q.title=title;return q;}
/* Family 34: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily34VariantA(title):makeCalculusExpansionFamily14(title);q.title=title;return q;}
/* Family 35: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily35VariantA(title):makeCalculusExpansionFamily15(title);q.title=title;return q;}
/* Family 36: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily36(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily36VariantA(title):makeCalculusExpansionFamily16(title);q.title=title;return q;}
/* Family 37: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily37(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily37VariantA(title):makeCalculusExpansionFamily17(title);q.title=title;return q;}
/* Family 38: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily38(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily38VariantA(title):makeCalculusExpansionFamily18(title);q.title=title;return q;}
/* Family 39: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily39(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily39VariantA(title):makeCalculusExpansionFamily19(title);q.title=title;return q;}
/* Family 40: a named seed recipe and its paired randomized expansion variant. */
function makeCalculusFamily40(title){const useSeed=ri(0,1)===1;const q=useSeed?makeCalculusFamily40VariantA(title):makeCalculusExpansionFamily20(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.calculus = [numericEntry('calculus',"Power rule derivative · family 21 (randomized variant)",'calculus-family-21',()=>makeCalculusFamily21("Power rule derivative · family 21 (randomized variant)")),
    numericEntry('calculus',"Chain rule evaluation · family 22 (randomized variant)",'calculus-family-22',()=>makeCalculusFamily22("Chain rule evaluation · family 22 (randomized variant)")),
    numericEntry('calculus',"Power-rule definite integral · family 23 (randomized variant)",'calculus-family-23',()=>makeCalculusFamily23("Power-rule definite integral · family 23 (randomized variant)")),
    numericEntry('calculus',"Integration by parts exponential integral · family 24 (randomized variant)",'calculus-family-24',()=>makeCalculusFamily24("Integration by parts exponential integral · family 24 (randomized variant)")),
    numericEntry('calculus',"Integration by parts trigonometric integral · family 25 (randomized variant)",'calculus-family-25',()=>makeCalculusFamily25("Integration by parts trigonometric integral · family 25 (randomized variant)")),
    numericEntry('calculus',"Trigonometric derivative · family 26 (randomized variant)",'calculus-family-26',()=>makeCalculusFamily26("Trigonometric derivative · family 26 (randomized variant)")),
    numericEntry('calculus',"Definite sine integral · family 27 (randomized variant)",'calculus-family-27',()=>makeCalculusFamily27("Definite sine integral · family 27 (randomized variant)")),
    numericEntry('calculus',"Average value of a power · family 28 (randomized variant)",'calculus-family-28',()=>makeCalculusFamily28("Average value of a power · family 28 (randomized variant)")),
    numericEntry('calculus',"Mean-value-theorem point · family 29 (randomized variant)",'calculus-family-29',()=>makeCalculusFamily29("Mean-value-theorem point · family 29 (randomized variant)")),
    numericEntry('calculus',"Integration-by-parts identity · family 30 (randomized variant)",'calculus-family-30',()=>makeCalculusFamily30("Integration-by-parts identity · family 30 (randomized variant)")),
    numericEntry('calculus',"Power-rule derivative · family 31 (randomized variant)",'calculus-family-31',()=>makeCalculusFamily31("Power-rule derivative · family 31 (randomized variant)")),
    numericEntry('calculus',"Chain-rule derivative · family 32 (randomized variant)",'calculus-family-32',()=>makeCalculusFamily32("Chain-rule derivative · family 32 (randomized variant)")),
    numericEntry('calculus',"Power integral · family 33 (randomized variant)",'calculus-family-33',()=>makeCalculusFamily33("Power integral · family 33 (randomized variant)")),
    numericEntry('calculus',"Integration by parts with exponential · family 34 (randomized variant)",'calculus-family-34',()=>makeCalculusFamily34("Integration by parts with exponential · family 34 (randomized variant)")),
    numericEntry('calculus',"Integration by parts with decay · family 35 (randomized variant)",'calculus-family-35',()=>makeCalculusFamily35("Integration by parts with decay · family 35 (randomized variant)")),
    numericEntry('calculus',"Fundamental-theorem integral · family 36 (randomized variant)",'calculus-family-36',()=>makeCalculusFamily36("Fundamental-theorem integral · family 36 (randomized variant)")),
    numericEntry('calculus',"Logarithm derivative · family 37 (randomized variant)",'calculus-family-37',()=>makeCalculusFamily37("Logarithm derivative · family 37 (randomized variant)")),
    numericEntry('calculus',"Integration-by-parts identity · family 38 (randomized variant)",'calculus-family-38',()=>makeCalculusFamily38("Integration-by-parts identity · family 38 (randomized variant)")),
    numericEntry('calculus',"Removable-limit evaluation · family 39 (randomized variant)",'calculus-family-39',()=>makeCalculusFamily39("Removable-limit evaluation · family 39 (randomized variant)")),
    numericEntry('calculus',"Definite sine integral · family 40 (randomized variant)",'calculus-family-40',()=>makeCalculusFamily40("Definite sine integral · family 40 (randomized variant)")),
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
  return qNum(CAL,'Derivative of a logarithmic composition',`For \\(f(x)=\\ln(${a}x+${b})\\), evaluate \\(f'(${x})\\).`,ans,`By the chain rule, \\(f'(x)=${a}/(${a}x+${b})\\). At \\(x=${x}\\), the value is \\(${a}/(${a*x+b})=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Integration by parts with x sine','calculus-parts-x-sine',()=>{
  const k=ri(1,5),ans=-Math.cos(k)/k+Math.sin(k)/(k*k);
  return qNum(CAL,'Integration by parts with x sine',`Evaluate \\(\\int_0^1 x\\sin(${k}x)\\,dx\\) using integration by parts.`,ans,`Let \\(u=x\\), \\(dv=\\sin(${k}x)dx\\); then \\(v=-\\cos(${k}x)/${k}\\). The antiderivative is \\(-x\\cos(${k}x)/${k}+\\sin(${k}x)/${k*k}\\), giving \\(${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Trigonometric substitution for a semicircle area','calculus-trig-sub-semicircle',()=>{
  const a=ri(2,8),ans=Math.PI*a*a/4;
  return qNum(CAL,'Trigonometric substitution for a semicircle area',`Evaluate \\(\\int_0^{${a}}\\sqrt{${a*a}-x^2}\\,dx\\) using a trigonometric substitution.`,ans,`Set \\(x=${a}\\sin\\theta\\). The integral becomes the area of a quarter-circle of radius ${a}, namely \\(\\pi a^2/4=\\pi(${a*a})/4=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Definite polynomial integral by the fundamental theorem','calculus-ftc-polynomial-integral',()=>{
  const a=ri(1,4),b=ri(0,6),T=ri(1,4),ans=a*T**3/3+b*T*T/2;
  return qNum(CAL,'Definite polynomial integral by the fundamental theorem',`Evaluate \\(\\int_0^{${T}}(${a}x^2+${b}x)\\,dx\\).`,ans,`An antiderivative is \\(${a}x^3/3+${b}x^2/2\\). Evaluating at 0 and ${T} gives \\(${a}(${T}^3)/3+${b}(${T}^2)/2=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'U-substitution for an exponential composite','calculus-u-sub-exp-square',()=>{
  const a=ri(1,3),ans=Math.exp(a*a)-1;
  return qNum(CAL,'U-substitution for an exponential composite',`Evaluate \\(\\int_0^{${a}}2x e^{x^2}\\,dx\\) using \\(u=x^2\\).`,ans,`Let \\(u=x^2\\), so \\(du=2x\\,dx\\). The integral is \\(\\int_0^{${a*a}}e^u du=e^{${a*a}}-1=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Partial fractions with a linear numerator','calculus-partial-fractions-linear-numerator',()=>{
  const a=ri(1,4),b=a+ri(2,5),m=ri(1,4),n=ri(6,15),ans=(n-m*a)/(b-a);
  return qNum(CAL,'Partial fractions with a linear numerator',`In \\(\\frac{${m}x+${n}}{(x+${a})(x+${b})}=\\frac{A}{x+${a}}+\\frac{B}{x+${b}}\\), find \\(A\\).`,ans,`Set \\(x=-${a}\\): \\(A=(${n}-${m}(${a}))/(${b}-${a})=${n-m*a}/${b-a}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Definite integral of exponential decay','calculus-exponential-decay-integral',()=>{
  const k=ri(1,5),T=rand(.3,2.2),ans=(1-Math.exp(-k*T))/k;
  return qNum(CAL,'Definite integral of exponential decay',`Evaluate the accumulated decay \\(\\int_0^{${nfmt(T)}}e^{-${k}x}\\,dx\\).`,ans,`An antiderivative is \\(-e^{-${k}x}/${k}\\), so the definite integral is \\((1-e^{-${k}(${nfmt(T)})})/${k}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'U-substitution with a radical integrand','calculus-u-sub-radical',()=>{
  const a=ri(1,5),c=ri(1,4),ans=(Math.pow(a*a+c*c,1.5)-c**3)/3;
  return qNum(CAL,'U-substitution with a radical integrand',`Evaluate \\(\\int_0^{${a}}x\\sqrt{x^2+${c*c}}\\,dx\\).`,ans,`Use \\(u=x^2+${c*c}\\), \\(du=2x\\,dx\\). The result is \\(\\frac13[(${a*a+c*c})^{3/2}-(${c*c})^{3/2}]=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'U-substitution for a rational integral','calculus-u-sub-rational-integral',()=>{
  const a=ri(1,5),c=ri(1,6),ans=Math.log((a*a+c)/c);
  return qNum(CAL,'U-substitution for a rational integral',`Evaluate \\(\\int_0^{${a}}\\frac{2x}{x^2+${c}}\\,dx\\) using \\(u=x^2+${c}\\).`,ans,`Since \\(du=2x\\,dx\\), the result is \\(\\ln(x^2+${c})\\big|_0^{${a}}=\\ln((${a*a+c})/${c})=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'U-substitution with a cubic inner function','calculus-u-sub-cubic-radical',()=>{
  const a=ri(1,4),c=ri(1,5),ans=(2/9)*(Math.pow(a**3+c,1.5)-Math.pow(c,1.5));
  return qNum(CAL,'U-substitution with a cubic inner function',`Evaluate \\(\\int_0^{${a}}x^2\\sqrt{x^3+${c}}\\,dx\\).`,ans,`Let \\(u=x^3+${c}\\), so \\(du=3x^2\\,dx\\). Integrating \\(u^{1/2}/3\\) gives \\(\\frac29[(${a**3+c})^{3/2}-${c}^{3/2}]=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'U-substitution for a cosine of a square','calculus-u-sub-cos-square',()=>{
  const k=ri(1,6),ans=Math.sin(k)/(2*k);
  return qNum(CAL,'U-substitution for a cosine of a square',`Evaluate \\(\\int_0^1x\\cos(${k}x^2)\\,dx\\) using \\(u=x^2\\).`,ans,`Let \\(u=x^2\\), so \\(x\\,dx=du/2\\). The integral is \\(\\frac12\\int_0^1\\cos(${k}u)du=\\sin(${k})/(2${k})=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Arctangent definite integral','calculus-arctangent-integral',()=>{
  const a=ri(1,6),b=ri(1,5),ans=Math.atan(a/b)/b;
  return qNum(CAL,'Arctangent definite integral',`Evaluate \\(\\int_0^{${a}}\\frac{1}{x^2+${b*b}}\\,dx\\).`,ans,`Use \\(\\int dx/(x^2+b^2)=\\frac1b\\arctan(x/b)\\). The value is \\(\\arctan(${a}/${b})/${b}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(CAL,'Applied · Integrated sensor envelope by parts','scenario-calculus-envelope-integration-by-parts',()=>{
  const k=ri(1,5),T0=pick([.5,1,1.5,2]),ans=(1-(1+k*T0)*Math.exp(-k*T0))/(k*k);
  return qNum(CAL,'Applied · Integrated sensor envelope by parts',`A signal processor accumulates an envelope proportional to \\(t e^{-kt}\\). Evaluate \\(\\int_0^{${T0}}t e^{-${k}t}\\,dt\\) using integration by parts.`,ans,`Let \\(u=t\\), \\(dv=e^{-${k}t}dt\\), so \\(du=dt\\), \\(v=-e^{-${k}t}/${k}\\). Therefore the integral is \\([-(t e^{-${k}t})/${k}-e^{-${k}t}/${k^2}]_0^{${T0}}=[1-(1+${k}(${T0}))e^{-${k}(${T0})}]/${k}^2=${nfmt(ans)}\\).`);
});
appendNumericRecipe(CAL,'Applied · Accumulated sensor response by substitution','scenario-calculus-accumulation-substitution',()=>{
  const b=ri(1,5),c=ri(1,8),ans=(Math.pow(b*b+c,1.5)-Math.pow(c,1.5))/3;
  return qNum(CAL,'Applied · Accumulated sensor response by substitution',`A calibration model requires the integral \\(\\int_0^{${b}}x\\sqrt{x^2+${c}}\\,dx\\). Evaluate it using \\(u=x^2+${c}\\).`,ans,`Let \\(u=x^2+${c}\\), then \\(du=2x\\,dx\\). The integral equals \\(\\frac13[(x^2+${c})^{3/2}]_0^{${b}}=\\frac{(${b*b+c})^{3/2}-${c}^{3/2}}3=${nfmt(ans)}\\).`);
});

/* Category-local compound question generators. Their tree edges are registered below, so this
   file owns both the content and the relationship. These are ordinary numeric repeatable nodes. */
function makeCalculusCompoundRoot(variant=1){
  const base=ri(2,9);
  const x=variant===1?base:variant===2?base+2:2*base;
  return qNum(CAL,'Calculus compound root',`For \\(f(t)=${x}t\\), find \\(f'(1)\\).`,x,`\\(f'(t)=${x}\\), so \\(f'(1)=${x}\\).`)
}
function makeCalculusCompoundChild(parentValue,variant=1){
  const x=Number(parentValue);
  if(!Number.isFinite(x))throw new Error('Compound child requires its parent numeric answer.');
  const declaration='Let \\(x_{\\mathrm{prev}}\\) denote the numerical answer from the parent question.';
  const ans=x/2;return qNum(CAL,'Linked definite integral',`${declaration} Evaluate \\(\\int_0^1 x_{\\mathrm{prev}}t\\,dt\\).`,ans,`\\(\\int_0^1 x_{\\mathrm{prev}}t\\,dt=x_{\\mathrm{prev}}[t^2/2]_0^1=x_{\\mathrm{prev}}/2=${nfmt(ans)}\\).`)
}
function registerCalculusCompoundTreeNodes(){
  for(let variant=1;variant<=3;variant++){
    const suffix=String(variant).padStart(2,'0');
    const rootKey=`calculus-tree-root-${suffix}`,childKey=`calculus-tree-child-${suffix}`;
    registerQuestionGenerator({id:rootKey,category:NAMESPACE_CALCULUS,title:`Calculus · Compound root ${suffix}`,recipeKey:rootKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'root',treeChildrenRecipeKeys:[childKey],
      make:()=>makeCalculusCompoundRoot(variant)});
    registerQuestionGenerator({id:childKey,category:NAMESPACE_CALCULUS,title:`Calculus · Dependent node ${suffix}`,recipeKey:childKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'child',parentRecipeKey:rootKey,
      make:(context={})=>{
        let previous=context.parentAnswer??context.sharedData?.[rootKey]?.answer;
        if(previous===undefined||previous===null){const seed=makeCalculusCompoundRoot(variant);previous=seed.answerExact??seed.answer;}
        return makeCalculusCompoundChild(previous,variant);
      }});
  }
}
registerCalculusCompoundTreeNodes();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const CALCULUS_CONCEPT_CARDS = [
    [
      "Derivative",
      "The limit of the difference quotient that measures instantaneous rate of change."
    ],
    [
      "Differential",
      "A linearized infinitesimal change represented by a derivative times an input increment."
    ],
    [
      "Definite integral",
      "The signed accumulation of a function over a specified interval."
    ],
    [
      "Indefinite integral",
      "A family of antiderivatives differing by an arbitrary constant."
    ],
    [
      "Fundamental theorem of calculus",
      "The theorem connecting differentiation and integration and evaluating suitable definite integrals through antiderivatives."
    ],
    [
      "Chain rule",
      "The rule for differentiating a composition by multiplying the outer derivative by the inner derivative."
    ],
    [
      "Product rule",
      "The derivative of a product is the first factor times the derivative of the second plus the second times the derivative of the first."
    ],
    [
      "Quotient rule",
      "The derivative of a quotient uses denominator times numerator derivative minus numerator times denominator derivative, divided by denominator squared."
    ],
    [
      "Integration by parts",
      "The integration rule based on the derivative of a product, commonly written integral u dv equals uv minus integral v du."
    ],
    [
      "Substitution rule",
      "A method of integration that replaces a composite expression with a new variable and its differential."
    ],
    [
      "Improper integral",
      "An integral with an infinite interval or an unbounded integrand, defined using a limit."
    ],
    [
      "Critical point",
      "A point in a function domain where the derivative is zero or fails to exist, as applicable."
    ],
    [
      "Local extremum",
      "A local maximum or minimum relative to nearby domain points."
    ],
    [
      "Mean value theorem",
      "A theorem guaranteeing a point whose derivative equals the average slope across an interval under its hypotheses."
    ],
    [
      "Taylor polynomial",
      "A polynomial approximation built from derivatives at an expansion point."
    ],
    [
      "Convergence of an improper integral",
      "The property that the limit defining an improper integral exists and is finite."
    ],
    [
      "Partial derivative",
      "The derivative with respect to one variable while the other independent variables are held fixed."
    ],
    [
      "Total differential",
      "The first-order linear approximation to the change of a multivariable function."
    ],
    [
      "Limit",
      "The value a function approaches as its input approaches a specified point."
    ],
    [
      "Integration constant",
      "The arbitrary constant added to an indefinite antiderivative."
    ],
    [
      "Product rule — extended concept",
      "The derivative of a product fg equals f prime times g plus f times g prime."
    ],
    [
      "Quotient rule — extended concept",
      "The derivative of f/g equals (f prime g minus f g prime) divided by g squared when g is nonzero."
    ],
    [
      "Chain rule — extended concept",
      "The derivative of a composition accounts for the derivative of the outer function multiplied by the derivative of the inner function."
    ],
    [
      "Integration by parts — extended concept",
      "The identity integral u dv = uv - integral v du, used to integrate products."
    ],
    [
      "U-substitution",
      "A change of variable that simplifies an integral by replacing a composite inner expression with a new variable."
    ],
    [
      "Partial-fraction integration",
      "Decomposing a rational function into simpler fractions before integrating."
    ],
    [
      "Trigonometric substitution",
      "A substitution using trigonometric identities to simplify radicals such as sqrt(a squared minus x squared)."
    ],
    [
      "Fundamental theorem of calculus — extended concept",
      "A result connecting differentiation and integration and evaluating definite integrals through antiderivatives."
    ],
    [
      "Improper integral — extended concept",
      "An integral with an infinite interval or an unbounded integrand, defined through a limit when it converges."
    ],
    [
      "Convergence of an integral",
      "The property that an improper integral approaches a finite limit."
    ],
    [
      "Critical point — extended concept",
      "A point in the domain where the derivative is zero or does not exist, often considered when finding extrema."
    ],
    [
      "Local maximum",
      "A function value at least as large as neighboring values within some domain neighborhood."
    ],
    [
      "Local minimum",
      "A function value at most as large as neighboring values within some domain neighborhood."
    ],
    [
      "Second derivative test",
      "A test using the second derivative at a critical point to classify a local extremum when conditions apply."
    ],
    [
      "Taylor polynomial — extended concept",
      "A polynomial built from function derivatives at a point to approximate a sufficiently smooth function nearby."
    ],
    [
      "Maclaurin series",
      "A Taylor series centered at zero."
    ],
    [
      "L’Hôpital rule",
      "A limit-evaluation method for appropriate indeterminate forms such as 0/0 or infinity/infinity."
    ],
    [
      "Mean value theorem — extended concept",
      "A theorem ensuring a derivative equals the average rate of change somewhere in an interval under continuity and differentiability assumptions."
    ],
    [
      "Parametric derivative",
      "For x(t), y(t) with x prime nonzero, dy/dx equals y prime divided by x prime."
    ],
    [
      "Arc length",
      "The length of a curve, calculated using an integral of the speed of its parameterization or a derivative-based formula."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_CALCULUS, CALCULUS_CONCEPT_CARDS);
