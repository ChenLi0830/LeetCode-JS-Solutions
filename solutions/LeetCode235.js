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
var lowestCommonAncestor3 = function(root, p, q) {
    let ans = null;
    doSearch(root);
    return ans;
    
    function doSearch(node){
        if (!node) return false;
        let leftHasTarget = doSearch(node.left);
        let rightHasTarget = doSearch(node.right);
        let nodeIsTarget = p.val === node.val || q.val === node.val;
        if (leftHasTarget && rightHasTarget || (nodeIsTarget && (leftHasTarget || rightHasTarget))){
            if (!ans) ans = node;
            return true;
        }
        return leftHasTarget || rightHasTarget || nodeIsTarget;
    }
    
};


var lowestCommonAncestor2 = function(root, p, q) {
    if (root.val>p.val && root.val>q.val) return lowestCommonAncestor(root.left, p, q);
    else if (root.val<p.val && root.val<q.val) return lowestCommonAncestor(root.right, p, q);
    else return root;
};

var lowestCommonAncestor = function(root, p, q) {
    while (true){
        if (root.val>p.val && root.val>q.val) root = root.left;
        else if (root.val<p.val && root.val<q.val) root = root.right;
        else return root;
    }
};