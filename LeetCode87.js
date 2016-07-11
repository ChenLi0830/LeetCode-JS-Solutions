/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function (s1, s2) {
    if (s1===s2) return true;
    if (s1.length!==s2.length) return false;

    let charCount = [];
    for (let i = 0; i < s1.length; i++) {
        charCount[s1[i]] = charCount[s1[i]] === undefined ? 1 : charCount[s1[i]] + 1;
        charCount[s2[i]] = charCount[s2[i]] === undefined ? -1 : charCount[s2[i]] - 1;
    }
    for (let i = 0; i < s1.length; i++) {
        if (charCount[s1[i]] !== 0) return false;
    }

    for (let i=1;i<s1.length;i++){
        let subStr = s1.substr(0,i);
        if (isScramble(s1.substr(0,i), s2.substr(0,i)) && isScramble(s1.substr(i), s2.substr(i))) return true;
        if (isScramble(s1.substr(0,i), s2.substr(s1.length-i)) && isScramble(s1.substr(i), s2.substr(0, s1.length-i))) return true;
    }

    return false;
};

isScramble("a", "a");
isScramble("ab", "ba");
isScramble("abcd", "dbca");