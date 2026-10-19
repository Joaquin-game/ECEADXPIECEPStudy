/* Built-in linked seed/dependent question recipes and the 570 pair-variant catalog. */

/* ===== Cross-category linked-question engine =====
   A seed creates a numeric result; the dependent generator declares x_prev and uses the selected prior answer. */
function makeSeedQuestion(category,variant=1){
  const base=ri(2,9);
  const x=variant===1?base:variant===2?base+2:2*base;
  switch(category){
    case L:return qNum(L,'Laplace linked seed',`For \\(f(t)=2(${x})e^{-t}\\), find \\(F(1)=\\mathcal L\\{f(t)\\}|_{s=1}\\).`,x,`\\(F(s)=2(${x})/(s+1)\\), so \\(F(1)=${x}\\).`);
    case Z:return qNum(Z,'Z-transform linked seed',`For \\(x[n]=${x}\\delta[n]\\), find \\(X(3)=\\mathcal Z\\{x[n]\\}|_{z=3}\\).`,x,`The Z-transform of \\(\\delta[n]\\) is 1, so \\(X(3)=${x}\\).`);
    case FT:return qNum(FT,'Fourier linked seed',`For \\(x(t)=${x}e^{-2|t|}\\), find \\(X(0)\\).`,x,`\\(X(0)=\\int_{-\\infty}^{\\infty}${x}e^{-2|t|}dt=${x}\\cdot(2/2)=${x}\\).`);
    case CV:return qNum(CV,'Convolution linked seed',`Let \\(a[n]=[${x},1]\\), \\(b[n]=[1,2]\\), starting at index 0. Find \\(y[0]\\) for \\(y=a*b\\).`,x,`\\(y[0]=a[0]b[0]=${x}\\cdot1=${x}\\).`);
    case C:return qNum(C,'Control-system linked seed',`A first-order system has \\(G(s)=${x}/(0.5s+1)\\). Find its DC gain \\(G(0)\\).`,x,`Set \\(s=0\\); the DC gain is \\(${x}\\).`);
    case S:return qNum(S,'Signal linked seed',`A sinusoid has peak amplitude \\(A=\\sqrt2(${x})\\,V\\). Find its RMS amplitude.`,x,`\\(A_{rms}=A/\\sqrt2=${x}\\,V\\).`);
    case CC:return qNum(CC,'Complex-calculus linked seed',`For \\(f(z)=z^2\\) at \\(z=${x}+i\\), find \\(\\operatorname{Re}f'(z)\\).`,2*x,`\\(f'(z)=2z\\), whose real part is \\(2(${x})=${2*x}\\).`);
    case D:return qNum(D,'Differential-equation linked seed',`A natural response is \\(y(t)=${x}e^{-t}\\). Find \\(y(0)\\).`,x,`\\(y(0)=${x}e^0=${x}\\).`);
    case V:return qNum(V,'Vector-calculus linked seed',`For \\(F=\\langle${x}x,0,0\\rangle\\), find \\(\\nabla\\cdot F\\).`,x,`\\(\\nabla\\cdot F=\\partial(${x}x)/\\partial x=${x}\\).`);
    case CAL:return qNum(CAL,'Calculus linked seed',`For \\(f(t)=${x}t\\), find \\(f'(1)\\).`,x,`\\(f'(t)=${x}\\), so \\(f'(1)=${x}\\).`);
    case RR:return qNum(RR,'Related-rates linked seed',`A circle has radius \\(r=1\\,m\\). If its area changes at \\(dA/dt=2\\pi(${x})\\,m^2/s\\), find \\(dr/dt\\).`,x,`\\(dA/dt=2\\pi r(dr/dt)\\), so at \\(r=1\\), \\(dr/dt=${x}\\,m/s\\).`);
    case SR:return qNum(SR,'Relativity linked seed',`A particle has rest mass \\(m_0=0.8(${x})\\,kg\\) and moves at \\(v=0.6c\\). Find \\(E/c^2\\).`,x,`At \\(v=0.6c\\), \\(\\gamma=1.25\\). Therefore \\(E/c^2=\\gamma m_0=1.25(0.8${x})=${x}\\,kg\\).`);
    case A:return qNum(A,'Advanced-math linked seed',`Find \\(\\det\\begin{pmatrix}${x}&0\\\\0&1\\end{pmatrix}\\).`,x,`The diagonal determinant is \\(${x}\\cdot1=${x}\\).`);
    case E:return qNum(E,'Electromagnetism linked seed',`A charge of \\(${x}\\,nC\\) is \\(9\\,m\\) away. Using \\(k_e=9\\times10^9\\), find potential in volts.`,x,`\\(V=k_eq/r=9(${x})/9=${x}\\,V\\).`);
    case N:return qNum(N,'Engineering-economics linked seed',`A future payment is \\(F=\\text{\\$}${nfmt(100*x)}(1.10)\\) due in one year at 10%. Find the original principal in hundreds of dollars.`,x,`\\(P=F/1.10=100(${x})\\), or \\(${x}\\) hundreds of dollars.`);
    case T:return qNum(T,'Data-analysis linked seed',`Find the mean of \\([${x-1},${x},${x+1}]\\).`,x,`The values are symmetric around \\(${x}\\), so their mean is \\(${x}\\).`);
    case G:return qNum(G,'GEAS linked seed',`A force of \\(F=${x}\\,N\\) moves a block by \\(2\\,m\\). Find work.`,2*x,`\\(W=Fd=${x}(2)=${2*x}\\,J\\)`);
    case EC:return qNum(EC,'Circuit linked seed',`A source is \\(V=${4*x}\\,V\\) across a \\(4\\,\\Omega\\) resistor. Find current.`,x,`\\(I=V/R=${4*x}/4=${x}\\,A\\)`);
    case PC:return qNum(PC,'Pre-calculus linked seed',`Solve \\(3u=3(${x})\\) for \\(u\\).`,x,`Divide both sides by 3 to obtain \\(u=${x}\\).`);
    case PB:return qNum(PB,'Probability linked seed',`Of 10 equally likely outcomes, \\(${x}\\) are favorable. Find the event probability.`,x/10,`\\(P(A)=${x}/10=${nfmt(x/10)}\\)`);
    default:throw Error('Unsupported category for linked seed: '+category);
  }
}
function makeDependentQuestion(category,prev,variant=1){
  const x=Number(prev);if(!Number.isFinite(x))throw Error('A linked question needs a numeric previous answer.');
  const declaration='Let \\(x_{\\mathrm{prev}}\\) denote the numerical answer you obtained in Linked Step 1.';
  switch(category){
    case L:{const ans=x/5;return qNum(L,'Linked Laplace evaluation',`${declaration} For \\(f(t)=x_{\\mathrm{prev}}e^{-2t}\\), evaluate \\(F(3)=\\mathcal L\\{f(t)\\}|_{s=3}\\).`,ans,`\\(F(s)=x_{\\mathrm{prev}}/(s+2)\\). With \\(x_{\\mathrm{prev}}=${nfmt(x)}\\), \\(F(3)=${nfmt(x)}/5=${nfmt(ans)}\\).`)}
    case Z:{const ans=x*2/(2-.5);return qNum(Z,'Linked Z-transform evaluation',`${declaration} For \\(x[n]=x_{\\mathrm{prev}}(1/2)^n u[n]\\), evaluate \\(X(2)\\).`,ans,`\\(X(z)=x_{\\mathrm{prev}}z/(z-1/2)\\), so \\(X(2)=2x_{\\mathrm{prev}}/(3/2)=4x_{\\mathrm{prev}}/3=${nfmt(ans)}\\).`)}
    case FT:{const ans=4*x/5;return qNum(FT,'Linked Fourier-transform evaluation',`${declaration} For \\(x(t)=x_{\\mathrm{prev}}e^{-2|t|}\\), evaluate \\(X(1)\\).`,ans,`\\(X(\\omega)=2a x_{\\mathrm{prev}}/(a^2+\\omega^2)\\). With \\(a=2,\\omega=1\\), \\(X(1)=4x_{\\mathrm{prev}}/5=${nfmt(ans)}\\).`)}
    case CV:{const ans=2*x+1;return qNum(CV,'Linked discrete convolution',`${declaration} Let \\(a[n]=[x_{\\mathrm{prev}},1]\\) and \\(b[n]=[1,2]\\), both indexed from 0. Find \\(y[1]\\) for \\(y=a*b\\).`,ans,`\\(y[1]=a[0]b[1]+a[1]b[0]=2x_{\\mathrm{prev}}+1=2(${nfmt(x)})+1=${ans}\\).`)}
    case C:{const ans=x/(1+.5*x);return qNum(C,'Linked closed-loop gain',`${declaration} Use \\(x_{\\mathrm{prev}}\\) as the forward gain in a negative-feedback loop with \\(H=0.5\\). Find \\(K_{cl}=x_{\\mathrm{prev}}/(1+0.5x_{\\mathrm{prev}})\\).`,ans,`Substitute \\(x_{\\mathrm{prev}}=${nfmt(x)}\\): \\(K_{cl}=${nfmt(x)}/(1+0.5(${nfmt(x)}))=${nfmt(ans)}\\).`)}
    case S:{const ans=x/Math.sqrt(2);return qNum(S,'Linked signal RMS value',`${declaration} A sinusoid has peak amplitude \\(x_{\\mathrm{prev}}\\,V\\). Find its RMS amplitude.`,ans,`\\(V_{rms}=x_{\\mathrm{prev}}/\\sqrt2=${nfmt(ans)}\\,V\\).`)}
    case CC:{const ans=2*x;return qNum(CC,'Linked complex derivative',`${declaration} For \\(f(z)=z^2\\) at \\(z=x_{\\mathrm{prev}}+3i\\), find \\(\\operatorname{Re}f'(z)\\).`,ans,`\\(f'(z)=2z\\), so the real part is \\(2x_{\\mathrm{prev}}=2(${nfmt(x)})=${nfmt(ans)}\\).`)}
    case D:{return qNum(D,'Linked differential-equation slope',`${declaration} A function satisfies \\(y'+2y=x_{\\mathrm{prev}}\\) and \\(y(0)=0\\). Find \\(y'(0)\\).`,x,`At \\(t=0\\), \\(y'(0)=x_{\\mathrm{prev}}-2y(0)=x_{\\mathrm{prev}}=${nfmt(x)}\\).`)}
    case V:{const ans=x+1;return qNum(V,'Linked vector divergence',`${declaration} Find divergence of \\(F=\\langle x_{\\mathrm{prev}}x,2y,-z\\rangle\\).`,ans,`\\(\\nabla\\cdot F=x_{\\mathrm{prev}}+2-1=x_{\\mathrm{prev}}+1=${nfmt(ans)}\\).`)}
    case CAL:{const ans=x/2;return qNum(CAL,'Linked definite integral',`${declaration} Evaluate \\(\\int_0^1 x_{\\mathrm{prev}}t\\,dt\\).`,ans,`\\(\\int_0^1 x_{\\mathrm{prev}}t\\,dt=x_{\\mathrm{prev}}[t^2/2]_0^1=x_{\\mathrm{prev}}/2=${nfmt(ans)}\\).`)}
    case RR:{const ans=4*Math.PI*x;return qNum(RR,'Linked related rate',`${declaration} A circle has radius \\(r=2\\,m\\) and \\(dr/dt=x_{\\mathrm{prev}}\\,m/s\\). Find \\(dA/dt\\).`,ans,`\\(dA/dt=2\\pi r(dr/dt)=2\\pi(2)x_{\\mathrm{prev}}=4\\pi(${nfmt(x)})=${nfmt(ans)}\\,m^2/s\\).`)}
    case SR:{const ans=1.25*x;return qNum(SR,'Linked relativistic energy',`${declaration} A particle has rest mass \\(m_0=x_{\\mathrm{prev}}\\,kg\\) and speed \\(v=0.6c\\). Find \\(E/c^2\\).`,ans,`At \\(v=0.6c\\), \\(\\gamma=1.25\\), so \\(E/c^2=\\gamma m_0=1.25x_{\\mathrm{prev}}=${nfmt(ans)}\\,kg\\).`)}
    case A:{const ans=3*x-2;return qNum(A,'Linked matrix determinant',`${declaration} Find \\(\\det\\begin{pmatrix}x_{\\mathrm{prev}}&1\\\\2&3\\end{pmatrix}\\).`,ans,`\\(\\det=3x_{\\mathrm{prev}}-2=3(${nfmt(x)})-2=${nfmt(ans)}\\).`)}
    case E:{const ans=9*x/4;return qNum(E,'Linked electric field',`${declaration} A point charge is \\(q=x_{\\mathrm{prev}}\\,nC\\). Find field magnitude at \\(r=2\\,m\\), using \\(k_e=9\\times10^9\\).`,ans,`\\(E=k_eq/r^2=9x_{\\mathrm{prev}}/4=9(${nfmt(x)})/4=${nfmt(ans)}\\,N/C\\).`)}
    case N:{const ans=100*x*(1.05**2);return qNum(N,'Linked future worth',`${declaration} A principal is \\(P=\\text{\\$}100x_{\\mathrm{prev}}\\). At 5% annual compound interest, find future worth after two years.`,ans,`\\(F=P(1.05)^2=\\text{\\$}${nfmt(100*x)}(1.1025)=${moneyToken(ans)}\\).`,'currency')}
    case T:{const ans=x+2;return qNum(T,'Linked data mean',`${declaration} Find the arithmetic mean of \\([x_{\\mathrm{prev}},x_{\\mathrm{prev}}+2,x_{\\mathrm{prev}}+4]\\).`,ans,`\\(\\bar x=(3x_{\\mathrm{prev}}+6)/3=x_{\\mathrm{prev}}+2=${nfmt(ans)}\\).`)}
    case G:{const ans=3*x;return qNum(G,'Linked GEAS work',`${declaration} A constant force of \\(3\\,N\\) moves a block through distance \\(x_{\\mathrm{prev}}\\,m\\). Find work.`,ans,`\\(W=Fd=3x_{\\mathrm{prev}}=3(${nfmt(x)})=${nfmt(ans)}\\,J\\)`)}
    case EC:{const ans=x/4;return qNum(EC,'Linked circuit current',`${declaration} A circuit has source voltage \\(x_{\\mathrm{prev}}\\,V\\) and resistance \\(4\\,\\Omega\\). Find current.`,ans,`\\(I=V/R=x_{\\mathrm{prev}}/4=${nfmt(ans)}\\,A\\)`)}
    case PC:{const ans=(x-2)/3;return qNum(PC,'Linked pre-calculus equation',`${declaration} Solve \\(3u+2=x_{\\mathrm{prev}}\\) for \\(u\\).`,ans,`\\(u=(x_{\\mathrm{prev}}-2)/3=(${nfmt(x)}-2)/3=${nfmt(ans)}\\)`)}
    case PB:{const ans=x/10;return qNum(PB,'Linked empirical probability',`${declaration} In 10 trials, an event occurs \\(x_{\\mathrm{prev}}\\) times. Find its empirical probability.`,ans,`\\(\\hat p=x_{\\mathrm{prev}}/10=${nfmt(ans)}\\)`)}
    default:throw Error('Unsupported linked category: '+category);
  }
}
function moneyToken(n){const v=Number(n);return `${v<0?'-':''}\\text{\\$}${grouped(Math.abs(v)).replace(/,/g,'{,}')}`}
const PAIR_GENERATORS=[];
for(let i=0;i<CATS.length;i++)for(let j=i+1;j<CATS.length;j++)for(let v=1;v<=3;v++)PAIR_GENERATORS.push({id:`pair-${CATS[i].id}-${CATS[j].id}-v${v}`,categories:[CATS[i].id,CATS[j].id],variant:v,title:`${CATS[i].short} → ${CATS[j].short} · Variant ${v}`,difficulty:v+1});
function markLinked(module,title){const linkId=`link-${quizNumber++}-${Math.random().toString(36).slice(2,7)}`;module.forEach((q,i)=>{q.linkGroup=linkId;q.linkStep=i+1;q.linkTotal=module.length;q.linkTitle=title;});return module}
