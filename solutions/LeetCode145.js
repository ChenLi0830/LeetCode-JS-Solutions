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
var postorderTraversal = function(root) {
    if (!root) return [];
    let visited = new Set(), curLevel = [root], ans = [];
    while (curLevel.length>0){
        let nextLevel = [];
        for (let i=0;i<curLevel.length;i++){
            let node = curLevel[i];
            if ((node.left || node.right) && !visited.has(node)){
                visited.add(node);
                if (node.left) nextLevel[nextLevel.length] = node.left;
                if (node.right) nextLevel[nextLevel.length] = node.right;
                nextLevel = nextLevel.concat(curLevel.slice(i));
                break;
            }
            ans[ans.length] = node.val;
        }
        curLevel = nextLevel;
    }
    return ans;
};


