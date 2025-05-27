// document.addEventListener("DOMContentLoaded", () => {
//   const menuPanel = document.getElementById("menuPanelDesktop");
//   const openMenuBtn = document.getElementById("openMenuDesktop");
//   const openMenuMobileBtn = document.getElementById("openMenuMobile");
//   const closeMenuBtn = document.getElementById("closeMenuDesktop");

//   function openMenu() {
//     menuPanel.classList.remove("hidden");
//     setTimeout(() => {
//       menuPanel.classList.remove("translate-x-full");
//       menuPanel.classList.add("translate-x-0");
//     }, 10);
//   }

//   function closeMenu() {
//     menuPanel.classList.add("translate-x-full");
//     menuPanel.classList.remove("translate-x-0");
//     setTimeout(() => {
//       menuPanel.classList.add("hidden");
//     }, 500);
//   }

//   if (openMenuBtn && menuPanel && closeMenuBtn) {
//     openMenuBtn.addEventListener("click", openMenu);
//     closeMenuBtn.addEventListener("click", closeMenu);
//   }

//   if (openMenuMobileBtn && menuPanel && closeMenuBtn) {
//     openMenuMobileBtn.addEventListener("click", openMenu);
//     closeMenuBtn.addEventListener("click", closeMenu);
//   }
// });

document.addEventListener("DOMContentLoaded", () => {
  const menuPanel = document.getElementById("menuPanelDesktop");
  const openMenuBtn = document.getElementById("openMenuDesktop");
  const openMenuMobileBtn = document.getElementById("openMenuMobile");
  const closeMenuBtn = document.getElementById("closeMenuDesktop");
  const sectionLabel = document.getElementById("section-label-container");

  function openMenu() {
    menuPanel.classList.remove("hidden");
    setTimeout(() => {
      menuPanel.classList.remove("translate-x-full");
      menuPanel.classList.add("translate-x-0");
    }, 10);

    if (sectionLabel) {
      sectionLabel.style.opacity = "0"; // Hide the sticky label
      sectionLabel.style.pointerEvents = "none"; // Prevent any accidental interaction
    }
  }

  function closeMenu() {
    menuPanel.classList.add("translate-x-full");
    menuPanel.classList.remove("translate-x-0");
    setTimeout(() => {
      menuPanel.classList.add("hidden");
    }, 500);

    if (sectionLabel) {
      sectionLabel.style.opacity = "1"; // Show the sticky label again
      sectionLabel.style.pointerEvents = "auto";
    }
  }

  if (openMenuBtn && menuPanel && closeMenuBtn) {
    openMenuBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);
  }

  if (openMenuMobileBtn && menuPanel && closeMenuBtn) {
    openMenuMobileBtn.addEventListener("click", openMenu);
    closeMenuBtn.addEventListener("click", closeMenu);
  }
});

// hamburger menu

const menuBtn = document.querySelector("#openMenuMobile .group");
const lines = menuBtn.querySelectorAll(".line");

menuBtn.addEventListener("mouseenter", () => {
  lines[0].classList.add("animate-slide-left");
  lines[1].classList.add("animate-slide-left", "delay-100");
  lines[2].classList.add("animate-slide-left", "delay-200");
});

menuBtn.addEventListener("mouseleave", () => {
  lines.forEach((line) => {
    line.classList.remove("animate-slide-left", "delay-100", "delay-200");
    void line.offsetWidth;
  });
});
