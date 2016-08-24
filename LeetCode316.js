/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
    let ans = "", indexArr = [], set = new Set(), added = new Set();
    for (let i=0;i<s.length;i++) {
        indexArr[s[i]] = i;
        set.add(s[i]);
    }
    let cur = 0, size = set.size;
    for (let i=0;i<size;i++){
        // Find minimal
        let min = Infinity;
        set.forEach((c)=> {min = Math.min(min, indexArr[c])});
        let char = null;
        for (let j = cur;j<=min;j++){
            if (!added.has(s[j]) && (!char || s[j].localeCompare(char)<0)){
                char = s[j];
                cur = j+1;
            }
        }
        set.delete(char);
        ans += char;
        added.add(char);
    }
    return ans;
};


removeDuplicateLetters("cbacdcbc");
removeDuplicateLetters("bcabc");