/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = [], num = 0;
    for (let i=0;i<n;i++){//Initialize result array
        result[i] = [];
    }
    for (let i=0;i<Math.floor((n+1)/2);i++){
        doLevel(i);
    }
    return result;

    function doLevel(l){
        for (let j=l; j<=n-1-l;j++){
            num++;
            result[l][j] = num;
        }
        for (let i=l+1; i<=n-1-l; i++){
            num++;
            result[i][n-1-l] = num;
        }
        if (n-1-l>l){
            for (let j=n-2-l; j>=l; j--){
                num++;
                result[n-1-l][j] = num;
            }
            for (let i=n-2-l; i>=l+1; i--){
                num++;
                result[i][l] = num;
            }
        }
    }
};

generateMatrix(1);
generateMatrix(2);
generateMatrix(3);
generateMatrix(4);