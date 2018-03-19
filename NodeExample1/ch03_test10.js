/**
 * 배열의 모든 요소 하나씩 확인 하기
 */

var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 },
    { name: '티아라', age: 23 }, 
];

console.log('배열 요소의 수 : %d', Users.length);

// for 문을 이용한 배열요소 출력
for (var i = 0; i < Users.length; i++) {
    console.log('배열 요소 #' + i + ' : %s ', Users[i].name);
}

// forEach문을 사용한 배열요소 출력
console.log('\nforEach 구문 사용하기');
Users.forEach(function(item, index) {
    console.log('배열 요소 #' + index + ' : %s ', item.name);
});

// for in 문을 사용한 배열요소 출력
console.log('\nfor in 구문 사용하기');
for(var key in Users) {
    console.log('배열 요소 #' + key + ' : %s ', Users[key].name);
}