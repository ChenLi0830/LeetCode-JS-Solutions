/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide2 = function (dividend, divisor) {
    var minusToDivide = [],
        index = 0,
        ans = 0,
        negative = (dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (divisor === 0) return Math.pow(2, 31) - 1;

    minusToDivide[0] = [divisor, 1];

    for (var i = 0; i < 32; i++) {
        if (minusToDivide[index][0] + minusToDivide[index][0] > Math.pow(2, 31) - 1) {
            break;
        }
        minusToDivide[index + 1] = [minusToDivide[index][0] + minusToDivide[index][0],
            minusToDivide[index][1] + minusToDivide[index][1]];
        index++;
    }

    while (dividend >= divisor) {
        for (i = index; i >= 0; i--) {
            if (dividend - minusToDivide[i][0] >= 0) {
                index = i;
                dividend -= minusToDivide[index][0];
                ans += minusToDivide[index][1];
            }
        }
    }

    ans = negative ? -ans : ans;
    if (ans > Math.pow(2, 31) - 1 || ans < -Math.pow(2, 31)) {
        ans = Math.pow(2, 31) - 1
    }
    return ans;
};


var divide = function (dividend, divisor) {
    var ans = 0,
        negative = (dividend < 0 ^ divisor < 0);

    if (divisor === 0 || (dividend === -Math.pow(2, 31) && divisor === -1)) return Math.pow(2, 31) - 1;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend >= divisor) {
        var temp = divisor, multiple = 1;
        while (dividend > temp << 1 && Math.pow(2,30)>temp) {
            temp = temp << 1;
            multiple = multiple << 1;
        }
        dividend -= temp;
        ans += multiple;
    }
    return negative ? -ans : ans;
};

//divide(100, 0);
//divide(100, 10);
//divide(100, 30);
//divide(20, 30);
//divide(-10, 5);
//divide(10, -5);
//divide(-10, -5);
//divide(-Math.pow(2,31)+1, 1);
divide(-Math.pow(2, 31), -1);
divide(-Math.pow(2, 31), 1);