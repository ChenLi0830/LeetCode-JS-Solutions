/**
 * @param {character[][]} matrix
 * @return {number}
 */
/**
 * 1. find a point matrix[i][j] that is "1"
 * 2. start from there, find more "1"s by searching towards right and bottom, fill all these "1"s with "2"
 * 3. go from point i, j, search for "2"s one line at a time, save the shortest number of the 2s for all lines, keep
 *    record of the ans, if line number * shortest length > ans, ans = line number * shortest length
 */

var maximalSquare2 = function(matrix) {
    if (matrix.length===0) return 0;
    let queue, m = matrix.length, n = matrix[0].length, steps = [[0,1], [1,0]], ans = 0;
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            if (matrix[i][j]==="1"){
                matrix[i][j] = "2";
                queue = [[i,j]];
                while (queue.length>0){
                    let p = queue.shift();
                    for (let k = 0;k<2;k++){
                        let newI = p[0]+steps[k][0], newJ = p[1]+steps[k][1];
                        if (newI<m && newJ<n && matrix[newI][newJ]==="1"){
                            matrix[newI][newJ] = "2";
                            queue.push([newI, newJ]);
                        }
                    }
                }
                
                let length = Infinity, width = 0;
                for (let ii=i;ii<m;ii++){
                    let tempL = 0;
                    for (let jj=j;jj<n;jj++){
                        if (matrix[ii][jj]==="2") tempL++;
                        else break;
                    }
                    if (tempL===0) break;
                    width++;
                    if (tempL<length) length = tempL;
                    let squareLength = Math.min(length, width);
                    ans = Math.max(ans, squareLength*squareLength);
                }
            }
        }
    }
    return ans;
};

