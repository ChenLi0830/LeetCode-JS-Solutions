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
var insertionSortList2 = function(head) {
    if (!head) return null;
    let node = head.next;
    while (node){
        let nodeJ = head;
        while (nodeJ.val<node.val){
            nodeJ = nodeJ.next;
            if (nodeJ.val>node.val){
                let temp = nodeJ.val;
                nodeJ.val = node.val;
                node.val = temp;
            }
            nodeJ = nodeJ.next;
        }
        
        node = node.next;
    }
    return head;
};

var insertionSortList = function(head) {
    if (!head) return null;
    let dummy = new ListNode(0);
    let cur = head, pre, next;//cur is the node to be inserted, it should be inserted between
    // pre and pre.next
    while (cur){
        if (!pre || !pre.next || pre.next.val>=cur.val) pre = dummy;
        while (pre.next && pre.next.val<cur.val){
            pre = pre.next;
        }
        next = cur.next;// the next node to be inserted
        cur.next = pre.next;
        pre.next = cur;
        
        cur = next;
    }
    return dummy.next;
};


let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

insertionSortList(node1);