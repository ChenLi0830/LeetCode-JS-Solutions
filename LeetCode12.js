/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const romans = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
  const nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  var ans = "", index = romans.length-1;
  while (num>0){
    while (num>=nums[index]){
      num -= nums[index];
      ans = ans.concat(romans[index]);
    }
    index--;
  }
  return ans;
};

console.assert(intToRoman(1)==="I");
console.assert(intToRoman(3)==="III");
console.assert(intToRoman(4)==="IV");
console.assert(intToRoman(5)==="V");
console.assert(intToRoman(2342)==="MMCCCXLII");

console.assert(intToRoman(1231)==="MCCXXXI");
console.assert(intToRoman(141)==="CXLI");
console.assert(intToRoman(3999)==="MMMCMXCIX");