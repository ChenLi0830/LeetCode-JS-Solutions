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
var reverseList = function(head) {
  if (!head) return null;
  
  let prev = null,
      cur = head,
      next = head.next;
  
  while (cur) {
    cur.next = prev;
    prev = cur;
    cur = next;
    next = cur ? cur.next : null;
  }
  
  return prev;
};

