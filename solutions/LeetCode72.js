/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let f = [];
    f[-1] = [];

    for (let j = -1; j < word2.length; j++) {
        f[-1][j] = j + 1;
    }

    for (let i = 0; i < word1.length; i++) {
        f[i] = [];
        f[i][-1] = f[i - 1][-1] + 1;
        for (let j = 0; j < word2.length; j++) {
            if (word1[i] === word2[j]) {
                f[i][j] = f[i - 1][j - 1];
            }
            else {
                f[i][j] = Math.min(f[i - 1][j - 1], f[i - 1][j], f[i][j - 1]) + 1;
            }
        }
    }
    let ans = f[word1.length - 1][word2.length - 1];
    return ans;
};

console.assert(minDistance("a", "c") === 1);
console.assert(minDistance("abccdd", "acdd") === 2);
console.assert(minDistance("abccdd", "a") === 5);
console.assert(minDistance("abccdd", "abcdddd") === 2);
console.assert(minDistance("algorithm", "altruistic") === 2);
