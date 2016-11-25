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
var addTwoNumbers = function(l1, l2) {
  let stack1 = [l1.val], stack2 = [l2.val];
  while (l1.next) {
    l1 = l1.next;
    stack1.push(l1.val)
  }
  
  while (l2.next) {
    l2 = l2.next;
    stack2.push(l2.val)
  }
  let node = new ListNode(0);
  while (stack1.length>0 || stack2.length>0){
    node.val += stack1.length>0 ? stack1.pop() : 0;
    node.val += stack2.length>0 ? stack2.pop() : 0;
    let head = new ListNode(~~(node.val/10));
    head.next = node;
    node.val %= 10;
    
    node = head;
  }
  return node.val > 0 ? node : node.next;
};



let node1 = new ListNode(7),
    node2 = new ListNode(6),
    node3 = new ListNode(5),
    node4 = new ListNode(4),
    node5 = new ListNode(1),
    node6 = new ListNode(2),
    node7 = new ListNode(3);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node5.next = node6;
node6.next = node7;

addTwoNumbers(node1, node5);