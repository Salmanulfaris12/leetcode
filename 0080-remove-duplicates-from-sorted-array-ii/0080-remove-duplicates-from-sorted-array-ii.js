/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j=0
    count=0
    for(i=0;i<nums.length;i++){
        if(nums[i]===nums[i-1]){
            count++
        }
        else{
            count=1
        }
        if(count<=2){
            nums[j]=nums[i]
            j++
        }

    }
    return j
};