/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    "use strict";
    let count = 0, zeroIndex = -1, changesNeeded = 0, ans = [];
    for (let i=0;i<s.length;i++) {
        if (s[i]==="(") count++;
        else if (s[i]===")") {
            {
                if (count>0) {
                    count--;
                    if (count===0) zeroIndex = i;
                }
                else { // extra ')'
                    changesNeeded++;
                    for (let j=0;j<=i;j++)
                        if (s[j]===")") s = s.slice(0, j) + "]" + s.slice(j+1);
                }
            }
        }
    }
    if (count>0) { // extra '('
        changesNeeded+=count;
        for (let j=zeroIndex+1;j<s.length;j++)
            if (s[j]==="(") s = s.slice(0, j) + "[" + s.slice(j+1);
    }
    
    //BFS
    let curLevel = new Set([s]), nextLevel;
    for (let i=0;i<changesNeeded;i++){
        nextLevel = new Set();
        curLevel.forEach((str)=>{
            for (let i=0;i<str.length;i++){
                if (str[i]==="[" || str[i]==="]"){
                    let modifiedStr = str.slice(0,i) + str.slice(i+1);
                    nextLevel.add(modifiedStr);
                }
            }
        });
        curLevel = nextLevel;
    }
    
    curLevel.forEach((str)=>{
        if (isValid(str)) {
            let realStr = str;
            realStr = realStr.replace(/\[/g, "(");
            realStr = realStr.replace(/\]/g, ")");
            ans.push(realStr);
        }
    });
    
    return ans;
    
    function isValid(str){
        let count = 0;
        for (let i=0;i<str.length;i++){
            if (str[i]==="(" || str[i]==="[") count++;
            else if (str[i]===")" || str[i]==="]") {
                count--;
                if (count<0) return false;
            }
        }
        return count===0;
    }
};

// removeInvalidParentheses("()())()");
// removeInvalidParentheses("(a)())()");
// removeInvalidParentheses(")(");
removeInvalidParentheses("(");