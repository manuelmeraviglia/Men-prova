document.addEventListener("DOMContentLoaded", () => {
  const headerContainer = document.getElementById("site-header-container");

  if (!headerContainer) return;

  fetch("components/site-header/site-header.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Site header could not be loaded");
      }
      return response.text();
    })
    .then((html) => {
      const template = document.createElement("template");
      template.innerHTML = html;

      const header = template.content.firstElementChild;
      if (!header) return;

      const subtitleElement = header.querySelector(".site-header__subtitle");
      const subtitle = headerContainer.dataset.subtitle || "";

      if (subtitleElement) {
        if (subtitle) {
          subtitleElement.textContent = subtitle;
        } else {
          subtitleElement.remove();
        }
      }

      headerContainer.replaceWith(header);
    })
    .catch((error) => {
      console.error(error);
    });
});
