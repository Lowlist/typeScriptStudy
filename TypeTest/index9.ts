// undefined && 연산자 사용해도 되는데 햇갈릴수도 있으니 그냥 if로 비교합시다
let strs : string = '1';
if (strs && typeof strs === "string") {

} 

type Fish = {swim :string};
type Bird = {fly :string};

// 2.in 키워드로 object narrowing 가능 속성명 in 오브젝트자료
function 동물들(animal :Fish | Bird){
    if('swim' in animal){
        animal.swim = "수영하다";
    }
}

// 3. instanceof 연산자로 object narrowing 가능
// {오브젝트} instanceof {부모class}

let 날짜 = new Date();
if(날짜 instanceof Date){

}

// 비슷한 오브젝트 2개를 narrowing 하는방법
// 애초에 이렇게 만들면 안됨 ㅋㅋ
// 비슷한 object 타입일경우 literal type으로 강제성 부여하는방법도 있음

type Cars = {
    model : 4;
    wheel : '4개',
    color : string
}

type Bike = {
    wheel : '2개',
    color : string
}

function 탈것들(x : Cars | Bike){
    if(x.wheel === '4개'){
        console.log('x는 Car타입이에요')
    }
}