/* globals calc */
/* exported calculate */

var dom = {
    x: document.getElementById('x'),
    y: document.getElementById('y'),
    operator: document.getElementById('operator'),
    result: document.getElementById('result')
};

var symbols = {
    add: '+',
    subtract: '-',
    multiply: '*',
    divide: '/'
};

function calculate(operator) {

    var x = parseFloat(dom.x.value);
    var y = parseFloat(dom.y.value);

    var operation = calc[operator];
    var result = operation(x, y);

    var symbol = symbols[operator];
    dom.operator.innerText = symbol;
    dom.result.innerText = result;

}