/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
  let cToN = new Map([
      [10,"a"],[11,"b"],[12,"c"],
      [13,"d"],[14,"e"],[15,"f"]
  ]);
  
  let ans = "";
  if (num<0) num += Math.pow(2,32);
  while (num>=16){
    let temp = num % 16;
    num = Math.trunc(num/16);
    if (temp>=10) temp = cToN.get(temp);
    ans = temp + ans;
  }
  if (num>=10) num = cToN.get(num);
  ans = num + ans;
  
  return ans;
};

toHex(Math.pow(2,31)-1);
toHex(-1);
toHex(-Math.pow(2,31));
console.assert(toHex(20)==="14");
console.assert(toHex(16)==="10");
console.assert(toHex(26)==="1a");