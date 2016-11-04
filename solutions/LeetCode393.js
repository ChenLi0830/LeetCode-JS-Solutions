/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
  let binarys = data.map(dec => {
        let binary = dec.toString(2);
        while (binary.length<8) binary = "0"+binary;
        return binary;
      }),
      cur = 0,
      ans = true;
  
  while (cur < binarys.length) {
    if (binarys[cur][0] === "0") cur++;//0xxx
    else if (binarys[cur].slice(0, 3) === "110") {
      if (!binarys[cur + 1] || binarys[cur + 1].slice(0, 2) !== "10") ans = false;
      cur += 2;
    } else if (binarys[cur].slice(0, 4) === "1110") {
      if (!binarys[cur + 2] || binarys[cur + 1].slice(0, 2) !== "10" || binarys[cur + 2].slice(0, 2) !== "10") ans =
          false;
      cur += 3;
    } else if (binarys[cur].slice(0, 5) === "11110") {
      if (!binarys[cur + 3] || binarys[cur + 1].slice(0, 2) !== "10" || binarys[cur + 2].slice(0, 2) !== "10"
          || binarys[cur + 3].slice(0, 2) !== "10") ans = false;
      cur += 4;
    } else {
      ans = false;
      break;
    }
  }
  
  return ans;
};

// console.assert(validUtf8([197, 130, 1]) === true);
// console.assert(validUtf8([235, 140, 4]) === false);
// console.assert(validUtf8([240]) === false);
console.assert(validUtf8([255]) === false);
