/* Shared registry primitives only. Category-local factories and seed tables live in categories/<topic>.js. */
const BUILTIN=[];
const NUMERIC_GENERATOR_REGISTRY = Object.create(null);
function difficultyForIndex(i){return i<12?1:i<24?2:i<38?3:i<51?4:5;}
function numericEntry(category, title, familyKey, makeQuestion, difficulty = null) {
  const validDifficulty = Number.isInteger(difficulty) && difficulty >= 1 && difficulty <= 5 ? difficulty : null;
  const entry = { id: '', category, title, difficulty: validDifficulty, generatorFamily: familyKey };
  entry.make = () => {
    const q = makeQuestion();
    if (!q || typeof q !== 'object') throw new Error(`Generator ${entry.id || title} did not return a question`);
    q.category = category; q.title = title; q.difficulty = entry.difficulty; q.generatorId = entry.id;
    q.recipeKey = entry.recipeKey || entry.generatorFamily; q.recipeName = title;
    return q;
  };
  return entry;
}
function coreSeedEntries(category, templates) {
  return templates.map(([title, make], i) => {
    const index = String(i + 1).padStart(2, '0');
    return numericEntry(category, `Core ${index} · ${title}`, `${category}-seed-${index}`, make);
  });
}
function numericSeedEntries(category, names, prefix, keyPrefix, factory, startIndex = 1) {
  return names.map((name, i) => {
    const index = String(startIndex + i).padStart(2, '0');
    return numericEntry(category, `${prefix} ${index} · ${name}`, `${category}-${keyPrefix}-${index}`, () => factory(i));
  });
}
/* Add a category-authored generator as a new registry entry; never silently overwrite a family. */
function appendNumericRecipe(category, title, recipeKey, makeQuestion, difficulty = null) {
  const entries = NUMERIC_GENERATOR_REGISTRY[category];
  if (!entries) throw new Error(`Cannot append numerical generator before ${category} registry is declared`);
  if (entries.some(entry => entry.title === title)) throw new Error(`Duplicate numerical generator title in ${category}: ${title}`);
  if (entries.some(entry => entry.generatorFamily === recipeKey)) throw new Error(`Duplicate numerical recipe key in ${category}: ${recipeKey}`);
  entries.push(numericEntry(category, title, recipeKey, makeQuestion, difficulty));
}

/* Persisted opt-out switches are deliberately separate from the canonical registry: disabled entries remain visible and auditable. */
const DISABLED_NUMERIC_GENERATORS_STORAGE_KEY='eceMathLab.disabledNumericGenerators.v1';
function disabledNumericGeneratorIds(){
  try { const value=JSON.parse(localStorage.getItem(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY)||'[]'); return new Set(Array.isArray(value)?value.filter(x=>typeof x==='string'):[]); }
  catch { return new Set(); }
}
function numericGeneratorPreferenceKey(spec){return `${spec.category}::${spec.generatorFamily||spec.recipeKey||spec.id}`;}
function isNumericGeneratorEnabled(spec){const disabled=disabledNumericGeneratorIds();return !disabled.has(numericGeneratorPreferenceKey(spec))&&!disabled.has(spec.id);}
function setNumericGeneratorEnabled(id,enabled){
  const spec=typeof id==='string'?BUILTIN.find(entry=>entry.id===id):id;
  const key=spec?numericGeneratorPreferenceKey(spec):String(id);
  const disabled=disabledNumericGeneratorIds();
  if(enabled){disabled.delete(key);if(spec)disabled.delete(spec.id);}
  else{if(spec)disabled.delete(spec.id);disabled.add(key);}
  try { localStorage.setItem(DISABLED_NUMERIC_GENERATORS_STORAGE_KEY,JSON.stringify([...disabled])); return true; }
  catch { return false; }
}
