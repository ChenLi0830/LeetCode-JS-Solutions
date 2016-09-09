/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath2 = function(matrix) {
    if (matrix.length===0) return 0;
    let set = new Set(),
        n = matrix.length,
        m = matrix[0].length,
        steps = [[-1,0], [1,0], [0,-1], [0,1]],
        pathVal = new Array(n),
        ans = 0;
    
    for (let i=0;i<n;i++){
        pathVal[i] = [];
    }
    
    let lastSize = -1;
    while (set.size !== lastSize) {
        lastSize = set.size;
        let stack = [];
        // Find max values
        for (let i=0, max = -Infinity; i<n; i++){
            for (let j=0;j<m;j++){
                if (!set.has(matrix[i][j])){
                    if (matrix[i][j]>max) {
                        max = matrix[i][j];
                        stack = [[i,j]];
                    } else if (matrix[i][j]===max){
                        stack.push([i,j]);
                    }
                }
            }
        }
        //Update set for visited points
        stack.forEach(point => set.add(matrix[point[0]][point[1]]) );
        //Update pathVal array using points in stack
        stack.forEach(([i,j])=>{
            pathVal[i][j] = 1;
            steps.forEach(step => {
                let newX = i+step[0],
                    newY = j+step[1],
                    valid;
                
                valid = newX>=0 && newX<n && newY>=0 && newY<m; // Make sure the point is in boundary
                valid = valid && matrix[i][j] < matrix[newX][newY]; // Point is descending
                
                if (valid) {
                    if (pathVal[newX][newY]===undefined) pathVal[i][j] = 2;
                    else pathVal[i][j] = Math.max(pathVal[i][j], pathVal[newX][newY]+1);
                }
            });
            //Update ans
            ans = Math.max(ans, pathVal[i][j]);
        });
    }
    
    return ans;
    
};



var longestIncreasingPath = function(matrix) {
    if (matrix.length===0) return 0;
    let n = matrix.length,
        m = matrix[0].length,
        steps = [[-1,0], [1,0], [0,-1], [0,1]],
        pathVal = new Array(n),
        points = [],
        ans = 0;
    
    //Initialize points and pathVal
    matrix.forEach((row,i)  => {
        pathVal[i] = [];
        row.forEach((elem,j) => {
            points.push({
                val: elem,
                x: i,
                y: j
            })
        });
    });
    
    points.sort((a,b)=> b.val - a.val);
    
    points.forEach( ({val, x, y}) => {
        pathVal[x][y] = 1;
        steps.forEach(step => {
            let newX = x+step[0],
                newY = y+step[1],
                valid;
        
            valid = newX>=0 && newX<n && newY>=0 && newY<m; // Make sure the point is in boundary
            valid = valid && val < matrix[newX][newY]; // Point is descending
        
            if (valid) {
                if (pathVal[newX][newY]===undefined) pathVal[x][y] = 2;
                else pathVal[x][y] = Math.max(pathVal[x][y], pathVal[newX][newY]+1);
            }
        });
        //Update ans
        ans = Math.max(ans, pathVal[x][y]);
    });
    return ans;
};


console.assert(longestIncreasingPath([[9,9,4],[6,6,8],[2,1,1]])===4);
console.assert(longestIncreasingPath([[3,4,5],[3,2,6],[2,2,1]])===4);
console.assert(longestIncreasingPath([[17,4,6,11,4,0,17,12,19,12,12,0],[0,6,4,4,5,9,15,1,11,13,18,0],[4,2,13,1,2,7,15,5,14,6,8,6]])===6);