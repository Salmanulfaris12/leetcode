/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(i in nums){
        for(j in nums){
            if(i===j){
                break;
            }
            else if(nums[i]+nums[j]===target){
                let arr=[]
                arr.push(Number(i))
                arr.push(Number(j))
                return arr
            }
        }
    }
};