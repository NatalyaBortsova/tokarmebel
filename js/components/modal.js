const modalDialog = document.querySelector('[data-target="modal"]');
const modalBtnClose = document.querySelector('[data-target="close"]');
const modalBtnOpen = document.querySelectorAll('[data-path="modal"]');


function openModalWindow() {
  modalDialog.classList.add("open");
  document.body.style.overflow = "hidden";
  clearInterval(modalTimerId);
}

function closeModalWindow() {
  modalDialog.classList.remove("open");
  document.body.style.overflow = "";
}

modalBtnOpen.forEach((item) => {
  item.addEventListener("click", openModalWindow);
});

modalBtnClose.addEventListener("click", closeModalWindow);

modalDialog.addEventListener("click", (e) => {
  if (e.target === modalDialog) {
    closeModalWindow();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Escape" && modalDialog.classList.contains("open")) {
    closeModalWindow();
  }
});

const modalTimerId = setTimeout(openModalWindow, 5000);

function showModalByScroll() {
  if (
    window.pageYOffset + document.documentElement.clientHeight >=
    document.documentElement.scrollHeight
  ) {
    openModalWindow();
    window.removeEventListener("scroll", showModalByScroll);
  }
}

window.addEventListener("scroll", showModalByScroll);







