/* exported runTests */

let tests = [];
let testRunCount = 1;

const test = (name, testFn) => {
    tests.push({
        name: name,
        testFn: testFn
    });
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

