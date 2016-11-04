/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[]}
 */
var maxNumber2 = function(nums1, nums2, k) {
    let g1 = [], g2 = [];
    g1[nums1.length] = nums1.slice(0);
    g2[nums2.length] = nums2.slice(0);
  
    for (let i=nums1.length-1;i>=1;i--){
        // Find the digit to be removed
        let idx = -1;
        for (let j=0;j<g1[i+1].length;j++){
            if (j+1<g1[i+1].length) {
                if (g1[i+1][j]<g1[i+1][j+1]){
                    idx = j;
                    break;
                }
            }
        }
        if (idx===-1) idx = g1[i+1].length-1;
        
        // Build g1[i]
        g1[i] = [];
        g1[i+1].forEach((num, numI)=> {
            if (numI!==idx) g1[i].push(num)
        });
    }
    
    for (let i=nums2.length-1;i>=1;i--){
        // Find the digit to be removed
        let idx = -1;
        for (let j=0;j<g2[i+1].length;j++){
            if (j+1<g2[i+1].length) {
                if (g2[i+1][j]<g2[i+1][j+1]){
                    idx = j;
                    break;
                }
            }
        }
        if (idx===-1) idx = g2[i+1].length-1;
        
        // Build g1[i]
        g2[i] = [];
        g2[i+1].forEach((num, numI)=> {
            if (numI!==idx) g2[i].push(num)
        });
    }
    
    let ans = [];
    for (let i=0;i<=k;i++){
        let tempAns = [];
        if (i>nums1.length || k-i>nums2.length) continue;
        let arr1 = g1[i], arr2 = g2[k-i],
            idx1 = 0, idx2 = 0;
        for (let j=0;j<k;j++){
            if (compare(idx1, idx2, i, arr1, arr2)){
                tempAns.push(arr1[idx1++])
            } else {
                tempAns.push(arr2[idx2++])
            }
        }
        for (let j=0;j<k;j++){
          if (ans[j]===undefined || ans[j]<tempAns[j]) {
            ans = tempAns;
            break;
          } else if (ans[j]>tempAns[j]){
            break;
          }
        }
    }
    
    return ans;

    function compare(idx1, idx2, i, arr1, arr2){
      // while (idx1<i && idx2<k-i && arr1[idx1]===arr2[idx2]){
      //   idx1++;
      //   idx2++;
      // }
      // return idx2===k-i || (idx1<i && arr1[idx1]>arr2[idx2]);
        if (idx1<i) {
          if (idx2>=k-i || arr1[idx1]>arr2[idx2])
            return true;
          else if (arr1[idx1]===arr2[idx2]){
            let num = arr1[idx1];
            while (arr1[idx1]===arr2[idx2]) {
              idx1++;
              idx2++;
            }
            if (idx1>i && idx2>=k-i) return true;
            if (idx1>i || idx2>=k-i){
              // If there is an array that hasn't reach its end, find the next number of it
              let endNum = idx1>i ? arr2[idx2] : arr1[idx1];
              if (endNum>num) return idx2>=k-i; // return the array that hasn't reach its end;
              else return true;
            } else { // Both idx are still within range
              return compare(idx1, idx2, i, arr1, arr2);
            }
          }

        }
        else return false;
    }
};

var maxNumber = function(nums1, nums2, k) {
  let n = nums1.length,
      m = nums2.length,
      ans = [];
  
  function maxNum(arr, k){
    let ans = [], n = arr.length, j = 0;
    arr.forEach((num, i) => {
      while (j>0 && num>ans[j-1] && n-i>k-j) j--;
      if (j<k) ans[j++] = num;
    });
    return ans;
  }
  
  function greater(nums1, i, nums2, j){
    while (i<nums1.length && j<nums2.length && nums1[i]===nums2[j]) {
      i++;
      j++;
    }
    return j===nums2.length || (i<nums1.length && nums1[i]>nums2[j]);
  }
  
  function merge(arr1, arr2) {
    let ans = [];
    for (let i=0, j=0, r=0; r<k; r++){
      ans[r] = greater(arr1, i, arr2, j) ? arr1[i++] : arr2[j++];
    }
    return ans;
  }
  
  for (let l=Math.max(0, k-m);l<=n && l<=k;l++){
    if (k-l>m) continue;
    let arr1 = maxNum(nums1, l),
        arr2 = maxNum(nums2, k-l),
        temp = merge(arr1, arr2);
    if (ans.length===0 || greater(temp, 0, ans, 0)) ans = temp;
  }
  
  return ans;
};


// maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5);//98465
// maxNumber([6,7], [6,0,4],5);//67604
// maxNumber([], [1],1);//1
// maxNumber([1], [],1);//1
// maxNumber([6,3,9,0,5,6], [2,2,5,2,1,4,4,5,7,8,9,3,1,6,9,7,0], 23);
// maxNumber([7,6,1,9,3,2,3,1,1], [4,0,9,9,0,5,5,4,7], 9);
// maxNumber([2,1,7,8,0,1,7,3,5,8,9,0,0,7,0,2,2,7,3,5,5], [2,6,2,0,1,0,5,4,5,5,3,3,3,4], 35);
maxNumber([4,6,9,1,0,6,3,1,5,2,8,3,8,8,4,7,2,0,7,1,9,9,0,1,5,9,3,9,3,9,7,3,0,8,1,0,9,1,6,8,8,4,4,5,7,5,2,8,2,7,7,7,4,8,5,0,9,6,9,2], [9,9,4,5,1,2,0,9,3,4,6,3,0,9,2,8,8,2,4,8,6,5,4,4,2,9,5,0,7,3,7,5,9,6,6,8,8,0,2,4,2,2,1,6,6,5,3,6,2,9,6,4,5,9,7,8,0,7,2,3], 60);



