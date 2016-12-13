import Ember from 'ember';

export default Ember.Component.extend({
  commands: "",
  code: "",
  keyPad: Object.freeze({ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, SIX: 6, SEVEN: 7, EIGHT: 8, NINE: 9,
  properties: {1: {up: 1, left: 1, right: 2, down: 4},
                2: {up: 2, left: 1, right: 3, down: 5},
                3: {up: 3, left: 2, right: 3, down: 6},
                4: {up: 1, left: 4, right: 5, down: 7},
                5: {up: 2, left: 4, right: 6, down: 8},
                6: {up: 3, left: 5, right: 6, down: 9},
                7: {up: 4, left: 7, right: 8, down: 7},
                8: {up: 5, left: 7, right: 9, down: 8},
                9: {up: 6, left: 8, right: 9, down: 9}}}),
  actions: {
    solve() {
      let keyPad = this.get('keyPad');
      let position = keyPad.FIVE;
      let lines = this.get('commands').split(/\n/);
      lines.forEach((line) => {
        let directions = line.split("");
        directions.forEach((direction, idx, array) => {
          switch (direction) {
            case "U":
              position = keyPad.properties[position].up;
              break;
            case "L":
              position = keyPad.properties[position].left;
              break;
            case "R":
              position = keyPad.properties[position].right;
              break;
            case "D":
              position = keyPad.properties[position].down;
              break;
            default:
              break;
          }
          if (idx === array.length - 1) {
            this.set('code', this.get('code') + position);
          }
        });
      });
    }
  }
});
