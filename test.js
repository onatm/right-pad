var rightpad = require("./");
var test = require("tape");

test('right pad', function (assert) {
  assert.plan(4);
  assert.strictEqual(rightpad('foo', 5), 'foo  ');
  assert.strictEqual(rightpad('foobar', 6), 'foobar');
  assert.strictEqual(rightpad(1, 2, 0), '10');
  assert.strictEqual(rightpad(1, 2, '-'), '1-');
  assert.strictEqual(new RegExp(/foo{1}(.)\1+/ ).test(rightpad('foo',6,true)), true);
});
