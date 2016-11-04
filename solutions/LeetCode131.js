/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let solution = [], sI = 0, ans = [];
    doSearch(1, s[0]);
    return ans;
    function doSearch(l, word){
        if (l===s.length){
            if (isParlindrome(word)){
                solution[sI] = word;
                ans[ans.length] = solution.slice(0, sI+1);
            }
            return;
        }
        if (isParlindrome(word)) {
            solution[sI++] = word;
            doSearch(l+1, s[l]);
            sI--;
        }
        doSearch(l+1, word + s[l]);
    }

    function isParlindrome(word){
        for (let i=0;i<word.length/2;i++){
            if (word[i]!==word[word.length-1-i]) return false;
        }
        return true;
    }
};



