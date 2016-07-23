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
var sortList = function(head) {
    return sort(head);
    
    function sort(head){
        if (!head || !head.next) return head;
        let slow = head, fast = head, prev;
        while (fast && fast.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        prev.next = null;
        return merge(sort(head), sort(slow));
    }
    
    function merge(l1,l2){
        let dummy = new ListNode(0), node = dummy;
        while (l1 && l2){
            if (l1.val<l2.val){
                node.next = l1;
                node = node.next;
                l1 = l1.next;
            } else {
                node.next = l2;
                node = node.next;
                l2 = l2.next
            }
        }
        if (!l1) node.next = l2;
        if (!l2) node.next = l1;
        return dummy.next;
    }
};
