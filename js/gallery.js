/* ==========================================================
   CeilCraft Studio — design cards, gallery & detail modal
   Used by: index.html (featured) and designs.html (full gallery)
   ========================================================== */
(() => {
  "use strict";
  const { $, $$, store, favs, toast, toggleFav, heartSVG, t } = CC;

  const thumb = (d) => `images/thumbs/${d.image}.jpg?v=2`;
  const full = (d) => `images/${d.image}.jpg?v=2`;
  const catLabel = (id) => (CATEGORIES.find((c) => c.id === id) || {}).label || id;
  const range = I18N.range;
  const stars = (r) => "★".repeat(Math.round(r)) + "☆".repeat(5 - Math.round(r));

  /* ==========================================================
     Card
     ========================================================== */
  function cardHTML(d, i) {
    const fav = favs.has(d.id);
    return `
      <article class="card" tabindex="0" data-id="${d.id}" style="animation-delay:${Math.min(i, 12) * 40}ms"
               aria-label="${d.title}, ${catLabel(d.category)}">
        <div class="card__media">
          <img src="${thumb(d)}" alt="${d.title}" loading="lazy" onload="this.classList.add('is-loaded')"
               onerror="this.onerror=null;this.src='${full(d)}'" />
          <span class="card__tag">${catLabel(d.category)}</span>
          <button class="card__fav ${fav ? "is-on" : ""}" data-fav="${d.id}" aria-label="${t("Save design")}">${heartSVG}</button>
          <span class="card__view">${t("View details →")}</span>
        </div>
        <div class="card__body">
          <h3 class="card__title">${d.title}</h3>
          <p class="card__short">${d.short}</p>
          <div class="card__extra">
            <span class="mini-pill">${t(d.type)}</span>
            ${d.rooms.slice(0, 3).map((r) => `<span class="mini-pill">${r}</span>`).join("")}
            <span class="mini-pill">⏱ ${d.installDays}</span>
          </div>
          <div class="card__meta">
            <span class="card__price">${range(d.priceMin, d.priceMax)} <small>${t("/ sq ft")}</small></span>
            <span class="stars">${stars(d.rating)}<b>${d.rating.toFixed(1)}</b></span>
          </div>
        </div>
      </article>`;
  }

  /* ==========================================================
     Modal (injected once per page)
     ========================================================== */
  const modalHTML = () => `
    <div class="modal" id="modal" aria-hidden="true">
      <div class="modal__backdrop" data-close></div>
      <article class="modal__panel" role="dialog" aria-modal="true" aria-labelledby="mTitle">
        <button class="modal__close" data-close aria-label="${t("Close")}">×</button>
        <div class="modal__media">
          <img id="mImg" alt="" />
          <button class="modal__nav modal__nav--prev" id="mPrev" aria-label="${t("Previous design")}">‹</button>
          <button class="modal__nav modal__nav--next" id="mNext" aria-label="${t("Next design")}">›</button>
          <span class="modal__counter" id="mCounter"></span>
        </div>
        <div class="modal__body">
          <div class="modal__tags" id="mTags"></div>
          <h2 id="mTitle"></h2>
          <div class="modal__rating" id="mRating"></div>
          <p class="modal__desc" id="mDesc"></p>
          <div class="specs" id="mSpecs"></div>
          <h4>${t("Key Features")}</h4><ul class="features" id="mFeatures"></ul>
          <h4>${t("Materials")}</h4><div class="pill-list" id="mMaterials"></div>
          <h4>${t("Best For")}</h4><div class="pill-list" id="mRooms"></div>
          <h4>${t("Colour Palette")}</h4><div class="swatches" id="mColors"></div>
          <div class="estimator">
            <h4>${t("Cost Estimator")}</h4>
            <div class="estimator__row">
              <label>${t("Area")} <input type="range" id="mArea" min="50" max="2000" step="10" value="200" /></label>
              <output id="mAreaOut"></output>
            </div>
            <p class="estimator__total">${t("Estimated:")} <strong id="mTotal"></strong></p>
          </div>
          <div class="modal__actions">
            <a class="btn btn--gold" id="mQuote" href="contact.html">${t("Request Quote")}</a>
            <button class="btn btn--outline" id="mFav">${t("♡ Save")}</button>
            <button class="btn btn--outline" id="mShare">${t("Share")}</button>
          </div>
        </div>
      </article>
    </div>`;

  const Modal = {
    list: [],
    current: -1,
    lastFocus: null,
    el: null,

    init() {
      document.body.insertAdjacentHTML("beforeend", modalHTML());
      this.el = $("#modal");
      this.el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) this.close(); });
      $("#mPrev").addEventListener("click", () => this.step(-1));
      $("#mNext").addEventListener("click", () => this.step(1));
      $("#mArea").addEventListener("input", () => this.estimate());
      $("#mFav").addEventListener("click", () => { toggleFav(this.design().id); this.syncFav(); });
      $("#mShare").addEventListener("click", () => this.share());

      document.addEventListener("keydown", (e) => {
        if (!this.isOpen()) return;
        if (e.key === "Escape") this.close();
        else if (e.key === "ArrowRight") this.step(1);
        else if (e.key === "ArrowLeft") this.step(-1);
        else if (e.key === "Tab") {
          const f = $$("button, input, a[href]", this.el).filter((x) => x.offsetParent !== null);
          const first = f[0], last = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
          else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
      });

      let tx = null;
      const media = $(".modal__media", this.el);
      media.addEventListener("touchstart", (e) => { tx = e.touches[0].clientX; }, { passive: true });
      media.addEventListener("touchend", (e) => {
        if (tx === null) return;
        const dx = e.changedTouches[0].clientX - tx;
        if (Math.abs(dx) > 50) this.step(dx < 0 ? 1 : -1);
        tx = null;
      });
    },

    isOpen() { return this.el.classList.contains("is-open"); },
    design() { return this.list[this.current]; },

    open(list, id) {
      this.list = list;
      this.current = Math.max(0, list.findIndex((d) => d.id === id));
      this.lastFocus = document.activeElement;
      this.fill(true);
      this.el.classList.add("is-open");
      this.el.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      history.replaceState(null, "", `${location.pathname}${location.search}#design/${this.design().id}`);
      setTimeout(() => $(".modal__close", this.el).focus(), 50);
    },

    close() {
      this.el.classList.remove("is-open");
      this.el.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      history.replaceState(null, "", location.pathname + location.search);
      if (this.lastFocus) this.lastFocus.focus();
    },

    step(dir) {
      if (!this.list.length) return;
      this.current = (this.current + dir + this.list.length) % this.list.length;
      this.fill(false);
      history.replaceState(null, "", `${location.pathname}${location.search}#design/${this.design().id}`);
    },

    fill(first) {
      const d = this.design();
      const img = $("#mImg");
      const setImg = () => { img.src = full(d); img.alt = d.title; };
      if (first) setImg();
      else {
        img.classList.add("is-fading");
        setTimeout(() => { setImg(); img.onload = () => img.classList.remove("is-fading"); }, 180);
      }

      const many = this.list.length > 1;
      $("#mPrev").hidden = $("#mNext").hidden = !many;
      $("#mCounter").textContent = `${this.current + 1} / ${this.list.length}`;
      $("#mTags").innerHTML = `<span>${t(d.type)}</span><span>${catLabel(d.category)}</span>`;
      $("#mTitle").textContent = d.title;
      $("#mRating").innerHTML = `<span class="stars">${stars(d.rating)}<b>${d.rating.toFixed(1)}</b></span>
        <span class="muted"> · ${t("{n}% of clients recommend", { n: d.popularity })}</span>`;
      $("#mDesc").textContent = d.description;
      $("#mSpecs").innerHTML = [
        ["Price / sq ft", range(d.priceMin, d.priceMax)],
        ["Installation", d.installDays],
        ["Durability", d.durability],
        ["Maintenance", d.maintenance],
      ].map(([k, v]) => `<div class="spec"><span>${t(k)}</span><strong>${v}</strong></div>`).join("");
      $("#mFeatures").innerHTML = d.features.map((f) => `<li>${f}</li>`).join("");
      $("#mMaterials").innerHTML = d.materials.map((m) => `<span>${m}</span>`).join("");
      $("#mRooms").innerHTML = d.rooms.map((r) => `<span>${r}</span>`).join("");
      $("#mColors").innerHTML = d.colors.map((c) => `<span style="background:${c}" title="${c}"></span>`).join("");

      this.estimate();
      this.syncFav();

      [-1, 1].forEach((o) => {
        const n = this.list[(this.current + o + this.list.length) % this.list.length];
        if (n) new Image().src = full(n);
      });
    },

    estimate() {
      const d = this.design();
      if (!d) return;
      const area = +$("#mArea").value;
      $("#mAreaOut").textContent = t("{n} sq ft", { n: area.toLocaleString("en-US") });
      $("#mTotal").textContent = range(d.priceMin * area, d.priceMax * area);
      $("#mQuote").href = `contact.html?design=${encodeURIComponent(d.id)}&area=${area}`;
    },

    syncFav() {
      const on = favs.has(this.design().id);
      const b = $("#mFav");
      b.classList.toggle("is-on", on);
      b.textContent = on ? t("@savedState") : t("♡ Save");
    },

    async share() {
      const d = this.design();
      const url = location.href.split("#")[0].replace(/[^/]*$/, "") + `designs.html#design/${d.id}`;
      try {
        if (navigator.share) await navigator.share({ title: d.title, text: d.short, url });
        else { await navigator.clipboard.writeText(url); toast(t("Link copied to clipboard")); }
      } catch { /* cancelled */ }
    },
  };

  /* Click / keyboard handling for any grid of cards */
  function bindGrid(grid, getList) {
    grid.addEventListener("click", (e) => {
      const favBtn = e.target.closest("[data-fav]");
      if (favBtn) { e.stopPropagation(); return toggleFav(favBtn.dataset.fav); }
      const card = e.target.closest(".card");
      if (card) Modal.open(getList(), card.dataset.id);
    });
    grid.addEventListener("keydown", (e) => {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) {
        e.preventDefault();
        Modal.open(getList(), e.target.dataset.id);
      }
    });
  }

  /* ==========================================================
     Featured grid (home page)
     ========================================================== */
  function initFeatured(grid) {
    const limit = +grid.dataset.limit || 6;
    const list = [...DESIGNS].sort((a, b) => b.popularity - a.popularity).slice(0, limit);
    grid.innerHTML = list.map(cardHTML).join("");
    bindGrid(grid, () => list);
  }

  /* ==========================================================
     Full gallery (designs page)
     ========================================================== */
  function initGallery(grid) {
    const params = new URLSearchParams(location.search);
    const state = {
      category: CATEGORIES.some((c) => c.id === params.get("cat")) ? params.get("cat") : "all",
      type: ["Ceiling", "Wall"].includes(params.get("type")) ? params.get("type") : "all",
      query: "",
      sort: "popular",
      view: store.get("cc-view", "tiles"),
      favOnly: params.get("saved") === "1",
      list: [],
    };

    const chips = $("#chips"), results = $("#results"), empty = $("#empty");

    function renderChips() {
      chips.innerHTML = CATEGORIES.map((c) => {
        const count = c.id === "all" ? DESIGNS.length : DESIGNS.filter((d) => d.category === c.id).length;
        return `<button class="chip ${c.id === state.category ? "is-active" : ""}" data-cat="${c.id}"
                  aria-pressed="${c.id === state.category}">${c.label}<small>${count}</small></button>`;
      }).join("");
    }

    function filtered() {
      const q = state.query.trim().toLowerCase();
      const list = DESIGNS.filter((d) => {
        if (state.category !== "all" && d.category !== state.category) return false;
        if (state.type !== "all" && d.type !== state.type) return false;
        if (state.favOnly && !favs.has(d.id)) return false;
        if (!q) return true;
        const hay = [d.title, d.short, d.description, catLabel(d.category), d.type, ...d.materials, ...d.rooms, ...d.features]
          .join(" ").toLowerCase();
        return q.split(/\s+/).every((w) => hay.includes(w));
      });
      const sorters = {
        popular: (a, b) => b.popularity - a.popularity,
        rating: (a, b) => b.rating - a.rating || b.popularity - a.popularity,
        newest: (a, b) => b.added - a.added || b.popularity - a.popularity,
        "price-asc": (a, b) => a.priceMin - b.priceMin,
        "price-desc": (a, b) => b.priceMax - a.priceMax,
        name: (a, b) => a.title.localeCompare(b.title),
      };
      return list.sort(sorters[state.sort]);
    }

    function render() {
      state.list = filtered();
      grid.className = `grid view-${state.view}`;
      grid.innerHTML = state.list.map(cardHTML).join("");
      empty.hidden = state.list.length > 0;
      const parts = [t("Showing {n} of {total} designs", { n: `<strong>${state.list.length}</strong>`, total: DESIGNS.length })];
      if (state.category !== "all") parts.push(t("in {cat}", { cat: `<strong>${catLabel(state.category)}</strong>` }));
      if (state.favOnly) parts.push(`· <strong>${t("saved only")}</strong> <button class="link-btn" id="clearSaved">${t("show all")}</button>`);
      results.innerHTML = parts.join(" ");
      $("#savedToggle")?.classList.toggle("is-active", state.favOnly);
    }

    function syncButtons() {
      $$("#typeFilter button").forEach((b) => b.classList.toggle("is-active", b.dataset.type === state.type));
      $$("#views button").forEach((b) => b.classList.toggle("is-active", b.dataset.view === state.view));
    }

    function reset() {
      Object.assign(state, { category: "all", type: "all", query: "", favOnly: false });
      $("#search").value = "";
      history.replaceState(null, "", location.pathname);
      syncButtons(); renderChips(); render();
    }

    chips.addEventListener("click", (e) => {
      const b = e.target.closest(".chip");
      if (!b) return;
      state.category = b.dataset.cat;
      renderChips(); render();
    });
    $("#typeFilter").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      state.type = b.dataset.type; syncButtons(); render();
    });
    $("#views").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      state.view = b.dataset.view; store.set("cc-view", state.view); syncButtons(); render();
    });
    $("#sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });
    let timer;
    $("#search").addEventListener("input", (e) => {
      clearTimeout(timer);
      timer = setTimeout(() => { state.query = e.target.value; render(); }, 150);
    });
    $("#resetFilters").addEventListener("click", reset);
    results.addEventListener("click", (e) => { if (e.target.id === "clearSaved") { state.favOnly = false; render(); } });
    $("#savedToggle")?.addEventListener("click", () => {
      if (!favs.size && !state.favOnly) return toast(t("You haven't saved any designs yet"));
      state.favOnly = !state.favOnly; render();
    });
    document.addEventListener("cc:favs", () => { if (state.favOnly) render(); });

    bindGrid(grid, () => state.list);
    syncButtons(); renderChips(); render();

    // deep link: designs.html#design/<id>
    const m = location.hash.match(/^#design\/(.+)$/);
    if (m && DESIGNS.some((d) => d.id === m[1])) {
      if (!state.list.some((d) => d.id === m[1])) reset();
      Modal.open(state.list, m[1]);
    }
  }

  /* ==========================================================
     Category cards (home page)
     ========================================================== */
  function initCategoryCards(wrap) {
    const covers = {};
    [...DESIGNS].sort((a, b) => b.popularity - a.popularity)
      .forEach((d) => { if (!covers[d.category]) covers[d.category] = d; });
    wrap.innerHTML = CATEGORIES.filter((c) => c.id !== "all").map((c) => {
      const n = DESIGNS.filter((d) => d.category === c.id).length;
      return `<a class="cat-card" href="designs.html?cat=${c.id}">
          <img src="${thumb(covers[c.id])}" alt="${c.label}" loading="lazy" />
          <span class="cat-card__body"><strong>${c.label}</strong><small>${t("{n} designs →", { n })}</small></span>
        </a>`;
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", () => {
    Modal.init();
    const featured = $("[data-gallery='featured']");
    if (featured) initFeatured(featured);
    const gallery = $("[data-gallery='full']");
    if (gallery) initGallery(gallery);
    const cats = $("#catCards");
    if (cats) initCategoryCards(cats);
  });
})();
