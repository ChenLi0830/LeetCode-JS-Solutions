/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  nums.forEach(n => {
    if (!map.has(n)) map.set(n,1);
    else map.set(n, map.get(n)+1);
  });
  
  let arr = [...map];
  
  arr.sort((a,b) => b[1]-a[1]);
  
  return arr.map(elem => elem[0]).slice(0, k);
};

topKFrequent([1,1,1,2,2,3], 2);