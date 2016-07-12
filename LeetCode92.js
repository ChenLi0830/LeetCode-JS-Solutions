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
var reverseBetween2 = function(head, m, n) {
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

var reverseBetween = function(head, m, n) {
    let dummy = new ListNode(-1);
    dummy.next = head;
    let pre = dummy;
    for (let i=0;i<m-1;i++) pre = pre.next;
    let revHead = pre.next, then = revHead.next;
    for (let i=0;i<n-m;i++){
        revHead.next = then.next;
        then.next = pre.next;
        pre.next = then;
        then = revHead.next;
    }
    return dummy.next;
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

reverseBetween(node1, 2,4);