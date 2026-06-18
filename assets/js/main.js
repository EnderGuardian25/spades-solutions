/* Spades Solutions — interactions: nav, scroll header, reveals, accordions, form */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.addEventListener("click", function (e) {
      if (e.target.closest("a")) {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Header shrink on scroll ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Accordions (services) ---- */
  var accs = document.querySelectorAll(".acc");
  accs.forEach(function (acc) {
    var head = acc.querySelector(".acc-head");
    var panel = acc.querySelector(".acc-panel");
    if (!head || !panel) return;
    head.addEventListener("click", function () {
      var willOpen = !acc.classList.contains("is-open");
      // close siblings for a clean single-open feel
      accs.forEach(function (other) {
        if (other !== acc) {
          other.classList.remove("is-open");
          var h = other.querySelector(".acc-head");
          if (h) h.setAttribute("aria-expanded", "false");
        }
      });
      acc.classList.toggle("is-open", willOpen);
      head.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });
  });

  /* ---- Contact form validation + feedback ---- */
  var form = document.querySelector("#quote-form");
  if (form) {
    var status = form.querySelector(".form-status");
    var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    var setError = function (field, on) {
      field.classList.toggle("invalid", on);
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      var firstInvalid = null;

      form.querySelectorAll("[data-required]").forEach(function (input) {
        var field = input.closest(".field");
        var empty = !input.value.trim();
        var bad = empty;
        if (!bad && input.type === "email") bad = !emailRe.test(input.value.trim());
        setError(field, bad);
        if (bad) { valid = false; if (!firstInvalid) firstInvalid = input; }
      });

      if (!valid) {
        if (status) { status.textContent = "Please fix the highlighted fields."; status.className = "form-status bad"; }
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      // Demo submit — wire to Formspree / backend / email later.
      var btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.dataset.label = btn.textContent; btn.textContent = "Sending…"; }
      if (status) { status.textContent = ""; status.className = "form-status"; }

      setTimeout(function () {
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = btn.dataset.label || "Request a quote"; }
        if (status) { status.textContent = "Thank you — your request has been received. We'll be in touch shortly."; status.className = "form-status ok"; }
      }, 900);
    });

    form.querySelectorAll("[data-required]").forEach(function (input) {
      input.addEventListener("blur", function () {
        var field = input.closest(".field");
        var bad = !input.value.trim() || (input.type === "email" && !emailRe.test(input.value.trim()));
        setError(field, bad);
      });
    });
  }

  /* ---- Footer year ---- */
  var yr = document.querySelector("[data-year]");
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
