/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = [1];
    for (let i=1;i<rowIndex+1;i++){
        for (let j=i;j>=0;j--){
            ans[j] = (ans[j-1] !== undefined ? ans[j-1] : 0) + (ans[j] !== undefined ? ans[j] : 0)
        }
    }
    return ans;
};