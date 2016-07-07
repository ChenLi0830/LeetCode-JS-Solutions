/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let map = [], start = 0, end, counter = t.length, minLength = Math.pow(2, 31) - 1, resultHead;
    for (let i = 0; i < t.length; i++) {
        map[t[i]] = map[t[i]] ? map[t[i]] + 1 : 1;
    }

    for (end = 0; end< s.length; end++) {
        if (map[s[end]] === undefined) {continue;}
        if (map[s[end]] > 0) {
            counter--;
        }
        map[s[end]]--;

        while (counter === 0) {
            if (end - start + 1 < minLength) {
                resultHead = start;
                minLength = end - start + 1;
            }
            if (map[s[start]] !== undefined && map[s[start]]++ === 0) {
                counter++;
            }
            start++;
        }
    }
    let ans = minLength < Math.pow(2,31)-1 ? s.substr(resultHead, minLength) : "";
    return ans;
};

minWindow("ADOBECODEBANC", "ABC");
minWindow("AA", "ABC");