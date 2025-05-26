document?.addEventListener("DOMContentLoaded", () => {
  const centerContent = document.getElementById("center-content");
  const exploreBtn = document.getElementById("explore-btn");
  const closeExploreBtn = document.getElementById("close-explore");
  const navBar = document.getElementById("main-navbar");
  const videos = document.querySelectorAll(".moments-video");

  closeExploreBtn?.classList?.add("hidden");

  let exploreMode = false;

  exploreBtn?.addEventListener("click", () => {
    centerContent.classList.add("-translate-y-24", "opacity-0");
    if (navBar) navBar.classList.add("-translate-y-24", "opacity-0");
    setTimeout(() => {
      centerContent.classList.add("hidden");
      if (navBar) navBar.classList.add("hidden");
      closeExploreBtn.classList.remove("hidden");
    }, 500);
    exploreMode = true;
  });

  closeExploreBtn?.addEventListener("click", () => {
    centerContent?.classList?.remove("hidden");
    if (navBar) navBar?.classList?.remove("hidden");
    setTimeout(() => {
      centerContent?.classList?.remove("-translate-y-24", "opacity-0");
      if (navBar) navBar?.classList?.remove("-translate-y-24", "opacity-0");
    }, 10);
    closeExploreBtn?.classList.add("hidden");
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

  closeBtn?.addEventListener("click", () => {
    modal.classList.add("hidden");
    frame.src = "";
  });
});

const scrollContainer = document.getElementById("scrollContainer");
const moveLeft = document.getElementById("moveLeft");
const moveRight = document.getElementById("moveRight");

// Scroll left when clicking the left arrow
moveLeft?.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: -800,
    behavior: "smooth",
  });
});

// Scroll right when clicking the right arrow
moveRight?.addEventListener("click", () => {
  scrollContainer.scrollBy({
    left: 800,
    behavior: "smooth",
  });
});

// Intersection Observer for section labels

const label = document.getElementById("section-label");

const sectionMap = {
  media: "MEDIA",
  movement: "MOVEMENT",
  mission: "MISSION",
  moveonstories: "STORIES",
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        if (sectionMap[id]) {
          label.textContent = sectionMap[id];
          label.style.opacity = "1";
        } else {
          // Hide if after mission
          label.style.opacity = "0";
        }
      }
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

// Observe all tracked sections + sentinel
document
  .querySelectorAll("#media, #movement, #mission, #moveonstories")
  .forEach((section) => {
    observer.observe(section);
  });

// part 3 video part script

document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.getElementById("play-btn");
  const thumbnail = document.getElementById("video-thumbnail");
  const iframe = document.getElementById("video-iframe");
  playBtn.addEventListener("click", function () {
    thumbnail.style.display = "none";
    playBtn.style.display = "none";

    iframe.style.display = "block";
    iframe.src =
      "https://www.youtube.com/embed/kzi1ik6qjZs?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&loop=1&playlist=kzi1ik6qjZs";
  });
});

// Language switcher script
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lang-toggle");
  const indicator = document.getElementById("toggle-indicator");

  // Persist language selection in localStorage
  let currentLang = localStorage.getItem("selectedLang") || "en";
  const translatableIds = [
    "title",
    "description",
    "cta",
    "tiktok",
    "youtube",
    "reels",
    "Podcast",
    "tiktok_detail",
    "reels_detail",
    "Podcast_detail",
    "youtube_detail",
    "people_to_watch",
    "journalists",
    "presidents",
    "prime_ministers",
    "youth_leaders",
    "journalists_name",
    "presidents_name",
    "prime_ministers_name",
    "youth_leaders_name",
    "move_on_stories",
    "politics",
    "business",
    "Economy",
    "global_nepali",
    "tech",
    "trends",
    "disaster",
    "politics_detail",
    "economy_detail",
    "business_detail",
    "global_nepali_detail",
    "tech_detail",
    "trends_detail",
    "disaster_detail",
    "Learn_more",
    "media_h1",
    "media_p",
    "breaking_news",
    "global_events",
    "economy_updates",
    "politics",
    "the_cabinate",
    "sports",
    "movement",
    "movement_detail",
    "our",
    "mission",
    "mission_detail",
    "rishi_dhamala",
    "rishi_dhamala_p",
    "rishi_dhamala_detail",
    "rishi_dhamala_description",
    "rishi_journalism",
    "rishi_journalism_detail",
    "rishi_media_presense",
    "rishi_media_presense_detail",
    "ramchandra_poudel",
    "ramchandra_poudel_p",
    "ramchandra_poudel_detail",
    "ramchandra_poudel_description",
    "ram_politics",
    "ram_politics_detail",
    "ram_politics_details",
    "ram_publication",
    "ram_publication_detail",
    "publication_detail1",
    "publication_detail2",
    "publication_detail3",
    "publication_detail4",
    "publication_detail5",
    "publication_detail6",
    "publication_detail7",
    "publication_last1", 
    "publication_last2",
  ];

  function updateLanguage(lang) {
    translatableIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element && translations[lang][id]) {
        element.innerText = translations[lang][id];
      }
    });
    // Update indicator position and text
    if (lang === "np") {
      indicator.style.left = "calc(100% - 2.75rem)";
      indicator.textContent = "NEP";
    } else {
      indicator.style.left = "0.25rem";
      indicator.textContent = "ENG";
    }
  }

  toggle.addEventListener("click", () => {
    if (currentLang === "en") {
      currentLang = "np";
    } else {
      currentLang = "en";
    }
    localStorage.setItem("selectedLang", currentLang);
    updateLanguage(currentLang);
  });

  // On load, set language and indicator
  updateLanguage(currentLang);
});
