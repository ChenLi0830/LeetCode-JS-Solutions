/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    let f = [];
    if (t.length===0 || s.length===0) return 0;

    for (let i=0;i<t.length;i++){
        f[i] = []; let sum = 0;
        for (let j=i;j<s.length;j++){
            sum = i===0 ? 1 : sum + f[i-1][j-1];
            f[i][j] = t[i]===s[j] ? sum:0;
        }
    }
    let ans = 0;
    for (let k = 0;k<s.length;k++){
        ans += (!!f[t.length-1][k] ? f[t.length-1][k]:0);
    }
    return ans;
};
