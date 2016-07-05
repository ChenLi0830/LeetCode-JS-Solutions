/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary2 = function (a, b) {
    let ans = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
    return ans;
};

var addBinary = function (a, b) {
    let addOne = false, result = [];
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        let i1 = a.length - 1 - i, i2 = b.length - 1 - i;
        let c1 = i1 >= 0 ? a[i1] : "0", c2 = i2 >= 0 ? b[i2] : "0";
        result[i] = ((c1 === "1" ? 1 : 0) + (c2 === "1" ? 1 : 0) + (addOne ? 1 : 0)) % 2;
        addOne = ((c1 === "1" ? 1 : 0) + (c2 === "1" ? 1 : 0) + (addOne ? 1 : 0)) >= 2;
    }
    if (addOne) {
        result[Math.max(a.length, b.length)] = "1";
    }
    result = result.reverse().join("");
    return result;
};


//i=0 to 2;
//i1 = a.length-1-i;
//i2 = b.length-1-i;

//addBinary("0", "1");
addBinary("11", "1");
addBinary("101", "1");