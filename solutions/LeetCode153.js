/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin2 = function(nums) {
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

var findMin = function(nums) {
    let l = 0, r = nums.length-1;
    while (l<r){
        if (nums[l]<nums[r]) return nums[l];
        let mid = Math.trunc((l+r)/2);
        if (nums[mid]>nums[r]) {
            l = mid+1;
        } else {
            r = mid;
        }
    }
    return nums[l];
};

