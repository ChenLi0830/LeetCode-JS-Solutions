/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    var col = [], dia1 = [], dia2 = [], solution = [], ans = [];

    for (let i = 0; i < n; i++) {
        solution[i] = [];
        for (let j = 0; j < n; j++) {
            solution[i][j] = ".";
        }
    }

    putQueue(0);
    return ans;

    function putQueue(level) {
        if (level === n) {
            let solutionArr = [];
            for (let i = 0; i < n; i++) {
                solutionArr[i] = solution[i].join("");
            }
            ans = ans.concat([solutionArr]);
        }

        for (let j = 0; j < n; j++) {
            if (!col[j] && !dia1[level + j] && !dia2[level - j]) {
                col[j] = true;
                dia1[level + j] = true;
                dia2[level - j] = true;
                solution[level][j] = "Q";
                putQueue(level + 1);
                solution[level][j] = ".";
                col[j] = false;
                dia1[level + j] = false;
                dia2[level - j] = false;
            }
        }
    }
};

solveNQueens(8);