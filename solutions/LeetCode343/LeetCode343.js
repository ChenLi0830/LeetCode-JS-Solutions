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


/**
 * @param {number} n
 * @return {number}
 */
var integerBreak2 = function(n) {
  let f = [];
  switch (n) {
    case 2: return 1;
    case 3: return 2;
  }
  f[2] = 2; f[3] = 3;
  for (let i=4;i<=n;i++){
    f[i] = i;
    for (let j=2;j<i;j++){
      f[i] = Math.max(f[i], f[j] * (i-j))
    }
  }
  return f[n];
};
