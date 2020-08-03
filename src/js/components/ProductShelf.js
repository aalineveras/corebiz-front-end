import { formatToCurrency } from '../utils/methods'

export default class {
  constructor(el, payload) {
    this.shelf = el
    this.payload = payload

    this.init();
  }
  init() {
    this.payload.forEach((product) => {
      this.shelf.insertAdjacentHTML('beforeend', this.productMarkup(product));
    });
  }
  productMarkup(product) {
    return `<li class="shelf__list-item swiper-slide">
    <article class="shelf__item">
      <figure class="shelf__item-figure">
        <img
          class="shelf__item-img"
          src="${product.imageUrl}"
          alt="${product.productName}"
        />
      </figure>
      <div class="shelf__item-container shelf__item-container--text">
        <h2 class="shelf__item-title">${product.productName}</h2>
        <div class="shelf__item-container shelf__item-container--stars">
          ${this.productStars(product.stars)}
        </div>
        <div class="shelf__item-container shelf__item-container--price">
          ${(product.listPrice) && (`<p class="shelf__item-price shelf__item-price--last">de ${formatToCurrency(product.listPrice)}</p>`) || ''}

          <p class="shelf__item-price shelf__item-price--best">por ${formatToCurrency(product.price)}</p>

          ${(product.installments.length > 0)
            && (`<p class="shelf__item-price shelf__item-price--installments"> ou em ${product.installments [0].quantity}x de ${formatToCurrency(product.installments[0].value)} </p>`)
            || ''
          }
        </div>
        <button class="shelf__item-button">Comprar</button>
      </div>
    </article>
    </li>
    `
  }
  productStars(count) {
    let maximumStars = 5;
    let stars = [];

    for (let i = 0; i < count; i++) {
      stars.push('<span class="shelf__item-star"></span>');
    }

    for (let i = 0; i < (maximumStars - count); i++) {
      stars.push('<span class="shelf__item-star shelf__item-star--empty"></span>');
    }

    return stars.join(' ');
  }
}
