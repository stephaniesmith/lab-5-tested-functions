/* globals test, tests, testRunCount, div */
/* exported describe, tests, testRunCount */

const describe = (event, name) => {
    event.preventDefault();

    console.log('%c%s',
        'color: black; background: yellow; font-size: 2em; font-family: helvetica',
        `   Test Suite   `);
    
    test.run();
    const p = document.createElement('p');
    p.innerText = 'Open the console to see results.';
    div.appendChild(p);

    testRunCount = 1;
};

const clearTests = event => {
    event.preventDefault();

    tests = [];
    div.innerHTML = '';
}
