/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    var solution = [], ans = [], numUsed=[];
    nums.sort((a,b)=>{return a-b});
    doSearch(0);
    return ans;

    function doSearch(level){
        if (level===nums.length){
            ans = ans.concat([solution.slice(0)]);
            return;
        }

        for (let i=0;i<nums.length;i++){
            if (!numUsed[i]){
                numUsed[i] = true;
                solution[level] = nums[i];
                doSearch(level+1);
                numUsed[i] = false;
                while (nums[i]===nums[i+1]) i++;
            }
        }
    }
};

//permuteUnique([]);
//permuteUnique([1]);
permuteUnique([1,1,2]);
permuteUnique([1,1,2,2]);