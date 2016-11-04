/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  let f = []; f[0] = 1;
  for (let i=1; i <= n; i++){
    f[i] = f[i-1] + calc(i);
  }
  return f[n];
  
  function calc(n){
    let now = 9, digit = 10;
    for (let i=1; i<n; i++){
      digit--;
      now *= digit;
    }
    return now;
  }
};

