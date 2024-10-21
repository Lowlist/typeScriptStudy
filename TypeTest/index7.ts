// type Square = { color : string, width : number }

// object자료 타입 생성시 interface 생성가능
interface Square { color : string, width : number }

let 네모 : Square = { color : 'red', width : 100 }

// interface 특징 :
// extends로 복사가능
// 중복선언 가능 (이후에 작성하는걸 extends 가능)
// 다른사람들이 많이 이용 많이 할 것 같으면 object 지정할때 interface 사용하는것이 좋음.
// extends 쓸 때 중복속성은 에러로 잡아줌 & 기호는 안남
interface Student { 
    name : string 
}

interface Teacher extends Student { 
    age : number
}

let 학생 : Student = { name : 'kim'}
let 선생 : Teacher = { name : 'park', age :33, score : 3330}

type Animal = { name : string }
// &기호 사용하면 extends랑 유사한 기능 사용가능 (인터섹션 타입) ( 두 타입이 일치하는 기능을 만들어주세요 라는 뜻 )
type Cat = { age : number } & Animal

interface Teacher {
    score : number;
}

interface Gooods {
    brand : string,
    serialNumber : number,
    model : string[]
}

let 상품 : Gooods = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

interface Basket {
    product : string,
    price : number
}

interface Basket2 extends Basket {
    card : boolean
}
//숙제 2
let 장바구니 : Basket[] = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ] 

//숙제 3
let 장바구니2 : Basket2[] = [ { product : '청소기', price : 7000, card : false }, { product : '삼다수', price : 800 , card : true } ] 

//숙제 4
type FunsType = (a:number,b:number) => number;
let 플러스로직:FunsType = (a,b)=> a+b;
let 마이너스로직:FunsType = (a,b)=> a-b;

interface Funss {
    plus : FunsType,
    minus : FunsType
}

let 응애 : Funss = {
    plus : 플러스로직,
    minus : 마이너스로직
};
console.log(응애.plus(11,155));

// 숙제 4에서 발생했던 문제
// 오브젝트 타입지정만 하고 변수에 할당한뒤에
// 변수를 오브젝트화 안시키고 이거 왜안됨?????????????? 이러고있었음
// 나머지 다 만들어놓고
// 개빡대가리인듯 ㄹㅇ