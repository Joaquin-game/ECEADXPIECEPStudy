/* econ: seed entries, explicit expansion families, and category-specific additions. */

const NAMESPACE_ECON = 'econ';
const N = NAMESPACE_ECON;
function makeEconExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const P=ri(1000,25000),i=rand(.02,.12),n=ri(2,9),ans=v?P/(1+i)**n:P*(1+i)**n;return qNum(N,title,v?`Maya needs ${moneyLatex(P)} in \\(${n}\\) years. At \\(${nfmt(i*100)}\\%\\) annual interest, find required deposit today.`:`Maya deposits ${moneyLatex(P)} at \\(${nfmt(i*100)}\\%\\) annual compound interest. Find its worth in \\(${n}\\) years.`,ans,v?`\\(P=F/(1+i)^n=${moneyToken(ans)}\\).`:`\\(F=P(1+i)^n=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const F=ri(3000,35000),i=rand(.03,.15),n=ri(2,10),ans=v?F/(1+i)**n:F*(1+i)**n;return qNum(N,title,v?`A lab must pay ${moneyLatex(F)} after \\(${n}\\) years. Find present worth at \\(${nfmt(i*100)}\\%\\).`:`A fund worth ${moneyLatex(F)} today grows at \\(${nfmt(i*100)}\\%\\). Find worth after \\(${n}\\) years.`,ans,v?`\\(P=F/(1+i)^n=${moneyToken(ans)}\\).`:`\\(F=P(1+i)^n=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const cost=ri(8000,45000),a=ri(3000,15000),b=ri(2500,14000),rate=rand(.03,.12),ans=v?-cost+a/(1+rate)+b/(1+rate)**2:-cost+a+b;return qNum(N,title,v?`A project costs ${moneyLatex(cost)} and returns ${moneyLatex(a)} in year 1 and ${moneyLatex(b)} in year 2. Find NPV at \\(${nfmt(rate*100)}\\%\\).`:`A project has initial cost ${moneyLatex(cost)} and returns ${moneyLatex(a)} in year 1 and ${moneyLatex(b)} in year 2. Find net benefit without discounting.`,ans,v?`\\(NPV=-C_0+C_1/(1+i)+C_2/(1+i)^2=${moneyToken(ans)}\\).`:`\\(B_{net}=-C_0+C_1+C_2=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const cost=ri(12000,90000),sal=ri(0,Math.floor(cost*.25)),life=ri(3,12),year=ri(1,life),dep=(cost-sal)/life,ans=v?cost-year*dep:dep;return qNum(N,title,v?`A machine costs ${moneyLatex(cost)}, salvage value ${moneyLatex(sal)}, and useful life \\(${life}\\) years. Find book value after \\(${year}\\) years.`:`A machine costs ${moneyLatex(cost)}, has salvage value ${moneyLatex(sal)}, and useful life ${life} years. Find annual straight-line depreciation.`,ans,v?`\\(BV=C-nD=${moneyToken(ans)}\\).`:`\\(D=(C-S)/N=${moneyToken(ans)}\\) per year.`,'currency')
  }
}
function makeEconExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const P=ri(1000,20000),i=rand(.02,.1),n=ri(1,8),ans=v?P*i*n:P*(1+i*n);return qNum(N,title,v?`A student borrows ${moneyLatex(P)} at simple interest \\(${nfmt(i*100)}\\%\\) for \\(${n}\\) years. Find interest charged.`:`A student borrows ${moneyLatex(P)} at simple interest ${nfmt(i*100)}% per year for ${n} years. Find total repayment.`,ans,v?`\\(I=Prt=${moneyToken(ans)}\\).`:`\\(A=P(1+rt)=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(500,5000),i=rand(.03,.12),n=ri(3,12),pw=A0*(1-(1+i)**(-n))/i,ans=v?A0*((1+i)**n-1)/i:pw;return qNum(N,title,v?`A savings plan deposits ${moneyLatex(A0)} at each year-end for \\(${n}\\) years, earning \\(${nfmt(i*100)}\\%\\). Find future worth.`:`A savings plan deposits ${moneyLatex(A0)} at each year-end for ${n} years, earning ${nfmt(i*100)}% annually. Find present worth of the ordinary annuity.`,ans,v?`\\(F=A[(1+i)^n-1]/i=${moneyToken(ans)}\\).`:`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const inv=ri(10000,90000),save=ri(1000,18000),ans=v?inv/save:(save/inv)*100;return qNum(N,title,v?`An energy upgrade costs ${moneyLatex(inv)} and saves ${moneyLatex(save)} each year. Find simple payback in years.`:`An energy upgrade costs ${moneyLatex(inv)} and saves ${moneyLatex(save)} in its first year. Find first-year savings as a percentage of investment.`,ans,v?`\\(PB=I/S=${nfmt(ans)}\\,years\\).`:`\\(100S/I=${nfmt(ans)}\\%\\).`,v?'number':'percent')
  }
}
function makeEconExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const j=rand(.04,.18),m=pick([2,4,12]),eff=(1+j/m)**m-1,ans=v?eff*100:j/m*100;return qNum(N,title,v?`Nominal interest \\(${nfmt(j*100)}\\%\\) is compounded \\(${m}\\) times yearly. Find effective annual rate in percent.`:`A nominal annual rate is \\(${nfmt(j*100)}\\%\\), compounded \\(${m}\\) times yearly. Find rate per compounding period in percent.`,ans,v?`\\(i_{eff}=[(1+j/m)^m-1]100=${nfmt(ans)}\\%\\).`:`\\(i_p=100j/m=${nfmt(ans)}\\%\\).`,'percent')
  }
}
function makeEconExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const ben=ri(15000,90000),cost=ri(8000,70000),ans=v?ben-cost:ben/cost;return qNum(N,title,v?`A proposal gives present benefits ${moneyLatex(ben)} and costs ${moneyLatex(cost)}. Find net present benefit.`:`A proposal has present benefits of ${moneyLatex(ben)} and present costs of ${moneyLatex(cost)}. Find the benefit-cost ratio.`,ans,v?`\\(NPB=PV(B)-PV(C)=${moneyToken(ans)}\\).`:`\\(B/C=${nfmt(ans)}\\).`,v?'currency':'number')
  }
}
function makeEconExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const g=ri(100,1400),rate=rand(.03,.13),n=ri(4,15),ans=v?g*((1+rate)**n-1)/rate:g/rate;return qNum(N,title,v?`An annual maintenance cost begins at ${moneyLatex(g)} and grows by factor \\((1+i)\\) each year for \\(${n}\\) years at \\(${nfmt(rate*100)}\\%\\). Find the future-worth scale using the geometric series formula.`:`Find the capitalized equivalent of a perpetual annual cost of ${moneyLatex(g)} at \\(${nfmt(rate*100)}\\%\\).`,ans,v?`Geometric future worth is \\(G[(1+i)^n-1]/i=${moneyToken(ans)}\\).`:`Perpetuity worth \\(P=A/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(1500,9000),i=rand(.03,.12),n=ri(3,15),ans=v?A0*(i*(1+i)**n)/((1+i)**n-1):A0*(1-(1+i)**(-n))/i;return qNum(N,title,v?`A loan of ${moneyLatex(A0)} is amortized over \\(${n}\\) years at \\(${nfmt(i*100)}\\%\\). Find equal annual payment.`:`Annual receipts are ${moneyLatex(A0)} for ${n} years at interest rate ${nfmt(i*100)}% per year. Find their present worth.`,ans,v?`\\(A=P[i(1+i)^n]/[(1+i)^n-1]=${moneyToken(ans)}\\).`:`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const annual=ri(2000,15000),i=rand(.02,.1),ans=v?annual/i:annual*(1+i)/i;return qNum(N,title,v?`A facility needs annual perpetual maintenance of ${moneyLatex(annual)}. Find capitalized cost at \\(${nfmt(i*100)}\\%\\).`:`A perpetuity pays ${moneyLatex(annual)} every year and earns ${nfmt(i*100)}% annually. Find capitalized cost when the first payment occurs immediately.`,ans,v?`\\(P=A/i=${moneyToken(ans)}\\).`:`An annuity due is \\(P=A(1+i)/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const nominal=rand(.04,.12),infl=rand(.01,.05),ans=v?((1+nominal)/(1+infl)-1)*100:(nominal-infl)*100;return qNum(N,title,v?`Nominal return is \\(${nfmt(nominal*100)}\\%\\) and inflation is \\(${nfmt(infl*100)}\\%\\). Find exact real rate (%).`:`Nominal return is \\(${nfmt(nominal*100)}\\%\\) and inflation is \\(${nfmt(infl*100)}\\%\\). Use the approximation real rate \\((i_r\\approx i_n-f)\\) to estimate the real rate in percent.`,ans,v?`\\(i_r=[(1+i_n)/(1+f)-1]100=${nfmt(ans)}\\%\\).`:`\\(i_r\\approx i_n-f=${nfmt(ans)}\\%\\).`,'percent')
  }
}
function makeEconExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const fixed=ri(10000,80000),price=ri(80,400),vc=ri(30,Math.floor(price*.8)),Q=ri(20,100),ans=v?fixed/(price-vc):fixed+vc*Q;return qNum(N,title,v?`A workshop has fixed cost ${moneyLatex(fixed)}, price per unit ${moneyLatex(price)}, and variable cost ${moneyLatex(vc)}. Find break-even unit sales.`:`A workshop has fixed cost ${moneyLatex(fixed)} and variable cost ${moneyLatex(vc)} per unit. At production volume \\(${Q}\\) units, estimate total cost.`,ans,v?`\\(Q_{BE}=F/(p-v)=${nfmt(ans)}\\,units\\).`:`\\(TC=F+vQ=${moneyToken(ans)}\\).`,v?'number':'currency')
  }
}
function makeEconExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const rev=ri(30000,100000),cost=ri(10000,Math.floor(rev*.7)),ans=v?(rev-cost)/rev*100:rev-cost;return qNum(N,title,v?`A small firm earns revenue ${moneyLatex(rev)} and total cost ${moneyLatex(cost)}. Find profit margin as percent of revenue.`:`A small firm earns revenue ${moneyLatex(rev)} and incurs total operating costs of ${moneyLatex(cost)}. Find operating profit.`,ans,v?`Margin \\(=100(R-C)/R=${nfmt(ans)}\\%\\).`:`Profit \\(=R-C=${moneyToken(ans)}\\).`,v?'percent':'currency')
  }
}
function makeEconExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const cost=ri(30000,120000),sal=ri(0,Math.floor(cost*.1)),life=ri(4,12),tax=rand(.1,.3),ans=v?(cost-sal)/life*tax:(cost-sal)/life;return qNum(N,title,v?`A business records straight-line depreciation on equipment costing ${moneyLatex(cost)} with salvage ${moneyLatex(sal)} and life \\(${life}\\) years. At tax rate \\(${nfmt(tax*100)}\\%\\), find annual tax shield.`:`Equipment costs ${moneyLatex(cost)}, has salvage value ${moneyLatex(sal)}, and useful life ${life} years. Find annual straight-line depreciation expense.`,ans,v?`Tax shield \\(=D\\times tax=${moneyToken(ans)}\\).`:`\\(D=(C-S)/n=${moneyToken(ans)}\\) per year.`,'currency')
  }
}
function makeEconExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const pA=ri(5000,20000),lifeA=ri(3,8),rate=rand(.03,.12),ans=v?pA*(rate*(1+rate)**lifeA)/((1+rate)**lifeA-1):pA/lifeA;return qNum(N,title,v?`Equipment A costs ${moneyLatex(pA)}, life \\(${lifeA}\\) years, interest \\(${nfmt(rate*100)}\\%\\). Find capital-recovery annual cost ignoring salvage.`:`Equipment A costs ${moneyLatex(pA)} and has a useful life of \\(${lifeA}\\) years. Ignoring interest and salvage value, find straight-line annualized cost.`,ans,v?`\\(A=P[i(1+i)^n]/[(1+i)^n-1]=${moneyToken(ans)}\\).`:`\\(A=P/n=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const P=ri(5000,40000),i=rand(.03,.13),n=ri(3,10),payment=P*i/(1-(1+i)**(-n)),ans=v?payment*n-P:payment;return qNum(N,title,v?`A loan of ${moneyLatex(P)} is repaid by equal annual payments over \\(${n}\\) years at \\(${nfmt(i*100)}\\%\\). Find total interest paid.`:`A loan of ${moneyLatex(P)} is repaid by equal annual payments over \\(${n}\\) years at \\(${nfmt(i*100)}\\%\\). Find the equal annual payment.`,ans,v?`Total interest \\(=nA-P=${moneyToken(ans)}\\).`:`\\(A=Pi/[1-(1+i)^{-n}]=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const p=ri(10000,80000),g=rand(.01,.08),n=ri(3,10),ans=v?p*((1+g)**n-1)/g:p*(1+g)**(n-1);return qNum(N,title,v?`Maintenance cost begins at ${moneyLatex(p)} and grows \\(${nfmt(g*100)}\\%\\) yearly for \\(${n}\\) periods. Find summed undiscounted cost under a geometric growth model.`:`Find cost in period \\(${n}\\) given starting cost ${moneyLatex(p)} growing \\(${nfmt(g*100)}\\%\\) per year.`,ans,v?`\\(S=P[(1+g)^n-1]/g=${moneyToken(ans)}\\).`:`\\(C_n=P(1+g)^{n-1}=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const P=ri(10000,70000),F=roundSigNumber(P*rand(1.2,3.2),4),n=ri(3,12),ans=v?(F/P)**(1/n)-1:Math.log(F/P)/Math.log(1.08);return qNum(N,title,v?`An investment grows from ${moneyLatex(P)} to ${moneyLatex(F)} in \\(${n}\\) years. Find annual compound growth rate in percent.`:`An investment grows from ${moneyLatex(P)} to ${moneyLatex(F)} at 8% annual compound interest. Estimate the number of years required.`,v?ans*100:ans,v?`\\(i=[(F/P)^{1/n}-1]100=${nfmt(ans*100)}\\%\\).`:`\\(n=\\ln(F/P)/\\ln(1.08)=${nfmt(ans)}\\).`,v?'percent':'number')
  }
}



/* Additional numbered numeric families, registered alongside the other families below. */
/* Category-local named numeric families 21–40 (formerly core seed templates). */
function makeEconFamily21(){
  let p=ri(2000,20000),r=rand(.02,.12),t=ri(1,8),ans=p*r*t;
  return qNum(N,'Simple interest',`A principal of ${moneyLatex(p)} earns simple interest at \\(${nfmt(100*r)}\\%\\) per year for \\(${t}\\) years. Find interest earned.`,ans,`\\(I=Prt=${p}(${nfmt(r)})(${t})=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily22(){
  let p=ri(1000,18000),r=rand(.02,.12),n=ri(2,9),ans=p*Math.pow(1+r,n);
  return qNum(N,'Compound future worth',`A deposit of ${moneyLatex(p)} earns \\(${nfmt(100*r)}\\%\\) annually for \\(${n}\\) years. Find future worth.`,ans,`\\(F=P(1+i)^n=${p}(1+${nfmt(r)})^{${n}}=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily23(){
  let f=ri(2000,30000),r=rand(.03,.14),n=ri(2,10),ans=f/Math.pow(1+r,n);
  return qNum(N,'Present worth',`What is the present worth of ${moneyLatex(f)} due in \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\) annual interest?`,ans,`\\(P=F/(1+i)^n=${f}/(1+${nfmt(r)})^{${n}}=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily24(){
  let a=ri(500,5000),r=rand(.02,.12),n=ri(3,10),ans=a*(Math.pow(1+r,n)-1)/r;
  return qNum(N,'Uniform-series future worth',`An end-of-year deposit of ${moneyLatex(a)} is made for \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\) interest. Find future worth.`,ans,`\\(F=A[((1+i)^n-1)/i]=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily25(){
  let p=ri(5000,80000),r=rand(.03,.15),n=ri(3,15),f=Math.pow(1+r,n),ans=p*r*f/(f-1);
  return qNum(N,'Capital recovery',`A loan of ${moneyLatex(p)} is repaid by equal annual payments over \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\). Find annual payment.`,ans,`\\(A=P\\frac{i(1+i)^n}{(1+i)^n-1}=${moneyToken(ans)}\\) per year.`,'currency')
}

function makeEconFamily26(){
  let a=ri(500,6000),r=rand(.03,.12),n=ri(3,12),ans=a*(1-Math.pow(1+r,-n))/r;
  return qNum(N,'Annuity present worth',`An annuity pays ${moneyLatex(a)} at each year-end for \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\). Find present worth.`,ans,`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily27(){
  let p=ri(8000,80000),r=rand(.03,.14),n=ri(3,12),f=Math.pow(1+r,n),ans=p*r*f/(f-1);
  return qNum(N,'Annual worth',`A project costs ${moneyLatex(p)} now and has a \\(${n}\\)-year life at \\(${nfmt(100*r)}\\%\\). Find equivalent annual capital recovery.`,ans,`\\(A=P(A/P,i,n)=${moneyToken(ans)}\\) per year.`,'currency')
}

function makeEconFamily28(){
  let c=ri(10000,150000),s=ri(0,Math.floor(c*.35)),n=ri(3,12),ans=(c-s)/n;
  return qNum(N,'Straight-line depreciation',`An asset costs ${moneyLatex(c)}, has salvage value ${moneyLatex(s)}, and life \\(${n}\\) years. Find annual straight-line depreciation.`,ans,`\\(D=(C-S)/n=(${c}-${s})/${n}=${moneyToken(ans)}\\) per year.`,'currency')
}

function makeEconFamily29(){
  let c=ri(12000,90000),s=ri(0,Math.floor(c*.2)),n=ri(4,10),k=ri(1,n-1),d=(c-s)/n,ans=c-k*d;
  return qNum(N,'Book value',`An asset costs ${moneyLatex(c)}, salvage value is ${moneyLatex(s)}, life is \\(${n}\\) years. Find book value after \\(${k}\\) years using straight-line depreciation.`,ans,`Annual depreciation is \\((C-S)/n=${moneyToken(d)}\\). Book value is \\(C-kD=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily30(){
  let j=rand(.04,.18),m=pick([2,4,12,24]),ans=(Math.pow(1+j/m,m)-1)*100;
  return qNum(N,'Effective annual rate',`A nominal annual rate is \\(${nfmt(100*j)}\\%\\), compounded \\(${m}\\) times per year. Find effective annual rate in percent.`,ans,`\\(i_{eff}=[(1+j/m)^m-1]100=${nfmt(ans)}\\%\\).`,'percent')
}

function makeEconFamily31(){
  let j=rand(.06,.24),ans=j/12*100;
  return qNum(N,'Monthly periodic rate',`A nominal rate is \\(${nfmt(j*100)}\\%\\) per year, compounded monthly. Find the monthly periodic interest rate in percent.`,ans,`\\(i_m=j/12=${nfmt(j*100)}/12=${nfmt(ans)}\\%\\).`,'percent')
}

function makeEconFamily32(){
  let i=rand(.04,.15),f=rand(.01,.08),ans=((1+i)/(1+f)-1)*100;
  return qNum(N,'Real interest rate',`Nominal return is \\(${nfmt(i*100)}\\%\\) and inflation is \\(${nfmt(f*100)}\\%\\). Find the exact real rate in percent.`,ans,`\\(i_r=[(1+i_n)/(1+f)-1]100=${nfmt(ans)}\\%\\).`,'percent')
}

function makeEconFamily33(){
  let cost=ri(1000,20000),gain=ri(cost+100,cost*3),ans=(gain-cost)/cost*100;
  return qNum(N,'Return on investment',`A project costs ${moneyLatex(cost)} and returns ${moneyLatex(gain)} in proceeds. Find ROI in percent, using (proceeds − cost)/cost.`,ans,`\\(ROI=(${gain}-${cost})/${cost}\\times100=${nfmt(ans)}\\%\\).`,'percent')
}

function makeEconFamily34(){
  let ben=ri(10000,90000),cost=ri(8000,70000),ans=ben/cost;
  return qNum(N,'Benefit-cost ratio',`A project has present benefits of ${moneyLatex(ben)} and costs of ${moneyLatex(cost)}. Find benefit-cost ratio.`,ans,`\\(B/C=PV(B)/PV(C)=${ben}/${cost}=${nfmt(ans)}\\).`)
}

function makeEconFamily35(){
  let cost=ri(10000,100000),saving=ri(3000,20000),ans=cost/saving;
  return qNum(N,'Simple payback period',`An upgrade costs ${moneyLatex(cost)} and saves ${moneyLatex(saving)} per year. Find simple payback period in years.`,ans,`\\(Payback=Investment/Annual\\ savings=${cost}/${saving}=${nfmt(ans)}\\,years\\).`)
}

function makeEconFamily36(){
  let fixed=ri(10000,90000),price=ri(100,900),variable=ri(10,price-10),ans=fixed/(price-variable);
  return qNum(N,'Break-even volume',`Fixed cost is ${moneyLatex(fixed)}, selling price is ${moneyLatex(price)} per unit, and variable cost is ${moneyLatex(variable)} per unit. Find break-even units.`,ans,`\\(Q_{BE}=F/(p-v)=${fixed}/(${price}-${variable})=${nfmt(ans)}\\) units.`)
}

function makeEconFamily37(){
  let inv=ri(10000,80000),f=ri(inv+1000,inv*2),r=rand(.04,.15),n=ri(2,7),ans=f/Math.pow(1+r,n)-inv;
  return qNum(N,'Net present value',`A project costs ${moneyLatex(inv)} now and pays ${moneyLatex(f)} in \\(${n}\\) years. At \\(${nfmt(r*100)}\\%\\), find NPV.`,ans,`\\(NPV=-P+F/(1+i)^n=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily38(){
  let a=ri(1000,12000),r=rand(.03,.15),ans=a/r;
  return qNum(N,'Perpetuity present worth',`A perpetual annual cash flow of ${moneyLatex(a)} begins one year from now. At \\(${nfmt(r*100)}\\%\\), find present worth.`,ans,`\\(P=A/i=${a}/${nfmt(r)}=${moneyToken(ans)}\\).`,'currency')
}

function makeEconFamily39(){
  let r=rand(.02,.18),ans=Math.log(2)/Math.log(1+r);
  return qNum(N,'Doubling time',`At an annual compound rate of \\(${nfmt(r*100)}\\%\\), estimate doubling time using \\(n=\\ln2/\\ln(1+i)\\).`,ans,`\\(n=\\ln2/\\ln(1+${nfmt(r)})=${nfmt(ans)}\\,years\\).`)
}

function makeEconFamily40(){
  let c=ri(15000,120000),rate=rand(.1,.35),years=ri(1,5),ans=c*Math.pow(1-rate,years);
  return qNum(N,'Declining-balance book value',`Equipment costs ${moneyLatex(c)} and depreciates at \\\(${nfmt(rate*100)}\\\%\\\) per year using declining-balance depreciation. Find book value after \\\(${years}\\\) years.`,ans,`\\(BV=C(1-d)^n=${c}(1-${nfmt(rate)})^{${years}}=${moneyToken(ans)}\\).`,'currency')
}

function makeEconScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      if(fam===0){const cost=ri(30000,90000),c1=ri(18000,42000),c2=ri(18000,48000),rate=pick([.05,.06,.08,.1,.12]),ans=-cost+c1/(1+rate)+c2/(1+rate)**2;return qNum(N,`Field case: two-year NPV ${variant}`,`${person} is evaluating a monitoring-system retrofit costing ${moneyLatex(cost)} now. It is expected to save ${moneyLatex(c1)} after year 1 and ${moneyLatex(c2)} after year 2. At a discount rate of \\(${rate*100}\\%\\), find NPV.`,ans,`\\(NPV=-C_0+\\frac{C_1}{1+i}+\\frac{C_2}{(1+i)^2}=-${moneyToken(cost)}+\\frac{${moneyToken(c1)}}{1+${rate}}+\\frac{${moneyToken(c2)}}{(1+${rate})^2}=${moneyToken(ans)}\\).`,'currency')}
    if(fam===1){const cost=ri(24000,95000),saving=ri(6000,24000),ans=cost/saving;return qNum(N,`Field case: payback ${variant}`,`${person} proposes an energy-efficient motor costing ${moneyLatex(cost)} and expected to save ${moneyLatex(saving)} per year. Find simple payback in years.`,ans,`\\(PB=Initial\\ investment/Annual\\ savings=${moneyToken(cost)}/${moneyToken(saving)}=${nfmt(ans)}\\) years.`)}
    if(fam===2){const cost=ri(50000,180000),salv=ri(5000,Math.floor(cost*.3)),life=ri(4,12),ans=(cost-salv)/life;return qNum(N,`Field case: equipment depreciation ${variant}`,`${person} records a test instrument costing ${moneyLatex(cost)}, with salvage value ${moneyLatex(salv)} and useful life \\(${life}\\) years. Find annual straight-line depreciation.`,ans,`\\(D=(C-S)/n=(${moneyToken(cost)}-${moneyToken(salv)})/${life}=${moneyToken(ans)}\\) per year.`,'currency')}
    if(fam===3){const ben=ri(80000,240000),cost=ri(60000,200000),ans=ben/cost;return qNum(N,`Field case: benefit-cost ratio ${variant}`,`${person} compares a flood-warning sensor project with present benefits of ${moneyLatex(ben)} and present costs of ${moneyLatex(cost)}. Find the benefit-cost ratio.`,ans,`\\(B/C=PV(Benefits)/PV(Costs)=${moneyToken(ben)}/${moneyToken(cost)}=${nfmt(ans)}\\).`)}
    if(fam===4){const future=ri(20000,160000),rate=pick([.04,.06,.08,.1]),years=ri(2,8),ans=future/(1+rate)**years;return qNum(N,`Field case: reserve fund ${variant}`,`${person} needs ${moneyLatex(future)} in \\(${years}\\) years. At annual discount rate \\(${rate*100}\\%\\), how much must be invested today?`,ans,`\\(P=F/(1+i)^n=${moneyToken(future)}/(1+${rate})^{${years}}=${moneyToken(ans)}\\).`,'currency')}
    if(fam===5){const amount=ri(10000,50000),rate=pick([.03,.05,.07,.09]),years=ri(2,7),ans=amount*(1+rate)**years;return qNum(N,`Field case: reserve growth ${variant}`,`${person} deposits ${moneyLatex(amount)} in a maintenance reserve earning \\(${rate*100}\\%\\) annually. Find its future worth after \\(${years}\\) years with annual compounding.`,ans,`\\(F=P(1+i)^n=${moneyToken(amount)}(1+${rate})^{${years}}=${moneyToken(ans)}\\).`,'currency')}
    if(fam===6){const fixed=ri(20000,60000),price=ri(300,900),variable=ri(100,Math.floor(price*.7)),ans=fixed/(price-variable);return qNum(N,`Field case: break-even production ${variant}`,`${person} sells a sensor module for ${moneyLatex(price)} each. Fixed annual cost is ${moneyLatex(fixed)} and variable cost is ${moneyLatex(variable)} per module. Find the break-even number of modules (round up).`,Math.ceil(ans),`\\(Q_{BE}=F/(p-v)=${fixed}/(${price}-${variable})=${nfmt(ans)}\\). Since units are whole, round up to \\(${Math.ceil(ans)}\\) modules.`)}
    if(fam===7){const cost=ri(10000,50000),returnv=ri(cost+5000,cost+25000),ans=100*(returnv-cost)/cost;return qNum(N,`Field case: project return ${variant}`,`${person} buys a calibration unit for ${moneyLatex(cost)} and later receives ${moneyLatex(returnv)}. Find the simple return on investment as a percentage of the initial cost.`,ans,`\\(ROI=100(R-C)/C=100(${moneyToken(returnv)}-${moneyToken(cost)})/${moneyToken(cost)}=${nfmt(ans)}\\%\\).`,'percent')}
    if(fam===8){const principal=ri(50000,180000),rate=pick([.04,.06,.08,.1]),n=ri(3,9),ann=principal*(rate*(1+rate)**n)/((1+rate)**n-1);return qNum(N,`Field case: capital recovery ${variant}`,`${person} finances a plant upgrade of ${moneyLatex(principal)} over \\(${n}\\) years at \\(${rate*100}\\%\\) annually. Find the uniform annual capital-recovery payment.`,ann,`\\(A=P\\frac{i(1+i)^n}{(1+i)^n-1}=${moneyToken(ann)}\\) per year.`,'currency')}
    const annual=ri(15000,65000),years=ri(3,10),salv=ri(0,10000),initial=annual*years+salv,ans=initial/(years+1);return qNum(N,`Field case: annualized estimate ${variant}`,`${person} estimates a service contract with ${years} yearly payments of ${moneyLatex(annual)} and a terminal recovery of ${moneyLatex(salv)}. Find the undiscounted average per year over ${years+1} years.`,ans,`\\(Average=(${years}(${moneyToken(annual)})+${moneyToken(salv)})/${years+1}=${moneyToken(ans)}\\) per year.`,'currency')
}


NUMERIC_GENERATOR_REGISTRY.econ = [numericEntry('econ',"Simple interest · family 21 (randomized variant)",'econ-family-21',()=>makeEconFamily21()),
    numericEntry('econ',"Compound future worth · family 22 (randomized variant)",'econ-family-22',()=>makeEconFamily22()),
    numericEntry('econ',"Present worth of a future amount · family 23 (randomized variant)",'econ-family-23',()=>makeEconFamily23()),
    numericEntry('econ',"Future worth of a uniform series · family 24 (randomized variant)",'econ-family-24',()=>makeEconFamily24()),
    numericEntry('econ',"Capital recovery annual payment · family 25 (randomized variant)",'econ-family-25',()=>makeEconFamily25()),
    numericEntry('econ',"Present worth of an annuity · family 26 (randomized variant)",'econ-family-26',()=>makeEconFamily26()),
    numericEntry('econ',"Annual worth of a present amount · family 27 (randomized variant)",'econ-family-27',()=>makeEconFamily27()),
    numericEntry('econ',"Straight-line depreciation · family 28 (randomized variant)",'econ-family-28',()=>makeEconFamily28()),
    numericEntry('econ',"Book value after straight-line depreciation · family 29 (randomized variant)",'econ-family-29',()=>makeEconFamily29()),
    numericEntry('econ',"Effective annual interest rate · family 30 (randomized variant)",'econ-family-30',()=>makeEconFamily30()),
    numericEntry('econ',"Monthly nominal-to-period rate · family 31 (randomized variant)",'econ-family-31',()=>makeEconFamily31()),
    numericEntry('econ',"Real rate after inflation · family 32 (randomized variant)",'econ-family-32',()=>makeEconFamily32()),
    numericEntry('econ',"Return on investment · family 33 (randomized variant)",'econ-family-33',()=>makeEconFamily33()),
    numericEntry('econ',"Benefit-cost ratio · family 34 (randomized variant)",'econ-family-34',()=>makeEconFamily34()),
    numericEntry('econ',"Simple payback period · family 35 (randomized variant)",'econ-family-35',()=>makeEconFamily35()),
    numericEntry('econ',"Break-even sales volume · family 36 (randomized variant)",'econ-family-36',()=>makeEconFamily36()),
    numericEntry('econ',"Net present value for one future inflow · family 37 (randomized variant)",'econ-family-37',()=>makeEconFamily37()),
    numericEntry('econ',"Present worth of a perpetuity · family 38 (randomized variant)",'econ-family-38',()=>makeEconFamily38()),
    numericEntry('econ',"Doubling time under annual compounding · family 39 (randomized variant)",'econ-family-39',()=>makeEconFamily39()),
    numericEntry('econ',"Declining-balance depreciation · family 40 (randomized variant)",'econ-family-40',()=>makeEconFamily40()),
    numericEntry('econ',"Compound future worth and required deposit · family 01 (randomized variant)","econ-family-01",()=>makeEconExpansionFamily01("Compound future worth and required deposit · family 01 (randomized variant)")),
    numericEntry('econ',"Present and future worth · family 02 (randomized variant)","econ-family-02",()=>makeEconExpansionFamily02("Present and future worth · family 02 (randomized variant)")),
    numericEntry('econ',"Project net present value and undiscounted benefit · family 03 (randomized variant)","econ-family-03",()=>makeEconExpansionFamily03("Project net present value and undiscounted benefit · family 03 (randomized variant)")),
    numericEntry('econ',"Straight-line depreciation and book value · family 04 (randomized variant)","econ-family-04",()=>makeEconExpansionFamily04("Straight-line depreciation and book value · family 04 (randomized variant)")),
    numericEntry('econ',"Simple-interest repayment and interest · family 05 (randomized variant)","econ-family-05",()=>makeEconExpansionFamily05("Simple-interest repayment and interest · family 05 (randomized variant)")),
    numericEntry('econ',"Present and future worth of an annuity · family 06 (randomized variant)","econ-family-06",()=>makeEconExpansionFamily06("Present and future worth of an annuity · family 06 (randomized variant)")),
    numericEntry('econ',"Simple payback and annual savings rate · family 07 (randomized variant)","econ-family-07",()=>makeEconExpansionFamily07("Simple payback and annual savings rate · family 07 (randomized variant)")),
    numericEntry('econ',"Nominal and effective periodic interest rates · family 08 (randomized variant)","econ-family-08",()=>makeEconExpansionFamily08("Nominal and effective periodic interest rates · family 08 (randomized variant)")),
    numericEntry('econ',"Benefit-cost ratio and net present benefit · family 09 (randomized variant)","econ-family-09",()=>makeEconExpansionFamily09("Benefit-cost ratio and net present benefit · family 09 (randomized variant)")),
    numericEntry('econ',"Perpetuity capitalized worth and geometric future worth · family 10 (randomized variant)","econ-family-10",()=>makeEconExpansionFamily10("Perpetuity capitalized worth and geometric future worth · family 10 (randomized variant)")),
    numericEntry('econ',"Annuity present worth and loan payment · family 11 (randomized variant)","econ-family-11",()=>makeEconExpansionFamily11("Annuity present worth and loan payment · family 11 (randomized variant)")),
    numericEntry('econ',"Perpetuity capitalization · family 12 (randomized variant)","econ-family-12",()=>makeEconExpansionFamily12("Perpetuity capitalization · family 12 (randomized variant)")),
    numericEntry('econ',"Approximate and exact real interest rate · family 13 (randomized variant)","econ-family-13",()=>makeEconExpansionFamily13("Approximate and exact real interest rate · family 13 (randomized variant)")),
    numericEntry('econ',"Break-even quantity and total cost · family 14 (randomized variant)","econ-family-14",()=>makeEconExpansionFamily14("Break-even quantity and total cost · family 14 (randomized variant)")),
    numericEntry('econ',"Operating profit and profit margin · family 15 (randomized variant)","econ-family-15",()=>makeEconExpansionFamily15("Operating profit and profit margin · family 15 (randomized variant)")),
    numericEntry('econ',"Straight-line depreciation and tax shield · family 16 (randomized variant)","econ-family-16",()=>makeEconExpansionFamily16("Straight-line depreciation and tax shield · family 16 (randomized variant)")),
    numericEntry('econ',"Annualized cost and capital-recovery cost · family 17 (randomized variant)","econ-family-17",()=>makeEconExpansionFamily17("Annualized cost and capital-recovery cost · family 17 (randomized variant)")),
    numericEntry('econ',"Loan payment and total interest · family 18 (randomized variant)","econ-family-18",()=>makeEconExpansionFamily18("Loan payment and total interest · family 18 (randomized variant)")),
    numericEntry('econ',"Growing maintenance cost · family 19 (randomized variant)","econ-family-19",()=>makeEconExpansionFamily19("Growing maintenance cost · family 19 (randomized variant)")),
    numericEntry('econ',"Compound growth rate and time-to-target · family 20 (randomized variant)","econ-family-20",()=>makeEconExpansionFamily20("Compound growth rate and time-to-target · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(N,'Field scenario · NPV of a monitoring-system retrofit','scenario-econ-retrofit-npv',()=>makeEconScenario(0));
appendNumericRecipe(N,'Field scenario · Break-even sensor production','scenario-econ-break-even-modules',()=>makeEconScenario(6));
appendNumericRecipe(N,'Field scenario · Capital recovery on plant upgrade','scenario-econ-capital-recovery',()=>makeEconScenario(8));

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('econ','Additional · Present worth of a uniform annual benefit','econ-topup-01',()=>{
  const A0=ri(1000,12000),i=pick([.03,.05,.07,.1,.12]),n=ri(3,12),ans=A0*(1-(1+i)**(-n))/i;
  return qNum(N,'Present worth of a uniform annual benefit',`A monitoring upgrade yields annual savings of \\(\\$${A0}\\) for \\(${n}\\) years. At \\(${nfmt(100*i)}\\%\\), find present worth of the uniform savings.`,ans,`\\(P=A[1-(1+i)^{-n}]/i=${A0}[1-(1+${nfmt(i)})^{-${n}}]/${nfmt(i)}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('econ','Additional · Future worth of an annual deposit series','econ-topup-02',()=>{
  const A0=ri(500,9000),i=pick([.03,.05,.06,.08,.1]),n=ri(3,10),ans=A0*((1+i)**n-1)/i;
  return qNum(N,'Future worth of an annual deposit series',`A fund receives \\(\\$${A0}\\) at the end of each year for \\(${n}\\) years. At \\(${nfmt(100*i)}\\%\\), find the future worth immediately after the last deposit.`,ans,`\\(F=A[(1+i)^n-1]/i=${A0}[(1+${nfmt(i)})^{${n}}-1]/${nfmt(i)}=${nfmt(ans)}\\).`);
});
appendNumericRecipe('econ','Additional · Straight-line depreciation per year','econ-topup-03',()=>{
  const cost=ri(15000,150000),salv=ri(0,Math.floor(cost*.35)),life=ri(3,15),ans=(cost-salv)/life;
  return qNum(N,'Straight-line depreciation per year',`An instrument costs \\(\\$${cost}\\), has salvage value \\(\\$${salv}\\), and useful life \\(${life}\\) years. Find annual straight-line depreciation.`,ans,`\\(D=(C-S)/n=(${cost}-${salv})/${life}=${nfmt(ans)}\\) dollars per year.`,'currency');
});
appendNumericRecipe('econ','Additional · Compound amount after several years','econ-topup-04',()=>{
  const P=ri(1000,30000),rate=pick([.02,.04,.06,.08,.1]),n=ri(2,10),ans=P*(1+rate)**n;
  return qNum(N,'Compound amount after several years',`A principal of \\(\\$${P}\\) grows at \\(${nfmt(100*rate)}\\%\\) annual compound interest for \\(${n}\\) years. Find its future amount.`,ans,`\\(F=P(1+i)^n=${P}(1+${nfmt(rate)})^{${n}}=${nfmt(ans)}\\).`,'currency');
});
appendNumericRecipe('econ','Additional · Break-even production quantity','econ-topup-05',()=>{
  const fixed=ri(5000,60000),price=ri(100,900),variable=ri(20,price-10),ans=fixed/(price-variable);
  return qNum(N,'Break-even production quantity',`A device maker has fixed costs \\(\\$${fixed}\\), selling price \\(\\$${price}\\) per unit, and variable cost \\(\\$${variable}\\) per unit. Find break-even quantity.`,ans,`Contribution per unit is \\(p-v=${price}-${variable}=${price-variable}\\). Thus \\(Q_{BE}=F/(p-v)=${fixed}/${price-variable}=${nfmt(ans)}\\) units.`);
});

/* Category-local compound question generators. Their tree edges are registered below, so this
   file owns both the content and the relationship. These are ordinary numeric repeatable nodes. */
function makeEconCompoundRoot(variant=1){
  const base=ri(2,9);
  const x=variant===1?base:variant===2?base+2:2*base;
  return qNum(N,'Engineering-economics compound root',`A future payment is \\(F=\\text{\\$}${nfmt(100*x)}(1.10)\\) due in one year at 10%. Find the original principal in hundreds of dollars.`,x,`\\(P=F/1.10=100(${x})\\), or \\(${x}\\) hundreds of dollars.`)
}
function makeEconCompoundChild(parentValue,variant=1){
  const x=Number(parentValue);
  if(!Number.isFinite(x))throw new Error('Compound child requires its parent numeric answer.');
  const declaration='Let \\(x_{\\mathrm{prev}}\\) denote the numerical answer from the parent question.';
  const ans=100*x*(1.05**2);return qNum(N,'Linked future worth',`${declaration} A principal is \\(P=\\text{\\$}100x_{\\mathrm{prev}}\\). At 5% annual compound interest, find future worth after two years.`,ans,`\\(F=P(1.05)^2=\\text{\\$}${nfmt(100*x)}(1.1025)=${moneyToken(ans)}\\).`,'currency')
}
function registerEconCompoundTreeNodes(){
  for(let variant=1;variant<=3;variant++){
    const suffix=String(variant).padStart(2,'0');
    const rootKey=`econ-tree-root-${suffix}`,childKey=`econ-tree-child-${suffix}`;
    registerQuestionGenerator({id:rootKey,category:NAMESPACE_ECON,title:`Engineering economics · Compound root ${suffix}`,recipeKey:rootKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'root',treeChildrenRecipeKeys:[childKey],
      make:()=>makeEconCompoundRoot(variant)});
    registerQuestionGenerator({id:childKey,category:NAMESPACE_ECON,title:`Engineering economics · Dependent node ${suffix}`,recipeKey:childKey,
      questionClass:'numeric',formats:['mc','fib'],repeatable:true,difficulty:variant+1,treeRole:'child',parentRecipeKey:rootKey,
      make:(context={})=>{
        let previous=context.parentAnswer??context.sharedData?.[rootKey]?.answer;
        if(previous===undefined||previous===null){const seed=makeEconCompoundRoot(variant);previous=seed.answerExact??seed.answer;}
        return makeEconCompoundChild(previous,variant);
      }});
  }
}
registerEconCompoundTreeNodes();

/* Category-local non-numeric generators share the canonical registry with numeric recipes. */
/* Topic-local identification and true/false concept cards. */
const ECON_CONCEPT_CARDS = [
    [
      "Present worth",
      "The value today of a future cash flow discounted at a specified interest rate."
    ],
    [
      "Future worth",
      "The accumulated value of a present amount at a future date using a specified interest rate."
    ],
    [
      "Annuity",
      "A sequence of equal cash flows occurring at regular intervals."
    ],
    [
      "Ordinary annuity",
      "An annuity whose payments occur at the end of each period."
    ],
    [
      "Annuity due",
      "An annuity whose payments occur at the beginning of each period."
    ],
    [
      "Nominal interest rate",
      "The stated annual interest rate before adjusting for compounding frequency."
    ],
    [
      "Effective annual rate",
      "The actual annual growth rate after accounting for compounding within the year."
    ],
    [
      "Compounding",
      "The process in which earned interest is added to principal and subsequently earns interest."
    ],
    [
      "Discount rate",
      "The rate used to convert future cash flows into present values."
    ],
    [
      "Net present value",
      "The sum of discounted project cash flows including the initial investment with its sign."
    ],
    [
      "Internal rate of return",
      "The discount rate at which a project’s net present value equals zero."
    ],
    [
      "MARR",
      "The minimum attractive rate of return used as a benchmark for evaluating investments."
    ],
    [
      "Simple payback period",
      "The time needed for cumulative cash savings to recover an initial investment, ignoring specified effects unless included."
    ],
    [
      "Depreciation",
      "The accounting allocation of an asset’s depreciable cost over its useful life."
    ],
    [
      "Salvage value",
      "The estimated value recovered from an asset at the end of its service life."
    ],
    [
      "Opportunity cost",
      "The value of the best alternative forgone when a choice is made."
    ],
    [
      "Sunk cost",
      "A past cost that cannot be recovered and should not affect a forward-looking choice by itself."
    ],
    [
      "Capital recovery",
      "The equivalent periodic amount associated with recovering capital and interest over a time horizon."
    ],
    [
      "Inflation",
      "A sustained increase in the general price level that reduces purchasing power."
    ],
    [
      "Sensitivity analysis",
      "A method that examines how project outcomes change when assumptions or input parameters vary."
    ],
    [
      "Present worth — extended concept",
      "The value today of future cash flows discounted to a common reference time."
    ],
    [
      "Future worth — extended concept",
      "The value of a present amount or earlier cash flow compounded forward to a later time."
    ],
    [
      "Effective annual rate — extended concept",
      "The annualized compound rate that reflects within-year compounding."
    ],
    [
      "Nominal interest rate — extended concept",
      "An annual quoted rate that does not by itself account for compounding frequency."
    ],
    [
      "Uniform-series present worth",
      "The present value of equal end-of-period payments discounted at a fixed rate."
    ],
    [
      "Capital recovery factor",
      "A factor converting a present amount into equal annual payments over a specified term and interest rate."
    ],
    [
      "Sinking fund factor",
      "A factor converting a present target or principal amount into equal periodic deposits needed to reach a future value."
    ],
    [
      "Net present value — extended concept",
      "The sum of discounted project cash inflows and outflows using a specified discount rate."
    ],
    [
      "Internal rate of return — extended concept",
      "The discount rate at which a project’s net present value equals zero, subject to cash-flow caveats."
    ],
    [
      "Payback period",
      "The time required for cumulative project cash inflows to recover the initial investment, under a stated convention."
    ],
    [
      "Straight-line depreciation",
      "A method allocating depreciable cost evenly over the asset’s useful life."
    ],
    [
      "Book value",
      "The asset’s recorded value after accumulated depreciation under the chosen accounting method."
    ],
    [
      "Salvage value — extended concept",
      "The estimated value of an asset at the end of its service life."
    ],
    [
      "Depreciable basis",
      "The portion of asset cost treated as depreciable, commonly cost minus salvage value."
    ],
    [
      "Break-even quantity",
      "The output level at which total revenue equals total cost under the assumed model."
    ],
    [
      "Contribution margin",
      "Selling price per unit minus variable cost per unit."
    ],
    [
      "Benefit-cost ratio",
      "A ratio comparing discounted benefits with discounted costs under a stated convention."
    ],
    [
      "Opportunity cost — extended concept",
      "The value of the best alternative forgone when a choice is made."
    ],
    [
      "Inflation adjustment",
      "A conversion between nominal and real monetary amounts using a price index or inflation rate."
    ],
    [
      "Economic life",
      "The service period that minimizes equivalent annual cost or otherwise optimizes an economic criterion."
    ]
  ];
registerConceptGeneratorsForCategory(NAMESPACE_ECON, ECON_CONCEPT_CARDS);
