// 더 엄격한 타입지정도 가능 (Literal types)
// const 변수 업글버전이라 생각하면 편하다.
let 이름 : 123;

let test : '대머리' | '솔로';
test = '솔로'

// 리턴 형식을 지정해서 버그방지용으로 진짜 좋을꺼같음.
function 함수asd(a : 'hello') : 1 | 0{
    return 1
}

function rpc(a : '가위' | '바위' | '보') : ('가위' | '바위' | '보')[]{
    return ['바위']
}

// Literal types의 문제점

let 자료 = {
    name : 'kim'
} as const
// as const란?
// 1. object value 값을 그대로 타입으로 지정해줌
// 2. object 속성들에 모두 readonly를 붙여줌
// 결론 object 자료를 완전히 잠가놓고 싶으면 as const 써보면됨.

// kim 이라는 타입만 들어올 수 있습니다.
function 내함수(a :'kim'){

}

내함수(자료.name)


// 함수에 type alias 지정하는 법

type 함수타입 = (a :string) => number;

let 함수테스트 : 함수타입 = function(a){
    return 1;
}

type 회원정보 = {
    name : 'kim',
    plusOne : ( x :number ) => number,
    changeName : () => void
}

type CutType = (a:string) => string;

let cuts : CutType = function cutZero(x):string{
    return x.replace(/^0+/,"");
}

let removes : 함수타입 = function removeDash(a:string):number{
    return parseInt(a.replace(/-/g,""));
}

function callBacks(x:string,funs1:CutType,funs2:함수타입){
    let result = funs1(x);
    console.log(funs2(result))
}

callBacks('010-2-2-2-3234234-234-234123-asdfafs',cuts,removes);