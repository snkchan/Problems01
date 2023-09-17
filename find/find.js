// 1. 전산표를 객체로 표현 ok
// 2. function x (물품명, 갯수){} --> 함수필요

// case 1 실갯수 == 갯수 
//     -> console.log("전산표와 일치하지 않습니다")
//        실갯수 === 갯수
//     -> console.log("전산표와 일치합니다")

// case 2 물품명 !== 매개변수(물품)
//     -> console.log(매개변수)


const list = {
    "야채곱창" : 5,
    "바나나우유" : 10,
    "삼각김밥" : 15,
    "도시락" : 10,
    "샌드위치" : 10
}

let product, amount;

function find(product,amount){
    let realAmount = list[product]; 
    if(product in list){
        if(realAmount === amount){
            console.log("전산표와 일치합니다")
        }else{
            console.log("전산표와 일치하지 않습니다")
        }
    }else{
        console.log(product)
    }
}

find("삼각김밥", 10)