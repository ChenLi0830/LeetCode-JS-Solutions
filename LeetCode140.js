/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
/**
 * @param {string} s
 * @param {set<string>} wordDict
 *   Note: wordDict is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
    let n = 0, iterator = wordDict.values(), elem = iterator.next(), ans = [], f=[]; f[-1] = true;
    ans[-1] = [];
    while (!elem.done) {
        n = Math.max(n, elem.value.length);
        elem = iterator.next()
    }
    for (let i = 0; i < wordDict.length; i++) if (wordDict[i].length > n) n = wordDict[i].length;

    for (let i=0;i<s.length;i++){
        f[i] = false;
        for (let j=1; j<=n && i-j>=-1; j++){
            if (f[i-j]===true && wordDict.has(s.substr(i-j+1, j))) {
                f[i] = true;
                break;
            }
        }
    }

    if (f[s.length-1]){
        for (let i = 0; i < s.length; i++) {
            ans[i] = [];
            for (let j = 1; j <= n && i - j + 1 >= 0; j++) {
                let subStr = s.substr(i - j + 1, j);
                if ((i-j+1===0 || ans[i - j].length>0) && wordDict.has(subStr)) {
                    if (ans[i - j].length === 0) ans[i][ans[i].length] = [subStr];
                    else {
                        //ans[i] = ans[i].concat(ans[i - j]);
                        //for (let k=ans[i].length-ans[i-j].length;k<ans[i].length;k++){
                        //    let m = ans[i][k].length;
                        //    ans[i][k][m] = subStr;
                        //}
                         for (let k = 0; k < ans[i - j].length; k++) {
                             ans[i][ans[i].length] = ans[i - j][k].concat(subStr);
                         }
                    }
                }
            }
        }
        for (let i=0;i<ans[s.length-1].length;i++){
            ans[s.length-1][i] = ans[s.length-1][i].join(" ");
        }
        return ans[s.length - 1];
    } else return [];
};

wordBreak("aaaaaaa", new Set(["aaaa","aaa"]));
//wordBreak("", new Set(["leeta", "csode", "le1", "est"]));
//wordBreak("leetbasdfasdfasdf", new Set(["leeta", "csode", "le1", "est", "leetbasdfasdfasdf"]));
//wordBreak("leetcode", new Set(["leeta", "csode", "le1", "est"]));
//wordBreak("leetcode", new Set(["leet", "code", "le", "et"]));
//wordBreak("catsanddog", new Set(["cat", "cats", "and", "sand", "dog"]));
//wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", new Set(["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]));