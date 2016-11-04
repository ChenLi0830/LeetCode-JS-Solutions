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
var isSymmetric2 = function(root) {
    if (!root) return true;
    return validate(root.left, root.right);

    function validate(left, right){
        if (!left && !right) return true;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;
        return validate(left.left, right.right) && validate(left.right, right.left);
    }
};

var isSymmetric = function(root) {
    if (!root) return true;
    let stack1=[root.left],stack2 = [root.right], i1=0, i2=0;
    while (i1>=0){
        let nodeL = stack1[i1--], nodeR = stack2[i2--];
        if (!!nodeL ^ !!nodeR) return false;
        if (nodeL) {
            if (nodeL.val!==nodeR.val) return false;
            stack1[++i1] = nodeL.left;
            stack2[++i2] = nodeR.right;
            stack1[++i1] = nodeL.right;
            stack2[++i2] = nodeR.left;
        }
    }
    return true;
};