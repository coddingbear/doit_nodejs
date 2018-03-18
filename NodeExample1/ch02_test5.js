/**
 * 계산 함수 모듈 분리한 후 불러오기
 * NodeExample1/ch02_test5.js
 */
// 모듈 호출하여 cal 변수에 저장
var calc = require('./calc');
console.log('exports 사용 모듈 함수 호출 -------------------------------------------------');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
console.log('모듈로 분리한 후 - calc.subtract 함수 호출 결과 : %d', calc.subtract(10, 10));
console.log('모듈로 분리한 후 - calc.multiply 함수 호출 결과 : %d', calc.multiply(10, 10));
console.log('모듈로 분리한 후 - calc.divide 함수 호출 결과 : %d', calc.divide(10, 10));
console.log('module.exports 사용 모듈 함수 호출 -------------------------------------------');
// module.export로 메인 파일에 계산 모듈 불러오기
var calc2 = require('./calc2');
console.log('모듈로 분리한 후 - calc2.add 함수 호출 결과 : %d', calc2.add(10, 10));
console.log('모듈로 분리한 후 - calc2.subtract 함수 호출 결과 : %d', calc2.subtract(10, 10));
console.log('모듈로 분리한 후 - calc2.multiply 함수 호출 결과 : %d', calc2.multiply(10, 10));
console.log('모듈로 분리한 후 - calc2.divide 함수 호출 결과 : %d', calc2.divide(10, 10));