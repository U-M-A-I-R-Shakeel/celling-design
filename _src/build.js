/* ==========================================================
   Static site builder — run from the project folder:  node _src/build.js
   Writes Arabic pages to the site root and English pages to /en/.
   ========================================================== */
const fs = require("fs");
const path = require("path");
const SITE = require("./site");
const { nav, services, pages } = require("./content");
const PHOTOS = require("./photos.json");

const ROOT = path.join(__dirname, "..");
const LANGS = ["ar", "en"];
const OTHER = { ar: "en", en: "ar" };

const UI = {
  call: { ar: "اتصال", en: "Call" },
  callNow: { ar: "اتصل الآن", en: "Call now" },
  whatsapp: { ar: "واتساب", en: "WhatsApp" },
  sendWhatsapp: { ar: "إرسال على واتساب", en: "Send on WhatsApp" },
  skip: { ar: "تخطي إلى المحتوى", en: "Skip to content" },
  home: { ar: "الرئيسية", en: "Home" },
  menu: { ar: "القائمة", en: "Menu" },
  details: { ar: "مشاهدة التفاصيل", en: "View details" },
  phoneLabel: { ar: "الهاتف (اتصال مباشر)", en: "Phone (direct call)" },
  waLabel: { ar: "واتساب", en: "WhatsApp" },
  hoursLabel: { ar: "أوقات العمل", en: "Working hours" },
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" },
  addressLabel: { ar: "العنوان", en: "Address" },
  footerLead: { ar: "اتصل بنا اليوم للحصول على <b>تسعيرة مجانية</b> لأعمال الجبس بورد.", en: "Call us today for a <b>free quote</b> on any gypsum board work." },
  rights: { ar: "جميع الحقوق محفوظة.", en: "All rights reserved." },
  faqMore: { ar: "إذا كان عندك سؤال آخر، تواصل معنا مباشرة على {phone} أو أرسل سؤالك وصور المكان على {wa}.", en: "Have another question? Call us on {phone} or send your question and photos on {wa}." },
  levels: { ar: ["", "اقتصادي", "متوسط", "مرتفع", "فاخر"], en: ["", "Budget", "Mid-range", "Higher", "Premium"] },
  bestFor: { ar: "مناسب لـ:", en: "Best for:" },
  close: { ar: "إغلاق", en: "Close" },
  themeLight: { ar: "الوضع الفاتح", en: "Light mode" },
  themeDark: { ar: "الوضع الداكن", en: "Dark mode" },
  form: {
    name: { ar: "الاسم", en: "Name" }, phone: { ar: "رقم الهاتف", en: "Phone" }, city: { ar: "المحافظة والمنطقة", en: "Governorate & area" },
    service: { ar: "الخدمة المطلوبة", en: "Service needed" }, size: { ar: "المساحة التقريبية بالمتر المربع (اختياري)", en: "Approx. size in m² (optional)" },
    msg: { ar: "تفاصيل إضافية", en: "More details" }, submit: { ar: "إرسال الطلب على الواتساب", en: "Send request on WhatsApp" },
    other: { ar: "أخرى / غير متأكد", en: "Other / not sure" },
    hello: { ar: "مرحباً، أريد عرض سعر لأعمال الجبس بورد.", en: "Hello, I'd like a quote for gypsum board work." },
    required: { ar: "يرجى كتابة الاسم ورقم الهاتف", en: "Please enter your name and phone number" },
  },
};
const CAT_SERVICE = { gypsum: "gypsum-ceilings", led: "gypsum-ceilings", modern: "gypsum-ceilings", glass: "classic-wood-ceilings",
  pop: "classic-wood-ceilings", coffered: "classic-wood-ceilings", wooden: "classic-wood-ceilings", wall: "wall-decor" };

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const tel = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
const wa = (text) => `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

function build(lang) {
  const tr = (v) => (v && typeof v === "object" && "ar" in v ? v[lang] : v);
  const base = lang === SITE.defaultLang ? "" : "../";
  const dir = lang === SITE.defaultLang ? ROOT : path.join(ROOT, lang);
  const href = (slug) => (slug === "index" ? "./" : `${slug}.html`);
  const otherHref = (slug) => {
    const toDefault = OTHER[lang] === SITE.defaultLang;
    const prefix = toDefault ? "../" : `${OTHER[lang]}/`;
    return prefix + (slug === "index" ? "" : `${slug}.html`) || "./";
  };
  const photo = (p) => ({ ...p, title: p[lang].title, short: p[lang].short });
  const pickPhotos = (sel) => {
    if (!sel) return [];
    if (sel.ids) return sel.ids.map((id) => PHOTOS.find((p) => p.id === id)).filter(Boolean).map(photo);
    return PHOTOS.filter((p) => sel.cats.includes(p.category)).map(photo);
  };

  const btns = (opts = {}) => `
      <div class="btns${opts.inline ? " btns--inline" : ""}">
        <a class="btn btn--yellow" href="${tel}">${tr(UI.call)}: <span dir="ltr">${SITE.phoneShort}</span></a>
        <a class="btn btn--outline" href="${wa(tr(UI.form.hello))}" target="_blank" rel="noopener">${tr(UI.whatsapp)}</a>
      </div>`;
  const head2 = (s) => (s.h2 ? `<h2>${esc(tr(s.h2))}</h2>` : "") + (s.intro ? `<p class="intro">${esc(tr(s.intro))}</p>` : "");
  const button = (b) => b ? `<div class="center"><a class="btn ${b.style === "outline" ? "btn--outline" : "btn--yellow"} btn--auto" href="${href(b.href)}">${esc(tr(b.label))}</a></div>` : "";

  const R = {
    hero: (s, page) => `
    <section class="box hero">
      ${page.crumb ? `<nav class="crumbs" aria-label="breadcrumb"><a href="./">${tr(UI.home)}</a> / ${page.crumb.map((c) => `<a href="${href(c.slug)}">${esc(tr(c.label))}</a> / `).join("")}<span>${esc(tr(page.navLabel || ""))}</span></nav>` : ""}
      <h1>${esc(tr(s.h1))}</h1>
      ${(s.lead || []).map((p) => `<p class="intro">${esc(tr(p))}</p>`).join("")}
      <div class="badges">${SITE.badges.map((b) => `<span class="badge">${esc(tr(b))}</span>`).join("")}</div>
      ${btns()}
    </section>`,

    cards: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="grid grid--${s.items.length % 3 === 0 && s.items.length > 4 ? 3 : 2} ${s.style === "cream" ? "cards-cream" : "cards-dark"}${s.align === "start" ? " align-start" : ""}">
        ${s.items.map((c) => {
          const inner = `<span class="icon" aria-hidden="true">${c.icon}</span><h3>${esc(tr(c.title))}</h3><p>${esc(tr(c.text))}</p>`;
          return c.href ? `<a class="card" href="${href(c.href)}">${inner}</a>` : `<div class="card">${inner}</div>`;
        }).join("")}
      </div>
      ${button(s.button)}
    </section>`,

    tiers: (s) => {
      const items = s.items || pages[s.from].sections.find((x) => x.type === "tiers").items;
      return `
    <section class="box">
      ${head2(s)}
      <div class="tiers">
        ${items.map((t, i) => `
        <div class="tier">
          <span class="tier__n">${i + 1}</span>
          <div class="tier__body">
            <h3>${esc(tr(t.name))}</h3>
            <p><b>${tr(UI.bestFor)}</b> ${esc(tr(t.best))}</p>
            <p class="muted">${esc(tr(t.note))}</p>
          </div>
          <div class="tier__price" title="${tr(UI.levels)[t.level]}">
            <span class="coins" aria-hidden="true">${"💰".repeat(t.level)}</span>
            <span class="tier__label lvl${t.level}">${tr(UI.levels)[t.level]}</span>
          </div>
        </div>`).join("")}
      </div>
    </section>`;
    },

    areas: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="grid grid--2 cards-dark align-start">
        ${SITE.areas.map((a) => `<div class="card"><h3 class="yellow">${esc(tr(a.city))}</h3><p>${esc(tr(a.list))}</p></div>`).join("")}
      </div>
      ${s.note ? `<p class="note">${esc(tr(s.note))}</p>` : ""}
      ${button(s.button)}
    </section>`,

    pills: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="pills">${SITE.areas.map((a) => `<a class="pill" href="${href("areas")}">${esc(tr(a.city))}</a>`).join("")}</div>
      ${s.note ? `<p class="note"><a href="${href(s.href)}">${esc(tr(s.note))}</a></p>` : ""}
    </section>`,

    gallery: (s) => {
      let list = pickPhotos(s.photos);
      if (s.limit) list = list.slice(0, s.limit);
      return `
    <section class="box">
      ${head2(s)}
      <div class="gallery grid grid--${list.length === 3 || list.length % 3 === 0 ? 3 : list.length === 4 ? 4 : 3}">
        ${list.map((p) => `
        <figure class="shot">
          <a href="${base}images/${p.image}.jpg?v=2" class="shot__img" data-lightbox data-caption="${esc(p.title)}">
            <img src="${base}images/thumbs/${p.image}.jpg?v=2" alt="${esc(p.title)}" loading="lazy" />
          </a>
          <figcaption><h3>${esc(p.title)}</h3><p>${esc(p.short)}</p>
          ${s.linkService ? `<a class="more" href="${href(CAT_SERVICE[p.category])}">${tr(UI.details)} ${lang === "ar" ? "←" : "→"}</a>` : ""}</figcaption>
        </figure>`).join("")}
      </div>
      ${button(s.button)}
    </section>`;
    },

    faq: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="faq">
        ${s.items.map((f) => `<details><summary>${esc(tr(f.q))}</summary><p>${esc(tr(f.a))}</p></details>`).join("")}
        ${s.contactLine ? `<div class="faq__more">${tr(UI.faqMore).replace("{phone}", `<a href="${tel}" dir="ltr">${SITE.phoneShort}</a>`).replace("{wa}", `<a href="${wa()}" target="_blank" rel="noopener">${tr(UI.whatsapp)}</a>`)}</div>` : ""}
      </div>
      ${s.contactLine ? btns({ inline: true }) : ""}
    </section>`,

    reviews: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="reviews">
        ${SITE.reviews.map((r) => `<blockquote class="review"><div class="stars" aria-label="5/5">★★★★★</div><p>${esc(tr(r.text))}</p><cite>${esc(tr(r.who))}</cite></blockquote>`).join("")}
      </div>
      <div class="inner">
        <p>${esc(tr(s.note))}</p>
        ${btns({ inline: true })}
      </div>
    </section>`,

    steps: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="inner inner--narrow">
        <ol class="steps">${s.items.map((i) => `<li>${esc(tr(i))}</li>`).join("")}</ol>
      </div>
    </section>`,

    list: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="inner inner--narrow">
        <ul class="ticks">${s.items.map((i) => `<li>${esc(tr(i))}</li>`).join("")}</ul>
      </div>
    </section>`,

    text: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="inner inner--narrow prose">${s.paras.map((p) => `<p>${esc(tr(p))}</p>`).join("")}</div>
    </section>`,

    cta: (s) => `
    <section class="box">
      ${head2(s)}
      <p class="intro">${esc(tr(s.text))}</p>
      ${btns({ inline: true })}
    </section>`,

    contactCard: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="inner inner--narrow contact-list">
        <p><b>${tr(UI.phoneLabel)}:</b> <a href="${tel}" dir="ltr">${SITE.phone}</a></p>
        <p><b>${tr(UI.waLabel)}:</b> <a href="${wa()}" target="_blank" rel="noopener" dir="ltr">+${SITE.whatsapp}</a></p>
        <p><b>${tr(UI.emailLabel)}:</b> <a href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p><b>${tr(UI.addressLabel)}:</b> ${esc(tr(SITE.address))}</p>
        <p><b>${tr(UI.hoursLabel)}:</b> ${esc(tr(SITE.hours))}</p>
        ${btns({ inline: true })}
      </div>
    </section>`,

    form: (s) => `
    <section class="box">
      ${head2(s)}
      <form class="inner inner--narrow qform" id="waForm" novalidate data-wa="${SITE.whatsapp}" data-hello="${esc(tr(UI.form.hello))}" data-required="${esc(tr(UI.form.required))}">
        <div class="qform__row">
          <label>${tr(UI.form.name)} *<input name="name" required autocomplete="name" /></label>
          <label>${tr(UI.form.phone)} *<input name="phone" required inputmode="tel" autocomplete="tel" dir="ltr" /></label>
        </div>
        <div class="qform__row">
          <label>${tr(UI.form.city)}<input name="city" /></label>
          <label>${tr(UI.form.service)}
            <select name="service">${services.map((x) => `<option>${esc(tr(x.title))}</option>`).join("")}<option>${tr(UI.form.other)}</option></select>
          </label>
        </div>
        <label>${tr(UI.form.size)}<input name="size" /></label>
        <label>${tr(UI.form.msg)}<textarea name="msg" rows="3"></textarea></label>
        <p class="qform__err" id="formErr" hidden></p>
        <button class="btn btn--yellow" type="submit">${tr(UI.form.submit)}</button>
      </form>
    </section>`,
  };

  /* ---------- header / footer ---------- */
  const header = (slug, parent) => `
  <a class="skip" href="#main">${tr(UI.skip)}</a>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="brand" href="./">${esc(tr(SITE.name))}</a>
      <a class="phone-pill" href="${tel}" aria-label="${tr(UI.callNow)}">📞</a>
      <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="siteNav" aria-label="${tr(UI.menu)}"><span></span><span></span><span></span></button>
      <nav class="site-nav" id="siteNav">
        <ul>
          ${nav.map((n) => {
            const active = n.slug === slug || n.slug === parent ? " is-active" : "";
            if (!n.children) return `<li><a class="${active.trim()}" href="${href(n.slug)}">${esc(tr(n.label))}</a></li>`;
            return `<li class="has-sub"><a class="${active.trim()}" href="${href(n.slug)}">${esc(tr(n.label))}</a><button class="sub-btn" aria-label="${esc(tr(n.label))}" aria-expanded="false">▾</button>
            <ul class="sub">${n.children.map((c) => `<li><a class="${c.slug === slug ? "is-active" : ""}" href="${href(c.slug)}">${esc(tr(c.label))}</a></li>`).join("")}</ul></li>`;
          }).join("")}
          <li class="lang"><a href="${otherHref(slug)}" hreflang="${OTHER[lang]}" lang="${OTHER[lang]}">${OTHER[lang] === "ar" ? "عربي" : "English"}</a></li>
          <li class="theme"><button class="theme-btn" id="themeBtn" type="button" aria-label="${tr(UI.themeLight)}" title="${tr(UI.themeLight)}"
            data-label-light="${tr(UI.themeLight)}" data-label-dark="${tr(UI.themeDark)}"><span class="ico-sun" aria-hidden="true">☀️</span><span class="ico-moon" aria-hidden="true">🌙</span></button></li>
        </ul>
      </nav>
    </div>
  </header>`;

  const footer = () => `
  <footer class="site-footer">
    <div class="wrap">
      <p class="footer-lead">${tr(UI.footerLead)}</p>
      <dl class="footer-info">
        <dt>${tr(UI.phoneLabel)}:</dt><dd><a href="${tel}" dir="ltr">${SITE.phoneShort}</a></dd>
        <dt>${tr(UI.waLabel)}:</dt><dd><a href="${wa(tr(UI.form.hello))}" target="_blank" rel="noopener">${tr(UI.sendWhatsapp)}</a></dd>
        <dt>${tr(UI.hoursLabel)}:</dt><dd>${esc(tr(SITE.hours))}</dd>
        <dt>${tr(UI.emailLabel)}:</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd>
        <dt>${tr(UI.addressLabel)}:</dt><dd>${esc(tr(SITE.address))}</dd>
      </dl>
      <ul class="socials">${SITE.socials.map((s) => `<li><a href="${s.href}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}<li><a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a></li></ul>
      <p class="copy">© ${new Date().getFullYear()} ${esc(tr(SITE.name))} — ${tr(UI.rights)}</p>
    </div>
  </footer>
  <a class="fab" href="${tel}" aria-label="${tr(UI.callNow)}"><span class="fab__tip">${tr(UI.callNow)}</span><span class="fab__btn">📞</span></a>
  <div class="lightbox" id="lightbox" hidden><button class="lightbox__close" aria-label="${tr(UI.close)}">×</button><figure><img alt="" /><figcaption></figcaption></figure></div>`;

  fs.mkdirSync(dir, { recursive: true });
  let count = 0;
  for (const [slug, page] of Object.entries(pages)) {
    const svc = services.find((s) => s.slug === slug);
    const parent = svc ? "services" : null;
    if (svc) page.navLabel = svc.title;
    const html = `<!doctype html>
<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(tr(page.title))}</title>
  <meta name="description" content="${esc(tr(page.desc))}" />
  <link rel="alternate" hreflang="${OTHER[lang]}" href="${otherHref(slug)}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />
  <script>try{var t=localStorage.getItem("cc-theme");if(t==="light")document.documentElement.dataset.theme="light"}catch(e){}</script>
  <link rel="stylesheet" href="${base}assets/style.css" />
</head>
<body>
${header(slug, parent)}
  <main id="main" class="wrap">
${page.sections.map((s) => R[s.type](s, page)).join("\n")}
  </main>
${footer()}
  <script src="${base}assets/main.js" defer></script>
</body>
</html>
`;
    fs.writeFileSync(path.join(dir, `${slug}.html`), html);
    count++;
  }
  console.log(`${lang}: ${count} pages → ${path.relative(ROOT, dir) || "(root)"}`);
}

LANGS.forEach(build);
