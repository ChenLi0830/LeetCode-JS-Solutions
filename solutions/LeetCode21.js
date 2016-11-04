/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1||!l2){
        return l1&&l1 || l2&&l2;
    }
    if (l1.val>l2.val){
        var temp = l1;
        l1 = l2;
        l2 = temp;
    }
    var ans = l1;

    while (l2){
        if (!l1.next || l1.next.val>l2.val){
            var node = new ListNode(l2.val);
            node.next = l1.next;
            l1.next = node;
            l2 = l2.next;
        } else {
            l1 = l1.next;
        }
    }
    return ans;
};







var node1 = new ListNode(1),
    node2 = new ListNode(3),
    node3 = new ListNode(5),
    node4 = new ListNode(6),
    node5 = new ListNode(100),
    node21 = new ListNode(2),
    node22 = new ListNode(5),
    node23 = new ListNode(10),
    node24 = new ListNode(33),
    node25 = new ListNode(99)/*,
    node26 = new ListNode(101)*/;

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

node21.next = node22;
node22.next = node23;
node23.next = node24;
node24.next = node25;
//node25.next = node26;

mergeTwoLists(null,null);
//mergeTwoLists(node1,node21);
//removeNthFromEnd(node4,1);
//removeNthFromEnd(node4,2);
//removeNthFromEnd(node1,1);
//removeNthFromEnd(node1,2);


function ListNode(val) {
    this.val = val;
    this.next = null;
}
