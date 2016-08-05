/**
 * @param {string} s
 * @return {number}
 */
var calculate3 = function(s) {
    s = s.replace(/\s/g, "");
    s = s.replace(/-/g, "*");
    let ans = parseInt(doCalc(s));
    return ans;
    
    function doCalc(str){
        while (str.indexOf("(")!==-1){
            let start = str.indexOf("("), end, count = 1;
            for (let i=start+1;i<str.length;i++){
                if (str[i]==="(") count++;
                else if (str[i]===")") count--;
                if (count===0) {end = i; break;}
            }
            str = str.slice(0, start)+doCalc(str.slice(start+1, end))+str.slice(end+1);
        }
        let num1End = str.search(/[+*]/g);
        if (num1End===-1) return str;
        
        let plus = str.indexOf("+", num1End+1), minus = str.indexOf("*", num1End+1);
        plus = plus===-1 ? Infinity : plus;
        minus = minus===-1? Infinity : minus;
        let num2End = Math.min(plus, minus);
        if (num2End===Infinity) num2End = str.length;
        let n1 = parseInt(str.slice(0, num1End)),
            n2 = parseInt(str.slice(num1End+1, num2End));
        if (str[num1End]==="+") return doCalc((n1+n2).toString()+str.slice(num2End));
        else return doCalc((n1-n2).toString()+str.slice(num2End));
    }
};

var calculate2 = function(s) {
    s = s.replace(/\s/g, "");
    s = s.replace(/-/g, "*");
    let ans = parseInt(doCalc(s));
    return ans;
    
    function doCalc(str) {
        while (str.indexOf("(") !== -1) {
            let start = str.indexOf("("), end, count = 1;
            for (let i = start + 1; i < str.length; i++) {
                if (str[i] === "(") count++;
                else if (str[i] === ")") count--;
                if (count === 0) {
                    end = i;
                    break;
                }
            }
            str = str.slice(0, start) + doCalc(str.slice(start + 1, end)) + str.slice(end + 1);
        }
        let nums = [], ops = [], num = "";
        for (let i = 0; i < str.length; i++) {
            if (str[i] === "+" || str[i] === "*") {
                nums.push(parseInt(num));
                num = "";
                ops.push(str[i]);
            } else {
                num += str[i];
            }
        }
        nums.push(parseInt(num));
        let value = nums[0];
        for (let i = 0; i < ops.length; i++) {
            if (ops[i] === "+") {
                value += nums[i + 1];
            } else {
                value -= nums[i + 1];
            }
        }
        return value.toString();
    }
};

var calculate = function(s) {
    s = s.replace(/\s/g, "");
    let n1 = "", n2 = "", lastOp="", stack = [];
    for (let i=0;i<s.length;i++){
        if (s[i]==="+" || s[i]==="-"){
            if (lastOp!==""){
                n1 = doCalc(n1, lastOp, n2);
                lastOp = s[i];
                n2 = "";
            } else {
                lastOp = s[i];
            }
        } else if (s[i]==="("){
            if (lastOp!=="") {
                stack.push(n1);
                stack.push(lastOp);
                n1 = "";
                lastOp = "";
            } else {
                stack.push("0");
                stack.push("+");
                n1 = "";
                lastOp = "";
            }
        } else if (s[i]===")"){
            if (stack.length>0){
                n2 = lastOp!=="" ? doCalc(n1, lastOp, n2) : n1;
                lastOp = stack.pop();
                n1 = stack.pop();
            } else {
                n1 = lastOp!=="" ? doCalc(n1, lastOp, n2) : n1;
                lastOp = "";
                n2 = "";
            }
        } else { // digits 0 to 9
            if (lastOp==="") n1 = n1+s[i];
            else n2 = n2+s[i];
        }
    }
    let ans = lastOp!=="" ? doCalc(n1, lastOp, n2):parseInt(n1);
    return ans;
    
    function doCalc(n1, lastOp, n2){
        if (lastOp==="+") return parseInt(n1)+parseInt(n2);
        else return parseInt(n1) - parseInt(n2);
    }
};

console.assert(calculate("   1 - 3 1 ")===-30);
console.assert(calculate("1 +1")===2);
console.assert(calculate("1+(1)")===2);
console.assert(calculate("1-(1+1)+7")===6);
console.assert(calculate("2-(1+3)-((1-6)+1)")===2);


    