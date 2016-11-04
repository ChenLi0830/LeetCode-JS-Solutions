/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (head) {
        let p1 = head, p2 = head, prev = null;
        while (p2 && p2.next && p2.next.next){
            p1 = p1.next;
            p2 = p2.next.next;
        }
        p2 = p1.next;//Start of second half
        while (p2){
            let temp = p2.next;
            p2.next = prev;
            prev = p2;
            p2 = temp;
        }
        p1.next = prev;
        let pMiddle = p1;
        p2 = p1.next; p1 = head;
        while (p1!==pMiddle.next){
            let temp = p2.next;
            p2.next = p1.next;
            p1.next = p2;
            p1 = p2.next;
            p2 = temp;
        }
        p1.next = null;
    }
};


let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;


// reorderList(node4);
reorderList(node1);
    