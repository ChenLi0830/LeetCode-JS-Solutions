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
 * @return {boolean}
 */
var hasPathSum3 = function(root, sum) {
    if (!root) return sum === 0;
    if (!root.left && !root.right) return hasPathSum(null, sum-root.val);
    return root.left && hasPathSum(root.left, sum-root.val) || root.right && hasPathSum(root.right, sum-root.val);
};

var hasPathSum2 = function(root, sum) {
    if (!root) return false;
    return validate(root, sum-root.val);
    function validate(root, sum){
        if (!root.left &&!root.right) return sum === 0;
        let left = root.left ? validate(root.left, sum-root.left.val) : false,
            right = root.right ? validate(root.right, sum-root.right.val): false;
        return left || right;
    }
};

var hasPathSum = function(root, sum) {
    if (!root) return false;
    if (!root.left && !root.right) return sum-root.val===0;
    return (!!root.left && hasPathSum(root.left, sum-root.val)) || (!!root.right && hasPathSum(root.right, sum-root.val));
};

let node1 = new TreeNode(1),
    node2 = new TreeNode(2);

node1.left = node2;
hasPathSum(node1, 3);


