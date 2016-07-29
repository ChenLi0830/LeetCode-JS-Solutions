/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let valueSet = new Set(), map = new Map();
    if (s.length!==t.length) return false;
    for (let i=0;i<s.length;i++){
        if (!map.has(s[i])){
            if (!valueSet.has(t[i])){
                map.set(s[i], t[i]);
                valueSet.add(t[i]);
            }
            else return false;
        } else {
            if (map.get(s[i])!==t[i]) return false;
        }
    }
    return true;
};

console.assert(isIsomorphic("abcd","elkj"));
console.assert(isIsomorphic("aaaa","oooo"));
console.assert(!isIsomorphic("aaaa","abcd"));
console.assert(isIsomorphic("eye","lol"));