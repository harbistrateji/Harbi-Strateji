/* =====================================================
   HARB-İ STRATEJİ — OZA Oyunları Ortak Yardımcıları
   ===================================================== */

/* ---- Dil & Tema ---- */
var HS = (function(){
  var L = 'tr';
  var THEME = 'hud';
  try { L = localStorage.getItem('hs_lang') || 'tr'; } catch(e){}
  try { THEME = localStorage.getItem('hs_theme') || 'hud'; } catch(e){}

  function setLang(l){ L=l; try{localStorage.setItem('hs_lang',l);}catch(e){} }
  function getLang(){ return L; }
  function setTheme(t){ THEME=t; try{localStorage.setItem('hs_theme',t);}catch(e){} }
  function getTheme(){ return THEME; }

  /* ---- Puan / Rozet ---- */
  var scores = {};
  try { scores = JSON.parse(localStorage.getItem('hs_scores')||'{}'); } catch(e){}
  function addScore(game, pts){
    scores[game] = (scores[game]||0) + pts;
    try{ localStorage.setItem('hs_scores', JSON.stringify(scores)); }catch(e){}
  }
  function getScore(game){ return scores[game]||0; }
  function getTotalScore(){
    return Object.values(scores).reduce(function(a,b){return a+b;},0);
  }

  /* ---- Rozet sistemi ---- */
  var badges = {};
  try { badges = JSON.parse(localStorage.getItem('hs_badges')||'{}'); } catch(e){}
  function awardBadge(id, label){
    if(!badges[id]){ badges[id]={label:label,ts:Date.now()}; try{localStorage.setItem('hs_badges',JSON.stringify(badges));}catch(e){} return true; }
    return false;
  }
  function getBadges(){ return badges; }

  /* ---- Ses efekti (Web Audio) ---- */
  var _ctx = null;
  function beep(freq, dur, vol){
    try{
      if(!_ctx) _ctx = new (window.AudioContext||window.webkitAudioContext)();
      var o = _ctx.createOscillator();
      var g = _ctx.createGain();
      o.connect(g); g.connect(_ctx.destination);
      o.frequency.value = freq||440;
      g.gain.setValueAtTime(vol||0.15, _ctx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, _ctx.currentTime+(dur||0.18));
      o.start(); o.stop(_ctx.currentTime+(dur||0.18));
    }catch(e){}
  }
  function beepOK(){ beep(660,0.12,0.18); }
  function beepFail(){ beep(220,0.22,0.18); }
  function beepWin(){ beep(880,0.08); setTimeout(function(){beep(1100,0.08);},90); setTimeout(function(){beep(1320,0.18);},180); }

  return { setLang:setLang, getLang:getLang, setTheme:setTheme, getTheme:getTheme,
           addScore:addScore, getScore:getScore, getTotalScore:getTotalScore,
           awardBadge:awardBadge, getBadges:getBadges,
           beep:beep, beepOK:beepOK, beepFail:beepFail, beepWin:beepWin };
})();
