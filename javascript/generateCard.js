import { cards1 } from "./cardData1.js";
import { cards4 } from "./cardData4.js";
let cardContainer = document.querySelector(".card-container");
let structureCard1;
let structureCard4;
let card1Loop = 0;
function generateCard1(numberOfcards) {
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

function generateCard4(numberOfcards) {
  let totalGenerate = numberOfcards * 4;
  for (let i = 0; i <= totalGenerate; i = i + 4) {
    structureCard4 = `
    <div class="card">
          <div class="card-text">${cards4[i].cardTitle}</div>
          <div class="card-content">
            <div class="card-image-grid">

              <div class="card-grid-item">
                <img src="${cards4[i].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[i].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[i + 1].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[i + 1].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[i + 2].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[i + 2].cardText}</p>
              </div>

              <div class="card-grid-item">
                <img src="${cards4[i + 3].cardImage}" class="img-fluid rounded-top" alt="" />
                <p>${cards4[i + 3].cardText}</p>
              </div>
          
            </div>
          </div>
          <div class="card-link">${cards4[i].cardLink}</div>
        </div>
  `;
    cardContainer.innerHTML += structureCard4;
  }
}

export { generateCard1, generateCard4 };
