/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins2 = function(n) {
  let k = 1;
  while (((1+k)*k)/2 <= n) k++;
  return k-1;
};

var arrangeCoins = function(n) {
  return Math.trunc((Math.sqrt(1+8*n)-1)/2);
};