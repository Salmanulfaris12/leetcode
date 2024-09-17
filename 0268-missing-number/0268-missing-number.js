/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const n =nums.length
    const expectedsum=(n*(n+1))/2
    const actualsum = nums.reduce((total,num)=>total+num,0)
    return expectedsum - actualsum
};