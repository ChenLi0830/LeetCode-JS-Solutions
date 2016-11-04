/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (matrix.length===0) return 0;
    let n = matrix.length, m = matrix[0].length, f=[], maxArea=0;
    for (let i=0;i<n;i++){
        let stack = [], sIndex = 0;
        //Initialize f[];
        f[m]=0;
        for (let j=0;j<m;j++){
            if (matrix[i][j] === '0') f[j] = 0;
            else f[j] = (i===0? 0:f[j]) + 1;
        }
        //Calculate area for the matrix from row 0 to i;
        for (let j=0;j<=m;j++){
            if (sIndex === 0 || f[j]>f[stack[sIndex-1]]){
                stack[sIndex++] = j;
            } else {
                let height = f[stack[sIndex-1]];
                sIndex -- ;
                let width = (sIndex===0 ? j : j-1-stack[sIndex-1]);
                let area = height*width;
                if (area>maxArea) maxArea = area;
                j--;
            }
        }
    }
    return maxArea;
};

//maximalRectangle([]);
maximalRectangle(['1']);
maximalRectangle([['1', '1'],['1','1']]);
maximalRectangle([['1', '1','0'],['1','1','1']]);