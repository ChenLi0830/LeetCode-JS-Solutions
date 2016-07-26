/**
 * @param {number} n
 * @return {number}
 */

var trailingZeroes2 = function(n) {
    let ans = 0;
    while (n>0){
        n = Math.trunc(n/5);
        ans += n;
    }
    return ans;
};

var trailingZeroes = function(n) {
    return Math.trunc(n/5) + (n >=5 ? trailingZeroes(Math.trunc(n/5)) : 0);
};
