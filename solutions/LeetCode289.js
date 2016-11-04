/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    let m = board.length, n = board[0].length;
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            let num = calcNeighbour(i,j);
            if (board[i][j]===1){
                if (num<2 || num>3) board[i][j] = 2;
                else board[i][j] = 1;
            } else {
                board[i][j] = num===3? 3:0;
            }
        }
    }
    for (let i=0;i<m;i++){
        for (let j=0;j<n;j++){
            board[i][j] = board[i][j]%2;
        }
    }
    
    function calcNeighbour(x,y){
        let count = 0;
        let step = [-1, 0, 1];
        for (let i=0;i<3;i++){
            for (let j=0;j<3;j++){
                let newX = x+step[i], newY = y+step[j];
                if (newX>=0 && newX<m && newY>=0 && newY<n && (newX!==x || newY!==y))
                    count = count + ((board[newX][newY] === 1 || board[newX][newY]===2)? 1 : 0);
            }
        }
        return count;
    }
};

gameOfLife([[1,1,1],[1,0,1], [1,0,0]]);