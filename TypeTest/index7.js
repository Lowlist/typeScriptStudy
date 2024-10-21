// type Square = { color : string, width : number }
var 네모 = { color: 'red', width: 100 };
var 학생 = { name: 'kim' };
var 선생 = { name: 'park', age: 33, score: 3330 };
var 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
//숙제 2
var 장바구니 = [{ product: '청소기', price: 7000 }, { product: '삼다수', price: 800 }];
//숙제 3
var 장바구니2 = [{ product: '청소기', price: 7000, card: false }, { product: '삼다수', price: 800, card: true }];
var 플러스로직 = function (a, b) { return a + b; };
var 마이너스로직 = function (a, b) { return a - b; };
var 응애 = {
    plus: 플러스로직,
    minus: 마이너스로직
};
console.log(응애.plus(11, 155));
// 숙제 4에서 발생했던 문제
// 오브젝트 타입지정만 하고 변수에 할당한뒤에
// 변수를 오브젝트화 안시키고 이거 왜안됨?????????????? 이러고있었음
// 나머지 다 만들어놓고
// 개빡대가리인듯 ㄹㅇ
