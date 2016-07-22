/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if (!root) return [];
    let stack = [root], ans = [], index = 0;
    while (index>=0){
        let node = stack[index--];
        ans[ans.length] = node.val;
        if (node.right) stack[++index] = node.right;
        if (node.left) stack[++index] = node.left;
    }
    return ans;
};
