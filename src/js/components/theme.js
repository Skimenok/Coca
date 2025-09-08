export const useTheme = () => {
  let themeBody = document.querySelector("[data-theme]"),
    checkbox = document.querySelector("[data-theme-switcher]"),
    themeTarget = themeBody.dataset;
  const burgerMenu = document.querySelector('[data-burger="menu"]');

  let theme = localStorage.getItem("theme") || "light";
  themeTarget.theme = theme;

  if (themeTarget.theme == "dark") {
    checkbox.checked = true;
  }

  checkbox.addEventListener("click", () => {
    if (themeTarget.theme == "light") {
      themeTarget.theme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      themeTarget.theme = "light";
      localStorage.setItem("theme", "light");
    }
  });
};
