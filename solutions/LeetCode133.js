/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph2 = function (graph) {
    if (graph === null) return null;
    let nodeArr = [];
    return doClone(graph);

    function doClone(node) {
        let curNode = nodeArr[node.label];
        if (curNode === undefined) {
            curNode = new UndirectedGraphNode(node.label);
            nodeArr[node.label] = curNode;

            for (let i = 0; i < node.neighbors.length; i++) {
                let neighbor = doClone(node.neighbors[i]);
                curNode.neighbors[curNode.neighbors.length] = neighbor;
            }
        }
        return curNode;
    }
};

var cloneGraph = function (graph) {
    if (graph === null) return null;
    let nodeMap = new Map();
    return doClone(graph);

    function doClone(node) {
        let curNode;
        if (!nodeMap.has(node.label)) {
            curNode = new UndirectedGraphNode(node.label);
            nodeMap.set(node.label, curNode);

            for (let i = 0; i < node.neighbors.length; i++) {
                let neighbor = doClone(node.neighbors[i]);
                curNode.neighbors[curNode.neighbors.length] = neighbor;
            }
        } else curNode = nodeMap.get(node.label);
        return curNode;
    }
};

let node0 = new UndirectedGraphNode(0),
    node1 = new UndirectedGraphNode(1),
    node2 = new UndirectedGraphNode(2);
node0.neighbors = [node1, node2];
node1.neighbors = [node0, node2];
node2.neighbors = [node1, node0, node2];

cloneGraph(node0);
