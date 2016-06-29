/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var leftCount = [], ans = 0, validLen = 0, valid=[], leftStack = [], stackIndex = 0;
    leftCount[-1] = 0;
    for (var i=0;i<s.length;i++){
        if (s[i]==='('){
            leftCount[i] = leftCount[i-1]+1;
            stackIndex++;
            leftStack[stackIndex-1]=i;
        } else if (s[i]===')'){
            if (leftCount[i-1]>0){
                leftCount[i] = leftCount[i-1]-1;
                valid[i] = true;
                valid[leftStack[stackIndex-1]] = true;
                stackIndex--;
            } else {
                leftCount[i] = 0;
            }
        }
    }

    for (i=0; i<s.length;i++){
        if (valid[i]) {
            validLen++;
        } else {
            if (validLen>ans) ans = validLen;
            validLen = 0;
        }
    }
    if (validLen>ans) ans = validLen;
    return ans;
};

console.assert(longestValidParentheses("")===0);
console.assert(longestValidParentheses("(((((")===0);
console.assert(longestValidParentheses(")))))")===0);
console.assert(longestValidParentheses(")))))(((((")===0);
console.assert(longestValidParentheses(")))))()(((((")===2);
console.assert(longestValidParentheses(")()()(()))()")===8);
console.assert(longestValidParentheses("()(()")===2);