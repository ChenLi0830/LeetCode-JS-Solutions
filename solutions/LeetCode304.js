/**
 * @constructor
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    "use strict";
    if (matrix.length===0) return 0;
    let m = matrix.length,
        n = matrix[0].length;
    this.rect = [];
    for (let i=-1;i<m;i++){
        this.rect[i] = [];
        for (let j=-1;j<n;j++){
            if (i===-1 || j===-1) this.rect[i][j] = 0;
            else this.rect[i][j] = this.rect[i][j-1]+this.rect[i-1][j]-this.rect[i-1][j-1]+matrix[i][j];
        }
    }
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    let rect = this.rect[row2][col2],
        rect1 = this.rect[row1-1][col2],
        rect2 = this.rect[row2][col1-1],
        rect3 = this.rect[row1-1][col1-1];
    
    return rect-rect1-rect2+rect3;
};


/**
 * Your NumMatrix object will be instantiated and called as such:
 * var numMatrix = new NumMatrix(matrix);
 * numMatrix.sumRegion(0, 1, 2, 3);
 * numMatrix.sumRegion(1, 2, 3, 4);
 */