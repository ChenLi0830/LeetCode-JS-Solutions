/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let curMax,overallMax=0;
    for (let i=0;i<nums.length;i++){
        if (overallMax<i) break;
        curMax = i+nums[i];
        if (curMax>overallMax) overallMax = curMax;
        if (overallMax>=nums.length-1) {
            return true;
        }
    }
    return false;
};

console.assert(canJump([2,3,1,1,4])===true);
console.assert(canJump([3,2,1,0,4])==false);