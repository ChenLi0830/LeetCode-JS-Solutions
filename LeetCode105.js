/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree2 = function(preorder, inorder) {
    if (preorder.length===0) return null;
    let root = new TreeNode(preorder[0]);
    return construct(preorder, inorder, root);

    function construct(preorder, inorder){
        let head = new TreeNode(preorder[0]), leftTreeLength;
        for (let i=0;i<inorder.length;i++) if (inorder[i]===head.val) leftTreeLength = i;
        if (leftTreeLength>0) {//Has left tree
            let preorderL = preorder.slice(1,1+leftTreeLength),
                inorderL = inorder.slice(0, leftTreeLength);
            head.left = construct(preorderL, inorderL);
        }
        if (leftTreeLength+1<=preorder.length-1) {//Has right tree
            let preorderR = preorder.slice(leftTreeLength+1),
                inorderR = inorder.slice(leftTreeLength+1);
            head.right = construct(preorderR, inorderR);
        }

        return head;
    }
};

var buildTree = function(preorder, inorder) {
    if (preorder.length===0) return null;
    return construct(0, 0, preorder.length);

    function construct(preS, inS, length){
        let head = new TreeNode(preorder[preS]), leftTreeLength;
        for (let i=inS;i<inS+length;i++) if (inorder[i]===head.val) leftTreeLength = i-inS;
        if (leftTreeLength>0) {//Has left tree
            let leftPreS = preS+ 1, leftInS = inS;
            head.left = construct(leftPreS, leftInS, leftTreeLength);
        }
        if (preS+leftTreeLength+1<=preS+length-1) {//Has right tree
            let rightPreS = preS+leftTreeLength+ 1, rightInS = inS+leftTreeLength+1;
            head.right = construct(rightPreS, rightInS, length-leftTreeLength-1);
        }
        return head;
    }
};

buildTree([2,1,4,3], [1,4,2,3]);



    var buildTree = function(preorder, inorder) {
        if (preorder.length===0) return null;
        return construct(0, 0, preorder.length);
        function construct(preS, inS, length){
            let head = new TreeNode(preorder[preS]), leftL;
            for (let i=inS;i<inS+length;i++) if (inorder[i]===head.val) leftL = i-inS;
            if (leftL>0) head.left = construct(preS+ 1, inS, leftL);
            if (preS+leftL+1<=preS+length-1) head.right = construct(preS+leftL+ 1, inS+leftL+1, length-leftL-1);
            return head;
        }
    };







