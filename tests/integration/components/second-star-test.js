import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('second-star', 'Integration | Component | second star', {
  integration: true
});

test('first place visted twice is 4 away', function(assert) {
  let testInput = "R8, R4, R4, R8";
  let expectedResult = 4;
  assert.expect(2);

  this.render(hbs`{{second-star}}`);

  this.$('input').val(testInput);
  this.$('input').change();

  assert.equal(this.$('input').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "First Block Visted Twice is this far away: " + expectedResult);
});
