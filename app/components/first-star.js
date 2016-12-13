import Ember from 'ember';

export default Ember.Component.extend({
  commands: "",
  distanceTravelled: "",
  position: {x: 0, y: 0},
  orientationEnum: Object.freeze({NORTH: 'North', EAST: 'East', SOUTH: 'South', WEST: 'West'}),
  orientation: 'North',

  actions: {
    turn(direction) {
      // could also use a circular linked list for direction?
      let orientationEnum = this.get('orientationEnum');
      let orientation = this.get('orientation');
      switch (orientation) {
        case orientationEnum.NORTH:
          if ("L" === direction) {
            orientation = orientationEnum.WEST;
          } else {
            orientation = orientationEnum.EAST;
          }
          break;
        case orientationEnum.EAST:
          if ("L" === direction) {
            orientation = orientationEnum.NORTH;
          } else {
            orientation = orientationEnum.SOUTH;
          }
          break;
        case orientationEnum.SOUTH:
          if ("L" === direction) {
            orientation = orientationEnum.EAST;
          } else {
            orientation = orientationEnum.WEST;
          }
          break;
        case orientationEnum.WEST:
          if ("L" === direction) {
            orientation = orientationEnum.SOUTH;
          } else {
            orientation = orientationEnum.NORTH;
          }
          break;
        default:
          break;
      }
      this.set('orientation', orientation);
    },
    move(command) {
      let orientationEnum = this.get('orientationEnum');
      this.send('turn', command.substring(0,1));
      let orientation = this.get('orientation');
      let blocksToMove = parseInt(command.substring(1));
      switch (orientation) {
        case orientationEnum.NORTH:
          for (let i = 0; i < blocksToMove; i++) {
            this.send('changePosition', 0, 1);
          }
          // this.send('changePosition', 0, blocksToMove);
          break;
        case orientationEnum.EAST:
          for (let i = 0; i < blocksToMove; i++) {
            this.send('changePosition', 1, 0);
          }
          // this.send('changePosition', blocksToMove, 0);
          break;
        case orientationEnum.SOUTH:
          for (let i = 0; i < blocksToMove; i++) {
            this.send('changePosition', 0, -1);
          }
          // this.send('changePosition', 0, -1 * blocksToMove);
          break;
        case orientationEnum.WEST:
          for (let i = 0; i < blocksToMove; i++) {
            this.send('changePosition', -1, 0);
          }
          // this.send('changePosition', -1 * blocksToMove, 0);
          break;
        default:
          break;
      }
    },
    changePosition(x, y) {
      let position = this.get('position');
      position.x = position.x + x;
      position.y = position.y + y;
      this.send('afterChangePosition');
    },
    afterChangePosition() {
    },
    solve() {
      // configure
      let position = this.get('position');
      position.x = 0;
      position.y = 0;
      this.set('position', position);
      this.send('afterChangePosition');

      // process
      let commandArray = this.get('commands').split(", ");
      commandArray.forEach((command) => {
        this.send('move', command);
      });

      // result
      position = this.get('position');
      let answer = Math.abs(position.x) + Math.abs(position.y);
      this.set('distanceTravelled', answer);
    }
  }
});
