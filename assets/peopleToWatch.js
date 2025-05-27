document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("people-search");
  const peopleList = document.getElementById("people-list");
  const cards = Array.from(peopleList.querySelectorAll("article"));

  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();
    cards.forEach((card) => {
      const name = (card.getAttribute("data-name") || "").toLowerCase();
      // Always show the placeholder card (no data-name)
      if (!name && !query) {
        card.style.display = "";
      } else if (!name && query) {
        card.style.display = "none";
      } else if (name.includes(query)) {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  });
});
