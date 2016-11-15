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
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;
  root && subPathSum(root);
  return count;
  
  /**
   * @param {TreeNode} node
   * @return {number[]} ans
   */
  function subPathSum(node){
    let left = node.left ? subPathSum(node.left) : [];
    let right = node.right ? subPathSum(node.right) : [];
    if (node.val === sum) count++;
    let ans = [node.val];
    left.forEach(v => {
      if (v + node.val === sum) count++;
      ans.push(v + node.val);
    });
    right.forEach(v => {
      if (v + node.val === sum) count++;
      ans.push(v + node.val);
    });
    return ans;
  }
};


