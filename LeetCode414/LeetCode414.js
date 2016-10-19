/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let set = new Set(nums);
  let [first, second, third] = [-Infinity, -Infinity, -Infinity];
  set.forEach(n => {
    if (n > first){
      third = second;
      second = first;
      first = n;
    } else if (n > second){
      third = second;
      second = n;
    } else if (n > third){
      third = n;
    }
  });
  
  if (third !== -Infinity) return third;
  else return first;
};

thirdMax([1,2]);