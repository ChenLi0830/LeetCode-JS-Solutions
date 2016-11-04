/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a, b)=> {
        return a - b
    });
    var solution = [], solutionI = -1, ans = [], nums = [], index = -1;
    candidates[-1] = -1;
    // Remove duplicates, save to 'nums'
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i] !== candidates[i - 1]) {
            index++;
            nums[index] = candidates[i];
        }
    }

    findNext(0, 0);
    return ans;

    function findNext(total, i0) {
        if (total > target) return;
        if (total === target) {
            ans = ans.concat([solution.slice(0,solutionI+1)]);
            return;
        }
        for (var i = i0; i < nums.length; i++) {
            solutionI++;
            solution[solutionI] = nums[i];
            findNext(total + nums[i], i);
            solutionI--;
        }
    }
};


//combinationSum([2, 3, 6, 7], 7);
combinationSum([1,2], 3);
//combinationSum([2,2], 7);
combinationSum([7, 3, 3, 6, 6, 2], 7);
combinationSum([7, 3, 6, 2], 7);