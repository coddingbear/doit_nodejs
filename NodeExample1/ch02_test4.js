/**
 * 모듈 분리하기 전 코드
 * NodeExample1/ch02_test04.js
 */
var calc = {};
calc.add = function(a, b) {
    return a + b;
}
console.log('모듈을 분리하기전  - calc.add 함수 호출 결과 : %d', calc.add(10, 10));