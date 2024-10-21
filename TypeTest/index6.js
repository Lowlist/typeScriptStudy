var Humun = /** @class */ (function () {
    function Humun(namae) {
        this.name = namae;
    }
    Humun.prototype.함수 = function (a) {
        console.log('안녕' + a);
    };
    return Humun;
}());
var 사람1 = new Humun('바보');
var 사람2 = new Humun('멍청이');
console.log(사람1.name);
console.log(사람2.name);
사람1.함수('ㅋㅋ');
//숙제 1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price / 10;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1);
console.log(car1.tax());
var Word = /** @class */ (function () {
    function Word() {
        var a = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
        }
        var numbers = [];
        var strings = [];
        a.forEach(function (el) {
            if (typeof el === 'string') {
                strings.push(el);
            }
            else {
                numbers.push(el);
            }
        });
        this.nums = numbers;
        this.strs = strings;
    }
    return Word;
}());
var word1 = new Word('asdf', 3, 12, 'qewq');
console.log(word1.nums);
