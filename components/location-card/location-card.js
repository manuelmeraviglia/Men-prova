document.addEventListener("DOMContentLoaded", () => {
  const locationCardContainer = document.getElementById("location-card-container");

  if (!locationCardContainer) return;

  fetch("components/location-card/location-card.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Location card could not be loaded");
      }
      return response.text();
    })
    .then((html) => {
      locationCardContainer.innerHTML = html;
    })
    .catch((error) => {
      console.error(error);
    });
});
