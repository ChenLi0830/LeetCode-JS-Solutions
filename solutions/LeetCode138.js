/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    let nodeMap = new Map();
    return doCopy(head);

    function doCopy(node){
        let curNode;
        if (!node) return null;
        if (nodeMap.has(node.label)){
            curNode = nodeMap.get(node.label)
        } else {
            curNode = new RandomListNode(node.label);
            nodeMap.set(node.label, curNode);
            curNode.next = doCopy(node.next);
            curNode.random = doCopy(node.random);
        }
        return curNode;
    }
};

let node1 = new RandomListNode(1),
    node2 = new RandomListNode(2),
    node3 = new RandomListNode(3);

node1.next = node2; node2.next = node3;
node1.random = null; node2.random = node1; node3.random = node3;

copyRandomList(node1);