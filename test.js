/* exported runTests, addTest */
/* globals calc, assert */

let tests = [];
let testRunCount = 1;
let testFn;
const div = document.getElementById('tests');

const test = (name) => {
    tests.push({
        name: name,
        testFn: testFn
    });
};

const addTest = (event) => {
    event.preventDefault();
    const numOne = parseInt(document.getElementById('numOne').value, 10);
    const numTwo = parseInt(document.getElementById('numTwo').value, 10);
    const answer = parseInt(document.getElementById('answer').value, 10);
    let operator = document.getElementById('operator').value;
    
    if(operator === '+') {
        testFn = () => {
            const sum = calc.add(numOne, numTwo);
            assert.equal(sum, answer);
        };

    }
    else if(operator === '-') {
        testFn = () => {
            const diff = calc.subtract(numOne, numTwo);
            assert.equal(diff, answer);
        };
    }
    else if(operator === '*') {
        testFn = () => {
            const product = calc.multiply(numOne, numTwo);
            assert.equal(product, answer);
        };
    }
    else if(operator === '/') {
        testFn = () => {
            const quotient = calc.divide(numOne, numTwo);
            assert.equal(quotient, answer);
        };
    }

    const name = `${numOne} ${operator} ${numTwo} = ${answer}`;

    test(name);

    const p = document.createElement('p');
    p.innerText = name;
    div.appendChild(p);

    document.getElementById('numOne').value = '';
    document.getElementById('numTwo').value = '';
    document.getElementById('answer').value = '';
};

test.run = () => {
    let results = runTest();
    displayResults(results);
};

const runTest = () => {
    return tests.map(test => {
        try {
            test.testFn();
            test.status = 'PASSED';
        }
        catch(err) {
            test.status = 'FAILED';
            test.error = err.message;
        }
        return test;
    });
};

const displayResults = (results) => {
    let color;

    results.forEach(result => {
        console.log('%c%s',
            'color: black; background: yellow; font-size: 1em; font-family: helvetica',
            `   Test: ${testRunCount}   `);

        if(result.status === 'PASSED') {
            color = 'green';
        }
        else {
            color = 'red';
        }

        console.log(
            result.name + ' %c' + result.status,
            'color: ' + color + ';'
        );

        if(result.status === 'FAILED') {
            console.log(
                '\t%c' + (result.error || ''),
                'color: red;'  
            );
        }

        testRunCount++;
    });
};

