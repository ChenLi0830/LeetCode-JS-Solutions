/**
 * @param {number[]} nums
 * @return {number}
 */
var rob3 = function(nums) {
    let f = [];f[-1] = 0; f[-2] = 0; f[-3] = 0;
    for (let i=0;i<nums.length;i++){
        f[i] = Math.max(f[i-2]+nums[i], f[i-3]+nums[i]);
    }
    return Math.max(f[nums.length-2], f[nums.length-1]);
};


var rob2 = function(nums) {
    let f = [];f[-1] = [0,0];
    for (let i=0;i<nums.length;i++){
        f[i] = [];
        f[i][0] = Math.max(f[i-1][0], f[i-1][1]);
        f[i][1] = f[i-1][0]+nums[i];
    }
    return Math.max(f[nums.length-1][0], f[nums.length-1][1]);
};

var rob = function(nums) {
    let robLast, notRobLast, robCur=0, notRobCur=0;
    for (let i=0;i<nums.length;i++){
        robLast = robCur;
        notRobLast = notRobCur;
        robCur = notRobLast + nums[i];
        notRobCur = Math.max(robLast, notRobLast);
    }
    return Math.max(robCur, notRobCur);
};
