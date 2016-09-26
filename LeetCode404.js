/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  if (!root.left && !root.right) return 0;
  return helper(root, false);
  
  function helper(root, isLeft){
    if (!root.left && !root.right) return isLeft ? root.val : 0;
    let left = root.left ? helper(root.left, true) : 0,
        right = root.right ? helper(root.right, false) : 0;
    return left + right;
  }
};

