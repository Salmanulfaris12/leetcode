/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n%2==1&&n>1){
        return false
    }
    while(n>1){
        n/=4
    }
    return n===1
};