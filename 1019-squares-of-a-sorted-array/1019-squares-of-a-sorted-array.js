/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   let squares=nums.map(ele=>ele*ele) 
   return squares.sort((a,b)=>a-b)
};