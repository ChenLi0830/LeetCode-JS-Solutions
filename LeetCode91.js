/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length===0) return 0;
    let f = [];f[-1] = 1;
    for (let i=0;i<s.length;i++){
        f[i] = (s[i]!=="0" ? f[i-1]:0) + ((i>=1 && ((s[i-1]==="1")||(s[i-1]==="2" && s[i]<="6"))) ? f[i-2]:0);
    }
    return f[s.length-1];
};
