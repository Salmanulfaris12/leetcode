/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort((a,b)=>{return a-b})
    let indices=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]===target){
            indices.push(i)
        }
    }
    return indices
};