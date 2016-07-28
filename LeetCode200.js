/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let ans = 0, steps = [[0,-1],[0,1],[-1,0],[1,0]];
    for (let i=0;i<grid.length;i++){
        for (let j=0;j<grid[0].length;j++){
            if (grid[i][j]==="1"){
                ans++;
                fillIsland(i,j);
            }
        }
    }
    return ans;
    
    function fillIsland(x,y){
        let curL = [[x,y]]; grid[x][y] = "0";
        while (curL.length>0){
            let nextL = [];
            for (let i=0;i<curL.length;i++){
                for (let j=0;j<4;j++){
                    let newX = curL[i][0]+steps[j][0],
                        newY = curL[i][1]+steps[j][1];
                    if (newX>=0 && newX<=grid.length-1 && newY>=0 && newY<=grid[0].length-1){
                        if (grid[newX][newY]==="1"){
                            nextL[nextL.length] = [newX, newY];
                            grid[newX][newY] = "0";
                        }
                    }
                }
            }
            curL = nextL;
        }
    }
};


