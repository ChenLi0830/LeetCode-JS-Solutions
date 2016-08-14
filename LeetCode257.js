/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let ans = [];
    if (!root) return ans;
    doSearch(root, root.val.toString());
    return ans;
    
    function doSearch(root, path){
        if (!root.left && !root.right) {
            ans.push(path);
        } else {
            if (root.left) doSearch(root.left, path+"->"+root.left.val.toString());
            if (root.right) doSearch(root.right, path+"->"+root.right.val.toString());
        }
    }
    
};