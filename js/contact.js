/* ==========================================================
   CeilCraft Studio — contact page (quote form)
   ========================================================== */
(() => {
  "use strict";
  const { $, $$, toast, t } = CC;

  document.addEventListener("DOMContentLoaded", () => {
    const form = $("#quoteForm");
    if (!form) return;

    // Fill the design dropdown
    const select = $("#formDesign");
    select.innerHTML += CATEGORIES.filter((c) => c.id !== "all").map((c) => {
      const opts = DESIGNS.filter((d) => d.category === c.id)
        .map((d) => `<option value="${d.id}">${d.title}</option>`).join("");
      return `<optgroup label="${c.label}">${opts}</optgroup>`;
    }).join("");

    // Pre-fill from the design popup: contact.html?design=<id>&area=<n>
    const params = new URLSearchParams(location.search);
    const design = DESIGNS.find((d) => d.id === params.get("design"));
    if (design) {
      select.value = design.id;
      showPicked(design);
    }
    if (params.get("area")) form.area.value = params.get("area");
    select.addEventListener("change", () => showPicked(DESIGNS.find((d) => d.id === select.value)));

    function showPicked(d) {
      const box = $("#pickedDesign");
      if (!d) { box.hidden = true; return; }
      box.hidden = false;
      box.innerHTML = `<img src="images/thumbs/${d.image}.jpg?v=2" alt="" />
        <div><small>${t("Selected design")}</small><strong>${d.title}</strong>
        <span>${I18N.range(d.priceMin, d.priceMax)} ${t("/ sq ft")}</span></div>`;
    }

    function validate() {
      let ok = true;
      $$("[required]", form).forEach((el) => {
        let bad = !el.value.trim();
        if (el.name === "phone" && !bad) bad = el.value.replace(/\D/g, "").length < 10;
        el.classList.toggle("is-invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) toast(t("Please enter your name and a valid phone number"));
      return ok;
    }

    function message() {
      const d = DESIGNS.find((x) => x.id === select.value);
      return [
        t("Hello {name}, I'd like a quote.", { name: SITE.name }),
        `${t("Name")}: ${form.name.value.trim()}`,
        `${t("Phone")}: ${form.phone.value.trim()}`,
        form.city.value.trim() && `${t("City")}: ${form.city.value.trim()}`,
        `${t("Space")}: ${form.space.value}`,
        d && `${t("Design")}: ${d.title}`,
        form.area.value && `${t("Area")}: ${t("{n} sq ft", { n: form.area.value })}`,
        form.message.value.trim() && `${t("Details")}: ${form.message.value.trim()}`,
      ].filter(Boolean).join("\n");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!validate()) return;
      form.hidden = true;
      $("#formSuccess").hidden = false;
      $("#successName").textContent = form.name.value.trim().split(" ")[0];
    });

    $("#sendWhatsapp").addEventListener("click", () => {
      if (!validate()) return;
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message())}`, "_blank", "noopener");
    });

    $("#sendAnother").addEventListener("click", () => {
      form.reset();
      showPicked(null);
      form.hidden = false;
      $("#formSuccess").hidden = true;
    });

    form.addEventListener("input", (e) => e.target.classList.remove("is-invalid"));
  });
})();
