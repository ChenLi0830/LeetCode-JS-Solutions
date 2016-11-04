/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz", arr = [];
  alphabet.split("").forEach(c => arr[c] = 0);
  s.split("").forEach(c => arr[c]++);
  for (let i=0;i<s.length;i++){
    if (arr[s[i]]===1) return i;
  }
  return -1;
};

