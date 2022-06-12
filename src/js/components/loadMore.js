const moreProducts = document.querySelector("#load-more");
const productItem = document.querySelectorAll(".product__item");
const blockItems = document.querySelector(".product__list");

const catalogList = [
  {
    id: "el1",
    img: "img/dwelling/1.jpg",
    name: "Вариант ST-65 «Bavaria»",
    footage1: "7,5х9 м",
    footage2: "135 м2",
    price: "1 000 000",
    dataPrice: 1000000,
    dataRate: 2,
    dataAlpha: "2",
  },
  {
    id: "el2",
    img: "img/dwelling/2.jpg",
    name: "Вариант ST-56 «Barcelona»",
    footage1: "7,5х9 м",
    footage2: "249 м2",
    price: "2 800 000",
    dataPrice: 2800000,
    dataRate: 3,
    dataAlpha: "2",
  },
  {
    id: "el3",
    img: "img/dwelling/3.jpg",
    name: "Вариант ST-25 «Garden ECO»",
    footage1: "7,5х9 м",
    footage2: "71 м2",
    price: "580 000",
    dataPrice: 580000,
    dataRate: 1,
    dataAlpha: "7",
  },
];

if (moreProducts) {
  moreProducts.addEventListener("click", loadProducts);
}

function loadProducts() {
  let htmlCatalog = "";
  if (blockItems) {
    catalogList.forEach(
      ({
        id,
        img,
        name,
        footage1,
        footage2,
        price,
        dataPrice,
        dataRate,
        dataAlpha,
      }) => {
        htmlCatalog += `
              <li class="product__item" data-price="${dataPrice}" data-rate="${dataRate}" data-alpha="${dataAlpha}">
              <article class="product__card">
                <div class="product__image">
                  <img src="${img}" alt=${name} class="image" width="259" height="180">
                </div>
                <div class="product__inner">
                  <h4 class="product__title">
                   ${name}
                  </h4>
                  <div class="product__box">
                    <span class="product__footage product__footage--meter">${footage1}</span>
                    <span class="product__footage product__footage--sqmeter">${footage2}</span>
                  </div>
                  <div class="product__info">
                    <a href="catalog.html" class="product__link btn">Ознакомиться</a>
                    <span class="product__price">${price}<span class="product__currency">грн</span></span>
                  </div>
                </div>
              </article>
            </li>
              `;

        blockItems.insertAdjacentHTML("beforeend", htmlCatalog);
      }
    );
  }
}
