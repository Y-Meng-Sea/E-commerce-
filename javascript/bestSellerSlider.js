import { Images } from "./Data/bestSellerSlides.js";
let slideIndex = 0;
let slidePerGen = 17;
export function generateBestSlide(SliderContainer) {
  let bestSellerSlideContainer = document.querySelector(SliderContainer);
  for (slideIndex; slideIndex < slidePerGen; slideIndex++) {
    let slideImage = `
    <div class="slide-image">
      <img src="${Images[slideIndex]}" alt="" />
    </div>
    `;
    bestSellerSlideContainer.innerHTML += slideImage;
  }
  slideIndex >= Images.length - 1 ? ((slideIndex = 0), (slidePerGen = 17)) : (slideIndex = slideIndex),
    (slidePerGen += 17);
}
export function generateBestSellContainer(wrapperClass, containerName) {
  // select the wrapper class
  let wrapper = document.querySelector("." + wrapperClass);
  // generate HTML to wrapper class
  wrapper.innerHTML += `
    <div class="${"best-product-slides" + " " + containerName}"></div>
      <button class="${"best-sell-next-slide" + " " + "best-sell-next-slide-" + containerName}">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <button class="${"best-sell-previous-slide" + " " + "best-sell-previous-slide-" + containerName}">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
  `;

  // add action to the button
  let bestSellerContainer = document.querySelector(`.${containerName}`);
  document.querySelector(`.best-sell-next-slide-${containerName}`).addEventListener("click", () => {
    bestSellerContainer.scrollTo({
      left: bestSellerContainer.scrollLeft + bestSellerContainer.clientWidth,
      behavior: "smooth",
    });
  });

  document.querySelector(`.best-sell-previous-slide-${containerName}`).addEventListener("click", () => {
    bestSellerContainer.scrollTo({
      left: bestSellerContainer.scrollLeft - bestSellerContainer.clientWidth,
      behavior: "smooth",
    });
  });
}
