import { discountProducts } from "../Data/discount-product-page.js";
import { smallDiscounts } from "../Data/smallDiscount.js";
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
