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
var largestBSTSubtree = function(root) {
  let Result = function (small, large, BSTcount, isBST) {
    this.small = small;
    this.large = large;
    this.BSTcount = BSTcount;
    this.isBST = isBST;
  };
  
  return helper(root).BSTcount;
  
  function helper(node){
    if (!node) return new Result(0, 0, 0, true);
    
    let left = helper(node.left),
        right = helper(node.right),
        largestSubCount = Math.max(left.BSTcount, right.BSTcount),
        treeIsBST = left.isBST && right.isBST && (left.BSTcount === 0 || left.large < node.val) &&
        (right.BSTcount === 0 || node.val < right.small);
    
    return new Result(
        left.BSTcount === 0 ? node.val : left.small,
        right.BSTcount === 0 ? node.val : right.large,
        treeIsBST ? left.BSTcount + right.BSTcount + 1 : largestSubCount,
        treeIsBST);
  }
};