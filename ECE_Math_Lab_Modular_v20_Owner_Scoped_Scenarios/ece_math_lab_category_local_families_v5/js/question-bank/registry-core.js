/* Canonical question-generator registry primitives.
   Numeric, identification, true/false, and compound tree nodes all register here. */
const BUILTIN=[]; // Numeric registry view, including numeric compound-tree nodes.
const QUESTION_REGISTRY=[];
const QUESTION_REGISTRY_BY_ID=Object.create(null);
const QUESTION_REGISTRY_BY_RECIPE=Object.create(null);
const PENDING_QUESTION_GENERATORS=[];
const NUMERIC_GENERATOR_REGISTRY = Object.create(null);
let QUESTION_REGISTRY_FINALIZED=false;
function difficultyForIndex(i){return i<12?1:i<24?2:i<38?3:i<51?4:5;}

function stampQuestionFromEntry(entry,q){
  if(!q||typeof q!=='object')throw new Error(`Generator ${entry.id||entry.title} did not return a question`);
  q.category=entry.category;
  q.title=q.title||entry.title;
  q.difficulty=entry.difficulty;
  q.generatorId=entry.id;
  q.recipeKey=entry.recipeKey||entry.generatorFamily||entry.id;
  q.recipeName=entry.title;
  q.questionClass=entry.questionClass||'numeric';
  q.isSetupQuestion=q.questionClass==='setup'||q.isSetupQuestion===true;
  q.countsAsQuestion=!q.isSetupQuestion;
  q.repeatable=entry.repeatable!==false;
  q.questionNodeId=entry.id;
  q.questionParentId=entry.parentId||null;
  q.questionChildren=(entry.treeChildren||[]).slice();
  return q;
}

function numericEntry(category,title,familyKey,makeQuestion,difficulty=null,treeOptions={}){
  const validDifficulty=Number.isInteger(difficulty)&&difficulty>=1&&difficulty<=5?difficulty:null;
  const parentRecipeKey=treeOptions.parentRecipeKey||null;
  const treeChildrenRecipeKeys=Array.isArray(treeOptions.treeChildrenRecipeKeys)?treeOptions.treeChildrenRecipeKeys.slice():[];
  const entry={id:'',category,title,difficulty:validDifficulty,generatorFamily:familyKey,recipeKey:familyKey,
    questionClass:'numeric',formats:['mc','fib'],repeatable:treeOptions.repeatable!==false,
    parentRecipeKey,treeChildrenRecipeKeys,treeChildren:[],treeRole:parentRecipeKey?'child':'root'};
  entry.make=(context={})=>{const dto=context?.dataTransferObject&&typeof context.dataTransferObject==='object'?context.dataTransferObject:Object.create(null);return stampQuestionFromEntry(entry,makeQuestion(dto));};
  return entry;
}

/* Setup nodes are answerless context records. Their category-local maker owns all content and data. */
/* Register a content-only setup node. The category generator owns its prompt, data dictionary,
   and illustrations. This registry helper only validates the descriptor and adds tree edges. */
function setupRecipe(category,title,recipeKey,makeSetupQuestion,difficulty=3,treeOptions={}){
  if(typeof makeSetupQuestion!=='function')throw new Error(`Setup recipe ${recipeKey} requires a category-local generator.`);
  const parentRecipeKey=treeOptions.parentRecipeKey||null;
  const treeChildrenRecipeKeys=Array.isArray(treeOptions.treeChildrenRecipeKeys)?treeOptions.treeChildrenRecipeKeys.slice():[];
  return registerQuestionGenerator({
    category,title,recipeKey,questionClass:'setup',formats:[],repeatable:treeOptions.repeatable!==false,difficulty,
    parentRecipeKey,treeChildrenRecipeKeys,treeRole:parentRecipeKey?'child':'root',
    make:(context={})=>{
      const dto=context?.dataTransferObject&&typeof context.dataTransferObject==='object'?context.dataTransferObject:Object.create(null);
      const q=makeSetupQuestion(dto);
      if(!q||typeof q!=='object'||Array.isArray(q))throw new Error(`Setup generator ${recipeKey} must return a question descriptor.`);
      q.category=category;q.title=q.title||title;
      if(!String(q.prompt||'').trim())throw new Error(`Setup generator ${recipeKey} must provide a prompt.`);
      const transfer=q.transferData??{};
      if(!transfer||typeof transfer!=='object'||Array.isArray(transfer))throw new Error(`Setup ${recipeKey} transferData must be a dictionary keyed by variable or quantity symbol.`);
      for(const [symbol,quantity] of Object.entries(transfer)){
        if(!symbol.trim())throw new Error(`Setup ${recipeKey} has an empty transfer-data key.`);
        if(quantity&&typeof quantity==='object'&&!Array.isArray(quantity)&&Object.prototype.hasOwnProperty.call(quantity,'value')){
          if(quantity.unit!==undefined&&typeof quantity.unit!=='string')throw new Error(`Setup ${recipeKey} unit for ${symbol} must be a string.`);
        }else if(quantity===undefined)throw new Error(`Setup ${recipeKey} entry ${symbol} must provide a transfer value.`);
      }
      // The category-local generator owns this dictionary; registration adds no aliases or extra givens.
      q.transferData=transfer;
      q.illustrations=Array.isArray(q.illustrations)?q.illustrations.map(item=>({...item})):[];
      for(const illustration of q.illustrations){
        if((illustration.type==='svg'||illustration.svg||illustration.markup)&&!String(illustration.alt||'').trim())
          throw new Error(`Setup SVG in ${recipeKey} must include alt text.`);
      }
      q.isSetupQuestion=true;q.countsAsQuestion=false;q.type='setup';q.custom=false;
      return q;
    }
  });
}

function appendNumericRecipe(category,title,recipeKey,makeQuestion,difficulty=null,treeOptions={}){
  if(QUESTION_REGISTRY_FINALIZED)throw new Error('Numeric extensions must load before finalize-registry.js.');
  const entries=NUMERIC_GENERATOR_REGISTRY[category];
  if(!entries)throw new Error(`Cannot append numerical generator before ${category} registry is declared`);
  if(entries.some(entry=>entry.title===title))throw new Error(`Duplicate numerical generator title in ${category}: ${title}`);
  if(entries.some(entry=>entry.generatorFamily===recipeKey))throw new Error(`Duplicate numerical recipe key in ${category}: ${recipeKey}`);
  entries.push(numericEntry(category,title,recipeKey,makeQuestion,difficulty,treeOptions));
}

/* Register a category-local non-numeric or tree-node generator into the same canonical registry. */
function registerQuestionGenerator(config){
  if(QUESTION_REGISTRY_FINALIZED)throw new Error('Question extensions must load before finalize-registry.js.');
  if(!config||!config.category||!config.title||!config.recipeKey||typeof config.make!=='function')throw new Error('Question generator requires category, title, recipeKey, and make().');
  if(!['numeric','identification','truefalse','setup'].includes(config.questionClass))throw new Error(`Unsupported question class for ${config.title}`);
  const entry={id:config.id||'',category:config.category,title:config.title,recipeKey:config.recipeKey,generatorFamily:config.recipeKey,
    questionClass:config.questionClass,formats:(config.formats||[]).slice(),repeatable:config.repeatable!==false,
    difficulty:Number.isInteger(config.difficulty)?config.difficulty:3,parentRecipeKey:config.parentRecipeKey||null,
    treeChildrenRecipeKeys:(config.treeChildrenRecipeKeys||[]).slice(),treeChildren:[],treeRole:config.treeRole|| (config.parentRecipeKey?'child':'root'),
    makeFactory:config.make,choiceConcepts:Array.isArray(config.choiceConcepts)?config.choiceConcepts:null};
  entry.make=(context={})=>stampQuestionFromEntry(entry,entry.makeFactory(context||{}));
  PENDING_QUESTION_GENERATORS.push(entry);
  return entry;
}

/* Category modules call this helper for the concepts they own. Identification and T/F entries
   are singular and non-repeatable. Until false-statement authoring is expanded, every T/F prompt is
   a true factual assertion; both Boolean responses remain available, but only True is keyed. */
function registerConceptGeneratorsForCategory(category,concepts){
  if(!Array.isArray(concepts)||!concepts.length)throw new Error(`No concept cards available for ${category}`);
  concepts.forEach((concept,index)=>{
    const [term,definition,...aliases]=concept;
    const suffix=String(index+1).padStart(2,'0');
    const synonyms=Array.isArray(aliases[0])?aliases[0]:[];
    registerQuestionGenerator({
      id:`${category}-id-${suffix}`,category,title:`Identify: ${term}`,recipeKey:`${category}-id-${suffix}`,
      questionClass:'identification',formats:['id','mc'],repeatable:false,difficulty:difficultyForIndex(index),choiceConcepts:concepts,
      make:()=>({category,title:`Identification — ${term}`,
        prompt:pick([`Identify the concept from its definition: ${definition}`,`Which term has this definition? ${definition}`,`Name the concept: ${definition}`]),
        answer:0,answerText:term,acceptedAnswers:[term,...synonyms],explanation:`The answer is ${term}: ${definition}`,
        format:'text',type:'id',preferredMode:'id',answerSpec:{kind:'text',value:term,acceptedAnswers:[term,...synonyms]},custom:false})
    });
    registerQuestionGenerator({
      id:`${category}-tf-${suffix}`,category,title:`True/False: ${term}`,recipeKey:`${category}-tf-${suffix}`,
      questionClass:'truefalse',formats:['tf'],repeatable:false,difficulty:difficultyForIndex(index),
      make:()=>{
        const statement=pick([
          `${term} is defined as follows: ${definition}`,
          `The meaning of ${term} is ${definition}`,
          `The statement “${term}: ${definition}” is correct`
        ]);
        return {category,title:`True or false — ${term}`,prompt:`True or false: ${statement}.`,
          answer:1,truthValue:true,answerText:'True',
          explanation:`True. ${term}: ${definition}`,
          format:'boolean',type:'tf',preferredMode:'tf',answerSpec:{kind:'boolean',value:true,acceptedResponses:[true,false]},custom:false,
          choices:[{value:1,correct:true,label:'True'},{value:0,correct:false,label:'False'}]};
      }
    });
  });
}


/* Attach a child node to an already declared repeatable parent. This is the preferred API for
   extension scripts that add arbitrary-depth trees without editing the parent's category file. */
function registerQuestionChild(parentRecipeKey,config){
  if(QUESTION_REGISTRY_FINALIZED)throw new Error('Question extensions must load before finalize-registry.js.');
  const key=String(parentRecipeKey||'');
  if(!key)throw new Error('registerQuestionChild requires a parent recipe key.');
  const parent=PENDING_QUESTION_GENERATORS.find(entry=>entry.recipeKey===key)||
    Object.values(NUMERIC_GENERATOR_REGISTRY).flat().find(entry=>(entry.recipeKey||entry.generatorFamily)===key);
  if(!parent)throw new Error(`Cannot attach child: parent recipe ${key} has not been registered yet.`);
  if(parent.repeatable===false)throw new Error(`Non-repeatable question ${key} cannot have children.`);
  if(!config||!config.recipeKey||typeof config.make!=='function')throw new Error('A child requires recipeKey and make().');
  if((config.category||parent.category)!==parent.category)throw new Error(`Question tree ${key} cannot cross categories.`);
  const childKey=String(config.recipeKey);
  if(childKey===key)throw new Error('A question cannot be its own child.');
  if((parent.treeChildrenRecipeKeys||[]).includes(childKey))throw new Error(`Child recipe ${childKey} is already attached to ${key}.`);
  const child=registerQuestionGenerator({...config,category:parent.category,parentRecipeKey:key,repeatable:config.repeatable!==false});
  if(!Array.isArray(parent.treeChildrenRecipeKeys))parent.treeChildrenRecipeKeys=[];
  parent.treeChildrenRecipeKeys.push(child.recipeKey);
  return child;
}

/* Per-generator enable/disable settings work for all registry classes. Keep the v1 storage key so
   existing numerical exclusions still apply, while keys are stable category/recipe pairs. */
const DISABLED_NUMERIC_GENERATORS_STORAGE_KEY='eceMathLab.disabledNumericGenerators.v1';
const DISABLED_QUESTION_GENERATORS_STORAGE_KEY='eceMathLab.disabledQuestionGenerators.v2';
function readDisabledKey(key){try{const raw=JSON.parse(localStorage.getItem(key)||'[]');return new Set(Array.isArray(raw)?raw.filter(x=>typeof x==='string'):[])}catch{return new Set()}}
function legacyGeneratorKeyAliases(){
  const aliases=Object.create(null);
  const add=(category,oldRecipe,newRecipe)=>{
    const canonical=category+'::'+newRecipe;
    aliases[category+'::'+oldRecipe]=canonical;
    aliases[oldRecipe]=canonical;
  };
  for(const category of ['advanced','controls','econ','em','laplace','ode','signals','vector'])for(let i=1;i<=20;i++)add(category,category+'-seed-'+padKey(i),category+'-family-'+padKey(20+i));
  for(const category of ['calculus','complexcalc','convolution','data','fourier','related','relativity','ztrans'])for(let i=1;i<=10;i++){
    add(category,category+'-supplement-seed-'+padKey(i),category+'-family-'+padKey(20+i));
    add(category,category+'-applied-seed-'+padKey(10+i),category+'-family-'+padKey(30+i));
  }
  for(const category of ['electronics','geas','precalc','probability'])for(let i=1;i<=10;i++)add(category,category+'-topic-seed-'+padKey(i),category+'-family-'+padKey(25+i));
  return aliases;
}
function disabledQuestionGeneratorKeys(){
  const stored=new Set([...readDisabledKey(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY),...readDisabledKey(DISABLED_QUESTION_GENERATORS_STORAGE_KEY)]);
  const aliases=legacyGeneratorKeyAliases();
  for(const storedKey of [...stored])if(aliases[storedKey])stored.add(aliases[storedKey]);
  return stored;
}
function padKey(n){return String(n).padStart(2,'0')}
function questionGeneratorPreferenceKey(spec){return `${spec.category}::${spec.recipeKey||spec.generatorFamily||spec.id}`}
function isQuestionGeneratorEnabled(spec){const disabled=disabledQuestionGeneratorKeys();return !disabled.has(questionGeneratorPreferenceKey(spec))&&!disabled.has(spec.id)}
function setQuestionGeneratorEnabled(id,enabled){
  const spec=typeof id==='string'?(QUESTION_REGISTRY_BY_ID[id]||QUESTION_REGISTRY.find(entry=>entry.id===id)||BUILTIN.find(entry=>entry.id===id)):id;
  const key=spec?questionGeneratorPreferenceKey(spec):String(id);
  const disabled=readDisabledKey(DISABLED_QUESTION_GENERATORS_STORAGE_KEY);
  const oldDisabled=readDisabledKey(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY);
  if(enabled){
    disabled.delete(key);if(spec)disabled.delete(spec.id);oldDisabled.delete(key);if(spec)oldDisabled.delete(spec.id);
    const aliases=legacyGeneratorKeyAliases();for(const [legacy,canonical] of Object.entries(aliases))if(canonical===key){disabled.delete(legacy);oldDisabled.delete(legacy)}
  }
  else{disabled.add(key);oldDisabled.add(key);if(spec){disabled.delete(spec.id);oldDisabled.delete(spec.id)}}
  try{localStorage.setItem(DISABLED_QUESTION_GENERATORS_STORAGE_KEY,JSON.stringify([...disabled]));localStorage.setItem(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY,JSON.stringify([...oldDisabled]));return true}catch{return false}
}
function isNumericGeneratorEnabled(spec){return isQuestionGeneratorEnabled(spec)}
function setNumericGeneratorEnabled(id,enabled){return setQuestionGeneratorEnabled(id,enabled)}
function numericGeneratorPreferenceKey(spec){return questionGeneratorPreferenceKey(spec)}
