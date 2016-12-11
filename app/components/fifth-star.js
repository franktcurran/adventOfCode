import Ember from 'ember';

export default Ember.Component.extend({
  commands: "",
  possibleTriangles: Ember.A([]),
  possibleTrianglesCount: 0,
  getTriangles: function(commands) {
    return commands.split("\n");
  },
  actions: {
    solve() {
      let potentialTriangles = this.get('getTriangles')(this.get('commands'));
      potentialTriangles.forEach((potentialTriangle) => {
        console.log(potentialTriangle);
        let sides = potentialTriangle.trim().split(/\s+/);
        let notPossible = sides.any((side, idx, array) => {
          let sum = 0;
          for(let i = 0; i < 3; i++) {
            if (i !== idx) {
              sum = sum + parseInt(array[i]);
            }
          }
          if (side >= sum) {
            console.log("Not possible! ");
            console.log("Side: " + side + ", Sum: " + sum);
            return true;
          } else {
            return false;
          }
        });
        if (!notPossible) {
          this.get('possibleTriangles').push(potentialTriangle);
          this.set('possibleTrianglesCount', this.get('possibleTrianglesCount') + 1);
        }
      });
    }
  }
});
