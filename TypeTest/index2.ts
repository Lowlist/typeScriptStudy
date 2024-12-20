let userInfo : { 이름 : string, 나이 : number, 출생지역 : string } = { 이름:"바보", 나이:33, 출생지역:"북한" };
let likeMusic : { song : string, singer : string } = { song : "민물 장어의 꿈", singer : "신해철"};

let unionTypes : (string | number) = 'kim';
unionTypes = 123;

//union type = |<< 이 기호로 표기하여 or로 처리 ()로 묶어서 사용해도 가능 
let arrayUnion : (number | string)[] = [1,'2',3];
let objectUnion : { data: (number | string) } = {data : '123'}

// any or unknown 실드해제
let 애니타입 : any;
let 언노운타입 : unknown;

// anytype 같은 경우엔 이런 경우가 되는데
let 변수테스트1 : string = 애니타입;
// 언노운 타입은 에러로 미연에 방지해줘서 안정성이 있음.
// let 변수테스트2 : string = 언노운타입;

// 타입스크립트 같은 경우에는 엄격하기때문에 간단한 수학연산도 타입이 맞아야함.
// (중요함)
// 언노운타입 - 1

let 나이 : string | number;
// 나이 + 1;

// string 타입 + 1 (허용)
// number 타입 + 1 (허용)
// string | number 타입 + 1 (안됌)

// 강의하단 숙제 1
let user : string = 'kim';
type AgeType = undefined | number;
let age : AgeType = undefined;
let married : boolean = false; 
let 철수 : (string | AgeType | boolean)[] = [user, age, married];

// 강의하단 숙제 2
let 학교 : {
    score:( number | boolean )[],
    teacher : string,
    friend : string[] | string 
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교.score[4] = false;
학교.friend = ['Lee' , 학교.teacher]

// 함수도 똑같이 타입 지정 해줘야됨
function 함수2(x : number) : number{
    return x * 2
}

// 함수(30);

// java void랑 똑같음
function 함수3(x : number) : void{
    x = 4;
}

// x? = number | undefined 랑 똑같음
function 함수4(x? : number) : void{
    x = 4;
}

function 함수5(x : number | string) : void{
    if(typeof(x) === "number"){
        console.log(x+4)
    } else {
        console.log("숫자아님")
    }
}
함수5(123);
함수5("ㅋㅋ");

//숙제 1
function 이름출력(x? : string) : void{
    if(x){
        console.log("안녕하세요" + x)
    } else {
        console.log("이름이 없습니다.")
    }
}
이름출력();

//숙제 2
function 자릿수세기(x : string | number):number{
    console.log(x.toString().length);
    return x.toString().length;
}
자릿수세기(123123123);

//숙제 3
function 결혼중개사(money : number, house:boolean, charming:string){
    let score : number = 0;
    if(house){
        score = score + 500;
    }
    if(charming === "상"){
        score = score + 100;
    }
    score = score + money;
    if(score>=600){
        console.log("결혼가능");
    }
}

결혼중개사(500,false,"상");


/** 
 * type Narrowing
 * if 썼으면 끝까지 써야 안전
 * else / else if 안쓰면 에러로 잡아줄 수도 있음
 * ---Narrowing으로 판정해주는 문법들---
 * typeof 변수
 * 속성명 in 오브젝트자료
 * 인스턴스 instanceof 부모
 */

function 함수6(x : number | string){
    let array :number[] = [];
    if(typeof x === "number"){
        array[0] = x;
    }

}

/**
 * Assertion 문법 (타입 덮어쓰기)
 * 1. Narrowing 할 때 사용 ( 타입을 a에서 b로 변경 x)
 * 2. 무슨 타입이 들어올지 100% 확실할 때 쓰는게 좋음 ( if와 다르게 에러로 안잡아줌 )
 */

function 함수7(x : number | string){
    let array :number[] = [];
    array[0] = x as number;
}


// 숙제 1
function cleaningArray(array : (number|string)[]){
    let cleanArray : number[] = [];
    array.forEach((element) => {
        if(typeof element === "string"){
            cleanArray.push(parseInt(element));
        } else {
            cleanArray.push(element);
        }
    });
    console.log(cleanArray)
}
cleaningArray([1,2,'3',4,'5'])
console.log('----------------------------------')
// 숙제 2
let 철수쌤 = { subject : 'math' }
let 영희쌤 = { subject : ['science', 'english'] }
let 민수쌤 = { subject : ['science', 'art', 'korean'] }

function objCheck( x : { subject : (string | string[]) } ){
    if(typeof x.subject === 'string'){
        return x.subject
    } else if (Array.isArray(x.subject)){
        return x.subject[x.subject.length-1]
    }
}

console.log(objCheck(민수쌤));