/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    if (prices.length===0) return 0;
    let f = [], ans = 0;
    if (k>prices.length/2) k = Math.trunc(prices.length/2);
    f[prices.length] = [0];
    for (let i=prices.length-1;i>=0;i--){
        f[i] = []; f[i][0] = 0;
        for (let j=1;j<=k;j++){
            if (f[i+1][j]!==undefined) f[i][j] = f[i+1][j];
            else f[i][j] = -Infinity;
            for (let k=i+1;k<prices.length;k++){
                if (f[k+1][j-1]===undefined) break;
                f[i][j] = Math.max(f[i][j], f[k+1][j-1]+prices[k]-prices[i]);
            }
            if (f[i][j] === -Infinity) {
                f[i][j] = undefined;
                break;
            }
        }
    }
    for (let i=0;i<=k;i++){
        if (f[0][i]===undefined) break;
        ans = Math.max(ans, f[0][i]);
    }
    return ans;
};

var maxProfit = function(k, prices) {
    if (prices.length===0) return 0;
    let f = [], ans = 0, localMax =[];
    
    if (k>=prices.length/2){
        for (let i=1;i<prices.length;i++){
            if (prices[i]>prices[i-1]) ans += prices[i]-prices[i-1];
        }
        return ans;
    }
    
    localMax[1] = prices[prices.length-1]; f[prices.length] = [];
    for (let i=prices.length-1;i>=0;i--){
        f[i] = []; f[i][0] = 0;
        for (let j=1;j<=k;j++){
            if (f[i+1][j-1]===undefined) {break;}
            if (localMax[j]!==undefined) {
                f[i][j] = f[i+1][j]!==undefined ? f[i+1][j]:-Infinity;
                f[i][j] = Math.max(f[i][j], localMax[j]-prices[i]);
            }
            if (localMax[j]===undefined || prices[i]+f[i+1][j-1]>localMax[j]) localMax[j] = prices[i]+f[i+1][j-1];
        }
    }
    for (let i=0;i<=k;i++){
        if (f[0][i]===undefined) break;
        ans = Math.max(ans, f[0][i]);
    }
    return ans;
};

maxProfit(3,[1,3,2,5,9,8,7,8,3,7,7]);