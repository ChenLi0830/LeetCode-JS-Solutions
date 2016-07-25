/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    return doSearch(0, nums.length-1);
    
    function doSearch(l,r){
        if (l===r) return nums[l];
        if (nums[l]<nums[r]) return nums[l];
        else {
            let m = Math.trunc((l+r)/2);
            return Math.min(doSearch(l, m), doSearch(m+1, r));
        }
    }
};