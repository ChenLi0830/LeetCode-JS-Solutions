/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return Math.pow(4,16) % num === 0 && Math.sqrt(num) === Math.trunc(Math.sqrt(num))
};

