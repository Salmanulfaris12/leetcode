/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let result=0;
    let nums=[]
   for(i=0;i<n;i++){
     nums[i]=start+2*i;
    result^=nums[i]
   } 
   return result
};