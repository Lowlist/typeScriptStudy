var names = 'kim';
//배열은 앞에 타입지정 해줘야함
var arrays = ['kim', 'park'];
//오브젝트 형식은 이런식으로 지정해야함
var objects = { name: "kim" };
//union type 다양한 타입이 들어올수 있게 하려면 | <기호 사용하여 가능
var unions = 123;
var unions2 = ['123']; // 이런것도 가능
var anyting = [123, 123, 12];
// 함수도 type 지정 가능 parameter에 주려면 () 괄호 안에 return값에 주려면 함수명() 옆에  
function 함수(x) {
    return x * 2;
}
var john = [123, true];
// class 문법사용시에도 타입지정 가능 
var User = /** @class */ (function () {
    // 자바에서 사용하는 생성자 문법이랑 비슷함
    function User(name) {
        this.name = name;
    }
    return User;
}());
