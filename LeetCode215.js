/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    ans = -1;
    return doSearch(nums, k);
    
    function doSearch(nums, k){
        let l = 0, r = nums.length-1, m = Math.trunc((l+r)/2),
            pivot = nums.splice(m,1)[0],
            left = [], right = [];
        
        for (let i=l;i<nums.length;i++){
            if (nums[i]>pivot) left.push(nums[i]);
            if (nums[i]<pivot) right.push(nums[i]);
        }
        if (left.length+1===k) return pivot;
        else if (left.length+1>k) return doSearch(left, k);
        else return doSearch(right, k-left.length-1);
    }
};

findKthLargest()