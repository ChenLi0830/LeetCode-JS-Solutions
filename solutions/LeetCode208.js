/**
 * @constructor
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.links = [];
    this.isEnd = false;
};

var Trie = function() {
    this.root = new TrieNode();
    this.alphabet = [];
    let str = "abcdefghijklmnopqrstuvwxyz";
    for (let i=0;i<str.length;i++){
        this.alphabet[str[i]] = i;
    }
};

/**
 * @param {string} word
 * @return {void}
 * Inserts a word into the trie.
 */
Trie.prototype.insert = function(word) {
    let node = this.root;
    for (let i=0;i<word.length;i++){
        let cIdx = this.alphabet[word[i]];
        if (!node.links[cIdx]) node.links[cIdx] = new TrieNode();
        node = node.links[cIdx];
    }
    node.isEnd = true;
};

/**
 * @param {string} word
 * @return {boolean}
 * Returns if the word is in the trie.
 */
Trie.prototype.search = function(word) {
    let node = this.root;
    for (let i=0;i<word.length;i++){
        let cInx = this.alphabet[word[i]];
        if (!node.links[cInx]) return false;
        node = node.links[cInx];
    }
    return node.isEnd;
};

/**
 * @param {string} prefix
 * @return {boolean}
 * Returns if there is any word in the trie
 * that starts with the given prefix.
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.root;
    for (let i=0;i<prefix.length;i++){
        let cInx = this.alphabet[prefix[i]];
        if (!node.links[cInx]) return false;
        node = node.links[cInx];
    }
    return true;
};


var trie = new Trie();
trie.insert("aa");
console.assert(trie.search("aa"));
console.assert(!trie.search("a"));
trie.insert("ab");
trie.insert("bb");
console.assert(trie.startsWith("a"));
console.assert(trie.startsWith("b"));
console.assert(!trie.startsWith("c"));
