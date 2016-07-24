/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    str = str.trim();// Trim heading and trailing white space
    str = str.replace(/\s+/g, " ");// Change multiple spaces into a single one
    str = str.split(" ").reverse().join(" "); // reverse the str
    return str;
};

reverseWords("the sky is blue");
reverseWords("  the   sky   is       blue  ");