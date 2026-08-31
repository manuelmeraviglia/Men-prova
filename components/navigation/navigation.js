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
    })
    .catch((error) => {
      console.error(error);
    });
});
