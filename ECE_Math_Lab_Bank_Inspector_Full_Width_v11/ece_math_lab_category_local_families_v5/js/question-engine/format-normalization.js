/* Converts instantiated questions into the requested answer formats and builds their options. */

/* Adapt a question to the answer formats selected in the setup panel. */
function normalizeTestMode(q,selectedFormats){
  const formats=Array.isArray(selectedFormats)?selectedFormats:[selectedFormats];
  const numeric=formats.filter(f=>f==='mc'||f==='fib');
  if(q.preferredMode==='tf'){q.type='tf';q.choices=q.choices||[{value:1,correct:!!q.truthValue,label:'True'},{value:0,correct:!q.truthValue,label:'False'}];return q;}
  if(q.preferredMode==='id'||q.type==='id'){
    q.semanticType='id';
    if(formats.includes('mc')&&formats.includes('id')&&Math.random()<.5){q.type='mc';q.identificationOptions=true;q.choices=buildChoices(q)}
    else{q.type='id';q.choices=null;}
    return q;
  }
  if(!numeric.length)numeric.push('fib');
  const preferred=q.equationBased?'mc':q.preferredMode;
  q.type=(preferred&&numeric.includes(preferred)&&Math.random()<.72)?preferred:pick(numeric);
  if(q.equationBased&&formats.includes('mc'))q.type='mc';
  if(q.type==='mc')q.choices=buildChoices(q);else q.choices=null;
  return q;
}
function buildChoices(q){
  if(q.identificationOptions){
    const correct=String(q.answerText||'').trim();
    const pool=(CONCEPTS[q.category]||[]).map(c=>String(c[0])).filter(t=>t&&normalizeTextAnswer(t)!==normalizeTextAnswer(correct));
    const wrong=[];while(pool.length&&wrong.length<3){const k=ri(0,pool.length-1);const t=pool.splice(k,1)[0];if(!wrong.some(v=>normalizeTextAnswer(v)===normalizeTextAnswer(t)))wrong.push(t)}
    const all=[{value:1,correct:true,label:correct},...wrong.map((label,i)=>({value:i+2,correct:false,label}))];
    while(all.length<4)all.push({value:all.length+1,correct:false,label:['None of these','All of these','Insufficient information'][all.length-1]||`Option ${all.length+1}`});
    for(let i=all.length-1;i>0;i--){const j=ri(0,i);[all[i],all[j]]=[all[j],all[i]]}return all;
  }
  if(Array.isArray(q.equationOptions)){const ec=q.equationOptions.map(o=>({...o}));for(let i=ec.length-1;i>0;i--){const j=ri(0,i);[ec[i],ec[j]]=[ec[j],ec[i]]}return ec}
  const a=PrecisionDecimal.from(q.answerExact??q.answer),vals=[a],tolerance=PrecisionDecimal.from(q.toleranceExact??q.tolerance??'1e-12');
  const uniqueDistance=(x,y)=>{const scale=PrecisionDecimal.max(x.abs(),y.abs());return scale.isZero()?PrecisionDecimal.from(0):scale.times('1e-10')};
  const push=value=>{try{const v=PrecisionDecimal.from(value);if(withinNumericTolerance(a,v,tolerance))return;if(vals.some(n=>n.minus(v).abs().lte(uniqueDistance(n,v))))return;vals.push(v)}catch{}};
  if(Array.isArray(q.distractorValues))q.distractorValues.forEach(push);
  let step=a.abs().times(q.format==='currency'?'0.11':'0.18');
  if(q.format==='currency'&&step.lt('25'))step=PrecisionDecimal.from('25');
  if(step.isZero())step=PrecisionDecimal.from('0.1');
  for(let i=1;vals.length<4&&i<30;i++){
    push(a.plus(step.times(i)));push(a.minus(step.times(i)));push(a.plus(step.times(String(i+1.37))));
  }
  for(let i=1;vals.length<4&&i<100;i++){push(a.plus(step.times(i+30)));push(a.minus(step.times(i+30)))}
  const choices=vals.slice(0,4).map(v=>({value:v.toString(),correct:withinNumericTolerance(a,v,tolerance)}));
  for(let i=choices.length-1;i>0;i--){let j=ri(0,i);[choices[i],choices[j]]=[choices[j],choices[i]]}return choices
}
function builtinSingle(spec,selectedFormats){const q=spec.make();q.difficulty=spec.difficulty||q.difficulty||3;if(q.equationBased&&!selectedFormats.includes('mc'))return null;q.generatorId=spec.id;q.generatorTitle=spec.title;return normalizeTestMode(q,selectedFormats)}
