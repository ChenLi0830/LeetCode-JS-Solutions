/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummy = new ListNode(-1); dummy.next = head;
    let node = dummy;
    while (node && node.next){
        if (node.next.val===val){
            node.next = node.next.next;
        } else {
            node = node.next;
        }
    }
    return dummy.next;
};

