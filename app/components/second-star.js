import Ember from 'ember';
import FirstStar from './first-star';

export default FirstStar.extend({
  positions: Ember.A([]),
  firstBlockVistedTwiceDistance: "",
  actions: {
    afterChangePosition() {
      this.get('positions').push(JSON.stringify(this.get('position')));
      // debugger;
      let counter = {};
      this.get('positions').forEach((key) => {
        if (counter[key] === 1 && !this.get('firstBlockVistedTwiceDistance')) {
          // debugger;
          let position = JSON.parse(key);
          this.set('firstBlockVistedTwiceDistance', Math.abs(position.x) + Math.abs(position.y));
          return (counter[key] === 1);
        } else {
          // debugger;
          counter[key] = (counter[key] || 0) + 1;
        }
      });
    }
  }

});
