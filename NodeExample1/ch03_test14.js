/**
 * slice() 메소드로 배열 요소 일부 요소를 복사하여 새로운 배열 만들기
 */

var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 },
    { name: '티아라', age: 23 },
    { name: '애프터스쿨', age:25 }
];

console.log('배열 요소의 수 : %d', Users.length);
console.log('원본 Users 배열 : ');
console.dir(Users);

var Users2 = Users.slice(1, 3);  // 인덱스 1번째부터 3개의 배열 요소를 삭제하고 해당 요소를 반환한다.
console.log('slice(1,3)로 잘라낸 후 Users2 배열 : ');
console.dir(Users2);

var Users3 = Users2.slice(1);
console.log('slice(1)로 잘라낸 후 Users3 배열 : ');
console.dir(Users3);

// concat() 배열 합치기(merging)
var newUsers = [
    {name: '레드벨벳', age: 26 }, 
    {name: '마마무', age:27}
];
var Users4 = Users2.concat(newUsers);
console.log('concat() 배열 합치고 난 후 Users4 배열 : ');
console.dir(Users4);