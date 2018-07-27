/* globals test, assert */
/* globals calc */

test('adds two numbers', function() {
    var sum = calc.add(3, 4);
    assert.equal(sum, 7);
});

test('subtracts two number', function() {
    var diff = calc.subtract(7, 3);
    assert.equal(diff, 4);
});

test('multiplies two numbers', function() {
    var product = calc.multiply(3, 4);
    assert.equal(product, 12);
});

test('divides two numbers', function() {
    var quotient = calc.divide(12, 3);
    assert.equal(quotient, 4);
});

test.run();