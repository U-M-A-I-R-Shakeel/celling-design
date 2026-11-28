/* ==========================================================
   BUSINESS DETAILS — edit these, then run:  node _src/build.js
   Every page (Arabic + English) is rebuilt from this file and content.js.
   ========================================================== */
const L = (ar, en) => ({ ar, en });

module.exports = {
  defaultLang: "ar",                       // "ar" pages live at the site root, the other language in /en/
  name: L("سيل كرافت للجبس بورد", "CeilCraft Gypsum Board"),
  short: L("سيل كرافت", "CeilCraft"),
  phone: "+965 0000 0000",                 // PLACEHOLDER Kuwait number (8 digits) — shown on buttons, used for tel: links
  phoneShort: "0000 0000",
  whatsapp: "96500000000",                 // international format, no + or spaces (965 + 8 digits)
  email: "hello@ceilcraft.studio",         // PLACEHOLDER
  address: L("مدينة الكويت، دولة الكويت", "Kuwait City, Kuwait"),       // PLACEHOLDER — put the real street address here
  hours: L("يومياً من 9 صباحاً إلى 10 مساءً", "Daily, 9am – 10pm"),
  instagram: "",                           // e.g. "ceilcraft.kw" — shown on About / Works when filled in
  badges: [L("خبرة طويلة في الجبس بورد", "Years of gypsum experience"), L("عرض سعر مجاني خلال 24 ساعة", "Free quote within 24 hours")],
  socials: [
    { label: "TikTok", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X", href: "#" },
  ],

  /* Kuwait governorates: card text (home / areas page) + a detailed list for each governorate page */
  areas: [
    { slug: "area-capital", city: L("محافظة العاصمة", "Capital Governorate"), short: L("العاصمة", "Capital"),
      list: L("مدينة الكويت، الشرق، الدسمة، الشويخ، كيفان، الشامية، اليرموك، الروضة وما حولها.", "Kuwait City, Sharq, Dasma, Shuwaikh, Kaifan, Shamiya, Yarmouk, Rawda and nearby."),
      detail: [L("مدينة الكويت: الشرق، القبلة، المرقاب، الصالحية، الدسمة، بنيد القار.", "Kuwait City: Sharq, Qibla, Mirqab, Salhiya, Dasma, Bneid Al-Qar."),
        L("الشويخ، كيفان، الشامية، الروضة، العديلية، الفيحاء، المنصورية، النزهة، اليرموك.", "Shuwaikh, Kaifan, Shamiya, Rawda, Adailiya, Faiha, Mansouriya, Nuzha, Yarmouk."),
        L("ضاحية عبدالله السالم، القادسية، السرة، قرطبة، الدوحة، الصليبيخات ومناطق قريبة.", "Abdullah Al-Salem, Qadsiya, Surra, Qurtuba, Doha, Sulaibikhat and nearby.")] },
    { slug: "area-hawalli", city: L("محافظة حولي", "Hawalli Governorate"), short: L("حولي", "Hawalli"),
      list: L("السالمية، حولي، الجابرية، بيان، مشرف، سلوى، الرميثية ومناطق قريبة.", "Salmiya, Hawalli, Jabriya, Bayan, Mishref, Salwa, Rumaithiya and nearby."),
      detail: [L("السالمية، حولي، الشعب، الرميثية، البدع.", "Salmiya, Hawalli, Shaab, Rumaithiya, Bidaa."),
        L("الجابرية، بيان، مشرف، سلوى، مبارك العبدالله.", "Jabriya, Bayan, Mishref, Salwa, Mubarak Al-Abdullah."),
        L("الزهراء، الصديق، السلام، حطين، الشهداء ومناطق قريبة.", "Zahra, Siddiq, Salam, Hittin, Shuhada and nearby.")] },
    { slug: "area-farwaniya", city: L("محافظة الفروانية", "Farwaniya Governorate"), short: L("الفروانية", "Farwaniya"),
      list: L("الفروانية، خيطان، جليب الشيوخ، العارضية، الرابية، صباح الناصر وما جاورها.", "Farwaniya, Khaitan, Jleeb Al-Shuyoukh, Ardiya, Rabia, Sabah Al-Nasser and nearby."),
      detail: [L("الفروانية، خيطان، جليب الشيوخ، العارضية.", "Farwaniya, Khaitan, Jleeb Al-Shuyoukh, Ardiya."),
        L("الرابية، الرقعي، العمرية، الأندلس، الفردوس.", "Rabia, Riggae, Omariya, Andalus, Firdous."),
        L("صباح الناصر، الرحاب، إشبيلية، عبدالله المبارك ومناطق قريبة.", "Sabah Al-Nasser, Rehab, Ishbiliya, Abdullah Al-Mubarak and nearby.")] },
    { slug: "area-jahra", city: L("محافظة الجهراء", "Jahra Governorate"), short: L("الجهراء", "Jahra"),
      list: L("الجهراء، العيون، النسيم، القصر، سعد العبدالله، تيماء ومناطق قريبة.", "Jahra, Oyoun, Naseem, Qasr, Saad Al-Abdullah, Taima and nearby."),
      detail: [L("الجهراء، القصر، الواحة، تيماء، النسيم.", "Jahra, Qasr, Waha, Taima, Naseem."),
        L("العيون، الصليبية، سعد العبدالله، أمغرة.", "Oyoun, Sulaibiya, Saad Al-Abdullah, Amghara."),
        L("كبد، العبدلي ومناطق شمال الكويت القريبة.", "Kabd, Abdali and nearby northern areas.")] },
    { slug: "area-ahmadi", city: L("محافظة الأحمدي", "Ahmadi Governorate"), short: L("الأحمدي", "Ahmadi"),
      list: L("الفحيحيل، المنقف، أبو حليفة، المهبولة، الصباحية، صباح الأحمد وغيرها.", "Fahaheel, Mangaf, Abu Halifa, Mahboula, Sabahiya, Sabah Al-Ahmad and more."),
      detail: [L("الفحيحيل، المنقف، العقيلة، المهبولة، أبو حليفة.", "Fahaheel, Mangaf, Egaila, Mahboula, Abu Halifa."),
        L("الفنطاس، الرقة، هدية، الصباحية، الأحمدي.", "Fintas, Riqqa, Hadiya, Sabahiya, Ahmadi."),
        L("صباح الأحمد، الخيران، الوفرة، جابر العلي، فهد الأحمد.", "Sabah Al-Ahmad, Khairan, Wafra, Jaber Al-Ali, Fahad Al-Ahmad.")] },
    { slug: "area-mubarak-al-kabeer", city: L("محافظة مبارك الكبير", "Mubarak Al-Kabeer Governorate"), short: L("مبارك الكبير", "Mubarak Al-Kabeer"),
      list: L("صباح السالم، القرين، العدان، المسيلة، أبو فطيرة، القصور وما حولها.", "Sabah Al-Salem, Qurain, Adan, Messila, Abu Fatira, Qusour and nearby."),
      detail: [L("صباح السالم، المسيلة، العدان، القرين.", "Sabah Al-Salem, Messila, Adan, Qurain."),
        L("القصور، أبو فطيرة، أبو الحصانية، الفنيطيس.", "Qusour, Abu Fatira, Abu Al-Hasaniya, Funaitees."),
        L("المسايل، صبحان ومناطق قريبة.", "Masayel, Sabhan and nearby.")] },
  ],

  /* SAMPLE reviews — replace with real client reviews before the public launch */
  reviews: [
    { text: L("شغل سقف الجبس في الصالة كان مرتب جداً، السقف مستقيم والإضاءة المخفية طلعت مثل ما طلبنا. التزموا بالموعد والتعامل محترم.", "The gypsum ceiling in our lounge came out very neat, perfectly level, and the cove lighting is exactly what we asked for. On time and very polite."),
      who: L("عميل في الجابرية – سقف جبس للصالة", "Client in Jabriya – lounge gypsum ceiling") },
    { text: L("عملوا قواطع جبس لتقسيم المكتب إلى غرف صغيرة. الشغل كان سريع ونظيف والقواطع ثابتة، ورجعنا نتعامل معهم في مشروع ثاني.", "They built gypsum partitions to split our office into small rooms. Fast, clean and solid work. We hired them again for a second project."),
      who: L("عميل في الشويخ – قواطع لمكتب", "Client in Shuwaikh – office partitions") },
    { text: L("جدار التلفزيون طلع أجمل من الصورة اللي أرسلناها، وعدّلوا بعض التفاصيل في الموقع حتى يناسب مساحة الغرفة.", "The TV wall turned out even better than the photo we sent, and they adjusted details on site to fit our room."),
      who: L("عميل في المنقف – ديكور جدار تلفزيون", "Client in Mangaf – TV wall decor") },
  ],
};
