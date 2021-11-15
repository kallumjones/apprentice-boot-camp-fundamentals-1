const suits = require('./suits.js').suits;

class PlayingCard {
    constructor (suit, faceValue){
        this.suit = suits[suit];
        this.faceValue = faceValue;
    }
}

// const test = new PlayingCard(1,2);

// console.log(test);
// console.log(test.suit);
// console.log(test.faceValue);


module.exports = PlayingCard;