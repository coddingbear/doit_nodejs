/**
 * 배열 이해하기
 */
var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 }
];
var add = function(a, b) {
    return a + b;
};

Users.push(add); // 배열요소로 함수를 더함

console.log('배열 요소의 수 : %d', Users.length);
console.log('세 번째 요소로 추가된 함수 실행 : %d', Users[2](10,10));