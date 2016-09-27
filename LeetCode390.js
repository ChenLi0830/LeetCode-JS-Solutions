/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
  let left = true,
      head = 1,
      step = 1;
  while (n>1){
    if (left || n%2===1) head+=step;
    step *= 2;
    left = !left;
    n = Math.trunc(n/2);
  }
  return head;
};

console.assert(lastRemaining(8)===6);
console.assert(lastRemaining(4)===2);
// console.assert(lastRemaining(137)===6);
// console.assert(lastRemaining(8)===6);
// console.assert(lastRemaining(8)===6);