/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i++){
        if(nums[i]===original){
            original=2*original
        }
    }
    return original
};