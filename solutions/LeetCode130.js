/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length!==0) {
        let n = board.length, m = board[0].length, visited = [],
            steps = [{x:-1, y:0}, {x:1, y:0}, {x:0, y:-1}, {x:0, y:1}];
        for (let i=0;i<n;i++) visited[i] = [];
        for (let i=0;i<n;i++){
            for (let j=0;j<m;j++){
                if (board[i][j]==="O" && !visited[i][j]){
                    let oArr = [{x:i,y:j}], start = 0, end = 0, notSurround = false;
                    visited[i][j] = true;
                    while (start<=end){
                        let x = oArr[start].x, y= oArr[start].y, newX, newY;
                        if (x===0 || x=== n-1 || y===0 || y===m-1) notSurround = true;
                        for (let k = 0;k < 4;k++){
                            newX = x+steps[k].x;
                            newY = y+steps[k].y;

                            if (newX>=0 && newX<=n-1 && newY>=0 && newX<=m-1 && board[newX][newY]==="O" && !visited[newX][newY]) {
                                visited[newX][newY] = true;
                                oArr[++end] = {x:newX, y:newY};
                            }
                        }
                        start++;
                    }
                    if (!notSurround){
                        for (let k=0;k<oArr.length;k++){
                            board[oArr[k].x][oArr[k].y] = "X";
                        }
                    }
                }
            }
        }

    }
};

solve([["X","X","X","X"], ["X","O","O","X"], ["X","X","O","X"], ["X","O","X","X"]]);
