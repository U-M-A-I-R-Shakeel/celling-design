/* ==========================================================
   Static site builder — run from the project folder:  node _src/build.js
   Writes Arabic pages to the site root and English pages to /en/.
   Old generated pages that no longer exist in content.js are removed.
   ========================================================== */
const fs = require("fs");
const path = require("path");
const SITE = require("./site");
const { nav, services, pages, articles } = require("./content");

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
  phoneLabel: { ar: "الهاتف (اتصال مباشر)", en: "Phone (direct call)" },
  waLabel: { ar: "واتساب", en: "WhatsApp" },
  hoursLabel: { ar: "أوقات العمل", en: "Working hours" },
  emailLabel: { ar: "البريد الإلكتروني", en: "Email" },
  addressLabel: { ar: "العنوان", en: "Address" },
  areasLabel: { ar: "مناطق الخدمة", en: "Service areas" },
  areasText: { ar: "جميع محافظات الكويت: العاصمة، حولي، الفروانية، الجهراء، الأحمدي، مبارك الكبير – حسب توفر المواعيد.", en: "All Kuwait governorates: Capital, Hawalli, Farwaniya, Jahra, Ahmadi, Mubarak Al-Kabeer – subject to availability." },
  waNote: { ar: "(أرسل صور المكان وشرحاً مختصراً للشغل)", en: "(send photos of the space and a short description)" },
  footerLead: { ar: "اتصل بنا اليوم للحصول على <b>تسعيرة مجانية</b> لأعمال الجبس بورد في جميع مناطق الكويت.", en: "Call us today for a <b>free quote</b> on gypsum board work anywhere in Kuwait." },
  rights: { ar: "جميع الحقوق محفوظة.", en: "All rights reserved." },
  faqMore: { ar: "إذا كان عندك سؤال آخر، تواصل معنا مباشرة على {phone} أو أرسل سؤالك وصور المكان على {wa}.", en: "Have another question? Call us on {phone} or send your question and photos on {wa}." },
  serveAll: { ar: "نخدم جميع محافظات الكويت", en: "We serve every Kuwait governorate" },
  moreDetails: { ar: "لمزيد من التفاصيل:", en: "More details:" },
  areasPage: { ar: "مناطق خدمة الجبس بورد في الكويت", en: "Gypsum service areas in Kuwait" },
  otherServices: { ar: "تصفح خدماتنا الأخرى:", en: "Browse our other services:" },
  articlesCat: { ar: "مقالات الجبس بورد", en: "Gypsum articles" },
  articleCtaTitle: { ar: "🔶 تسعيرة واضحة وسريعة", en: "🔶 A clear, quick quote" },
  articleCtaText: { ar: "أرسل صورة + المقاسات على الواتساب ونرد عليك بسعر تقريبي قبل المعاينة.", en: "Send a photo and sizes on WhatsApp and we'll reply with an estimate before the visit." },
  waDirect: { ar: "واتساب مباشر", en: "WhatsApp us" },
  close: { ar: "إغلاق", en: "Close" },
  toTop: { ar: "العودة للأعلى", en: "Back to top" },
  themeLight: { ar: "الوضع الفاتح", en: "Light mode" },
  themeDark: { ar: "الوضع الداكن", en: "Dark mode" },
  hello: { ar: "مرحباً، أريد عرض سعر لأعمال الجبس بورد.", en: "Hello, I'd like a quote for gypsum board work." },
};

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const tel = `tel:${SITE.phone.replace(/[^\d+]/g, "")}`;
const wa = (text) => `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

function build(lang) {
  const tr = (v) => (v && typeof v === "object" && "ar" in v ? v[lang] : v);
  const base = lang === SITE.defaultLang ? "" : "../";
  const dir = lang === SITE.defaultLang ? ROOT : path.join(ROOT, lang);
  const href = (slug) => `${slug}.html`;
  const otherHref = (slug) => `${OTHER[lang] === SITE.defaultLang ? "../" : `${OTHER[lang]}/`}${slug}.html`;
  const arrow = lang === "ar" ? "←" : "→";
  const phoneLink = `<a href="${tel}" dir="ltr">${SITE.phoneShort}</a>`;
  const txt = (s) => esc(tr(s)).replace("{phone}", phoneLink);   // text with an optional {phone} link
  const thumb = (img) => `${base}images/thumbs/${img}.jpg?v=2`;
  const full = (img) => `${base}images/${img}.jpg?v=2`;

  /* Buttons: [{kind: call|wa|email, style: yellow|outline, label?}] */
  const btn = (b) => {
    const cls = `btn ${b.style === "outline" ? "btn--outline" : "btn--yellow"}`;
    if (b.kind === "call") return `<a class="${cls}" href="${tel}">${b.label ? esc(tr(b.label)) : `${tr(UI.call)}: <span dir="ltr">${SITE.phoneShort}</span>`}</a>`;
    if (b.kind === "email") return `<a class="${cls}" href="mailto:${SITE.email}">${esc(tr(b.label))}</a>`;
    return `<a class="${cls}" href="${wa(tr(UI.hello))}" target="_blank" rel="noopener">${b.label ? esc(tr(b.label)) : tr(UI.whatsapp)}</a>`;
  };
  const btnRow = (list, stacked) => list && list.length ? `<div class="btns${stacked ? "" : " btns--inline"}">${list.map(btn).join("")}</div>` : "";
  const DEF = [{ kind: "call", style: "yellow" }, { kind: "wa", style: "outline" }];
  const head2 = (s) => (s.h2 ? `<h2>${esc(tr(s.h2))}</h2>` : "") + (s.intro ? `<p class="intro">${txt(s.intro)}</p>` : "");
  const linkBtn = (b) => b ? `<div class="center"><a class="btn ${b.style === "outline" ? "btn--outline" : "btn--yellow"} btn--auto" href="${href(b.href)}">${esc(tr(b.label))}</a></div>` : "";
  const lead = (s) => {   // "Bold part: rest" → bold yellow lead-in
    const t = tr(s); const i = t.indexOf(":");
    return i > 0 && i < 45 ? `<b class="lead-in">${esc(t.slice(0, i + 1))}</b>${esc(t.slice(i + 1))}` : esc(t);
  };

  const R = {
    hero: (s, page) => `
    <section class="box hero">
      ${page.crumb ? `<nav class="crumbs" aria-label="breadcrumb"><a href="index.html">${tr(UI.home)}</a> / ${page.crumb.map((c) => `<a href="${href(c.slug)}">${esc(tr(c.label))}</a> / `).join("")}<span>${esc(tr(page.navLabel || ""))}</span></nav>` : ""}
      <h1>${esc(tr(s.h1))}</h1>
      ${(s.lead || []).map((p) => `<p class="intro">${txt(p)}</p>`).join("")}
      <div class="badges">${SITE.badges.slice(0, s.badges || 2).map((b) => `<span class="badge">${esc(tr(b))}</span>`).join("")}</div>
      ${btnRow(s.buttons || DEF, true)}
    </section>`,

    cards: (s) => `
    <section class="box${s.align === "start" && s.style === "dark" ? " box--start" : ""}">
      ${head2(s)}
      <div class="grid grid--2 ${s.style === "cream" ? "cards-cream" : "cards-dark"}${s.align === "start" ? " align-start" : ""}">
        ${s.items.map((c) => {
          const inner = `<span class="icon" aria-hidden="true">${c.icon}</span><h3>${esc(tr(c.title))}</h3><p>${esc(tr(c.text))}</p>`;
          return c.href ? `<a class="card" href="${href(c.href)}">${inner}</a>` : `<div class="card">${inner}</div>`;
        }).join("")}
      </div>
      ${linkBtn(s.button)}
    </section>`,

    areas: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="grid grid--2 cards-dark align-start">
        ${SITE.areas.map((a) => `<div class="card"><h3 class="yellow">${esc(tr(a.city))}</h3><p>${esc(tr(a.list))}</p></div>`).join("")}
      </div>
      <p class="note">${esc(tr(s.note))}</p>
      ${linkBtn(s.button)}
    </section>`,

    areaLinks: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="grid grid--2 cards-dark align-start">
        ${SITE.areas.map((a) => `<a class="card" href="${href(a.slug)}"><h3 class="yellow">${esc(tr(a.city))}</h3><p>${esc(tr(a.list))}</p></a>`).join("")}
      </div>
      <p class="note">${esc(tr(s.note))}</p>
      ${btnRow([{ kind: "wa", style: "outline" }])}
    </section>`,

    serviceLinks: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="grid grid--2 ${s.style === "cream" ? "cards-cream" : "cards-dark"} align-start">
        ${services.slice(0, 4).map((v) => `<a class="card" href="${href(v.slug)}"><span class="icon" aria-hidden="true">${v.icon}</span><h3>${esc(tr(v.long))}</h3><p>${esc(tr(v.area))}</p></a>`).join("")}
      </div>
      <p class="note">${s.noteHref ? `<a href="${href(s.noteHref)}">${esc(tr(s.note))}</a>` : esc(tr(s.note))}</p>
      ${s.noteWa ? btnRow([{ kind: "wa", style: "outline" }]) : ""}
    </section>`,

    gallery: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="gallery grid grid--${s.cols || 3}">
        ${s.items.map((p) => `
        <figure class="shot">
          <a href="${full(p.img)}" class="shot__img" data-lightbox data-caption="${esc(tr(p.title))}">
            <img src="${thumb(p.img)}" alt="${esc(tr(p.title))}" loading="lazy" />
          </a>
          <figcaption><h3>${esc(tr(p.title))}</h3><p>${esc(tr(p.text))}</p>
          ${p.href ? `<a class="more" href="${href(p.href)}">${esc(tr(p.more))} ${arrow}</a>` : ""}</figcaption>
        </figure>`).join("")}
      </div>
      ${linkBtn(s.button)}
    </section>`,

    pills: () => `
    <section class="strip">
      <p class="strip__title">${tr(UI.serveAll)}</p>
      <div class="pills">${SITE.areas.map((a) => `<a class="pill" href="${href(a.slug)}">${esc(tr(a.short))}</a>`).join("")}</div>
      <p class="strip__more">${tr(UI.moreDetails)} <a href="${href("areas")}">${tr(UI.areasPage)}</a></p>
    </section>`,

    light: (s) => `
    <section class="box box--light">
      <h2>${esc(tr(s.h2))}</h2>
      ${s.paras.map((p) => `<p>${esc(tr(p))}</p>`).join("")}
    </section>`,

    steps: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      <div class="inner">
        ${s.intro ? `<p>${esc(tr(s.intro))}</p>` : ""}
        <ol class="steps">${s.items.map((i) => `<li>${esc(tr(i))}</li>`).join("")}</ol>
        ${s.outro ? `<p class="muted">${esc(tr(s.outro))}</p>` : ""}
        ${btnRow(s.buttons)}
      </div>
    </section>`,

    priceBox: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      ${s.paras.map((p) => `<p class="intro">${txt(p)}</p>`).join("")}
      ${btnRow(s.buttons, true)}
    </section>`,

    listBox: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      <div class="inner">
        ${s.intro ? `<p>${esc(tr(s.intro))}</p>` : ""}
        <ul class="bullets">${s.items.map((i) => `<li>${lead(i)}</li>`).join("")}</ul>
        ${s.outro ? `<p class="muted">${s.outroHref ? `<a href="${href(s.outroHref)}">${esc(tr(s.outro))}</a>` : esc(tr(s.outro))}</p>` : ""}
        ${btnRow(s.buttons)}
      </div>
    </section>`,

    textBox: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      <div class="inner">${s.paras.map((p) => `<p>${esc(tr(p))}</p>`).join("")}</div>
    </section>`,

    faq: (s) => `
    <section class="box">
      ${head2(s)}
      <div class="faq">
        ${s.items.map((f) => `<details><summary>${esc(tr(f.q))}</summary><p>${esc(tr(f.a))}</p></details>`).join("")}
        ${s.contactLine ? `<div class="faq__more">${tr(UI.faqMore).replace("{phone}", phoneLink).replace("{wa}", `<a href="${wa()}" target="_blank" rel="noopener">${tr(UI.whatsapp)}</a>`)}</div>` : ""}
      </div>
      ${btnRow(s.buttons)}
    </section>`,

    reviews: (s) => `
    <section class="box box--start">
      ${head2(s)}
      <div class="reviews">
        ${SITE.reviews.map((r) => `<blockquote class="review"><div class="stars" aria-label="5/5">★★★★★</div><p>${esc(tr(r.text))}</p><cite>${esc(tr(r.who))}</cite></blockquote>`).join("")}
      </div>
      <div class="inner center"><p>${esc(tr(s.note))}</p>${btnRow([{ kind: "wa", style: "outline" }, { kind: "call", style: "yellow" }])}</div>
    </section>`,

    otherServices: (s) => `
    <section class="strip">
      <p class="strip__label">${tr(UI.otherServices)}</p>
      <p class="dotlinks">${services.filter((v) => v.slug !== s.exclude).map((v) => `<a href="${href(v.slug)}">${esc(tr(v.slug === "craftsman" ? v.long : v.title))}</a>`).join(`<span aria-hidden="true">·</span>`)}</p>
    </section>`,

    linksStrip: (s) => `
    <section class="strip">
      <p class="strip__label">${esc(tr(s.label))}</p>
      <p class="dotlinks">${s.links.map((l) => `<a href="${href(l.href)}">${esc(tr(l.label))}</a>`).join(`<span aria-hidden="true">·</span>`)}</p>
    </section>`,

    quickLinks: (s) => `
    <section class="box">
      <p class="strip__label">${esc(tr(s.label))}</p>
      <div class="pills">${s.links.map((l) => `<a class="pill pill--outline" href="${href(l.href)}">${esc(tr(l.label))}</a>`).join("")}</div>
    </section>`,

    contactCard: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      <div class="inner inner--narrow contact-list">
        <p><b>${tr(UI.phoneLabel)}:</b> ${phoneLink}</p>
        <p><b>${tr(UI.waLabel)}:</b> <a href="${wa()}" target="_blank" rel="noopener" dir="ltr">+${SITE.whatsapp}</a> <span class="muted">${tr(UI.waNote)}</span></p>
        <p><b>${tr(UI.emailLabel)}:</b> <a href="mailto:${SITE.email}">${SITE.email}</a></p>
        <p><b>${tr(UI.addressLabel)}:</b> ${esc(tr(SITE.address))}</p>
        <p class="muted">${tr(UI.areasText)}</p>
        ${btnRow(DEF)}
      </div>
    </section>`,

    contactBox: (s) => `
    <section class="box">
      <h2>${esc(tr(s.h2))}</h2>
      <div class="inner center">
        <p>${esc(tr(s.text))}</p>
        ${btnRow([{ kind: "wa", style: "outline", label: L2(`تواصل واتساب مع ${SITE.short.ar}`, `WhatsApp ${SITE.short.en}`) }, { kind: "call", style: "yellow" }], true)}
        <p class="contact-mini"><b>${tr(UI.phoneLabel).split(" (")[0]}:</b> ${phoneLink}<br><b>${tr(UI.addressLabel)}:</b> ${esc(tr(SITE.address))}${SITE.instagram ? `<br><b>Instagram:</b> @${SITE.instagram}` : ""}</p>
      </div>
    </section>`,
  };
  function L2(ar, en) { return { ar, en }; }

  /* ---------- articles ---------- */
  const articleBody = (a) => `
  <main id="main" class="article-wrap">
    <article class="article">
      <p class="article__cat"><a href="${href("articles")}">${tr(UI.articlesCat)}</a></p>
      <h1>${esc(tr(a.title))}</h1>
      <img class="article__img" src="${full(a.img)}" alt="${esc(tr(a.title))}" />
      <p>${esc(tr(a.intro))}</p>
      <div class="article__cta">
        <p class="article__cta-title">${tr(UI.articleCtaTitle)}</p>
        <p>${tr(UI.articleCtaText)}</p>
        <div class="btns btns--inline">
          <a class="btn btn--outline" href="${tel}">${tr(UI.call)}: <span dir="ltr">${SITE.phoneShort}</span></a>
          <a class="btn btn--outline" href="${wa(tr(UI.hello))}" target="_blank" rel="noopener">${tr(UI.waDirect)}</a>
        </div>
      </div>
      ${a.body.map((b) => `
      <h2>${esc(tr(b.h2))}</h2>
      ${b.p ? `<p>${esc(tr(b.p))}</p>` : ""}
      ${b.list ? `<ul>${b.list.map((i) => `<li>${lead(i)}</li>`).join("")}</ul>` : ""}
      ${b.ol ? `<ol>${b.ol.map((i) => `<li>${esc(tr(i))}</li>`).join("")}</ol>` : ""}
      ${b.h3s ? b.h3s.map((h) => `<h3>${esc(tr(h.h3))}</h3><p>${esc(tr(h.p))}</p>`).join("") : ""}`).join("")}
      <p class="article__link"><a href="${href(a.link.href)}">${esc(tr(a.link.label))}</a></p>
    </article>
  </main>`;

  const articlesIndex = (page) => `
  <main id="main" class="article-wrap article-wrap--wide">
    <header class="articles-head">
      <h1>${tr(UI.articlesCat)}</h1>
      <p>${esc(tr(page.intro))}</p>
    </header>
    <div class="articles-grid">
      ${articles.map((a) => `
      <a class="article-card" href="${href(a.slug)}">
        <span class="article-card__cat">${tr(UI.articlesCat)}</span>
        <h2>${esc(tr(a.title))}</h2>
        <p>${esc(tr(a.excerpt))}</p>
      </a>`).join("")}
    </div>
  </main>`;

  /* ---------- header / footer ---------- */
  const header = (slug, parent) => `
  <a class="skip" href="#main">${tr(UI.skip)}</a>
  <header class="site-header">
    <div class="wrap site-header__inner">
      <a class="brand" href="index.html">${esc(tr(SITE.name))}</a>
      <a class="phone-pill" href="${tel}" aria-label="${tr(UI.callNow)}">📞</a>
      <button class="menu-btn" id="menuBtn" aria-expanded="false" aria-controls="siteNav" aria-label="${tr(UI.menu)}"><span></span><span></span><span></span></button>
      <nav class="site-nav" id="siteNav">
        <ul>
          ${nav.map((n) => {
            const active = n.slug === slug || n.slug === parent ? "is-active" : "";
            if (!n.children) return `<li><a class="${active}" href="${href(n.slug)}">${esc(tr(n.label))}</a></li>`;
            return `<li class="has-sub"><a class="${active}" href="${href(n.slug)}">${esc(tr(n.label))}</a><button class="sub-btn" aria-label="${esc(tr(n.label))}" aria-expanded="false"><svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg></button>
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
        <dt>${tr(UI.phoneLabel)}:</dt><dd>${phoneLink}</dd>
        <dt>${tr(UI.waLabel)}:</dt><dd><a href="${wa(tr(UI.hello))}" target="_blank" rel="noopener">${tr(UI.sendWhatsapp)}</a></dd>
        <dt>${tr(UI.hoursLabel)}:</dt><dd>${esc(tr(SITE.hours))}</dd>
        <dt>${tr(UI.emailLabel)}:</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd>
        <dt>${tr(UI.addressLabel)}:</dt><dd>${esc(tr(SITE.address))}</dd>
      </dl>
      <ul class="socials">${SITE.socials.map((s) => `<li><a href="${s.href}" target="_blank" rel="noopener">${s.label}</a></li>`).join("")}<li><a href="${wa()}" target="_blank" rel="noopener">WhatsApp</a></li></ul>
      <p class="copy">© ${esc(tr(SITE.name))} — ${tr(UI.rights)}</p>
    </div>
  </footer>
  <a class="fab" href="${tel}" aria-label="${tr(UI.callNow)}"><span class="fab__tip">${tr(UI.callNow)}</span><span class="fab__btn"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path fill="currentColor" d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg></span></a>
  <button class="to-top" id="toTop" type="button" aria-label="${tr(UI.toTop)}" hidden><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"/></svg></button>
  <div class="lightbox" id="lightbox" hidden><button class="lightbox__close" aria-label="${tr(UI.close)}">×</button><figure><img alt="" /><figcaption></figcaption></figure></div>`;

  fs.mkdirSync(dir, { recursive: true });
  /* remove pages from older versions of the site */
  for (const f of fs.readdirSync(dir)) if (f.endsWith(".html") && !pages[f.slice(0, -5)]) { fs.unlinkSync(path.join(dir, f)); console.log(`  removed old ${path.relative(ROOT, path.join(dir, f))}`); }

  let count = 0;
  for (const [slug, page] of Object.entries(pages)) {
    const svc = services.find((s) => s.slug === slug);
    const parent = svc ? "services" : page.parent || (page.layout === "article" ? "articles" : null);
    if (svc) page.navLabel = svc.title;
    const bodyMain = page.layout === "article" ? articleBody(page.article)
      : page.layout === "articles" ? articlesIndex(page)
      : `  <main id="main" class="wrap">\n${page.sections.map((s) => R[s.type](s, page)).join("\n")}\n  </main>`;
    const html = `<!doctype html>
<html lang="${lang}" dir="${lang === "ar" ? "rtl" : "ltr"}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(tr(page.title))}</title>
  <meta name="description" content="${esc(tr(page.desc))}" />
  <link rel="alternate" hreflang="${OTHER[lang]}" href="${otherHref(slug)}" />
  <script>/* theme: ?theme= from the language switch wins, then the saved choice */
  (function(){var d=document.documentElement,t=null,s=location.search;try{t=new URLSearchParams(s).get("theme")}catch(e){}
  try{if(t==="light"||t==="dark")localStorage.setItem("cc-theme",t);else t=localStorage.getItem("cc-theme")}catch(e){}
  if(t==="light")d.dataset.theme="light";
  if(/[?&]theme=/.test(s))try{history.replaceState(null,"",location.pathname+location.hash)}catch(e){}})();</script>
  <link rel="stylesheet" href="${base}assets/style.css" />
</head>
<body${page.layout ? ` class="page-${page.layout}"` : ""}>
${header(slug, parent)}
${bodyMain}
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
