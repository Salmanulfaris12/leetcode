/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let a=""
    for(i=0;i<words.length;i++){
        if(words[i].split("").reverse().join("")===words[i]){
            return words[i]
        }
       
    }
    return ""
};