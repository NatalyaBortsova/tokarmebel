const sortAlpha = document.querySelector("#sort-alpha"),
  sortPopular = document.querySelector("#sort-popular"),
  sortPrice = document.querySelector("#sort-price");

if (sortAlpha) {
  sortAlpha.addEventListener("click", () => {
    mySort("data-alpha");
  });
}

if (sortPopular) {
  sortPopular.addEventListener("click", () => {
    mySort("data-rate");
  });
}

if (sortPrice) {
  sortPrice.addEventListener("click", () => {
    mySort("data-price");
  });
}

function mySort(sortType) {
  let nav = document.querySelector("#houses");
  for (let i = 0; i < nav.children.length; i++) {
    for (let j = i; j < nav.children.length; j++) {
      if (
        +nav.children[i].getAttribute(sortType) >
        +nav.children[j].getAttribute(sortType)
      ) {
        replacedNode = nav.replaceChild(nav.children[j], nav.children[i]);
        insertAfter(replacedNode, nav.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}
