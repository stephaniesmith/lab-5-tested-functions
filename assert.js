
<<<<<<< HEAD
function assert(success, message) {
    if(!success) {
        throw new Error(message || 'expected true but was false');
    }
}

assert.equal = function(actual, expected, message) {
    message = (message || '') + 'expected ' + expected + 
        ' but was ' + actual;
=======
const assert = (success, message) => {
    if(!success) {
        throw new Error(message || 'expected true, but was false');
    }
};

assert.equal = (actual, expected, message) => {
    message = `${message || ''} expected ${expected} but was ${actual}`;
>>>>>>> a8e1af0fb1254b25b264cda58df13ee1fe9650aa
    // eslint-disable-next-line eqeqeq
    assert(actual == expected, message);
};

<<<<<<< HEAD
// change to true to run assert and assert.equal tests
if(false) { // eslint-disable-line

    try {
        assert.equal(true, false);
        console.log('assert.equal(true, false) FAILED');
    }
    catch(err) {
        console.log('assert.equal(true, false) PASSED', err.message);
    }

    try {
        assert.equal(true, true);
        console.log('assert.equal(true, true) PASSED');
    }
    catch(err) {
        console.log('assert.equal(true, true) FAILED');
    }

    try {
        assert(true);
        console.log('assert(true) PASSED');
    }
    catch(err) {
        console.log('assert(true) FAILED', err.message);
    }

    try {
        assert(false);
        console.log('assert(false) FAILED');
    }
    catch(err) {
        console.log('assert(false) PASSED', err.message);
    }
=======
if(false) { // eslint-disable-line

    try {
        assert(true);
        console.log('assert(true) PASSED');
    }
    catch(err) {
        console.error('assert(true) FAILED', err.message);
    }

    try {
        assert(false);
        console.error('assert(false) FAILED');
    }
    catch(err) {
        console.log('assert(false) PASSED', err.message);
    }

    try {
        assert.equal(true, true);
        console.log('assert.equal(true, true) PASSED');
    }
    catch(err) {
        console.error('assert.equal(true, true) FAILED');
    }

    try {
        assert.equal(true, false);
        console.error('assert.equal(true, false) FAILED');
    }
    catch(err) {
        console.log('assert.equal(true, false) PASSED');
    }
    
>>>>>>> a8e1af0fb1254b25b264cda58df13ee1fe9650aa
}