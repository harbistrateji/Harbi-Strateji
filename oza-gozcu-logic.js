// GÖZCÜ LOGIC
let xp=1800,curSec='acil',curTopic=null,quizIdx=0,quizScore=0;

function goSec(id,el){
  document.querySelectorAll('.gz-tab').forEach(t=>t.classList.remove('on'));
  if(el)el.classList.add('on');
  document.querySelectorAll('.gz-sec').forEach(s=>s.classList.remove('on'));
  const sec=document.getElementById('sec-'+id);
  if(sec)sec.classList.add('on');
  curSec=id;curTopic=null;
  buildSection(id);
}

function buildSection(id){
  if(id==='trend')buildTrend();
  else if(id==='dosya')buildFiles();
  else if(id==='intel')buildIntel();
  else if(id==='risk')buildRisk();
  else if(id==='panel')buildPanel();
  else if(id==='anlatim')buildAnlatim();
  else if(id==='dunya')buildDunya();
  else if(id==='turkiye')buildTurkiye();
  else buildGrid(id);
}

function buildGrid(sec){
  const data=D[sec];if(!data)return;
  const g=document.getElementById('g-'+sec);if(!g)return;
  g.innerHTML=data.map((c,i)=>`
    <div class="gz-card" onclick="openTopic('${sec}',${i})">
      ${c.hot?'<div class="hot"></div>':''}
      <span class="cat" style="background:${c.catC}20;color:${c.catC}">${c.cat}</span>
      <h3>${c.title}</h3>
      <p class="desc">${c.desc}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tg">${t}</span>`).join('')}</div>
    </div>`).join('');
  hideAll(sec);
}

function buildDunya(){
  const filters=['Tümü','Amerika','Rusya','Çin','Avrupa','Orta Doğu'];
  const fl=document.getElementById('fl-dunya');
  if(fl)fl.innerHTML=filters.map((f,i)=>`<span class="f${i===0?' on':''}" onclick="filterDunya('${f}',this)">${f}</span>`).join('');
  buildGrid('dunya');
}

function filterDunya(cat,el){
  document.querySelectorAll('#fl-dunya .f').forEach(f=>f.classList.remove('on'));
  el.classList.add('on');
  const g=document.getElementById('g-dunya');
  const data=D.dunya;
  const filtered=cat==='Tümü'?data:data.filter(c=>c.cat===cat);
  g.innerHTML=filtered.map((c,i)=>{
    const idx=data.indexOf(c);
    return `<div class="gz-card" onclick="openTopic('dunya',${idx})">
      ${c.hot?'<div class="hot"></div>':''}
      <span class="cat" style="background:${c.catC}20;color:${c.catC}">${c.cat}</span>
      <h3>${c.title}</h3>
      <p class="desc">${c.desc}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tg">${t}</span>`).join('')}</div>
    </div>`;
  }).join('');
}

function buildTurkiye(){
  const filters=['Tümü','Savunma San.','İttifak','Deniz Gücü','Çatışma','Coğrafya'];
  const fl=document.getElementById('fl-turkiye');
  if(fl)fl.innerHTML=filters.map((f,i)=>`<span class="f${i===0?' on':''}" onclick="filterTurkiye('${f}',this)">${f}</span>`).join('');
  buildGrid('turkiye');
}

function filterTurkiye(cat,el){
  document.querySelectorAll('#fl-turkiye .f').forEach(f=>f.classList.remove('on'));
  el.classList.add('on');
  const g=document.getElementById('g-turkiye');
  const data=D.turkiye;
  const filtered=cat==='Tümü'?data:data.filter(c=>c.cat===cat);
  g.innerHTML=filtered.map((c,i)=>{
    const idx=data.indexOf(c);
    return `<div class="gz-card" onclick="openTopic('turkiye',${idx})">
      ${c.hot?'<div class="hot"></div>':''}
      <span class="cat" style="background:${c.catC}20;color:${c.catC}">${c.cat}</span>
      <h3>${c.title}</h3>
      <p class="desc">${c.desc}</p>
      <div class="tags">${c.tags.map(t=>`<span class="tg">${t}</span>`).join('')}</div>
    </div>`;
  }).join('');
}

function openTopic(sec,idx){
  const data=D[sec];if(!data||!data[idx])return;
  curTopic={sec,idx};
  const c=data[idx];
  const d=document.getElementById('d-'+sec);
  d.innerHTML=`<h2>${c.title}</h2><p class="body">${c.desc}<br><br><b>Etiketler:</b> ${c.tags.join(', ')}</p>
    <div class="acts">
      <button onclick="showThread('${sec}',${idx})"><i class="ti ti-messages"></i> Thread</button>
      <button onclick="showPoll('${sec}',${idx})"><i class="ti ti-chart-bar"></i> Tartış</button>
      <button onclick="showQuiz('${sec}',${idx})"><i class="ti ti-puzzle"></i> Quiz</button>
    </div>`;
  d.classList.add('on');
  hideAll(sec,'det');
}

function hideAll(sec,except){
  if(except!=='det'){const d=document.getElementById('d-'+sec);if(d)d.classList.remove('on');}
  const t=document.getElementById('t-'+sec);if(t)t.classList.remove('on');
  const p=document.getElementById('p-'+sec);if(p)p.classList.remove('on');
  const q=document.getElementById('q-'+sec);if(q)q.classList.remove('on');
}

function showThread(sec,idx){
  const c=D[sec][idx];if(!c||!c.thread)return;
  const t=document.getElementById('t-'+sec);
  t.innerHTML=c.thread.map(s=>`<div class="step"><div class="sn">${s.n}</div><div class="st"><b>${s.t}:</b> ${s.b}</div></div>`).join('');
  t.classList.add('on');
  addXP(15);
}

function showPoll(sec,idx){
  const c=D[sec][idx];if(!c||!c.poll)return;
  const p=document.getElementById('p-'+sec);
  const total=c.poll.votes.reduce((a,b)=>a+b,0);
  p.innerHTML=`<div class="q">${c.poll.q}</div>${c.poll.opts.map((o,i)=>{
    const pct=Math.round(c.poll.votes[i]/total*100);
    return `<div class="opt" onclick="votePoll(this,${pct})"><div class="oi"><div class="fl" style="width:0%"></div><span>${o}</span><span class="pct" style="display:none">${pct}%</span></div></div>`;
  }).join('')}`;
  p.classList.add('on');
}

function votePoll(el,pct){
  const parent=el.closest('.gz-poll');
  parent.querySelectorAll('.opt').forEach(o=>{
    const fill=o.querySelector('.fl');
    const pctEl=o.querySelector('.pct');
    fill.style.width=pctEl.textContent;
    pctEl.style.display='block';
  });
  el.querySelector('.fl').style.width=pct+'%';
  el.style.borderColor='var(--cy)';
  addXP(10);
}

function showQuiz(sec,idx){
  const c=D[sec][idx];if(!c||!c.quiz)return;
  quizIdx=0;quizScore=0;
  renderQuiz(sec,idx);
}

function renderQuiz(sec,idx){
  const c=D[sec][idx];
  const qz=c.quiz[quizIdx];
  const q=document.getElementById('q-'+sec);
  q.innerHTML=`<div class="q">${quizIdx+1}/${c.quiz.length} — ${qz.q}</div>
    ${qz.opts.map((o,i)=>`<div class="opt" onclick="ansQuiz('${sec}',${idx},${i},${qz.ans},this)"><span class="key">${'ABCD'[i]}</span> ${o}</div>`).join('')}
    <div style="font-size:.75rem;color:var(--tx2);margin-top:8px">Skor: ${quizScore}/${c.quiz.length}</div>`;
  q.classList.add('on');
}

function ansQuiz(sec,idx,pick,ans,el){
  const q=document.getElementById('q-'+sec);
  const opts=q.querySelectorAll('.opt');
  opts.forEach((o,i)=>{
    o.style.pointerEvents='none';
    if(i===ans)o.classList.add('ok');
    else if(i===pick&&pick!==ans)o.classList.add('no');
  });
  if(pick===ans){quizScore++;addXP(20);}
  setTimeout(()=>{
    quizIdx++;
    const c=D[sec][idx];
    if(quizIdx<c.quiz.length)renderQuiz(sec,idx);
    else{
      q.innerHTML=`<div class="q">Quiz Tamamlandı!</div><p style="font-size:.9rem;color:var(--cy);font-weight:600">Skor: ${quizScore}/${c.quiz.length}</p><p style="font-size:.8rem;color:var(--tx2);margin-top:8px">${quizScore>=4?'Mükemmel! Konuya hâkimsin.':quizScore>=3?'İyi! Biraz daha çalışabilirsin.':'Tekrar dene, gelişeceksin!'}</p>`;
    }
  },1200);
}

function buildTrend(){
  const g=document.getElementById('g-trend');
  g.innerHTML=TRENDS.map(t=>`
    <div class="gz-card">
      <h3>${t.title}</h3>
      <p class="desc">${t.desc}</p>
      <div style="margin-top:8px;font-size:.9rem;font-weight:600;color:${t.dir==='up'?'var(--gn)':t.dir==='down'?'var(--rd)':'var(--or)'}">${t.val}</div>
    </div>`).join('');
}

function buildFiles(){
  const g=document.getElementById('g-dosya');
  g.innerHTML=FILES.map(f=>`
    <a href="${f.link}" class="gz-fcard">
      <div class="ic"><i class="ti ${f.icon}"></i></div>
      <h4>${f.title}</h4>
      <p class="desc">${f.desc}</p>
    </a>`).join('');
}

function buildIntel(){
  const g=document.getElementById('g-intel');
  g.innerHTML=INTEL.map(n=>`
    <div class="gz-icard" style="border-left-color:${n.riskC}">
      <div class="meta"><span class="time">${n.time}</span><span class="rbadge" style="background:${n.riskC}20;color:${n.riskC}">${n.risk}</span></div>
      <h4>${n.title}</h4>
      <p class="sum">${n.sum}</p>
    </div>`).join('');
}

function buildRisk(){
  const g=document.getElementById('g-risk');
  g.innerHTML=RISKS.map(r=>`
    <div class="gz-rcard">
      <div class="ic">${r.icon}</div>
      <div class="nm">${r.name}</div>
      <div class="bar"><div class="bf" style="width:${r.val}%;background:${r.color}"></div></div>
      <div class="vl" style="color:${r.color}">${r.val}/100</div>
    </div>`).join('');
}

function buildPanel(){
  const g=document.getElementById('g-panel');
  // Simulate live fluctuation on indicators
  const livePanel = PANEL.map(p => {
    const fluct = (Math.random()*2-1)*0.5;
    return {...p, value: p.value};
  });
  g.innerHTML=livePanel.map(p=>`
    <div class="gz-dcard" style="cursor:pointer;transition:all .3s" onmouseover="this.style.transform='translateY(-3px)'" onmouseout="this.style.transform='none'">
      <div class="lb">${p.label}</div>
      <div class="vl" style="animation:fadeIn .5s">${p.value}</div>
      <div class="ch ${p.dir==='up'?'up':'dn'}">${p.dir==='up'?'▲':'▼'} ${p.change}</div>
    </div>`).join('');

  // Load interactive news feed
  loadPanelNews();
}

function loadPanelNews(){
  const container = document.getElementById('panelNews');
  if(!container) return;
  const NEWS = [
    {cat:'SAVAŞ',title:'Ukrayna-Rusya: Kırım Cephesi',desc:'Ukrayna\'nın Kırım\'a yönelik uzun menzilli füze saldırıları ve Rusya\'nın karşı hamlesi.',tags:['Kırım','ATACMS','Hava Savunma','Karadeniz'],color:'#ef4444'},
    {cat:'KRİZ',title:'İran-İsrail: Nükleer Gerilim',desc:'İran\'ın uranyum zenginleştirmesi %90\'a yaklaşırken İsrail\'in askeri seçenekleri masada.',tags:['Nükleer','Uranyum','Mossad','IAEA','Natanz'],color:'#f59e0b'},
    {cat:'SİBER',title:'Küresel Enerji Şebekesi Saldırısı',desc:'Çin bağlantılı APT grubu 12 ülkenin enerji altyapısını hedef aldı.',tags:['APT','SCADA','Enerji','Kritik Altyapı'],color:'#8b5cf6'},
    {cat:'AFET',title:'Doğu Anadolu Fay Hattı Uyarısı',desc:'Bilim insanları Doğu Anadolu Fay Hattı\'nda enerji birikimi konusunda uyarıyor.',tags:['Deprem','DAF','Maraş','Erken Uyarı','AFAD'],color:'#06b6d4'},
    {cat:'DİPLOMASİ',title:'NATO Ankara Zirvesi Hazırlıkları',desc:'2026 NATO Zirvesi için Ankara\'da yoğun diplomatik trafik sürüyor.',tags:['NATO','Türkiye','İttifak','Savunma'],color:'#22c55e'},
    {cat:'TEKNOLOJİ',title:'Otonom Savaş Sistemleri Yarışı',desc:'ABD, Çin ve Türkiye otonom savaş drone filosu geliştirmede yarışıyor.',tags:['Drone','LAWS','Yapay Zeka','Otonom'],color:'#3b82f6'},
    {cat:'EKONOMİ',title:'Kritik Mineral Tedarik Krizi',desc:'Çin\'in nadir toprak elementleri ihracat kısıtlaması küresel savunma sanayiini tehdit ediyor.',tags:['Nadir Toprak','Çin','Tedarik Zinciri'],color:'#eab308'},
    {cat:'İSTİHBARAT',title:'Uzay İstihbaratı Rekabeti',desc:'Düşük yörünge uydu takımyıldızları askeri istihbaratta devrim yaratıyor.',tags:['LEO','Starshield','ISR','GEOINT'],color:'#a855f7'}
  ];
  const shuffled = NEWS.sort(() => 0.5 - Math.random()).slice(0, 4);
  container.innerHTML = shuffled.map(n => `
    <div style="background:rgba(15,15,26,.9);border:1px solid ${n.color}33;border-radius:12px;padding:1.2rem;cursor:pointer;transition:all .3s" onmouseover="this.style.borderColor='${n.color}';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='${n.color}33';this.style.transform='none'">
      <span style="background:${n.color}22;color:${n.color};padding:.2rem .6rem;border-radius:4px;font-size:.7rem;font-weight:700;letter-spacing:.05em">${n.cat}</span>
      <span style="float:right;width:8px;height:8px;border-radius:50%;background:${n.color};opacity:.6;animation:pulse 2s infinite"></span>
      <h4 style="color:#fff;margin:.8rem 0 .4rem;font-size:.95rem">${n.title}</h4>
      <p style="color:#9ca3af;font-size:.8rem;line-height:1.5;margin:0 0 .8rem">${n.desc}</p>
      <div style="display:flex;gap:.4rem;flex-wrap:wrap">${n.tags.map(t=>`<span style="background:rgba(255,255,255,.05);color:#94a3b8;padding:.15rem .4rem;border-radius:3px;font-size:.65rem">${t}</span>`).join('')}</div>
    </div>`).join('');
  // Auto-refresh every 30s with new random selection
  setTimeout(loadPanelNews, 30000);
}

function buildAnlatim(){
  const g=document.getElementById('g-anlatim');
  g.innerHTML=ANLATIM.map(a=>`
    <div class="gz-acard" onclick="selAnlatim('${a.id}',this)">
      <div class="ic"><i class="ti ${a.icon}"></i></div>
      <div class="nm">${a.name}</div>
      <div class="desc">${a.desc}</div>
    </div>`).join('');
  const m=document.getElementById('matris-c');
  m.innerHTML=MATRIS.map(r=>`
    <div class="gz-mrow">
      <div class="kn">${r.konu}</div>
      <div class="fmts">${r.fmts.map(f=>`<span class="fmt">${f}</span>`).join('')}</div>
    </div>`).join('');
}

function selAnlatim(id,el){
  document.querySelectorAll('.gz-acard').forEach(c=>c.classList.remove('sel'));
  el.classList.add('sel');
  const a=ANLATIM.find(x=>x.id===id);
  const pv=document.getElementById('pv-anlatim');
  pv.innerHTML=`<h2>${a.name}</h2><p class="body">${a.desc}<br><br>Bu format, stratejik konuları hedef kitleye en etkili şekilde ulaştırmak için tasarlanmıştır. Konu × Format matrisinde hangi konularda kullanıldığını görebilirsiniz.</p>`;
  pv.classList.add('on');
}

function addXP(pts){
  xp+=pts;
  const fill=document.getElementById('xpF');
  const txt=document.getElementById('xpP');
  const pct=Math.min((xp/4000)*100,100);
  if(fill)fill.style.width=pct+'%';
  if(txt)txt.textContent=xp.toLocaleString('tr')+' / 4.000 XP';
}

// COUNTER ANIMATION
function animCounters(){
  document.querySelectorAll('.gz-stat .n').forEach(el=>{
    const target=parseInt(el.dataset.t);
    let cur=0;const step=Math.ceil(target/40);
    const timer=setInterval(()=>{cur+=step;if(cur>=target){cur=target;clearInterval(timer);}el.textContent=cur;},30);
  });
}

// INIT
document.addEventListener('DOMContentLoaded',()=>{
  animCounters();
  buildGrid('acil');
});
