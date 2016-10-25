"use strict";
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
  let map = [];
  s.split("").forEach(c => map[c] = ~~map[c] + 1);
  
  let arr = [];
  arr[0] = ~~map['z'];
  removeCount("zero", arr[0]);
  arr[2] = ~~map['w'];
  removeCount("two", arr[2]);
  arr[6] = ~~map['x'];
  removeCount("six", arr[6]);
  arr[8] = ~~map['g'];
  removeCount("eight", arr[8]);
  arr[3] = ~~map['t'];
  removeCount("three", arr[3]);
  arr[4] = ~~map['r'];
  removeCount("four", arr[4]);
  arr[5] = ~~map['f'];
  removeCount("five", arr[5]);
  arr[7] = ~~map['v'];
  removeCount("seven", arr[7]);
  arr[9] = ~~map['i'];
  removeCount("nine", arr[9]);
  arr[1] = ~~map['o'];
  
  let ans = "";
  for (let i=0;i<10;i++){
    for (let j=0;j<arr[i];j++){
      ans += i;
    }
  }
  return ans;
  
  function removeCount(str, n){
    str.split("").forEach(c => map[c] -= n)
  }
};

originalDigits("owoztneoer");

