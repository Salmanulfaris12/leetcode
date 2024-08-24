var filter = function(arr, fn) {
    let a=[]
   for(i=0;i<arr.length;i++){
    b=fn(arr[i])
   if(b){
            a.push(arr[i])
        }
   } 
   return a
};
let c=function greaterThan10(n) { return n > 10; }
console.log(filter([20,10,30,28],c))