let firstCard = 12;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

function startGame() {
  if (sum < 21) {
    message = 'Do you want to draw another card?';
  } else if (sum === 21) {
    message = "Woohoo! You've won!";
    hasBlackjack = true;
  } else {
    message = 'Sorry, you lost!';
    isAlive = false;
  }
  console.log(message)
}

