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
//BFS
var maxDepth = function(root) {
  let tier = root ? [root] : [], ans = 0;
  while (tier.length > 0){
    let newTier = [];
    tier.forEach( node => {
      if (node.left) newTier.push(node.left);
      if (node.right) newTier.push(node.right);
    });
    tier = newTier;
    ans++;
  }
  return ans;
};

// DFS
var maxDepth = function(root) {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};