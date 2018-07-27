
function passingTest() {

}

try {
    passingTest();
    console.log('Test PASSED');
}
catch(err) {
    console.log('Test FAILED', err.message);
}

function failingTest() {
    throw new Error('assertion error');
}

try {
    failingTest();
    console.log('Test PASSED');
}
catch(err) {
    console.log('Test FAILED', err.message);
}