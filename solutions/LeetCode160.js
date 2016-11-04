/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let lengthA = 0, lengthB = 0, nodeA = headA, nodeB = headB;
    while (nodeA){
        lengthA++;
        nodeA = nodeA.next;
    }
    while (nodeB){
        lengthB++;
        nodeB = nodeB.next;
    }
    if (lengthA>lengthB){
        let temp = headA;
        headA = headB;
        headB = temp;
        temp = lengthA;
        lengthA = lengthB;
        lengthB = temp;
    }
    for (i=0;i<lengthB-lengthA;i++) headB = headB.next;
    while (headA!==headB){
        headA = headA.next;
        headB = headB.next;
    }
    return headA;
};

