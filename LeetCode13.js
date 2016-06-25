/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var strIndex = 0, index = romans.length-1;
  var ans = 0;
  while (strIndex<s.length){
    if (s.slice(strIndex, strIndex+romans[index].length)===romans[index]){
      ans += nums[index];
      strIndex+=romans[index].length;
    } else {
      index--;
    }
  }
  return ans;
};


console.assert(romanToInt("I")===1);
console.assert(romanToInt("III")===3);
console.assert(romanToInt("IV")===4);
console.assert(romanToInt("V")===5);
console.assert(romanToInt("MMCCCXLII")===2342);
console.assert(romanToInt("MCCXXXI")===1231);
console.assert(romanToInt("CXLI")===141);
console.assert(romanToInt("MMMCMXCIX")===3999);