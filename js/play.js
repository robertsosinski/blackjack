// All potential actions that can be taken
let action = [
  'stand',    // 0
  'hit',      // 1
  'double',   // 2
  'split',    // 3
  'blackjack' // 4
];

// Used for hard hands, when the player hand does not have an Ace (11)
let hardStrategy = [
// dealer card V
// 2, 3, 4, 5, 6, 7, 8, 9, T, A
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 5 <- player cards (both cards together are worth)
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 6
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 7
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], // 8
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1], // 9
  [2, 2, 2, 2, 2, 2, 2, 2, 1, 1], // 10
  [2, 2, 2, 2, 2, 2, 2, 2, 2, 1], // 11
  [1, 1, 0, 0, 0, 1, 1, 1, 1, 1], // 12
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 13
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 14
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 15
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1], // 16
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 17
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 18
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 19
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 20
];

// Used for soft hands, when the player hand has an Ace (11)
let softStrategy = [
// dealer card V
// 2, 3, 4, 5, 6, 7, 8, 9, T, A
  [1, 1, 1, 2, 2, 1, 1, 1, 1, 1], // 11,2 <- player cards (one 11 card and one other card)
  [1, 1, 1, 2, 2, 1, 1, 1, 1, 1], // 11,3
  [1, 1, 2, 2, 2, 1, 1, 1, 1, 1], // 11,4
  [1, 1, 2, 2, 2, 1, 1, 1, 1, 1], // 11,5
  [1, 2, 2, 2, 2, 1, 1, 1, 1, 1], // 11,6
  [0, 2, 2, 2, 2, 0, 0, 1, 1, 1], // 11,7
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11,8
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 11,9
  [4, 4, 4, 4, 4, 4, 4, 4, 4, 4], // 11,10 <- blackjack
];

// Used for split hands, when the player hand as two cards with the same value,
// such as two 3 cards, two 10 cards, or two Ace cards.
let splitStrategy = [
// dealer card V
// 2, 3, 4, 5, 6, 7, 8, 9, T, A
  [3, 3, 3, 3, 3, 3, 1, 1, 1, 1], // 2s <- player cards (both cards are the same)
  [3, 3, 3, 3, 3, 3, 1, 1, 1, 1], // 3s
  [1, 1, 1, 3, 3, 1, 1, 1, 1, 1], // 4s
  [2, 2, 2, 2, 2, 2, 2, 2, 1, 1], // 5s
  [3, 3, 3, 3, 3, 1, 1, 1, 1, 1], // 6s
  [3, 3, 3, 3, 3, 3, 1, 1, 1, 1], // 7s
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // 8s
  [3, 3, 3, 3, 3, 0, 3, 3, 0, 0], // 9s
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // 10s
  [3, 3, 3, 3, 3, 3, 3, 3, 3, 3], // 11s
];

/**
* Provides the best action for a blackjack hand.
* Example 1: blackjack(2, 7, 9)   -> 'hit'
* Example 2: blackjack(3, 8, 6)   -> 'double'
* Example 3: blackjack(8, 8, 8)   -> 'split'
* Example 4: blackjack(11, 11, 9) -> 'blackjack'
*
* @param {Number} one  the player's first card.
* @param {Number} two  the player's second card.
* @param {Number} deal the dealer's stud card.
*
* @return {String} the appropiate action to take, see `action` array on line #2 above.
*/
function blackjack(one, two, deal) {
  var play, pidx;
  let didx = deal - 2;

  // use split strategy
  if (one === two) {
    play = splitStrategy;
    pidx = one - 2;
  } else {
    // use soft strategy
    if (one === 11 || two == 11) {
      play = softStrategy;
      
      if (one === 11) {
        pidx = two - 2;
      } else {
        pidx = one - 2;
      }
    
    // use hard strategy
    } else {
      play = hardStrategy;
      pidx = (one + two) - 5;
    }
  }
    
  return action[play[pidx][didx]];
}

exports.blackjack = blackjack;