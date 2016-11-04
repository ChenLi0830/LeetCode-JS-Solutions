/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz", arr = [];
  alphabet.split("").forEach(c =>  arr[c] = 0);
  
  for (let i=0;i<t.length;i++) arr[t[i]]++;
  for (let i=0;i<s.length;i++) arr[s[i]]--;
  for (let i=0;i<alphabet.length;i++){
    if (arr[alphabet[i]]>0) return alphabet[i];
  }
};
