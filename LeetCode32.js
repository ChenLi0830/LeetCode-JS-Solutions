/**
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses2 = function(s) {
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

var longestValidParentheses = function(s) {
    var stack = [], stackCount = 0;
    for (var i=0;i< s.length;i++){
        if (s[i]==='('){
            stackCount++;
            stack[stackCount-1] = i;
        } else { // s[i]===')'
            if (s[stack[stackCount-1]]==='(') {// Find match pair
                stackCount -- ;
            } else {
                stackCount++;
                stack[stackCount-1] = i;
            }
        }
    }

    var ans = 0;
    stack[-1] = -1; stackCount++; stack[stackCount-1] = s.length;
    for (i=0;i<stackCount;i++){
        ans = Math.max(ans, stack[i]-stack[i-1]-1);
    }

    return ans;
};

//console.assert(longestValidParentheses("")===0);
//console.assert(longestValidParentheses("(((((")===0);
//console.assert(longestValidParentheses(")))))")===0);
console.assert(longestValidParentheses(")))))(((((")===0);
console.assert(longestValidParentheses(")))))()(((((")===2);
console.assert(longestValidParentheses(")()()(()))()")===8);
console.assert(longestValidParentheses("()(()")===2);
console.assert(longestValidParentheses("((((((()(()")===2);
console.assert(longestValidParentheses("))()()(())")===8);
console.assert(longestValidParentheses("()()())))")===6);
console.assert(longestValidParentheses(")))(((())))(((")===8);