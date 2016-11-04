/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if (nums.length<2) return 0;
    
    let max = -Infinity, min = Infinity, bucketMin = [], bucketMax= [];
    for (let i=0;i<nums.length;i++){
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
        bucketMin[i] = Infinity;
        bucketMax[i] = -Infinity;
    }
    
    let gap = Math.ceil((max-min)/(nums.length-1));
    for (let i=0;i<nums.length;i++){
        if (nums[i]===max || nums[i]===min) continue;
        
        let bucketIdx = Math.trunc((nums[i]-min)/gap);
        bucketMin[bucketIdx] = Math.min(bucketMin[bucketIdx], nums[i]);
        bucketMax[bucketIdx] = Math.max(bucketMax[bucketIdx], nums[i]);
    }
    
    let maxGap = gap, prevMax = min;
    for (let i=0;i<nums.length-1;i++){
        if (bucketMin[i]===Infinity) continue;
        maxGap = Math.max(maxGap, bucketMin[i]-prevMax);
        prevMax = bucketMax[i];
    }
    maxGap = Math.max(maxGap, max-prevMax);
    
    return maxGap;
};
