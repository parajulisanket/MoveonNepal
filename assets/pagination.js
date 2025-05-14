const itemsPerPage = 5;
const items = document.querySelectorAll(".statement-item");
const paginationContainer = document.getElementById("pagination");

function showPage(pageNum) {
  const start = (pageNum - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  items.forEach((item, i) => {
    item.style.display = i >= start && i < end ? "block" : "none";
  });

  updateActiveButton(pageNum);
}

function createPaginationButtons() {
  const totalPages = Math.ceil(items.length / itemsPerPage);
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = "px-3 w-fit py-1 border-b-gray-500 ";
    btn.addEventListener("click", () => showPage(i));

    paginationContainer.appendChild(btn);
  }
}

function updateActiveButton(activePage) {
  const buttons = paginationContainer.querySelectorAll("button");
  buttons.forEach((btn, idx) => {
    if (idx + 1 === activePage) {
      btn.classList.add("text-black");
      btn.classList.remove("border-b", "border-b-gray-400");
    } else {
      btn.classList.add("border-b", "border-b-gray-400");
      btn.classList.remove("text-black");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createPaginationButtons();
  showPage(1);
});
