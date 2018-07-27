/* globals assert */

var tests = [];

var person = {
    name: 'sally',
    favoriteColor: 'blue'
};

function test(name, testFn) {
    var test = {
        name: name,
        testFn: testFn
    };

    tests.push(test);
}

function runTests() {
    // loop thru tests
    var results = [];
    var test;
    for(var i = 0; i < tests.length; i++) {
        // reference the test
        test = tests[i];

        try {
            test.testFn();
            // if no errors - passes
            test.status = 'PASSED';
        }
        catch(err) {
            // if errors - fails
            test.status = 'FAILED';
            test.error = err.message;
        }

        // record the results
        results.push(test);
    }

    // return all results
    return results;
}

test('1 + 1 = 2 passes', function() {
    assert.equal(1 + 1, 2);
});

test('1 + 1 = 2 fails', function() {
    assert.equal(1 + 1, 3);
});

console.log(runTests());