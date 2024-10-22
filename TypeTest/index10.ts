// 함수 return 값에 붙일 수 있는 never type
// 조건1. return 값이 없어야함
// 조건2. endpoint가 없어야함
// void와 유사함
// 사실 함수는 return undefined 가 숨겨져있음 무조건
// 사실 never타입 쓸모없음 ㅅㄱ
// void 쓰면됨
// never 타입은 진짜 말 안될때 등장함!
function 네버리턴함() : never{
    // 조건 1
    // throw new Error()
    // 조건 2
    while(true){}
}

// never 타입 등장하는 경우 1
// 이상한 narrowing
function 예시임(parameter :string){
    if(typeof parameter === 'string'){
        console.log(parameter)
    } else {
        console.log(parameter)
    }
}

// never 타입이 등장하는 경우 2
let 예시임2 = ()=>{
    throw new Error()
}