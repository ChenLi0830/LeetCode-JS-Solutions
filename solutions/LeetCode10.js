/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

// Cheating solution
var isMatch = function(s, p) {
  var regex = new RegExp(p);
  return (s.search(regex)>-1 && s.replace(regex,"").length===0)
};

// Todo re-go-through DP solution

isMatch("", ".");
isMatch("aa", "a");
isMatch("aa", "aa");
isMatch("aaa", "aa");
isMatch("aa", "a*");
isMatch("aa", ".*");
isMatch("ab", ".*");
isMatch("aab", "c*a*b");
