const CATALOG = [
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
  {
    id: "el4",
    img: "img/dwelling/4.jpg",
    name: "Вариант ST-53 «Feeria»",
    footage1: "7,5х9 м",
    footage2: "53.6 м2",
    price: "980 000",
    dataPrice: 980000,
    dataRate: 1,
    dataAlpha: "6",
  },
  {
    id: "el5",
    img: "img/dwelling/5.jpg",
    name: "Вариант LX-75 JULIA",
    footage1: "7,5х9 м",
    footage2: "187 м2",
    price: "2 350 000",
    dataPrice: 2350000,
    dataRate: 3,
    dataAlpha: "10",
  },
  {
    id: "el6",
    img: "img/dwelling/6.jpg",
    name: "Вариант ST-49v2 «Nevada»",
    footage1: "7,5х9 м",
    footage2: "146 м2",
    price: "2 421 000",
    dataPrice: 2421000,
    dataRate: 3,
    dataAlpha: "14",
  },
  {
    id: "el7",
    img: "img/dwelling/7.jpg",
    name: "Вариант OS-77 «Milano»",
    footage1: "7,5х9 м",
    footage2: "192 м2",
    price: "3 260 000",
    dataPrice: 3260000,
    dataRate: 3,
    dataAlpha: "13",
  },
  {
    id: "el8",
    img: "img/dwelling/8.jpg",
    name: "Вариант ST-22 «Classic»",
    footage1: "7,5х9 м",
    footage2: "131 м2",
    price: "1 200 000",
    dataPrice: 1200000,
    dataRate: 2,
    dataAlpha: "3",
  },
  {
    id: "el9",
    img: "img/dwelling/9.jpg",
    name: "Вариант ST-65 «Elegant»",
    footage1: "7,5х9 м",
    footage2: "112 м2",
    price: "2 300 000",
    dataPrice: 2300000,
    dataRate: 3,
    dataAlpha: "5",
  },
  {
    id: "el10",
    img: "img/dwelling/10.jpg",
    name: "Вариант ST-16 «Classic Plus»",
    footage1: "7,5х9 м",
    footage2: "110 м2",
    price: "920 000",
    dataPrice: 920000,
    dataRate: 2,
    dataAlpha: "3",
  },
  {
    id: "el11",
    img: "img/dwelling/11.jpg",
    name: "Вариант ST-23 «ECO Soul»",
    footage1: "7,5х9 м",
    footage2: "186 м2",
    price: "2 150 000",
    dataPrice: 2150000,
    dataRate: 3,
    dataAlpha: "5",
  },
  {
    id: "el12",
    img: "img/dwelling/12.jpg",
    name: "Вариант ST-99 «Edinburgh»",
    footage1: "7,5х9 м",
    footage2: "250 м2",
    price: "2 458 000",
    dataPrice: 2458000,
    dataRate: 1,
    dataAlpha: "5",
  },
];

class Products {
  render() {
    let htmlCatalog = "";
    const rootProducts = document.getElementById("products");
    if (rootProducts) {
      CATALOG.forEach(
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
        }
      );
      const html = `
          <ul class="product__list" id="houses">
          ${htmlCatalog}
          </ul>
          `;

      rootProducts.innerHTML = html;
    }
  }
}

const productsPage = new Products();
productsPage.render();
