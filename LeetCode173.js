/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.stack = root ? [root] : [];
    this.index = this.stack.length;
    this.set = new Set();// what nodes has already been visited;
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return this.index > 0;
};

/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    while (this.index>0){
        let node = this.stack[--this.index];
        if (this.set.has(node) || (!node.left && !node.right)) return node.val;
        else {
            if (node.right) this.stack[this.index++] = node.right;
            this.stack[this.index++] = node;
            if (node.left) this.stack[this.index++] = node.left;
            this.set.add(node);
        }
    }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */


