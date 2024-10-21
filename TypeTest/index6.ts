class Humun {
    name : string;
    constructor(namae :string){
        this.name = namae;
    }

    함수(a:string){
        console.log('안녕'+a)
    }
}

let 사람1 = new Humun('바보');
let 사람2 = new Humun('멍청이');

console.log(사람1.name);
console.log(사람2.name);
사람1.함수('ㅋㅋ')

//숙제 1

class Car{
    model : string;
    price : number;
    constructor(a:string, b:number){
        this.model = a;
        this.price = b;
    }
    tax(){
        return this.price / 10;
    }    
}

let car1 = new Car('소나타',3000)
console.log(car1)
console.log(car1.tax())

class Word{
    nums : number[];
    strs : string[];

    constructor( ...a:(number|string)[] ){
        let numbers : number[] = [];
        let strings : string[] = [];
        a.forEach((el)=>{
            if(typeof el === 'string'){
                strings.push(el);
            } else {
                numbers.push(el);
            }
        })
        this.nums = numbers;
        this.strs = strings;
    }
}

let word1 = new Word('asdf',3,12,'qewq');

console.log(word1.nums);