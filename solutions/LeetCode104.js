/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function(root) {
    let ans = 0;
    doSearch(root, 0);
    return ans;

    function doSearch(node, level){
        if (!node){
            if (level>ans) ans = level;
            return;
        }
        doSearch(node.left, level+1);
        doSearch(node.right, level+1);
    }
};

var maxDepth = function(root) {
    if (!root) return 0;
    return Math.max(maxDepth(root.left), maxDepth(root.right))+1;
};