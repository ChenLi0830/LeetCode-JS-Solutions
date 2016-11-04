/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    if (n===0) return 0;

    let f = [];
    f[1] = 1; f[0] = 1;
    for (let i=2;i<=n;i++){
        f[i] = 0;
        for (let j=1;j<=i;j++){
            let leftTrees = f[j-1], rightTrees = f[i-j];
            f[i] += leftTrees * rightTrees;
        }
    }
    return f[n];
};
