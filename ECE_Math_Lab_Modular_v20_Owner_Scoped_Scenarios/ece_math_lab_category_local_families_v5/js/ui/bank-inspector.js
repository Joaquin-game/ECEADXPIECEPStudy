/* Unified question-bank explorer: all registered generator classes and tree nodes use one registry. */
function promptBlueprintSignature(prompt){return String(prompt||'').replace(/\d+(?:\.\d+)?/g,'#').replace(/\s+/g,' ').trim()}
function registryNodeKind(entry){if(entry.parentId)return 'tree-child';if(entry.treeChildren?.length)return 'tree-root';return entry.questionClass||'numeric'}
function renderNumericBankExplorer(){
  const categorySelect=$('bankExplorerCategory');if(!categorySelect)return;
  const category=categorySelect.value||CAT_IDS[0],filter=$('bankExplorerClass')?.value||'all';
  let entries=(CATEGORY_QUESTION_REGISTRIES[category]||[]).slice();
  if(filter!=='all')entries=entries.filter(entry=>registryNodeKind(entry)===filter);
  const cat=CATS.find(c=>c.id===category),enabledCount=entries.filter(isQuestionGeneratorEnabled).length;
  const classCounts=Object.fromEntries(['numeric','setup','identification','truefalse'].map(kind=>[kind,QUESTION_REGISTRY.filter(e=>e.category===category&&e.questionClass===kind).length]));
  const roots=QUESTION_REGISTRY.filter(e=>e.category===category&&!e.parentId&&e.treeChildren?.length).length;
  $('bankExplorerSummary').textContent=`${cat?cat.name:category}: ${entries.length} shown · ${enabledCount} enabled · ${classCounts.numeric} numeric · ${classCounts.setup} setup · ${classCounts.identification} identification · ${classCounts.truefalse} true/false · ${roots} compound roots.`;
  $('bankExplorerList').innerHTML=entries.map((entry,index)=>{
    const enabled=isQuestionGeneratorEnabled(entry),kind=registryNodeKind(entry),parent=entry.parentId?QUESTION_REGISTRY_BY_ID[entry.parentId]:null;
    const relation=parent?`Parent: ${parent.title}`:entry.treeChildren?.length?`Children: ${entry.treeChildren.map(id=>QUESTION_REGISTRY_BY_ID[id]?.title||id).join('; ')}`:'Top-level node';
    const repetition=entry.repeatable?'Repeatable':'Non-repeatable';
    return `<li><div class="bank-entry-main"><strong>${String(index+1).padStart(2,'0')}. ${htmlEscape(entry.title)}</strong><small>ID: ${htmlEscape(entry.id)} · Class: ${htmlEscape(entry.questionClass)} · Recipe: ${htmlEscape(entry.recipeKey)} · ${repetition} · ${htmlEscape(relation)}</small></div><div class="bank-entry-actions"><label class="bank-enable-toggle" title="Disabled generators remain visible but are excluded from test selection"><input type="checkbox" data-generator-enable="${htmlEscape(entry.id)}" aria-label="Enable ${htmlEscape(entry.title)}" ${enabled?'checked':''}><span>Use</span></label><button type="button" class="ghost tree-focus-btn" data-tree-focus="${htmlEscape(entry.id)}">Tree</button></div><span class="bank-level">${htmlEscape(kind.toUpperCase())}</span></li>`;
  }).join('');
}
function runNumericalBankAudit(){
  const records=[];let totalErrors=0,totalSamples=0;
  const fail=(category,message)=>{totalErrors++;let record=records.find(r=>r.category===category);if(!record){record={category,count:0,errors:[]};records.push(record)}record.errors.push(message)};
  for(const category of CAT_IDS){
    const entries=NUMERIC_GENERATOR_REGISTRY[category]||[];
    if(entries.length<MIN_NUMERIC_GENERATORS_PER_CATEGORY)fail(category,`expected at least ${MIN_NUMERIC_GENERATORS_PER_CATEGORY} numeric generators, found ${entries.length}`);
    for(const key of ['id','title','recipeKey','make'])if(new Set(entries.map(e=>e[key])).size!==entries.length)fail(category,`duplicate numeric ${key}`);
    for(const entry of entries.filter(row=>!row.parentRecipeKey)){
      for(let trial=0;trial<2;trial++)try{
        const q=entry.make();totalSamples++;
        if(!q||typeof q.prompt!=='string'||!q.prompt.trim())throw new Error('missing prompt');
        if(typeof q.explanation!=='string'||!q.explanation.trim())throw new Error('missing explanation');
        if(q.answer===undefined||q.answer===null||!Number.isFinite(Number(q.answer)))throw new Error('answer key is not finite numeric data');
        if(q.questionClass!=='numeric'||q.answerSpec?.kind!=='numeric')throw new Error('numeric answer spec missing');
      }catch(err){fail(category,`${entry.id}: ${err.message}`)}
    }
  }
  // Validate every registry entry, including its question class and repeatability contract.
  for(const entry of QUESTION_REGISTRY){
    try{
      if(!entry.id||!entry.recipeKey)throw new Error('missing stable ID or recipe key');
      if(!['numeric','identification','truefalse','setup'].includes(entry.questionClass))throw new Error(`unknown class ${entry.questionClass}`);
      if(entry.parentId&&!QUESTION_REGISTRY_BY_ID[entry.parentId])throw new Error(`missing parent ${entry.parentId}`);
      if(!entry.repeatable&&entry.treeChildren.length)throw new Error('non-repeatable nodes must remain singular');
      if(entry.parentId){const parent=QUESTION_REGISTRY_BY_ID[entry.parentId];if(!parent.repeatable)throw new Error('child has non-repeatable parent')}
      if(entry.questionClass==='numeric'&&entry.parentId)continue; // Context-dependent factories are tested in complete trees.
      const q=entry.make();totalSamples++;
      if(!q.prompt?.trim())throw new Error('missing prompt');
      if(entry.questionClass!=='setup'&&!q.explanation?.trim())throw new Error('missing explanation');
      if(entry.questionClass==='numeric'&&!Number.isFinite(Number(q.answer)))throw new Error('non-finite numeric answer');
      if(entry.questionClass==='setup'&&(q.answer!==undefined||q.countsAsQuestion!==false||!q.transferData||typeof q.transferData!=='object'||Array.isArray(q.transferData)||!Array.isArray(q.illustrations)||q.illustrations.some(item=>((item.type==='svg'||item.svg||item.markup)&&!String(item.alt||'').trim()))))throw new Error('invalid answerless setup metadata, owner-scoped transfer dictionary, or illustration alt text');
      if(entry.questionClass==='identification'&&(q.type!=='id'||!q.answerText||q.answerSpec?.kind!=='text'))throw new Error('invalid identification answer metadata');
      if(entry.questionClass==='truefalse'){
        if(q.type!=='tf'||typeof q.truthValue!=='boolean'||q.answerSpec?.kind!=='boolean')throw new Error('invalid true/false answer metadata');
        if(q.truthValue!==true||q.answer!==1||q.answerText!=='True')throw new Error('current true/false policy expects a true assertion with True keyed');
        if(!q.choices?.some(choice=>choice.label==='True'&&choice.correct)||!q.choices?.some(choice=>choice.label==='False'&&!choice.correct))throw new Error('true/false must accept True as correct and keep False available as an incorrect answer');
        if(/does not describe/i.test(q.prompt))throw new Error('legacy negated-concept wording should not appear in the new true/false generators');
      }
    }catch(err){fail(entry.category,`${entry.id||entry.title}: ${err.message}`)}
  }
  for(const root of QUESTION_REGISTRY.filter(node=>!node.parentId&&node.treeChildren?.length))try{
    const module=makeRegistryTreeModule(root,['fib'],{expand:'all'});
    if(!module.length||!module[0].isSetupQuestion)throw new Error('tree root did not materialize as a setup question');
    for(const q of module){
      if(q.isSetupQuestion){if(q.answer!==undefined||q.countsAsQuestion!==false)throw new Error('setup node must remain answerless and uncounted');}
      else if(!Number.isFinite(Number(q.answerExact??q.answer)))throw new Error('tree numeric node has a non-finite answer');
      if(q!==module[0]&&(!q.receivedDataTransferObject||!Object.keys(q.receivedDataTransferObject).length))throw new Error('dependent node did not receive its transfer DTO snapshot');
    }
    totalSamples+=module.length;
  }catch(err){fail(root.category,`${root.id}: tree validation failed: ${err.message}`)}
  const numericTotal=BUILTIN.length,setupTotal=QUESTION_REGISTRY.filter(e=>e.questionClass==='setup').length,idTotal=QUESTION_REGISTRY.filter(e=>e.questionClass==='identification').length,tfTotal=QUESTION_REGISTRY.filter(e=>e.questionClass==='truefalse').length;
  const treeRoots=QUESTION_REGISTRY.filter(e=>!e.parentId&&e.treeChildren.length>0),treeChildren=QUESTION_REGISTRY.filter(e=>e.parentId);
  if(QUESTION_REGISTRY.length!==numericTotal+setupTotal+idTotal+tfTotal)fail('ALL','unified registry class counts do not add up across numeric, setup, identification, and true/false nodes');
  if(treeRoots.length===0)fail('ALL','no compound-tree roots are registered');
  if(!Object.keys(CATEGORY_QUESTION_REGISTRIES).every(category=>CATEGORY_QUESTION_REGISTRIES[category].every(node=>node.category===category)))fail('ALL','category-local registry contains a node owned by another category');
  if(QUESTION_REGISTRY.some(node=>node.parentId&&QUESTION_REGISTRY_BY_ID[node.parentId]?.category!==node.category))fail('ALL','compound tree edge crosses category boundaries');
  if(new Set(QUESTION_REGISTRY.map(e=>e.id)).size!==QUESTION_REGISTRY.length)fail('ALL','duplicate unified registry IDs');
  if(new Set(QUESTION_REGISTRY.map(e=>e.recipeKey)).size!==QUESTION_REGISTRY.length)fail('ALL','duplicate unified registry recipe keys');
  const pass=totalErrors===0;
  $('bankExplorerSummary').textContent=pass
    ?`PASS — ${QUESTION_REGISTRY.length} unified nodes; ${numericTotal} numeric, ${setupTotal} setups, ${idTotal} identification, ${tfTotal} true/false, ${treeRoots.length} compound roots, ${treeChildren.length} dependent nodes. ${totalSamples} factory samples checked.`
    :`CHECK NEEDED — ${totalErrors} issue(s): ${records.filter(r=>r.errors.length).map(r=>r.category+': '+r.errors.join('; ')).join(' | ')}`;
  $('bankExplorerSummary').style.color=pass?'var(--green)':'var(--red)';$('bankExplorerSummary').style.background=pass?'var(--greenbg)':'var(--redbg)';
}

function renderQuestionTreeVisualizer(nodeId){
  const panel=$('questionTreeVisualizer'),svg=$('questionTreeSvg');if(!panel||!svg)return;
  const focus=QUESTION_REGISTRY_BY_ID[nodeId];if(!focus)return;
  let root=focus,guard=new Set();
  while(root.parentId&&!guard.has(root.id)){guard.add(root.id);root=QUESTION_REGISTRY_BY_ID[root.parentId]||root;if(!root.parentId)break;}
  const nodes=[],edges=[],seen=new Set();
  const collect=(spec,depth=0)=>{
    if(!spec||seen.has(spec.id))return;
    seen.add(spec.id);nodes.push({spec,depth});
    for(const childId of spec.treeChildren||[]){const child=QUESTION_REGISTRY_BY_ID[childId];if(!child)continue;edges.push({from:spec.id,to:child.id});collect(child,depth+1)}
  };
  collect(root);
  const kids=new Map();for(const edge of edges){if(!kids.has(edge.from))kids.set(edge.from,[]);kids.get(edge.from).push(edge.to)}
  let leaf=0;const positions=new Map();
  function layout(id,depth){const childIds=kids.get(id)||[];let y;if(!childIds.length){y=70+leaf*105;leaf++}else{const ys=childIds.map(child=>layout(child,depth+1));y=(ys[0]+ys[ys.length-1])/2}positions.set(id,{x:40+depth*280,y});return y}
  layout(root.id,0);
  const width=Math.max(300,...[...positions.values()].map(p=>p.x+230)),height=Math.max(150,leaf*105+25);
  svg.setAttribute('viewBox',`0 0 ${width} ${height}`);svg.setAttribute('width',width);svg.setAttribute('height',height);svg.innerHTML='';
  const ns='http://www.w3.org/2000/svg';
  for(const edge of edges){const a=positions.get(edge.from),b=positions.get(edge.to);const line=document.createElementNS(ns,'path');const x1=a.x+208,y1=a.y+25,x2=b.x,y2=b.y+25;line.setAttribute('d',`M ${x1} ${y1} C ${x1+35} ${y1}, ${x2-35} ${y2}, ${x2} ${y2}`);line.setAttribute('class','tree-edge');svg.appendChild(line)}
  for(const {spec,depth} of nodes){const p=positions.get(spec.id),selected=spec.id===focus.id,group=document.createElementNS(ns,'g');group.setAttribute('class',`tree-node ${selected?'is-focus':''} ${depth===0?'is-root':''}`);group.setAttribute('data-node-id',spec.id);group.setAttribute('tabindex','0');group.setAttribute('role','button');group.setAttribute('aria-label',`${spec.title}, ${selected?'selected node':depth===0?'top-level node':'dependent node'}`);
    const rect=document.createElementNS(ns,'rect');rect.setAttribute('x',p.x);rect.setAttribute('y',p.y);rect.setAttribute('width','208');rect.setAttribute('height','54');rect.setAttribute('rx','10');group.appendChild(rect);
    const title=document.createElementNS(ns,'text');title.setAttribute('x',p.x+10);title.setAttribute('y',p.y+19);title.setAttribute('class','tree-node-title');const label=String(spec.title||spec.id);title.textContent=label.length>29?label.slice(0,27)+'…':label;group.appendChild(title);
    const meta=document.createElementNS(ns,'text');meta.setAttribute('x',p.x+10);meta.setAttribute('y',p.y+39);meta.setAttribute('class','tree-node-meta');meta.textContent=`${spec.questionClass} · ${spec.repeatable?'repeatable':'singular'} · L${depth+1}`;group.appendChild(meta);
    const focusIt=()=>renderQuestionTreeVisualizer(spec.id);group.addEventListener('click',focusIt);group.addEventListener('keydown',event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();focusIt()}});svg.appendChild(group);
  }
  const parent=focus.parentId?QUESTION_REGISTRY_BY_ID[focus.parentId]:null,siblings=parent?(parent.treeChildren||[]).map(id=>QUESTION_REGISTRY_BY_ID[id]).filter(n=>n&&n.id!==focus.id):[],children=(focus.treeChildren||[]).map(id=>QUESTION_REGISTRY_BY_ID[id]).filter(Boolean);
  $('treeVisualizerTitle').textContent=focus.title;
  $('treeVisualizerSubtitle').textContent=`${focus.category} · ${focus.questionClass} · ${focus.repeatable?'repeatable':'non-repeatable'} · ${nodes.length} node(s) in this tree`;
  $('treeVisualizerDetail').textContent=`${parent?'Parent: '+parent.title+'. ':'Top-level node. '}${siblings.length?'Sibling(s): '+siblings.map(n=>n.title).join(', ')+'. ':''}${children.length?'Children: '+children.map(n=>n.title).join(', ')+'. ':'No child nodes.'} Select any node in the diagram to focus it.`;
  panel.classList.remove('hidden');
}
function initQuestionTreeVisualizer(){
  $('closeTreeVisualizer')?.addEventListener('click',()=>$('questionTreeVisualizer')?.classList.add('hidden'));
  $('bankExplorerList')?.addEventListener('click',event=>{const button=event.target.closest('[data-tree-focus]');if(button)renderQuestionTreeVisualizer(button.dataset.treeFocus)});
}

function initNumericalBankExplorer(){
  const select=$('bankExplorerCategory');if(!select)return;
  select.innerHTML=CATS.map(c=>`<option value="${htmlEscape(c.id)}">${htmlEscape(c.name)}</option>`).join('');
  select.value=CAT_IDS[0];select.addEventListener('change',renderNumericBankExplorer);
  $('bankExplorerClass')?.addEventListener('change',renderNumericBankExplorer);
  $('auditBankBtn').addEventListener('click',runNumericalBankAudit);
  $('bankExplorerList').addEventListener('change',event=>{
    const input=event.target.closest('input[data-generator-enable]');if(!input)return;
    const saved=setQuestionGeneratorEnabled(input.dataset.generatorEnable,input.checked);renderNumericBankExplorer();
    if(!saved)$('bankExplorerSummary').textContent+=' Preferences could not be saved in this browser session.';
  });
  initQuestionTreeVisualizer();
  renderNumericBankExplorer();
}
