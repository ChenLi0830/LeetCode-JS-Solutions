/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let row = [], col = [];
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            if (matrix[i][j]===0){
                row[i] = true;
                col[j] = true;
            }
        }
    }

    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            matrix[i][j] = (row[i] || col[j])? 0:matrix[i][j];
        }
    }
};