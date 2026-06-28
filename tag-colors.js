/* Tag Colors — Kategori renklerini farklılaştırır */
(function(){
  const colorMap = {
    'jeopolitik': '#00bcd4',
    'jeostrateji': '#26c6da',
    'dış politika': '#00acc1',
    'tarih & güç': '#ff7043',
    'ticaret & boğazlar': '#ffa726',
    'türkiye stratejisi': '#ef5350',
    'akademik': '#ab47bc',
    'dijital jeopolitik': '#7e57c2',
    'simülasyon': '#66bb6a',
    'strateji oyunu': '#5865f2',
    'yz & askeri dönüşüm': '#42a5f5',
    'devlet yönetimi': '#78909c',
    'alternatif tarih': '#8d6e63',
    'enerji ekonomisi': '#fdd835',
    'emtia piyasaları': '#ffb300',
    'savunma ekonomisi': '#ef6c00',
    'karaborsa': '#616161',
    'medya & algı': '#ec407a',
    'sosyoloji': '#26a69a',
    'psikoloji': '#7986cb',
    'kültür & sanat': '#ce93d8',
    'spor stratejisi': '#4caf50',
    'eğitim': '#29b6f6',
    'infografik': '#f4a261',
    'interaktif': '#00e0ff',
    'interaktif harita': '#4dd0e1',
    'oza oyun': '#5865f2',
    'yeni': '#e91e63'
  };
  document.querySelectorAll('.card-tag').forEach(function(el){
    var text = el.textContent.trim().toLowerCase();
    Object.keys(colorMap).forEach(function(key){
      if(text.includes(key) || text === key){
        el.style.color = colorMap[key];
        el.style.borderColor = colorMap[key] + '55';
      }
    });
  });
})();
