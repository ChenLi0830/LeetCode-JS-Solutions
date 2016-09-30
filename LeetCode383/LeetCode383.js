/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz", arr = [];
  alphabet.split("").forEach(c=>arr[c] = 0);
  magazine.split("").forEach(c=>arr[c]++);
  for (let i=0; i<ransomNote.length; i++){
    arr[ransomNote[i]]--;
    if (arr[ransomNote[i]]<0) return false;
  }
  return true;
};