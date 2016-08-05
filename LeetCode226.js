/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} node
 * @return {TreeNode}
 */
var invertTree = function(node) {
    if (!node) return node;
    invertTree(node.left);
    invertTree(node.right);
    let temp = node.left;
    node.left = node.right;
    node.right = temp;
    return node;
};
