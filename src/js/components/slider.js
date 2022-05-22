import Swiper, { Navigation, Pagination, Thumbs, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Thumbs, Scrollbar]);

const swiper = new Swiper(".materials__slider", {
  slidesPerView: "auto",

  navigation: {
    nextEl: ".materials__slider-btn--next",
    prevEl: ".materials__slider-btn--prev",
  },
  pagination: {
    el: ".materials__slider-pag",
    type: "fraction",
  },
});

const swiper2 = new Swiper(".articles__slider", {
  loop: true,

  navigation: {
    nextEl: ".articles__slider-btn--next",
    prevEl: ".articles__slider-btn--prev",
  },
  pagination: {
    el: ".articles__slider-pag",
    type: "fraction",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const sliderMain = document.querySelector(".slider__gallery");
const sliderThumb = document.querySelector(".slider__thumb");

let galleryThumbs = new Swiper(sliderThumb, {
  direction: "horizontal",
  slidesPerView: 4,
  spaceBetween: 6,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
    1024: {
      direction: "vertical",
      slidesPerView: 5,
      spaceBetween: 12,
    },
  },
});
let galleryTop = new Swiper(sliderMain, {
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".slider__gallery-btn--next",
    prevEl: ".slider__gallery-btn--prev",
  },
  pagination: {
    el: ".slider__gallery-pag",
    type: "fraction",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

const tabs = document.querySelectorAll('[data-btn="tab"]');
const tabContent = document.querySelectorAll(".work-process__list");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tc) => {
      tc.classList.remove("active");
    });
    target.classList.add("active");

    tabs.forEach((t) => {
      t.classList.remove("active");
    });
    tab.classList.add("active");
  });
});

const gallery = new Swiper('.gallery__slider', {
  slidesPerView: 'auto',
  spaceBetween: 30,
  breakpoints: {
    320: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 30,
    },
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },
  
});

