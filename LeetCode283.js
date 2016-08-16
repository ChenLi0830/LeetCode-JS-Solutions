/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroI = 0;
    for (let i=0;i<nums.length;i++){
        if (nums[i]!==0) nums[nonZeroI++] = nums[i];
    }
    for (let i=nonZeroI;i<nums.length;i++) nums[i] = 0;
};