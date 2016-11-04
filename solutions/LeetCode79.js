/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let ans = false, boolboard = [], steps = [[-1,0], [1,0],[0,-1],[0,1]];
    for (let i=0;i<board.length;i++){
        boolboard[i] = [];
    }
    for (let i=0;i<board.length;i++){
        for (let j=0;j<board[0].length;j++){
            if (board[i][j] === word[0]){
                boolboard[i][j] = true;
                findNext(1,i,j);
                boolboard[i][j] = false;
            }
        }
    }
    return ans;

    function findNext(l, x0, y0){
        if (ans || l===word.length){
            ans = true;
            return;
        }
        for (let i=0;i<4;i++){
            let x = x0+steps[i][0], y = y0+steps[i][1];
            if (x<0 || x>=board.length || y<0 || y>=board[0].length) {continue;}
            if (!boolboard[x][y] && board[x][y]===word[l]){
                boolboard[x][y] = true;
                findNext(l+1,x,y);
                boolboard[x][y] = false;
                if (ans) return;
            }
        }
    }
};

//exist(["ABCE","SFCS","ADEE"], "ABCCED");
exist(["aa"], "aaa");