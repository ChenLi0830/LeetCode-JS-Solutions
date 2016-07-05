/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if (!head || !head.next) return head;
    let n=1, node = head;
    while (node.next){
        n++;
        node = node.next;
    }
    k = k%n;k = n-k;
    node.next = head;
    for (let i=0;i<k;i++){
        head = head.next;
    }
    node = head;// new head
    for (let i=0;i<n-1;i++){
        node = node.next;
    }
    node.next = null;
    return head;
};

let node1 = new ListNode(1),
    node2 = new ListNode(2),
    node3 = new ListNode(3),
    node4 = new ListNode(4),
    node5 = new ListNode(5);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

rotateRight(node1, 2);