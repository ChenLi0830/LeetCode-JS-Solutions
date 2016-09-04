/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let f = []; f[0] = 0;
    for (let i=1;i<=amount;i++){
        f[i] = -1;
        coins.forEach((c)=>{
            if ((i-c >=0 && f[i-c]>-1) && (f[i]===-1 || f[i-c]+1<f[i])){
                f[i] = f[i-c]+1;
            }
        })
    }
    return f[amount];
};

coinChange([1, 2, 5], 11);