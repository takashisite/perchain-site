document.documentElement.classList.add("js-ready");

const langButtons = document.querySelectorAll("[data-lang-button]");
const localizedNodes = document.querySelectorAll("[data-lang]");
const heroPanels = document.querySelectorAll("[data-panel]");
const storedLang = localStorage.getItem("perchain-site-lang");
const initialLang = storedLang === "ja" ? "ja" : "en";

function applyLanguage(lang) {
  document.documentElement.lang = lang === "ja" ? "ja" : "en";
  localizedNodes.forEach((node) => {
    node.hidden = node.dataset.lang !== lang;
  });
  langButtons.forEach((button) => {
    const active = button.dataset.langButton === lang;
    button.setAttribute("aria-pressed", active ? "true" : "false");
    button.classList.toggle("is-active", active);
  });
  localStorage.setItem("perchain-site-lang", lang);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});

applyLanguage(initialLang);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.16,
  }
);

heroPanels.forEach((panel) => observer.observe(panel));
