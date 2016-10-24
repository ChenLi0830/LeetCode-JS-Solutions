/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
  let ans = 1;
  switch(n) {
    case 2: return 1;
    case 3: return 2;
  }
  while (n>4) {
    ans *= 3;
    n -= 3;
  }
  return ans * n;
};


