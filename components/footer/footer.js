document.addEventListener("DOMContentLoaded", function() {
  const target = document.getElementById("footer-container");
  if (target) {
    fetch("components/footer/footer.html")
      .then(res => res.text())
      .then(html => {
        target.innerHTML = html;
      })
      .catch(err => console.error("Footer load failed:", err));
  }
});
