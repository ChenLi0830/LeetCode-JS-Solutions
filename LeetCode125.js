/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase().replace(/\W/g,"");
    return s.split("").reverse().join("")===s;
};