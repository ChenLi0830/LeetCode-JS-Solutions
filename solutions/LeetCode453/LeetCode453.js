/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
  let smallest = Infinity;
  nums.forEach(n => {
    if (smallest>n) smallest = n;
  });
  
  return nums.reduce((count, n) => {
    return count+n-smallest;
  }, 0)
};