const openSearch = document.querySelector(".filters__button--search");
const openSidebar = document.querySelector(".filters__button--funnel");
const searchPanel = document.querySelector(".filters__search");
const sidebar = document.querySelector(".sidebar");
const closeSidebar = document.querySelector(".sidebar__close");
const filterBlock = document.querySelector(".filters");

if (filterBlock) {
  document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest(".filters__button--search")) {
      openSearch.classList.add("active");
      if (openSearch.classList.contains("active")) {
        searchPanel.style.display = "block";
      }
    } else if (!targetElement.closest(".filters")) {
      openSearch.classList.remove("active");
      searchPanel.style.display = "none";
    }
  });
}

if (filterBlock) {
  document.addEventListener("click", function (e) {
    const targetElement = e.target;
    if (targetElement.closest(".filters__button--funnel")) {
      sidebar.classList.add("active");
    } else if (!targetElement.closest(".filters")) {
      sidebar.classList.remove("active");
    }
  });
}

if (closeSidebar) {
  closeSidebar.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });
}
