// PTE Sathi - app.js
// Koi server, login ya payment nahi. Sirf browser + localStorage.
// AI scoring NAHI hai - ye practice feedback hai, asli PTE score ka daava nahi.

// State
let state = JSON.parse(localStorage.getItem('pteSathiProgress') || '{"attempted":0,"correct":0,"bySec":{}}');
let showHindi = false;
let mock = {list:[], idx:0, score:0, timer:null, left:600};
function save(){ localStorage.setItem('pteSathiProgress', JSON.stringify(state)); }
function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
// Hindi meaning: jo word DICT me hai, use tap karne par Hindi dikhega
function hindiize(text){
  return esc(text).split(/(\s+)/).map(tok=>{
    const clean = tok.replace(/[.,!?;:()"]/g,'').toLowerCase();
    if(DICT[clean]) return `<span class="word" data-hi="${DICT[clean]}" onclick="toggleWord(this)">${tok}</span>`;
    return tok;
  }).join('');
}
function toggleWord(el){
  const old = el.querySelector('.hindi');
  if(old){ old.remove(); return; }
  const s = document.createElement('span'); s.className='hindi'; s.textContent=' ('+el.dataset.hi+')'; el.appendChild(s);
}
function toggleHindi(){
  showHindi = !showHindi;
  document.getElementById('hindiBtn').textContent = showHindi ? 'Hindi meaning: ON' : 'Hindi meaning dikhao';
  document.querySelectorAll('.word').forEach(el=>{
    const old = el.querySelector('.hindi'); if(old) old.remove();
    if(showHindi){ const s=document.createElement('span'); s.className='hindi'; s.textContent=' ('+el.dataset.hi+')'; el.appendChild(s); }
  });
}
function mark(correct, sec){
  state.attempted++; if(correct) state.correct++;
  state.bySec[sec]=(state.bySec[sec]||0)+(correct?1:0); save(); renderProgress();
}
function renderProgress(){
  const el=document.getElementById('progress'); if(!el) return;
  const pct = state.attempted? Math.round(state.correct/state.attempted*100):0;
  el.innerHTML = `<div class="kpi">✅ Sahi: <b>${state.correct}</b></div><div class="kpi">📝 Total try: <b>${state.attempted}</b></div><div class="kpi">📊 Accuracy: <b>${pct}%</b></div>`;
}
function show(view){
  document.querySelectorAll('.view').forEach(v=>v.classList.add('hidden'));
  document.getElementById('view-'+view).classList.remove('hidden');
  document.querySelectorAll('nav button').forEach(b=>b.classList.toggle('active', b.dataset.view===view));
  window.scrollTo(0,0);
  if(view==='vocab') renderVocab();
  if(view==='home') renderProgress();
}
// Section render: subtype chips + cards
function renderSec(sec){
  const box=document.getElementById('list-'+sec); if(!box) return;
  const items = QUESTIONS.filter(q=>q.sec===sec);
  const subs = [...new Set(items.map(q=>q.sub))];
  let html = `<div class="chips">${subs.map(s=>`<button class="btn" onclick="filterSub('${sec}','${s.replace(/'/g,"")}')">${s}</button>`).join('')}</div><div id="cards-${sec}"></div>`;
  box.innerHTML=html; renderCards(sec, subs[0]);
}
function filterSub(sec, sub){ renderCards(sec, sub); }
function renderCards(sec, sub){
  const box=document.getElementById('cards-'+sec); if(!box) return;
  const items = QUESTIONS.filter(q=>q.sec===sec && q.sub===sub);
  box.innerHTML = items.map(q=>cardHTML(q)).join('') || '<p class="muted">Is type ke liye prompts neeche Speaking/Writing section me hain.</p>';
}
function cardHTML(q){
  const passage = q.passage ? `<p class="muted">${hindiize(q.passage)}</p>` : '';
  const body = q.type==='multi' ? multiHTML(q)
    : q.type==='order' ? orderHTML(q)
    : q.type==='drag' ? dragHTML(q)
    : q.type==='hiw' ? hiwHTML(q)
    : q.type==='input' ? `<input type="text" id="in-${q.id}" placeholder="Yahan jawab likho..."><button class="btn" onclick="checkInput('${q.id}')">Check karo</button>`
    : q.options.map(o=>`<button class="btn opt" onclick="checkSingle('${q.id}',this,'${o.replace(/'/g,"")}')">${esc(o)}</button>`).join('');
  return `<div class="card" id="card-${q.id}"><span class="pill">${q.sub}</span><p>${hindiize(q.q)}</p>${passage}${body}<div class="result hidden" id="res-${q.id}"></div></div>`;
}
function multiHTML(q){ return q.options.map(o=>`<label style="display:block;margin:8px 0"><input type="checkbox" value="${esc(o)}" name="cb-${q.id}"> ${esc(o)}</label>`).join('') + `<button class="btn" onclick="checkMulti('${q.id}')">Check karo</button>`; }
function orderHTML(q){ return `<p class="muted">Sahi order me click karo:</p>` + q.sentences.map((s,i)=>`<button class="btn opt" onclick="pickOrder('${q.id}',${i},this)">${esc(s)}</button>`).join('') + `<div id="ord-${q.id}" class="muted"></div><button class="btn" onclick="checkOrder('${q.id}')">Check karo</button>`; }
let orderPick={};
function pickOrder(id,i,el){ orderPick[id]=orderPick[id]||[]; if(orderPick[id].includes(i)) return; orderPick[id].push(i); el.disabled=true; document.getElementById('ord-'+id).textContent='Chuna order: '+(orderPick[id].map(x=>x+1).join(' → ')); }
function dragHTML(q){ return `<p class="muted">Bank se order me click karo:</p>` + q.bank.map(w=>`<button class="btn" onclick="pickDrag('${q.id}','${w}',this)">${w}</button>`).join('') + `<div id="drag-${q.id}" class="muted"></div><button class="btn" onclick="checkDrag('${q.id}')">Check karo</button>`; }
let dragPick={};
function pickDrag(id,w,el){ dragPick[id]=dragPick[id]||[]; if(dragPick[id].length>=2) return; dragPick[id].push(w); el.disabled=true; document.getElementById('drag-'+id).textContent='Chuna: '+dragPick[id].join(', '); }
function hiwHTML(q){ return q.sentenceWords.map(w=>`<button class="btn" onclick="checkHiw('${q.id}',this,'${w.replace(/'/g,"")}')">${w}</button>`).join(' '); }
function showRes(id, ok, q){
  const el=document.getElementById('res-'+id); el.classList.remove('hidden', 'ok','bad'); el.classList.add(ok?'ok':'bad');
  el.innerHTML = (ok?'✅ Sahi! ':'❌ Galat. ') + hindiize(q.exp) + (ok?'':` <br><b>Sahi jawab:</b> ${esc(Array.isArray(q.answer)?q.answer.join(', '):q.answer)}`);
}
function checkSingle(id, btn, val){
  const q=QUESTIONS.find(x=>x.id===id); const ok = val===q.answer;
  btn.classList.add(ok?'correct':'wrong'); mark(ok, q.sec); showRes(id, ok, q);
}
function checkMulti(id){
  const q=QUESTIONS.find(x=>x.id===id);
  const got=[...document.querySelectorAll(`input[name="cb-${id}"]:checked`)].map(e=>e.value);
  const ok = got.length===q.answer.length && q.answer.every(a=>got.includes(a));
  mark(ok,q.sec); showRes(id,ok,q);
}
function checkOrder(id){
  const q=QUESTIONS.find(x=>x.id===id); const got=orderPick[id]||[];
  const ok = JSON.stringify(got)===JSON.stringify(q.answerOrder); mark(ok,q.sec); showRes(id,ok,q);
}
function checkDrag(id){
  const q=QUESTIONS.find(x=>x.id===id); const got=dragPick[id]||[];
  const ok = JSON.stringify(got)===JSON.stringify(q.answer); mark(ok,q.sec); showRes(id,ok,q);
}
function checkHiw(id, btn, val){
  const q=QUESTIONS.find(x=>x.id===id); const ok = val===q.answer;
  btn.classList.add(ok?'correct':'wrong'); mark(ok,q.sec); showRes(id,ok,q);
}
function checkInput(id){
  const q=QUESTIONS.find(x=>x.id===id);
  const v=(document.getElementById('in-'+id).value||'').trim().toLowerCase().replace(/[.]$/,'');
  const a=q.answer.toLowerCase().replace(/[.]$/,'');
  const ok = v===a; // exact match hi sahi hai - WFD me har word exact chahiye
  mark(ok,q.sec); showRes(id,ok,q);
}
// Prompts (Speaking/Writing/Listening SST)
function renderPrompts(){
  ['speaking','writing'].forEach(sec=>{
    const box=document.getElementById('prompts-'+sec); if(!box) return;
    box.innerHTML = PROMPTS.filter(p=>p.sec===sec).map(p=>`<div class="card"><span class="pill">${p.sub}</span><h3>${p.title}</h3><p>${hindiize(p.prompt)}</p><p class="muted">💡 Tip: ${p.tip}</p><p class="muted">✅ Sample idea: ${p.sample}</p><label><input type="checkbox"> Maine ye practice ki (self-check)</label></div>`).join('');
  });
  const sst=document.getElementById('prompts-sst'); if(sst) sst.innerHTML = PROMPTS.filter(p=>p.sub==='Summarize Spoken Text').map(p=>`<div class="card"><h3>${p.title}</h3><p>${hindiize(p.prompt)}</p><p class="muted">💡 ${p.tip}</p><p class="muted">✅ ${p.sample}</p></div>`).join('');
}
// Vocab
function renderVocab(){
  const box=document.getElementById('vocabList'); if(!box) return;
  const term=(document.getElementById('vocabSearch')?.value||'').toLowerCase();
  const list=VOCAB.filter(v=>!term || v.w.includes(term) || v.hi.includes(term));
  box.innerHTML = list.map(v=>`<div class="card"><h3>${v.w}</h3><p>English: ${v.en}</p><p>Hindi: <b>${v.hi}</b></p><p class="muted">Example: ${v.ex}</p></div>`).join('') || '<p class="muted">Koi word nahi mila.</p>';
}
// Mock
function startMock(){
  mock.list = MOCK_IDS.map(id=>QUESTIONS.find(q=>q.id===id)).filter(Boolean);
  mock.idx=0; mock.score=0; mock.left=600;
  clearInterval(mock.timer);
  mock.timer=setInterval(()=>{ mock.left--; const t=document.getElementById('mockTimer'); if(t) t.textContent='⏱ '+Math.floor(mock.left/60)+':'+String(mock.left%60).padStart(2,'0'); if(mock.left<=0) finishMock(); },1000);
  showMockQ();
}
function showMockQ(){
  const box=document.getElementById('mockBox'); const q=mock.list[mock.idx]; if(!q) return finishMock();
  box.innerHTML=`<div class="card"><p>Question ${mock.idx+1} / ${mock.list.length}</p><p>${hindiize(q.q)}</p>${q.passage?`<p class="muted">${hindiize(q.passage)}</p>`:''}
  ${q.type==='input'?`<input type="text" id="mockIn" placeholder="Jawab likho"><button class="btn" onclick="mockNext(document.getElementById('mockIn').value)">Next</button>`
  : q.options.map(o=>`<button class="btn opt" onclick="mockNext('${o.replace(/'/g,"")}')">${esc(o)}</button>`).join('')}</div>`;
}
function mockNext(val){
  const q=mock.list[mock.idx];
  const ok = Array.isArray(q.answer)? false : String(val).trim().toLowerCase()===String(q.answer).toLowerCase();
  if(ok) mock.score++; mock.idx++;
  if(mock.idx>=mock.list.length) finishMock(); else showMockQ();
}
function finishMock(){
  clearInterval(mock.timer);
  document.getElementById('mockBox').innerHTML=`<div class="card"><h2>Mock khatam! 🎉</h2><p>Score: <b>${mock.score} / ${mock.list.length}</b></p><p class="muted">Ye practice score hai, asli PTE score nahi. Galat wale topics dobara Reading/Listening section me practice karo.</p><button class="bigbtn" onclick="startMock()">Dobara mock do</button></div>`;
}
// Init
document.addEventListener('DOMContentLoaded', ()=>{
  renderProgress(); renderPrompts();
  ['reading','listening','speaking'].forEach(renderSec);
});
