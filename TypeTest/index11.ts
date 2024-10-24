// 객체지향언어같은 문법도 제공함
// public private protected static 키워드
// 그냥 JAVA임

class Users {
    // public 붙으면 모든 자식들이 이용가능
    // public 없어도 가능하지않음? ㅇㅇ 사실 그냥 숨겨있음
    // private 붙으면 class 안에서만 수정, 이용가능
    name : String;
    private familyName : string = 'kim';
    //constructor 는 파라미터를 조작하기 떄문에 유동적으로 사용가능함.
    constructor(a : string){
        this.name = a + this.familyName
    }

    이름변경함수(){
        this.familyName = 'park';
    }
}
let 유저1 = new Users('민수')
유저1.이름변경함수()
console.log(유저1);

// public 키워드 쓰면 this.어쩌구 생략가능
class Persons{
    constructor(public name : string){
    }
}
let 자식 = new Persons('kim');
console.log(자식);