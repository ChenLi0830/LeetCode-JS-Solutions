/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let ans = null;
    doSearch(root);
    return ans;
    
    function doSearch(node){
        if (!node) return false;
        let leftHasTar = doSearch(node.left);
        let rightHasTar = doSearch(node.right);
        let nodeHasTar = node === p || node === q;
        if (leftHasTar && rightHasTar || (nodeHasTar && (leftHasTar || rightHasTar))){
            if (!ans) ans = node;
            return true;
        }
        return leftHasTar || rightHasTar || nodeHasTar;
    }
};