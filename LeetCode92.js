/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let nodeStart, nodeEnd, fakeHead = new ListNode(-1);
    fakeHead.next = head;
    nextLevel(0, null, fakeHead);
    return fakeHead.next;

    function nextLevel(l, prevNode, curNode){
        if (l===m-1) nodeStart = curNode;
        if (l===n) nodeEnd = curNode.next;
        if (l<=n){
            nextLevel(l+1, curNode, curNode.next);
            if (l===m) curNode.next = nodeEnd;
            if (l===n) nodeStart.next = curNode;
            if (l>m && l<=n){
                curNode.next = prevNode;
            }
        }
    }
};

let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

reverseBetween(node1, 1,5);