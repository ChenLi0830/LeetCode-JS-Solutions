/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
    let f=[], g=[], ans = 0;
    for (let i=0;i<prices.length;i++){
        let curMin = Math.pow(2,31); f[i] = 0;
        for (let j=0;j<=i;j++){
            if (f[i]<prices[j]-curMin) f[i] = prices[j] - curMin;
            if (curMin>prices[j]) curMin = prices[j];
        }
    }
    for (let i=prices.length-1;i>=0;i--){
        let curMax = 0; g[i] = 0;
        for (let j = prices.length-1;j>=i;j--){
            if (g[i]<curMax-prices[j]) g[i] = curMax-prices[j];
            if (curMax<prices[j]) curMax = prices[j];
        }
    }
    g[prices.length] = 0;
    for (let i=0;i<prices.length;i++) ans = Math.max(ans, f[i]+g[i+1]);
    return ans;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let f=[], g=[], ans = 0, curMin = prices[0], curMax = prices[prices.length-1];
    f[0] = 0; g[prices.length-1] = 0;
    for (let i=1;i<prices.length;i++){
        f[i] = Math.max(prices[i] - curMin, f[i-1]);
        if (curMin>prices[i]) curMin = prices[i];
    }
    for (let i=prices.length-2;i>=0;i--){
        g[i] = Math.max(curMax-prices[i], g[i+1]);
        if (curMax<prices[i]) curMax = prices[i];
    }
    g[prices.length] = 0;
    for (let i=0;i<prices.length;i++) ans = Math.max(ans, f[i]+g[i+1]);
    return ans;
};