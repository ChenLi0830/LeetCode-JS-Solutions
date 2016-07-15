/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans = [];
    ans[-1] = [];ans[-1][-1] = 1;
    for (let i=0;i<numRows;i++){
        ans[i] = [];
        for (let j=0;j<i+1;j++){
            ans[i][j] = (ans[i-1][j-1]!==undefined ? ans[i-1][j-1] : 0) + (ans[i-1][j]!==undefined ? ans[i-1][j] : 0);
        }
    }
    return ans;
};
