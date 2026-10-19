/* Shared globals and low-level helpers. Load before bank and UI scripts. */

'use strict';
'use strict';
const CATS=window.ECE_LANG.categories;
const CAT_IDS=CATS.map(c=>c.id), CAT_BY_ID=Object.fromEntries(CATS.map(c=>[c.id,c]));
const STORE_KEY='eceMathLab.templates.v4';
const $=id=>document.getElementById(id), rand=(a,b)=>Math.random()*(b-a)+a, ri=(a,b)=>Math.floor(rand(a,b+1)), pick=a=>a[ri(0,a.length-1)], roundN=(v,d=5)=>Number(Number(v).toFixed(d));
let toastTimer=null,currentQuestions=[],currentResults=[],graded=false,quizMode=[],quizFlow='all',activeQuestionIndex=0,stepChecked=false,savedResponses={},quizNumber=0;
function catName(id){return (CAT_BY_ID[id]||{name:id}).name}
function shortCat(id){return (CAT_BY_ID[id]||{short:id}).short}
function htmlEscape(s){return String(s??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;')}
function showToast(message){$('toast').textContent=message;$('toast').classList.remove('hidden');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').classList.add('hidden'),3000)}
function renderMath(root=document.body){if(window.MathJax&&window.MathJax.typesetPromise)window.MathJax.typesetPromise([root]).catch(()=>{});}
function nfmt(n){if(!Number.isFinite(Number(n)))return String(n);let x=roundN(Number(n),4);if(Object.is(x,-0))x=0;return x.toLocaleString('en-US',{maximumFractionDigits:4,useGrouping:false})}
function grouped(n){let s=Number(n).toFixed(2);let parts=s.split('.');parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,',');return parts.join('.')}
function moneyLatex(n){return `\\(${moneyToken(n)}\\)`}
function valueDisplay(n,format='number'){if(format==='currency')return moneyLatex(n);if(format==='percent')return `\\(${nfmt(n)}\\%\\)`;if(format==='degrees')return `\\(${nfmt(n)}^\\circ\\)`;return `\\(${nfmt(n)}\\)`}
function valueText(n,format='number'){if(format==='currency')return '$'+grouped(n);if(format==='percent')return nfmt(n)+'%';if(format==='degrees')return nfmt(n)+'°';return nfmt(n)}
function parseUserNumber(raw){let s=String(raw??'').trim();if(!s)return NaN;s=s.replace(/\\\(|\\\)|\\text\s*\{[^}]*\}/g,'').replace(/[,$%°]/g,'').replace(/,/g,'').replace(/\b(?:V|A|ohms?|Ω|N\/C|W|Hz|s|m|F|H|J|Wb|T|Pa|dB)\b/gi,'').trim();try{const v=evalExpr(s,{});return Number.isFinite(v)?v:NaN}catch{return NaN}}
function evalExpr(source,vars={}){
  const text=String(source??'').trim();if(!text)throw Error('Expression is empty.');
  const tokens=text.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?|[A-Za-z_]\w*|[()+\-*/^,]/g)||[];
  if(tokens.join('').length!==text.replace(/\s/g,'').length)throw Error('Unsupported character in expression: '+text);
  let i=0;const peek=()=>tokens[i],eat=t=>{if(tokens[i]===t){i++;return true}return false};
  const funcs={sqrt:Math.sqrt,abs:Math.abs,sin:Math.sin,cos:Math.cos,tan:Math.tan,asin:Math.asin,acos:Math.acos,atan:Math.atan,exp:Math.exp,log:Math.log,ln:Math.log,log10:Math.log10,floor:Math.floor,ceil:Math.ceil,round:Math.round,min:Math.min,max:Math.max,pow:Math.pow};
  function primary(){if(eat('(')){const v=expr();if(!eat(')'))throw Error('Missing closing parenthesis.');return v}const t=peek();if(t===undefined)throw Error('Unexpected end of expression.');if(/^\d/.test(t)||/^\.\d/.test(t)){i++;return Number(t)}if(/^[A-Za-z_]/.test(t)){i++;const name=t.toLowerCase();if(eat('(')){const args=[];if(!eat(')')){do{args.push(expr())}while(eat(','));if(!eat(')'))throw Error('Missing ) after function.')}if(!funcs[name])throw Error('Unsupported function: '+name);return funcs[name](...args)}if(name==='pi')return Math.PI;if(name==='e')return Math.E;if(Object.prototype.hasOwnProperty.call(vars,t))return Number(vars[t]);if(Object.prototype.hasOwnProperty.call(vars,name))return Number(vars[name]);throw Error('Unknown variable: '+t)}throw Error('Unexpected token: '+t)}
  function power(){let v=primary();if(eat('^'))v=Math.pow(v,unary());return v}
  function unary(){if(eat('+'))return unary();if(eat('-'))return -unary();return power()}
  function mul(){let v=unary();while(peek()==='*'||peek()==='/'){const op=tokens[i++],r=unary();v=op==='*'?v*r:v/r}return v}
  function expr(){let v=mul();while(peek()==='+'||peek()==='-'){const op=tokens[i++],r=mul();v=op==='+'?v+r:v-r}return v}
  const v=expr();if(i!==tokens.length)throw Error('Unexpected token: '+tokens[i]);if(!Number.isFinite(v))throw Error('Expression did not produce a finite real number.');return v;
}
function expandTemplate(str,vars){return String(str||'').replace(/\{\{\s*([^{}]+?)\s*\}\}/g,(_,expr)=>nfmt(evalExpr(expr,vars)))}
function makeQ(category,title,prompt,answer,explanation,format='number',extras={}){
  const val=Number(answer);if(!Number.isFinite(val))throw Error(`Generator ${title} returned a non-finite answer.`);
  return {category,title,prompt,answer:val,explanation,format,custom:false,tolerance:Math.max(.012,Math.abs(val)*.001,Math.abs(val-roundN(val,3))+.0002),...extras};
}
function qNum(category,title,prompt,answer,explanation,format='number'){return makeQ(category,title,prompt,answer,explanation,format)}
