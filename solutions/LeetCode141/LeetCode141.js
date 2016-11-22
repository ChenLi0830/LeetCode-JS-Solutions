/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head, fast = head;
  while (fast && fast.next && fast.next.next){
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};


let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4);

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.assert(hasCycle(node1) === false);
console.assert(hasCycle(node3) === false);
console.assert(hasCycle(null) === false);
node4.next = node1;

console.assert(hasCycle(node1) === true);
console.assert(hasCycle(node3) === true);
