/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let f = []; f[0] = 0;f[1] = 0;f[2] = 0;
    for (let i=0;i<nums.length;i++){
        f[nums[i]]++;
    }
    let n0 = f[0], n1 = f[1];
    for (let i=0;i<nums.length;i++){
        if (n0-->0){
            nums[i] = 0;
        } else if (n1-->0) {
            nums[i] = 1;
        } else {
            nums[i] = 2;
        }
    }
};


sortColors([0]);
sortColors([0,1,0,2,0]);