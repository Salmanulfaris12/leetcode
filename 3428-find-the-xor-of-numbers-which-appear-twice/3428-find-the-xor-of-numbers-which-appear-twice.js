/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let result=0
    nums=nums.sort((a,b)=>a-b)
    for(i=0;i<nums.length;i++){
     if(nums[i]==nums[i+1]){
        result^=nums[i]
     }
    }
    return result

};