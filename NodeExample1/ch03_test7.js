/**
 * 객체의 함수
 */
var Person = {
    age : 20,
    name : '소녀시대',
    add : function (a, b) {
        return a + b;
    }
};

console.log('더하기 (10, 10) : %d', Person.add(10, 10));