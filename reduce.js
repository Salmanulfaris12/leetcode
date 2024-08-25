var reduce = function(nums, fn, init) {
   let b=init
   for(i=0;i<nums.length;i++){
   b=fn(b,nums[i])
   } 
   return b;
};
let c= function sum(accum, curr) { return accum +curr*curr; }
console.log(reduce([1,2,3,4],c,10));
