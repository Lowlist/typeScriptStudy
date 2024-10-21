// rest 파라미터 지정할땐 무조건 array형식으로 지정 해야함

function 테스트함수(...a : (number|string)[]){
    console.log()
}

// 스프레드 오퍼레이터 문법
let arr = [1,2,3];
let arr2 = [4,5];
let arr3 = [...arr, ...arr2];

console.log(arr3);

let person = { student : true, age : 20 }

function 함수({student, age} : {student : boolean, age : number}){
  console.log(student, age)
}
함수({ student : true, age : 20 })


function maxNumber(...a : number[]):number{
    let result : number = 0;
    a.forEach((x)=>{
        if(result < x){
            result = x
        }
    })
    return result;
}

console.log(maxNumber(12,4,1,2,234))

interface 숙제2번타입{
    user : string,
    comment : number[],
    admin : boolean
}

function 숙제2번함수({ user, comment, admin } : 숙제2번타입 ){
    console.log(user, comment, admin)
}

숙제2번함수( { user : 'kim', comment : [3,5,4], admin : false } )

type 숙제3번타입 = (string | number | boolean)[];

function 숙제3번함수 ( [a,b,c] : 숙제3번타입){
    console.log(a,b,c)
}

숙제3번함수( [40, 'wine', false] )