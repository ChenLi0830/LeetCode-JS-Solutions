/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head) return null;
    let dummy = new ListNode(-1), prev = dummy, next = head; dummy.next = head;
    while (next) {
        let temp = next.next;
        next.next = prev;
        prev = next;
        next = temp;
    }
    dummy.next.next = null;
    return prev;
};

