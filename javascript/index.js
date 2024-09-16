import { generateCard1, generateCard4 } from "./generateCard.js";
import { Slides } from "./Data/carouselData.js";
import { generateBestSellContainer, generateBestSlide } from "./bestSellerSlider.js";
import { viewedItems } from "./viewedItems.js";
// -------------> cart side bar <-------------
let cartBtn = document.querySelector(".js-cart");
let closeCartBtn = document.querySelector(".js-close-sidebar-btn");
const cartContainer = document.querySelector(".js-sidebar");

cartContainer.style.width = "0%";
window.addEventListener("resize", () => {
  cartContainer.style.width = "0%";
});

cartBtn.addEventListener("click", () => {
  if (cartContainer.style.width === "0%") {
    if (window.matchMedia("(max-width:768px)").matches) {
      cartContainer.style.width = "60%";
      sideMenuContainer.style.width = "0%";
    } else {
      cartContainer.style.width = "30%";
    }
  } else {
    cartContainer.style.width = "0%";
  }
});
closeCartBtn.addEventListener("click", () => {
  cartContainer.style.width = "0%";
});

// ----------> menu side bar <-------------
let sideNavegationBar = document.querySelector(".side-navegation");
let sideMenuContainer = document.querySelector(".side-menu");
let cloneSideMenuBtn = document.querySelector(".js-close-side-menu-btn");
let openSideMenu = document.querySelector(".hamburger-menu");

sideMenuContainer.style.width = "0%";
window.addEventListener("resize", () => {
  sideMenuContainer.style.width = "0%";
});

openSideMenu.addEventListener("click", () => {
  if (sideMenuContainer.style.width === "0%") {
    sideMenuContainer.style.width = "60%";
    cartContainer.style.width = "0%";
  } else {
    sideMenuContainer.style.width = "0%";
  }
});

sideNavegationBar.addEventListener("click", () => {
  if (sideMenuContainer.style.width === "0%") {
    if (window.matchMedia("(max-width: 768px)").matches) {
      sideMenuContainer.style.width = "60%";
    } else {
      sideMenuContainer.style.width = "30%";
    }
    cartContainer.style.width = "0%";
  } else {
    sideMenuContainer.style.width = "0%";
  }
});

cloneSideMenuBtn.addEventListener("click", () => {
  sideMenuContainer.style.width = "0%";
});

// ----------> image carousel <------------
// generate the carousel
Slides.forEach((slide) => {
  let eachImage = `<img src="${slide.image}" alt="${slide.alt}" />`;
  document.querySelector(".slides").innerHTML += eachImage;
});
// make the carousel
const slidesContainer = document.querySelector(".slides");
let slides = document.querySelectorAll(".slides img");
let nextBtn = document.querySelector(".next-button");
let previousBtn = document.querySelector(".prvious-button");

let startSlide = 0;
let autoPlayInterval;
let isTransition = false;

// clone the first and the last
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[slides.length - 1].cloneNode(true);
slidesContainer.appendChild(firstSlide);
slidesContainer.insertBefore(lastSlide, slides[0]);

// make the slide container to showing the first slide
slidesContainer.style.transform = "translateX(-100%)";

// function to update the slide position
function updateSlide() {
  const offset = -(startSlide + 1) * 100;
  slidesContainer.style.transition = "transform 0.5s";
  slidesContainer.style.transform = `translateX(${offset}%)`;
}

// handle seamless loop
slidesContainer.addEventListener("transitionend", () => {
  isTransition = false;
  enableBtn();

  if (startSlide === slides.length) {
    slidesContainer.style.transition = "none";
    startSlide = 0;
    const offset = -(startSlide + 1) * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }

  if (startSlide === -1) {
    slidesContainer.transition = "none";
    startSlide = slides.length - 1;
    const offset = -(startSlide + 1) * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
  }
});

// go to nex slide function
function nextSlide() {
  if (isTransition) return;
  isTransition = true;
  disableBtn();
  startSlide++;
  updateSlide();
}
// go to prev slide
function prevSlide() {
  if (isTransition) return;
  isTransition = true;
  disableBtn();
  startSlide--;
  updateSlide();
}

// disable and enable btn
function disableBtn() {
  previousBtn.disabled = true;
  nextBtn.disabled = true;
}
function enableBtn() {
  previousBtn.disabled = false;
  nextBtn.disabled = false;
}

// prev and next btn
nextBtn.addEventListener("click", () => {
  clearInterval(autoPlayInterval); // stop auto play while press btn
  nextSlide();
  autoPlaySlider(); // start auto play again
});

previousBtn.addEventListener("click", () => {
  clearInterval(autoPlayInterval);
  prevSlide();
  autoPlaySlider();
});

// auto play
function autoPlaySlider() {
  autoPlayInterval = setInterval(nextSlide, 4000);
}

autoPlaySlider();

// ----------> card product <------------
/* to generate can need 2 argument amount of can and class name as a selector*/
generateCard1(4, ".card-container");
generateCard4(4, ".card-container");

//------------> best seller card slider <---------------
/*to generate best seller slide first generate slide container , this need 2 argument
  wrapper class name should be "best-sell-wraperN" ,( N is number ) 
  and secornd is class name for insert slide this should be "best-product-slidesN" (N is nummber)
*/
generateBestSellContainer("best-sell-wraper1", "best-product-slides1");
generateBestSlide(".best-product-slides1");

// generate more prduct card
generateCard4(2, ".card-container1");
generateCard1(2, ".card-container1");

// generate more best seller slide
generateBestSellContainer("best-sell-wraper2", "best-product-slides2");
generateBestSlide(".best-product-slides2");

// generate more prduct card
generateCard1(4, ".card-container2");
// generate more best seller slide
generateBestSellContainer("best-sell-wraper3", "best-product-slides3");
generateBestSlide(".best-product-slides3");

//
viewedItems();
