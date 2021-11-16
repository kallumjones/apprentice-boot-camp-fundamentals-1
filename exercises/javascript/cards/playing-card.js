//Abstraction
// class PlayingCard {
//     constructor(suit, faceValue) {
//         this.suit = suit;
//         this.faceValue = this.getFaceValue(faceValue);
//     }

//     getFaceValue(faceValue) {
//         switch(faceValue) {
//             case 1:
//                 return "ace";
      
//             case 11:
//                 return "jack";
            
//             case 12:
//                 return "queen";
    
//             case 13:
//                 return "king";

//             default:
//                 return faceValue;
//         }
//     }

//     getValue() {
//         return this.faceValue;
//       }
    
//     toString() {
//         return `${this.faceValue} of ${this.suit}`;
//     }
// }

// module.exports = {
//     PlayingCard
// };

//Inhertience

const { Card } = require("./card.js");
class PlayingCard extends Card {
  constructor(suit, value) {
    super(value);
    this.suit = suit;
    this.value = this.getFaceValue(value);
  }

  getFaceValue(value) {
    switch (value) {
      case 1:
        return "ace";

      case 11:
        return "jack";

      case 12:
        return "queen";

      case 13:
        return "king";

      default:
        return value;
    }
  }

  toString() {
    return `${this.value} of ${this.suit}`;
  }
}

module.exports = {
  PlayingCard,
};
