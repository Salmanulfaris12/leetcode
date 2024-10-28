/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    while(n>1){
        if(n%2==0){
            n/=2
        }
        else break;
    }
    if(n==1){
        return true
    }
    else return false
};