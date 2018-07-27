/* globals assert */

var tests = [];

function test(name, testFn) {
    var test = {
        name: name,
        testFn: testFn
    };

    tests.push(test);
}

test.run = function() {
    var results = runTests();
    displayResults(results);
};

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

function displayResults(results) {
    var result;
    var color;
    for(var i = 0; i < results.length; i++) {
        result = results[i];
        // log name and PASS/FAIL

        // get our color
        if(result.status === 'PASSED') {
            color = 'green';
        }
        else {
            color = 'red';
        }
        // log out result
        console.log(
            result.name + ' %c' + result.status,
            'color: ' + color + ';'
        );

        // if an error, 
        if(result.status === 'FAILED') {
            // log out the failure
            console.log(
                '\t%c' + (result.error || ''),
                'color: red;'
            );
        }
    }
}

// change to true to run test tests
if(false) { // eslint-disable-line

    test('1 + 1 = 2 passes', function() {
        assert.equal(1 + 1, 2);
    });

    test('1 + 1 = 2 fails', function() {
        assert.equal(1 + 1, 3);
    });

    test.run();
}