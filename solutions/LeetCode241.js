/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute2 = function(input) {
    let ans = [], usedEquation = new Set();
    input = input.replace(/-/g, "_");
    
    doSearch(input);
    return ans;
    
    function doSearch(input){
        let calculated = false; let start = 0;
        for (let i=0;i<input.length;i++){
            if (input[i]==="+"||input[i]==="_"||input[i]==="*"){
                calculated = true;
                let num1 = input.slice(start, i);
                let num2 = "", end = input.length-1;
                for (let j=i+1;j<input.length;j++){
                    if (input[j]==="+"||input[j]==="_"||input[j]==="*") {
                        end = j-1;
                        break;
                    }
                    num2+=input[j];
                }
                let result = doCalc(num1,num2,input[i]);
                let newInput = input.slice(0,start) + result.toString() + input.slice(end+1);
                if (!usedEquation.has(newInput)){
                    usedEquation.add(newInput);
                    doSearch(newInput);
                }
                start = i+1;
            }
        }
        if (!calculated) ans.push(parseInt(input));
    }
    
    function doCalc(n1,n2,op){
        n1 = parseInt(n1);
        n2 = parseInt(n2);
        switch(op){
            case "+": return n1+n2;
            case "_": return n1-n2;
            case "*": return n1*n2;
        }
    }
};

/**
 * @param {string} input
 * @return {number[]}
 */
var diffWaysToCompute = function(input) {
    let ans = [], num = "";
    if (input.search(/[\+\-\*]/)===-1) return [parseInt(input)];
    for (let i=0;i<input.length;i++){
        if (input[i].search(/[\+\-\*]/)===0){
            let nums1 = diffWaysToCompute(input.slice(0,i)),
                nums2 = diffWaysToCompute(input.slice(i+1));
            nums1.forEach((num1)=>{
                nums2.forEach((num2)=>{
                    switch (input[i]){
                        case "+": ans.push(num1+num2);break;
                        case "-": ans.push(num1-num2);break;
                        case "*": ans.push(num1*num2);break;
                    }
                })
            })
        }
    }
    return ans;
};



diffWaysToCompute("1-1");
diffWaysToCompute("2-1-1");
diffWaysToCompute("2*3-4*5");

