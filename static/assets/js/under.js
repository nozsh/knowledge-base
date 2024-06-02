let underground = document.querySelectorAll("a[role='button']");
let undergroundText = "🚫 UNDERGROUND";
let undergroundFound = Array.from(underground).find((el) =>
  el.textContent.includes(undergroundText)
);

let undergroundMenuEl = undergroundFound.closest("li");
// undergroundMenuEl.setAttribute("style", "display: none;");

window.onload = function () {
  let undergroundUrlCheck = /\/underground(\/|$)/;

  if (undergroundUrlCheck.test(window.location.pathname)) {
    undergroundMenuEl.setAttribute("style", "display: inherit;");
  }
};
