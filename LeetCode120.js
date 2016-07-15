/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length, f = [triangle[0][0]], INT_MAX = Math.pow(2,31)-1, ans = INT_MAX;
    for (let i=1;i<n;i++){
        for (let j=i;j>=0;j--){
            let left = f[j-1] !== undefined? f[j-1] : INT_MAX;
            let right = f[j] !== undefined ? f[j] : INT_MAX;
            f[j] = Math.min(left,right)+triangle[i][j];
        }
    }
    for (let i=0;i<n;i++) ans = Math.min(ans, f[i]);
    return ans;
};

