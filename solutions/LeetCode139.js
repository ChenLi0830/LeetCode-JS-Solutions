/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    let n = 0, f=[]; f[-1] = true;
    let iterator = wordDict.values(), elem = iterator.next();
    while(!elem.done) {
        n = Math.max(n, elem.value.length);
        elem = iterator.next()
    }
    for (let i=0;i<s.length;i++){
        f[i] = false;
        for (let j=1; j<=n && i-j>=-1; j++){
            if (f[i-j]===true && wordDict.has(s.substr(i-j+1, j))) {
                f[i] = true;
                break;
            }
        }
    }
    return f[s.length-1];
};

wordBreak("leetcode", new Set(["leet", "code"]));