import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('sixth-star', 'Integration | Component | sixth star', {
  integration: true
});

test('find good triangles', function(assert) {
  let testInput = "501 301 501\n" +
                  "102 302 502\n" +
                  "103 303 503\n" +
                  "201 401 601\n" +
                  "202 402 602\n" +
                  "203 403 603";
  let expectedResult = 5;
  assert.expect(2);

  this.render(hbs`{{sixth-star}}`);

  this.$('textarea').val(testInput);
  this.$('textarea').change();

  assert.equal(this.$('textarea').val(), testInput);

  this.$('button').click();
  assert.equal(this.$('#result').text(), "Possible Triangles: " + expectedResult);
});
