/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    let curLevel = [root], ans = [];
    while (curLevel.length>0){
        ans[ans.length] = curLevel[curLevel.length-1].val;
        let nextLevel = [];
        for (let i=0;i<curLevel.length;i++){
            let node = curLevel[i];
            if (node.left) nextLevel[nextLevel.length] = node.left;
            if (node.right) nextLevel[nextLevel.length] = node.right;
        }
        curLevel = nextLevel;
    }
    return ans;
};