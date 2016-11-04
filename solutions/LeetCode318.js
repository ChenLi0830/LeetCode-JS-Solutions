/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct2 = function(words) {
    let lettersValue = [], alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i=0;i<words.length;i++){
        let lettersTemp = [];
        for (let j=0;j<words[i].length;j++) lettersTemp[alphabet.indexOf(words[i][j])] = true;
        let binary = "";
        for (let j=0;j<26;j++) {
            if (lettersTemp[j]) binary += "1";
            else binary += "0";
        }
        lettersValue[i] = parseInt(binary, 2);
    }
    
    let ans = 0;
    for (let i=0;i<words.length;i++){
        for (let j=i+1;j<words.length;j++){
            if ((lettersValue[i] & lettersValue[j]) === 0) {
                ans = Math.max(ans, words[i].length*words[j].length);
            }
        }
    }
    
    return ans;
};



var maxProduct = function(words) {
    let lettersValue = [], alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i=0;i<words.length;i++){
        let binary = 0;
        for (let j=0;j<words[i].length;j++) binary |= 1 << alphabet.indexOf(words[i][j]);
        lettersValue[i] = binary;
    }
    
    let ans = 0;
    for (let i=0;i<words.length;i++){
        for (let j=i+1;j<words.length;j++){
            if ((lettersValue[i] & lettersValue[j]) === 0) {
                ans = Math.max(ans, words[i].length*words[j].length);
            }
        }
    }
    
    return ans;
};


maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]);