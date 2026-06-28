/**
 * Harb-i Strateji — Otomatik Thumbnail Üretici
 * Bu script, editör panelinden yeni içerik eklendiğinde
 * otomatik olarak CSS/SVG tabanlı ön izleme görseli oluşturur.
 * 
 * Kullanım:
 *   ThumbGen.generate({ title, category, icon, colors })
 *   ThumbGen.generateForCard(cardElement)
 */
const ThumbGen = (function(){
  
  // Kategori renk haritası
  const categoryColors = {
    'savunma':    { bg: '#0d1f3c', accent: '#c41e3a', gradient: ['#0d1f3c','#1a2d4a'] },
    'siber':      { bg: '#0a1a0a', accent: '#00e0ff', gradient: ['#0a1a0a','#1a2d1a'] },
    'jeopolitik': { bg: '#1a0c1a', accent: '#f4a261', gradient: ['#1a0c1a','#0d1b2a'] },
    'ekonomi':    { bg: '#1a0d0a', accent: '#f0b232', gradient: ['#1a0d0a','#2d1a0d'] },
    'teknoloji':  { bg: '#100a2a', accent: '#7c3aed', gradient: ['#100a2a','#1a1040'] },
    'kuantum':    { bg: '#0d0a2a', accent: '#58a6ff', gradient: ['#0d0a2a','#1a1040'] },
    'enerji':     { bg: '#1a1a0a', accent: '#e6b800', gradient: ['#1a1a0a','#2d2a0d'] },
    'kriz':       { bg: '#2a0a0a', accent: '#ff4444', gradient: ['#2a0a0a','#1a0d0d'] },
    'tarih':      { bg: '#1a1008', accent: '#c9a84c', gradient: ['#1a1008','#2d1a0d'] },
    'oza':        { bg: '#0d0a2a', accent: '#5865f2', gradient: ['#0d0a2a','#1a1040'] },
    'medeniyet':  { bg: '#0a1a1a', accent: '#2dd4bf', gradient: ['#0a1a1a','#0d2a2a'] },
    'nato':       { bg: '#0d1b2a', accent: '#003399', gradient: ['#0d1b2a','#1a2d4a'] },
    'default':    { bg: '#0d1117', accent: '#c41e3a', gradient: ['#0d1117','#161b22'] }
  };
  
  // Kategori ikonları
  const categoryIcons = {
    'savunma': '🛡️', 'siber': '💻', 'jeopolitik': '🌍', 'ekonomi': '💰',
    'teknoloji': '🔬', 'kuantum': '⚛️', 'enerji': '⚡', 'kriz': '🚨',
    'tarih': '📜', 'oza': '🎮', 'medeniyet': '🏛️', 'nato': '🔷'
  };

  /**
   * SVG tabanlı thumbnail üret
   */
  function generateSVG(opts) {
    const { title = 'Başlık', category = 'default', icon, badge } = opts;
    const colors = categoryColors[category] || categoryColors['default'];
    const emoji = icon || categoryIcons[category] || '📋';
    
    // Başlığı kısalt
    const shortTitle = title.length > 40 ? title.substring(0, 37) + '...' : title;
    
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${colors.gradient[0]}"/>
      <stop offset="100%" style="stop-color:${colors.gradient[1]}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${colors.accent};stop-opacity:0.3"/>
      <stop offset="100%" style="stop-color:${colors.accent};stop-opacity:0"/>
    </linearGradient>
  </defs>
  <rect width="400" height="225" fill="url(#bg)"/>
  <!-- Grid overlay -->
  <g opacity="0.05">
    ${Array.from({length:10},(_,i)=>`<line x1="0" y1="${i*25}" x2="400" y2="${i*25}" stroke="#fff" stroke-width="0.5"/>`).join('')}
    ${Array.from({length:16},(_,i)=>`<line x1="${i*25}" y1="0" x2="${i*25}" y2="225" stroke="#fff" stroke-width="0.5"/>`).join('')}
  </g>
  <!-- Accent glow -->
  <circle cx="320" cy="60" r="80" fill="${colors.accent}" opacity="0.08"/>
  <circle cx="80" cy="180" r="60" fill="${colors.accent}" opacity="0.05"/>
  <!-- Badge -->
  ${badge ? `<rect x="12" y="12" width="${badge.length*8+16}" height="22" rx="4" fill="${colors.accent}"/>
  <text x="20" y="27" font-family="monospace" font-size="10" font-weight="bold" fill="#fff">${badge.toUpperCase()}</text>` : ''}
  <!-- Icon -->
  <text x="200" y="100" text-anchor="middle" font-size="48" opacity="0.6">${emoji}</text>
  <!-- Title -->
  <text x="200" y="160" text-anchor="middle" font-family="sans-serif" font-size="14" font-weight="bold" fill="#fff" opacity="0.9">${shortTitle}</text>
  <!-- Category label -->
  <text x="200" y="185" text-anchor="middle" font-family="monospace" font-size="9" fill="${colors.accent}" opacity="0.7">${category.toUpperCase()}</text>
  <!-- Bottom accent line -->
  <rect x="0" y="222" width="400" height="3" fill="${colors.accent}" opacity="0.6"/>
</svg>`;
    return svg;
  }

  /**
   * Data URL olarak thumbnail üret
   */
  function generateDataURL(opts) {
    const svg = generateSVG(opts);
    return 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svg)));
  }

  /**
   * Bir kart elementine otomatik thumbnail uygula
   */
  function generateForCard(cardEl) {
    const imgDiv = cardEl.querySelector('.hs-sim-card-img, .thumb, [class*="img"]');
    if (!imgDiv) return;
    
    // Zaten gerçek bir resim varsa atla
    const style = imgDiv.getAttribute('style') || '';
    if (style.includes('url(') && !style.includes('data:')) return;
    
    const titleEl = cardEl.querySelector('.hs-sim-card-title, h3, h4, .title');
    const badgeEl = cardEl.querySelector('.hs-sim-card-badge, .badge, .tag');
    const catEl = cardEl.querySelector('.cat, [class*="cat"]');
    
    const title = titleEl ? titleEl.textContent : 'İçerik';
    const badge = badgeEl ? badgeEl.textContent : '';
    const category = catEl ? catEl.textContent.toLowerCase() : detectCategory(title);
    
    const dataUrl = generateDataURL({ title, category, badge });
    imgDiv.style.background = `url('${dataUrl}') center/cover`;
  }

  /**
   * Başlıktan kategori tahmin et
   */
  function detectCategory(title) {
    const t = title.toLowerCase();
    if (t.includes('siber') || t.includes('hack') || t.includes('kripto')) return 'siber';
    if (t.includes('nato') || t.includes('ittifak')) return 'nato';
    if (t.includes('kuantum')) return 'kuantum';
    if (t.includes('drone') || t.includes('iha') || t.includes('otonom')) return 'teknoloji';
    if (t.includes('ekonomi') || t.includes('emtia') || t.includes('mineral')) return 'ekonomi';
    if (t.includes('enerji') || t.includes('petrol') || t.includes('hürmüz')) return 'enerji';
    if (t.includes('kriz') || t.includes('savaş')) return 'kriz';
    if (t.includes('tarih') || t.includes('osmanlı') || t.includes('türk')) return 'tarih';
    if (t.includes('medeniyet') || t.includes('kültür')) return 'medeniyet';
    if (t.includes('oza') || t.includes('oyun')) return 'oza';
    return 'savunma';
  }

  /**
   * Sayfadaki tüm kartlara otomatik thumbnail uygula
   */
  function autoApply() {
    document.querySelectorAll('.hs-sim-card, .video-card, .game-card, .sim-card').forEach(card => {
      generateForCard(card);
    });
  }

  /**
   * Editör panelinden çağrılır — yeni içerik için thumbnail üretir
   */
  function generate(opts) {
    return generateDataURL(opts);
  }

  // Sayfa yüklendiğinde otomatik uygula (sadece gradient olan kartlara)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoApply);
  } else {
    autoApply();
  }

  return { generate, generateSVG, generateDataURL, generateForCard, autoApply, categoryColors, categoryIcons };
})();
