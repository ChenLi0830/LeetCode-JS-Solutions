/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let curLevel = [root], ans=[];
    while (curLevel.length>0){
        let levelVals = [], nextLevel = [];
        for (let i=0;i<curLevel.length;i++){
            let node = curLevel[i];
            levelVals[levelVals.length] = node.val;
            if (node.left) nextLevel[nextLevel.length] = node.left;
            if (node.right) nextLevel[nextLevel.length] = node.right;
        }
        curLevel = nextLevel;
        ans[ans.length] = levelVals;
    }
    return ans;
};