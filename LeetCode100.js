/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p &&!q) return true;
    let stack1 = [p], stack2 = [q], i1=0, i2=0;
    while (i1>=0){
        let node1 = stack1[i1--], node2 = stack2[i2--];
        if (!node1 || !node2 || node1.val!==node2.val) return false;
        if(!!node1.left ^ !!node2.left) return false;
        if(!!node1.right ^ !!node2.right) return false;
        if (node1.left) {
            stack1[++i1] = node1.left;
            stack2[++i2] = node2.left;
        }
        if (node1.right) {
            stack1[++i1] = node1.right;
            stack2[++i2] = node2.right;
        }
    }
    return true;
};
