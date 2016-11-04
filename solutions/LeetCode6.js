/**
 * Created by Chen on 2016-06-21.
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  var ans = "";
  if (numRows===1) return s;
  for (var i=0;i<numRows;i++){
    var loopNo = 0; var loopLength = 2*numRows-2;
    while (loopNo * loopLength<s.length){
      if (i===0 || i===numRows-1){
        const index = loopNo*loopLength+i;
        if (s[index]){
          ans = ans.concat(s[index]);
        }
      } else {
        const index1 = loopNo*loopLength+i;
        const index2 = loopNo*loopLength + loopLength - i;
        if (s[index1]){
          ans = ans.concat(s[index1]);
        }
        if (s[index2]){
          ans = ans.concat(s[index2]);
        }
      }
      loopNo++;
    }
  }
  return ans
};

//convert("A",1);
var sss = "abc";
sss = sss.concat("123");
console.log("sss is", sss);


convert("A",2);
convert("ABCD",2);

//convert("PAYPALISHIRING",3);

//convert("thisisatestabc123",5);