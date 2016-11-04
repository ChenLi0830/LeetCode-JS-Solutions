/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var numsUsed = [], ans=[], solution = [];
    doSearch(0);
    return ans;

    function doSearch(level){
        if (level === nums.length) {
            ans = ans.concat([solution.slice(0)]);
            return;
        }
        for (let i=0;i<nums.length;i++){
            if (!numsUsed[i]){
                numsUsed[i] = true;
                solution[level] = nums[i];
                doSearch(level+1);
                numsUsed[i] = false;
            }
        }
    }
};

//permute([1,2,3]);
//permute([1]);
permute([]);

