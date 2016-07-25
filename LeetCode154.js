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
            let mid = Math.trunc((l+r)/2);
            if (nums[mid]>nums[r]){
                doSearch(mid+1, r);
            } else if (nums[mid]<nums[r]){
                doSearch(l,mid);
            } else {
                doSearch(l, r-1);
            }
        }
    }
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let l = 0,r = nums.length-1;
    while (l<r){
        if (nums[l]<nums[r]) return nums[l];
        let mid = Math.trunc((l+r)/2);
        if (nums[mid]>nums[r]){
            l = mid+1;
        } else if (nums[mid]<nums[r]){
            r = mid;
        } else {
            r--;
        }
    }
    return nums[l];
};



findMin([3,1,3]);