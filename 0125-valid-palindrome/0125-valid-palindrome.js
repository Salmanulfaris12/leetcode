/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let normalizedString=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    let reverseString=normalizedString.split("").reverse().join("")
    return normalizedString==reverseString
};