/**
 * 배열에 값 추가 및 삭제 하기
 */

var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 }
];
console.log('unshift() 호출 전 배열 요소의 수 : %d', Users.length);

// 배열 앞에 요소를 추가하고 배열의 요소의 수를 반환
console.log('unshift() 반환 값 : ', Users.unshift({ name: '티아라', age: 23 })); 
console.log('unshift() 호출 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);

// 배열 앞에 요소를 삭제 하고 해당 요소를 반환
console.log('shift() 반환 값 :' , Users.shift()); 
console.log('shift() 호출 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);