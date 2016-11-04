/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length===0) return [];
    let ans = [], m = matrix.length, n = matrix[0].length;

    let maxLevel = Math.floor((Math.min(m, n)+1)/2);
    for (let l = 0;l<maxLevel;l++){
        spiral(l);
    }
    return ans;

    function spiral(l){
        let i,j;
        for (i=l, j=l;j<=n-1-l; j++){
            ans = ans.concat(matrix[i][j]);
        }
        for (j=n-1-l, i=l+1;i<=m-1-l; i++){
            ans = ans.concat(matrix[i][j]);
        }
        if (m-1-l>l){
            for (i=m-1-l, j=n-2-l;j>=l; j--){
                ans = ans.concat(matrix[i][j]);
            }
        }
        if (l<n-1-l){
            for (j=l, i=m-2-l;i>=l+1; i--){
                ans = ans.concat(matrix[i][j]);
            }
        }
    }
};

//spiralOrder([[6,9,7]]);
//spiralOrder([[1,2,3],[4,5,6]]);
//spiralOrder([[1,2,3],[4,5,6],[7,8,9]]);
spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]);
spiralOrder([[1]]);
//spiralOrder([[1,2],[3,4],[5,6]]);
