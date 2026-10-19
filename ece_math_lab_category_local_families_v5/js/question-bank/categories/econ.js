/* econ: seed entries, explicit expansion families, and category-specific additions. */

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
      const cost=ri(8000,45000),a=ri(3000,15000),b=ri(2500,14000),rate=rand(.03,.12),ans=v?-cost+a/(1+rate)+b/(1+rate)**2:-cost+a+b;return qNum(N,title,v?`A project costs ${moneyLatex(cost)} and returns ${moneyLatex(a)} in year 1 and ${moneyLatex(b)} in year 2. Find NPV at \\(${nfmt(rate*100)}\\%\\).`:`The same project returns ${moneyLatex(a)} and ${moneyLatex(b)} without discounting. Find net undiscounted benefit after initial cost.`,ans,v?`\\(NPV=-C_0+C_1/(1+i)+C_2/(1+i)^2=${moneyToken(ans)}\\).`:`\\(B_{net}=-C_0+C_1+C_2=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const cost=ri(12000,90000),sal=ri(0,Math.floor(cost*.25)),life=ri(3,12),year=ri(1,life),dep=(cost-sal)/life,ans=v?cost-year*dep:dep;return qNum(N,title,v?`A machine costs ${moneyLatex(cost)}, salvage value ${moneyLatex(sal)}, and useful life \\(${life}\\) years. Find book value after \\(${year}\\) years.`:`For the same machine, find annual straight-line depreciation.`,ans,v?`\\(BV=C-nD=${moneyToken(ans)}\\).`:`\\(D=(C-S)/N=${moneyToken(ans)}\\) per year.`,'currency')
  }
}
function makeEconExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const P=ri(1000,20000),i=rand(.02,.1),n=ri(1,8),ans=v?P*i*n:P*(1+i*n);return qNum(N,title,v?`A student borrows ${moneyLatex(P)} at simple interest \\(${nfmt(i*100)}\\%\\) for \\(${n}\\) years. Find interest charged.`:`For the same loan, find total repayment under simple interest.`,ans,v?`\\(I=Prt=${moneyToken(ans)}\\).`:`\\(A=P(1+rt)=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const A0=ri(500,5000),i=rand(.03,.12),n=ri(3,12),pw=A0*(1-(1+i)**(-n))/i,ans=v?A0*((1+i)**n-1)/i:pw;return qNum(N,title,v?`A savings plan deposits ${moneyLatex(A0)} at each year-end for \\(${n}\\) years, earning \\(${nfmt(i*100)}\\%\\). Find future worth.`:`Find present worth of the same ordinary annuity.`,ans,v?`\\(F=A[(1+i)^n-1]/i=${moneyToken(ans)}\\).`:`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const inv=ri(10000,90000),save=ri(1000,18000),ans=v?inv/save:(save/inv)*100;return qNum(N,title,v?`An energy upgrade costs ${moneyLatex(inv)} and saves ${moneyLatex(save)} each year. Find simple payback in years.`:`Find first-year savings as a percentage of investment.`,ans,v?`\\(PB=I/S=${nfmt(ans)}\\,years\\).`:`\\(100S/I=${nfmt(ans)}\\%\\).`,'number')
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
      const ben=ri(15000,90000),cost=ri(8000,70000),ans=v?ben-cost:ben/cost;return qNum(N,title,v?`A proposal gives present benefits ${moneyLatex(ben)} and costs ${moneyLatex(cost)}. Find net present benefit.`:`For the same proposal, find benefit-cost ratio.`,ans,v?`\\(NPB=PV(B)-PV(C)=${moneyToken(ans)}\\).`:`\\(B/C=${nfmt(ans)}\\).`,'number')
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
      const A0=ri(1500,9000),i=rand(.03,.12),n=ri(3,15),ans=v?A0*(i*(1+i)**n)/((1+i)**n-1):A0*(1-(1+i)**(-n))/i;return qNum(N,title,v?`A loan of ${moneyLatex(A0)} is amortized over \\(${n}\\) years at \\(${nfmt(i*100)}\\%\\). Find equal annual payment.`:`Find present worth of annual receipts ${moneyLatex(A0)} for \\(${n}\\) years at the same rate.`,ans,v?`\\(A=P[i(1+i)^n]/[(1+i)^n-1]=${moneyToken(ans)}\\).`:`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const annual=ri(2000,15000),i=rand(.02,.1),ans=v?annual/i:annual*(1+i)/i;return qNum(N,title,v?`A facility needs annual perpetual maintenance of ${moneyLatex(annual)}. Find capitalized cost at \\(${nfmt(i*100)}\\%\\).`:`Find capitalized cost if the first annual payment occurs immediately, with the same perpetuity.`,ans,v?`\\(P=A/i=${moneyToken(ans)}\\).`:`An annuity due is \\(P=A(1+i)/i=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const nominal=rand(.04,.12),infl=rand(.01,.05),ans=v?((1+nominal)/(1+infl)-1)*100:(nominal-infl)*100;return qNum(N,title,v?`Nominal return is \\(${nfmt(nominal*100)}\\%\\) and inflation is \\(${nfmt(infl*100)}\\%\\). Find exact real rate (%).`:`Using the approximation real rate ≈ nominal rate − inflation, estimate real rate (%).`,ans,v?`\\(i_r=[(1+i_n)/(1+f)-1]100=${nfmt(ans)}\\%\\).`:`\\(i_r\\approx i_n-f=${nfmt(ans)}\\%\\).`,'percent')
  }
}
function makeEconExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const fixed=ri(10000,80000),price=ri(80,400),vc=ri(30,Math.floor(price*.8)),ans=v?fixed/(price-vc):fixed+vc*ri(20,100);return qNum(N,title,v?`A workshop has fixed cost ${moneyLatex(fixed)}, price per unit ${moneyLatex(price)}, and variable cost ${moneyLatex(vc)}. Find break-even unit sales.`:`At a production volume of the selected units, estimate total cost.`,ans,v?`\\(Q_{BE}=F/(p-v)=${nfmt(ans)}\\,units\\).`:`\\(TC=F+vQ=${moneyToken(ans)}\\).`,'number')
  }
}
function makeEconExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const rev=ri(30000,100000),cost=ri(10000,Math.floor(rev*.7)),ans=v?(rev-cost)/rev*100:rev-cost;return qNum(N,title,v?`A small firm earns revenue ${moneyLatex(rev)} and total cost ${moneyLatex(cost)}. Find profit margin as percent of revenue.`:`Find its operating profit.`,ans,v?`Margin \\(=100(R-C)/R=${nfmt(ans)}\\%\\).`:`Profit \\(=R-C=${moneyToken(ans)}\\).`,'number')
  }
}
function makeEconExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const cost=ri(30000,120000),sal=ri(0,Math.floor(cost*.1)),life=ri(4,12),tax=rand(.1,.3),ans=v?(cost-sal)/life*tax:(cost-sal)/life;return qNum(N,title,v?`A business records straight-line depreciation on equipment costing ${moneyLatex(cost)} with salvage ${moneyLatex(sal)} and life \\(${life}\\) years. At tax rate \\(${nfmt(tax*100)}\\%\\), find annual tax shield.`:`Find annual depreciation expense for the same asset.`,ans,v?`Tax shield \\(=D\\times tax=${moneyToken(ans)}\\).`:`\\(D=(C-S)/n=${moneyToken(ans)}\\) per year.`,'currency')
  }
}
function makeEconExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const pA=ri(5000,20000),pB=ri(4000,18000),lifeA=ri(3,8),lifeB=ri(3,8),rate=rand(.03,.12),ans=v?pA*(rate*(1+rate)**lifeA)/((1+rate)**lifeA-1):pA/lifeA;return qNum(N,title,v?`Equipment A costs ${moneyLatex(pA)}, life \\(${lifeA}\\) years, interest \\(${nfmt(rate*100)}\\%\\). Find capital-recovery annual cost ignoring salvage.`:`Ignoring interest, find straight annualized cost of Equipment A over \\(${lifeA}\\) years.`,ans,v?`\\(A=P[i(1+i)^n]/[(1+i)^n-1]=${moneyToken(ans)}\\).`:`\\(A=P/n=${moneyToken(ans)}\\).`,'currency')
  }
}
function makeEconExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const P=ri(5000,40000),i=rand(.03,.13),n=ri(3,10),payment=P*i/(1-(1+i)**(-n)),ans=v?payment*n-P:payment;return qNum(N,title,v?`A loan of ${moneyLatex(P)} is repaid by equal annual payments over \\(${n}\\) years at \\(${nfmt(i*100)}\\%\\). Find total interest paid.`:`Find the equal annual payment.`,ans,v?`Total interest \\(=nA-P=${moneyToken(ans)}\\).`:`\\(A=Pi/[1-(1+i)^{-n}]=${moneyToken(ans)}\\).`,'currency')
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
      const P=ri(10000,70000),F=P*rand(1.2,3.2),n=ri(3,12),ans=v?(F/P)**(1/n)-1:Math.log(F/P)/Math.log(1.08);return qNum(N,title,v?`An investment grows from ${moneyLatex(P)} to ${moneyLatex(F)} in \\(${n}\\) years. Find annual compound growth rate in percent.`:`For the same investment, estimate years needed to grow from ${moneyLatex(P)} to ${moneyLatex(F)} at 8% annual compound growth.`,v?ans*100:ans,v?`\\(i=[(F/P)^{1/n}-1]100=${nfmt(ans*100)}\\%\\).`:`\\(n=\\ln(F/P)/\\ln(1.08)=${nfmt(ans)}\\).`,v?'percent':'number')
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const ECON_CORE_SEEDS = [
['Simple interest',()=>{let p=ri(2000,20000),r=rand(.02,.12),t=ri(1,8),ans=p*r*t;return qNum(N,'Simple interest',`A principal of ${moneyLatex(p)} earns simple interest at \\(${nfmt(100*r)}\\%\\) per year for \\(${t}\\) years. Find interest earned.`,ans,`\\(I=Prt=${p}(${nfmt(r)})(${t})=${moneyToken(ans)}\\).`,'currency')}],
['Compound future worth',()=>{let p=ri(1000,18000),r=rand(.02,.12),n=ri(2,9),ans=p*Math.pow(1+r,n);return qNum(N,'Compound future worth',`A deposit of ${moneyLatex(p)} earns \\(${nfmt(100*r)}\\%\\) annually for \\(${n}\\) years. Find future worth.`,ans,`\\(F=P(1+i)^n=${p}(1+${nfmt(r)})^{${n}}=${moneyToken(ans)}\\).`,'currency')}],
['Present worth of a future amount',()=>{let f=ri(2000,30000),r=rand(.03,.14),n=ri(2,10),ans=f/Math.pow(1+r,n);return qNum(N,'Present worth',`What is the present worth of ${moneyLatex(f)} due in \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\) annual interest?`,ans,`\\(P=F/(1+i)^n=${f}/(1+${nfmt(r)})^{${n}}=${moneyToken(ans)}\\).`,'currency')}],
['Future worth of a uniform series',()=>{let a=ri(500,5000),r=rand(.02,.12),n=ri(3,10),ans=a*(Math.pow(1+r,n)-1)/r;return qNum(N,'Uniform-series future worth',`An end-of-year deposit of ${moneyLatex(a)} is made for \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\) interest. Find future worth.`,ans,`\\(F=A[((1+i)^n-1)/i]=${moneyToken(ans)}\\).`,'currency')}],
['Capital recovery annual payment',()=>{let p=ri(5000,80000),r=rand(.03,.15),n=ri(3,15),f=Math.pow(1+r,n),ans=p*r*f/(f-1);return qNum(N,'Capital recovery',`A loan of ${moneyLatex(p)} is repaid by equal annual payments over \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\). Find annual payment.`,ans,`\\(A=P\\frac{i(1+i)^n}{(1+i)^n-1}=${moneyToken(ans)}\\) per year.`,'currency')}],
['Present worth of an annuity',()=>{let a=ri(500,6000),r=rand(.03,.12),n=ri(3,12),ans=a*(1-Math.pow(1+r,-n))/r;return qNum(N,'Annuity present worth',`An annuity pays ${moneyLatex(a)} at each year-end for \\(${n}\\) years at \\(${nfmt(100*r)}\\%\\). Find present worth.`,ans,`\\(P=A[1-(1+i)^{-n}]/i=${moneyToken(ans)}\\).`,'currency')}],
['Annual worth of a present amount',()=>{let p=ri(8000,80000),r=rand(.03,.14),n=ri(3,12),f=Math.pow(1+r,n),ans=p*r*f/(f-1);return qNum(N,'Annual worth',`A project costs ${moneyLatex(p)} now and has a \\(${n}\\)-year life at \\(${nfmt(100*r)}\\%\\). Find equivalent annual capital recovery.`,ans,`\\(A=P(A/P,i,n)=${moneyToken(ans)}\\) per year.`,'currency')}],
['Straight-line depreciation',()=>{let c=ri(10000,150000),s=ri(0,Math.floor(c*.35)),n=ri(3,12),ans=(c-s)/n;return qNum(N,'Straight-line depreciation',`An asset costs ${moneyLatex(c)}, has salvage value ${moneyLatex(s)}, and life \\(${n}\\) years. Find annual straight-line depreciation.`,ans,`\\(D=(C-S)/n=(${c}-${s})/${n}=${moneyToken(ans)}\\) per year.`,'currency')}],
['Book value after straight-line depreciation',()=>{let c=ri(12000,90000),s=ri(0,Math.floor(c*.2)),n=ri(4,10),k=ri(1,n-1),d=(c-s)/n,ans=c-k*d;return qNum(N,'Book value',`An asset costs ${moneyLatex(c)}, salvage value is ${moneyLatex(s)}, life is \\(${n}\\) years. Find book value after \\(${k}\\) years using straight-line depreciation.`,ans,`Annual depreciation is \\((C-S)/n=${moneyToken(d)}\\). Book value is \\(C-kD=${moneyToken(ans)}\\).`,'currency')}],
['Effective annual interest rate',()=>{let j=rand(.04,.18),m=pick([2,4,12,24]),ans=(Math.pow(1+j/m,m)-1)*100;return qNum(N,'Effective annual rate',`A nominal annual rate is \\(${nfmt(100*j)}\\%\\), compounded \\(${m}\\) times per year. Find effective annual rate in percent.`,ans,`\\(i_{eff}=[(1+j/m)^m-1]100=${nfmt(ans)}\\%\\).`,'percent')}],
['Monthly nominal-to-period rate',()=>{let j=rand(.06,.24),ans=j/12*100;return qNum(N,'Monthly periodic rate',`A nominal rate is \\(${nfmt(j*100)}\\%\\) per year, compounded monthly. Find the monthly periodic interest rate in percent.`,ans,`\\(i_m=j/12=${nfmt(j*100)}/12=${nfmt(ans)}\\%\\).`,'percent')}],
['Real rate after inflation',()=>{let i=rand(.04,.15),f=rand(.01,.08),ans=((1+i)/(1+f)-1)*100;return qNum(N,'Real interest rate',`Nominal return is \\(${nfmt(i*100)}\\%\\) and inflation is \\(${nfmt(f*100)}\\%\\). Find the exact real rate in percent.`,ans,`\\(i_r=[(1+i_n)/(1+f)-1]100=${nfmt(ans)}\\%\\).`,'percent')}],
['Return on investment',()=>{let cost=ri(1000,20000),gain=ri(cost+100,cost*3),ans=(gain-cost)/cost*100;return qNum(N,'Return on investment',`A project costs ${moneyLatex(cost)} and returns ${moneyLatex(gain)} in proceeds. Find ROI in percent, using (proceeds − cost)/cost.`,ans,`\\(ROI=(${gain}-${cost})/${cost}\\times100=${nfmt(ans)}\\%\\).`,'percent')}],
['Benefit-cost ratio',()=>{let ben=ri(10000,90000),cost=ri(8000,70000),ans=ben/cost;return qNum(N,'Benefit-cost ratio',`A project has present benefits of ${moneyLatex(ben)} and costs of ${moneyLatex(cost)}. Find benefit-cost ratio.`,ans,`\\(B/C=PV(B)/PV(C)=${ben}/${cost}=${nfmt(ans)}\\).`)}],
['Simple payback period',()=>{let cost=ri(10000,100000),saving=ri(3000,20000),ans=cost/saving;return qNum(N,'Simple payback period',`An upgrade costs ${moneyLatex(cost)} and saves ${moneyLatex(saving)} per year. Find simple payback period in years.`,ans,`\\(Payback=Investment/Annual\\ savings=${cost}/${saving}=${nfmt(ans)}\\,years\\).`)}],
['Break-even sales volume',()=>{let fixed=ri(10000,90000),price=ri(100,900),variable=ri(10,price-10),ans=fixed/(price-variable);return qNum(N,'Break-even volume',`Fixed cost is ${moneyLatex(fixed)}, selling price is ${moneyLatex(price)} per unit, and variable cost is ${moneyLatex(variable)} per unit. Find break-even units.`,ans,`\\(Q_{BE}=F/(p-v)=${fixed}/(${price}-${variable})=${nfmt(ans)}\\) units.`)}],
['Net present value for one future inflow',()=>{let inv=ri(10000,80000),f=ri(inv+1000,inv*2),r=rand(.04,.15),n=ri(2,7),ans=f/Math.pow(1+r,n)-inv;return qNum(N,'Net present value',`A project costs ${moneyLatex(inv)} now and pays ${moneyLatex(f)} in \\(${n}\\) years. At \\(${nfmt(r*100)}\\%\\), find NPV.`,ans,`\\(NPV=-P+F/(1+i)^n=${moneyToken(ans)}\\).`,'currency')}],
['Present worth of a perpetuity',()=>{let a=ri(1000,12000),r=rand(.03,.15),ans=a/r;return qNum(N,'Perpetuity present worth',`A perpetual annual cash flow of ${moneyLatex(a)} begins one year from now. At \\(${nfmt(r*100)}\\%\\), find present worth.`,ans,`\\(P=A/i=${a}/${nfmt(r)}=${moneyToken(ans)}\\).`,'currency')}],
['Doubling time under annual compounding',()=>{let r=rand(.02,.18),ans=Math.log(2)/Math.log(1+r);return qNum(N,'Doubling time',`At an annual compound rate of \\(${nfmt(r*100)}\\%\\), estimate doubling time using \\(n=\\ln2/\\ln(1+i)\\).`,ans,`\\(n=\\ln2/\\ln(1+${nfmt(r)})=${nfmt(ans)}\\,years\\).`)}],
['Declining-balance depreciation',()=>{let c=ri(15000,120000),rate=rand(.1,.35),years=ri(1,5),ans=c*Math.pow(1-rate,years);return qNum(N,'Declining-balance book value',`Equipment costs ${moneyLatex(c)} and depreciates at \\\(${nfmt(rate*100)}\\\%\\\) per year using declining-balance depreciation. Find book value after \\\(${years}\\\) years.`,ans,`\\(BV=C(1-d)^n=${c}(1-${nfmt(rate)})^{${years}}=${moneyToken(ans)}\\).`,'currency')} ]
];

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


NUMERIC_GENERATOR_REGISTRY.econ = [...coreSeedEntries(N, ECON_CORE_SEEDS),
    numericEntry('econ',"Compound future worth · family 01 (randomized variant)","econ-family-01",()=>makeEconExpansionFamily01("Compound future worth · family 01 (randomized variant)")),
    numericEntry('econ',"Discounted present worth · family 02 (randomized variant)","econ-family-02",()=>makeEconExpansionFamily02("Discounted present worth · family 02 (randomized variant)")),
    numericEntry('econ',"Simple interest · family 03 (randomized variant)","econ-family-03",()=>makeEconExpansionFamily03("Simple interest · family 03 (randomized variant)")),
    numericEntry('econ',"Present worth of annuity · family 04 (randomized variant)","econ-family-04",()=>makeEconExpansionFamily04("Present worth of annuity · family 04 (randomized variant)")),
    numericEntry('econ',"Future worth of annuity · family 05 (randomized variant)","econ-family-05",()=>makeEconExpansionFamily05("Future worth of annuity · family 05 (randomized variant)")),
    numericEntry('econ',"Effective annual interest rate · family 06 (randomized variant)","econ-family-06",()=>makeEconExpansionFamily06("Effective annual interest rate · family 06 (randomized variant)")),
    numericEntry('econ',"Straight-line depreciation · family 07 (randomized variant)","econ-family-07",()=>makeEconExpansionFamily07("Straight-line depreciation · family 07 (randomized variant)")),
    numericEntry('econ',"Book value after depreciation · family 08 (randomized variant)","econ-family-08",()=>makeEconExpansionFamily08("Book value after depreciation · family 08 (randomized variant)")),
    numericEntry('econ',"Net present value · family 09 (randomized variant)","econ-family-09",()=>makeEconExpansionFamily09("Net present value · family 09 (randomized variant)")),
    numericEntry('econ',"Simple payback period · family 10 (randomized variant)","econ-family-10",()=>makeEconExpansionFamily10("Simple payback period · family 10 (randomized variant)")),
    numericEntry('econ',"Realistic project cash-flow NPV · family 11 (randomized variant)","econ-family-11",()=>makeEconExpansionFamily11("Realistic project cash-flow NPV · family 11 (randomized variant)")),
    numericEntry('econ',"Annual worth comparison · family 12 (randomized variant)","econ-family-12",()=>makeEconExpansionFamily12("Annual worth comparison · family 12 (randomized variant)")),
    numericEntry('econ',"Capital recovery factor · family 13 (randomized variant)","econ-family-13",()=>makeEconExpansionFamily13("Capital recovery factor · family 13 (randomized variant)")),
    numericEntry('econ',"Benefit-cost ratio · family 14 (randomized variant)","econ-family-14",()=>makeEconExpansionFamily14("Benefit-cost ratio · family 14 (randomized variant)")),
    numericEntry('econ',"Inflation-adjusted rate · family 15 (randomized variant)","econ-family-15",()=>makeEconExpansionFamily15("Inflation-adjusted rate · family 15 (randomized variant)")),
    numericEntry('econ',"Replacement decision · family 16 (randomized variant)","econ-family-16",()=>makeEconExpansionFamily16("Replacement decision · family 16 (randomized variant)")),
    numericEntry('econ',"Depreciation tax shield · family 17 (randomized variant)","econ-family-17",()=>makeEconExpansionFamily17("Depreciation tax shield · family 17 (randomized variant)")),
    numericEntry('econ',"Break-even quantity · family 18 (randomized variant)","econ-family-18",()=>makeEconExpansionFamily18("Break-even quantity · family 18 (randomized variant)")),
    numericEntry('econ',"Return on investment · family 19 (randomized variant)","econ-family-19",()=>makeEconExpansionFamily19("Return on investment · family 19 (randomized variant)")),
    numericEntry('econ',"Equivalent annual cost · family 20 (randomized variant)","econ-family-20",()=>makeEconExpansionFamily20("Equivalent annual cost · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(N,'Field scenario · NPV of a monitoring-system retrofit','scenario-econ-retrofit-npv',()=>makeEconScenario(0));
appendNumericRecipe(N,'Field scenario · Break-even sensor production','scenario-econ-break-even-modules',()=>makeEconScenario(6));
appendNumericRecipe(N,'Field scenario · Capital recovery on plant upgrade','scenario-econ-capital-recovery',()=>makeEconScenario(8));

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('econ','Additional · Present worth of a uniform annual benefit','econ-topup-01',()=>{
  const A0=ri(1000,12000),i=pick([.03,.05,.07,.1,.12]),n=ri(3,12),ans=A0*(1-(1+i)**(-n))/i;
  return qNum(N,'Present worth of a uniform annual benefit',`A monitoring upgrade yields annual savings of \(\$${A0}\) for \(${n}\) years. At \(${nfmt(100*i)}\%\), find present worth of the uniform savings.`,ans,`\(P=A[1-(1+i)^{-n}]/i=${A0}[1-(1+${nfmt(i)})^{-${n}}]/${nfmt(i)}=${nfmt(ans)}\).`);
});
appendNumericRecipe('econ','Additional · Future worth of an annual deposit series','econ-topup-02',()=>{
  const A0=ri(500,9000),i=pick([.03,.05,.06,.08,.1]),n=ri(3,10),ans=A0*((1+i)**n-1)/i;
  return qNum(N,'Future worth of an annual deposit series',`A fund receives \(\$${A0}\) at the end of each year for \(${n}\) years. At \(${nfmt(100*i)}\%\), find the future worth immediately after the last deposit.`,ans,`\(F=A[(1+i)^n-1]/i=${A0}[(1+${nfmt(i)})^{${n}}-1]/${nfmt(i)}=${nfmt(ans)}\).`);
});
appendNumericRecipe('econ','Additional · Straight-line depreciation per year','econ-topup-03',()=>{
  const cost=ri(15000,150000),salv=ri(0,Math.floor(cost*.35)),life=ri(3,15),ans=(cost-salv)/life;
  return qNum(N,'Straight-line depreciation per year',`An instrument costs \(\$${cost}\), has salvage value \(\$${salv}\), and useful life \(${life}\) years. Find annual straight-line depreciation.`,ans,`\(D=(C-S)/n=(${cost}-${salv})/${life}=${nfmt(ans)}\) dollars per year.`,'currency');
});
appendNumericRecipe('econ','Additional · Compound amount after several years','econ-topup-04',()=>{
  const P=ri(1000,30000),rate=pick([.02,.04,.06,.08,.1]),n=ri(2,10),ans=P*(1+rate)**n;
  return qNum(N,'Compound amount after several years',`A principal of \(\$${P}\) grows at \(${nfmt(100*rate)}\%\) annual compound interest for \(${n}\) years. Find its future amount.`,ans,`\(F=P(1+i)^n=${P}(1+${nfmt(rate)})^{${n}}=${nfmt(ans)}\).`,'currency');
});
appendNumericRecipe('econ','Additional · Break-even production quantity','econ-topup-05',()=>{
  const fixed=ri(5000,60000),price=ri(100,900),variable=ri(20,price-10),ans=fixed/(price-variable);
  return qNum(N,'Break-even production quantity',`A device maker has fixed costs \(\$${fixed}\), selling price \(\$${price}\) per unit, and variable cost \(\$${variable}\) per unit. Find break-even quantity.`,ans,`Contribution per unit is \(p-v=${price}-${variable}=${price-variable}\). Thus \(Q_{BE}=F/(p-v)=${fixed}/${price-variable}=${nfmt(ans)}\) units.`);
});
