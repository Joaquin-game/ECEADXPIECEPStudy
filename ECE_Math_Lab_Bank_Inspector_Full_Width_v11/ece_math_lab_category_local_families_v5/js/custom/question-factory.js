/* Instantiates one custom question from a validated declarative spec and sampled variables. */
function buildCustomQuestion(step,vars,prev,hasPrev,rootTitle){
  const context={...vars};
  if(hasPrev){context.prev=PrecisionDecimal.from(prev);context.x_prev=PrecisionDecimal.from(prev)}
  const mode=step.mode||'mixed',prompt=expandTemplate(step.prompt,context),explanation=expandTemplate(step.explanation||'',context),title=`${rootTitle?rootTitle+' — ':''}${step.title||rootTitle||'Custom question'}`;
  if(mode==='id'){
    const answerText=String(step.answer||'').trim();
    return {category:step.category,title,prompt,answer:0,answerText,acceptedAnswers:[answerText,...(Array.isArray(step.acceptedAnswers)?step.acceptedAnswers:[])],explanation,format:'text',type:'id',preferredMode:'id',answerKind:'text',answerSpec:{kind:'text',value:answerText,acceptedAnswers:[answerText,...(Array.isArray(step.acceptedAnswers)?step.acceptedAnswers:[])]},custom:true,customId:step.id||null,varsForQuestion:vars,hasPrevious:hasPrev};
  }
  if(mode==='tf'){
    const a=String(step.answer??'').trim().toLowerCase();
    const truth=(a==='true'||a==='false')?a==='true':evalDecimalExpr(step.answer,context).gt(0);
    return makeQ(step.category,title,prompt,truth?'1':'0',explanation,'boolean',{custom:true,customId:step.id||null,preferredMode:'tf',truthValue:truth,answerText:truth?'True':'False',answerKind:'boolean',answerSpec:{kind:'boolean',value:truth},varsForQuestion:vars,hasPrevious:hasPrev,choices:[{value:1,correct:truth,label:'True'},{value:0,correct:!truth,label:'False'}]});
  }
  const answer=evalDecimalExpr(step.answer,context),distractors=(Array.isArray(step.distractors)?step.distractors:[]).map(s=>evalDecimalExpr(s,context));
  return makeQ(step.category,title,prompt,answer,explanation,step.format||'number',{custom:true,customId:step.id||null,preferredMode:mode,distractorValues:distractors,varsForQuestion:vars,hasPrevious:hasPrev,expectedNotation:step.expectedNotation,absoluteTolerance:step.absoluteTolerance,relativeTolerance:step.relativeTolerance,tolerance:step.tolerance,significantDigits:step.significantDigits,decimalPlaces:step.decimalPlaces});
}
