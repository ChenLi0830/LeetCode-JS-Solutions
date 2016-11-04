/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let start = 0, ans = [];
    while (start<nums.length){
        let l = start, r = nums.length-1;
        while (l<r){
            let m = Math.trunc((l+r+1)/2);
            if (nums[m]-nums[l]===m-l) l = m;
            else r = m-1;
        }
        if (start === l) ans.push(nums[start].toString());
        else ans.push(nums[start].toString() + "->" + nums[l].toString());
        start = l+1;
    }
    return ans;
};