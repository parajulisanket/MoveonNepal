document.addEventListener("DOMContentLoaded", () => {
  const centerContent = document.getElementById("center-content");
  const exploreBtn = document.getElementById("explore-btn");
  const closeExploreBtn = document.getElementById("close-explore");
  const navBar = document.getElementById("main-navbar");
  const videos = document.querySelectorAll(".moments-video");

  closeExploreBtn.classList.add("hidden");

  let exploreMode = false;

  exploreBtn.addEventListener("click", () => {
    centerContent.classList.add("-translate-y-24", "opacity-0");
    if (navBar) navBar.classList.add("-translate-y-24", "opacity-0");
    setTimeout(() => {
      centerContent.classList.add("hidden");
      if (navBar) navBar.classList.add("hidden");
      closeExploreBtn.classList.remove("hidden");
    }, 500);
    exploreMode = true;
  });

  closeExploreBtn.addEventListener("click", () => {
    centerContent.classList.remove("hidden");
    if (navBar) navBar.classList.remove("hidden");
    setTimeout(() => {
      centerContent.classList.remove("-translate-y-24", "opacity-0");
      if (navBar) navBar.classList.remove("-translate-y-24", "opacity-0");
    }, 10);
    closeExploreBtn.classList.add("hidden");
    exploreMode = false;

    videos.forEach((video) => {
      video.style.transform = "";
    });
  });

  document.addEventListener("mousemove", (e) => {
    if (!exploreMode) return;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const offsetX = (e.clientX - centerX) / centerX;
    const offsetY = (e.clientY - centerY) / centerY;

    const maxShift = 30;
    videos.forEach((video) => {
      const shiftX = offsetX * maxShift;
      const shiftY = offsetY * maxShift;
      video.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
    });
  });

  // YouTube modal logic
  const modal = document.getElementById("youtube-modal");
  const frame = document.getElementById("youtube-frame");
  const closeBtn = document.getElementById("close-modal");

  document.querySelectorAll(".moments-video").forEach((video) => {
    video.addEventListener("click", () => {
      const yt = video.getAttribute("data-yt");
      frame.src =
        yt
          .replace("youtu.be/", "www.youtube.com/embed/")
          .replace("watch?v=", "embed/") + "?autoplay=1";
      modal.classList.remove("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
    frame.src = "";
  });
});
