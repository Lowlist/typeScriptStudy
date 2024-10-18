// type 지정 = Type Aliases (별칭)
// 맨앞에 대문제 필수!!
type AnimalType = { name : string, age : number};
let 동물 : AnimalType = {name : 'kim', age : 20};

// const 변수는 등호로 재할당만 막는 역할임, const로 담은 object 수정은 자유롭게 가능함.
// 하지만 typeScript에선 막을수 있음 typeScript 내에서만 작동하고 js에선 작동하지 않음
// 타입스크립트 에러는 에디터 & 터미널 에서만 존재함.

const 출생지역 = { region : 'seoul'};

// readonly 읽기전용 속성 실수로 수정하면 에러발생
// object 속성 안에도 ? 사용가능
type Girlfriend = {
    readonly name : string,
    age? : number    
}

const 여친 : Girlfriend = {
    name : '엠버'
}

type Name = string;
type Age = number;
// type끼리 union type으로 합치기 가능
type Person = Name | Age;

type PositionX = { x: number };
type PositionY = { y: number };
// & 연산자로 object 타입 합치기(extend) 가능
type NewType = PositionX & PositionY;

let position :NewType = { x :10, y: 20 };

// 같은 이름의 type 변수 재정의 불가능!!!!!!!!

// (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// 자동으로 합쳐짐
type TestX = { test : number };
type TestY = { test : number };
type NewTest = TestX & TestY;

let tests : NewTest = { test : 3 };

// (숙제2)
type Study2 = {
    color? : string,
    size : number,
    readonly position : number[]
}

type Study3 = {
    name : string,
    phone? : number,
    email : string
}

let study33 :Study3 ={
    name :'kim',
    email : '123123'
}

type Study4 = {
    child : boolean
}

type Study5 = Study3 & Study4;

let study55 : Study5 ={
    name : 'kim',
    email : '123123@naver.com',
    child : false,
    phone : 123123123
}