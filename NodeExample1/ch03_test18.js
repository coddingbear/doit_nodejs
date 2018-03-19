/**
 * 프로토타입 객체 만들기
 * NodeExample1/ch03_test17.js
 */
// 프로토 타입 객체는 함수와 구분하기 위해 첫글자를 대문자로 명명한다.
function Person(name, age) { 
    this.name = name;
    this.age = age;
}
Person.prototype.walk = function(speed) {
    console.log(this.name + '가 ' + speed + 'km 속도로 걸어갑니다.');
}

// new 연산자로 인스턴스 객체 생성
var person01 = new Person('소녀시대', 20);
var person02 = new Person('걸스데이', 22);

console.log( person01.name + ' 객체의 walk(10)을 호출합니다.');
person01.walk(10);
