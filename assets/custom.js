var bindFooterAccordion = function() {
        var t = document.querySelectorAll(".Footer__Block--links .Collapsible__Button"),
            e = window.matchMedia("(max-width: 1139px)");
        void 0 !== t && t.forEach((function(t) {
            t.addEventListener("click", (function(t) {
                if (t.preventDefault(), e.matches) {
                    var n = !("true" === t.target.getAttribute("aria-expanded"));
                    t.target.setAttribute("aria-expanded", n.toString())
                }
            }))
        }))
    },
    bindProductColourSwatches = function() {
        var t = document.querySelector('.ProductFormSwatches__Items [data-action="toggle-swatches"]'),
            e = document.querySelectorAll(".ProductFormSwatches__Items [data-swatch-hidden]"),
            n = document.querySelectorAll(".ProductFormSwatches__Items [data-swatch]");
        t && t.addEventListener("click", (function(t) {
            t.preventDefault();
            var n = "true" === t.target.getAttribute("aria-expanded"),
                o = !n;
            t.target.setAttribute("aria-expanded", o.toString()), e.forEach((function(t) {
                n ? t.classList.add("ProductFormSwatches__Item--hidden") : t.classList.remove("ProductFormSwatches__Item--hidden")
            }))
        })), n && n.forEach((function(t) {
            t.addEventListener("click", (function(t) {
                if (t.target.classList.contains("ProductcolourSwatches__Swatch--active")) return t.preventDefault(), !1
            }))
        }))
    },
    bindProductcolourSwatches = function() {
        var t = document.querySelector('ul.ProductcolourSwatches__Items .Collapsible__Button.ProductcolourSwatches__Button'),
            e = document.querySelectorAll("ul.ProductcolourSwatches__Items [data-swatch-hidden]"),
            n = document.querySelectorAll("ul.ProductcolourSwatches__Items [data-swatch]");
        t && t.addEventListener("click", (function(t) {
            t.preventDefault();
            var n = "true" === t.target.getAttribute("aria-expanded"),
                o = !n;
            t.target.setAttribute("aria-expanded", o.toString()), e.forEach((function(t) {
                n ? t.classList.add("ProductcolourSwatches__Item--hidden") : t.classList.remove("ProductcolourSwatches__Item--hidden")
            }))
        })), n && n.forEach((function(t) {
            t.addEventListener("click", (function(t) {
                if (t.target.classList.contains("ProductcolourSwatches__Swatch--active")) return t.preventDefault(), !1
            }))
        }))
    },
    bindNewsLetterPopup = function() {
        var t = document.querySelectorAll('[data-action="toggle-newsletter"]'),
            e = document.querySelector("#shopify-section-popup .newsletter-popup-section");
        t && t.forEach((function(t) {
            t.addEventListener("click", (function(t) {
                e.setAttribute("aria-hidden", "false");
                document.querySelector("section.newsletter-popup-section").classList.remove("hide-signup-form");
            }))
        }))
    },
    challengeJump = function() {
        var t = document.getElementById("footer-newsletter");
        if (null !== t) {
            var e = t.action.replace("#footer-newsletter", "#shopify-section-announcement");
            document.getElementById("footer-newsletter").action = e
        }
    },
    collectionModelView = function() {
      if(document.querySelector('[data-action="model-view"]')){
        var t = document.querySelector('[data-action="model-view"]'),
            e = document.getElementById("collection-list");
        t.addEventListener("click", (function() {
            var n = "true" === t.getAttribute("aria-expanded");
            t.setAttribute("aria-expanded", !n), n ? e.classList.remove("ProductList--switch") : e.classList.add("ProductList--switch")
        }))
      }
    };
document.addEventListener("DOMContentLoaded", (function() {
    bindFooterAccordion(), bindProductColourSwatches(), bindProductcolourSwatches(), bindNewsLetterPopup(), challengeJump(), collectionModelView()
}));