/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let newStr=""
    for(i=0;i<word1.length&&i<word2.length;i++){
        newStr+=word1[i]
        newStr+=word2[i]
    }
    if(word1.length>word2.length){
        for(i=word2.length;i<word1.length;i++){
            newStr+=word1[i]
        }
    }
    else{
        for(i=word1.length;i<word2.length;i++){
            newStr+=word2[i]
        }
    }
    return newStr
};