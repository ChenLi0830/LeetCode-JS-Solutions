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
var swapPairs = function(head) {
    var start = new ListNode(-1), n = start; start.next = head;
    while (n.next && n.next.next){
        var temp = n.next.next;
        n.next.next = n.next.next.next;
        temp.next = n.next;
        n.next = temp;
        n = temp.next;
    }
    return start.next;
};

var node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

//swapPairs(node1);
//swapPairs(node2);
swapPairs(node4);