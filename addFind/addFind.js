// 1. function x (배열,정수){}
// 배열값에 +10씩 순회하면서 해준다
// 새로운 배열생성 정수가있는지 확인하고
// 1. 값이 있으면 그값을제외한 배열생성
// 2. 값이 없으면 console.log("결과값이 없습니다.")

function findInt(arr,num){
    const arr1 = arr.map((el) => {
        return el+10;
    })
    
    //num과 el 들을 비교해 같은값이 있으면 새배열 없으면 없다 => if문?

   const arr2 = arr1.filter((el)=> el !== num )
   if(arr2.toString() === arr1.toString()){
    return "결과값이 없습니다";
   }else{
    return arr2;
   }
    
}
   const a = findInt([1,2,3,4,5],18)
   console.log(a)