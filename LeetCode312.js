/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins2 = function(nums) {
    let newNums = [];
    newNums.push(1);
    nums.forEach((num)=>{
        if (num>0) newNums.push(num);
    });
    newNums.push(1);
    
    let n = newNums.length, ans = 0;
    for (let i=0;i<n-2;i++){
        let size = n-2-i,
            min = Infinity,
            burst,
            start = size>2 ? 2 : 1,
            end = size>2 ? size-1:size;
        for (let j=start;j<=end;j++){
            if (min>newNums[j]){
                min = newNums[j];
                burst = j;
            }
        }
        ans+= newNums[burst-1]*newNums[burst]*newNums[burst+1];
        newNums.splice(burst,1);
    }
    return ans;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let newNums = [], calculatedValues = [];
    newNums.push(1);
    nums.forEach((num)=>{
        if (num>0) newNums.push(num);
    });
    newNums.push(1);
    
    let ans = doSearch(1, newNums.length-2);
    return ans;
    
    function doSearch(left, right){
        if (left > right) return 0;
        if (calculatedValues[left] && calculatedValues[left][right]!==undefined) return calculatedValues[left][right];
        let ans = 0;
        for (let i=left;i<=right;i++){
            let leftMax = doSearch(left, i-1),
                rightMax = doSearch(i+1, right);
            ans = Math.max(ans, leftMax+newNums[left-1]*newNums[i]*newNums[right+1]+rightMax);
            if (calculatedValues[left]===undefined){
                calculatedValues[left] = [];
            }
            calculatedValues[left][right] = ans;
        }
        return ans;
    }
};



maxCoins([3, 1, 0, 5, 8, 0]);