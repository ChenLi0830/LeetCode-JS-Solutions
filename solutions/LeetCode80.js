/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0;

    for (let i=0;i<nums.length;i++){
        let num = nums[i];
        nums[index++] = nums[i++];
        if (i<nums.length && nums[i]===nums[i-1]) {
            nums[index++] = nums[i++];
        }
        while (i<nums.length && num===nums[i]) i++;
        i--;
    }

    return index;
};

removeDuplicates([1,1,1,2,2,3]);