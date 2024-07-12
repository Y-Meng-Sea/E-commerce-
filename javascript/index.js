import { cards } from "./card.js";

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

// ----------> car product <------------
let cardContainer = document.querySelector(".card-container");
let html;
cards.forEach((card) => {
  html = `
    <div class="card">
          <div class="card-text">${card.cardText}</div>
          <div class="card-image">
            <img src="${card.cardImage}" alt="" />
          </div>
          <div class="card-link">
            ${card.cardLink}
          </div>
        </div>
  `;
  cardContainer.innerHTML += html;
});
