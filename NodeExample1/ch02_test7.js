/**
 * 간단한 내장 모듈 사용하기
 * 시스템 정보를 알려주는 os 모듈
 * NodeExample1/ch02_test7.js
 */
var os = require('os');

// OS 호스트 이름을 반환
console.log('시스템의 hostname : %s', os.hostname());

// 시스템의 사용 가능 메모리(freemem()) 와 전체 메모리(totalmem()) 용량을 반환
console.log('시스템의 메모리 : %d / %d', os.freemem(), os.totalmem());

// 시스템의 CPU 정보 배열을 반환
console.log('시스템의 CPU 정보\n');
console.dir(os.cpus()[0]);

// 네트워크 인터페이스 정보를 담은 객체를 반환
console.log('시스템의 네트워크 인터페이스 정보 \n');
console.dir(os.networkInterfaces()); 