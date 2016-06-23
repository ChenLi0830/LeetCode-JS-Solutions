/**
 * @param {number[]} height
 * @return {number}
 */
// 2-loop Search - not efficient enough
var maxArea = function (height) {
  var max = 0, maxHeight = 0;
  for (var i = 0; i < height.length; i++) {
    if (height[i] > maxHeight) {
      maxHeight = height[i];
      for (var j = i + 1; j < height.length; j++) {
        max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
      }
    }
  }
  return max;
};

var maxArea2 = function (height) {
  var max = 0, l = 0, r = height.length-1;
  while (l<r){
    var hl = height[l], hr = height[r];
    if (hl<hr){
      max = Math.max(max, hl * (r-l));
      while (height[l]<=hl) l++;
    } else {
      max = Math.max(max, hr * (r-l));
      while (height[r]<=hr) r--;
    }
  }
  return max;
};

maxArea2([1, 3, 1, 2, 3, 1, 2]);
