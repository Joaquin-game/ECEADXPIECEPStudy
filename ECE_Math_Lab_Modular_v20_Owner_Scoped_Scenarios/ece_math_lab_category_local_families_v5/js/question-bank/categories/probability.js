/* probability: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_PROBABILITY = 'probability';
const PB = NAMESPACE_PROBABILITY;
function makeProbabilityExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const n=ri(5,14),r=ri(2,Math.min(5,n-1)),ans=v?factorial(n)/(factorial(n-r)):combination(n,r);return qNum(PB,title,v?`How many ordered arrangements of \\(${r}\\) objects can be selected from \\(${n}\\) distinct objects?`:`How many combinations of \\(${r}\\) objects can be selected from \\(${n}\\) distinct objects?`,ans,v?`\\(P(n,r)=n!/(n-r)!=${ans}\\).`:`\\(\\binom nr=${ans}\\).`)
  }
}
function makeProbabilityExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const n=ri(4,12),p=pick([.2,.3,.4,.6,.7]),k=ri(1,n-1),prob=combination(n,k)*p**k*(1-p)**(n-k),ans=v?1-(1-p)**n:prob;return qNum(PB,title,v?`For \\(X\\sim Binomial(n=${n},p=${p})\\), find \\(P(X\\ge1)\\).`:`For \\(X\\sim Binomial(n=${n},p=${p})\\), find \\(P(X=${k})\\).`,ans,v?`\\(P(X\\ge1)=1-P(X=0)=1-(1-p)^n=${nfmt(ans)}\\).`:`\\(P(X=k)=\\binom nkp^k(1-p)^{n-k}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const n=ri(2,12),p=pick([.1,.2,.3,.4,.5]),ans=v?n*p*(1-p):n*p;return qNum(PB,title,v?`A binomial variable has \\(n=${n}\\), \\(p=${p}\\). Find its variance.`:`A binomial variable has \\(n=${n}\\), \\(p=${p}\\). Find expected value.`,ans,v?`\\(Var(X)=np(1-p)=${nfmt(ans)}\\).`:`\\(E[X]=np=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily04(title){
  const v=ri(0,1)===1;
  const p=pick([.1,.2,.25,.4,.5,.6]),q=pick([.1,.2,.3,.4,.5,.7]);
  const odds=p/(1-p);
  const answer=v?p*q:p;
  const prompt=v
    ? `Two independent events have probabilities \\(P(A)=${p}\\) and \\(P(B)=${q}\\). Find the probability that both occur.`
    : `An event has odds in favor \\(O=${nfmt(odds)}:1\\). Find its probability.`;
  const explanation=v
    ? `Independence gives \\(P(A\\cap B)=P(A)P(B)=${nfmt(answer)}\\).`
    : `Convert odds to probability: \\(P=O/(1+O)=${nfmt(odds)}/(1+${nfmt(odds)})=${nfmt(answer)}\\).`;
  return qNum(PB,title,prompt,answer,explanation,'number',{quantUnit:''});
}
function makeProbabilityExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const P=pick([.2,.3,.4,.5,.6]),sens=pick([.7,.8,.9,.95]),spec=pick([.75,.85,.9,.95]),ans=v?sens*P/(sens*P+(1-spec)*(1-P)):P*sens+(1-P)*(1-spec);return qNum(PB,title,v?`A screening test has prevalence \\(${P}\\), sensitivity \\(${sens}\\), specificity \\(${spec}\\). Find probability disease is present given a positive result.`:`A screening test has prevalence \\(P(D)=${P}\\), sensitivity \\(Se=${sens}\\), and specificity \\(Sp=${spec}\\). Find probability of a positive result.`,ans,v?`Bayes' theorem gives \\(P(D|+) = Se\\,P(D)/[SeP(D)+(1-Sp)P(\\neg D)] = ${nfmt(ans)}\\).`:`\\(P(+)=SeP(D)+(1-Sp)P(\\neg D)=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.2,.25,.3,.4,.5]),k=ri(2,7),ans=v?1/p:(1-p)**(k-1)*p;return qNum(PB,title,v?`A geometric random variable counts trials until first success, with success probability \\(p=${p}\\). Find expected trials.`:`A geometric random variable counts trials until the first success, with per-trial success probability \\(p=${p}\\). Find probability the first success is on trial \\(${k}\\).`,ans,v?`\\(E[X]=1/p=${nfmt(ans)}\\).`:`\\(P(X=k)=(1-p)^{k-1}p=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const N0=ri(12,30),K=ri(3,Math.min(10,N0-2)),n=ri(2,Math.min(5,K)),k=ri(1,n),ans=v?combination(K,k)*combination(N0-K,n-k)/combination(N0,n):combination(N0,n);return qNum(PB,title,v?`A batch of \\(${N0}\\) items contains \\(${K}\\) defective. A sample of \\(${n}\\) is drawn without replacement. Find probability exactly \\(${k}\\) are defective.`:`How many samples of size \\(${n}\\) can be selected from \\(${N0}\\) items without regard to order?`,ans,v?`Hypergeometric probability is \\(\\binom Kk\\binom{N-K}{n-k}/\\binom Nn=${nfmt(ans)}\\).`:`\\(\\binom Nn=${ans}\\) possible samples.`)
  }
}
function makeProbabilityExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const lam=ri(1,8),k=ri(0,5),prob=Math.exp(-lam)*lam**k/factorial(k),ans=v?lam:prob;return qNum(PB,title,v?`A Poisson model has rate \\(\\lambda=${lam}\\). Find expected count.`:`A Poisson model has rate \\(\\lambda=${lam}\\). Find probability of exactly \\(${k}\\) events.`,ans,v?`\\(E[X]=\\lambda=${ans}\\).`:`\\(P(X=k)=e^{-\\lambda}\\lambda^k/k!=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const a=ri(2,9),b=ri(2,9),ans=v?a/(a+b):a*b;return qNum(PB,title,v?`A bag contains \\(${a}\\) red and \\(${b}\\) blue tokens. Find probability a randomly drawn token is red.`:`There are \\(${a}\\) choices for one component and \\(${b}\\) for another. Find number of combined outcomes.`,ans,v?`\\(P(R)=a/(a+b)=${nfmt(ans)}\\).`:`Product rule gives \\(${a}\\cdot${b}=${ans}\\) outcomes.`)
  }
}
function makeProbabilityExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.1,.2,.3,.4,.5]),n=ri(5,30),ans=v?Math.sqrt(n*p*(1-p)):n*p;return qNum(PB,title,v?`For \\(Binomial(n=${n},p=${p})\\), find standard deviation.`:`For \\(Binomial(n=${n},p=${p})\\), find expected number of successes.`,ans,v?`\\(\\sigma=\\sqrt{np(1-p)}=${nfmt(ans)}\\).`:`\\(E[X]=np=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const n=ri(4,10),p=pick([.2,.3,.4,.6,.7]),ans=v?combination(n,2)*p*p*(1-p)**(n-2):n*p;return qNum(PB,title,v?`For \\(X\\sim Binomial(n=${n},p=${p})\\), find \\(P(X=2)\\).`:`A binomial variable has \\(n=${n}\\) trials and success probability \\(p=${p}\\). Find its expected number of successes.`,ans,v?`\\(P(X=2)=\\binom n2p^2(1-p)^{n-2}=${nfmt(ans)}\\).`:`\\(E[X]=np=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const pa=pick([.1,.2,.3,.4]),pb=pick([.1,.2,.3,.4]),ans=v?1-(1-pa)*(1-pb):pa*pb;return qNum(PB,title,v?`Independent events have probabilities \\(${pa}\\) and \\(${pb}\\). Find probability at least one occurs.`:`For independent events with probabilities \\(${pa}\\) and \\(${pb}\\), find probability both occur.`,ans,v?`\\(1-(1-p_A)(1-p_B)=${nfmt(ans)}\\).`:`\\(p_Ap_B=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.1,.2,.3,.4]),q=pick([.2,.3,.4,.5]),ans=v?p+q:Math.max(0,p+q-1);return qNum(PB,title,v?`Two mutually exclusive events have probabilities \\(${p}\\) and \\(${q}\\). Find probability either occurs.`:`Two events have marginal probabilities \\(${p}\\) and \\(${q}\\), and intersection probability is zero. Find lower Fréchet bound for their intersection.`,ans,v?`For disjoint events \\(P(A\\cup B)=p+q=${nfmt(ans)}\\).`:`Since their intersection is zero here, the actual intersection equals 0.`)
  }
}
function makeProbabilityExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const n=ri(2,12),k=ri(1,n),ans=v?1/combination(n,k):combination(n,k);return qNum(PB,title,v?`Choose \\(${k}\\) objects from \\(${n}\\) uniformly among all subsets. Find probability of one specified subset.`:`Find number of subsets of size \\(${k}\\) from \\(${n}\\) objects.`,ans,v?`All \\(\\binom nk\\) subsets are equally likely, so probability is \\(1/\\binom nk=${nfmt(ans)}\\).`:`\\(\\binom nk=${ans}\\).`)
  }
}
function makeProbabilityExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const n=ri(3,12),p=pick([.2,.3,.4,.5,.6]),k=ri(1,n),ans=v?Math.pow(1-p,k-1)*p:Math.pow(1-p,k);return qNum(PB,title,v?`A geometric process succeeds with probability \\(${p}\\) per trial. Find probability first success is on trial \\(${k}\\).`:`A geometric process succeeds independently with probability \\(p=${p}\\) per trial. Find probability of no success in the first \\(${k}\\) trials.`,ans,v?`\\(P(X=k)=(1-p)^{k-1}p=${nfmt(ans)}\\).`:`\\(P(X>k)=(1-p)^k=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.1,.2,.3,.4,.5]),n=ri(3,9),ans=v?n*p*(1-p):Math.sqrt(n*p*(1-p));return qNum(PB,title,v?`For a binomial variable with \\(n=${n}, p=${p}\\), find variance.`:`For a binomial variable with \\(n=${n},p=${p}\\), find standard deviation.`,ans,v?`\\(Var(X)=np(1-p)=${nfmt(ans)}\\).`:`\\(\\sigma=\\sqrt{np(1-p)}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const n=ri(4,10),k=ri(1,n-1),ans=v?combination(n,k):factorial(n);return qNum(PB,title,v?`How many ways to choose \\(${k}\\) of \\(${n}\\) objects?`:`How many permutations of \\(${n}\\) distinct objects are there?`,ans,v?`\\(\\binom nk=${ans}\\).`:`\\(n!=${ans}\\).`)
  }
}
function makeProbabilityExpansionFamily18(title){
  const v=ri(0,1)===1;
  const p=pick([.1,.2,.3,.4,.5]),n=ri(2,10);
  const answer=v?1-Math.pow(1-p,n):Math.pow(1-p,n);
  const prompt=v
    ? `Each of \\(${n}\\) independent trials succeeds with probability \\(p=${p}\\). Find the probability of at least one success.`
    : `Each of \\(${n}\\) independent trials succeeds with probability \\(p=${p}\\). Find the probability of zero successes.`;
  const explanation=v
    ? `Use the complement: \\(P(X\\ge1)=1-(1-p)^n=${nfmt(answer)}\\).`
    : `All trials must fail: \\(P(X=0)=(1-p)^n=${nfmt(answer)}\\).`;
  return qNum(PB,title,prompt,answer,explanation,'number',{quantUnit:''});
}
function makeProbabilityExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const total=ri(8,20),red=ri(2,total-2),draw=ri(2,Math.min(5,total-1)),ans=v?red/total:draw/total;return qNum(PB,title,v?`An urn has \\(${red}\\) red tokens among \\(${total}\\) total. Find probability of red on one draw.`:`A uniformly random position among \\(${total}\\) equally likely positions is selected. Find probability it lies in a specified set of \\(${draw}\\) positions.`,ans,v?`\\(P(red)=${red}/${total}=${nfmt(ans)}\\).`:`\\(P=${draw}/${total}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.1,.2,.3,.4,.5]),win=ri(5,30),lose=ri(2,10),ans=v?p*win-(1-p)*lose:p*win;return qNum(PB,title,v?`A game pays \\(${win}\\) points on success and loses \\(${lose}\\) points otherwise. Success probability is \\(${p}\\). Find expected net score.`:`A game pays \\(${win}\\) points on success and loses \\(${lose}\\) points otherwise; success probability is \\(p=${p}\\). Find the expected winnings component before losses.`,ans,v?`\\(E[X]=pW-(1-p)L=${nfmt(ans)}\\).`:`\\(pW=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily21(title){
  const v=ri(0,1)===1;
  {
      const n=ri(2,8),m=ri(2,8),ans=v?factorial(n+m)/(factorial(n)*factorial(m)):n*m;return qNum(PB,title,v?`A sequence contains \\(${n}\\) identical A symbols and \\(${m}\\) identical B symbols. How many distinct orderings?`:`There are \\(${n}\\) choices for first stage and \\(${m}\\) for second stage. Count outcomes.`,ans,v?`\\((n+m)!/(n!m!)=${ans}\\).`:`Product rule: \\(${n}(${m})=${ans}\\).`)
  }
}
function makeProbabilityExpansionFamily22(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.15,.25,.35,.45,.55]),n=ri(8,30),ans=v?Math.sqrt(n*p*(1-p)):n*p*(1-p);return qNum(PB,title,v?`For a Bernoulli-sum model with \\(n=${n},p=${p}\\), find standard deviation.`:`A binomial variable has \\(n=${n}\\) trials and success probability \\(p=${p}\\). Find its variance.`,ans,v?`\\(\\sigma=\\sqrt{np(1-p)}=${nfmt(ans)}\\).`:`\\(Var(X)=np(1-p)=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily23(title){
  const v=ri(0,1)===1;
  {
      const p=pick([.1,.2,.3,.4,.5]),q=pick([.2,.3,.4,.5]),ans=v?1-p*q:p*q;return qNum(PB,title,v?`Independent events have probabilities \\(${p}\\) and \\(${q}\\). Find probability that they do not both occur.`:`Independent events have probabilities \\(${p}\\) and \\(${q}\\). Find joint probability.`,ans,v?`\\(P((A\\cap B)^c)=1-P(A)P(B)=${nfmt(ans)}\\).`:`\\(P(A\\cap B)=pq=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily24(title){
  const v=ri(0,1)===1;
  {
      const n=ri(5,15),k=ri(1,Math.min(n,6)),ans=v?combination(n,k):combination(n,k)/2**n;return qNum(PB,title,v?`Find \\(\\binom{${n}}{${k}}\\).`:`A fair coin is tossed \\(${n}\\) times. Find probability of exactly \\(${k}\\) heads.`,ans,v?`\\(\\binom nk=${ans}\\).`:`\\(P(X=k)=\\binom nk/2^n=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityExpansionFamily25(title){
  const v=ri(0,1)===1;
  {
      const a=ri(2,8),b=ri(2,8),ans=v?a/(a+b):b/(a+b);return qNum(PB,title,v?`A box has \\(${a}\\) red and \\(${b}\\) blue equally likely tokens. Find probability of red.`:`A box contains \\(${a}\\) red and \\(${b}\\) blue equally likely tokens. Find probability of drawing a blue token.`,ans,v?`\\(P(R)=a/(a+b)=${nfmt(ans)}\\).`:`\\(P(B)=b/(a+b)=${nfmt(ans)}\\).`)
  }
}



/* Additional category-local family variant implementations, adjacent to the main numeric family makers. */


/* Individual family variant implementations; no indexed dispatch remains. */
function makeProbabilityFamily26VariantA(title){
  const variant=1;
  {
    const n=ri(5,14),r=ri(2,n-2),ans=combination(n,r);
    return qNum(PB,title,`How many ways can a committee of \\(${r}\\) people be chosen from \\(${n}\\) candidates?`,ans,`\\(\\binom{n}{r}=n!/[r!(n-r)!]=\\binom{${n}}{${r}}=${ans}\\).`)
  }
}
function makeProbabilityFamily27VariantA(title){
  const variant=1;
  {
    const n=ri(5,11),r=ri(2,n-2),ans=factorial(n)/factorial(n-r);
    return qNum(PB,title,`How many ordered arrangements of \\(${r}\\) distinct objects can be selected from \\(${n}\\) objects?`,ans,`\\({}_nP_r=n!/(n-r)!=${n}!/(${n}-${r})!=${ans}\\).`)
  }
}
function makeProbabilityFamily28VariantA(title){
  const variant=1;
  {
    const n=ri(3,8),p0=pick([.25,.4,.5,.6,.75]),k=ri(0,n),ans=combination(n,k)*p0**k*(1-p0)**(n-k);
    return qNum(PB,title,`For \\(X\\sim\\operatorname{Binomial}(n=${n},p=${p0})\\), find \\(P(X=${k})\\).`,ans,`\\(P(X=k)=\\binom{n}{k}p^k(1-p)^{n-k}=\\binom{${n}}{${k}}(${p0})^{${k}}(${1-p0})^{${n-k}}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily29VariantA(title){
  const variant=1;
  {
    const p0=pick([.1,.2,.25,.4,.5]),n=ri(2,10),ans=1-(1-p0)**n;
    return qNum(PB,title,`An independent event occurs with probability \\(p=${p0}\\) on each of \\(${n}\\) trials. Find the probability it occurs at least once.`,ans,`Use the complement: \\(P(\\text{at least one})=1-(1-p)^n=1-(1-${p0})^{${n}}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily30VariantA(title){
  const variant=1;
  {
    const sides=ri(4,15),ans=(sides+1)/2;
    return qNum(PB,title,`A fair die has faces numbered \\(1\\) through \\(${sides}\\). Find the expected value of one roll.`,ans,`For a discrete uniform variable on \\(1,\\ldots,n\\), \\(E[X]=(n+1)/2=(${sides}+1)/2=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily31VariantA(title){
  const variant=1;
  {
    const a0=ri(8,25),b0=ri(8,25),both=ri(2,Math.min(a0,b0)),ans=both/b0;
    return qNum(PB,title,`In a survey, \\(${b0}\\) respondents meet condition B, and \\(${both}\\) meet both A and B. Find \\(P(A\\mid B)\\).`,ans,`\\(P(A\\mid B)=P(A\\cap B)/P(B)=${both}/${b0}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily32VariantA(title){
  const variant=1;
  {
    const prevalence=pick([.01,.02,.05,.1]),sensitivity=pick([.85,.9,.95,.98]),specificity=pick([.85,.9,.95,.99]),ans=sensitivity*prevalence/(sensitivity*prevalence+(1-specificity)*(1-prevalence));
    return qNum(PB,title,`A screening test has prevalence \\(${prevalence}\\), sensitivity \\(${sensitivity}\\), and specificity \\(${specificity}\\). Find \\(P(\\text{condition}\\mid\\text{positive})\\).`,ans,`Bayes' theorem gives \\(\\frac{Se\\,Prev}{Se\\,Prev+(1-Sp)(1-Prev)}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily33VariantA(title){
  const variant=1;
  {
    const p0=pick([.1,.2,.25,.4,.5]),ans=1/p0;
    return qNum(PB,title,`A geometric random variable counts trials until the first success, with success probability \\(p=${p0}\\). Find the expected number of trials.`,ans,`\\(E[X]=1/p=1/${p0}=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily34VariantA(title){
  const variant=1;
  {
    const favorable=ri(1,9),unfavorable=ri(1,12),ans=favorable/(favorable+unfavorable);
    return qNum(PB,title,`An event has odds \\(${favorable}\\) to \\(${unfavorable}\\) in favor. Convert the odds to probability.`,ans,`\\(P=\\frac{\\text{favorable}}{\\text{favorable}+\\text{unfavorable}}=${favorable}/(${favorable}+${unfavorable})=${nfmt(ans)}\\).`)
  }
}
function makeProbabilityFamily35VariantA(title){
  const variant=1;
  {
    const red=ri(3,10),blue=ri(3,10),ans=combination(red,2)/combination(red+blue,2);
    return qNum(PB,title,`A bag has \\(${red}\\) red and \\(${blue}\\) blue tokens. Two are drawn without replacement. Find the probability both are red.`,ans,`\\(P=\\binom{${red}}{2}/\\binom{${red+blue}}{2}=${nfmt(ans)}\\).`);
  }
}


/* Numbered family makers choose between two complete category-local question recipes. */
/* Family 21: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily26(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily26VariantA(title):makeProbabilityExpansionFamily01(title);q.title=title;return q;}
/* Family 22: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily27(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily27VariantA(title):makeProbabilityExpansionFamily02(title);q.title=title;return q;}
/* Family 23: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily28(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily28VariantA(title):makeProbabilityExpansionFamily03(title);q.title=title;return q;}
/* Family 24: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily29(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily29VariantA(title):makeProbabilityExpansionFamily04(title);q.title=title;return q;}
/* Family 25: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily30(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily30VariantA(title):makeProbabilityExpansionFamily05(title);q.title=title;return q;}
/* Family 26: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily31(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily31VariantA(title):makeProbabilityExpansionFamily06(title);q.title=title;return q;}
/* Family 27: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily32(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily32VariantA(title):makeProbabilityExpansionFamily07(title);q.title=title;return q;}
/* Family 28: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily33(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily33VariantA(title):makeProbabilityExpansionFamily08(title);q.title=title;return q;}
/* Family 29: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily34(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily34VariantA(title):makeProbabilityExpansionFamily09(title);q.title=title;return q;}
/* Family 30: a named seed recipe and its paired randomized expansion variant. */
function makeProbabilityFamily35(title){const useSeed=ri(0,1)===1;const q=useSeed?makeProbabilityFamily35VariantA(title):makeProbabilityExpansionFamily10(title);q.title=title;return q;}

NUMERIC_GENERATOR_REGISTRY.probability = [numericEntry('probability',"Combinations · family 26 (randomized variant)","probability-family-26",()=>makeProbabilityFamily26("Combinations · family 26 (randomized variant)")),
    numericEntry('probability',"Permutations · family 27 (randomized variant)","probability-family-27",()=>makeProbabilityFamily27("Permutations · family 27 (randomized variant)")),
    numericEntry('probability',"Binomial exact probability · family 28 (randomized variant)","probability-family-28",()=>makeProbabilityFamily28("Binomial exact probability · family 28 (randomized variant)")),
    numericEntry('probability',"Complement probability · family 29 (randomized variant)","probability-family-29",()=>makeProbabilityFamily29("Complement probability · family 29 (randomized variant)")),
    numericEntry('probability',"Expected value · family 30 (randomized variant)","probability-family-30",()=>makeProbabilityFamily30("Expected value · family 30 (randomized variant)")),
    numericEntry('probability',"Conditional probability · family 31 (randomized variant)","probability-family-31",()=>makeProbabilityFamily31("Conditional probability · family 31 (randomized variant)")),
    numericEntry('probability',"Bayes probability · family 32 (randomized variant)","probability-family-32",()=>makeProbabilityFamily32("Bayes probability · family 32 (randomized variant)")),
    numericEntry('probability',"Geometric distribution · family 33 (randomized variant)","probability-family-33",()=>makeProbabilityFamily33("Geometric distribution · family 33 (randomized variant)")),
    numericEntry('probability',"Odds probability · family 34 (randomized variant)","probability-family-34",()=>makeProbabilityFamily34("Odds probability · family 34 (randomized variant)")),
    numericEntry('probability',"Hypergeometric probability · family 35 (randomized variant)","probability-family-35",()=>makeProbabilityFamily35("Hypergeometric probability · family 35 (randomized variant)")),
    numericEntry('probability',"Combination count · family 01 (randomized variant)","probability-family-01",()=>makeProbabilityExpansionFamily01("Combination count · family 01 (randomized variant)")),
    numericEntry('probability',"Permutation count · family 02 (randomized variant)","probability-family-02",()=>makeProbabilityExpansionFamily02("Permutation count · family 02 (randomized variant)")),
    numericEntry('probability',"Binomial probability · family 03 (randomized variant)","probability-family-03",()=>makeProbabilityExpansionFamily03("Binomial probability · family 03 (randomized variant)")),
    numericEntry('probability',"Complement probability · family 04 (randomized variant)","probability-family-04",()=>makeProbabilityExpansionFamily04("Complement probability · family 04 (randomized variant)")),
    numericEntry('probability',"Expected value · family 05 (randomized variant)","probability-family-05",()=>makeProbabilityExpansionFamily05("Expected value · family 05 (randomized variant)")),
    numericEntry('probability',"Conditional probability · family 06 (randomized variant)","probability-family-06",()=>makeProbabilityExpansionFamily06("Conditional probability · family 06 (randomized variant)")),
    numericEntry('probability',"Bayes theorem · family 07 (randomized variant)","probability-family-07",()=>makeProbabilityExpansionFamily07("Bayes theorem · family 07 (randomized variant)")),
    numericEntry('probability',"Geometric distribution · family 08 (randomized variant)","probability-family-08",()=>makeProbabilityExpansionFamily08("Geometric distribution · family 08 (randomized variant)")),
    numericEntry('probability',"Odds to probability · family 09 (randomized variant)","probability-family-09",()=>makeProbabilityExpansionFamily09("Odds to probability · family 09 (randomized variant)")),
    numericEntry('probability',"Hypergeometric sampling · family 10 (randomized variant)","probability-family-10",()=>makeProbabilityExpansionFamily10("Hypergeometric sampling · family 10 (randomized variant)")),
    numericEntry('probability',"Independent events union · family 11 (randomized variant)","probability-family-11",()=>makeProbabilityExpansionFamily11("Independent events union · family 11 (randomized variant)")),
    numericEntry('probability',"Mutually exclusive events · family 12 (randomized variant)","probability-family-12",()=>makeProbabilityExpansionFamily12("Mutually exclusive events · family 12 (randomized variant)")),
    numericEntry('probability',"Combination probability · family 13 (randomized variant)","probability-family-13",()=>makeProbabilityExpansionFamily13("Combination probability · family 13 (randomized variant)")),
    numericEntry('probability',"Geometric exact waiting time · family 14 (randomized variant)","probability-family-14",()=>makeProbabilityExpansionFamily14("Geometric exact waiting time · family 14 (randomized variant)")),
    numericEntry('probability',"Binomial variance and standard deviation · family 15 (randomized variant)","probability-family-15",()=>makeProbabilityExpansionFamily15("Binomial variance and standard deviation · family 15 (randomized variant)")),
    numericEntry('probability',"Permutation and combination · family 16 (randomized variant)","probability-family-16",()=>makeProbabilityExpansionFamily16("Permutation and combination · family 16 (randomized variant)")),
    numericEntry('probability',"At-least-one event · family 17 (randomized variant)","probability-family-17",()=>makeProbabilityExpansionFamily17("At-least-one event · family 17 (randomized variant)")),
    numericEntry('probability',"Sampling without replacement · family 18 (randomized variant)","probability-family-18",()=>makeProbabilityExpansionFamily18("Sampling without replacement · family 18 (randomized variant)")),
    numericEntry('probability',"Expected net outcome · family 19 (randomized variant)","probability-family-19",()=>makeProbabilityExpansionFamily19("Expected net outcome · family 19 (randomized variant)")),
    numericEntry('probability',"Multiset arrangements · family 20 (randomized variant)","probability-family-20",()=>makeProbabilityExpansionFamily20("Multiset arrangements · family 20 (randomized variant)")),
    numericEntry('probability',"Binomial variance model · family 21 (randomized variant)","probability-family-21",()=>makeProbabilityExpansionFamily21("Binomial variance model · family 21 (randomized variant)")),
    numericEntry('probability',"Complement of joint event · family 22 (randomized variant)","probability-family-22",()=>makeProbabilityExpansionFamily22("Complement of joint event · family 22 (randomized variant)")),
    numericEntry('probability',"Binomial coefficient · family 23 (randomized variant)","probability-family-23",()=>makeProbabilityExpansionFamily23("Binomial coefficient · family 23 (randomized variant)")),
    numericEntry('probability',"Urn color probability · family 24 (randomized variant)","probability-family-24",()=>makeProbabilityExpansionFamily24("Urn color probability · family 24 (randomized variant)")),
    numericEntry('probability',"Two-stage outcome count · family 25 (randomized variant)","probability-family-25",()=>makeProbabilityExpansionFamily25("Two-stage outcome count · family 25 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(PB,'Expected successes in sampling without replacement','probability-hypergeometric-expectation',()=>{
  const N0=ri(12,30),K=ri(2,N0-2),n=ri(2,Math.min(8,N0-1)),ans=n*K/N0;
  return qNum(PB,'Expected successes in sampling without replacement',`A lot has \\(N=${N0}\\) items, of which \\(K=${K}\\) are defective. A sample of \\(n=${n}\\) is drawn without replacement. Find the expected number of defectives.`,ans,`For a hypergeometric random variable, \\(E[X]=nK/N=${n}(${K})/${N0}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(PB,'Field scenario · Expected defective modules in a batch','scenario-probability-expected-defects',()=>{
  const n=ri(20,80),p=pick([.01,.02,.03,.05,.08]),ans=n*p;
  return qNum(PB,'Field scenario · Expected defective modules in a batch',`A production line ships batches of \\(${n}\\) modules. The historical defective probability per module is \\(p=${p}\\), independently. Find the expected number of defective modules in one batch.`,ans,`For a binomial count, \\(E[X]=np=${n}(${p})=${nfmt(ans)}\\) defective modules.`);
});
appendNumericRecipe(PB,'Applied · Bayes rule for a fault alarm','scenario-probability-bayes-fault-alarm',()=>{
  const prevalence=pick([.01,.02,.04]),sensitivity=pick([.9,.95,.98]),falsePositive=pick([.03,.05,.08]),ans=prevalence*sensitivity/(prevalence*sensitivity+(1-prevalence)*falsePositive);
  return qNum(PB,'Applied · Bayes rule for a fault alarm',`A diagnostic alarm monitors an electronic unit. A true fault occurs with probability \\(${prevalence}\\); the alarm detects a true fault with probability \\(${sensitivity}\\), and has false-positive probability \\(${falsePositive}\\) when no fault is present. Given an alarm, find the probability that a true fault exists.`,ans,`By Bayes' rule, \\(P(F\\mid A)=\\frac{P(A\\mid F)P(F)}{P(A\\mid F)P(F)+P(A\\mid F^c)P(F^c)}=\\frac{${sensitivity}(${prevalence})}{${sensitivity}(${prevalence})+${falsePositive}(1-${prevalence})}=${nfmt(ans)}\\).`);
});

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('probability','Additional · Conditional probability from counts','probability-topup-01',()=>{
  const a=ri(10,60),b=ri(5,40),c=ri(5,40),ans=a/(a+b);
  return qNum(PB,'Conditional probability from counts',`In a batch, ${a} items have both properties A and B, while ${b} additional items have A but not B. Given that an item has A, find the probability it also has B.`,ans,`Among the \\(${a+b}\\) items with A, \\(${a}\\) also have B. Thus \\(P(B\\mid A)=${a}/(${a}+${b})=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Expected value of a discrete score','probability-topup-02',()=>{
  const p=pick([.2,.25,.3,.4,.5]),x1=ri(1,5),x2=ri(6,12),ans=p*x1+(1-p)*x2;
  return qNum(PB,'Expected value of a discrete score',`A score is \\(${x1}\\) with probability \\(${nfmt(p)}\\) and \\(${x2}\\) otherwise. Find its expected value.`,ans,`\\(E[X]=${x1}(${nfmt(p)})+${x2}(1-${nfmt(p)})=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Zero-success probability in a binomial model','probability-topup-03',()=>{
  const n=ri(4,18),p=pick([.1,.2,.25,.3,.4,.5]),ans=(1-p)**n;
  return qNum(PB,'Zero-success probability in a binomial model',`For \\(X\\sim Binomial(n=${n},p=${nfmt(p)})\\), find \\(P(X=0)\\).`,ans,`\\(P(X=0)=\\binom n0p^0(1-p)^n=(1-${nfmt(p)})^{${n}}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · At least one event in independent trials','probability-topup-04',()=>{
  const n=ri(3,15),p=pick([.1,.15,.2,.25,.3,.4]),ans=1-(1-p)**n;
  return qNum(PB,'At least one event in independent trials',`An event occurs independently with probability \\(${nfmt(p)}\\) on each of \\(${n}\\) trials. Find the probability it occurs at least once.`,ans,`Use the complement: \\(P(\\ge1)=1-(1-p)^n=1-(1-${nfmt(p)})^{${n}}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Standard normal z-score','probability-topup-05',()=>{
  const x=rand(60,120),mu=rand(65,100),sd=rand(5,18),ans=(x-mu)/sd;
  return qNum(PB,'Standard normal z-score',`A measurement \\(x=${nfmt(x)}\\) comes from a distribution with mean \\(\\mu=${nfmt(mu)}\\) and standard deviation \\(\\sigma=${nfmt(sd)}\\). Find its z-score.`,ans,`\\(z=(x-\\mu)/\\sigma=(${nfmt(x)}-${nfmt(mu)})/${nfmt(sd)}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Hypergeometric probability of one selected defect','probability-topup-06',()=>{
  const N=ri(12,30),K=ri(2,Math.floor(N/2)),n=ri(2,Math.min(5,N-1)),k=1;
  const comb=(a,b)=>{if(b<0||b>a)return 0;b=Math.min(b,a-b);let out=1;for(let i=1;i<=b;i++)out=out*(a-b+i)/i;return out};
  const ans=comb(K,k)*comb(N-K,n-k)/comb(N,n);
  return qNum(PB,'Hypergeometric probability of one selected defect',`A lot has \\(${N}\\) items including \\(${K}\\) defective. A sample of \\(${n}\\) is taken without replacement. Find the probability of exactly one defective item.`,ans,`\\(P(X=1)=\\binom K1\\binom{N-K}{n-1}/\\binom Nn=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Poisson probability of no arrivals','probability-topup-07',()=>{
  const lambda=rand(.5,8),ans=Math.exp(-lambda);
  return qNum(PB,'Poisson probability of no arrivals',`Arrivals follow a Poisson model with mean \\(\\lambda=${nfmt(lambda)}\\) per interval. Find the probability of zero arrivals.`,ans,`\\(P(X=0)=e^{-\\lambda}\\lambda^0/0!=e^{-${nfmt(lambda)}}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Variance of a binomial count','probability-topup-08',()=>{
  const n=ri(5,40),p=pick([.1,.2,.3,.4,.5,.6]),ans=n*p*(1-p);
  return qNum(PB,'Variance of a binomial count',`For \\(X\\sim Binomial(n=${n},p=${nfmt(p)})\\), find \\(Var(X)\\).`,ans,`\\(Var(X)=np(1-p)=${n}(${nfmt(p)})(1-${nfmt(p)})=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Probability from odds in favor','probability-topup-09',()=>{
  const odds=ri(1,12),ans=odds/(odds+1);
  return qNum(PB,'Probability from odds in favor',`The odds in favor of an event are \\(${odds}:1\\). Find the event probability.`,ans,`Odds \\(a:b\\) correspond to probability \\(a/(a+b)\\). Therefore \\(P=${odds}/(${odds}+1)=${nfmt(ans)}\\).`);
});
appendNumericRecipe('probability','Additional · Standard deviation of a sample mean','probability-topup-10',()=>{
  const sigma=rand(2,15),n=ri(4,100),ans=sigma/Math.sqrt(n);
  return qNum(PB,'Standard deviation of a sample mean',`A population has standard deviation \\(\\sigma=${nfmt(sigma)}\\). For independent sample size \\(n=${n}\\), find the standard deviation of the sample mean.`,ans,`\\(\\sigma_{\\bar X}=\\sigma/\\sqrt n=${nfmt(sigma)}/\\sqrt{${n}}=${nfmt(ans)}\\).`);
});

/* Category-owned tree generators. Prompts, data dictionaries, SVGs and formula logic live here. */
function makeProbabilityScenarioSetup(){const k=ri(2,8),N=10,n=20;return {category:NAMESPACE_PROBABILITY,title:'Environmental incident sampling plan',prompt:String.raw`A quality-control screen has \(N=${N}\) equally likely instrument outcomes, of which \(k=${k}\) represent a flagged condition. For a follow-up simulation, trials are independent and performed with replacement for \(n=${n}\) checks. Use this same event definition throughout the probability review.`,transferData:{N: N,k: k,n: n},illustrations:[{type:'svg',svg:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 95"><g stroke="currentColor" stroke-width="1.2">${Array.from({length:10},(_,i)=>`<circle cx="27+${i%5}*0" cy="0" r="0" fill="none"/>`).join('')}</g><g>${Array.from({length:10},(_,i)=>`<circle cx="38+${(i%5)*42}" cy="${28+Math.floor(i/5)*37}" r="10" fill="${i<k?'#2d83c5':'none'}" stroke="currentColor" stroke-width="1.2"/>`).join('')}</g><text x="270" y="55" fill="currentColor" font-size="11">${k} flagged</text></svg>`,alt:`Ten equally likely outcomes are depicted; ${k} filled markers denote flagged outcomes.`}],custom:false};}
function makeProbabilityScenarioA(dto={}){const d=dto?.['probability-screen-root-v18']||{};const k=Number(d.k),N=Number(d.N),ans=k/N;const q=qNum(PB,'Probability of a flagged outcome',String.raw`Calculate the probability \(p\) that one randomly selected outcome is flagged.`,ans,String.raw`\(p=k/N=${k}/${N}=${nfmt(ans)}\).`);q.transferData={p: ans};return q;}
function makeProbabilityScenarioB(dto={}){const d=dto?.['probability-screen-root-v18']||{};const p=Number(dto?.['probability-screen-a-v18']?.p??(Number(d.k)/Number(d.N))),n=Number(d.n),ans=n*p;const q=qNum(PB,'Expected flagged outcomes in the simulation',String.raw`Find the expected number \(\mu\) of flagged outcomes in the full simulation.`,ans,String.raw`\(\mu=np=${n}(${nfmt(p)})=${nfmt(ans)}\) flagged outcomes.`);q.transferData={mu: ans};return q;}
function makeProbabilityScenarioBA(dto={}){const dt=dto||{};const mu=Number(dt['probability-screen-b-v18']?.mu),p=Number(dt['probability-screen-a-v18']?.p),ans=mu*(1-p);const q=qNum(PB,'Binomial variance',String.raw`Calculate the variance \(\sigma^2\) in the number of flagged outcomes using the expected count and event probability.`,ans,String.raw`\(\sigma^2=np(1-p)=\mu(1-p)=${nfmt(mu)}(1-${nfmt(p)})=${nfmt(ans)}\).`);q.transferData={variance: ans};return q;}
function makeProbabilityScenarioBB(dto={}){const dt=dto||{};const p=Number(dt['probability-screen-a-v18']?.p),n=Number(dt['probability-screen-root-v18']?.n),ans=(1-p)**n;const q=qNum(PB,'Probability of no flagged outcomes',String.raw`Find the probability that none of the \(n\) independent checks is flagged.`,ans,String.raw`\(P(X=0)=(1-p)^n=(1-${nfmt(p)})^{${n}}=${nfmt(ans)}\).`);q.transferData={noFlagsProbability: ans};return q;}
function registerProbabilityScenarioTree(){
  const rootKey='probability-screen-root-v18',aKey='probability-screen-a-v18',bKey='probability-screen-b-v18',baKey='probability-screen-ba-v18',bbKey='probability-screen-bb-v18';
  setupRecipe(NAMESPACE_PROBABILITY,'Probability · Quality-control sampling tree',rootKey,makeProbabilityScenarioSetup,3,{treeChildrenRecipeKeys:[aKey]});
  appendNumericRecipe(NAMESPACE_PROBABILITY,'Probability · Calculation A',aKey,makeProbabilityScenarioA,3,{parentRecipeKey:rootKey,treeChildrenRecipeKeys:[bKey]});
  appendNumericRecipe(NAMESPACE_PROBABILITY,'Probability · Calculation B',bKey,makeProbabilityScenarioB,3,{parentRecipeKey:aKey,treeChildrenRecipeKeys:[baKey,bbKey]});
  appendNumericRecipe(NAMESPACE_PROBABILITY,'Probability · Follow-up A',baKey,makeProbabilityScenarioBA,3,{parentRecipeKey:bKey});
  appendNumericRecipe(NAMESPACE_PROBABILITY,'Probability · Follow-up B',bbKey,makeProbabilityScenarioBB,3,{parentRecipeKey:bKey});
}
registerProbabilityScenarioTree();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const PROBABILITY_CONCEPT_CARDS = [
    [
      "Sample space",
      "The set of all possible outcomes of a random experiment."
    ],
    [
      "Event",
      "A subset of the sample space."
    ],
    [
      "Complement rule",
      "The probability of the complement of A is 1-P(A)."
    ],
    [
      "Addition rule",
      "P(A union B)=P(A)+P(B)-P(A intersection B)."
    ],
    [
      "Multiplication rule",
      "P(A intersection B)=P(A)P(B given A), when the conditional probability is defined."
    ],
    [
      "Independent events",
      "Events A and B are independent when P(A intersection B)=P(A)P(B)."
    ],
    [
      "Mutually exclusive events",
      "Events that cannot occur together, so their intersection is empty."
    ],
    [
      "Conditional probability",
      "P(A given B)=P(A intersection B)/P(B) when P(B)>0."
    ],
    [
      "Bayes theorem",
      "P(A given B)=P(B given A)P(A)/P(B), where P(B)>0."
    ],
    [
      "Permutation",
      "An ordered selection; the number of arrangements of r distinct items from n is n!/(n-r)!."
    ],
    [
      "Combination",
      "An unordered selection; the number of r-item subsets from n distinct items is n!/(r!(n-r)!)."
    ],
    [
      "Factorial",
      "For a positive integer n, n! is the product from 1 through n, with 0! defined as one."
    ],
    [
      "Binomial experiment",
      "A fixed number of independent trials, each with the same success probability and two outcomes."
    ],
    [
      "Binomial distribution",
      "The distribution of the number of successes in a binomial experiment."
    ],
    [
      "Geometric distribution",
      "A distribution modeling the trial count until the first success in independent trials with constant success probability."
    ],
    [
      "Expected value",
      "The probability-weighted average of a random variable’s possible values when the expectation exists."
    ],
    [
      "Variance of a random variable",
      "The expected squared deviation from its mean."
    ],
    [
      "Standard deviation of a random variable",
      "The square root of its variance."
    ],
    [
      "Discrete random variable",
      "A random variable whose possible values form a finite or countable set."
    ],
    [
      "Continuous random variable",
      "A random variable described by a density over continuous values, so point probabilities are zero under an ordinary continuous distribution."
    ],
    [
      "Probability mass function",
      "A function giving P(X=x) for each value of a discrete random variable."
    ],
    [
      "Probability density function",
      "A nonnegative function whose integral over a set gives the probability that a continuous variable lies in that set."
    ],
    [
      "Cumulative distribution function",
      "F(x)=P(X less than or equal to x)."
    ],
    [
      "Uniform distribution",
      "A distribution assigning equal probability to each outcome in a finite discrete case, or constant density over an interval in a continuous case."
    ],
    [
      "Normal distribution",
      "A continuous distribution parameterized by mean and variance with a symmetric bell-shaped density."
    ],
    [
      "Binomial coefficient",
      "The number n choose r, counting r-element subsets of an n-element set."
    ],
    [
      "Pigeonhole principle",
      "If more objects than boxes are distributed among boxes, at least one box contains at least two objects."
    ],
    [
      "Inclusion-exclusion principle",
      "A counting identity that subtracts overlaps when combining sets, and extends to more sets."
    ],
    [
      "Multiplication principle of counting",
      "If successive choices have m1,m2,... possibilities, the total number of ordered choice sequences is the product of these counts."
    ],
    [
      "Circular permutation",
      "An arrangement around a circle where rotations are treated as equivalent, giving (n-1)! arrangements of n distinct objects."
    ],
    [
      "With replacement sampling",
      "A procedure returning each sampled item before the next draw, so draws can remain independent under a fixed distribution."
    ],
    [
      "Without replacement sampling",
      "A procedure that removes sampled items, changing later probabilities and generally producing dependent draws."
    ],
    [
      "Hypergeometric distribution",
      "A distribution for the number of successes in draws without replacement from a finite population."
    ],
    [
      "Law of total probability",
      "A partition of the sample space allows P(B) to be written as the sum of P(B given A_i)P(A_i)."
    ],
    [
      "Odds",
      "The ratio of event probability to non-event probability, P(A)/(1-P(A))."
    ],
    [
      "Odds ratio",
      "The ratio of two odds, often used to compare event likelihood between groups."
    ],
    [
      "Expected value of a binomial variable",
      "For X binomial with n trials and probability p, E[X]=np."
    ],
    [
      "Variance of a binomial variable",
      "For X binomial with n trials and probability p, Var(X)=np(1-p)."
    ],
    [
      "Markov inequality",
      "For a nonnegative random variable X and a>0, P(X greater than or equal to a) is at most E[X]/a."
    ],
    [
      "Chebyshev inequality",
      "For a variable with finite mean and variance, P(|X-mu| greater than or equal to k sigma) is at most 1/k squared for k>0."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_PROBABILITY, PROBABILITY_CONCEPT_CARDS);
