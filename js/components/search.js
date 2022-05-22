const search = () => {
    let searchInput = document.getElementById("search-input").value.toUpperCase();
    let storeitems = document.querySelector('.product__list');
    let elements = document.getElementsByTagName("h4");
    let cards = document.querySelectorAll(".product__item");

    for(let i =0; i < elements.length; i++) {
        let match = cards[i].getElementsByTagName('h4')[0];
        if(match) {
            let textvalue = match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchInput) > -1) {
                cards[i].style.display = '';
            } else {
                cards[i].style.display = 'none';
            }
        }
    }
}

