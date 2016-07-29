/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd2 = function(m, n) {
    let max = 2147483647, min, bitNum=[];
    min = findMin(max);
    bitNum[30] = [min, max];
    for (let i=29;i>=0;i--){
        max = bitNum[i+1][0]-1; min = findMin(max);
        bitNum[i] = [min, max];
    }
    let ans = "0";
    for (let i=30;i>=0;i--){
        let hasBit = false;
        if (bitNum[i][0]<=m && n<=bitNum[i][1]) {
            hasBit = true;
            n-=bitNum[i][0];
            m-=bitNum[i][0];
        }
        ans += hasBit?"1":"0";
    }
    return parseInt(ans,2);
    
    function findMin(max){
        let str = max.toString(2), minStr = "",  addedOne = false;
        for (let i=0;i<str.length;i++){
            if (str[i]==="0" || addedOne) minStr+="0";
            else {
                minStr += "1";
                addedOne = true;
            }
        }
        return parseInt(minStr, 2);
    }
};

var rangeBitwiseAnd = function(m, n) {
    let max = 2147483647, min, bitNum=[];
    bitNum[30] = [(max+1)/2, max];
    for (let i=29;i>=0;i--){
        max = bitNum[i+1][0]-1; min = (max+1)/2;
        bitNum[i] = [min, max];
    }
    let ans = 0;
    for (let i=30;i>=0;i--){
        let hasBit = false;
        if (bitNum[i][0]<=m && n<=bitNum[i][1]) {
            hasBit = true;
            n-=bitNum[i][0];
            m-=bitNum[i][0];
        }
        ans += hasBit?bitNum[i][0]:0;
    }
    return ans;
};

rangeBitwiseAnd(5,7);
rangeBitwiseAnd(12312,12352);
rangeBitwiseAnd(77,122);