/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
        if (n <= 2) {
        return 0;
    }
    let isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; 
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    return isPrime.reduce((count, prime) => count + prime, 0);
};