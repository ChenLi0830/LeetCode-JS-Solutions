/**
 * @constructor
 */
function charNode(){
    this.links = [];
    this.isEnd = false;
}

var WordDictionary = function() {
    this.root = new charNode();
    this.cToI = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz.";
    for (let i=0;i<alphabet.length;i++){
        this.cToI[alphabet[i]] = i;
    }
};

/**
 * @param {string} word
 * @return {void}
 * Adds a word into the data structure.
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    for (let i=0;i<word.length;i++){
        let cIdx = this.cToI[word[i]];
        if (!node.links[cIdx]) node.links[cIdx] = new charNode();
        node = node.links[cIdx];
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the data structure. A word could
 * contain the dot character '.' to represent any one letter.
 */
WordDictionary.prototype.search = function(word) {
    let ans = false, cToI = this.cToI;
    doSearch(this.root, 0);
    return ans;
    
    function doSearch(node, idx){
        if (idx === word.length){
            if (node.isEnd) ans = true;
            return;
        }
        let cIdx = cToI[word[idx]];
        if (cIdx<26){
            if (!node.links[cIdx]) return;
            else doSearch(node.links[cIdx], idx+1);
        } else {
            for (let i=0;i<26;i++){
                if (node.links[i]) doSearch(node.links[i], idx+1);
            }
        }
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var wordDictionary = new WordDictionary();
 * wordDictionary.addWord("word");
 * wordDictionary.search("pattern");
 */