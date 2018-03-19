/**
 * delete 키워드를 이용한 배열 요소 삭제 하기
 */

var Users = [
    { name: '소녀시대', age: 20 },
    { name: '걸스데이', age: 22 },
    { name: '티아라', age: 23 }
];
console.log('delete 키워드로 배열 요소 삭제 전 배열 요소의 수 : %d', Users.length);
console.dir(Users);

delete Users[1]

console.log('delete 키워드로 배열 요소 삭제 후 배열 요소의 수 : %d', Users.length);
console.dir(Users);

// splice(index, 0, 추가요소) : 두 번째 인자가 0 이면 index에 배열요소를 추가합니다.
Users.splice(1, 0, { name: '애프터스쿨', age:25 });
console.log('splice()로 요소를 인덱스 1에 추가한 후');
console.dir(Users);

// splice(index, count) : index 번 째 count 만큼 배열요소를 삭제한다.
Users.splice(2, 1);
console.log('splice()로 요소를 인덱스 2의 요소를 1개 삭제한 후');
console.dir(Users);

// splice(index, count, 바꿀요소..) : index 번 째 count 만큼 바꿀요소로 변경한다
Users.splice(2, 2, {name: '레드벨벳', age: 26 }, {name: '마마무', age:27});
console.log('splice()로 요소를 인덱스 2의 요소부터 2개 변경 후');
console.dir(Users);


