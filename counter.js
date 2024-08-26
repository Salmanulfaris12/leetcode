// var createCounter = function(n) {
//     let count=n;
//     let a=[];
//      return function(counter) {
//         for(i=0;i<counter.length;i++)
//         {
//          if(counter[i]==="call"){
//              a.push(count)
//              count++
//          }
//         }
//         return a
//      };
//  };
//  let counters=createCounter(-2);
//  let b=counters(["call","call","call","call","call"])
//  console.log(b)

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