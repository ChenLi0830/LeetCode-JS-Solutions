/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let left = 0, nums = [""], exps = [""], cur = 0;
  // initialize nums, exps
  s.split("").forEach((c,i) => {
    if (c.localeCompare("0")>=0 && c.localeCompare("9")<=0){
      if (left===0) {
        if (exps[cur]!=="") {
          cur++;
          exps[cur] = "";
          nums[cur] = "";
        }
        nums[cur] += c;
      }
      else {
        exps[cur] += c;
      }
    } else if (c==="["){
      left++;
      exps[cur] += "[";
    } else if (c==="]"){
      left--;
      if (left===0 && i!==s.length-1){
        exps[cur] += "]";
        cur++;
        exps[cur] = "";
        nums[cur] = "";
      } else {
        exps[cur] += "]";
      }
    } else { // letters
      exps[cur] += c;
    }
  });
  
  let ans = "";
  exps.forEach((exp,i) => {
    if (exp[0]==="[") {
      let tmp = decodeString(exp.slice(1, exp.length-1));
      for (let j=0;j<Number(nums[i]);j++){
        ans += tmp;
      }
    } else {
      ans += exp;
    }
  });
  
  return ans;
};

console.assert(decodeString("3[a]2[bc]")==="aaabcbc");
console.assert(decodeString("3[a2[c]]")==="accaccacc");
console.assert(decodeString("2[abc]3[cd]ef")==="abcabccdcdcdef");