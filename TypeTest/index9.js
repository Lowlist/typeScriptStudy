// undefined && 연산자 사용해도 되는데 햇갈릴수도 있으니 그냥 if로 비교합시다
var strs = '1';
if (strs && typeof strs === "string") {
}
// 2.in 키워드로 object narrowing 가능 속성명 in 오브젝트자료
function 동물들(animal) {
    if ('swim' in animal) {
        animal.swim = "수영하다";
    }
}
// 3. instanceof 연산자로 object narrowing 가능
// {오브젝트} instanceof {부모class}
var 날짜 = new Date();
if (날짜 instanceof Date) {
}
function 탈것들(x) {
    if (x.wheel === '4개') {
        console.log('x는 Car타입이에요');
    }
}
