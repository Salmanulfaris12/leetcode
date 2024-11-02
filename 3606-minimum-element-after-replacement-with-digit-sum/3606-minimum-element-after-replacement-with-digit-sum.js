/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    for(i=0;i<nums.length;i++){
       nums[i]=nums[i].toString().split("")
    //    console.log(nums[i])
       nums[i]=nums[i].map(num=>Number(num)).reduce((tot,num)=>tot+num)
    //    console.log(nums[i])
    }
    return Math.min(...nums)
};