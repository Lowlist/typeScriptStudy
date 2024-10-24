// 객체지향언어같은 문법도 제공함
// public private protected static 키워드
// 그냥 JAVA임
var Users = /** @class */ (function () {
    //constructor 는 파라미터를 조작하기 떄문에 유동적으로 사용가능함.
    function Users(a) {
        this.familyName = 'kim';
        this.name = a + this.familyName;
    }
    Users.prototype.이름변경함수 = function () {
        this.familyName = 'park';
    };
    return Users;
}());
var 유저1 = new Users('민수');
유저1.이름변경함수();
console.log(유저1);
// public 키워드 쓰면 this.어쩌구 생략가능
var Persons = /** @class */ (function () {
    function Persons(name) {
        this.name = name;
    }
    return Persons;
}());
var 자식 = new Persons('kim');
console.log(자식);
