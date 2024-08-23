var LengthOfLastWord=function(s){
    s=s.trim().split(" ")
     let res=s.filter((value)=>{
       return value==s[s.length-1]
    })
     return res.toString().length
}
console.log(LengthOfLastWord("  hello world  "))