/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths2 = function(m, n) {
    let f = [];
    for (let i=0;i<m;i++){
        f[i] = []; f[i][0] = 1;
    }
    for (let i=0;i<n;i++){
        f[0][i] = 1;
    }

    for (let i=1;i<m;i++){
        for (let j=1;j<n;j++){
            f[i][j] = f[i-1][j] + f[i][j-1];
        }
    }
    return f[m-1][n-1];
};

var uniquePaths = function(m, n) {
    let f = [];
    for (let i=0;i<n;i++){
        f[i] = 1;
    }

    for (i=1;i<m;i++){
        for (j=1;j<n;j++){
            f[j] = f[j] + f[j-1];
        }
    }
    return f[n-1];
};