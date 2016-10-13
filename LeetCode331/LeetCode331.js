/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
  let arr = preorder.split(",");
  let count = new Array(arr.length).fill(0),
      i = 0/*, leafCount = 0*/;
  
  let numCount = arr.reduce((count, elem) => {
    return count + (elem!=="#" ? 1 : 0);
  }, 0);
  
  if (numCount+1 !== arr.length-numCount) return false;
  
  while (i<arr.length){
    if (count[i]===2) {
      arr.splice(i,1);
      count.splice(i--,1);
      count[i]++;
    }
    else if (arr[i]==="#") {
      arr.splice(i,1);
      count.splice(i--,1);
      count[i]++;
      // leafCount--;
    } else {
      if (count[i]===0){// If the node is visited for the first time, add the an additional
        // leafnode count
        // leafCount += (i===0) ? 2 : 1; //if it's the first node being visited, add 2 leafnode
      }
      i++;
    }
  }
  return arr.length===0/* && leafCount===0*/;
};


// console.assert(isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")===true);

// console.assert(isValidSerialization("1,#")===false);

// console.assert(isValidSerialization("9,#,#,1")===false);

console.assert(isValidSerialization("#")===true);

console.assert(isValidSerialization("#,#")===false);

// console.assert(isValidSerialization("9,#,#,1,#,#")===false);

// console.assert(isValidSerialization("9,#,1,#,#")===true);

// console.assert(isValidSerialization("9,#,#,1,#")===false);