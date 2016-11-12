/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  let charCount = [], curCount = [], pCount = new Map(), ans = [];
  let aCode = "a".charCodeAt(0);
  
  for (let c of p) {
    let index = c.charCodeAt(0)-aCode;
    pCount.set(index, ~~pCount.get(index)+1);
  }
  pCount = [...pCount];
  
  charCount.push(curCount.slice());
  for (let i=0; i<s.length; i++) {
    let c = s[i];
    curCount[c.charCodeAt(0)-aCode] = ~~curCount[c.charCodeAt(0)-aCode] + 1;
    charCount.push(curCount.slice());
    if (charCount.length===p.length+1) {
      let isAnagram = checkAnagram(charCount, pCount, p.length);
      if (isAnagram) ans.push(i - p.length +1);
      charCount.shift();
    }
  }
  return ans;
  
  function checkAnagram(charCount, pCount, n){
    let ans = true;
    pCount.forEach(pair => {
      let c = pair[0], value = pair[1];
      if (~~charCount[n][c]-~~charCount[0][c] !== value){
        ans = false;
      }
    });
    return ans;
  }
};



findAnagrams("cbaebabacd", "abc");
// s: "cbaebabacd" p: "abc"
