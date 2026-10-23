/* Shared globals and low-level helpers. Load before bank and UI scripts. */

'use strict';
const CATS=window.ECE_LANG.categories;
const CAT_IDS=CATS.map(c=>c.id), CAT_BY_ID=Object.fromEntries(CATS.map(c=>[c.id,c]));
const STORE_KEY='eceMathLab.templates.v4';
/*
 * Relative to the folder containing index.html. Edit this one constant if the
 * modular source folder is renamed or moved (including into a deeper directory).
 * Keep asset paths derived from this constant instead of embedding the folder name
 * in question-renderer.js or other UI code.
 */
const ECE_MATH_LAB_MODULE_BASE_PATH='ECE_Math_Lab_Modular_v20_Owner_Scoped_Scenarios/ece_math_lab_category_local_families_v5';
const ECE_MATH_LAB_ASSET_BASE_PATH=`${ECE_MATH_LAB_MODULE_BASE_PATH}/res`;
const $=id=>document.getElementById(id);
/* Competition givens use short, stable values. Round the generated input before formulas use it,
   not just when it is painted into the prompt. Integer sampling remains uniform and unrounded. */
function roundSigNumber(value,significantDigits=3){
  const n=Number(value);if(!Number.isFinite(n)||n===0)return n;
  try{return PrecisionDecimal.from(String(n)).toSignificantDigits(significantDigits).toNumber();}
  catch{return Number(n.toPrecision(significantDigits));}
}
const rand=(a,b)=>{try{const sample=PrecisionDecimal.from(String(Math.random()));return PrecisionDecimal.from(String(b)).minus(String(a)).times(sample).plus(String(a)).toSignificantDigits(3).toNumber()}catch{return roundSigNumber(Math.random()*(b-a)+a,3)}};
const ri=(a,b)=>Math.floor(Math.random()*(b-a+1))+a;
const pick=a=>{const value=a[ri(0,a.length-1)];return typeof value==='number'&&Number.isFinite(value)?roundSigNumber(value,3):value;};
let toastTimer=null,currentQuestions=[],currentResults=[],graded=false,quizMode=[],quizFlow='all',activeQuestionIndex=0,stepChecked=false,savedResponses={},quizNumber=0;
function catName(id){return (CAT_BY_ID[id]||{name:id}).name}
function shortCat(id){return (CAT_BY_ID[id]||{short:id}).short}
function htmlEscape(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
function showToast(message){$('toast').textContent=message;$('toast').classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.add('hidden'),3000)}
function renderMath(root=document.body){if(window.MathJax&&window.MathJax.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{});}
function normalizeUnitLatexMarkup(text){
  let s=String(text??'');
  const units=['kg/m^3','m^3/s','m^2/s','m/s^2','rad/s','cm/s','N/C','N/m','m/s','MPa','kPa','kHz','MHz','rpm','kN','kJ','MJ','nC','pF','nN','mA','ms','km','cm','kg','Hz','dB','Pa','Wb','rad','m^3','m^2','cm^2','m','s','V','A','N','C','F','J','W','T','K','S'];
  units.sort((a,b)=>b.length-a.length);
  for(const unit of units){
    const escaped=unit.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    // RegExp(string) does not need slash-escaping. Escaping '/' here created a
    // two-backslash sequence that prevented compound tokens such as m/s matching.
    const re=new RegExp('\\\\,('+escaped+')(?![A-Za-z])','g');
    s=s.replace(re,(_,u)=>{
      try{return `\\,${formatQuantUnitLatex(parseQuantUnit(u))}`}
      catch{return `\\,\\mathrm{${u}}`}
    });
  }
  s=s.replace(/\\\\mu\\s*([A-Za-zΩ]+)/g,(_,u)=>`\\\\mu\\\\mathrm{${u}}`);
  return s;
}
function numericDisplayWithUnit(value,format='number',options={},unit=''){const base=valueDisplay(value,format,options);if(!unit||format!=='number')return base;const parsed=typeof unit==='string'?parseQuantUnit(unit):unit;const rendered=formatQuantUnitLatex(parsed);return rendered?base.replace(/\\\)$/,`\\,${rendered}\\)`):base}
function suggestedNumericNotation(n){try{const d=PrecisionDecimal.from(n).abs();if(d.isZero())return 'plain';const exponent=d.exponent10();return exponent<=-3||exponent>=6?'engineering':'plain'}catch{return 'plain'}}
function nfmt(n,options={}){try{return formatNumberLatex(n,{significantDigits:4,notation:options.notation||suggestedNumericNotation(n),...options})}catch{return String(n)}}
function nfmtPlain(n,options={}){try{const d=PrecisionDecimal.from(n),digits=options.significantDigits||4,mode=options.notation||suggestedNumericNotation(n),dp=Number.isInteger(options.decimalPlaces)&&options.decimalPlaces>=0&&options.decimalPlaces<=1000?options.decimalPlaces:null;if(d.isZero())return dp!==null&&(mode==='decimal'||mode==='plain')?d.toFixed(dp):'0';if(mode==='engineering')return d.toEngineeringString(digits);if(mode==='decimal'||mode==='plain')return dp===null?d.toSignificantDigits(digits).toPlainString():d.toFixed(dp);if(mode==='auto'&&dp!==null&&!d.roundToScale(dp).isZero())return d.toFixed(dp);if(mode==='scientific'||(mode==='auto'&&(d.exponent10()<=-5||d.exponent10()>=9||(dp!==null&&d.roundToScale(dp).isZero()))))return d.toScientificString(digits);return d.toSignificantDigits(digits).toPlainString()}catch{return String(n)}}
function grouped(n){const s=PrecisionDecimal.from(n).toFixed(2);const sign=s.startsWith('-')?'-':'';const unsigned=sign?s.slice(1):s;const parts=unsigned.split('.');parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');return sign+parts.join('.')}
/* Dollar values used in LaTeX explanations: whole dollars omit unnecessary cents, fractional dollars retain cents, and tiny magnitudes never render as zero. */
function moneyToken(n){
  const d=PrecisionDecimal.from(n),negative=d.isNegative(),magnitude=d.abs(),prefix=negative?'-\\$':'\\$';
  if(!magnitude.isZero()&&magnitude.lt('0.005'))return prefix+nfmtPlain(magnitude,{notation:'scientific',significantDigits:8});
  let text=magnitude.toFixed(2);if(text.endsWith('.00'))text=text.slice(0,-3);
  const parts=text.split('.');parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,'{,}');
  return prefix+parts.join('.');
}
function moneyLatex(n){return `\\(${moneyToken(n)}\\)`}
function valueDisplay(n,format='number',options={}){if(format==='currency')return moneyLatex(n);if(format==='percent')return `\\(${nfmt(n,options)}\\%\\)`;if(format==='degrees')return `\\(${nfmt(n,options)}^\\circ\\)`;return `\\(${nfmt(n,options)}\\)`}
function valueText(n,format='number',options={}){if(format==='currency'){const d=PrecisionDecimal.from(n),sign=d.isNegative()?'-':'',magnitude=d.abs();return !magnitude.isZero()&&magnitude.lt('0.005')?`${sign}$${nfmtPlain(magnitude,{notation:'scientific',significantDigits:8})}`:sign+'$'+grouped(magnitude)}if(format==='percent')return nfmtPlain(n,options)+'%';if(format==='degrees')return nfmtPlain(n,options)+'°';return nfmtPlain(n,options)}
function numericDisplayOptions(q){
  const raw=q?.answerExact??q?.answer??0;let target;try{target=PrecisionDecimal.from(raw).abs()}catch{target=PrecisionDecimal.from(0)}
  const configured=q?.expectedNotation||(q?.answerSpec?.notation&&q.answerSpec.notation!=='any'?q.answerSpec.notation:null);
  const strict=configured&&!['auto','any'].includes(String(configured).toLowerCase());
  const exponent=target.isZero()?0:target.exponent10();
  const notation=strict?String(configured).toLowerCase():(!target.isZero()&&(exponent<=-3||exponent>=6)?'engineering':'plain');
  return {notation,significantDigits:q?.answerSpec?.significantDigits||q?.significantDigits||4,decimalPlaces:q?.answerSpec?.decimalPlaces??q?.decimalPlaces};
}
function parseUserDecimal(raw){return parseNumericDecimal(raw)}
function expandTemplate(str,vars){return String(str||'').replace(/\{\{\s*([^{}]+?)\s*\}\}/g,(_,expr)=>nfmt(evalDecimalExpr(expr,vars)))}
function makeQ(category,title,prompt,answer,explanation,format='number',extras={}){
  let exact;try{exact=PrecisionDecimal.from(answer)}catch(e){throw Error(`Generator ${title} returned an invalid numeric answer: ${e.message}`)}
  const exactText=exact.toString(),val=exact.toNumber();
  const hasExplicitUnit=Object.prototype.hasOwnProperty.call(extras,'quantUnit')||Object.prototype.hasOwnProperty.call(extras,'answerUnit')||Object.prototype.hasOwnProperty.call(extras,'unit');
  const explicitUnit=Object.prototype.hasOwnProperty.call(extras,'quantUnit')?extras.quantUnit:(Object.prototype.hasOwnProperty.call(extras,'answerUnit')?extras.answerUnit:extras.unit);
  // An explicitly empty string means dimensionless; otherwise use inference only for legacy recipes.
  const inferredUnit=hasExplicitUnit?(explicitUnit??''):(inferQuantUnitFromText(explanation)||inferQuantUnitFromText(prompt));
  const normalizedPrompt=normalizeUnitLatexMarkup(prompt);
  const normalizedExplanation=normalizeUnitLatexMarkup(explanation);
  const normalizedUnit=inferredUnit!==''?parseQuantUnit(inferredUnit):(hasExplicitUnit?parseQuantUnit(''):null);
  const toleranceValue=numericTolerance(exact,extras),toleranceText=toleranceValue.toString();
  const question={category,title,prompt:normalizedPrompt,answer:val,answerExact:exactText,explanation:normalizedExplanation,format,custom:false,tolerance:toleranceText,...extras};
  if(normalizedUnit){question.quantUnit=normalizedUnit;question.answerUnit=normalizedUnit.canonical;}
  question.unitMode=String(extras.unitMode||'lenient').toLowerCase()==='strict'?'strict':'lenient';
  question.answerSpec=extras.answerSpec||{kind:'numeric',value:exactText,tolerance:toleranceText,notation:extras.expectedNotation||'any',significantDigits:extras.significantDigits||4,decimalPlaces:extras.decimalPlaces,unit:question.answerUnit||'',unitMode:question.unitMode};
  return question;
}
function qNum(category,title,prompt,answer,explanation,format='number',extras={}){return makeQ(category,title,prompt,answer,explanation,format,extras)}
