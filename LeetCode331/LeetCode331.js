/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let arr = preorder.split(","),
      stack = [];
  
  arr.forEach(elem => {
    stack.push(elem);
    while (stack.length>=3 && stack[stack.length-1]==="#" && stack[stack.length-2]==="#" && stack[stack.length-3]==="#") {
      stack.pop();
      stack.pop();
      stack[stack.length-1]="#";
    }
  });
  return (stack.length===1 && stack[0]==="#");
};
// console.assert(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")===true);

// console.assert(isValidSerialization("1,#")===false);

// console.assert(isValidSerialization("9,#,#,1")===false);

console.assert(isValidSerialization("#")===true);

console.assert(isValidSerialization("#,#")===false);

// console.assert(isValidSerialization("9,#,#,1,#,#")===false);

// console.assert(isValidSerialization("9,#,1,#,#")===true);

// console.assert(isValidSerialization("9,#,#,1,#")===false);