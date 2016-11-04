/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length===0) return 0;
    var i=1, count = 1;
    while (i<nums.length){
        while (nums[i] === nums[i-1]) i++;
        if (i>=nums.length) break;
        count++;
        nums[count-1] = nums[i];
        i++;
    }
    return count;
};

removeDuplicates([1]);
removeDuplicates([1,1,1,1,1,1,1,2]);
removeDuplicates([1,1,1,1,1,1,1,1]);
//removeDuplicates([1,1,2,3,3,7]);
//removeDuplicates([1,1,2,3,3,7,7]);