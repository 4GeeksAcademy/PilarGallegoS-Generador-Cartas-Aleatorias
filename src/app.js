import "bootstrap";
import "./style.css";
const symbols = ["♥", "♦", "♣", "♠"];
const numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const topSymbol = document.getElementById("top-symbol");
const number = document.getElementById("number");
const bottomSymbol = document.getElementById("bottom-symbol");

function generateCard() {
  const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];

  topSymbol.textContent = randomSymbol;
  number.textContent = randomNumber;
  bottomSymbol.textContent = randomSymbol;

  if (randomSymbol === "♥" || randomSymbol === "♦") {
    topSymbol.style.color = "red";
    number.style.color = "red";
    bottomSymbol.style.color = "red";
  } else {
    topSymbol.style.color = "black";
    number.style.color = "black";
    bottomSymbol.style.color = "black";
  }
}
const seconds = 10;
const secondsToMiliseconds = seconds * 1000;
const intervalId = setInterval(generateCard, secondsToMiliseconds);

generateCard();
const card = document.getElementById("card");
card.addEventListener("click", generateCard);

card.addEventListener("mouseover", function() {
  card.style.cursor = "pointer";
});

card.addEventListener("mouseout", function() {
  card.style.cursor = "default";
});
const originalWidth = card.style.width || "250px";
const originalHeight = card.style.height || "350px";

const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
function cardSize() {
  const newWidth = widthInput.value;
  const newHeigth = heightInput.value;
  if (newWidth > 0) {
    card.style.width = `${newWidth}px`;
  } else {
    card.style.width = originalWidth;
  }
  if (newHeigth > 0) {
    card.style.height = `${newHeigth}px`;
  } else {
    card.style.height = originalHeight;
  }
}
widthInput.addEventListener("keypress", function(e) {
  if (e.code === "Enter") {
    cardSize();
  }
});
heightInput.addEventListener("keypress", function(e) {
  if (e.code === "Enter") {
    cardSize();
  }
});
