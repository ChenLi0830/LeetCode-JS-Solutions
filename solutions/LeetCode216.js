/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    if (k===0) return [];
    let ans = [], solution=[];
    doSearch(k, 1, 0);
    return ans;
    
    function doSearch(k, i0, cur){
        if (k===1) {
            if (n-cur>=i0 && 9>=n-cur) {
                solution.push(n-cur);
                ans.push(solution.slice(0));
                solution.pop();
            }
            return;
        }
        for (let i=i0;i<=9;i++){
            solution.push(i);
            doSearch(k-1, i+1, cur+i);
            solution.pop();
        }
    }
};