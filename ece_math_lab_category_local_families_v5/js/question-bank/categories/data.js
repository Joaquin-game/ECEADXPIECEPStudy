/* data: seed entries, explicit expansion families, and category-specific additions. */

/* Topic-local statistical helpers required by this category's expansion families. */
function dataSample(n, base = ri(20, 80)) {
  const values = Array.from({ length: n }, (_, i) => base + ri(-7, 7) + (i % 2));
  if (values.length > 1 && values.every(value => value === values[0])) values[values.length - 1]++;
  return values;
}
function dataMean(values) { return values.reduce((sum, value) => sum + value, 0) / values.length; }
function dataVariance(values, isSample = true) {
  const average = dataMean(values);
  return values.reduce((sum, value) => sum + (value - average) ** 2, 0) / (isSample ? values.length - 1 : values.length);
}


function makeDataExpansionFamily01(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(5,30)).sort((a,b)=>a-b),m=dataMean(xs),sorted=xs.slice().sort((a,b)=>a-b),med=sorted.length%2?sorted[(sorted.length-1)/2]:(sorted[sorted.length/2-1]+sorted[sorted.length/2])/2;return qNum(T,title,v?`A sample of measurements is \\([${xs.join(', ')}]\\). Find the median.`:`A sample of measurements is \\([${xs.join(', ')}]\\). Find its arithmetic mean.`,v?med:m,v?`The middle value(s) give median \\(${nfmt(med)}\\).`:`\\(\\bar x=\\sum x_i/n=${nfmt(m)}\\).`)
  }
}
function makeDataExpansionFamily02(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(5,20)),ans=v?dataVariance(xs,true):dataVariance(xs,false);return qNum(T,title,v?`For data \\([${xs.join(', ')}]\\), find sample variance \\(s^2\\).`:`For data \\([${xs.join(', ')}]\\), find population variance \\(\\sigma^2\\).`,ans,v?`Divide squared deviations by \\(n-1\\): \\(s^2=${nfmt(ans)}\\).`:`Divide squared deviations by \\(n\\): \\(\\sigma^2=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily03(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(4,16)),ans=v?Math.sqrt(dataVariance(xs,true)):Math.sqrt(dataVariance(xs,false));return qNum(T,title,v?`Find sample standard deviation of \\([${xs.join(', ')}]\\).`:`Find population standard deviation of \\([${xs.join(', ')}]\\).`,ans,v?`\\(s=\\sqrt{s^2}=${nfmt(ans)}\\).`:`\\(\\sigma=\\sqrt{\\sigma^2}=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily04(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(2,15)).sort((a,b)=>a-b),n=xs.length,lower=xs.slice(0,Math.floor(n/2)),upper=xs.slice(Math.ceil(n/2)),medianOf=a=>{const m=a.length;return m%2?a[(m-1)/2]:(a[m/2-1]+a[m/2])/2;},iqr=medianOf(upper)-medianOf(lower);return qNum(T,title,v?`For sorted sample \\([${xs.join(', ')}]\\), find interquartile range using the median-of-halves convention.`:`For data \\([${xs.join(', ')}]\\), find the range.`,v?iqr:xs[n-1]-xs[0],v?`\\(IQR=Q_3-Q_1=${nfmt(iqr)}\\).`:`\\(Range=max-min=${xs[n-1]-xs[0]}\\).`)
  }
}
function makeDataExpansionFamily05(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(10,30)),m=dataMean(xs),sd=Math.sqrt(dataVariance(xs,true)),index=ri(0,xs.length-1),ans=v?(xs[index]-m)/sd:sd/Math.sqrt(xs.length);return qNum(T,title,v?`For sample \\([${xs.join(', ')}]\\), find z-score of observation \\(${xs[index]}\\) using sample standard deviation.`:`For sample \\([${xs.join(', ')}]\\), find standard error of the mean.`,ans,v?`\\(z=(x-\\bar x)/s=${nfmt(ans)}\\).`:`\\(SE=s/\\sqrt{n}=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily06(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(3,8),ri(10,25)),m=dataMean(xs),s=Math.sqrt(dataVariance(xs,true)),ans=v?1.96*s/Math.sqrt(xs.length):s/Math.sqrt(xs.length);return qNum(T,title,v?`For sample \\([${xs.join(', ')}]\\), use 1.96 to estimate the 95% margin of error for the mean.`:`For sample \\([${xs.join(', ')}]\\), find standard error of the mean.`,ans,v?`\\(E=1.96s/\\sqrt n=${nfmt(ans)}\\).`:`\\(SE=s/\\sqrt n=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily07(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(10,25)),m=dataMean(xs),s=Math.sqrt(dataVariance(xs,true)),mu0=m+pick([-3,-2,-1,1,2,3]),ans=v?(m-mu0)/(s/Math.sqrt(xs.length)):s/Math.sqrt(xs.length);return qNum(T,title,v?`One-sample t test: data \\([${xs.join(', ')}]\\), hypothesized mean \\(\\mu_0=${mu0}\\). Find the t statistic.`:`For the same sample \\([${xs.join(', ')}]\\), find standard error of the mean.`,ans,v?`\\(t=(\\bar x-\\mu_0)/(s/\\sqrt n)=${nfmt(ans)}\\).`:`\\(SE=s/\\sqrt n=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily08(title){
  const v=ri(0,1)===1;
  {
      const x1=dataSample(ri(3,8),ri(10,22)),x2=dataSample(ri(3,8),ri(12,27)),m1=dataMean(x1),m2=dataMean(x2),s1=Math.sqrt(dataVariance(x1,true)),s2=Math.sqrt(dataVariance(x2,true)),se=Math.sqrt(s1*s1/x1.length+s2*s2/x2.length),ans=v?se:(m1-m2)/se;return qNum(T,title,v?`Welch two-sample test: samples \\([${x1.join(', ')}]\\) and \\([${x2.join(', ')}]\\). Find the standard error of the difference in means.`:`For samples \\([${x1.join(', ')}]\\) and \\([${x2.join(', ')}]\\), find Welch's two-sample t statistic.`,ans,v?`\\(SE=\\sqrt{s_1^2/n_1+s_2^2/n_2}=${nfmt(ans)}\\).`:`\\(t=(\\bar x_1-\\bar x_2)/SE=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily09(title){
  const v=ri(0,1)===1;
  {
      const obs=Array.from({length:ri(3,5)},()=>ri(8,24)),N0=obs.reduce((s,x)=>s+x,0),ex=N0/obs.length,chi=obs.reduce((s,x)=>s+(x-ex)**2/ex,0);return qNum(T,title,v?`For observed counts \\([${obs.join(', ')}]\\) under equal expected proportions, find degrees of freedom.`:`For observed counts \\([${obs.join(', ')}]\\) under equal expected proportions, find Pearson's chi-square goodness-of-fit statistic.`,v?obs.length-1:chi,v?`There are ${obs.length} categories, so \\(df=k-1=${obs.length-1}\\).`:`Expected count is \\(E=N/k=${nfmt(ex)}\\), and \\(\\chi^2=${nfmt(chi)}\\).`)
  }
}
function makeDataExpansionFamily10(title){
  const v=ri(0,1)===1;
  {
      const a=ri(5,20),b=ri(5,20),c=ri(5,20),d=ri(5,20),rows=[a+b,c+d],cols=[a+c,b+d],N0=rows[0]+rows[1],exp=rows[0]*cols[0]/N0,chi=[[a,b],[c,d]].reduce((s,row,i)=>s+row.reduce((ss,o,j)=>{const e=rows[i]*cols[j]/N0;return ss+(o-e)**2/e;},0),0);return qNum(T,title,v?`A 2×2 independence table is \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\). Find expected count in cell (row 1, column 1).`:`For the 2×2 table \\(\\begin{pmatrix}${a}&${b}\\\\${c}&${d}\\end{pmatrix}\\), compute Pearson's chi-square statistic.`,v?exp:chi,v?`\\(E_{11}=row_1\\,column_1/N=${nfmt(exp)}\\).`:`Summing all four \\((O-E)^2/E\\) contributions gives \\(\\chi^2=${nfmt(chi)}\\).`)
  }
}
function makeDataExpansionFamily11(title){
  const v=ri(0,1)===1;
  {
      const makeGroup=()=>dataSample(ri(3,5),ri(10,18)),groups=[makeGroup(),makeGroup(),makeGroup(),...(v?[makeGroup()]:[])],all=groups.flat(),gm=dataMean(all),ssb=groups.reduce((s,g)=>s+g.length*(dataMean(g)-gm)**2,0),ssw=groups.reduce((s,g)=>s+g.reduce((t,x)=>t+(x-dataMean(g))**2,0),0),dfb=groups.length-1,dfw=all.length-groups.length,Fv=(ssb/dfb)/(ssw/dfw);return qNum(T,title,v?`One-way ANOVA with four generated groups: \\([${groups[0].join(',')}], [${groups[1].join(',')}], [${groups[2].join(',')}], [${groups[3].join(',')}]\\). Find the F statistic.`:`One-way ANOVA with three groups: \\([${groups[0].join(',')}], [${groups[1].join(',')}], [${groups[2].join(',')}]\\). Find the F statistic.`,Fv,v?`\\(F=(SS_B/3)/(SS_W/${dfw})=${nfmt(Fv)}\\), with \\(df_B=3\\), \\(df_W=${dfw}\\).`:`\\(F=(SS_B/2)/(SS_W/${dfw})=${nfmt(Fv)}\\), with \\(df_B=2\\), \\(df_W=${dfw}\\).`)
  }
}
function makeDataExpansionFamily12(title){
  const v=ri(0,1)===1;
  {
      const x=dataSample(ri(4,8),ri(1,8)),y=x.map(xx=>2*xx+ri(-3,3)),xm=dataMean(x),ym=dataMean(y),sxy=x.reduce((s,z,i)=>s+(z-xm)*(y[i]-ym),0),sxx=x.reduce((s,z)=>s+(z-xm)**2,0),syy=y.reduce((s,z)=>s+(z-ym)**2,0),ans=v?sxy/sxx:sxy/Math.sqrt(sxx*syy);return qNum(T,title,v?`For paired observations \\(x=[${x.join(', ')}]\\), \\(y=[${y.join(', ')}]\\), find least-squares regression slope.`:`For paired observations \\(x=[${x.join(', ')}]\\), \\(y=[${y.join(', ')}]\\), find Pearson correlation coefficient.`,ans,v?`\\(b_1=S_{xy}/S_{xx}=${nfmt(ans)}\\).`:`\\(r=S_{xy}/\\sqrt{S_{xx}S_{yy}}=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily13(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(2,12)),m=dataMean(xs),s=Math.sqrt(dataVariance(xs,true)),z=1.96,ans=v?m+z*s/Math.sqrt(xs.length):m-z*s/Math.sqrt(xs.length);return qNum(T,title,v?`For sample \\([${xs.join(', ')}]\\), calculate the upper endpoint of an approximate 95% confidence interval for the mean.`:`For sample \\([${xs.join(', ')}]\\), calculate the lower endpoint of an approximate 95% confidence interval for the mean.`,ans,v?`\\(\\bar x+1.96s/\\sqrt n=${nfmt(ans)}\\).`:`\\(\\bar x-1.96s/\\sqrt n=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily14(title){
  const v=ri(0,1)===1;
  {
      const n=ri(10,50),p=rand(.1,.8),ans=v?Math.sqrt(n*p*(1-p)):n*p;return qNum(T,title,v?`A binomial model has \\(n=${n}\\), \\(p=${nfmt(p)}\\). Find standard deviation.`:`A binomial model has \\(n=${n}\\), \\(p=${nfmt(p)}\\). Find expected count.`,ans,v?`\\(\\sigma=\\sqrt{np(1-p)}=${nfmt(ans)}\\).`:`\\(E[X]=np=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily15(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(3,18)),m=dataMean(xs),s=Math.sqrt(dataVariance(xs,true)),ans=v?s/m*100:xs.reduce((a,b)=>a+Math.abs(b-m),0)/xs.length;return qNum(T,title,v?`For data \\([${xs.join(', ')}]\\), find coefficient of variation in percent using sample standard deviation.`:`For data \\([${xs.join(', ')}]\\), find mean absolute deviation from the mean.`,ans,v?`\\(CV=100s/\\bar x=${nfmt(ans)}\\%\\).`:`\\(MAD=\\sum|x_i-\\bar x|/n=${nfmt(ans)}\\).`,'number')
  }
}
function makeDataExpansionFamily16(title){
  const v=ri(0,1)===1;
  {
      const x1=dataSample(ri(4,8),ri(10,22)),x2=dataSample(ri(4,8),ri(12,28)),m1=dataMean(x1),m2=dataMean(x2),s1sq=dataVariance(x1,true),s2sq=dataVariance(x2,true),df=x1.length+x2.length-2,sp2=((x1.length-1)*s1sq+(x2.length-1)*s2sq)/df,ans=v?(m1-m2)/Math.sqrt(sp2*(1/x1.length+1/x2.length)):Math.sqrt(sp2);return qNum(T,title,v?`For independent samples \\([${x1.join(', ')}]\\) and \\([${x2.join(', ')}]\\), find the pooled-variance two-sample t statistic.`:`For the same independent samples, find pooled sample variance.` ,ans,v?`\\(t=(\\bar x_1-\\bar x_2)/(s_p\\sqrt{1/n_1+1/n_2})=${nfmt(ans)}\\).`:`\\(s_p^2=[(n_1-1)s_1^2+(n_2-1)s_2^2]/df=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily17(title){
  const v=ri(0,1)===1;
  {
      const x1=dataSample(ri(4,8),ri(2,10)),x2=dataSample(ri(4,8),ri(10,20)),m1=dataMean(x1),m2=dataMean(x2),s1sq=dataVariance(x1,true),s2sq=dataVariance(x2,true),sp=Math.sqrt(((x1.length-1)*s1sq+(x2.length-1)*s2sq)/(x1.length+x2.length-2)),ans=v?Math.abs(m1-m2)/sp:(m1-m2);return qNum(T,title,v?`Two groups have samples \\([${x1.join(', ')}]\\) and \\([${x2.join(', ')}]\\). Find Cohen's d using pooled SD.`:`For the same samples, find difference in sample means \\(\\bar x_1-\\bar x_2\\).`,ans,v?`\\(d=(\\bar x_1-\\bar x_2)/s_p=${nfmt(ans)}\\) in magnitude.`:`\\(\\bar x_1-\\bar x_2=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily18(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(1,8)),ys=xs.map(x=>3*x+ri(-2,2)),xm=dataMean(xs),ym=dataMean(ys),cov=xs.reduce((s,x,i)=>s+(x-xm)*(ys[i]-ym),0)/(xs.length-1),ans=v?cov:cov/Math.sqrt(dataVariance(xs,true)*dataVariance(ys,true));return qNum(T,title,v?`For paired data \\(x=[${xs.join(', ')}]\\), \\(y=[${ys.join(', ')}]\\), find sample covariance.`:`For the same paired data, find Pearson correlation coefficient.`,ans,v?`\\(s_{xy}=\\sum(x_i-\\bar x)(y_i-\\bar y)/(n-1)=${nfmt(ans)}\\).`:`\\(r=s_{xy}/(s_xs_y)=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily19(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(5,25)),weights=xs.map((_,i)=>i+1),wmean=xs.reduce((s,x,i)=>s+x*weights[i],0)/weights.reduce((s,w)=>s+w,0),ans=v?Math.max(...xs)-Math.min(...xs):wmean;return qNum(T,title,v?`Measurements \\([${xs.join(', ')}]\\) were taken with increasing index weights. Find data range.`:`Measurements \\([${xs.join(', ')}]\\) have weights \\([${weights.join(', ')}]\\). Find weighted mean.`,ans,v?`\\(range=max-min=${ans}\\).`:`\\(\\bar x_w=\\sum w_ix_i/\\sum w_i=${nfmt(ans)}\\).`)
  }
}
function makeDataExpansionFamily20(title){
  const v=ri(0,1)===1;
  {
      const xs=dataSample(ri(4,8),ri(2,14)),n=xs.length,m=dataMean(xs),abs=xs.map(x=>Math.abs(x-m)).sort((a,b)=>a-b),med=abs.length%2?abs[(n-1)/2]:(abs[n/2-1]+abs[n/2])/2,ans=v?med:xs.reduce((s,x)=>s+(x-m)**2,0);return qNum(T,title,v?`For data \\([${xs.join(', ')}]\\), find median absolute deviation from the mean.`:`For data \\([${xs.join(', ')}]\\), find sum of squared deviations from the mean.` ,ans,v?`Median of \\(|x_i-\\bar x|\\) is \\(${nfmt(ans)}\\).`:`\\(SS=\\sum(x_i-\\bar x)^2=${nfmt(ans)}\\).`)
  }
}



/* Category-local seed recipes; each row is registered as its own numeric generator. */
const DATA_SUP_NAMES = ["Arithmetic mean", "Median of five values", "Population variance", "Population standard deviation", "Z-score", "Coefficient of variation", "Standard error of mean", "Absolute percentage error", "Weighted mean", "Pearson correlation"];

const DATA_EXTRA_NAMES = ["One-sample t statistic", "Two-sample Welch t statistic", "Chi-square goodness-of-fit", "Chi-square independence", "One-way ANOVA F statistic", "Standard error of mean", "Confidence-interval margin", "Binomial standard deviation", "Pearson correlation", "Regression slope"];

function makeDataSupplement(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,2+variant), b=ri(2,4+variant), k=ri(2,5+variant), x=ri(2,7+variant), t=ri(1,3), w=ri(2,4+variant), z=ri(5,8+variant);
  const title=`${DATA_SUP_NAMES[fam]} · set ${variant}`;
        if(fam===0){let xs=Array.from({length:5},()=>ri(5,45)),ans=xs.reduce((u,v)=>u+v,0)/xs.length;return qNum(T,title,`Find the arithmetic mean of \\([${xs.join(', ')}]\\).`,ans,`\\(\\bar x=\\sum x_i/n=${nfmt(ans)}\\).`)}
      if(fam===1){let xs=Array.from({length:5},()=>ri(1,40)).sort((u,v)=>u-v),ans=xs[2];return qNum(T,title,`Find the median of the ordered data \\([${xs.join(', ')}]\\).`,ans,`For five ordered values, the median is the third value: \\(${ans}\\).`)}
      if(fam===2){let xs=Array.from({length:5},()=>ri(2,18)),m=xs.reduce((u,v)=>u+v,0)/5,ans=xs.reduce((u,v)=>u+(v-m)**2,0)/5;return qNum(T,title,`Find population variance of \\([${xs.join(', ')}]\\).`,ans,`\\(\\sigma^2=\\sum(x_i-\\mu)^2/N=${nfmt(ans)}\\).`)}
      if(fam===3){let xs=Array.from({length:5},()=>ri(2,18)),m=xs.reduce((u,v)=>u+v,0)/5,v=xs.reduce((u,v)=>u+(v-m)**2,0)/5,ans=Math.sqrt(v);return qNum(T,title,`Find population standard deviation of \\([${xs.join(', ')}]\\).`,ans,`\\(\\sigma=\\sqrt{\\sigma^2}=\\sqrt{${nfmt(v)}}=${nfmt(ans)}\\).`)}
      if(fam===4){let mu=ri(20,80),sd=ri(2,15),xx=ri(10,100),ans=(xx-mu)/sd;return qNum(T,title,`A dataset has mean \\(\\mu=${mu}\\) and standard deviation \\(\\sigma=${sd}\\). Find z-score for \\(x=${xx}\\).`,ans,`\\(z=(x-\\mu)/\\sigma=(${xx}-${mu})/${sd}=${nfmt(ans)}\\).`)}
      if(fam===5){let mu=ri(20,100),sd=rand(2,15),ans=sd/mu*100;return qNum(T,title,`A dataset has mean \\(\\bar x=${mu}\\) and standard deviation \\(s=${nfmt(sd)}\\). Find coefficient of variation in percent.`,ans,`\\(CV=100s/\\bar x=${nfmt(ans)}\\%\\).`,'percent')}
      if(fam===6){let sd=rand(2,12),nn=ri(9,100),ans=sd/Math.sqrt(nn);return qNum(T,title,`Sample size is \\(n=${nn}\\), with standard deviation estimate \\(s=${nfmt(sd)}\\). Find standard error of the mean.`,ans,`\\(SE=s/\\sqrt n=${nfmt(ans)}\\).`)}
      if(fam===7){let truth=ri(10,100),meas=truth+ri(-8,8),ans=Math.abs(meas-truth)/truth*100;return qNum(T,title,`True value is \\(${truth}\\), measured value is \\(${meas}\\). Find absolute percentage error.`,ans,`\\(APE=|measured-true|/|true|\\times100=${nfmt(ans)}\\%\\).`,'percent')}
      if(fam===8){let a1=ri(40,100),b1=ri(40,100),wa=ri(1,5),wb=ri(1,5),ans=(a1*wa+b1*wb)/(wa+wb);return qNum(T,title,`Values \\(${a1}\\) and \\(${b1}\\) have weights \\(${wa}\\) and \\(${wb}\\). Find weighted mean.`,ans,`\\(\\bar x_w=(${a1}(${wa})+${b1}(${wb}))/(${wa}+${wb})=${nfmt(ans)}\\).`)}
      {let xs=[1,2,3,4,5],slope=ri(1,5),inter=ri(-3,5),ys=xs.map(xx=>slope*xx+inter+ri(-2,2)),mx=3,my=ys.reduce((u,v)=>u+v,0)/5,ans=xs.reduce((u,v,i)=>u+(v-mx)*(ys[i]-my),0)/xs.reduce((u,v)=>u+(v-mx)**2,0);return qNum(T,title,`For paired data \\(x=[${xs.join(',')}], y=[${ys.join(',')}]\\), find the least-squares slope.`,ans,`\\(b_1=\\sum(x_i-\\bar x)(y_i-\\bar y)/\\sum(x_i-\\bar x)^2=${nfmt(ans)}\\).`)}
}


function makeDataExtraSeed(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const a=ri(1,3+variant), b=ri(2,5+variant), k=ri(1,4+variant), x=ri(2,6+variant), tt=ri(1,3), w=ri(1,4+variant), z=ri(5,9+variant);
  const title=`${DATA_EXTRA_NAMES[fam]} · variation ${variant}`;
        if(fam===0){let n=ri(8,40),mu=rand(4,40),m0=rand(3,38),sd=rand(1.5,8),ans=(mu-m0)/(sd/Math.sqrt(n));return qNum(T,title,`A one-sample t test has \\(\\bar x=${nfmt(mu)}\\), \\(\\mu_0=${nfmt(m0)}\\), \\(s=${nfmt(sd)}\\), and \\(n=${n}\\). Find \\(t=(\\bar x-\\mu_0)/(s/\\sqrt n)\\).`,ans,`\\(t=(${nfmt(mu)}-${nfmt(m0)})/(${nfmt(sd)}/\\sqrt{${n}})=${nfmt(ans)}\\).`)}
      if(fam===1){let n1=ri(8,30),n2=ri(8,30),m1=rand(10,50),m2=rand(10,50),s1=rand(2,9),s2=rand(2,9),ans=(m1-m2)/Math.sqrt(s1*s1/n1+s2*s2/n2);return qNum(T,title,`For a Welch two-sample t statistic, \\(\\bar x_1=${nfmt(m1)}, s_1=${nfmt(s1)}, n_1=${n1}\\) and \\(\\bar x_2=${nfmt(m2)}, s_2=${nfmt(s2)}, n_2=${n2}\\). Find \\(t=(\\bar x_1-\\bar x_2)/\\sqrt{s_1^2/n_1+s_2^2/n_2}\\).`,ans,`Substitute the two independent-sample estimates into the Welch statistic to obtain \\(t=${nfmt(ans)}\\).`)}
      if(fam===2){let obs=[ri(8,22),ri(8,22),ri(8,22)],tot=obs.reduce((u,v)=>u+v,0),exp=tot/3,ans=obs.reduce((sum,o)=>sum+(o-exp)**2/exp,0);return qNum(T,title,`A chi-square goodness-of-fit test has observed counts \\([${obs.join(', ')}]\\) and equal expected proportions. Find \\(\\chi^2=\\sum(O-E)^2/E\\).`,ans,`Total \\(N=${tot}\\), so each expected count is \\(E=${nfmt(exp)}\\). Summing contributions gives \\(\\chi^2=${nfmt(ans)}\\).`)}
      if(fam===3){let obs=[[ri(5,20),ri(5,20)],[ri(5,20),ri(5,20)]],row=[obs[0][0]+obs[0][1],obs[1][0]+obs[1][1]],col=[obs[0][0]+obs[1][0],obs[0][1]+obs[1][1]],Ntot=row[0]+row[1],ans=0;for(let i=0;i<2;i++)for(let j=0;j<2;j++){let ex=row[i]*col[j]/Ntot;ans+=(obs[i][j]-ex)**2/ex}return qNum(T,title,`For a \\(2\\times2\\) chi-square test of independence, observed table is \\(\\begin{pmatrix}${obs[0][0]}&${obs[0][1]}\\\\${obs[1][0]}&${obs[1][1]}\\end{pmatrix}\\). Find Pearson \\(\\chi^2=\\sum(O-E)^2/E\\) using row and column totals.`,ans,`Calculate each expected count as \\(E_{ij}=(row_i)(column_j)/N\\), then sum \\((O-E)^2/E\\) to get \\(\\chi^2=${nfmt(ans)}\\).`)}
      if(fam===4){let ssb=ri(12,90),ssw=ri(40,180),dfb=2,dfw=9,ans=(ssb/dfb)/(ssw/dfw);return qNum(T,title,`A one-way ANOVA has \\(SS_{between}=${ssb}\\), \\(df_{between}=${dfb}\\), \\(SS_{within}=${ssw}\\), and \\(df_{within}=${dfw}\\). Find \\(F=MS_B/MS_W\\).`,ans,`\\(MS_B=${ssb}/${dfb}=${nfmt(ssb/dfb)}\\), \\(MS_W=${ssw}/${dfw}=${nfmt(ssw/dfw)}\\), so \\(F=${nfmt(ans)}\\).`)}
      if(fam===5){let n=ri(9,100),sd=rand(1.5,10),ans=sd/Math.sqrt(n);return qNum(T,title,`For sample size \\(n=${n}\\) and estimated standard deviation \\(s=${nfmt(sd)}\\), find standard error of mean.`,ans,`\\(SE=s/\\sqrt n=${nfmt(ans)}\\).`)}
      if(fam===6){let n=ri(16,100),sd=rand(2,12),ans=1.96*sd/Math.sqrt(n);return qNum(T,title,`For a large-sample 95% confidence interval, \\(s=${nfmt(sd)}\\) and \\(n=${n}\\). Find margin of error \\(E=1.96s/\\sqrt n\\).`,ans,`\\(E=1.96(${nfmt(sd)})/\\sqrt{${n}}=${nfmt(ans)}\\).`)}
      if(fam===7){let n=ri(10,60),p=rand(.15,.85),ans=Math.sqrt(n*p*(1-p));return qNum(T,title,`A binomial random variable has \\(n=${n}\\) and \\(p=${nfmt(p)}\\). Find its standard deviation.`,ans,`\\(\\sigma=\\sqrt{np(1-p)}=${nfmt(ans)}\\).`)}
      if(fam===8){let mx=ri(5,15),my=ri(8,22),sx=ri(2,7),sy=ri(3,9),cov=rand(-.8,.8)*sx*sy,ans=cov/(sx*sy);return qNum(T,title,`For paired samples, covariance is \\(s_{xy}=${nfmt(cov)}\\), and standard deviations are \\(s_x=${sx}\\), \\(s_y=${sy}\\). Find Pearson correlation \\(r=s_{xy}/(s_xs_y)\\).`,ans,`\\(r=${nfmt(cov)}/(${sx}\\cdot${sy})=${nfmt(ans)}\\).`)}
      let xs=[1,2,3,4,5],slope=ri(1,5),inter=ri(-3,5),ys=xs.map(xx=>slope*xx+inter+ri(-2,2)),xbar=3,ybar=ys.reduce((u,v)=>u+v,0)/5,ans=xs.reduce((u,v,i)=>u+(v-xbar)*(ys[i]-ybar),0)/xs.reduce((u,v)=>u+(v-xbar)**2,0);return qNum(T,title,`For paired data \\(x=[${xs.join(',')}], y=[${ys.join(',')}]\\), find the least-squares regression slope.`,ans,`\\(b_1=\\sum(x_i-\\bar x)(y_i-\\bar y)/\\sum(x_i-\\bar x)^2=${nfmt(ans)}\\).`)
}


function makeDataScenario(index){
  const fam=index%10, variant=Math.floor(index/10)+1;
  const person=pick(['Maya','Luis','Ari','Nina','Sam','Leah','Rafael','Tessa','Noah','Ivy']);
      const sample=(n,base=ri(20,80))=>{const data=Array.from({length:n},(_,i)=>base+ri(-7,7)+(i%2));if(data.length>1&&data.every(v=>v===data[0]))data[data.length-1]++;return data;};
    const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
    const variance=(a,m=mean(a))=>a.reduce((s,x)=>s+(x-m)**2,0)/(a.length-1);
    if(fam===0){const n=ri(2,8),data=sample(n),ans=mean(data);return qNum(T,`Field case: sensor mean ${variant}`,`${person} records ${n} calibration readings (units): \\([${data.join(', ')}]\\). Find their sample arithmetic mean.`,ans,`\\(\\bar x=\\frac{\\sum x_i}{n}=\\frac{${data.reduce((u,v)=>u+v,0)}}{${n}}=${nfmt(ans)}\\).`)}
    if(fam===1){const a=sample(ri(3,8),ri(30,55)),b=sample(ri(3,8),ri(40,70)),m1=mean(a),m2=mean(b),v1=variance(a),v2=variance(b),ans=(m1-m2)/Math.sqrt(v1/a.length+v2/b.length);return qNum(T,`Field case: two-sample Welch t ${variant}`,`${person} compares two independent sensor lots. Lot A readings: \\([${a.join(', ')}]\\); Lot B readings: \\([${b.join(', ')}]\\). Using the Welch two-sample statistic, compute \\(t=(\\bar x_A-\\bar x_B)/\\sqrt{s_A^2/n_A+s_B^2/n_B}\\).`,ans,`\\(\\bar x_A=${nfmt(m1)}, s_A^2=${nfmt(v1)}, n_A=${a.length}\\); \\(\\bar x_B=${nfmt(m2)}, s_B^2=${nfmt(v2)}, n_B=${b.length}\\). Hence \\(t=(${nfmt(m1)}-${nfmt(m2)})/\\sqrt{${nfmt(v1)}/${a.length}+${nfmt(v2)}/${b.length}}=${nfmt(ans)}\\).`)}
    if(fam===2){const groups=Array.from({length:ri(3,4)},(_,g)=>{const n=ri(3,6),base=25+g*ri(5,10);return Array.from({length:n},(_,i)=>base+ri(-4,4)+(i%3)-1)});const flat=groups.flat(),grand=mean(flat),k=groups.length,N0=flat.length;let ssb=0,ssw=0;groups.forEach(g=>{const m=mean(g);ssb+=g.length*(m-grand)**2;ssw+=g.reduce((u,v)=>u+(v-m)**2,0)});if(ssw<1e-9){groups[0][0]++;const fixed=groups.flat(),fixedGrand=mean(fixed);ssb=0;ssw=0;groups.forEach(g=>{const gm=mean(g);ssb+=g.length*(gm-fixedGrand)**2;ssw+=g.reduce((u,v)=>u+(v-gm)**2,0)});};const dfb=k-1,dfw=N0-k,ans=(ssb/dfb)/(ssw/dfw),txt=groups.map((g,i)=>`Group ${String.fromCharCode(65+i)}: [${g.join(', ')}]`).join('; ');return qNum(T,`Field case: one-way ANOVA ${variant}`,`${person} compares calibration results across ${k} manufacturing lines. Samples are ${txt}. Compute the one-way ANOVA statistic \\(F=MS_B/MS_W\\).`,ans,`There are \\(k=${k}\\) groups and \\(N=${N0}\\) observations. Grand mean \\(\\bar x=${nfmt(grand)}\\); \\(SS_B=${nfmt(ssb)}\\), \\(SS_W=${nfmt(ssw)}\\). Thus \\(F=(SS_B/${dfb})/(SS_W/${dfw})=${nfmt(ans)}\\).`)}
    if(fam===3){const obs=Array.from({length:4},()=>ri(10,35)),total=obs.reduce((u,v)=>u+v,0),ex=total/4,ans=obs.reduce((u,v)=>u+(v-ex)**2/ex,0);return qNum(T,`Field case: chi-square goodness-of-fit ${variant}`,`${person} logs defect types with observed counts \\([${obs.join(', ')}]\\). Under a uniform four-category model, compute Pearson \\(\\chi^2=\\sum(O-E)^2/E\\).`,ans,`Total \\(N=${total}\\) gives expected count \\(E=${nfmt(ex)}\\) per category. Summing the four contributions gives \\(\\chi^2=${nfmt(ans)}\\).`)}
    if(fam===4){const tab=Array.from({length:3},()=>[ri(5,28),ri(5,28)]),rows=tab.map(r=>r[0]+r[1]),cols=[tab.reduce((u,r)=>u+r[0],0),tab.reduce((u,r)=>u+r[1],0)],tot=rows.reduce((u,v)=>u+v,0);let ans=0;tab.forEach((r,i)=>r.forEach((o,j)=>{const ex=rows[i]*cols[j]/tot;ans+=(o-ex)**2/ex}));return qNum(T,`Field case: chi-square independence ${variant}`,`${person} records shift (rows) by pass/fail status (columns). Observed 3×2 table: \\(\\begin{pmatrix}${tab.map(r=>r.join('&')).join('\\')}\\end{pmatrix}\\). Compute Pearson's chi-square statistic for independence.`,ans,`For each cell use \\(E_{ij}=row_i\\,column_j/N\\), with \\(N=${tot}\\). Summing \\((O-E)^2/E\\) over six cells gives \\(\\chi^2=${nfmt(ans)}\\).`)}
    if(fam===5){const data=sample(ri(2,8)),m=mean(data),s2=variance(data,m),ans=Math.sqrt(s2);return qNum(T,`Field case: sample standard deviation ${variant}`,`${person} measures response times (ms): \\([${data.join(', ')}]\\). Find the sample standard deviation using denominator \\(n-1\\).`,ans,`\\(\\bar x=${nfmt(m)}\\), \\(s=\\sqrt{\\sum(x_i-\\bar x)^2/(n-1)}=\\sqrt{${nfmt(s2)}}=${nfmt(ans)}\\).`)}
    if(fam===6){const data=sample(ri(2,8)).sort((a,b)=>a-b),n=data.length,med=n%2?data[(n-1)/2]:(data[n/2-1]+data[n/2])/2;return qNum(T,`Field case: median response ${variant}`,`${person} obtains response-time readings \\([${data.join(', ')}]\\) ms. Find the median.`,med,`The sorted sample has ${n} values${n%2?' and the middle value is '+med:`; the middle two are ${data[n/2-1]} and ${data[n/2]}, whose average is ${nfmt(med)}`}.`)}
    if(fam===7){const n=ri(2,8),sd=rand(1.5,9),ans=1.96*sd/Math.sqrt(n);return qNum(T,`Field case: confidence margin ${variant}`,`${person} has \\(n=${n}\\) measurements and sample standard deviation \\(s=${nfmt(sd)}\\). Using the large-sample 95% multiplier 1.96, compute margin of error \\(E=1.96s/\\sqrt n\\).`,ans,`\\(E=1.96(${nfmt(sd)})/\\sqrt{${n}}=${nfmt(ans)}\\).`)}
    if(fam===8){const n=ri(3,8),xs=Array.from({length:n},(_,i)=>i+1),a=ri(1,5),b=ri(10,30),ys=xs.map(x=>a*x+b+ri(-3,3)),mx=mean(xs),my=mean(ys),ans=xs.reduce((u,x,i)=>u+(x-mx)*(ys[i]-my),0)/xs.reduce((u,x)=>u+(x-mx)**2,0);return qNum(T,`Field case: regression slope ${variant}`,`${person} records input setting \\(x=[${xs.join(', ')}]\\) and measured output \\(y=[${ys.join(', ')}]\\). Find the least-squares regression slope.`,ans,`\\(b_1=\\frac{\\sum(x_i-\\bar x)(y_i-\\bar y)}{\\sum(x_i-\\bar x)^2}=${nfmt(ans)}\\).`)}
    const data=sample(ri(2,8)),mu0=ri(25,65),m=mean(data),sd=Math.sqrt(variance(data,m)),ans=(m-mu0)/(sd/Math.sqrt(data.length));return qNum(T,`Field case: one-sample t ${variant}`,`${person} samples a sensor batch: \\([${data.join(', ')}]\\). Test against reference mean \\(\\mu_0=${mu0}\\) and compute \\(t=(\\bar x-\\mu_0)/(s/\\sqrt n)\\).`,ans,`\\(n=${data.length}, \\bar x=${nfmt(m)}, s=${nfmt(sd)}\\). Thus \\(t=(${nfmt(m)}-${mu0})/(${nfmt(sd)}/\\sqrt{${data.length}})=${nfmt(ans)}\\).`)
}


NUMERIC_GENERATOR_REGISTRY.data = [...numericSeedEntries(T, DATA_SUP_NAMES, 'Core', 'supplement-seed', makeDataSupplement),
    ...numericSeedEntries(T, DATA_EXTRA_NAMES, 'Applied', 'applied-seed', makeDataExtraSeed, 11),
    numericEntry('data',"Arithmetic mean · family 01 (randomized variant)","data-family-01",()=>makeDataExpansionFamily01("Arithmetic mean · family 01 (randomized variant)")),
    numericEntry('data',"Median of observations · family 02 (randomized variant)","data-family-02",()=>makeDataExpansionFamily02("Median of observations · family 02 (randomized variant)")),
    numericEntry('data',"Population variance · family 03 (randomized variant)","data-family-03",()=>makeDataExpansionFamily03("Population variance · family 03 (randomized variant)")),
    numericEntry('data',"Population standard deviation · family 04 (randomized variant)","data-family-04",()=>makeDataExpansionFamily04("Population standard deviation · family 04 (randomized variant)")),
    numericEntry('data',"Z-score · family 05 (randomized variant)","data-family-05",()=>makeDataExpansionFamily05("Z-score · family 05 (randomized variant)")),
    numericEntry('data',"Coefficient of variation · family 06 (randomized variant)","data-family-06",()=>makeDataExpansionFamily06("Coefficient of variation · family 06 (randomized variant)")),
    numericEntry('data',"Standard error of mean · family 07 (randomized variant)","data-family-07",()=>makeDataExpansionFamily07("Standard error of mean · family 07 (randomized variant)")),
    numericEntry('data',"Absolute percentage error · family 08 (randomized variant)","data-family-08",()=>makeDataExpansionFamily08("Absolute percentage error · family 08 (randomized variant)")),
    numericEntry('data',"Weighted mean · family 09 (randomized variant)","data-family-09",()=>makeDataExpansionFamily09("Weighted mean · family 09 (randomized variant)")),
    numericEntry('data',"Pearson correlation · family 10 (randomized variant)","data-family-10",()=>makeDataExpansionFamily10("Pearson correlation · family 10 (randomized variant)")),
    numericEntry('data',"One-sample t statistic · family 11 (randomized variant)","data-family-11",()=>makeDataExpansionFamily11("One-sample t statistic · family 11 (randomized variant)")),
    numericEntry('data',"Welch two-sample t statistic · family 12 (randomized variant)","data-family-12",()=>makeDataExpansionFamily12("Welch two-sample t statistic · family 12 (randomized variant)")),
    numericEntry('data',"Pooled two-sample variance · family 13 (randomized variant)","data-family-13",()=>makeDataExpansionFamily13("Pooled two-sample variance · family 13 (randomized variant)")),
    numericEntry('data',"Chi-square goodness-of-fit · family 14 (randomized variant)","data-family-14",()=>makeDataExpansionFamily14("Chi-square goodness-of-fit · family 14 (randomized variant)")),
    numericEntry('data',"Chi-square independence test · family 15 (randomized variant)","data-family-15",()=>makeDataExpansionFamily15("Chi-square independence test · family 15 (randomized variant)")),
    numericEntry('data',"One-way ANOVA F statistic · family 16 (randomized variant)","data-family-16",()=>makeDataExpansionFamily16("One-way ANOVA F statistic · family 16 (randomized variant)")),
    numericEntry('data',"Confidence-interval margin · family 17 (randomized variant)","data-family-17",()=>makeDataExpansionFamily17("Confidence-interval margin · family 17 (randomized variant)")),
    numericEntry('data',"Data range and quartiles · family 18 (randomized variant)","data-family-18",()=>makeDataExpansionFamily18("Data range and quartiles · family 18 (randomized variant)")),
    numericEntry('data',"Regression slope · family 19 (randomized variant)","data-family-19",()=>makeDataExpansionFamily19("Regression slope · family 19 (randomized variant)")),
    numericEntry('data',"Cohen effect size · family 20 (randomized variant)","data-family-20",()=>makeDataExpansionFamily20("Cohen effect size · family 20 (randomized variant)"))
  ];

/* Category-specific generator families, retained as standalone entries. */
appendNumericRecipe(T,'Z-score of a selected observation','data-selected-observation-z-score',()=>{
  const xs=Array.from({length:ri(4,8)},()=>ri(10,30)),m=xs.reduce((sum,x)=>sum+x,0)/xs.length,sd=Math.sqrt(xs.reduce((sum,x)=>sum+(x-m)**2,0)/(xs.length-1)),i=ri(0,xs.length-1),ans=(xs[i]-m)/(sd||1);
  return qNum(T,'Z-score of a selected observation',`For sample data \\([${xs.join(', ')}]\\), use the sample mean and sample standard deviation to find the z-score of observation \\(${xs[i]}\\).`,ans,`\\(z=(x-\\bar x)/s=(${xs[i]}-${nfmt(m)})/${nfmt(sd)}=${nfmt(ans)}\\).`)
});
appendNumericRecipe(T,'Coefficient of variation for a measurement sample','data-coefficient-of-variation',()=>{
  const xs=Array.from({length:ri(4,8)},()=>ri(5,25)),m=xs.reduce((sum,x)=>sum+x,0)/xs.length,sd=Math.sqrt(xs.reduce((sum,x)=>sum+(x-m)**2,0)/(xs.length-1)),ans=100*sd/m;
  return qNum(T,'Coefficient of variation for a measurement sample',`A sensor is tested with readings \\([${xs.join(', ')}]\\). Find the sample coefficient of variation as a percentage.`,ans,`\\(CV=100s/\\bar x=100(${nfmt(sd)})/${nfmt(m)}=${nfmt(ans)}\\%\\).`,'number')
});
appendNumericRecipe(T,'Population variance of a measurement sample','data-population-variance',()=>{
  const xs=Array.from({length:ri(3,8)},()=>ri(5,30)),m=xs.reduce((sum,x)=>sum+x,0)/xs.length,ans=xs.reduce((sum,x)=>sum+(x-m)**2,0)/xs.length;
  return qNum(T,'Population variance of a measurement sample',`A laboratory treats readings \([${xs.join(', ')}]\) as the entire population. Find population variance \(\\sigma^2\).`,ans,`\(\\sigma^2=\\sum(x_i-\\mu)^2/N=${nfmt(ans)}\).`)
});
appendNumericRecipe(T,'Field scenario · Welch two-sample t-test for sensor lots','scenario-data-welch-two-sample-t',()=>{
  const person=pick(['Maya','Luis','Ari','Nina','Leah','Rafael','Tessa','Noah']),sample=(n,base)=>{const d=Array.from({length:n},(_,i)=>base+ri(-7,7)+(i%2));if(new Set(d).size===1)d[d.length-1]++;return d;},nA=ri(3,8),nB=ri(3,8),a=sample(nA,ri(28,42)),b=sample(nB,ri(34,50)),mean=d=>d.reduce((s,x)=>s+x,0)/d.length,varS=d=>{const m=mean(d);return d.reduce((s,x)=>s+(x-m)**2,0)/(d.length-1)};
  const ma=mean(a),mb=mean(b),va=varS(a),vb=varS(b),ans=(ma-mb)/Math.sqrt(va/nA+vb/nB);
  const q=qNum(T,'Field scenario · Welch two-sample t-test for sensor lots',`${person} compares two independently sampled production lots. Lot A calibration errors: \([${a.join(', ')}]\); Lot B errors: \([${b.join(', ')}]\). Calculate Welch's statistic \(t=(\bar x_A-\bar x_B)/\sqrt{s_A^2/n_A+s_B^2/n_B}\).`,ans,`\(n_A=${nA},\ \bar x_A=${nfmt(ma)},\ s_A^2=${nfmt(va)}\); \(n_B=${nB},\ \bar x_B=${nfmt(mb)},\ s_B^2=${nfmt(vb)}\). Thus \(t=(${nfmt(ma)}-${nfmt(mb)})/\sqrt{${nfmt(va)}/${nA}+${nfmt(vb)}/${nB}}=${nfmt(ans)}\).`);
  return attachDiagram(q,'dataCompare','Schematic comparison of two independent sample groups A and B; the exact observations are written in the prompt and the displayed statistic is Welch’s two-sample t.');
});
appendNumericRecipe(T,'Field scenario · One-way ANOVA across production lines','scenario-data-anova-production-lines',()=>{
  const person=pick(['Maya','Luis','Ari','Nina','Rafael','Tessa']),k=ri(3,4),groups=Array.from({length:k},(_,g)=>{const base=30+g*7,n=ri(3,5),d=Array.from({length:n},(_,i)=>base+ri(-3,3)+(i%2));if(new Set(d).size===1)d[0]--;return d;});
  const mean=d=>d.reduce((s,x)=>s+x,0)/d.length,flat=groups.flat(),grand=mean(flat),N0=flat.length;let ssb=0,ssw=0;groups.forEach(g=>{const m=mean(g);ssb+=g.length*(m-grand)**2;ssw+=g.reduce((sum,x)=>sum+(x-m)**2,0)});if(ssw<1e-9){groups[0][0]--;ssw=0;const mg=groups.map(mean),all=groups.flat(),gg=mean(all);ssb=0;groups.forEach((g,i)=>{ssb+=g.length*(mg[i]-gg)**2;ssw+=g.reduce((sum,x)=>sum+(x-mg[i])**2,0)})}const dfB=k-1,dfW=N0-k,ans=(ssb/dfB)/(ssw/dfW),shown=groups.map((g,i)=>`Line ${String.fromCharCode(65+i)}: [${g.join(', ')}]`).join('; ');
  const q=qNum(T,'Field scenario · One-way ANOVA across production lines',`${person} compares mean calibration errors across \(${k}\) production lines. Samples are ${shown}. Calculate the one-way ANOVA test statistic \(F=MS_B/MS_W\).`,ans,`The grand mean is \(\bar x=${nfmt(grand)}\). Between-group sum of squares \(SS_B=${nfmt(ssb)}\), within-group sum of squares \(SS_W=${nfmt(ssw)}\). With \(df_B=${dfB}\) and \(df_W=${dfW}\), \(F=(SS_B/${dfB})/(SS_W/${dfW})=${nfmt(ans)}\).`);
  q.diagramKind='anovaPlot';q.diagramAlt=`Conceptual plot of ${k} separate production-line samples with different centers; the exact observations are listed in the prompt. ANOVA compares between-group and within-group variation.`;return q;
});
appendNumericRecipe(T,'Field scenario · One-sample t statistic for a sensor batch','scenario-data-one-sample-t',()=>makeDataScenario(9));

/* Seed/topic-level additional generators added locally to satisfy the minimum per-category family count. */
appendNumericRecipe('data','Additional · Coefficient of determination from correlation','data-topup-01',()=>{
  const r=pick([-.9,-.8,-.7,-.6,-.5,.5,.6,.7,.8,.9]),ans=r*r;
  return qNum(T,'Coefficient of determination from correlation',`A linear fit has Pearson correlation \(r=${nfmt(r)}\). Find coefficient of determination \(R^2\).`,ans,`For simple linear regression, \(R^2=r^2=(${nfmt(r)})^2=${nfmt(ans)}\).`);
});
appendNumericRecipe('data','Additional · Standard error of difference between two means','data-topup-02',()=>{
  const s1=rand(1,8),s2=rand(1,8),n1=ri(8,50),n2=ri(8,50),ans=Math.sqrt(s1*s1/n1+s2*s2/n2);
  return qNum(T,'Standard error of difference between two means',`Two independent samples have standard deviations \(s_1=${nfmt(s1)}\), \(s_2=${nfmt(s2)}\) and sizes \(n_1=${n1}\), \(n_2=${n2}\). Find the standard error of the difference in means.`,ans,`\(SE=\sqrt{s_1^2/n_1+s_2^2/n_2}=\sqrt{${nfmt(s1)}^2/${n1}+${nfmt(s2)}^2/${n2}}=${nfmt(ans)}\).`);
});
