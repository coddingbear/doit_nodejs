/**
 * module.exports  사용한 계산 함수 모듈
 * NodeExample1/calc2.js
 */
var calc = {};
calc.add = function(a, b) {
    return a + b;
};
calc.subtract = function(a, b) {
    return a - b;
};
calc.multiply = function(a, b) {
    return a * b;
};
calc.divide = function(a, b) {
    if ( b === 0 ) {
        console.error('0으로 나눌 수 없습니다.')
        return;
    }
    return a / b;
};

module.exports = calc;