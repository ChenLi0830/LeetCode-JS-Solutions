/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum2 = function (nums, target) {
    var twoSumValues = [],
        twoSumIndex = [],
        twoSumIndex2 = [],
        ans = [],
        valueCount = 0;

    nums = nums.sort((a, b)=> {
        return a - b
    });

    for (var i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            var j = i + 1;
            while (j < nums.length) {
                if (!twoSumIndex[nums[i] + nums[j]]) {
                    twoSumIndex[nums[i] + nums[j]] = [[i, j]];
                    twoSumValues[valueCount] = nums[i] + nums[j];
                    valueCount++;
                } else {
                    twoSumIndex[nums[i] + nums[j]] =
                        twoSumIndex[nums[i] + nums[j]].concat([[i, j]]);
                }
                while (nums[j] === nums[j + 1]) j++;
                j++;
            }
        }
    }

    valueCount=0;
    for (i = nums.length-1; i>=0; i--) {
        if (i === nums.length || nums[i] !== nums[i + 1]) {
            j = i - 1;
            while (j >= 0) {
                if (!twoSumIndex2[nums[i] + nums[j]]) {
                    twoSumIndex2[nums[i] + nums[j]] = [[j, i]];
                    valueCount++;
                } else {
                    twoSumIndex2[nums[i] + nums[j]] =
                        twoSumIndex2[nums[i] + nums[j]].concat([[j, i]]);
                }
                while (nums[j] === nums[j - 1]) j--;
                j--;
            }
        }
    }

    for (i = 0; i < twoSumValues.length; i++) {
        var n1 = twoSumValues[i], n2 = target - n1;
        if (twoSumIndex2[n2]) {
            for (var lo = 0; lo < twoSumIndex[n1].length; lo++) {
                for (var hi = 0; hi < twoSumIndex2[n2].length; hi++) {
                    if (twoSumIndex[n1][lo][1] < twoSumIndex2[n2][hi][0]) {
                        var i1 = twoSumIndex[n1][lo][0],
                            i2 = twoSumIndex[n1][lo][1],
                            i3 = twoSumIndex2[n2][hi][0],
                            i4 = twoSumIndex2[n2][hi][1];
                        ans = ans.concat([[nums[i1], nums[i2], nums[i3], nums[i4]]]);
                    }
                }
            }
        }
    }
    return ans;
};


var fourSum = function (nums, target) {

};

fourSum([1, 0, -1, 0, 0], 0);
fourSum([-3,-2,-1,0,0,1,2,3], 0);

fourSum([1, 0, -1, 0], 0);
fourSum([1, 0, -1, 0, -2, 2], 0);