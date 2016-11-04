/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let now = 0, ans = Infinity;
    doSearch(root);
    return ans;
    
    function doSearch(node){
        if (ans!==Infinity) return;
        if (node.left) doSearch(node.left);
        now++;
        if (now===k) {
            ans = node.val;
            return
        }
        if (node.right) doSearch(node.right);
    }
};