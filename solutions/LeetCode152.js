/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct2 = function(nums) {
    let start = 0, ans = -Infinity;
    for (let i=0;i<nums.length;i++){
        if (nums[i]===0) {
            ans = Math.max(ans, 0, doCalc(nums.slice(start, i)));
            start = i+1;
        }
    }
    ans = Math.max(ans, doCalc(nums.slice(start, nums.length)));
    return ans;
    
    function doCalc(nums){
        if (nums.length===0) return 0;
        if (nums.length===1) return nums[0];
        let firstN = -1, lastN, countN=0, ans = 1;
        for (let i=0;i<nums.length;i++){
            if (nums[i]<0){
                if (firstN===-1) firstN = i;
                lastN = i;
                countN++;
            }
        }
        if (countN%2===0){
            for (let i=0;i<nums.length;i++) ans *= nums[i];
        } else {
            let n1 = 1, n2 = 1;
            for (let i=0;i<nums.length;i++) {
                if (i<lastN) n1 *= nums[i];
                if (i>firstN) n2 *= nums[i];
            }
            ans = Math.max(n1, n2);
        }
        return ans;
    }
};

var maxProduct = function(nums){
    let ans = nums[0], max = nums[0], min = nums[0];
    for (let i=1;i<nums.length;i++){
        if (nums[i]<0){
            let temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], max*nums[i]);
        min = Math.min(nums[i], min*nums[i]);
        ans = Math.max(max, ans);
    }
    return ans;
};

