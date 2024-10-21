// let 제목 = document.querySelector('#title');
// HTML 조작시 narrowing 하는 방법 5개
// 1. null 체킹
// if(제목 !== null){
//     제목.innerHTML = '코딩하는중'
// }
// 2. instanceof 연산자
// if(제목 instanceof Element){
//     제목.innerHTML = '코딩하는중'
// }
// 3. as 로 사기치기
// let 제목2 = document.querySelector('#title22') as Element;
// 제목2.innerHTML = "반가워요";
// 4. 오브젝트에 붙이는 ?. 제목에 innerHTML이 있으면 출력, 없으면 undefined (optional chaining)
// if(제목?.innerHTML !== undefined){
//     제목.innerHTML = '코딩하는중'
// }
// 5. 귀찮은 strict 모드 끄는방법도 있음

// Element만 하면 안되는데 왜그러냐면
// Element엔 별거 없고 그 하위태그에 상세적으로 다 적혀있기 때문에 그럼
// let 링크 = document.querySelector('#link');
// if (링크 instanceof HTMLAnchorElement){
//     링크.href = 'https://kakao.com';
// }
/**
 *  2020년 이후 브라우저들은 ?. 연산자를 이용가능합니다.
    그니까 object에서 자료뽑을 때 object.어쩌구 이렇게 자료를 뽑는데 
    object?.어쩌구 이렇게도 뽑을 수 있다는 겁니다. 
    이걸 쓰면 어쩌구라는 자료가 object에 존재하면 그거 뽑아주시고요 
    존재하지 않으면 undefined 남겨주세요~ 라는 뜻과 동일합니다. 
    그래서 간혹 narrowing할 때 && 연산자로 undefined 체크하기 귀찮을 때 간혹 사용됩니다. 
 */
// let 버튼 = document.getElementById('button');
// 버튼?.addEventListener('click',function(){
//     console.log('안녕');
// })

// 숙제 1
// let 이미지 = document.getElementById('img');
// if(이미지 instanceof HTMLImageElement){
//     이미지.src = 'test33.jpg';
// }

// 숙제 2
let 링크들 = document.querySelectorAll('.link');
// forEach로 해결하긴했음
링크들.forEach((a)=>{
    if(a instanceof HTMLAnchorElement){
        a.href = "https://kakao.com";
    }
})