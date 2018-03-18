var result = 0;

// 실행 시간 측정을 위한 시작 시간 기록
console.time('duration_sum');

for (var i = 1; i <= 1000; i++) {
    result += 1;
}
// 실애 시간을 측정을 위한 종료 시간 표시
console.timeEnd('duration_sum');
console.log('1부터 1000까지 더한 결과물 : %d', result); // %d 숫자, %s 문자열 

console.log('현재 실행한 파일의 이름: %s', __filename);
console.log('현재 실행한 파일의 경로: %s', __dirname);

var Person = {
    name: '소녀시대',
    age: 20
};
// 자바스크립트 객체의 속성을 출력합니다.
console.dir(Person);