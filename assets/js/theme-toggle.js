(function () {
  "use strict";

  var storageKey = "yumeng-site-theme";
  var root = document.documentElement;
  var toggle = document.querySelector("[data-theme-toggle]");
  var themeColor = document.querySelector("[data-theme-color]");
  var systemPreference = window.matchMedia("(prefers-color-scheme: dark)");

  if (!toggle) return;

  function savedTheme() {
    try {
      var value = localStorage.getItem(storageKey);
      return value === "light" || value === "dark" ? value : null;
    } catch (error) {
      return null;
    }
  }

  function setTheme(theme, remember) {
    var isDark = theme === "dark";
    root.setAttribute("data-theme", theme);
    root.style.colorScheme = theme;
    toggle.setAttribute("aria-pressed", String(isDark));
    toggle.setAttribute("aria-label", isDark ? "Switch to day mode" : "Switch to night mode");
    toggle.setAttribute("title", isDark ? "Switch to day mode" : "Switch to night mode");
    toggle.querySelector(".theme-toggle__label").textContent = isDark ? "Day" : "Night";

    if (themeColor) themeColor.setAttribute("content", isDark ? "#0f171d" : "#ffffff");

    if (remember) {
      try {
        localStorage.setItem(storageKey, theme);
      } catch (error) {
        // The selected theme still applies for this page view.
      }
    }
  }

  setTheme(root.getAttribute("data-theme") || (systemPreference.matches ? "dark" : "light"), false);

  toggle.addEventListener("click", function () {
    setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark", true);
  });

  function followSystemPreference(event) {
    if (!savedTheme()) setTheme(event.matches ? "dark" : "light", false);
  }

  if (systemPreference.addEventListener) {
    systemPreference.addEventListener("change", followSystemPreference);
  } else if (systemPreference.addListener) {
    systemPreference.addListener(followSystemPreference);
  }
}());
