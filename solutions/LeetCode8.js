/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  str = str.replace(/\s*/, "");
  var index = str.search(/[+-]?\d+/);
  if (index!==0) return 0;
  var ans = parseInt(str);
  if (Math.abs(ans)>Math.pow(2,31)-1){
    ans = ans>0?2147483647:-2147483648;
  }
  return ans;
};

myAtoi("1");
myAtoi("+212312");
myAtoi("+-2");
myAtoi("-212312");
myAtoi("-212312+-+-");
myAtoi("   +0 123");
myAtoi("   010");
myAtoi("   -2424531928");
//myAtoi("+123123-");