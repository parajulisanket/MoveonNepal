let lastScrollY = window.scrollY;
const nav = document.getElementById("main-navbar");
window.addEventListener("scroll", () => {
  if (!nav) return;
  if (window.scrollY > lastScrollY && window.scrollY > 50) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }
  lastScrollY = window.scrollY;
});
