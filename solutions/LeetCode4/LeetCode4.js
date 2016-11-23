/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) { // O(m+n)
  let i = 0, j = 0, arr = [];
  while (i<nums1.length || j<nums2.length){
    if (i === nums1.length || nums1[i] > nums2[j]) arr.push(nums2[j++]);
    else arr.push(nums1[i++]);
  }
  let mid = Math.trunc(arr.length / 2);
  if (arr.length % 2 === 0) return (arr[mid-1] + arr[mid])/2;
  else return arr[mid];
};


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) { // O(log(min(n,m)))
  if (nums1.length > nums2.length) {// make sure nums1.length < nums2.length
    let tmp = nums1;
    nums1 = nums2;
    nums2 = tmp;
  }
  
  let m = nums1.length, n = nums2.length;
  nums1[-1] = -Infinity;
  nums2[-1] = -Infinity;
  nums1[m] = Infinity;
  nums2[n] = Infinity;
  let l = 0, r = m;
  while (l <= r){
    let i = ~~((l+r)/2),
        j = ~~((m + n - 2*i) / 2);
    if (nums1[i-1] > nums2[j]) r = i-1;
    else if (nums2[j-1] > nums1[i]) l = i+1;
    else { // answer is found
      if ((m+n) % 2 === 1) return Math.min(nums1[i], nums2[j]);
      else return (Math.max(nums1[i-1], nums2[j-1]) + Math.min(nums1[i], nums2[j]))/2;
    }
  }
};

console.assert(findMedianSortedArrays([1,2], [3]) === 2);
console.assert(findMedianSortedArrays([1], [3,4]) === 3);
console.assert(findMedianSortedArrays([1,2], [3,4]) === 2.5);
console.assert(findMedianSortedArrays([1,2,3,4,5], [3,4,6,6,6]) === 4);