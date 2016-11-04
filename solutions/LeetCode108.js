/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST2 = function(nums) {
    if (nums.length===0) return null;
    return build(nums);

    function build(treeNums){
        //Todo use index rather than subarray of nums to improve space effciency
        let leftL = Math.floor(treeNums.length/2), head = new TreeNode(treeNums[leftL]);
        if (leftL>0) head.left = build(treeNums.slice(0, leftL));
        if (leftL+1<treeNums.length) head.right = build(treeNums.slice(leftL+1));
        return head;
    }
};

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
    var sortedArrayToBST = function(nums) {
        if (nums.length===0) return null;
        return build(0, nums.length);
        function build(start, length){
            let leftL = Math.floor((length)/2), head = new TreeNode(nums[start+leftL]);
            if (leftL>0) head.left = build(start, leftL);
            if (leftL+1<length) head.right = build(start+leftL+1, length-leftL-1);
            return head;
        }
    };



sortedArrayToBST([1,2,3,4,5])

