// GÖZCÜ DATA & LOGIC
const D={
acil:[
{id:'ukr-rus',cat:'Savaş',catC:'#E01515',hot:true,title:'Ukrayna-Rusya: Kırım Cephesi',desc:'Ukrayna\'nın Kırım\'a yönelik uzun menzilli füze saldırıları ve Rusya\'nın karşı hamlesi.',tags:['Kırım','ATACMS','Hava Savunma','Karadeniz'],
thread:[{n:'1',t:'Son Durum',b:'Ukrayna, Storm Shadow ve ATACMS ile Kırım\'daki Rus üslerini vuruyor.'},{n:'2',t:'Rusya Tepkisi',b:'Rusya hipersonik Zircon ile karşılık veriyor; nükleer doktrin güncellendi.'},{n:'3',t:'NATO Boyutu',b:'NATO müttefikleri silah tedarikini artırıyor; F-16 filosu aktif.'},{n:'4',t:'Deniz Boyutu',b:'Karadeniz Filosu\'nun %30\'u devre dışı; Ukrayna deniz droneları etkili.'},{n:'5',t:'Senaryo',b:'Kırım\'ın geri alınması stratejik hedef; müzakere masası uzak.'}],
poll:{q:'Ukrayna-Rusya savaşı nasıl sona erer?',opts:['Ukrayna zaferi','Donmuş çatışma','Toprak tavizi ile barış','Rusya çekilmesi'],votes:[18,42,28,12]},
quiz:[{q:'Ukrayna\'nın Kırım\'a ulaşan ilk uzun menzilli silahı hangisi?',opts:['HIMARS','Storm Shadow','ATACMS','Neptune'],ans:1},{q:'Rusya\'nın hipersonik deniz füzesinin adı nedir?',opts:['Kinzhal','Zircon','Kalibr','Iskander'],ans:1},{q:'Karadeniz\'de Ukrayna\'nın kullandığı deniz dronu hangisi?',opts:['Sea Baby','Bayraktar TB2','Neptune','Harpoon'],ans:0},{q:'NATO\'nun Ukrayna\'ya verdiği savaş uçağı hangisi?',opts:['F-35','Eurofighter','F-16','Rafale'],ans:2},{q:'Rusya nükleer doktrinini en son ne zaman güncelledi?',opts:['2022','2023','2024','2025'],ans:2}]},
{id:'iran-isr',cat:'Kriz',catC:'#f59e0b',hot:true,title:'İran-İsrail: Nükleer Gerilim',desc:'İran\'ın uranyum zenginleştirmesi %90\'a yaklaşırken İsrail\'in askeri seçenekleri masada.',tags:['Nükleer','Uranyum','Mossad','IAEA','Natanz'],
thread:[{n:'1',t:'Zenginleştirme',b:'İran %60 zenginleştirilmiş uranyum stokunu artırıyor; %90 eşiğine aylar kaldı.'},{n:'2',t:'İsrail Planı',b:'İsrail Hava Kuvvetleri Natanz ve Fordow tesislerine yönelik tatbikat yapıyor.'},{n:'3',t:'ABD Pozisyonu',b:'Biden yönetimi diplomasiyi tercih ediyor; ancak "tüm seçenekler masada".'},{n:'4',t:'Bölgesel Etki',b:'Suudi Arabistan ve Türkiye kendi nükleer programlarını değerlendiriyor.'},{n:'5',t:'Kırmızı Çizgi',b:'İsrail\'in kırmızı çizgisi: İran\'ın nükleer silah üretmesi değil, kapasiteye ulaşması.'}],
poll:{q:'İran nükleer silah üretir mi?',opts:['Evet, 2 yıl içinde','Hayır, caydırıcılık yeter','Eşikte kalır','Anlaşma ile vazgeçer'],votes:[25,20,40,15]},
quiz:[{q:'İran\'ın en korunaklı nükleer tesisi hangisi?',opts:['Natanz','Fordow','Isfahan','Arak'],ans:1},{q:'Uranyumun silah seviyesi zenginleştirmesi yüzde kaçtır?',opts:['%20','%60','%90','%99'],ans:2},{q:'İran\'ın balistik füze menzili kaç km?',opts:['1.000','2.000','3.000','5.000'],ans:1},{q:'IAEA denetçileri İran\'da en son ne zaman engellendi?',opts:['2021','2022','2023','2024'],ans:2},{q:'İsrail\'in İran\'a yönelik siber saldırısının adı nedir?',opts:['Stuxnet','Flame','Duqu','Shamoon'],ans:0}]},
{id:'siber-grid',cat:'Siber',catC:'#8b5cf6',hot:true,title:'Küresel Enerji Şebekesi Saldırısı',desc:'Çin bağlantılı APT grubu 12 ülkenin enerji altyapısını hedef aldı.',tags:['APT','SCADA','Enerji','Kritik Altyapı','Zero-Day'],
thread:[{n:'1',t:'Saldırı',b:'Volt Typhoon grubu ABD, Avrupa ve Asya\'daki enerji şebekelerine sızdı.'},{n:'2',t:'Yöntem',b:'Zero-day açıkları ve tedarik zinciri saldırıları kullanıldı.'},{n:'3',t:'Etki',b:'12 ülkede SCADA sistemleri tehdit altında; bazı tesisler izole edildi.'},{n:'4',t:'Türkiye',b:'Türkiye\'nin kritik altyapısı SOME koordinasyonuyla korunuyor.'},{n:'5',t:'Önlem',b:'NATO siber savunma merkezi acil durum protokolü başlattı.'}],
poll:{q:'Siber savaşın en kritik hedefi hangisi?',opts:['Enerji şebekesi','Finans sistemi','Askeri ağlar','Telekomünikasyon'],votes:[35,25,28,12]},
quiz:[{q:'Volt Typhoon hangi ülkeyle ilişkilendiriliyor?',opts:['Rusya','Çin','İran','Kuzey Kore'],ans:1},{q:'SCADA sistemleri neyi kontrol eder?',opts:['Sosyal medya','Endüstriyel süreçler','Bankacılık','GPS'],ans:1},{q:'Zero-day açığı ne demektir?',opts:['Eski açık','Bilinen açık','Henüz yaması olmayan açık','Kapatılmış açık'],ans:2},{q:'NATO siber savunma merkezi nerededir?',opts:['Brüksel','Tallinn','Washington','Londra'],ans:1},{q:'Türkiye\'nin siber olay müdahale ekiplerinin kısaltması nedir?',opts:['CERT','SOME','SOC','NOC'],ans:1}]},
{id:'deprem-risk',cat:'Afet',catC:'#ec4899',hot:false,title:'Doğu Anadolu Fay Hattı Uyarısı',desc:'Bilim insanları Doğu Anadolu Fay Hattı\'nda enerji birikimi konusunda uyarıyor.',tags:['Deprem','DAF','Maraş','Erken Uyarı','AFAD'],
thread:[{n:'1',t:'Risk',b:'6 Şubat 2023 sonrası DAF\'ın güneybatı segmentinde enerji birikimi devam ediyor.'},{n:'2',t:'Bölge',b:'Hatay-Adana-Osmaniye hattı risk altında; 5M+ nüfus etkilenebilir.'},{n:'3',t:'Hazırlık',b:'AFAD erken uyarı sistemi güncellendi; deprem toplanma alanları artırıldı.'},{n:'4',t:'Yapı Stoku',b:'Bölgedeki yapı stokunun %40\'ı hâlâ deprem yönetmeliğine uygun değil.'},{n:'5',t:'Teknoloji',b:'Yapay zekâ destekli sismik izleme ağı 7/24 aktif.'}],
poll:{q:'Türkiye\'nin deprem hazırlığı yeterli mi?',opts:['Evet, önemli adımlar atıldı','Kısmen, daha çok yapılmalı','Hayır, yetersiz','Bilmiyorum'],votes:[10,45,35,10]},
quiz:[{q:'6 Şubat 2023 depreminin büyüklüğü kaçtı?',opts:['6.8','7.4','7.8','8.1'],ans:2},{q:'Doğu Anadolu Fay Hattı hangi illeri etkiler?',opts:['İstanbul-Kocaeli','Maraş-Hatay-Adana','İzmir-Manisa','Erzurum-Kars'],ans:1},{q:'AFAD\'ın açılımı nedir?',opts:['Afet ve Acil Durum Yönetimi','Askeri Fay Araştırma Dairesi','Anadolu Deprem Merkezi','Afet Koordinasyon Kurulu'],ans:0},{q:'Türkiye hangi deprem kuşağında yer alır?',opts:['Pasifik','Alp-Himalaya','Atlantik','Karayip'],ans:1},{q:'Deprem erken uyarı sistemi kaç saniye önceden haber verebilir?',opts:['1-2 sn','5-15 sn','30-60 sn','2-5 dk'],ans:1}]}
],
dunya:[
{id:'abd-cin',cat:'Amerika',catC:'#3b82f6',hot:true,title:'ABD-Çin Yarı İletken Savaşı',desc:'ABD\'nin Çin\'e yönelik çip ihracat yasakları küresel tedarik zincirini yeniden şekillendiriyor.',tags:['CHIPS Act','TSMC','ASML','Huawei','Yarı İletken'],
thread:[{n:'1',t:'Yasak',b:'ABD, 7nm altı çip üretim ekipmanlarının Çin\'e satışını yasakladı.'},{n:'2',t:'Çin Tepkisi',b:'Çin germanyum ve galyum ihracatını kısıtlayarak karşılık verdi.'},{n:'3',t:'TSMC',b:'TSMC Arizona\'da 40 milyar dolarlık fabrika kuruyor; ABD\'ye taşınma süreci.'},{n:'4',t:'Huawei',b:'Huawei 7nm çip üretmeyi başardı; SMIC ile yerli üretim hızlanıyor.'},{n:'5',t:'Türkiye',b:'Türkiye KALE Yarı İletken ile yerli çip üretim altyapısı kuruyor.'}],
poll:{q:'Yarı iletken savaşının galibi kim olur?',opts:['ABD — teknoloji üstünlüğü','Çin — yerli üretim','İkisi de kaybeder','Üçüncü taraflar kazanır'],votes:[30,25,20,25]},
quiz:[{q:'Dünyanın en gelişmiş çip üreticisi hangisi?',opts:['Intel','Samsung','TSMC','SMIC'],ans:2},{q:'ABD\'nin çip yasası hangisi?',opts:['CHIPS Act','Moore Act','Silicon Law','Tech Ban'],ans:0},{q:'Çin\'in kısıtladığı kritik mineral hangisi?',opts:['Lityum','Germanyum','Altın','Bakır'],ans:1},{q:'En küçük ticari çip boyutu kaç nm?',opts:['14nm','7nm','3nm','1nm'],ans:2},{q:'ASML hangi ülkenin şirketi?',opts:['ABD','Japonya','Hollanda','Güney Kore'],ans:2}]},
{id:'rusya-arktik',cat:'Rusya',catC:'#ef4444',hot:false,title:'Rusya Arktik Militarizasyonu',desc:'Rusya Kuzey Deniz Yolu boyunca askeri üslerini genişletiyor.',tags:['Arktik','Kuzey Deniz Yolu','Buz Kırıcı','Doğalgaz','NATO'],
thread:[{n:'1',t:'Strateji',b:'Rusya Arktik\'te 6 yeni askeri üs kurdu; bölgeyi "stratejik derinlik" olarak görüyor.'},{n:'2',t:'Enerji',b:'Arktik\'teki doğalgaz rezervleri küresel talebin %30\'unu karşılayabilir.'},{n:'3',t:'Deniz Yolu',b:'Kuzey Deniz Yolu Süveyş\'e alternatif; Çin-Avrupa ticaretini kısaltıyor.'},{n:'4',t:'NATO',b:'Finlandiya ve İsveç\'in NATO üyeliği Arktik dengesini değiştirdi.'},{n:'5',t:'İklim',b:'Buzulların erimesi yeni kaynakları erişilebilir kılıyor; rekabet artıyor.'}],
poll:{q:'Arktik\'te en büyük tehdit hangisi?',opts:['Askeri çatışma','Çevre felaketi','Kaynak savaşı','Deniz yolu kontrolü'],votes:[20,30,35,15]},
quiz:[{q:'Kuzey Deniz Yolu hangi iki okyanusu birleştirir?',opts:['Atlantik-Pasifik','Atlantik-Hint','Pasifik-Hint','Arktik-Atlantik'],ans:0},{q:'Rusya\'nın nükleer buz kırıcı filosu kaç gemiden oluşur?',opts:['3','5','7','10'],ans:2},{q:'Arktik Konseyi\'nde kaç üye ülke var?',opts:['5','8','12','15'],ans:1},{q:'Arktik\'teki en büyük doğalgaz projesi hangisi?',opts:['Yamal LNG','Nord Stream','TurkStream','Power of Siberia'],ans:0},{q:'Hangi NATO ülkesi Arktik\'e en yakın?',opts:['İngiltere','Norveç','Kanada','Danimarka'],ans:1}]},
{id:'cin-tayvan',cat:'Çin',catC:'#ef4444',hot:true,title:'Çin-Tayvan: Boğaz Gerilimi',desc:'Çin\'in Tayvan Boğazı\'ndaki askeri faaliyetleri rekor seviyeye ulaştı.',tags:['Tayvan','TSMC','PLA','Boğaz','ABD Desteği'],
thread:[{n:'1',t:'Tehdit',b:'Çin Halk Kurtuluş Ordusu 2026\'da Tayvan çevresinde 1.200+ sortie uçtu.'},{n:'2',t:'Ekonomi',b:'Tayvan dünya çip üretiminin %65\'ini kontrol ediyor; işgal küresel krize yol açar.'},{n:'3',t:'ABD',b:'ABD "stratejik belirsizlik" politikasını koruyor; silah satışları devam.'},{n:'4',t:'Senaryo',b:'Tam işgal yerine abluka senaryosu daha olası; deniz ve hava kuşatması.'},{n:'5',t:'Zaman',b:'Uzmanlar 2027-2030 arasını "tehlike penceresi" olarak tanımlıyor.'}],
poll:{q:'Çin Tayvan\'ı işgal eder mi?',opts:['Evet, 5 yıl içinde','Hayır, caydırıcılık çalışır','Abluka uygular','Barışçıl birleşme'],votes:[15,35,35,15]},
quiz:[{q:'Tayvan\'ın dünya çip üretimindeki payı yaklaşık kaçtır?',opts:['%30','%50','%65','%80'],ans:2},{q:'Tayvan Boğazı\'nın genişliği yaklaşık kaç km?',opts:['50','130','250','400'],ans:1},{q:'ABD\'nin Tayvan politikası ne olarak adlandırılır?',opts:['Tek Çin','Stratejik belirsizlik','Çifte tanıma','Pasifik kalkanı'],ans:1},{q:'Çin\'in amfibi çıkarma kapasitesi hangi gemilerle artıyor?',opts:['Type 075','Liaoning','Type 055','Fujian'],ans:0},{q:'TSMC\'nin en gelişmiş fabrikası nerededir?',opts:['Şanghay','Hsinchu','Tokyo','Arizona'],ans:1}]},
{id:'avrupa-enerji',cat:'Avrupa',catC:'#3b82f6',hot:false,title:'Avrupa Enerji Dönüşümü Krizi',desc:'Avrupa\'nın Rus gazından bağımsızlaşma çabası ekonomik baskı yaratıyor.',tags:['LNG','Yenilenebilir','Nükleer','Hidrojen','REPowerEU'],
thread:[{n:'1',t:'Bağımlılık',b:'2021\'de Avrupa gazının %40\'ı Rusya\'dan geliyordu; şimdi %15\'in altında.'},{n:'2',t:'Maliyet',b:'LNG ithalatı boru hattı gazından 3 kat pahalı; sanayi rekabet gücü düşüyor.'},{n:'3',t:'Nükleer',b:'Fransa ve İngiltere yeni nükleer santraller planlıyor; Almanya karşı.'},{n:'4',t:'Hidrojen',b:'Yeşil hidrojen 2030 hedefi 10M ton; ancak altyapı yetersiz.'},{n:'5',t:'Türkiye',b:'Türkiye enerji hub\'ı olma stratejisiyle Avrupa\'ya köprü kuruyor.'}],
poll:{q:'Avrupa\'nın enerji geleceği ne olacak?',opts:['Yenilenebilir ağırlıklı','Nükleer rönesans','LNG bağımlılığı','Karma model'],votes:[25,20,15,40]},
quiz:[{q:'REPowerEU planının hedef yılı hangisi?',opts:['2025','2027','2030','2035'],ans:2},{q:'Avrupa\'nın en büyük LNG ithalatçısı hangisi?',opts:['Almanya','İspanya','Fransa','İngiltere'],ans:0},{q:'Yeşil hidrojen üretiminde kullanılan yöntem hangisi?',opts:['Buhar reformu','Elektroliz','Piroliz','Biyokütle'],ans:1},{q:'Nord Stream boru hattı hangi denizden geçer?',opts:['Karadeniz','Akdeniz','Baltık','Kuzey Denizi'],ans:2},{q:'Türkiye\'nin enerji hub stratejisinin merkezi nerededir?',opts:['İstanbul','Trakya','Ceyhan','Mersin'],ans:1}]},
{id:'ortadogu-abr',cat:'Orta Doğu',catC:'#f59e0b',hot:true,title:'Abraham Anlaşmaları Genişlemesi',desc:'Suudi Arabistan-İsrail normalleşmesi bölgesel dengeleri yeniden çiziyor.',tags:['Normalleşme','Suudi','İsrail','İran','Filistin'],
thread:[{n:'1',t:'Süreç',b:'Abraham Anlaşmaları BAE, Bahreyn, Fas ve Sudan\'ı kapsıyor; Suudi Arabistan sırada.'},{n:'2',t:'Koşullar',b:'Suudi Arabistan Filistin devleti ve nükleer program garantisi istiyor.'},{n:'3',t:'İran Etkisi',b:'İran normalleşmeyi baltalamak için vekil güçlerini harekete geçiriyor.'},{n:'4',t:'Türkiye',b:'Türkiye İsrail ile ilişkileri dondurmaya devam ediyor; bölgede farklı pozisyon.'},{n:'5',t:'Etki',b:'Normalleşme bölgesel ekonomik entegrasyonu hızlandırabilir.'}],
poll:{q:'Suudi-İsrail normalleşmesi gerçekleşir mi?',opts:['Evet, 2 yıl içinde','Filistin koşuluyla','Hayır, İran engeller','Belirsiz'],votes:[20,35,20,25]},
quiz:[{q:'Abraham Anlaşmaları hangi yıl imzalandı?',opts:['2018','2019','2020','2021'],ans:2},{q:'İlk normalleşen Körfez ülkesi hangisi?',opts:['Suudi Arabistan','BAE','Katar','Kuveyt'],ans:1},{q:'Suudi Arabistan\'ın nükleer program talebi kimin desteğiyle?',opts:['Rusya','ABD','Fransa','Çin'],ans:1},{q:'İran\'ın bölgedeki en güçlü vekil gücü hangisi?',opts:['Hamas','Hizbullah','Husiler','Haşdi Şabi'],ans:1},{q:'Abraham Anlaşmaları\'nı hangi ABD başkanı destekledi?',opts:['Obama','Trump','Biden','Bush'],ans:1}]}
],
savunma:[
{id:'iha-suru',cat:'İHA/SİHA',catC:'#10b981',hot:true,title:'İHA Sürü Savaşı Doktrini',desc:'Türkiye ve ABD sürü İHA teknolojisinde yarışıyor; 1000+ drone koordinasyonu.',tags:['Sürü','Bayraktar','KARGU','Loyal Wingman','Otonom'],
thread:[{n:'1',t:'Konsept',b:'Sürü savaşı: yüzlerce ucuz İHA\'nın koordineli hareketiyle pahalı sistemleri alt etme.'},{n:'2',t:'Türkiye',b:'KARGU-2 ve Bayraktar Mini İHA sürü testleri tamamlandı.'},{n:'3',t:'ABD',b:'Replicator programı ile 2.000+ otonom drone üretimi hedefleniyor.'},{n:'4',t:'Savunma',b:'Sürü İHA\'lara karşı lazer ve EW sistemleri geliştiriliyor.'},{n:'5',t:'Gelecek',b:'2030\'da savaş alanının %40\'ı otonom sistemlerle kontrol edilecek.'}],
poll:{q:'Sürü İHA\'ların en etkili kullanım alanı hangisi?',opts:['Keşif/gözetleme','Kamikaze saldırı','Elektronik harp','Lojistik destek'],votes:[20,40,25,15]},
quiz:[{q:'KARGU-2 hangi Türk şirketi tarafından üretildi?',opts:['Baykar','STM','TAI','ASELSAN'],ans:1},{q:'ABD\'nin sürü drone programının adı nedir?',opts:['Replicator','Skyborg','Loyal Wingman','Gremlin'],ans:0},{q:'Sürü İHA\'ya karşı en etkili savunma hangisi?',opts:['Uçaksavar','Lazer/DEW','Füze','Tüfek'],ans:1},{q:'Bayraktar TB3\'ün farkı nedir?',opts:['Jet motor','Katlanır kanat','Nükleer güç','Stealth'],ans:1},{q:'Otonom silah sistemlerini yasaklamaya çalışan uluslararası girişim hangisi?',opts:['Killer Robots Ban','CCW','Ottawa','Viyana'],ans:0}]},
{id:'fuze-hiper',cat:'Füze',catC:'#ef4444',hot:true,title:'Hipersonik Silah Yarışı',desc:'Mach 5+ hızla uçan füzeler mevcut hava savunma sistemlerini geçersiz kılıyor.',tags:['Hipersonik','TAYFUN','Kinzhal','DF-17','Mach 5'],
thread:[{n:'1',t:'Tanım',b:'Hipersonik: Mach 5 üzeri (6.000+ km/s) hızla manevra yapabilen silahlar.'},{n:'2',t:'Oyuncular',b:'Rusya (Kinzhal/Zircon), Çin (DF-17), ABD (LRHW) ve Türkiye (TAYFUN+).'},{n:'3',t:'Türkiye',b:'TAYFUN balistik füzesi 561 km menzile sahip; hipersonik versiyon geliştiriliyor.'},{n:'4',t:'Savunma',b:'Mevcut sistemler yetersiz; lazer ve yapay zekâ destekli çözümler aranıyor.'},{n:'5',t:'Etki',b:'Hipersonik silahlar nükleer caydırıcılık dengesini bozabilir.'}],
poll:{q:'Hipersonik silah yarışının galibi kim olur?',opts:['Rusya — erken başladı','Çin — seri üretim','ABD — teknoloji','Türkiye — maliyet avantajı'],votes:[20,30,35,15]},
quiz:[{q:'Hipersonik hız Mach kaçtan başlar?',opts:['Mach 2','Mach 3','Mach 5','Mach 10'],ans:2},{q:'TAYFUN füzesinin menzili kaç km?',opts:['200','350','561','1000'],ans:2},{q:'Rusya\'nın hava fırlatmalı hipersonik füzesi hangisi?',opts:['Zircon','Kinzhal','Avangard','Sarmat'],ans:1},{q:'Hipersonik glide vehicle (HGV) ne yapar?',opts:['Yörüngede kalır','Atmosferde manevra yapar','Denizaltından fırlar','Uzayda patlar'],ans:1},{q:'Çin\'in hipersonik füzesi hangisi?',opts:['DF-41','DF-17','JL-3','CJ-100'],ans:1}]},
{id:'deniz-otonom',cat:'Deniz',catC:'#3b82f6',hot:false,title:'Otonom Deniz Platformları',desc:'İnsansız su üstü ve su altı araçları deniz savaşını dönüştürüyor.',tags:['USV','UUV','ULAQ','MİUS','Mayın'],
thread:[{n:'1',t:'Devrim',b:'Ukrayna\'nın deniz droneları Karadeniz\'de Rus donanmasını felç etti.'},{n:'2',t:'Türkiye',b:'ULAQ SİDA insansız deniz aracı aktif; MİUS denizaltı projesi devam ediyor.'},{n:'3',t:'ABD',b:'Ghost Fleet programı ile otonom savaş gemileri test ediliyor.'},{n:'4',t:'Mayın',b:'Otonom mayın avlama sistemleri geleneksel mayın savaşını değiştiriyor.'},{n:'5',t:'Gelecek',b:'2030\'da donanmaların %20\'si insansız platformlardan oluşacak.'}],
poll:{q:'Deniz savaşının geleceğinde en kritik platform hangisi?',opts:['İnsansız su üstü (USV)','İnsansız su altı (UUV)','Otonom savaş gemisi','Deniz İHA\'sı'],votes:[25,30,20,25]},
quiz:[{q:'ULAQ SİDA hangi ülkenin ürünü?',opts:['ABD','İngiltere','Türkiye','İsrail'],ans:2},{q:'Ukrayna\'nın deniz dronu ile batırılan Rus gemisi hangisi?',opts:['Moskva','Admiral Makarov','Kutuzov','Novorossiysk'],ans:0},{q:'MİUS projesi ne tür bir platform?',opts:['Fırkateyn','Denizaltı','Korvet','Uçak gemisi'],ans:1},{q:'Ghost Fleet hangi ülkenin programı?',opts:['İngiltere','Çin','ABD','Japonya'],ans:2},{q:'İnsansız deniz aracının kısaltması nedir?',opts:['UAV','USV','UGV','URV'],ans:1}]},
{id:'uzay-savas',cat:'Uzay',catC:'#8b5cf6',hot:false,title:'Uzay Silahlanması ve ASAT',desc:'Anti-uydu silahları ve yörünge savaşı yeni cephe haline geliyor.',tags:['ASAT','Starlink','GPS Karıştırma','Uzay Komutanlığı','Yörünge'],
thread:[{n:'1',t:'Tehdit',b:'Rusya ve Çin ASAT (anti-uydu) silahlarını test etti; uzay çöpü riski arttı.'},{n:'2',t:'Starlink',b:'SpaceX Starlink askeri iletişimde kullanılıyor; hedef haline geldi.'},{n:'3',t:'Türkiye',b:'Hava Kuvvetleri Uzay Komutanlığı kuruldu; GÖKTÜRK ve İMECE aktif.'},{n:'4',t:'GPS',b:'GPS/GNSS karıştırma ve aldatma savaş alanında yaygınlaşıyor.'},{n:'5',t:'Kural',b:'Uzay silahlanmasını sınırlayan uluslararası anlaşma yok; boşluk büyüyor.'}],
poll:{q:'Uzayda silahlanma önlenebilir mi?',opts:['Evet, anlaşma ile','Hayır, kaçınılmaz','Kısmen sınırlanabilir','Çok geç'],votes:[10,35,40,15]},
quiz:[{q:'ASAT ne demektir?',opts:['Anti-Satellite','Advanced Space Tech','Aerial Strike','Autonomous System'],ans:0},{q:'Türkiye\'nin askeri keşif uydusu hangisi?',opts:['TÜRKSAT-6A','GÖKTÜRK-2','İMECE','RASAT'],ans:1},{q:'Starlink kaç uydudan oluşuyor (yaklaşık)?',opts:['1.000','3.000','6.000','12.000'],ans:2},{q:'GPS karıştırma tekniğinin adı nedir?',opts:['Jamming','Spoofing','Hacking','Phishing'],ans:0},{q:'Uzay silahlanmasını yasaklayan anlaşma var mı?',opts:['Evet, 1967 Uzay Ant.','Kısmen','Hayır, spesifik yok','BM kararı var'],ans:2}]}
],
teknoloji:[
{id:'yz-askeri',cat:'Yapay Zekâ',catC:'#8b5cf6',hot:true,title:'Askeri Yapay Zekâ Devrimi',desc:'Otonom karar sistemleri, hedef tanıma ve komuta-kontrol\'de YZ entegrasyonu.',tags:['LLM','Otonom','Hedef Tanıma','Etik','LAWS'],
thread:[{n:'1',t:'Durum',b:'Pentagon Project Maven ile YZ hedef tanımayı operasyonelleştirdi.'},{n:'2',t:'Otonom',b:'Tam otonom öldürücü silahlar (LAWS) etik tartışma yaratıyor.'},{n:'3',t:'Türkiye',b:'HAVELSAN ve ASELSAN askeri YZ projeleri geliştiriyor.'},{n:'4',t:'LLM',b:'Büyük dil modelleri istihbarat analizi ve senaryo planlamada kullanılıyor.'},{n:'5',t:'Risk',b:'YZ yarışı kontrolsüz tırmanma riski taşıyor; uluslararası düzenleme yok.'}],
poll:{q:'Askeri YZ\'nin en büyük riski hangisi?',opts:['Otonom öldürme kararı','Hatalı hedef tanıma','Siber manipülasyon','Kontrolsüz tırmanma'],votes:[30,20,15,35]},
quiz:[{q:'Pentagon\'un YZ hedef tanıma projesi hangisi?',opts:['Project Maven','Skynet','Palantir','Atlas'],ans:0},{q:'LAWS neyin kısaltması?',opts:['Lethal Autonomous Weapon Systems','Light Air Warning System','Land Attack Weapon','Laser Armed Warfare'],ans:0},{q:'Türkiye\'nin askeri YZ şirketi hangisi?',opts:['OpenAI','HAVELSAN','DeepMind','Anthropic'],ans:1},{q:'YZ\'nin askeri kullanımını düzenleyen uluslararası anlaşma var mı?',opts:['Evet','Hayır','Taslak aşamasında','Sadece AB\'de'],ans:1},{q:'Hedef tanıma YZ\'si hangi veriyi kullanır?',opts:['Sadece radar','Görüntü + sinyal','Sadece GPS','Sadece ses'],ans:1}]},
{id:'kuantum',cat:'Kuantum',catC:'#ec4899',hot:false,title:'Kuantum Bilişim Yarışı',desc:'Kuantum üstünlüğü mevcut şifreleme sistemlerini tehdit ediyor.',tags:['Qubit','QKD','Post-Kuantum','Google','IBM'],
thread:[{n:'1',t:'Tehdit',b:'Kuantum bilgisayarlar RSA ve AES şifrelemesini kırabilir; "Q-Day" yaklaşıyor.'},{n:'2',t:'Yarış',b:'Google, IBM ve Çin kuantum üstünlüğü için yarışıyor.'},{n:'3',t:'Savunma',b:'Post-kuantum kriptografi standartları NIST tarafından belirlendi.'},{n:'4',t:'QKD',b:'Kuantum anahtar dağıtımı kırılamaz iletişim vaat ediyor.'},{n:'5',t:'Türkiye',b:'TÜBİTAK kuantum teknolojileri araştırma merkezi kurdu.'}],
poll:{q:'Kuantum bilgisayarlar ne zaman mevcut şifrelemeyi kırar?',opts:['5 yıl içinde','10 yıl','20+ yıl','Hiçbir zaman'],votes:[15,40,35,10]},
quiz:[{q:'Kuantum bilişimin temel birimi nedir?',opts:['Bit','Byte','Qubit','Pixel'],ans:2},{q:'Post-kuantum kriptografi standartlarını kim belirliyor?',opts:['IEEE','NIST','ISO','ITU'],ans:1},{q:'Google\'ın kuantum işlemcisinin adı nedir?',opts:['Sycamore','Eagle','Osprey','Willow'],ans:0},{q:'QKD ne demektir?',opts:['Quantum Key Distribution','Quick Data','Qubit Decryption','Quantum Knowledge'],ans:0},{q:'Q-Day ne anlama gelir?',opts:['Kuantum bilgisayarın şifre kırdığı gün','Kuantum lansmanı','Qubit rekoru','Kuantum internet'],ans:0}]},
{id:'robotik',cat:'Robotik',catC:'#f59e0b',hot:false,title:'Askeri Robotik ve Ekzoskelet',desc:'Kara savaşında robotik sistemler ve asker güçlendirme teknolojileri.',tags:['Boston Dynamics','Ekzoskelet','UGV','Otonom','Lojistik'],
thread:[{n:'1',t:'UGV',b:'İnsansız kara araçları keşif, mayın temizleme ve lojistikte kullanılıyor.'},{n:'2',t:'Ekzoskelet',b:'Asker taşıma kapasitesini 3 katına çıkaran dış iskelet sistemleri.'},{n:'3',t:'Türkiye',b:'ASELSAN KAPLAN ve HAVELSAN BARKAN UGV projeleri aktif.'},{n:'4',t:'ABD',b:'Boston Dynamics Spot ve Atlas robotları askeri testlerde.'},{n:'5',t:'Etik',b:'Robot askerlerin savaş hukuku kapsamında statüsü belirsiz.'}],
poll:{q:'Robotik askerlerin savaş alanına girmesi ne zaman?',opts:['Zaten girdi','5 yıl içinde','10 yıl','20+ yıl'],votes:[25,35,30,10]},
quiz:[{q:'Türkiye\'nin insansız kara aracı projesi hangisi?',opts:['KAPLAN','ALTAY','TULPAR','PARS'],ans:0},{q:'Boston Dynamics\'in dört ayaklı robotu hangisi?',opts:['Atlas','Spot','Handle','Stretch'],ans:1},{q:'Ekzoskelet ne işe yarar?',opts:['Uçuş','Taşıma kapasitesi artırma','Su altı','İletişim'],ans:1},{q:'UGV ne demektir?',opts:['Unmanned Ground Vehicle','Ultra Guided Vehicle','Universal Gun','Under Ground Vessel'],ans:0},{q:'Askeri robotların en yaygın kullanım alanı hangisi?',opts:['Doğrudan savaş','Mayın temizleme','Hava savunma','Deniz operasyonu'],ans:1}]}
],
ekonomi:[
{id:'nadir-metal',cat:'Nadir Element',catC:'#C9A24B',hot:true,title:'Nadir Toprak Elementleri Savaşı',desc:'Çin\'in %70 tekelinde olan nadir metaller küresel güç dengesini belirliyor.',tags:['Germanyum','Galyum','Lityum','Çin','Tedarik'],
thread:[{n:'1',t:'Tekel',b:'Çin dünya nadir toprak üretiminin %70\'ini, işlemenin %90\'ını kontrol ediyor.'},{n:'2',t:'Silah',b:'Çin germanyum ve galyum ihracatını kısıtlayarak ABD\'ye baskı yapıyor.'},{n:'3',t:'Alternatif',b:'ABD, Avustralya ve Kanada alternatif madencilik projeleri başlattı.'},{n:'4',t:'Türkiye',b:'Türkiye\'nin bor rezervleri dünya 1.\'si; germanyum potansiyeli araştırılıyor.'},{n:'5',t:'Gelecek',b:'Geri dönüşüm ve sentetik alternatifler araştırılıyor; ancak 10+ yıl uzakta.'}],
poll:{q:'Nadir metal krizinin çözümü ne?',opts:['Alternatif madencilik','Geri dönüşüm','Sentetik alternatif','Çin ile anlaşma'],votes:[35,25,20,20]},
quiz:[{q:'Dünya bor rezervlerinin en büyük kısmı nerede?',opts:['Çin','ABD','Türkiye','Avustralya'],ans:2},{q:'Germanyum en çok hangi sektörde kullanılır?',opts:['Tarım','Yarı iletken/fiber optik','Gıda','Tekstil'],ans:1},{q:'Çin dünya nadir toprak üretiminin yüzde kaçını kontrol eder?',opts:['%30','%50','%70','%90'],ans:2},{q:'Lityum en çok hangi ürün için gerekli?',opts:['Çelik','Batarya','Cam','Beton'],ans:1},{q:'Nadir toprak elementleri kaç tanedir?',opts:['5','12','17','25'],ans:2}]},
{id:'tedarik-zinciri',cat:'Lojistik',catC:'#10b981',hot:false,title:'Küresel Tedarik Zinciri Kırılganlığı',desc:'Pandemi sonrası tedarik zincirleri yeniden yapılanıyor; nearshoring trendi.',tags:['Nearshoring','Hürmüz','Süveyş','Konteyner','Çip'],
thread:[{n:'1',t:'Kırılganlık',b:'COVID-19 küresel tedarik zincirinin ne kadar kırılgan olduğunu gösterdi.'},{n:'2',t:'Darboğaz',b:'Süveyş, Hürmüz ve Malakka boğazları kritik geçiş noktaları.'},{n:'3',t:'Trend',b:'Nearshoring: üretimi yakın ülkelere taşıma; Türkiye fırsat ülkesi.'},{n:'4',t:'Husi',b:'Husi saldırıları Kızıldeniz ticaretini %50 düşürdü; sigorta maliyetleri patladı.'},{n:'5',t:'Çözüm',b:'Dijital ikiz, YZ tahmin ve çoklu kaynak stratejileri yaygınlaşıyor.'}],
poll:{q:'Tedarik zinciri krizinin en büyük nedeni hangisi?',opts:['Jeopolitik gerilim','Doğal afet','Siber saldırı','Enerji krizi'],votes:[40,20,15,25]},
quiz:[{q:'Nearshoring ne demektir?',opts:['Uzak ülkeye taşıma','Yakın ülkeye taşıma','Deniz taşımacılığı','Hava kargo'],ans:1},{q:'Dünya ticaretinin yüzde kaçı deniz yoluyla taşınır?',opts:['%50','%70','%80','%90'],ans:2},{q:'Süveyş Kanalı\'nı tıkayan gemi hangisiydi?',opts:['Ever Given','Ever Forward','MSC Oscar','Emma Maersk'],ans:0},{q:'Hürmüz Boğazı\'ndan günde kaç milyon varil petrol geçer?',opts:['5M','10M','17M','25M'],ans:2},{q:'Türkiye\'nin nearshoring avantajı nedir?',opts:['Ucuz işgücü','Coğrafi konum','Doğal kaynaklar','Nüfus'],ans:1}]}
],
bilim:[
{id:'biyotek',cat:'Biyoteknoloji',catC:'#10b981',hot:false,title:'CRISPR ve Gen Düzenleme',desc:'Gen düzenleme teknolojisi tıp, tarım ve biyolojik silahları dönüştürüyor.',tags:['CRISPR','mRNA','Biyosilah','Tarım','Etik'],
thread:[{n:'1',t:'Devrim',b:'CRISPR-Cas9 ile DNA\'yı hassas şekilde düzenlemek mümkün.'},{n:'2',t:'Tıp',b:'Orak hücre anemisi ve bazı kanserler gen terapisiyle tedavi ediliyor.'},{n:'3',t:'Tarım',b:'Kuraklığa dayanıklı ve yüksek verimli bitkiler geliştiriliyor.'},{n:'4',t:'Risk',b:'Biyolojik silah olarak kullanım potansiyeli ciddi güvenlik endişesi.'},{n:'5',t:'Etik',b:'İnsan embriyosu düzenleme tartışması devam ediyor; Çin\'de yasadışı deney yapıldı.'}],
poll:{q:'Gen düzenlemenin en büyük etkisi hangi alanda olur?',opts:['Tıp/hastalık tedavisi','Tarım/gıda','Askeri/biyosilah','Yaşlanma geciktirme'],votes:[40,25,15,20]},
quiz:[{q:'CRISPR-Cas9\'u keşfeden bilim insanları kimlerdir?',opts:['Watson-Crick','Doudna-Charpentier','Pauling-Franklin','Mendel-Darwin'],ans:1},{q:'mRNA aşısı hangi pandemi için geliştirildi?',opts:['Ebola','SARS','COVID-19','H1N1'],ans:2},{q:'Gen düzenleme ile tedavi edilen ilk hastalık hangisi?',opts:['Diyabet','Orak hücre anemisi','Kanser','Alzheimer'],ans:1},{q:'Biyolojik Silahlar Sözleşmesi hangi yıl imzalandı?',opts:['1925','1945','1972','1993'],ans:2},{q:'CRISPR hangi organizmadan esinlenildi?',opts:['Virüs','Bakteri','Mantar','Bitki'],ans:1}]},
{id:'uzay-ticari',cat:'Uzay',catC:'#8b5cf6',hot:false,title:'Ticari Uzay Ekonomisi',desc:'SpaceX, Blue Origin ve Türkiye\'nin uzay programı yeni ekonomi yaratıyor.',tags:['SpaceX','Starship','TUA','Ay','Mars'],
thread:[{n:'1',t:'Pazar',b:'Uzay ekonomisi 2030\'da 1 trilyon dolara ulaşacak.'},{n:'2',t:'SpaceX',b:'Starship tam yeniden kullanılabilir roket; Mars kolonisi hedefi.'},{n:'3',t:'Türkiye',b:'TUA Milli Uzay Programı: 2028 Ay\'a yumuşak iniş hedefi.'},{n:'4',t:'Madencilik',b:'Asteroid madenciliği nadir metallere erişim vaat ediyor.'},{n:'5',t:'Turizm',b:'Uzay turizmi başladı; Blue Origin ve Virgin Galactic aktif.'}],
poll:{q:'İnsanlık Mars\'a ne zaman ayak basar?',opts:['2030\'lar','2040\'lar','2050+','Hiçbir zaman'],votes:[20,40,30,10]},
quiz:[{q:'SpaceX\'in Mars roketi hangisi?',opts:['Falcon 9','Falcon Heavy','Starship','Dragon'],ans:2},{q:'Türkiye\'nin Ay hedef yılı hangisi?',opts:['2026','2028','2030','2035'],ans:1},{q:'Uzay ekonomisinin 2030 tahmini kaç dolar?',opts:['100 milyar','500 milyar','1 trilyon','5 trilyon'],ans:2},{q:'İlk uzay turisti kim?',opts:['Elon Musk','Jeff Bezos','Dennis Tito','Richard Branson'],ans:2},{q:'TUA\'nın açılımı nedir?',opts:['Türkiye Uzay Ajansı','Türk Uzay Araştırmaları','Türkiye Uydu Ağı','Türk Uzay Akademisi'],ans:0}]}
],
turkiye:[
{id:'savtek',cat:'Savunma San.',catC:'#3b82f6',hot:true,title:'Milli Savunma Sanayii',desc:'Türkiye\'nin %80 yerlilik oranına ulaşan savunma sanayii stratejik bağımsızlığın temeli.',tags:['Baykar','ASELSAN','KAAN','SİPER','AKINCI'],
thread:[{n:'1',t:'Durum neydi?',b:'2000\'lerde Türkiye savunma ihtiyacının %80\'ini ithal ediyordu.'},{n:'2',t:'Ne değişti?',b:'SSB öncülüğünde 1000+ milli proje başlatıldı; Baykar ve ASELSAN öne çıktı.'},{n:'3',t:'Bayraktar etkisi',b:'TB2\'nin Karabağ performansı Türkiye\'yi küresel İHA pazarında 1. sıraya taşıdı.'},{n:'4',t:'KAAN',b:'Milli muharip uçak; F-35 dışında kalan Türkiye\'nin hava gücü egemenliğini garanti altına alıyor.'},{n:'5',t:'Gelecek',b:'Hipersonik, uydu ve deniz platformları gündemde.'}],
poll:{q:'Savunma sanayiinde en kritik sonraki adım?',opts:['TF-2000 savaş gemisi','Hipersonik füze','Uzay/ASAT','Siber merkezi'],votes:[28,24,30,18]},
quiz:[{q:'Türkiye\'nin savunma yerlilik oranı kaça ulaştı?',opts:['%40','%60','%80','%95'],ans:2},{q:'KAAN hangi nesil savaş uçağı?',opts:['3. nesil','4. nesil','5. nesil','6. nesil'],ans:2},{q:'SİPER sistemi neye karşı koruma sağlar?',opts:['Tank','Balistik füze','Denizaltı','Siber saldırı'],ans:1},{q:'Baykar\'ın en büyük İHA\'sı hangisi?',opts:['TB2','TB3','AKINCI','ANKA'],ans:2},{q:'SSB\'nin açılımı nedir?',opts:['Savunma Sanayii Başkanlığı','Silahlı Sistemler Birliği','Stratejik Savunma Bakanlığı','Savunma Sanayi Birliği'],ans:0}]},
{id:'nato-tr',cat:'İttifak',catC:'#8b5cf6',hot:true,title:'NATO İçinde Türkiye',desc:'2. büyük orduya sahip Türkiye NATO\'nun güney kanadının kilit ülkesi.',tags:['S-400','F-35','İsveç','Güney Kanat','Boğazlar'],
thread:[{n:'1',t:'Neden önemli?',b:'Türkiye olmadan NATO\'nun Karadeniz ve Orta Doğu erişimi kısıtlanır.'},{n:'2',t:'S-400 krizi',b:'Rusya\'dan S-400 alınması NATO ile kriz yarattı; F-35\'ten çıkarıldık.'},{n:'3',t:'Boğaz silahı',b:'Montrö Türkiye\'ye Boğazları savaş gemilerine kapatma hakkı tanıyor.'},{n:'4',t:'Genişleme kozu',b:'İsveç üyeliğini onaylamak için PKK/terör talepleri müzakere aracı oldu.'},{n:'5',t:'Gelecek',b:'Türkiye stratejik özerklik politikasını korurken ağırlığını artırıyor.'}],
poll:{q:'Türkiye-NATO ilişkisi 10 yılda nasıl şekillenir?',opts:['Daha entegre','Daha özerk ama içinde','Kriz derinleşir','Farklı ittifak'],votes:[20,45,20,15]},
quiz:[{q:'Türkiye Boğazları hangi sözleşmeyle kontrol eder?',opts:['Lozan','Montrö','BM Deniz Hukuku','NATO Statüsü'],ans:1},{q:'Türkiye NATO\'nun kaçıncı büyük ordusu?',opts:['1.','2.','3.','5.'],ans:1},{q:'S-400 hangi ülkeden alındı?',opts:['ABD','Çin','Rusya','İsrail'],ans:2},{q:'Türkiye F-35 programından ne zaman çıkarıldı?',opts:['2017','2019','2021','2023'],ans:1},{q:'NATO\'nun güney kanadı hangi bölgeyi kapsar?',opts:['Baltık','Karadeniz-Akdeniz','Arktik','Pasifik'],ans:1}]},
{id:'mavi-vatan',cat:'Deniz Gücü',catC:'#10b981',hot:true,title:'Mavi Vatan Doktrini',desc:'462.000 km² deniz yetki alanı iddiası ve TCG Anadolu ile deniz gücü.',tags:['Mavi Vatan','EEZ','TCG Anadolu','Doğalgaz','Ege'],
thread:[{n:'1',t:'Nedir?',b:'2006\'dan şekillenen doktrin: üç denizde 462.000 km² alan.'},{n:'2',t:'Tartışma',b:'Yunanistan ve AB taleplerin uluslararası hukuka aykırı olduğunu savunuyor.'},{n:'3',t:'TCG Anadolu',b:'Dünyada İHA operasyonu yapan ilk deniz platformu.'},{n:'4',t:'Doğalgaz',b:'Kıbrıs ve İsrail sahasındaki keşifler Türkiye\'nin dışlanma korkusunu artırıyor.'},{n:'5',t:'Ege',b:'Kıta sahanlığı ve hava sahası tartışmaları tırmanma potansiyeli taşıyor.'}],
poll:{q:'Doğu Akdeniz geriliminin çözümü ne?',opts:['İkili müzakere','Uluslararası tahkim','AB arabuluculuğu','Statüko sürer'],votes:[25,30,20,25]},
quiz:[{q:'Mavi Vatan kaç km² alan iddia ediyor?',opts:['200.000','350.000','462.000','600.000'],ans:2},{q:'TCG Anadolu hangi özelliğiyle öne çıkıyor?',opts:['Nükleer güç','İHA operasyonu','En büyük gemi','Stealth'],ans:1},{q:'Türkiye\'nin Karadeniz\'deki doğalgaz keşfi hangisi?',opts:['Sakarya','Tuna-1','Zonguldak','Sinop'],ans:0},{q:'Ege\'deki temel anlaşmazlık konusu nedir?',opts:['Balıkçılık','Kıta sahanlığı','Turizm','Göç'],ans:1},{q:'MİLGEM projesinin ilk gemisi hangisi?',opts:['TCG Heybeliada','TCG İstanbul','TCG Anadolu','TCG Barbaros'],ans:0}]},
{id:'suriye-tr',cat:'Çatışma',catC:'#ef4444',hot:false,title:'Suriye ve PKK/YPG Meselesi',desc:'4 operasyonla 30 km derinliğinde güvenli bölge; ABD-YPG krizi devam.',tags:['YPG','Fırat Kalkanı','Zeytin Dalı','SDG','Güvenli Bölge'],
thread:[{n:'1',t:'Neden girdik?',b:'PKK bağlantılı YPG\'nin sınır ötesinde örgütlenmesi ve mülteci baskısı.'},{n:'2',t:'Operasyonlar',b:'4 büyük operasyon: Fırat Kalkanı, Zeytin Dalı, Barış Pınarı, Pençe-Kilit.'},{n:'3',t:'ABD gerilimi',b:'ABD\'nin YPG\'yi silahlandırması NATO içinde yapısal çelişki.'},{n:'4',t:'Esad sonrası',b:'2024 sonu Esad\'ın düşmesiyle bölge yeniden şekilleniyor.'},{n:'5',t:'Risk',b:'Kürt özerk bölgesinin kalıcılaşması Türkiye için kırmızı çizgi.'}],
poll:{q:'Kuzey Suriye politikası uzun vadede başarılı olur mu?',opts:['Evet, güvenlik sağlandı','Kısmen','Hayır, sürdürülemez','Belirsiz'],votes:[22,35,18,25]},
quiz:[{q:'İlk Suriye operasyonunun adı nedir?',opts:['Zeytin Dalı','Barış Pınarı','Fırat Kalkanı','Pençe-Kilit'],ans:2},{q:'Fırat Kalkanı hangi yıl başladı?',opts:['2015','2016','2017','2018'],ans:1},{q:'YPG hangi örgütün Suriye kolu?',opts:['IŞİD','PKK','El Kaide','Hizbullah'],ans:1},{q:'Güvenli bölge derinliği kaç km?',opts:['10','20','30','50'],ans:2},{q:'Pençe-Kilit operasyonu nerede yürütülüyor?',opts:['Suriye','Irak','İran sınırı','Türkiye içi'],ans:1}]},
{id:'orta-asya',cat:'Coğrafya',catC:'#f59e0b',hot:false,title:'Orta Asya ve Türk Dünyası',desc:'Türk Devletleri Teşkilatı ile kültürel ve stratejik entegrasyon.',tags:['TDT','Kazakistan','Özbekistan','Ortak Alfabe','BRI'],
thread:[{n:'1',t:'TDT',b:'2009 Türk Konseyi, 2021\'de Türk Devletleri Teşkilatı adını aldı.'},{n:'2',t:'Alfabe',b:'Latin alfabesine geçiş dil birliğini ve kültürel bağları pekiştiriyor.'},{n:'3',t:'Enerji',b:'Orta Asya\'nın Çin/Rusya bağımlılığına alternatif hat arayışında Türkiye köprü.'},{n:'4',t:'Savunma',b:'Bayraktar İHA\'ları Kazakistan ve Kırgızistan\'a satıldı.'},{n:'5',t:'Çin',b:'Kuşak ve Yol bölgede güçlü; TDT alternatif ağ kurma çabası.'}],
poll:{q:'Türkiye Orta Asya\'da ne kadar etkili?',opts:['Çok etkili','Orta düzey','Kültürel sınırlı','Potansiyel aşamasında'],votes:[20,40,25,15]},
quiz:[{q:'TDT kaç üye ülkeden oluşur?',opts:['3','5','7','9'],ans:1},{q:'Orta Asya\'da Latin alfabesine geçen ilk ülke hangisi?',opts:['Kazakistan','Özbekistan','Türkmenistan','Kırgızistan'],ans:2},{q:'BTC boru hattı nereye ulaşır?',opts:['Ankara','Ceyhan','İstanbul','Mersin'],ans:1},{q:'Kuşak ve Yol hangi ülkenin projesi?',opts:['ABD','Rusya','Çin','Hindistan'],ans:2},{q:'TDT\'nin merkezi nerededir?',opts:['Ankara','İstanbul','Astana','Taşkent'],ans:1}]}
]
};

// TREND DATA
const TRENDS=[
{title:'Yükselen: Uzay Ekonomisi',desc:'Uydu, fırlatma, uzay madenciliği — yıllık %15 büyüme',dir:'up',val:'+15%'},
{title:'Yükselen: Yapay Zekâ Savunma',desc:'Askeri YZ harcamaları 2026\'da 18 milyar dolara ulaştı',dir:'up',val:'+32%'},
{title:'Yükselen: Otonom Sistemler',desc:'İHA, UGV, USV pazarı hızla genişliyor',dir:'up',val:'+28%'},
{title:'Yükselen: Siber Güvenlik',desc:'Küresel siber güvenlik pazarı 250 milyar dolar',dir:'up',val:'+22%'},
{title:'Düşen: Fosil Yakıt Yatırımı',desc:'Kömür ve petrol yatırımları azalıyor',dir:'down',val:'-12%'},
{title:'Düşen: Geleneksel Bankacılık',desc:'Fintech ve kripto alternatifler yükseliyor',dir:'down',val:'-8%'},
{title:'Risk: Gıda Güvenliği',desc:'İklim değişikliği tarım verimini tehdit ediyor',dir:'risk',val:'Yüksek'},
{title:'Fırsat: Türkiye Nearshoring',desc:'AB tedarik zinciri Türkiye\'ye kayıyor',dir:'up',val:'+18%'}
];

// STRATEGIC FILES
const FILES=[
{icon:'ti-brand-x-filled',title:'Elon Musk ve Askerî Potansiyeli',desc:'SpaceX, Starlink, Neuralink\'in savunma boyutu analizi',link:'musk-infografik-serisi.html'},
{icon:'ti-atom',title:'Çin\'in Kuantum Yarışı',desc:'Micius uydusu, QKD ağı ve askeri uygulamalar',link:'#'},
{icon:'ti-diamond',title:'Türkiye\'nin Germanyum Stratejisi',desc:'Nadir element rezervleri ve savunma sanayii bağlantısı',link:'infografik-mineral-agi.html'},
{icon:'ti-satellite',title:'Starlink\'in Askerî Kullanımı',desc:'Ukrayna\'dan Tayvan\'a: uydu internet savaş aracı mı?',link:'#'},
{icon:'ti-anchor',title:'Yeni Nesil Deniz Gücü',desc:'TCG Anadolu, MİLGEM, TF-2000 ve otonom deniz araçları',link:'infografik-turk-deniz-kuvvetleri.html'},
{icon:'ti-shield-lock',title:'Siber Vatan Doktrini',desc:'Türkiye\'nin siber savunma stratejisi ve SOME yapılanması',link:'#'},
{icon:'ti-drone',title:'Sürü İHA Doktrini',desc:'KARGU, Bayraktar Mini ve 1000+ drone koordinasyonu',link:'infografik-drone-devrim.html'},
{icon:'ti-world',title:'Hibrit Savaş Anatomisi',desc:'Gerasimov doktrini, gri bölge ve Türkiye\'nin konumu',link:'infografik-hibrit-savas-tum-boyutlar.html'},
{icon:'ti-brain',title:'Zekâ, Savaş ve Söylem',desc:'2024-2026 YZ Askeri Dönüşümü — İnteraktif Bilgi Haritası',link:'zeka-savas-soylem.html'},
{icon:'ti-ship',title:'Küresel Ticaret Yolları',desc:'Stratejik boğazlar ve ticaret rotaları interaktif haritası',link:'kuresel-ticaret-yollari.html'},
{icon:'ti-history',title:'Ticaret Yolları & Güç Tarihi',desc:'Antikçağdan 2026 hegemonya döngüsü — tarihsel güç analizi',link:'ticaret-yollari-guc-tarihi.html'},
{icon:'ti-flag-3',title:'Türkiye Strateji Explorer',desc:'Savunma sanayii, ittifaklar ve bölgesel güç analizi',link:'turkiye-strateji-explorer.html'}
];

// INTEL NOTES
const INTEL=[
{time:'2 saat önce',risk:'Yüksek',riskC:'#E01515',title:'Kızıldeniz\'de Husi Saldırısı Arttı',sum:'Son 48 saatte 3 ticari gemi hedef alındı. Sigorta primleri %40 arttı. Süveyş trafiği %25 düştü.'},
{time:'4 saat önce',risk:'Orta',riskC:'#f59e0b',title:'Çin Tayvan Boğazı\'nda Tatbikat',sum:'PLA Donanması 12 gemiyle Tayvan\'ın doğusunda tatbikat başlattı. ABD 7. Filo alarma geçti.'},
{time:'6 saat önce',risk:'Düşük',riskC:'#10b981',title:'TDT Savunma İş Birliği Anlaşması',sum:'Türk Devletleri Teşkilatı üyeleri ortak savunma sanayii projesi imzaladı.'},
{time:'8 saat önce',risk:'Yüksek',riskC:'#E01515',title:'Rusya Nükleer Doktrin Güncellemesi',sum:'Rusya konvansiyonel saldırıya nükleer yanıt eşiğini düşürdü. NATO acil toplantı çağrısı.'},
{time:'12 saat önce',risk:'Orta',riskC:'#f59e0b',title:'KAAN İlk Süpersonik Uçuş',sum:'KAAN prototipi ilk süpersonik hız testini başarıyla tamamladı. Mach 1.2 doğrulandı.'},
{time:'1 gün önce',risk:'Düşük',riskC:'#10b981',title:'Türkiye-Mısır Savunma Anlaşması',sum:'İki ülke arasında savunma sanayii iş birliği çerçeve anlaşması imzalandı.'}
];

// RISK CENTER
const RISKS=[
{icon:'🌍',name:'Jeopolitik Risk',val:72,color:'#E01515'},
{icon:'💰',name:'Ekonomik Risk',val:58,color:'#f59e0b'},
{icon:'🔒',name:'Siber Risk',val:81,color:'#8b5cf6'},
{icon:'⚡',name:'Enerji Riski',val:45,color:'#f59e0b'},
{icon:'🌾',name:'Gıda Riski',val:52,color:'#ec4899'},
{icon:'🤖',name:'Teknoloji Riski',val:67,color:'#3b82f6'}
];

// DASHBOARD
const PANEL=[
{label:'Küresel Risk Endeksi',value:'72/100',change:'+3',dir:'up'},
{label:'Brent Petrol',value:'$87.4',change:'+1.2%',dir:'up'},
{label:'Altın (ons)',value:'$2,847',change:'+0.8%',dir:'up'},
{label:'Bitcoin',value:'$98,420',change:'-2.1%',dir:'down'},
{label:'Deniz Taşımacılığı',value:'-18%',change:'Kızıldeniz',dir:'down'},
{label:'Savunma Harcaması',value:'$2.4T',change:'+6.2%',dir:'up'},
{label:'Uydu Fırlatma (2026)',value:'247',change:'+34%',dir:'up'},
{label:'Kritik Emtia Endeksi',value:'142',change:'+8%',dir:'up'}
];

// ANLATIM FORMATS
const ANLATIM=[
{id:'thread',icon:'ti-messages',name:'Thread / X Formatı',desc:'5-7 adım, her biri bağımsız fikir taşır'},
{id:'reel',icon:'ti-player-play',name:'Reel / Kısa Video',desc:'15-60 sn, tek istatistik veya kanca'},
{id:'infografik',icon:'ti-chart-infographic',name:'İnteraktif İnfografik',desc:'Kliklenebilir harita veya zaman çizelgesi'},
{id:'senaryo',icon:'ti-chess',name:'Senaryo / "Ya olsaydı?"',desc:'Spekülatif analiz ve olasılık skorları'},
{id:'karakter',icon:'ti-user-circle',name:'Karakter Odaklı',desc:'Bir stratejist gözünden anlatım'},
{id:'quiz101',icon:'ti-puzzle',name:'"101" Quiz Serisi',desc:'Seviyeli sorularla kavramsal ilerleme'},
{id:'karsilastir',icon:'ti-scale',name:'Güç Karşılaştırması',desc:'Yan yana ülke/sistem analizi'},
{id:'canli',icon:'ti-live-photo',name:'Canlı Olay Takibi',desc:'Gerçek zamanlı briefing formatı'}
];

// MATRIS
const MATRIS=[
{konu:'Savunma Sanayii',fmts:['Thread','Reel','Güç Kar.','Quiz 101']},
{konu:'NATO & İttifak',fmts:['Senaryo','Thread','Karşılaştırma','Canlı']},
{konu:'Suriye Operasyonları',fmts:['İnfografik','Karakter','Thread','Canlı']},
{konu:'Mavi Vatan',fmts:['İnfografik','Senaryo','Karşılaştırma','Quiz 101']},
{konu:'Kafkasya',fmts:['Thread','Reel','İnfografik','Senaryo']},
{konu:'Orta Asya',fmts:['Thread','Karakter','Reel','Güç Kar.']},
{konu:'Hipersonik Silahlar',fmts:['Quiz 101','Senaryo','Thread','Reel']},
{konu:'Yapay Zekâ',fmts:['Thread','İnfografik','Senaryo','Canlı']},
{konu:'Siber Savaş',fmts:['Canlı','Thread','Quiz 101','Karakter']},
{konu:'Nadir Metaller',fmts:['İnfografik','Güç Kar.','Thread','Reel']}
];

// Yeni Eklenen İnteraktif İçerikler
const EXTRA_LINKS = [
  {t:'Zekâ, Savaş ve Söylem — YZ Askeri Dönüşümü',url:'zeka-savas-soylem.html'},
  {t:'Küresel Ticaret Yolları & Stratejik Boğazlar',url:'kuresel-ticaret-yollari.html'},
  {t:'Ticaret Yolları & Güç Tarihi (Antikçağ-2026)',url:'ticaret-yollari-guc-tarihi.html'},
  {t:'Türkiye Strateji Explorer',url:'turkiye-strateji-explorer.html'}
];
