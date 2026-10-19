/* Validate the assembled per-category banks and create the exact pool used by test selection. */
const MIN_NUMERIC_GENERATORS_PER_CATEGORY = 48;
for (const category of CAT_IDS) {
  const entries = NUMERIC_GENERATOR_REGISTRY[category];
  if (!entries || entries.length < MIN_NUMERIC_GENERATORS_PER_CATEGORY) {
    throw new Error(`Numerical registry count for ${category} is ${entries ? entries.length : 0}; expected at least ${MIN_NUMERIC_GENERATORS_PER_CATEGORY}`);
  }
  const uniqueTitles = new Set(entries.map(entry => entry.title));
  const uniqueRecipeKeys = new Set(entries.map(entry => entry.generatorFamily));
  const uniqueFactories = new Set(entries.map(entry => entry.make));
  if (uniqueTitles.size !== entries.length) throw new Error(`Duplicate numerical generator titles in ${category}`);
  if (uniqueRecipeKeys.size !== entries.length) throw new Error(`Duplicate numerical recipe keys in ${category}`);
  if (uniqueFactories.size !== entries.length) throw new Error(`Expected independent factory closures in ${category}`);
  entries.forEach((spec, i) => {
    spec.id = `${category}-${String(i + 1).padStart(2, '0')}`;
    spec.difficulty = Number.isInteger(spec.difficulty) ? spec.difficulty : difficultyForIndex(i);
    spec.recipeKey = spec.generatorFamily;
    BUILTIN.push(spec);
  });
}
const NUMERIC_REGISTRY_COUNTS = Object.fromEntries(CAT_IDS.map(category => [category, NUMERIC_GENERATOR_REGISTRY[category].length]));
const NUMERIC_REGISTRY_TOTAL = Object.values(NUMERIC_REGISTRY_COUNTS).reduce((sum, count) => sum + count, 0);
if (BUILTIN.length !== NUMERIC_REGISTRY_TOTAL) throw new Error(`Final numerical bank has ${BUILTIN.length} entries; registry total is ${NUMERIC_REGISTRY_TOTAL}`);
if (new Set(BUILTIN.map(spec => spec.id)).size !== BUILTIN.length) throw new Error('Duplicate generator IDs detected in the final numerical bank');
