/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
  let arr = [{val: 0, digits: 1, botNum:0}],
      base = 1,
      mult = 1,
      cur = 0;
  while (arr.length===0 || arr[arr.length-1].val<Math.pow(2,31)){
    let val = 9*base*mult;
    cur += val;
    
    arr.push({
      val: cur,
      digits: mult+1,
      botNum: base*10-1
    });
    
    base*=10;
    mult++;
  }
  
  for (let i=arr.length-1;i>=0;i--){
    if (arr[i].val<n){
      let num = Math.trunc((n-arr[i].val-1)/arr[i].digits) + 1 + arr[i].botNum,
          digit = (n-arr[i].val-1) % arr[i].digits,
          ans = String(num)[digit];
      
      return Number(ans);
    }
  }
};



findNthDigit(195);
findNthDigit(189);
findNthDigit(1);
findNthDigit(5);
