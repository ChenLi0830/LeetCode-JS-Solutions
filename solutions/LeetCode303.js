/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.sum = [];
    this.sum[-1] = 0;
    for (let i=0;i<nums.length;i++){
        this.sum[i] = this.sum[i-1] + nums[i];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return this.sum[j] - this.sum[i-1];
};


var numArray = new NumArray([-2, 0, 3, -5, 2, -1]);
numArray.sumRange(0, 2);
numArray.sumRange(2, 5);

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */