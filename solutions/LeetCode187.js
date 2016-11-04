/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let set = new Set(), added = new Set(), ans = [];
    for (let i=0;i+9<s.length;i++){
        let str = s.slice(i,i+10);
        if (!set.has(str)){
            set.add(str);
        } else {
            if (!added.has(str)) {
                ans[ans.length] = str;
                added.add(str);
            }
        }
    }
    return ans;
};

