/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function(n) {
  let nl = n.toString().length,
      ans = [];
  for (let i=1;i<10;i++){
    addNumber(1, -1, i);
  }
  return ans;
  
  function addNumber(l, prevI, cur){
    if (l===nl) {
      if (cur<=n) ans.push(cur);
      return;
    }
    for (let i=-1;i<10;i++){
      if (prevI===-1 && i!==-1 && l!==1) continue;
      if (i!==-1 && cur*10+i>n) break;
      addNumber(l+1, i, i === -1 ? cur : cur * 10 + i);
    }
  }
};


// lexicalOrder(15);
// lexicalOrder(151);
lexicalOrder(154821);

// lexicalOrder(1);
// lexicalOrder(3);

