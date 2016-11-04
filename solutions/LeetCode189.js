/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function(nums, k) {
    let index = 0, count = 0, lastValue = nums[0], target = 0;
    do {
        if (index===target && count>0) {
            target++;
            index = target;
            lastValue = nums[index];
        }
        count++;
        let newIndex = (index+k)%nums.length,
            temp = nums[newIndex];
        nums[newIndex] = lastValue;
        lastValue = temp;
        index = newIndex;
    } while (index!==target || count<nums.length);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length;
    reverse(0, nums.length-1);
    reverse(0, k-1);
    reverse(k, nums.length-1);
    
    function reverse(l,r){
        for (let i=l;i<(l+r)/2;i++){
            let temp = nums[i];
            nums[i] = nums[r+l-i];
            nums[r+l-i] = temp;
        }
    }
};
