/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map(), ans = [];
  nums1.forEach(n => map.set(n, ~~map.get(n)+1));
  
  nums2.forEach(n => {
    if (~~map.get(n)>0){
      map.set(n, map.get(n)-1);
      ans.push(n);
    }
  });
  
  return ans;
};
