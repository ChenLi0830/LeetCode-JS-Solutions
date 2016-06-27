/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = "";
    for (var i=0;i<s.length;i++){
        var c = s[i];
        if (c==='{' || c==='(' || c==='['){
            stack = stack.concat(c);
        } else if ((stack.length>0) &&
            (stack[stack.length-1]==='{' && c==='}' ||
            stack[stack.length-1]==='[' && c===']' ||
            stack[stack.length-1]==='(' && c===')')) {
            stack = stack.substr(0,stack.length-1);
        } else {
            return false;
        }
    }
    return stack.length===0;
};

console.assert(isValid("()[]{}")===true);
console.assert(isValid("([][{}])")===true);
console.assert(isValid("(([][{}])")===false);
console.assert(isValid("([][{)}])")===false);
console.assert(isValid("([][{}])]")===false);
console.assert(isValid("([{{}})]")===false);