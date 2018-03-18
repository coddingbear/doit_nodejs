/**
 * 외장 모듈 사용하기
 * NodeExample1/ch02_test6.js
 */
// 시스템 환경 변수에 접근할 수 있는 모듈 nconf 불러오기
var nconf = require('nconf');
nconf.env();
console.log('OS 환경 변수의 값 : %s' , nconf.get('OS'));