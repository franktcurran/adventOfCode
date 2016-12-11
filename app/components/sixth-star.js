import Ember from 'ember';
import FifthStar from './fifth-star';

export default FifthStar.extend({
  getTriangles: function(commands) {
    let lines = commands.split("\n");
    let triangles = Ember.A([]);
    let triangleSet = Ember.A([]);
    lines.forEach((line, idx) => {
      let sides = line.trim().split(/\s+/);
      if (idx % 3 === 0) {
        // new triangles
        triangleSet = Ember.A([]);
        sides.forEach(() => {
          triangleSet.push("");
        });
      }
      sides.forEach((side, idx) => {
        triangleSet[idx] = triangleSet[idx] + " " + side;
      });
      if ((idx + 1) % 3 === 0) {
        triangleSet.forEach((triangle) => {
          triangles.push(triangle.trim());
        });
      }
    });
    return triangles;
  }
});
