/* globals test, tests, testRunCount, div */
/* exported describe, tests, testRunCount */

const describe = (event, name) => {
    event.preventDefault();

    console.log('%c%s',
        'color: black; background: yellow; font-size: 2em; font-family: helvetica',
        `   Test Suite: ${name}   `);
    
    test.run();

    testRunCount = 1;
};

const clearTests = event => {
    event.preventDefault();

    tests = [];
    div.innerHTML = '';
}
