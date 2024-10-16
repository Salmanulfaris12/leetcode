/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(arr) {
 
    var prefix = ""
    const str = arr[0] //flower

    for(let i=0; i <= str.length; i++){
        const pre = prefix + str[i];
        for(words of arr){
            if(!words.startsWith(pre)){
                return prefix
            }
        }
        prefix = prefix + str[i]
        // console.log("",prefix)
    }
    return prefix

 };
