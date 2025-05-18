document.addEventListener("DOMContentLoaded", () => {
  const menuPanel = document.getElementById("menuPanelDesktop");
  const openMenuBtn = document.getElementById("openMenuDesktop");
  const openMenuMobileBtn = document.getElementById("openMenuMobile");
  const closeMenuBtn = document.getElementById("closeMenuDesktop");

  function openMenu() {
    menuPanel.classList.remove("hidden");
    setTimeout(() => {
      menuPanel.classList.remove("translate-x-full");
      menuPanel.classList.add("translate-x-0");
    }, 10);
  }

  function closeMenu() {
    menuPanel.classList.add("translate-x-full");
    menuPanel.classList.remove("translate-x-0");
    setTimeout(() => {
      menuPanel.classList.add("hidden");
    }, 500);
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
