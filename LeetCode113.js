/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    let ans = [], solution = [root.val];
    doSearch(root, sum, 1);
    return ans;

    function doSearch(node, sum, l){
        if (!node.left && !node.right) {
            if (sum===node.val) ans[ans.length] = solution.slice(0, l);
            return;
        }
        if (node.left) {
            solution[l] = node.left.val;
            doSearch(node.left, sum-node.val, l+1);
        }
        if (node.right){
            solution[l] = node.right.val;
            doSearch(node.right, sum-node.val, l+1);
        }
    }
};


