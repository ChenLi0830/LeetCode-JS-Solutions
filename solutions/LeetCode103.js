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
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let curLevel = [root], ans = [], fromLeft = true;
    while (curLevel.length>0){
        let nextLevel = [], values = [];
        for (let i=0;i<curLevel.length;i++){
            let node = curLevel[i];
            values[values.length] = node.val;
            if (node.left) nextLevel[nextLevel.length] = node.left;
            if (node.right) nextLevel[nextLevel.length] = node.right;
        }
        curLevel = nextLevel;
        if (fromLeft) ans[ans.length] = values;
        else ans[ans.length] = values.reverse();
        fromLeft = !fromLeft;
    }
    return ans;
};
