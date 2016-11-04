/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  let s = num.split("");
  for (let i=0;i<k;i++){
    for (let j=0;j<s.length;j++){
      if (j===s.length-1){
        s.splice(j,1);
      }
      if (s[j]>s[j+1]){
        s.splice(j,1);
        break;
      }
    }
  }
  let headingZero = true;
  s = s.filter(c=>{
    if (!headingZero || c!=="0"){
      headingZero = false;
      return c;
    } else {
      return "";
    }
  });
  
  return s.length===0 ? "0" : s.join("");
};

