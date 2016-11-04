/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    let idx = [], uglyN = [1];
    primes.forEach((p)=>idx[p]=0);
    for (let i=0;i<n;i++){
        let min = Infinity;
        primes.forEach((p)=>{
            let value = p * uglyN[idx[p]];
            min = Math.min(min, value);
        });
        
        primes.forEach((p)=>{
            if (p * uglyN[idx[p]]===min) idx[p]++;
        });
        uglyN.push(min);
      
    }
    return uglyN[n-1];
};


nthSuperUglyNumber(12, [2, 7, 13, 19]);
