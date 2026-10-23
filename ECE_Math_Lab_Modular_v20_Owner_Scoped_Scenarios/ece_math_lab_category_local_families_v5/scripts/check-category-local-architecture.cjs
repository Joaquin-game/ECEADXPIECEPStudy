#!/usr/bin/env node
// Architecture regression for category-local concepts and one uniform numeric-entry interface.
const fs=require('node:fs');
const path=require('node:path');
const ts=require('/opt/nvm/versions/node/v22.16.0/lib/node_modules/typescript/lib/typescript.js');
const appRoot=path.resolve(__dirname,'..');
const projectRoot=fs.existsSync(path.join(appRoot,'index.html'))?appRoot:path.resolve(appRoot,'..');
const page=fs.readFileSync(path.join(projectRoot,'index.html'),'utf8');
const categoryDir=path.join(appRoot,'js/question-bank/categories');
const registryCore=fs.readFileSync(path.join(appRoot,'js/question-bank/registry-core.js'),'utf8');
const sharedHelpers=fs.readFileSync(path.join(appRoot,'js/question-bank/shared-helpers.js'),'utf8');
const categories=['advanced','calculus','complexcalc','controls','convolution','data','econ','electronics','em','fourier','geas','laplace','ode','precalc','probability','related','relativity','signals','vector','ztrans'];
const assert=(ok,msg)=>{if(!ok)throw new Error(msg)};
const failures=[];
try{
 assert(!/concept-bank\/catalog\.js/.test(page),'index.html must not load catalog.js');
 assert(!fs.existsSync(path.join(appRoot,'js/concept-bank/catalog.js')),'catalog.js should be removed from the active source package');
 assert(!/\bCONCEPTS\s*\./.test(categories.map(c=>fs.readFileSync(path.join(categoryDir,c+'.js'),'utf8')).join('\n')),'Category modules must not depend on a global CONCEPTS object');
 assert(!/function\s+(?:coreSeedEntries|numericFamilyEntries)\s*\(/.test(registryCore),'Shared seed array-to-registry builders should be removed');
 assert(!/attachCompoundScenario|setupRecipe|treeChildrenRecipeKeys|make[A-Za-z]+CompoundRoot|make[A-Za-z]+ScenarioSetup|<svg|illustrations\s*:/.test(sharedHelpers),'shared-helpers.js must remain category-neutral and must not own scenario registration, prompts, setup factories, or illustrations');
 assert(!/\bx_prev\b/.test(sharedHelpers),'shared-helpers.js must not define the synthetic x_prev transfer alias');
 assert(categories.every(category=>/setupRecipe\s*\(/.test(fs.readFileSync(path.join(categoryDir,category+'.js'),'utf8'))),'Every category must declare its own setup/tree generators in the category file');
 assert(categories.every(category=>!/\bx_prev\b/.test(fs.readFileSync(path.join(categoryDir,category+'.js'),'utf8'))),'Synthetic x_prev aliases must not appear in category question content');
 let conceptCards=0,directRegistries=0,variantAFunctions=0,coreSeedFamilies=0,indexedSeedDispatchers=[];
 for(const category of categories){
  const file=path.join(categoryDir,category+'.js'),text=fs.readFileSync(file,'utf8');
  const sf=ts.createSourceFile(file,text,ts.ScriptTarget.Latest,true,ts.ScriptKind.JS);
  const cap=category[0].toUpperCase()+category.slice(1);
  const localConceptName=cap.toUpperCase()+'_CONCEPT_CARDS';
  let localConceptDecl=null,conceptRegistration=null,registryArray=null;
  for(const statement of sf.statements){
   if(ts.isVariableStatement(statement))for(const d of statement.declarationList.declarations){if(ts.isIdentifier(d.name)&&d.name.text===localConceptName)localConceptDecl=d}
   function walk(node){
    if(ts.isCallExpression(node)&&node.expression.getText(sf)==='registerConceptGeneratorsForCategory'&&node.arguments[0]?.getText(sf)===`NAMESPACE_${cap.toUpperCase()}`&&node.arguments[1]?.getText(sf)===localConceptName)conceptRegistration=node;
    if(ts.isBinaryExpression(node)&&node.operatorToken.kind===ts.SyntaxKind.EqualsToken&&node.left.getText(sf)===`NUMERIC_GENERATOR_REGISTRY.${category}`&&ts.isArrayLiteralExpression(node.right))registryArray=node.right;
    if(ts.isFunctionDeclaration(node)&&node.name){const name=node.name.text;if(/Family\d+VariantA$/.test(name))variantAFunctions++;if(new RegExp(`^make${cap}Family(?:2[1-9]|[34]\\d)$`).test(name)&&node.parameters.length===0)coreSeedFamilies++;if(/(?:Supplement|ExtraSeed|TopicSeed)\s*\(index\)/.test(node.getText(sf)))indexedSeedDispatchers.push(category+':'+name)}
    ts.forEachChild(node,walk);
   }walk(statement);
  }
  assert(localConceptDecl&&ts.isArrayLiteralExpression(localConceptDecl.initializer),category+' must define a topic-local concept array');
  assert(localConceptDecl.initializer.elements.length===40,category+' must define exactly 40 concept cards');
  assert(conceptRegistration,category+' must register its local concept array directly');
  conceptCards+=localConceptDecl.initializer.elements.length;
  assert(registryArray,category+' must declare a numeric registry array');
  assert(registryArray.elements.every(el=>ts.isCallExpression(el)&&el.expression.getText(sf)==='numericEntry'),category+' numeric registry rows must all be explicit numericEntry calls (no seed spreads)');
  directRegistries++;
  assert(!/\b(?:[A-Z]+_CORE_SEEDS|[A-Z]+_SUP_NAMES|[A-Z]+_EXTRA_NAMES)\b/.test(text),category+' still has a seed/name array');
 }
 assert(conceptCards===800,'Expected exactly 800 topic-local concept cards');
 assert(directRegistries===20,'Expected 20 explicit category numeric registries');
 assert(variantAFunctions===200,'Expected 200 individual seed-derived family VariantA makers');
 assert(indexedSeedDispatchers.length===0,'Index-dispatched seed functions remain: '+indexedSeedDispatchers.join(', '));
 // 8 categories have 20 independent core recipes; other 12 categories have family-variant A makers.
 assert(coreSeedFamilies>=160,'Expected the 160 former core seed recipes to become numbered family functions');
 console.log(JSON.stringify({categoryLocalConceptCards:conceptCards,directNumericRegistries:directRegistries,individualSeedVariantMakers:variantAFunctions,numberedCoreSeedMakers:coreSeedFamilies,catalogRemoved:true,indexedSeedDispatchers:0,failures},null,2));
}catch(error){failures.push(error.message);console.error(JSON.stringify({failures},null,2));process.exitCode=1}
