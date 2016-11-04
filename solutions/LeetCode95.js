/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n===0) return [];
    return doSearch(1,n);

    function doSearch(s,e){
        let trees = [];
        if (s>e) return [null];

        for (let i=s;i<=e;i++){
            let leftTrees = doSearch(s, i-1);
            let rightTrees = doSearch(i+1,e);
            for (let lI=0;lI<leftTrees.length;lI++){
                for(let rI=0;rI<rightTrees.length;rI++){
                    let node = new TreeNode(i);
                    node.left = leftTrees[lI];
                    node.right = rightTrees[rI];
                    trees[trees.length] = node;
                }
            }
        }

        return trees;
    }
};