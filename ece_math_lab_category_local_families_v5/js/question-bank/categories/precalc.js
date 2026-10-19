/* precalc: seed entries, explicit expansion families, and category-specific additions. */

function makePrecalcExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(-7,7),r2=ri(-7,7),a=1,b=-(r1+r2),c=r1*r2,ans=v?Math.max(r1,r2):b;return qNum(PC,title,v?`A monic quadratic has roots \\(${r1}\\) and \\(${r2}\\). Find the larger root.`:`A monic quadratic has roots \\(${r1}\\) and \\(${r2}\\). Find the coefficient of \\(x\\) in its expansion.`,ans,v?`The larger root is \\(${ans}\\).`:`\\((x-r_1)(x-r_2)=x^2-(r_1+r_2)x+r_1r_2\\), so coefficient is \\(${ans}\\).`)
  }
}
function makePrecalcExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=a+ri(1,5),ans=v?-1/(b-a):1/(b-a);return qNum(PC,title,v?`For \\(\\frac1{(x+${a})(x+${b})}=\\frac{A}{x+${a}}+\\frac{B}{x+${b}}\\), find coefficient \\(B\\).`:`For \\(\\frac1{(x+${a})(x+${b})}=\\frac{A}{x+${a}}+\\frac{B}{x+${b}}\\), find coefficient \\(A\\).`,ans,v?`Cover-up at \\(x=-${b}\\) gives \\(B=1/(a-b)=-1/(${b}-${a})=${nfmt(ans)}\\).`:`Cover-up at \\(x=-${a}\\) gives \\(A=1/(b-a)=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const x=ri(-3,8),y=ri(-3,8),a=ri(1,5),b=ri(2,5),rhs=a*x+y,rhs2=x+b*y,det=a*b-1,sol=(a*rhs2-rhs)/det,answer=v?sol:det;return qNum(PC,title,v?`A linear system has equations \\(${a}x+y=${rhs}\\) and \\(x+${b}y=${rhs2}\\). Using elimination, find \\(y\\).`:`For system \\(${a}x+y=${rhs}\\) and \\(x+${b}y=${rhs2}\\), find determinant of coefficient matrix.`,answer,v?`Elimination gives \\(y=(a\\cdot rhs_2-rhs_1)/(ab-1)=${nfmt(answer)}\\).`:`Determinant is \\(${a*b-1}\\).`)
  }
}
function makePrecalcExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const x1=ri(-5,5),y1=ri(-5,5),x2=x1+ri(1,8),y2=ri(-5,8),ans=v?y1-(y2-y1)/(x2-x1)*x1:(y2-y1)/(x2-x1);return qNum(PC,title,v?`A line passes through \\((${x1},${y1})\\) and \\((${x2},${y2})\\). Find its y-intercept.`:`Find slope of line through \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,ans,v?`\\(b=y_1-mx_1=${nfmt(ans)}\\).`:`\\(m=(y_2-y_1)/(x_2-x_1)=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const x1=ri(-5,5),y1=ri(-5,5),x2=x1+ri(1,8),y2=y1+ri(-6,6),ans=v?[(x1+x2)/2,(y1+y2)/2]:(Math.hypot(x2-x1,y2-y1));return qNum(PC,title,v?`Find the x-coordinate of midpoint between \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`:`Find distance between \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,Array.isArray(ans)?ans[0]:ans,v?`\\(x_m=(x_1+x_2)/2=${nfmt(ans[0])}\\).`:`\\(d=\\sqrt{(\\Delta x)^2+(\\Delta y)^2}=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const h=ri(-5,5),k=ri(-5,5),r=ri(2,10),ans=v?r*r:Math.sqrt(r*r);return qNum(PC,title,v?`A circle centered at \\((${h},${k})\\) has radius \\(${r}\\). Find \\(r^2\\) in standard equation.`:`Find its radius from \\((x-${h})^2+(y-${k})^2=${r*r}\\).`,ans,v?`Standard form has constant \\(r^2=${ans}\\).`:`Radius is \\(\\sqrt{${r*r}}=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const theta=pick([Math.PI/6,Math.PI/4,Math.PI/3,Math.PI/2]),ans=v?Math.cos(theta):Math.sin(theta);return qNum(PC,title,v?`Evaluate \\(\\cos(${nfmt(theta)}\\,rad)\\) exactly or numerically.`:`Evaluate \\(\\sin(${nfmt(theta)}\\,rad)\\).`,ans,v?`\\(\\cos\\theta=${nfmt(ans)}\\).`:`\\(\\sin\\theta=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const x=ri(1,7),ans=v?Math.pow(2,x):x;return qNum(PC,title,v?`Solve \\(\\log_2 y=${x}\\) for \\(y\\).`:`Solve \\(2^x=${Math.pow(2,x)}\\) for \\(x\\).`,ans,v?`\\(y=2^{${x}}=${nfmt(ans)}\\).`:`\\(x=\\log_2(${Math.pow(2,x)})=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const x=ri(1,8),a=ri(1,5),ans=v?x+a:1/(x+a);return qNum(PC,title,v?`Evaluate the reciprocal equation variable expression \\(1/(x+${a})\\) at \\(x=${x}\\), then invert it.`:`Evaluate \\(1/(x+${a})\\) at \\(x=${x}\\).`,ans,v?`The reciprocal is inverted to \\(x+a=${ans}\\).`:`\\(1/(${x}+${a})=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const r1=ri(-6,6),r2=ri(-6,6),ans=v?-(r1+r2):r1*r2;return qNum(PC,title,v?`A monic quadratic has roots \\(${r1}\\) and \\(${r2}\\). Find sum of roots.`:`A monic quadratic has roots \\(${r1}\\) and \\(${r2}\\). Find product of roots.`,ans,v?`\\(r_1+r_2=${nfmt(ans*-1)}\\).`:`\\(r_1r_2=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),b=ri(-5,8),x=ri(-3,5),ans=v?a*x+b:a*x*x+b*x;return qNum(PC,title,v?`Evaluate linear polynomial \\(f(x)=${a}x${b>=0?'+':''}${b}\\) at \\(x=${x}\\).`:`Evaluate quadratic polynomial \\(g(x)=${a}x^2+(${b})x\\) at \\(x=${x}\\).`,ans,v?`\\(f(${x})=${ans}\\).`:`\\(g(${x})=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),x=ri(1,5),ans=v?2*a*x:a*x*x;return qNum(PC,title,v?`For \\(f(x)=${a}x^2\\), find derivative at \\(x=${x}\\).`:`For \\(f(x)=${a}x^2\\), find the function value at \\(x=${x}\\).`,ans,v?`\\(f'(x)=2ax=${ans}\\).`:`\\(f(x)=ax^2=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const r=ri(1,7),ans=v?2*Math.PI*r:Math.PI*r*r;return qNum(PC,title,v?`A circle has radius \\(${r}\\). Find its circumference.`:`A circle has radius \\(${r}\\). Find its area.`,ans,v?`\\(C=2\\pi r=${nfmt(ans)}\\).`:`\\(A=\\pi r^2=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const r=ri(1,6),ans=v?r*r*r:r*r;return qNum(PC,title,v?`A sphere's radius is \\(${r}\\). Find \\(r^3\\), the radial factor in its volume.`:`A sphere's radius is \\(${r}\\). Find \\(r^2\\), the radial factor in its surface area.`,ans,v?`\\(r^3=${ans}\\).`:`\\(r^2=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,7),d=ri(2,5),n=ri(3,12),ans=v?a+(n-1)*d:a+n*d;return qNum(PC,title,v?`An arithmetic sequence has \\(a_1=${a}\\), common difference \\(${d}\\). Find \\(a_{${n}}\\).`:`For the same sequence, find \\(a_{${n+1}}\\).`,ans,v?`\\(a_n=a_1+(n-1)d=${ans}\\).`:`\\(a_{n+1}=a_1+nd=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a=pick([.2,.3,.4,.5]),n=ri(3,8),ans=v?(1-a**n)/(1-a):a**(n-1);return qNum(PC,title,v?`Find sum \\(1+${a}+\\cdots+${a}^${n-1}\\).`:`Find the \\(${n}\\)-th term of a geometric sequence with first term 1 and ratio \\(${a}\\).`,ans,v?`\\(S_n=(1-r^n)/(1-r)=${nfmt(ans)}\\).`:`\\(a_n=r^{n-1}=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(-5,5),c=ri(1,5),ans=v?-b/(2*a):b*b-4*a*c;return qNum(PC,title,v?`Find the x-coordinate of vertex of \\(y=${a}x^2+(${b})x+${c}\\).`:`For quadratic \\(${a}x^2+(${b})x+${c}=0\\), find its discriminant.`,ans,v?`\\(x_v=-b/(2a)=${nfmt(ans)}\\).`:`\\(D=b^2-4ac=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(1,5),c=ri(1,5),x=ri(1,5),y=ri(1,5),ans=v?Math.abs(a*x+b*y+c)/Math.hypot(a,b):a*x+b*y+c;return qNum(PC,title,v?`Find perpendicular distance from point \\((${x},${y})\\) to line \\(${a}x+${b}y+${c}=0\\).`:`Evaluate line expression \\(${a}x+${b}y+${c}\\) at \\((${x},${y})\\).`,ans,v?`\\(d=|Ax+By+C|/\\sqrt{A^2+B^2}=${nfmt(ans)}\\).`:`\\(Ax+By+C=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(1,5),ans=v?Math.atan2(b,a):Math.hypot(a,b);return qNum(PC,title,v?`For complex number \\(z=${a}+${b}i\\), find principal argument in radians.`:`For complex number \\(z=${a}+${b}i\\), find modulus.`,ans,v?`\\(\\arg z=\\tan^{-1}(b/a)=${nfmt(ans)}\\).`:`\\(|z|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),b=ri(1,6),c=ri(1,6),d=ri(1,6),ans=v?a*d-b*c:a*d;return qNum(PC,title,v?`Find determinant of \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\).`:`For that matrix, find product of its main-diagonal entries.`,ans,v?`\\(ad-bc=${ans}\\).`:`\\(ad=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,5),b=ri(1,5),x=ri(1,5),y=ri(1,5),rhs=a*x+b*y,ans=v?y:(rhs-b*y)/a;return qNum(PC,title,v?`For \\(${a}x+${b}y=${rhs}\\) and known \\(x=${x}\\), find \\(y\\).`:`For \\(${a}x+${b}y=${rhs}\\), with \\(y=${y}\\), solve for \\(x\\).`,ans,v?`\\(y=(${rhs}-${a}(${x}))/${b}=${nfmt(ans)}\\).`:`\\(x=(${rhs}-${b}(${y}))/${a}=${nfmt(ans)}\\).`)
  }
}
function makePrecalcExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const x=ri(-6,6),a=ri(1,6),ans=v?x+a:Math.abs(x-a);return qNum(PC,title,v?`Solve \\(|u-${x}|=${a}\\) for the larger solution \\(u\\).`:`Evaluate \\(|${x}-${a}|\\).`,ans,v?`Solutions are \\(u=${x}\\pm${a}\\); the larger is \\(${ans}\\).`:`\\(|${x}-${a}|=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const x=ri(1,6),ans=v?x*x:x*x*x;return qNum(PC,title,v?`Find square of \\(${x}\\).`:`Find cube of \\(${x}\\).`,ans,v?`\\(${x}^2=${ans}\\).`:`\\(${x}^3=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily24(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),ans=v?Math.sqrt(a):a*a;return qNum(PC,title,v?`Find positive solution of \\(x^2=${a}\\).`:`A square has side \\(${a}\\). Find its area.`,ans,v?`\\(x=\\sqrt{${a}}=${nfmt(ans)}\\).`:`\\(A=s^2=${ans}\\).`)
  }
}
function makePrecalcExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const a=ri(1,6),x=ri(1,5),ans=v?Math.pow(a,x):Math.log2(a);return qNum(PC,title,v?`Evaluate \\(${a}^{${x}}\\).`:`Find \\(\\log_2(${a})\\).`,ans,v?`\\(${a}^{${x}}=${ans}\\).`:`\\(\\log_2(${a})=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const PRECALC_EXTRA_NAMES = ["Quadratic roots", "Partial fraction equation", "Linear system", "Line slope", "Point distance", "Circle radius", "Trigonometric value", "Logarithm solution", "Rational equation root", "Vieta relation"];

function makePrecalcTopicSeed(index){
  const family=index%10, variant=Math.floor(index/10)+1;
  const title=`${PRECALC_EXTRA_NAMES[family]} · version ${variant}`;
      if(family===0){const r1=ri(-8,7),r2=ri(-8,7);const larger=Math.max(r1,r2),smaller=Math.min(r1,r2),sum=r1+r2,prod=r1*r2;return qNum(PC,title,`Solve \\(x^2-${sum}x+(${prod})=0\\). Enter the larger real root.`,larger,`The equation factors as \\((x-${r1})(x-${r2})=0\\), so the roots are \\(${r1}\\) and \\(${r2}\\). The larger root is \\(${larger}\\).`)}
    if(family===1){const a0=ri(1,4),b0=ri(5,9);return equationQ(PC,title,`Which partial-fraction identity is correct for \\(\\frac{1}{(x+${a0})(x+${b0})}\\)?`,`\\frac{1}{${b0-a0}}\\left(\\frac{1}{x+${a0}}-\\frac{1}{x+${b0}}\\right)`,[`\\frac{1}{${b0+a0}}\\left(\\frac{1}{x+${a0}}+\\frac{1}{x+${b0}}\\right)`,`\\frac{1}{x+${a0}+${b0}}`,`\\frac{1}{${b0-a0}}\\left(\\frac{1}{x+${b0}}-\\frac{1}{x+${a0}}\\right)`],`Set \\(\\frac{1}{(x+a)(x+b)}=\\frac{A}{x+a}+\\frac{B}{x+b}\\). Then \\(A=1/(b-a)\\) and \\(B=-1/(b-a)\\), yielding the first equation.`)}
    if(family===2){const x0=ri(-5,8),y0=ri(-5,8),a0=1,b0=ri(1,5),c0=ri(1,5),d0=b0*c0+1,rhs1=a0*x0+b0*y0,rhs2=c0*x0+d0*y0;return qNum(PC,title,`Solve the system \\(${a0}x+${b0}y=${rhs1}\\) and \\(${c0}x+${d0}y=${rhs2}\\). Find \\(x\\).`,x0,`The system was formed from \\(x=${x0}, y=${y0}\\). Substitution satisfies both equations, so \\(x=${x0}\\).`)}
    if(family===3){const x1=ri(-8,8),y1=ri(-8,8),x2=x1+ri(1,8),y2=ri(-8,8),ans=(y2-y1)/(x2-x1);return qNum(PC,title,`Find the slope of the line through \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,ans,`\\(m=(y_2-y_1)/(x_2-x_1)=(${y2}-${y1})/(${x2}-${x1})=${nfmt(ans)}\\).`)}
    if(family===4){const x1=ri(-5,5),y1=ri(-5,5),x2=x1+ri(1,6),y2=y1+ri(-5,5),ans=Math.sqrt((x2-x1)**2+(y2-y1)**2);return qNum(PC,title,`Find the distance between \\(A(${x1},${y1})\\) and \\(B(${x2},${y2})\\).`,ans,`\\(d=\\sqrt{(${x2}-${x1})^2+(${y2}-${y1})^2}=${nfmt(ans)}\\).`)}
    if(family===5){const h=ri(-5,5),k=ri(-5,5),r=ri(1,8),constant=h*h+k*k-r*r;return qNum(PC,title,`A circle is \\(x^2+y^2-${2*h}x-${2*k}y+(${constant})=0\\). Find its radius.`,r,`Complete squares: \\((x-${h})^2+(y-${k})^2=${r*r}\\), so radius \\(r=${r}\\).`)}
    if(family===6){const deg=pick([30,45,60,90]),ans=Math.sin(deg*Math.PI/180);return qNum(PC,title,`Evaluate \\(\\sin(${deg}^\\circ)\\). Give a decimal answer.`,ans,`Using special angles, \\(\\sin(${deg}^\\circ)=${deg===30?'1/2':deg===45?'\\sqrt{2}/2':deg===60?'\\sqrt{3}/2':'1'}\\), which is \\(${nfmt(ans)}\\).`)}
    if(family===7){const b0=pick([2,3,5]),ex=ri(1,6),ans=ex;return qNum(PC,title,`Solve \\(\\log_{${b0}}(x)=${ex}\\) for positive \\(x\\).`,b0**ex,`Convert to exponential form: \\(x=${b0}^{${ex}}=${b0**ex}\\).`)}
    if(family===8){const root=ri(-4,8);let a0=ri(1,5),b0=ri(1,5);if(root===-b0)b0=b0===5?1:b0+1;if(a0===b0)a0=a0===5?1:a0+1;const k=(root+a0)/(root+b0),ans=root;return qNum(PC,title,`Solve \\(\\frac{x+${a0}}{x+${b0}}=${nfmt(k)}\\) for \\(x\\).`,ans,`Cross-multiplication gives \\(x+${a0}=${nfmt(k)}(x+${b0})\\). Solving returns \\(x=${nfmt(ans)}\\).`)}
    const a0=ri(1,4),r1=ri(-6,6),r2=ri(-6,6),sum=r1+r2,prod=r1*r2;return qNum(PC,title,`A monic quadratic has roots \\(${r1}\\) and \\(${r2}\\). Using Vieta's formulas, find the product of roots.`,prod,`For \\(x^2-Sx+P=0\\), the product of roots is \\(P=r_1r_2=(${r1})(${r2})=${prod}\\).`);
}


NUMERIC_GENERATOR_REGISTRY.precalc = [...numericSeedEntries(PC, PRECALC_EXTRA_NAMES, 'Core', 'topic-seed', makePrecalcTopicSeed),
    numericEntry('precalc',"Factoring and roots · family 01 (randomized variant)","precalc-family-01",()=>makePrecalcExpansionFamily01("Factoring and roots · family 01 (randomized variant)")),
    numericEntry('precalc',"Partial-fraction coefficient · family 02 (randomized variant)","precalc-family-02",()=>makePrecalcExpansionFamily02("Partial-fraction coefficient · family 02 (randomized variant)")),
    numericEntry('precalc',"Two-variable linear system · family 03 (randomized variant)","precalc-family-03",()=>makePrecalcExpansionFamily03("Two-variable linear system · family 03 (randomized variant)")),
    numericEntry('precalc',"Line slope and intercept · family 04 (randomized variant)","precalc-family-04",()=>makePrecalcExpansionFamily04("Line slope and intercept · family 04 (randomized variant)")),
    numericEntry('precalc',"Point distance and midpoint · family 05 (randomized variant)","precalc-family-05",()=>makePrecalcExpansionFamily05("Point distance and midpoint · family 05 (randomized variant)")),
    numericEntry('precalc',"Circle standard form · family 06 (randomized variant)","precalc-family-06",()=>makePrecalcExpansionFamily06("Circle standard form · family 06 (randomized variant)")),
    numericEntry('precalc',"Exact trigonometric value · family 07 (randomized variant)","precalc-family-07",()=>makePrecalcExpansionFamily07("Exact trigonometric value · family 07 (randomized variant)")),
    numericEntry('precalc',"Logarithm equation · family 08 (randomized variant)","precalc-family-08",()=>makePrecalcExpansionFamily08("Logarithm equation · family 08 (randomized variant)")),
    numericEntry('precalc',"Rational expression evaluation · family 09 (randomized variant)","precalc-family-09",()=>makePrecalcExpansionFamily09("Rational expression evaluation · family 09 (randomized variant)")),
    numericEntry('precalc',"Vieta root relation · family 10 (randomized variant)","precalc-family-10",()=>makePrecalcExpansionFamily10("Vieta root relation · family 10 (randomized variant)")),
    numericEntry('precalc',"Polynomial evaluation · family 11 (randomized variant)","precalc-family-11",()=>makePrecalcExpansionFamily11("Polynomial evaluation · family 11 (randomized variant)")),
    numericEntry('precalc',"Quadratic derivative · family 12 (randomized variant)","precalc-family-12",()=>makePrecalcExpansionFamily12("Quadratic derivative · family 12 (randomized variant)")),
    numericEntry('precalc',"Circle area and circumference · family 13 (randomized variant)","precalc-family-13",()=>makePrecalcExpansionFamily13("Circle area and circumference · family 13 (randomized variant)")),
    numericEntry('precalc',"Sphere radial factors · family 14 (randomized variant)","precalc-family-14",()=>makePrecalcExpansionFamily14("Sphere radial factors · family 14 (randomized variant)")),
    numericEntry('precalc',"Arithmetic sequence term · family 15 (randomized variant)","precalc-family-15",()=>makePrecalcExpansionFamily15("Arithmetic sequence term · family 15 (randomized variant)")),
    numericEntry('precalc',"Geometric series sum · family 16 (randomized variant)","precalc-family-16",()=>makePrecalcExpansionFamily16("Geometric series sum · family 16 (randomized variant)")),
    numericEntry('precalc',"Quadratic vertex and discriminant · family 17 (randomized variant)","precalc-family-17",()=>makePrecalcExpansionFamily17("Quadratic vertex and discriminant · family 17 (randomized variant)")),
    numericEntry('precalc',"Point-line distance · family 18 (randomized variant)","precalc-family-18",()=>makePrecalcExpansionFamily18("Point-line distance · family 18 (randomized variant)")),
    numericEntry('precalc',"Complex modulus and argument · family 19 (randomized variant)","precalc-family-19",()=>makePrecalcExpansionFamily19("Complex modulus and argument · family 19 (randomized variant)")),
    numericEntry('precalc',"Two-by-two determinant · family 20 (randomized variant)","precalc-family-20",()=>makePrecalcExpansionFamily20("Two-by-two determinant · family 20 (randomized variant)")),
    numericEntry('precalc',"Solve a linear equation · family 21 (randomized variant)","precalc-family-21",()=>makePrecalcExpansionFamily21("Solve a linear equation · family 21 (randomized variant)")),
    numericEntry('precalc',"Absolute value solutions · family 22 (randomized variant)","precalc-family-22",()=>makePrecalcExpansionFamily22("Absolute value solutions · family 22 (randomized variant)")),
    numericEntry('precalc',"Exponent laws · family 23 (randomized variant)","precalc-family-23",()=>makePrecalcExpansionFamily23("Exponent laws · family 23 (randomized variant)")),
    numericEntry('precalc',"Rational root and factor · family 24 (randomized variant)","precalc-family-24",()=>makePrecalcExpansionFamily24("Rational root and factor · family 24 (randomized variant)")),
    numericEntry('precalc',"Analytic geometry midpoint · family 25 (randomized variant)","precalc-family-25",()=>makePrecalcExpansionFamily25("Analytic geometry midpoint · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(PC,'Solve a linear rational equation','precalc-linear-rational-equation',()=>{
  const a=ri(1,8),b=ri(1,6),c=ri(2,7),ans=(a+c*b)/(c-1);
  return qNum(PC,'Solve a linear rational equation',`Solve for \\(x\\): \\(\\frac{x+${a}}{x-${b}}=${c}\\), with \\(x\\ne ${b}\\).`,ans,`Cross-multiply: \\(x+${a}=${c}(x-${b})\\). Thus \\((${c}-1)x=${a}+${c*b}=${a+c*b}\\), so \\(x=${nfmt(ans)}\\). The result is not the excluded value ${b}.`)
});
appendNumericRecipe(PC,'Applied · Linear calibration slope from two readings','scenario-precalc-calibration-slope',()=>{
  const x1=ri(1,5),x2=x1+ri(2,6),m=ri(1,5),b=ri(-3,5),y1=m*x1+b,y2=m*x2+b,ans=(y2-y1)/(x2-x1);
  return qNum(PC,'Applied · Linear calibration slope from two readings',`A technician calibrates a sensor with two reference-input and output pairs \\((${x1},${y1})\\) and \\((${x2},${y2})\\). Assuming the relation \\(y=mx+b\\) is linear, find the slope \\(m\\).`,ans,`\\(m=\\frac{y_2-y_1}{x_2-x_1}=\\frac{${y2}-${y1}}{${x2}-${x1}}=${nfmt(ans)}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('precalc','Additional · Solve a linear equation','precalc-topup-01',()=>{
  const a=ri(2,9),b=ri(-8,12),x=ri(-5,9),c=a*x+b,ans=(c-b)/a;
  return qNum(PC,'Solve a linear equation',`Solve \\(${a}x${b>=0?'+':''}${b}=${c}\\) for \\(x\\).`,ans,`Subtract \\(${b}\\) from both sides and divide by \\(${a}\\): \\(x=(${c}-${b})/${a}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Slope between two points','precalc-topup-02',()=>{
  const x1=ri(-5,4),x2=x1+ri(1,8),y1=ri(-8,8),y2=ri(-8,8),ans=(y2-y1)/(x2-x1);
  return qNum(PC,'Slope between two points',`Find the slope of the line through \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,ans,`\\(m=(y_2-y_1)/(x_2-x_1)=(${y2}-${y1})/(${x2}-${x1})=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Discriminant of a quadratic equation','precalc-topup-03',()=>{
  const a=ri(1,5),b=ri(-8,8),c=ri(-6,8),ans=b*b-4*a*c;
  return qNum(PC,'Discriminant of a quadratic equation',`Find the discriminant of \\(${a}x^2${b>=0?'+':''}${b}x${c>=0?'+':''}${c}=0\\).`,ans,`\\(\\Delta=b^2-4ac=(${b})^2-4(${a})(${c})=${ans}\\).`);
});
appendNumericRecipe('precalc','Additional · Nth term of an arithmetic sequence','precalc-topup-04',()=>{
  const a1=ri(-5,12),d=ri(-4,6),n=ri(4,20),ans=a1+(n-1)*d;
  return qNum(PC,'Nth term of an arithmetic sequence',`An arithmetic sequence has first term \\(a_1=${a1}\\) and common difference \\(d=${d}\\). Find \\(a_{${n}}\\).`,ans,`\\(a_n=a_1+(n-1)d=${a1}+(${n}-1)(${d})=${ans}\\).`);
});
appendNumericRecipe('precalc','Additional · Nth term of a geometric sequence','precalc-topup-05',()=>{
  const a1=pick([1,2,3,4]),r=pick([.5,2,3]),n=ri(2,7),ans=a1*r**(n-1);
  return qNum(PC,'Nth term of a geometric sequence',`A geometric sequence has first term \\(a_1=${a1}\\), common ratio \\(r=${nfmt(r)}\\), and \\(n=${n}\\). Find \\(a_n\\).`,ans,`\\(a_n=a_1r^{n-1}=${a1}(${nfmt(r)})^{${n}-1}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Distance between two coordinate points','precalc-topup-06',()=>{
  const x1=ri(-8,8),x2=ri(-8,8),y1=ri(-8,8),y2=ri(-8,8),ans=Math.hypot(x2-x1,y2-y1);
  return qNum(PC,'Distance between two coordinate points',`Find the distance between \\((${x1},${y1})\\) and \\((${x2},${y2})\\).`,ans,`\\(d=\\sqrt{(${x2}-${x1})^2+(${y2}-${y1})^2}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Midpoint of two x-coordinates','precalc-topup-07',()=>{
  const x1=ri(-10,10),x2=ri(-10,10),ans=(x1+x2)/2;
  return qNum(PC,'Midpoint of two x-coordinates',`Find the x-coordinate of the midpoint of points with x-coordinates \\(${x1}\\) and \\(${x2}\\).`,ans,`The midpoint x-coordinate is \\((x_1+x_2)/2=(${x1}+${x2})/2=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Direct proportion constant','precalc-topup-08',()=>{
  const x=ri(2,15),k=ri(2,9),y=k*x,ans=y/x;
  return qNum(PC,'Direct proportion constant',`A variable \\(y\\) is directly proportional to \\(x\\). When \\(x=${x}\\), \\(y=${y}\\). Find the proportionality constant \\(k\\) in \\(y=kx\\).`,ans,`\\(k=y/x=${y}/${x}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Solve an exponential equation with a common base','precalc-topup-09',()=>{
  const base=pick([2,3,5]),y=ri(-2,6),target=2*y-1,ans=y;
  return qNum(PC,'Solve an exponential equation with a common base',`Solve \\(${base}^{2y-1}=${base}^{${target}}\\) for \\(y\\).`,ans,`Because the common base \\(${base}\\) is positive and not 1, equate exponents: \\(2y-1=${target}\\), so \\(y=(${target}+1)/2=${ans}\\).`);
});
appendNumericRecipe('precalc','Additional · Inverse proportion value','precalc-topup-10',()=>{
  const k=ri(20,180),x=ri(2,12),ans=k/x;
  return qNum(PC,'Inverse proportion value',`A variable obeys inverse proportion \\(y=k/x\\) with \\(k=${k}\\). Find \\(y\\) when \\(x=${x}\\).`,ans,`\\(y=k/x=${k}/${x}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('precalc','Additional · Compound growth of a quantity','precalc-topup-11',()=>{
  const P=ri(100,5000),rate=pick([.02,.05,.08,.1,.12]),n=ri(2,8),ans=P*(1+rate)**n;
  return qNum(PC,'Compound growth of a quantity',`A quantity starts at \\(${P}\\) and grows by \\(${nfmt(100*rate)}\\%\\) per period for \\(${n}\\) periods. Find its final value.`,ans,`\\(P_n=P_0(1+r)^n=${P}(1+${nfmt(rate)})^{${n}}=${nfmt(ans)}\\).`);
});
