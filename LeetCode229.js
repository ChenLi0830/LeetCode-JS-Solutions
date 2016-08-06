/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let count1 = 0, count2 = 0, num1, num2, ans = [];
    for (let i=0;i<nums.length;i++){
        if (nums[i]===num1) count1++;
        else if (nums[i]===num2) count2++;
        else if (count1===0) {
            num1 = nums[i];
            count1++;
        } else if (count2===0){
            num2 = nums[i];
            count2++;
        } else {
            count1--;
            count2--;
        }
    }
    count1 = 0; count2 = 0;
    for (let i=0;i<nums.length;i++){
        if (nums[i]===num1) count1++;
        if (nums[i]===num2) count2++;
    }
    if (count1>nums.length/3) ans.push(num1);
    if (count2>nums.length/3) ans.push(num2);
    return ans
};

majorityElement([]);
majorityElement([1]);
majorityElement([1,2]);
majorityElement([1,2,2]);
majorityElement([1,2,2,1]);
majorityElement([1,2,1,5,4,5,1,5]);