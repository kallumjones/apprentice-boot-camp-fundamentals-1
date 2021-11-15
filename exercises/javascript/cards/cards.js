const PlayingCard = require("./playing-card.js");
// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.

class PlayingCardsDeck {
  constructor() {
     this.deck = []

     for (let suit = 0; suit < 4; suit++) {
      for (let faceValue = 1; faceValue <= 13; faceValue++) {
        // Create new card
        const playingCard = new PlayingCard(suit, faceValue);
        // Add to the deck
        this.deck.push(playingCard);
      }
    }
  }

  getCards() {
    const result = [];
    for (let card of this.deck) {
      result.push(card.stringValue);
    }
    return result;
  };
};

const cards = new PlayingCardsDeck();
// console.log(PlayingCardsDeck);
// console.log(cards);
// console.log(cards.getCards());
const deckInOrder = cards.getCards();
for (const card of deckInOrder) {
  console.log(card);
}

module.exports = {
  PlayingCardsDeck
};