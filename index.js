let firstCard = 2;
let secondCard = 11;
cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEl = document.getElementById('cards-el');

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  sumEl.textContent = 'Sum: ' + sum;
  if (sum < 21) {
    message = 'Do you want to draw another card?';
  } else if (sum === 21) {
    message = "You've got Blackjack.";
    hasBlackjack = true;
  } else {
    message = 'Sorry, you lost.';
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  let card = 4;
  sum += card;
  renderGame();
}