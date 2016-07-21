/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head, fast = head;
    while (fast && fast.next && fast.next.next){
        fast = fast.next.next;
        slow = slow.next;
        if (slow.val===fast.val) return true;
    }
    return false;
};

let node1 = new ListNode(1),
    node2 = new ListNode(2);
node1.next = node2;
node2.next = node1;

hasCycle(node1);

