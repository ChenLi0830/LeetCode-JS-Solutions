/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate2 = function(matrix) {
    let ans = [];
    for (let i=0;i<matrix[0].length;i++){
        ans[i] = [];
    }
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            ans[j][matrix.length-1-i] = matrix[i][j];
        }
    }
    for (let i=0;i<matrix.length;i++){
        for (let j=0;j<matrix[0].length;j++){
            matrix[i][j] = ans[i][j];
        }
    }
};

var rotate = function(matrix) {
    for (let i=0;i<matrix.length/2;i++){
        for (let j=0;j<matrix[0].length;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[matrix.length - 1 - i][j];
            matrix[matrix.length - 1 - i][j] = temp;
        }
    }

    for (let i=0;i<matrix.length;i++){
        for (let j=i+1;j<matrix[0].length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
};

rotate([[1,2],[3,4]]);

// 10 11 12
// 14 15 16
// 18 19 20
// 22 23 24

// 22 18 14 10
// 23 19 15 11
// 24 20 16 12

// 22 18 14 10
// 23 19 15 11
// 24 20 16 12
// 25 21 17 13

// i
