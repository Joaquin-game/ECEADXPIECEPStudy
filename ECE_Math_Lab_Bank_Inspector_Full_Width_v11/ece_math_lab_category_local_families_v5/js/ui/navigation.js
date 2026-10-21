/* Main Practice/Question Builder tabs and builder subtabs. */

function setTab(id){document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===id));document.querySelectorAll('.page').forEach(p=>p.classList.toggle('active',p.id===id));if(id==='builderPage')renderTemplateList();window.scrollTo({top:0,behavior:'smooth'})}
function setSubTab(id){document.querySelectorAll('.subtab').forEach(t=>t.classList.toggle('active',t.dataset.subtab===id));document.querySelectorAll('.subpage').forEach(p=>p.classList.toggle('active',p.id===id));if(id==='codeSubpage'&&!$('codeEditor').value.trim())$('codeEditor').value=JSON.stringify(EXAMPLE_CHAIN,null,2);if(id==='codeSubpage')renderMath(document.querySelector('#codeSubpage .panel-head'))}
