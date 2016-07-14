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
var minDepth = function(root) {
    if (root===null) return 0;
    let curLevel = [root], counter = 0, ans = 0;
    while (curLevel.length>0 && ans===0){
        let nextLevel = [];
        counter++;
        for (let i=0;i<curLevel.length;i++){
            if (curLevel[i].left===null && curLevel[i].right===null) {
                ans = counter;
                break;
            }
            if (curLevel[i].left!==null) nextLevel[nextLevel.length] = curLevel[i].left;
            if (curLevel[i].right!==null) nextLevel[nextLevel.length] = curLevel[i].right;
        }
        curLevel = nextLevel;
    }
    return ans;
};

let node1 = new TreeNode(0);
minDepth(node1);