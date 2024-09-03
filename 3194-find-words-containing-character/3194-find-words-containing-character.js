/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let arr=[]
    words.forEach((item,index)=>{
    if(item.includes(x)){
       arr.push(index)
    }
  })
  return arr
};