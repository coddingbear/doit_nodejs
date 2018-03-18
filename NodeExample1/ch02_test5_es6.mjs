/**
 * ES6 버전의 import 문 사용하여 모듈 호출
 * NodeExample1/ch02_test5.mjs
 */
import calc from './calc3';

console.log('ES6 모듈 시스템 함수 호출 -------------------------------------------------');
console.log('모듈로 분리한 후 - calc.add 함수 호출 결과 : %d', calc.add(10, 10));
console.log('모듈로 분리한 후 - calc.subtract 함수 호출 결과 : %d', calc.subtract(10, 10));
console.log('모듈로 분리한 후 - calc.multiply 함수 호출 결과 : %d', calc.multiply(10, 10));
console.log('모듈로 분리한 후 - calc.divide 함수 호출 결과 : %d', calc.divide(10, 10));

/**  
 * ES6의 import는 문은 아직 실험적이어서 다음과 같이 실행한다.
 * node --experimental-modules ch02_test5_es6.mjs
*/