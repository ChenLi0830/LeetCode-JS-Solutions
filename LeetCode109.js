/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if (!head) return null;
    let node = head, count = 0;
    while (node!==null) {
        count++;
        node = node.next;
    }
    return build(count);

    function build(n){
        let p = new TreeNode(0),
            leftL = Math.floor(n/2);
        if (leftL>0) p.left = build(leftL);
        p.val = head.val
        head = head.next;
        if (n>leftL+1) p.right = build(n-leftL-1);
        return p;
    }
};