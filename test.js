/* globals assert */
const tests = [];

const test = (name, testFn) => {
    tests.push({
        name: name,
        testFn: testFn
    });
};

const runTest = () => {
    const results = tests.map(test => {
        try {
            test.testFn();
            test.status = 'PASSED';
        }
        catch(err) {
            test.status = 'FAILED';
            test.error = err.message;
        }
    });

    return results;
};

const displayRes
test('1 + 1 passes', () => {
    assert.equal(1 + 1, 2);
});

test('1 + 1 = 2 fails', () => { 
    assert.equal(1 + 1, 3);
});

console.log(runTest());