/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;  
    };
};


let counter = createCounter(10);
let results = [];
results.push(counter()); 
results.push(counter());
results.push(counter()); 

console.log(results);
      
    
    


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */