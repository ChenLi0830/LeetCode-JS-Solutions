/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let strArray = str.split(" ");
    let keyMap = new Map(), wordMap = new Map();
    for (let i=0;i<pattern.length;i++){
        let tempWord = keyMap.get(pattern[i]),
            tempKey = wordMap.get(strArray[i]);
        if ((tempWord && tempWord!==strArray[i]) || (tempKey && tempKey!==pattern[i])) return false;
        if (!tempWord){
            keyMap.set(pattern[i], strArray[i]);
            wordMap.set(strArray[i], pattern[i]);
        }
    }
    return true;
};

// wordPattern("abba", "dog cat cat dog");
wordPattern("aaaa", "dog cat cat dog");