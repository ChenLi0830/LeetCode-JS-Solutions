/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// DP solution
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let dp = [], arr = [], ans = 0;
  arr[0] = new Set();
  dp[0] = 0;
  for (let i=0; i<s.length; i++){
    let newDp = []; newDp[0] = 0;
    let newArr = []; newArr[0] = new Set();
    for (let j=1; j<=Math.min(i+1, k); j++){
      if (arr[j] !== undefined && arr[j].has(s[i])) {
        newDp[j] = dp[j]+1;
        newArr[j] = arr[j];
      } else {
        newDp[j] = dp[j-1] + 1;
        if (j===1) newArr[j] = new Set([s[i]]);
        else newArr[j] = arr[j-1].add(s[i]);
      }
      ans = Math.max(ans, newDp[j]);
    }
    dp = newDp;
    arr = newArr;
  }
  return ans;
};


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// Slide window solution
var lengthOfLongestSubstringKDistinct = function(s, k) {
  let arr = [], l = 0, ans = 0, count = 0;
  for (let r = 0; r<s.length; r++){
    arr[s[r]] = ~~arr[s[r]] + 1;
    if (arr[s[r]]===1) count++;
    if (count > k){
      do {
        arr[s[l]]--;
        l++;
      } while (arr[s[l-1]]>0);
      count--;
    }
    ans = Math.max(ans, r-l+1);
  }
  return ans;
};



console.assert(lengthOfLongestSubstringKDistinct("eceba", 2)===2);
