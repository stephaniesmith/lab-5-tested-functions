/* globals test, assert, calc, tests, testRunCount */
/* exported describe */

const describe = (event, name) => {
    event.preventDefault();

    console.log('%c%s',
        'color: black; background: yellow; font-size: 2em; font-family: helvetica',
        `   Test Suite: ${name}   `);

    test('adds two numbers', () => {
        const sum = calc.add(3, 4);
        assert.equal(sum, 7);
    });
    
    test('subtracts two numbers', () => {
        const diff = calc.subtract(7, 3);
        assert.equal(diff, 4);
    });
    
    test('multiplies two numbers', () => {
        const product = calc.multiply(2, 4);
        assert.equal(product, 8);
    });
    
    test('divides two numbers', () => {
        const quotient = calc.divide(6, 3);
        assert.equal(quotient, 2);
    });
    
    test.run();

    tests = [];
    testRunCount = 1;
};