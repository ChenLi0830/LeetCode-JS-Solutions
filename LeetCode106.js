/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree2 = function(inorder, postorder) {
    if (inorder.length===0) return null;
    return build(inorder, postorder);

    function build(inorder, postorder){
        let head = new TreeNode(postorder[postorder.length-1]), leftL;
        for (let i=0;i<inorder.length;i++)if (inorder[i]===head.val) leftL = i;
        if (leftL>0){
            let postorderL = postorder.slice(0, leftL), inorderR = inorder.slice(0, leftL);
            head.left = build(inorderL, postorderL);
        }
        if (postorder.length>leftL+1){
            let postorderR = postorder.slice(leftL, postorder.length-1), inorderR = inorder.slice(leftL+1, inorder.length);
            head.right = build(inorderR, postorderR);
        }
        return head;
    }
};

var buildTree2 = function(inorder, postorder) {
    if (inorder.length===0) return null;
    return build(0, 0, inorder.length);

    function build(inS, poS, length){
        let head = new TreeNode(postorder[poS+length-1]), leftL;
        for (let i=inS;i<inS+length;i++)if (inorder[i]===head.val) leftL = i-inS;
        if (leftL>0) head.left = build(inS, poS, leftL);
        if (length>leftL+1) head.right = build(inS+leftL+1, poS+leftL, length-1-leftL);
        return head;
    }
};


var buildTree1 = function(inorder, postorder) {
    if (inorder.length===0) return null;
    let map = [];
    for (let i=0;i<inorder.length;i++) {
        map[inorder[i]] = i;
    }
    return build(0, 0, inorder.length);

    function build(inS, poS, length){
        let head = new TreeNode(postorder[poS+length-1]), leftL = map[head.val]-inS;
        if (leftL>0) head.left = build(inS, poS, leftL);
        if (length>leftL+1) head.right = build(inS+leftL+1, poS+leftL, length-1-leftL);
        return head;
    }
};
buildTree([2,4,1,5,3,7,9], [4,2,5,9,7,3,1]);