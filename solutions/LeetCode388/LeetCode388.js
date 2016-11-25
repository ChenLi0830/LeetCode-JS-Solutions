/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
  let strs = input.split("\n"),
      arr = [], ans = 0;
  arr[-1] = 0; // Initialization to prevent overflow
  
  strs.forEach(str => {
    let index = str.lastIndexOf("\t") + 1,
        length = str.length - index;
    arr[index] = arr[index-1] + length;
    if (str.indexOf(".") !== -1) ans = Math.max(ans, arr[index] + index);
  });
  return ans;
};
