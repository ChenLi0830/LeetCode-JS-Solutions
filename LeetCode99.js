/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let prev = null, errorNodeArr = [];
    validate(root);
    let temp = errorNodeArr[1].val;
    errorNodeArr[1].val = errorNodeArr[0].val;
    errorNodeArr[0].val = temp;

    function validate(root){
        if (root===null) return;
        validate(root.left)
        if (prev !== null && prev.val>=root.val) {
            if (errorNodeArr.length===0){
                errorNodeArr[0] = prev;
                errorNodeArr[1] = root;
            } else {
                errorNodeArr[1] = root;
            }
        }
        prev = root;
        validate(root.right);
    }
};



