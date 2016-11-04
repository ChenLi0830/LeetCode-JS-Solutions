/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var twoSums = [], ans = [], ansCand = [], numsBool = [];
  nums.sort((a, b)=> {
    return a - b
  });
  for (var i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      var j = i + 1;
      while (j < nums.length) {
        if (!twoSums[nums[i] + nums[j]]) {
          twoSums[nums[i] + nums[j]] = [[i, j]];
        } else {
          twoSums[nums[i] + nums[j]] = twoSums[nums[i] + nums[j]].concat([[i, j]]);
        }
        while (j < nums.length && nums[j] === nums[j + 1]) j++;
        j++;
      }
    }
  }

  i = nums.length-1;
  while (i >= 0) {
    var n3 = nums[i]; var findCand = false;
    if (twoSums[-nums[i]]) {
      for (var k = 0; k < twoSums[-nums[i]].length; k++) {
        if (i > twoSums[-nums[i]][k][0] && i > twoSums[-nums[i]][k][1]) {
          var n1 = nums[twoSums[-nums[i]][k][0]];
          var n2 = nums[twoSums[-nums[i]][k][1]];
          ans = ans.concat([[n1, n2, n3]]);
          findCand = true;

        }
      }
    }
    while (findCand && nums[i] === nums[i - 1]) {
      i--;
    }
    i--;
  }

  return ans;
};


var threeSum2 = function (nums) {
  var ans = [];
  nums.sort((a, b)=> {
    return a - b
  });

  for (var i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;// if the first (smallest) number > 0, there is no way threeSum can be 0.
    if (i === 0 || i !== 0 && nums[i] !== nums[i - 1]) {
      var n1 = nums[i], lo = i + 1, hi = nums.length - 1;
      while (lo < hi) {
        var n2 = nums[lo], n3 = nums[hi];
        if (n2 + n3 === -nums[i]) {
          ans = ans.concat([[n1, n2, n3]]);
          while (/*nums[lo+1] && */nums[lo] === nums[lo + 1]) lo++;
          while (/*nums[hi-1] && */nums[hi - 1] === nums[hi]) hi--;
          lo++;
          hi--;
        } else if (n2 + n3 < -nums[i]) {
          lo++
        } else {
          hi--;
        }
      }
    }
  }

  return ans;
};

//threeSum([]);
//threeSum([-1, 0, 1, 2, -1, -4]);

/*console.assert(threeSum([0, 0, 0, 0]), [
  [0, 0, 0]
]);*/

threeSum([-4, -2, -2, -2, 0, 1, 2, 2, 2, 3, 3, 4, 4, 6, 6]);