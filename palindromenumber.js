var isPalindrome = function(x) {
   rev= x.toString().split("").reverse().join("")
    numrev=Number(rev)
   return numrev===x;
};
