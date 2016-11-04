/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let set = new Set();
    while (n!==1 && !set.has(n)){
        set.add(n);
        n = doCalc(n);
    }
    return n===1;
    
    function doCalc(n){
        let ans = 0;
        while (n>0){
            ans += (n%10)*(n%10);
            n = Math.trunc(n/10);
        }
        return ans;
    }
};

isHappy(19);
isHappy(0);