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
    "mission_Puspa_kamal_Dahal",
    "mission_Puspa_kamal_Dahal_prime_minister",
    "mission_Puspa_kamal_Dahal_description",
    "mission_Puspa_kamal_Dahal_detail",
    "mission_Puspa_kamal_Dahal_communist",
    "mission_Puspa_kamal_Dahal_communist_politics",
    "mission_Puspa_kamal_Dahal_civil_war",
    "mission_Puspa_kamal_Dahal_civil_war_detail",
    "mission_Puspa_kamal_Dahal_politics_journey",
    "mission_Puspa_kamal_Dahal_politics_journey_detail",
    "mission_Puspa_kamal_Dahal_legacy",
    "mission_Puspa_kamal_Dahal_legacy_detail",
    "mission_Ranju_Darshana",
    "mission_Ranju_Darshana_description",
    "mission_Ranju_Darshana_youth_leader",
    "mission_Ranju_Darshana_detail",
    "mission_Ranju_Darshana_education",
    "mission_Ranju_Darshana_education_detail",
    "mission_Ranju_Darshana_political_activism",
    "mission_Ranju_Darshana_political_activism_detail",
    "mission_Ranju_Darshana_current_role",
    "mission_Ranju_Darshana_current_role_detail",
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
