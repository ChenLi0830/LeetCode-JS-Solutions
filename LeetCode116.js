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
var connect2 = function(root) {
    let node = root, levelCount = 0, level, next;
    while (node) {
        levelCount++;
        node = node.left;
    }
    for (level=0; level<levelCount; level++){
        next = null;
        setLevel(root, 0);
    }

    function setLevel(node, curLevel){
        if (curLevel===level){
            node.next = next;
            next = node;
        } else {
            setLevel(node.right, curLevel+1);
            setLevel(node.left, curLevel+1);
        }
    }
};

var connect = function(root) {
    while (root){
        let curNode = root;
        while (curNode && curNode.left){
            curNode.left.next = curNode.right;
            if (curNode.next) curNode.right.next = curNode.next.left;
            curNode = curNode.next;
        }
        root = root.left;
    }
    root
};


let node1 = new TreeLinkNode(1),
    node2 = new TreeLinkNode(2),
    node3 = new TreeLinkNode(3),
    node4 = new TreeLinkNode(4),
    node5 = new TreeLinkNode(5),
    node6 = new TreeLinkNode(6),
    node7 = new TreeLinkNode(7);

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

connect(node1);