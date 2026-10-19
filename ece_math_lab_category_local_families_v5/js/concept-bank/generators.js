/* Turns each category’s 40 concept cards into identification and true/false generator entries. */

const IDENTIFICATION_GENERATORS=[], TRUEFALSE_GENERATORS=[];
for(const cat of CATS){
  const concepts=CONCEPTS[cat.id];
  if(!Array.isArray(concepts)||concepts.length!==40)throw Error(`Category ${cat.id} must contain exactly 40 identification concepts.`);
  concepts.forEach((concept,index)=>{
    const [term,definition,...aliases]=concept;
    IDENTIFICATION_GENERATORS.push({id:`${cat.id}-id-${String(index+1).padStart(2,'0')}`,category:cat.id,title:`Identify: ${term}`,difficulty:difficultyForIndex(index),make:()=>({category:cat.id,title:`Identification — ${term}`,prompt:pick([`Identify the concept described: ${definition}`,`Name the term for this description: ${definition}`,`Which concept matches this description? ${definition}`]),answer:0,answerText:term,acceptedAnswers:[term,...(aliases[0]||[])],explanation:`The answer is ${term}: ${definition}`,format:'text',type:'id',preferredMode:'id',custom:false})});
    TRUEFALSE_GENERATORS.push({id:`${cat.id}-tf-${String(index+1).padStart(2,'0')}`,category:cat.id,title:`True/False: ${term}`,difficulty:difficultyForIndex(index),make:()=>{
      const truth=Math.random()<0.5,other=concepts[(index+7)%concepts.length],otherTerm=other[0],otherDef=other[1];
      const statement=truth?`${term}: ${definition}`:`${term}: ${otherDef}`;
      return {category:cat.id,title:`True or false — ${term}`,prompt:`True or false: ${statement}`,answer:truth?1:0,truthValue:truth,answerText:truth?'True':'False',explanation:truth?`True. ${term}: ${definition}`:`False. The stated definition belongs to ${otherTerm}, not ${term}. ${term} means: ${definition}`,format:'boolean',type:'tf',preferredMode:'tf',custom:false,choices:[{value:1,correct:truth,label:'True'},{value:0,correct:!truth,label:'False'}]};
    }});
  });
}

