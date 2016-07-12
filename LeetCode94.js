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
var inorderTraversal = function(root) {
    let ans = [], stack=[root], sIndex = 1;
    if (root===null) return ans;
    while (sIndex>0){
        let node = stack[sIndex-1];
        if (node.left){
            stack[sIndex++] = node.left;
            node.left = null;
        } else {
            ans[ans.length] = node.val;
            sIndex--;
            if (node.right){
                stack[sIndex++] = node.right;
            }
        }
    }
    return ans;
};

