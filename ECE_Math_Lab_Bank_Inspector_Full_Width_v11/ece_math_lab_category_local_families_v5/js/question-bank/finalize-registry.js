/* Assemble the single registry, resolve dependency-tree edges, and validate its invariants. */
const MIN_NUMERIC_GENERATORS_PER_CATEGORY=48;
/* Category-owned views of the canonical registry. New topic modules register their nodes using
   registerQuestionGenerator(); finalization places each node in its owning category collection. */
const CATEGORY_QUESTION_REGISTRIES=Object.fromEntries(CAT_IDS.map(category=>[category,[]]));
for(const category of CAT_IDS){
  const entries=NUMERIC_GENERATOR_REGISTRY[category];
  if(!entries||entries.length<MIN_NUMERIC_GENERATORS_PER_CATEGORY)throw new Error(`Numerical registry count for ${category} is ${entries?entries.length:0}; expected at least ${MIN_NUMERIC_GENERATORS_PER_CATEGORY}`);
  for(const key of ['title','generatorFamily','make'])if(new Set(entries.map(entry=>entry[key])).size!==entries.length)throw new Error(`Duplicate numerical ${key} in ${category}`);
  entries.forEach((entry,index)=>{
    entry.id=`${category}-${String(index+1).padStart(2,'0')}`;
    entry.difficulty=Number.isInteger(entry.difficulty)?entry.difficulty:difficultyForIndex(index);
    entry.recipeKey=entry.generatorFamily;
    entry.questionClass='numeric';entry.classification='numeric';entry.repeatable=true;
    entry.formats=['mc','fib'];entry.treeRole='root';entry.parentRecipeKey=null;entry.treeChildrenRecipeKeys=entry.treeChildrenRecipeKeys||[];entry.treeChildren=[];
    QUESTION_REGISTRY.push(entry);CATEGORY_QUESTION_REGISTRIES[category].push(entry);BUILTIN.push(entry);
  });
}
const NUMERIC_REGISTRY_COUNTS=Object.fromEntries(CAT_IDS.map(category=>[category,NUMERIC_GENERATOR_REGISTRY[category].length]));
const NUMERIC_REGISTRY_TOTAL=Object.values(NUMERIC_REGISTRY_COUNTS).reduce((sum,count)=>sum+count,0);
if(BUILTIN.length!==NUMERIC_REGISTRY_TOTAL)throw new Error(`Numerical bank has ${BUILTIN.length} entries; registry total is ${NUMERIC_REGISTRY_TOTAL}`);

for(const entry of PENDING_QUESTION_GENERATORS){
  if(!entry.id)entry.id=`${entry.category}-${entry.questionClass}-${String(QUESTION_REGISTRY.length+1).padStart(4,'0')}`;
  QUESTION_REGISTRY.push(entry);
  if(!CATEGORY_QUESTION_REGISTRIES[entry.category])throw new Error(`Unknown registry category ${entry.category} for ${entry.id}`);
  CATEGORY_QUESTION_REGISTRIES[entry.category].push(entry);
}
for(const entry of QUESTION_REGISTRY){
  if(QUESTION_REGISTRY_BY_ID[entry.id])throw new Error(`Duplicate question generator ID: ${entry.id}`);
  QUESTION_REGISTRY_BY_ID[entry.id]=entry;
  const key=entry.recipeKey||entry.generatorFamily||entry.id;
  if(QUESTION_REGISTRY_BY_RECIPE[key])throw new Error(`Duplicate question recipe key: ${key}`);
  QUESTION_REGISTRY_BY_RECIPE[key]=entry;
}
for(const entry of QUESTION_REGISTRY){
  entry.parentId=entry.parentRecipeKey?(QUESTION_REGISTRY_BY_RECIPE[entry.parentRecipeKey]?.id||null):null;
  if(entry.parentRecipeKey&&!entry.parentId)throw new Error(`Missing parent recipe ${entry.parentRecipeKey} for ${entry.id}`);
  entry.treeChildren=(entry.treeChildrenRecipeKeys||[]).map(key=>{
    const child=QUESTION_REGISTRY_BY_RECIPE[key];
    if(!child)throw new Error(`Missing child recipe ${key} for ${entry.id}`);
    if(child.parentRecipeKey!==entry.recipeKey)throw new Error(`Tree edge ${entry.id} -> ${child.id} is not reciprocal`);
    return child.id;
  });
  entry.topLevel=!entry.parentRecipeKey;
  if(!entry.repeatable&&entry.treeChildren.length)throw new Error(`Non-repeatable question ${entry.id} cannot be compound; non-repeatable nodes must be singular`);
  if(entry.parentId){
    const parent=QUESTION_REGISTRY_BY_ID[entry.parentId];
    if(!parent.repeatable)throw new Error(`Non-repeatable parent ${parent.id} cannot have dependent questions`);
  }
}
if(new Set(QUESTION_REGISTRY.map(entry=>entry.id)).size!==QUESTION_REGISTRY.length)throw new Error('Duplicate generator IDs in the unified question registry');
if(new Set(QUESTION_REGISTRY.map(entry=>entry.recipeKey)).size!==QUESTION_REGISTRY.length)throw new Error('Duplicate recipe keys in the unified question registry');

// Validate the directed acyclic question tree. Each node has at most one parent, while any
// repeatable node may own any number of children or grandchildren.
const treeVisitState=new Map();
function validateTreeAcyclic(entry){
  const state=treeVisitState.get(entry.id)||0;
  if(state===1)throw new Error(`Question tree cycle detected at ${entry.id}`);
  if(state===2)return;
  treeVisitState.set(entry.id,1);
  for(const childId of entry.treeChildren||[]){const child=QUESTION_REGISTRY_BY_ID[childId];if(child)validateTreeAcyclic(child)}
  treeVisitState.set(entry.id,2);
}
for(const entry of QUESTION_REGISTRY)validateTreeAcyclic(entry);
const QUESTION_REGISTRY_TOTAL=QUESTION_REGISTRY.length;
const QUESTION_REGISTRY_COUNTS=Object.fromEntries(CAT_IDS.map(category=>[category,CATEGORY_QUESTION_REGISTRIES[category].length]));
for(const category of CAT_IDS){
  const local=CATEGORY_QUESTION_REGISTRIES[category];
  if(local.some(entry=>entry.category!==category))throw new Error(`Cross-category entry in ${category} registry`);
  CATEGORY_QUESTION_REGISTRIES[category]=Object.freeze(local.slice());
}

// Freeze registration timing: extension modules must be included before this file in index.html.
QUESTION_REGISTRY_FINALIZED=true;
