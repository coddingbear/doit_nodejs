/**
 *  Process 객체 살펴보기 2
 *  NodeExample1/ch02_test3.js
 */

// 사용자정의 환경변수, 시스템 환경변수 정보 출력
// console.dir(process.env);
for (var key in process.env ) {
    console.log( key + ' : ' + process.env[key]);
}
console.log('OS 환경 변수의 값 : ' + process.env['OS']);