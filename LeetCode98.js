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

var isValidBST2 = function(root) {
    let valid = true;

    if (root && root.left && root.val<=getChld(root.left)[1]) valid = false;
    if (root && root.right && root.val>=getChld(root.right)[0]) valid = false;
    return valid;

    function getChld(root){
        let small = root.val, large = root.val;
        if (!valid) return [0, 0];
        if (root.left){
            let chld = getChld(root.left);
            if (root.val<=chld[1]) valid = false;
            small = chld[0];
        }
        if (root.right){
            let chld = getChld(root.right);
            if (root.val>=chld[0]) valid = false;
            large = chld[1];
        }
        return [small, large];
    }
};

var isValidBST = function(root) {
    let prev = null;
    return validate(root);

    function validate(root){
        if (root===null) return true;
        if (!validate(root.left)) return false;
        if (prev!==null && prev>=root.val) return false;
        prev = root.val;
        if (!validate(root.right)) return false;
        return true;
    }
};

let node1 = new TreeNode(0),
    node2 = new TreeNode(-1);

node1.left = null;node1.right = node2;

isValidBST(node1);