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
var deleteDuplicates = function(head) {
    let node = new ListNode(-1), s = node;
    node.next = head;

    while (s && s.next){
        let f = s.next;
        while (f && f.next && f.val === f.next.val) f = f.next;
        s.next = f;
        s = s.next;
    }
    return node.next;
};

let node1 = new ListNode(1),
    node2 = new ListNode(3),
    node3 = new ListNode(3),
    node4 = new ListNode(6),
    node5 = new ListNode(6),
    node6 = new ListNode(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

//deleteDuplicates(node1);
deleteDuplicates(node5);