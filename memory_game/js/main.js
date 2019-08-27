console.log("Up and running!");

// var cardOne = "Queen";
// var cardTwo = "Queen";
// var cardThree = "King";
// var cardFour = "King";
// console.log("User flipped " + cardOne);
// console.log("User flipped " + cardThree);

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
function checkForMatch() {
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
      alert("Sorry, try again.");
    }
  }
}

function flipCard (cardId) {
// var cardOne = cards[0];
// var cardTwo = cards[2];
// cardsInPlay.push(cardOne);
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardsInPlay)

  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}

flipCard(0);
flipCard(2);
