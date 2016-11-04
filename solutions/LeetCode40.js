/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var solution = [], ans = [];
    candidates.sort((a,b)=>{return a-b});
    searchNext(0,0,0);
    return ans;

    function searchNext(total, solutionI, i0){
        if (total>target) return;
        if (total===target){
            ans = ans.concat([solution.slice(0,solutionI)]);
            return;
        }
        for (var i=i0;i<candidates.length;i++){
            while (i>i0 && i<candidates.length && candidates[i]===candidates[i-1]) i++;
            solution[solutionI] = candidates[i];
            searchNext(total+candidates[i], solutionI+1, i+1);
        }
    }
};
combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
