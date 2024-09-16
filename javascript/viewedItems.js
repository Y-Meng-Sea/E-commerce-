import { viewedItemsData } from "./Data/viewedItemsData.js";
let render = "";
let cotainer = document.querySelector(".viewed-items-container");

export function viewedItems() {
  console.log(viewedItemsData[0].image);
  for (let i = 0; i < viewedItemsData.length; i++) {
    render += `
        <div class="viewed-item">
              <div class="image">
                <img src="${viewedItemsData[i].image}" alt="" />
              </div>
              <div class="item-description">
                <p>
                  ${viewedItemsData[i].describe}
                </p>
              </div>
              <div class="item-rated">
                <div class="rated-star">
                ${viewedItemsData[i].rated(viewedItemsData[i].amountOfRated)}
                </div>
                <div class="number-of-rated">
                  <p>200,0</p>
                </div>
              </div>
              <div class="item-price">${viewedItemsData[i].Price}<span>${viewedItemsData[i].PriceDetail}</span></div>
              <div class="shipping">${viewedItemsData[i].Shipping} <span>${viewedItemsData[i].shippingDetail}</span></div>
            </div>
    `;
  }
  cotainer.innerHTML = render;
}
