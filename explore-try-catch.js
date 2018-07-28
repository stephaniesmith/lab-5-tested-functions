
<<<<<<< HEAD
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
=======
const passingTest = () => {

};

try {
    passingTest();
    console.log('Test Passed');
}
catch(err) {
    console.error('Test FAILED', err.message);
}

const failingTest = () => {
    throw new Error('assertion error');
};

try {
    failingTest();
    console.log('Test Passed');
}
catch(err) {
    console.error('Test FAILED', err.message);
>>>>>>> a8e1af0fb1254b25b264cda58df13ee1fe9650aa
}