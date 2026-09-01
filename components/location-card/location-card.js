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

      const section = locationCardContainer.querySelector('.location-section');
      const heading = section.querySelector('h2');
      const card = section.querySelector('.location-card');

      // Wrap heading words in animated spans
      const words = heading.textContent.trim().split(/\s+/);
      heading.innerHTML = words
        .map((w, i) =>
          `<span class="location-word" style="animation-delay:${(i * 0.06).toFixed(2)}s">${w}</span>`
        )
        .join(' ');

      // Stagger card after heading words finish
      const cardDelay = (words.length * 0.06 + 0.1).toFixed(2);
      card.style.animationDelay = `${cardDelay}s`;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section.classList.add('animate');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(section);
    })
    .catch((error) => {
      console.error(error);
    });
});
