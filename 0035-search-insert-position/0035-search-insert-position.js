/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if(nums.indexOf(target)!==-1){
        return nums.indexOf(target)
    }
    else if(nums[nums.length-1]<target){
      return nums.length
    }
    else {
        for(i=0;i<nums.length;i++){
            if(nums[i]<target){
                if(target<nums[i+1]){
                    return i+1
                }
            }
            else if(target<nums[i]){
                return 0
            }
        }
    }
};