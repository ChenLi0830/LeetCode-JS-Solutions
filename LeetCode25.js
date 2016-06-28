/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var node = new ListNode(-1), slow, fast, current, pre, next, start;
    node.next = head;
    slow = head; start = node;
    fast = getFast(slow, k-1);
    while (fast){
        current = slow.next;
        pre = slow;

        for (var i=0;i<k-1;i++){
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }

        start.next = pre;
        fast = getFast(current, k-1);
        if (!fast){
            slow.next = current;
            break;
        }
        start = slow;
        slow = current;
    }
    return node.next;

    function getFast(node, k){
        if (k===0 || !node) return node;
        return getFast(node.next, k-1);
    }
};

var node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5),
    node6 = new ListNode(6),
    node7 = new ListNode(7),
    node8 = new ListNode(8),
    node9 = new ListNode(9);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;

//reverseKGroup(null, 1);
//reverseKGroup(null, 5);
//reverseKGroup(node1, 1);
//reverseKGroup(node1, 2);
//reverseKGroup(node1, 3);
reverseKGroup(node1, 11);
//reverseKGroup(node1, 4);