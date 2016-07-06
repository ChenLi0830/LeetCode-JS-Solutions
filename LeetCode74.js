/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let l=0, r=matrix.length-1;
    while (l<r){
        let m=Math.floor((l+r+1)/2);
        if (matrix[m][0]>target){
            r = m-1;
        } else {
            l = m;
        }
    }
    let i = l, result = false;
    l = 0; r = matrix[0].length-1;
    while (l<=r){
        let m = Math.floor((l+r)/2);
        if (matrix[i][m]===target){
            result = true;
            break;
        } else if (matrix[i][m]>target){
            r = m-1;
        } else {
            l = m+1;
        }
    }

    return result;
};

searchMatrix([[1]],0);

searchMatrix([
    [1,   3,  5,  7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
],4);