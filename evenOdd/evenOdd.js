// function x = [숫자들]
// 1. 배열을 홀수 짝수로 나눔
//    각각의 홀짝 배열로나눠 길이구함
//    concat하여 새로운 배열 짝수부터 홀수

const arr = [1,2,3,4,5]
function evenOdd(arr){
   const even = arr.filter( el => el%2 === 0);
   const odd = arr.filter( el => el%2 !== 0  );
   
   let evenLength = even.length;
   let oddLength = even.length;
   

   const lenArr = [even.length,odd.length]
   const numbers = even.concat(odd)
   return [lenArr,numbers]
   
   
}

const a = evenOdd(arr)
console.log(a)
// 강사님 질문있습니다.
// 제가작성한 코드로 목표에서 원하는것과 비슷하게나오는데
// 저는 return을 배열로받아서 console.log(a)를출력하면 배열로보이는데 문제에서 요구한것과 다른형식으로나오는데
// 구글에 return 복수반환을 쳐도 잘해결이안되서 return값을 복수로 반환해서 함수를 실행하는게 정답인지
// 아니면 함수안에 코드를 다르게 작성하면 return값을 하나만받아서 문제에서 원하는거처럼 출력할수있는지 알고싶습니다.