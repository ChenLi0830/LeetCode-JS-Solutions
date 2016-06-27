/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd3 = function(head, n) {
    var originalHead = head;

    if (!head || !head.next){
        return null;
    }

    var nodesCount = 1;
    while (head.next){
        nodesCount++;
        head = head.next;
    }

    head = originalHead;
    var m = nodesCount-n;//The mth node from begining
    for (var i=0;i<m-1;i++){
        head = head.next;
    }
    if (m===0) {
        originalHead = originalHead.next;
    } else {
        head.next = head.next.next;
    }

    return originalHead;
};


var removeNthFromEnd2 = function(head, n) {
    var count = -1, reachedEnd = false;
    if (!head) return null;
    removeNth(head);
    if (count<n){// When the first element needs to be removed;
        return head.next;
    }
    return head;

    function removeNth(head){
        if (!reachedEnd){
            if (!head.next) {reachedEnd = true;}
            else {
                removeNth(head.next);
            }
        }
        if (reachedEnd){
            count++;
        }
        if (count===n){
            head.next = head.next.next;
        }
    }

};


var removeNthFromEnd = function(head, n) {
    var start = new ListNode(0); start.next = head;
    var fast=start, slow = start;

    for (var i=0;i<n;i++){
        fast = fast.next;
    }

    while (fast.next){
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return start.next;
};

var node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

removeNthFromEnd(node5,1);
//removeNthFromEnd(node4,1);
//removeNthFromEnd(node4,2);
//removeNthFromEnd(node1,1);
//removeNthFromEnd(node1,2);


function ListNode(val) {
    this.val = val;
    this.next = null;
}
