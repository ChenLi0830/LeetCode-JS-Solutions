/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length===0) return 0;
    let lastElem = 0, curElem, max = -Math.pow(2,31);
    for (let i=0;i<nums.length;i++){
        curElem = lastElem>0 ? lastElem + nums[i] : nums[i];
        max = curElem > max? curElem:max;
        lastElem = curElem;
    }
    return max;
};