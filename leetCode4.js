/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1, nums2) {
  if (nums1.length>nums2.length){
    var temp = nums1;
    nums1 = nums2;
    nums2 = temp;
  }

  const m = nums1.length, n = nums2.length;
  var l = 0, r = m, i,j;
  while(true){
    i = Math.floor((l+r)/2);
    j = getJ(i);
    if (i!==0 && j!==n && nums1[i-1]>nums2[j]){
      r = i-1;
      continue;
    }
    if (j!==0 && i!==m && nums2[j-1]>nums1[i]){
      l = i+1;
      continue;
    }
    break;
  }

  var maxLeft, minRight;

  if (i===0){
    maxLeft = nums2[j-1];
  } else if (j===0){
    maxLeft = nums1[i-1];
  } else {
    maxLeft = Math.max(nums1[i-1], nums2[j-1]);
  }

  if (i===m){
    minRight = nums2[j];
  } else if (j===n){
    minRight = nums1[i];
  } else {
    minRight = Math.min(nums1[i], nums2[j]);
  }

  if ((m+n)%2 === 1){
    return maxLeft;
  } else {
    return (maxLeft+minRight)/2;
  }

  function getJ(i){
    return Math.floor((m+n+1)/2-i);
  }
};

//findMedianSortedArrays([], [1]);
//findMedianSortedArrays([1,4], [2,3,5]);
//findMedianSortedArrays([1,2], [3,5,5]);
findMedianSortedArrays([1,2,6], [-1,-1,-1]);