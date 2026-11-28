/* ==========================================================
   PAGE CONTENT — Arabic + English side by side: L("عربي", "English")
   Page structure mirrors the client's reference site (gypsumboardkw.com):
   same pages, same section order, same section types — our own wording & photos.
   ========================================================== */
const SITE = require("./site");
const L = (ar, en) => ({ ar, en });

/* ---------- Photos (file numbers in /images) ---------- */
const PH = {
  lounge: "1648776", layered: "8678894", medallion: "8232455", led: "7005461", recessed: "1571460", kitchen: "3214064",
  bedroom: "6585757", coffered: "36150897", tvwall: "1457842", slatwall: "248850", niche: "6585765", plank: "3750272",
  /* No real partition photos yet — these stand in until partition photos are added */
  part1: "1571460", part2: "8678894", part3: "6585765",
};

/* ---------- Services (menu order = reference order) ---------- */
const services = [
  { slug: "gypsum-ceilings", icon: "🪜", title: L("اسقف جبس بورد", "Gypsum Board Ceilings"), long: L("اسقف جبس بورد الكويت", "Gypsum ceilings in Kuwait"),
    home: L("تصاميم اسقف جبس بورد حديثة للصالات وغرف النوم والممرات.", "Modern gypsum ceiling designs for lounges, bedrooms and corridors."),
    text: L("اسقف جبس بورد مستوية ومعلّقة للصالة والغرف والمكاتب، مع تجهيز فتحات الإنارة والتكييف وتشطيب جاهز للدهان.", "Flat and suspended gypsum ceilings for lounges, bedrooms and offices, with light and AC openings prepared and a paint-ready finish."),
    area: L("اسقف معلّقة ومستوية للصالة وغرف النوم والممرات والمكاتب، مع تجهيز فتحات الإنارة والتكييف.", "Suspended and flat ceilings for lounges, bedrooms, corridors and offices, with light and AC openings."),
    more: L("مشاهدة تفاصيل خدمة الاسقف", "See ceiling service details") },
  { slug: "partitions", icon: "🧱", homeIcon: "🚪", title: L("قواطع جبس بورد", "Gypsum Board Partitions"), long: L("قواطع جبس بورد وتقسيم الغرف", "Gypsum partitions & room dividing"),
    home: L("تقسيم الغرف والمكاتب بقواطع جبس بورد مرتّبة وعازلة.", "Neat, insulated gypsum partitions to divide rooms and offices."),
    text: L("قواطع جبس بورد لتقسيم الغرف والصالات والمكاتب والعيادات، مع إمكانية العزل الصوتي وفتحات الأبواب والزجاج.", "Gypsum partitions to divide rooms, lounges, offices and clinics, with optional sound insulation, door openings and glass."),
    area: L("قواطع لتقسيم الغرف والصالات والمكاتب والعيادات، مع إمكانية إضافة عزل صوتي.", "Partitions to divide rooms, lounges, offices and clinics, with optional sound insulation."),
    more: L("مشاهدة تفاصيل خدمة القواطع", "See partition service details") },
  { slug: "decor", icon: "🎨", title: L("ديكورات جبس بورد", "Gypsum Board Decor"), long: L("ديكورات جبس بورد وجدار التلفزيون", "Gypsum decor & TV walls"),
    home: L("ديكورات جبس بورد للتلفزيون والجدران والسقف حسب ذوقك.", "Gypsum decor for TV walls, feature walls and ceilings, to your taste."),
    text: L("تصميم وتنفيذ ديكورات جبس بورد للجدران وجدار التلفزيون، مع رفوف ونيشات حسب صورتك أو أفكار نقترحها عليك.", "Design and build of gypsum wall features and TV walls, with shelves and niches from your photo or ideas we suggest."),
    area: L("جدار تلفزيون، نيشات ورفوف وديكورات حائط مع إضاءة مخفية للصالات وغرف النوم والمجالس.", "TV walls, niches, shelves and feature walls with hidden lighting for lounges, bedrooms and sitting rooms."),
    more: L("مشاهدة تفاصيل خدمة الديكورات", "See decor service details") },
  { slug: "craftsman", icon: "👷‍♂️", title: L("معلم جبس بورد", "Gypsum Board Craftsman"), long: L("معلم جبس بورد الكويت", "Gypsum craftsman in Kuwait"),
    home: L("تنفيذ مشاريع جبس بورد كاملة للشقق والفلل في الكويت.", "Complete gypsum projects for flats and villas in Kuwait."),
    text: L("معلم جبس بورد لتنفيذ مشاريع كاملة للشقق والفلل، من الاسقف إلى القواطع والديكورات، مع تشطيب مرتب وتسليم جاهز للدهان.", "A gypsum craftsman for complete flat and villa projects, from ceilings to partitions and decor, with a neat, paint-ready handover."),
    area: L("معلم جبس بورد يتابع مشروعك كاملاً من التصميم إلى التسليم في أي محافظة.", "A gypsum craftsman who handles your whole project, from design to handover, in any governorate."),
    more: L("مشاهدة تفاصيل خدمة المعلم", "See craftsman service details") },
  { slug: "pakistani-craftsman", icon: "🇵🇰", title: L("معلم جبس بورد باكستاني", "Pakistani Gypsum Craftsman"), long: L("معلم جبس بورد باكستاني الكويت", "Pakistani gypsum craftsman in Kuwait"),
    home: L("معلم باكستاني بخبرة في الاسقف والقواطع والديكورات.", "A Pakistani craftsman experienced in ceilings, partitions and decor."),
    text: L("معلم جبس بورد باكستاني بخبرة في الاسقف والقواطع والديكورات، مع التزام بالمواعيد وسعر واضح قبل بدء الشغل.", "A Pakistani gypsum craftsman experienced in ceilings, partitions and decor, punctual and with a clear price before work starts."),
    area: L("معلم باكستاني متمرّس في الاسقف والقواطع والديكورات بسعر واضح.", "An experienced Pakistani craftsman for ceilings, partitions and decor at a clear price."),
    more: L("مشاهدة تفاصيل الخدمة", "See service details") },
];
const svc = (slug) => services.find((s) => s.slug === slug);

const nav = [
  { slug: "index", label: L("الرئيسية", "Home") },
  { slug: "services", label: L("خدماتنا", "Services"), children: services.map((s) => ({ slug: s.slug, label: s.slug === "craftsman" ? s.long : s.title })) },
  { slug: "prices", label: L("الأسعار", "Prices") },
  { slug: "areas", label: L("مناطق الخدمة", "Service Areas") },
  { slug: "works", label: L("الأعمال", "Our Work") },
  { slug: "about", label: L("من نحن", "About Us") },
  { slug: "contact", label: L("اتصل بنا", "Contact") },
];

/* ---------- Reusable blocks ---------- */
const pills = { type: "pills" };
const otherServices = (slug) => ({ type: "otherServices", exclude: slug });
const ycall = (label) => ({ kind: "call", style: "yellow", label });
const owa = (label) => ({ kind: "wa", style: "outline", label });

const featCards = (h2, intro, items) => ({ type: "cards", style: "dark", align: "start", h2, intro, items });
const whyItems = [
  { icon: "⭐", title: L("خبرة في جبس بورد الكويت", "Gypsum experience in Kuwait"), text: L("تنفيذ أعمال جبس بورد في الشقق والفلل والمكاتب بمستوى ثابت.", "Gypsum work in flats, villas and offices at a consistent standard.") },
  { icon: "🧼", title: L("شغل مرتب ونظيف", "Neat, clean work"), text: L("نحافظ على نظافة المكان قدر الإمكان أثناء العمل وبعده.", "We keep the place as clean as possible during and after the job.") },
  { icon: "🧱", title: L("مواد وهياكل قوية", "Strong materials & frames"), text: L("ألواح جبس بورد وهياكل معدنية مناسبة لحرارة ورطوبة الكويت.", "Gypsum boards and metal frames suited to Kuwait's heat and humidity.") },
  { icon: "⏰", title: L("التزام بالموعد والسعر", "On time, agreed price"), text: L("موعد واضح وسعر متفق عليه قبل بدء الشغل بدون مفاجآت.", "A clear date and an agreed price before we start, with no surprises.") },
];

const homeGallery = (intro, area) => ({
  type: "gallery", h2: area ? L(`نماذج أعمال الجبس بورد ${area.ar}`, `Gypsum work examples – ${area.en}`) : L("معرض أعمال الجبس بورد", "Our gypsum work gallery"),
  intro: intro || L("بعض نماذج الاسقف والقواطع والديكورات التي نفّذناها لعملائنا في مناطق مختلفة من الكويت.", "Some of the ceilings, partitions and decor we've completed for clients across Kuwait."),
  items: [
    { img: PH.lounge, title: svc("gypsum-ceilings").title, text: L("مثال لسقف جبس بورد للصالة بتصميم مرتب وإضاءة مخفية وسبوت لايت.", "A lounge gypsum ceiling with a neat design, hidden cove light and spotlights."), href: "gypsum-ceilings", more: svc("gypsum-ceilings").more },
    { img: PH.part1, title: svc("partitions").title, text: L("مثال لقواطع جبس بورد لتقسيم صالة أو مكتب بطريقة عملية وخفيفة.", "Gypsum partitions dividing a lounge or office in a light, practical way."), href: "partitions", more: svc("partitions").more },
    { img: PH.tvwall, title: svc("decor").title, text: L("مثال لجدار تلفزيون من الجبس بورد مع رفوف وإضاءة مخفية هادئة.", "A gypsum TV wall with shelves and soft hidden lighting."), href: "decor", more: svc("decor").more },
  ],
  button: { label: L("شاهد المزيد من الأعمال", "See more of our work"), href: "works" },
});

const faqBlock = (h2, items, extra = {}) => ({ type: "faq", h2, items, buttons: [ycall(), owa()], ...extra });

/* ---------- FAQ answers used on several pages ---------- */
const A = {
  price: L("لا يوجد سعر ثابت للمتر، فهو يتغيّر حسب نوع الشغل (سقف مستوي أو متدرّج، قاطع أو ديكور)، ونوع اللوح، وعدد فتحات الإضاءة. أرسل صور المكان ومقاساته على الواتساب ونعطيك سعراً تقريبياً سريعاً.", "There's no fixed price per square metre. It changes with the job (flat or layered ceiling, partition or decor), the board type and the number of light points. Send photos and sizes on WhatsApp for a quick estimate."),
  climate: L("نعم، عند اختيار النوع الصحيح. في المطابخ والحمامات نستخدم ألواحاً مقاومة للرطوبة، ونركّب هياكل حديد مجلفن لا تصدأ، مع فواصل تمدد في المساحات الكبيرة.", "Yes, with the right type. In kitchens and bathrooms we use moisture-resistant boards on rust-proof galvanised frames, with expansion joints in large areas."),
  time: L("سقف غرفة عادي يحتاج غالباً يومين إلى ثلاثة أيام، والصالة أو التصاميم المتدرّجة من 4 إلى 7 أيام حسب المساحة والتفاصيل.", "A normal room ceiling usually takes 2–3 days; a lounge or layered design takes 4–7 days, depending on size and detail."),
  change: L("نعم، الجبس بورد سهل التعديل. يمكن فتح فتحة جديدة لإضاءة أو مكيّف، أو إزالة قاطع، بدون تكسير كبير.", "Yes, gypsum is easy to modify. New light or AC openings can be cut, or a partition removed, without heavy demolition."),
  photos: L("نعم. أرسل صوراً واضحة للمكان مع المقاسات التقريبية ونوع الشغل، ونرد عليك بسعر تقريبي، ثم نثبّت السعر بعد المعاينة إذا لزم.", "Yes. Send clear photos with rough sizes and the type of work, and we'll reply with an estimate, then confirm the price after a visit if needed."),
  visit: L("نعم، المعاينة وأخذ المقاسات مجانية في جميع محافظات الكويت، ونحدد موعداً يناسبك.", "Yes, the visit and measuring are free in every Kuwait governorate, at a time that suits you."),
  insulation: L("نعم، نضيف حشوة صوف صخري أو مواد عزل داخل القاطع لتقليل انتقال الصوت بين الغرف أو المكاتب.", "Yes, we add rock wool or other insulation inside the partition to reduce sound between rooms or offices."),
  start: L("نحتاج صور المكان، والمقاسات التقريبية، وفكرة عن الشغل المطلوب، واسم المنطقة. بعدها نحدد المعاينة والسعر وموعد البدء.", "We need photos of the space, rough sizes, an idea of the work and your area. Then we arrange the visit, price and start date."),
};

/* ---------- Service page template (ceilings / partitions / decor / craftsmen) ---------- */
const servicePage = (slug, o) => ({
  title: o.title, desc: o.lead,
  crumb: [{ slug: "services", label: L("خدماتنا", "Services") }],
  sections: [
    { type: "hero", h1: o.h1, lead: [o.lead] },
    { type: "cards", style: "cream", h2: o.offerTitle, intro: o.offerIntro, items: o.offer },
    featCards(o.featTitle, o.featIntro, o.feat),
    { type: "gallery", h2: o.galleryTitle, intro: o.galleryIntro, items: o.gallery, button: { label: L("شاهد المزيد من الأعمال", "See more of our work"), href: "works" } },
    pills,
    o.light && { type: "light", h2: o.light.h2, paras: o.light.paras },
    o.steps && { type: "steps", h2: o.stepsTitle, items: o.steps },
    o.price && { type: "priceBox", h2: o.price.h2, paras: o.price.paras, buttons: [ycall(o.price.call), owa(o.price.wa)] },
    faqBlock(o.faqTitle, o.faq),
    otherServices(slug),
  ].filter(Boolean),
});

/* ---------- Governorate page template ---------- */
const govPage = (a) => ({
  title: L(`جبس بورد ${a.city.ar} | ${SITE.name.ar}`, `Gypsum board in ${a.city.en} | ${SITE.name.en}`),
  desc: L(`اسقف وقواطع وديكورات جبس بورد في ${a.city.ar}: ${a.list.ar}`, `Gypsum ceilings, partitions and decor in ${a.city.en}: ${a.list.en}`),
  crumb: [{ slug: "areas", label: L("مناطق الخدمة", "Service Areas") }], navLabel: a.city, parent: "areas",
  sections: [
    { type: "hero", h1: L(`جبس بورد ${a.city.ar} – اسقف وقواطع وديكورات قريبة منك`, `Gypsum board in ${a.city.en} – ceilings, partitions & decor near you`),
      lead: [L(`ننفّذ أعمال الجبس بورد في ${a.city.ar} من اسقف معلّقة وقواطع لتقسيم الغرف وديكورات جدران وتلفزيون، للشقق والفلل والمكاتب.`, `We carry out gypsum work across ${a.city.en}: suspended ceilings, partitions to divide rooms, and wall & TV decor for flats, villas and offices.`)],
      buttons: [ycall(), owa()] },
    { type: "listBox", align: "start", h2: L(`مناطق خدمة الجبس بورد في ${a.city.ar}`, `Areas we serve in ${a.city.en}`),
      intro: L(`من أبرز المناطق التي نخدمها في ${a.city.ar}:`, `Some of the areas we cover in ${a.city.en}:`), items: a.detail,
      outro: L(`إذا لم تجد منطقتك بالاسم، تواصل معنا على الواتساب – غالباً نستطيع خدمتك ما دمت في ${a.short.ar} أو قريباً منها.`, `Don't see your area? Message us on WhatsApp – we can usually help anywhere in or near ${a.short.en}.`),
      buttons: [owa()] },
    { type: "serviceLinks", h2: L(`خدمات الجبس بورد المتوفرة في ${a.city.ar}`, `Gypsum services available in ${a.city.en}`),
      intro: L(`في ${a.city.ar} نقدّم نفس خدماتنا الرئيسية في باقي الكويت، بنفس الجودة والتشطيب النظيف.`, `In ${a.city.en} we offer the same main services as across Kuwait, with the same quality and clean finish.`),
      note: L("لمشاهدة جميع المحافظات بالتفصيل، زر صفحة مناطق الخدمة.", "To see every governorate in detail, visit the Service Areas page."), noteHref: "areas", style: "cream" },
    homeGallery(L(`بعض نماذج الاسقف والقواطع والديكورات التي ننفّذها لعملائنا في ${a.short.ar} وباقي مناطق الكويت.`, `Some ceilings, partitions and decor we've completed in ${a.short.en} and around Kuwait.`), a.short),
    faqBlock(L(`أسئلة شائعة عن الجبس بورد في ${a.short.ar}`, `Gypsum board FAQ – ${a.short.en}`), [
      { q: L(`كم سعر متر الجبس بورد في ${a.short.ar}؟`, `How much is gypsum board per metre in ${a.short.en}?`), a: A.price },
      { q: L(`هل توفرون معاينة مجانية في ${a.short.ar}؟`, `Do you offer a free visit in ${a.short.en}?`), a: A.visit },
      { q: L("كم يستغرق تنفيذ سقف جبس بورد؟", "How long does a gypsum ceiling take?"), a: A.time },
      { q: L("هل تنفّذون قواطع جبس بورد مع عزل صوتي؟", "Do you build partitions with sound insulation?"), a: A.insulation },
      { q: L("هل أستطيع إرسال الصور على الواتساب للتسعير؟", "Can I send photos on WhatsApp for a price?"), a: A.photos },
    ], { buttons: [ycall(), owa()] }),
  ],
});

/* ---------- Articles (blog) ---------- */
const articles = [
  { slug: "partition-installation", img: PH.part2,
    title: L("تركيب قواطع جبس بورد", "Installing gypsum partitions"),
    excerpt: L("تركيب قواطع الجبس بورد أسرع حل لتقسيم غرفة أو صالة أو مكتب بشكل مرتب. نجاح القاطع يعتمد على التخطيط قبل البدء.", "Gypsum partitions are the fastest neat way to divide a room, lounge or office. A good result depends on planning before you start."),
    intro: L("إذا كنت تريد تقسيم غرفة أو صالة أو مكتب بسرعة وبشكل مرتب، فقواطع الجبس بورد من أفضل الحلول. لكن نجاح القاطع يعتمد على تحديد التفاصيل الصحيحة قبل التركيب.", "If you want to divide a room, lounge or office quickly and neatly, gypsum partitions are one of the best options. But a good partition depends on getting the details right before installation."),
    body: [
      { h2: L("قبل تركيب القاطع: ماذا يجب أن تحدد؟", "Before installing: what to decide"), list: [
        L("مكان القاطع بحيث لا يضيّق حركة الأبواب والنوافذ.", "Where the partition goes, so doors and windows still open freely."),
        L("هل تحتاج عزلاً صوتياً؟ (مهم للغرف والمكاتب)", "Whether you need sound insulation (important for bedrooms and offices)."),
        L("مكان الباب واتجاه فتحه إن وُجد.", "The door position and opening direction, if any."),
        L("هل توجد مفاتيح كهرباء أو مخارج داخل القاطع؟", "Whether switches or sockets go inside the partition.") ] },
      { h2: L("خطوات تركيب القواطع بشكل صحيح", "Steps to install a partition properly"), ol: [
        L("تحديد المسار والقياس على الأرض والسقف بدقة.", "Mark the line precisely on the floor and ceiling."),
        L("تركيب الهيكل المعدني بحيث يكون القاطع مستقيماً وثابتاً.", "Fix the metal frame so the partition is straight and solid."),
        L("تثبيت ألواح الجبس بورد من الجهتين.", "Fix gypsum boards on both sides."),
        L("إضافة العزل الداخلي إذا كان القاطع لغرفة نوم أو مكتب أو عيادة.", "Add insulation inside if it's for a bedroom, office or clinic."),
        L("قفل الفواصل بالشريط والمعجون ثم الصنفرة والدهان.", "Tape and fill the joints, then sand and paint.") ] },
      { h2: L("متى نحتاج عزلاً صوتياً؟", "When do you need sound insulation?"), p: L("إذا كان التقسيم لغرفتين تُستخدمان في نفس الوقت، أو في المكاتب والعيادات، فالعزل يقلل انتقال الصوت بشكل واضح.", "If the two spaces are used at the same time, or in offices and clinics, insulation noticeably reduces sound transfer.") },
      { h2: L("نصائح ليطلع القاطع كأنه جدار أصلي", "Tips for a partition that looks original"), list: [
        L("تشطيب الزوايا بدقة ودهان بنفس لون الغرفة.", "Finish corners precisely and paint to match the room."),
        L("اختيار مكان الباب بعناية.", "Choose the door position carefully."),
        L("التأكد من الاستقامة قبل التشطيب النهائي.", "Check it's straight before the final finish.") ] },
    ],
    link: { label: L("تفاصيل القواطع: قواطع جبس بورد في الكويت", "Partition details: gypsum partitions in Kuwait"), href: "partitions" } },
  { slug: "gypsum-price-per-metre", img: PH.lounge,
    title: L("سعر متر الجبس بورد في الكويت", "Gypsum board price per metre in Kuwait"),
    excerpt: L("سعر متر الجبس بورد يختلف حسب نوع الشغل: سقف بسيط، سقف ديكوري، قواطع أو ديكور جدار. هنا تعرف العوامل التي تحدد السعر.", "The price per metre depends on the job: a simple ceiling, a decorative one, partitions or a wall feature. Here's what really sets the price."),
    intro: L("سعر متر الجبس بورد في الكويت ليس رقماً واحداً، لأنه يتغيّر حسب ما تريد تنفيذه: سقف بسيط، سقف ديكوري متدرّج، قواطع، أو ديكور جدار. حتى لا تتفاجأ بأرقام عامة، من المهم أن تعرف ما الذي يرفع السعر أو يخفّضه.", "There's no single price per metre for gypsum board in Kuwait, because it depends on what you build: a simple ceiling, a layered decorative ceiling, partitions or a wall feature. To avoid surprises from general numbers, it helps to know what pushes the price up or down."),
    body: [
      { h2: L("ما الذي يرفع أو يخفّض سعر المتر؟", "What raises or lowers the price per metre?"), list: [
        L("نوع الشغل: سقف أو قاطع أو ديكور جدار.", "Type of work: ceiling, partition or wall feature."),
        L("تعقيد التصميم: المستوى الواحد أوفر من المستويات والزوايا الكثيرة.", "Design complexity: one level costs less than many levels and corners."),
        L("الإضاءة: السبوت لايت والإضاءة المخفية وتجهيز الكهرباء.", "Lighting: spotlights, hidden cove light and electrical preparation."),
        L("نوع اللوح: العادي أوفر من المقاوم للرطوبة أو الحريق أو الصوتي.", "Board type: standard is cheaper than moisture-resistant, fire-rated or acoustic."),
        L("التشطيب: المعجون والصنفرة والدهان تحدد شكل النتيجة النهائية.", "Finishing: jointing, sanding and paint decide the final look.") ] },
      { h2: L("كيف تحصل على تسعيرة دقيقة بسرعة؟", "How to get an accurate price quickly"), p: L("أرسل لنا على الواتساب:", "Send us on WhatsApp:"), list: [
        L("صورة واضحة للمكان.", "A clear photo of the space."), L("المقاس بالمتر (طول × عرض).", "The size in metres (length × width)."),
        L("ماذا تريد بالضبط: سقف أو قاطع أو ديكور.", "Exactly what you want: ceiling, partition or decor."), L("هل تريد إضاءة مخفية أو سبوت لايت.", "Whether you want hidden lighting or spotlights.") ] },
      { h2: L("هل يختلف السعر بين الشقة والفيلا والمكتب؟", "Does the price differ for a flat, villa or office?"), p: L("نعم، لأن المساحات وطبيعة التصميم والتجهيزات تختلف. لذلك وضّح نوع المكان ومساحته حتى يكون السعر أقرب للواقع.", "Yes, because sizes, design and fittings differ. Tell us the type of place and its size so the estimate is realistic.") },
    ],
    link: { label: L("تفاصيل الأسعار كاملة: أسعار الجبس بورد في الكويت", "Full pricing details: gypsum board prices in Kuwait"), href: "prices" } },
  { slug: "gypsum-partition-kuwait", img: PH.part3,
    title: L("بارتشن جبس بورد في الكويت: تقسيم غرف ومكاتب بشكل مرتب", "Gypsum partitions in Kuwait: dividing rooms and offices neatly"),
    excerpt: L("البارتشن من أسرع الحلول لتقسيم غرفة أو مكتب بدون تكسير، ويعطي شكلاً نظيفاً بعد التشطيب.", "A partition is one of the fastest ways to divide a room or office without demolition, with a clean look after finishing."),
    intro: L("بارتشن الجبس بورد من أسرع الحلول إذا أردت تقسيم غرفة أو مكتب بدون تكسير أو بناء طابوق، وفي نفس الوقت يعطي شكلاً نظيفاً كأنه جدار أصلي بعد التشطيب.", "A gypsum partition is one of the quickest ways to divide a room or office without demolition or blockwork, and after finishing it looks like an original wall."),
    body: [
      { h2: L("متى يكون البارتشن خياراً ممتازاً؟", "When is a partition a great choice?"), list: [
        L("عندما تريد تقسيماً سريعاً في وقت قصير.", "When you want a quick division in a short time."),
        L("عندما تتوقع تعديلات مستقبلية.", "When you expect changes later."),
        L("عندما تريد شكلاً مرتباً كأنه جدار أصلي.", "When you want a neat look like an original wall.") ] },
      { h2: L("أمثلة تقسيم مطلوبة كثيراً", "Common examples"), list: [
        L("تقسيم غرفة كبيرة إلى غرفتين للأطفال أو مكتب.", "Splitting a large room into two kids' rooms or a study."),
        L("إنشاء غرفة اجتماعات داخل مكتب.", "Creating a meeting room inside an office."),
        L("تقسيم استقبال وممر وغرف عمل.", "Dividing reception, a corridor and work rooms.") ] },
      { h2: L("العزل الصوتي في البارتشن", "Sound insulation in partitions"), p: L("للغرف والمكاتب والعيادات يكون العزل الصوتي مهماً، ويعتمد على سماكة القاطع والحشوة الداخلية وعدد الألواح.", "For bedrooms, offices and clinics sound insulation matters. It depends on the partition's thickness, the core and the number of boards.") },
      { h2: L("نصائح ليطلع البارتشن مرتباً", "Tips for a neat partition"), list: [
        L("حدّد مكان الباب من البداية.", "Decide the door position from the start."),
        L("اهتم باستقامة الزوايا ونظافة التشطيب.", "Keep corners straight and the finish clean."),
        L("لا تختر الأرخص فقط، اختر الشغل الذي يدوم.", "Don't just pick the cheapest – pick work that lasts.") ] },
    ],
    link: { label: L("تفاصيل القواطع والبارتشن: قواطع جبس بورد في الكويت", "Partition details: gypsum partitions in Kuwait"), href: "partitions" } },
  { slug: "gypsum-installation-steps", img: PH.layered,
    title: L("خطوات تركيب الجبس بورد في الكويت: دليل عملي قبل أن تبدأ", "Gypsum board installation steps in Kuwait: a practical guide"),
    excerpt: L("حتى يطلع الجبس بورد مرتباً بدون تشققات أو تعرجات، لا بد من خطوات صحيحة من البداية.", "For a neat result without cracks or waves, gypsum work needs the right steps from the start."),
    intro: L("إذا أردت أن يطلع شغل الجبس بورد مرتباً ولا يسبب تشققات أو تعرجات بعد فترة، فلا بد من اتباع خطوات صحيحة من البداية وحتى التشطيب النهائي.", "If you want gypsum work that stays neat without cracks or waves later, you need the right steps from the start to the final finish."),
    body: [
      { h2: L("1) قبل التركيب: ماذا تحدد؟", "1) Before installing: what to decide"), list: [
        L("نوع الشغل: سقف أو قواطع أو ديكورات جدار.", "Type of work: ceiling, partitions or wall decor."),
        L("أماكن الإضاءة والسبوت لايت من البداية.", "Where lights and spotlights go, from the start."),
        L("القياسات الدقيقة بالمتر.", "Accurate measurements in metres."),
        L("هل تحتاج عزلاً صوتياً أو تجهيزات إضافية؟", "Whether you need sound insulation or other fittings.") ] },
      { h2: L("2) تركيب الهيكل (أهم مرحلة)", "2) Installing the frame (the key stage)"), p: L("الهيكل هو الأساس. إذا كان مستقيماً ومضبوطاً يطلع التشطيب نظيفاً، وإذا كان فيه خطأ تظهر التعاريج حتى بعد الدهان.", "The frame is the foundation. If it's straight and accurate the finish is clean; if not, waves show even after painting.") },
      { h2: L("3) تركيب الألواح وقفل الفواصل", "3) Boards and joints"), p: L("بعد تثبيت الألواح تُقفل الفواصل بالشريط والمعجون، ويجب ترك المعجون يجف تماماً قبل الصنفرة.", "After fixing the boards, joints are taped and filled, and the compound must dry fully before sanding.") },
      { h2: L("4) التشطيب النهائي", "4) Final finishing"), p: L("التشطيب المرتب يعني زوايا نظيفة وصنفرة صحيحة ومعجوناً متوازناً، ثم الدهان.", "A neat finish means clean corners, correct sanding and even filling, then paint.") },
      { h2: L("أخطاء شائعة تخرب النتيجة", "Common mistakes"), list: [
        L("الاستعجال في الصنفرة قبل الجفاف.", "Sanding before the compound is dry."),
        L("ترك تخطيط الكهرباء لآخر لحظة.", "Leaving electrical planning to the last minute."),
        L("عدم معالجة الزوايا والحواف بشكل صحيح.", "Not treating corners and edges properly.") ] },
      { h2: L("متى الأفضل أن تتواصل مع معلم؟", "When to call a craftsman"), p: L("إذا أردت شغلاً مضموناً من التخطيط إلى التنفيذ والتشطيب، تواصل معنا قبل اختيار التصميم أو شراء المواد.", "If you want reliable work from planning to installation and finishing, contact us before choosing a design or buying materials.") },
    ],
    link: { label: L("للتنفيذ والحجز: معلم جبس بورد في الكويت", "To book the work: gypsum craftsman in Kuwait"), href: "craftsman" } },
  { slug: "cove-light-ceiling-price", img: PH.led,
    title: L("سعر متر اسقف الجبس بورد مع إضاءة مخفية في الكويت", "Price of gypsum ceilings with hidden lighting in Kuwait"),
    excerpt: L("سعر سقف الجبس بورد مع الإضاءة المخفية يعتمد على نوع السقف وعدد المستويات ونوع الإضاءة وتجهيز الكهرباء.", "The price of a gypsum ceiling with hidden lighting depends on the ceiling type, number of levels, lighting type and electrical work."),
    intro: L("سعر متر اسقف الجبس بورد مع الإضاءة المخفية في الكويت يعتمد على تفاصيل واضحة: نوع السقف، وعدد المستويات، ونوع الإضاءة، وتجهيز الكهرباء، والتشطيب.", "The price per metre of a gypsum ceiling with hidden lighting in Kuwait depends on clear details: the ceiling type, number of levels, lighting type, electrical work and finishing."),
    body: [
      { h2: L("هل يوجد سعر ثابت للمتر؟", "Is there a fixed price per metre?"), p: L("لا يوجد رقم ثابت لأن كل بيت وكل تصميم يختلف، لكن يمكنك معرفة سعر تقريبي جيد إذا وضّحت المساحة ونوع السقف ونوع الإضاءة.", "No, because every home and design differs – but you can get a good estimate by giving the size, ceiling type and lighting type.") },
      { h2: L("العوامل التي تحدد السعر فعلياً", "What actually sets the price"), list: [
        L("سقف مستوي أو معلّق: المعلّق يحتاج هيكلاً وتعليقاً أكثر.", "Flat or suspended: suspended needs more frame and hangers."),
        L("عدد المستويات والزوايا: كل مستوى إضافي يزيد القص والتركيب والتشطيب.", "Levels and corners: each extra level adds cutting, fixing and finishing."),
        L("نوع الإضاءة: الإضاءة المحيطية تختلف عن الخطية أو السبوت لايت.", "Lighting type: perimeter cove differs from line lights or spotlights."),
        L("شغل الكهرباء: فتحات السبوت لايت والتمديدات وأماكن المحولات.", "Electrical work: spotlight openings, wiring and driver locations.") ] },
      { h2: L("أنواع الإضاءة المخفية الأكثر طلباً", "The most requested hidden-lighting styles"), h3s: [
        { h3: L("1) إضاءة محيطية (كوف لايت)", "1) Perimeter cove light"), p: L("تعطي إضاءة ناعمة للصالة وغرف النوم، وتحتاج تجويفاً مرتباً حول السقف.", "Soft light for lounges and bedrooms; needs a neat recess around the ceiling.") },
        { h3: L("2) سبوت لايت مع إضاءة مخفية", "2) Spotlights with cove light"), p: L("أفضل خيار لإنارة قوية وشكل فخم، بشرط توزيع السبوتات بشكل صحيح.", "Best for strong light and a rich look, if the spotlights are placed correctly.") },
        { h3: L("3) إضاءة خطية", "3) Line lights"), p: L("ستايل حديث يحتاج دقة عالية في القياس والاستقامة.", "A modern style that needs very precise, straight work.") } ] },
      { h2: L("كيف توفّر بدون أن يقل الشكل؟", "How to save without losing the look"), list: [
        L("في المساحات الصغيرة يكفي مستوى واحد مع إضاءة محيطية بسيطة.", "In small rooms, one level with simple cove light is enough."),
        L("قلّل الزوايا غير الضرورية، فالتصميم النظيف أجمل دائماً.", "Cut unnecessary corners – a clean design always looks better."),
        L("ركّز على جودة التشطيب.", "Focus on finishing quality.") ] },
      { h2: L("أسئلة شائعة", "FAQ"), h3s: [
        { h3: L("هل الإضاءة المخفية ترفع السعر كثيراً؟", "Does hidden lighting raise the price much?"), p: L("تزيد التكلفة لأنها تحتاج تجويفاً وتجهيز كهرباء، لكنها تعطي فرقاً كبيراً في الشكل.", "It adds cost because of the recess and electrics, but makes a big difference to the look.") },
        { h3: L("هل تعطون سعراً بدون معاينة؟", "Can you price without a visit?"), p: L("نعطي سعراً تقريبياً من الصورة والمقاس ونوع الإضاءة، ثم نثبّته بالمعاينة.", "We estimate from a photo, size and lighting type, then confirm after a visit.") } ] },
    ],
    link: { label: L("تفاصيل خدمات الاسقف: اسقف جبس بورد في الكويت", "Ceiling service details: gypsum ceilings in Kuwait"), href: "gypsum-ceilings" } },
];

/* ======================= PAGES ======================= */
const pages = {
  index: {
    title: L(`${SITE.name.ar} – اسقف، قواطع وديكورات جبس بورد الكويت`, `${SITE.name.en} – Gypsum ceilings, partitions & decor in Kuwait`),
    desc: L("اسقف جبس بورد حديثة، قواطع مرتّبة، وديكورات جبس بورد للصالات والغرف والمكاتب في جميع محافظات الكويت.", "Modern gypsum ceilings, neat partitions and gypsum decor for lounges, bedrooms and offices across Kuwait."),
    sections: [
      { type: "hero", h1: L(`${SITE.name.ar} – خبراء اسقف وقواطع وديكورات الجبس بورد في الكويت`, `${SITE.name.en} – gypsum ceiling, partition & decor experts in Kuwait`),
        lead: [L("اسقف جبس بورد حديثة، قواطع مرتّبة، وديكورات جبس بورد للصالات والغرف والمكاتب في جميع محافظات الكويت.", "Modern gypsum ceilings, neat partitions and gypsum decor for lounges, bedrooms and offices in every governorate of Kuwait.")] },
      { type: "cards", style: "cream", h2: L("خدمات الجبس بورد لدينا", "Our gypsum board services"),
        intro: L("اختر الخدمة المناسبة لك واضغط عليها لمعرفة التفاصيل أو للتواصل معنا.", "Choose the service you need and tap it for details or to contact us."),
        items: services.slice(0, 4).map((s) => ({ icon: s.homeIcon || s.icon, title: s.title, text: s.home, href: s.slug })),
        button: { label: L("شاهد جميع خدمات الجبس بورد", "See all our gypsum services"), href: "services" } },
      featCards(L(`لماذا تختار ${SITE.short.ar}؟`, `Why choose ${SITE.short.en}?`), L("نحرص على شغل جبس بورد مرتب ونظيف، مع التزام بالمواعيد وأسعار واضحة تناسب ميزانيتك.", "Neat, clean gypsum work, on-time delivery and clear prices that fit your budget."), whyItems),
      { type: "areas", h2: L(`مناطق خدمة ${SITE.short.ar}`, `Where ${SITE.short.en} works`),
        intro: L("نخدم أغلب مناطق الكويت ونصل إليك بسرعة لتنفيذ أعمال الجبس بورد في الشقق والفلل والمكاتب.", "We cover most of Kuwait and reach you quickly for gypsum work in flats, villas and offices."),
        note: L("إذا لم تجد منطقتك في القائمة، تواصل معنا على الواتساب – ننفّذ أعمال الجبس بورد في جميع مناطق الكويت.", "Don't see your area? Message us on WhatsApp – we work all over Kuwait."),
        button: { label: L("مشاهدة جميع مناطق الخدمة بالتفصيل", "See all service areas in detail"), href: "areas", style: "outline" } },
      homeGallery(),
      { type: "faq", h2: L("أسئلة شائعة عن الجبس بورد في الكويت", "Common questions about gypsum board in Kuwait"),
        intro: L("هذه بعض الأسئلة التي تتكرر من العملاء عن الأسعار والتنفيذ:", "Questions clients often ask about prices and installation:"),
        items: [
          { q: L("كم سعر متر الجبس بورد في الكويت تقريباً؟", "Roughly how much is gypsum board per metre in Kuwait?"), a: A.price },
          { q: L("هل الجبس بورد يتحمل الرطوبة والحرارة في الكويت؟", "Does gypsum board handle Kuwait's heat and humidity?"), a: A.climate },
          { q: L("كم يحتاج وقت تركيب الجبس بورد للصالة أو الغرف؟", "How long does a lounge or room take?"), a: A.time },
          { q: L("هل يمكن تعديل أو إزالة الجبس بورد لاحقاً؟", "Can gypsum be changed or removed later?"), a: A.change },
        ], contactLine: true, buttons: [ycall(), owa()] },
      { type: "reviews", h2: L("آراء بعض عملائنا في شغل الجبس بورد", "What some of our clients say"),
        intro: L("ملاحظات من عملاء بعد تنفيذ اسقف وقواطع وديكورات جبس بورد في مناطق مختلفة من الكويت. بعد انتهاء شغلك يمكن أن نضيف تقييمك هنا أيضاً.", "Feedback from clients after ceilings, partitions and decor across Kuwait. After your job, your review can appear here too."),
        note: L("بعد انتهاء شغلك، أرسل تقييمك على الواتساب، وننشره بإذنك بدون ذكر الاسم الكامل.", "After your job, send your review on WhatsApp and, with your permission, we'll post it without your full name.") },
    ],
  },

  services: {
    title: L("خدمات جبس بورد الكويت | اسقف وقواطع وديكورات ومعلم جبس بورد", "Gypsum services in Kuwait | Ceilings, partitions, decor & craftsmen"),
    desc: L("ملخص كل خدمات الجبس بورد: اسقف، قواطع، ديكورات، معلم جبس بورد، ومعلم باكستاني.", "All our gypsum services: ceilings, partitions, decor, craftsman and Pakistani craftsman."),
    sections: [
      { type: "hero", h1: L("خدمات جبس بورد الكويت – اسقف، قواطع، ديكورات ومعلم جبس بورد", "Gypsum services in Kuwait – ceilings, partitions, decor & craftsmen"),
        lead: [L(`في هذه الصفحة تجد ملخصاً واضحاً لكل ما تقدّمه ${SITE.short.ar}: اسقف معلّقة ومستوية، قواطع لتقسيم الغرف والمكاتب، ديكورات جدران وجدار تلفزيون، ومعلم جبس بورد متخصص في جميع محافظات الكويت.`, `A clear summary of everything ${SITE.short.en} offers: suspended and flat ceilings, partitions for rooms and offices, wall and TV-wall decor, and specialist gypsum craftsmen in every governorate.`)] },
      { type: "cards", style: "cream", h2: L("خدمات جبس بورد الكويت التي نقدّمها", "The gypsum services we offer in Kuwait"),
        intro: L("اضغط على الخدمة المناسبة لمعرفة التفاصيل الكاملة عن الأسعار وطريقة التنفيذ والصور. ننفّذ للشقق والفلل والمكاتب والعيادات في أغلب مناطق الكويت.", "Tap a service for full details on prices, how we work and photos. We work in flats, villas, offices and clinics across most of Kuwait."),
        items: services.map((s) => ({ icon: s.icon, title: s.long, text: s.text, href: s.slug })) },
      featCards(L(`لماذا تختار ${SITE.short.ar} لخدمات الجبس بورد؟`, `Why choose ${SITE.short.en} for gypsum work?`),
        L("تحصل على شغل مرتب ومواد مناسبة لمناخ الكويت وسعر واضح قبل البدء، مع تواصل سهل على الواتساب وإرسال الصور في أي وقت.", "Neat work, materials suited to Kuwait's climate and a clear price before we start, with easy WhatsApp contact any time."), [
        { icon: "⭐", title: L("خبرة في الاسقف والقواطع", "Ceiling & partition experience"), text: L("مشاريع جبس بورد كثيرة في شقق وفلل ومكاتب بمستوى تشطيب ثابت.", "Many gypsum projects in flats, villas and offices with consistent finishing.") },
        { icon: "🧼", title: L("شغل نظيف واحترام للمكان", "Clean work, respect for your home"), text: L("نغطي الأثاث والأرضيات عند الحاجة ونرتّب المكان أثناء الشغل وبعده.", "We cover furniture and floors when needed and tidy up during and after work.") },
        { icon: "⏰", title: L("مواعيد واضحة وسعر متفق عليه", "Clear dates, agreed price"), text: L("نوضّح السعر والمدة قبل البدء ونلتزم بالموعد المتفق عليه.", "We confirm price and duration before starting and keep to the agreed date.") },
        { icon: "🌡️", title: L("مواد تناسب مناخ الكويت", "Materials for Kuwait's climate"), text: L("ألواح وهياكل تتحمل الحرارة والرطوبة، مع اهتمام بالتهوية وفتحات التكييف.", "Boards and frames that handle heat and humidity, with care for ventilation and AC openings.") },
      ]),
      { type: "gallery", h2: L("نماذج من أعمال الجبس بورد", "Examples of our gypsum work"), intro: L("أمثلة سريعة للاسقف والقواطع والديكورات.", "Quick examples of ceilings, partitions and decor."),
        items: [
          { img: PH.layered, title: svc("gypsum-ceilings").title, text: L("اسقف مستوية ومعلّقة مع تجهيز فتحات الإنارة وتشطيب مرتب.", "Flat and suspended ceilings with light openings and a neat finish."), href: "gypsum-ceilings", more: svc("gypsum-ceilings").more },
          { img: PH.part1, title: svc("partitions").title, text: L("تقسيم غرف وصالات ومكاتب مع خيار عزل صوتي.", "Dividing rooms, lounges and offices, with optional sound insulation."), href: "partitions", more: svc("partitions").more },
          { img: PH.tvwall, title: svc("decor").title, text: L("جدار تلفزيون ونيشات ورفوف مع تجهيز الإضاءة.", "TV walls, niches and shelves with lighting prepared."), href: "decor", more: svc("decor").more },
        ], button: { label: L("شاهد المزيد من الأعمال", "See more of our work"), href: "works" } },
      { type: "priceBox", h2: L("خدمات الجبس بورد في جميع المحافظات", "Gypsum services in every governorate"),
        paras: [L("ننفّذ خدماتنا في العاصمة وحولي والفروانية والجهراء والأحمدي ومبارك الكبير. التفاصيل في صفحة مناطق الخدمة.", "We work in the Capital, Hawalli, Farwaniya, Jahra, Ahmadi and Mubarak Al-Kabeer. Details are on the Service Areas page."),
          L("للتسعير السريع أرسل صور المكان على الواتساب أو اتصل مباشرة على {phone}.", "For a quick price, send photos on WhatsApp or call {phone}.")],
        buttons: [ycall(L("اتصل الآن", "Call now"))] },
      pills,
      faqBlock(L("أسئلة شائعة عن خدمات الجبس بورد", "Gypsum services FAQ"), [
        { q: L("ما هي خدمات الجبس بورد التي تقدّمونها؟", "Which gypsum services do you offer?"), a: L("اسقف مستوية ومعلّقة ومتدرّجة، قواطع لتقسيم الغرف والمكاتب، ديكورات جدران وجدار تلفزيون، ومعلم جبس بورد لتنفيذ مشاريع كاملة.", "Flat, suspended and layered ceilings, partitions for rooms and offices, wall and TV-wall decor, and a craftsman for complete projects.") },
        { q: L("هل تخدمون جميع محافظات الكويت؟", "Do you cover every governorate?"), a: L("نعم، نعمل في المحافظات الست، وإذا لم تجد منطقتك في القائمة تواصل معنا.", "Yes, all six. If your area isn't listed, just contact us.") },
        { q: L("كم سعر متر الجبس بورد؟", "How much is gypsum board per metre?"), a: A.price },
        { q: L("هل توفّرون معاينة أو تسعيراً من الصور؟", "Can you visit or price from photos?"), a: A.photos },
        { q: L("ما الذي تحتاجونه لبدء العمل؟", "What do you need to get started?"), a: A.start },
      ]),
      { type: "quickLinks", label: L("روابط سريعة:", "Quick links:"), links: [
        { href: "index", label: L("الرئيسية", "Home") }, { href: "areas", label: L("مناطق الخدمة", "Service areas") },
        { href: "works", label: L("معرض الأعمال", "Our work") }, { href: "prices", label: L("الأسعار", "Prices") } ] },
    ],
  },

  "gypsum-ceilings": servicePage("gypsum-ceilings", {
    title: L("اسقف جبس بورد في الكويت | تصاميم حديثة وتشطيب مرتب", "Gypsum ceilings in Kuwait | Modern designs, neat finish"),
    h1: L("اسقف جبس بورد الكويت – تصاميم حديثة وتشطيب مرتب", "Gypsum ceilings in Kuwait – modern designs, neat finish"),
    lead: L("ننفّذ اسقف جبس بورد حديثة ومعلّقة ومستوية للصالة والغرف والمكاتب في جميع مناطق الكويت، مع تشطيب نظيف وتجهيز فتحات الإنارة والتكييف حسب تصميمك.", "We install modern suspended and flat gypsum ceilings for lounges, bedrooms and offices all over Kuwait, with a clean finish and light and AC openings prepared to your design."),
    offerTitle: L("خدمات اسقف الجبس بورد التي نقدّمها", "Gypsum ceiling services we offer"),
    offerIntro: L("ننفّذ جميع أنواع اسقف الجبس بورد بهيكل معدني متين، من التصميم البسيط إلى الديكور المتدرّج بالإضاءة المخفية.", "All kinds of gypsum ceilings on a strong metal frame, from simple designs to layered decor with hidden lighting."),
    offer: [
      { icon: "🪜", title: L("اسقف مستوية ومعلّقة", "Flat & suspended ceilings"), text: L("اسقف مستوية أو معلّقة مع عزل وتشطيب ناعم.", "Flat or suspended ceilings with insulation and a smooth finish.") },
      { icon: "🏠", title: L("للصالة والغرف والمكاتب", "For every room"), text: L("للصالات وغرف النوم وغرف الأطفال والمكاتب والفلل.", "Lounges, bedrooms, kids' rooms, offices and villas.") },
      { icon: "💡", title: L("تجهيز فتحات الإنارة", "Light openings"), text: L("فتحات السبوت لايت والثريات والمكيّف مع توزيع مرتب للأسلاك.", "Openings for spotlights, chandeliers and AC with tidy wiring.") },
      { icon: "🎨", title: L("تصاميم خاصة", "Custom designs"), text: L("ننفّذ التصميم الذي ترسله أو نقترح أفكاراً تناسب ميزانيتك.", "We build the design you send, or suggest ideas for your budget.") },
    ],
    featTitle: L(`مميزات اسقف الجبس بورد من ${SITE.short.ar}`, "Why our gypsum ceilings stand out"),
    featIntro: L("نركّز على تشطيب مرتب ومواد مناسبة لمناخ الكويت، مع التزام بالمواعيد والسعر.", "We focus on a neat finish and materials suited to Kuwait's climate, keeping to dates and price."),
    feat: [
      { icon: "⭐", title: L("خبرة في الاسقف", "Ceiling experience"), text: L("اسقف جبس بورد في شقق وفلل ومكاتب بمستوى ثابت.", "Gypsum ceilings in flats, villas and offices at a consistent standard.") },
      { icon: "🧼", title: L("شغل نظيف ومرتب", "Clean, tidy work"), text: L("نحافظ على نظافة المكان أثناء الشغل وبعده.", "We keep your place clean during and after the job.") },
      { icon: "⏰", title: L("التزام بالمواعيد والسعر", "On time and on price"), text: L("نوضّح السعر والمدة المتوقعة قبل البدء.", "Price and expected duration are clear before we start.") },
      { icon: "🧱", title: L("مواد تناسب المناخ", "Climate-ready materials"), text: L("ألواح وهياكل تتحمل الرطوبة والحرارة في الكويت.", "Boards and frames that handle Kuwait's heat and humidity.") },
    ],
    galleryTitle: L("نماذج من اسقف الجبس بورد التي نفّذناها", "Examples of our gypsum ceilings"),
    galleryIntro: L("بعض أمثلة الاسقف للصالة والغرف. شاهد المزيد في صفحة الأعمال.", "Some lounge and room ceilings. See more on the Our Work page."),
    gallery: [
      { img: PH.lounge, title: L("سقف جبس بورد للصالة", "Lounge gypsum ceiling"), text: L("سقف للصالة بديكور بسيط وإضاءة مخفية وسبوت لايت.", "A lounge ceiling with simple detail, cove light and spotlights.") },
      { img: PH.layered, title: L("سقف بمستويات بسيطة", "Simple layered ceiling"), text: L("مستويات هادئة مع إنارة مخفية لغرفة المعيشة.", "Calm layers with hidden lighting for a living room.") },
      { img: PH.medallion, title: L("سقف جبس كلاسيك", "Classic gypsum ceiling"), text: L("تصميم كلاسيكي مع ثريا في منتصف الصالة.", "A classic design with a chandelier at the centre.") },
    ],
    stepsTitle: L("كيف ننفّذ مشروع سقف جبس بورد؟", "How we build a gypsum ceiling"),
    steps: [
      L("تتواصل معنا على الهاتف أو الواتساب وترسل صور الصالة أو الغرفة.", "You call or WhatsApp us with photos of the lounge or room."),
      L("نقترح تصميماً بسيطاً أو حسب صورتك، ونوضّح السعر التقريبي.", "We suggest a simple design or follow your photo, and give an estimate."),
      L("نحضر في الموعد، نركّب الهيكل المعدني ثم الألواح ونجهّز فتحات الإنارة.", "We arrive on time, fix the metal frame, then the boards, and prepare light openings."),
      L("نقفل الفواصل ونصنفر ونسلّمك سقفاً جاهزاً للدهان.", "We finish the joints, sand, and hand over a paint-ready ceiling."),
    ],
    price: { h2: L("كم سعر متر اسقف الجبس بورد في الكويت؟", "How much do gypsum ceilings cost per metre in Kuwait?"),
      paras: [L("يختلف السعر حسب نوع السقف ومساحة الصالة أو الغرف وعدد المستويات والتشطيب المطلوب. غالباً نعطيك سعراً تقريبياً بعد استلام صور ومقاسات المكان.", "It depends on the ceiling type, the size of the rooms, the number of levels and the finish. We can usually estimate after receiving photos and sizes."),
        L("للتسعير السريع أرسل صور الصالة أو الغرف على الواتساب أو اتصل على {phone}.", "For a quick price, send photos on WhatsApp or call {phone}.")],
      call: L("اتصل الآن لسعر الاسقف", "Call now for a ceiling price"), wa: L("أرسل صور السقف على الواتساب", "Send ceiling photos on WhatsApp") },
    faqTitle: L("أسئلة شائعة عن اسقف الجبس بورد", "Gypsum ceilings FAQ"),
    faq: [
      { q: L("ما الفرق بين السقف المستوي والسقف المعلّق؟", "What's the difference between a flat and a suspended ceiling?"), a: L("المستوي يُركّب قريباً من السقف الأصلي بسطح واحد، والمعلّق يُنزل بهيكل وتعليقات ليخفي الأسلاك والمواسير ويسمح بمستويات وإضاءة مخفية.", "A flat ceiling sits close to the slab as one surface; a suspended one hangs on a frame to hide wiring and pipes and allow levels and hidden lighting.") },
      { q: L("هل يمكن عمل سقف مع إضاءة مخفية وسبوت لايت؟", "Can you add hidden lighting and spotlights?"), a: L("نعم، نجهّز التجويف للإضاءة المخفية وفتحات السبوت لايت أثناء التركيب.", "Yes, we prepare the cove recess and spotlight openings during installation.") },
      { q: L("كم سعر متر اسقف الجبس بورد؟", "How much per metre?"), a: L("السقف المستوي هو الأوفر، وكل مستوى إضافي وخط إضاءة مخفية يزيد التكلفة. اللوح العادي أرخص من المقاوم للرطوبة أو الحريق أو الصوتي.", "Flat is the most economical; each extra level and cove line adds cost. Standard board is cheaper than moisture-resistant, fire-rated or acoustic board.") },
      { q: L("كم يحتاج تركيب السقف من وقت؟", "How long does installation take?"), a: A.time },
      { q: L("ماذا تحتاجون للتسعير السريع؟", "What do you need for a quick price?"), a: A.photos },
    ],
  }),

  partitions: servicePage("partitions", {
    title: L("قواطع جبس بورد في الكويت | بارتشن لتقسيم الغرف والمكاتب", "Gypsum partitions in Kuwait | Dividing rooms and offices"),
    h1: L("قواطع جبس بورد الكويت (بارتشن) – تقسيم غرف وصالات ومكاتب بترتيب", "Gypsum partitions in Kuwait – dividing rooms, lounges and offices neatly"),
    lead: L("ننفّذ قواطع وبارتشن جبس بورد لتقسيم الغرف والصالات والمكاتب والعيادات في مختلف مناطق الكويت، باستقامة ممتازة وتشطيب نظيف جاهز للدهان.", "We build gypsum partitions to divide rooms, lounges, offices and clinics across Kuwait, perfectly straight with a clean, paint-ready finish."),
    offerTitle: L("خدمات قواطع وبارتشن الجبس بورد", "Our partition services"),
    offerIntro: L("قواطع مستقيمة وثابتة بهيكل معدني متين، بتصميم بسيط أو ديكوري، مع عزل صوتي عند الحاجة.", "Straight, solid partitions on a strong metal frame, simple or decorative, with sound insulation when needed."),
    offer: [
      { icon: "🧱", title: L("تقسيم الغرف والصالات", "Rooms & lounges"), text: L("غرفة إضافية أو غرفة خادمة أو مخزن أو فصل جزء من الصالة.", "An extra room, maid's room, store, or part of the lounge.") },
      { icon: "🏢", title: L("قواطع للمكاتب والعيادات", "Offices & clinics"), text: L("غرف عمل واستقبال مع إمكانية الأبواب والزجاج الجزئي.", "Work rooms and reception, with doors and partial glass.") },
      { icon: "🔇", title: L("قواطع مع عزل صوتي", "Sound-insulated"), text: L("حشوة صوف صخري لتقليل انتقال الصوت.", "Rock-wool core to reduce sound transfer.") },
      { icon: "🎨", title: L("قواطع ديكورية ونيشات", "Decorative with niches"), text: L("فتحات ورفوف ونيشات ومكان للتلفزيون حسب صورتك.", "Openings, shelves, niches and a TV spot from your photo.") },
    ],
    featTitle: L(`مميزات قواطع الجبس بورد من ${SITE.short.ar}`, "Why our partitions stand out"),
    featIntro: L("قواطع مستقيمة وثابتة وتشطيب جاهز للدهان، مع مواد مناسبة لمناخ الكويت.", "Straight, solid partitions and a paint-ready finish, with materials suited to Kuwait."),
    feat: [
      { icon: "📏", title: L("استقامة وثبات", "Straight and solid"), text: L("توزيع صحيح للهياكل وتربيع الزوايا بدون ميلان.", "Correct frame spacing and square corners, no leaning.") },
      { icon: "🔇", title: L("خيارات عزل", "Insulation options"), text: L("عزل صوتي وحراري حسب استخدام الغرفة.", "Sound and heat insulation to suit the room.") },
      { icon: "🧼", title: L("شغل نظيف", "Clean work"), text: L("بدون تكسير أو غبار بناء كثير.", "No demolition and little building dust.") },
      { icon: "⏰", title: L("سرعة في التنفيذ", "Fast installation"), text: L("قاطع الغرفة غالباً يوم إلى يومين.", "A room partition usually takes 1–2 days.") },
    ],
    galleryTitle: L("نماذج من قواطع الجبس بورد", "Examples of our partitions"),
    galleryIntro: L("أمثلة لقواطع في البيوت والمكاتب. شاهد المزيد في صفحة الأعمال.", "Partition examples in homes and offices. See more on the Our Work page."),
    gallery: [
      { img: PH.part1, title: L("قاطع لتقسيم صالة", "Lounge divider"), text: L("قاطع خفيف يفصل جزءاً من الصالة.", "A light partition closing off part of a lounge.") },
      { img: PH.part2, title: L("قواطع للمكاتب", "Office partitions"), text: L("تقسيم مكتب مفتوح إلى غرف عمل مرتبة.", "An open office divided into tidy work rooms.") },
      { img: PH.part3, title: L("قاطع ديكوري مع نيش", "Decorative partition with niche"), text: L("قاطع مع نيش مضيء ورفوف.", "A partition with a lit niche and shelves.") },
    ],
    light: { h2: L("ما هو بارتشن الجبس بورد؟ وهل يختلف عن القواطع؟", "What is a gypsum 'partition'? Is it different?"),
      paras: [L("في الكويت يستخدم كثير من الناس كلمة «بارتشن» بنفس معنى قواطع الجبس بورد: جدار خفيف من ألواح الجبس على هيكل معدني لتقسيم المساحة بدون بناء طابوق.", "In Kuwait many people say 'partition' to mean a gypsum wall: a light wall of gypsum boards on a metal frame that divides a space without blockwork."),
        L("سواء طلبت قواطع جبس بورد أو بارتشن، ننفّذ لك نفس الشغل بالعزل والتشطيب المناسب للمكتب أو العيادة أو الشقة أو الفيلا.", "Whether you ask for gypsum partitions or a 'partition', we build the same thing with the right insulation and finish for an office, clinic, flat or villa.")] },
    stepsTitle: L("كيف ننفّذ مشروع قواطع جبس بورد؟", "How we build a partition"),
    steps: [
      L("تتواصل معنا وترسل صور أو فيديو للمكان مع فكرة التقسيم.", "You contact us with photos or a video and your idea."),
      L("نقترح طريقة التقسيم ونوضّح السعر والمدة التقريبية.", "We suggest the layout and confirm the price and timing."),
      L("في المشاريع الأكبر نزور الموقع لتثبيت المقاسات والأبواب.", "For larger jobs we visit to confirm sizes and doors."),
      L("نركّب الهيكل ونمرّر الكهرباء ثم الألواح والمعجون والصنفرة.", "We fix the frame, run electrics, then boards, jointing and sanding."),
      L("نفحص الاستقامة ونسلّمك المكان نظيفاً.", "We check it's straight and hand over a clean space."),
    ],
    price: { h2: L("كم سعر متر قواطع الجبس بورد؟", "How much do partitions cost per metre?"),
      paras: [L("يختلف السعر حسب طول القاطع وارتفاعه وعدد القواطع ونوع الألواح وعدد الطبقات، وهل يوجد عزل صوتي أو تصميم ديكوري.", "It depends on the length and height, the number of partitions, board type and layers, and whether there's sound insulation or decorative detail."),
        L("غالباً نعطيك سعراً تقريبياً بعد صور واضحة وبعض المقاسات، ثم نثبّته بعد المعاينة إذا لزم.", "We can usually estimate from clear photos and some sizes, then confirm after a visit if needed."),
        L("للتسعير السريع أرسل صور المكان على الواتساب أو اتصل على {phone}.", "For a quick price, send photos on WhatsApp or call {phone}.")],
      call: L("اتصل الآن لسعر القواطع", "Call now for a partition price"), wa: L("أرسل صور القواطع المطلوبة على الواتساب", "Send partition photos on WhatsApp") },
    faqTitle: L("أسئلة شائعة عن قواطع وبارتشن الجبس بورد", "Partitions FAQ"),
    faq: [
      { q: L("هل قاطع الجبس قوي مثل الطوب؟", "Is a gypsum partition as strong as brick?"), a: L("للاستخدام اليومي نعم، خاصة مع لوحين في كل جهة، ونضع تقوية داخلية مكان الرفوف أو التلفزيون.", "For everyday use, yes – especially with double boards – and we add backing where shelves or a TV go.") },
      { q: L("هل يمكن إضافة باب أو زجاج؟", "Can you add a door or glass?"), a: L("نعم، نجهّز فتحة الباب أو أجزاء الزجاج أثناء تركيب الهيكل.", "Yes, we prepare the door opening or glass sections while fixing the frame.") },
      { q: L("هل تنفّذون عزلاً صوتياً؟", "Do you do sound insulation?"), a: A.insulation },
      { q: L("كم يستغرق تركيب القاطع؟", "How long does it take?"), a: L("قاطع الغرفة العادي غالباً يوم إلى يومين، والمكاتب حسب عدد الغرف.", "A normal room partition takes 1–2 days; offices depend on the number of rooms.") },
      { q: L("هل يمكن إزالة القاطع لاحقاً؟", "Can it be removed later?"), a: A.change },
    ],
  }),

  decor: servicePage("decor", {
    title: L("ديكورات جبس بورد في الكويت | جدار تلفزيون ونيشات", "Gypsum decor in Kuwait | TV walls & niches"),
    h1: L("ديكورات جبس بورد الكويت – جدران وتلفزيون ونيشات مرتّبة", "Gypsum decor in Kuwait – feature walls, TV walls and niches"),
    lead: L("نصمّم وننفّذ ديكورات جبس بورد للجدران وجدار التلفزيون مع رفوف ونيشات وإضاءة مخفية، حسب صورتك أو أفكار نجهّزها لك.", "We design and build gypsum feature walls and TV walls with shelves, niches and hidden lighting, from your photo or ideas we prepare."),
    offerTitle: L("أنواع ديكورات الجبس بورد التي نقدّمها", "Types of gypsum decor we build"),
    offerIntro: L("لمسة واحدة تغيّر شكل الصالة أو المدخل أو غرفة النوم.", "One feature that changes a lounge, entrance or bedroom."),
    offer: [
      { icon: "📺", title: L("جدار تلفزيون", "TV wall"), text: L("إطار جبس مع رفوف وإضاءة مخفية وأماكن لإخفاء الأسلاك.", "A gypsum frame with shelves, hidden light and cable management.") },
      { icon: "🕳️", title: L("نيشات ورفوف", "Niches & shelves"), text: L("نيشات مضيئة للمداخل والممرات وغرف النوم.", "Lit niches for entrances, corridors and bedrooms.") },
      { icon: "🧱", title: L("ديكورات حائط", "Feature walls"), text: L("براويز وتقسيمات وأشكال هندسية على الجدار.", "Frames, panels and geometric shapes on the wall.") },
      { icon: "💡", title: L("ديكور مع إضاءة", "Decor with lighting"), text: L("خطوط إضاءة وإضاءة مخفية تبرز الديكور.", "Light lines and cove light that bring out the design.") },
    ],
    featTitle: L(`مميزات ديكورات الجبس بورد من ${SITE.short.ar}`, "Why our decor stands out"),
    featIntro: L("تشطيب دقيق وتفاصيل مرتبة وتنفيذ قريب جداً من الصورة.", "Precise finishing, tidy detail and results very close to the photo."),
    feat: [
      { icon: "🎯", title: L("تنفيذ حسب الصورة", "Built from your photo"), text: L("نعدّل التصميم ليناسب مقاس جدارك.", "We adapt the design to your wall size.") },
      { icon: "🔌", title: L("تجهيز الكهرباء", "Electrics prepared"), text: L("أماكن الإضاءة والأسلاك مخططة من البداية.", "Light and cable positions planned from the start.") },
      { icon: "🧼", title: L("شغل نظيف", "Clean work"), text: L("زوايا وحواف نظيفة جاهزة للدهان.", "Clean corners and edges, ready for paint.") },
      { icon: "🔩", title: L("تقوية للتلفزيون", "TV backing"), text: L("تقوية داخلية مكان حامل التلفزيون والرفوف.", "Internal backing for the TV bracket and shelves.") },
    ],
    galleryTitle: L("نماذج من ديكورات الجبس بورد", "Examples of our decor"),
    galleryIntro: L("بعض ديكورات الجدران التي نفّذناها. شاهد المزيد في صفحة الأعمال.", "Some of our wall decor. See more on the Our Work page."),
    gallery: [
      { img: PH.tvwall, title: L("جدار تلفزيون", "TV wall"), text: L("جدار تلفزيون بلون داكن وإضاءة هادئة.", "A dark TV wall with soft lighting.") },
      { img: PH.niche, title: L("جدار مع نيش مضيء", "Wall with a lit niche"), text: L("نيش مضيء ورفوف بتشطيب ناعم.", "A lit niche and shelves with a smooth finish.") },
      { img: PH.slatwall, title: L("جدار بشرائح ديكورية", "Slatted feature wall"), text: L("شرائح ديكورية تعطي دفئاً للجدار.", "Decorative slats that warm up the wall.") },
    ],
    stepsTitle: L("كيف ننفّذ مشروع ديكور جبس بورد؟", "How we build a decor project"),
    steps: [
      L("ترسل لنا صورة الجدار والتصميم الذي يعجبك.", "Send us a photo of the wall and a design you like."),
      L("نعدّل التصميم حسب المقاس ونوضّح السعر.", "We adapt the design to the size and confirm the price."),
      L("نحدد أماكن الإضاءة والأسلاك والتقوية.", "We plan lights, cables and backing."),
      L("نركّب الهيكل والألواح وننفّذ الرفوف والنيشات.", "We fix the frame and boards and build shelves and niches."),
      L("نشطّب ونسلّمك الديكور جاهزاً للدهان.", "We finish and hand over, ready for paint."),
    ],
    price: { h2: L("كم سعر ديكورات الجبس بورد تقريباً؟", "Roughly how much does gypsum decor cost?"),
      paras: [L("السعر يعتمد على عرض الجدار وعدد الرفوف والنيشات وكمية التفاصيل والإضاءة.", "It depends on the wall width, number of shelves and niches, amount of detail and lighting."),
        L("الجدار البسيط مع إضاءة مخفية هو الأوفر، والديكورات بتفاصيل كثيرة أو مواد إضافية تكون أعلى.", "A simple wall with cove light is the most affordable; designs with lots of detail or extra materials cost more."),
        L("للتسعير السريع أرسل صورة الجدار والتصميم على الواتساب أو اتصل على {phone}.", "For a quick price, send the wall and design photos on WhatsApp or call {phone}.")],
      call: L("اتصل الآن لسعر الديكور", "Call now for a decor price"), wa: L("أرسل صورة الجدار على الواتساب", "Send your wall photo on WhatsApp") },
    faqTitle: L("أسئلة شائعة عن ديكورات الجبس بورد", "Gypsum decor FAQ"),
    faq: [
      { q: L("هل يمكن تنفيذ تصميم من صورة أرسلها؟", "Can you build a design from my photo?"), a: L("نعم، أرسل الصورة ومقاس الجدار، ونعدّل التصميم ليناسب مساحتك وميزانيتك.", "Yes. Send the photo and wall size and we'll adapt it to your space and budget.") },
      { q: L("هل جدار الجبس يتحمل تلفزيوناً كبيراً؟", "Can a gypsum wall hold a big TV?"), a: L("نعم، نضع تقوية خشبية أو معدنية داخل الجدار مكان الحامل.", "Yes, we fit timber or steel backing where the bracket goes.") },
      { q: L("هل تنفّذون الإضاءة المخفية؟", "Do you do hidden lighting?"), a: L("نجهّز التجويف ومكان الشريط والأسلاك، ويُركّب الشريط مع الكهرباء.", "We prepare the recess, strip channel and wiring; the strip is fitted with the electrics.") },
      { q: L("كم يحتاج تنفيذ الديكور من وقت؟", "How long does decor take?"), a: L("جدار تلفزيون عادي غالباً من يومين إلى أربعة أيام حسب التفاصيل.", "A typical TV wall takes 2–4 days depending on detail.") },
      { q: L("هل تنفّذون ديكورات للسقف أيضاً؟", "Do you do ceiling decor too?"), a: L("نعم، راجع صفحة اسقف الجبس بورد.", "Yes – see the Gypsum Ceilings page.") },
    ],
  }),

  craftsman: servicePage("craftsman", {
    title: L("معلم جبس بورد في الكويت | اسقف وقواطع وديكورات", "Gypsum craftsman in Kuwait | Ceilings, partitions & decor"),
    h1: L("معلم جبس بورد الكويت – اسقف وقواطع وديكورات بيد واحدة", "Gypsum craftsman in Kuwait – ceilings, partitions and decor in one hand"),
    lead: L("معلم جبس بورد يتابع مشروعك من البداية حتى التسليم: اسقف وقواطع وديكورات للشقق والفلل والمكاتب، بتشطيب مرتب وسعر واضح.", "One gypsum craftsman who handles your project from start to handover: ceilings, partitions and decor for flats, villas and offices, with a neat finish and clear price."),
    offerTitle: L("أعمال الجبس بورد التي ينفّذها المعلم", "What our craftsman does"),
    offerIntro: L("معلم واحد مسؤول عن شغلك كاملاً بدل التعامل مع أكثر من جهة.", "One craftsman responsible for the whole job instead of several contractors."),
    offer: [
      { icon: "🪜", title: L("اسقف كاملة", "Full ceilings"), text: L("اسقف مستوية ومعلّقة ومتدرّجة لكل الغرف.", "Flat, suspended and layered ceilings for every room.") },
      { icon: "🧱", title: L("قواطع وتقسيمات", "Partitions"), text: L("تقسيم الغرف والمكاتب مع العزل.", "Dividing rooms and offices, with insulation.") },
      { icon: "🎨", title: L("ديكورات وجدران", "Decor & walls"), text: L("جدار تلفزيون ونيشات ورفوف.", "TV walls, niches and shelves.") },
      { icon: "🛠️", title: L("صيانة وتعديل", "Repairs & changes"), text: L("إصلاح التشققات وفتح فتحات جديدة.", "Fixing cracks and cutting new openings.") },
    ],
    featTitle: L(`لماذا تختار معلم جبس بورد من ${SITE.short.ar}؟`, "Why choose our craftsman?"),
    featIntro: L("خبرة عملية وتشطيب نظيف وتواصل مباشر طوال المشروع.", "Hands-on experience, a clean finish and direct contact throughout."),
    feat: whyItems,
    galleryTitle: L("نماذج أعمال معلم الجبس بورد", "Examples of our craftsman's work"),
    galleryIntro: L("أمثلة من الاسقف والديكورات التي نفّذها فريقنا.", "Ceilings and decor completed by our team."),
    gallery: [
      { img: PH.lounge, title: L("سقف للصالة", "Lounge ceiling"), text: L("سقف بطبقتين وإضاءة مخفية.", "Two levels with cove light.") },
      { img: PH.bedroom, title: L("سقف غرفة نوم", "Bedroom ceiling"), text: L("سقف بسيط مع إضاءة دائرية.", "A simple ceiling with a round light feature.") },
      { img: PH.tvwall, title: L("جدار تلفزيون", "TV wall"), text: L("ديكور جدار بإضاءة هادئة.", "A feature wall with soft lighting.") },
    ],
    faqTitle: L("أسئلة شائعة عن معلم الجبس بورد", "Craftsman FAQ"),
    faq: [
      { q: L("هل المعلم يزور الموقع قبل السعر؟", "Does the craftsman visit before quoting?"), a: A.visit },
      { q: L("هل توفّرون المواد أم أجرة يد فقط؟", "Do you supply materials or labour only?"), a: L("الخياران متاحان: أجرة يد فقط إذا كانت المواد عندك، أو مواد وأجرة يد بسعر واضح.", "Both: labour only if you have materials, or materials plus labour at a clear price.") },
      { q: L("هل تنفّذون مشاريع كاملة للفلل؟", "Do you take on full villa projects?"), a: L("نعم، من الاسقف والقواطع إلى الديكورات، ونسلّم جاهزاً للدهان.", "Yes, from ceilings and partitions to decor, handed over paint-ready.") },
      { q: L("كم يحتاج المشروع من وقت؟", "How long does a project take?"), a: A.time },
      { q: L("ماذا تحتاجون لبدء العمل؟", "What do you need to start?"), a: A.start },
    ],
  }),

  "pakistani-craftsman": servicePage("pakistani-craftsman", {
    title: L("معلم جبس بورد باكستاني في الكويت", "Pakistani gypsum craftsman in Kuwait"),
    h1: L("معلم جبس بورد باكستاني الكويت – خبرة في الاسقف والقواطع والديكور", "Pakistani gypsum craftsman in Kuwait – ceilings, partitions and decor"),
    lead: L("معلم جبس بورد باكستاني بخبرة عملية في الاسقف والقواطع والديكورات، يلتزم بالمواعيد ويعطيك سعراً واضحاً قبل البدء.", "A Pakistani gypsum craftsman with hands-on experience in ceilings, partitions and decor, who keeps to dates and gives a clear price before starting."),
    offerTitle: L("أعمال الجبس بورد التي ينفّذها المعلم الباكستاني", "What our Pakistani craftsman does"),
    offerIntro: L("شغل يدوي متقن وتشطيب نظيف في البيوت والمكاتب.", "Skilled handwork and a clean finish in homes and offices."),
    offer: [
      { icon: "🪜", title: L("اسقف جبس بورد", "Gypsum ceilings"), text: L("اسقف مستوية ومتدرّجة بإضاءة مخفية.", "Flat and layered ceilings with hidden lighting.") },
      { icon: "🧱", title: L("قواطع وبارتشن", "Partitions"), text: L("تقسيم الغرف والمكاتب بقواطع ثابتة.", "Solid partitions for rooms and offices.") },
      { icon: "🎨", title: L("ديكورات جدران", "Wall decor"), text: L("جدار تلفزيون ونيشات ورفوف.", "TV walls, niches and shelves.") },
      { icon: "🏛️", title: L("كرانيش وتفاصيل", "Cornices & detail"), text: L("كرانيش وتفاصيل كلاسيكية حسب الطلب.", "Cornices and classic detail on request.") },
    ],
    featTitle: L("مميزات المعلم الباكستاني", "Why our Pakistani craftsman"),
    featIntro: L("خبرة سنوات في الجبس، وتعامل محترم، وسعر واضح.", "Years of gypsum experience, respectful service and a clear price."),
    feat: [
      { icon: "⭐", title: L("خبرة عملية", "Practical experience"), text: L("سنوات من العمل في الجبس بورد.", "Years of gypsum board work.") },
      { icon: "🤝", title: L("تعامل محترم", "Respectful service"), text: L("تواصل سهل بالعربي والأردو والإنجليزي.", "Easy to talk to in Arabic, Urdu and English.") },
      { icon: "⏰", title: L("التزام بالمواعيد", "Punctual"), text: L("نحضر في الموعد وننهي في المدة المتفق عليها.", "On time and finished within the agreed period.") },
      { icon: "💰", title: L("سعر واضح", "Clear price"), text: L("سعر متفق عليه قبل البدء بدون مفاجآت.", "An agreed price before starting, no surprises.") },
    ],
    galleryTitle: L("نماذج أعمال المعلم الباكستاني", "Examples of our Pakistani craftsman's work"),
    galleryIntro: L("بعض الاسقف والديكورات من أعمالنا.", "Some ceilings and decor from our work."),
    gallery: [
      { img: PH.layered, title: L("سقف بمستويات", "Layered ceiling"), text: L("مستويات بسيطة وإضاءة مخفية.", "Simple levels with hidden light.") },
      { img: PH.medallion, title: L("سقف كلاسيك", "Classic ceiling"), text: L("ميدالية وكرانيش حول الثريا.", "A medallion and cornice around the chandelier.") },
      { img: PH.niche, title: L("جدار مع نيش", "Wall with niche"), text: L("نيش مضيء ورفوف.", "A lit niche with shelves.") },
    ],
    faqTitle: L("أسئلة شائعة عن المعلم الباكستاني", "Pakistani craftsman FAQ"),
    faq: [
      { q: L("هل يتكلم المعلم العربية؟", "Does the craftsman speak Arabic?"), a: L("نعم، ويتواصل أيضاً بالأردو والإنجليزية.", "Yes, and also Urdu and English.") },
      { q: L("هل يعمل في جميع المحافظات؟", "Does he work in all governorates?"), a: L("نعم، في المحافظات الست حسب المواعيد المتاحة.", "Yes, in all six, depending on available dates.") },
      { q: L("كم سعر الشغل؟", "How much does it cost?"), a: A.price },
      { q: L("هل يوفّر المواد؟", "Does he supply materials?"), a: L("أجرة يد فقط أو مواد وأجرة يد، حسب رغبتك.", "Labour only or materials plus labour, as you prefer.") },
      { q: L("كيف أحجز موعداً؟", "How do I book?"), a: L("اتصل أو أرسل صور المكان على الواتساب ونحدد موعد المعاينة.", "Call or send photos on WhatsApp and we'll book a visit.") },
    ],
  }),

  prices: {
    title: L("أسعار الجبس بورد في الكويت | كيف نحسب تكلفة الاسقف والقواطع؟", "Gypsum board prices in Kuwait | How we price ceilings & partitions"),
    desc: L("كيف نحسب سعر متر الجبس بورد في الكويت، وأمثلة على حساب التكلفة، وكيف تحصل على عرض سعر بسرعة.", "How we price gypsum work in Kuwait, worked examples, and how to get a quote quickly."),
    sections: [
      { type: "hero", h1: L("أسعار الجبس بورد في الكويت – كيف نحسب تكلفة الشغل؟", "Gypsum board prices in Kuwait – how we work out the cost"),
        lead: [L("كثير من العملاء يسألون عن سعر متر الجبس بورد أو تكلفة الاسقف والقواطع. نحسب السعر بطريقة واضحة حسب المساحة ونوع الشغل والتصميم.", "Many clients ask about the price per metre or the cost of ceilings and partitions. We price clearly by area, type of work and design."),
          L("لا نضع سعراً ثابتاً للجميع لأن كل مشروع يختلف، لكن نعطيك سعراً تقريبياً سريعاً بعد استلام صور المكان على الواتساب.", "There's no single price for everyone because every job differs, but we give a quick estimate once we receive photos on WhatsApp.")],
        buttons: [ycall(L("اتصل للسؤال عن الأسعار", "Call to ask about prices")), owa(L("أرسل صور المكان على الواتساب لعرض سعر", "Send photos on WhatsApp for a quote"))] },
      { type: "cards", style: "cream", align: "start", h2: L("من ماذا يتكوّن سعر متر الجبس بورد؟", "What makes up the price per metre?"),
        intro: L("السعر يعتمد على عدة عوامل، لذلك نحتاج نعرف نوع الشغل والمساحة قبل إعطاء رقم دقيق. أهم العوامل:", "The price depends on several factors, so we need the type of work and the size before giving an exact figure. The main ones:"),
        items: [
          { icon: "📏", title: L("مساحة المكان بالمتر", "Area in square metres"), text: L("حجم الصالة أو الغرفة أو طول القواطع يحدد كمية الألواح والهياكل.", "The size of the room or length of partitions sets how much board and frame is needed.") },
          { icon: "🧱", title: L("نوع الشغل المطلوب", "Type of work"), text: L("سقف أو قواطع أو ديكور جدار تلفزيون – لكل نوع طريقة شغل مختلفة.", "Ceiling, partitions or a TV wall – each is built differently.") },
          { icon: "🎨", title: L("التصميم: بسيط أو متدرّج", "Design: simple or layered"), text: L("السقف البسيط أوفر من الاسقف متعددة المستويات بالإضاءة المخفية.", "A simple ceiling costs less than multi-level designs with hidden lighting.") },
          { icon: "🔩", title: L("نوع المواد والهياكل", "Materials & frames"), text: L("ألواح عادية أو مقاومة للرطوبة أو الحريق، وكثافة الهيكل وطريقة التعليق.", "Standard, moisture- or fire-resistant boards, frame spacing and hanging method.") },
          { icon: "💡", title: L("فتحات الإنارة والمكيّف", "Light & AC openings"), text: L("عدد السبوت لايت وأماكن المكيّف ومجاري الهواء.", "The number of spotlights and the AC and duct positions.") },
          { icon: "📍", title: L("المحافظة وموقع المشروع", "Governorate & location"), text: L("مكان المشروع والدور وارتفاع السقف تؤثر على النقل والوقت.", "Location, floor and ceiling height affect transport and time.") },
        ] },
      { type: "listBox", align: "start", h2: L("أمثلة على طريقة حساب التكلفة", "Examples of how we price"),
        intro: L("هذه الأمثلة توضح طريقة التفكير في السعر، وليست عرض سعر ثابت:", "These show how we think about price; they are not fixed quotes:"),
        items: [
          L("سقف بسيط لصالة: نحسب سعر المتر للسقف مع الهيكل، ثم نضيف حسب عدد فتحات الإضاءة.", "Simple lounge ceiling: price per metre including the frame, plus the number of light points."),
          L("قاطع لغرفة أو مكتب: الطول × الارتفاع، وهل يحتاج باباً أو عزلاً صوتياً.", "Room or office partition: length × height, plus any door or sound insulation."),
          L("جدار تلفزيون مع رفوف ونيشات: حسب التصميم وعدد الرفوف وطول الجدار.", "TV wall with shelves and niches: by design, number of shelves and wall length."),
          L("مشروع كامل لشقة أو فيلا: نجمع الاسقف والقواطع والديكورات في عرض واحد، وغالباً يكون أوفر.", "Full flat or villa: ceilings, partitions and decor in one quote, usually better value."),
        ], outro: L("للحصول على سعر حقيقي نحتاج بعض الصور والمقاس التقريبي مع اسم المحافظة والمنطقة.", "For a real price we need some photos and rough sizes, plus your governorate and area.") },
      { type: "steps", h2: L("كيف تحصل على عرض سعر خلال وقت قصير؟", "How to get a quote quickly"),
        intro: L("اتبع هذه الخطوات البسيطة:", "Follow these simple steps:"),
        items: [
          L("صوّر المكان من زاويتين أو ثلاث بشكل واضح.", "Take 2–3 clear photos of the space."),
          L("اكتب المقاس التقريبي بالمتر.", "Write the rough size in metres."),
          L("وضّح نوع الشغل: سقف أو قاطع أو ديكور.", "Say what you need: ceiling, partition or decor."),
          L("أرسلها على الواتساب مع اسم المنطقة.", "Send them on WhatsApp with your area."),
        ], buttons: [ycall()] },
      faqBlock(L("أسئلة شائعة عن أسعار الجبس بورد", "Gypsum prices FAQ"), [
        { q: L("هل يوجد سعر ثابت لمتر الجبس بورد؟", "Is there a fixed price per metre?"), a: A.price },
        { q: L("أي أنواع الألواح أرخص وأيها أغلى؟", "Which boards are cheaper and which cost more?"), a: L("اللوح العادي الأبيض هو الأرخص ويناسب الغرف الجافة، ثم المقاوم للرطوبة (الأخضر) للمطابخ والحمامات، ثم المقاوم للحريق، والأغلى اللوح الصوتي المثقّب للقاعات والمكاتب.", "Standard white board is cheapest and suits dry rooms; then moisture-resistant (green) for kitchens and bathrooms; then fire-rated; the most expensive is perforated acoustic board for halls and offices.") },
        { q: L("أي أنواع الاسقف أوفر؟", "Which ceiling styles cost least?"), a: L("الأوفر بلاطات 60×60 للمكاتب، ثم السقف المستوي، ثم السقف بمستوى واحد وإضاءة مخفية. الاسقف متعددة المستويات والكلاسيكية والخشبية هي الأعلى سعراً.", "Cheapest are 60×60 grid tiles for offices, then a flat ceiling, then one level with cove light. Multi-level, classic and wooden ceilings cost the most.") },
        { q: L("هل المعاينة مجانية؟", "Is the visit free?"), a: A.visit },
        { q: L("هل السعر يشمل الدهان؟", "Does the price include paint?"), a: L("نسلّم عادة جاهزاً للدهان، ويمكن إضافة الدهان في العرض إذا طلبت.", "We usually hand over paint-ready; painting can be added to the quote on request.") },
      ]),
      { type: "linksStrip", label: L("لمعرفة تفاصيل كل خدمة، يمكنك زيارة:", "For details on each service, visit:"), links: services.slice(0, 4).map((s) => ({ href: s.slug, label: s.title })) },
    ],
  },

  areas: {
    title: L("مناطق خدمة الجبس بورد في الكويت", "Gypsum service areas in Kuwait"),
    desc: L("المحافظات والمناطق التي نخدمها في الكويت لأعمال الجبس بورد.", "The Kuwait governorates and areas we cover for gypsum work."),
    sections: [
      { type: "hero", h1: L(`مناطق خدمة ${SITE.short.ar} في الكويت`, `${SITE.short.en} service areas in Kuwait`),
        lead: [L("ننفّذ أعمال الاسقف والقواطع والديكورات في جميع محافظات الكويت، للشقق والفلل والمكاتب والعيادات والمحلات.", "We do ceilings, partitions and decor in every governorate of Kuwait, for flats, villas, offices, clinics and shops."),
          L("نخدم المحافظات الست: العاصمة، حولي، الفروانية، الجهراء، الأحمدي ومبارك الكبير – وإذا لم تجد منطقتك بالاسم فغالباً نستطيع خدمتك.", "We cover all six: Capital, Hawalli, Farwaniya, Jahra, Ahmadi and Mubarak Al-Kabeer – and if your area isn't named, we can usually still help.")],
        badges: 1, buttons: [ycall(), owa()] },
      { type: "areaLinks", h2: L("محافظات الكويت التي نخدمها", "The Kuwait governorates we serve"),
        intro: L("اضغط على اسم المحافظة لعرض صفحة مفصّلة بالمناطق التي نخدمها داخلها:", "Tap a governorate for a page with the areas we serve there:"),
        note: L("إذا لم تجد منطقتك بالاسم، تواصل معنا على الواتساب – غالباً نستطيع خدمتك ما دمت داخل الكويت.", "Don't see your area? Message us on WhatsApp – we can usually help anywhere in Kuwait.") },
      { type: "serviceLinks", h2: L("خدمات الجبس بورد المتوفرة في جميع المحافظات", "Gypsum services available in every governorate"),
        intro: L("أينما كنت في الكويت نقدّم لك نفس الخدمات الرئيسية بنفس الجودة:", "Wherever you are in Kuwait, you get the same main services at the same quality:"),
        note: L("للتسعير السريع أرسل صور المكان على الواتساب مع اسم المحافظة والمنطقة، ونرجع لك بسعر تقريبي ووقت التنفيذ.", "For a quick price, send photos on WhatsApp with your governorate and area, and we'll reply with an estimate and timeline."), noteWa: true },
    ],
  },

  works: {
    title: L("أعمال الجبس بورد | صور اسقف وقواطع وديكورات", "Our gypsum work | Ceiling, partition & decor photos"),
    desc: L("نماذج من أعمال الجبس بورد: اسقف وقواطع وديكورات جدران في الشقق والفلل والمكاتب.", "Examples of our gypsum work: ceilings, partitions and wall decor in flats, villas and offices."),
    sections: [
      { type: "hero", h1: L(`أعمال الجبس بورد – صور من شغل ${SITE.short.ar}`, `Our gypsum work – photos from ${SITE.short.en} projects`),
        lead: [L("هنا تجد نماذج من الاسقف والقواطع وديكورات الجدران التي نفّذناها في شقق وفلل ومكاتب داخل الكويت.", "Examples of ceilings, partitions and wall decor we've completed in flats, villas and offices in Kuwait."),
          L("نحدّث المعرض باستمرار، ويمكنك دائماً طلب صور أعمال مشابهة لشغلك على الواتساب.", "We update the gallery regularly, and you can always ask for photos of similar jobs on WhatsApp.")],
        buttons: [owa(L("اطلب صور أعمال مشابهة على الواتساب", "Ask for similar photos on WhatsApp")), ycall()] },
      { type: "gallery", cols: 4, h2: L("معرض صور أعمال الجبس بورد", "Gypsum work photo gallery"),
        intro: L("صور اسقف وقواطع وديكورات في الصالات والغرف والمكاتب والممرات. اضغط على أي صورة لتكبيرها.", "Ceilings, partitions and decor in lounges, rooms, offices and corridors. Tap any photo to enlarge it."),
        items: [
          { img: PH.lounge, title: L("سقف جبس بورد للصالة", "Lounge gypsum ceiling"), text: L("سقف بسيط مع إضاءة مخفية يعطي الصالة شكلاً أنيقاً.", "A simple ceiling with cove light that makes the lounge elegant.") },
          { img: PH.layered, title: L("سقف لغرفة المعيشة", "Living-room ceiling"), text: L("سقف ناعم بمستويات هادئة وإنارة موزعة.", "A smooth ceiling with calm levels and even light.") },
          { img: PH.medallion, title: L("سقف مزخرف", "Decorative ceiling"), text: L("سقف كلاسيكي مع ثريا وزخارف حولها.", "A classic ceiling with a chandelier and mouldings.") },
          { img: PH.bedroom, title: L("سقف لغرفة النوم", "Bedroom ceiling"), text: L("سقف مستوي مع إطار بسيط وإضاءة مريحة.", "A flat ceiling with a simple frame and soft light.") },
          { img: PH.part2, title: L("قواطع للمكاتب", "Office partitions"), text: L("تقسيم مكتب مفتوح إلى غرف عمل مرتبة.", "An open office divided into tidy work rooms.") },
          { img: PH.part1, title: L("قواطع للصالة", "Lounge partitions"), text: L("قاطع خفيف لتقسيم الصالة إلى أكثر من مساحة.", "A light partition splitting a lounge into zones.") },
          { img: PH.tvwall, title: L("ديكور جدار تلفزيون", "TV wall decor"), text: L("جدار تلفزيون بإضاءة هادئة يناسب الصالات الحديثة.", "A TV wall with soft light for modern lounges.") },
          { img: PH.niche, title: L("ديكور للمداخل", "Entrance decor"), text: L("ديكور بسيط مع نيش مضيء للمداخل والممرات.", "A simple feature with a lit niche for entrances and corridors.") },
        ] },
      { type: "listBox", align: "start", h2: L("صور واقعية من شغلنا – واتساب وإنستغرام", "Real photos of our work – WhatsApp & Instagram"),
        intro: L("ليس كل عميل يفضّل نشر صور بيته على الموقع، لذلك نرسل كثيراً من الصور مباشرة على الواتساب.", "Not every client wants their home on the website, so we share many photos directly on WhatsApp."),
        items: [L("اطلب صور أعمال مشابهة لوضعك (صالة، غرفة، فيلا، مكتب...) على الواتساب.", "Ask on WhatsApp for photos similar to your job (lounge, room, villa, office...)."),
          L("تابع أعمالنا المنشورة على حساباتنا في مواقع التواصل.", "Follow the work we post on our social accounts.")],
        outro: L("بهذه الطريقة ترى نماذج حقيقية وتختار ما يعجبك، أو ترسل تصميمك لننفّذه حسب ميزانيتك.", "That way you see real examples and choose what you like, or send your own design for us to build to your budget.") },
      { type: "listBox", align: "start", h2: L("ما الذي يهم في جودة شغل الجبس بورد؟", "What makes good gypsum work?"),
        intro: L("عند مقارنة الأعمال انتبه لهذه النقاط:", "When comparing work, look for:"),
        items: [
          L("استقامة السقف أو القاطع وعدم وجود تعرجات في الزوايا.", "Straight ceilings and walls with no waves at the corners."),
          L("توزيع صحيح للهياكل المعدنية وتثبيت قوي.", "Correct frame spacing and firm fixing."),
          L("فتحات إنارة وتكييف مرتبة ومتماسكة.", "Neat, solid openings for lights and AC."),
          L("فواصل ناعمة بالشريط والمعجون لا تتشقق لاحقاً.", "Smooth taped joints that don't crack later."),
          L("تنظيف المكان بعد الانتهاء.", "A clean site when the job is done."),
        ], buttons: [ycall()] },
      { type: "linksStrip", label: L("تعرّف على خدماتنا بالتفصيل:", "Explore our services:"), links: services.slice(0, 4).map((s) => ({ href: s.slug, label: s.title })) },
    ],
  },

  about: {
    title: L(`من نحن | ${SITE.name.ar}`, `About us | ${SITE.name.en}`),
    desc: L(`تعرّف على ${SITE.name.ar} وطريقة عملنا من أول مكالمة حتى التسليم.`, `Meet ${SITE.name.en} and how we work from the first call to handover.`),
    sections: [
      { type: "hero", h1: L(`من نحن – ${SITE.name.ar}`, `About us – ${SITE.name.en}`),
        lead: [L("فريق متخصص في اسقف وقواطع وديكورات الجبس بورد في الكويت.", "A team specialising in gypsum ceilings, partitions and decor in Kuwait."),
          L("نهتم بالتشطيب المرتب والالتزام بالمواعيد والسعر الواضح.", "We care about a neat finish, punctuality and clear prices.")] },
      { type: "textBox", h2: L(`من هي ${SITE.short.ar}؟`, `Who is ${SITE.short.en}?`),
        paras: [L(`${SITE.name.ar} اسم تجاري متخصص في أعمال الجبس بورد: الاسقف المعلّقة والقواطع الداخلية والديكورات البسيطة والحديثة للجدران، مع فريق من الفنيين ذوي الخبرة داخل الكويت.`, `${SITE.name.en} is a business specialising in gypsum work: suspended ceilings, interior partitions and simple or modern wall decor, with an experienced team in Kuwait.`),
          L("نعمل على المشاريع الصغيرة مثل تعديل سقف غرفة أو قاطع بسيط، وعلى المشاريع الأكبر مثل تجهيز شقة أو فيلا أو عيادة أو مكتب كامل.", "We take small jobs like a single room ceiling or a simple partition, and bigger ones like fitting out a whole flat, villa, clinic or office."),
          L("هدفنا أن يكون الشغل مرتباً من أول مرة، وأن يكون التعامل واضحاً في السعر والوقت من البداية.", "Our aim is neat work the first time, and clear dealings on price and time from the start.")] },
      featCards(L(`لماذا تختار ${SITE.short.ar}؟`, `Why choose ${SITE.short.en}?`), L("أربعة أشياء نلتزم بها في كل مشروع:", "Four things we commit to on every job:"), whyItems),
      { type: "steps", h2: L("كيف يتم التعامل من أول مكالمة حتى تسليم الشغل؟", "How it works from the first call to handover"),
        intro: L("خطوات واضحة وبسيطة:", "Clear, simple steps:"),
        items: [
          L("تتواصل معنا بالهاتف أو الواتساب وترسل صور المكان.", "You call or WhatsApp us with photos of the space."),
          L("نناقش الفكرة ونعطيك سعراً تقريبياً.", "We discuss the idea and give an estimate."),
          L("نزور الموقع إذا لزم لتثبيت المقاسات والسعر.", "We visit if needed to confirm sizes and price."),
          L("ننفّذ الشغل في الموعد المتفق عليه.", "We do the work on the agreed dates."),
          L("نسلّم المكان نظيفاً وجاهزاً للدهان.", "We hand over a clean, paint-ready space."),
        ] },
      { type: "listBox", align: "start", h2: L("أين ننفّذ أعمال الجبس بورد؟", "Where do we work?"),
        intro: L("نخدم جميع محافظات الكويت، ونعمل في:", "We cover every governorate in Kuwait, working in:"),
        items: [L("الشقق والفلل والبيوت.", "Flats, villas and houses."), L("المكاتب والعيادات.", "Offices and clinics."), L("المحلات والمعارض.", "Shops and showrooms.")],
        outro: L("تفاصيل المناطق في صفحة مناطق الخدمة.", "Area details are on the Service Areas page."), outroHref: "areas" },
      { type: "contactBox", h2: L(`تواصل مع ${SITE.short.ar} لشرح شغلك`, `Talk to ${SITE.short.en} about your job`),
        text: L("إذا كنت تفكر في تجديد سقف أو عمل قاطع أو ديكور بسيط للجدار، تواصل معنا الآن وأرسل الصور على الواتساب لنقترح عليك حلاً يناسب ميزانيتك.", "Thinking about a new ceiling, a partition or a simple wall feature? Contact us and send photos on WhatsApp, and we'll suggest an option for your budget.") },
    ],
  },

  contact: {
    title: L(`اتصل بنا | ${SITE.name.ar}`, `Contact | ${SITE.name.en}`),
    desc: L("اتصل أو أرسل صور المكان على الواتساب للحصول على عرض سعر مجاني.", "Call or send photos on WhatsApp for a free quote."),
    sections: [
      { type: "hero", h1: L(`اتصل بنا – ${SITE.name.ar}`, `Contact us – ${SITE.name.en}`),
        lead: [L("إذا كنت تفكر في سقف جبس بورد أو قواطع أو ديكور جدار تلفزيون، أسهل طريقة هي الاتصال مباشرة أو إرسال صور المكان على الواتساب.", "Planning a gypsum ceiling, partitions or a TV wall? The easiest way is to call us or send photos of the space on WhatsApp."),
          L("نرد قدر الإمكان خلال أوقات العمل، وإذا لم نرد فوراً أرسل رسالة واتساب وسنرد عليك بأقرب وقت.", "We answer during working hours. If we miss you, send a WhatsApp message and we'll reply soon.")],
        buttons: [ycall(), owa()] },
      { type: "contactCard", h2: L(`بيانات التواصل مع ${SITE.short.ar}`, `${SITE.short.en} contact details`) },
      { type: "steps", h2: L("كيف تشرح شغلك لنا بطريقة تختصر الوقت؟", "How to describe your job quickly"),
        items: [
          L("صوّر المكان (الصالة أو الغرفة أو الممر أو الجدار) من زاويتين أو ثلاث.", "Photograph the space (lounge, room, corridor or wall) from 2–3 angles."),
          L("اكتب باختصار ماذا تريد: سقف جبس بورد، قاطع، ديكور جدار تلفزيون، أو شغل كامل للشقة.", "Write briefly what you want: a ceiling, partition, TV wall, or a full flat."),
          L("اذكر اسم المحافظة والمنطقة (مثلاً: حولي – السالمية).", "Mention your governorate and area (e.g. Hawalli – Salmiya)."),
          L("أرسل الصور والمعلومات على الواتساب أو البريد، ونرجع لك بسعر تقريبي ووقت التنفيذ.", "Send the photos and details on WhatsApp or email, and we'll reply with an estimate and timeline."),
        ], outro: L("بهذه الخطوات لا تحتاج إلى شرح طويل على الهاتف، ونفهم طلبك بسرعة.", "That way there's no need for a long phone call – we understand your request quickly."),
        buttons: [{ kind: "wa", style: "yellow", label: L("إرسال على واتساب", "Send on WhatsApp") }, { kind: "email", style: "outline", label: L("إرسال على البريد", "Send by email") }] },
      { type: "priceBox", h2: L("أفضل وأسرع طريقة للتواصل معنا", "The best and fastest way to reach us"),
        paras: [L("نعتمد حالياً بشكل أساسي على الاتصال المباشر والواتساب، لأنهما أسرع طريقة لشرح شغلك وإرسال الصور والحصول على سعر تقريبي.", "We mainly use direct calls and WhatsApp – the fastest way to explain your job, send photos and get an estimate.")],
        buttons: [ycall(), owa(L("إرسال صور المكان على واتساب", "Send photos on WhatsApp"))] },
      { type: "linksStrip", label: L("قبل الاتصال يمكنك الاطلاع على:", "Before you call, you can check:"), links: [
        { href: "prices", label: L("الأسعار", "Prices") }, { href: "works", label: L("الأعمال", "Our work") }, { href: "areas", label: L("مناطق الخدمة", "Service areas") }, { href: "services", label: L("خدماتنا", "Services") } ] },
    ],
  },

  articles: {
    title: L("مقالات الجبس بورد", "Gypsum board articles"),
    desc: L("مقالات ونصائح عن الجبس بورد في الكويت: أفكار الاسقف والقواطع والديكورات وطريقة الاختيار والتكلفة.", "Articles and tips on gypsum board in Kuwait: ceiling, partition and decor ideas, choosing, and cost."),
    layout: "articles",
    intro: L(`مقالات ونصائح عن الجبس بورد في الكويت، تشمل أفكار الاسقف والقواطع والديكورات، وطريقة الاختيار والتكلفة، ونصائح من ${SITE.short.ar} لأصحاب الشقق والفلل والمكاتب.`, `Articles and tips about gypsum board in Kuwait: ceiling, partition and decor ideas, how to choose, cost, and advice from ${SITE.short.en} for flat, villa and office owners.`),
  },
};

/* Governorate pages */
SITE.areas.forEach((a) => { pages[a.slug] = govPage(a); });
/* Article pages */
articles.forEach((a) => { pages[a.slug] = { layout: "article", article: a, title: L(`${a.title.ar} | ${SITE.name.ar}`, `${a.title.en} | ${SITE.name.en}`), desc: a.excerpt }; });

module.exports = { nav, services, pages, articles };
