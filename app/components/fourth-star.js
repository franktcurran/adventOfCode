import ThirdStar from './third-star';

export default ThirdStar.extend({
  keyPad: Object.freeze({ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5,
    SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9,
    A: "A", B: "B", C: "C", D: "D",
    properties: {1: {up: 1, left: 1, right: 1, down: 3},
                  2: {up: 2, left: 2, right: 3, down: 6},
                  3: {up: 1, left: 2, right: 4, down: 7},
                  4: {up: 4, left: 3, right: 4, down: 8},
                  5: {up: 5, left: 5, right: 6, down: 5},
                  6: {up: 2, left: 5, right: 7, down: "A"},
                  7: {up: 3, left: 6, right: 8, down: "B"},
                  8: {up: 4, left: 7, right: 9, down: "C"},
                  9: {up: 9, left: 8, right: 9, down: 9},
                  "A": {up: 6, left: "A", right: "B", down: "A"},
                  "B": {up: 7, left: "A", right: "C", down: "D"},
                  "C": {up: 8, left: "B", right: "C", down: "C"},
                  "D": {up: "B", left: "D", right: "D", down: "D"}}})
});
