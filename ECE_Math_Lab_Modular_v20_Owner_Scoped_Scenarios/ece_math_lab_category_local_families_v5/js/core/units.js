/*
 * Physical quantity/unit support.
 *
 * A unit is real question metadata rather than presentation text.  The parser
 * understands base units, optional SI-style prefixes, powers, and compound
 * products/quotients such as m/s, cm^3/s, kHz, N/C, and m^2/s.
 *
 * The question engine uses strict mode for exact symbol/prefix matching and
 * lenient mode for dimensionally equivalent units, converting the submitted
 * value into the question's expected unit before tolerance checking.
 */

const QUANT_UNIT_PREFIXES=Object.freeze({
  Y:{symbol:'Y',name:'yotta',scale:'1e24'},Z:{symbol:'Z',name:'zetta',scale:'1e21'},
  E:{symbol:'E',name:'exa',scale:'1e18'},P:{symbol:'P',name:'peta',scale:'1e15'},
  T:{symbol:'T',name:'tera',scale:'1e12'},G:{symbol:'G',name:'giga',scale:'1e9'},
  M:{symbol:'M',name:'mega',scale:'1e6'},k:{symbol:'k',name:'kilo',scale:'1e3'},
  h:{symbol:'h',name:'hecto',scale:'1e2'},da:{symbol:'da',name:'deca',scale:'1e1'},
  d:{symbol:'d',name:'deci',scale:'1e-1'},c:{symbol:'c',name:'centi',scale:'1e-2'},
  m:{symbol:'m',name:'milli',scale:'1e-3'},u:{symbol:'u',name:'micro',scale:'1e-6'},
  'µ':{symbol:'µ',name:'micro',scale:'1e-6'},'μ':{symbol:'μ',name:'micro',scale:'1e-6'},
  n:{symbol:'n',name:'nano',scale:'1e-9'},p:{symbol:'p',name:'pico',scale:'1e-12'},
  f:{symbol:'f',name:'femto',scale:'1e-15'},a:{symbol:'a',name:'atto',scale:'1e-18'},
  z:{symbol:'z',name:'zepto',scale:'1e-21'},y:{symbol:'y',name:'yocto',scale:'1e-24'}
});

/* The atomic vocabulary deliberately contains no prefixes. */
const QUANT_BASE_UNITS=Object.freeze({
  '':{symbol:'',name:'dimensionless',aliases:[''],dimension:{},scale:'1'},
  m:{symbol:'m',name:'metre',aliases:['m','meter','meters','metre','metres'],dimension:{L:1},scale:'1'},
  g:{symbol:'g',name:'gram',aliases:['g','gram','grams'],dimension:{M:1},scale:'1e-3'},
  s:{symbol:'s',name:'second',aliases:['s','sec','secs','second','seconds'],dimension:{T:1},scale:'1'},
  min:{symbol:'min',name:'minute',aliases:['min','mins','minute','minutes'],dimension:{T:1},scale:'60'},
  h:{symbol:'h',name:'hour',aliases:['h','hr','hrs','hour','hours'],dimension:{T:1},scale:'3600'},
  day:{symbol:'d',name:'day',aliases:['day','days'],dimension:{T:1},scale:'86400',noPrefix:true},
  A:{symbol:'A',name:'ampere',aliases:['A','amp','ampere','amperes'],dimension:{I:1},scale:'1'},
  K:{symbol:'K',name:'kelvin',aliases:['K','kelvin','kelvins'],dimension:{Th:1},scale:'1',offset:'0'},
  degC:{symbol:'°C',name:'degree Celsius',aliases:['°C','degC','degree Celsius','degrees Celsius','Celsius'],dimension:{Th:1},scale:'1',offset:'273.15',noPrefix:true},
  deltaC:{symbol:'Δ°C',name:'degree Celsius temperature interval',aliases:['deltaC','Δ°C','degree Celsius difference','degrees Celsius difference'],dimension:{Th:1},scale:'1',noPrefix:true},
  mol:{symbol:'mol',name:'mole',aliases:['mol','mole','moles'],dimension:{N:1},scale:'1'},
  cd:{symbol:'cd',name:'candela',aliases:['cd','candela','candelas'],dimension:{J:1},scale:'1'},
  Hz:{symbol:'Hz',name:'hertz',aliases:['Hz','hz','hertz'],dimension:{T:-1},scale:'1'},
  N:{symbol:'N',name:'newton',aliases:['N','newton','newtons'],dimension:{M:1,L:1,T:-2},scale:'1'},
  Pa:{symbol:'Pa',name:'pascal',aliases:['Pa','pa','pascal','pascals'],dimension:{M:1,L:-1,T:-2},scale:'1'},
  J:{symbol:'J',name:'joule',aliases:['J','j','joule','joules'],dimension:{M:1,L:2,T:-2},scale:'1'},
  W:{symbol:'W',name:'watt',aliases:['W','w','watt','watts'],dimension:{M:1,L:2,T:-3},scale:'1'},
  C:{symbol:'C',name:'coulomb',aliases:['C','coulomb','coulombs'],dimension:{I:1,T:1},scale:'1'},
  V:{symbol:'V',name:'volt',aliases:['V','volt','volts'],dimension:{M:1,L:2,T:-3,I:-1},scale:'1'},
  ohm:{symbol:'\\Omega',name:'ohm',aliases:['ohm','ohms','Ω','Ohm','Ohms'],dimension:{M:1,L:2,T:-3,I:-2},scale:'1'},
  S:{symbol:'S',name:'siemens',aliases:['S','siemens'],dimension:{M:-1,L:-2,T:3,I:2},scale:'1'},
  F:{symbol:'F',name:'farad',aliases:['F','farad','farads'],dimension:{M:-1,L:-2,T:4,I:2},scale:'1'},
  H:{symbol:'H',name:'henry',aliases:['H','henry','henries'],dimension:{M:1,L:2,T:-2,I:-2},scale:'1'},
  Wb:{symbol:'Wb',name:'weber',aliases:['Wb','weber','webers'],dimension:{M:1,L:2,T:-2,I:-1},scale:'1'},
  T:{symbol:'T',name:'tesla',aliases:['T','tesla','teslas'],dimension:{M:1,T:-2,I:-1},scale:'1'},
  dB:{symbol:'dB',name:'decibel',aliases:['dB','db','decibel','decibels'],dimension:{},scale:'1',noPrefix:true},
  rad:{symbol:'rad',name:'radian',aliases:['rad','radian','radians'],dimension:{},scale:'1',noPrefix:true},
  deg:{symbol:'°',name:'degree',aliases:['deg','degree','degrees','°'],dimension:{},scale:'1',noPrefix:true},
  turn:{symbol:'turn',name:'turn',aliases:['turn','turns','rev','revolution','revolutions'],dimension:{},scale:'1',noPrefix:true},
  bit:{symbol:'bit',name:'bit',aliases:['bit','bits'],dimension:{Info:1},scale:'1',noPrefix:true},
  sample:{symbol:'sample',name:'sample',aliases:['sample','samples'],dimension:{Sample:1},scale:'1',noPrefix:true}
});

const COMMON_QUANT_UNITS=Object.freeze(['m','g','s','min','h','A','K','mol','cd','Hz','N','Pa','J','W','C','V','ohm','S','F','H','Wb','T','dB','rad','deg','degC','deltaC','turn','bit','sample']);
const QUANT_UNIT_INVERSE_EXPONENT_STORAGE_KEY='eceMathLab.units.inverseExponentAccessibility';
const QUANT_UNIT_SINGLE_DENOMINATOR_SLASH_STORAGE_KEY='eceMathLab.units.singleDenominatorSlash';
function quantUnitInverseExponentModeEnabled(){try{return localStorage.getItem(QUANT_UNIT_INVERSE_EXPONENT_STORAGE_KEY)==='true'}catch{return false}}
function setQuantUnitInverseExponentMode(enabled){try{localStorage.setItem(QUANT_UNIT_INVERSE_EXPONENT_STORAGE_KEY,enabled?'true':'false');return true}catch{return false}}
// Slash notation is the default for one denominator unit; null storage preserves that default.
function quantUnitSingleDenominatorSlashEnabled(){try{const value=localStorage.getItem(QUANT_UNIT_SINGLE_DENOMINATOR_SLASH_STORAGE_KEY);return value===null?true:value==='true'}catch{return true}}
function setQuantUnitSingleDenominatorSlashEnabled(enabled){try{localStorage.setItem(QUANT_UNIT_SINGLE_DENOMINATOR_SLASH_STORAGE_KEY,enabled?'true':'false');return true}catch{return false}}

function quantUnitDimensionKey(dimension){
  return Object.keys(dimension).filter(key=>dimension[key]).sort().map(key=>`${key}:${dimension[key]}`).join('|')||'1';
}
function quantUnitAddDimension(target,source,power){
  for(const [key,value] of Object.entries(source||{})){target[key]=(target[key]||0)+value*power;if(!target[key])delete target[key]}
}
function quantUnitTokenParts(token){
  let raw=String(token||'').trim().replace(/\\mathrm\s*\{([^}]*)\}/g,'$1').replace(/\\Omega/g,'Ω').replace(/\\mu/g,'µ');
  if(!raw)return null;
  const exponentMatch=raw.match(/^(.*?)(?:\^\s*\{?([+-]?\d+)\}?)$/);
  const power=exponentMatch?Number(exponentMatch[2]):1;raw=exponentMatch?exponentMatch[1]:raw;
  const direct=Object.values(QUANT_BASE_UNITS).find(base=>base.aliases.some(alias=>alias===raw))||Object.values(QUANT_BASE_UNITS).find(base=>base.aliases.some(alias=>alias.length>1&&alias.toLowerCase()===raw.toLowerCase()));
  if(direct)return {base:direct,prefix:null,power};
  for(const prefix of Object.keys(QUANT_UNIT_PREFIXES).sort((a,b)=>b.length-a.length)){
    if(!raw.startsWith(prefix)||raw.length<=prefix.length)continue;
    const rest=raw.slice(prefix.length);
    const base=Object.values(QUANT_BASE_UNITS).find(item=>!item.noPrefix&&item.aliases.some(alias=>alias===rest))||Object.values(QUANT_BASE_UNITS).find(item=>!item.noPrefix&&item.aliases.some(alias=>alias.length>1&&alias.toLowerCase()===rest.toLowerCase()));
    if(base)return {base,prefix:QUANT_UNIT_PREFIXES[prefix],prefixKey:prefix,power};
  }
  throw new Error(`Unknown unit: ${token}`);
}
function parseQuantUnit(source){
  const original=String(source??'').trim();
  if(!original)return {kind:'unit',source:'',terms:[],scale:PrecisionDecimal.from(1),dimension:{},canonical:'',structureKey:'1',dimensionKey:'1'};
  let text=original.replace(/\\left|\\right/g,'').replace(/\\mathrm\s*\{([^}]*)\}/g,'$1').replace(/\\Omega/g,'Ω').replace(/\\mu/g,'µ').replace(/\u00a0/g,' ').trim();
  text=text.replace(/[·×⋅]/g,'*').replace(/\s*\/\s*/g,'/');
  const groups=text.split('/');if(groups.length>2)throw new Error(`Too many division signs in unit: ${source}`);
  const numerator=(groups[0]||'').split('*').map(x=>x.trim()).filter(Boolean),denominator=(groups[1]||'').split('*').map(x=>x.trim()).filter(Boolean);
  const terms=[];let scale=PrecisionDecimal.from(1),dimension={};
  const add=(token,sign)=>{const part=quantUnitTokenParts(token),power=part.power*sign;terms.push({...part,power});scale=scale.times(PrecisionDecimal.from(part.base.scale).pow(power));if(part.prefix)scale=scale.times(PrecisionDecimal.from(part.prefix.scale).pow(power));quantUnitAddDimension(dimension,part.base.dimension,power)};
  numerator.forEach(token=>add(token,1));denominator.forEach(token=>add(token,-1));
  const active=terms.filter(term=>term.power);
  const canonical=active.map(term=>`${term.prefix?.symbol||''}${term.base.symbol}${term.power===1?'':`^${term.power}`}`).join('·');
  const structureKey=active.map(term=>`${term.base.symbol}|${term.prefix?.symbol||''}|${term.power}`).sort().join('·')||'1';
  // Celsius is affine only when used as a standalone temperature. Inside a compound,
  // it denotes a temperature interval (for example kg·Δ°C), so no offset applies.
  const offset=active.length===1&&active[0].power===1&&active[0].base.offset
    ? PrecisionDecimal.from(active[0].base.offset)
    : PrecisionDecimal.from(0);
  return {kind:'unit',source:original,terms,scale,offset,dimension,canonical,structureKey,dimensionKey:quantUnitDimensionKey(dimension)};
}
function quantUnit(value=''){return parseQuantUnit(value)}
function quantUnitEquivalent(left,right,{ignorePrefixes=false}={}){
  const a=typeof left==='string'?parseQuantUnit(left):left,b=typeof right==='string'?parseQuantUnit(right):right;
  if(!a||!b||a.dimensionKey!==b.dimensionKey)return false;
  return ignorePrefixes?a.dimensionKey===b.dimensionKey:a.structureKey===b.structureKey;
}
function quantUnitConversionFactor(from,to){
  const a=typeof from==='string'?parseQuantUnit(from):from,b=typeof to==='string'?parseQuantUnit(to):to;
  if(a.dimensionKey!==b.dimensionKey)throw new Error(`Incompatible units: ${a.source||a.canonical} and ${b.source||b.canonical}`);
  return a.scale.dividedBy(b.scale);
}
function convertQuantValue(value,from,to){
  const source=typeof from==='string'?parseQuantUnit(from):from;
  const target=typeof to==='string'?parseQuantUnit(to):to;
  if(!source||!target||source.dimensionKey!==target.dimensionKey)throw new Error(`Incompatible units: ${source?.source||source?.canonical} and ${target?.source||target?.canonical}`);
  // Convert through the base scale, applying affine offsets for absolute temperatures.
  const baseValue=PrecisionDecimal.from(value).times(source.scale).plus(source.offset||0);
  return baseValue.minus(target.offset||0).dividedBy(target.scale);
}
function formatQuantUnitLatex(value,options={}){
  const unit=typeof value==='string'?parseQuantUnit(value):value;
  if(!unit||!unit.canonical)return '';
  const inverseAsExponent=options.inverseAsExponent===undefined?quantUnitInverseExponentModeEnabled():!!options.inverseAsExponent;
  const active=unit.terms.filter(term=>term.power);
  const atom=(term,power)=>{
    const prefix=term.prefix?.symbol||'',base=term.base;
    let rendered;
    if(base.symbol==='\\Omega'||base.symbol==='Ω')rendered=(prefix?`\\mathrm{${prefix}}`:'')+'\\Omega';
    else if(base.symbol==='°')rendered='{}^\\circ';
    else if(base.symbol==='°C')rendered='{}^\\circ\\mathrm{C}';
    else if(base.symbol==='Δ°C')rendered='\\Delta{}^\\circ\\mathrm{C}';
    else if(base.symbol==='turn')rendered='\\mathrm{turn}';
    else if(base.symbol==='bit')rendered='\\mathrm{bit}';
    else if(base.symbol==='sample')rendered='\\mathrm{sample}';
    else rendered=`\\mathrm{${prefix+base.symbol}}`;
    if(power===1)return rendered;
    const exponent=power<0?`\\left(${power}\\right)`:String(power);
    return `${rendered}^{${exponent}}`;
  };
  if(inverseAsExponent)return active.map(term=>atom(term,term.power)).join('\\,');
  const numerator=active.filter(term=>term.power>0).map(term=>atom(term,term.power));
  const denominator=active.filter(term=>term.power<0).map(term=>atom(term,Math.abs(term.power)));
  if(!denominator.length)return numerator.join('\\,');
  const renderedNumerator=numerator.length?numerator.join('\\,'):'1';
  if(denominator.length===1&&quantUnitSingleDenominatorSlashEnabled())return `${renderedNumerator}/${denominator[0]}`;
  return `\\frac{${renderedNumerator}}{${denominator.join('\\,')}}`;
}
function parseQuantityAnswer(raw){
  const source=String(raw??'').trim();if(!source)return null;
  const text=source.replace(/\\mathrm\s*\{([^}]*)\}/g,'$1').replace(/\\Omega/g,'Ω').replace(/\\mu/g,'µ').replace(/\u00a0/g,' ').trim();
  const match=text.match(/^([+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?)\s*(.*)$/);
  if(!match)return null;
  const value=parseNumericDecimal(match[1]);if(!value)return null;
  try{return {value,unit:parseQuantUnit(match[2])}}catch{return null}
}
function inferQuantUnitFromText(text){
  const source=String(text||'').replace(/\\mathrm\s*\{([^}]+)\}/g,'$1').replace(/\\Omega/g,'Ω').replace(/\\mu/g,'µ'),token='[A-Za-zµμΩ]+(?:\\^\\{?[+-]?\\d+\\}?)?(?:\\s*/\\s*[A-Za-zµμΩ]+(?:\\^\\{?[+-]?\\d+\\}?)?)*';
  const candidates=[];const commaRe=new RegExp('\\\\,\\s*('+token+')','g');let match;
  while((match=commaRe.exec(source)))candidates.push({value:match[1],end:commaRe.lastIndex,compound:match[1].includes('/')});
  const mathrmRe=/\\mathrm\s*\{([^}]+)\}/g;while((match=mathrmRe.exec(source)))candidates.push({value:match[1],end:mathrmRe.lastIndex,compound:match[1].includes('/')});
  candidates.sort((a,b)=>a.end-b.end);
  for(let i=candidates.length-1;i>=0;i--){
    const candidate=candidates[i],suffix=source.slice(candidate.end).replace(/[\\\s).,;:!?\]}]+$/g,'');
    if(suffix||(!candidate.compound&&candidates.some(other=>other.compound&&other.end>=candidate.end)))continue;
    try{return parseQuantUnit(candidate.value).canonical}catch{}
  }
  return '';
}
