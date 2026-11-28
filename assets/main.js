/* CeilCraft Gypsum Board — menu, dropdown, photo lightbox, WhatsApp form */
(() => {
  "use strict";
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* Mobile menu */
  const menuBtn = $("#menuBtn"), nav = $("#siteNav");
  menuBtn?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuBtn.setAttribute("aria-expanded", open);
  });

  /* Services dropdown (tap to open on touch / small screens) */
  $$(".sub-btn").forEach((b) => b.addEventListener("click", (e) => {
    e.preventDefault();
    const li = b.closest(".has-sub");
    const open = li.classList.toggle("is-open");
    b.setAttribute("aria-expanded", open);
  }));
  document.addEventListener("click", (e) => {
    $$(".has-sub.is-open").forEach((li) => { if (!li.contains(e.target) && !nav.classList.contains("is-open")) li.classList.remove("is-open"); });
  });

  /* Light / dark mode (dark = default look; choice is remembered) */
  const themeBtn = $("#themeBtn");
  const syncTheme = () => {
    const light = document.documentElement.dataset.theme === "light";
    const label = light ? themeBtn.dataset.labelDark : themeBtn.dataset.labelLight;
    themeBtn.setAttribute("aria-label", label); themeBtn.title = label;
  };
  if (themeBtn) {
    syncTheme();
    themeBtn.addEventListener("click", () => {
      const light = document.documentElement.dataset.theme !== "light";
      if (light) document.documentElement.dataset.theme = "light"; else delete document.documentElement.dataset.theme;
      try { localStorage.setItem("cc-theme", light ? "light" : "dark"); } catch { /* storage unavailable */ }
      syncTheme();
    });
  }

  /* Language switch keeps the current theme: pass it along in the link */
  $$(".lang a").forEach((a) => a.addEventListener("click", (e) => {
    e.preventDefault();
    const u = new URL(a.getAttribute("href"), location.href);
    u.searchParams.set("theme", document.documentElement.dataset.theme === "light" ? "light" : "dark");
    location.href = u.href;
  }));

  /* Photo lightbox */
  const lb = $("#lightbox");
  if (lb) {
    const img = $("img", lb), cap = $("figcaption", lb);
    let last;
    const close = () => { lb.hidden = true; img.src = ""; last?.focus(); };
    $$("[data-lightbox]").forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      last = a;
      img.src = a.href; img.alt = a.dataset.caption || ""; cap.textContent = a.dataset.caption || "";
      lb.hidden = false; $(".lightbox__close", lb).focus();
    }));
    lb.addEventListener("click", (e) => { if (e.target === lb || e.target.closest(".lightbox__close")) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !lb.hidden) close(); });
  }

  /* WhatsApp request form */
  const form = $("#waForm");
  if (form) {
    const err = $("#formErr");
    form.addEventListener("input", (e) => e.target.classList.remove("is-invalid"));
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = form.elements;
      let ok = true;
      [f.name, f.phone].forEach((el) => {
        const bad = !el.value.trim() || (el.name === "phone" && el.value.replace(/\D/g, "").length < 7);
        el.classList.toggle("is-invalid", bad);
        if (bad) ok = false;
      });
      err.hidden = ok;
      if (!ok) { err.textContent = form.dataset.required; return; }
      const label = (el) => el.closest("label").childNodes[0].textContent.replace("*", "").trim();
      const lines = [form.dataset.hello];
      [f.name, f.phone, f.city, f.service, f.size, f.msg].forEach((el) => { if (el.value.trim()) lines.push(`${label(el)}: ${el.value.trim()}`); });
      window.open(`https://wa.me/${form.dataset.wa}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
    });
  }
})();
