/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let node = head, arr1=[], aI1=0, arr2=[], aI2 = 0, index = 0;
    while (node){
        if (node.val<x) {
            arr1[aI1++] = node.val;
        } else {
            arr2[aI2++] = node.val;
        }
        node = node.next;
    }
    node = head;
    while (node){
        if (index<aI1){
            node.val = arr1[index];
        } else {
            node.val = arr2[index-aI1]
        }
        index++;
        node = node.next;
    }
    return head;
};


var node1 = new ListNode(1),
    node2 = new ListNode(4),
    node3 = new ListNode(3),
    node4 = new ListNode(2),
    node5 = new ListNode(5),
    node6 = new ListNode(2);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

partition(node1,3);