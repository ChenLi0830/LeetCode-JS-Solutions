/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let step1 = 1, step2 = 0;
    for (let i=0;i<n;i++){
        let cur = step1 + step2;
        step2 = step1;
        step1 = cur;
    }
    return step1;
};
