/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @type {TreeNode}
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function(root, p, q) {
  if (root.val > p.val && root.val > q.val) return lowestCommonAncestor(root.left, p, q);
  else if (root.val < p.val && root.val < q.val) return lowestCommonAncestor(root.right, p, q);
  else return root;
};

let node1 = new TreeNode(2),
    node2 = new TreeNode(1),
    node3 = new TreeNode(3);

node1.left = node2;
node1.right = node3;

lowestCommonAncestor(node1, node1, node3);