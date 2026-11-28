/* ==========================================================
   PAGE CONTENT — Arabic + English side by side: L("عربي", "English")
   Section types are rendered by build.js (hero, cards, tiers, gallery, faq …).
   ========================================================== */
const L = (ar, en) => ({ ar, en });

/* ---------- Navigation ---------- */
const services = [
  { slug: "gypsum-ceilings", icon: "🪜", title: L("اسقف جبس بورد", "Gypsum Board Ceilings"),
    text: L("اسقف جبس بورد مستوية ومعلّقة ومتدرّجة للصالة والغرف والمكاتب، مع إضاءة مخفية وسبوت لايت.", "Flat, suspended and multi-level gypsum ceilings for lounges, bedrooms and offices, with cove and spot lighting.") },
  { slug: "partitions", icon: "🚪", title: L("قواطع جبس بورد", "Gypsum Partitions"),
    text: L("تقسيم الغرف والمكاتب والعيادات بقواطع جبس بورد مرتّبة، مع عزل صوتي وفتحات أبواب وزجاج.", "Divide rooms, offices and clinics with neat gypsum partitions, with sound insulation, door openings and glass.") },
  { slug: "wall-decor", icon: "🎨", title: L("ديكورات الجدران وجدار التلفزيون", "Wall Decor & TV Walls"),
    text: L("ديكورات جبس بورد للجدران وجدار التلفزيون، مع رفوف ونيشات وإضاءة مخفية حسب ذوقك.", "Gypsum wall features and TV walls with shelves, niches and hidden lighting to suit your taste.") },
  { slug: "classic-wood-ceilings", icon: "🏛️", title: L("اسقف كلاسيك وخشبية", "Classic & Wooden Ceilings"),
    text: L("اسقف جبس كلاسيكية بالكرانيش والزخارف، واسقف خشبية ومجوّفة (كوفريد) للمجالس والفلل.", "Classic plaster ceilings with cornices and medallions, plus wooden and coffered ceilings for formal rooms and villas.") },
  { slug: "installation-team", icon: "👷‍♂️", title: L("معلم جبس بورد وفريق التركيب", "Gypsum Craftsman & Install Team"),
    text: L("معلم جبس بورد وفريق تركيب لتنفيذ مشاريع كاملة للشقق والفلل والمكاتب، وتسليم جاهز للدهان.", "A skilled gypsum craftsman and team for complete projects in flats, villas and offices, handed over paint-ready.") },
];

const nav = [
  { slug: "index", label: L("الرئيسية", "Home") },
  { slug: "services", label: L("خدماتنا", "Services"), children: services.map((s) => ({ slug: s.slug, label: s.title })) },
  { slug: "prices", label: L("الأسعار", "Prices") },
  { slug: "areas", label: L("مناطق الخدمة", "Service Areas") },
  { slug: "works", label: L("الأعمال", "Our Work") },
  { slug: "about", label: L("من نحن", "About Us") },
  { slug: "contact", label: L("اتصل بنا", "Contact") },
];

/* ---------- Shared blocks ---------- */
const why = (h2) => ({
  type: "cards", style: "dark", align: "start", h2: h2 || L("لماذا تختار سيل كرافت؟", "Why choose CeilCraft?"),
  intro: L("نحرص على شغل جبس بورد مرتب ونظيف، مع التزام بالمواعيد وأسعار واضحة تناسب ميزانيتك.", "Neat, clean gypsum work, on-time delivery and clear prices that fit your budget."),
  items: [
    { icon: "⭐", title: L("خبرة في الجبس بورد", "Proven gypsum experience"), text: L("تنفيذ أعمال جبس بورد في الشقق والفلل والمكاتب بمستوى ثابت.", "Ceilings, partitions and decor in flats, villas and offices, with consistent quality.") },
    { icon: "🧼", title: L("شغل مرتب ونظيف", "Neat & clean work"), text: L("نغطي الأثاث والأرضيات وننظف المكان يومياً أثناء وبعد العمل.", "We cover furniture and floors and clean up every day, during and after the job.") },
    { icon: "🧱", title: L("مواد وهياكل قوية", "Strong materials & frames"), text: L("ألواح جبس بورد أصلية وهياكل حديد مجلفن تتحمل الرطوبة والحرارة.", "Genuine gypsum boards and galvanised steel frames that handle heat and humidity.") },
    { icon: "⏰", title: L("التزام بالموعد والسعر", "On time, agreed price"), text: L("موعد واضح وسعر متفق عليه قبل بدء الشغل، بدون مفاجآت.", "A clear schedule and an agreed price before we start, with no surprises.") },
  ],
});

const areas = {
  type: "areas", h2: L("مناطق الخدمة", "Where we work"),
  intro: L("نخدم جميع محافظات الكويت ونصل إليك بسرعة لتنفيذ أعمال الجبس بورد في الشقق والفلل والمكاتب.", "We cover all of Kuwait's governorates and reach you quickly for gypsum work in flats, villas and offices."),
  note: L("إذا لم تجد منطقتك في القائمة، تواصل معنا على الواتساب – نخدم مناطق كثيرة أخرى.", "Don't see your area? Message us on WhatsApp – we cover many more places."),
  button: { label: L("مشاهدة جميع مناطق الخدمة بالتفصيل", "See all service areas in detail"), href: "areas", style: "outline" },
};

const reviews = {
  type: "reviews", h2: L("آراء بعض عملائنا", "What some of our clients say"),
  intro: L("ملاحظات من عملاء بعد تنفيذ اسقف وقواطع وديكورات جبس بورد في مناطق مختلفة.", "Feedback from clients after ceilings, partitions and decor work in different areas."),
  note: L("بعد انتهاء شغلك، أرسل لنا تقييمك على الواتساب وسننشره بدون ذكر الاسم الكامل.", "After your job, send us your review on WhatsApp and we'll post it without your full name."),
};

const cta = (h2, text) => ({
  type: "cta", h2: h2 || L("اطلب عرض سعر مجاني اليوم", "Get your free quote today"),
  text: text || L("أرسل صور المكان ومقاساته على الواتساب، ونرجع لك بسعر تقريبي خلال 24 ساعة.", "Send photos and rough sizes of your space on WhatsApp and we'll reply with an estimate within 24 hours."),
});

const steps = (h2) => ({
  type: "steps", h2: h2 || L("كيف ننفّذ مشروعك؟", "How we run your project"),
  items: [
    L("تتواصل معنا على الواتساب أو الهاتف وترسل صور المكان وفكرتك.", "You call or WhatsApp us with photos of the space and your idea."),
    L("نزور الموقع مجاناً لأخذ المقاسات الدقيقة ومناقشة التصميم والإضاءة.", "We visit for free to take exact measurements and discuss design and lighting."),
    L("نرسل لك عرض سعر واضح ومدة التنفيذ قبل البدء، بدون رسوم مخفية.", "You get a clear quote and timeline before we start, with no hidden charges."),
    L("ننفّذ الشغل بنظافة، ونسلّمه جاهزاً للدهان مع ضمان على التركيب.", "We do the work cleanly and hand it over paint-ready, with an installation warranty."),
  ],
});

const faqGeneral = [
  { q: L("كم سعر متر الجبس بورد تقريباً؟", "Roughly how much does gypsum board cost per square metre?"),
    a: L("يعتمد على نوع الشغل (سقف مستوي، متدرّج، قواطع أو ديكور)، ونوع اللوح، وعدد فتحات الإضاءة. أرسل صور المكان ومقاساته على الواتساب ونعطيك سعراً تقريبياً سريعاً، وتفاصيل أكثر في صفحة الأسعار.", "It depends on the job (flat or multi-level ceiling, partitions or decor), the board type and the number of light points. Send photos and sizes on WhatsApp for a quick estimate. There's more detail on our Prices page.") },
  { q: L("هل الجبس بورد يتحمل الرطوبة والحرارة في الكويت؟", "Does gypsum board handle Kuwait's heat and humidity?"),
    a: L("نعم، عند استخدام النوع المناسب. للمطابخ والحمامات نستخدم ألواحاً مقاومة للرطوبة (الخضراء)، ونركّب هياكل حديد مجلفن لا تصدأ، مع ترك فواصل تمدد في المساحات الكبيرة.", "Yes, with the right type. For kitchens and bathrooms we use moisture-resistant (green) boards on rust-proof galvanised frames, with expansion joints in large areas.") },
  { q: L("كم يحتاج وقت تركيب الجبس بورد للصالة أو الغرف؟", "How long does a lounge or room take?"),
    a: L("سقف غرفة عادي يحتاج غالباً من يومين إلى ثلاثة أيام، والصالة أو التصاميم المتدرّجة من 4 إلى 7 أيام، حسب المساحة والتفاصيل.", "A standard room ceiling usually takes 2–3 days; a lounge or multi-level design takes 4–7 days, depending on size and detail.") },
  { q: L("هل يمكن تعديل أو إزالة الجبس بورد لاحقاً؟", "Can gypsum be changed or removed later?"),
    a: L("نعم، من مميزات الجبس بورد أنه سهل التعديل. يمكن فتح فتحة جديدة للإضاءة أو المكيّف، أو إزالة قاطع، بدون تكسير كبير.", "Yes. Gypsum is easy to modify: new light or AC openings can be cut, or a partition removed, without heavy demolition.") },
];

const photosOf = (...cats) => ({ cats });

/* ---------- Service pages ---------- */
const servicePage = (s, o) => ({
  title: L(`${s.title.ar} | سيل كرافت`, `${s.title.en} | CeilCraft`),
  desc: s.text,
  crumb: [{ slug: "services", label: L("خدماتنا", "Services") }],
  sections: [
    { type: "hero", h1: o.h1, lead: o.lead },
    { type: "cards", style: "cream", h2: o.offerTitle, intro: o.offerIntro, items: o.offer },
    { type: "tiers", h2: o.tiersTitle, intro: o.tiersIntro, items: o.tiers },
    why(),
    o.photos && { type: "gallery", h2: o.photosTitle, intro: L("بعض الأمثلة من أعمالنا. يمكنك مشاهدة المزيد في صفحة الأعمال.", "A few examples of our work. See more on the Our Work page."), photos: o.photos, limit: 6,
      button: { label: L("شاهد المزيد من الأعمال", "See more of our work"), href: "works" } },
    { type: "pills", h2: L("نخدم جميع محافظات الكويت", "We serve all Kuwait governorates"), note: L("لمزيد من التفاصيل: صفحة مناطق الخدمة", "More details on the Service Areas page"), href: "areas" },
    steps(),
    { type: "faq", h2: L("أسئلة شائعة", "Frequently asked questions"), items: o.faq },
    cta(),
  ].filter(Boolean),
});

const pages = {
  /* ======================= HOME ======================= */
  index: {
    title: L("سيل كرافت للجبس بورد – اسقف، قواطع وديكورات جبس بورد", "CeilCraft Gypsum Board – Ceilings, Partitions & Decor"),
    desc: L("اسقف جبس بورد حديثة، قواطع مرتّبة، وديكورات جدران وجدار تلفزيون للشقق والفلل والمكاتب. عرض سعر مجاني خلال 24 ساعة.", "Modern gypsum ceilings, neat partitions and wall & TV-wall decor for flats, villas and offices. Free quote within 24 hours."),
    sections: [
      { type: "hero", h1: L("سيل كرافت للجبس بورد – خبراء اسقف وقواطع وديكورات الجبس بورد", "CeilCraft Gypsum Board – experts in gypsum ceilings, partitions & decor"),
        lead: [L("اسقف جبس بورد حديثة، قواطع مرتّبة، وديكورات جبس بورد للصالات والغرف والمكاتب في جميع مناطق الكويت.", "Modern gypsum ceilings, neat partitions and gypsum decor for lounges, bedrooms and offices across Kuwait.")] },
      { type: "cards", style: "cream", h2: L("خدمات الجبس بورد لدينا", "Our gypsum board services"),
        intro: L("اختر الخدمة المناسبة لك، واضغط عليها لمعرفة التفاصيل والأنواع والأسعار.", "Pick the service you need and tap it for details, types and prices."),
        items: services.map((s) => ({ icon: s.icon, title: s.title, text: s.text, href: s.slug })),
        button: { label: L("شاهد جميع خدماتنا", "See all our services"), href: "services" } },
      why(),
      areas,
      { type: "gallery", h2: L("معرض أعمال الجبس بورد", "Our gypsum work gallery"),
        intro: L("بعض نماذج الاسقف والديكورات التي نفّذناها لعملائنا.", "A few of the ceilings and decor we've completed for clients."),
        photos: { ids: ["double-layer-gypsum", "victorian-medallion", "wood-frame-cove"] }, linkService: true,
        button: { label: L("شاهد المزيد من الأعمال", "See more of our work"), href: "works" } },
      { type: "faq", h2: L("أسئلة شائعة عن الجبس بورد", "Common questions about gypsum board"),
        intro: L("هذه بعض الأسئلة التي تتكرر من العملاء عن الأسعار والتنفيذ:", "Questions clients often ask about prices and installation:"), items: faqGeneral, contactLine: true },
      reviews,
    ],
  },

  /* ======================= SERVICES ======================= */
  services: {
    title: L("خدماتنا | اسقف وقواطع وديكورات جبس بورد", "Our Services | Gypsum Ceilings, Partitions & Decor"),
    desc: L("ملخص كل خدمات الجبس بورد: اسقف، قواطع، ديكورات جدران، اسقف كلاسيك وخشبية، وفريق تركيب.", "All our gypsum services: ceilings, partitions, wall decor, classic & wooden ceilings and an install team."),
    sections: [
      { type: "hero", h1: L("خدماتنا – اسقف، قواطع، ديكورات ومعلم جبس بورد", "Our services – ceilings, partitions, decor and gypsum craftsmen"),
        lead: [L("هنا تجد ملخصاً واضحاً لكل ما نقدّمه، من اسقف الجبس بورد المعلّقة إلى القواطع وديكورات الجدران، مع فريق تركيب متخصص لتنفيذ شغل مرتب.", "A clear summary of everything we do, from suspended gypsum ceilings to partitions and wall decor, with a specialist team for neat installation.")] },
      { type: "cards", style: "cream", h2: L("خدمات الجبس بورد التي نقدّمها", "The gypsum services we offer"),
        intro: L("اضغط على أي خدمة لمعرفة الأنواع، وأيها اقتصادي وأيها فاخر، وطريقة التنفيذ والصور.", "Tap any service to see the types, which are budget and which are premium, how we install and photos."),
        items: services.map((s) => ({ icon: s.icon, title: s.title, text: s.text, href: s.slug })) },
      why(),
      steps(),
      cta(),
    ],
  },

  "gypsum-ceilings": servicePage(services[0], {
    h1: L("اسقف جبس بورد – تصاميم حديثة وتشطيب مرتب", "Gypsum board ceilings – modern designs, neat finish"),
    lead: [L("ننفّذ اسقف جبس بورد مستوية ومعلّقة ومتدرّجة للصالة والغرف والمكاتب، مع تجهيز فتحات الإنارة والتكييف حسب تصميمك.", "We install flat, suspended and multi-level gypsum ceilings for lounges, bedrooms and offices, with openings for lights and AC prepared to your design.")],
    offerTitle: L("أنواع اسقف الجبس بورد التي ننفّذها", "Gypsum ceilings we install"),
    offerIntro: L("من السقف المستوي البسيط إلى التصاميم المتدرّجة بالإضاءة المخفية.", "From a simple flat ceiling to layered designs with hidden lighting."),
    offer: [
      { icon: "▭", title: L("سقف مستوي ومعلّق", "Flat suspended ceiling"), text: L("سطح ناعم مستوي يخفي الأسلاك والمواسير، مع سبوت لايت.", "A smooth, level surface that hides wiring and pipes, with spotlights.") },
      { icon: "💡", title: L("سقف متدرّج بإضاءة مخفية", "Multi-level with cove light"), text: L("مستوى أو مستويان مع شريط LED مخفي يعطي إضاءة ناعمة.", "One or two levels with a hidden LED strip for soft light.") },
      { icon: "📐", title: L("تصاميم هندسية وخطوط LED", "Geometric & LED-line designs"), text: L("خطوط إضاءة وأشكال هندسية عصرية للصالات والمكاتب.", "Light lines and modern geometric shapes for lounges and offices.") },
      { icon: "🔲", title: L("اسقف بلاطات 60×60", "60×60 grid tile ceilings"), text: L("الحل الأوفر للمكاتب والمحلات، سهل الصيانة والوصول للأسلاك.", "The most economical choice for offices and shops; easy access for maintenance.") },
    ],
    tiersTitle: L("أنواع ألواح الجبس بورد – من الأرخص إلى الأغلى", "Gypsum board types – cheapest to most expensive"),
    tiersIntro: L("نوع اللوح يغيّر السعر. هذا ترتيب تقريبي من الاقتصادي إلى الفاخر، ومتى تستخدم كل نوع:", "The board type changes the price. Here's a rough order from budget to premium, and when to use each:"),
    tiers: [
      { level: 1, name: L("اللوح العادي (الأبيض)", "Standard board (white)"), best: L("الغرف والصالات والممرات الجافة.", "Dry bedrooms, lounges and corridors."), note: L("الأرخص والأكثر استخداماً. لا يصلح للأماكن الرطبة.", "Cheapest and most common. Not for wet areas.") },
      { level: 2, name: L("اللوح المقاوم للرطوبة (الأخضر)", "Moisture-resistant board (green)"), best: L("المطابخ والحمامات وغرف الغسيل.", "Kitchens, bathrooms and laundry rooms."), note: L("أغلى قليلاً من العادي، ويمنع الانتفاخ والعفن.", "A little more than standard; resists swelling and mould.") },
      { level: 3, name: L("اللوح المقاوم للحريق (الوردي/الأحمر)", "Fire-rated board (pink/red)"), best: L("المطابخ المفتوحة، غرف الكهرباء، الدرج والمكاتب.", "Open kitchens, electrical rooms, stairwells and offices."), note: L("يؤخّر انتشار النار، ومطلوب أحياناً في المباني التجارية.", "Slows fire spread; sometimes required in commercial buildings.") },
      { level: 3, name: L("اللوح عالي الكثافة (المقاوم للصدمات)", "High-density (impact-resistant) board"), best: L("الممرات المزدحمة، المدارس، والجدران المعرّضة للصدمات.", "Busy corridors, schools and walls that take knocks."), note: L("أقوى وأثقل من العادي ويتحمل الخدش.", "Stronger and heavier than standard; resists dents.") },
      { level: 4, name: L("اللوح الصوتي (المثقّب)", "Acoustic (perforated) board"), best: L("قاعات الاجتماعات، السينما المنزلية، المطاعم.", "Meeting rooms, home cinemas and restaurants."), note: L("الأغلى، يمتص الصدى ويحسّن جودة الصوت.", "The most expensive; absorbs echo and improves sound.") },
    ],
    photosTitle: L("نماذج من اسقف الجبس بورد", "Examples of our gypsum ceilings"),
    photos: photosOf("gypsum", "led", "modern"),
    faq: [
      { q: L("ما الفرق بين السقف المستوي والمتدرّج في السعر؟", "How does a flat ceiling compare in price to a multi-level one?"), a: L("السقف المستوي هو الأوفر. كل مستوى إضافي وكل خط إضاءة مخفية يزيد المواد والوقت، لذلك المتدرّج أغلى بنسبة ملحوظة.", "Flat is the most economical. Each extra level and each hidden light line adds material and time, so multi-level costs noticeably more.") },
      { q: L("هل يمكن تركيب ثريا ثقيلة في سقف الجبس بورد؟", "Can a heavy chandelier hang from a gypsum ceiling?"), a: L("نعم، نثبّت الثريات الثقيلة في السقف الخرساني مباشرة أو بهيكل تقوية خاص، وليس على اللوح فقط.", "Yes. Heavy chandeliers are anchored to the concrete slab or to a dedicated support frame, not to the board alone.") },
      faqGeneral[1],
    ],
  }),

  partitions: servicePage(services[1], {
    h1: L("قواطع جبس بورد – تقسيم الغرف والمكاتب", "Gypsum partitions – dividing rooms and offices"),
    lead: [L("نقسّم الغرف والصالات والمكاتب والعيادات بقواطع جبس بورد خفيفة وقوية، مع إمكانية العزل الصوتي وفتحات الأبواب والزجاج.", "We divide rooms, lounges, offices and clinics with light but strong gypsum partitions, with optional sound insulation, door openings and glass.")],
    offerTitle: L("ماذا نقدّم في القواطع", "What we offer"),
    offerIntro: L("قواطع سريعة التركيب ونظيفة، بدون طوب أو تكسير.", "Fast, clean partitions with no bricks and no heavy demolition."),
    offer: [
      { icon: "🏢", title: L("قواطع للمكاتب", "Office partitions"), text: L("تقسيم مكتب مفتوح إلى غرف عمل واجتماعات مرتبة.", "Turn an open office into tidy work and meeting rooms.") },
      { icon: "🛏️", title: L("تقسيم غرف المنزل", "Home room dividers"), text: L("إضافة غرفة نوم أو غرفة ملابس أو تقسيم صالة كبيرة.", "Add a bedroom or dressing room, or split a large lounge.") },
      { icon: "🔇", title: L("قواطع بعزل صوتي", "Sound-insulated partitions"), text: L("حشو صوف صخري ولوحين في كل جهة لخصوصية أعلى.", "Rock-wool core and double boards on each side for more privacy.") },
      { icon: "🪟", title: L("قواطع مع زجاج أو أبواب", "With glass or doors"), text: L("فتحات أبواب جاهزة وأجزاء زجاج لإدخال الضوء.", "Ready door openings and glass sections to let light through.") },
    ],
    tiersTitle: L("أنواع القواطع – من الأرخص إلى الأغلى", "Partition types – cheapest to most expensive"),
    tiersIntro: L("كلما زادت طبقات الألواح والعزل زادت المتانة والسعر:", "More board layers and insulation mean more strength and a higher price:"),
    tiers: [
      { level: 1, name: L("قاطع لوح واحد في كل جهة", "Single board each side"), best: L("تقسيمات بسيطة وغرف تخزين.", "Simple dividers and storage rooms."), note: L("الأوفر والأسرع، عزل صوتي محدود.", "Cheapest and quickest; limited sound insulation.") },
      { level: 2, name: L("قاطع لوحين في كل جهة", "Double board each side"), best: L("غرف النوم والمكاتب.", "Bedrooms and offices."), note: L("أقوى وأفضل في العزل ويتحمل تعليق الرفوف والتلفزيون.", "Stronger, quieter, and can hold shelves and a TV.") },
      { level: 3, name: L("قاطع مع عزل صوف صخري", "With rock-wool insulation"), best: L("غرف الاجتماعات والعيادات وغرف الأطفال.", "Meeting rooms, clinics and kids' rooms."), note: L("عزل صوتي وحراري ممتاز.", "Excellent sound and heat insulation.") },
      { level: 4, name: L("قاطع مع أجزاء زجاج", "With glass sections"), best: L("المكاتب الحديثة والاستقبال.", "Modern offices and reception areas."), note: L("الأغلى بسبب الزجاج والإطارات، لكنه يُدخل الضوء.", "Most expensive because of glass and frames, but lets light in.") },
    ],
    faq: [
      { q: L("هل قاطع الجبس قوي مثل الطوب؟", "Is a gypsum partition as strong as brick?"), a: L("للاستخدام اليومي نعم، خاصة مع لوحين في كل جهة. ولتعليق أشياء ثقيلة نضع تقوية داخل القاطع مسبقاً.", "For everyday use, yes, especially with double boards. For heavy items we add reinforcement inside the wall in advance.") },
      { q: L("كم يحتاج وقت تركيب قاطع؟", "How long does a partition take?"), a: L("قاطع غرفة عادي غالباً يوم إلى يومين، ومشاريع المكاتب حسب عدد الغرف.", "A typical room partition takes 1–2 days; office projects depend on the number of rooms.") },
      faqGeneral[3],
    ],
  }),

  "wall-decor": servicePage(services[2], {
    h1: L("ديكورات الجدران وجدار التلفزيون", "Wall decor & TV walls"),
    lead: [L("نصمّم وننفّذ ديكورات جبس بورد للجدران وجدار التلفزيون، مع رفوف ونيشات وإضاءة مخفية، حسب الصور التي ترسلها أو أفكار نجهّزها لك.", "We design and build gypsum wall features and TV walls with shelves, niches and hidden lighting, from photos you send or ideas we prepare for you.")],
    offerTitle: L("ديكورات ننفّذها", "Decor we build"),
    offerIntro: L("لمسة تغيّر شكل الصالة أو المدخل بالكامل.", "A single feature that changes the whole lounge or entrance."),
    offer: [
      { icon: "📺", title: L("جدار تلفزيون", "TV wall"), text: L("إطار جبس مع رفوف وإضاءة مخفية وأماكن لإخفاء الأسلاك.", "Gypsum frame with shelves, hidden lighting and cable management.") },
      { icon: "🕳️", title: L("نيشات ورفوف", "Niches & shelves"), text: L("فتحات زينة مضيئة للمداخل والممرات وغرف النوم.", "Lit display niches for entrances, corridors and bedrooms.") },
      { icon: "🪵", title: L("جدران بديكور خشبي أو شرائح", "Wood or slat feature walls"), text: L("شرائح خشبية أو بديلة تعطي دفئاً وعمقاً للجدار.", "Wood or wood-look slats that add warmth and depth.") },
      { icon: "🧱", title: L("ديكورات حجر وكلاسيك", "Stone & classic panels"), text: L("كرانيش وبراويز كلاسيكية أو تكسيات حجر وكسوة جدران.", "Classic mouldings and frames, or stone-look cladding.") },
    ],
    tiersTitle: L("خيارات ديكور الجدران – من الأرخص إلى الأغلى", "Wall decor options – cheapest to most expensive"),
    tiersIntro: L("السعر يعتمد على المادة وكمية التفاصيل والإضاءة:", "Price depends on the material, the amount of detail and the lighting:"),
    tiers: [
      { level: 1, name: L("جدار جبس بسيط مع إضاءة مخفية", "Simple gypsum wall with cove light"), best: L("جدار تلفزيون بسيط وغرف النوم.", "A simple TV wall and bedrooms."), note: L("الأوفر وشكله نظيف وعصري.", "Most affordable, with a clean, modern look.") },
      { level: 2, name: L("جبس مع نيشات ورفوف", "Gypsum with niches & shelves"), best: L("الصالات والمداخل.", "Lounges and entrances."), note: L("تفاصيل أكثر وإضاءة لكل نيش.", "More detail, with lighting in each niche.") },
      { level: 3, name: L("براويز وكرانيش كلاسيكية", "Classic mouldings & frames"), best: L("المجالس والصالات الرسمية.", "Formal sitting rooms."), note: L("شغل يدوي أكثر ودقة في التشطيب.", "More handwork and finer finishing.") },
      { level: 4, name: L("شرائح خشب طبيعي أو تكسية حجر", "Real wood slats or stone cladding"), best: L("جدران الواجهة في الفلل والمكاتب الفاخرة.", "Feature walls in villas and premium offices."), note: L("الأغلى بسبب سعر المادة نفسها.", "Most expensive because of the material itself.") },
    ],
    photosTitle: L("نماذج من ديكورات الجدران", "Examples of our wall decor"),
    photos: photosOf("wall"),
    faq: [
      { q: L("هل يمكن تنفيذ تصميم من صورة أرسلها؟", "Can you build a design from a photo I send?"), a: L("نعم، أرسل الصورة ومقاس الجدار، ونعدّل التصميم ليناسب مساحتك وميزانيتك.", "Yes. Send the photo and wall size and we'll adapt the design to your space and budget.") },
      { q: L("هل جدار الجبس يتحمل تلفزيون كبير؟", "Can a gypsum wall hold a large TV?"), a: L("نعم، نضع تقوية خشبية أو معدنية داخل الجدار مكان حامل التلفزيون قبل الإغلاق.", "Yes. We fit timber or steel backing inside the wall where the TV bracket goes, before closing it.") },
      faqGeneral[2],
    ],
  }),

  "classic-wood-ceilings": servicePage(services[3], {
    h1: L("اسقف كلاسيك وخشبية ومجوّفة", "Classic, wooden & coffered ceilings"),
    lead: [L("اسقف جبس كلاسيكية بالكرانيش والزخارف والميداليات حول الثريات، واسقف خشبية ومجوّفة تعطي فخامة للمجالس والفلل.", "Classic plaster ceilings with cornices, mouldings and chandelier medallions, plus wooden and coffered ceilings that bring luxury to formal rooms and villas.")],
    offerTitle: L("ما ننفّذه", "What we build"),
    offerIntro: L("تصاميم بطابع فاخر وتفاصيل يدوية.", "Designs with a luxurious feel and hand-finished detail."),
    offer: [
      { icon: "🏛️", title: L("كرانيش وزخارف جبس", "Plaster cornices & mouldings"), text: L("كرانيش حول السقف وزخارف كلاسيكية جاهزة أو مصبوبة.", "Cornices around the ceiling and classic ready-made or cast mouldings.") },
      { icon: "🌸", title: L("ميداليات للثريات", "Chandelier medallions"), text: L("ميدالية زخرفية في وسط السقف حول الثريا.", "A decorative medallion around the chandelier at the centre.") },
      { icon: "🔳", title: L("اسقف مجوّفة (كوفريد)", "Coffered ceilings"), text: L("مربعات غائرة بإضاءة أو بدون، للمجالس والمكتبات.", "Recessed grid panels, with or without lighting, for formal rooms and libraries.") },
      { icon: "🪵", title: L("اسقف وشرائح خشبية", "Wooden ceilings & slats"), text: L("خشب طبيعي أو قشرة خشب أو شرائح بديلة للدفء.", "Solid wood, veneer or wood-look slats for warmth.") },
    ],
    tiersTitle: L("الأنواع – من الأرخص إلى الأغلى", "Types – cheapest to most expensive"),
    tiersIntro: L("كلما زاد الشغل اليدوي وقيمة المادة زاد السعر:", "The more handwork and the more valuable the material, the higher the price:"),
    tiers: [
      { level: 1, name: L("كرانيش جبس جاهزة", "Ready-made plaster cornice"), best: L("لمسة كلاسيكية بسيطة لأي غرفة.", "A simple classic touch for any room."), note: L("الأوفر وسريع التركيب.", "Most affordable and quick to fit.") },
      { level: 2, name: L("ميدالية وزخارف مصبوبة", "Cast medallions & mouldings"), best: L("الصالات ومداخل الفلل.", "Lounges and villa entrances."), note: L("تفاصيل يدوية أكثر.", "More handwork.") },
      { level: 3, name: L("سقف مجوّف (كوفريد) من الجبس", "Gypsum coffered ceiling"), best: L("المجالس والمكتبات.", "Formal rooms and libraries."), note: L("يحتاج دقة في المقاسات وإضاءة.", "Needs precise setting-out and lighting.") },
      { level: 4, name: L("خشب طبيعي أو كوفريد خشبي محفور", "Solid wood or carved wooden coffers"), best: L("الفلل والمجالس الفاخرة.", "Villas and luxury sitting rooms."), note: L("الأغلى، شغل نجارة ومواد عالية القيمة.", "The most expensive: joinery and high-value materials.") },
    ],
    photosTitle: L("نماذج من الاسقف الكلاسيكية والخشبية", "Examples of classic & wooden ceilings"),
    photos: photosOf("pop", "coffered", "wooden"),
    faq: [
      { q: L("هل الخشب يتأثر بالرطوبة أو الحشرات؟", "Is wood affected by humidity or insects?"), a: L("نستخدم خشباً معالجاً ضد الرطوبة والنمل الأبيض، ونترك تهوية مناسبة خلف الخشب.", "We use wood treated against moisture and termites, and leave proper ventilation behind it.") },
      { q: L("هل يمكن دمج الكلاسيك مع الإضاءة الحديثة؟", "Can classic designs include modern lighting?"), a: L("نعم، يمكن إضافة إضاءة مخفية وسبوت لايت مع الكرانيش والزخارف.", "Yes. We can add hidden cove lighting and spotlights alongside cornices and mouldings.") },
      faqGeneral[0],
    ],
  }),

  "installation-team": servicePage(services[4], {
    h1: L("معلم جبس بورد وفريق التركيب", "Gypsum craftsman & installation team"),
    lead: [L("معلم جبس بورد متمرّس وفريق تركيب لتنفيذ مشاريع كاملة للشقق والفلل والمكاتب، من الاسقف إلى القواطع والديكورات، مع تسليم جاهز للدهان.", "An experienced gypsum craftsman and team for complete projects in flats, villas and offices, from ceilings to partitions and decor, handed over paint-ready.")],
    offerTitle: L("ماذا يقدّم فريقنا", "What our team does"),
    offerIntro: L("فريق واحد يتابع شغلك من البداية حتى التسليم.", "One team handles your job from start to handover."),
    offer: [
      { icon: "📏", title: L("قياس وتخطيط", "Measuring & setting-out"), text: L("قياس دقيق بالليزر وتخطيط الهياكل والإضاءة.", "Precise laser measuring and planning of frames and lighting.") },
      { icon: "🔩", title: L("تركيب الهياكل والألواح", "Frames & boards"), text: L("هياكل حديد مجلفن وتثبيت قوي ومسافات صحيحة.", "Galvanised steel frames, firm fixing and correct spacing.") },
      { icon: "🪣", title: L("معجون وتشطيب", "Jointing & finishing"), text: L("شريط ومعجون على الفواصل وصنفرة لسطح ناعم.", "Tape and compound on every joint, sanded smooth.") },
      { icon: "🧹", title: L("نظافة وتسليم", "Clean-up & handover"), text: L("تنظيف يومي وتسليم جاهز للدهان مع الضمان.", "Daily clean-up and a paint-ready handover with warranty.") },
    ],
    tiersTitle: L("طرق التعاقد – من الأبسط إلى الأشمل", "Ways to hire us – simplest to most complete"),
    tiersIntro: L("اختر ما يناسب مشروعك:", "Choose what suits your project:"),
    tiers: [
      { level: 1, name: L("أجرة يد فقط", "Labour only"), best: L("إذا كانت المواد متوفرة عندك.", "If you already have the materials."), note: L("الأوفر، وتتحمل أنت شراء المواد.", "Lowest cost; you buy the materials.") },
      { level: 2, name: L("مواد وأجرة يد", "Materials + labour"), best: L("أغلب البيوت والشقق.", "Most homes and flats."), note: L("نوفّر مواد أصلية بسعر واضح لكل متر.", "We supply genuine materials at a clear price per unit.") },
      { level: 3, name: L("تصميم وتنفيذ", "Design + build"), best: L("إذا تريد فكرة وتصميماً كاملاً.", "If you want a full idea and design."), note: L("نجهّز التصميم ثلاثي الأبعاد ثم ننفّذه.", "We prepare a 3D design and then build it.") },
      { level: 4, name: L("مشروع كامل مع الدهان والكهرباء", "Turnkey with paint & electrics"), best: L("الفلل والمكاتب الكبيرة.", "Villas and large offices."), note: L("الأشمل، نسلّمك المكان جاهزاً بالكامل.", "Most complete; we hand over the space fully finished.") },
    ],
    photosTitle: L("بعض المشاريع التي نفّذها فريقنا", "Some projects our team has completed"),
    photos: photosOf("gypsum", "pop", "wall"),
    faq: [
      { q: L("هل المعلم يزور الموقع قبل السعر؟", "Does the craftsman visit before quoting?"), a: L("نعم، الزيارة والقياس مجانية في جميع محافظات الكويت.", "Yes, the visit and measuring are free in all Kuwait governorates.") },
      { q: L("هل تعملون في العطل أو المساء؟", "Do you work evenings or holidays?"), a: L("حسب الاتفاق، ويمكن ترتيب مواعيد خاصة للمحلات والمكاتب.", "By arrangement. Special hours can be set for shops and offices.") },
      faqGeneral[2],
    ],
  }),

  /* ======================= PRICES ======================= */
  prices: {
    title: L("أسعار الجبس بورد | كيف نحسب تكلفة الأسقف والقواطع؟", "Gypsum Board Prices | How we price ceilings & partitions"),
    desc: L("كيف نحسب سعر الجبس بورد، وأنواع الألواح والأسقف والقواطع من الأرخص إلى الأغلى.", "How we price gypsum work, and board, ceiling and partition types from cheapest to most expensive."),
    sections: [
      { type: "hero", h1: L("أسعار الجبس بورد – كيف نحسب تكلفة الشغل؟", "Gypsum board prices – how we work out the cost"),
        lead: [L("لا نضع سعراً ثابتاً للجميع، لأن كل مكان ومشروع يختلف. هنا تعرف ما الذي يغيّر السعر، وأي الأنواع اقتصادي وأيها فاخر.", "There's no single price for everyone, because every space is different. Here's what changes the price, and which types are budget and which are premium."),
          L("أرسل صور المكان ومقاساته على الواتساب ونعطيك سعراً تقريبياً سريعاً.", "Send photos and sizes on WhatsApp for a quick estimate.")] },
      { type: "cards", style: "dark", align: "start", h2: L("من ماذا يتكوّن سعر الجبس بورد؟", "What makes up the price?"),
        intro: L("أهم العوامل التي تحدد السعر النهائي:", "The main factors behind the final price:"),
        items: [
          { icon: "📏", title: L("المساحة", "Area"), text: L("مساحة السقف أو طول القاطع تحدد كمية الألواح والهياكل.", "The ceiling area or partition length sets how much board and frame is needed.") },
          { icon: "🧱", title: L("نوع اللوح", "Board type"), text: L("عادي، مقاوم للرطوبة، مقاوم للحريق أو صوتي – لكل نوع سعر.", "Standard, moisture-resistant, fire-rated or acoustic – each has its own price.") },
          { icon: "🎨", title: L("التصميم", "Design"), text: L("السقف المستوي أوفر من المتدرّج متعدد المستويات.", "A flat ceiling costs less than a multi-level design.") },
          { icon: "💡", title: L("الإضاءة والفتحات", "Lights & openings"), text: L("عدد السبوت لايت والإضاءة المخفية وفتحات المكيّف.", "Number of spotlights, cove lighting and AC openings.") },
          { icon: "🔩", title: L("الهيكل المعدني", "Metal frame"), text: L("سماكة الحديد وكثافته وطريقة التعليق.", "Steel gauge, spacing and the hanging method.") },
          { icon: "📍", title: L("الموقع والارتفاع", "Location & height"), text: L("المنطقة والدور وارتفاع السقف تؤثر على النقل والسقالات.", "Area, floor and ceiling height affect transport and scaffolding.") },
        ] },
      { type: "tiers", h2: L("أنواع ألواح الجبس بورد – من الأرخص إلى الأغلى", "Gypsum board types – cheapest to most expensive"),
        intro: L("💰 = اقتصادي  ·  💰💰💰💰 = فاخر", "💰 = budget  ·  💰💰💰💰 = premium"),
        items: null, from: "gypsum-ceilings" },
      { type: "tiers", h2: L("أنواع الاسقف – من الأرخص إلى الأغلى", "Ceiling styles – cheapest to most expensive"),
        intro: L("نفس المساحة قد يختلف سعرها كثيراً حسب نوع السقف:", "The same room can cost very different amounts depending on the ceiling style:"),
        items: [
          { level: 1, name: L("بلاطات 60×60 (سقف مستعار)", "60×60 grid tiles"), best: L("المكاتب والمحلات والمستودعات.", "Offices, shops and stores."), note: L("الأرخص، وسهل الوصول للأسلاك.", "Cheapest, with easy access to services.") },
          { level: 1, name: L("سقف جبس بورد مستوي", "Flat gypsum ceiling"), best: L("الغرف والممرات.", "Bedrooms and corridors."), note: L("أوفر سقف جبس بشكل نظيف.", "The most affordable clean gypsum look.") },
          { level: 2, name: L("سقف بمستوى واحد وإضاءة مخفية", "One level with cove light"), best: L("الصالات وغرف النوم.", "Lounges and bedrooms."), note: L("الأكثر طلباً، توازن بين السعر والشكل.", "Most popular; a good balance of price and look.") },
          { level: 3, name: L("متعدد المستويات وخطوط LED", "Multi-level & LED lines"), best: L("الصالات الكبيرة والمكاتب الحديثة.", "Large lounges and modern offices."), note: L("مواد وإضاءة ووقت أكثر.", "More materials, lighting and time.") },
          { level: 3, name: L("كلاسيك بكرانيش وزخارف", "Classic with cornices & mouldings"), best: L("المجالس الرسمية.", "Formal sitting rooms."), note: L("شغل يدوي وتفاصيل.", "Handwork and detail.") },
          { level: 4, name: L("مجوّف (كوفريد) أو خشبي أو زجاج ومناور", "Coffered, wooden, or glass & skylight"), best: L("الفلل والمداخل الفاخرة.", "Villas and grand entrances."), note: L("الأغلى بسبب المواد والدقة.", "Most expensive because of materials and precision.") },
        ] },
      { type: "tiers", h2: L("أنواع القواطع – من الأرخص إلى الأغلى", "Partition types – cheapest to most expensive"), items: null, from: "partitions" },
      { type: "list", h2: L("أمثلة على طريقة حساب التكلفة", "Examples of how we price"),
        intro: L("هذه أمثلة على طريقة التفكير في السعر، وليست عرض سعر ثابت:", "These show how we think about price; they are not fixed quotes:"),
        items: [
          L("سقف مستوي لغرفة نوم: نحسب المساحة بالمتر المربع مع الهيكل، ثم نضيف عدد فتحات الإضاءة.", "Flat bedroom ceiling: area in square metres × rate including frame, plus the number of light points."),
          L("سقف صالة بإضاءة مخفية: سعر السقف المستوي + طول خط الإضاءة المخفية + شرائط LED.", "Lounge with cove light: flat-ceiling rate + length of the cove + LED strips."),
          L("قاطع لمكتب: الطول × الارتفاع، مع إضافة الباب والعزل الصوتي إذا طلبته.", "Office partition: length × height, plus a door and sound insulation if needed."),
          L("جدار تلفزيون: حسب عرض الجدار وعدد الرفوف والنيشات والإضاءة.", "TV wall: by wall width plus the number of shelves, niches and lights."),
        ] },
      { type: "cards", style: "dark", align: "start", h2: L("نصائح لتوفير التكلفة", "Tips to save money"),
        items: [
          { icon: "✅", title: L("اختر النوع المناسب للمكان", "Pick the right board for the room"), text: L("لا داعي للوح المقاوم للرطوبة في غرفة نوم جافة.", "You don't need moisture-resistant board in a dry bedroom.") },
          { icon: "✅", title: L("نفّذ عدة غرف معاً", "Do several rooms together"), text: L("المشروع الواحد الأكبر يقلّل تكلفة النقل والتجهيز.", "One bigger job lowers transport and setup costs.") },
          { icon: "✅", title: L("إضاءة مخفية في الصالة فقط", "Cove light in the lounge only"), text: L("واستخدم سقفاً مستوياً بسيطاً في الغرف الأخرى.", "Use a simple flat ceiling in the other rooms.") },
          { icon: "✅", title: L("أرسل صوراً واضحة", "Send clear photos"), text: L("الصور والمقاسات الدقيقة تعطيك سعراً أدق من البداية.", "Clear photos and sizes get you a more accurate price from the start.") },
        ] },
      cta(),
    ],
  },

  /* ======================= AREAS ======================= */
  areas: {
    title: L("مناطق الخدمة | سيل كرافت للجبس بورد", "Service Areas | CeilCraft Gypsum Board"),
    desc: L("محافظات ومناطق الكويت التي نخدمها لأعمال الجبس بورد.", "The Kuwait governorates and areas we cover for gypsum board work."),
    sections: [
      { type: "hero", h1: L("مناطق الخدمة – نصل إليك أينما كنت", "Service areas – we come to you"),
        lead: [L("ننفّذ أعمال الجبس بورد في جميع محافظات الكويت، مع زيارة مجانية لأخذ المقاسات.", "We do gypsum work in every governorate of Kuwait, with a free visit to measure.")] },
      { ...areas, button: null },
      { type: "list", h2: L("كيف نرتّب الزيارة؟", "How we arrange your visit"),
        items: [
          L("أرسل اسم المحافظة والمنطقة وصور المكان على الواتساب.", "Send your governorate, area and photos of the space on WhatsApp."),
          L("نحدد موعد زيارة يناسبك خلال يوم إلى يومين عمل.", "We book a visit that suits you within 1–2 working days."),
          L("يأخذ المعلم المقاسات ويقترح أفضل حل حسب ميزانيتك.", "Our craftsman measures and suggests the best option for your budget."),
          L("تستلم عرض السعر ومدة التنفيذ خلال 24 ساعة من الزيارة.", "You get the quote and timeline within 24 hours of the visit."),
        ] },
      cta(),
    ],
  },

  /* ======================= WORKS ======================= */
  works: {
    title: L("أعمالنا | صور اسقف وقواطع وديكورات جبس بورد", "Our Work | Gypsum ceilings, partitions & decor photos"),
    desc: L("معرض صور أعمال الجبس بورد: اسقف حديثة وكلاسيكية وخشبية وديكورات جدران.", "Photo gallery of our gypsum work: modern, classic and wooden ceilings and wall decor."),
    sections: [
      { type: "hero", h1: L("أعمالنا – صور من شغل سيل كرافت", "Our work – photos from CeilCraft projects"),
        lead: [L("نماذج من الاسقف والديكورات حسب النوع. اضغط على أي صورة لتكبيرها.", "Examples of ceilings and decor, grouped by type. Tap any photo to enlarge it."),
          L("يمكنك دائماً طلب صور إضافية مشابهة لشغلك عن طريق الواتساب.", "You can always ask for more photos similar to your job on WhatsApp.")] },
      { type: "gallery", h2: L("اسقف جبس بورد وإضاءة LED", "Gypsum & LED ceilings"), photos: photosOf("gypsum", "led") },
      { type: "gallery", h2: L("تصاميم هندسية عصرية", "Modern geometric designs"), photos: photosOf("modern") },
      { type: "gallery", h2: L("اسقف كلاسيك ومجوّفة", "Classic & coffered ceilings"), photos: photosOf("pop", "coffered") },
      { type: "gallery", h2: L("اسقف خشبية", "Wooden ceilings"), photos: photosOf("wooden") },
      { type: "gallery", h2: L("زجاج ومناور", "Glass & skylights"), photos: photosOf("glass") },
      { type: "gallery", h2: L("ديكورات الجدران", "Wall decor"), photos: photosOf("wall") },
      { type: "list", h2: L("ماذا يهم في جودة شغل الجبس بورد؟", "What makes good gypsum work?"),
        items: [
          L("استقامة السقف أو القاطع وعدم وجود تعرجات في الزوايا.", "Ceilings and walls that are straight, with clean corners."),
          L("توزيع صحيح للهياكل المعدنية وتثبيت قوي للمسامير.", "Correct frame spacing and firm screw fixing."),
          L("فواصل ناعمة بالشريط والمعجون بدون تشققات لاحقاً.", "Smooth taped joints that don't crack later."),
          L("فتحات إضاءة وتكييف مرتبة ومتماسكة.", "Neat, solid openings for lights and AC."),
        ] },
      cta(),
    ],
  },

  /* ======================= ABOUT ======================= */
  about: {
    title: L("من نحن | سيل كرافت للجبس بورد", "About Us | CeilCraft Gypsum Board"),
    desc: L("تعرّف على سيل كرافت للجبس بورد وطريقة عملنا.", "Meet CeilCraft Gypsum Board and how we work."),
    sections: [
      { type: "hero", h1: L("من نحن – سيل كرافت للجبس بورد", "About us – CeilCraft Gypsum Board"),
        lead: [L("فريق متخصص في اسقف وقواطع وديكورات الجبس بورد، نهتم بالتشطيب المرتب والالتزام بالمواعيد والسعر الواضح.", "A team specialising in gypsum ceilings, partitions and decor, focused on neat finishing, punctuality and clear prices.")] },
      { type: "text", h2: L("قصتنا", "Our story"),
        paras: [
          L("بدأنا بفريق صغير من معلمي الجبس، واليوم ننفّذ مشاريع في الشقق والفلل والمكاتب والمحلات في مختلف مناطق الكويت.", "We started as a small team of gypsum craftsmen. Today we deliver projects in flats, villas, offices and shops all over Kuwait."),
          L("هدفنا بسيط: شغل مستقيم ونظيف، ومواد أصلية، وسعر متفق عليه قبل البدء، وتواصل سهل على الواتساب طوال المشروع.", "Our goal is simple: straight, clean work, genuine materials, a price agreed before we start, and easy WhatsApp contact throughout."),
        ] },
      why(L("قيمنا في العمل", "How we work")),
      { type: "cards", style: "cream", h2: L("ماذا نقدّم", "What we do"),
        items: services.map((s) => ({ icon: s.icon, title: s.title, text: s.text, href: s.slug })) },
      reviews,
    ],
  },

  /* ======================= CONTACT ======================= */
  contact: {
    title: L("اتصل بنا | سيل كرافت للجبس بورد", "Contact | CeilCraft Gypsum Board"),
    desc: L("اتصل أو أرسل صور المكان على الواتساب لعرض سعر مجاني.", "Call or send photos of your space on WhatsApp for a free quote."),
    sections: [
      { type: "hero", h1: L("اتصل بنا – سيل كرافت للجبس بورد", "Contact us – CeilCraft Gypsum Board"),
        lead: [L("إذا كنت تفكر في سقف جبس بورد أو قواطع أو ديكور جدار تلفزيون، أسهل طريقة هي الاتصال مباشرة أو إرسال صور المكان على الواتساب.", "Planning a gypsum ceiling, partitions or a TV wall? The easiest way is to call us or send photos of the space on WhatsApp."),
          L("نرد قدر الإمكان خلال أوقات العمل، وإذا لم نرد فوراً أرسل رسالة وسنعاود الاتصال بك.", "We answer during working hours. If we miss you, send a message and we'll call you back.")] },
      { type: "contactCard", h2: L("بيانات التواصل", "Contact details") },
      { type: "form", h2: L("أرسل طلبك على الواتساب", "Send your request on WhatsApp"),
        intro: L("املأ البيانات وسيُفتح الواتساب برسالة جاهزة، ثم أرفق صور المكان.", "Fill this in and WhatsApp opens with a ready message. Then attach photos of the space.") },
      { type: "steps", h2: L("كيف تشرح شغلك لنا بطريقة تختصر الوقت؟", "How to describe your job quickly"),
        items: [
          L("صوّر المكان (الصالة، الغرفة، الممر أو الجدار) من زاويتين أو ثلاث.", "Photograph the space (lounge, room, corridor or wall) from 2–3 angles."),
          L("اكتب ماذا تريد: سقف جبس، قاطع، ديكور جدار، أو شغل كامل للبيت.", "Write what you want: a ceiling, a partition, a wall feature, or a full home job."),
          L("اذكر المحافظة والمنطقة (مثلاً: حولي – السالمية).", "Mention your governorate and area (e.g. Hawalli – Salmiya)."),
          L("أرسل الصور والمعلومات على الواتساب، ونرجع لك بسعر تقريبي ووقت التنفيذ.", "Send the photos and details on WhatsApp and we'll reply with an estimate and timeline."),
        ] },
    ],
  },
};

module.exports = { nav, services, pages };
