/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let x1 = 0, x2 = 0, mask = 0;
    for (let i=0;i<nums.length;i++){
        x2 ^= x1&nums[i];
        x1 ^= nums[i];
        mask = ~(x2 & x1);
        x2 &= mask;
        x1 &= mask;
    }
    return x1;
};