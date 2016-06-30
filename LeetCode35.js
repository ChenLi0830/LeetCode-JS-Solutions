/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert2 = function(nums, target) {
    if (nums.length===0) return 0;
    return search(0, nums.length-1);

    function search(l,r){
        if (l===r-1 && nums[l]<target && target<nums[r]){
            return r;
        } else if (l===r && target===nums[l] || target < nums[l]) {
            return l;
        } else if (target > nums[r]){
            return r+1;
        }
        var m = Math.floor((l+r)/2);
        if (nums[m]>=target) return search(l,m);
        if (nums[m]<target) return search(m+1,r);
    }
};

var searchInsert = function(nums, target) {
    return search(0, nums.length-1);

    function search(l, r){
        var m = Math.floor((l+r)/2);
        if (l>r) return l;
        if (nums[m]===target) return m;
        if (nums[m]>target) return search(l, m-1);
        if (nums[m]<target) return search(m+1, r);
    }
};

console.assert(searchInsert([1], 2)===1);
console.assert(searchInsert([1,3,5,6], 5)===2);
console.assert(searchInsert([1,3,5,6], 2)===1);
console.assert(searchInsert([1,3,5,6], 7)===4);
console.assert(searchInsert([1,3,5,6], 0)===0);

