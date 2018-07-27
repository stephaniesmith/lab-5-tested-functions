/* globals assert */

const tests = [];

const test = (name, testFn) => {
    tests.push({
        name: name,
        testFn: testFn
    });
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
        
    });
};

test('1 + 1 = 2 passes', () => assert.equal(1 + 1, 2));

test('1 + 1 = 3 fails', () => assert.equal(1 + 1, 3));

let results = runTest();
displayResults(results);