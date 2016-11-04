/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", ans = "";
    // n-=1;
    while (n>0){
        ans += chars[(n-1)%26];
        n = Math.trunc((n-1)/26);
    }
    return ans.split("").reverse().join("");
};
