/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes2 = function(root) {
    if (!root) return 0;
    let height = 0, node = root;
    while (node){
        height++;
        node = node.left;
    }
    let l = 0, r = Math.pow(2, height-1) - 1;
    while (l<r){
        let m = Math.trunc((l+r)/2);
        if (hasNode(m, Math.pow(2, height-2), root)) l = m+1;
        else r = m;
    }
    let leaf;
    if (hasNode(l, Math.pow(2, height-2), root)) leaf = l;
    else leaf = l-1;
    
    return Math.pow(2, height-1) - 1 + leaf + 1;
    
    function hasNode(n, l, node){
        if (l<1) return node!==null;
        if (n>=l) return hasNode(n-l, l/2, node.right);
        else return hasNode(n, l/2, node.left);
    }
};


/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(node) {
    let h = height(node);
    if (h===0) return 0;
    if (height(node.right)===h-1) {
        let leftNodes = h-1>=0 ? (1<<(h-1)) - 1 : 0;
        return 1 + leftNodes+ countNodes(node.right);
    }
    else {
        let rightNodes = h-2>=0 ? (1<<(h-2)) - 1 : 0;
        return 1 + rightNodes + countNodes(node.left);
    }
    
    function height(node){
        return node===null? 0 : 1 + height(node.left);
    }
};

let node1 = new TreeNode(1),
    node2 = new TreeNode(1),
    node3 = new TreeNode(1),
    node4 = new TreeNode(1);

node1.left = node2;
node1.right = node3;
node2.left = node4;
    
countNodes(node1);