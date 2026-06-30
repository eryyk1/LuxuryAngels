export const SALON_NAME = 'Polgár Hajnalka Luxury Angels Salon'
export const SALON_TAGLINE = 'Prémium hajápolás & építés'
export const SALON_LOCATION = 'Budapest XVIII.'
export const PHONE = '+36205540430'
export const PHONE_DISPLAY = '+36 20 554 0430'
export const ADDRESS = '1183 Budapest, Szent Lőrinc sétány 4/B'
export const FACEBOOK_URL = 'https://www.facebook.com/polgar.hajnalka.7'
export const MAPS_URL = 'https://maps.google.com/?q=1183+Budapest+Szent+Lőrinc+sétány+4/B'

/** Set to `true` to show product nav links, homepage sections, and CTAs. */
export const PRODUCTS_UI_ENABLED = false

export const NAV = [
  { label: 'Rólam', to: '/#rolam' },
  { label: 'Szolgáltatások', to: '/szolgaltatasok' },
  { label: 'Referenciák', to: '/#referenciak' },
  { label: 'Termékek', to: '/termekek' },
  { label: 'Kapcsolat', to: '/#kapcsolat' },
]

export const SERVICES = [
  {
    slug: 'hosszabbitas',
    title: 'Hajhosszabbítás / póthaj felrakás nanogyűrűvel',
    shortTitle: 'Hajhosszabbítás nanogyűrűvel',
    image: '/photos/nanogyuru1.jpg',
    desc: 'Természetes hatású hosszabbítás és volumennövelés prémium póthajjal, nanogyűrűs technikával.',
    overview:
      'A hajhosszabbítás nanogyűrűs felrakással finom, természetes eredményt ad — a póthaj színe és textúrája illeszkedik a saját hajához. Minden vendég egyedi konzultációval kezdődik, ahol meghatározzuk a szükséges gramm mennyiséget, hosszt és technikát. A szalon minőségű póthajat is biztosít.',
    detail:
      'Hozott póthajjal is vállalok munkát, azonban ebben az esetben garanciát nem tudok biztosítani. Mivel a tincsek előkészítését nem én végzem, azok minőségéért és esetleges hullásáért felelősséget nem tudok vállalni.',
    forWho: [
      'Akik természetes hosszabbítást szeretnének nanogyűrűs technikával',
      'Akik volument vagy hosszúságot szeretnének hozzáadni',
      'Akik prémium, szalonminőségű póthajat keresnek',
      'Akik diszkrét, tartós megoldást szeretnének',
    ],
    process: [
      { step: '01', title: 'Konzultáció', desc: 'Hajállapot felmérése, gramm mennyiség és hossz meghatározása.' },
      { step: '02', title: 'Színillesztés', desc: 'A póthaj árnyalata harmonizál a természetes hajszínnel.' },
      { step: '03', title: 'Nanogyűrűs felrakás', desc: 'Precíz, kényelmes felhelyezés prémium technikával.' },
      { step: '04', title: 'Utánkövetés', desc: 'Ápolási tanácsok és karbantartási időpont egyeztetése.' },
    ],
    benefits: [
      'Természetes, élő megjelenés',
      'Nanogyűrű — kényelmes, diszkrét viselés',
      'Prémium szalonminőségű póthaj',
      'Személyre szabott gramm mennyiség',
      'Professzionális leszedés és karbantartás',
    ],
    pricingSections: [
      {
        title: 'Felrakás nanogyűrűvel',
        rows: [
          { name: '110 g-ig', price: '38 000 Ft' },
          { name: '150 g-ig', price: '41 000 Ft' },
          { name: '180 g-ig', price: '45 000 Ft' },
          { name: '200 g-ig', price: '48 000 Ft' },
          { name: '230 g-ig', price: '52 000 Ft' },
          { name: '250 g-ig', price: '55 000 Ft' },
        ],
      },
      {
        title: 'Kiegészítő szolgáltatások',
        rows: [
          { name: 'Tincsezés', price: '20 000 Ft / 100 g' },
          { name: 'Leszedés / rasztásodás bontása', price: '15 000 – 20 000 Ft' },
        ],
      },
    ],
    pricingInfoIntro:
      'Fontos tudnivalók a szükséges póthaj mennyiség kiválasztása előtt…',
    pricingInfoFull:
      'A nano gyűrűs hajhosszabbítás egyik legfontosabb alapja a megfelelő mennyiségű póthaj kiválasztása a vendég saját hajának sűrűségéhez és teherbírásához igazítva.\n\nA cél nem csupán a hossz vagy a dúsítás elérése, hanem az is, hogy a saját haj egészséges maradjon, ne nehezedjen el, és a hajhosszabbítás alatt is zavartalanul tudjon növekedni, megőrizve természetes sűrűségét.\n\nA tökéletes végeredményhez elengedhetetlen a precíz leválasztás, a megfelelő elosztás, valamint a takaróhajak gondos figyelembevétele.\n\nEzek azok a szakmai részletek, amelyek biztosítják, hogy a hajhosszabbítás diszkrét, kényelmes viseletű és természetes hatású legyen hosszú távon is.',
    pricingNotes: [
      'Személyre szabott árajánlat konzultáció után.',
      'Az árak forintban értendők.',
    ],
    consultation:
      'Foglaljon konzultációt — felmérjük a haját, megbeszéljük az elképzeléseit, és átlátható, személyre szabott árajánlatot adok.',
  },
  {
    slug: 'pothaj-ar',
    title: 'Póthaj árlista / 100 gramm',
    shortTitle: 'Póthaj árlista',
    image: '/photos/services/services2.jpg',
    desc: 'Prémium minőségű póthaj árlista — barna és szőke árnyalatokban, különböző hosszúságokban.',
    overview:
      'A szalon prémium minőségű póthajat kínál 100 grammos egységekben. A barna és szőke árnyalatok különböző hosszúságokban érhetők el. A tincsezés és hőillesztés külön díjazású — az árak alább részletezve.',
    forWho: [
      'Akik szalonminőségű póthajat szeretnének vásárolni',
      'Hajhosszabbítás előtt tájékozódni szeretnének az anyagköltségről',
      'Akik barna vagy szőke árnyalatot keresnek',
    ],
    process: [
      { step: '01', title: 'Konzultáció', desc: 'Hossz, árnyalat és gramm mennyiség meghatározása.' },
      { step: '02', title: 'Színillesztés', desc: 'A megfelelő barna vagy szőke árnyalat kiválasztása.' },
      { step: '03', title: 'Rendelés', desc: 'Prémium póthaj megrendelése a szalonon keresztül.' },
    ],
    benefits: [
      'Prémium szalonminőségű póthaj',
      'Barna és szőke árnyalatok, több hosszúságban',
      'Átlátható, 100 grammos egységárak',
      'Személyre szabott tanácsadás',
    ],
    pricingSections: [
      {
        title: 'Barna póthaj / 100 gramm',
        rows: [
          { name: '40–45 cm', price: '76 000 Ft' },
          { name: '50–55 cm', price: '80 000 Ft' },
          { name: '60–65 cm', price: '84 000 Ft' },
          { name: '70–75 cm', price: '88 000 Ft' },
        ],
      },
      {
        title: 'Szőke póthaj / 100 gramm',
        rows: [
          { name: '40–45 cm', price: '84 000 Ft' },
          { name: '50–55 cm', price: '86 000 Ft' },
          { name: '60–65 cm', price: '88 000 Ft' },
          { name: '70–75 cm', price: '92 000 Ft' },
        ],
      },
      {
        title: 'Tincsezés / 100 gramm',
        rows: [
          { name: 'Nano gyűrű', price: '+20 000 Ft' },
          { name: 'Hőillesztés', price: '+16 000 Ft' },
        ],
      },
    ],
    pricingNotes: [
      'Az árak forintban értendők.',
      'Hozott póthajjal is vállalok munkát, azonban ebben az esetben garanciát nem tudok biztosítani. Mivel a tincsek előkészítését nem én végzem, azok minőségéért és esetleges hullásáért felelősséget nem tudok vállalni.',
      'Személyre szabott árajánlat konzultáció után.',
    ],
    consultation:
      'Konzultáció során segítek kiválasztani a megfelelő hosszúságot, árnyalatot és gramm mennyiséget — kötelezettség nélkül.',
  },
  {
    slug: 'fodraszat',
    title: 'Fodrászat / hajápolás',
    shortTitle: 'Fodrászat & ápolás',
    image: '/photos/services/services3.jpg',
    desc: 'Mosás, szárítás, festés, L’Oréal SteamPod kezelés és professzionális hajápolás — prémium szalonminőségben.',
    overview:
      'Teljes körű fodrászati és hajápolási szolgáltatások prémium termékekkel. A rövid mosás-szárítástól a komplex festési eljárásokig és a L’Oréal SteamPod hajszerkezet-újító kezelésig — minden szolgáltatás mellé hajvágás ajándék.',
    forWho: [
      'Akik rendszeres szalonápolást keresnek',
      'Festés, árnyalás vagy tőfestés előtt és után',
      'Sérült haj regenerálására SteamPod vagy Joico kezeléssel',
      'Speciális alkalmakra készülő vendégek',
    ],
    process: [
      { step: '01', title: 'Konzultáció', desc: 'Hajállapot felmérése és elképzelések megbeszélése.' },
      { step: '02', title: 'Kezelés', desc: 'Mosás, festés vagy ápolás prémium termékekkel.' },
      { step: '03', title: 'Regenerálás', desc: 'SteamPod vagy Joico kezelés, ha szükséges.' },
      { step: '04', title: 'Formázás', desc: 'Professzionális szárítás, vágás és stílus.' },
    ],
    benefits: [
      'Hajvágás ajándék minden szolgáltatás mellé',
      'Prémium L’Oréal és Joico termékek',
      'Személyre szabott festés és ápolás',
      'Professzionális szárítás és formázás',
    ],
    pricingSections: [
      {
        title: 'Mosás & szárítás',
        rows: [
          { name: 'Mosás + szárítás rövid', price: '6 500 Ft' },
          { name: 'Mosás + szárítás félhosszú', price: '7 500 Ft' },
          { name: 'Mosás + szárítás hosszú', price: '8 500 Ft' },
          { name: 'Mosás + szárítás extra hosszú / póthaj', price: '10 500 Ft' },
        ],
      },
      {
        title: 'Festés & színezés',
        rows: [
          { name: 'Tőfestés + szárítás', price: '23 000 Ft-tól' },
          { name: 'Tőfestés + árnyalás + szárítás', price: '27 000 Ft-tól' },
          { name: 'Teljes festés + szárítás', price: '29 000 Ft-tól' },
          { name: 'Színátmenetes szőkítés tőfestéssel, árnyalással', price: '48 000 Ft-tól' },
        ],
      },
      {
        title: 'Kezelések',
        rows: [
          { name: 'L’Oréal SteamPod hajszerkezet-újító kezelés', price: '45 000 Ft-tól' },
          { name: 'Joico hajszerkezet újraépítő kezelés + szárítás', price: '15 000 Ft-tól' },
          { name: 'Hullámosítás / besütés minden szolgáltatás mellé', price: '+4 000 Ft' },
        ],
      },
    ],
    pricingNotes: [
      'A festések végösszege függ a haj sűrűségétől és a felhasznált anyag mennyiségétől.',
      'Hajvágás ajándék minden szolgáltatás mellé.',
      'Az árak forintban értendők.',
    ],
    consultation:
      'Konzultáció során felmérjük a haj állapotát és elképzeléseit — személyre szabott ajánlatot adok a legmegfelelőbb kezelésre.',
  },
  {
    slug: 'hajnovestes',
    title: 'Hajnövesztő és hajsűrítő kezelés',
    shortTitle: 'Hajnövesztő kezelés',
    image: '/photos/services/services4.jpg',
    desc: 'Prémium hajnövesztő program — sampon, tonik, biotin kapszula és fejbőrmasszírozó kefe a dúsabb, egészségesebb hajért.',
    overview:
      'A hajnövesztő és hajsűrítő kezelés célzott program a hajhagymák támogatására és a hajhullás csökkentésére. Prémium termékekkel dolgozom, amelyek hozzájárulhatnak az egészségesebb, erősebb hajnövekedéshez és a dúsabb hajkorona kialakulásához.',
    forWho: [
      'Akik hajhullással küzdenek',
      'Vékonyodó, ritkuló haj esetén',
      'Akik természetes hajnövesztést keresnek',
      'Fejbőrápolást és hajhagymá-serkentést szeretnének',
    ],
    includes: [
      'Hajnövesztő és serkentő sampon',
      'Rozmarin tonik',
      'Biotin kapszula',
      'Fejbőrmasszírozó kefe',
    ],
    process: [
      { step: '01', title: 'Fejbőr felmérés', desc: 'A fejbőr és hajhagymák állapotának vizsgálata.' },
      { step: '02', title: 'Hajnövesztő terápia', desc: 'Célzott kezelés a hajhagymák serkentésére.' },
      { step: '03', title: 'Otthoni program', desc: 'Sampon, tonik, biotin és masszírozó kefe bemutatása.' },
      { step: '04', title: 'Utánkövetés', desc: 'Személyre szabott ápolási rutin és kontroll időpont.' },
    ],
    benefits: [
      'Segíthet csökkenteni a hajhullást',
      'Támogathatja a hajhagymák működését',
      'Hozzájárulhat az egészségesebb, erősebb hajnövekedéshez',
      'Támogathatja a dúsabb hajkorona kialakulását',
    ],
    pricingNotes: [
      'Személyre szabott árajánlat konzultáció után.',
      'Az árak forintban értendők.',
    ],
    consultation:
      'Konzultáció során felmérjük a fejbőr és haj állapotát, és összeállítjuk az Önnek megfelelő hajnövesztő programot.',
  },
  {
    slug: 'hajnovestes-komplex',
    title: 'Hajnövesztő, sűrítő és hajszerkezet-újító komplex kezelés',
    shortTitle: 'Komplex hajnövesztés',
    image: '/photos/services/services5.jpg',
    desc: 'Teljes körű hajnövesztő, sűrítő és hajszerkezet-újító komplex kezelés — fejbőrdiagnosztikától a SteamPod-ig.',
    overview:
      'A komplex hajnövesztő kezelés a szalon legátfogóbb hajregeneráló élménye. Fejbőrdiagnosztikával indul, majd hajnövesztő terápia, professzionális hajmosás, hajszerkezet-újító kezelés, frissítő vágás és L’Oréal SteamPod formázás követi — relaxáló, prémium környezetben.',
    forWho: [
      'Akik komplex, több lépéses hajregenerálást keresnek',
      'Sérült, vékony vagy hulló haj esetén',
      'Akik fejbőr- és hajápolást együtt szeretnének',
      'Prémium szalonélményt kereső vendégek',
    ],
    process: [
      { step: '01', title: 'Fejbőrdiagnosztika', desc: 'Fejbőrdiagnosztika és hajnövesztő terápia.' },
      { step: '02', title: 'Professzionális hajmosás', desc: 'Prémium samponnal és előkészítő ápolással.' },
      { step: '03', title: 'Hajszerkezet-újító kezelés', desc: 'Mélyreható regenerálás a haj belső szerkezetének erősítésére.' },
      { step: '04', title: 'Szárítás és frissítő vágás', desc: 'Frissítő vágás és professzionális szárítás.' },
      { step: '05', title: 'SteamPod formázás', desc: 'Formázás és L’Oréal SteamPod kezelés.' },
    ],
    benefits: [
      'Serkentheti a fejbőr vérkeringését',
      'Támogathatja a hajhagymák működését',
      'Segítheti a hatóanyagok felszívódását',
      'Hozzájárulhat egészségesebb, erősebb hajnövekedéshez',
      'Kellemes, relaxáló élményt biztosít',
    ],
    pricingNotes: [
      'Személyre szabott árajánlat konzultáció után.',
      'Az árak forintban értendők.',
    ],
    consultation:
      'Foglaljon időpontot a komplex kezelésre — konzultáció során felmérjük az igényeit és személyre szabott ajánlatot készítünk.',
  },
]

export function getServiceBySlug(slug) {
  const aliases = {
    hajpotlas: 'hajnovestes-komplex',
    apolas: 'fodraszat',
    tanacsadas: 'hajnovestes',
  }
  const normalized = aliases[slug] || slug
  return SERVICES.find((s) => s.slug === normalized)
}

export const GALLERY = [
  { id: 1, beforeImage: '/photos/before10.jpg', afterImage: '/photos/after10.jpg' },
  { id: 2, beforeImage: '/photos/before11.jpg', afterImage: '/photos/after11.jpg' },
  { id: 3, beforeImage: '/photos/before12.jpg', afterImage: '/photos/after12.jpg' },
]

export const WHY = [
  { title: 'Személyes figyelem', desc: 'Minden vendég egyedi konzultációval kezdődik — nincs sablon megoldás.' },
  { title: 'Prémium anyagok', desc: 'Csak megbízható, professzionális minőségű termékekkel dolgozom.' },
  { title: 'Természetes eredmény', desc: 'A cél mindig harmonikus, élő megjelenés — nem mesterséges hatás.' },
  { title: 'Diszkrét, nyugodt környezet', desc: 'Intim szalonhangulat, ahol nyugodtan kikapcsolódhatsz.' },
]

export const PRODUCTS = [
  { name: 'Regeneráló pakolás', price: '12 900 Ft', tag: 'Bestseller' },
  { name: 'Hidratáló sampon & balzsam szett', price: '9 800 Ft', tag: null },
  { name: 'Hajolaj — finom fény', price: '7 500 Ft', tag: 'Új' },
  { name: 'Otthoni ápoló rutin csomag', price: '24 500 Ft', tag: 'Szett' },
]

export const TESTIMONIALS = [
  { name: 'Anna K.', text: 'Végre valaki, aki tényleg meghallgat, és nem csak „csinál valamit”. A hajam sokkal egészségesebbnek tűnik.' },
  { name: 'Eszter M.', text: 'A hajépítés természetesen illeszkedik — senki nem veszi észre, csak azt kérdezik, milyen szép a hajam.' },
  { name: 'Viktória L.', text: 'Professzionális, mégis meleg hangulat. A termékek otthon is kiválóan működnek.' },
]

export const ABOUT = {
  name: 'Polgár Hajnalka',
  role: 'Luxury Angels Salon alapítója & vezető stylist',
  intro:
    'Több mint egy évtizede segítek vendégeimnek abban, hogy a hajuk tükrözze az önbizalmukat — természetesen, elegánsan és tartósan.',
  story:
    'A Luxury Angels Salon mögött személyes elkötelezettség áll: minden vendég története más, minden kezelés gondosan megtervezett. Hajhosszabításban, hajpótlásban és prémium ápolásban specializálódtam — a cél mindig az, hogy a végeredmény élő, finom és harmonikus legyen.',
  expertise: [
    'Hajhosszabbítás nanogyűrűvel',
    'Prémium póthaj és tincsezés',
    'Fodrászat, festés és hajápolás',
    'Hajnövesztő és hajszerkezet-újító kezelések',
  ],
}

export const SALON_EXPERIENCE = [
  {
    number: '01',
    title: 'Prémium környezet',
    desc: 'Intim, nyugodt szalon Budapest XVIII. kerületében — ahol a figyelem teljes mértékben Önre irányul.',
  },
  {
    number: '02',
    title: 'Személyes konzultáció',
    desc: 'Minden látogatás ingyenes első konzultációval kezdődik: meghallgatjuk az elképzeléseit, és közösen tervezzük meg az utat.',
  },
  {
    number: '03',
    title: 'Exkluzív szolgáltatás',
    desc: 'Nincs rohanás, nincs sablon — csak gondos kivitelezés, prémium anyagok és tartós, természetes eredmény.',
  },
  {
    number: '04',
    title: 'Folyamatos támogatás',
    desc: 'Otthoni ápolási rutin, termékajánlás és utókövetés — hogy a szalonélmény otthon is fennmaradjon.',
  },
]

export const TRUST_STATS = [
  { value: '15+', label: 'Év szakmai tapasztalat' },
  { value: '500+', label: 'Elégedett vendég' },
  { value: '100%', label: 'Prémium minőségű anyagok' },
  { value: '4.9', label: 'Átlagos vendégértékelés' },
]

export const TRUST_BADGES = [
  { title: 'Professzionális minősítés', desc: 'Tanúsítvány / oklevél helye' },
  { title: 'Nemzetközi továbbképzés', desc: 'Díj / elismerés helye' },
  { title: 'Prémium partnerség', desc: 'Márka együttműködés helye' },
]

export const BOOKING_STEPS = [
  { step: '01', title: 'Kapcsolatfelvétel', desc: 'Írjon vagy hívjon — rövid üzenet elegendő a kezdéshez.' },
  { step: '02', title: 'Személyes konzultáció', desc: 'Ingyenes első találkozó: célok, hajállapot, lehetőségek.' },
  { step: '03', title: 'Egyedi kezelési terv', desc: 'Személyre szabott javaslat, időpont és átlátható tájékoztatás.' },
]
