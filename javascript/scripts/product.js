import { discountProducts } from "../Data/discount-product-page.js";
import { smallDiscounts } from "../Data/smallDiscount.js";
import { departments, prices, discounts } from "./productFilter.js";
import { products } from "../Data/productsData.js";
const containerEl = document.querySelector(".discount-cards-container");
let productStructure = "";
discountProducts.forEach((product) => {
  productStructure += `
        <div class="card">
          <div class="discount-image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="discount-text">
            <span>${product.off}</span>
            ${product.discountEvent}
          </div>
          <div class="dicount-price">
            ${product.price}
            <span class="small-price-point">${product.priceSmall}</span>
            <span class="previous-rpice">${product.prevPrice}</span>
          </div>
        </div>
    `;
});
containerEl.innerHTML = productStructure;
//previous-btn
//next-btn
const prevBtnEl = document.querySelector(".previous-btn");
const nextBtnEl = document.querySelector(".next-btn");

nextBtnEl.addEventListener("click", () => {
  containerEl.scrollTo({
    left: containerEl.scrollLeft + 1000,
    behavior: "smooth",
  });
  prevBtnEl.style.display = "block";
});
prevBtnEl.addEventListener("click", () => {
  containerEl.scrollTo({
    left: containerEl.scrollLeft - 1000,
    behavior: "smooth",
  });
});

//small discount
const smallDiscContainerEl = document.querySelector(".small-card-container");
const preSmallDiscount = document.querySelector(".pre-small-disc");
const nextSmallDiscount = document.querySelector(".next-small-disc");
let smallDiscStruc = "";
smallDiscounts.forEach((discount) => {
  smallDiscStruc += `
    <div class="small-card">
        <div class="discount-img">
              <img src="${discount.img}" alt="" />
        </div>
        <div class="small-discount-text">
          <p>${discount.text}</p>
        </div>
    </div>
  `;
});
smallDiscContainerEl.innerHTML = smallDiscStruc;

nextSmallDiscount.addEventListener("click", () => {
  smallDiscContainerEl.scrollTo({
    left: smallDiscContainerEl.scrollLeft + 700,
    behavior: "smooth",
  });
});
preSmallDiscount.addEventListener("click", () => {
  smallDiscContainerEl.scrollTo({
    left: smallDiscContainerEl.scrollLeft - 700,
    behavior: "smooth",
  });
});

// filter function

let departmentFilterEle = document.querySelector(".Departments-filter > ul");
let priceFilterEle = document.querySelector(".price-filter > ul");
let discountFilterEle = document.querySelector(".discount-filter > ul");

let departmentHtml = "";
departments.forEach((department) => {
  departmentHtml += `
      <li><input type="radio" name="department-filter" id="${department}"/> <label for="${department}">${department}</label></li>
  `;
});
departmentFilterEle.innerHTML = departmentHtml;

let priceHtml = "";
prices.forEach((price) => {
  priceHtml += `
      <li><input type="radio" name="price-filter" id="${price}" /><label for="${price}">${price}</label></li>
  `;
});
priceFilterEle.innerHTML = priceHtml;

let discountHtml = "";
discounts.forEach((discount) => {
  discountHtml += `
      <li><input type="radio" name="discount-filter" id="${discount}"/><label for="${discount}">$${discount}</label></li>
  `;
});
discountFilterEle.innerHTML = discountHtml;

//product display
let productDisplayContainerEle = document.querySelector(".product-display");
let proDisplayStructure = "";
products.forEach((product) => {
  if (product.discountEvent === "") {
    proDisplayStructure += `
    <div class="product-card">
          <div class="image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="discount">
            <span class="off">${product.discount}</span>
          </div>
          <div class="decribe"><p>${product.discription}</p></div>
          <div class="rated">
            <div class="rate"><img src="../asset/ratting/rating-${product.rating.stars}.png" alt="" /></div>
            <div class="user-rate">${product.rating.userRate}</div>
          </div>
          <div class="prices">${product.price} <span class="small-text-price">${product.pricePoint}</span></div>
          <div class="shipping">shipping to cambodia</div>
          <button class="add-to-cart js-add-to-card" data-product-id="${product.id}">Add to cart</button>
    </div>
  `;
  } else if (product.discount === "") {
    proDisplayStructure += `
    <div class="product-card">
          <div class="image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="decribe"><p>${product.discription}</p></div>
          <div class="rated">
            <div class="rate"><img src="../asset/ratting/rating-${product.rating.stars}.png" alt="" /></div>
            <div class="user-rate">${product.rating.userRate}</div>
          </div>
          <div class="prices">${product.price} <span class="small-text-price">${product.pricePoint}</span></div>
          <div class="shipping">shipping to cambodia</div>
          <button class="add-to-cart js-add-to-card" data-product-id="${product.id}">Add to cart</button>
    </div>
  `;
  } else if (product.price === "") {
    proDisplayStructure += `
    <div class="product-card">
          <div class="image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="discount">
            <span class="off">${product.discount}</span>
            <span class="event">${product.discountEvent}</span>
          </div>
          <div class="decribe" data-product-id="${product.id}"><p>${product.discription}</p></div>
          <div class="rated">
            <div class="rate"><img src="../asset/ratting/rating-${product.rating.stars}.png" alt="" /></div>
            <div class="user-rate">${product.rating.userRate}</div>
          </div>
    </div>
  `;
  } else if (product.rating === undefined) {
    proDisplayStructure += `
    <div class="product-card">
          <div class="image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="discount">
            <span class="off">${product.discount}</span>
            <span class="event">${product.discountEvent}</span>
          </div>
          <div class="decribe"><p>${product.discription}</p></div>
          <div class="prices">${product.price} <span class="small-text-price">${product.pricePoint}</span></div>
          <div class="shipping">shipping to cambodia</div>
          <button class="add-to-cart js-add-to-card" data-product-id="${product.id}">Add to cart</button>
    </div>
  `;
  } else {
    proDisplayStructure += `
    <div class="product-card">
          <div class="image">
            <img src="${product.img}" alt="" />
          </div>
          <div class="discount">
            <span class="off">${product.discount}</span>
            <span class="event">${product.discountEvent}</span>
          </div>
          <div class="decribe"><p>${product.discription}</p></div>
          <div class="rated">
            <div class="rate"><img src="../asset/ratting/rating-${product.rating.stars}.png" alt="" /></div>
            <div class="user-rate">${product.rating.userRate}</div>
          </div>
          <div class="prices">${product.price} <span class="small-text-price">${product.pricePoint}</span></div>
          <div class="shipping">shipping to cambodia</div>
          <button class="add-to-cart js-add-to-card" data-product-id="${product.id}">Add to cart</button>
    </div>
  `;
  }
});
productDisplayContainerEle.innerHTML = proDisplayStructure;
// end product display

// add products to cart
const carts = [];
let cartsItmes = document.querySelector(".cart-quantity");
cartsItmes.innerText = 0;
const addToCartBtnEle = document.querySelectorAll(".js-add-to-card");
addToCartBtnEle.forEach((btn) => {
  btn.addEventListener("click", () => {
    cartsItmes.innerText++;
    const matchedProduct = products.find((product) => product.id === btn.dataset.productId);
    if (matchedProduct) {
      carts.push(matchedProduct);
    }
    renderCarts();
  });
});

// carts
function updateAboutOfItems() {
  let amountItemsEle = document.querySelector(".amount-number");
  const increaseBtnEle = document.querySelector(".increase-btn");
  const decreaseBtnEle = document.querySelector(".descrease-btn");

  amountItemsEle.innerText = 0;

  increaseBtnEle.addEventListener("click", () => {
    amountItemsEle.innerText++;
  });
  decreaseBtnEle.addEventListener("click", () => {
    if (amountItemsEle.innerText > 0 || amountItemsEle.innerText < "0") {
      amountItemsEle.innerText--;
    }
  });
}

function renderCarts() {
  let cartStructure = " ";
  carts.forEach((cart) => {
    let short_description = cart.discription.split(" ").slice(0, 8).join(" ");
    cartStructure += `
      <div class="carts-card">
        <div class="image">
          <img src="${cart.img}" alt="" />
        </div>
        <div class="product-text">${short_description}</div>
        <div class="amount">
          <span class="amount-number"></span>
          <div class="control-amount-btn">
            <div class="increase-btn"><i class="fa-solid fa-caret-up"></i></div>
            <div class="descrease-btn"><i class="fa-solid fa-caret-down"></i></div>
          </div>
        </div>
        <div class="pay"><button class="pay-btn">pay</button><button class="delete-btn" data-product-id="${cart.id}"}>Remove</button></div>
      </div>
  `;
  });
  document.querySelector(".carts-display-container").innerHTML = cartStructure;
  updateAboutOfItems();
  removeFromCart();
}

function removeFromCart() {
  let removeProductBtnEle = document.querySelectorAll(".delete-btn");
  removeProductBtnEle.forEach((btn) => {
    btn.addEventListener("click", () => {
      carts.pop();
      cartsItmes.innerText--;
      renderCarts();
    });
  });
}
