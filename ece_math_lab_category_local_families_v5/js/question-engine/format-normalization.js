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
  const a=Number(q.answer),vals=[a],push=v=>{if(!Number.isFinite(v))return;if(!vals.some(n=>Math.abs(n-v)<Math.max(1e-7,Math.abs(n)*1e-6)))vals.push(v)};if(Array.isArray(q.distractorValues))q.distractorValues.forEach(push);let step=q.format==='currency'?Math.max(25,Math.abs(a)*.11):Math.max(.7,Math.abs(a)*.18);for(let i=1;vals.length<4&&i<30;i++){push(a+step*i);push(a-step*i);push(a+step*(i+1.37));}if(vals.length<4)for(let i=1;vals.length<4;i++)push(a+i*13.7);const choices=vals.slice(0,4).map(v=>({value:roundN(v,7),correct:Math.abs(v-a)<Math.max(1e-7,Math.abs(a)*1e-6)}));for(let i=choices.length-1;i>0;i--){let j=ri(0,i);[choices[i],choices[j]]=[choices[j],choices[i]]}return choices
}
function builtinSingle(spec,selectedFormats){const q=spec.make();q.difficulty=spec.difficulty||q.difficulty||3;if(q.equationBased&&!selectedFormats.includes('mc'))return null;q.generatorId=spec.id;q.generatorTitle=spec.title;return normalizeTestMode(q,selectedFormats)}
