/* ══════════════════════════════════════════════════════════════
   HARB-İ STRATEJİ — GLOBAL NAV & FOOTER INJECTOR v10
   Injects consistent header, ticker, and footer into all pages
   + Game page skip + Working search + Medeniyet Dinamikleri menu
══════════════════════════════════════════════════════════════ */
(function(){
'use strict';

// Skip injection for fullscreen game pages
if(document.documentElement.hasAttribute('data-hs-skip') || document.querySelector('meta[name="hs-skip"]')){
  // Still init theme toggle for game pages
  initThemeOnly();
  return;
}

const TICKER_ITEMS = [
  'Hava Kuvvetleri Uzay Komutanlığı: 9 Ana Fonksiyon Açıklandı',
  'ABD, KAAN Savaş Uçağı İçin F110 Motor Satışını Kongre\'ye Bildirdi',
  'Bayraktar TB3, TCG Anadolu\'dan Elektronik Taarruz Görevi Gerçekleştirdi',
  'ALTAY Tankı Seri Üretimde: 2026 Hedefi 11 Araç',
  'Siber Güvenlik Kurulu Cumhurbaşkanı Başkanlığında Toplandı',
  'DENİZKURDU Tatbikatı: TB3 Kamikaze İİA\'yı Etkisiz Hale Getirdi',
  'KAAN Motor Tedarik Sözleşmesi SSB-TUSAŞ Arasında İmzalandı',
  'Siber Vatan Programı 2026 Dönemi 81 İlde Uygulanıyor',
  'TCG İstanbul (F-515) Doğu Akdeniz\'de Caydırıcı Görevde',
  'ALTAY Tankında 2026 Sonundan İtibaren Yerli Güç Grubuna Geçilecek'
];

const NAV_LINKS = [
  { label:'OZA (Ortak Zihin Akademisi)', href:'oza-hub.html', cls:'oza-link', sub:[
    {lbl:'Oyna', links:[
      {t:'Tarihsel Savaşlar',h:'oza-hub.html#tarihsel'},
      {t:'Aksiyon & Taktik',h:'oza-hub.html#aksiyon'},
      {t:'Stratejik Karar',h:'oza-hub.html#strateji'},
      {t:'Siber & Teknoloji',h:'oza-hub.html#siber'},
      {t:'Ekonomi & Kaynak',h:'oza-hub.html#ekonomi'},
      {t:'Simülasyonlar',h:'oza-hub.html#simulasyon'}
    ]},
    {lbl:'Öğren', links:[
      {t:'Eğitim & Quiz',h:'oza-hub.html#egitim'},
      {t:'OZA∞ Bilgi Kütüphanesi',h:'oza-sonsuz.html'},
      {t:'Mobil Mini Oyunlar',h:'oza-mobil-oyunlar.html'}
    ]},
    {lbl:'Yarış & Canlı', links:[
      {t:'Strateji Ligi',h:'oza-strateji-ligi.html'},
      {t:'Kriz Masası (2-4 kişi)',h:'oza-kriz-masasi.html'},
      {t:'Gözcü Canlı Analiz',h:'oza-gozcu.html'}
    ]}
  ]},
  { label:'EVREN', href:'evren-hub.html', cls:'evren-link', sub:[
    {lbl:'Küresel Sorunlar', links:[
      {t:'Enerji Krizi & Dönüşüm',h:'evren-hub.html#enerji'},
      {t:'Su Kıtlığı & Savaşları',h:'evren-hub.html#su'},
      {t:'Stratejik Mineraller',h:'evren-hub.html#mineraller'},
      {t:'İklim & Çevre Riski',h:'evren-hub.html#iklim'}
    ]},
    {lbl:'İnteraktif Araçlar', links:[
      {t:'Enerji Geleceği İnfografiği',h:'enerji-infografik-gelecek.html'},
      {t:'Su Kıtlığı Haritası',h:'su-infografik-kitlik.html'},
      {t:'Mineraller Periyodik Tablo',h:'stratejik-mineraller-periyodik-tablo.html'}
    ]}
  ]},
  { label:'MEDENİYET', href:'medeniyet-dinamikleri.html', cls:'med-link', sub:[
    {lbl:'5 Ana Kategori', links:[
      {t:'Tarih & Kimlik',h:'medeniyet-dinamikleri.html#tarih'},
      {t:'Jeopolitik & Strateji',h:'medeniyet-dinamikleri.html#jeopolitik'},
      {t:'Ekonomi & Enerji',h:'medeniyet-dinamikleri.html#ekonomi'},
      {t:'Teknoloji & Gelecek',h:'medeniyet-dinamikleri.html#teknoloji'},
      {t:'Kültür & Uygarlık',h:'medeniyet-dinamikleri.html#kultur'}
    ]},
    {lbl:'Öne Çıkanlar', links:[
      {t:'Elon Musk Serisi',h:'musk-infografik-serisi.html'},
      {t:'Geleceğin Harp Ekosistemi',h:'gelecegin-harp-ekosistemi.html'},
      {t:'Bilim Arenası',h:'bilim-arenasi-tam.html'},
      {t:'Küresel Askeri Sistemler',h:'infografik-ulke-karsilastirma.html'}
    ]}
  ]},
  { label:'KÜLLİYAT', href:'kesfet.html', sub:[
    {lbl:'5 Cilt', links:[
      {t:'Cilt I — Gücün Algoritması',h:'kulliyat.html#cilt1'},
      {t:'Cilt II — Sistemler Savaşı',h:'kulliyat.html#cilt2'},
      {t:'Cilt III — Savaşın Finansmanı',h:'kulliyat.html#cilt3'},
      {t:'Cilt IV — Formüller & Bilim',h:'kulliyat.html#cilt4'},
      {t:'Cilt V — Makaleler & Analizler',h:'kulliyat.html#cilt5'}
    ]},
    {lbl:'Referans', links:[
      {t:'Stratejik Sözlük (3.335)',h:'kesfet.html#sozluk'},
      {t:'Silah & Metal Paneli',h:'panel-silah-metal.html'},
      {t:'Formül Laboratuvarı',h:'formul-lab.html'},
      {t:'Yazarlar & Köşe Yazıları',h:'yazarlar.html'},
      {t:'Raporlar',h:'raporlar.html'}
    ]}
  ]},
  { label:'HSTV', href:'hs-tv.html' },
  { label:'Haberler', href:'haberler.html' },
  { label:'Profil', href:'profil.html' }
];

// Search index for the search overlay
const SEARCH_INDEX = [
  {t:'İran Savaşının Anatomisi',h:'iran-ek-icerik.html',k:'iran israel savaş analiz'},
  {t:'NATO Ankara Zirvesi 2026',h:'nato-ankara-zirvesi-2026.html',k:'nato ankara türkiye zirve'},
  {t:'Algoritmik Harp — Demir Kubbe',h:'sim1-demir-kubbe.html',k:'algoritmik harp demir kubbe simülasyon'},
  {t:'Sürü İHA Tasarım Simülatörü',h:'suru-iha-tasarim-simulatoru.html',k:'sürü iha drone tasarım'},
  {t:'Spektrum Savaşı',h:'sim12-spektrum-savasi.html',k:'elektronik harp spektrum'},
  {t:'Siber/EH Simülatörü',h:'siber-eh-simulatoru.html',k:'siber elektronik harp'},
  {t:'Kuantum Kriptografi QKD',h:'kuantum-kriptografi-qkd-simulatoru.html',k:'kuantum kriptografi'},
  {t:'Stratejik Mineraller',h:'stratejik-mineraller-periyodik-tablo.html',k:'mineral nadir metal'},
  {t:'Caydırıcılık Piramidi',h:'infografik-caydiricilik-piramidi.html',k:'caydırıcılık türkiye savunma'},
  {t:'Hibrit Savaş Tüm Boyutlarıyla',h:'infografik-hibrit-savas-tum-boyutlar.html',k:'hibrit savaş siber bilişsel'},
  {t:'Medeniyet Dinamikleri',h:'medeniyet-dinamikleri.html',k:'medeniyet jeopolitik kültür'},
  {t:'Türk Savaş Zekâsı',h:'oza-turk-savas-zekasi.html',k:'türk savaş taktik kurt kapanı'},
  {t:'İstanbul Fethi 1453',h:'oza-istanbul-fethi-1453.html',k:'istanbul fetih osmanlı'},
  {t:'Malazgirt 1071',h:'oza-malazgirt-1071.html',k:'malazgirt selçuklu alparslan'},
  {t:'Çanakkale 1915',h:'oza-canakkale-1915.html',k:'çanakkale savaş gelibolu'},
  {t:'Preveze 1538',h:'oza-preveze-1538.html',k:'preveze deniz barbaros'},
  {t:'Kill-Chain Yarışı',h:'oza-kill-chain.html',k:'kill chain hız'},
  {t:'Kriz Odası',h:'oza-kriz-odasi.html',k:'kriz karar 10 saniye'},
  {t:'Asimetri Terazisi',h:'oza-asimetri-kart.html',k:'asimetri kart swipe'},
  {t:'OODA-X Düellosu',h:'oza-ooda-x.html',k:'ooda döngü düello'},
  {t:'OODA Döngüsü İnteraktif',h:'ooda-dongusu-interaktif.html',k:'ooda boyd gözlem yönelim karar eylem'},
  {t:'OODA-X Süper Döngü Simülatörü',h:'ooda-x-super-dongu-simulatoru.html',k:'ooda-x kuantum blockchain yapay zeka hız'},
  {t:'Savaşın Evrimi Zaman Tüneli',h:'savas-evrimi-zaman-tuneli.html',k:'savaş evrimi tarih westphalia blitzkrieg dron yapay zeka'},
  {t:'Emtia İmparatorluğu',h:'oza-emtia-imparatorlugu.html',k:'emtia ekonomi idle'},
  {t:'Mobil Oyunlar',h:'oza-mobil-oyunlar.html',k:'mobil mini oyun tepki'},
  {t:'OZA Oyun Merkezi',h:'oza-hub.html',k:'oza oyun hub merkez'},
  {t:'EVREN Hub',h:'evren-hub.html',k:'evren arcade aksiyon'},
  {t:'Veri',h:'veri-tabani.html',k:'veri silah aktör doktrin'},
  {t:'Külliyat & Araştırma',h:'kesfet.html',k:'külliyat araştırma makale'},
  {t:'HS·TV',h:'hs-tv.html',k:'video medya tv'},
  {t:'Haberler',h:'haberler.html',k:'haber son dakika güncel'},
  {t:'Yazarlar',h:'yazarlar.html',k:'yazar bayram kılınçer'},
  {t:'Silah Sistemleri Paneli',h:'panel-silah-metal.html',k:'silah panel metal'},
  {t:'Türklerde Ekonomi',h:'md-turklerde-ekonomi.html',k:'ekonomi ipek yolu vakıf'},
  {t:'Türklerde Spor',h:'md-turklerde-spor.html',k:'spor okçuluk güreş cirit'},
  {t:'Türklerde Toplum',h:'md-turklerde-toplum.html',k:'toplum boy budun millet'},
  {t:'Türklerde Sanat',h:'md-turklerde-sanat.html',k:'sanat hat mimar sinan'},
  {t:'Türklerde Eğitim',h:'md-turklerde-egitim.html',k:'eğitim medrese üniversite'},
  {t:'16 Büyük Türk Devleti',h:'oza-16-turk-devleti.html',k:'16 türk devlet hun göktürk'},
  {t:'Komutan Sözleri',h:'oza-komutan-sozleri.html',k:'komutan söz atatürk fatih'},
  {t:'Kara Kuvvetleri Tarihçesi',h:'tsk-kara-kuvvetleri-tarihce.html',k:'kara kuvvet tsk'},
  {t:'Deniz Kuvvetleri Tarihçesi',h:'tsk-deniz-kuvvetleri-tarihce.html',k:'deniz kuvvet donanma'},
  {t:'Hava Kuvvetleri Tarihçesi',h:'tsk-hava-kuvvetleri-tarihce.html',k:'hava kuvvet kaan'},
  {t:'Uzay Komutanlığı',h:'tsk-uzay-komutanligi-tarihce.html',k:'uzay komutanlık uydu göktürk'},
  {t:'Bilim Arenası',h:'bilim-arenasi-tam.html',k:'bilim islam alim'},
  {t:'Hürmüz Petrodolar Krizi',h:'sim14-hurmuz-petrodolar.html',k:'hürmüz iran petrol dolar'},
  {t:'Drone Devrim İnfografik',h:'infografik-drone-devrim.html',k:'drone iha devrim'},
  {t:'Askerî Harcama İnfografik',h:'infografik-askeri-harcama.html',k:'askeri harcama bütçe nato'},
  {t:'BM Reform İnfografik',h:'infografik-bm-reform.html',k:'birleşmiş milletler reform'},
  {t:'Gelecek Savaş Alanları',h:'infografik-gelecek-savas-alanlari.html',k:'gelecek savaş alan uzay siber'},
  {t:'Savaş Evrimi',h:'infografik-savas-evrimi.html',k:'savaş evrim tarih'},
  {t:'Şeffaf Savaş',h:'infografik-seffaf-savas.html',k:'şeffaf savaş istihbarat'},
  {t:'Alternatif Tarih',h:'oza-alternatif-tarih.html',k:'alternatif tarih osmanlı'},
  {t:'Osmanlı Deniz İmparatorluğu',h:'oza-osmanli-deniz-imparatorlugu.html',k:'osmanlı deniz tersane'},
  {t:'Hakkımızda',h:'hakkimizda.html',k:'hakkımızda künye misyon vizyon'},
  {t:'Raporlar',h:'raporlar.html',k:'rapor analiz strateji savunma'},
  {t:'Dijital Ayna: Kuşakların Varoluş Savaşı',h:'sk-dijital-ayna.html',k:'kuşak dijital savaş cevher koyuncu köşe yazısı'}
];

function buildTicker(){
  let items = TICKER_ITEMS.map(i=>`<span>${i}</span><span class="hs-t-sep">◆</span>`).join('');
  return `<div class="hs-ticker"><div class="hs-ticker-lbl"><span class="hs-ticker-dot"></span>SON DAKİKA</div><div class="hs-ticker-track"><div class="hs-ticker-inner">${items}${items}</div></div></div>`;
}

function buildNav(){
  let linksHtml = NAV_LINKS.map(l=>{
    let cls = l.cls ? ` class="${l.cls}"` : '';
    let chev = l.sub ? ' <span class="hs-nav-chev">▼</span>' : '';
    let drop = '';
    if(l.sub){
      let secs = l.sub.map(s=>{
        let links = s.links.map(a=>`<a href="${a.h}">${a.t}</a>`).join('');
        return `<div class="hs-nd-sec"><div class="hs-nd-lbl">${s.lbl}</div><div class="hs-nd-links">${links}</div></div>`;
      }).join('');
      drop = `<div class="hs-nav-drop">${secs}</div>`;
    }
    return `<div class="hs-nav-link"><a href="${l.href}"${cls}>${l.label}${chev}</a>${drop}</div>`;
  }).join('');

  return `<header class="hs-header">
    <div class="hs-nav-top">
      <a href="index.html" class="hs-nav-logo">
        <img src="logo-icon-64.png" alt="" style="height:28px;width:28px;" onerror="this.style.display='none'">
        <span class="hs-nav-logo-text">HARB-İ STRATEJİ</span>
      </a>
      <div class="hs-nav-right">
        <div class="hs-nav-search" onclick="toggleSearch()">🔍 <span>Ara...</span></div>
        <a href="profil.html" class="hs-nav-icon" title="Profil">👤</a>
        <div class="hs-hamburger" onclick="toggleMobileMenu()">
          <span></span><span></span><span></span>
        </div>
      </div>
    </div>
    <nav class="hs-nav-bar"><div class="hs-nav-bar-inner">${linksHtml}</div></nav>
  </header>`;
}

function buildFooter(){
  // Build related content section based on current page
  const page = location.pathname.split('/').pop() || 'index.html';
  const relatedMap = {
    'index.html': [{t:'Demir Kubbe Simülasyonu',h:'sim1-demir-kubbe.html',cat:'SIM'},{t:'NATO Ankara Zirvesi 2026',h:'nato-ankara-zirvesi-2026.html',cat:'SIM'},{t:'Siber/EH Operasyon Simülatörü',h:'siber-eh-simulatoru.html',cat:'SIM'},{t:'Kuantum Kriptografi QKD',h:'kuantum-kriptografi-qkd-simulatoru.html',cat:'SIM'},{t:'Sürü İHA Tasarım',h:'suru-iha-tasarim-simulatoru.html',cat:'SIM'},{t:'Hürmüz Petrodolar',h:'sim14-hurmuz-petrodolar.html',cat:'SIM'}],
    'simulasyonlar.html': [{t:'Demir Kubbe',h:'sim1-demir-kubbe.html',cat:'SIM'},{t:'Algoritmik Harp',h:'sim1-demir-kubbe.html',cat:'SIM'},{t:'İnfografikler',h:'infografik.html',cat:'INF'},{t:'HSTV',h:'hs-tv.html',cat:'HSTV'}],
    'oza-hub.html': [{t:'OODA Döngüsü',h:'ooda-dongusu-interaktif.html',cat:'OZA'},{t:'OODA-X Süper Döngü',h:'ooda-x-super-dongu-simulatoru.html',cat:'OZA'},{t:'Savaşın Evrimi',h:'savas-evrimi-zaman-tuneli.html',cat:'OZA'},{t:'Mobil Oyunlar',h:'oza-mobil-oyunlar.html',cat:'OZA'},{t:'İnfografikler',h:'infografik.html',cat:'INF'}],
  };
  const isOZApage = page.startsWith('oza-') || page.includes('ooda') || page.includes('savas-evrimi');
  const ozaDefault = [{t:'OODA Döngüsü',h:'ooda-dongusu-interaktif.html',cat:'OZA'},{t:'OODA-X Süper Döngü',h:'ooda-x-super-dongu-simulatoru.html',cat:'OZA'},{t:'Kill-Chain Yarışı',h:'oza-kill-chain.html',cat:'OZA'},{t:'Kriz Odası',h:'oza-kriz-odasi.html',cat:'OZA'},{t:'Hipersonik Yarış',h:'oza-hipersonik-yaris.html',cat:'OZA'},{t:'Savaşın Evrimi',h:'savas-evrimi-zaman-tuneli.html',cat:'OZA'}];
  const simDefault = [{t:'Demir Kubbe Simülasyonu',h:'sim1-demir-kubbe.html',cat:'SIM'},{t:'Siber/EH Operasyon Simülatörü',h:'siber-eh-simulatoru.html',cat:'SIM'},{t:'Kuantum Kriptografi QKD',h:'kuantum-kriptografi-qkd-simulatoru.html',cat:'SIM'},{t:'Sürü İHA Tasarım',h:'suru-iha-tasarim-simulatoru.html',cat:'SIM'},{t:'Hürmüz Petrodolar',h:'sim14-hurmuz-petrodolar.html',cat:'SIM'},{t:'NATO Ankara Zirvesi',h:'nato-ankara-zirvesi-2026.html',cat:'SIM'}];
  const related = relatedMap[page] || (isOZApage ? ozaDefault : simDefault);
  const relatedHTML = related.map(r => `
    <a href="${r.h}" class="hs-related-card">
      <span class="hs-related-cat">${r.cat}</span>
      <span class="hs-related-title">${r.t}</span>
    </a>`).join('');
  
  return `<div class="hs-related-section">
    <div class="container">
      <div class="hs-section-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;">
        <h3 style="font-family:var(--font-display);font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--text,#e8eaed);">İlgili Simülasyonlar & İnfografikler</h3>
        <a href="simulasyonlar.html" style="font-size:.7rem;color:var(--crimson);font-weight:600;letter-spacing:.05em;">otomatik eşleşme</a>
      </div>
      <div style="display:flex;gap:.8rem;overflow-x:auto;padding-bottom:.5rem;">${relatedHTML}</div>
    </div>
  </div>
  <footer class="hs-footer">
    <div class="container">
      <div class="hs-footer-grid">
        <div class="hs-footer-col">
          <h4>Analizler</h4>
          <a href="index.html">Küresel Strateji</a>
          <a href="iran-ek-icerik.html">Bölgesel Strateji</a>
          <a href="infografik-caydiricilik-piramidi.html">Savunma Teknolojileri</a>
          <a href="infografik-hibrit-savas-tum-boyutlar.html">Jeopolitik</a>
        </div>
        <div class="hs-footer-col">
          <h4>OZA & EVREN</h4><small style="opacity:0.6;font-size:10px;display:block;margin:-4px 0 6px">Medeniyet ve devlet devamlılık laboratuvarı</small>
          <a href="oza-hub.html">OZA Hub</a>
          <a href="evren-hub.html">EVREN</a>
          <a href="simulasyonlar.html">Simülasyonlar</a>
          <a href="oza-mobil-oyunlar.html">Mobil Oyunlar</a>
        </div>
        <div class="hs-footer-col">
          <h4>Külliyat</h4>
          <a href="kulliyat.html">Makaleler</a>
          <a href="infografik.html">İnfografikler</a>
          <a href="kesfet.html">Sözlük</a>
          <a href="hs-tv.html">HSTV</a>
        </div>
        <div class="hs-footer-col">
          <h4>Medeniyet</h4>
          <a href="medeniyet-dinamikleri.html">Medeniyet Dinamikleri</a>
          <a href="haberler.html">Haberler</a>
          <a href="yazarlar.html">Yazarlar</a>
          <a href="profil.html">Profil</a>
        </div>
        <div class="hs-footer-col">
          <h4>Platform</h4>
          <a href="raporlar.html">Raporlar</a>
          <a href="hakkimizda.html">Hakkımızda</a>
          <a href="veri-tabani.html">Veri</a>
          <a href="panel-silah-metal.html">Silah Paneli</a>
          <a href="editor.html">Editör Paneli</a>
          <a href="uyelik.html">Üyelik</a>
        </div>
      </div>
      <div class="hs-footer-bottom">
        <div class="hs-footer-copy" style="font-family:'Playfair Display',serif;font-style:italic;font-size:13px;color:#c41e3a;margin-bottom:4px">"Gerçeklerden Geleceğe"</div>
        <div class="hs-footer-copy">© 2026 Harb-i Strateji — Tüm Hakları Saklıdır</div>
        <div class="hs-footer-copy" style="margin-top:6px;font-size:10px"><a href="hakkimizda.html" style="color:#94a3b8;margin-right:12px">Hakkımızda</a><a href="raporlar.html" style="color:#94a3b8;margin-right:12px">Raporlar</a><a href="uyelik.html" style="color:#94a3b8">Üyelik</a></div>
      </div>
    </div>
  </footer>`;
}

// Search overlay
function buildSearchOverlay(){
  return `<div id="hs-search-overlay" style="display:none;position:fixed;inset:0;z-index:2000;background:rgba(10,15,23,.95);backdrop-filter:blur(12px);padding:2rem;">
    <div style="max-width:640px;margin:12vh auto 0;">
      <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:1.5rem;">
        <span style="font-size:1.5rem;">🔍</span>
        <h2 style="font-family:var(--font-display);font-size:1rem;font-weight:700;color:#fff;letter-spacing:.1em;">ARAMA</h2>
        <button onclick="toggleSearch()" style="margin-left:auto;background:none;border:1px solid rgba(255,255,255,.2);color:#fff;padding:.3rem .6rem;border-radius:4px;cursor:pointer;font-size:.7rem;">ESC</button>
      </div>
      <input id="hs-search-input" type="text" placeholder="Makale, simülasyon, oyun, terim ara..." oninput="hsDoSearch()" style="width:100%;padding:1rem 1.5rem;font-size:1rem;border:2px solid var(--crimson,#bb1919);border-radius:8px;background:rgba(255,255,255,.05);color:#fff;font-family:var(--font-body,Inter,sans-serif);outline:none;">
      <div id="hs-search-results" style="margin-top:1rem;max-height:50vh;overflow-y:auto;"></div>
      <p style="text-align:center;margin-top:1.5rem;color:rgba(255,255,255,.3);font-size:.7rem;">ESC ile kapatın · Sonuçlara tıklayarak gidin</p>
    </div>
  </div>`;
}

// Mobile menu overlay
function buildMobileMenu(){
  let links = NAV_LINKS.map(l=>{
    let sub = '';
    if(l.sub){
      let subLinks = l.sub.map(s=>s.links.map(a=>`<a href="${a.h}" style="display:block;padding:.4rem 1.5rem;font-size:.8rem;color:rgba(255,255,255,.6);transition:color .2s;">${a.t}</a>`).join('')).join('');
      sub = `<div class="hs-mob-sub" style="display:none;padding:.3rem 0;border-top:1px solid rgba(255,255,255,.05);">${subLinks}</div>`;
    }
    let arrow = l.sub ? `<span class="hs-mob-arrow" style="margin-left:auto;font-size:.6rem;opacity:.5;transition:transform .2s;">▼</span>` : '';
    return `<div class="hs-mob-item">
      <a href="${l.href}" style="display:flex;align-items:center;padding:.9rem 1.2rem;font-family:var(--font-display,Oswald,sans-serif);font-size:1rem;font-weight:600;color:#fff;border-bottom:1px solid rgba(255,255,255,.06);transition:all .2s;" ${l.sub?'onclick="event.preventDefault();this.nextElementSibling.style.display=this.nextElementSibling.style.display===\'none\'?\'block\':\'none\';this.querySelector(\'.hs-mob-arrow\').style.transform=this.nextElementSibling.style.display===\'none\'?\'rotate(0)\':\'rotate(180deg)\'"':''}>${l.label}${arrow}</a>
      ${sub}
    </div>`;
  }).join('');
  return `<div id="hs-mobile-menu" style="display:none;position:fixed;inset:0;z-index:1500;background:var(--navy,#0d1b2a);overflow-y:auto;padding-top:90px;">
    <div style="position:absolute;top:1rem;right:1rem;"><button onclick="toggleMobileMenu()" style="background:none;border:1px solid rgba(255,255,255,.2);color:#fff;padding:.4rem .8rem;border-radius:4px;cursor:pointer;font-size:.8rem;">✕ Kapat</button></div>
    <div style="padding:.5rem;">${links}</div>
  </div>`;
}

function inject(){
  const body = document.body;
  if(document.querySelector('.hs-header')) return;
  
  // Remove old nav/header elements
  document.querySelectorAll('nav, header, .navbar, .nav-bar, .site-header, .top-nav, .main-nav, .hdr, .page-header').forEach(el => {
    if(!el.classList.contains('hs-header') && !el.classList.contains('hs-ticker') && !el.closest('.hs-header') && !el.closest('#savas-zekasi-root') && !el.closest('.ba-phone-container')){
      el.remove();
    }
  });
  
  // Override CSS for old nav remnants
  const overrideCSS = document.createElement('style');
  overrideCSS.textContent = `
    /* ── Old nav cleanup ── */
    header:not(.hs-header){display:none!important;}
    
    /* ── Color links ── */
    .hs-nav-link>a.oza-link{color:var(--oza-purple,#5865f2)!important;text-transform:none!important;}
    .hs-nav-link>a.gold-link{color:var(--gold,#c9a84c)!important;}
    .hs-nav-link>a.med-link{color:#e67e22!important;}
    .hs-nav-link>a.evren-link{color:var(--cyan,#00E0FF)!important;}
    
    /* ── Ticker ── */
    .hs-ticker{background:var(--crimson,#c41e3a);height:34px;display:flex;align-items:center;overflow:hidden;z-index:1001;position:fixed;top:0;left:0;right:0;}
    .hs-ticker-lbl{flex-shrink:0;background:rgba(0,0,0,.25);height:100%;display:flex;align-items:center;padding:0 1rem;font-family:var(--font-display,'Chakra Petch',sans-serif);font-size:.6rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#fff;gap:.4rem;border-right:1px solid rgba(255,255,255,.15);white-space:nowrap;}
    .hs-ticker-dot{width:8px;height:8px;border-radius:50%;background:#fff;animation:hsDot 1.2s ease infinite;}
    @keyframes hsDot{0%,100%{opacity:1;}50%{opacity:.3;}}
    .hs-ticker-track{flex:1;overflow:hidden;position:relative;height:100%;display:flex;align-items:center;}
    .hs-ticker-inner{display:inline-flex;align-items:center;gap:2.5rem;animation:hsTicker 50s linear infinite;font-size:.72rem;font-weight:500;color:#fff;white-space:nowrap;padding:0 1rem;}
    .hs-ticker-inner:hover{animation-play-state:paused;}
    .hs-t-sep{opacity:.3;font-size:.6rem;}
    @keyframes hsTicker{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
    
    /* ── Header ── */
    .hs-header{position:fixed;top:34px;left:0;right:0;z-index:1000;box-shadow:0 2px 16px rgba(0,0,0,.3);}
    
    /* ── Nav Top ── */
    .hs-nav-top{background:var(--navy,#0d1b2a);height:56px;display:flex;align-items:center;gap:1rem;padding:0 1.5rem;}
    .hs-nav-logo{display:flex;align-items:center;gap:.6rem;flex-shrink:0;text-decoration:none;}
    .hs-nav-logo-text{font-family:var(--font-display,'Chakra Petch',sans-serif);font-size:.8rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#fff;}
    .hs-nav-right{display:flex;align-items:center;gap:.6rem;margin-left:auto;}
    .hs-nav-search{display:flex;align-items:center;gap:.4rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:20px;padding:.3rem .85rem;color:rgba(255,255,255,.7);font-size:.72rem;cursor:pointer;transition:all .2s;font-family:var(--font-body,'IBM Plex Sans',sans-serif);}
    .hs-nav-search:hover{background:rgba(255,255,255,.16);color:#fff;}
    .hs-nav-icon{width:32px;height:32px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);font-size:.7rem;cursor:pointer;transition:all .2s;text-decoration:none;}
    .hs-nav-icon:hover{background:var(--crimson,#c41e3a);border-color:var(--crimson,#c41e3a);color:#fff;}
    
    /* ── Nav Bar ── */
    .hs-nav-bar{background:var(--navy-2,#111827);border-top:1px solid rgba(255,255,255,.07);}
    .hs-nav-bar-inner{max-width:1320px;margin:0 auto;padding:0 1.5rem;display:flex;align-items:stretch;overflow-x:auto;scrollbar-width:none;}
    .hs-nav-bar-inner::-webkit-scrollbar{display:none;}
    .hs-nav-link{position:relative;flex-shrink:0;}
    .hs-nav-link>a{display:flex;align-items:center;gap:.28rem;padding:.6rem .8rem;font-family:var(--font-display,'Chakra Petch',sans-serif);font-size:.72rem;font-weight:600;letter-spacing:.07em;text-transform:uppercase;color:rgba(255,255,255,.65);border-bottom:3px solid transparent;transition:all .2s;white-space:nowrap;text-decoration:none;}
    .hs-nav-link>a:hover,.hs-nav-link>a.active{color:#fff;border-bottom-color:var(--crimson,#c41e3a);}
    .hs-nav-chev{font-size:.5rem;opacity:.5;transition:transform .2s;}
    .hs-nav-link:hover .hs-nav-chev{transform:rotate(180deg);opacity:1;}
    
    /* ── DROPDOWN — CRITICAL: hidden by default, show on hover ── */
    .hs-nav-drop{display:none!important;position:absolute;top:100%;left:0;min-width:240px;background:var(--bg-card,#1a1f2e);border-top:3px solid var(--crimson,#c41e3a);box-shadow:0 8px 32px rgba(0,0,0,.5);z-index:9999;border-radius:0 0 8px 8px;padding:.8rem;}
    .hs-nav-link:hover>.hs-nav-drop{display:block!important;}
    
    /* ── Dropdown sections ── */
    .hs-nd-sec{padding:.5rem 0;border-bottom:1px solid rgba(255,255,255,.05);}
    .hs-nd-sec:last-child{border-bottom:none;}
    .hs-nd-lbl{font-family:var(--font-display,'Chakra Petch',sans-serif);font-size:.55rem;font-weight:700;letter-spacing:.16em;text-transform:uppercase;color:var(--crimson,#c41e3a);margin-bottom:.4rem;}
    .hs-nd-links{display:flex;flex-direction:column;gap:.25rem;}
    .hs-nd-links a{font-size:.77rem;color:rgba(255,255,255,.6);padding:.22rem 0;display:flex;align-items:center;gap:.35rem;transition:all .2s;text-decoration:none;}
    .hs-nd-links a:hover{color:var(--crimson,#c41e3a);padding-left:.2rem;}
    
    /* ── Hamburger (mobile) ── */
    .hs-hamburger{display:none;width:36px;height:36px;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:4px;cursor:pointer;flex-direction:column;gap:4px;}
    .hs-hamburger span{display:block;width:18px;height:2px;background:#fff;border-radius:1px;transition:all .2s;}
    
    /* ── Body padding ── */
    body{padding-top:126px!important;margin-top:0!important;}
    
    /* ── Responsive ── */
    @media(max-width:768px){
      .hs-nav-bar{display:none!important;}
      .hs-hamburger{display:flex!important;}
      .hs-nav-search span{display:none;}
      body{padding-top:90px!important;}
    }
    @media(max-width:480px){
      .hs-nav-top{padding:0 .75rem;height:50px;}
      .hs-ticker{height:30px;}
      .hs-ticker-lbl{font-size:.52rem;padding:0 .6rem;}
      .hs-ticker-inner{font-size:.65rem;}
      body{padding-top:80px!important;}
    }
    
    /* ── Footer ── */
    .hs-footer{background:var(--navy,#0d1b2a);border-top:1px solid rgba(255,255,255,.08);padding:2rem 1.5rem;margin-top:3rem;}
  `;
  document.head.appendChild(overrideCSS);
  
  body.insertAdjacentHTML('afterbegin', buildSearchOverlay() + buildMobileMenu() + buildTicker() + buildNav());
  
  // Add footer if not present
  if(!document.querySelector('.hs-footer')){
    document.querySelectorAll('footer, .footer, .site-footer').forEach(el => {
      if(!el.classList.contains('hs-footer')) el.remove();
    });
    body.insertAdjacentHTML('beforeend', buildFooter());
  }
  
  // Fixed padding: Ticker(34) + Nav-top(56) + Nav-bar(36) = 126px
  body.style.cssText += 'padding-top:126px!important;margin-top:0!important;';
}

// Global functions
window.toggleSearch = function(){
  const ov = document.getElementById('hs-search-overlay');
  if(ov.style.display === 'none' || !ov.style.display){
    ov.style.display = 'block';
    setTimeout(()=>document.getElementById('hs-search-input').focus(),100);
  } else {
    ov.style.display = 'none';
  }
};

window.hsDoSearch = function(){
  const val = document.getElementById('hs-search-input').value.trim().toLowerCase();
  const container = document.getElementById('hs-search-results');
  if(!val || val.length < 2){ container.innerHTML = ''; return; }
  
  const results = SEARCH_INDEX.filter(item => 
    item.t.toLowerCase().includes(val) || item.k.toLowerCase().includes(val)
  ).slice(0,12);
  
  if(results.length === 0){
    container.innerHTML = '<p style="color:rgba(255,255,255,.4);font-size:.85rem;padding:1rem;">Sonuç bulunamadı. Farklı bir anahtar kelime deneyin.</p>';
    return;
  }
  
  container.innerHTML = results.map(r=>`
    <a href="${r.h}" style="display:block;padding:.8rem 1rem;margin-bottom:.3rem;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:6px;color:#fff;font-size:.85rem;transition:all .15s;text-decoration:none;" onmouseover="this.style.borderColor='var(--crimson,#bb1919)';this.style.background='rgba(187,25,25,.08)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.background='rgba(255,255,255,.04)'">
      <div style="font-weight:600;">${r.t}</div>
      <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:.2rem;">${r.h}</div>
    </a>
  `).join('');
};

window.toggleMobileMenu = function(){
  const m = document.getElementById('hs-mobile-menu');
  m.style.display = m.style.display === 'none' || !m.style.display ? 'block' : 'none';
};

// ESC to close overlays
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape'){
    const so = document.getElementById('hs-search-overlay');
    const mm = document.getElementById('hs-mobile-menu');
    if(so) so.style.display = 'none';
    if(mm) mm.style.display = 'none';
  }
});

// Theme toggle
function initTheme(){
  const saved = localStorage.getItem('hs-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  addToggleButton(saved);
}

function initThemeOnly(){
  const saved = localStorage.getItem('hs-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.addEventListener('DOMContentLoaded', ()=> addToggleButton(saved));
}

function addToggleButton(saved){
  const btn = document.createElement('div');
  btn.className = 'hs-theme-toggle';
  btn.title = 'Açık/Koyu Mod';
  btn.innerHTML = saved === 'dark' ? '☀️' : '🌙';
  btn.onclick = function(){
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('hs-theme', next);
    btn.innerHTML = next === 'dark' ? '☀️' : '🌙';
  };
  document.body.appendChild(btn);
}

// Reveal animation on scroll
function initReveal(){
  // Auto-tag common elements for scroll reveal
  document.querySelectorAll(".hs-related-section,.hs-footer,.sim-panel,section,article").forEach(el=>{
    if(!el.classList.contains("hs-reveal")) el.classList.add("hs-reveal");
  });
  const els = document.querySelectorAll('.hs-reveal');
  if(!els.length) return;
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.1});
  els.forEach(el=>obs.observe(el));
}

// Active nav link highlight
// Click-based dropdown for touch devices
function initDropdownClick(){
  document.querySelectorAll(".hs-nav-link").forEach(function(link){
    var drop = link.querySelector(".hs-nav-drop");
    if(!drop) return;
    var a = link.querySelector("a");
    if(!a) return;
    a.addEventListener("click", function(e){
      if(window.innerWidth <= 1024 || "ontouchstart" in window){
        e.preventDefault();
        var isOpen = drop.style.display === "block";
        document.querySelectorAll(".hs-nav-drop").forEach(function(d){d.style.display="none";});
        if(!isOpen) drop.style.display = "block";
      }
    });
  });
  document.addEventListener("click", function(e){
    if(!e.target.closest(".hs-nav-link")){
      document.querySelectorAll(".hs-nav-drop").forEach(function(d){d.style.display="none";});
    }
  });
}
function highlightNav(){
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.hs-nav-link > a').forEach(a=>{
    if(a.getAttribute('href') === page){
      a.classList.add('active');
    }
  });
}

// Auto-counter system: reads site-data.json and updates .hs-auto-count elements
function initAutoCounters(){
  fetch('site-data.json').then(r=>r.json()).then(data=>{
    document.querySelectorAll('[data-counter]').forEach(el=>{
      const key = el.getAttribute('data-counter');
      if(data.counters && data.counters[key] !== undefined){
        el.textContent = data.counters[key];
      }
    });
  }).catch(()=>{});
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', ()=>{ inject(); initTheme(); initReveal(); highlightNav(); initAutoCounters(); initDropdownClick(); });
} else {
  inject(); initTheme(); initReveal(); highlightNav(); initAutoCounters(); initDropdownClick();
}

// ═══ SMART BACK BAR — Injected into all non-hub pages ═══
var _page=location.pathname.split('/').pop()||'index.html';
var _hubPages=['index.html','oza-hub.html','infografik.html','simulasyonlar.html','medeniyet-dinamikleri.html','kesfet.html','haberler.html','hs-tv.html','evren-hub.html','veri-tabani.html','profil.html','yazarlar.html','oza-hub.html','oza-mobil-oyunlar.html','gorsel-galeri.html','oza-sonsuz.html','hs-tv-admin.html','oza-all-in-one.html'];

function _getBackLink(p){
  if(p.startsWith('oza-')||p.includes('ooda')||p.includes('savas-evrimi'))return{href:'oza-hub.html',text:'OZA Hub'};
  if(p.startsWith('sim')||p.includes('siber-eh')||p.includes('suru-iha')||p.includes('kuantum-kriptografi')||p.includes('stratejik-mineraller')||p.includes('blockchain-askeri')||p.includes('gelecegin-harp')||p.includes('formul-sim')||p.includes('nato-ankara'))return{href:'simulasyonlar.html',text:'Simülasyonlar'};
  if(p.startsWith('infografik-')||p.includes('dis_politika')||p.includes('hibrit_savas'))return{href:'infografik.html',text:'İnfografikler'};
  if(p.startsWith('md-')||p.includes('bilim-arenasi'))return{href:'medeniyet-dinamikleri.html',text:'Medeniyet Dinamikleri'};
  if(p.startsWith('tez-'))return{href:'kesfet.html',text:'Külliyat'};
  if(p.startsWith('tsk-'))return{href:'index.html',text:'Ana Sayfa'};
  if(p.startsWith('mini-'))return{href:'oza-mobil-oyunlar.html',text:'Mobil Oyunlar'};
  if(p.startsWith('musk-')||p.startsWith('lego-'))return{href:'index.html',text:'Analizler'};
  if(p.startsWith('oyun-')||p.startsWith('panel-'))return{href:'veri-tabani.html',text:'Veri'};
  if(p.startsWith('enerji-')||p.startsWith('su-'))return{href:'kesfet.html',text:'Külliyat'};
  return{href:'index.html',text:'Ana Sayfa'};
}

function _injectBackBar(){
  if(_hubPages.includes(_page)) return;
  // Remove any old fixed back-link elements
  document.querySelectorAll('.back-link,.hs-back').forEach(function(el){
    if(!el.closest('nav')&&!el.closest('.hs-footer')) el.remove();
  });
  var bl = _getBackLink(_page);
  var bar = document.createElement('div');
  bar.className = 'hs-back-bar';
  bar.innerHTML = '<a href="'+bl.href+'" class="hs-back-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg> '+bl.text+'</a><a href="index.html" class="hs-back-btn hs-home-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg> Ana Sayfa</a>';
  // Insert after header
  var header = document.querySelector('.hs-header');
  if(header && header.nextSibling){
    header.parentNode.insertBefore(bar, header.nextSibling);
  } else {
    document.body.insertBefore(bar, document.body.firstChild);
  }
  // Add CSS
  var style = document.createElement('style');
  style.textContent = `
.hs-back-bar{position:sticky;top:90px;z-index:9990;display:flex;align-items:center;gap:8px;padding:8px 20px;background:rgba(10,15,23,0.92);border-bottom:1px solid rgba(150,170,200,0.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);font-family:'IBM Plex Sans',sans-serif;}
.hs-back-btn{display:inline-flex;align-items:center;gap:5px;padding:5px 14px;border-radius:6px;background:rgba(255,255,255,0.05);border:1px solid rgba(150,170,200,0.2);color:#90a1b5;font-size:0.8rem;font-weight:500;text-decoration:none;transition:all 0.2s ease;white-space:nowrap;}
.hs-back-btn:hover{color:#fff;background:rgba(187,25,25,0.15);border-color:rgba(187,25,25,0.5);}
.hs-back-btn svg{flex-shrink:0;}
.hs-home-btn{margin-left:auto;background:rgba(187,25,25,0.08);border-color:rgba(187,25,25,0.25);color:#c9a84c;}
.hs-home-btn:hover{background:rgba(187,25,25,0.2);color:#fff;}
@media(max-width:768px){.hs-back-bar{padding:6px 12px;top:80px;}.hs-back-btn{font-size:0.72rem;padding:4px 10px;}}
`;
  document.head.appendChild(style);
  // Adjust body padding to account for back bar
  document.body.style.cssText = document.body.style.cssText.replace(/padding-top:[^;]+!important/,'padding-top:160px!important');
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', _injectBackBar);
} else {
  _injectBackBar();
}

})();
