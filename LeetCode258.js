/**
 * @param {number} num
 * @return {number}
 */
var addDigits2 = function(num) {
    while (num>=10){
        let temp = num, nextNum = 0;
        while (temp>0){
            nextNum += temp%10;
            temp = Math.trunc(temp/10);
        }
        num = nextNum;
    }
    return num;
};

var addDigits = function(num) {
    if (num===0) return 0;
    return num%9===0 ? 9 : num%9
};
