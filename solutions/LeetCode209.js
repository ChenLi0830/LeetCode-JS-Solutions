/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen2 = function(s, nums) {
    let f = [];
    for (let l=1;l<=nums.length;l++){
        f[l] = [];
        for (let i=0;i+l-1<nums.length;i++){
            f[l][i] = l===1 ? nums[i] : f[l-1][i] + nums[i+l-1];
            if (f[l][i]>=s) return l;
        }
    }
    return 0;
};

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    let sum = 0, i = 0, j = 0, min = Infinity;
    while (j<nums.length){
        sum+=nums[j++];
        while (sum>=s){
            min = Math.min(min, j-i);
            sum -= nums[i++];
        }
    }
    return min===Infinity? 0 : min;
};




// f[i][l] is the sum from i to i+l-1 (l is the length)
// l from 1 to array.length
// f[1][i] = nums[i];
// f[l][i] = f[l-1][i] + nums[i+l-1];
// once f[l][i]>= target, return l;
// O(n^2);


