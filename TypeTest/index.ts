let names : string = 'kim';

//배열은 앞에 타입지정 해줘야함
let arrays :string[] = ['kim','park'];

//오브젝트 형식은 이런식으로 지정해야함
let objects : { name? : string } = { name : "kim" };

//union type 다양한 타입이 들어올수 있게 하려면 | <기호 사용하여 가능
let unions : string | number = 123;
let unions2 : string[] | number = ['123']; // 이런것도 가능

// type 타입은 변수에 담아 쓸 수 있음. 보통 첫글자를 대문자로 차별을 두는편
type Anytype = string | number | number[];
let anyting : Anytype = [123,123,12];

// 함수도 type 지정 가능 parameter에 주려면 () 괄호 안에 return값에 주려면 함수명() 옆에  
function 함수(x :number) : number {
    return x * 2
}

// array에 쓸 수 있는 tuple 타입
// tuple 타입 = 배열의 확장된 형태 각 배열에 들어갈 타입을 지정해서 넣는방식
type Member = [number,boolean];
let john:Member = [123,true];

// object에 타입 지정해야할 속성이 너무 많을때
// [key:type...] 이런식으로 지정하여 사용하면 key값이 string으로 들어왔을때 해당 벨류 타입을 고정
type NewMember = {
    [key:string] : String
};

// class 문법사용시에도 타입지정 가능 
class User {
    name :string;
    // 자바에서 사용하는 생성자 문법이랑 비슷함
    constructor(name : string){
        this.name = name;
    }
}