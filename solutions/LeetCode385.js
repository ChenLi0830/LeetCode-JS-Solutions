/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function(s) {
  let ans = new NestedInteger(),
      isList = false,
      arr = [];
  if (s.indexOf("[")!==-1) {
    isList = true;
    s = s.slice(1, s.length-1);
  }
  //Initialize element arr
  let left = 0, str = "";
  s.split("").forEach((c,i) => {
    if ((left === 0 && c === ",")) {
      arr.push(str);
      str = "";
    } else str+=c;
    
    if (c === "[") left++;
    else if (c === "]") left--;
    
    if (i===s.length-1) arr.push(str);
  });
  
  if (isList){
    arr.forEach(elem => {
      let temp = deserialize(elem);
      if (temp.isInteger()) {
        temp = temp.getInteger();
      }
      ans.add(temp);
    });
  } else {
    ans.setInteger(parseInt(arr[0]));
  }
  return ans;
};

deserialize("324");
// deserialize("[123,[456,[789]]]");
// deserialize("[]");