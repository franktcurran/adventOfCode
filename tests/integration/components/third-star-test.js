import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('third-star', 'Integration | Component | third star', {
  integration: true
});

test('find a code', function(assert) {
  let testInput = "ULL\nRRDDD\nLURDL\nUUUUD";
  let expectedResult = 1985;
  assert.expect(2);

  this.render(hbs`{{third-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Code: " + expectedResult);
});
