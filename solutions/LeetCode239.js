/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let dequeue = [], ans = [];
    
    for (let i=0;i<k;i++) {
        if (dequeue.length>0 && dequeue[0].idx<i-k+1) dequeue.shift();
        let num = nums[i];
        while (dequeue.length > 0 && dequeue[dequeue.length-1].val<num) dequeue.pop();
        dequeue.push({idx:i, val: nums[i]});
        
        if (i>=k-1) ans.push(dequeue[0].val);
    }
    
    return ans;
};

maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3);
