import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('seventh-star', 'Integration | Component | seventh star', {
  integration: true
});

test('find sum of real room sector ids', function(assert) {
  let testInput = "aaaaa-bbb-z-y-x-123[abxyz]\n" +
                  "a-b-c-d-e-f-g-h-987[abcde]\n" +
                  "not-a-real-room-404[oarel]\n" +
                  "totally-real-room-200[decoy]";
  let expectedResult = 1514;
  assert.expect(2);

  this.render(hbs`{{seventh-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Sum of Real Room Sector IDs: " + expectedResult);
});
