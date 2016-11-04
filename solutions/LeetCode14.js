/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix2 = function(strs) {
  var minLength = Math.pow(2,31);
  var minIndex;

  if (strs.length===0) return "";

  for (var i=0;i<strs.length;i++){
    if (strs[i].length<minLength){
      minLength = strs[i].length;
      minIndex = i;
    }
  }
  var ans = "";
  for (var k=0;k<strs[minIndex].length;k++){
    for (i=0;i<strs.length;i++){
      if (strs[i].charAt(k)!==strs[minIndex].charAt(k)) return ans;
    }
    ans += strs[minIndex].charAt(k);
  }
  return ans;
};

var longestCommonPrefix = function(strs) {
  'use strict';
  if (strs === undefined || strs.length === 0) { return ""; }
  var ans = strs[0];

  for (var i=0;i<strs.length;i++){
    while (strs[i].indexOf(ans)!==0){
      ans = ans.substr(0, ans.length-1);
    }
  }

  return ans;
};

console.assert(longestCommonPrefix([])==="");
console.assert(longestCommonPrefix(["a"])==="a");
console.assert(longestCommonPrefix(["abc", "ab", "abde"])==="ab");
console.assert(longestCommonPrefix(["abc", "abq", "abde"])==="ab");
console.assert(longestCommonPrefix(["c","acc","ccc"])==="");
