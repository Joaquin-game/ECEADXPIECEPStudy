/* Shared topic IDs and category-neutral numerical helpers used by topic registries. */
const L = 'laplace';
const Z = 'ztrans';
const FT = 'fourier';
const CV = 'convolution';
const C = 'controls';
const S = 'signals';
const CC = 'complexcalc';
const D = 'ode';
const V = 'vector';
const CAL = 'calculus';
const RR = 'related';
const SR = 'relativity';
const A = 'advanced';
const E = 'em';
const N = 'econ';
const T = 'data';
const G = 'geas';
const EC = 'electronics';
const PC = 'precalc';
const PB = 'probability';

function equationQ(category,title,prompt,correctLatex,wrongLatex,explanation){
  const opts=[{latex:correctLatex,correct:true},...wrongLatex.map(latex=>({latex,correct:false}))].map((o,i)=>({value:i+1,correct:o.correct,label:`\\(${o.latex}\\)`}));
  return makeQ(category,title,prompt,1,explanation,'number',{equationBased:true,preferredMode:'mc',equationOptions:opts,answerLatex:`\\(${correctLatex}\\)`});
}
function combination(n,r){r=Math.min(r,n-r);let out=1;for(let i=1;i<=r;i++)out=out*(n-r+i)/i;return out;}
function attachDiagram(q,kind,alt){q.diagramKind=kind;q.diagramAlt=alt;return q;}
function factorial(n){let x=1;for(let i=2;i<=n;i++)x*=i;return x;}
