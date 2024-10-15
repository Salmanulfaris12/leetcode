/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverage = function(nums) {
   nums= nums.sort((a,b)=>a-b)
    const average=[]
   for(i=0;i<nums.length/2;i++){
    let n1=nums[i]
    let n2=nums[nums.length-(i+1)]
    average.push((n1+n2)/2)
   }
   return Math.min(...average)
};