import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('first-star', 'Integration | Component | first star', {
  integration: true
});

test('should move 5', function(assert) {
  let testInput = "R2, L3";
  let expectedResult = 5;
  assert.expect(2);

  this.render(hbs`{{first-star}}`);

  this.$('input').val(testInput);
  this.$('input').change();

  assert.equal(this.$('input').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Distance Travelled: " + expectedResult);
});
test('should move 2', function(assert) {
  let testInput = "R2, R2, R2";
  let expectedResult = 2;
  assert.expect(2);

  this.render(hbs`{{first-star}}`);

  this.$('input').val(testInput);
  this.$('input').change();

  assert.equal(this.$('input').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Distance Travelled: " + expectedResult);
});
test('should move 12', function(assert) {
  let testInput = "R5, L5, R5, R3";
  let expectedResult = 12;
  assert.expect(2);

  this.render(hbs`{{first-star}}`);

  this.$('input').val(testInput);
  this.$('input').change();

  assert.equal(this.$('input').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Distance Travelled: " + expectedResult);
});
