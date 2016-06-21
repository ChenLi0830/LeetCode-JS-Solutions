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
var addTwoNumbers = function (l1, l2) {
  var add1 = 0,
      startNode = new ListNode(-1),
      prevNode = startNode;
  var value, l3;

  while (l1 || l2 || add1 !== 0) {
    value = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add1) % 10;
    add1 = ((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add1) / 10 >>> 0;
    l3 = new ListNode(value);
    prevNode.next = l3;
    prevNode = l3;
    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return startNode.next;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var l11, l12, l13, l21, l22, l23, l14;
l11 = new ListNode(1);
l12 = new ListNode(0);
l13 = new ListNode(4);
l14 = new ListNode(9);
l21 = new ListNode(0);
l22 = new ListNode(0);
l23 = new ListNode(6);
l11.next = l12;
l12.next = l13;
l13.next = l14;
l21.next = l22;
l22.next = l23;

addTwoNumbers(l11, l21);