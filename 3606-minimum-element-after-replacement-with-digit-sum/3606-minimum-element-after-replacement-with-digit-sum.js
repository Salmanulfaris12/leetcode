/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    for(i=0;i<nums.length;i++){
       nums[i]=nums[i].toString().split("").reduce((tot,num)=>tot+Number(num),0)
    }
    return Math.min(...nums)
};