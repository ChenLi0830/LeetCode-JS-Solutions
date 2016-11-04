/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {
    let neighbours = [];
    for (let i=0;i<n;i++) neighbours[i] = new Set();
    edges.forEach((edge)=>{
        neighbours[edge[0]].add(edge[1]);
        neighbours[edge[1]].add(edge[0]);
    });
    
    let leaves = [];
    for (let i=0;i<n;i++) {
        if (neighbours[i].size<=1) leaves.push(i);
    }
    
    while (n>2) {
        let newLeaves = [];
        n -= leaves.length;
        leaves.forEach((leaf)=>{
            neighbours[leaf].forEach((node)=>{
                neighbours[node].delete(leaf);
                if (neighbours[node].size===1) newLeaves.push(node);
            });
        });
        leaves = newLeaves;
    }
    return leaves;
};

