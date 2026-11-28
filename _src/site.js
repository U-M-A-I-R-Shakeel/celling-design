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
  email: "hello@ceilcraft.studio",
  address: L("مدينة الكويت، دولة الكويت", "Kuwait City, Kuwait"),       // PLACEHOLDER — put the real street address here
  hours: L("يومياً من 9 صباحاً إلى 10 مساءً", "Daily, 9am – 10pm"),
  badges: [L("ضمان 10 سنوات", "10-year warranty"), L("عرض سعر مجاني خلال 24 ساعة", "Free quote within 24 hours")],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],

  /* Service areas — Kuwait governorates and some of the areas in each */
  areas: [
    { city: L("محافظة العاصمة", "Capital Governorate"), list: L("مدينة الكويت، الشرق، الدسمة، الشويخ، كيفان، الشامية، اليرموك، الروضة وما حولها.", "Kuwait City, Sharq, Dasma, Shuwaikh, Kaifan, Shamiya, Yarmouk, Rawda and nearby.") },
    { city: L("محافظة حولي", "Hawalli Governorate"), list: L("السالمية، حولي، الجابرية، بيان، مشرف، سلوى، الرميثية ومناطق قريبة.", "Salmiya, Hawalli, Jabriya, Bayan, Mishref, Salwa, Rumaithiya and nearby.") },
    { city: L("محافظة الفروانية", "Farwaniya Governorate"), list: L("الفروانية، خيطان، جليب الشيوخ، العارضية، الرابية، صباح الناصر وما جاورها.", "Farwaniya, Khaitan, Jleeb Al-Shuyoukh, Ardiya, Rabia, Sabah Al-Nasser and nearby.") },
    { city: L("محافظة الأحمدي", "Ahmadi Governorate"), list: L("الفحيحيل، المنقف، أبو حليفة، المهبولة، الصباحية، صباح الأحمد وغيرها.", "Fahaheel, Mangaf, Abu Halifa, Mahboula, Sabahiya, Sabah Al-Ahmad and more.") },
    { city: L("محافظة الجهراء", "Jahra Governorate"), list: L("الجهراء، العيون، النسيم، القصر، سعد العبدالله، تيماء ومناطق قريبة.", "Jahra, Oyoun, Naseem, Qasr, Saad Al-Abdullah, Taima and nearby.") },
    { city: L("محافظة مبارك الكبير", "Mubarak Al-Kabeer Governorate"), list: L("صباح السالم، القرين، العدان، المسيلة، أبو فطيرة، القصور وما حولها.", "Sabah Al-Salem, Qurain, Adan, Messila, Abu Fatira, Qusour and nearby.") },
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
