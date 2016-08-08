/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode2 = function(node) {
    let prev;
    while (node.next) {
        node.val = node.next.val;
        prev = node;
        node = node.next;
    }
    prev.next = null;
};


var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};