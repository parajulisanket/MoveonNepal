window.addEventListener("DOMContentLoaded", () => {
  const ids = ["line1", "line2", "line3", "line4", "line5"];
  ids.forEach((id, index) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.classList.remove("opacity-0");
    }, index * 800);
  });

  const toggles = document.querySelectorAll(".accordion-toggle");

  toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector(".toggle-icon");

      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        icon.textContent = "−";
      } else {
        content.classList.add("hidden");
        icon.textContent = "+";
      }
    });
  });
});
