/* complexcalc: seed entries, explicit expansion families, and category-specific additions. */

function makeComplexcalcExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),c0=ri(1,5),d0=ri(1,5),re=a0*c0-b0*d0,im=a0*d0+b0*c0,ans=v?im:re;return qNum(CC,title,v?`For \\(z_1=${a0}+${b0}i\\), \\(z_2=${c0}+${d0}i\\), find \\(\\operatorname{Im}(z_1z_2)\\).`:`For \\(z_1=${a0}+${b0}i\\), \\(z_2=${c0}+${d0}i\\), find \\(\\operatorname{Re}(z_1z_2)\\).`,ans,v?`\\(\\operatorname{Im}(z_1z_2)=ad+bc=${ans}\\).`:`\\(\\operatorname{Re}(z_1z_2)=ac-bd=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(2,8),b0=ri(1,5),c0=ri(2,8),d0=ri(1,5),den=c0*c0+d0*d0,re=(a0*c0+b0*d0)/den,im=(b0*c0-a0*d0)/den,ans=v?im:re;return qNum(CC,title,v?`Find the imaginary part of \\((${a0}+${b0}i)/(${c0}+${d0}i)\\).`:`Find the real part of \\((${a0}+${b0}i)/(${c0}+${d0}i)\\).`,ans,v?`Multiply by the conjugate; imaginary part \\(=(bc-ad)/(c^2+d^2)=${nfmt(ans)}\\).`:`Multiply by the conjugate; real part \\(=(ac+bd)/(c^2+d^2)=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.atan2(b0,a0):Math.hypot(a0,b0);return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), find principal argument in radians.`:`For \\(z=${a0}+${b0}i\\), find modulus \\(|z|\\).`,ans,v?`\\(\\arg z=\\tan^{-1}(b/a)=${nfmt(ans)}\\,rad\\).`:`\\(|z|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const r=ri(2,6),n=ri(2,5),ans=v?r**(1/n):r**n;return qNum(CC,title,v?`A positive real complex number has modulus \\(${r}\\). Find modulus of one of its \\(${n}\\)-th roots.`:`If \\(|z|=${r}\\), find modulus of \\(z^{${n}}\\).`,ans,v?`Root modulus \\(=r^{1/n}=${nfmt(ans)}\\).`:`\\(|z^n|=|z|^n=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.exp(a0):Math.exp(-a0);return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), find \\(|e^z|\\).`:`For \\(z=-${a0}+${b0}i\\), find \\(|e^z|\\).`,ans,v?`\\(|e^{x+iy}|=e^x=${nfmt(ans)}\\).`:`\\(|e^{x+iy}|=e^x=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),lhs=2*a0,rhs=2*a0,ans=v?1:lhs-rhs;return qNum(CC,title,v?`For \\(u=x^2-y^2, v=2xy\\), determine whether the Cauchy–Riemann condition \\(u_x=v_y\\) is satisfied at \\((x,y)=(${a0},${b0})\\); enter 1 for yes or 0 for no.`:`For \\(u=x^2-y^2, v=2xy\\), evaluate \\(u_x-v_y\\) at \\((x,y)=(${a0},${b0})\\).`,ans,v?`\\(u_x=2x=v_y\\), so the Cauchy–Riemann difference is zero (truth code 1).`:`\\(u_x-v_y=2(${a0})-2(${a0})=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=v?6*a0:3*(a0*a0-b0*b0);return qNum(CC,title,v?`For \\(f(z)=z^3\\), evaluate \\(\\operatorname{Im}f'(z)\\) at \\(z=${a0}+${b0}i\\).`:`For \\(f(z)=z^3\\), evaluate \\(\\operatorname{Re}f'(z)\\) at \\(z=${a0}+${b0}i\\).`,ans,v?`\\(f'(z)=3z^2\\), so imaginary part \\(=6ab=${ans}\\).`:`\\(\\operatorname{Re}f'(z)=3(a^2-b^2)=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),re=(a0*a0-b0*b0)/2,im=a0*b0,ans=v?im:re;return qNum(CC,title,v?`Evaluate the imaginary part of \\(\\int_0^{${a0}+${b0}i} z\\,dz\\) along a straight path.`:`Evaluate the real part of \\(\\int_0^{${a0}+${b0}i} z\\,dz\\) along a straight path.`,ans,v?`An antiderivative is \\(z^2/2\\); imaginary part is \\(ab=${ans}\\).`:`An antiderivative is \\(z^2/2\\); real part is \\((a^2-b^2)/2=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?a0*a0+b0*b0:Math.sqrt(a0*a0+b0*b0);return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), evaluate \\(z\\overline z\\).`:`For \\(z=${a0}+${b0}i\\), find \\(|z|\\).`,ans,v?`\\(z\\overline z=|z|^2=a^2+b^2=${ans}\\).`:`\\(|z|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const c0=ri(1,5),a0=ri(1,5),offset=ri(2,5),ans=v?c0:c0/offset;return qNum(CC,title,v?`For \(f(z)=\frac{${c0}}{z-${a0}}\), find the residue at its simple pole \(z=${a0}\).`:`For \(f(z)=\frac{${c0}}{z-${a0}}\), evaluate \(f(${a0+offset})\).`,ans,v?`The coefficient of \(1/(z-${a0})\) is \(${c0}\), so the residue is \(${c0}\).`:`Substitute \(z=${a0+offset}\): \(f(z)=${c0}/${offset}=${nfmt(ans)}\).`)
  }
}
function makeComplexcalcExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),r=ri(1,5),ans=v?2*Math.PI:Math.PI*r*r;return qNum(CC,title,v?`Using Cauchy's integral formula, find \\(\\oint_{|z|=${r}} z^0 dz/z\\) in magnitude.`:`A circle centered at the origin has radius \\(${r}\\). Find its enclosed area, useful for contour-integral geometry.`,ans,v?`\\(\\oint dz/z=2\\pi i\\), so magnitude \\(2\\pi=${nfmt(ans)}\\) (radius-independent).`:`Area \\(\\pi r^2=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?2*a0:2*a0;return qNum(CC,title,v?`For harmonic function \\(u(x,y)=x^2-y^2\\), evaluate \\(v_y\\) where its harmonic conjugate is \\(v=2xy\\), at \\(x=${a0},y=${b0}\\).`:`For \\(u=x^2-y^2\\), evaluate \\(u_x\\) at \\(x=${a0}\\).`,ans,v?`\\(v_y=2x=${2*a0}\\).`:`\\(u_x=2x=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?2*a0:2*b0;return qNum(CC,title,v?`For \\(u=x^2-y^2\\), evaluate \\(u_x\\) at \\(x=${a0}\\).`:`For conjugate \\(v=2xy\\), evaluate \\(v_x\\) at \\(y=${b0}\\).`,ans,v?`\\(u_x=2x=${ans}\\).`:`\\(v_x=2y=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.atan2(b0,a0)*180/Math.PI:Math.sqrt(a0*a0+b0*b0);return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), find principal argument in degrees.`:`For \\(z=${a0}+${b0}i\\), find modulus.`,ans,v?`\\(\\arg z=\\tan^{-1}(b/a)=${nfmt(ans)}^\\circ\\).`:`\\(|z|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.hypot(a0,b0)**2:Math.hypot(a0,b0);return qNum(CC,title,v?`Find \\(|z|^2\\) for \\(z=${a0}+${b0}i\\).`:`Find \\(|z|\\) for \\(z=${a0}+${b0}i\\).`,ans,v?`\\(|z|^2=a^2+b^2=${nfmt(ans)}\\).`:`\\(|z|=\\sqrt{a^2+b^2}=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.hypot(a0,b0):Math.atan2(b0,a0);return qNum(CC,title,v?`Find modulus of \\(${a0}+${b0}i\\).`:`Find principal argument of \\(${a0}+${b0}i\\) in radians.`,ans,v?`\\(|z|=${nfmt(ans)}\\).`:`\\(\\arg z=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=v?2*a0:2*b0;return qNum(CC,title,v?`For \\(f(z)=z^2\\), find real part of derivative at \\(z=${a0}+${b0}i\\).`:`For \\(f(z)=z^2\\), find imaginary part of derivative at \\(z=${a0}+${b0}i\\).`,ans,v?`\\(f'(z)=2z\\); real part \\(=2a=${ans}\\).`:`\\(f'(z)=2z\\); imaginary part \\(=2b=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const r=ri(1,5),ans=v?Math.PI*r*r:2*Math.PI*r;return qNum(CC,title,v?`A contour is a circle of radius \\(${r}\\). Find its enclosed area.`:`A contour is a circle of radius \\(${r}\\). Find its circumference.`,ans,v?`\\(A=\\pi r^2=${nfmt(ans)}\\).`:`\\(C=2\\pi r=${nfmt(ans)}\\).`)
  }
}
function makeComplexcalcExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,5),b0=ri(1,5),ans=v?Math.sqrt(a0*a0+b0*b0):a0*a0+b0*b0;return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), find modulus.`:`For \\(z=${a0}+${b0}i\\), find squared modulus.`,ans,v?`\\(|z|=${nfmt(ans)}\\).`:`\\(|z|^2=${ans}\\).`)
  }
}
function makeComplexcalcExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const a0=ri(1,4),b0=ri(1,4),ans=v?a0*b0:(a0*a0-b0*b0)/2;return qNum(CC,title,v?`For \\(z=${a0}+${b0}i\\), find imaginary part of \\(z^2/2\\).`:`For \\(z=${a0}+${b0}i\\), find real part of \\(z^2/2\\).`,ans,v?`Imaginary part of \\(z^2/2\\) is \\(ab=${ans}\\).`:`Real part is \\((a^2-b^2)/2=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const COMPLEXCALC_SUP_NAMES = ["Real part of a complex derivative", "Imaginary part of a complex derivative", "Complex modulus", "Complex argument", "Exponential magnitude", "Cauchy–Riemann check", "Derivative of a cubic", "Straight-path contour integral", "Conjugate product", "Residue at a simple pole"];

const COMPLEXCALC_EXTRA_NAMES = ["Complex product real part", "Complex product imaginary part", "Complex modulus", "Principal complex argument", "Complex-exponential magnitude", "Cauchy–Riemann condition", "Derivative of z squared", "Straight-path contour integral", "Conjugate product", "Simple-pole residue"];

function makeComplexcalcSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${COMPLEXCALC_SUP_NAMES[fam]} · set ${variant}`;
        const ar=ri(1,4),bi=ri(1,4),cr=ri(1,4),di=ri(1,4);
      if(fam===0){const ans=2*ar;return qNum(CC,title,`Let \\(f(z)=z^2\\) and evaluate its derivative at \\(z=${ar}+${bi}i\\). Find \\(\\operatorname{Re} f'(z)\\).`,ans,`\\(f'(z)=2z=2(${ar}+${bi}i)\\), so the real part is \\(${ans}\\).`)}
      if(fam===1){const ans=2*bi;return qNum(CC,title,`Let \\(f(z)=z^2\\) and \\(z=${ar}+${bi}i\\). Find \\(\\operatorname{Im} f'(z)\\).`,ans,`\\(f'(z)=2z=2(${ar}+${bi}i)\\), so the imaginary part is \\(${ans}\\).`)}
      if(fam===2){const ans=Math.sqrt(ar*ar+bi*bi);return qNum(CC,title,`Find the modulus \\(|z|\\) for \\(z=${ar}+${bi}i\\).`,ans,`\\(|z|=\\sqrt{${ar}^2+${bi}^2}=${nfmt(ans)}\\).`)}
      if(fam===3){const ans=Math.atan2(bi,ar);return qNum(CC,title,`Find the principal argument of \\(z=${ar}+${bi}i\\) in radians.`,ans,`\\(\\arg z=\\tan^{-1}(${bi}/${ar})=${nfmt(ans)}\\) radians.`)}
      if(fam===4){const ans=Math.exp(-ar);return qNum(CC,title,`For \\(z=-${ar}+${bi}i\\), find \\(|e^z|\\).`,ans,`\\(|e^{x+iy}|=e^x\\), so \\(|e^z|=e^{-${ar}}=${nfmt(ans)}\\).`)}
      if(fam===5){const ans=0;return qNum(CC,title,`For \\(u(x,y)=x^2-y^2\\) and \\(v(x,y)=2xy\\), evaluate \\(u_x-v_y\\) at \\((x,y)=(${ar},${bi})\\).`,ans,`\\(u_x=2x\\) and \\(v_y=2x\\), therefore \\(u_x-v_y=0\\).`)}
      if(fam===6){const ans=3*(ar*ar-bi*bi);return qNum(CC,title,`For \\(f(z)=z^3\\), let \\(z=${ar}+${bi}i\\). Find \\(\\operatorname{Re} f'(z)\\).`,ans,`\\(f'(z)=3z^2\\) and \\(\\operatorname{Re}(z^2)=x^2-y^2\\), giving \\(3(${ar}^2-${bi}^2)=${ans}\\).`)}
      if(fam===7){const ans=ar*bi;return qNum(CC,title,`Evaluate the imaginary part of \\(\int_0^{${ar}+${bi}i} z\,dz\\) along a straight path.`,ans,`An antiderivative is \\(z^2/2\\). Its imaginary part at \\(${ar}+${bi}i\\) is \\(ab=${ar}\\cdot${bi}=${ans}\\).`)}
      if(fam===8){const ans=ar*ar+bi*bi;return qNum(CC,title,`For \\(z=${ar}+${bi}i\\), evaluate \\(z\\overline z\\).`,ans,`\\(z\\overline z=|z|^2=${ar}^2+${bi}^2=${ans}\\).`)}
      const ans=cr;return qNum(CC,title,`For \\(f(z)=\\frac{${cr}}{z-${ar}}\\), find the residue at its simple pole \\(z=${ar}\\).`,ans,`The coefficient of \\(1/(z-${ar})\\) is \\(${cr}\\), so the residue is \\(${cr}\\).`);
}


function makeComplexcalcExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${COMPLEXCALC_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let ar=a,bi=b,cr=k,di=x,ans=ar*cr-bi*di;return qNum(CC,title,`For \\(z_1=${ar}+${bi}i\\) and \\(z_2=${cr}+${di}i\\), find \\(\\operatorname{Re}(z_1z_2)\\).`,ans,`\\(\\operatorname{Re}(z_1z_2)=ac-bd=${ar}(${cr})-${bi}(${di})=${ans}\\).`)}
      if(fam===1){let ar=a,bi=b,cr=k,di=x,ans=ar*di+bi*cr;return qNum(CC,title,`For \\(z_1=${ar}+${bi}i\\), \\(z_2=${cr}+${di}i\\), find \\(\\operatorname{Im}(z_1z_2)\\).`,ans,`\\(\\operatorname{Im}(z_1z_2)=ad+bc=${ar}(${di})+${bi}(${cr})=${ans}\\).`)}
      if(fam===2){let ar=a,bi=b,ans=Math.hypot(ar,bi);return qNum(CC,title,`Find modulus of \\(z=${ar}+${bi}i\\).`,ans,`\\(|z|=\\sqrt{${ar}^2+${bi}^2}=${nfmt(ans)}\\).`)}
      if(fam===3){let ar=a,bi=b,ans=Math.atan2(bi,ar);return qNum(CC,title,`Find principal argument of \\(z=${ar}+${bi}i\\) in radians.`,ans,`\\(\\arg z=\\tan^{-1}(${bi}/${ar})=${nfmt(ans)}\\) rad.`)}
      if(fam===4){let ar=a,ans=Math.exp(ar);return qNum(CC,title,`For \\(z=${ar}+${b}i\\), find \\(|e^z|\\).`,ans,`\\(|e^{x+iy}|=e^x\\), hence \\(|e^z|=e^{${ar}}=${nfmt(ans)}\\).`)}
      if(fam===5)return equationQ(CC,title,'For an analytic function \\(f(z)=u(x,y)+iv(x,y)\\), which Cauchy–Riemann equation is required?','u_x=v_y',['u_x=-v_y','u_y=v_x','u_x+v_y=1'],'The Cauchy–Riemann equations are \\(u_x=v_y\\) and \\(u_y=-v_x\\).')
      if(fam===6){let ar=a;return qNum(CC,title,`If \\(f(z)=z^2\\) and \\(z=${ar}+${b}i\\), find \\(\\operatorname{Re}f'(z)\\).`,2*ar,`\\(f'(z)=2z\\), so its real part is \\(2(${ar})=${2*ar}\\).`)}
      if(fam===7){let ar=a,bi=b;return qNum(CC,title,`Evaluate the imaginary part of \\(\\int_0^{${ar}+${bi}i}z\\,dz\\) along a straight path.`,ar*bi,`An antiderivative is \\(z^2/2\\); its imaginary part at \\(a+bi\\) is \\(ab=${ar}(${bi})=${ar*bi}\\).`)}
      if(fam===8){let ar=a,bi=b;return qNum(CC,title,`For \\(z=${ar}+${bi}i\\), evaluate \\(z\\overline z\\).`,ar*ar+bi*bi,`\\(z\\overline z=|z|^2=${ar}^2+${bi}^2=${ar*ar+bi*bi}\\).`)}
      let c=ri(1,8),pole=ri(1,5);return qNum(CC,title,`Find the residue of \\(f(z)=${c}/(z-${pole})\\) at its simple pole \\(z=${pole}\\).`,c,`The coefficient of \\(1/(z-${pole})\\) is the residue, so it equals \\(${c}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.complexcalc = [...numericSeedEntries(CC, COMPLEXCALC_SUP_NAMES, 'Core', 'supplement-seed', makeComplexcalcSupplement),
    ...numericSeedEntries(CC, COMPLEXCALC_EXTRA_NAMES, 'Applied', 'applied-seed', makeComplexcalcExtraSeed, 11),
    numericEntry('complexcalc',"Real part of a complex product · family 01 (randomized variant)","complexcalc-family-01",()=>makeComplexcalcExpansionFamily01("Real part of a complex product · family 01 (randomized variant)")),
    numericEntry('complexcalc',"Complex quotient component · family 02 (randomized variant)","complexcalc-family-02",()=>makeComplexcalcExpansionFamily02("Complex quotient component · family 02 (randomized variant)")),
    numericEntry('complexcalc',"Complex modulus and argument · family 03 (randomized variant)","complexcalc-family-03",()=>makeComplexcalcExpansionFamily03("Complex modulus and argument · family 03 (randomized variant)")),
    numericEntry('complexcalc',"Modulus of complex roots · family 04 (randomized variant)","complexcalc-family-04",()=>makeComplexcalcExpansionFamily04("Modulus of complex roots · family 04 (randomized variant)")),
    numericEntry('complexcalc',"Polar-form magnitude · family 05 (randomized variant)","complexcalc-family-05",()=>makeComplexcalcExpansionFamily05("Polar-form magnitude · family 05 (randomized variant)")),
    numericEntry('complexcalc',"Cauchy–Riemann conditions · family 06 (randomized variant)","complexcalc-family-06",()=>makeComplexcalcExpansionFamily06("Cauchy–Riemann conditions · family 06 (randomized variant)")),
    numericEntry('complexcalc',"Complex power derivative · family 07 (randomized variant)","complexcalc-family-07",()=>makeComplexcalcExpansionFamily07("Complex power derivative · family 07 (randomized variant)")),
    numericEntry('complexcalc',"Straight-path contour integral · family 08 (randomized variant)","complexcalc-family-08",()=>makeComplexcalcExpansionFamily08("Straight-path contour integral · family 08 (randomized variant)")),
    numericEntry('complexcalc',"Conjugate product · family 09 (randomized variant)","complexcalc-family-09",()=>makeComplexcalcExpansionFamily09("Conjugate product · family 09 (randomized variant)")),
    numericEntry('complexcalc',"Residue at a simple pole · family 10 (randomized variant)","complexcalc-family-10",()=>makeComplexcalcExpansionFamily10("Residue at a simple pole · family 10 (randomized variant)")),
    numericEntry('complexcalc',"Complex exponential magnitude · family 11 (randomized variant)","complexcalc-family-11",()=>makeComplexcalcExpansionFamily11("Complex exponential magnitude · family 11 (randomized variant)")),
    numericEntry('complexcalc',"Real and imaginary components · family 12 (randomized variant)","complexcalc-family-12",()=>makeComplexcalcExpansionFamily12("Real and imaginary components · family 12 (randomized variant)")),
    numericEntry('complexcalc',"Complex derivative component · family 13 (randomized variant)","complexcalc-family-13",()=>makeComplexcalcExpansionFamily13("Complex derivative component · family 13 (randomized variant)")),
    numericEntry('complexcalc',"Argument of a quotient · family 14 (randomized variant)","complexcalc-family-14",()=>makeComplexcalcExpansionFamily14("Argument of a quotient · family 14 (randomized variant)")),
    numericEntry('complexcalc',"Squared modulus · family 15 (randomized variant)","complexcalc-family-15",()=>makeComplexcalcExpansionFamily15("Squared modulus · family 15 (randomized variant)")),
    numericEntry('complexcalc',"Argument in radians · family 16 (randomized variant)","complexcalc-family-16",()=>makeComplexcalcExpansionFamily16("Argument in radians · family 16 (randomized variant)")),
    numericEntry('complexcalc',"Holomorphic function derivative · family 17 (randomized variant)","complexcalc-family-17",()=>makeComplexcalcExpansionFamily17("Holomorphic function derivative · family 17 (randomized variant)")),
    numericEntry('complexcalc',"Complex number powers · family 18 (randomized variant)","complexcalc-family-18",()=>makeComplexcalcExpansionFamily18("Complex number powers · family 18 (randomized variant)")),
    numericEntry('complexcalc',"Real part of z squared · family 19 (randomized variant)","complexcalc-family-19",()=>makeComplexcalcExpansionFamily19("Real part of z squared · family 19 (randomized variant)")),
    numericEntry('complexcalc',"Imaginary part of z squared · family 20 (randomized variant)","complexcalc-family-20",()=>makeComplexcalcExpansionFamily20("Imaginary part of z squared · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(CC,'Real part of a complex reciprocal','complex-reciprocal-real-part',()=>{
  const a=ri(1,7),b=ri(-5,5),ans=a/(a*a+b*b);
  return qNum(CC,'Real part of a complex reciprocal',`For \(z=${a}${b<0?'':'+'}${b}i\), find \(\\operatorname{Re}(1/z)\).`,ans,`\(1/z=\\frac{a-bi}{a^2+b^2}\), so \(\\operatorname{Re}(1/z)=a/(a^2+b^2)=${a}/(${a*a+b*b})=${nfmt(ans)}\).`)
});
appendNumericRecipe(CC,'Real part of a complex product','complex-product-real-part',()=>{
  const a=ri(-5,5),b=ri(-5,5),c=ri(-5,5),d=ri(-5,5),ans=a*c-b*d;
  return qNum(CC,'Real part of a complex product',`For \(z_1=${a}${b<0?'':'+'}${b}i\) and \(z_2=${c}${d<0?'':'+'}${d}i\), find \(\\operatorname{Re}(z_1z_2)\).`,ans,`\((a+bi)(c+di)=(ac-bd)+i(ad+bc)\). Hence the real part is \(${a}(${c})-(${b})(${d})=${ans}\).`)
});
appendNumericRecipe(CC,'Modulus of a complex quotient','complex-quotient-modulus',()=>{
  let a=ri(-5,5),b=ri(-5,5);if(a===0&&b===0)a=2;const c=ri(1,5),d=ri(1,5),ans=Math.hypot(a,b)/Math.hypot(c,d);
  return qNum(CC,'Modulus of a complex quotient',`For \(z_1=${a}${b<0?'':'+'}${b}i\) and \(z_2=${c}+${d}i\), find \(|z_1/z_2|\).`,ans,`\(|z_1/z_2|=|z_1|/|z_2|=\\sqrt{${a*a+b*b}}/\\sqrt{${c*c+d*d}}=${nfmt(ans)}\).`)
});
appendNumericRecipe(CC,'Principal argument of a complex exponential','complex-exponential-principal-argument',()=>{
  const a=ri(-3,3),theta=rand(-2.5,2.5),ans=theta;
  return qNum(CC,'Principal argument of a complex exponential',`For \(z=e^{${a}+i(${nfmt(theta)})}\), find the principal argument \(\\operatorname{Arg}(z)\) in radians.`,ans,`\(e^{a+i\\theta}=e^a(\\cos\\theta+i\\sin\\theta)\). Since \(-\\pi<${nfmt(theta)}<\\pi\), the principal argument is \(${nfmt(ans)}\,rad\).`)
});
appendNumericRecipe(CC,'Real part of a complex quotient','complex-quotient-real-part',()=>{
  let a=ri(-5,5),b=ri(-5,5);if(a===0&&b===0)a=1;const c=ri(1,5),d=ri(1,5),ans=(a*c+b*d)/(c*c+d*d);
  return qNum(CC,'Real part of a complex quotient',`For \(z_1=${a}${b<0?'':'+'}${b}i\) and \(z_2=${c}+${d}i\), find \(\\operatorname{Re}(z_1/z_2)\).`,ans,`Multiply numerator and denominator by the conjugate of \(z_2\): the real part is \((ac+bd)/(c^2+d^2)=(${a}(${c})+(${b})(${d}))/(${c*c+d*d})=${nfmt(ans)}\).`)
});
appendNumericRecipe(CC,'Residue at a double pole','complex-residue-double-pole',()=>{
  const a=ri(1,7),b=ri(-4,8),c=ri(-3,4),ans=a;
  return qNum(CC,'Residue at a double pole',`For \(f(z)=\\frac{${a}z+(${b})}{(z-${c})^2}\), find the residue at its double pole \(z=${c}\).`,ans,`For a double pole, \(\\operatorname{Res}_{z=c}f=\\left.\\frac{d}{dz}[(z-c)^2f(z)]\\right|_{z=c}\). Here the derivative of \(${a}z+(${b})\) is \(${a}\), so the residue is \(${ans}\).`)
});
appendNumericRecipe(CC,'Magnitude of a residue at an imaginary pole','complex-residue-magnitude-imaginary-pole',()=>{
  const ans=.5;
  return qNum(CC,'Magnitude of a residue at an imaginary pole',`For \(f(z)=1/(z^2+1)\), find \(|\\operatorname{Res}_{z=i}f(z)|\).`,ans,`The pole at \(z=i\) is simple, so \(\\operatorname{Res}_{z=i}f=1/(2i)=-i/2\). Its magnitude is \(1/2=${nfmt(ans)}\).`)
});
appendNumericRecipe(CC,'Partial derivative of the imaginary component','complex-imaginary-component-partial',()=>{
  const k=ri(1,5),x=ri(1,5),y=ri(1,5),ans=k*y;
  return qNum(CC,'Partial derivative of the imaginary component',`Let the imaginary component be \(v(x,y)=${k}xy\). Evaluate \(\\partial v/\\partial x\) at \((x,y)=(${x},${y})\).`,ans,`\(v_x=${k}y\). At \(y=${y}\), \(v_x=${k}(${y})=${ans}\).`)
});
appendNumericRecipe(CC,'Principal argument of a complex quotient','complex-quotient-principal-argument',()=>{
  let a=ri(-5,5),b=ri(-5,5);if(a===0&&b===0)a=1;const c=ri(1,5),d=ri(1,5),re=a*c+b*d,im=b*c-a*d,ans=Math.atan2(im,re);
  return qNum(CC,'Principal argument of a complex quotient',`For \(z_1=${a}${b<0?'':'+'}${b}i\) and \(z_2=${c}+${d}i\), find the principal argument of \(z_1/z_2\) in radians.`,ans,`The quotient has real numerator component \(ac+bd=${re}\) and imaginary numerator component \(bc-ad=${im}\), over the positive denominator \(c^2+d^2\). Thus \(\\operatorname{Arg}(z_1/z_2)=\\operatorname{atan2}(${im},${re})=${nfmt(ans)}\,rad\).`)
});
appendNumericRecipe(CC,'Principal argument of a complex number','complex-number-principal-argument',()=>{
  let a=ri(-5,5),b=ri(-5,5);if(a===0&&b===0)b=1;const ans=Math.atan2(b,a);
  return qNum(CC,'Principal argument of a complex number',`For \(z=${a}${b<0?'':'+'}${b}i\), find its principal argument \(\\operatorname{Arg}(z)\) in radians.`,ans,`Use \(\\operatorname{Arg}(a+bi)=\\operatorname{atan2}(b,a)\), so the principal argument is \(${nfmt(ans)}\,rad\).`)
});
appendNumericRecipe(CC,'Field scenario · Real current component from AC impedance','scenario-complex-ac-current-real',()=>{
  const R=ri(3,8)*10,X=ri(2,6)*10,Vrms=pick([24,48,120]),ans=Vrms*R/(R*R+X*X);
  const q=qNum(CC,'Field scenario · Real current component from AC impedance',`An AC measurement gives RMS source phasor \(\tilde V=${Vrms}\angle0^\circ\,V\) and load impedance \(Z=${R}+j${X}\,\Omega\). With \(\tilde I=\tilde V/Z\), find the real component of current in amperes.`,ans,`\(\frac{1}{R+jX}=\frac{R-jX}{R^2+X^2}\), so \(\Re\{\tilde I\}=V_{rms}R/(R^2+X^2)=${Vrms}(${R})/(${R}^2+${X}^2)=${nfmt(ans)}\,A\).`);
  q.diagramKind='phasor';q.diagramAlt='Complex impedance is represented on the complex plane with resistance on the real axis and positive reactance on the imaginary axis.';return q;
});
appendNumericRecipe(CC,'Applied · Imaginary component of a complex channel product','scenario-complex-channel-product',()=>{
  const a=ri(1,7),b=ri(1,6),c=ri(1,8),d=ri(1,5),ans=a*d+b*c;
  return qNum(CC,'Applied · Imaginary component of a complex channel product',`A communications equalizer multiplies phasors \(z=(${a}+j${b})\) and \(w=(${c}+j${d})\). Find \(\Im\{zw\}\).`,ans,`\(zw=ac-bd+j(ad+bc)\). Therefore \(\Im\{zw\}=ad+bc=${a}(${d})+${b}(${c})=${ans}\).`);
});
