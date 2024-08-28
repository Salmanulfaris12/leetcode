/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
   a= s.split("").sort().join("")
    b=t.split("").sort().join("")
    return a===b
};