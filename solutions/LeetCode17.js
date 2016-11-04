/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var d2c=[], now=[], last = [""];
    d2c[0] = [" "];
    d2c[1] = [""];
    d2c[2] = ["a", "b", "c"];
    d2c[3] = ["d", "e", "f"];
    d2c[4] = ["g", "h", "i"];
    d2c[5] = ["j", "k", "l"];
    d2c[6] = ["m", "n", "o"];
    d2c[7] = ["p", "q", "r", "s"];
    d2c[8] = ["t", "u", "v"];
    d2c[9] = ["w", "x", "y", "z"];

    for (var i=0;i<digits.length;i++){
        now = []; const c = digits.charAt(i);
        for (var j=0;j<last.length;j++){
            for (var k=0;k<d2c[c-'0'].length;k++){
                var ele = last[j].concat(d2c[c-'0'][k]);
                now = now.concat(ele);
            }
        }
        last = now;
    }
    return now;
};

//console.assert(letterCombinations("")===[]);
console.assert(letterCombinations("23")===["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]);

