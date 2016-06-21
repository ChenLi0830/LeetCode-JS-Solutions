/**
 * Created by Chen on 2016-05-13.
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var dict=[];
  for (var i = 0;i<nums.length;i++){
    const otherNum = target-nums[i];
    if (dict[otherNum] || dict[otherNum]===0){
      return [dict[otherNum], i];
    }
    dict[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15],9));
console.log(twoSum([3,2,4],6));