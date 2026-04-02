import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "tr";

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function useI18n() {
  return useContext(I18nContext);
}

// All Turkish chars replaced with ASCII equivalents per Config Variable font rules
const translations: Record<string, Record<Lang, string>> = {
  // Navigation
  "nav.home": { en: "HOME", tr: "ANASAYFA" },
  "nav.rules": { en: "RULES", tr: "KURALLAR" },
  "nav.journey": { en: "JOURNEY", tr: "YOLCULUK" },
  "nav.schedule": { en: "SCHEDULE", tr: "PROGRAM" },
  "nav.about": { en: "ABOUT", tr: "HAKKINDA" },

  // Home Page
  "home.registration": { en: "REGISTRATION!", tr: "KAYIT!" },
  "home.registration_label": { en: "REGISTRATION", tr: "KAYIT" },
  "home.location_label": { en: "LOCATION: SEHIT SUAT CELIK GENCLIK MERKEZI", tr: "MEKAN: SEHIT SUAT CELIK GENCLIK MERKEZI" },

  // Rules Page - Tab Names
  "rules.general": { en: "GENERAL\nRULES", tr: "GENEL\nKURALLAR" },
  "rules.longsword": { en: "LONGSWORD", tr: "UZUN KILIC" },
  "rules.rapier": { en: "RAPIER", tr: "EPE" },
  "rules.eastern_saber": { en: "EASTERN\nSABER", tr: "TURK\nKILICI" },
  "rules.military_saber": { en: "MILITARY\nSABER", tr: "SABRE" },
  "rules.general_title": { en: "GENERAL RULES", tr: "GENEL KURALLAR" },
  "rules.eastern_saber_title": { en: "EASTERN SABER", tr: "TURK KILICI" },
  "rules.military_saber_title": { en: "MILITARY SABER", tr: "SABRE" },

  // Rules - General Rules Content
  "rules.key_rules_title": { en: "Key Rules:", tr: "Temel Kurallar:" },
  "rules.key_rules": {
    en: "Fencers that can provide a hit without getting hit are rewarded → for this reason double hits and after-blows are scored the same, although they are in different tempos.",
    tr: "Vurus almadan vurus yapabilen eskrimciler odullendirilir → bu nedenle cift vuruslar ve sonraki vuruslar farkli tempolarda olsa da ayni sekilde puanlanir."
  },
  "rules.every_score": { en: "Every score zone counts", tr: "Her puan bolgesi" },
  "rules.1_point": { en: "1 point", tr: "1 puan" },
  "rules.every_match": { en: "Every match goes for", tr: "Her mac" },
  "rules.5_points": { en: "5 points", tr: "5 puan" },
  "rules.or": { en: "or", tr: "veya" },
  "rules.6_minutes": { en: "6 minutes", tr: "6 dakika" },
  "rules.semi_finals": {
    en: "In the semi finals and finals goes for",
    tr: "Yari finallerde ve finallerde"
  },
  "rules.7_points": { en: "7 points", tr: "7 puan" },
  "rules.12_minutes": { en: "12 minute", tr: "12 dakika" },
  "rules.with_break": { en: "with half a minute break.", tr: "yarim dakika arayla oynanir." },
  "rules.docs_title": { en: "Documents & Links", tr: "Belgeler & Baglantilar" },
  "rules.rules_en": { en: "Meet'n Beat 2026 Rules (EN)", tr: "Meet'n Beat 2026 Rules (EN)" },
  "rules.rules_tr": { en: "Meet'n Beat 2026 Kurallari (TR)", tr: "Meet'n Beat 2026 Kurallari (TR)" },
  "rules.coc_en": { en: "Code of Conduct (EN)", tr: "Code of Conduct (EN)" },
  "rules.coc_tr": { en: "Davranis Kurallari (TR)", tr: "Davranis Kurallari (TR)" },

  // Rules - Weapon specifics
  "rules.special_rule": { en: "Special Rule", tr: "Ozel Kural" },
  "rules.weapon_specs": { en: "Weapon Specifications:", tr: "Silah Ozellikleri:" },
  "rules.guard_label": { en: "Guard:", tr: "Koruma:" },
  "rules.actions_label": { en: "Actions (right of way):", tr: "Aksiyonlar (gecis hakki):" },
  "rules.tipped_label": { en: "Tipped:", tr: "Uclu:" },
  "rules.flexibility_label": { en: "Flexibility:", tr: "Esneklik:" },
  "rules.protection_label": { en: "Protection Gear:", tr: "Koruyucu Ekipman:" },

  // Longsword rules
  "rules.longsword.special": {
    en: "No after-blow after strike to the head! Flat hit to the head cut as valid score.",
    tr: "Basa yapilan vurustan sonra karsi vurus yok! Basa yapilan yassı vurus gecerli puan sayilir."
  },
  "rules.longsword.specs": {
    en: "Weight: 1350-1550 g\nBalance point approx. 5-10 cm (+- 1 cm tolerance) ahead of the start of the blade/guard.\nBlade length/Total length: maximum 102 cm/ maximum 145 cm",
    tr: "Agirlik: 1350-1550 g\nDenge noktasi yaklasik 5-10 cm (+- 1 cm tolerans) namlu/koruma baslangicinin onunde.\nNamlu uzunlugu/Toplam uzunluk: maksimum 102 cm/ maksimum 145 cm"
  },
  "rules.longsword.tipped": {
    en: "Swords must be tipped unless tip has a surface area of 50 mm\u00B2.",
    tr: "Kiliclarin ucu 50 mm\u00B2 yuzey alanina sahip degilse uclu olmalidir."
  },
  "rules.longsword.protection": {
    en: "350 N jacket and Mask, back head protection and gorget is required. Hand protection is hardcover and softcover mitten or hoof shells. Single finger gloves can only be accepted under special occasions (no red dragon gloves and comparable protection). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.",
    tr: "350 N ceket ve Maske, arka kafa korumasi ve bogaz korumasi gereklidir. El korumasi sert kapakli ve yumusak kapakli eldiven veya toynak kabuklarindan olusur. Tek parmak eldivenler sadece ozel durumlarda kabul edilir (red dragon eldivenleri ve benzer korumalar kabul edilmez). Dirsek ve diz sert kabukla kapli olmalidir. Baldirlik ve kasik korumasi zorunludur."
  },
  "rules.longsword.flexibility": {
    en: "Blade flexibility should 16 kg according to franklin method",
    tr: "Namlu esnekligi franklin yontemine gore 16 kg olmalidir"
  },

  // Rapier rules
  "rules.rapier.special": {
    en: "Thrust has right of way.",
    tr: "Batirmanin gecis hakki vardir."
  },
  "rules.rapier.specs": {
    en: "The rapier must have a blade length between 98 cm and 127 cm from the hilt to the point.\nThe total length of the rapier must not exceed 140 cm.\nThe weight of the rapier must lay between 800 and 1600 g\nThe blade must bend at 6 kg.",
    tr: "Rapierin namlu uzunlugu kabzadan uca 98 cm ile 127 cm arasinda olmalidir.\nRapierin toplam uzunlugu 140 cm'yi gecmemelidir.\nRapierin agirligi 800 ile 1600 g arasinda olmalidir.\nNamlu 6 kg'da bukulmeli."
  },
  "rules.rapier.actions": {
    en: "Right of way:\n\u25AA Thrust, after blow cut \u2192 1 point for thrust\n\u25AA Cut, after blow thrust \u2192 1 point for thrust",
    tr: "Gecis hakki:\n\u25AA Batirma, sonraki vurus kesme \u2192 batirma icin 1 puan\n\u25AA Kesme, sonraki vurus batirma \u2192 batirma icin 1 puan"
  },
  "rules.rapier.protection": {
    en: "350 N jacket and Mask, Gorget, back head protection is required. Hand protection is single finger gloves (Both hands). Elbow and knee must be covered in hard shell. Shin guard is obligatory.",
    tr: "350 N ceket ve Maske, Bogaz korumasi, arka kafa korumasi gereklidir. El korumasi tek parmak eldivenlerdir (Her iki el). Dirsek ve diz sert kabukla kapli olmalidir. Baldirlik zorunludur."
  },

  // Eastern Saber rules
  "rules.eastern.special": {
    en: "No after after-blows after strike to the sword arm.",
    tr: "Kilic koluna yapilan vurustan sonra karsi vurus yok."
  },
  "rules.eastern.specs": {
    en: "Weight: max. 850 grams\nBalance point: between 15 - 20 cm ahead of the start of the blade/guard.\nLength of the blade: max 85 cm",
    tr: "Agirlik: maks. 850 gram\nDenge noktasi: namlu/koruma baslangicinin 15 - 20 cm onunde.\nNamlu uzunlugu: maks 85 cm"
  },
  "rules.eastern.guard": {
    en: "Cross guard, knuckle guard, disc guard (No cup guard or Military sabre guard)",
    tr: "Carpraz koruma, parmak korumasi, disk korumasi (Kupa korumasi veya Askeri kilic korumasi yok)"
  },
  "rules.eastern.protection": {
    en: "350 N jacket and Mask, back head protection and gorget is required. Hand protection is hardcover and softcover mitten or hoof shells. Single finger gloves can only be accepted under special occasions (including Red Dragon Glove like protection). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.",
    tr: "350 N ceket ve Maske, arka kafa korumasi ve bogaz korumasi gereklidir. El korumasi sert kapakli ve yumusak kapakli eldiven veya toynak kabuklarindan olusur. Tek parmak eldivenler sadece ozel durumlarda kabul edilir (Red Dragon Eldiveni benzeri korumalar dahil). Dirsek ve diz sert kabukla kapli olmalidir. Baldirlik ve kasik korumasi zorunludur."
  },

  // Military Saber rules
  "rules.military.specs": {
    en: "Weight 650 \u2013 850g\nBalance point below 12 cm ahead of the start of the blade/guard.\nTotal Length: 110 cm\nBlade length: 90 cm",
    tr: "Agirlik 650 \u2013 850g\nDenge noktasi namlu/koruma baslangicinin 12 cm altinda.\nToplam Uzunluk: 110 cm\nNamlu uzunlugu: 90 cm"
  },
  "rules.military.guard": {
    en: "Cup guard or Military sabre guard",
    tr: "Kupa korumasi veya Askeri kilic korumasi"
  },
  "rules.military.tipped": {
    en: "Swords must be tipped unless tip has a surface area of 20 mm\u00B2.",
    tr: "Kiliclarin ucu 20 mm\u00B2 yuzey alanina sahip degilse uclu olmalidir."
  },
  "rules.military.protection": {
    en: "350 N jacket and Mask, back head protection and gorget is required. Hand protection is single finger gloves (Both hands). Elbow and knee must be covered in hard shell. Shin guard and groin protection is obligatory.",
    tr: "350 N ceket ve Maske, arka kafa korumasi ve bogaz korumasi gereklidir. El korumasi tek parmak eldivenlerdir (Her iki el). Dirsek ve diz sert kabukla kapli olmalidir. Baldirlik ve kasik korumasi zorunludur."
  },
  "rules.military.flexibility": {
    en: "Blade flexibility should 12 kg according to franklin method",
    tr: "Namlu esnekligi franklin yontemine gore 12 kg olmalidir"
  },

  // Journey - Tab Names
  "journey.how_to_go": { en: "HOW TO GO?", tr: "NASIL GIDILIR?" },
  "journey.location": { en: "LOCATION", tr: "KONUM" },
  "journey.accommodation": { en: "ACCOMMODATION", tr: "KONAKLAMA" },

  // Journey - How to Go
  "journey.option1_title": { en: "Option 1: The High-Speed Train (Recommended)", tr: "Secenek 1: Yuksek Hizli Tren (Onerilen)" },
  "journey.option1_desc": { en: "The Yuksek Hizli Tren (YHT) is the fastest and most comfortable way to travel.", tr: "Yuksek Hizli Tren (YHT) seyahat etmenin en hizli ve en konforlu yoludur." },
  "journey.option1_departure": { en: "Departure Stations: Sogutlucesme or Pendik (Istanbul Asian Side).", tr: "Kalkis Istasyonlari: Sogutlucesme veya Pendik (Istanbul Anadolu Yakasi)." },
  "journey.option1_duration": { en: "Duration: Approximately 3 hours.", tr: "Sure: Yaklasik 3 saat." },
  "journey.option1_airport": { en: "How to get there from Istanbul Airport (IST): Take the Havaist Shuttle Bus or a taxi to Sogutlucesme Station.", tr: "Istanbul Havalimani'ndan (IST) nasil gidilir: Havaist Otobusu veya taksi ile Sogutlucesme Istasyonu'na ulasin." },
  "journey.option1_tickets_pre": { en: "Tickets: You can book online via the ", tr: "Biletler: Online olarak " },
  "journey.option1_tickets_link": { en: "Turkish State Railways (TCDD) Website", tr: "Turkiye Cumhuriyeti Devlet Demiryollari (TCDD) Web Sitesi" },
  "journey.option1_note": { en: "Note: We recommend booking 1\u20132 weeks in advance as tickets sell out quickly!", tr: "Not: Biletler hizla tukendigi icin 1-2 hafta onceden rezervasyon yapmanizi oneririz!" },

  "journey.option2_title": { en: "Option 2: Private Car / Taxi", tr: "Secenek 2: Ozel Arac / Taksi" },
  "journey.option2_desc": { en: "If you prefer a direct door-to-door route, driving takes about 3.5 to 4 hours (approx. 300 km).", tr: "Kapidan kapiya direkt bir rota tercih ediyorsaniz, surmek yaklasik 3,5 ila 4 saat surer (yaklasik 300 km)." },
  "journey.option2_route": { en: "Route: Follow the O-4 and D650 highways via Kocaeli and Bilecik.", tr: "Rota: Kocaeli ve Bilecik uzerinden O-4 ve D650 otoyollarini takip edin." },
  "journey.option2_maps_pre": { en: "Google Maps Link: ", tr: "Google Maps Linki: " },
  "journey.option2_maps_link": { en: "Navigate to the Venue", tr: "Mekana Yol Tarifi" },

  "journey.option3_title": { en: "Option 3: Intercity Bus", tr: "Secenek 3: Sehirlerarasi Otobus" },
  "journey.option3_desc": { en: "Buses run 24/7 from the Istanbul Main Bus Terminal (Otogar).", tr: "Otobusler Istanbul Ana Otogar'dan 7/24 kalkis yapar." },
  "journey.option3_duration": { en: "Duration: 5\u20136 hours.", tr: "Sure: 5-6 saat." },
  "journey.option3_companies": { en: "Companies: Pamukkale, Kamil Koc, and Metro are reliable options.", tr: "Firmalar: Pamukkale, Kamil Koc ve Metro guvenilir seceneklerdir." },
  "journey.option3_booking_pre": { en: "Booking: You can check schedules on ", tr: "Rezervasyon: Seferleri " },
  "journey.option3_booking_link": { en: "Obilet", tr: "Obilet" },

  // Journey - Location
  "journey.getting_title": { en: "Getting to the Tournament", tr: "Turnuvaya Ulasim" },
  "journey.getting_desc": { en: "Welcome to Turkey! Whether you are flying into Istanbul or traveling locally, here is everything you need to know to reach the Eskisehir Sehit Suat Celik Genclik Merkezi.", tr: "Turkiye'ye hos geldiniz! Istanbul'a ucuyorsaniz veya yerel olarak seyahat ediyorsaniz, Eskisehir Sehit Suat Celik Genclik Merkezi'ne ulasmak icin bilmeniz gereken her sey burada." },
  "journey.venue_title": { en: "Venue Location", tr: "Mekan Konumu" },
  "journey.venue_address": { en: "Eskisehir Sehit Suat Celik Genclik Merkezi Gundogdu, 26080 Odunpazari/Eskisehir", tr: "Eskisehir Sehit Suat Celik Genclik Merkezi Gundogdu, 26080 Odunpazari/Eskisehir" },
  "journey.venue_maps": { en: "Click here for the Google Maps Location", tr: "Google Maps Konumu icin tiklayiniz" },
  "journey.protips_title": { en: "Pro-Tips for International Travelers:", tr: "Uluslararasi Gezginler Icin Ipuclari:" },
  "journey.protip_currency": { en: "Currency: While cards are widely accepted, keep some Turkish Lira (TRY) for small snacks or local transport.", tr: "Para Birimi: Kartlar yaygin olarak kabul edilse de, kucuk atistirmaliklar veya yerel ulasim icin biraz Turk Lirasi (TRY) bulundurun." },
  "journey.protip_transport": { en: "Local Transport: In Eskisehir, use the \"Estram\" (Tram) or taxis\u2014they are very affordable compared to Europe/US.", tr: "Yerel Ulasim: Eskisehir'de \"Estram\" (Tramvay) veya taksi kullanin\u2014Avrupa/ABD'ye kiyasla cok uygun fiyatlidir." },
  "journey.protip_gear": { en: "Gear: If you are traveling with swords, ensure they are in a locked hard case and check your airline's sporting equipment policy!", tr: "Ekipman: Kiliclarla seyahat ediyorsaniz, kilitli sert bir kutuda olduklarindan emin olun ve havayolu sirketinizin spor ekipmani politikasini kontrol edin!" },

  // Journey - Accommodation
  "journey.accom_title": { en: "Accommodation Options", tr: "Konaklama Secenekleri" },
  "journey.accom_desc": { en: "We recommend the following hotels as listed below. All hotels offer bed and breakfast. Book early to secure your spot!", tr: "Asagida listelenen otelleri oneriyoruz. Tum oteller yatak ve kahvalti sunmaktadir. Yerinizi garantilemek icin erken rezervasyon yapin!" },
  "journey.hotel_visit": { en: "Visit Hotel Website \u2192", tr: "Otel Web Sitesini Ziyaret Edin \u2192" },

  "journey.hotel_grand_arte": { en: "Grand Arte Hotel", tr: "Grand Arte Hotel" },
  "journey.hotel_grand_arte_desc": { en: "In the center, best price performance \u00B7 13\u201314 June \u00B7 Bed & Breakfast \u00B7 20 people", tr: "Merkezde, en iyi fiyat performansi \u00B7 13-14 Haziran \u00B7 Yatak & Kahvalti \u00B7 20 kisi" },
  "journey.hotel_smart": { en: "Smart by Point", tr: "Smart by Point" },
  "journey.hotel_smart_desc": { en: "Close to the venue \u00B7 13\u201314 June", tr: "Mekana yakin \u00B7 13-14 Haziran" },
  "journey.hotel_nova": { en: "Nova Vista Deluxe Radisson", tr: "Nova Vista Deluxe Radisson" },
  "journey.hotel_nova_desc": { en: "Close to the venue \u00B7 13\u201314 June \u00B7 Bed & Breakfast \u00B7 20 people", tr: "Mekana yakin \u00B7 13-14 Haziran \u00B7 Yatak & Kahvalti \u00B7 20 kisi" },
  "journey.hotel_leto": { en: "Leto City Visnelik", tr: "Leto City Visnelik" },
  "journey.hotel_leto_desc": { en: "Hotel of the after party \u00B7 13\u201314 June \u00B7 Bed & Breakfast \u00B7 20 people", tr: "After party oteli \u00B7 13-14 Haziran \u00B7 Yatak & Kahvalti \u00B7 20 kisi" },

  // Schedule - Tab Names
  "schedule.day1": { en: "DAY 1", tr: "GUN 1" },
  "schedule.day2": { en: "DAY 2", tr: "GUN 2" },
  "schedule.workshop": { en: "WORKSHOP", tr: "ATOLYE" },
  "schedule.day1_date": { en: "13 JUNE SATURDAY", tr: "13 HAZIRAN CUMARTESI" },
  "schedule.day2_date": { en: "14 JUNE SUNDAY", tr: "14 HAZIRAN PAZAR" },
  "schedule.detailed": { en: "Detailed schudule is coming after closing of registration.", tr: "Detayli program kayitlarin kapanmasindan sonra gelecektir." },

  // Schedule - Workshop
  "schedule.workshop_title_label": { en: "Title:", tr: "Baslik:" },
  "schedule.workshop_title": { en: " Implementation of Fencing Actions with Heavy Sabre ", tr: " Agir Kilic ile Eskrim Aksiyonlarinin Uygulanmasi " },
  "schedule.workshop_info_label": { en: "Info:", tr: "Bilgi:" },
  "schedule.workshop_info": {
    en: " The heavy sabre plays a key role in dueling. Cavalary battles often consist of sequences of duels, which inform tactics that can also be adapted for foot combat. This class includes exercises derived from tactics that can also be adapted for foot combat. This class includes exercises derived from sources spanning the 127th to 19th centuries, designed for implementing cavalry sabre tactics in dueling scenarios. ",
    tr: " Agir kilic duelloda onemli bir rol oynar. Suvari savaslari genellikle duello serilerinden olusur ve bu taktikler yaya savasi icin de uyarlanabilir. Bu ders, yaya savasi icin de uyarlanabilecek taktiklerden turetilmis alistirmalar icerir. Bu ders, 17. ve 19. yuzyillar arasindaki kaynaklardan turetilmis, suvari kilic taktiklerini duello senaryolarinda uygulamak icin tasarlanmis alistirmalar icerir. "
  },
  "schedule.workshop_content_label": { en: "Content", tr: "Icerik" },
  "schedule.workshop_content": { en: ": Basic 1-on-1 exercises. ", tr: ": Temel 1'e 1 alistirmalar. " },
  "schedule.workshop_level_label": { en: "Level", tr: "Seviye" },
  "schedule.workshop_level": { en: ": 3 ", tr: ": 3 " },
  "schedule.workshop_equipment_label": { en: "Equipment:", tr: "Ekipman:" },
  "schedule.workshop_equipment": { en: " Mask, fencing jacket, gloves and own sabres recommended ", tr: " Maske, eskrim ceketi, eldivenler ve kendi kiliclariniz onerilir " },
  "schedule.workshop_bio": {
    en: "Jerzy Miklaszewski is a seasoned Historical European Martial Arts (HEMA) instructor with over 15 years of teaching experience. His journey in martial arts began over 30 years ago with Taekwon-Do ITF under Marek Lech, a pioneer in Poland. He later trained in Wing Chun Kung Fu and Japanese martial arts at the Bujutsu Kan school in Krakow.  \n\nDiscovering HEMA marked a turning point, leading to tournament successes and the founding of Silkfencing, a school combining historical research with modern training techniques, focused on Polish saber fencing.  \n\nIn 2017, with Jakub Zabierowski, he co-founded Krakowska Szkola Fechtunku, Poland's first professional HEMA center, fostering European martial arts practice and research. \n\nFor over a decade, Jerzy has produced high-quality training sabers, now used in many countries. He co-organized an exhibition on European and Polish saber traditions with the Jagiellonian University Museum, showcasing their cultural importance. \n\nJerzy has led workshops in 25 countries, including the United States, Australia, Thailand, Japan, and others. In 2014, as part of the Polish Knight cadre, he placed second at the IMCF World Championships in Spain. Today, he focuses on producing training equipment and promoting HEMA globally.",
    tr: "Jerzy Miklaszewski, 15 yildan fazla ogretmenlik deneyimine sahip tecrubeli bir Tarihi Avrupa Donus Sanatlari (HEMA) egitmenidir. Dovus sanatlari yolculugu 30 yildan fazla once Polonya'nin oncusu Marek Lech yonetiminde Taekwon-Do ITF ile basladi. Daha sonra Krakow'daki Bujutsu Kan okulunda Wing Chun Kung Fu ve Japon dovus sanatlari egitimi aldi.  \n\nHEMA'yi kesfetmesi bir donum noktasi oldu, turnuva basarilarina ve tarihi arastirmayi modern egitim teknikleriyle birlestiren, Polonya kilic eskimine odaklanan Silkfencing okulunun kurulmasina yol acti.  \n\n2017'de Jakub Zabierowski ile birlikte Polonya'nin ilk profesyonel HEMA merkezi olan Krakowska Szkola Fechtunku'yu kurdu, Avrupa dovus sanatlari pratibi ve arastirmasini destekledi. \n\nOn yildan fazla suredir Jerzy, simdi bircok ulkede kullanilan yuksek kaliteli egitim kiliclari uretiyor. Jagiellonian Universitesi Muzesi ile Avrupa ve Polonya kilic gelenekleri uzerine bir sergi duzenledi, kulturel onemlerini sergiledi. \n\nJerzy, ABD, Avustralya, Tayland, Japonya ve diger ulkeler dahil 25 ulkede atolyeler yonetti. 2014'te Polonya Sovalye kadrosunun parcasi olarak Ispanya'daki IMCF Dunya Sampiyonasi'nda ikinci oldu. Bugun egitim ekipmani uretmeye ve HEMA'yi kuresel olarak tanitmaya odaklaniyor."
  },

  // About - Tab Names
  "about.meet_n_beat": { en: "MEET'N BEAT", tr: "MEET'N BEAT" },
  "about.eskisehir": { en: "ESKISEHIR", tr: "ESKISEHIR" },
  "about.sponsors": { en: "SPONSORS", tr: "SPONSORLAR" },
  "about.contact": { en: "CONTACT", tr: "ILETISIM" },

  // About - Meet'n Beat content
  "about.mnb_content": {
    en: `In 2019 we had our first Meet'n Beat, at that time it was just a workshop with with Jerzy Miklaszewski and Ingulf Kohlweiss-Popp as instructors.  
It was at that time a small and familier event where we joined with great joy the lessons and spars with Ingulf and Jerzy. 
After that the community in Turkiye got struck by COVID and had to reshape again after the pandemie. 
In 2024 the Meet 'n Beat got a revival and turned into a tournament next to other national and international events. At that time Longsword and Eastern saber were the categories of the tournament which got a very positive feedback.  
In 2025 the Meet'n Beat has turned into the biggest national event in Turkiye with  4 categories (Longsword, Eastern Saber, Military Saber and Rapier) and a lot of positive vibes.  
This year in 2026 we open the Meet'n Beat the first time for an international Community and hope that we can create the same positive vibe that we have experienced in the past. 
We are very happy, that our friend Jerzy is coming again and is willing to hold another workshop and sponsor this event to close the circle.  
 
We are therefore happy to welcome you in our City,  Eskisehir 
 
Your organization team from Eskisehir Hema `,
    tr: `2019'da ilk Meet'n Beat'imizi duzenlendik, o zamanlar sadece Jerzy Miklaszewski ve Ingulf Kohlweiss-Popp'un egitmen oldugu bir atolyeydi.  
O donemde derslere ve Ingulf ve Jerzy ile yapilan sparinglere buyuk bir zevkle katildigimiz kucuk ve samimi bir etkinlikti. 
Bundan sonra Turkiye'deki topluluk COVID tarafindan vuruldu ve pandemi sonrasinda yeniden sekillenmek zorunda kaldi. 
2024'te Meet'n Beat yeniden canlanarak diger ulusal ve uluslararasi etkinliklerin yaninda bir turnuvaya donustu. O donemde Longsword ve Dogu Kilici turnuvanin kategorileriydi ve cok olumlu geri bildirimler aldi.  
2025'te Meet'n Beat, 4 kategori (Longsword, Dogu Kilici, Askeri Kilic ve Rapier) ile Turkiye'deki en buyuk ulusal etkinlige donustu ve cok pozitif bir enerji yasandi.  
Bu yil 2026'da Meet'n Beat'i ilk kez uluslararasi bir topluluga aciyoruz ve gecmiste yasadigimiz ayni pozitif enerjiyi yaratabilmeyi umuyoruz. 
Arkadasimiz Jerzy'nin tekrar gelmesinden ve baska bir atolye duzenleyip bu etkinlige sponsor olarak daireyi kapatmasindan cok mutluyuz.  
 
Bu nedenle sizi sehrimiz Eskisehir'de agirlamaktan mutluluk duyuyoruz 
 
Eskisehir Hema organizasyon ekibiniz `
  },

  // About - Eskisehir content
  "about.eskisehir_content": {
    en: `Discover the enchanting charm of Eskisehir, often called the "Venice of the East" for its picturesque canals and vibrant riverside life. Wander through the colorful Ottoman streets of Odunpazari or escape into a fairytale at the stunning Sazova Park. As Turkey's premier student city, it pulses with a youthful energy, offering trendy cafes, world-class museums, and a safe, welcoming atmosphere. Indulge in the authentic taste of Ciborek and explore the unique artistry of Meerschaum carvings found nowhere else on earth. Perfectly connected by high-speed train, Eskisehir is the ultimate modern destination where rich history meets a dynamic future.`,
    tr: `Pitoresk kanallari ve canli nehir kenarindaki yasamiyla "Dogu'nun Venedigi" olarak adlandirilan Eskisehir'in buguleyici cazibesini kesfedin. Odunpazari'nin renkli Osmanli sokaklarinda gezin veya muhtesem Sazova Parki'nda bir masala kacin. Turkiye'nin en onemli ogrenci sehri olarak, genc bir enerjiyle atiyor, trend kafeleri, dunya standartlarinda muzeleri ve guvenli, misafirperver bir atmosfer sunuyor. Ciborek'in otantik tadinin keyfini cikarin ve dunyada baska hicbir yerde bulunamayan Luletasi oymaciligin essiz sanatini kesfedin. Yuksek hizli trenle mukemmel baglantili olan Eskisehir, zengin tarihin dinamik bir gelecekle bulustubu nihai modern destinasyondur.`
  },

  // About - Contact
  "about.contact_label": { en: "contact: ", tr: "iletisim: " },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry["en"] || key;
  };

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
}