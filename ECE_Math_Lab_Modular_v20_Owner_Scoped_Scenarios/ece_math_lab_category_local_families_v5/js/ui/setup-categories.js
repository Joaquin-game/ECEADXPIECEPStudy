/* Creates the topic-checkbox grid and builder category menu from the shared locale catalog. */

function drawCategories(){ $('categoryGrid').innerHTML=CATS.map(c=>`<label class="category-option"><input type="checkbox" name="category" value="${c.id}" checked><span class="cat-icon" aria-hidden="true">${htmlEscape(c.icon||'•')}</span><span class="cat-copy"><span class="cat-name">${htmlEscape(c.name)}</span><span class="cat-desc">${htmlEscape(c.desc)}</span></span></label>`).join('');$('templateCategory').innerHTML=CATS.map(c=>`<option value="${c.id}">${htmlEscape(c.name)}</option>`).join(''); }
