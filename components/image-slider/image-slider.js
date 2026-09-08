document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("image-slider-container");

  if (!container) return;

  fetch("components/image-slider/image-slider.html")
    .then(function (res) {
      return res.text();
    })
    .then(function (html) {
      container.innerHTML = html;

      const slides = Array.from(container.querySelectorAll(".slide"));
      const prevButton = container.querySelector(".slider-btn.prev");
      const nextButton = container.querySelector(".slider-btn.next");

      let currentIndex = 0;

      function showSlide(index) {
        currentIndex = (index + slides.length) % slides.length;
        slides.forEach(function (slide, i) {
          slide.classList.toggle("active", i === currentIndex);
        });
      }

      prevButton.addEventListener("click", function () {
        showSlide(currentIndex - 1);
      });
      nextButton.addEventListener("click", function () {
        showSlide(currentIndex + 1);
      });

      setInterval(function () {
        showSlide(currentIndex + 1);
      }, 4000);
    });
});
