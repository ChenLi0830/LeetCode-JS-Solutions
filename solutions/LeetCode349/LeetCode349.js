/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1), ansSet = new Set();
  nums2.forEach(num => {if (set1.has(num)) ansSet.add(num)});
  return [...ansSet];
};


