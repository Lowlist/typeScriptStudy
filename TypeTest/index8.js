// rest 파라미터 지정할땐 무조건 array형식으로 지정 해야함
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function 테스트함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log();
}
// 스프레드 오퍼레이터 문법
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
console.log(arr3);
var person = { student: true, age: 20 };
function 함수(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함수({ student: true, age: 20 });
function maxNumber() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (x) {
        if (result < x) {
            result = x;
        }
    });
    return result;
}
console.log(maxNumber(12, 4, 1, 2, 234));
function 숙제2번함수(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
숙제2번함수({ user: 'kim', comment: [3, 5, 4], admin: false });
function 숙제3번함수(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
숙제3번함수([40, 'wine', false]);
