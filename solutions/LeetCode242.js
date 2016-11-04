/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charCount = [];
    if (s.length!==t.length) return false;
    for (let i=0;i<s.length;i++){
        charCount[s[i]] = charCount[s[i]]===undefined ? 1 : (charCount[s[i]]+1);
        charCount[t[i]] = charCount[t[i]]===undefined ? -1 : (charCount[t[i]]-1);
    }
    for (let i=0;i<s.length;i++){
        if (charCount[s[i]]!==0) return false;
    }
    return true;
};

// isAnagram("abceeeed", "dcbaeeeb");
isAnagram("a", "a");