import "../styles/main.scss";

import Swiper from 'swiper'
import ProductShelf from './components/ProductShelf'

let elMainShelf = document.getElementById('shelfProducts');
let elProdutShelf = document.querySelector('.shelf__list--products');

let swiperConfig = {
  slidesPerView: 4,

  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  fetch('https://corebiz-test.herokuapp.com/api/v1/products')
    .then(res => res.json())
    .then(res => {
      new ProductShelf(elProdutShelf, res)
      new Swiper(elMainShelf, swiperConfig)
    })
});
