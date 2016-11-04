/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let ans = 0, set = new Set();
  s.split("").forEach(c=>{
    if (!set.has(c)){
      set.add(c);
    } else {
      set.delete(c);
      ans += 2;
    }
  });
  if (ans<s.length && s.length>0) ans++;
  return ans;
};

