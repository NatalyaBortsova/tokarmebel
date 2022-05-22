const valueNum = document.querySelector("#range-square");
const slider = document.querySelector("#range-slider-square");

if (slider) {
  slider.oninput = () => {
    let value = slider.value;
    valueNum.textContent = value;
  };
  slider.addEventListener("input", function () {
    let x = slider.value / 5;
    let color =
      "linear-gradient(90deg, rgb(203, 135, 52)" +
      x +
      "%, rgb(231, 216, 199)" +
      x +
      "%)";
    slider.style.background = color;
  });
}

const valueNumPrice = document.querySelector("#range-price");
const sliderPrice = document.querySelector("#range-slider-price");

if (sliderPrice) {
  sliderPrice.oninput = () => {
    let value = sliderPrice.value;
    valueNumPrice.textContent = value * 10000;
  };

  sliderPrice.addEventListener("input", function () {
    let x = sliderPrice.value / 5;
    let color =
      "linear-gradient(90deg, rgb(203, 135, 52)" +
      x +
      "%, rgb(231, 216, 199)" +
      x +
      "%)";
    sliderPrice.style.background = color;
  });
}

