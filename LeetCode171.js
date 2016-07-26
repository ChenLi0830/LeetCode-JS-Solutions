/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", arr = [], ans = 0;
    for (let i=0;i<chars.length;i++) arr[chars[i]] = i+1;
    
    for (let i=0;i<s.length;i++) ans = ans*26 + arr[s[i]];
    return ans;
};
