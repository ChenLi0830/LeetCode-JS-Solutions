/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    if (t<0 || k<1) return false;
    let max = -Infinity, min = Infinity;
    for (let i=0;i<nums.length;i++){
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
    }
    // Initialize stacks
    let n = Math.trunc((max-min)/(t+1))+1,
        stacks = [];
    for (let i=-1;i<n+1;i++) stacks[i] = [];
    
    for (let i=0;i<nums.length;i++){
        if (i>=k+1){// Check and delete number in nums[i-k-1];
            let delS = Math.trunc((nums[i-k-1]-min)/(t+1));
            stacks[delS] = [];
        }
        // Check and add nums[i];
        let s = Math.trunc((nums[i]-min)/(t+1));
        if (stacks[s].length>0) return true;
        if (stacks[s-1].length>0 && nums[i]-stacks[s-1][0]<=t) return true;
        if (stacks[s+1].length>0 && stacks[s+1][0]-nums[i]<=t) return true;
        stacks[s].push(nums[i]);
    }
    
    return false;
};
