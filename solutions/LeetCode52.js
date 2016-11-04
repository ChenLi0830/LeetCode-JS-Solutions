/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens= function(n) {
    var col = [], dia1 = [], dia2 = [], ans = 0;

    putQueue(0);
    return ans;

    function putQueue(level) {
        if (level === n) {
            ans ++;
            return;
        }

        for (let j = 0; j < n; j++) {
            if (!col[j] && !dia1[level + j] && !dia2[level - j]) {
                col[j] = true;
                dia1[level + j] = true;
                dia2[level - j] = true;
                putQueue(level + 1);
                col[j] = false;
                dia1[level + j] = false;
                dia2[level - j] = false;
            }
        }
    }
};

totalNQueens(0);
totalNQueens(1);
totalNQueens(2);
totalNQueens(3);
totalNQueens(4);
totalNQueens(5);
totalNQueens(6);
totalNQueens(7);
totalNQueens(8);