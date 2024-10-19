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
var 버튼 = document.getElementById('button');
버튼 === null || 버튼 === void 0 ? void 0 : 버튼.addEventListener('click', function () {
    console.log('안녕');
});
