import { cards1 } from "./Data/cardData1.js";
import { cards4 } from "./Data/cardData4.js";

let structureCard1;
let structureCard4;
let card1Loop = 0;
let index1 = 0;
let index2 = 1;
let index3 = 2;
let index4 = 3;
function generateCard1(numberOfcards, Container) {
  let cardContainer = document.querySelector(`${Container}`);
  for (let i = 0; i < numberOfcards; i++) {
    structureCard1 = `
        <div class="card">
            <div class="card-text">${cards1[card1Loop].cardText}</div>
            <div class="card-image">
                <img src="${cards1[card1Loop].cardImage}" alt="" />
            </div>
            <div class="card-link">
                ${cards1[card1Loop].cardLink}
            </div>
        </div> `;
    card1Loop >= cards1.length - 1 ? (card1Loop = 0) : card1Loop++;
    cardContainer.innerHTML += structureCard1;
  }
}
function generateCard4(numberOfcards, Container) {
  let cardContainer = document.querySelector(`${Container}`);
  for (let i = 0; i < numberOfcards; i++) {
    structureCard4 = `
    <div class="card">
          <div class="card-text">${cards4[index1].cardTitle}</div>
          <div class="card-content">
            <div class="card-image-grid">

              <div class="card-grid-item">
                <img src="${cards4[index1].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[index1].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[index2].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[index2].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[index3].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[index3].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[index4].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[index4].cardText}</p>
              </div>
          
            </div>
          </div>
          <div class="card-link">${cards4[index1].cardLink}</div>
        </div>
  `;

    if (
      index1 >= cards4.length - 1 ||
      index2 >= cards4.length - 1 ||
      index3 >= cards4.length - 1 ||
      index4 >= cards4.length - 1
    ) {
      (index1 = 0), (index2 = 1), (index3 = 2), (index4 = 3);
    } else {
      index1 += 4;
      index2 += 4;
      index3 += 4;
      index4 += 4;
    }
    cardContainer.innerHTML += structureCard4;
  }
}

export { generateCard1, generateCard4 };
