/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var lastLetterIndex = [], ans = 0, value=0;
  for (var i=0;i<s.length;i++){
    //var value = i - (lastLetterIndex[s[i]]>=0 ? lastLetterIndex[s[i]] : -1);
    if (lastLetterIndex[s[i]]>=0){
      if (i-lastLetterIndex[s[i]]>value){
        value++
      } else {
        value = i-lastLetterIndex[s[i]];
      }
    } else {
      value ++;
    }
    //value = value + 1;
    ans = Math.max(value, ans);
    lastLetterIndex[s[i]] = i;
  }
  return ans;
};


lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("aaaaaa");
lengthOfLongestSubstring("pwwkew");
