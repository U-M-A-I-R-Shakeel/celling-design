/* ==========================================================
   BUSINESS DETAILS — edit these, then run:  node _src/build.js
   Every page (Arabic + English) is rebuilt from this file and content.js.
   ========================================================== */
const L = (ar, en) => ({ ar, en });

module.exports = {
  defaultLang: "ar",                       // "ar" pages live at the site root, the other language in /en/
  name: L("سيل كرافت للجبس بورد", "CeilCraft Gypsum Board"),
  short: L("سيل كرافت", "CeilCraft"),
  phone: "+92 300 0000000",                // shown on buttons, used for tel: links
  phoneShort: "0300 0000000",
  whatsapp: "923000000000",                // international format, no + or spaces
  email: "hello@ceilcraft.studio",
  address: L("مين بوليفارد، جلبرج، لاهور", "Main Boulevard, Gulberg, Lahore"),
  hours: L("من 9 صباحاً إلى 9 مساءً، من السبت إلى الخميس", "9am – 9pm, Saturday to Thursday"),
  badges: [L("ضمان 10 سنوات", "10-year warranty"), L("عرض سعر مجاني خلال 24 ساعة", "Free quote within 24 hours")],
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
  ],

  /* Service areas — cities and the neighbourhoods we mention under each */
  areas: [
    { city: L("لاهور", "Lahore"), list: L("دي إتش إيه، جلبرج، جوهر تاون، موديل تاون، بحرية تاون، وابدا تاون وما حولها.", "DHA, Gulberg, Johar Town, Model Town, Bahria Town, Wapda Town and nearby areas.") },
    { city: L("إسلام آباد وراولبندي", "Islamabad & Rawalpindi"), list: L("قطاعات F وG، E-11، دي إتش إيه، بحرية تاون، جلبرج جرينز، صدر.", "F & G sectors, E-11, DHA, Bahria Town, Gulberg Greens, Saddar.") },
    { city: L("كراتشي", "Karachi"), list: L("دي إتش إيه، كليفتون، جلشن إقبال، بي إي سي إتش إس، نارث ناظم آباد، بحرية تاون.", "DHA, Clifton, Gulshan-e-Iqbal, PECHS, North Nazimabad, Bahria Town.") },
    { city: L("فيصل آباد", "Faisalabad"), list: L("مدينة تاون، بيبلز كولوني، طريق القناة، طريق سوسن وما جاورها.", "Madina Town, Peoples Colony, Canal Road, Susan Road and nearby.") },
    { city: L("ملتان", "Multan"), list: L("الكانت، جلجشت، شاه ركن عالم، طريق بوسن ومناطق قريبة.", "Cantt, Gulgasht, Shah Rukn-e-Alam, Bosan Road and nearby.") },
    { city: L("جوجرانوالا وسيالكوت", "Gujranwala & Sialkot"), list: L("ساتلايت تاون، موديل تاون، الكانت، طريق الدفاع وغيرها.", "Satellite Town, Model Town, Cantt, Defence Road and more.") },
  ],

  /* SAMPLE reviews — replace with real client reviews before the public launch */
  reviews: [
    { text: L("شغل سقف الجبس في الصالة كان مرتب جداً، السقف مستقيم والإضاءة المخفية طلعت مثل ما طلبنا. التزموا بالموعد والتعامل محترم.", "The gypsum ceiling in our lounge came out very neat, perfectly level, and the cove lighting is exactly what we asked for. On time and very polite."),
      who: L("عميل في جلبرج – سقف جبس للصالة", "Client in Gulberg – lounge gypsum ceiling") },
    { text: L("عملوا قواطع جبس لتقسيم المكتب إلى غرف صغيرة. الشغل كان سريع ونظيف والقواطع ثابتة، ورجعنا نتعامل معهم في مشروع ثاني.", "They built gypsum partitions to split our office into small rooms. Fast, clean and solid work. We hired them again for a second project."),
      who: L("عميل في جوهر تاون – قواطع لمكتب", "Client in Johar Town – office partitions") },
    { text: L("جدار التلفزيون طلع أجمل من الصورة اللي أرسلناها، وعدّلوا بعض التفاصيل في الموقع حتى يناسب مساحة الغرفة.", "The TV wall turned out even better than the photo we sent, and they adjusted details on site to fit our room."),
      who: L("عميل في دي إتش إيه – ديكور جدار تلفزيون", "Client in DHA – TV wall decor") },
  ],
};
