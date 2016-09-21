/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction2 = function(A) {
  let size = A.length;
  A = A.slice(1).concat(A.slice(0));
  
  let ans = -Infinity;
  for (let shift = 0; shift<size; shift++){
    let f = 0;
    for (let count = 0; count<size;count++){
      f += count * A[shift+count];
    }
    ans = Math.max(f, ans);
  }
  
  return ans;
};

var maxRotateFunction = function(A) {
  let size = A.length,
      sum = 0,
      f = 0;
  A = A.slice(1).concat(A.slice(0));
  for (let i=1;i<size;i++){
    sum+=A[i];
    f+=i*A[i];
  }
  let ans = f;
  for (let i=1;i<size;i++){
    f = f - sum + (size-1) * A[size+i-1];
    ans = Math.max(ans, f);
    sum = sum - A[i] + A[size+i-1];
  }
  
  return ans;
};


console.assert(maxRotateFunction([])===0);
console.assert(maxRotateFunction([4, 3, 2, 6])===26);
console.assert(maxRotateFunction([-2147483648,-2147483648])===-2147483648);
console.assert(maxRotateFunction([4,3,7,4,5,4,1,2,7,23,4])===412);
