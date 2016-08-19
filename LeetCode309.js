/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function(prices) {
    if (prices.length<2) return 0;
    let f = [];
    f[prices.length] = []; f[prices.length][0] = 0; f[prices.length][1] = 0;
    f[prices.length+1] = []; f[prices.length+1][0] = 0; f[prices.length+1][1] = 0;
    
    for (let i=prices.length-1;i>=0;i--){
        f[i] = [];
        f[i][0] = Math.max(f[i+1][0], f[i+1][1]);
        f[i][1] = 0;
        for (let j=i+1;j<prices.length;j++){
            f[i][1] = Math.max(f[i][1], prices[j]-prices[i]+Math.max(f[j+1][0], f[j+2][1]));
        }
    }
    return Math.max(f[0][0], f[0][1]);
};

var maxProfit = function(prices) {
    if (prices.length<2) return 0;
    let hasStock=[], soldStock=[], canBuyStock = [], max = 0;
    prices[-1] = 0;
    
    canBuyStock[-1] = 0; hasStock[-1] = -Infinity; soldStock[-1] = -Infinity;
    soldStock[-2] = -Infinity;
    
    for (let i=0;i<prices.length;i++){
        canBuyStock[i] = Math.max(canBuyStock[i-1], soldStock[i-2]);
        hasStock[i] = Math.max(hasStock[i-1], canBuyStock[i]-prices[i]);
        soldStock[i] = hasStock[i-1] + prices[i];
    }
    
    return Math.max(soldStock[prices.length-1], soldStock[prices.length-2], canBuyStock[prices.length-1]);
};


// maxProfit([1,2,3,0,2]);
maxProfit([1,4,2]);
