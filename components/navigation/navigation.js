document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav-container");

  if (!navContainer) return;

  fetch("components/navigation/navigation.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Navigation could not be loaded");
      }
      return response.text();
    })
    .then((html) => {
      navContainer.innerHTML = html;

      const nav = navContainer.querySelector(".nav");
      const btn = navContainer.querySelector(".menu-button");

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        nav.classList.toggle("open");
      });

      document.addEventListener("click", () => {
        nav.classList.remove("open");
      });
    })
    .catch((error) => {
      console.error(error);
    });
});
