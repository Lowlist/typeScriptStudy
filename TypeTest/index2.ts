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