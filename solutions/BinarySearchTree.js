/**
 * @param{number[]} nums
 * @constructor
 */
var BinarySearchTree = function(nums) {
  this.root = null;
  if (Array.isArray(nums)) {
    for (let num of nums){
      if (!this.root) this.root = new TreeNode(num);
      else this.add(num);
    }
  }
};

BinarySearchTree.prototype.add = function(num) {
  addNode(this.root, num);
  
  function addNode(root, num){
    if (num < root.val){ //node should go on left subtree
      if (root.left) addNode(root.left, num);
      else root.left = new TreeNode(num);
    }
    else { // node should go on right subtree
      if (root.right) addNode(root.right, num);
      else root.right = new TreeNode(num);
    }
  }
};
/**
 * @param{TreeNode} root
 * @param{number} num
 * @return{TreeNode} - The root node
 */
BinarySearchTree.prototype.delete = function(root, num){
  if (num < root.val) root.left = this.delete(root.left, num);
  else if (num > root.val) root.right = this.delete(root.right, num);
  else {//found node
    if (!root.left && !root.right) root = null; // leaf node
    else if (root.left && root.right) { // node with two children
      let minNode = this.findMin(root.right);
      root.val = minNode.val;
      root.right = this.delete(root.right, minNode.val);
    } else { // node with one child
      root = root.left ? root.left : root.right;
    }
  }
  return root;
};
/*BinarySearchTree.prototype.delete = function(num) {
  let parent = this.getParentOf(num),
      node = this.getNodeByParent(parent, num);
  
  if (!node) return this.root;
  
  if (!node.left && !node.right) {// Leef node
    deleteLeefNode(parent, node);
  }
  else if (node.left && node.right) {//Node with 2 children
    deleteDoubleChildNode.call(this, parent, node);
  }
  else if (node.left || node.right) {// Node with 1 child
    deleteSingleChildNode(parent, node);
  }
  
  function deleteLeefNode(parent, node){
    
    if (!parent) return null; //The to be deleted node is root;
    let isLeftNode = parent.left === node;
    if (isLeftNode) parent.left = null;
    else parent.right = null;
    return parent;
  }
  
  function deleteSingleChildNode(parent, node){
    let child = node.left ? node.left : node.right;
    if (!parent) return child;
    
    let isLeftNode = parent.left === node;
    
    if (isLeftNode) parent.left = child;
    else parent.right = child;
    return parent;
  }
  
  function deleteDoubleChildNode(parent, node){
    let rightSubMinNode = this.findMin(node.right),
        rightMinNodeParent = this.getParentOf(rightSubMinNode.val),
        newValue = rightSubMinNode.val;
    
    if (rightSubMinNode.right) deleteSingleChildNode(rightMinNodeParent, rightSubMinNode);
    else deleteLeefNode(rightMinNodeParent, rightSubMinNode);
    
    node.val = newValue;
  }
};*/

/**
 * Find minimum node from the (sub)tree
 * @param{TreeNode} node
 * @return{TreeNode} node - Node with minimum value
 */
BinarySearchTree.prototype.findMin = function(node){
  if (!node) return null;
  if (node.left) return this.findMin(node.left);
  else return node;
};

/**
 * @param{(number)}num
 * @return{TreeNode}
 */
BinarySearchTree.prototype.getParentOf = function(num){
  return getParent(this.root, num);
  
  function getParent(root, num){
    if (root.val === num) return null;
    else if (root.left.val === num || root.right.val === num) return root;
    else return getParent(root.val < num ? root.right : root.left, num);
  }
};

/**
 * @param{TreeNode} parent
 * @param{(number|TreeNode)} nodeVal
 * @return{TreeNode}
 */
BinarySearchTree.prototype.getNodeByParent = function(parent, nodeVal){
  if (nodeVal === this.root.val) return this.root; // Node is the root
  else if (!parent) return null;// Node doesn't exist
  
  // Node exist
  if (isNaN(nodeVal)) nodeVal = nodeVal.val;
  let isLeftChild = parent && parent.left && parent.left.val === nodeVal;
  return isLeftChild ? parent.left : parent.right;
};

/**
 * @param{number} num
 * @return{TreeNode}
 */
BinarySearchTree.prototype.getNode = function(num){
  if (this.root.val === num) return this.root;
  let parent = this.getParentOf(num),
      isLeftChild = parent && parent.left && parent.left.val === num;
  if (!parent) return null;// node doesn't exist
  return isLeftChild ? parent.left : parent.right;
};


let bST = new BinarySearchTree([3, 2, 1, 1.5, 4, 5]);
bST.delete(bST.root, 1);
bST.delete(bST.root, 4);

bST = new BinarySearchTree([3, 2, 1, 2.5, 4, 5]);
bST.delete(bST.root, 2);

bST = new BinarySearchTree([3, 2, 1, 1.5, 4, 5]);
bST.delete(bST.root, 3);