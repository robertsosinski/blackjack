let {strictEqual} = require('assert');

let {blackjack} = require('./play.js');

// blackjack
strictEqual(blackjack(11, 10, 2),  'blackjack');
strictEqual(blackjack(10, 11, 3),  'blackjack');
strictEqual(blackjack(11, 10, 4),  'blackjack');
strictEqual(blackjack(10, 11, 5),  'blackjack');
strictEqual(blackjack(11, 10, 6),  'blackjack');
strictEqual(blackjack(10, 11, 7),  'blackjack');
strictEqual(blackjack(11, 10, 8),  'blackjack');
strictEqual(blackjack(10, 11, 9),  'blackjack');
strictEqual(blackjack(11, 10, 10), 'blackjack');
strictEqual(blackjack(10, 11, 11), 'blackjack');

// hard hands
strictEqual(blackjack(2, 3, 2),  'hit');
strictEqual(blackjack(3, 2, 3),  'hit');
strictEqual(blackjack(2, 3, 4),  'hit');
strictEqual(blackjack(3, 2, 5),  'hit');
strictEqual(blackjack(2, 3, 6),  'hit');
strictEqual(blackjack(3, 2, 7),  'hit');
strictEqual(blackjack(2, 3, 8),  'hit');
strictEqual(blackjack(3, 2, 9),  'hit');
strictEqual(blackjack(2, 3, 10), 'hit');
strictEqual(blackjack(3, 2, 11), 'hit');

strictEqual(blackjack(2, 4, 2),  'hit');
strictEqual(blackjack(4, 2, 3),  'hit');
strictEqual(blackjack(2, 4, 4),  'hit');
strictEqual(blackjack(4, 2, 5),  'hit');
strictEqual(blackjack(2, 4, 6),  'hit');
strictEqual(blackjack(4, 2, 7),  'hit');
strictEqual(blackjack(2, 4, 8),  'hit');
strictEqual(blackjack(4, 2, 9),  'hit');
strictEqual(blackjack(2, 4, 10), 'hit');
strictEqual(blackjack(4, 2, 11), 'hit');

strictEqual(blackjack(2, 5, 2),  'hit');
strictEqual(blackjack(3, 4, 3),  'hit');
strictEqual(blackjack(4, 3, 4),  'hit');
strictEqual(blackjack(5, 2, 5),  'hit');
strictEqual(blackjack(4, 3, 6),  'hit');
strictEqual(blackjack(3, 4, 7),  'hit');
strictEqual(blackjack(2, 5, 8),  'hit');
strictEqual(blackjack(3, 4, 9),  'hit');
strictEqual(blackjack(4, 2, 10), 'hit');
strictEqual(blackjack(5, 2, 11), 'hit');

strictEqual(blackjack(2, 6, 2),  'hit');
strictEqual(blackjack(3, 5, 3),  'hit');
strictEqual(blackjack(5, 3, 4),  'hit');
strictEqual(blackjack(6, 2, 5),  'hit');
strictEqual(blackjack(5, 3, 6),  'hit');
strictEqual(blackjack(3, 5, 7),  'hit');
strictEqual(blackjack(2, 6, 8),  'hit');
strictEqual(blackjack(3, 5, 9),  'hit');
strictEqual(blackjack(5, 3, 10), 'hit');
strictEqual(blackjack(6, 2, 11), 'hit');

strictEqual(blackjack(2, 7, 2),  'hit');
strictEqual(blackjack(3, 6, 3),  'double');
strictEqual(blackjack(4, 5, 4),  'double');
strictEqual(blackjack(5, 4, 5),  'double');
strictEqual(blackjack(6, 3, 6),  'double');
strictEqual(blackjack(7, 2, 7),  'hit');
strictEqual(blackjack(6, 3, 8),  'hit');
strictEqual(blackjack(5, 4, 9),  'hit');
strictEqual(blackjack(4, 5, 10), 'hit');
strictEqual(blackjack(3, 6, 11), 'hit');

strictEqual(blackjack(2, 8, 2),  'double');
strictEqual(blackjack(3, 7, 3),  'double');
strictEqual(blackjack(4, 6, 4),  'double');
strictEqual(blackjack(6, 4, 5),  'double');
strictEqual(blackjack(7, 3, 6),  'double');
strictEqual(blackjack(8, 2, 7),  'double');
strictEqual(blackjack(7, 3, 8),  'double');
strictEqual(blackjack(6, 4, 9),  'double');
strictEqual(blackjack(4, 6, 10), 'hit');
strictEqual(blackjack(3, 7, 11), 'hit');

strictEqual(blackjack(2, 9, 2),  'double');
strictEqual(blackjack(3, 8, 3),  'double');
strictEqual(blackjack(4, 7, 4),  'double');
strictEqual(blackjack(5, 6, 5),  'double');
strictEqual(blackjack(6, 5, 6),  'double');
strictEqual(blackjack(7, 4, 7),  'double');
strictEqual(blackjack(8, 3, 8),  'double');
strictEqual(blackjack(9, 2, 9),  'double');
strictEqual(blackjack(8, 3, 10), 'double');
strictEqual(blackjack(7, 4, 11), 'hit');

strictEqual(blackjack(2,  10, 2),  'hit');
strictEqual(blackjack(3,  9,  3),  'hit');
strictEqual(blackjack(4,  8,  4),  'stand');
strictEqual(blackjack(5,  7,  5),  'stand');
strictEqual(blackjack(7,  5,  6),  'stand');
strictEqual(blackjack(8,  4,  7),  'hit');
strictEqual(blackjack(9,  3,  8),  'hit');
strictEqual(blackjack(10, 2,  9),  'hit');
strictEqual(blackjack(9,  3,  10), 'hit');
strictEqual(blackjack(8,  4,  11), 'hit');

strictEqual(blackjack(3,  10, 2),  'stand');
strictEqual(blackjack(4,  9,  3),  'stand');
strictEqual(blackjack(5,  8,  4),  'stand');
strictEqual(blackjack(6,  7,  5),  'stand');
strictEqual(blackjack(7,  6,  6),  'stand');
strictEqual(blackjack(8,  5,  7),  'hit');
strictEqual(blackjack(9,  4,  8),  'hit');
strictEqual(blackjack(10, 3,  9),  'hit');
strictEqual(blackjack(9,  4,  10), 'hit');
strictEqual(blackjack(8,  5,  11), 'hit');

strictEqual(blackjack(4,  10, 2),  'stand');
strictEqual(blackjack(5,  9,  3),  'stand');
strictEqual(blackjack(6,  8,  4),  'stand');
strictEqual(blackjack(8,  6,  5),  'stand');
strictEqual(blackjack(9,  5,  6),  'stand');
strictEqual(blackjack(10, 4,  7),  'hit');
strictEqual(blackjack(9,  5,  8),  'hit');
strictEqual(blackjack(8,  6,  9),  'hit');
strictEqual(blackjack(6,  8,  10), 'hit');
strictEqual(blackjack(5,  9,  11), 'hit');

strictEqual(blackjack(5,  10, 2),  'stand');
strictEqual(blackjack(6,  9,  3),  'stand');
strictEqual(blackjack(7,  8,  4),  'stand');
strictEqual(blackjack(8,  7,  5),  'stand');
strictEqual(blackjack(9,  6,  6),  'stand');
strictEqual(blackjack(10, 5,  7),  'hit');
strictEqual(blackjack(9,  6,  8),  'hit');
strictEqual(blackjack(8,  7,  9),  'hit');
strictEqual(blackjack(7,  8,  10), 'hit');
strictEqual(blackjack(6,  9,  11), 'hit');

strictEqual(blackjack(6,  10, 2),  'stand');
strictEqual(blackjack(7,  9,  3),  'stand');
strictEqual(blackjack(9,  7,  4),  'stand');
strictEqual(blackjack(10, 6,  5),  'stand');
strictEqual(blackjack(9,  7,  6),  'stand');
strictEqual(blackjack(7,  9,  7),  'hit');
strictEqual(blackjack(6,  10, 8),  'hit');
strictEqual(blackjack(7,  9,  9),  'hit');
strictEqual(blackjack(9,  7,  10), 'hit');
strictEqual(blackjack(10, 6,  11), 'hit');

strictEqual(blackjack(7,  10, 2),  'stand');
strictEqual(blackjack(8,  9,  3),  'stand');
strictEqual(blackjack(9,  8,  4),  'stand');
strictEqual(blackjack(10, 7,  5),  'stand');
strictEqual(blackjack(9,  8,  6),  'stand');
strictEqual(blackjack(8,  9,  7),  'stand');
strictEqual(blackjack(7,  10, 8),  'stand');
strictEqual(blackjack(8,  9,  9),  'stand');
strictEqual(blackjack(9,  8,  10), 'stand');
strictEqual(blackjack(10, 7,  11), 'stand');

strictEqual(blackjack(8,  10, 2),  'stand');
strictEqual(blackjack(10, 8,  3),  'stand');
strictEqual(blackjack(8,  10, 4),  'stand');
strictEqual(blackjack(10, 8,  5),  'stand');
strictEqual(blackjack(8,  10, 6),  'stand');
strictEqual(blackjack(10, 8,  7),  'stand');
strictEqual(blackjack(8,  10, 8),  'stand');
strictEqual(blackjack(10, 8,  9),  'stand');
strictEqual(blackjack(8,  10, 10), 'stand');
strictEqual(blackjack(10, 8,  11), 'stand');

strictEqual(blackjack(9,  10, 2),  'stand');
strictEqual(blackjack(10, 9,  3),  'stand');
strictEqual(blackjack(9,  10, 4),  'stand');
strictEqual(blackjack(10, 9,  5),  'stand');
strictEqual(blackjack(9,  10, 6),  'stand');
strictEqual(blackjack(10, 9,  7),  'stand');
strictEqual(blackjack(9,  10, 8),  'stand');
strictEqual(blackjack(10, 9,  9),  'stand');
strictEqual(blackjack(9,  10, 10), 'stand');
strictEqual(blackjack(10, 9,  11), 'stand');

// soft hands
strictEqual(blackjack(11, 2,  2),  'hit');
strictEqual(blackjack(2,  11, 3),  'hit');
strictEqual(blackjack(11, 2,  4),  'hit');
strictEqual(blackjack(2,  11, 5),  'double');
strictEqual(blackjack(11, 2,  6),  'double');
strictEqual(blackjack(2,  11, 7),  'hit');
strictEqual(blackjack(11, 2,  8),  'hit');
strictEqual(blackjack(2,  11, 9),  'hit');
strictEqual(blackjack(11, 2,  10), 'hit');
strictEqual(blackjack(2,  11, 11), 'hit');

strictEqual(blackjack(11, 3,  2),  'hit');
strictEqual(blackjack(3,  11, 3),  'hit');
strictEqual(blackjack(11, 3,  4),  'hit');
strictEqual(blackjack(3,  11, 5),  'double');
strictEqual(blackjack(11, 3,  6),  'double');
strictEqual(blackjack(3,  11, 7),  'hit');
strictEqual(blackjack(11, 3,  8),  'hit');
strictEqual(blackjack(3,  11, 9),  'hit');
strictEqual(blackjack(11, 3,  10), 'hit');
strictEqual(blackjack(3,  11, 11), 'hit');

strictEqual(blackjack(11, 4,  2),  'hit');
strictEqual(blackjack(4,  11, 3),  'hit');
strictEqual(blackjack(11, 4,  4),  'double');
strictEqual(blackjack(4,  11, 5),  'double');
strictEqual(blackjack(11, 4,  6),  'double');
strictEqual(blackjack(4,  11, 7),  'hit');
strictEqual(blackjack(11, 4,  8),  'hit');
strictEqual(blackjack(4,  11, 9),  'hit');
strictEqual(blackjack(11, 4,  10), 'hit');
strictEqual(blackjack(4,  11, 11), 'hit');

strictEqual(blackjack(11, 5,  2),  'hit');
strictEqual(blackjack(5,  11, 3),  'hit');
strictEqual(blackjack(11, 5,  4),  'double');
strictEqual(blackjack(5,  11, 5),  'double');
strictEqual(blackjack(11, 5,  6),  'double');
strictEqual(blackjack(5,  11, 7),  'hit');
strictEqual(blackjack(11, 5,  8),  'hit');
strictEqual(blackjack(5,  11, 9),  'hit');
strictEqual(blackjack(11, 5,  10), 'hit');
strictEqual(blackjack(5,  11, 11), 'hit');

strictEqual(blackjack(11, 6,  2),  'hit');
strictEqual(blackjack(6,  11, 3),  'double');
strictEqual(blackjack(11, 6,  4),  'double');
strictEqual(blackjack(6,  11, 5),  'double');
strictEqual(blackjack(11, 6,  6),  'double');
strictEqual(blackjack(6,  11, 7),  'hit');
strictEqual(blackjack(11, 6,  8),  'hit');
strictEqual(blackjack(6,  11, 9),  'hit');
strictEqual(blackjack(11, 6,  10), 'hit');
strictEqual(blackjack(6,  11, 11), 'hit');

strictEqual(blackjack(11, 7,  2),  'stand');
strictEqual(blackjack(7,  11, 3),  'double');
strictEqual(blackjack(11, 7,  4),  'double');
strictEqual(blackjack(7,  11, 5),  'double');
strictEqual(blackjack(11, 7,  6),  'double');
strictEqual(blackjack(7,  11, 7),  'stand');
strictEqual(blackjack(11, 7,  8),  'stand');
strictEqual(blackjack(7,  11, 9),  'hit');
strictEqual(blackjack(11, 7,  10), 'hit');
strictEqual(blackjack(7,  11, 11), 'hit');

strictEqual(blackjack(11, 8,  2),  'stand');
strictEqual(blackjack(8,  11, 3),  'stand');
strictEqual(blackjack(11, 8,  4),  'stand');
strictEqual(blackjack(8,  11, 5),  'stand');
strictEqual(blackjack(11, 8,  6),  'stand');
strictEqual(blackjack(8,  11, 7),  'stand');
strictEqual(blackjack(11, 8,  8),  'stand');
strictEqual(blackjack(8,  11, 9),  'stand');
strictEqual(blackjack(11, 8,  10), 'stand');
strictEqual(blackjack(8,  11, 11), 'stand');

strictEqual(blackjack(11, 9,  2),  'stand');
strictEqual(blackjack(9,  11, 3),  'stand');
strictEqual(blackjack(11, 9,  4),  'stand');
strictEqual(blackjack(9,  11, 5),  'stand');
strictEqual(blackjack(11, 9,  6),  'stand');
strictEqual(blackjack(9,  11, 7),  'stand');
strictEqual(blackjack(11, 9,  8),  'stand');
strictEqual(blackjack(9,  11, 9),  'stand');
strictEqual(blackjack(11, 9,  10), 'stand');
strictEqual(blackjack(9,  11, 11), 'stand');

// splits
strictEqual(blackjack(2, 2, 2),  'split');
strictEqual(blackjack(2, 2, 3),  'split');
strictEqual(blackjack(2, 2, 4),  'split');
strictEqual(blackjack(2, 2, 5),  'split');
strictEqual(blackjack(2, 2, 6),  'split');
strictEqual(blackjack(2, 2, 7),  'split');
strictEqual(blackjack(2, 2, 8),  'hit');
strictEqual(blackjack(2, 2, 9),  'hit');
strictEqual(blackjack(2, 2, 10), 'hit');
strictEqual(blackjack(2, 2, 11), 'hit');

strictEqual(blackjack(3, 3, 2),  'split');
strictEqual(blackjack(3, 3, 3),  'split');
strictEqual(blackjack(3, 3, 4),  'split');
strictEqual(blackjack(3, 3, 5),  'split');
strictEqual(blackjack(3, 3, 6),  'split');
strictEqual(blackjack(3, 3, 7),  'split');
strictEqual(blackjack(3, 3, 8),  'hit');
strictEqual(blackjack(3, 3, 9),  'hit');
strictEqual(blackjack(3, 3, 10), 'hit');
strictEqual(blackjack(3, 3, 11), 'hit');

strictEqual(blackjack(4, 4, 2),  'hit');
strictEqual(blackjack(4, 4, 3),  'hit');
strictEqual(blackjack(4, 4, 4),  'hit');
strictEqual(blackjack(4, 4, 5),  'split');
strictEqual(blackjack(4, 4, 6),  'split');
strictEqual(blackjack(4, 4, 7),  'hit');
strictEqual(blackjack(4, 4, 8),  'hit');
strictEqual(blackjack(4, 4, 9),  'hit');
strictEqual(blackjack(4, 4, 10), 'hit');
strictEqual(blackjack(4, 4, 11), 'hit');

strictEqual(blackjack(5, 5, 2),  'double');
strictEqual(blackjack(5, 5, 3),  'double');
strictEqual(blackjack(5, 5, 4),  'double');
strictEqual(blackjack(5, 5, 5),  'double');
strictEqual(blackjack(5, 5, 6),  'double');
strictEqual(blackjack(5, 5, 7),  'double');
strictEqual(blackjack(5, 5, 8),  'double');
strictEqual(blackjack(5, 5, 9),  'double');
strictEqual(blackjack(5, 5, 10), 'hit');
strictEqual(blackjack(5, 5, 11), 'hit');

strictEqual(blackjack(6, 6, 2),  'split');
strictEqual(blackjack(6, 6, 3),  'split');
strictEqual(blackjack(6, 6, 4),  'split');
strictEqual(blackjack(6, 6, 5),  'split');
strictEqual(blackjack(6, 6, 6),  'split');
strictEqual(blackjack(6, 6, 7),  'hit');
strictEqual(blackjack(6, 6, 8),  'hit');
strictEqual(blackjack(6, 6, 9),  'hit');
strictEqual(blackjack(6, 6, 10), 'hit');
strictEqual(blackjack(6, 6, 11), 'hit');

strictEqual(blackjack(7, 7, 2),  'split');
strictEqual(blackjack(7, 7, 3),  'split');
strictEqual(blackjack(7, 7, 4),  'split');
strictEqual(blackjack(7, 7, 5),  'split');
strictEqual(blackjack(7, 7, 6),  'split');
strictEqual(blackjack(7, 7, 7),  'split');
strictEqual(blackjack(7, 7, 8),  'hit');
strictEqual(blackjack(7, 7, 9),  'hit');
strictEqual(blackjack(7, 7, 10), 'hit');
strictEqual(blackjack(7, 7, 11), 'hit');

strictEqual(blackjack(8, 8, 2),  'split');
strictEqual(blackjack(8, 8, 3),  'split');
strictEqual(blackjack(8, 8, 4),  'split');
strictEqual(blackjack(8, 8, 5),  'split');
strictEqual(blackjack(8, 8, 6),  'split');
strictEqual(blackjack(8, 8, 7),  'split');
strictEqual(blackjack(8, 8, 8),  'split');
strictEqual(blackjack(8, 8, 9),  'split');
strictEqual(blackjack(8, 8, 10), 'split');
strictEqual(blackjack(8, 8, 11), 'split');

strictEqual(blackjack(9, 9, 2),  'split');
strictEqual(blackjack(9, 9, 3),  'split');
strictEqual(blackjack(9, 9, 4),  'split');
strictEqual(blackjack(9, 9, 5),  'split');
strictEqual(blackjack(9, 9, 6),  'split');
strictEqual(blackjack(9, 9, 7),  'stand');
strictEqual(blackjack(9, 9, 8),  'split');
strictEqual(blackjack(9, 9, 9),  'split');
strictEqual(blackjack(9, 9, 10), 'stand');
strictEqual(blackjack(9, 9, 11), 'stand');

strictEqual(blackjack(10, 10, 2),  'stand');
strictEqual(blackjack(10, 10, 3),  'stand');
strictEqual(blackjack(10, 10, 4),  'stand');
strictEqual(blackjack(10, 10, 5),  'stand');
strictEqual(blackjack(10, 10, 6),  'stand');
strictEqual(blackjack(10, 10, 7),  'stand');
strictEqual(blackjack(10, 10, 8),  'stand');
strictEqual(blackjack(10, 10, 9),  'stand');
strictEqual(blackjack(10, 10, 10), 'stand');
strictEqual(blackjack(10, 10, 11), 'stand');

strictEqual(blackjack(11, 11, 2),  'split');
strictEqual(blackjack(11, 11, 3),  'split');
strictEqual(blackjack(11, 11, 4),  'split');
strictEqual(blackjack(11, 11, 5),  'split');
strictEqual(blackjack(11, 11, 6),  'split');
strictEqual(blackjack(11, 11, 7),  'split');
strictEqual(blackjack(11, 11, 8),  'split');
strictEqual(blackjack(11, 11, 9),  'split');
strictEqual(blackjack(11, 11, 10), 'split');
strictEqual(blackjack(11, 11, 11), 'split');

console.log('passed');