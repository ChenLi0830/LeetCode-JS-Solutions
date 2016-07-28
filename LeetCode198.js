/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let f = [];f[-1] = 0; f[-2] = 0; f[-3] = 0;
    for (let i=0;i<nums.length;i++){
        f[i] = Math.max(f[i-2]+nums[i], f[i-3]+nums[i]);
    }
    return Math.max(f[nums.length-2], f[nums.length-1]);
};
