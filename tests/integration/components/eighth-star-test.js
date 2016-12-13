import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('eighth-star', 'Integration | Component | eighth star', {
  integration: true
});

test('find sum of real room sector ids', function(assert) {
  let testInput = "kloqemlib-lygbzq-pqloxdb-991[lbqod]";
  let expectedResult = 991;
  assert.expect(2);

  this.render(hbs`{{eighth-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "North Pole Sector ID: " + expectedResult);
});
