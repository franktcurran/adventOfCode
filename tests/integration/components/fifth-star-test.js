import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fifth-star', 'Integration | Component | fifth star', {
  integration: true
});

test('find a code', function(assert) {
  let testInput = "5 10 25";
  let expectedResult = 0;
  assert.expect(2);

  this.render(hbs`{{fifth-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Possible Triangles: " + expectedResult);
});
