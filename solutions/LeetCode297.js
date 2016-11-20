/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize2 = function(root) {
    let nonEmpty = !!root, queue =[root], index = 0;
    while (nonEmpty){
        let size = queue.length; nonEmpty = false;
        for (let i=index;i<size;i++){
            if (queue[i]){
                queue.push(queue[i].left);
                queue.push(queue[i].right);
                if (queue[i].left || queue[i].right) nonEmpty = true;
            }
        }
        index = size;
    }
    queue = queue.slice(0, index);
    
    let ans = "";
    queue.forEach((elem)=>{
        if (elem) ans += elem.val + ",";
        else ans += "N,"
    });
    return ans.slice(0, ans.length-1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize2 = function(data) {
    if (data.length===0) return null;
    let queue = data.split(","), root = null;
    // if (queue.length===0) return null;
    let prevLevel = [], curLevel;
    let start = 0, l = 1, nodeCount;
    while (start+l<=queue.length){
        curLevel = [];
        nodeCount = 0;
        for (let i=start;i<start+l;i++){
            let node;
            if (queue[i]==="N") node = null;
            else {
                node = new TreeNode(parseInt(queue[i]));
                nodeCount++;
            }
            curLevel.push(node);
        }
        
        if (prevLevel.length===0) {
            prevLevel = curLevel;
            root = prevLevel[0];
        } else {
            let curIdx = 0;
            for (let i=0;i<prevLevel.length;i++){
                if (prevLevel[i]){
                    prevLevel[i].left = curLevel[curIdx++];
                    prevLevel[i].right = curLevel[curIdx++];
                }
            }
        }
        prevLevel = curLevel;
        start += l;
        l = nodeCount*2;
    }
    return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let layer = root ? [root] : [],
        ans = [];
    while (layer.length>0) {
        let newLayer = [];
        layer.forEach(node => {
            if (node) {
                newLayer.push(node.left);
                newLayer.push(node.right);
            }
            ans.push(node ? node.val : "N");
        });
        layer = newLayer;
    }
    return ans.join(",");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let arr = data.length > 0 ? data.split(",").map(elem => elem==="N" ? "N" : Number(elem)) : [];
    let ans = null;
    if (arr.length > 0) {
        ans = arr[0] === "N" ? null : new TreeNode(arr[0]);
    }
    let layer = ans ? [ans] : [], index = 1;
    while (layer.length>0){
        let newLayer = [];
        for (let i=0; i<layer.length; i++){
            let leftNode = isNaN(arr[index]) ? null : new TreeNode(arr[index]),
                rightNode = isNaN(arr[index + 1]) ? null : new TreeNode(arr[index + 1]);
            if (leftNode) layer[i].left = leftNode;
            if (rightNode)layer[i].right = rightNode;
            if (layer[i].left) newLayer.push(layer[i].left);
            if (layer[i].right) newLayer.push(layer[i].right);
            index += 2;
        }
        layer = newLayer;
    }
    return ans;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

let node1 = new TreeNode(1),
    node2 = new TreeNode(2),
    node3 = new TreeNode(3),
    node4 = new TreeNode(4),
    node5 = new TreeNode(5);

node1.left = node2;
node1.right = node3;
node3.right = node4;
node4.left = node5;

let str = serialize(node1);
deserialize(str);

// deserialize(serialize(null));