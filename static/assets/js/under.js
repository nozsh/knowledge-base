let underground = document.querySelectorAll("a[role='button']");
let undergroundText = "🚫 UNDERGROUND";
let undergroundFound = Array.from(underground).find((el) =>
  el.textContent.includes(undergroundText)
);

let undergroundMenuEl = undergroundFound
  ? undergroundFound.closest("li")
  : null;

// Сохраняем исходные href для всех ссылок, содержащих "underground" в href
let undergroundLinks = Array.from(document.querySelectorAll("a")).filter((el) =>
  el.href.includes("underground")
);
let originalHrefs = new Map();

undergroundLinks.forEach((link) => {
  originalHrefs.set(link, link.href);
  link.href = "#";
});

window.onload = function () {
  let undergroundUrlCheck = /\/underground(\/|$)/;

  if (undergroundUrlCheck.test(window.location.pathname)) {
    if (undergroundMenuEl) {
      undergroundMenuEl.setAttribute("style", "display: inherit;");
    }
    // Восстанавливаем исходные href для всех ссылок, содержащих "underground" в href
    undergroundLinks.forEach((link) => {
      link.href = originalHrefs.get(link);
    });
  }
};
