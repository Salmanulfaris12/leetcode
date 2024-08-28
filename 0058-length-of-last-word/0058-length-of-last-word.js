/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s=s.trim().split(" ")
     let res=s.filter((value)=>{
       return value==s[s.length-1]
    })
     return res.toString().length 
};