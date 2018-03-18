/**
 *  Process 객체 살펴보기
 *  NodeExample1/ch02_test2.js
 */
// 파라미터 정보 출력
console.log('argv 속성의 파라미터 수 : ' + process.argv.length)
console.dir(process.argv);

// 세번째 파라미터가 존재하면 콘솔에 출력
if (process.argv.length > 2) {
    console.log('세 번째 파라미터의 값 : %s', process.argv[2]);
}

// 파라미터 인덱스 번호와 값 출력
process.argv.forEach(function(item, index) {
    console.log(index + ' : ', item);
});

