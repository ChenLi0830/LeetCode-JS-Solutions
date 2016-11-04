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
var isPalindrome2 = function(head) {
    let height = 0, node = head;
    while(node) {
        height++;
        node = node.next;
    }
    if (height<=1) return true;
    let mid1 = head;
    for (let i=0;i<Math.trunc((height-1)/2);i++){
        mid1 = mid1.next;
    }
    let mid2;
    if (height%2===1){
        mid2= new ListNode(mid1.val);
        mid2.next = mid1.next;
    } else {
        mid2= new ListNode(mid1.next.val);
        mid2.next = mid1.next.next;
    }
    
    let dummy = new ListNode(-1); dummy.next = head;
    let prev = dummy, next = head.next; node = head;
    for (let i=0;i<Math.trunc((height+1)/2);i++){
        node.next = prev;
        prev = node;
        node = next;
        next = next ? next.next : null;
    }
    head.next = null;
    let node1 = mid1, node2 = mid2;
    while (node1){
        if (node1.val!==node2.val){
            return false;
        }
        node1 = node1.next;
        node2 = node2.next;
    }
    return true;
};

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
var isPalindrome = function(head) {
    if (!head || !head.next) return true;
    let slow = head, fast = head, prev = null, next = slow.next;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow.next = prev;
        prev = slow;
        slow = next;
        next = next.next;
    }
    let mid1 = slow, mid2 = slow.next, oddNumber = !!fast.next;
    slow.next = prev;
    if (!oddNumber) mid1 = mid1.next;
    
    while (mid1){
        if (mid1.val!==mid2.val){
            return false;
        }
        mid1 = mid1.next;
        mid2 = mid2.next;
    }
    return true;
};




// let node1 = new ListNode(1),
//     node2 = new ListNode(2),
//     node3 = new ListNode(1);
//
// node1.next = node2;
// node2.next = node3;

let node1 = new ListNode(1),
    node2 = new ListNode(2);
node1.next = node2;
isPalindrome(node1);
// 1>2>1
// 1>2>2>1

