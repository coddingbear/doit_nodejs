/**
 * 간단한 내장 모듈 사용하기
 * 파일 경로를 다루는 path 모듈
 * NodeExample1/ch02_test8.js
 */
var path = require('path');

// 디렉토리 이름 함치기
var directories = ['users', 'mike', 'docs'];
// path.sep 현재 시스템의 디렉토리 분리 기호 \, /  
var docsDirectory = directories.join(path.sep);
console.log('문서 디렉토리 : %s', docsDirectory);

// 디렉토리 이름과 파일 이름 합치기
var curPath = path.join('/users/mike', 'notepad.exe');
console.log('파일 패스 :  %s', curPath);

//경로를 조합하여 절대경로를 반환한다.
var resolvPath = path.resolve('users/mike', 'notepad.exe'); 
console.log('절대 경로 :  %s', resolvPath); 

var filename = 'C:\\Users\\mike\\notepad.exe';
var dirname = path.dirname(filename); // 디렉토리 경로만 반환
var basename = path.basename(filename); // 경로를 뺀 파일이름만 반환
//var basename = path.basename(filename, '.exe'); // 확장자를 뺀 파일이름 반환
var extname = path.extname(filename); // 파일 확장자 이름 반환
console.log(`디렉토리 : ${dirname}s, 파일 이름: ${basename}, 확장자: ${extname}`);

// 파일 패스 정보를 담은 객체 반환
var pathInfo = path.parse(filename);
console.log(`디렉토리 : ${pathInfo.dir}s, 파일 이름: ${pathInfo.base}, 확장자: ${pathInfo.ext}`);