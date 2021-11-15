const PlayingCard = require("./playing-card.js");
// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.

class PlayingCardsDeck {
  constructor() {
    
  }

  getCards() {
    const result = []
    const deck = []
  
    for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 1; faceValue <= 13; faceValue++) {
        // Create new card
        const playingCard = new PlayingCard(suit, faceValue);
        // Add to the deck
        deck.push(playingCard);
      }
    }

    console.log(deck);
  
    let cardNumber = 0;
    for (let card of deck) {
      let faceValueName = card.faceValue;
  
      let suitName = card.suit;
      result[cardNumber] = faceValueName + " of " + suitName;
      cardNumber++;
    }
  
    return result;
  };
};

const cards = new PlayingCardsDeck();
const deckInOrder = cards.getCards();
for (const card of deckInOrder) {
  console.log(card);
}

module.exports = {
  PlayingCardsDeck
};