/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let ans = (numerator*denominator< 0) ? "-":"";
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    
    let n = Math.trunc(numerator/denominator);
    ans += n.toString()+".";
    numerator -= n*denominator;
    
    let ansTemp = "", map = new Map(), index = 0;
    while (numerator>0){
        numerator*=10;
        if (numerator !== 0 && map.has(numerator)){
            ansTemp = ansTemp.slice(0,map.get(numerator)) + "("+ansTemp.slice(map.get(numerator))+")";
            break;
        } else {
            map.set(numerator, index);
            n = Math.trunc(numerator/denominator);
            ansTemp += n.toString();
            numerator -= n*denominator;
            index++;
        }
    }
    if (index===0) ans = ans.slice(0,ans.length-1);
    return ans+ansTemp;
};
