window.addEventListener("load", function () {
  function handleSection(sectionName, sectionText, urlCheck) {
    let elements = document.querySelectorAll(
      `.sidebar-container a[href*="${sectionName}"]`
    );

    // Поиск ссылки, которая соответствует тексту и href
    let found = Array.from(elements).find(
      (el) =>
        el.textContent.includes(sectionText) && el.href.includes(sectionName)
    );

    let menuEl = found ? found.closest("li") : null;

    // Сохраняем исходные href для всех ссылок, содержащих sectionName в href
    let links = Array.from(document.querySelectorAll("a")).filter((el) =>
      el.href.includes(sectionName)
    );

    let originalHrefs = new Map();

    // Сохраняем оригинальные href и заменяем их на "#"
    links.forEach((link) => {
      originalHrefs.set(link, link.href);
      // link.href = "#"; // Устанавливаем "#" для всех ссылок
    });

    // Скрываем li элемент изначально
    if (menuEl) {
      menuEl.style.display = "none"; // Скрываем элемент
    }

    // Показываем li элемент только при правильном URL
    if (urlCheck.test(window.location.pathname)) {
      if (menuEl) {
        menuEl.setAttribute("style", "display: inherit;"); // Показываем элемент
        // Восстанавливаем исходные href только если URL соответствует
        links.forEach((link) => {
          link.href = originalHrefs.get(link);
        });
      }
    }
  }

  handleSection("typo", "Typo", /\/typo(\/|$)/);
});
