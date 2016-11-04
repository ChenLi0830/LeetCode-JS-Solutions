/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord2 = function(s) {
    s = s.trim();
    if (s.length===0) return 0;

    let index = s.length-1;
    while (index>=0 && s[index]!=" ") index--;
    return s.length-1-index;
};

var lengthOfLastWord = function(s) {
    s = s.trim();
    return s.length-1-s.lastIndexOf(" ");
};

//lengthOfLastWord("    ");
//lengthOfLastWord("asdf  ");
//lengthOfLastWord("asdf");
//lengthOfLastWord(" asdf  ");
//lengthOfLastWord("  asdf  ");
//lengthOfLastWord("   asdf asdff  ");
//lengthOfLastWord("asdf  asdff  ");
lengthOfLastWord("a");
lengthOfLastWord("a bb");
lengthOfLastWord("b a b");