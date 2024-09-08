import { Images } from "./Data/bestSellerSlides.js";
let bestSellerSlideContainer = document.querySelector(".best-product-slides");
export function genSlid() {
  Images.forEach((image) => {
    let slideImage = `
              <div class="slide-image">
                <img src="${image}" alt="" />
              </div>
          `;
    bestSellerSlideContainer.innerHTML += slideImage;
  });
}
