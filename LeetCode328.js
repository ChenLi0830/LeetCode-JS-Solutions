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
var oddEvenList = function(head) {
    if (!head) return head;
    let even = head,
        odd = head.next,
        oddHead = odd,
        evenHead = even;
    
    while (even && odd) {
        even.next = even.next ? even.next.next : null;
        even = even.next ? even.next : even;
        odd.next = odd.next ? odd.next.next : null;
        odd = odd.next;
    }
    
    even.next = oddHead;
    return evenHead;
};

let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
// node4.next = node5;

oddEvenList(node1);