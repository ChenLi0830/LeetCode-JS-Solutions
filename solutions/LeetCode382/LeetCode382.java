/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    ListNode head;
    int length;
    /** @param head The linked list's head.
        Note that the head is guaranteed to be not null, so it contains at least one node. */
    public Solution(ListNode head) {
        this.head = head;
        this.length = 0;
        
        ListNode node = head;
        while (node!=null) {
            this.length++;
            node = node.next;
        }
    }
    
    /** Returns a random node's value. */
    public int getRandom() {
        int index = (int) (Math.random()*this.length);
        ListNode node = this.head;
        while (index>0){
            index--;
            node = node.next;
        }
        return node.val;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = new Solution(head);
 * int param_1 = obj.getRandom();
 */