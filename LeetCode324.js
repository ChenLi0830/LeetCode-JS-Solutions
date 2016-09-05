/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort2 = function (nums) {
  let nums1 = nums.slice(0).sort((a, b) => a - b);
  let i1 = 0, i2 = Math.trunc(nums1.length / 2) + nums1.length % 2, one = true;
  for (let i = 0; i < nums.length; i++) {
    if (one) {
      nums[i] = nums1[i1++];
      one = !one;
    }
    else {
      nums[i] = nums1[i2++];
      one = !one;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  let n = nums.length;
  nums.sort((a, b)=>a - b);
  
  let median = nums[Math.trunc((nums.length) / 2)];
  
  let s = [], m = [], l = [];
  
  nums.forEach(num=> {
    if (num < median) s.push(num);
    else if (num === median) m.push(num);
    else l.push(num);
  });
  
  let small = true;
  for (let i = 0; i < n; i++) {
    nums[i] = getValue(i);
    small = !small;
  }
  
  function getValue(i) {
    if (small) {
      if (s.length >= l.length + m.length) {
        return s.pop()
      } else return m.length > 0 ? m.pop() : l.pop();
    } else {
      if (m.length > 0 && nums[i-1] < m[m.length - 1]) return m.pop();
      else return l.pop();
    }
  }
};


wiggleSort([4,5,5,6]);
wiggleSort([1, 3, 2, 2, 3, 1]);
wiggleSort([1, 3, 2, 2, 3, 1, 4]);
wiggleSort([1, 5, 1, 1, 6, 4]);
