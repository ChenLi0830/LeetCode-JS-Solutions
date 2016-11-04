/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let stack = [], n1 = "", n2 = "", op = "";
    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case "+":
            case "-":
                if (op === "") op = s[i];
                else {
                    n1 = doCalc(n1, n2, op);
                    n2 = "";
                    op = s[i];
                }
                break;
            case "*":
            case "/":
                if (op === "") op = s[i];
                else if (op === "*" || op === "/") {
                    n1 = doCalc(n1, n2, op);
                    n2 = "";
                    op = s[i];
                } else { // op ==="+" || "-"
                    if (op==="-"){
                        n2 = "-"+n2;
                        op = "+";
                    }
                    stack.push(n1);
                    stack.push(op);
                    n1 = n2;
                    n2 = "";
                    op = s[i];
                }
                break;
            case "(":
                stack.push(n1 === "" ? "0" : n1);
                stack.push(op === "" ? "+" : op);
                n1 = "";
                op = "";
                n2 = "";
                break;
            case ")":
                if (op !== "") {
                    n1 = doCalc(n1, n2, op);
                    n2 = "";
                    op = "";
                }
                n2 = n1;
                op = stack.pop();
                n1 = stack.pop();
                break;
            default: //0-9
                if (op === "") n1 = n1 + s[i];
                else n2 = n2 + s[i];
                break;
        }
    }
    if (op!=="") n1 = doCalc(n1, n2, op);
    if (stack.length>0) {
        stack.push(n1);
        n1 = stack.shift();
        while (stack.length>0){
            op = stack.shift();
            n2 = stack.shift();
            n1 = doCalc(n1,n2,op);
        }
    }
    return parseInt(n1);
    
    function doCalc(n1,n2,op){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        switch (op){
            case "+":
                return (n1+n2).toString();
            case "-":
                return (n1-n2).toString();
            case "*":
                return (n1*n2).toString();
            case "/":
                return Math.trunc(n1/n2).toString();
        }
    }
};




console.assert(calculate("282-1*2*13-30-2*2*2/2-95/5*2+55+804+3024")===-24);
console.assert(calculate("1*2-3/4+5*6-7*8+9/10")===-24);
console.assert(calculate("12-5*(3+5-(26/11-1))")===-23);