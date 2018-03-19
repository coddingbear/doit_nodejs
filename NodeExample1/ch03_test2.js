/**
 * 변수로 자료형 알아보기
 */
var Person =  {}; // object 변수 선언
Person['age'] = 20;
Person['name'] = '소녀시대';
Person.mobile = '010-1000-1000';

console.log('자료형: ', typeof(Person));
console.log('나이 : %d', Person.age);
console.log('이름 : %s', Person.name);
console.log('전화 : %s', Person['mobile']);
