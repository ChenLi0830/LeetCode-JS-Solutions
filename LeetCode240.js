/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length===0) return false;
    let m = matrix.length, n = matrix[0].length, lastR = n-1;
    for (let i=0;i<m;i++){
        if (matrix[i][0]>target) return false;
        if (matrix[i][lastR]<target) continue;
        let l=0, r = lastR;
        while (l<=r){
            let mid = Math.trunc((l+r)/2);
            if (target===matrix[i][mid]) return true;
            else if (matrix[i][mid]<target) l = mid+1;
            else r = mid-1;
        }
        if (matrix[i][r]>target) lastR = r;
        else lastR = Math.min(r+1, n-1);
    }
    return false;
};



searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 3);

searchMatrix([[-1,3]], -1);

searchMatrix([[5],[6]], 6);

