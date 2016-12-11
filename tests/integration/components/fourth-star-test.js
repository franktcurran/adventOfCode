import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fourth-star', 'Integration | Component | fourth star', {
  integration: true
});

test('find a code', function(assert) {
  let testInput = "ULL\nRRDDD\nLURDL\nUUUUD";
  let expectedResult = "5DB3";
  assert.expect(2);

  this.render(hbs`{{fourth-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Code: " + expectedResult);
});
