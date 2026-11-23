/* ==========================================================
   CeilCraft Studio — language support (English / Arabic)
   - English is written directly in the HTML / data.js.
   - Arabic translations live here, keyed by the English text.
   - To fix a translation, find the English sentence below and edit the Arabic.
   ========================================================== */
const I18N = (() => {
  "use strict";

  /* ---------- Current language ---------- */
  let lang = "en";
  try {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "en" || q === "ar") localStorage.setItem("cc-lang", q);
    lang = q || localStorage.getItem("cc-lang") || "en";
  } catch { /* storage unavailable */ }
  if (lang !== "ar") lang = "en";
  const isAr = lang === "ar";

  /* ---------- Context strings (same English, different meaning) ---------- */
  const EN = {
    "@savedState": "♥ Saved",
  };

  /* ---------- Arabic dictionary ---------- */
  const AR = {
    /* Header / footer / common */
    "Home": "الرئيسية",
    "Designs": "التصاميم",
    "Process": "مراحل العمل",
    "Why Us": "لماذا نحن",
    "Contact": "تواصل معنا",
    "Free Quote": "عرض سعر مجاني",
    "Saved designs": "التصاميم المحفوظة",
    "Open menu": "فتح القائمة",
    "Language": "اللغة",
    "Pages": "الصفحات",
    "Styles": "الأنماط",
    "Premium ceiling and wall design studio. We design, supply and install, with on-time delivery and a 10-year warranty.":
      "استوديو فاخر لتصاميم الأسقف والجدران. نصمّم ونورّد ونركّب، مع التسليم في الموعد وضمان لمدة 10 سنوات.",
    "All rights reserved.": "جميع الحقوق محفوظة.",
    "Photos from": "الصور من",
    "Prices are estimates and vary by site.": "الأسعار تقديرية وتختلف حسب الموقع.",
    "Main Boulevard, Gulberg, Lahore": "الشارع الرئيسي، جلبرغ، لاهور",
    "Mon – Sat, 10am – 7pm": "الاثنين – السبت، 10 صباحًا – 7 مساءً",
    "Removed from saved designs": "تمت الإزالة من التصاميم المحفوظة",
    "Saved to your designs ♥": "تم الحفظ في تصاميمك ♥",
    "You haven't saved any designs yet": "لم تحفظ أي تصاميم بعد",
    "Link copied to clipboard": "تم نسخ الرابط",

    /* Home */
    "CeilCraft Studio — Ceiling & Wall Designs": "CeilCraft Studio — تصاميم الأسقف والجدران",
    "Ceiling & Wall Design Studio": "استوديو تصاميم الأسقف والجدران",
    "Look Up.": "ارفع نظرك.",
    "Be Inspired.": "واستلهم.",
    "From elegant gypsum false ceilings to hand-carved wooden coffers and glowing LED designs, explore a collection made to transform every room.":
      "من الأسقف الجبسية المستعارة الأنيقة إلى التجاويف الخشبية المنحوتة يدويًا وتصاميم LED المتوهجة، اكتشف مجموعة صُمّمت لتحويل كل غرفة.",
    "Explore Designs": "استكشف التصاميم",
    "Get a Free Quote": "احصل على عرض سعر مجاني",
    "Projects": "المشاريع",
    "Client Rating": "تقييم العملاء",
    "Browse by Style": "تصفّح حسب النمط",
    "Find Your Perfect Ceiling": "اعثر على سقفك المثالي",
    "Eight design styles, from budget-friendly gypsum to heritage-grade carved wood.":
      "ثمانية أنماط تصميم، من الجبس الاقتصادي إلى الخشب المنحوت بجودة تراثية.",
    "Most Popular": "الأكثر رواجًا",
    "Featured Designs": "تصاميم مميزة",
    "View all designs →": "عرض جميع التصاميم ←",
    "How It Works": "كيف نعمل",
    "From Idea to Installed in 4 Simple Steps": "من الفكرة إلى التركيب في 4 خطوات بسيطة",
    "Choose a design you love": "اختر التصميم الذي تحبه",
    "Free site visit & measurement": "زيارة موقع وقياس مجانًا",
    "3D preview & clear quotation": "معاينة ثلاثية الأبعاد وعرض سعر واضح",
    "Clean, on-time installation": "تركيب نظيف وفي الموعد",
    "See our full process →": "اطّلع على مراحل العمل كاملة ←",
    "Why CeilCraft": "لماذا CeilCraft",
    "Built to Impress — and to Last": "مصممة لتُبهر — ولتدوم",
    "Premium Materials": "مواد فاخرة",
    "Branded gypsum, treated timber and certified LEDs.": "جبس من علامات موثوقة وخشب معالج وإضاءة LED معتمدة.",
    "Skilled Craftsmen": "حرفيون مهرة",
    "Specialists in POP, carving and modern systems.": "متخصصون في جبس باريس والنحت والأنظمة الحديثة.",
    "Transparent Pricing": "أسعار شفافة",
    "Itemised quotes with no hidden charges.": "عروض أسعار مفصّلة بلا رسوم خفية.",
    "On-Time Delivery": "التسليم في الموعد",
    "Clear timelines and daily progress updates.": "جداول زمنية واضحة وتحديثات يومية لسير العمل.",
    "Why clients choose us →": "لماذا يختارنا العملاء ←",
    "Ready to transform your ceiling?": "هل أنت مستعد لتحويل سقفك؟",
    "Book a free site visit. We'll measure, advise and quote within 48 hours.":
      "احجز زيارة موقع مجانية. سنقيس ونقدّم المشورة وعرض السعر خلال 48 ساعة.",

    /* Designs page */
    "Designs — CeilCraft Studio": "التصاميم — CeilCraft Studio",
    "Our Design Collection": "مجموعة تصاميمنا",
    "Browse by style, switch the view, and click any design for full details, materials and estimated prices.":
      "تصفّح حسب النمط، وغيّر طريقة العرض، واضغط على أي تصميم لمشاهدة التفاصيل الكاملة والمواد والأسعار التقديرية.",
    "Search designs, materials, rooms…": "ابحث في التصاميم والمواد والغرف…",
    "Search designs": "ابحث في التصاميم",
    "All": "الكل",
    "Ceilings": "الأسقف",
    "Walls": "الجدران",
    "Sort": "ترتيب",
    "Top Rated": "الأعلى تقييمًا",
    "Newest": "الأحدث",
    "Price: Low → High": "السعر: من الأقل إلى الأعلى",
    "Price: High → Low": "السعر: من الأعلى إلى الأقل",
    "Name: A → Z": "الاسم: أ – ي",
    "Tiles": "مربعات",
    "Compact": "مصغّر",
    "List": "قائمة",
    "Tiles view": "عرض المربعات",
    "Compact view": "العرض المصغّر",
    "List view": "عرض القائمة",
    "♥ Saved": "♥ المحفوظة",
    "Show saved designs": "عرض التصاميم المحفوظة",
    "No designs found": "لم يتم العثور على تصاميم",
    "Try a different search or category.": "جرّب بحثًا أو فئة مختلفة.",
    "Reset filters": "إعادة ضبط الفلاتر",
    "Can't find exactly what you want?": "لم تجد ما تبحث عنه بالضبط؟",
    "We design custom ceilings for every space and budget.": "نصمّم أسقفًا حسب الطلب لكل مساحة وميزانية.",
    "Request a Custom Design": "اطلب تصميمًا خاصًا",
    "Showing {n} of {total} designs": "عرض {n} من {total} تصميمًا",
    "in {cat}": "في {cat}",
    "saved only": "المحفوظة فقط",
    "show all": "عرض الكل",
    "{n} designs →": "{n} تصاميم ←",

    /* Cards & modal */
    "Ceiling": "سقف",
    "Wall": "جدار",
    "View details →": "عرض التفاصيل ←",
    "/ sq ft": "/ قدم²",
    "{n} sq ft": "{n} قدم²",
    "Save design": "حفظ التصميم",
    "Close": "إغلاق",
    "Previous design": "التصميم السابق",
    "Next design": "التصميم التالي",
    "{n}% of clients recommend": "يوصي به {n}% من العملاء",
    "Price / sq ft": "السعر / قدم²",
    "Installation": "التركيب",
    "Durability": "المتانة",
    "Maintenance": "الصيانة",
    "Key Features": "المزايا الرئيسية",
    "Materials": "المواد",
    "Best For": "الأنسب لـ",
    "Colour Palette": "لوحة الألوان",
    "Cost Estimator": "حاسبة التكلفة",
    "Area": "المساحة",
    "Estimated:": "التكلفة التقديرية:",
    "Request Quote": "اطلب عرض سعر",
    "♡ Save": "♡ حفظ",
    "@savedState": "♥ تم الحفظ",
    "Share": "مشاركة",
    "Low": "منخفضة",
    "Medium": "متوسطة",
    "High": "عالية",

    /* Process page */
    "Our Process — CeilCraft Studio": "مراحل العمل — CeilCraft Studio",
    "From Idea to Installed": "من الفكرة إلى التركيب",
    "A clear, stress-free process: you always know what happens next, how long it takes and what it costs.":
      "عملية واضحة وخالية من التوتر: تعرف دائمًا ما الخطوة التالية، وكم تستغرق، وكم تكلّف.",
    "Day 1": "اليوم 1",
    "Choose & Consult": "اختر واستشر",
    "Browse our": "تصفّح",
    "design collection": "مجموعة التصاميم",
    "and save the styles you like. Call or WhatsApp us, and our designer will discuss your room, lighting needs and budget.":
      "واحفظ الأنماط التي تعجبك. اتصل بنا أو راسلنا عبر واتساب، وسيناقش مصممنا معك غرفتك واحتياجات الإضاءة والميزانية.",
    "Free consultation": "استشارة مجانية",
    "Style & budget guidance": "إرشاد في النمط والميزانية",
    "Day 2 – 3": "اليوم 2 – 3",
    "Free Site Visit": "زيارة موقع مجانية",
    "Our team visits your home or office to take exact measurements and check the slab, wiring points, AC ducts and ceiling height.":
      "يزور فريقنا منزلك أو مكتبك لأخذ القياسات الدقيقة وفحص السقف الخرساني ونقاط الكهرباء ومجاري التكييف وارتفاع السقف.",
    "Laser measurement": "قياس بالليزر",
    "Structural & electrical check": "فحص إنشائي وكهربائي",
    "Day 4 – 6": "اليوم 4 – 6",
    "3D Design & Quotation": "تصميم ثلاثي الأبعاد وعرض سعر",
    "See your ceiling in a realistic 3D render before work starts. You get an itemised quotation covering materials, lighting, labour and timeline, with no hidden charges.":
      "شاهد سقفك في تصميم ثلاثي الأبعاد واقعي قبل بدء العمل. ستحصل على عرض سعر مفصّل يشمل المواد والإضاءة والعمالة والجدول الزمني، بلا رسوم خفية.",
    "Photo-realistic 3D preview": "معاينة ثلاثية الأبعاد واقعية",
    "Up to 2 free revisions": "حتى تعديلين مجانًا",
    "Itemised, fixed quote": "عرض سعر ثابت ومفصّل",
    "2 – 30 days (by design)": "2 – 30 يومًا (حسب التصميم)",
    "Clean Installation": "تركيب نظيف",
    "Our trained team installs your ceiling with dust sheets, furniture covers and daily cleanup. You get a progress update with photos every day.":
      "يركّب فريقنا المدرّب سقفك مع أغطية للحماية من الغبار وتغطية الأثاث وتنظيف يومي، وتصلك تحديثات يومية بالصور عن سير العمل.",
    "Dust & furniture protection": "حماية من الغبار وللأثاث",
    "Daily photo updates": "تحديثات يومية بالصور",
    "Dedicated site supervisor": "مشرف موقع مخصص",
    "Final day": "اليوم الأخير",
    "Handover & Warranty": "التسليم والضمان",
    "We walk you through the finished work, test every light, and hand over your warranty card and care guide. Free touch-ups within 30 days.":
      "نستعرض معك العمل المنجز، ونختبر كل إضاءة، ونسلّمك بطاقة الضمان ودليل العناية، مع لمسات تصحيحية مجانية خلال 30 يومًا.",
    "10-year structural warranty": "ضمان إنشائي لمدة 10 سنوات",
    "Free 30-day touch-ups": "لمسات تصحيحية مجانية لمدة 30 يومًا",
    "Typical Timelines": "المدد المعتادة",
    "How Long Does It Take?": "كم يستغرق العمل؟",
    "Installation time for an average 200 – 300 sq ft room.": "مدة التركيب لغرفة متوسطة مساحتها 200 – 300 قدم مربع.",
    "Ceiling Type": "نوع السقف",
    "Est. Price / sq ft": "السعر التقديري / قدم²",
    "Gypsum & False Ceiling": "أسقف الجبس والمستعارة",
    "LED & Lighting Ceiling": "أسقف إضاءة LED",
    "Wooden Ceiling": "الأسقف الخشبية",
    "Coffered Ceiling": "أسقف كوفريد",
    "Homes, apartments, offices": "المنازل والشقق والمكاتب",
    "Living rooms, kitchens, bedrooms": "غرف المعيشة والمطابخ وغرف النوم",
    "Drawing rooms, halls": "المجالس والقاعات",
    "Lounges, cafés, farmhouses": "الصالات والمقاهي والشاليهات",
    "Libraries, formal halls": "المكتبات والقاعات الرسمية",
    "Atriums, courtyards": "الردهات المفتوحة والأفنية",
    "Feature walls, bathrooms": "الجدران المميزة والحمامات",
    "3 – 5 days": "3 – 5 أيام", "2 – 6 days": "2 – 6 أيام", "7 – 30 days": "7 – 30 يومًا",
    "6 – 25 days": "6 – 25 يومًا", "10 – 25 days": "10 – 25 يومًا", "2 – 10 days": "2 – 10 أيام",
    "Rs 150 – 320": "150 – 320 روبية", "Rs 140 – 450": "140 – 450 روبية", "Rs 250 – 3,500": "250 – 3,500 روبية",
    "Rs 380 – 2,200": "380 – 2,200 روبية", "Rs 500 – 2,500": "500 – 2,500 روبية", "Rs 650 – 2,400": "650 – 2,400 روبية",
    "Rs 180 – 2,200": "180 – 2,200 روبية",
    /* screen-reader labels */
    "Scroll down": "مرّر للأسفل", "Breadcrumb": "مسار التنقل", "Design categories": "فئات التصاميم",
    "Filter by type": "تصفية حسب النوع", "Change view": "تغيير طريقة العرض",
    "FAQ": "الأسئلة الشائعة",
    "Common Questions": "أسئلة شائعة",
    "Do I need to empty the room before installation?": "هل أحتاج إلى إفراغ الغرفة قبل التركيب؟",
    "No. We cover your furniture and floor with protective sheets. We only ask that fragile items and electronics are moved out of the way.":
      "لا. نغطي أثاثك وأرضيتك بأغطية واقية، ونطلب فقط إبعاد القطع القابلة للكسر والأجهزة الإلكترونية.",
    "Is the site visit really free?": "هل زيارة الموقع مجانية فعلًا؟",
    "Yes. Site visits, measurements and quotations are completely free within city limits, with no obligation.":
      "نعم. زيارات الموقع والقياسات وعروض الأسعار مجانية تمامًا داخل حدود المدينة، ودون أي التزام.",
    "Will a false ceiling reduce my room height?": "هل يقلل السقف المستعار من ارتفاع الغرفة؟",
    "Usually by 4 – 8 inches. With peripheral or cove designs, the centre can stay at full height so the room still feels tall.":
      "عادةً بمقدار 4 – 8 إنشات. ومع التصاميم المحيطية أو ذات الإضاءة المخفية يبقى المنتصف بارتفاعه الكامل، فتظل الغرفة عالية.",
    "Can you hide AC ducts and wiring?": "هل يمكنكم إخفاء مجاري التكييف والأسلاك؟",
    "Yes. Hiding ducts, wires and pipes is one of the main benefits of a false ceiling. We plan access panels for future maintenance.":
      "نعم. إخفاء المجاري والأسلاك والأنابيب من أهم فوائد السقف المستعار، ونخطط لفتحات صيانة للوصول إليها مستقبلًا.",
    "How do I pay?": "كيف أدفع؟",
    "Typically 40% advance to order materials, 40% at mid-installation and 20% after handover. Bank transfer and cash are accepted.":
      "عادةً 40% دفعة مقدمة لطلب المواد، و40% في منتصف التركيب، و20% بعد التسليم. نقبل التحويل البنكي والدفع نقدًا.",
    "Start with a free site visit": "ابدأ بزيارة موقع مجانية",
    "No obligation, just expert advice and an honest quote.": "دون أي التزام، فقط مشورة خبراء وعرض سعر صادق.",
    "Book a Visit": "احجز زيارة",

    /* Why Us page */
    "Why Us — CeilCraft Studio": "لماذا نحن — CeilCraft Studio",
    "Ceilings Built to Impress — and to Last": "أسقف مصممة لتُبهر — ولتدوم",
    "Over a decade of experience, 1,200+ completed projects and a team that treats every ceiling like a work of art.":
      "أكثر من عقد من الخبرة، وأكثر من 1,200 مشروع منجز، وفريق يتعامل مع كل سقف كعمل فني.",
    "Years of experience": "سنوات من الخبرة",
    "Projects completed": "مشروع منجز",
    "Skilled craftsmen": "حرفي ماهر",
    "Average client rating": "متوسط تقييم العملاء",
    "Year": "سنوات",
    "Warranty": "ضمان",
    "Our Promise": "وعدنا",
    "Quality you can see. Service you can trust.": "جودة تراها. وخدمة تثق بها.",
    "We handle everything from design and materials to lighting, installation and cleanup, so you deal with one team and get one guarantee.":
      "نتولى كل شيء من التصميم والمواد إلى الإضاءة والتركيب والتنظيف، لتتعامل مع فريق واحد وتحصل على ضمان واحد.",
    "One-stop service": "خدمة متكاملة",
    ": design, supply, electrical and installation.": ": التصميم والتوريد والكهرباء والتركيب.",
    "Fixed quotes": "أسعار ثابتة",
    ": the price we quote is the price you pay.": ": السعر الذي نعرضه هو السعر الذي تدفعه.",
    "Clean sites": "مواقع نظيفة",
    ": dust protection and daily cleanup.": ": حماية من الغبار وتنظيف يومي.",
    "After-sales care": "خدمة ما بعد البيع",
    ": free touch-ups and fast support.": ": لمسات تصحيحية مجانية ودعم سريع.",
    "What Sets Us Apart": "ما يميزنا",
    "Six Reasons Clients Choose Us": "ستة أسباب تجعل العملاء يختاروننا",
    "Only branded gypsum boards, galvanised channels, termite-treated timber and certified LED fittings.":
      "فقط ألواح جبس من علامات موثوقة، وقنوات مجلفنة، وخشب معالج ضد النمل الأبيض، ووحدات إضاءة LED معتمدة.",
    "Master Craftsmen": "حرفيون محترفون",
    "Specialist teams for POP ornaments, wood carving, gypsum systems and modern lighting.":
      "فرق متخصصة في زخارف جبس باريس ونحت الخشب وأنظمة الجبس والإضاءة الحديثة.",
    "3D Before You Build": "تصميم ثلاثي الأبعاد قبل التنفيذ",
    "See a photo-realistic 3D render of your ceiling before any work begins.": "شاهد تصميمًا ثلاثي الأبعاد واقعيًا لسقفك قبل بدء أي عمل.",
    "Itemised quotes for materials, lighting and labour, with no surprises at the end.":
      "عروض أسعار مفصّلة للمواد والإضاءة والعمالة، بلا مفاجآت في النهاية.",
    "Clear timelines, a dedicated supervisor and daily photo updates on WhatsApp.":
      "جداول زمنية واضحة، ومشرف مخصص، وتحديثات يومية بالصور عبر واتساب.",
    "10-Year Warranty": "ضمان 10 سنوات",
    "Structural warranty on every ceiling, plus free touch-ups within 30 days.":
      "ضمان إنشائي على كل سقف، بالإضافة إلى لمسات تصحيحية مجانية خلال 30 يومًا.",
    "Client Stories": "قصص العملاء",
    "What Our Clients Say": "ماذا يقول عملاؤنا",
    "Sample reviews. Replace these with your real client testimonials.": "تقييمات نموذجية. استبدلها بآراء عملائك الحقيقية.",
    "\"The double-layer gypsum ceiling with cove lights completely changed our drawing room. Work finished a day early and the team left everything spotless.\"":
      "«غيّر سقف الجبس ذو الطبقتين مع الإضاءة المخفية مجلسنا بالكامل. انتهى العمل قبل موعده بيوم، وترك الفريق كل شيء نظيفًا تمامًا.»",
    "\"We got the wavy wood baffle ceiling for our café. Customers take photos of it every day. Best investment we made in the fit-out.\"":
      "«اخترنا السقف الخشبي المتموج لمقهانا، والزبائن يلتقطون له الصور كل يوم. أفضل استثمار قمنا به في تجهيز المكان.»",
    "\"The 3D preview helped us choose with confidence, and the final ceiling looked exactly like the render. Honest pricing too.\"":
      "«ساعدتنا المعاينة ثلاثية الأبعاد على الاختيار بثقة، وجاء السقف النهائي مطابقًا تمامًا للتصميم. وأسعار صادقة أيضًا.»",
    "Homeowner": "صاحب منزل",
    "DHA, Lahore": "DHA، لاهور",
    "Café Owner": "صاحب مقهى",
    "Islamabad": "إسلام آباد",
    "Office Manager": "مدير مكتب",
    "Karachi": "كراتشي",
    "Materials We Work With": "المواد التي نعمل بها",
    "Every Finish, One Team": "كل التشطيبات، فريق واحد",
    "Gypsum Board": "ألواح الجبس",
    "Plaster of Paris": "جبس باريس",
    "Solid Wood": "الخشب الطبيعي",
    "Wood Veneer": "قشرة الخشب",
    "PVC & WPC Panels": "ألواح PVC و WPC",
    "Aluminium Profiles": "بروفايلات الألمنيوم",
    "LED Systems": "أنظمة LED",
    "Glass & Skylights": "الزجاج والمناور",
    "GRG Mouldings": "قوالب GRG",
    "Marble & Stone": "الرخام والحجر",
    "Acoustic Panels": "الألواح الصوتية",
    "Gold Leaf": "ورق الذهب",
    "See the difference for yourself": "شاهد الفرق بنفسك",
    "Book a free consultation and 3D preview of your space.": "احجز استشارة مجانية ومعاينة ثلاثية الأبعاد لمساحتك.",
    "Book Free Consultation": "احجز استشارة مجانية",

    /* Contact page */
    "Contact — CeilCraft Studio": "تواصل معنا — CeilCraft Studio",
    "Request a Free Quote": "اطلب عرض سعر مجاني",
    "Tell us about your space and we'll get back to you within 24 hours, or message us directly on WhatsApp.":
      "أخبرنا عن مساحتك وسنعود إليك خلال 24 ساعة، أو راسلنا مباشرة عبر واتساب.",
    "Call us": "اتصل بنا",
    "WhatsApp": "واتساب",
    "Chat with us": "تحدث معنا",
    "Email": "البريد الإلكتروني",
    "Visit our studio": "زر الاستوديو",
    "Get in Touch": "تواصل معنا",
    "Tell us about your project": "أخبرنا عن مشروعك",
    "Fill in the form and our designer will call you to arrange a free site visit. Prefer chatting? Use the WhatsApp button and your details are sent as a message.":
      "املأ النموذج وسيتصل بك مصممنا لترتيب زيارة موقع مجانية. تفضّل المحادثة؟ استخدم زر واتساب وستُرسل بياناتك كرسالة.",
    "Working hours": "ساعات العمل",
    "Response time": "وقت الرد",
    "Within 24 hours": "خلال 24 ساعة",
    "Service area": "منطقة الخدمة",
    "Lahore, Islamabad, Karachi & nearby cities": "لاهور وإسلام آباد وكراتشي والمدن القريبة",
    "Full name *": "الاسم الكامل *",
    "Your name": "اسمك",
    "Phone *": "رقم الهاتف *",
    "City": "المدينة",
    "e.g. Lahore": "مثال: لاهور",
    "Space type": "نوع المساحة",
    "Shop / Café": "محل / مقهى",
    "Hall / Lobby": "قاعة / ردهة",
    "Other": "أخرى",
    "Design of interest": "التصميم المطلوب",
    "Not sure yet": "لم أقرر بعد",
    "Area (sq ft)": "المساحة (قدم²)",
    "e.g. 250": "مثال: 250",
    "Message": "الرسالة",
    "Ceiling height, timeline, lighting ideas…": "ارتفاع السقف، المدة الزمنية، أفكار الإضاءة…",
    "Send Request": "إرسال الطلب",
    "Send via WhatsApp": "إرسال عبر واتساب",
    "Thank you,": "شكرًا لك،",
    "We've received your request. Our designer will call you within 24 hours to arrange your free site visit.":
      "استلمنا طلبك. سيتصل بك مصممنا خلال 24 ساعة لترتيب زيارة الموقع المجانية.",
    "Send another request": "إرسال طلب آخر",
    "Before You Ask": "قبل أن تسأل",
    "Quick Answers": "إجابات سريعة",
    "How quickly can you visit my site?": "ما مدى سرعة زيارتكم لموقعي؟",
    "Usually within 1 – 2 working days of your request, at a time that suits you.":
      "عادةً خلال 1 – 2 يوم عمل من طلبك، وفي الوقت الذي يناسبك.",
    "Are the prices on the website final?": "هل الأسعار على الموقع نهائية؟",
    "They are estimates. Your final, fixed quote depends on exact measurements, materials and lighting choices.":
      "إنها تقديرية. يعتمد عرض السعر النهائي الثابت على القياسات الدقيقة والمواد وخيارات الإضاءة.",
    "Do you work outside the city?": "هل تعملون خارج المدينة؟",
    "Yes, for larger projects. Travel costs may apply outside our main service area.":
      "نعم، للمشاريع الكبيرة. قد تُطبّق تكاليف تنقل خارج منطقة خدمتنا الرئيسية.",
    "Please enter your name and a valid phone number": "يرجى إدخال اسمك ورقم هاتف صحيح",
    "Selected design": "التصميم المختار",
    "Hello {name}, I'd like a quote.": "مرحبًا {name}، أرغب في الحصول على عرض سعر.",
    "Name": "الاسم",
    "Phone": "الهاتف",
    "Space": "نوع المساحة",
    "Design": "التصميم",
    "Details": "التفاصيل",

    /* Rooms (used in designs + form) */
    "Living Room": "غرفة المعيشة", "Lounge": "الصالة", "Showroom": "صالة عرض", "Drawing Room": "المجلس",
    "Bedroom": "غرفة النوم", "Office": "مكتب", "Study": "غرفة الدراسة", "Open Kitchen": "مطبخ مفتوح",
    "Dining": "غرفة الطعام", "Kitchen": "المطبخ", "Master Bedroom": "غرفة النوم الرئيسية", "Guest Room": "غرفة الضيوف",
    "Dining Hall": "قاعة الطعام", "Entrance": "المدخل", "Library": "المكتبة", "Formal Lounge": "صالة رسمية",
    "Hall": "قاعة", "Banquet Hall": "قاعة الأفراح", "Grand Lobby": "ردهة كبرى", "Marquee": "خيمة المناسبات",
    "Majlis": "الديوانية", "Entrance Dome": "قبة المدخل", "Stair Hall": "بهو الدرج", "Mosque / Hall": "مسجد / قاعة",
    "Atrium": "ردهة مفتوحة", "Mall / Lobby": "مول / ردهة", "Stairwell": "بيت الدرج", "Gallery": "معرض",
    "Café": "مقهى", "Restaurant": "مطعم", "Office Reception": "استقبال المكتب", "Lobby": "ردهة",
    "Auditorium": "مسرح", "Corporate Office": "مكتب شركة", "Hotel": "فندق", "Farmhouse": "شاليه / مزرعة",
    "Resort": "منتجع", "Pavilion": "جناح خارجي", "Mall": "مول", "Courtyard Cover": "تغطية الفناء",
    "Greenhouse Café": "مقهى زجاجي", "Warehouse Loft": "لوفت", "Porch": "مدخل خارجي", "Corporate HQ": "مقر شركة",
    "Museum": "متحف", "Boutique": "بوتيك", "Corridor": "ممر", "Apartment": "شقة", "Hallway": "الممر",
    "Reception": "الاستقبال", "Bedroom Feature": "جدار غرفة النوم", "Bathroom": "الحمام", "Powder Room": "حمام الضيوف",
    "Spa": "سبا", "TV Lounge": "صالة التلفزيون",
  };

  /* Category names */
  const CATEGORIES_AR = {
    all: "جميع التصاميم", gypsum: "جبس وأسقف مستعارة", pop: "جبس باريس وكلاسيكي", wooden: "خشبي",
    coffered: "كوفريد (مجوّف)", led: "إضاءة LED", modern: "هندسي عصري", glass: "زجاج ومناور", wall: "تصاميم الجدران",
  };
  Object.assign(AR, {
    "Gypsum & False": CATEGORIES_AR.gypsum, "POP & Classic": CATEGORIES_AR.pop, "Wooden": CATEGORIES_AR.wooden,
    "Coffered": CATEGORIES_AR.coffered, "LED & Lighting": CATEGORIES_AR.led, "Modern Geometric": CATEGORIES_AR.modern,
    "Glass & Skylight": CATEGORIES_AR.glass, "Wall Designs": CATEGORIES_AR.wall, "All Designs": CATEGORIES_AR.all,
  });

  /* Design content: [title, short, description, features[], materials[]] */
  const DESIGNS_AR = {
    "lightning-line-led": ["سقف LED بخطوط البرق", "خطوط LED غائرة ومتقاطعة بجرأة تحوّل السقف المسطّح إلى تحفة لافتة.",
      "سقف جبسي أنيق تتخلله قنوات مائلة تحتضن بروفايلات LED نحيفة من الألمنيوم. تمتد الخطوط عبر الغرفة بنمط يشبه البرق، فتمنح إضاءة متساوية خالية من الوهج وإحساسًا عصريًا فاخرًا. يناسب غرف المعيشة الواسعة ذات الأرضيات الرخامية أو البلاط.",
      ["قنوات LED غائرة من الألمنيوم", "خيار تعتيم وتحكم عبر التطبيق", "يخفي الأسلاك ومجاري التكييف", "فواصل ناعمة خالية من التشققات"],
      ["ألواح جبس", "بروفايلات LED من الألمنيوم", "شرائط LED بإضاءة دافئة/باردة"]],
    "double-layer-gypsum": ["سقف جبس بطبقتين مع إضاءة مخفية", "مستويان متدرجان من الجبس مع إضاءة مخفية ناعمة على الأطراف.",
      "أكثر أنماط الأسقف المستعارة شعبية في المنازل. إطار جبسي منخفض يحيط بلوح مركزي مرتفع، وشريط LED مخفي يغمر المستوى العلوي بضوء دافئ. توفر السبوتات في الإطار إضاءة عملية، بينما يمكن تعليق ثريا في المنتصف.",
      ["إضاءة مخفية دافئة", "مساحة لثريا في المنتصف", "يحسّن عزل الغرفة", "تركيب سريع ونظيف"],
      ["ألواح جبس", "قنوات حديد مجلفن", "شريط إضاءة LED مخفي", "سبوتات إضاءة"]],
    "wood-frame-cove": ["سقف بإطار خشبي محيطي", "إطار خشبي فاخر مع فجوة مضيئة حول وسط منقوش.",
      "إطار خشبي دافئ يمتد حول أطراف الغرفة، تفصله عن اللوح المركزي فجوة مضيئة بإضاءة LED. يضيف الخشب لمسة فخمة ومريحة، ويتناغم بشكل رائع مع الأرضيات الخشبية والأثاث الجلدي.",
      ["تشطيب خشب طبيعي أو قشرة خشب", "فجوة إضاءة بلوح عائم", "خشب معالج ضد النمل الأبيض", "يتناغم مع الأرضيات الخشبية"],
      ["خشب طبيعي / قشرة خشب", "لوح جبس مركزي", "شريط إضاءة LED مخفي"]],
    "open-plan-recessed": ["سقف بسبوتات غائرة للمساحات المفتوحة", "سقف مسطّح بسيط بصفوف أنيقة من السبوتات الغائرة وتوهج ناعم على الأطراف.",
      "مصمم للمنازل ذات المساحات المفتوحة حيث تتشارك الصالة والطعام والمطبخ مساحة واحدة. تحافظ السبوتات الموزعة بانتظام على سقف مرتب، بينما تجعل الإضاءة المحيطية الرفيعة الغرفة أعلى وأكثر إشراقًا.",
      ["تشطيب مسطّح مرتب", "إضاءة متساوية بلا ظلال", "يجعل الغرف تبدو أعلى", "مناسب للميزانية"],
      ["ألواح جبس", "سبوتات LED غائرة", "إضاءة محيطية مخفية"]],
    "kitchen-downlight": ["سقف مطبخ بإضاءة داون لايت", "سقف مقاوم للرطوبة بإضاءة ساطعة وثريات معلقة فوق الجزيرة.",
      "سقف جبسي ناعم مقاوم للرطوبة مصمم للمطابخ. تضيء سبوتات LED الساطعة مناطق العمل، بينما تتدلى ثريات مميزة فوق الجزيرة أو طاولة الطعام.",
      ["ألواح مقاومة للرطوبة والحرارة", "إضاءة عمل ساطعة", "طلاء سهل التنظيف", "نقاط جاهزة للثريات المعلقة"],
      ["جبس مقاوم للرطوبة", "سبوتات LED", "إضاءة معلقة"]],
    "round-panel-bedroom": ["سقف غرفة نوم بلوحة LED دائرية", "سقف هادئ لغرفة النوم بلوحة دائرية متوهجة وسبوتات ناعمة.",
      "سقف هادئ لغرفة النوم بطابع الفنادق الفاخرة. تمنح لوحة LED دائرية كبيرة إضاءة عامة ناعمة، بينما تُبرز سبوتات صغيرة جدار السرير. يتناغم مع تكسيات الرخام وخشب الجوز لإطلالة جناح فاخر.",
      ["إضاءة ناعمة مريحة للعين", "إطلالة جناح فندقي", "تبديل بين الإضاءة الدافئة والباردة", "تثبيت هادئ بلا اهتزاز"],
      ["ألواح جبس", "لوحة LED دائرية سطحية", "سبوتات غائرة"]],
    "victorian-medallion": ["سقف جبس فيكتوري بميدالية مزخرفة", "ميدالية جبسية مصنوعة يدويًا بتفاصيل ذهبية حول الثريا.",
      "ميدالية كلاسيكية من جبس باريس مشكّلة يدويًا بزخارف الأوراق واللفائف، ومشطّبة باللون الذهبي، مع كورنيش مزخرف حول الجدران. مثالية للمجلس التقليدي مع ثريا كبيرة.",
      ["زخارف مشكّلة يدويًا", "تشطيب ذهبي أو عتيق", "كورنيش مزخرف مشمول", "طراز كلاسيكي خالد"],
      ["جبس باريس (POP)", "ورق ذهب / طلاء معدني", "كورنيش مزخرف"]],
    "palace-coffered-wood": ["سقف قصور خشبي منحوت بتجاويف", "تجاويف خشبية عميقة منحوتة بوردات في المنتصف — تحفة تراثية حقيقية.",
      "شبكة من التجاويف الخشبية العميقة، في وسط كل منها وردة منحوتة يدويًا. هذا أفخم سقف في مجموعتنا، ويصنعه نجارون محترفون. يناسب المكتبات والقاعات الرسمية والمنازل ذات الطابع التراثي.",
      ["منحوت يدويًا بأيدي حرفيين", "خشب صلب", "عزل صوتي ممتاز", "جودة تدوم لأجيال"],
      ["خشب شيشم / جوز صلب", "وردات منحوتة يدويًا", "ورنيش بولي يوريثان"]],
    "baroque-gold": ["سقف باروكي بالذهبي والعاجي", "أقواس وأعمدة وزخارف ذهبية بطراز القصور للقاعات والردهات.",
      "مستوحى من القصور الأوروبية، يجمع هذا التصميم بين الأقبية المقوسة والأعمدة الكورنثية وزخارف غنية بورق الذهب. مثالي لقاعات الأفراح وردهات الفنادق والمداخل الفخمة التي تحتاج إلى لمسة مبهرة.",
      ["زخارف بورق الذهب", "تصميم أقبية مقوسة", "تفاصيل الأعمدة والتيجان", "مصمم للقاعات الكبيرة"],
      ["قوالب جبس و GRG", "ورق ذهب", "ثريات كريستال"]],
    "ottoman-sunburst": ["سقف عثماني مرسوم بوردة شمسية", "ألواح مرسومة يدويًا مع وردة شمسية منحوتة فوق ثريا كريستال.",
      "سقف مرسوم بزخارف على الطراز العثماني، بألواح مؤطرة ووردة شمسية منحوتة للثريا. خيار رائع للديوانية أو المجلس التقليدي بلمسة شرقية.",
      ["رسومات فنية يدوية", "وردة شمسية منحوتة", "طابع تراثي شرقي", "ألوان حسب الطلب"],
      ["ألواح جبس", "زخارف مرسومة يدويًا", "وردة شمسية مذهّبة"]],
    "classic-coffered-chandelier": ["سقف كوفريد كلاسيكي للثريا", "ألواح غائرة أنيقة بإطار ذهبي — مصممة لاحتضان ثريا مميزة.",
      "ألواح غائرة عميقة محددة بإطارات ذهبية ومراكز مزخرفة. تضيف الشبكة عمقًا وطابعًا مميزًا، والمنتصف مدعّم لحمل ثريا ثقيلة.",
      ["نقطة مدعّمة للثريا", "تفاصيل إطارات ذهبية", "يضيف عمقًا وارتفاعًا", "إحساس فاخر كلاسيكي"],
      ["عوارض جبس / MDF", "إطارات ذهبية", "ألواح مزخرفة"]],
    "painted-dome": ["سقف قبة بجدارية مرسومة", "قبة مرسومة يدويًا بحلقات فسيفساء — أرقى الأسقف الفنية.",
      "هيكل سقف على شكل قبة مشطّب بجداريات مرسومة يدويًا وحلقات فسيفساء وأطراف مذهّبة. الأنسب للمداخل مزدوجة الارتفاع وبهو الدرج وقاعات الصلاة حيث يكون السقف محور المكان.",
      ["أعمال فنية حسب الطلب", "فسيفساء وتذهيب", "للمساحات مزدوجة الارتفاع", "تصميم فريد من نوعه"],
      ["هيكل قبة GRG", "جدارية مرسومة يدويًا", "فسيفساء وتذهيب"]],
    "octagon-skylight": ["قبة مثمنة بمنور زجاجي", "فانوس زجاجي بثمانية أضلاع يملأ المكان بضوء النهار الطبيعي.",
      "فانوس زجاجي مثمن يعلو ألواحًا مجوفة وحلقة من النوافذ الزجاجية. يُدخل ضوء النهار الناعم طوال اليوم ويمنح المكان إحساسًا بالرحابة والفخامة.",
      ["ضوء نهار طبيعي", "زجاج مصفّح محمي من الأشعة فوق البنفسجية", "عزل محكم ضد التسرب", "يقلل استهلاك الكهرباء نهارًا"],
      ["هيكل فولاذي", "زجاج مصفّح", "ألواح جبس مجوفة"]],
    "wooden-skylight-shaft": ["منور خشبي ملتف", "إطارات خشبية دوّارة ترتفع نحو المنور، متوهجة بنقاط LED صغيرة.",
      "طبقات من الإطارات الخشبية، كل منها مُدار قليلًا، تصعد نحو منور زجاجي لتشكّل حلزونًا ساحرًا، ونقاط LED صغيرة تبقيه متوهجًا ليلًا. قطعة مميزة للفلل العصرية والمعارض.",
      ["تأثير حلزوني نحتي", "إضاءة نهارية وليلية", "خشب مُصفّح", "تصميم بمستوى معماري"],
      ["شرائح خشب مُصفّح", "زجاج المنور", "نقاط LED صغيرة"]],
    "wavy-wood-baffle": ["سقف خشبي متموج", "زعانف خشبية مقصوصة بتقنية CNC تخلق تأثير أمواج البحر الناعمة.",
      "مئات الزعانف من خشب الأبلكاش المقصوص بتقنية CNC تتدلى جنبًا إلى جنب، كل منها بشكل مختلف قليلًا لتكوين أمواج متتالية. مظهر مذهل يمتص الضوضاء، ومثالي للمقاهي والمطاعم ومناطق الاستقبال.",
      ["قص دقيق بتقنية CNC", "امتصاص ممتاز للصوت", "يخفي التمديدات فوقه", "مظهر يستحق التصوير"],
      ["زعانف أبلكاش مقصوصة بتقنية CNC", "تشطيب بالزيت الطبيعي", "قضبان تعليق"]],
    "parametric-wood-grid": ["سقف شبكي خشبي بارامتري", "شبكة خشبية ثلاثية الأبعاد تنخفض وترتفع ككثبان الرمل، مضاءة من الخلف.",
      "شبكة خشبية مصممة بالحاسوب تنحني في ثلاثة أبعاد، وتخترقها الإضاءة الخلفية لتمنح توهجًا دراميًا. مثالية لردهات الشركات والمسارح.",
      ["تصميم بارامتري ثلاثي الأبعاد", "توهج بإضاءة خلفية", "أداء صوتي ممتاز", "فريد لكل مشروع"],
      ["شبكة خشبية", "ألواح بإضاءة خلفية", "هيكل فولاذي داعم"]],
    "flowing-slat-ceiling": ["سقف شرائح خشبية انسيابية", "شرائح خشبية رفيعة تنحني وتنثني عبر السقف والجدران.",
      "عوارض خشبية رفيعة تتبع الأسطح المنحنية والمائلة، وتنساب من الجدار إلى السقف. تخلق الخطوط الدقيقة ملمسًا ودفئًا، وتساعد الفراغات بينها في العزل الصوتي.",
      ["انسياب من الجدار إلى السقف", "عروق خشب طبيعية دافئة", "فراغات للعزل الصوتي", "تشطيب ورنيش مطفي"],
      ["عوارض خشبية", "هيكل منحني", "ورنيش شفاف مطفي"]],
    "heritage-timber-roof": ["سقف خشبي تراثي", "عوارض مكشوفة وطبقات خشبية متدرجة — تقليدي ومليء بالطابع.",
      "هيكل سقف تقليدي مكشوف بعوارض ضخمة وطبقات خشبية متدرجة وحواف منحوتة. مثالي للشاليهات والمنتجعات والأجنحة التي تريد مظهرًا أصيلًا مصنوعًا يدويًا.",
      ["عوارض إنشائية مكشوفة", "حرفية تقليدية", "أجواء داخلية باردة طبيعيًا", "رائع للأسقف العالية"],
      ["عوارض خشبية مكشوفة", "ألواح خشبية", "حواف منحوتة"]],
    "triangle-panel": ["سقف هندسي بألواح مثلثة", "ألواح مثلثة متعددة الأوجه تلتقط الضوء والظل كالألماس.",
      "ألواح مثلثة مائلة تشكّل سطحًا متعدد الأوجه يتغير مع الضوء طوال اليوم. نظيف ومستقبلي ومتين جدًا — المفضل لصالات العرض والردهات التجارية.",
      ["سطح ثلاثي الأبعاد متعدد الأوجه", "ألواح ACP مقاومة للعوامل الجوية", "خيارات مقاومة للحريق", "مظهر مستقبلي"],
      ["ألواح ألمنيوم مركبة (ACP)", "شبكة فولاذية", "إضاءة مخفية"]],
    "diamond-glass-grid": ["سقف زجاجي بشبكة ماسية", "شبكة متقاطعة من الفولاذ والزجاج تغمر الأفنية بضوء النهار.",
      "شبكة قطرية من العوارض الفولاذية تحمل ألواحًا زجاجية على شكل ماسات لتغطية الأفنية والردهات المفتوحة. قوية ومليئة بالضوء ولافتة معماريًا.",
      ["هيكل شبكي قطري", "زجاج أمان مقسّى", "ضوء نهار طبيعي", "تغطية الأفنية المفتوحة"],
      ["هيكل فولاذي قطري", "زجاج مقسّى", "تزجيج بالسيليكون"]],
    "industrial-glass-roof": ["سقف زجاجي صناعي", "جملونات فولاذية وسقف شفاف لمساحات اللوفت والمداخل والمقاهي المشرقة.",
      "سقف بطابع صناعي من الجملونات الفولاذية وألواح الزجاج أو البولي كربونات الشفافة، يرتكز على عوارض خشبية. يمنح إحساس لوفت مشرق ومفتوح — رائع للمقاهي والمداخل وغرف الحدائق.",
      ["طابع لوفت صناعي", "زجاج أو بولي كربونات", "تركيب فولاذي سريع", "إحساس مشرق ومفتوح"],
      ["جملونات فولاذية", "بولي كربونات / زجاج", "عوارض خشبية"]],
    "sculpted-skylight": ["ردهة بمنور منحوت", "منحنيات منحوتة ناعمة وإضاءة خطية ومنور مضلّع في الأعلى.",
      "أشكال بيضاء منحنية ناعمة مع إضاءة خطية متوهجة تلتف حول الردهة، أسفل منور زجاجي مضلّع. بصمة معمارية جريئة لمباني الشركات والمباني العامة.",
      ["GRG منحني بلا فواصل", "إضاءة خطية مدمجة", "منور مضلّع", "عمارة لافتة"],
      ["ألواح GRG منحنية", "زجاج المنور", "إضاءة LED خطية"]],
    "spiral-plaster": ["سقف جبسي حلزوني", "دوامة منحوتة يدويًا تنطلق من إضاءة كريستال متوهجة.",
      "دوامة جبسية عضوية منحوتة يدويًا تلتف للخارج من إضاءة كريستال ملاصقة للسقف. ناعمة وفنية وفريدة — ميزة رائعة للمجالس والبوتيكات.",
      ["دوامة منحوتة يدويًا", "مظهر عضوي فني", "إضاءة كريستال في المنتصف", "تشطيب جبسي بلا فواصل"],
      ["جبس منحوت يدويًا", "جبس بملمس", "إضاءة كريستال ملاصقة"]],
    "wood-plank-chandelier": ["سقف ألواح خشبية مع ثريا", "ألواح لسان وأخدود داكنة مع سبوتات دافئة وثريا نحاسية.",
      "ألواح خشبية داكنة بنظام اللسان والأخدود تخلق سقفًا دافئًا ومريحًا. تضيف السبوتات الغائرة إضاءة محيطة، بينما تصبح الثريا النحاسية محور المكان فوق طاولة الطعام.",
      ["ألواح لسان وأخدود", "أجواء دافئة ومريحة", "جاهز للثريا", "يخفي عدم استواء السقف الخرساني"],
      ["ألواح خشب لسان وأخدود", "سبوتات غائرة", "ثريا نحاسية"]],
    "barrel-vault-beams": ["سقف قبوي أسطواني بعوارض", "أقواس بيضاء منحنية بأضلاع سوداء جريئة — لافت وبصري.",
      "سقف قبوي أسطواني بأقواس بيضاء وأضلاع سوداء متقاربة. يخلق التباين القوي مظهرًا يجمع بين العصري والكلاسيكي، مثاليًا للممرات الطويلة والمعارض.",
      ["قبو أسطواني منحني", "أضلاع عالية التباين", "يمنح الممرات فخامة", "طراز عصري كلاسيكي"],
      ["أقواس جبس منحنية", "عوارض مطلية بالأسود", "تشطيب أبيض مطفي"]],
    "minimal-layered": ["سقف أبيض بسيط متعدد الطبقات", "مستويات متدرجة حادة وفواصل ظل لتصميم داخلي بسيط ونقي.",
      "مستويات جبسية متدرجة بسيطة بفواصل ظل حادة. بلا زخارف، فقط خطوط نظيفة وضوء. مثالي للشقق البسيطة والمكاتب العصرية.",
      ["تفاصيل فواصل الظل", "مظهر بسيط نقي", "بسعر مناسب جدًا", "تركيب سريع"],
      ["ألواح جبس", "حواف فواصل الظل", "طلاء أبيض مطفي"]],
    "curved-slat-wall": ["جدار شرائح خشبية منحني", "شرائح خشبية عمودية تلتف حول جدار منحني لإحساس هادئ وطبيعي.",
      "شرائح من الخشب الطبيعي مثبتة عموديًا على هيكل منحني مع لباد عازل للصوت خلفها. تضيف دفئًا وإيقاعًا وامتصاصًا للصوت في الممرات ومناطق الاستقبال.",
      ["لباد عازل للصوت", "يناسب الجدران المنحنية", "عروق خشب طبيعية", "يخفي عيوب الجدار"],
      ["شرائح بلوط / دردار صلب", "لباد عازل للصوت", "هيكل منحني"]],
    "rustic-plank-wall": ["جدار ألواح خشبية ريفي معاد تدويره", "ألواح أفقية معتّقة مليئة بالعُقد والطابع المميز.",
      "ألواح أفقية من الخشب المعاد تدويره بعُقد طبيعية وملمس مصقول بالفرشاة. تمنح جدارًا مميزًا ريفيًا دافئًا للمقاهي وغرف النوم والشاليهات.",
      ["خشب حقيقي معاد تدويره", "عُقد وعروق فريدة", "صديق للبيئة", "دفء ريفي"],
      ["خشب معاد تدويره", "تشطيب مصقول بالفرشاة", "مانع تسرب مطفي"]],
    "marble-bath-wall": ["جدار حمام من رخام ستاتواريو", "ألواح رخام بعروق لافتة لحمام فاخر بطابع الفنادق.",
      "ألواح رخام كبيرة متطابقة النقش بعروق رمادية مخضرة جريئة تغطي الجدران، مع وحدات مغسلة كلاسيكية بيضاء. مظهر حمام فاخر بحق.",
      ["ألواح متطابقة النقش", "تركيب مقاوم للماء", "فخامة خالدة", "سطح معالج سهل التنظيف"],
      ["ألواح رخام متطابقة النقش", "لاصق مقاوم للماء", "مادة عازلة"]],
    "stone-niche-bath": ["جدار بمظهر حجري مع كوة مضيئة", "جدران بورسلان بمظهر حجري دافئ مع رف غائر متوهج.",
      "ألواح بورسلان كبيرة بمظهر حجري طبيعي، وكوة غائرة بشريط LED مخفي، وسبوتات غائرة في السقف. أجواء سبا دافئة وسهلة الصيانة.",
      ["كوة بإضاءة LED متوهجة", "بلاط بمقاسات كبيرة", "فواصل أقل", "أجواء سبا"],
      ["بورسلان بمقاسات كبيرة", "شريط LED للكوة", "سبوتات غائرة"]],
    "white-brick-kitchen": ["جدار مطبخ بالطوب الأبيض", "جدار نظيف بشرائح الطوب الأبيض — منعش ومشرق وسهل المسح.",
      "بلاط بشرائح الطوب الأبيض بفواصل رفيعة يمنح جدار مطبخ مشرقًا بطابع إسكندنافي، ويتناغم بشكل جميل مع الرفوف الخشبية والتخزين المفتوح.",
      ["مظهر بملمس الطوب", "مقاوم للحرارة والرذاذ", "مشرق ومنعش", "مناسب للميزانية"],
      ["بلاط شرائح الطوب", "ترويب أبيض", "مانع تسرب مطفي"]],
    "charcoal-accent-wall": ["جدار تلفزيون مميز باللون الفحمي", "جدار مميز باللون الفحمي الداكن يؤطّر التلفزيون ويضيف عمقًا.",
      "جدار مميز باللون الفحمي الداكن يحيط به تجويف غائر رفيع، مثالي خلف التلفزيون. تقلل الإضاءة الخلفية الاختيارية إجهاد العين وتضيف أجواء السينما.",
      ["يخفي أسلاك التلفزيون", "إضاءة خلفية اختيارية", "يضيف عمقًا للغرفة", "سريع وبسعر مناسب"],
      ["طلاء فحمي مطفي / ألواح PVC", "تجويف جبسي للتلفزيون", "إضاءة LED خلفية"]],
  };

  /* ---------- Helpers ---------- */
  const norm = (s) => s.replace(/\s+/g, " ").trim();

  function t(key, params) {
    let s = isAr ? (AR[key] ?? EN[key] ?? key) : (EN[key] ?? key);
    if (params) s = s.replace(/\{(\w+)\}/g, (_, k) => params[k] ?? "");
    return s;
  }

  const num = (n) => Math.round(n).toLocaleString("en-US");
  const money = (n) => (isAr ? `${num(n)} روبية` : `Rs ${num(n)}`);
  const range = (a, b) => (isAr ? `${num(a)} – ${num(b)} روبية` : `Rs ${num(a)} – Rs ${num(b)}`);

  /* "4 – 6 days" → "4 – 6 أيام" ; "15+ years" → "أكثر من 15 سنة" */
  function arDays(s) {
    const nums = s.match(/\d+/g) || [];
    const max = +nums[nums.length - 1] || 0;
    return s.replace(/days?/, max > 10 ? "يومًا" : "أيام");
  }
  function arYears(s) {
    const n = (s.match(/\d+/) || [""])[0];
    return /\+/.test(s) ? `أكثر من ${n} سنة` : `${n} سنة`;
  }

  /* ---------- Localise data (categories + designs) ---------- */
  function localiseData() {
    if (!isAr) return;
    if (typeof CATEGORIES !== "undefined") CATEGORIES.forEach((c) => { c.label = CATEGORIES_AR[c.id] || c.label; });
    if (typeof DESIGNS !== "undefined") DESIGNS.forEach((d) => {
      const a = DESIGNS_AR[d.id];
      if (a) [d.title, d.short, d.description, d.features, d.materials] = a;
      d.rooms = d.rooms.map((r) => AR[r] || r);
      d.installDays = arDays(d.installDays);
      d.durability = arYears(d.durability);
      d.maintenance = AR[d.maintenance] || d.maintenance;
    });
  }

  /* ---------- Translate static HTML ---------- */
  function translateNode(root) {
    if (!isAr) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement && /^(SCRIPT|STYLE)$/.test(n.parentElement.tagName)
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT),
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const key = norm(n.nodeValue);
      if (!key || !(key in AR)) return;
      const lead = n.nodeValue.match(/^\s*/)[0] ? " " : "";
      const trail = n.nodeValue.match(/\s*$/)[0] ? " " : "";
      n.nodeValue = lead + AR[key] + trail;
    });
    root.querySelectorAll("[placeholder],[title],[aria-label],[alt]").forEach((el) => {
      ["placeholder", "title", "aria-label", "alt"].forEach((attr) => {
        const v = el.getAttribute(attr);
        if (v && AR[norm(v)]) el.setAttribute(attr, AR[norm(v)]);
      });
    });
  }

  function setLang(next) {
    try { localStorage.setItem("cc-lang", next); } catch { /* ignore */ }
    const url = new URL(location.href);
    url.searchParams.set("lang", next);
    location.href = url.toString();
  }

  /* ---------- Run now (scripts are at the end of <body>) ---------- */
  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? "rtl" : "ltr";
  localiseData();
  if (isAr) {
    const titleKey = norm(document.title);
    if (AR[titleKey]) document.title = AR[titleKey];
    translateNode(document.body);
  }
  document.documentElement.classList.add("i18n-ready");

  return { lang, isAr, t, money, range, setLang, translateNode };
})();
