/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length===0) return 0;
    if (nums.length===1) return nums[0];
    let f=[], g=[];
    f[-1] = [0,0];
    for (let i=0;i<nums.length-1;i++){
        f[i] = [];
        f[i][0] = Math.max(f[i-1][1], f[i-1][0]);
        f[i][1] = f[i-1][0]+nums[i];
    }
    g[0] = [0,0];
    for (let i=1;i<nums.length;i++){
        g[i] = [];
        g[i][0] = Math.max(g[i-1][1], g[i-1][0]);
        g[i][1] = g[i-1][0]+nums[i];
    }
    return Math.max(f[nums.length-2][0],f[nums.length-2][1], g[nums.length-1][0], g[nums.length-1][1]);
};
