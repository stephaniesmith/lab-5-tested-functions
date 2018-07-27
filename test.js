
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
}