window.addEventListener("load", function () {
  function handleSection(sectionName, sectionText, urlCheck) {
    let elements = document.querySelectorAll("a[role='button']");
    let found = Array.from(elements).find((el) =>
      el.textContent.includes(sectionText)
    );
    let menuEl = found ? found.closest("li") : null;

    // Сохраняем исходные href для всех ссылок, содержащих sectionName в href
    let links = Array.from(document.querySelectorAll("a")).filter((el) =>
      el.href.includes(sectionName)
    );
    let originalHrefs = new Map();

    links.forEach((link) => {
      originalHrefs.set(link, link.href);
      link.href = "#";
    });

    if (urlCheck.test(window.location.pathname)) {
      if (menuEl) {
        menuEl.setAttribute("style", "display: inherit;");
      }
      // Восстанавливаем исходные href для всех ссылок, содержащих sectionName в href
      links.forEach((link) => {
        link.href = originalHrefs.get(link);
      });
    }
  }

  // Обработка для раздела "underground"
  handleSection("underground", "🚫 UNDERGROUND", /\/underground(\/|$)/);

  // Обработка для раздела "deleted"
  handleSection("deleted", "🗑️ DELETED", /\/deleted(\/|$)/);
});
