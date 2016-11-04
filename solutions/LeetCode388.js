/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath2 = function(input) {
  let ans = 0, arr = [];
  if (input.indexOf("\n") === -1) {
    return (input.indexOf(".") === -1) ? 0 : input.length;
  }
  input = "\n" + input;
  
  while (input.indexOf("\n") > -1){
    let l = countT(input); // Which level is the folder/file in
    let start = 0;
    while (input[start]==="\n"||input[start]==="\t") start++;
    let nextIndex = getIndex(input); // index of the next \n
    
    arr[l] = input.slice(start, nextIndex);
    if (arr[l].indexOf(".") !== -1) {
      let cur = 0;
      for (let i=0;i<=l;i++){
        cur+= arr[i].length;
      }
      ans = Math.max(ans, cur+l);
    }
    input = input.slice(nextIndex);
  }
  
  return ans;
  
  function countT(input){
    let ans = 0, index = 0;
    index++;
    while (input[index]==="\t"){
      ans++;
      index++;
    }
    return ans;
  }
  
  function getIndex(input){
    let ans = 1;
    while (ans<input.length && input[ans]!=="\n") ans++;
    return ans;
  }
};

var lengthLongestPath = function(input) {
  let ans = 0, arr = [],
      strs = input.split("\n");
  
  strs.forEach(s => {
    let i = s.lastIndexOf("\t") + 1;
    arr[i] = s.length - i; // length of the path
    
    if (s.indexOf(".")>-1) {
      let lengthSum = 0;
      for (let j=0; j <= i;j++) lengthSum += arr[j];
      ans = Math.max(ans, lengthSum + i);
    }
  });
  return ans;
};

// lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext");
// lengthLongestPath("aaaaaa");
lengthLongestPath("a\n\taa\n\t\taaa\n\t\t\tfile1.txt\naaaaaaaaaaaaaaaaaaaaa\n\tsth.png");
