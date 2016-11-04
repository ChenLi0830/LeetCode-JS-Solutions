/**
 * Created by Chen on 2016-08-16.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l = 1, r = nums.length-1, n = nums.length-1;
    while (l<r){
        let m = Math.trunc((l+r)/2), count = 0;
        for (let i=0;i<nums.length;i++) if (nums[i]>m) count++;
        if (count<=n-m) r = m;
        else l = m+1;
    }
    return l;
};


findDuplicate([1,5,4,3,2,3]);
