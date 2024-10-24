/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let newdig=[]
digits= (BigInt(digits.join("")) + BigInt(1)).toString().split("");
for(x of digits){
newdig.push(Number(x))
}
return newdig;
};