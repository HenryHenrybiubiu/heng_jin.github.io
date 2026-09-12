(function () {
  "use strict";

  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");
  const navLinks = document.querySelectorAll(".site-nav a");
  const dialog = document.querySelector("#lightbox");
  const dialogImage = document.querySelector("#lightbox-image");
  const dialogCaption = document.querySelector("#lightbox-caption");
  const dialogClose = document.querySelector(".lightbox-close");
  const imageTriggers = document.querySelectorAll("[data-lightbox-src]");
  const year = document.querySelector("#current-year");

  if (year) year.textContent = new Date().getFullYear();

  function updateHeader() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  function closeMenu() {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    navigation.classList.remove("is-open");
  }

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", function () {
      const open = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!open));
      menuToggle.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      navigation.classList.toggle("is-open", !open);
    });
  }

  navLinks.forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  if (dialog && dialogImage && dialogCaption && dialogClose) {
    imageTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        dialogImage.src = trigger.dataset.lightboxSrc || "";
        dialogImage.alt = trigger.dataset.lightboxAlt || "";
        dialogCaption.textContent = trigger.dataset.lightboxCaption || "";
        dialog.showModal();
        dialogClose.focus();
      });
    });

    dialogClose.addEventListener("click", function () {
      dialog.close();
    });

    dialog.addEventListener("click", function (event) {
      const bounds = dialog.getBoundingClientRect();
      const outside = event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom;
      if (outside) dialog.close();
    });
  }
})();
