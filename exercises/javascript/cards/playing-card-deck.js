// to execute the runnable code in this file, use the command
// `node cards/cards.js` from the command line positioned at
// the project's root directory.

//Abstraction
// const PlayingCard = require("./playing-card.js").PlayingCard;
// const Suits = require("./suits").Suits;

// class PlayingCardDeck {
//   constructor() {
//     this.cards = this.setCards();
//   }

//   setCards() {
//     var cards = [];

//     for (var i = 0; i < Suits.length; i++) {
//       for (var j = 1; j <= 13; j++) {
//         var card = new PlayingCard(Suits[i], j);
//         cards.push(card);
//       }
//     }

//     return cards;
//   }

//   getCards() {
//     var result = [];

//     for (var i = 0; i < this.cards.length; i++) {
//       const card = this.cards[i];
//       result.push(card.toString());
//     }

//     return result;
//   }
  
//   shuffle() {
//     for (let i = 0; i < this.cards.length; i++) {
//       const indexA = Math.floor(Math.random() * i);
//       const indexB = i;

//       const valueA = this.cards[indexA];
//       const valueB = this.cards[indexB];

//       this.cards[indexA] = valueB;
//       this.cards[indexB] = valueA;
//     }
//   }

//   deal() {
//     const card = this.cards.splice(0, 1)[0];
//     return card;
//   }
// }

// const cards = new PlayingCardDeck();
// const deckInOrder = cards.getCards();
// // for (const card of deckInOrder) {
// //   console.log(card);
// // }

// module.exports = {
//   PlayingCardDeck,
// };

//Inheritence
const PlayingCard = require("./playing-card.js").PlayingCard;
const Deck = require("./deck.js").Deck;
const Suits = require("./suits").Suits;

class PlayingCardDeck extends Deck {
  constructor() {
    super();
    this.cards = this.setCards();
  }

  setCards() {
    var cards = [];

    for (var i = 0; i < Suits.length; i++) {
      for (var j = 1; j < 14; j++) {
        var card = new PlayingCard(Suits[i], j);
        cards.push(card);
      }
    }

    return cards;
  }
}

const cards = new PlayingCardDeck();
const deckInOrder = cards.getCards();

module.exports = {
  PlayingCardDeck,
};
