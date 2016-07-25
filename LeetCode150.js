/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN3 = function(tokens) {
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

var evalRPN2 = function(tokens) {
    let head = new DoubleListNode(-1), node = head, count = 0;
    for (let i=0;i<tokens.length;i++){
        if (!isOperator(tokens[i])) tokens[i] = parseInt(tokens[i]);
        else count++;
        node.next = new DoubleListNode(tokens[i]);
        node.next.prev = node;
        node = node.next;
    }
    
    node = head.next; node.prev = null;
    while (count>0){
        while(!isOperator(node.val)){
            node = node.next;
        }
        let num, n1 = node.prev.prev.val, n2 = node.prev.val;
        switch (node.val){
            case "+": num = n1+n2;break;
            case "-": num = n1-n2;break;
            case "*": num = n1*n2;break;
            case "/": num = Math.trunc(n1/n2);break;
        }
        let curNode = node.prev.prev; curNode.val = num;
        curNode.next = node.next;
        if (node.next) node.next.prev = curNode;
        
        node = curNode;
        count--;
    }
    return node.val;
    
    function isOperator(c){
        return c==="+" || c==="-" || c==="*" || c==="/";
    }
};

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let s = [], index = 0;
    for (let i=0;i<tokens.length;i++){
        if (tokens[i]==="+"){
            let n1 = s[--index], n2 = s[--index];
            s[index++] = n2 + n1;
        } else if (tokens[i]==="-"){
            let n1 = s[--index], n2 = s[--index];
            s[index++] = n2 - n1;
        } else if (tokens[i] ==="*"){
            let n1 = s[--index], n2 = s[--index];
            s[index++] = n2 * n1;
        } else if (tokens[i] ==="/"){
            let n1 = s[--index], n2 = s[--index];
            s[index++] = Math.trunc(n2/n1);
        } else {
            s[index++] = parseInt(tokens[i]);
        }
    }
    return s[0];
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);