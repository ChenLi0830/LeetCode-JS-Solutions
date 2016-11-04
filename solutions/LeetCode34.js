/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length===0) return [-1,-1];
    var left = searchLeft(0,nums.length-1);
    var right = searchRight(0, nums.length-1);
    return [left, right];

    function searchLeft(l,r){
        if (nums[l]===target){
            return l;
        } else if (nums[l]>target || nums[r]<target) return -1;

        var m = Math.floor((l+r)/2);
        if (nums[m]<target) {return searchLeft(m+1, r)}
        if (nums[m]>=target) {return searchLeft(l,m)}
    }

    function searchRight(l,r){
        if (nums[r]===target){
            return r;/*Math.min(r+1, nums.length-1);*/
        } else if (nums[l]>target || nums[r]<target) return -1;

        var m = Math.floor((l+r+1)/2);
        if (nums[m]<=target) {return searchRight(m, r)}
        if (nums[m]>target) {return searchRight(l, m-1)}
    }
};

searchRange([1,2,3,3,3,3,4,5,9], 3);
searchRange([5, 7, 7, 8, 8, 10], 8);
searchRange([5, 7, 7, 8, 8, 10], 9);
searchRange([5, 7, 7, 8, 8, 10], 3);
searchRange([5, 7, 7, 8, 8, 10], 11);