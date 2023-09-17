
const arr = [1,2,3,4,5];

function maxValue(arr){
const sortArr = [];
let max=0;
    

      for(i=0; i < arr.length; i++){
        max >= arr[i] ? max : max = arr[i];
        }
        

        return ["maxvalue : " + sortArr[0],sortArr]
    }
    
        


const a =maxValue(arr);
console.log(a); 
