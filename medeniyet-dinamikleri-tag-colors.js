// Card-tag colorizer - assigns different colors based on category keywords
(function(){
  const colorMap = {
    'jeopolitik': '#3498db',
    'jeostrateji': '#9b59b6',
    'jeoekonomi': '#e67e22',
    'dış politika': '#1abc9c',
    'akademik': '#95a5a6',
    'simülasyon': '#00e0ff',
    'strateji oyunu': '#e056fd',
    'devlet': '#c0392b',
    'alternatif': '#f39c12',
    'yz': '#2ecc71',
    'askeri': '#e74c3c',
    'ticaret': '#f4a261',
    'tarih': '#d4a017',
    'türkiye': '#c41e3a',
    'dijital': '#00bcd4',
    'bilişsel': '#9b59b6',
    'enerji': '#f39c12',
    'ekonomi': '#e67e22',
    'su': '#3498db',
    'spor': '#2ecc71',
    'sanat': '#e056fd',
    'eğitim': '#1abc9c',
    'toplum': '#f4a261',
    'medya': '#00bcd4',
    'hukuk': '#95a5a6',
    'liderlik': '#c9a24b',
    'osmanlı': '#d4a017',
    'nükleer': '#e74c3c',
    'mineral': '#2ecc71',
    'altyapı': '#3498db',
    'bilgi': '#00bcd4',
    'psikoloji': '#9b59b6',
    'kültür': '#e056fd',
    'kimlik': '#f4a261',
    'köşe yazısı': '#c41e3a',
    'infografik': '#00e0ff'
  };
  document.querySelectorAll('.card-tag').forEach(tag => {
    const text = tag.textContent.toLowerCase();
    for(const [key, color] of Object.entries(colorMap)){
      if(text.includes(key)){
        tag.style.color = color;
        return;
      }
    }
  });
})();
