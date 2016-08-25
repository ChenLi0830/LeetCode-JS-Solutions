/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree2 = function(n) {
    while (n%3===0 && n>0){
        n = n/3;
    }
    return n===1;
};

var isPowerOfThree = function(n) {
    return (n>0 && 3486784401%n===0);
};