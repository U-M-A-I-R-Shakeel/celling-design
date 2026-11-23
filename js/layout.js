/* ==========================================================
   CeilCraft Studio — shared layout (header, footer, helpers)
   Loaded on every page. Edit the nav / contact details here once.
   ========================================================== */
const SITE = {
  name: "CeilCraft",
  tagline: "Studio",
  phone: "+92 300 0000000",
  whatsapp: "923000000000",            // international format, no + or spaces
  email: "hello@ceilcraft.studio",
  address: "Main Boulevard, Gulberg, Lahore",
  hours: "Mon – Sat, 10am – 7pm",
  nav: [
    { href: "index.html",   label: "Home",    key: "home" },
    { href: "designs.html", label: "Designs", key: "designs" },
    { href: "process.html", label: "Process", key: "process" },
    { href: "why-us.html",  label: "Why Us",  key: "why" },
    { href: "contact.html", label: "Contact", key: "contact" },
  ],
};

const CC = (() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const store = {
    get(key, fallback) {
      try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch { return fallback; }
    },
    set(key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ }
    },
  };

  const favs = new Set(store.get("cc-favs", []));
  const t = (k, p) => I18N.t(k, p);

  const heartSVG = `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-9.5-9.2C1.1 8.4 3.3 5 6.7 5c2 0 3.4 1.1 4.3 2.4h2C13.9 6.1 15.3 5 17.3 5c3.4 0 5.6 3.4 4.2 6.8C19.5 16.4 12 21 12 21z"/></svg>`;

  /* ---------- Header ---------- */
  function renderHeader() {
    const page = document.body.dataset.page;
    const el = $("#site-header");
    if (!el) return;
    el.className = "header";
    el.id = "header";
    el.innerHTML = `
      <div class="container header__inner">
        <a href="index.html" class="logo" aria-label="${SITE.name} home">
          <span class="logo__mark">${SITE.name[0]}</span>
          <span class="logo__text">${SITE.name}<small>${SITE.tagline}</small></span>
        </a>
        <nav class="nav" id="nav">
          ${SITE.nav.map((n) => `<a href="${n.href}" class="${n.key === page ? "is-active" : ""}"
              ${n.key === page ? 'aria-current="page"' : ""}>${t(n.label)}</a>`).join("")}
        </nav>
        <div class="header__actions">
          <div class="lang-switch" role="group" aria-label="${t("Language")}">
            <button type="button" data-lang="en" lang="en" class="${I18N.lang === "en" ? "is-active" : ""}" aria-pressed="${I18N.lang === "en"}">EN</button>
            <button type="button" data-lang="ar" lang="ar" class="${I18N.lang === "ar" ? "is-active" : ""}" aria-pressed="${I18N.lang === "ar"}">عربي</button>
          </div>
          <a href="designs.html?saved=1" class="icon-btn fav-toggle" id="favToggle" aria-label="${t("Saved designs")}" title="${t("Saved designs")}">
            ${heartSVG}<span class="badge" id="favCount"></span>
          </a>
          <a href="contact.html" class="btn btn--gold btn--sm hide-sm">${t("Free Quote")}</a>
          <button class="icon-btn menu-btn" id="menuBtn" aria-label="${t("Open menu")}" aria-expanded="false">
            <svg viewBox="0 0 24 24"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </button>
        </div>
      </div>`;

    const onScroll = () => el.classList.toggle("is-scrolled", window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    $$(".lang-switch button", el).forEach((b) => b.addEventListener("click", () => {
      if (b.dataset.lang !== I18N.lang) I18N.setLang(b.dataset.lang);
    }));

    const menuBtn = $("#menuBtn");
    menuBtn.addEventListener("click", () => {
      const open = $("#nav").classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open);
      el.classList.toggle("menu-open", open);
    });
    updateFavBadge();
  }

  /* ---------- Footer ---------- */
  function renderFooter() {
    const el = $("#site-footer");
    if (!el) return;
    el.className = "site-footer";
    const cats = (typeof CATEGORIES !== "undefined" ? CATEGORIES : []).filter((c) => c.id !== "all").slice(0, 6);
    el.innerHTML = `
      <div class="container site-footer__grid">
        <div>
          <a href="index.html" class="logo logo--light">
            <span class="logo__mark">${SITE.name[0]}</span>
            <span class="logo__text">${SITE.name}<small>${SITE.tagline}</small></span>
          </a>
          <p class="site-footer__about">${t("Premium ceiling and wall design studio. We design, supply and install, with on-time delivery and a 10-year warranty.")}</p>
        </div>
        <div>
          <h4>${t("Pages")}</h4>
          <ul>${SITE.nav.map((n) => `<li><a href="${n.href}">${t(n.label)}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>${t("Styles")}</h4>
          <ul>${cats.map((c) => `<li><a href="designs.html?cat=${c.id}">${c.label}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>${t("Contact")}</h4>
          <ul class="site-footer__contact">
            <li dir="ltr">${SITE.phone}</li>
            <li>${SITE.email}</li>
            <li>${t(SITE.address)}</li>
            <li>${t(SITE.hours)}</li>
          </ul>
        </div>
      </div>
      <div class="container site-footer__bottom">
        <p>© ${new Date().getFullYear()} ${SITE.name} ${SITE.tagline}. ${t("All rights reserved.")}</p>
        <p>${t("Photos from")} <a href="https://www.pexels.com" target="_blank" rel="noopener">Pexels</a>. ${t("Prices are estimates and vary by site.")}</p>
      </div>`;
  }

  /* ---------- Toast ---------- */
  let toastTimer;
  function toast(msg) {
    let t = $("#toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("is-show"), 2400);
  }

  /* ---------- Favourites (shared across pages) ---------- */
  function updateFavBadge() {
    const b = $("#favCount");
    if (!b) return;
    b.textContent = favs.size;
    b.dataset.zero = favs.size === 0;
  }
  function toggleFav(id) {
    const had = favs.has(id);
    had ? favs.delete(id) : favs.add(id);
    store.set("cc-favs", [...favs]);
    updateFavBadge();
    toast(t(had ? "Removed from saved designs" : "Saved to your designs ♥"));
    $$(`[data-fav="${id}"]`).forEach((btn) => btn.classList.toggle("is-on", !had));
    document.dispatchEvent(new CustomEvent("cc:favs"));
    return !had;
  }

  /* ---------- Accordions (FAQ) ---------- */
  function initAccordions() {
    $$(".faq__q").forEach((q) => {
      q.addEventListener("click", () => {
        const item = q.closest(".faq__item");
        const open = item.classList.toggle("is-open");
        q.setAttribute("aria-expanded", open);
      });
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = $$("[data-reveal]");
    if (!("IntersectionObserver" in window)) return els.forEach((e) => e.classList.add("is-in"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- Fill [data-site] placeholders ---------- */
  function fillSiteInfo() {
    $$("[data-site]").forEach((el) => {
      el.textContent = t(SITE[el.dataset.site]);
      if (el.dataset.site === "phone") el.dir = "ltr";
    });
    $$("[data-site-href]").forEach((el) => {
      const k = el.dataset.siteHref;
      el.href = k === "phone" ? `tel:${SITE.phone.replace(/\s/g, "")}`
        : k === "email" ? `mailto:${SITE.email}`
        : k === "whatsapp" ? `https://wa.me/${SITE.whatsapp}` : "#";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderHeader();
    renderFooter();
    fillSiteInfo();
    initAccordions();
    initReveal();
  });

  return { $, $$, store, favs, toast, toggleFav, heartSVG, t };
})();
