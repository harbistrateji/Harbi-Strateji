/* =============================================================
   HARB-İ STRATEJİ — HS Engine v2.0
   Z/Alfa Kuşağı Dinamikleri: Mikro döngüler · YZ rakibi
   Rogue-like meta-progress · Leaderboard · Paylaşım kartı
   ============================================================= */
var HS = (function () {

  /* ── Dil & Tema ─────────────────────────────────────────── */
  var _L = 'tr', _T = 'hud';
  try { _L = localStorage.getItem('hs_lang') || 'tr'; } catch (e) {}
  try { _T = localStorage.getItem('hs_theme') || 'hud'; } catch (e) {}
  function getLang() { return _L; }
  function setLang(l) { _L = l; _save('hs_lang', l); }
  function getTheme() { return _T; }
  function setTheme(t) { _T = t; _save('hs_theme', t); document.body && document.body.setAttribute('data-theme', t); }

  /* ── Yerel depo yardımcıları ────────────────────────────── */
  function _save(k, v) { try { localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch (e) {} }
  function _load(k, def) { try { var r = localStorage.getItem(k); return r !== null ? JSON.parse(r) : def; } catch (e) { return def; } }

  /* ── Puan sistemi ───────────────────────────────────────── */
  var _scores = _load('hs_scores', {});
  function addScore(game, pts) {
    _scores[game] = (_scores[game] || 0) + pts;
    _save('hs_scores', _scores);
    _checkBadges(game);
  }
  function getScore(game) { return _scores[game] || 0; }
  function getTotalScore() { return Object.values(_scores).reduce(function (a, b) { return a + b; }, 0); }
  function getLeaderboard() {
    return Object.entries(_scores).map(function (e) { return { game: e[0], pts: e[1] }; })
      .sort(function (a, b) { return b.pts - a.pts; });
  }

  /* ── Rozet sistemi ──────────────────────────────────────── */
  var _badges = _load('hs_badges', {});
  var BADGE_DEF = {
    'ilk_karar':   { label: '🎖 İlk Karar',      desc: 'İlk oyunu tamamladın' },
    'hizli_top':   { label: '⚡ Hızlı Top',       desc: '250ms altında karar' },
    'dedektif':    { label: '🕵️ Dedektif',        desc: '5 slopaganda tespit' },
    'hayatta':     { label: '❄️ Hayatta Kalan',   desc: 'Karanlık Kış\'tan çıktın' },
    'imparator':   { label: '🏭 İmparator',       desc: '1000 emtia ürettin' },
    'kriz_ustasi': { label: '🎮 Kriz Ustası',     desc: '3 krizi çözdün' },
    'asimetri':    { label: '⚔️ Asimetri',        desc: '10 kart kazandın' },
    'quiz_ace':    { label: '🏅 Quiz Ace',         desc: 'Quiz\'de 10/10 aldın' },
    'sosyal':      { label: '📤 Sosyal',           desc: 'Sonuç paylaştın' },
    'perk_master': { label: '🔓 Perk Ustası',     desc: '5 perk açtın' }
  };
  function awardBadge(id) {
    if (!_badges[id] && BADGE_DEF[id]) {
      _badges[id] = { ts: Date.now() };
      _save('hs_badges', _badges);
      _showBadgeToast(BADGE_DEF[id]);
      return true;
    }
    return false;
  }
  function hasBadge(id) { return !!_badges[id]; }
  function getBadges() { return _badges; }
  function getAllBadgeDefs() { return BADGE_DEF; }

  function _checkBadges(game) {
    var t = getTotalScore();
    if (t >= 1) awardBadge('ilk_karar');
    if (_scores['ooda-x'] >= 500) awardBadge('hizli_top');
    if (_scores['slopaganda'] >= 50) awardBadge('dedektif');
    if (_scores['karanlik-kis'] >= 100) awardBadge('hayatta');
    if (_scores['emtia'] >= 1000) awardBadge('imparator');
    if (_scores['kriz-odasi'] >= 300) awardBadge('kriz_ustasi');
    if (_scores['asimetri'] >= 100) awardBadge('asimetri');
  }

  /* ── Rogue-like Meta-Progress (Perk sistemi) ────────────── */
  var PERKS = {
    'zirh_1':      { label: '🛡️ Zırh I',         desc: '+10% hasar direnci',    cost: 50,  game: '*' },
    'hiz_1':       { label: '⚡ Hız I',            desc: '+50ms karar süresi',    cost: 75,  game: 'ooda-x' },
    'istihbarat_1':{ label: '🔍 İstihbarat I',     desc: 'İpucu hakkı +1',        cost: 60,  game: 'slopaganda' },
    'lojistik_1':  { label: '🚚 Lojistik I',       desc: '+20% emtia üretimi',    cost: 80,  game: 'emtia' },
    'taktik_1':    { label: '🗺️ Taktik I',         desc: 'Kriz süresi +3sn',      cost: 70,  game: 'kriz-odasi' },
    'zirh_2':      { label: '🛡️ Zırh II',         desc: '+25% hasar direnci',    cost: 150, game: '*', req: 'zirh_1' },
    'hiz_2':       { label: '⚡ Hız II',            desc: '+100ms karar süresi',   cost: 180, game: 'ooda-x', req: 'hiz_1' },
    'drone_1':     { label: '🛸 Drone Filosu',     desc: 'Yeni drone türü açıldı',cost: 200, game: 'karanlik-kis' },
    'doktrin_1':   { label: '📜 Yeni Doktrin',     desc: 'A2/AD stratejisi açıldı',cost:250, game: '*' },
    'kuantum_1':   { label: '⚛️ Kuantum Zırh',    desc: 'Şifreleme kalkanı',      cost: 300, game: '*', req: 'zirh_2' }
  };
  var _perks = _load('hs_perks', {});
  function buyPerk(id) {
    var p = PERKS[id];
    if (!p || _perks[id]) return false;
    if (p.req && !_perks[p.req]) return false;
    if (getTotalScore() < p.cost) return false;
    _perks[id] = true;
    _save('hs_perks', _perks);
    // Toplam puandan düş (meta-currency)
    var total = getTotalScore();
    _scores['__spent'] = (_scores['__spent'] || 0) + p.cost;
    _save('hs_scores', _scores);
    if (Object.keys(_perks).length >= 5) awardBadge('perk_master');
    return true;
  }
  function hasPerk(id) { return !!_perks[id]; }
  function getPerks() { return _perks; }
  function getAllPerks() { return PERKS; }
  function getSpendableScore() { return getTotalScore() - (_scores['__spent'] || 0); }

  /* ── Ses efektleri (Web Audio API) ─────────────────────── */
  var _ctx = null;
  function _getCtx() {
    if (!_ctx) try { _ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) {}
    return _ctx;
  }
  function beep(freq, dur, vol, type) {
    var ctx = _getCtx(); if (!ctx) return;
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type || 'sine';
    o.connect(g); g.connect(ctx.destination);
    o.frequency.value = freq || 440;
    g.gain.setValueAtTime(vol || 0.15, ctx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (dur || 0.18));
    o.start(); o.stop(ctx.currentTime + (dur || 0.18));
  }
  function beepOK()   { beep(660, 0.12, 0.18); }
  function beepFail() { beep(180, 0.28, 0.18, 'sawtooth'); }
  function beepWin()  { beep(880,0.08); setTimeout(function(){beep(1100,0.08);},90); setTimeout(function(){beep(1320,0.2);},180); }
  function beepTick() { beep(1200, 0.05, 0.08, 'square'); }
  function beepSwipe(dir) { beep(dir==='right'?700:300, 0.1, 0.12); }

  /* ── Görsel patlama efekti ──────────────────────────────── */
  function burst(el, color) {
    if (!el) return;
    var rect = el.getBoundingClientRect();
    var cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
    for (var i = 0; i < 12; i++) {
      var p = document.createElement('div');
      p.style.cssText = 'position:fixed;pointer-events:none;z-index:9999;width:8px;height:8px;border-radius:50%;background:' + (color || '#E01515') + ';left:' + cx + 'px;top:' + cy + 'px;transition:all 0.6s ease-out;opacity:1';
      document.body.appendChild(p);
      var angle = (i / 12) * Math.PI * 2;
      var dist = 60 + Math.random() * 60;
      setTimeout(function (pp, a, d) {
        pp.style.transform = 'translate(' + (Math.cos(a) * d) + 'px,' + (Math.sin(a) * d) + 'px)';
        pp.style.opacity = '0';
        setTimeout(function () { pp.remove(); }, 650);
      }.bind(null, p, angle, dist), 10);
    }
  }

  function flashScreen(color, dur) {
    var fl = document.createElement('div');
    fl.style.cssText = 'position:fixed;inset:0;z-index:9998;pointer-events:none;background:' + (color || 'rgba(224,21,21,0.35)') + ';transition:opacity ' + (dur || 400) + 'ms';
    document.body.appendChild(fl);
    setTimeout(function () { fl.style.opacity = '0'; setTimeout(function () { fl.remove(); }, dur || 400); }, 50);
  }

  /* ── Rozet toast bildirimi ──────────────────────────────── */
  function _showBadgeToast(b) {
    var t = document.createElement('div');
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%) translateY(20px);z-index:9999;background:#0f1722;border:2px solid #C9A24B;border-radius:12px;padding:14px 22px;font-family:\'IBM Plex Mono\',monospace;font-size:13px;color:#C9A24B;text-align:center;box-shadow:0 8px 32px rgba(0,0,0,0.6);opacity:0;transition:all 0.4s';
    t.innerHTML = b.label + '<br><span style="color:#90a1b5;font-size:11px">' + b.desc + '</span>';
    document.body.appendChild(t);
    setTimeout(function () { t.style.opacity = '1'; t.style.transform = 'translateX(-50%) translateY(0)'; }, 50);
    setTimeout(function () { t.style.opacity = '0'; setTimeout(function () { t.remove(); }, 400); }, 3000);
    beepWin();
  }

  /* ── Sayaç (geri sayım) ─────────────────────────────────── */
  function countdown(secs, onTick, onDone) {
    var rem = secs;
    onTick(rem);
    var iv = setInterval(function () {
      rem--;
      beepTick();
      onTick(rem);
      if (rem <= 0) { clearInterval(iv); onDone(); }
    }, 1000);
    return { stop: function () { clearInterval(iv); } };
  }

  /* ── Sosyal Paylaşım Kartı ──────────────────────────────── */
  function showShareCard(opts) {
    // opts: { title, score, badge, game, color }
    var c = opts.color || '#E01515';
    var overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:10000;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;padding:20px';
    overlay.innerHTML =
      '<div id="share-card" style="background:linear-gradient(135deg,#0a0f17,#16202d);border:2px solid ' + c + ';border-radius:20px;padding:36px 32px;max-width:400px;width:100%;text-align:center;font-family:\'IBM Plex Mono\',monospace;position:relative">' +
        '<div style="font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:' + c + ';margin-bottom:8px">HARB-İ STRATEJİ · OZA</div>' +
        '<div style="font-family:\'Chakra Petch\',sans-serif;font-size:28px;font-weight:700;color:#fff;margin:12px 0">' + (opts.title || 'Oyun Bitti') + '</div>' +
        '<div style="font-size:48px;font-weight:700;color:' + c + ';margin:10px 0">' + (opts.score || 0) + '</div>' +
        '<div style="font-size:12px;color:#90a1b5;margin-bottom:16px">PUAN</div>' +
        (opts.badge ? '<div style="font-size:22px;margin-bottom:16px">' + opts.badge + '</div>' : '') +
        '<div style="font-size:11px;color:#C9A24B;margin-bottom:24px">harbistrateji.com · OZA Oyun Merkezi</div>' +
        '<div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">' +
          '<button onclick="HS.copyShareText(\'' + (opts.title||'').replace(/'/g,"\\'") + '\',' + (opts.score||0) + ')" style="background:' + c + ';color:#fff;border:none;border-radius:9px;padding:12px 20px;font-family:inherit;font-size:12px;cursor:pointer;font-weight:600">📋 Kopyala</button>' +
          '<button onclick="HS.downloadCard()" style="background:#16202d;color:#00E0FF;border:1px solid #00E0FF;border-radius:9px;padding:12px 20px;font-family:inherit;font-size:12px;cursor:pointer">💾 Kaydet</button>' +
          '<button onclick="this.closest(\'div[style*=fixed]\').remove()" style="background:#16202d;color:#90a1b5;border:1px solid rgba(150,170,200,.3);border-radius:9px;padding:12px 20px;font-family:inherit;font-size:12px;cursor:pointer">✕ Kapat</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);
    overlay.addEventListener('click', function (e) { if (e.target === overlay) overlay.remove(); });
    awardBadge('sosyal');
  }

  function copyShareText(title, score) {
    var txt = '🎯 ' + title + ' · ' + score + ' puan\nHarb-i Strateji OZA Oyun Merkezi\nharbistrateji.com';
    navigator.clipboard && navigator.clipboard.writeText(txt).then(function () {
      var b = event.target; b.textContent = '✓ Kopyalandı'; setTimeout(function () { b.textContent = '📋 Kopyala'; }, 2000);
    });
  }

  function downloadCard() {
    var card = document.getElementById('share-card');
    if (!card) return;
    // html2canvas yoksa basit fallback
    if (window.html2canvas) {
      window.html2canvas(card).then(function (canvas) {
        var a = document.createElement('a'); a.download = 'oza-skor.png'; a.href = canvas.toDataURL(); a.click();
      });
    } else {
      alert('Ekran görüntüsü alarak paylaşabilirsiniz.');
    }
  }

  /* ── Dinamik YZ Rakibi ──────────────────────────────────── */
  var _aiProfile = _load('hs_ai', { level: 1, wins: 0, losses: 0, style: 'balanced' });
  function aiDecide(options, playerHistory) {
    // Oyuncu geçmişine göre adapte olan YZ kararı
    var styles = { balanced: 0.5, aggressive: 0.7, defensive: 0.3, random: Math.random() };
    var bias = styles[_aiProfile.style] || 0.5;
    // Oyuncu çok kazanıyorsa YZ zorlaşır
    if (_aiProfile.losses > _aiProfile.wins + 2) { bias = Math.min(bias + 0.15, 0.95); _aiProfile.style = 'aggressive'; }
    if (_aiProfile.wins > _aiProfile.losses + 2) { bias = Math.max(bias - 0.1, 0.2); _aiProfile.style = 'defensive'; }
    var idx = Math.random() < bias ? Math.floor(options.length * 0.7) : Math.floor(Math.random() * options.length);
    return options[Math.min(idx, options.length - 1)];
  }
  function aiWon()  { _aiProfile.wins++;   _save('hs_ai', _aiProfile); }
  function aiLost() { _aiProfile.losses++; _save('hs_ai', _aiProfile); }
  function getAILevel() { return Math.min(10, 1 + Math.floor((_aiProfile.wins - _aiProfile.losses + 5) / 2)); }
  function getAIProfile() { return _aiProfile; }

  /* ── Ortak Navigasyon ───────────────────────────────────── */
  var NAV_TR = [['Haberler','haberler.html'],['İnfografik','infografik.html'],['Analiz','analiz.html'],['Simülasyon','simulasyon-merkezi.html'],['Oyun','oyun.html'],['OZA','oza.html'],['Sözlük','sozluk.html']];
  function renderNav(activeFile) {
    return NAV_TR.map(function(n){ return '<a href="'+n[1]+'"'+(activeFile===n[1]?' style="color:#E01515"':'')+'>'+n[0]+'</a>'; }).join('');
  }

  /* ── Ortak Header HTML ──────────────────────────────────── */
  function headerHTML(title, subtitle, backHref) {
    return '<header style="background:rgba(10,15,23,.96);border-bottom:1px solid rgba(150,170,200,.13);padding:0 20px;position:sticky;top:0;z-index:60;backdrop-filter:blur(10px)">' +
      '<div style="max-width:1180px;margin:0 auto;display:flex;align-items:center;gap:16px;min-height:56px;flex-wrap:wrap;padding:8px 0">' +
        '<a href="' + (backHref||'oza-hub.html') + '" style="font-family:\'IBM Plex Mono\',monospace;font-size:12px;color:#90a1b5;text-decoration:none;white-space:nowrap">← OZA</a>' +
        '<div style="flex:1"><span style="font-family:\'Chakra Petch\',sans-serif;font-weight:700;font-size:16px;color:#fff">' + title + '</span>' +
          (subtitle ? '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:#90a1b5;margin-left:10px">' + subtitle + '</span>' : '') +
        '</div>' +
        '<span style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:#C9A24B" id="hdr-score">⭐ ' + getTotalScore() + ' puan</span>' +
      '</div>' +
    '</header>';
  }

  /* ── Ortak Footer HTML ──────────────────────────────────── */
  function footerHTML() {
    return '<footer style="border-top:1px solid rgba(150,170,200,.13);padding:24px 20px 60px;text-align:center;margin-top:40px">' +
      '<div style="display:flex;gap:8px;justify-content:center;margin-bottom:10px">' +
        ['in','X','▶','IG','f','TT'].map(function(s){ return '<a href="#" style="width:30px;height:30px;border:1px solid rgba(150,170,200,.22);border-radius:7px;display:flex;align-items:center;justify-content:center;font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:#90a1b5;text-decoration:none">'+s+'</a>'; }).join('') +
      '</div>' +
      '<div style="font-family:\'IBM Plex Mono\',monospace;font-size:11px;color:#90a1b5">© 2026 Harb-i Strateji · <span style="color:#C9A24B">Gerçeklerden Geleceğe</span></div>' +
    '</footer>';
  }

  /* ── Genel CSS değişkenleri ─────────────────────────────── */
  var CSS_VARS = ':root{--bg:#0a0f17;--panel:#0f1722;--panel2:#16202d;--red:#E01515;--red2:#ff3a4a;--cyan:#00E0FF;--gold:#C9A24B;--line:rgba(150,170,200,.13);--line2:rgba(150,170,200,.22);--tx:#EAF0F7;--dim:#90a1b5;--disp:\'Chakra Petch\',sans-serif;--mono:\'IBM Plex Mono\',monospace;--sans:\'IBM Plex Sans\',sans-serif}';
  var CSS_BASE = '*{box-sizing:border-box;margin:0;padding:0}body{background:var(--bg);color:var(--tx);font-family:var(--sans);line-height:1.6;-webkit-font-smoothing:antialiased}a{color:inherit;text-decoration:none}';
  var FONTS_LINK = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@600;700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">';

  /* ── Swipe yardımcısı (mobil) ───────────────────────────── */
  function addSwipe(el, onLeft, onRight, onUp, onDown) {
    var sx, sy;
    el.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
    el.addEventListener('touchend', function (e) {
      var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 40 && onRight) onRight();
        else if (dx < -40 && onLeft) onLeft();
      } else {
        if (dy < -40 && onUp) onUp();
        else if (dy > 40 && onDown) onDown();
      }
    }, { passive: true });
  }

  /* ── Ortak döngü zamanlayıcısı ──────────────────────────── */
  function microLoop(fps, fn) {
    var last = 0, id;
    function tick(now) { if (now - last >= 1000 / fps) { fn(now - last); last = now; } id = requestAnimationFrame(tick); }
    id = requestAnimationFrame(tick);
    return { stop: function () { cancelAnimationFrame(id); } };
  }

  return {
    getLang, setLang, getTheme, setTheme,
    addScore, getScore, getTotalScore, getLeaderboard, getSpendableScore,
    awardBadge, hasBadge, getBadges, getAllBadgeDefs,
    buyPerk, hasPerk, getPerks, getAllPerks,
    beep, beepOK, beepFail, beepWin, beepTick, beepSwipe,
    burst, flashScreen,
    countdown, microLoop,
    showShareCard, copyShareText, downloadCard,
    aiDecide, aiWon, aiLost, getAILevel, getAIProfile,
    renderNav, headerHTML, footerHTML,
    CSS_VARS, CSS_BASE, FONTS_LINK
  };
})();
