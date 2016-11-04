/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  let vowels = new Set(["a", "e", "i", "o","u", "A", "E", "I", "O", "U"]);
  let vArr = [];
  
  s.split("").forEach(char => {
    if (vowels.has(char)) vArr.push(char);
  });
  
  vArr.reverse();
  
  let ansArr = [], index = 0;
  s.split("").forEach(char => {
    if (vowels.has(char)) ansArr.push(vArr[index++]);
    else (ansArr.push(char));
  });
  
  return ansArr.join("");
};

