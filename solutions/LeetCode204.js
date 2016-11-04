/**
 * @param {number} n
 * @return {number}
 */
var countPrimes2 = function(n) {
    let ans = 0, set = new Set();
    for (let i=2;i<=n;i++){
        if (!set.has(i)) {
            markOff(i);
            ans++;
        }
    }
    return ans;
    
    function markOff(p){
        set.add(p);
        let num = p*p;
        while (num<=n){
            set.add(num);
            num+=p;
        }
    }
};

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let ans = 0, set = [];
    for (let i=2;i<=n;i++){
        set[i] = false;
    }
    
    for (let i=2;i<Math.sqrt(n);i++){
        if (!set[i]) {
            markOff(i);
        }
    }
    for(let i=2;i<n;i++){
        ans += set[i] ? 0:1;
    }
    return ans;
    
    function markOff(p){
        let num = p*p;
        while (num<=n){
            set[num]=true;
            num+=p;
        }
    }
};


countPrimes(5);