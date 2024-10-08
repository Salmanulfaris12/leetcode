/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count=0
    let percentage =arr.length/4
    for(i=0;i<arr.length;i++){
        if(arr[i]!==arr[i-1]){
            count=1
        }
        else{
            count++
        }
         if(count>percentage){
            return arr[i]
        }
    }

};