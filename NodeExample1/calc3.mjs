/**
 * ES6 버전 모듈 사용하기
 */
const calc = {}
calc.add = (a, b) => a + b; // ES6 화살표 함수 표현식
calc.subtract = (a, b) => a - b;
calc.multiply = (a, b) => a * b;
calc.divide = (a, b) => {
    if ( b === 0 ) {
        console.error('0으로 나눌 수 없습니다.')
        return;
    }
    return a / b;
}

export default calc;