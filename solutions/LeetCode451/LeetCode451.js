/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
  let hashMap = new Map();
  for (let c of s){
    let count = ~~hashMap.get(c);
    hashMap.set(c, count+1);
  }
  
  let arr = [...hashMap];
  arr.sort((a,b) => {
    return b[1]-a[1];
  });
  let ans = "";
  arr.forEach(elem => {
    for (let i=0; i<elem[1]; i++){
      ans += elem[0];
    }
  });
  
  return ans;
};

