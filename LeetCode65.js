/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber2 = function(s) {
    s = s.trim();
    let ans = false, matchStr;

    matchStr = s.match(/(\+|\-)?(\d+(\.\d*)?|\d*\.\d+)(e(\+|\-)?\d+)?/);
    ans = ans || matchStr && matchStr[0].length === s.length;
    return !!ans;
};

var isNumber = function (s) {
    s = s.trim();
    let ans, matchStr;

    matchStr = s.match(/[+-]?(\d+(\.\d*)?|\d*\.\d+)([eE][+-]?\d+)?/);
    ans = matchStr && matchStr[0].length === s.length;
    return !!ans;
};

console.assert(isNumber("1."));
console.assert(isNumber(".1"));
console.assert(isNumber("-.1"));
console.assert(isNumber("-0"));
console.assert(isNumber("12321"));
console.assert(isNumber("-12321"));
console.assert(isNumber("+12321"));
console.assert(isNumber("-112312.12312"));
console.assert(isNumber("+112312e-12312"));
console.assert(isNumber("+112.312e-1212"));
console.assert(isNumber("-.1e-12"));

console.assert(!isNumber("."));
console.assert(!isNumber("e9"));
console.assert(!isNumber("abc"));
console.assert(!isNumber("12a321"));
console.assert(!isNumber("12 321"));
console.assert(!isNumber("+112.312e-1212.123"));