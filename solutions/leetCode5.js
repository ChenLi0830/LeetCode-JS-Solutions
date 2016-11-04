var longestPalindrome = function (s) {
  var ans = "";

  for (var i = 0; i < s.length; i++) {
    extendSubstring(i, i);
    extendSubstring(i, i + 1);
  }
  return ans;

  function extendSubstring(l, r) {
    if (s[l] === s[r] && l > 0 && r < s.length - 1) {
      extendSubstring(l - 1, r + 1);
    } else {
      if (s[l] === s[r]) {
        if (r - l + 1 > ans.length)
          ans = s.substr(l, r - l + 1);
      } else {
        if (r - l - 1 > ans.length) {
          ans = s.substr(l + 1, r - l - 1);
        }
      }
    }
  }
};

var longestPalindrome2 = function (s) {
  var currentMax = 0, result;
  for (var i = 0; i < s.length; i++) {
    if (isParlindrome(i - currentMax, i)) {
      currentMax += 1;
      result = s.substr(i - currentMax + 1, currentMax);
    }
    if (isParlindrome(i - currentMax - 1, i)) {
      currentMax += 2;
      result = s.substr(i - currentMax + 1, currentMax);
    }
  }
  return result;

  function isParlindrome(start, end) {
    for (var i = start; i < Math.floor((end + start) / 2) + 1; i++) {
      if (s[i] !== s[start + end - i] || i < 0 || i > s.length - 1) {
        return false;
      }
    }
    return true;
  }

};

//longestPalindrome("abcbe");
//
//longestPalindrome("a");
//longestPalindrome("ab");
//longestPalindrome("aba");
//longestPalindrome("abba");
//longestPalindrome("abbabcdcba");

longestPalindrome2("abcbe");
longestPalindrome2("a");
longestPalindrome2("ab");
longestPalindrome2("aba");
longestPalindrome2("abba");
longestPalindrome2("abbabcdcba");