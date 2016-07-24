/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    while (tokens.length>1){
        let i=0, newTokens = [];
        while(!isOperator(tokens[i])){
            i++;
        }
        let num;
        switch (tokens[i]){
            case "+": num = parseInt(tokens[i-2])+parseInt(tokens[i-1]);break;
            case "-": num = parseInt(tokens[i-2])-parseInt(tokens[i-1]);break;
            case "*": num = parseInt(tokens[i-2])*parseInt(tokens[i-1]);break;
            case "/": num = Math.trunc(parseInt(tokens[i-2])/parseInt(tokens[i-1]));break;
        }
        for (let j=0;j<tokens.length;j++){
            if (j<i-2||j>i){
                newTokens[newTokens.length] = tokens[j];
            } else if (j===i){
                newTokens[newTokens.length] = num;
            }
        }
        tokens = newTokens;
    }
    return parseInt(tokens[0]);
    
    function isOperator(c){
        return c==="+" || c==="-" || c==="*" || c==="/";
    }
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);