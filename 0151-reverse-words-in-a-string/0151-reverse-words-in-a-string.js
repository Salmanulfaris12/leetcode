/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr=s.trim().split(" ")
    let res=arr.filter((value)=>value.length>=1)
    return res.reverse().join(" ")

};