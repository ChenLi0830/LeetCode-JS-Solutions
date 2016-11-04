/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators3 = function(num, target) {
    let ans = [];
    doSearch(num, "", false);
    return ans;
    
    function doSearch(str, solution, canAddOp){
        if (str.length===0){
            let result = evaluate(solution);
            if (result===target){
                ans.push(solution.slice(0));
            }
            return;
        }
        if (canAddOp){
            solution = solution+"*";
            doSearch(str, solution, false);
            solution = solution.slice(0, solution.length-1);
            
            solution = solution+"+";
            doSearch(str, solution, false);
            solution = solution.slice(0, solution.length-1);
        
            solution = solution+"-";
            doSearch(str, solution, false);
            solution = solution.slice(0, solution.length-1);
        }
        
        if (solution[solution.length-1]!=="0"){
            solution = solution + str[0];
            doSearch(str.slice(1), solution, true);
            solution = solution.slice(0, solution.length-1);
        }
    }
    
    function evaluate(equ){
        let stack = [], n1 = "", n2 = "", op = "";
        for (let i=0;i<equ.length;i++){
            if (equ[i].search(/\d/)!==-1){
                if (op.length===0) n1 += equ[i];
                else n2 += equ[i];
            } else {
                if (op.length===0) op = equ[i];
                else if (op==="*" || equ[i]==="+" || equ[i]==="-"){
                    n1 = doCalc(n1, n2, op).toString();
                    if (equ[i]!=="*"){
                        while (stack.length>0){
                            n2 = n1;
                            op = stack.pop();
                            n1 = stack.pop();
                            n1 = doCalc(n1, n2, op);
                        }
                    }
                    n2 = "";
                    op = equ[i];
                } else {
                    stack.push(n1);
                    stack.push(op);
                    n1 = n2;
                    op = equ[i];
                    n2 = "";
                }
            }
        }
        n1 = doCalc(n1,n2,op).toString();
        while (stack.length>0){
            n2 = n1;
            op = stack.pop();
            n1 = stack.pop();
            n1 = doCalc(n1, n2, op);
        }
        return parseInt(n1);
    }
    
    function doCalc(n1, n2, op){
        if (op==="") return parseInt(n1);
        
        let a = parseInt(n1), b = parseInt(n2);
        switch(op){
            case "+": return a+b;
            case "-": return a-b;
            case "*": return a*b;
        }
    }
};


var addOperators2 = function(num, target) {
    let ans = [];
    doSearch("", "", 0);
    return ans;
    
    function doSearch(solution, curNum, index){
        if (index===num.length){
            let result = evaluate(solution);
            if (result===target){
                ans.push(solution.slice(0));
            }
            return;
        }
        if (curNum.length>0){
            doSearch(solution+"*", "", index);
            doSearch(solution+"+", "", index);
            doSearch(solution+"-", "", index);
        }
        
        if (curNum[0]!=="0"){
            doSearch(solution+num[index], curNum+num[index], index+1);
        }
    }
    
    function evaluate(equ){
        let stack = [], n1 = "", n2 = "", op = "";
        for (let i=0;i<equ.length;i++){
            if (equ[i].search(/\d/)!==-1){
                if (op.length===0) n1 += equ[i];
                else n2 += equ[i];
            } else {
                if (op.length===0) op = equ[i];
                else if (op==="*" || equ[i]==="+" || equ[i]==="-"){
                    n1 = doCalc(n1, n2, op).toString();
                    if (equ[i]!=="*"){
                        while (stack.length>0){
                            n2 = n1;
                            op = stack.pop();
                            n1 = stack.pop();
                            n1 = doCalc(n1, n2, op);
                        }
                    }
                    n2 = "";
                    op = equ[i];
                } else {
                    stack.push(n1);
                    stack.push(op);
                    n1 = n2;
                    op = equ[i];
                    n2 = "";
                }
            }
        }
        n1 = doCalc(n1,n2,op).toString();
        while (stack.length>0){
            n2 = n1;
            op = stack.pop();
            n1 = stack.pop();
            n1 = doCalc(n1, n2, op);
        }
        return parseInt(n1);
    }
    
    function doCalc(n1, n2, op){
        if (op==="") return parseInt(n1);
        
        let a = parseInt(n1), b = parseInt(n2);
        switch(op){
            case "+": return a+b;
            case "-": return a-b;
            case "*": return a*b;
        }
    }
};


var addOperators = function(num, target) {
    let ans = [], first = "";
    for (let i=0;i<num.length;i++){
        if (first!=="0"){
            first += num[i];
            doSearch(first, "0", first, i+1);
        }
    }
    return ans;
    
    function doSearch(solution, left, cur, index){
        if (index===num.length) {
            let result = parseInt(left)+parseInt(cur);
            if (result===target) ans.push(solution);
            return;
        }
        let next = "";
        for (let i=index;i<num.length;i++) {
            if (next!=="0"){
                next += num[i];
                doSearch(solution+"+"+next, (parseInt(left)+parseInt(cur)).toString(), next, i+1);
                doSearch(solution+"-"+next, (parseInt(left)+parseInt(cur)).toString(), -next, i+1);
                doSearch(solution+"*"+next, left, (parseInt(cur)*parseInt(next)).toString(), i+1);
            }
        }
    }
};

// first = 1;
//
// left = "3"
// cur = "3";
// next = "";
// solution = "1+2+3"

addOperators("123", 6);
addOperators("105", 5);
addOperators("232", 8);
addOperators("00", 0);
addOperators("1000000009", 9);


// addOperators("3456237490", 9191);
addOperators("123456789", 45);
addOperators("2147483647", 2147483647);

