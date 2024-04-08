import { bookFlight } from "./data.js";
import { tourOffers } from "./data.js";

const area = document.querySelector(".test");
const secondArea = document.querySelector(".test1");

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < bookFlight.length; i++) {
    area.innerHTML += `
    <div class = 'card'>
    <img src = '${bookFlight[i].image}' />    
     <h1> ${bookFlight[i].title} </h1>
     <p>  ${bookFlight[i].paragraph} </p>
     </div>
    `;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  for (let i = 0; i < tourOffers.length; i++) {
    secondArea.innerHTML += `
    <div class = 'card1'>
    <img src = '${tourOffers[i].image}' />  
    <h3> ${tourOffers[i].title} </h3>  
    <p> ${tourOffers[i].paragraph} </p>
    <p> ${tourOffers[i].price} </p>
     </div>
     
     
     
    `;
  }
});
