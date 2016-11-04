/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans = true;
    count(root);
    return ans;
    function count(node){
        if (!node) return 0;
        let leftCount = count(node.left),
            rightCount = count(node.right);
        if (Math.abs(leftCount-rightCount)>1) ans = false;
        return Math.max(leftCount, rightCount)+1;
    }
};