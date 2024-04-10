import { tourOffers } from "./data.js";

const userBtn = document.querySelector(".fa-user");
const loginInPage = document.querySelector(".login");
const signIn = document.querySelector(".sign-in");
const signUp = document.querySelector(".sign-up");

userBtn.addEventListener("click", function () {
  loginInPage.classList.toggle("loginShow");
});

signIn.addEventListener("click", function () {
  window.location.href = "signin.html";
});

signUp.addEventListener("click", function () {
  window.location.href = "signup.html";
});

// Courser

const area = document.querySelector(".main1");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");

let currentStartIndex = 0; // Keeps track of the starting index for displaying cards

window.addEventListener("DOMContentLoaded", function () {
  displayCards(currentStartIndex); // Initial display of first 4 cards
});

function displayCards(startIndex) {
  area.innerHTML = "";

  // Loop through a maximum of 4 cards, starting from startIndex
  for (let i = startIndex; i < startIndex + 4 && i < tourOffers.length; i++) {
    area.innerHTML += `
      <div class="card">
        <img src="${tourOffers[i].image}" alt="${tourOffers[i].title}">
        <h1>${tourOffers[i].title}</h1>
        <p>${tourOffers[i].paragraph}</p>
        <span>${tourOffers[i].price}</span>
      </div>
    `;
  }
}

prevBtn.addEventListener("click", function () {
  if (currentStartIndex > 0) {
    currentStartIndex -= 4; // Decrement starting index for previous set
    displayCards(currentStartIndex); // Display previous set of cards
  }
});

nextBtn.addEventListener("click", function () {
  if (currentStartIndex + 4 < tourOffers.length) {
    currentStartIndex += 4; // Increment starting index for next set
    displayCards(currentStartIndex); // Display next set of cards
  }
});
