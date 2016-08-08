/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2 = function(nums) {
    let f = [], g = [], ans = [];
    g[nums.length] = 1;
    for (let i=nums.length-1;i>=1;i--) g[i] = g[i+1]*nums[i];
    
    f[0] = 1;
    for (let i=0;i<nums.length;i++){
        ans[i] = f[i] * g[i+1];
        f[i+1] = f[i] * nums[i];
    }
    return ans;
};

var productExceptSelf = function(nums) {
    let ans = []; ans[nums.length-1] = 1;
    for (let i=nums.length-2;i>=0;i--) ans[i] = ans[i+1]*nums[i+1];
    
    let left = 1;
    for (let i=0;i<nums.length;i++){
        ans[i] *= left;
        left *= nums[i];
    }
    return ans;
};

