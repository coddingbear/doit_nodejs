/**
 * 계산 함수 모듈로 분리한 코드
 * NodeExample1/calc.js
 */
exports.add = function(a, b) {
    return a + b;
}
exports.subtract = function(a, b) {
    return a - b;
}
exports.multiply = function(a, b) {
    return a * b;
}
exports.divide = function(a, b) {
    if ( b === 0 ) {
        console.error('0으로 나눌 수 없습니다.')
        return;
    }
    return a / b;
}