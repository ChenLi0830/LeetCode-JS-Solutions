/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function(words) {
  let map = new Map(),
      ans = [];
  words.forEach((word, i) => {map.set(word,i)});
  
  words.forEach((word, i) => {
    for (let r = -1; r < word.length; r++){
      if (isParlindrome(word, 0, r)){
        let rWord = word.slice(r+1).split("").reverse().join("");
        if (map.has(rWord) && map.get(rWord) !== i){
          ans.push([map.get(rWord), i]);
        }
      }
    }
    
    for (let l = word.length-1; l>=0; l--){
      if (isParlindrome(word, l, word.length-1)){
        let rWord = word.slice(0, l).split("").reverse().join("");
        if (map.has(rWord) && map.get(rWord) !== i){
          ans.push([i, map.get(rWord)]);
        }
      }
    }
  });
  
  return ans;
  
  function isParlindrome(word, l, r){
    let ans = true;
    while (l<r){
      if (word[l++] !== word[r--]){
        ans = false;
        break;
      }
    }
    return ans;
  }
};

palindromePairs(["abcd", "dcba", "lls", "s", "sssll"]);