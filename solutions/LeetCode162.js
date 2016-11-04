/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement2 = function(nums) {
    let l=0, r=nums.length-1;
    while (l<r){
        let mid = Math.trunc((l+r)/2);
        if (nums[l]>nums[mid]) {
            r = mid-1;
        }
        else if (nums[r]>nums[mid]){
            l = mid+1;
        } else {
            r = r-1;
        }
    }
    return l;
};



var findPeakElement = function(nums) {
    let l=0, r=nums.length-1;
    while (l<r){
        let mid1 = Math.trunc((l+r)/2), mid2 = mid1+1;
        if (nums[mid1]>nums[mid2]) {
            r = mid1;
        }
        else l = mid2;
    }
    return l;
};

