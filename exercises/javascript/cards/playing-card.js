const suits = require('./suits.js').suits;

class PlayingCard {
    constructor (suit, faceValue){
        this.suit = suits[suit];

      switch (faceValue) {
        case 1:
            this.faceValue = "ace";
            break;
        case 11:
            this.faceValue = "jack";
            break;
        case 12:
            this.faceValue = "queen";
            break;
        case 13:
            this.faceValue = "king";
            break;
        default:
            this.faceValue = (faceValue).toString();
      }
    }
}

// const test = new PlayingCard(1,11);

// console.log(test);
// console.log(test.suit);
// console.log(test.faceValue);


module.exports = PlayingCard;