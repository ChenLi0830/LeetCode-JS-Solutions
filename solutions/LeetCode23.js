/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists2 = function (lists) {
    var node = new ListNode(-1);
    mergeNodes(lists, node);
    return node.next;

    function mergeNodes(nodes, currentNode) {
        var node, min = Math.pow(2, 31) - 1, minIndex;
        // Find node with smallest val
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i] && nodes[i].val < min) {
                node = nodes[i];
                min = node.val;
                minIndex = i;
            }
        }

        if (node) {//Some nodes are not null
            currentNode.next = node;
            nodes[minIndex] = nodes[minIndex].next;
            mergeNodes(nodes, currentNode.next);
        }
    }
};

var mergeKLists = function(lists) {
    if (lists.length===0) return null;
    return partition(0,lists.length-1);

    function partition(s,e){
        if (s===e) return lists[s];
        var middle = Math.floor((s+e)/2);
        var list1 = partition(s, middle);
        var list2 = partition(middle+1,e);
        return merge(list1,list2);
    }

    function merge(l1,l2){
        if (l1===null) return l2;
        if (l2===null) return l1;
        if (l1.val<l2.val){
            l1.next = merge(l1.next, l2);
            return l1;
        } else {
            l2.next = merge(l1, l2.next);
            return l2;
        }
    }
};

var node11 = new ListNode(1),
    node12 = new ListNode(3),
    node13 = new ListNode(9),

    node21 = new ListNode(2),
    node22 = new ListNode(17),

    node31 = new ListNode(0),
    node32 = new ListNode(2),
    node33 = new ListNode(8),

    node41 = new ListNode(3),
    node42 = new ListNode(9)

node11.next = node12;
node12.next = node13;

node21.next = node22;

node31.next = node32;
node32.next = node33;

node41.next = node42;

mergeKLists(null);
//mergeKLists([null]);
mergeKLists([node11,node21,node31,node41]);
//mergeKLists([node11]);