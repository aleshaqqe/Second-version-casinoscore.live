document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    const menu = dropdown.querySelector(".dropdown-menu");

    if (!trigger || !menu) return;

    trigger.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });
    document.querySelectorAll("[data-tab-target]").forEach((button) => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab-target");
        const group = button.getAttribute("data-tab-group");
  
        if (!target || !group) return;
  
        document
          .querySelectorAll(`[data-tab-group="${group}"]`)
          .forEach((btn) => btn.classList.remove("active"));
  
        document
          .querySelectorAll(`[data-tab-panel-group="${group}"]`)
          .forEach((panel) => panel.classList.remove("active"));
  
        button.classList.add("active");
  
        const panel = document.querySelector(
          `[data-tab-panel="${target}"][data-tab-panel-group="${group}"]`
        );
  
        if (panel) {
          panel.classList.add("active");
        }
      });
    });
  
    document.querySelectorAll(".js-stream-launch").forEach((button) => {
      button.addEventListener("click", () => {
        const box = button.closest(".crazytime-stream-box");
        if (!box) return;
  
        const preview = box.querySelector(".crazytime-stream-overlay");
        const frameShell = box.querySelector(".crazytime-stream-frame-shell");
        const iframe = box.querySelector(".crazytime-stream-frame");
        const src = button.getAttribute("data-stream-src");
  
        if (preview) preview.classList.add("hidden");
        if (frameShell) frameShell.classList.remove("hidden");
  
        if (iframe && src && !iframe.src) {
          iframe.src = src;
        }
      });
    });
  
    document.querySelectorAll('a[href^="/go/"]').forEach((link) => {
      const url = link.getAttribute("href");
      if (!url) return;
  
      const text = link.innerHTML;
      const classes = link.className || "";
      const b64Url = btoa(url);
  
      const span = document.createElement("span");
      span.innerHTML = text;
      span.className = (classes + " js-aff-btn-secure").trim();
      span.setAttribute("data-b64", b64Url);
      span.style.cursor = "pointer";
  
      link.replaceWith(span);
    });
  
    document.body.addEventListener("click", function (e) {
      const btn = e.target.closest(".js-aff-btn-secure");
      if (!btn) return;
  
      const b64Url = btn.getAttribute("data-b64");
      if (!b64Url) return;
  
      const decodedUrl = atob(b64Url);
      window.open(decodedUrl, "_blank", "noopener,noreferrer");
    });
  });