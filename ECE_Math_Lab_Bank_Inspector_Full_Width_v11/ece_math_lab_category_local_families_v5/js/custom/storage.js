/* Read/write custom templates in browser storage, including migration from the older storage key. */

function getTemplates(){try{let stored=JSON.parse(localStorage.getItem(STORE_KEY)||'null');if(Array.isArray(stored))return stored;let old=JSON.parse(localStorage.getItem('eceMathLab.templates.v2')||'[]');if(Array.isArray(old))return old.map(t=>({...t,variables:typeof t.variables==='string'?parseVariableLines(t.variables):t.variables,format:t.format||'number',dependsOnPrevious:!!t.dependsOnPrevious}));return []}catch{return []}}
function setTemplates(arr){try{localStorage.setItem(STORE_KEY,JSON.stringify(arr))}catch{throw Error('Could not save generators in this browser. Browser storage may be disabled or full.') }}
function makeId(){return 'custom-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8)}
