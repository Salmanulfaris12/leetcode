/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
   return s.split(" ").filter((word,index)=>index <k).join(" ")

};