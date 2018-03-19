/**
 * 배열에 값 추가 및 삭제 하기
 */

var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 }
];
console.log('push() 호출 전 배열 요소의 수 : %d', Users.length);

// 배열 끝에 요소를 추가하고 배열의 요소의 수를 반환
console.log('push() 반환 값 : ', Users.push({ name: '티아라', age: 23 })); 
console.log('push() 호출 후 배열 요소의 수 : %d', Users.length);

// 배열 끝에 요소를 삭제 하고 해당 요소를 반환
console.log('pop() 반환 값 :' , Users.pop());
console.log('pop() 호출 후 배열 요소의 수 : %d', Users.length);