/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku2 = function(board) {
    for (var i=0;i<9;i++){
        var row = {}, col = {};
        for (var j=0;j<9;j++){
            if (board[i][j]!=='.'){
                if (row[board[i][j]]) return false;
                row[board[i][j]] = true;
            }
            if (board[j][i]!=='.'){
                if (col[board[j][i]]) return false;
                col[board[j][i]] = true;
            }
        }
    }

    for (var r=0;r<3;r++){
        for (var c=0;c<3;c++){
            var grid = {};
            for (i=0;i<3;i++){
                for (j=0;j<3;j++){
                    var num = board[r*3+i][c*3+j];
                    if (num!=='.'){
                        if (grid[num]) return false;
                        grid[num] = true;
                    }
                }
            }
        }
    }

    return true;
};

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var square = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    for (var i=0;i<9;i++){
        var row = {}, col = {};
        for (var j=0;j<9;j++){
            if (board[i][j]!=='.'){
                if (row[board[i][j]]) return false;
                row[board[i][j]] = true;

                if (square[Math.floor(i/3)*3+Math.floor(j/3)][board[i][j]]) return false;
                square[Math.floor(i/3)*3+Math.floor(j/3)][board[i][j]] = true;
            }
            if (board[j][i]!=='.'){
                if (col[board[j][i]]) return false;
                col[board[j][i]] = true;
            }


        }
    }
    return true;
};

isValidSudoku([".87654321","2........","3..5.....","4........","5........","6........","7........","8........","9........"]);