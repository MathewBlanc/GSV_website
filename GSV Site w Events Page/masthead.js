/* ==========================================================================
   Masthead navigation
   Progressive enhancement: the nav is a plain, always-visible list unless
   this script runs (see the `has-js` class added in <head>), in which case
   it collapses behind a hamburger toggle on narrow viewports.
   ========================================================================== */

(function () {
  "use strict";

  var toggle = document.querySelector(".masthead__toggle");
  var nav = document.getElementById("primary-nav");

  if (!toggle || !nav) { return; }

  function isOpen() {
    return toggle.getAttribute("aria-expanded") === "true";
  }

  function closeMenu() {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }

  function openMenu() {
    toggle.setAttribute("aria-expanded", "true");
    nav.classList.add("is-open");
  }

  toggle.addEventListener("click", function () {
    if (isOpen()) { closeMenu(); } else { openMenu(); }
  });

  nav.addEventListener("click", function (event) {
    if (event.target.tagName === "A") { closeMenu(); }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isOpen()) {
      closeMenu();
      toggle.focus();
    }
  });

  var mobileQuery = window.matchMedia("(min-width: 641px)");
  mobileQuery.addEventListener("change", function (event) {
    if (event.matches) { closeMenu(); }
  });
})();
