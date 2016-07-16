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
var maxPathSum = function(root) {
    let curLayer = [root], layers = [], max = 0, f=[], maxNode;
    while (curLayer.length>0){
        let nextLayer = [];
        for (let i=0;i<curLayer.length;i++){
            let node = curLayer[i];
            if (node.left) nextLayer[nextLayer.length] = node.left;
            if (node.right) nextLayer[nextLayer.length] = node.right;
            if (maxNode===undefined || maxNode<node.val) maxNode = node.val;
        }
        layers[layers.length] = curLayer;
        curLayer = nextLayer;
    }
    for (let i=layers.length-1;i>=0;i--){
        let index = 0;f[i] = [];
        for (let j=0;j<layers[i].length;j++){
            let node = layers[i][j], left = 0, right = 0;
            if (node.left) left = f[i+1][index++];
            if (node.right) right = f[i+1][index++];
            f[i][j] = Math.max(left, right, 0) + layers[i][j].val;
            max = Math.max(max, Math.max(left, right, left+right, 0) + layers[i][j].val);
        }
    }
    return max===0 ? maxNode : max;
};
