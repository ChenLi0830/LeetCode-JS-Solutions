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
var flatten2 = function(root) {
    let next = null;
    if (root) doFlatten(root);

    function doFlatten(root){
        if (root.right) next = doFlatten(root.right);
        if (root.left) next = doFlatten(root.left);
        if (next) root.right = next;
        root.left = null;
        return root;
    }
};

var flatten = function(root) {
    let next = null;
    if (root) doFlatten(root);

    function doFlatten(root){
        if (root.right) doFlatten(root.right);
        if (root.left) doFlatten(root.left);
        root.right = next;
        root.left = null;
        next = root;
    }
};

let node1 = new TreeNode(1),
    node2 = new TreeNode(2),
    node3 = new TreeNode(3),
    node4 = new TreeNode(4),
    node5 = new TreeNode(5),
    node6 = new TreeNode(6);

node1.left = node2;
node1.right = node5;
node2.left = node3;
node2.right = node4;
node5.right = node6;

flatten(node1);