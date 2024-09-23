/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const arr=[]
    for(num of nums1){
        for(ele of nums2){
            if(num===ele){
                if(arr.indexOf(num)==-1){
                arr.push(num)
                }
            }
        }
    }
    return arr
};