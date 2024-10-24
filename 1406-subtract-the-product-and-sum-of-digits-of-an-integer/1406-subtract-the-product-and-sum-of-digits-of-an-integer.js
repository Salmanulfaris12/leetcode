/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let pro=1
    let sum=0
    while(n>0)
    {
       const dig=n%10
       pro*=dig;
       sum+=dig;
       n=Math.floor(n/10)
    }
    return pro-sum
};