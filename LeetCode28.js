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

//KMP
var strStr = function(haystack, needle) {
    var next = [], k = -1, i = 0, j=0;
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

strStr("a", "");
//strStr("abcdeabcdef", "abcdef");
//strStr("BBC ABCDAB ABCDABCDABDE", "ABCDABD");
