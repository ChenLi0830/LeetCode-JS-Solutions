/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m+n-1, i1 = m-1, i2 = n-1;
    nums1[-1] = -Math.pow(2,31); nums2[-1] = -Math.pow(2,31);
    while (i>=0){
        let num;
        if (nums1[i1]<nums2[i2]){
            num = nums2[i2--];
        } else {
            num = nums1[i1--];
        }
        nums1[i--] = num;
    }
};
-