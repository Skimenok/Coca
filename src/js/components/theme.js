export const useTheme = () => {
  let themeBody = document.querySelector("[data-theme]"),
    checkbox = document.querySelector("[data-theme-switcher]"),
    themeTarget = themeBody.dataset,
    themeButton = document.querySelector(
      ".header__switcher-text",
    );

  let theme = localStorage.getItem("theme") || "light";
  themeTarget.theme = theme;

  if (themeTarget.theme == "dark") {
    checkbox.checked = true;
    themeButton.textContent = "Light";
  }

  checkbox.addEventListener("click", () => {
    if (themeTarget.theme == "light") {
      themeTarget.theme = "dark";
      localStorage.setItem("theme", "dark");
      themeButton.textContent = "Light";
    } else {
      themeTarget.theme = "light";
      localStorage.setItem("theme", "light");
      themeButton.textContent = "Dark";
    }
  });
};
