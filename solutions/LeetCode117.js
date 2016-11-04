/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let originalRoot = root;
    while (root){
        let node = root, prev = null, nextLevel = null;
        while (node){
            if (node.left) {
                if (!nextLevel) nextLevel = node.left;
                if (prev) prev.next = node.left;
                prev = node.left;
            }
            if (node.right){
                if (!nextLevel) nextLevel = node.right;
                if (prev) prev.next = node.right;
                prev = node.right;
            }
            node = node.next;
        }
        root = nextLevel;
    }
    originalRoot;
};

let node1 = new TreeLinkNode(1),
    node2 = new TreeLinkNode(2),
    node3 = new TreeLinkNode(3),
    node4 = new TreeLinkNode(4),
    node5 = new TreeLinkNode(5),
    node6 = new TreeLinkNode(6),
    node7 = new TreeLinkNode(7),
    node8 = new TreeLinkNode(8)

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.right = node7;
node5.right = node6;
node7.right = node8;

connect(node1);