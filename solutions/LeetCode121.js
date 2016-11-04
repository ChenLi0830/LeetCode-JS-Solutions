/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let curMin = Math.pow(2,31), ans = 0;
    for (let i=0;i<prices.length;i++){
        if (prices[i]-curMin>ans) ans = prices[i]-curMin;
        if (prices[i]<curMin) curMin = prices[i];
    }
    return ans;
};