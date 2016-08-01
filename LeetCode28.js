/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr3 = function(haystack, needle) {
    return haystack.search(needle);
};

var strSt2 = function(haystack, needle) {
    var found;
    for (var i=0;i<haystack.length-needle.length+1;i++){
        found = true;
        for (var j=0;j<needle.length;j++){
            if (haystack[i+j]!==needle[j]) {
                found = false;
                break;
            }
        }
        if (found) break;
    }
    return found ? i:-1;
};

// KMP, kmp
var strStr21 = function(haystack, needle) {
    var next = [], k = -1, i = 0, j=0;
    // Initialize 'next' array
    next[0] = -1;
    while (j < needle.length){
        if (k===-1 || needle[k]===needle[j]){
            k++;
            j++;
            if (needle[k]!==needle[j]){
                next[j] = k;
            } else {
                next[j] = next[k];
            }
        } else {
            k = next[k];
        }
    }

    j=0;
    while (i<haystack.length && j<needle.length){
        if (j===-1 || haystack[i]===needle[j]){
            i++;
            j++;
            if (j===needle.length) break;
        } else {
            j = next[j];
        }
    }
    if (j===needle.length) {
        return i-j;
    }
    else return -1;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack==="") return needle==="" ? 0 : -1;
    let repeat = [];
    repeat[0] = -1;
    for (let i=1, m = 0;i<needle.length;i++, m++){
        if (needle[m]!==needle[i]) {
            while (needle[m]!==needle[i]){
                if (m===0) {
                    m = -1;
                    break;
                }
                m = repeat[m-1]+1;
            }
        }
        repeat[i] = m;
    }
    
    for (let i=0, j=0;i<haystack.length;i++, j++){
        if (haystack[i]!==needle[j]) {
            while (haystack[i]!==needle[j]){
                if (j===0) {j=-1;break;}
                j = repeat[j-1]+1;
            }
        }
        if (j===needle.length-1) return j===-1 ? 0:i-j;
    }
    return -1;
};

// strStr("a", "");
console.assert(strStr("abcdeabcdef", "abcdef")===5);
console.assert(strStr("BBC ABCDAB ABCDABCDABDE", "ABCDABD")===15);
