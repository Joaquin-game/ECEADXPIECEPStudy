/* Builds custom dependent questions and multi-step chains, wiring follow-through updates. */

function customModule(template,selectedCats,globalMode){
  if(Array.isArray(template.steps)){
    if(!template.steps.every(s=>selectedCats.includes(s.category)))return null;
    const module=[];let prev=null;for(let i=0;i<template.steps.length;i++){const step=template.steps[i],vars=sampleVars(step.variables||{});let q=buildCustomQuestion(step,vars,prev,i>0,template.title);q.generatorId=template.id;q.dependencyTemplate=step;q.dependsOnLocalIndex=i>0?i-1:undefined;if(i>0)q._lastDepValue=prev;if(i>0)q.dependencyFactory=v=>buildCustomQuestion(step,vars,v,true,template.title);module.push(q);prev=q.answer}
    markLinked(module,template.title);module.forEach(q=>normalizeTestMode(q,globalMode));return module;
  }
  if(template.dependsOnPrevious){if(!selectedCats.includes(template.category))return null;const parents=selectedCats.filter(c=>c!==template.category);if(!parents.length)return null;const parentCat=pick(parents);let parent=null;for(let attempt=0;attempt<24&&!parent;attempt++){const parentSpec=pick(BUILTIN.filter(s=>s.category===parentCat&&isNumericGeneratorEnabled(s)));parent=builtinSingle(parentSpec,globalMode)}if(!parent)return null;parent.customPairSeed=true;const vars=sampleVars(template.variables||{}),q=buildCustomQuestion(template,vars,parent.answer,true);q.generatorId=template.id;q.dependencyFactory=v=>buildCustomQuestion(template,vars,v,true);q._dependencyValue=parent.answer;q._lastDepValue=parent.answer;q.dependsOnLocalIndex=0;const module=[parent,q];markLinked(module,`${shortCat(parentCat)} → ${shortCat(template.category)} · ${template.title}`);module.forEach(x=>normalizeTestMode(x,globalMode));return module}
  if(!selectedCats.includes(template.category))return null;const q=buildCustomQuestion(template,sampleVars(template.variables||{}),undefined,false);q.generatorId=template.id;normalizeTestMode(q,globalMode);return [q];
}
