// 더 엄격한 타입지정도 가능 (Literal types)
// const 변수 업글버전이라 생각하면 편하다.
var 이름;
var test;
test = '솔로';
// 리턴 형식을 지정해서 버그방지용으로 진짜 좋을꺼같음.
function 함수asd(a) {
    return 1;
}
function rpc(a) {
    return ['바위'];
}
// Literal types의 문제점
var 자료 = {
    name: 'kim'
};
// as const란?
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly를 붙여줌
// 결론 object 자료를 완전히 잠가놓고 싶으면 as const 써보면됨.
// kim 이라는 타입만 들어올 수 있습니다.
function 내함수(a) {
}
내함수(자료.name);
var 함수테스트 = function (a) {
    return 1;
};
var cuts = function cutZero(x) {
    return x.replace(/^0+/, "");
};
var removes = function removeDash(a) {
    return parseInt(a.replace(/-/g, ""));
};
function callBacks(x, funs1, funs2) {
    var result = funs1(x);
    console.log(funs2(result));
}
callBacks('010-2-2-2-3234234-234-234123-asdfafs', cuts, removes);
