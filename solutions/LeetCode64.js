/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let f=[];
    for (let i=-1;i<grid.length;i++){
        f[i] = [];
    }
    f[0][-1] = 0;
    let largeNumber = Math.pow(2,31)-1;
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[0].length;j++){
            f[i][j] = Math.min(f[i][j-1]>=0? f[i][j-1]:largeNumber, f[i-1][j]>=0? f[i-1][j] : largeNumber) + grid[i][j];
        }
    }
    return f[grid.length-1][grid[0].length-1];
};

//minPathSum([[1,2],[1,1]]);
minPathSum([[1,3,1],[1,5,1],[4,2,1]]);

// f[i][0] = grid[i][0]; i from 0 to m-1
// f[0][j] = grid[0][j]; j from 0 to n-1

// f[i][j] = Math.min(f[i][j-1], f[i-1][j]) + grid[i][j];