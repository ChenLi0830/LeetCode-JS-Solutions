/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let p = [], max = 0, f = [];
    for (let i=0;i<nums.length;i++) p[nums[i]] = true;
    for (let i=0;i<nums.length;i++){
        let start = nums[i], end = start;
        while (!!p[end] && !f[end]) end++;
        if (f[end]) {
            max = Math.max(max, f[end] + end-start);
            for (let j=start;j<end;j++){
                f[j] = f[end] + end-j;
            }
        } else {//p[end] = false;
            max = Math.max(max, end-start);
            for (let j=start;j<end;j++){
                f[j] = end - j;
            }
        }
    }
    return max;
};
