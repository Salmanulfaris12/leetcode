var isPalindrome=function(s){
    let normalizedString=s.toLowerCase().replace(/[^a-z0-9]/g,'')
    let reverseString=normalizedString.split("").reverse().join("")
    return normalizedString==reverseString
}
console.log(isPalindrome("A man, a plan, a canal: Panama"));