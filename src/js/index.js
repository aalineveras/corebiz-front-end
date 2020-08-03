import "../styles/main.scss";

import Swiper from 'swiper'
import ProductShelf from './components/ProductShelf'

let elMainShelf = document.getElementById('shelfProducts');
let elProdutShelf = document.querySelector('.shelf__list--products');

document.addEventListener("DOMContentLoaded", function(event) {
  fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(res => res.json())
    .then(res => {
      new ProductShelf(elProdutShelf, res)
      new Swiper(elMainShelf)
    })
});
