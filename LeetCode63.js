/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m=obstacleGrid.length, n=obstacleGrid[0].length;
    let f=[];f[-1] = 1;
    for (let i=0;i<n;i++){
        f[i]= obstacleGrid[0][i]===0 ? f[i-1]:0;
    }
    f[-1] = 0;
    for (let i=1;i<m;i++){
        for (let j=0;j<n;j++){
            f[j] = obstacleGrid[i][j]===0 ? f[j-1] + f[j] : 0;
        }
    }
    return f[n-1];
};

uniquePathsWithObstacles([
    [0,0,0],
    [0,1,1],
    [0,0,0]
]);