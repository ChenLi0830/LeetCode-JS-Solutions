/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  let f = [],
      sum = nums.reduce((n, sumTemp) => n + sumTemp, 0),
      target;
  
  if (sum % 2 !== 0) return false;
  else target = sum / 2;
  
  f[0] = true;
  for (let i=0; i<nums.length; i++){
    for (let j=target-nums[i]; j>=0; j--){
      if (f[j]) f[j+nums[i]] = true;
    }
  }
  return f[target] ? true : false;
};

