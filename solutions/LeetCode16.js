/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    var ans = Math.pow(2, 31) - 1;
    nums = nums.sort((a, b)=> {
        return a - b
    });
    for (var i = 0; i < nums.length; i++) {
        var n1 = nums[i];
        var lo = i + 1, hi = nums.length - 1;
        while (lo < hi) {
            var n2 = nums[lo];
            var n3 = nums[hi];
            if (Math.abs(target - n1 - n2 - n3) < Math.abs(target - ans)) {
                ans = n1 + n2 + n3;
            }

            if (target - n1 > n2 + n3) {
                lo++;
            } else {
                hi--;
            }
        }
    }
    return ans;
};


console.assert(threeSumClosest([0, 0, 0], 1) === 0);

console.assert(threeSumClosest([-1, 2, 1, -4], 1) === 2);

console.assert(threeSumClosest([1,1,1,0], 100) === 3);

console.assert(threeSumClosest([0,2,1,-3], 1) === 0);

console.assert(threeSumClosest([-1,-3,0,2,1,-3,5], 5) === 5);