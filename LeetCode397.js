/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
  if (n===1) return 0;
  let arr = [n], ans = 0, foundAns = false;
  while (!foundAns) {
    let next = [];
    ans++;
    arr.forEach(v=>{
      if (v%2===0) {
        if (v/2===1) {
          foundAns = true;
        }
        next.push(v/2);
      }
      else {
        next.push(v+1);
        next.push(v-1);
      }
    });
    arr = next;
  }
  return ans;
};

console.assert(integerReplacement(8)===3);
console.assert(integerReplacement(14)===5);
console.assert(integerReplacement(15)===5);