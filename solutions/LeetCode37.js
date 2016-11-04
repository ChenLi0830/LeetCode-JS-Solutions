/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
    var foundAns = false, rows = [], cols = [], sqrs = [], boardArr = [], toFill = 0, rowI= [], colI= [], sqrsI=[];
    for (var i = 0; i < 9; i++) {
        rows[i] = {};
        cols[i] = {};
        sqrs[i] = {};
        boardArr[i] = [];
        rowI[i]=0;
        colI[i]=0;
        sqrsI[i]=0;
    }

    for (var i = 0; i < 9; i++) {
        for (var j = 1; j < 10; j++) {
            rows[i][j] = true;
            cols[i][j] = true;
            var sqNo = Math.floor(i / 3) * 3 + i % 3;
            sqrs[sqNo][j] = true;
            if (board[i][j-1] === '.') {
                boardArr[i][j-1] = -1;
                toFill++;
            }
            else {
                boardArr[i][j-1] = parseInt(board[i][j-1]);
                sqNo = Math.floor(i / 3) * 3 + Math.floor((j-1) / 3);
                rowI[i]++;
                colI[j-1]++;
                sqrsI[sqNo]++;
            }
        }
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (board[i][j] !== '.') {
                rows[i][board[i][j]] = false;
                cols[j][board[i][j]] = false;
                sqNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                sqrs[sqNo][board[i][j]] = false;
            }
        }
    }

    search(0, -1);

    for (i = 0; i < 9; i++) {
        //var str = "";
        for (j = 0; j < 9; j++) {
            board[i][j] = boardArr[i][j];
        }
    }

    var i =0;


    function search() {
        if (toFill === 0) {
            foundAns = true;
        }
        if (foundAns) return;

        var point = findPoint();
        var i = point[0];
        var j = point[1];

        if (i===-1 || j ===-1){
            i = i;
        }
        var sqNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        for (var k = 1; k < 10; k++) {
            if (rows[i][k] && cols[j][k] && sqrs[sqNo][k]) {
                rows[i][k] = false;
                cols[j][k] = false;
                sqrs[sqNo][k] = false;
                rowI[i]++;
                colI[j]++;
                sqrsI[sqNo]++;
                boardArr[i][j] = k;
                toFill--;

                search();

                if (foundAns) return;

                rows[i][k] = true;
                cols[j][k] = true;
                sqrs[sqNo][k] = true;
                rowI[i]--;
                colI[j]--;
                sqrsI[sqNo]--;
                boardArr[i][j] = -1;
                toFill++;
            }
        }
    }

    function findPoint(){
        var max = 0, i0=-1, j0=-1;
        for (i=0;i<9;i++){
            for (j=0;j<9;j++){
                if (boardArr[i][j] === -1){
                    var sqNo = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                    if (rowI[i]+colI[j]+sqrsI[sqNo]>max) {
                        max = rowI[i]+colI[j]+sqrsI[sqNo];
                        i0=i;j0=j;
                    }
                }
            }
        }
        return [i0,j0];
    }
};


solveSudoku(["..9748...","7........",".2.1.9...","..7...24.",".64.1.59.",".98...3..","...8.3.2.","........6","...2759.."])
